<?php
defined('BASEPATH') or exit('No direct script access allowed');

/*
Module Name: Clients
Description: Module created for Clients
Version: 1.0
Author: Naseem Abbas
Author URI: http://muxsolutions.com/
Requires at least: 2.3.*
*/


define('C_TITLE', 'Customer Profile');
define('C_MODULE_NAME', 'customer_profile');
define('C_MODULE', C_MODULE_NAME);
define('C_MODULE_DB_TABLE', 'tbl_'.C_MODULE_NAME);
define('C_MODULE_MODEL', C_MODULE_NAME.'_model');
define('C_MODULE_LIB', 'Customer_profile_repository');
define('C_MODULE_TITLE', C_TITLE);
define('C_MODULE_PERMISSION', 'customer_profile');
$CI =& get_instance();

$CI->load->helper(C_MODULE_NAME . '/'.C_MODULE_NAME);

/**
 * Register activation module hook
 */

register_activation_hook(C_MODULE_NAME, C_MODULE_NAME.'_activation_hook');

function customer_profile_activation_hook()
{
    $CI =& get_instance();

    require_once (__DIR__ . '/install.php');

    $alreadyInstalled = get_option(C_MODULE_NAME.'_active');

    if ($alreadyInstalled != "" && $alreadyInstalled != NULL)
    {
        update_option(C_MODULE_NAME.'_active', 1);
    }
    else
    {
        add_option(C_MODULE_NAME.'_active', 1);
    }
}

/**
 * Deactivation module hook
 */

register_deactivation_hook(C_MODULE_NAME, C_MODULE_NAME.'_deactivation_hook');

function customer_profile_deactivation_hook()
{
    update_option(C_MODULE_NAME.'_active', 0, 1);
}

register_language_files(C_MODULE_NAME, [C_MODULE_NAME]);

/**
 * Setup Menu Hook
 */

hooks()->add_action('admin_init', C_MODULE_NAME.'_init_menu_items');

function customer_profile_init_menu_items()
{
    $CI =& get_instance();

    /**
     * If the logged in user is administrator, add custom menu in Setup
     */

    if (has_permission(C_MODULE_PERMISSION, '', 'view'))
    {
        $CI->app_menu->add_sidebar_menu_item(C_MODULE_NAME, [
            'slug' => C_MODULE_NAME,
            'name' => _l('Clients') ,
            'icon' => 'fa fa-cog',
            'href' => admin_url(C_MODULE_NAME),
            'position' => 12,
            ]);

       /* $CI->app_tabs->add_customer_profile_tab('refund', [
            'name'     => _l('Tax Refund'),
            'icon'     => 'fa fa-user-circle',
            'view'     => '../../modules/refund/views/clients/groups/refund',
            'position' => 100,
        ]);

        $CI->app_tabs->add_customer_profile_tab('reimbursement', [
            'name'     => _l('Reimbursement'),
            'icon'     => 'fa fa-user-circle',
            'view'     => '../../modules/refund/views/clients/groups/reimbursement',
            'position' => 101,
        ]);*/

    }
}

hooks()->add_action('admin_init', C_MODULE_NAME.'_permissions');

function customer_profile_permissions()
{
    $capabilities = [];
    $capabilities['capabilities'] = ['view' => _l('permission_view') . '(' . _l('permission_global') . ')', 'create' => _l('permission_create') , 'edit' => _l('permission_edit') , 'delete' => _l('permission_delete') , ];
    register_staff_capabilities(C_MODULE_NAME, $capabilities, _l(C_MODULE_NAME));
}


/*hooks()->add_action('clients_init', 'customer_profile_clients_area_menu');
function customer_profile_clients_area_menu()
{


    if (is_client_logged_in()) {
        $CI =& get_instance();
        $is_supplier = $CI->db->select('userid')
            ->from('tblclients')
            ->where('userid',get_client_user_id())
            ->where('is_supplier',1)
            ->get()->row('userid');

        if (isset($is_supplier) && !empty($is_supplier)) {
            add_theme_menu_item('customer_profile', [
                'name' => _l('customer_profile'),
                'href' => site_url('customer_profile/client'),
                'position' => 1,
            ]);
        }


    }
}

hooks()->add_action('after_custom_fields_select_options', 'customer_profile_module_custom_fields');
function customer_profile_module_custom_fields($custom_field)
{
    $selected = (isset($custom_field) && $custom_field->fieldto == 'customer_work_o') ? 'selected' : '';
    echo '<option value="customer_work_o"  ' . ($selected) . '>' . _l('customer_work_o') . '</option>';
}*/


