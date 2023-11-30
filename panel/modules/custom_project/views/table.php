<?php
defined('BASEPATH') or exit('No direct script access allowed');

$aColumns = [
    'id',
    'first_name',
    'last_name',
    'CC_language',
    'phone_number',
    'email',
    'welcome_call',
    'ntp_requested',
    'ntp_granted',
    'utility',
    'created',
];

$sIndexColumn = 'id';
$sTable       = P_MODULE_DB_TABLE;
$where = array();
$join = array();
$CI = &get_instance();

array_push($where,'AND is_deleted=0');


$result = data_tables_init($aColumns, $sIndexColumn, $sTable, $join, $where, []);
$output  = $result['output'];
$rResult = $result['rResult'];

foreach ($rResult as $aRow) {
    $row = [];
    $id = $aRow['id'];
    $row[] = $id;

    $row[] = $aRow['first_name'];
    $row[] = $aRow['last_name'];
    $row[] = $aRow['CC_language'];
    $row[] = $aRow['phone_number'];
    $row[] = $aRow['email'];
    $row[] = isset($aRow['welcome_call']) ? _d($aRow['welcome_call']) : NULL;
    $row[] = isset($aRow['ntp_requested']) ? _d($aRow['ntp_requested']) : NULL;
    $row[] = isset($aRow['ntp_granted']) ? _d($aRow['ntp_granted']) : NULL;

    $row[] = $aRow['utility'];
    $row[] = isset($aRow['created']) ? _dt($aRow['created']) : '';

    $options = "";

    if ( has_permission(P_MODULE_PERMISSION, '', 'view')  || is_admin() ) {
        $options .= ' <a href="'.admin_url(P_MODULE.'/view/'.$id).'">View</a>';
    }

    if ( has_permission(P_MODULE_PERMISSION, '', 'edit') || is_admin() ) {
        $options .= ' | <a href="'.admin_url(P_MODULE.'/create/'.$id).'">Edit</a>';
    }

    if ( has_permission(P_MODULE_PERMISSION, '', 'delete')  || is_admin() ) {
        $options .= ' | <a href="'.admin_url(P_MODULE.'/delete/'.$id).'" class="_delete" style="color: red">Delete</a>';
    }

    $row[] = $options;
    $row['DT_RowClass'] = 'has-row-options';
    $output['aaData'][] = $row;

}

