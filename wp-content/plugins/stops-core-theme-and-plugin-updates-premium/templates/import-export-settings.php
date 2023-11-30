<?php
if (!defined('ABSPATH')) die('No direct access');
?>
<div class="eum-advanced-settings-container import-export">
	<h3><?php esc_html_e('Export / import settings', 'stops-core-theme-and-plugin-updates');?></h3>
	<p>
		<?php esc_html_e('Here, you can export your Easy Updates Manager settings , either for using on another site, or to keep as a backup. This tool will export what is currently in the settings tab.', 'stops-core-theme-and-plugin-updates');?>
	</p>
	<button type="button" style="clear:left;" class="button-primary" id="eum-settings-export"><?php _e('Export settings', 'stops-core-theme-and-plugin-updates');?></button>

	<p>
		<?php esc_html_e('You can also import previously-exported settings. This tool will replace all your saved settings.', 'stops-core-theme-and-plugin-updates'); ?>
	</p>

	<button type="button" style="clear:left;" class="button-primary" id="eum-settings-import"><?php _e('Import settings', 'stops-core-theme-and-plugin-updates');?></button>
	<input type="file" name="settings_file" id="import_settings">
</div>