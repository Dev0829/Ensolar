<?php
defined('BASEPATH') or exit('No direct script access allowed');

/*
Module Name: Solar Project
Description: Module created for Solar Project
Version: 1.0
Author: Naseem Abbas
Author URI: http://muxsolutions.com/
Requires at least: 2.3.*
*/


define('P_TITLE', 'Project');
define('P_MODULE_NAME', 'custom_project');
define('P_MODULE', P_MODULE_NAME);
define('P_MODULE_DB_TABLE', 'tbl_'.P_MODULE_NAME);
define('P_MODULE_MODEL', P_MODULE_NAME.'_model');
define('P_MODULE_LIB', 'Custom_project_repository');
define('P_MODULE_TITLE', P_TITLE);
define('P_MODULE_PERMISSION', 'custom_project');
$CI =& get_instance();

$CI->load->helper(P_MODULE_NAME . '/'.P_MODULE_NAME);

/**
 * Register activation module hook
 */

register_activation_hook(P_MODULE_NAME, P_MODULE_NAME.'_activation_hook');

function custom_project_activation_hook()
{
    $CI =& get_instance();

    require_once (__DIR__ . '/install.php');

    $alreadyInstalled = get_option(P_MODULE_NAME.'_active');

    if ($alreadyInstalled != "" && $alreadyInstalled != NULL)
    {
        update_option(P_MODULE_NAME.'_active', 1);
    }
    else
    {
        add_option(P_MODULE_NAME.'_active', 1);
    }
}

/**
 * Deactivation module hook
 */

register_deactivation_hook(P_MODULE_NAME, P_MODULE_NAME.'_deactivation_hook');

function custom_project_deactivation_hook()
{
    update_option(P_MODULE_NAME.'_active', 0, 1);
}

register_language_files(P_MODULE_NAME, [P_MODULE_NAME]);

/**
 * Setup Menu Hook
 */

hooks()->add_action('admin_init', P_MODULE_NAME.'_init_menu_items');

function custom_project_init_menu_items()
{
    $CI =& get_instance();

    /**
     * If the logged in user is administrator, add custom menu in Setup
     */

    if (has_permission(P_MODULE_PERMISSION, '', 'view'))
    {
        $CI->app_menu->add_sidebar_menu_item(P_MODULE_NAME, [
            'slug' => P_MODULE_NAME,
            'name' => _l('Solar Project') ,
            'icon' => 'fa fa-cog',
            'href' => admin_url(P_MODULE_NAME),
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

hooks()->add_action('admin_init', P_MODULE_NAME.'_permissions');

function custom_project_permissions()
{
    $capabilities = [];
    $capabilities['capabilities'] = ['view' => _l('permission_view') . '(' . _l('permission_global') . ')', 'create' => _l('permission_create') , 'edit' => _l('permission_edit') , 'delete' => _l('permission_delete') , ];
    register_staff_capabilities(P_MODULE_NAME, $capabilities, _l(P_MODULE_NAME));
}


/*hooks()->add_action('clients_init', 'custom_project_clients_area_menu');
function custom_project_clients_area_menu()
{


    if (is_client_logged_in()) {
        $CI =& get_instance();
        $is_supplier = $CI->db->select('userid')
            ->from('tblclients')
            ->where('userid',get_client_user_id())
            ->where('is_supplier',1)
            ->get()->row('userid');

        if (isset($is_supplier) && !empty($is_supplier)) {
            add_theme_menu_item('custom_project', [
                'name' => _l('custom_project'),
                'href' => site_url('custom_project/client'),
                'position' => 1,
            ]);
        }


    }
}

hooks()->add_action('after_custom_fields_select_options', 'custom_project_module_custom_fields');
function custom_project_module_custom_fields($custom_field)
{
    $selected = (isset($custom_field) && $custom_field->fieldto == 'customer_work_o') ? 'selected' : '';
    echo '<option value="customer_work_o"  ' . ($selected) . '>' . _l('customer_work_o') . '</option>';
}*/


