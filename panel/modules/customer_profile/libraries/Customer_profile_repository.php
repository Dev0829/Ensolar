<?phpdefined('BASEPATH') or exit('No direct script access allowed');class Customer_profile_repository{    private $CI;    private $IDPrefix = 'C-';    private $module = C_MODULE;    public function __construct() {        $this->CI =& get_instance();        $this->CI->load->model($this->module.'_model', 'related_m');    }    public function getNewID()    {        $lastRow = $this->CI->related_m->getLastID();        if ($lastRow == NULL || empty($lastRow)) {            return $this->IDPrefix . '1';        }        return $this->IDPrefix . (intval($lastRow->id) + 1);    }    public function get_raw_data()    {        $data = array();        $data[$this->module.'_id'] =$this->getNewID();        $data['id'] = '';        return $data;    }    public function fetch_data_from_db($id)    {        $data = $this->CI->related_m->get($id, TRUE);        if (!sizeof($data) > 0 || $data['is_deleted'] == 1) {            return '';        }        $data[$this->module.'_id'] = $this->IDPrefix .  $id;        return $data;    }    public function save($data, $id = '')    {        if (!$id) { // Insert            $inserted_id =  $this->CI->related_m->save($data);            return $inserted_id;        } else {  // Update            return $this->CI->related_m->save($data , $id);        }    }}