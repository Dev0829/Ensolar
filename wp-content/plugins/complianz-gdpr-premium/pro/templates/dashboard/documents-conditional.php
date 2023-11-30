<?php defined( 'ABSPATH' ) or die( "you do not have access to this page!" );
$row = '';

if ( ! class_exists('COMPLIANZ_TC') ) {
	$title = __("Terms and Conditions",'complianz-gdpr');
	$status = 'disabled';
	$shortcode_icon = cmplz_icon( 'shortcode', 'disabled' , __( 'Click to copy the document shortcode', 'complianz-gdpr' ));
	$sync_icon = cmplz_icon('sync', 'disabled');
	$page_exists = cmplz_icon('bullet', 'disabled');
	$generated = '<a href="'.add_query_arg( array('s'=>'complianz+terms+conditions+stand-alone', 'tab'=>'search','type'=>'term'),  admin_url('plugin-install.php') ).'">'.__('Install', 'complianz-gdpr').'</a>';
	$args = array(
		'status' => $status,
		'title' => $title,
		'page_exists' => $page_exists,
		'sync_icon' => $sync_icon,
		'shortcode_icon' => $shortcode_icon,
		'generated' => $generated,
		'control' => '',
	);
	echo cmplz_get_template('dashboard/documents-row.php', $args);
} else if (class_exists('COMPLIANZ_TC') && ! defined('cmplz_premium') ) {
	COMPLIANZ_TC::$document->add_docs_to_cmplz_dashboard( 'all' );
}

$args = array(
	'status' => '',
	'title' => '<h3 class="h4 cmplz-grid-title">'.__("Other documents", "complianz-gdpr").'</h3>',
	'control' => '',
);
echo cmplz_get_template('dashboard/documents-row-compact.php', $args);
$docs = get_posts(
	array(
		'post_type' => 'cmplz-processing',
		'post_status' => 'publish',
	)
);

$select = '<option value="">'.__("Select Processing Agreement", "complianz-gdpr").'</option>';

if (count($docs)===0) {
	$args = array(
		'status' => '',
		'title' => '<select><option value="">'.__("No processing agreements", "complianz-gdpr").'</option></select>',
		'control' => '<a class="button button-default" href="'.add_query_arg(array('page' => 'cmplz-processing-agreements'), admin_url('admin.php') ).'">'.__("Create", "complianz-gdpr").'</a>',
	);
} else {
	foreach ( $docs as $doc ) {
		$select .= '<option value="'.get_cmplz_document_download_url($doc->ID).'">'.$doc->post_title.'</option>';
	}
	$args = array(
		'status' => '',
		'title' => '<select class="cmplz-download-document-selector">'.$select.'</select>',
		'control' => '<button disabled class="button button-default cmplz-download-document">'.__("Download", "complianz-gdpr").'</button>',
	);
}
echo cmplz_get_template('dashboard/documents-row-compact.php', $args);

$docs = get_posts(
	array(
		'post_type' => 'cmplz-dataleak',
		'post_status' => 'publish',
	)
);

$select = '<option value="">'.__("Select Data Breach report", "complianz-gdpr").'</option>';
$nr_of_docs = count($docs);
foreach ( $docs as $doc ) {
	if ( !COMPLIANZ::$dataleak->dataleak_has_to_be_reported_to_involved($doc->ID) ) {
		$nr_of_docs--;
		continue;
	}
	$select .= '<option value="'.get_cmplz_document_download_url($doc->ID).'">'.$doc->post_title.'</option>';
}

if ( $nr_of_docs===0 ) {
	$args = array(
		'status' => '',
		'title' => '<select><option value="">'.__("No data breach reports", "complianz-gdpr").'</option></select>',
		'control' => '<a class="button button-default" href="'.add_query_arg(array('page' => 'cmplz-dataleak-reports'), admin_url('admin.php') ).'">'.__("Create", "complianz-gdpr").'</a>',
	);
} else {
	$args = array(
		'status' => '',
		'title' => '<select class="cmplz-download-document-selector">'.$select.'</select>',
		'control' => '<button disabled class="button button-default cmplz-download-document">'.__("Download", "complianz-gdpr").'</button>',

	);
}

echo cmplz_get_template('dashboard/documents-row-compact.php', $args);
$docs = COMPLIANZ::$document->get_cookie_snapshot_list();
if (count($docs)===0) {
	$select = '<select><option value="">'.__("No proof of consent documents", "complianz-gdpr").'</option></select>';
	$args = array(
		'status' => '',
		'title' => $select,
		'control' => '<a href="'.add_query_arg(array('page' => 'cmplz-proof-of-consent'), admin_url('admin.php') ).'" class="button button-default">'.__("Generate", "complianz-gdpr").'</a>',
	);
} else {
	$select = '<option value="">'.__("Select Proof of Consent", "complianz-gdpr").'</option>';
	foreach ( $docs as $doc ) {
		$filename = $doc['file'];
		//strip everything before proof of consent
		$pos = strpos($filename, '-proof-of-consent-');//leave region in place
		$region = substr( $filename, $pos-2, 2 );
		$filename = strtoupper($region). ' - '.str_replace('-', ' ', substr( $filename, $pos ) );
		$select .= '<option value="'.$doc['url'].'">'.$filename.'</option>';
	}
	$select = '<select class="cmplz-download-document-selector">'.$select.'</select>';

	$args = array(
		'status' => '',
		'title' => $select,
		'control' => '<button disabled class="button button-default cmplz-download-document">'.__("Download", "complianz-gdpr").'</button>',
	);
}

echo cmplz_get_template('dashboard/documents-row-compact.php', $args);


