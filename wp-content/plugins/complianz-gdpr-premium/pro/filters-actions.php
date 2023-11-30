<?php
defined('ABSPATH') or die("you do not have access to this page!");
/**
 * NON ADMIN FUNCTIONS
 */

/**
 * Lower sync interval to 1 month
 * @param int $interval
 *
 * @return int
 */
function cmplz_premium_sync_interval($interval){
	return 1;
}
add_filter('cmplz_sync_interval', 'cmplz_premium_sync_interval');
add_filter('cmplz_scan_interval', 'cmplz_premium_sync_interval');

/**
 * Do remote cookie scan for third party cookies
 * @return void
 */
function cmplz_remote_cookie_scan(){
	if (strpos( site_url(), 'localhost')!==false) {
		error_log("The third party cookie scan does not support localhost environments!");
		return;
	}

	if ( !function_exists('curl_init') ) {
		error_log("missing CURL");
		return;
	}

	$url = COMPLIANZ::$cookie_admin->get_remote_scan_url();
	$data = [
		'is_manual' => !wp_doing_cron(),
		'urls' => [$url],
		'license' => COMPLIANZ::$license->maybe_decode(get_site_option('cmplz_license_key')),
	];
	$eta = 0;
	if (function_exists('hrtime')) $eta=-hrtime(true);
	$json = json_encode($data);
	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_URL, 'https://scan.cookiedatabase.org/cookies/' );
	curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, "POST" );
	curl_setopt( $ch, CURLOPT_POST, 1 );
	curl_setopt( $ch, CURLOPT_POSTFIELDS, $json );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt( $ch, CURLOPT_HTTPHEADER, array(
			'Content-Type: application/json',
			'Content-Length: ' . strlen( $json )
		)
	);
	$result = curl_exec( $ch );
	//check if is json
	$data = json_decode($result);

	if (function_exists('hrtime')) $eta+=hrtime(true);
	if ( defined('WP_DEBUG') && WP_DEBUG ) {
		error_log("remote url to scan " .$url);
		$time_passed = $eta/1e+6;
		error_log("remote scan took " .$time_passed ." milliseconds");
		error_log("remote scan results");
		error_log(print_r($data,true));
	}

	if ( $data ) {
		//add to database
		if ( isset( $data->storage) && is_array( $data->storage ) ) {
			$localstorage = $data->storage;
			$localstorage = array_column($localstorage, 'name');
			//add local storage data
			foreach ( $localstorage as $key => $name ) {
				$cookie = new CMPLZ_COOKIE();
				$cookie->type = 'localstorage';
				$cookie->domain = 'self';
				$cookie->add( $name, COMPLIANZ::$cookie_admin->get_supported_languages() );
				$cookie->save( true );
			}
		}

		if ( isset( $data->cookies ) && is_array( $data->cookies ) ) {
			$cookies = $data->cookies;
			foreach ( $cookies as $key => $c ) {
				$cookie         = new CMPLZ_COOKIE();
				$cookie->type   = 'cookie';
				$cookie->domain = $c->domain;
				$cookie->add( $c->name, COMPLIANZ::$cookie_admin->get_supported_languages() );
				$cookie->save( true );
			}
		}
	} else {
		error_log("not a valid response");
	}
}
add_action('cmplz_remote_cookie_scan', 'cmplz_remote_cookie_scan');

/**
 * Conditionally add information about records of consent to the privacy policy
 *
 * @param string $content
 *
 * @return mixed|string
 */

function cmplz_add_privacy_info( $content ){
	if ( cmplz_get_value('records_of_consent') === 'yes' ) {
		$content = __( "This website uses the Privacy Suite for WordPress from Complianz to collect records of consent.", 'complianz-gdpr' )
		           .'&nbsp;'
		           . __( "For this functionality your IP address is anonymized and stored in our database.", 'complianz-gdpr' )
		           .'&nbsp;'
		           . cmplz_sprintf(
			           __( "For more information, see the Complianz %sPrivacy Statement%s.", 'complianz-gdpr' ),
			           '<a href="https://complianz.io/privacy-statement/" target="_blank">',
			           '</a>'
		           );
	}
	return $content;
}
add_filter( 'cmplz_privacy_info' , 'cmplz_add_privacy_info');

/**
 * @param string       $cookie_function
 * @param CMPLZ_COOKIE $cookie
 *
 * @return string
 */
function cmplz_cookie_function( string $cookie_function, CMPLZ_COOKIE $cookie): string {
	if ( $cookie->domain !== '' && $cookie->domain !== 'self' && $cookie->domain !== 'thirdparty' ) {
		$parse = parse_url( esc_url_raw( $cookie->domain ) );
		$root  = $parse['host'] ?? '';
		if ( empty( $root ) ) {
			return $cookie_function;
		}

		if ( empty( $cookie_function ) ) {
			return $root;
		}

		$cookie_function = $root !== '' ? sprintf( __( "%s on %s", "complianz-gdpr" ), $cookie_function, $root ) : '';
	}
	return $cookie_function;
}
add_filter( 'cmplz_cookie_function' , 'cmplz_cookie_function', 10, 2);

/**
 * Show a default region banner for unknown regions
 * @param string $region
 * @param string $country_code
 *
 * @return string
 */

function cmplz_select_region_outside_supported_regions($region, $country_code=''){

	if ( cmplz_geoip_enabled() && (cmplz_get_value('other_region_behaviour') !== 'none') ){
		//manual override
		if ( isset( $_GET['cmplz_user_region'] ) ) {
			$region = sanitize_title( $_GET['cmplz_user_region'] );
		}

		//select default region if the current region is not supported.
		$selected_regions = array_keys(cmplz_get_regions());
		if ( !in_array( $region, $selected_regions ) ) {
			$region = cmplz_get_value('other_region_behaviour');
		}
	}

	return $region;
}
add_filter("cmplz_region_for_country", "cmplz_select_region_outside_supported_regions", 10, 2);

/**
 * Override region logic
 *
 * @param $region
 *
 * @return mixed|string
 */
function cmplz_user_region($region)
{
	if ( cmplz_geoip_enabled() ) {
		$user_region = COMPLIANZ::$geoip->region();
		//we should only return the detected region if the website is configured to use it
		if (is_string($user_region) && array_key_exists($user_region, cmplz_get_regions())){
			$region = $user_region;
		} else {
			$region = cmplz_select_region_outside_supported_regions( $user_region );
		}
	}

	//manual override
	if ( isset( $_GET['cmplz_user_region'] ) ) {
		$region = sanitize_title( $_GET['cmplz_user_region'] );
		if ( ! cmplz_has_region( $region ) ) {
			$region = cmplz_select_region_outside_supported_regions( $region );
		}
	}

	return $region;
}
add_filter('cmplz_user_region', 'cmplz_user_region', 20);

/**
 * Get consent type for a user
 * @param $consenttype
 *
 * @return string
 */
function cmplz_user_consenttype($consenttype)
{
	if ( cmplz_geoip_enabled() ) {
		$user_consenttype = COMPLIANZ::$geoip->consenttype();

		//we should only return the detected consenttype if the website is configured to use it
		if ( in_array($user_consenttype, cmplz_get_used_consenttypes() ) ){
			$consenttype = $user_consenttype;
		} else {
			$consenttype = 'other';
		}
	}

	return $consenttype;
}
add_filter('cmplz_user_consenttype', 'cmplz_user_consenttype');


/**
 * ADMIN ONLY FUNCTIONS
 */
add_action( 'cmplz_notice_uses_ad_cookies_personalized', 'cmplz_tcf_blocked_notice' );
function cmplz_tcf_blocked_notice() {
	if ( cmplz_get_value( 'cookie-statement' ) !== 'generated'
	) {
		cmplz_sidebar_notice( __( "You have chosen a custom Cookie Policy. The TCF option is disabled as it can only be used in combination with the Cookie Policy generated by Complianz.", 'complianz-gdpr' ) , 'warning' );
	}
}

function cmplz_add_documents_control($controls){
	if (isset($_GET['region']) && array_key_exists( $_GET['region'], cmplz_get_regions(true) ) ) {
		$selected_region = sanitize_title($_GET['region']);
	} else {
		$selected_region = COMPLIANZ::$company->get_default_region();
	}

	$controls = '<select class="cmplz_save_localstorage" id="cmplz_selected_region" name="cmplz_selected_region">';
	$regions = cmplz_get_regions( true, true );
	foreach ( $regions as $region => $label) {
		$sel = $selected_region===$region ? 'selected' : '';
		$controls .= '<option value="'.$region.'" '.$sel.'>'.$label.'</option>';
	}

	$controls .= '</select>';
	return $controls;
}
add_filter( 'cmplz_controls_documents', 'cmplz_add_documents_control');

add_action( 'cmplz_notice_cookie-statement', 'cmplz_only_generated_policy' );
function cmplz_only_generated_policy() {
	if ( cmplz_get_value('uses_ad_cookies_personalized') === 'tcf' ) {
		cmplz_sidebar_notice( __( "You have enabled TCF. This option can only be used in combination with the Cookie Policy generated by Complianz.", 'complianz-gdpr' ) );
	}
}

/**
 * Override labels in document field
 * @param $label
 * @param $nicename
 *
 * @return string
 */
function cmplz_generate_document_label($label, $nicename){
	return __("Generated by Complianz", "complianz-gdpr");
}
add_filter('cmplz_generate_document_label', 'cmplz_generate_document_label', 10, 2);


add_filter('cmplz_api_data', 'cmplz_api_data');
function cmplz_api_data($data){
    $license = COMPLIANZ::$license->maybe_decode(get_site_option('cmplz_license_key'));
	$data["license"] = trim($license);
    return $data;
}

/**
 * @param string $path
 *
 * @return string
 */
function cmplz_override_conditional_path( $path ){
	return cmplz_path . 'pro/templates/';
}
add_action( 'cmplz_free_templates_path' , 'cmplz_override_conditional_path', 10, 2);

/**
 * If this file does not exist, check if it's a pro file
 * @param string $file
 * @param string $filename
 *
 * @return string
 */
function cmplz_pro_template_file( $file, $filename ){
	if ( !file_exists( $file ) ) {
		$pro_file = trailingslashit( cmplz_path ) . 'pro/templates/' . $filename;

		if ( file_exists($pro_file) ) {
			return $pro_file;
		}
	}
	return $file;
}
add_filter( 'cmplz_template_file', 'cmplz_pro_template_file', 10, 2);
/**
 * Add our pro grid items
 * @param array $grid_items
 *
 * @return array
 */
function cmplz_add_pro_grid_items( $grid_items ){
	//remove the tips/tricks section
	$index = array_search( 'other-plugins', array_column( $grid_items, 'name' ) );
	$grid_items[$index] = array(
		'name'  => 'support',
		'header' => __("Contact Support", "complianz-gdpr"),
		'class' => 'half-height',
		'page' => 'dashboard',
		'controls' => '',
	);

	if ( cmplz_ab_testing_enabled() || cmplz_get_value('records_of_consent')==='yes' ) {
		$index = array_search( 'tips-tricks', array_column( $grid_items, 'name' ) );
		$grid_items[$index] = array(
				'name'  => 'insights',
				'header' => __("Insights", "complianz-gdpr"),
				'class' => 'half-height',
				'page' => 'dashboard',
				'controls' => COMPLIANZ::$statistics->get_graph_selector(),
		);
	}

	return $grid_items;
}
//add_filter( 'cmplz_grid_items', 'cmplz_add_pro_grid_items' );

/**
 * Change support link in documents block to premium form on complianz.io
 * @param $url
 *
 * @return string
 */
function cmplz_support_link($url){

	$email     = sanitize_email( get_option( 'admin_email' ) );
	$user_info = get_userdata( get_current_user_id() );
	$nicename  = $user_info->user_nicename;
	$url = add_query_arg( array( 'email' => esc_html( $email ), 'user' => $nicename, 'website' => esc_url( site_url() ) ), 'https://complianz.io/support' );

	return $url;
}
add_filter('cmplz_support_link', 'cmplz_support_link');

/**
 * For premium, check if the license is valid before showing the wizard.
 *
 *
 * */

add_filter('cmplz_show_wizard_page', 'cmplz_show_wizard_page');
function cmplz_show_wizard_page($show)
{
    if (!COMPLIANZ::$license->license_is_valid()) {
        $show = false;
    }
    return $show;
}

/**
* @param array $warnings
* @return array
*/

function cmplz_pro_warnings_types($warnings)
{
	$warnings = $warnings + array(
		'suggested-policy-text-changed' => array(
			'warning_condition' => 'cmplz_wp_privacy_version',
			'success_conditions'  => array(
					'NOT document->plugin_privacy_policies_changed',
			),
			'complete'    => __( 'No changes in plugin privacy policies have been detected.', 'complianz-gdpr' ),
			'open' => __( 'Changes in plugin privacy policies have been detected.', 'complianz-gdpr' ) . " "
					  . cmplz_sprintf( __( 'Please review step %s of the wizard.', 'complianz-gdpr' ), STEP_MENU ),
		),
		'missing-processing-agreements' => array(
			'warning_condition' => 'cmplz_has_region(eu)',
			'success_conditions'  => array(
					'NOT cmplz_get_value_privacy-statement==generated',
					'NOT processing->has_missing_agreements_for_processors',
			),
			'open' => cmplz_sprintf( __( 'You have processors and/or Service Providers without a Processing Agreement. %sCreate a Processing Agreement%s.', 'complianz-gdpr' )
							   . cmplz_read_more( 'https://complianz.io/warning-you-have-processors-service-providers-without-a-processing-agreement/' ),
					'<a href="' . admin_url( 'admin.php?page=cmplz-wizard&step='
											 . COMPLIANZ::$config->get_step_by_id( 'company' ) . '&section='
											 . COMPLIANZ::$config->get_section_by_id( 'sharing_of_data_eu' ) ) . '">', '</a>' ),
		),
		'free-plugin-not-deleted' => array(
			'warning_condition' => 'cmplz_free_plugin_not_deleted',
			'plus_one' => true,
			'urgent' => cmplz_sprintf(__( 'You have not deleted the free Complianz plugin. To prevent issues with translations, %syou should delete it%s.', 'complianz-gdpr' ),'<a href="'.admin_url('plugins.php').'">','</a>'),
			'include_in_progress' => true,
			'dismissible' => false,
		),
		'geoip-database-error' => array(
			'warning_condition' => 'cmplz_has_recommended_phpversion',
			'success_conditions'  => array(
				'NOT geoip->geoip_library_error',
			),
			'urgent' => cmplz_sprintf( __( "You have enabled Geo IP, but the GEO IP database hasn't been downloaded automatically. If you continue to see this message, download the file from %sMaxMind%s, unzip it, and put it in the %s folder in your WordPress uploads directory", 'complianz-gdpr' ),
				'<a href="https://dev.maxmind.com/geoip/geoip2/geolite2/">', "</a>", "/complianz/maxmind" ),
			'dismissible' => false,
		),
	);

	//override premium upsell in free
	$warnings['no-dnt']['open'] = __( 'The browser setting Do Not Track is not respected', 'complianz-gdpr' );

	//remove premium upsells in free
	unset($warnings['advertising-enabled']);
	unset($warnings['sync-privacy-statement']);
	unset($warnings['ecommerce-legal']);
	unset($warnings['configure-tag-manager']);
	unset($warnings['targeting-multiple-regions']);


	return $warnings;
}
add_filter('cmplz_warning_types', 'cmplz_pro_warnings_types');

add_filter('cmplz_get_banners', 'cmplz_get_banners_filter');
function cmplz_get_banners_filter($banners){
	$banners = cmplz_get_cookiebanners();
    return $banners;
}

/**
 * Check if the plugin was just upgraded from free to premium, and if so, handle some migration
 * @hooked admin_init
 * @return void
 */

function cmplz_check_upgrade_from_free(){
    if ( get_option('cmplz_run_premium_install') === 'start' ){
        //set the region as the new array type
        $regions = cmplz_get_value('regions', false, 'wizard');
        if (!empty($regions) && !is_array($regions)) {
            $regions = array($regions => 1);
	        cmplz_update_option('wizard', 'regions', $regions);
        }

	    //enable Geo IP
	    cmplz_update_option('settings', 'use_country', true);
	    //start download of geo db.
	    update_option('cmplz_import_geoip_on_activation', true, false );
        update_option('cmplz_run_premium_install' , 'completed' , false );
	    if ( !cmplz_user_can_manage() ) {
		    return;
	    }
    }

	if (get_option('cmplz_run_premium_upgrade')) {
        $free = 'complianz-gdpr/complianz-gpdr.php';
		//only delete when in live mode. Otherwise, deactivate
		if ( !defined('WP_DEBUG') || !WP_DEBUG ) {
			delete_plugins(array($free));
		} else {
			deactivate_plugins($free);
		}
		delete_option('cmplz_run_premium_upgrade');
	}
}
add_action('admin_init', 'cmplz_check_upgrade_from_free');

/**
 * Hooks in on the free plugin upgrade function
 * Runs when the plugin is updated in the dashboard.
 * @param $prev_version
 * @hooked cmplz_upgrade
 * @return void
 */

function cmplz_upgrade_premium($prev_version)
{
	if ($prev_version && version_compare($prev_version, '5.0.0', '<')) {
		global $wpdb;
		//clean up a/b testing table
		$wpdb->delete(
				$wpdb->prefix."cmplz_statistics",
				array( 'time' => '')
		);
	}

	if ($prev_version && version_compare($prev_version, '5.1.0', '<')) {
		global $wpdb;
		$table_name = $wpdb->prefix.'cmplz_statistics';
		if ( $wpdb->get_var( "SHOW TABLES LIKE '$table_name'" ) === $table_name
		) {
			$wpdb->query( "UPDATE {$wpdb->prefix}cmplz_statistics SET statistics = 1 WHERE stats=1" );
			$wpdb->query( "UPDATE {$wpdb->prefix}cmplz_statistics SET preferences = 1 WHERE prefs=1" );
		}
	}

	if (  $prev_version
	      && version_compare( $prev_version, '5.3.0', '<' )
	) {
		//find impressum page id.
		$page_id = COMPLIANZ::$document->get_shortcode_page_id('impressum', 'eu', false);
		if ($page_id) {
			$page = get_post($page_id);
			if (strpos($page->post_content, 'selectedDocument":"impressum') !==false ) {
				if ( strpos($page->post_content, 'impressum-all')===false) {
					$content = str_replace('"selectedDocument":"impressum"', '"selectedDocument":"impressum-all"', $page->post_content);
					$args = array(
						'post_content' => $content,
						'ID'           => $page_id,
					);
					wp_update_post( $args );
				}
			}

			if (strpos($page->post_content, 'cmplz-document type="impressum" region') !==false ) {
				if ( strpos($page->post_content, 'region="all"')===false) {
					$content = str_replace('cmplz-document type="impressum" region="eu"', 'cmplz-document type="impressum" region="all"', $page->post_content);
					$args = array(
						'post_content' => $content,
						'ID'           => $page_id,
					);
					wp_update_post( $args );
				}
			}
		}
	}

	if (  $prev_version
	      && version_compare( $prev_version, '5.5.0', '<' )
	) {
		//upgrade cookie policy setting to new field
		$wizard_settings = get_option( 'complianz_options_wizard' );
		if ( isset( $wizard_settings["is_webshop"] ) ) {
			if ($wizard_settings["is_webshop"]) {
				$wizard_settings["is_webshop"] = 'yes';
			} else {
				$wizard_settings["is_webshop"] = 'no';
			}
			update_option( 'complianz_options_wizard', $wizard_settings );
		}
	}

	if ($prev_version && version_compare($prev_version, '6.0.2', '<')) {
		global $wpdb;
		$table_name = $wpdb->prefix.'cmplz_statistics';
		if ( $wpdb->get_var( "SHOW TABLES LIKE '$table_name'" ) === $table_name
		) {
			$wpdb->query( "DELETE from {$wpdb->prefix}cmplz_statistics WHERE time=0" );
		}
	}
}
add_action('cmplz_upgrade',  'cmplz_upgrade_premium', 10);

function cmplz_add_pro_system_status(){
	echo "Server Headers";
	echo "---------\n";
	print_r($_SERVER);
}
add_action('cmplz_system_status',  'cmplz_add_pro_system_status', 10);
