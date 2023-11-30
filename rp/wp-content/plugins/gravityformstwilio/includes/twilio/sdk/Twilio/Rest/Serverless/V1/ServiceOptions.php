<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Serverless\V1;

use Twilio\Options;
use Twilio\Values;

/**
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 */
abstract class ServiceOptions {
    /**
     * @param bool $includeCredentials Whether to inject Account credentials into a
     *                                 Function invocation context.
     * @return CreateServiceOptions Options builder
     */
    public static function create($includeCredentials = Values::NONE) {
        return new CreateServiceOptions($includeCredentials);
    }

    /**
     * @param bool $includeCredentials Whether to inject Account credentials into a
     *                                 Function invocation context.
     * @param string $friendlyName A human-readable description of this Service.
     * @return UpdateServiceOptions Options builder
     */
    public static function update($includeCredentials = Values::NONE, $friendlyName = Values::NONE) {
        return new UpdateServiceOptions($includeCredentials, $friendlyName);
    }
}

class CreateServiceOptions extends Options {
    /**
     * @param bool $includeCredentials Whether to inject Account credentials into a
     *                                 Function invocation context.
     */
    public function __construct($includeCredentials = Values::NONE) {
        $this->options['includeCredentials'] = $includeCredentials;
    }

    /**
     * A boolean value that indicates whether to inject Account credentials into a Function invocation context. Optional, default `false`.
     *
     * @param bool $includeCredentials Whether to inject Account credentials into a
     *                                 Function invocation context.
     * @return $this Fluent Builder
     */
    public function setIncludeCredentials($includeCredentials) {
        $this->options['includeCredentials'] = $includeCredentials;
        return $this;
    }

    /**
     * Provide a friendly representation
     *
     * @return string Machine friendly representation
     */
    public function __toString() {
        $options = array();
        foreach ($this->options as $key => $value) {
            if ($value != Values::NONE) {
                $options[] = "$key=$value";
            }
        }
        return '[Twilio.Serverless.V1.CreateServiceOptions ' . implode(' ', $options) . ']';
    }
}

class UpdateServiceOptions extends Options {
    /**
     * @param bool $includeCredentials Whether to inject Account credentials into a
     *                                 Function invocation context.
     * @param string $friendlyName A human-readable description of this Service.
     */
    public function __construct($includeCredentials = Values::NONE, $friendlyName = Values::NONE) {
        $this->options['includeCredentials'] = $includeCredentials;
        $this->options['friendlyName'] = $friendlyName;
    }

    /**
     * A boolean value that indicates whether to inject Account credentials into a Function invocation context. Optional.
     *
     * @param bool $includeCredentials Whether to inject Account credentials into a
     *                                 Function invocation context.
     * @return $this Fluent Builder
     */
    public function setIncludeCredentials($includeCredentials) {
        $this->options['includeCredentials'] = $includeCredentials;
        return $this;
    }

    /**
     * A human-readable description of this Service, fewer than 256 characters. Optional
     *
     * @param string $friendlyName A human-readable description of this Service.
     * @return $this Fluent Builder
     */
    public function setFriendlyName($friendlyName) {
        $this->options['friendlyName'] = $friendlyName;
        return $this;
    }

    /**
     * Provide a friendly representation
     *
     * @return string Machine friendly representation
     */
    public function __toString() {
        $options = array();
        foreach ($this->options as $key => $value) {
            if ($value != Values::NONE) {
                $options[] = "$key=$value";
            }
        }
        return '[Twilio.Serverless.V1.UpdateServiceOptions ' . implode(' ', $options) . ']';
    }
}