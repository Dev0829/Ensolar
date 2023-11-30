<?php

if (!defined('ABSPATH')) die('No direct access.');

if (class_exists('MPSUM_Update_Cron')) return;

/**
 * Class MPSUM_Update_Cron handles scheduled crons for updates
 */
class MPSUM_Update_Cron {

	/**
	 * Adds necessary filters and actions
	 */
	private function __construct() {
		add_action('eum_advanced_headings', array($this, 'heading'), 12);
		add_action('eum_advanced_settings', array($this, 'settings'), 12);
		add_filter('cron_schedules', array($this, 'cron_schedules'));
	}

	/**
	 * Adds custom cron schedules
	 *
	 * @param array $schedules - An array of available cron schedules
	 *
	 * @return array - An array of modified cron schedules
	 */
	public function cron_schedules($schedules) {
		$schedules['every_3_hours'] = array('interval' => 3600 * 3, 'display' => sprintf(__('Every %d hours', 'stops-core-theme-and-plugin-updates'), 3));
		$schedules['every_6_hours'] = array('interval' => 3600 * 6, 'display' => sprintf(__('Every %d hours', 'stops-core-theme-and-plugin-updates'), 6));
		$schedules['eum_weekly'] = array('interval' => 86400 * 7, 'display' => __('Once weekly', 'stops-core-theme-and-plugin-updates'));
		$schedules['eum_fortnightly'] = array('interval' => 86400 * 14, 'display' => __('Once every fortnight', 'stops-core-theme-and-plugin-updates'));
		$schedules['eum_monthly'] = array('interval' => 365.25 * 86400 / 12, 'display' => __('Once every month', 'stops-core-theme-and-plugin-updates'));
		return $schedules;
	}

	/**
	 * Returns singleton instance of this class
	 *
	 * @return object MPSUM_Cron_Scheduler Singleton Instance
	 */
	public static function get_instance() {
		static $instance = null;
		if (null === $instance) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Outputs feature heading
	 */
	public function heading() {
		printf('<div data-menu_name="schedule-update">%s <span class="eum-advanced-menu-text">%s</span></div>', '<i class="material-icons">schedule</i>', esc_html__('Automatic update scheduling', 'stops-core-theme-and-plugin-updates'));
	}

	/**
	 * Outputs feature settings
	 */
	public function settings() {
		Easy_Updates_Manager()->include_template('cron-settings.php');
	}

	/**
	 * Schedule cron to update when existing values are available
	 */
	public function set_cron_events() {
		$options = MPSUM_Updates_Manager::get_options('advanced');
		$eum_cron_schedule = isset($options['cron_schedule']) ? $options['cron_schedule'] : 'twicedaily';

		$this->clear_wordpress_crons();

		// Set up daily cron
		if ('daily' === $eum_cron_schedule) {
			$this->set_daily_cron();
		} elseif ('weekly' === $eum_cron_schedule) {
			$this->set_weekly_cron();
		} elseif ('fortnightly' === $eum_cron_schedule) {
			$this->set_fortnightly_cron();
		} elseif ('monthly' === $eum_cron_schedule) {
			$this->set_monthly_cron();
		} elseif ('twicedaily' === $eum_cron_schedule) {
			$this->set_cron_by_hours(12);
		} elseif ('every_3_hours' === $eum_cron_schedule) {
			$this->set_cron_by_hours(3);
		} elseif ('every_6_hours' === $eum_cron_schedule) {
			$this->set_cron_by_hours(6);
		}
	}

	/**
	 * Clears default WordPress crons
	 */
	 public function clear_wordpress_crons() {
		wp_clear_scheduled_hook('wp_update_plugins');
		wp_clear_scheduled_hook('wp_update_themes');
		wp_clear_scheduled_hook('wp_version_check');
	 }

	/**
	 * Sets default WordPress crons
	 */
	public function set_default_cron() {
		add_action('wp_update_plugins', 'wp_update_plugins');
		add_action('wp_update_themes', 'wp_update_themes');
		add_action('wp_version_check', 'wp_version_check');
	}

	/**
	 * Returns next event timestamp
	 *
	 * @return Integer|Boolean - either a timestamp or false to indicate failure
	 */
	public function cron_next_event() {
		$cron_events = _get_cron_array();
		ksort($cron_events);
		$eum_cron_event = array();
		foreach ($cron_events as $timestamp => $schedule) {
			if (!is_array($schedule)) continue;
			foreach ($schedule as $key => $value) {
				if (in_array($key, array('wp_update_plugins', 'wp_update_themes', 'wp_version_check'))) {
					$eum_cron_event[$timestamp][$key] = $value;
				}
			}
		}

		$keys = array_keys($eum_cron_event);

		if (!empty($keys)) {
			return $keys[0];
		}
		return false;
	}

	/**
	 * Activate cron events
	 *
	 * @param Integer $hours - how many hours in between events; the only allowed values are 3, 6, 12
	 *
	 * @return void
	 */
	public function set_cron_by_hours($hours = 12) {
	
		$schedules = array(3 => 'every_3_hours', 6 => 'every_6_hours', 12 => 'twicedaily');
		$schedule = $schedules[$hours];
		
		$options = MPSUM_Updates_Manager::get_options('advanced');
		$time = isset($options['cron_time']) ? $options['cron_time'] : '00:15';

		$cron_schedule_user_date_time = strtotime(date("Y-m-d") . ' ' . $time);
		$gmt_offset = 3600 * get_option('gmt_offset');
		$cron_schedule_date_time = $cron_schedule_user_date_time - $gmt_offset;
		if ($cron_schedule_date_time < time()) {
			// Add day to cron schedule if less than current time.
			$cron_schedule_date_time += 86400;
		}
		$this->schedule_events($cron_schedule_date_time, $schedule);
	}

	/**
	 * Activate daily events
	 *
	 * @return void
	 */
	public function set_daily_cron() {
		$schedule = 'daily';
		$options = MPSUM_Updates_Manager::get_options('advanced');
		$time = isset($options['cron_time']) ? $options['cron_time'] : '00:15';

		$cron_schedule_user_date_time = strtotime(date("Y-m-d") . ' ' . $time);
		$gmt_offset = 3600 * get_option('gmt_offset');
		$cron_schedule_date_time = $cron_schedule_user_date_time - $gmt_offset;
		if ($cron_schedule_date_time < time()) {
			$cron_schedule_date_time += 86400;
		}

		$this->schedule_events($cron_schedule_date_time, $schedule);
	}
	
	/**
	 * Get the week day for day of the week.
	 *
	 * @param int $day Day of the week.
	 *
	 * @return string Week day
	 */
	private function get_week_day($day) {
		$day = absint($day);
		$days = array(
			'1' => 'Sunday',
			'2' => 'Monday',
			'3' => 'Tuesday',
			'4' => 'Wednesday',
			'5' => 'Thursday',
			'6' => 'Friday',
			'7' => 'Saturday',
		);
		return $days[$day];
	}

	/**
	 * Activate weekly events
	 *
	 * @return void
	 */
	public function set_weekly_cron() {
		$schedule = 'eum_weekly';
		$options = MPSUM_Updates_Manager::get_options('advanced');
		$time = isset($options['cron_time']) ? $options['cron_time'] : '00:15';

		$day_of_week = $this->get_week_day($options['cron_week_day']);

		$cron_schedule_user_date_time = strtotime("This $day_of_week, $time", strtotime(date('Y-m-d')));
		$gmt_offset = 3600 * get_option('gmt_offset');
		$cron_schedule_date_time = $cron_schedule_user_date_time - $gmt_offset;

		if ($cron_schedule_date_time < time()) {
			$cron_schedule_date_time += 7 * 86400;
		}

		$this->schedule_events($cron_schedule_date_time, $schedule);
	}

	/**
	 * Activate fortnightly events
	 *
	 * @return void
	 */
	public function set_fortnightly_cron() {
		$schedule = 'eum_fortnightly';
		$options = MPSUM_Updates_Manager::get_options('advanced');
		$time = isset($options['cron_time']) ? $options['cron_time'] : '00:15';

		$user_week_number = absint($options['cron_week']);
		$day_of_week = $this->get_week_day($options['cron_week_day']);

		$cron_schedule_user_date_time = strtotime("+{$user_week_number} weeks", strtotime(date("Y-m-d") . ' ' . $time));
		$cron_schedule_user_date_time = strtotime("this {$day_of_week}, $time", $cron_schedule_user_date_time);
		$gmt_offset = 3600 * get_option('gmt_offset');
		$cron_schedule_date_time = $cron_schedule_user_date_time - $gmt_offset;

		if ($cron_schedule_date_time < time() || '2nd' == $user_week_number) {
			$cron_schedule_date_time += 7 * 86400;
		}

		$this->schedule_events($cron_schedule_date_time, $schedule);
	}

	/**
	 * Activate monthly events
	 *
	 * @return void
	 */
	public function set_monthly_cron() {
		$schedule = 'eum_monthly';
		$options = MPSUM_Updates_Manager::get_options('advanced');
		$time = isset($options['cron_time']) ? $options['cron_time'] : '00:15';
		$user_day_number = absint($options['cron_day_number']);
		$cron_schedule_user_date_time = strtotime('+1 month', strtotime(date("Y-m-" . $user_day_number, time()) . ' ' . $time));
		$gmt_offset = 3600 * get_option('gmt_offset');
		$cron_schedule_date_time = $cron_schedule_user_date_time - $gmt_offset;

		$this->schedule_events($cron_schedule_date_time, $schedule);
	}

	/**
	 * Schedules core, plugin and theme updates
	 *
	 * @param integer $timestamp - A timestamp to schedule events
	 * @param string  $schedule  - A cron schedule
	 */
	private function schedule_events($timestamp, $schedule) {
		wp_schedule_event($timestamp, $schedule, 'wp_update_plugins');
		wp_schedule_event($timestamp, $schedule, 'wp_update_themes');
		wp_schedule_event($timestamp, $schedule, 'wp_version_check');
	}

	/**
	 * Displays date and time options based on selected cron schedule
	 */
	public function display_date_time_options($options) {
		$options = $this->set_default_cron_options($options);
		$this->display_week_day($options['cron_week_day']);
		$this->display_week($options['cron_week']);
		$this->display_day_number($options['cron_day_number']);
		$this->display_time($options['cron_time']);
		$this->display_days_list($options['cron_days_list']);
	}

	/**
	 * Sets default settings for cron schedules
	 *
	 * @param  array $options An array of options
	 * @return array An array of modifiedoptions
	 */
	private function set_default_cron_options($options) {
		if (empty($options['cron_week_day'])) {
			$options['cron_week_day'] = 1;
		}

		if (empty($options['cron_week'])) {
			$options['cron_week'] = 1;
		}

		if (empty($options['cron_day_number'])) {
			$options['cron_day_number'] = 1;
		}

		if (empty($options['cron_time'])) {
			$options['cron_time'] = '00:15';
		}

		if (empty($options['cron_days_list'])) {
			$options['cron_days_list'] = array();
		}

		if (empty($options['cron_days_list']) && 'daily' !== $options['cron_schedule']) {
			$options['cron_days_list'] = array(1, 2, 3, 4, 5, 6, 7);
		}

		return $options;
	}

	/**
	 * Display multiple selection dropdown box that has a list of selectable days
	 *
	 * @param array $days_list An array of user-defined days
	 * @return string The HTML content corresponding to the days selected by the user or default days
	 */
	private function display_days_list($days_list) {
		$week_days = $this->get_week_days();
		$html = '<div id="select_days_list" data-placeholder="'.esc_attr__('Select the day of the week', 'stops-core-theme-and-plugin-updates').'">';
		$html .= sprintf('<label class="every_3_hours every_6_hours twicedaily">%s:</label>', __('On the following days', 'stops-core-theme-and-plugin-updates'));
		$html .= sprintf('<label class="daily">%s:</label>', __('Except on these days', 'stops-core-theme-and-plugin-updates'));
		$html .= '<select class="eum_days_list" name="eum_cron_days_list[]" multiple="multiple">';
		foreach ($week_days as $key => $value) {
			$html .= sprintf('<option value="%1$s" %2$s>%3$s</option>', $key, in_array($key, $days_list) ? 'selected="selected"' : '', $value);
		}
		$html .= '</select></div>';
		echo $html;
	}

	/**
	 * Displays week days select field
	 *
	 * @param array $week_day An array of week days
	 * @return void
	 */
	private function display_week_day($week_day) {
		$week_days = $this->get_week_days();
		$html = '';
		$html .= '<select class="eum_week_days" name="eum_cron_week_day">';
		foreach ($week_days as $key => $value) {
			$html .= sprintf('<option value="%1$s" %2$s>%3$s</option>', $key, selected($week_day, $key, false), $value);
		}
		$html .= '</select>';
		echo $html;
	}

	/**
	 * Displays week select field
	 *
	 * @param array $week An array of 2 weeks
	 * @return void
	 */
	private function display_week($week) {
		$weeks = array('1st' => __('1st Week', 'stops-core-theme-and-plugin-updates'), '2nd' => __('2nd Week', 'stops-core-theme-and-plugin-updates'));
		$html = '';
		$html .= '<select class="eum_week_number" name="eum_cron_week">';
		foreach ($weeks as $key => $value) {
			$html .= sprintf('<option value="%1$s" %2$s>%3$s</option>', $key, selected($week, $key, false), $value);
		}
		$html .= '</select>';
		echo $html;
	}

	/**
	 * Displays days select field
	 *
	 * @param array $day An array of days of a month
	 * @return void
	 */
	private function display_day_number($day) {
		$days = $this->get_days();
		$html = '<div class="eum_day_number_wrapper">';
		$html .= sprintf('<label>%s</label>', __('Day Number:', 'stops-core-theme-and-plugin-updates'));
		$html .= '<select class="eum_day_number" name="eum_cron_day_number">';
		foreach ($days as $value) {
			$html .= sprintf('<option value="%1$s" %2$s>%3$s</option>', $value, selected($day, $value, false), $value);
		}
		$html .= '</select></div>';
		echo $html;
	}

	/**
	 * Displays time field
	 *
	 * @param string $time Time value
	 * @return void
	 */
	private function display_time($time) {
		$html = '';
		$html .= sprintf('<label>%s', __('Time:', 'stops-core-theme-and-plugin-updates'));
		$html .= sprintf('<input type="time" name="eum_cron_time" value="%s">', $time);
		$html .= '</label>';
		echo $html;
	}

	/**
	 * An array of week days
	 *
	 * @return array An array of week days
	 */
	private function get_week_days() {
		$week_days = array();
		global $wp_locale;
		for ($day_index = 1; $day_index < 8; $day_index++) {
			$week_days[$day_index] = $wp_locale->get_weekday($day_index - 1);
		}
		return $week_days;
	}

	/**
	 * Month days
	 *
	 * @return array An array of available days across all months
	 */
	private function get_days() {
		$days = array();
		for ($day=1; $day<=28; $day++) {
			$days[$day] = $day;
		}
		return $days;
	}
}
