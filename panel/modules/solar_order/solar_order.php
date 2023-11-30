<?php
defined('BASEPATH') or exit('No direct script access allowed');

/*
Module Name: Sale Orders
Description: Module created for Sale Orders
Version: 1.0
Author: Naseem Abbas
Author URI: http://muxsolutions.com/
Requires at least: 2.3.*
*/


define('S_TITLE', 'Project');
define('S_MODULE_NAME', 'solar_order');
define('S_MODULE', S_MODULE_NAME);
define('S_MODULE_DB_TABLE', 'tbl_'.S_MODULE_NAME);
define('S_MODULE_MODEL', S_MODULE_NAME.'_model');
define('S_MODULE_LIB', 'solar_order_repository');
define('S_MODULE_TITLE', S_TITLE);
define('S_MODULE_PERMISSION', 'solar_order');
$CI =& get_instance();

$CI->load->helper(S_MODULE_NAME . '/'.S_MODULE_NAME);

/**
 * Register activation module hook
 */

register_activation_hook(S_MODULE_NAME, S_MODULE_NAME.'_activation_hook');

function solar_order_activation_hook()
{
    $CI =& get_instance();

    require_once (__DIR__ . '/install.php');

    $alreadyInstalled = get_option(S_MODULE_NAME.'_active');

    if ($alreadyInstalled != "" && $alreadyInstalled != NULL)
    {
        update_option(S_MODULE_NAME.'_active', 1);
    }
    else
    {
        add_option(S_MODULE_NAME.'_active', 1);
    }
}

/**
 * Deactivation module hook
 */

register_deactivation_hook(S_MODULE_NAME, S_MODULE_NAME.'_deactivation_hook');

function solar_order_deactivation_hook()
{
    update_option(S_MODULE_NAME.'_active', 0, 1);
}

register_language_files(S_MODULE_NAME, [S_MODULE_NAME]);

/**
 * Setup Menu Hook
 */

hooks()->add_action('admin_init', S_MODULE_NAME.'_init_menu_items');

function solar_order_init_menu_items()
{
    $CI =& get_instance();

    /**
     * If the logged in user is administrator, add custom menu in Setup
     */

    if (has_permission(S_MODULE_PERMISSION, '', 'view'))
    {
        $CI->app_menu->add_sidebar_menu_item(S_MODULE_NAME, [
            'slug' => S_MODULE_NAME,
            'name' => _l('Sale Orders') ,
            'icon' => 'fa fa-cog',
            'href' => admin_url(S_MODULE_NAME),
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

hooks()->add_action('admin_init', S_MODULE_NAME.'_permissions');

function solar_order_permissions()
{
    $capabilities = [];
    $capabilities['capabilities'] = ['view' => _l('permission_view') . '(' . _l('permission_global') . ')', 'create' => _l('permission_create') , 'edit' => _l('permission_edit') , 'delete' => _l('permission_delete') , ];
    register_staff_capabilities(S_MODULE_NAME, $capabilities, _l(S_MODULE_NAME));
}


/*hooks()->add_action('clients_init', 'solar_order_clients_area_menu');
function solar_order_clients_area_menu()
{


    if (is_client_logged_in()) {
        $CI =& get_instance();
        $is_supplier = $CI->db->select('userid')
            ->from('tblclients')
            ->where('userid',get_client_user_id())
            ->where('is_supplier',1)
            ->get()->row('userid');

        if (isset($is_supplier) && !empty($is_supplier)) {
            add_theme_menu_item('solar_order', [
                'name' => _l('solar_order'),
                'href' => site_url('solar_order/client'),
                'position' => 1,
            ]);
        }


    }
}

hooks()->add_action('after_custom_fields_select_options', 'solar_order_module_custom_fields');
function solar_order_module_custom_fields($custom_field)
{
    $selected = (isset($custom_field) && $custom_field->fieldto == 'customer_work_o') ? 'selected' : '';
    echo '<option value="customer_work_o"  ' . ($selected) . '>' . _l('customer_work_o') . '</option>';
}*/


