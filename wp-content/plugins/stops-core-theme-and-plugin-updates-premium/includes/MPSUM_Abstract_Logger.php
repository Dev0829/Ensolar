<?php

if (!defined('ABSPATH')) die('No direct access allowed');

if (class_exists('MPSUM_Abstract_Logger')) return;

/**
 * Class MPSUM_Abstract_Logger
 */
abstract class MPSUM_Abstract_Logger implements MPSUM_Logger_Interface {

	protected $enabled = true;

	protected $allow_multiple = false;

	protected $options = array();

	/**
	 * MPSUM_Abstract_Logger constructor
	 */
	public function __construct() {
	}

	/**
	 * Returns true if allow multiple.
	 *
	 * @return bool
	 */
	public function is_allow_multiple() {
		return $this->allow_multiple;
	}

	/**
	 * Returns current options in text.
	 *
	 * @return string
	 */
	public function get_options_text() {
		$options_values = $this->get_options_values();

		if (array_key_exists('active', $options_values)) {
			unset($options_values['active']);
		}

		return join(', ', $options_values);
	}

	/**
	 * Returns list of logger options.
	 *
	 * @return array
	 */
	public function get_options_list() {
		return array(
		// 'option_name' => __('Placeholder', 'stops-core-theme-and-plugin-updates')
		);
	}

	/**
	 * Returns array with options values list.
	 *
	 * @return array
	 */
	public function get_options_values() {
		$options_values = array();
		$options_list = $this->get_options_list();

		if (empty($options_list)) return $options_values;

		foreach (array_keys($options_list) as $option_name) {
			$options_values[$option_name] = $this->get_option($option_name);
		}

		return $options_values;
	}

	/**
	 * Returns true if logger is active
	 *
	 * @return boolean
	 */
	public function is_enabled() {
		return $this->enabled;
	}

	/**
	 * Enable logger
	 */
	public function enable() {
		$this->enabled = true;
	}

	/**
	 * Disable logger
	 */
	public function disable() {
		$this->enabled = false;
	}

	/**
	 * Return option $name value
	 *
	 * @param  string $name    Name of the option.
	 * @param  string $default Add default value.
	 * @return array|string  An array of options, if available. Else returns default
	 */
	public function get_option($name, $default = '') {
		if (!array_key_exists($name, $this->options)) return $default;
		return $this->options[$name];
	}

	/**
	 * Set option $name value.
	 *
	 * @param string $name  The name of the option.
	 * @param string $value The value of the option.
	 */
	public function set_option($name, $value = '') {
		if (is_array($name)) {
			$this->options = array_merge($this->options, $name);
		} else {
			$this->options[$name] = $value;
		}
	}

	/**
	 * Returns logger description
	 *
	 * @return mixed
	 */
	abstract function get_description();

	/**
	 * For the Logger: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-3-logger-interface.md
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return string
	 */
	protected function interpolate($message, array $context = array()) {
		$replace = array();
		foreach ($context as $key => $val) {
			// Check that the value can be casted to string.
			if (!is_array($val) && (!is_object($val) || method_exists($val, '__toString'))) {
				$replace['{' . $key . '}'] = $val;
			}
		}
		return strtr($message, $replace);
	}
}
