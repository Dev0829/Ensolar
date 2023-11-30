<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Custom_project extends AdminController
{

    private $_module;
    private $_db_table;
    private $_module_model;
    private $_module_lib;
    private $_title;
    private $_permission;

    public function __construct()
    {


        parent::__construct();
        $this->_module = P_MODULE;
        $this->_db_table = P_MODULE_DB_TABLE;
        $this->_module_model = P_MODULE_MODEL;
        $this->_module_lib = P_MODULE_LIB;
        $this->_title = 'Solar Project';
        $this->_permission = P_MODULE_PERMISSION;

        $this->load->model($this->_module_model, $this->_module_model);
        $this->load->library($this->_module_lib, NULL, 'module_repo');
    }

    public function index()
    {

        if (!has_permission($this->_permission, '', 'view')) {

            access_denied(_l($this->_permission));
        }

        if ($this->input->is_ajax_request()) {

            $this->app->get_table_data(module_views_path($this->_permission, 'table'));
        }

        //breadcrumb

        $data['form_heading'] = _l($this->_title) . ' ' . _l('summary');
        $data['title'] = _l($this->_title);
        $breadcrumb_data['current_page_title'] = $data['title'];
        $breadcrumb_data['breadcrumb_array'] = array(
            admin_url('') => 'Dashboard',
            admin_url($this->_module) => _l($this->_title),
        );
        $data['breadcrumb_data'] = $breadcrumb_data;
        $this->load->view('manage', $data);
    }

    public function create($id = '')

    {
        if (!has_permission($this->_permission, '', 'edit') && !has_permission($this->_permission, '', 'create')) {
            access_denied(_l($this->_permission));
        }

        $is_submit = sizeof($this->input->post()) > 0 ? TRUE : FALSE;
        if ($is_submit != NULL) {
            $data = $this->input->post();

            $customer_type = isset($data['customer_type']) ? $data['customer_type'] : '';
            unset($data['submit']);
            unset($data[$this->_module . '_id']);

            /* $uploadDir = 'modules/'.$this->_module.'/uploads';
             if (isset($_FILES['business_licenses']['name']) && !empty($_FILES['business_licenses']['name'])) {
                 $business_licenses = related_handle_upload_file($uploadDir,$_FILES['business_licenses']['name'],$_FILES['business_licenses']['tmp_name']);
             } else {
                 $business_licenses = NULL;
             }
             $data['business_licenses'] = $business_licenses;

             if (isset($_FILES['business_insurance']['name']) && !empty($_FILES['business_insurance']['name'])) {
                 $business_insurance = related_handle_upload_file($uploadDir,$_FILES['business_insurance']['name'],$_FILES['business_insurance']['tmp_name']);
             } else {
                 $business_insurance = NULL;
             }
             $data['business_insurance'] = $business_insurance;

             if (isset($_FILES['w9']['name']) && !empty($_FILES['w9']['name'])) {
                 $w9 = related_handle_upload_file($uploadDir,$_FILES['w9']['name'],$_FILES['w9']['tmp_name']);
             } else {
                 $w9 = NULL;
             }
             $data['w9'] = $w9;

             if (isset($_FILES['id_photos']['name']) && !empty($_FILES['id_photos']['name'])) {
                 $id_photos = related_handle_upload_file($uploadDir,$_FILES['id_photos']['name'],$_FILES['id_photos']['tmp_name']);
             } else {
                 $id_photos = NULL;
             }
             $data['id_photos'] = $id_photos;*/

            if ($id == '') {
                /* if (isset($data['custom_fields'])) {
                     $custom_fields = $data['custom_fields'];
                     unset($data['custom_fields']);
                 }*/

                // $data['message'] = $message;
                $id = $this->module_repo->save($data);
                /* if (isset($custom_fields)) {
                     handle_custom_fields_post($id, $custom_fields);
                 }*/
                if ($id) {
                    set_alert('success', $this->_title . ' ' . _l(' created_successfully'));
                    if (isset($customer_type) && !empty($customer_type)) {

                        redirect(admin_url('clients/client/' . $data['clientid'] . '?group=' . $this->_module));
                    } else {
                        redirect(admin_url($this->_module));
                    }
                }

            } else {

                /* if (isset($data['custom_fields'])) {
                     $custom_fields = $data['custom_fields'];
                     unset($data['custom_fields']);
                 }

                 if (isset($custom_fields)) {
                     handle_custom_fields_post($id, $custom_fields);
                 }*/

                $this->module_repo->save($data, $id);

                set_alert('success', $this->_title . ' ' . _l(' updated_successfully'));
                if (isset($customer_type) && !empty($customer_type)) {
                    redirect(admin_url('clients/client/' . $data['clientid'] . '?group=' . $this->_module));
                } else {
                    redirect(admin_url($this->_module));
                }
            }
        }

        if ($id == '' || $id == NULL) {
            isset($data) || $data = $this->module_repo->get_raw_data();

            if (!is_array($data) || $data == ""):
                blank_page('Record not found or deleted or wrong ID');
            endif;
            $title = $this->_title;
            $breadcrumb_data['current_page_title'] = _l('add') . ' ' . $title;
        } else {
            isset($data) || $data = $this->module_repo->fetch_data_from_db($id);

            if (!is_array($data) || $data == ""):

                blank_page('Record not found or deleted or wrong ID');

            endif;

            $title = $this->_title;

            $breadcrumb_data['current_page_title'] = _l('edit') . ' ' . $title;

            $data['edit_mode'] = TRUE;

        }
        $data['form_heading'] = 'Details';
        $data['title'] = $this->_title;
        $breadcrumb_data['breadcrumb_array'] = array(
            admin_url('') => 'Dashboard',
            admin_url($this->_module) => _l($this->_title),
        );
        $data['breadcrumb_data'] = $breadcrumb_data;
        // $data['categories']    = $this->expenses_model->get_category();
        $this->load->view('create', $data);

    }

    public function delete($id)
    {

        if (!has_permission($this->_permission, '', 'delete')) {
            access_denied(_l($this->_permission));
        }

        $this->db->where('id', $id);
        $this->db->set('is_deleted', 1);
        $this->db->update($this->_db_table);
        set_alert('success', $this->_title . ' ' . _l(' deleted_successfully'));
        redirect(admin_url($this->_module));

    }

    public function view($id = '')

    {
        if (!has_permission($this->_permission, '', 'view')) {
            access_denied(_l($this->_permission));
        }

        $data = $this->module_repo->fetch_data_from_db($id);
        $data['form_heading'] = 'Details';
        $data['title'] = $this->_title;
        $breadcrumb_data['breadcrumb_array'] = array(
            admin_url('') => 'Dashboard',
            admin_url($this->_module) => _l($this->_title),
        );
        $data['breadcrumb_data'] = $breadcrumb_data;
        $this->load->view('view', $data);

    }
    public function getCustomerInfoByCustomerId(){

        $id = $this->input->get('id');
        $data = $this->db->select("id,first_name,last_name,language,phone_number,email")
            ->from('tbl_customer_profile')
            ->where('id', $id)
            ->get()->row_array();

        echo json_encode($data);
    }

    public function updateDatabase(){
        $getProject = $this->db->select('*')->from('tbl_custom_project')->get()->result_array();
        foreach ($getProject as $project){
            $project_update['welcome_call'] = isset($project['welcome_call']) ? date('Y-m-d', strtotime($project['welcome_call'])) : NULL;
            $project_update['ntp_requested'] = isset($project['ntp_requested']) ? date('Y-m-d', strtotime($project['ntp_requested'])) : NULL;
            $project_update['ntp_granted'] = isset($project['ntp_granted']) ? date('Y-m-d', strtotime($project['ntp_granted'])) : NULL;
            $project_update['mm1_cert_received'] = isset($project['mm1_cert_received']) ? date('Y-m-d', strtotime($project['mm1_cert_received'])) : NULL;
            $project_update['noc_received'] = isset($project['noc_received']) ? date('Y-m-d', strtotime($project['noc_received'])) : NULL;
            $project_update['noc_sent_to_record'] = isset($project['noc_sent_to_record']) ? date('Y-m-d', strtotime($project['noc_sent_to_record'])) : NULL;
            $project_update['noc_recorded'] = isset($project['noc_recorded']) ? date('Y-m-d', strtotime($project['noc_recorded'])) : NULL;
            $project_update['cert_red_stamp'] = isset($project['cert_red_stamp']) ? date('Y-m-d', strtotime($project['cert_red_stamp'])) : NULL;
            $project_update['hoa_info_received'] = isset($project['hoa_info_received']) ? date('Y-m-d', strtotime($project['hoa_info_received'])) : NULL;
            $project_update['hoa_form_signed'] = isset($project['hoa_form_signed']) ? date('Y-m-d', strtotime($project['hoa_form_signed'])) : NULL;
            $project_update['form_sent_to_hoa'] = isset($project['form_sent_to_hoa']) ? date('Y-m-d', strtotime($project['form_sent_to_hoa'])) : NULL;
            $project_update['hoa_approved'] = isset($project['hoa_approved']) ? date('Y-m-d', strtotime($project['hoa_approved'])) : NULL;
            $project_update['plans_request'] = isset($project['plans_request']) ? date('Y-m-d', strtotime($project['plans_request'])) : NULL;
            $project_update['plans_received'] = isset($project['plans_received']) ? date('Y-m-d', strtotime($project['plans_received'])) : NULL;
            $project_update['plans_approved_by_ensolar'] = isset($project['plans_approved_by_ensolar']) ? date('Y-m-d', strtotime($project['plans_approved_by_ensolar'])) : NULL;
            $project_update['plans_revisions_requested'] = isset($project['plans_revisions_requested']) ? date('Y-m-d', strtotime($project['plans_revisions_requested'])) : NULL;
            $project_update['plans_revisions_send_to_county'] = isset($project['plans_revisions_send_to_county']) ? date('Y-m-d', strtotime($project['plans_revisions_send_to_county'])) : NULL;
            $project_update['plans_revisions_aproved_by_county'] = isset($project['plans_revisions_aproved_by_county']) ? date('Y-m-d', strtotime($project['plans_revisions_aproved_by_county'])) : NULL;
            $project_update['permit_apply'] = isset($project['permit_apply']) ? date('Y-m-d', strtotime($project['permit_apply'])) : NULL;
            $project_update['date_of_last_change'] = isset($project['date_of_last_change']) ? date('Y-m-d', strtotime($project['date_of_last_change'])) : NULL;
            $project_update['order_date'] = isset($project['order_date']) ? date('Y-m-d', strtotime($project['order_date'])) : NULL;
            $project_update['installation_date'] = isset($project['installation_date']) ? date('Y-m-d', strtotime($project['installation_date'])) : NULL;
            $project_update['inspection_request'] = isset($project['inspection_request']) ? date('Y-m-d', strtotime($project['inspection_request'])) : NULL;
            $project_update['interconnection_request'] = isset($project['interconnection_request']) ? date('Y-m-d', strtotime($project['interconnection_request'])) : NULL;
            $project_update['interconnection_approval'] = isset($project['interconnection_approval']) ? date('Y-m-d', strtotime($project['interconnection_approval'])) : NULL;
            $project_update['system_on_bank_update'] = isset($project['system_on_bank_update']) ? date('Y-m-d', strtotime($project['system_on_bank_update'])) : NULL;
            $project_update['permit_to_operate_received'] = isset($project['permit_to_operate_received']) ? date('Y-m-d', strtotime($project['permit_to_operate_received'])) : NULL;
            $project_update['funding_request'] = isset($project['funding_request']) ? date('Y-m-d', strtotime($project['funding_request'])) : NULL;
            $project_update['funding_received'] = isset($project['funding_received']) ? date('Y-m-d', strtotime($project['funding_received'])) : NULL;
            $project_update['system_follow_up_date'] = isset($project['system_follow_up_date']) ? date('Y-m-d', strtotime($project['system_follow_up_date'])) : NULL;

            $this->db->where('id',$project['id']);
            $this->db->update('tbl_custom_project',$project_update);
        }
    }
}