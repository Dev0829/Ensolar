<?php
defined('BASEPATH') or exit('No direct script access allowed');

$aColumns = [
    'id',
    'first_name',
    'last_name',
    'project_status',
    'date_of_sale',
    'sales_representative',
    'dealer_group',
    'contract_price',
    'system_specifications',
    'created',
];

$sIndexColumn = 'id';
$sTable       = S_MODULE_DB_TABLE;
$where = array();
$join = array();
$CI = &get_instance();

array_push($where,'AND is_deleted=0');


$result = data_tables_init($aColumns, $sIndexColumn, $sTable, $join, $where, []);
$output  = $result['output'];
$rResult = $result['rResult'];

foreach ($rResult as $aRow) {
    $row = [];
    $CI = &get_instance();

    $id = $aRow['id'];
    $row[] = $id;
    $row[] = $aRow['first_name'];
    $row[] = $aRow['last_name'];
    $row[] = $aRow['project_status'];
    $row[] = isset($aRow['date_of_sale']) ? _d($aRow['date_of_sale']) : '';
    $row[] = $aRow['sales_representative'];
    $row[] = isset($aRow['dealer_group']) ? $aRow['dealer_group'] : '';
    $row[] = isset($aRow['contract_price']) ? $aRow['contract_price'] : '';
    $row[] = isset($aRow['system_specifications']) ? $aRow['system_specifications'] : '';
    $row[] = isset($aRow['created']) ? _dt($aRow['created']) : '';
    $options = "";

    if ( has_permission(S_MODULE_PERMISSION, '', 'view')  || is_admin() ) {
        $options .= ' <a href="'.admin_url(S_MODULE.'/view/'.$id).'">View</a>';
    }

    if ( has_permission(S_MODULE_PERMISSION, '', 'edit') || is_admin() ) {
        $options .= ' | <a href="'.admin_url(S_MODULE.'/create/'.$id).'">Edit</a>';
    }

    if ( has_permission(S_MODULE_PERMISSION, '', 'delete')  || is_admin() ) {
        $options .= ' | <a href="'.admin_url(S_MODULE.'/delete/'.$id).'" class="_delete" style="color: red">Delete</a>';
    }

    $row[] = $options;
    $row['DT_RowClass'] = 'has-row-options';
    $output['aaData'][] = $row;

}

