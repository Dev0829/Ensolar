<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Preview\Understand\Assistant;

use Twilio\Exceptions\TwilioException;
use Twilio\InstanceContext;
use Twilio\Values;
use Twilio\Version;

/**
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 */
class DialogueContext extends InstanceContext {
    /**
     * Initialize the DialogueContext
     *
     * @param \Twilio\Version $version Version that contains the resource
     * @param string $assistantSid The assistant_sid
     * @param string $sid The sid
     * @return \Twilio\Rest\Preview\Understand\Assistant\DialogueContext
     */
    public function __construct(Version $version, $assistantSid, $sid) {
        parent::__construct($version);

        // Path Solution
        $this->solution = array('assistantSid' => $assistantSid, 'sid' => $sid, );

        $this->uri = '/Assistants/' . rawurlencode($assistantSid) . '/Dialogues/' . rawurlencode($sid) . '';
    }

    /**
     * Fetch a DialogueInstance
     *
     * @return DialogueInstance Fetched DialogueInstance
     * @throws TwilioException When an HTTP error occurs.
     */
    public function fetch() {
        $params = Values::of(array());

        $payload = $this->version->fetch(
            'GET',
            $this->uri,
            $params
        );

        return new DialogueInstance(
            $this->version,
            $payload,
            $this->solution['assistantSid'],
            $this->solution['sid']
        );
    }

    /**
     * Provide a friendly representation
     *
     * @return string Machine friendly representation
     */
    public function __toString() {
        $context = array();
        foreach ($this->solution as $key => $value) {
            $context[] = "$key=$value";
        }
        return '[Twilio.Preview.Understand.DialogueContext ' . implode(' ', $context) . ']';
    }
}