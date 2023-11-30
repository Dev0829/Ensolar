<?php init_head(); ?>
<style>
    .error{
        color:red!important;
    }
</style>
<div id="wrapper" class="contact_details">
    <div class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="panel_s">
                    <?php
                    $addheadingTextTop = _l(' New Record');
                    $headingTextTop = _l(' Record');
                    ?>
                    <div class="panel-body">
                        <h4 class="list-title border-right" style="border-right: 1px solid #dee2e6 !important;border-right-color: rgb(222, 226, 230);margin-top: 2px;margin-bottom: 0px;margin-right: 1rem !important;padding-right: 1rem !important;display: inline-block;float: left;"><?php echo _l('Solar Project');?></h4>
                        <nav aria-label="breadcrumb" class="d-inline-block pull-left" style="background-color: transparent !important;margin-bottom: 0px;">
                            <ol class="breadcrumb p0" style="background-color: transparent !important;margin-bottom: 0px;padding: 0px;margin-top: 3px;">
                                <li class="breadcrumb-item"><a href="<?php echo admin_url();?>">Dashboard</a></li>

                                    <li class="breadcrumb-item active" aria-current="page"> <?php echo _l('View'). ' '.$addheadingTextTop; ?></li>

                            </ol>
                        </nav>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <?php echo form_open($this->uri->uri_string(), array('class' => '_'.P_MODULE.'_form', 'autocomplete' => 'off', 'name'=>P_MODULE.'_form','enctype'=>'multipart/form-data')); ?>
            <div class="col-md-12">
                <div class="panel_s">
                    <div class="panel-body">
                        <div class="clearfix"></div>
                        <div>
                            <div class="tab-content">

                                    <h4 class="right-side-group-heading"><?php echo _l('View').' '.$addheadingTextTop; ?></h4>
                                <div class="row hide">
                                    <div class="col-md-12">
                                        <?php
                                        $module = P_MODULE.'_id';
                                        $value=isset($module) ? $module : '';
                                        echo render_input($module,'ID',$value,'',array('disabled'=>'disabled'));
                                        if(isset($id) && $id > 0) {echo form_hidden('id', $id); }
                                        if(isset($module)) {echo form_hidden($module, $module ); }
                                        ?>
                                    </div>
                                </div>

                                <div class="row">
                                <div class="col-md-6">
                                    <?php
                                    $value = isset($cc_customer_profile_id) ? $cc_customer_profile_id : '';
                                    $options = get_customer_profile_cm();
                                    echo render_select('cc_customer_profile_id', $options, ['id', 'full_name'], _l('Customer Profile'), $value);
                                    ?>
                                </div>
                                <div class="col-md-6">
                                    <?php
                                    $value = isset($first_name) ? $first_name : '';
                                    echo render_input('first_name',_l('first_name'),$value,'',['readonly'=>true]);
                                    ?>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-md-6">
                                        <?php
                                        $value = isset($last_name) ? $last_name : '';
                                        echo render_input('last_name',_l('last_name'),$value,'',['readonly'=>true]);
                                        ?>
                                    </div>

                                <div class="col-md-6">
                                    <?php
                                    $value = isset($CC_language) ? $CC_language : '';
                                    echo render_input('CC_language',_l('language'),$value,'',['readonly'=>true]);
                                    ?>
                                </div>

                                <div class="col-md-6">
                                    <?php
                                    $value = isset($phone_number) ? $phone_number : '';
                                    echo render_input('phone_number',_l('phone_number'),$value,'',['readonly'=>true]);
                                    ?>
                                </div>
                                <div class="col-md-6">
                                    <?php
                                    $value = isset($email) ? $email : '';
                                    echo render_input('email',_l('email'),$value,'',['readonly'=>true]);
                                    ?>
                                </div>
                                 <div class="col-md-6">
                                        <?php
                                        $value = isset($address) ? $address : '';
                                        echo render_input('address',_l('address'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($welcome_call) ? _d($welcome_call) : '';
                                        echo render_date_input('welcome_call',_l('welcome_call'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($ntp_requested) ? _d($ntp_requested) : '';
                                        echo render_date_input('ntp_requested',_l('ntp_requested'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($ntp_granted) ? _d($ntp_granted) : '';
                                        echo render_date_input('ntp_granted',_l('ntp_granted'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($utility) ? $utility : '';
                                        $options = get_p_utility();
                                        echo render_select('utility', $options, ['value', 'name'], _l('utility'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($interconnection_agreement) ? $interconnection_agreement : '';
                                        $options = get_p_interconnection_agreement();
                                        echo render_select('interconnection_agreement', $options, ['value', 'name'], _l('interconnection_agreement'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($tier) ? $tier : '';
                                        $options = get_p_tier();
                                        echo render_select('tier', $options, ['value', 'name'], _l('tier'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Mm Liability Process</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($received_declaration_page) ? _d($received_declaration_page) : '';
                                        echo render_input('received_declaration_page',_l('received_declaration_page'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($request_for_1mm_liability_sent_to_the_agency) ? _d($request_for_1mm_liability_sent_to_the_agency) : '';
                                        echo render_input('request_for_1mm_liability_sent_to_the_agency',_l('request_for_1mm_liability_sent_to_the_agency'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($assigned_agency) ? $assigned_agency : '';
                                        $options = get_p_assigned_agency();
                                        echo render_select('assigned_agency', $options, ['value', 'name'], _l('assigned_agency'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($mm1_liability_fees) ? $mm1_liability_fees : '';
                                        echo render_input('mm1_liability_fees',_l('1mm_liability_fees'),$value,'number');
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($mm1_cert_received) ? _d($mm1_cert_received) : '';
                                        echo render_date_input('mm1_cert_received',_l('mm1_cert_received'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Notice Of Commencement</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($noc_received) ? _d($noc_received) : '';
                                        echo render_date_input('noc_received',_l('noc_received'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($noc_sent_to_record) ? _d($noc_sent_to_record) : '';
                                        echo render_date_input('noc_sent_to_record',_l('noc_sent_to_record'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($noc_recorded) ? _d($noc_recorded) : '';
                                        echo render_date_input('noc_recorded',_l('noc_recorded'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($cert_red_stamp) ? _d($cert_red_stamp) : '';
                                        echo render_date_input('cert_red_stamp',_l('cert_red_stamp'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Home Owner Asociation Process</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($hoa_info_received) ? $hoa_info_received : '';
                                        echo render_input('hoa_info_received',_l('hoa_info_received'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($hoa_form_signed) ? _d($hoa_form_signed) : '';
                                        echo render_date_input('hoa_form_signed',_l('hoa_form_signed'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($form_sent_to_hoa) ? _d($form_sent_to_hoa) : '';
                                        echo render_date_input('form_sent_to_hoa',_l('form_sent_to_hoa'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-12">
                                        <?php
                                        $value = isset($followup_notes) ? $followup_notes : '';
                                        echo render_textarea('followup_notes',_l('followup_notes'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($hoa_approved) ? _d($hoa_approved) : '';
                                        echo render_date_input('hoa_approved',_l('hoa_approved'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Engineering Process – Plans</strong>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($plans_request) ? _d($plans_request) : '';
                                        echo render_date_input('plans_request',_l('plans_request'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($plans_received) ? _d($plans_received) : '';
                                        echo render_date_input('plans_received',_l('plans_received'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($plans_approved_by_ensolar) ? _d($plans_approved_by_ensolar) : '';
                                        echo render_date_input('plans_approved_by_ensolar',_l('plans_approved_by_ensolar'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Engineering Process – Plans Revisions</strong>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($plans_revisions_requested) ? _d($plans_revisions_requested) : '';
                                        echo render_date_input('plans_revisions_requested',_l('plans_revisions_requested'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($plans_revisions_send_to_county) ? _d($plans_revisions_send_to_county) : '';
                                        echo render_date_input('plans_revisions_send_to_county',_l('plans_revisions_send_to_county'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($plans_revisions_aproved_by_county) ? _d($plans_revisions_aproved_by_county) : '';
                                        echo render_date_input('plans_revisions_aproved_by_county',_l('plans_revisions_aproved_by_county'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Permit Process</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($permit_apply) ? _d($permit_apply) : '';
                                        echo render_date_input('permit_apply',_l('permit_apply'),$value);
                                        ?>
                                    </div>


                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($permit_number) ? $permit_number : '';
                                        echo render_input('permit_number',_l('permit_number'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($permit_fees) ? $permit_fees : '';
                                        echo render_input('permit_fees',_l('permit_fees'),$value,'number');
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($permit_status) ? $permit_status : '';
                                        $options = get_p_permit_status();
                                        echo render_select('permit_status', $options, ['value', 'name'], _l('permit_status'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-12">
                                        <?php
                                        $value = isset($permit_notes) ? $permit_notes : '';
                                        echo render_textarea('permit_notes',_l('permit_notes'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($date_of_last_change) ? _d($date_of_last_change) : '';
                                        echo render_date_input('date_of_last_change',_l('date_of_last_change'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Logistic Process</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($order_request) ? $order_request : '';
                                        $options = get_p_order_request();
                                        echo render_select('order_request', $options, ['value', 'name'], _l('order_request'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($order_date) ? _d($order_date) : '';
                                        echo render_date_input('order_date',_l('order_date'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($installation_date) ? _d($installation_date) : '';
                                        echo render_date_input('installation_date',_l('installation_date'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($installation_team) ? $installation_team : '';
                                        $options = get_p_installation_team();
                                        echo render_select('installation_team', $options, ['value', 'name'], _l('installation_team'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Inspection Process</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($inspection_request) ? _d($inspection_request) : '';
                                        echo render_date_input('inspection_request',_l('inspection_request'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($inspection_status) ? $inspection_status : '';
                                        $options = get_p_inspection_status();
                                        echo render_select('inspection_status', $options, ['value', 'name'], _l('inspection_status'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Closing Process</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($interconnection_request) ? _d($interconnection_request) : '';
                                        echo render_date_input('interconnection_request',_l('interconnection_request'),$value);
                                        ?>
                                    </div>


                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($interconnection_approval) ? _d($interconnection_approval) : '';
                                        echo render_date_input('interconnection_approval',_l('interconnection_approval'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($system_on_bank_update) ? _d($system_on_bank_update) : '';
                                        echo render_date_input('system_on_bank_update',_l('system_on_bank_update'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($permit_to_operate_received) ? _d($permit_to_operate_received) : '';
                                        echo render_date_input('permit_to_operate_received',_l('permit_to_operate_received'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Funding</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($funding_request) ? _d($funding_request) : '';
                                        echo render_date_input('funding_request',_l('funding_request'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($funding_received) ? _d($funding_received) : '';
                                        echo render_date_input('funding_received',_l('funding_received'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>System Follow-Up Process</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($system_follow_up_date) ? _d($system_follow_up_date) : '';
                                        echo render_date_input('system_follow_up_date',_l('system_follow_up_date'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-12">
                                        <?php
                                        $value = isset($system_follow_up_comments) ? $system_follow_up_comments : '';
                                        echo render_textarea('system_follow_up_comments',_l('system_follow_up_comments'),$value);
                                        ?>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="btn-bottom-toolbar btn-toolbar-container-out text-right">
            <button type="button" class="btn btn-default cancel-me" onclick="history.go(-1)">CANCEL</button>
        </div>
        <?php echo form_close(); ?>
    </div>
    <div class="btn-bottom-pusher"></div>
</div>
</div>
<?php init_tail(); ?>

<script>

    $(function() {
        var rules = {
            cc_customer_profile_id: {required: true},
        };
        _validate_form($('._<?php echo P_MODULE;?>_form'), rules);
    });

    $("body").on('change','#cc_customer_profile_id',function (){
        let thisVal = $(this).val();
        $.ajax({
            url: '<?php echo base_url(P_MODULE.'/getCustomerInfoByCustomerId')?>',
            type: 'GET',
            dataType: 'json',
            data:{'id':thisVal},
            success: function(response) {

                $("#first_name").empty().val(response.first_name);
                $("#last_name").empty().val(response.last_name);
                $("#email").empty().val(response.email);
                $("#CC_language").empty().val(response.language);
                $("#phone_number").empty().val(response.phone_number);
            },
        });
    });
    $("#cc_customer_profile_id").trigger("change");
    $("select,textarea,input").prop("disabled", true);

</script>
</body>
</html>


