<?php

namespace Blocksy;

class MediaMetaTools {
	private $meta_key = 'blocksy_media_video';

	public function __construct() {
		add_filter(
			'attachment_fields_to_edit',
			[$this, 'attachment_fields_to_edit'],
			10,
			2
		);

		add_filter(
			'attachment_fields_to_save',
			[$this, 'attachment_fields_to_save'],
			10, 2
		);
	}

	public function attachment_fields_to_edit($form_fields, $post) {
		if (strpos($post->post_mime_type, 'image/') !== 0) {
			return $form_fields;
		}

		$form_fields['blocksy_media_tools_title'] = [
			'tr' => '<td colspan="2" class="ct-media-fields-title">' . sprintf( '<h2>%s</h2>', __('Attachment Video', 'blocksy-companion' ) ) . '</td>',
		];

		$form_fields[$this->meta_key] = [
			'label' => __('Video URL', 'blocksy-companion'),
			'input' => 'text',
			'value' => get_post_meta($post->ID, $this->meta_key, true),
		];

		/* Translators: 1: Link to wordpress.org article open 2: link closing */
		$valid_media_link = sprintf(
			__(
				'Enter a %1$svalid media URL%2$s or upload an MP4 file into the media library.',
				'blocksy-companion'
			),
			'<a href="' . esc_url('https://wordpress.org/support/article/embeds/#okay-so-what-sites-can-i-embed-from') . '" target="_blank">',
			'</a>'
		);

		$form_fields['blocksy_media_tools_upload'] = array(
			'tr' => '<th scope="row" class="label"><label><span class="alignleft">' . __('Upload', 'blocksy-companion') . '</span></label></th>
			<td class="field">
			<span class="setting has-description"><a href="#" class="ct-upload-video button-secondary" data-image-id="' . esc_attr($post->ID) . '">' . __('Upload Video (MP4 File)', 'blocksy-companion' ) . '</a></span>
			<p class="description" style="width: 100%; padding-top: 4px;">' . $valid_media_link . '</p>
			</td>',
		);

		return $form_fields;
	}

	public function attachment_fields_to_save($post, $attachment) {
		if (isset($attachment[$this->meta_key] ) ) {
			update_post_meta(
				$post['ID'],
				$this->meta_key,
				$attachment[$this->meta_key]
			);
		}

		return $post;
	}
}
