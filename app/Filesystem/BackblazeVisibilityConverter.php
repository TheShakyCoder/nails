<?php

namespace App\Filesystem;

use League\Flysystem\AwsS3V3\VisibilityConverter;
use League\Flysystem\Visibility;

/**
 * Backblaze B2 does not support per-object ACLs. This converter omits the
 * ACL header entirely, relying on bucket-level visibility settings instead.
 */
class BackblazeVisibilityConverter implements VisibilityConverter
{
    public function visibilityToAcl(string $visibility): string
    {
        return '';
    }

    public function aclToVisibility(array $grants): string
    {
        return Visibility::PUBLIC;
    }

    public function defaultForDirectories(): string
    {
        return Visibility::PUBLIC;
    }
}
