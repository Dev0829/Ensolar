<?php

if (!defined('ABSPATH')) die('No direct access allowed');

if (class_exists('MPSUM_Log_Levels')) return;

/**
 * Class MPSUM_Log_Levels
 */
class MPSUM_Log_Levels {

	const EMERGENCY = 'emergency';
	const ALERT = 'alert';
	const CRITICAL = 'critical';
	const ERROR = 'error';
	const WARNING = 'warning';
	const NOTICE = 'notice';
	const INFO = 'info';
	const DEBUG = 'debug';

	/**
	 * Return level text caption
	 *
	 * @param  string $level Text of level Type.
	 * @return string        Returns the Level type.
	 */
	static public function to_text($level) {

		$text = array(
			self::EMERGENCY => 'EMERGENCY',
			self::ALERT => 'ALERT',
			self::CRITICAL => 'CRITICAL',
			self::ERROR => 'ERROR',
			self::WARNING => 'WARNING',
			self::NOTICE => 'NOTICE',
			self::INFO => 'INFO',
			self::DEBUG => 'DEBUG',
		);

		if (array_key_exists($level, $text)) return $text[$level];

		return '';
	}
}
