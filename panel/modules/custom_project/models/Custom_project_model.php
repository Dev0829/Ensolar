<?phpdefined('BASEPATH') or exit('No direct script access allowed');class Custom_project_model extends App_Model{    protected $_table_name = P_MODULE_DB_TABLE;    protected $_primary_key = 'id';    protected $_primary_filter = 'intval';    function __construct()    {        parent::__construct();    }    // Get Last id saved    public function getLastID()    {        return $this->db->select('id')->order_by('id', "desc")->limit(1)->get($this->_table_name)->row();    }    public function get($id = NULL, $single = FALSE)    {        if ($id != NULL) {            $filter = $this->_primary_filter;            $id = $filter($id);            $this->db->where($this->_primary_key, $id);            $method = 'row_array';        } elseif ($single == TRUE) {            $method = 'row_array';        } else {            $method = 'result_array';        }        return $this->db->get($this->_table_name)->$method();    }    public function get_by($where, $single = FALSE)    {        $this->db->where($where);        return $this->get(NULL, $single);    }    public function save($data, $id = NULL)    {        $now = date('Y-m-d H:i:s');        $data['welcome_call'] = isset($data['welcome_call']) ? to_sql_date($data['welcome_call']) : NULL;        $data['ntp_requested'] = isset($data['ntp_requested']) ? to_sql_date($data['ntp_requested']) : NULL;        $data['ntp_granted'] = isset($data['ntp_granted']) ? to_sql_date($data['ntp_granted']) : NULL;        $data['mm1_cert_received'] = isset($data['mm1_cert_received']) ? to_sql_date($data['mm1_cert_received']) : NULL;        $data['noc_received'] = isset($data['noc_received']) ? to_sql_date($data['noc_received']) : NULL;        $data['noc_sent_to_record'] = isset($data['noc_sent_to_record']) ? to_sql_date($data['noc_sent_to_record']) : NULL;        $data['noc_recorded'] = isset($data['noc_recorded']) ? to_sql_date($data['noc_recorded']) : NULL;        $data['cert_red_stamp'] = isset($data['cert_red_stamp']) ? to_sql_date($data['cert_red_stamp']) : NULL;        //$data['hoa_info_received'] = isset($data['hoa_info_received']) ? to_sql_date($data['hoa_info_received']) : NULL;        $data['hoa_form_signed'] = isset($data['hoa_form_signed']) ? to_sql_date($data['hoa_form_signed']) : NULL;        $data['form_sent_to_hoa'] = isset($data['form_sent_to_hoa']) ? to_sql_date($data['form_sent_to_hoa']) : NULL;        $data['hoa_approved'] = isset($data['hoa_approved']) ? to_sql_date($data['hoa_approved']) : NULL;        $data['plans_request'] = isset($data['plans_request']) ? to_sql_date($data['plans_request']) : NULL;        $data['plans_received'] = isset($data['plans_received']) ? to_sql_date($data['plans_received']) : NULL;        $data['plans_approved_by_ensolar'] = isset($data['plans_approved_by_ensolar']) ? to_sql_date($data['plans_approved_by_ensolar']) : NULL;        $data['plans_revisions_requested'] = isset($data['plans_revisions_requested']) ? to_sql_date($data['plans_revisions_requested']) : NULL;        $data['plans_revisions_send_to_county'] = isset($data['plans_revisions_send_to_county']) ? to_sql_date($data['plans_revisions_send_to_county']) : NULL;        $data['plans_revisions_aproved_by_county'] = isset($data['plans_revisions_aproved_by_county']) ? to_sql_date($data['plans_revisions_aproved_by_county']) : NULL;        $data['permit_apply'] = isset($data['permit_apply']) ? to_sql_date($data['permit_apply']) : NULL;        $data['date_of_last_change'] = isset($data['date_of_last_change']) ? to_sql_date($data['date_of_last_change']) : NULL;        $data['order_date'] = isset($data['order_date']) ? to_sql_date($data['order_date']) : NULL;        $data['installation_date'] = isset($data['installation_date']) ? to_sql_date($data['installation_date']) : NULL;        $data['inspection_request'] = isset($data['inspection_request']) ? to_sql_date($data['inspection_request']) : NULL;        $data['interconnection_request'] = isset($data['interconnection_request']) ? to_sql_date($data['interconnection_request']) : NULL;        $data['interconnection_approval'] = isset($data['interconnection_approval']) ? to_sql_date($data['interconnection_approval']) : NULL;        $data['system_on_bank_update'] = isset($data['system_on_bank_update']) ? to_sql_date($data['system_on_bank_update']) : NULL;        $data['permit_to_operate_received'] = isset($data['permit_to_operate_received']) ? to_sql_date($data['permit_to_operate_received']) : NULL;        $data['funding_request'] = isset($data['funding_request']) ? to_sql_date($data['funding_request']) : NULL;        $data['funding_received'] = isset($data['funding_received']) ? to_sql_date($data['funding_received']) : NULL;        $data['system_follow_up_date'] = isset($data['system_follow_up_date']) ? to_sql_date($data['system_follow_up_date']) : NULL;        // Insert        if ($id === NULL) {            !isset($data[$this->_primary_key]) || $data[$this->_primary_key] = NULL;            $data['created'] = $now;            $this->db->set($data);            $this->db->insert($this->_table_name);            $id = $this->db->insert_id();        } else {            $filter = $this->_primary_filter;            $data['modified_at'] = $now;            $id = $filter($id);            $data = array_filter($data);            $this->db->set($data);            $this->db->where($this->_primary_key, $id);            $this->db->update($this->_table_name);        }        return $id;    }}