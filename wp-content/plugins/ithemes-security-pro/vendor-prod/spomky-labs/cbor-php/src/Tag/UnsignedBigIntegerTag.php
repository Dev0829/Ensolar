<?php
/**
 * @license MIT
 *
 * Modified using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

declare(strict_types=1);

/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2018-2020 Spomky-Labs
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

namespace iThemesSecurity\Strauss\CBOR\Tag;

use iThemesSecurity\Strauss\CBOR\ByteStringObject;
use iThemesSecurity\Strauss\CBOR\CBORObject;
use iThemesSecurity\Strauss\CBOR\IndefiniteLengthByteStringObject;
use iThemesSecurity\Strauss\CBOR\Normalizable;
use iThemesSecurity\Strauss\CBOR\Tag;
use iThemesSecurity\Strauss\CBOR\Utils;
use InvalidArgumentException;

/**
 * @final
 */
class UnsignedBigIntegerTag extends Tag implements Normalizable
{
    public function __construct(int $additionalInformation, ?string $data, CBORObject $object)
    {
        if (! $object instanceof ByteStringObject && ! $object instanceof IndefiniteLengthByteStringObject) {
            throw new InvalidArgumentException('This tag only accepts a Byte String object.');
        }

        parent::__construct($additionalInformation, $data, $object);
    }

    public static function getTagId(): int
    {
        return self::TAG_UNSIGNED_BIG_NUM;
    }

    public static function createFromLoadedData(int $additionalInformation, ?string $data, CBORObject $object): Tag
    {
        return new self($additionalInformation, $data, $object);
    }

    public static function create(CBORObject $object): Tag
    {
        [$ai, $data] = self::determineComponents(self::TAG_UNSIGNED_BIG_NUM);

        return new self($ai, $data, $object);
    }

    public function normalize(): string
    {
        /** @var ByteStringObject|IndefiniteLengthByteStringObject $object */
        $object = $this->object;

        return Utils::hexToString($object->normalize());
    }

    /**
     * @deprecated The method will be removed on v3.0. Please rely on the CBOR\Normalizable interface
     */
    public function getNormalizedData(bool $ignoreTags = false)
    {
        if ($ignoreTags) {
            return $this->object->getNormalizedData($ignoreTags);
        }

        if (! $this->object instanceof ByteStringObject) {
            return $this->object->getNormalizedData($ignoreTags);
        }

        return Utils::hexToString($this->object->getValue());
    }
}
