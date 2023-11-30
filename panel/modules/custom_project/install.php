<?phpdefined('BASEPATH') or exit('No direct script access allowed');$CI =& get_instance();if (!$CI->db->table_exists(db_prefix() . '_custom_project')) {    $CI->db->query('CREATE TABLE `' . db_prefix() . '_custom_project`      (        `id` int(11) NOT NULL AUTO_INCREMENT,        `first_name` varchar(255) NULL DEFAULT NULL,        `last_name` varchar(255) NULL DEFAULT NULL,        `language` varchar(255) NULL DEFAULT NULL,        `phone_number` varchar(255) NULL DEFAULT NULL,        `email` varchar(255) NULL DEFAULT NULL,        `address` varchar(255) NULL DEFAULT NULL,        `welcome_call` varchar(255) NULL DEFAULT NULL,        `ntp_requested` varchar(255) NULL DEFAULT NULL,        `ntp_granted` varchar(255) NULL DEFAULT NULL,        `utility` varchar(255) NULL DEFAULT NULL,        `interconnection_agreement` varchar(255) NULL DEFAULT NULL,        `tier` varchar(255) NULL DEFAULT NULL,        `received_declaration_page` varchar(255) NULL DEFAULT NULL,        `request_for_1mm_liability_sent_to_the_agency` varchar(255) NULL DEFAULT NULL,        `assigned_agency` varchar(255) NULL DEFAULT NULL,        `mm1_liability_fees` varchar(255) NULL DEFAULT NULL,        `mm1_cert_received` varchar(255) NULL DEFAULT NULL,        `noc_received` varchar(255) NULL DEFAULT NULL,        `noc_sent_to_record` varchar(255) NULL DEFAULT NULL,        `noc_recorded` varchar(255) NULL DEFAULT NULL,        `cert_red_stamp` varchar(255) NULL DEFAULT NULL,        `hoa_info_received` varchar(255) NULL DEFAULT NULL,        `hoa_form_signed` varchar(255) NULL DEFAULT NULL,        `form_sent_to_hoa` varchar(255) NULL DEFAULT NULL,        `followup_notes` TEXT NULL,        `hoa_approved` varchar(255) NULL DEFAULT NULL,        `plans_request` varchar(255) NULL DEFAULT NULL,        `plans_received` varchar(255) NULL DEFAULT NULL,        `plans_approved_by_ensolar` varchar(255) NULL DEFAULT NULL,        `plans_revisions_requested` varchar(255) NULL DEFAULT NULL,        `plans_revisions_send_to_county` varchar(255) NULL DEFAULT NULL,        `plans_revisions_aproved_by_county` varchar(255) NULL DEFAULT NULL,        `permit_apply` varchar(255) NULL DEFAULT NULL,        `permit_number` varchar(255) NULL DEFAULT NULL,        `permit_fees` varchar(255) NULL DEFAULT NULL,        `permit_status` varchar(255) NULL DEFAULT NULL,        `permit_notes` TEXT NULL,        `date_of_last_change` varchar(255) NULL DEFAULT NULL,        `order_request` varchar(255) NULL DEFAULT NULL,        `order_date` varchar(255) NULL DEFAULT NULL,        `installation_date` varchar(255) NULL DEFAULT NULL,        `installation_team` varchar(255) NULL DEFAULT NULL,        `inspection_request` varchar(255) NULL DEFAULT NULL,        `inspection_status` varchar(255) NULL DEFAULT NULL,        `interconnection_request` varchar(255) NULL DEFAULT NULL,        `interconnection_approval` varchar(255) NULL DEFAULT NULL,        `system_on_bank_update` varchar(255) NULL DEFAULT NULL,        `permit_to_operate_received` varchar(255) NULL DEFAULT NULL,        `funding_request` varchar(255) NULL DEFAULT NULL,        `funding_received` varchar(255) NULL DEFAULT NULL,        `system_follow_up_process` varchar(255) NULL DEFAULT NULL,        `system_follow_up_date` varchar(255) NULL DEFAULT NULL,        `system_follow_up_comments`TEXT NULL,        `active` TINYINT(1) NULL DEFAULT 1,        `is_deleted` TINYINT(1) NULL DEFAULT 0,        `created` datetime DEFAULT CURRENT_TIMESTAMP,        `modified_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),        PRIMARY KEY (`id`)    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;');}//        `note` TEXT NULL,if (!$CI->db->field_exists('created_by', '_custom_project')) {    $CI->db->query('ALTER TABLE `' . db_prefix() . '_custom_project`  ADD COLUMN `created_by` INT(11) NULL DEFAULT NULL');}if (!$CI->db->field_exists('cc_customer_profile_id', '_custom_project')) {    $CI->db->query('ALTER TABLE `' . db_prefix() . '_custom_project`  ADD COLUMN `cc_customer_profile_id` INT(11) NULL DEFAULT NULL');}if (!$CI->db->field_exists('CC_language', '_custom_project')) {    $CI->db->query('ALTER TABLE `' . db_prefix() . '_custom_project` ADD COLUMN `CC_language` varchar(255) NULL DEFAULT NULL');}