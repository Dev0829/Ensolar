<div class="cmplz-tools-row">
	<div>
		<?php _e( "Records of consent", 'complianz-gdpr' ); ?>
	</div>
	<div>
		<?php
		if ( cmplz_get_value('records_of_consent') === 'yes' ) {
			$text = __( 'View', 'complianz-gdpr' );
			$link = add_query_arg(array('page' => 'cmplz-proof-of-consent'), admin_url('admin.php') );
		} else {
			$text = __( 'Read more', 'complianz-gdpr' );
			$link = "https://complianz.io/records-of-consent/";
		} ?>
		<a target="_blank" href="<?php echo $link ?>" class="cmplz-premium">
			<?php echo $text ?>
		</a>
	</div>
</div>

<div class="cmplz-tools-row">
	<div>
		<span><?php _e( "Create processing agreements", 'complianz-gdpr' ); ?></span>
	</div>
	<div>
		<a href="<?php echo add_query_arg(array('page' => 'cmplz-processing-agreements'), admin_url('admin.php'))?>">
			<?php _e( 'Create', 'complianz-gdpr' ) ?>
		</a>
	</div>
</div>
<div class="cmplz-tools-row">
	<div>
		<?php _e( "Create a Data Leak inventory", 'complianz-gdpr' ); ?>
	</div>
	<div>
		<a href="<?php echo add_query_arg(array('page' => 'cmplz-dataleak-reports'), admin_url('admin.php'))?>">
			<?php _e( 'Create', 'complianz-gdpr' ) ?>
		</a>
	</div>
</div>
<?php if (cmplz_ab_testing_enabled()) {?>
<div class="cmplz-tools-row">
	<div>
		<?php _e( "Create an A/B test", 'complianz-gdpr' ); ?>
	</div>
	<div>
		<a href="<?php echo admin_url( 'admin.php?page=cmplz-cookiebanner' ) ?>">
			<?php _e( 'Create', 'complianz-gdpr' ) ?>
		</a>
	</div>
</div>
<?php } ?>

<?php if ( cmplz_has_region('us') ) {?>
<div class="cmplz-tools-row">
	<div>
		<?php _e( "DNSMPI Requests", 'complianz-gdpr' ); ?>
	</div>
	<div>
		<a href="<?php echo add_query_arg(array('page' => 'cmplz-datarequests'), admin_url('admin.php'))?>">
			<?php _e( 'Visit', 'complianz-gdpr' ) ?>
		</a>
	</div>
</div>
<?php } ?>
