<?php
defined('BASEPATH') or exit('No direct script access allowed');

$aColumns = [
    'id',
    'first_name',
    'last_name',
    'language',
    'email',
    'created',
];

$sIndexColumn = 'id';
$sTable       = C_MODULE_DB_TABLE;
$where = array();
$join = array();
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
    $row[] = $aRow['language'];
    $row[] = $aRow['email'];
    $row[] = isset($aRow['created']) ? _dt($aRow['created']) : '';

    $options = "";

    if ( has_permission(C_MODULE_PERMISSION, '', 'view')  || is_admin() ) {
        $options .= ' <a href="'.admin_url(C_MODULE.'/view/'.$id).'">View</a>';
    }

    if ( has_permission(C_MODULE_PERMISSION, '', 'edit') || is_admin() ) {
        $options .= ' | <a href="'.admin_url(C_MODULE.'/create/'.$id).'">Edit</a>';
    }

    if ( has_permission(C_MODULE_PERMISSION, '', 'delete')  || is_admin() ) {
        $options .= ' | <a href="'.admin_url(C_MODULE.'/delete/'.$id).'" class="_delete" style="color: red">Delete</a>';
    }

    $row[] = $options;
    $row['DT_RowClass'] = 'has-row-options';
    $output['aaData'][] = $row;

}

