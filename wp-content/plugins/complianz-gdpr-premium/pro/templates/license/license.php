<div class="field-group cmplz-checkbox"><div class="cmplz-field"><div class="cmplz-label">
	<label class="" for="cmplz_beta">
		<div class="cmplz-title-wrap"><?php _e("Enable beta releases","complianz-gdpr")?></div>
		<div></div>
	</label>
</div>
	<label tabindex="0" class="cmplz-switch">
		<input tabindex="-1" name="cmplz_beta" size="40" type="checkbox" class="" value="1" <?php echo cmplz_get_value("beta", false, 'settings')==1 ? 'checked' : ''?>>
		<span class="cmplz-slider cmplz-round"></span>
	</label>
</div><!--close after field--><div class="cmplz-help-warning-wrap"></div></div>

<div class="field-group">
	<div class="field-group">
		<div class="cmplz-field">
			<?php _e("License key", "complianz-gdpr")?>
			<input id="cmplz_license_key" placeholder="<?php _e("Enter your license key", "complianz-gdpr")?>" name="cmplz_license_key" type="password" class="regular-text" value="<?php esc_attr_e(COMPLIANZ::$license->license_key() ); ?>"/>
		</div>
	</div>
	<div class="cmplz-field">
	<?php echo COMPLIANZ::$license->get_license_label() ?>
	</div>
</div>


