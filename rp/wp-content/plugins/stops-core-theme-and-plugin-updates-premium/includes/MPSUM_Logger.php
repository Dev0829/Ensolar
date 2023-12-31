<?php

if (!defined('ABSPATH')) die('No direct access allowed');

if (class_exists('MPSUM_Logger')) return;

/**
 * Class MPSUM_Logger
 */
class MPSUM_Logger implements MPSUM_Logger_Interface {

	protected $_loggers = array();

	/**
	 * Constructor method
	 *
	 * @param MPSUM_Logger_Interface $logger
	 */
	public function __construct(MPSUM_Logger_Interface $logger = null) {
		if (!empty($logger)) $this->_loggers = array($logger);
	}

	/**
	 * Add logger to loggers list
	 *
	 * @param MPSUM_Logger_Interface $logger
	 * @return mixed
	 */
	public function add_logger(MPSUM_Logger_Interface $logger) {
		$logger_id = $logger_class = get_class($logger);

		// don't add logger if it doesn't support multiple loggers.
		if (!empty($this->_loggers) && array_key_exists($logger_id, $this->_loggers) && false == $logger->is_allow_multiple()) return false;

		$index = 0;

		// get free id key.
		while (array_key_exists($logger_id, $this->_loggers)) {
			$index++;
			$logger_id = $logger_class.'_'.$index;
		}

		$this->_loggers[$logger_id] = $logger;
	}

	/**
	 * Return list of loggers
	 *
	 * @return array
	 */
	public function get_loggers() {
		return $this->_loggers;
	}

	/**
	 * System is unusable.
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function emergency($message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as $logger) {
			$logger->emergency($message, $context);
		}

	}

	/**
	 * Action must be taken immediately.
	 *
	 * Example: Entire website down, database unavailable, etc. This should
	 * trigger the SMS alerts and wake you up.
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function alert($message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as $logger) {
			$logger->alert($message, $context);
		}

	}

	/**
	 * Critical conditions.
	 *
	 * Example: Application component unavailable, unexpected exception.
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function critical($message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as $logger) {
			$logger->critical($message, $context);
		}

	}

	/**
	 * Runtime errors that do not require immediate action but should typically
	 * be logged and monitored.
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function error($message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as $logger) {
			$logger->error($message, $context);
		}

	}

	/**
	 * Exceptional occurrences that are not errors.
	 *
	 * Example: Use of deprecated APIs, poor use of an API, undesirable things
	 * that are not necessarily wrong.
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function warning($message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as $logger) {
			$logger->warning($message, $context);
		}

	}

	/**
	 * Normal but significant events.
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function notice($message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as $logger) {
			$logger->notice($message, $context);
		}

	}

	/**
	 * Interesting events.
	 *
	 * Example: User logs in, SQL logs.
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function info($message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as $logger) {
			$logger->info($message, $context);
		}

	}

	/**
	 * Detailed debug information.
	 *
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function debug($message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as &$logger) {
			$logger->debug($message, $context);
		}

	}

	/**
	 * Logs with an arbitrary level.
	 *
	 * @param  mixed  $level
	 * @param  string $message
	 * @param  array  $context
	 * @return null
	 */
	public function log($level, $message, array $context = array()) {

		if (empty($this->_loggers)) return false;

		foreach ($this->_loggers as $logger) {
			$logger->log($level, $message, $context);
		}

	}
}
