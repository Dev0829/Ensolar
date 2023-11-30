<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Solar_order extends AdminController {

    private $_module;
    private $_db_table;
    private $_module_model;
    private $_module_lib;
    private $_title;
    private $_permission;
    public function __construct(){


        parent::__construct();
        $this->_module = S_MODULE;
        $this->_db_table = S_MODULE_DB_TABLE;
        $this->_module_model = S_MODULE_MODEL;
        $this->_module_lib = S_MODULE_LIB;
        $this->_title = 'Sale Orders';
        $this->_permission = S_MODULE_PERMISSION;

        $this->load->model($this->_module_model, $this->_module_model);
        $this->load->library($this->_module_lib,NULL,'module_repo');
    }

    public function index(){

        if (!has_permission($this->_permission, '', 'view')) {

            access_denied(_l($this->_permission));
        }

        if ($this->input->is_ajax_request()) {

            $this->app->get_table_data(module_views_path($this->_permission, 'table'));
        }

        //breadcrumb

        $data['form_heading'] = _l($this->_title).' '._l('summary');
        $data['title'] = _l($this->_title);
        $breadcrumb_data['current_page_title'] = $data['title'];
        $breadcrumb_data['breadcrumb_array'] = array(
            admin_url('') => 'Dashboard',
            admin_url($this->_module) => _l($this->_title),
        );
        $data['breadcrumb_data'] = $breadcrumb_data;
        $this->load->view('manage',$data);
    }

    public function create($id = '')

    {
        if (!has_permission($this->_permission, '', 'edit') && !has_permission($this->_permission, '', 'create')) {
            access_denied(_l($this->_permission));
        }

        $is_submit = sizeof($this->input->post()) > 0 ? TRUE : FALSE ;
        if ($is_submit != NULL) {
            $data = $this->input->post();

            unset($data['submit']);
            unset($data[$this->_module.'_id']);

            $uploadDir = 'modules/'.$this->_module.'/uploads';
            if (isset($_FILES['upload_solar_quote']['name']) && !empty($_FILES['upload_solar_quote']['name'])) {
                $upload_solar_quote = related_handle_upload_file($uploadDir,$_FILES['upload_solar_quote']['name'],$_FILES['upload_solar_quote']['tmp_name']);
            } else {
                $upload_solar_quote = NULL;
            }
            $data['upload_solar_quote'] = $upload_solar_quote;

            if (isset($_FILES['upload_pdf_contract']['name']) && !empty($_FILES['upload_pdf_contract']['name'])) {
                $upload_pdf_contract = related_handle_upload_file($uploadDir,$_FILES['upload_pdf_contract']['name'],$_FILES['upload_pdf_contract']['tmp_name']);
            } else {
                $upload_pdf_contract = NULL;
            }
            $data['upload_pdf_contract'] = $upload_pdf_contract;

            if ($id == '') {

                $id = $this->module_repo->save($data);
                if ($id) {
                    set_alert('success', $this->_title .' '.  _l(' created_successfully'));
                        redirect(admin_url($this->_module));
                }

            } else {

                $this->module_repo->save($data, $id);

                set_alert('success', $this->_title .' '. _l(' updated_successfully'));
                    redirect(admin_url($this->_module));
            }
        }

        if ($id == '' || $id == NULL) {
            isset($data) || $data = $this->module_repo->get_raw_data();

            if(!is_array($data) || $data == ""):
                blank_page('Record not found or deleted or wrong ID');
            endif;
            $title = $this->_title;
            $breadcrumb_data['current_page_title'] = _l('add') .' '.$title;
        } else {
            isset($data) || $data = $this->module_repo->fetch_data_from_db($id);

            if(!is_array($data) || $data == ""):

                blank_page('Record not found or deleted or wrong ID');

            endif;

            $title = $this->_title;

            $breadcrumb_data['current_page_title'] = _l('edit').' '.$title;

            $data['edit_mode'] = TRUE;

        }
        $data['form_heading'] = 'Details';
        $data['title'] = $this->_title;
        $breadcrumb_data['breadcrumb_array'] = array(
            admin_url('') => 'Dashboard',
            admin_url($this->_module) => _l($this->_title),
        );
        $data['breadcrumb_data'] = $breadcrumb_data;
        $this->load->view('create',$data);

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

    public function delete($id){

        if (!has_permission($this->_permission, '', 'delete')) {
            access_denied(_l($this->_permission));
        }

        $this->db->where('id',$id);
        $this->db->set('is_deleted',1);
        $this->db->update($this->_db_table);
        set_alert('success', $this->_title.' '. _l(' deleted_successfully'));
        redirect(admin_url($this->_module));

    }

    public function getCustomerInfoByCustomerId(){

        $id = $this->input->get('id');
        $data = $this->db->select("id,first_name,last_name,language,phone_number,email")
            ->from('tbl_customer_profile')
            ->where('id', $id)
            ->get()->row_array();

        echo json_encode($data);
    }

}