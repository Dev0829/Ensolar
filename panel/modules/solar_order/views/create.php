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
                        <h4 class="list-title border-right" style="border-right: 1px solid #dee2e6 !important;border-right-color: rgb(222, 226, 230);margin-top: 2px;margin-bottom: 0px;margin-right: 1rem !important;padding-right: 1rem !important;display: inline-block;float: left;"><?php echo _l('Sale Orders');?></h4>
                        <nav aria-label="breadcrumb" class="d-inline-block pull-left" style="background-color: transparent !important;margin-bottom: 0px;">
                            <ol class="breadcrumb p0" style="background-color: transparent !important;margin-bottom: 0px;padding: 0px;margin-top: 3px;">
                                <li class="breadcrumb-item"><a href="<?php echo admin_url();?>">Dashboard</a></li>
                                <?php if (isset($edit_mode)){?>
                                    <li class="breadcrumb-item active" aria-current="page"> <?php echo _l('edit') .' ' .$headingTextTop; ?></li>
                                <?php } else { ?>
                                    <li class="breadcrumb-item active" aria-current="page"> <?php echo _l('add'). ' '.$addheadingTextTop; ?></li>
                                <?php } ?>
                            </ol>
                        </nav>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <?php echo form_open($this->uri->uri_string(), array('class' => '_'.S_MODULE.'_form', 'autocomplete' => 'off', 'name'=>S_MODULE.'_form','enctype'=>'multipart/form-data')); ?>
            <div class="col-md-12">
                <div class="panel_s">
                    <div class="panel-body">
                        <div class="clearfix"></div>
                        <div>
                            <div class="tab-content">
                                <?php if (isset($edit_mode)){?>
                                    <h4 class="right-side-group-heading"><?php echo _l('edit').' '.$headingTextTop; ?></h4>
                                <?php } else { ?>
                                    <h4 class="right-side-group-heading"><?php echo _l('add').' '.$addheadingTextTop; ?></h4>
                                <?php }?>
                                <div class="row hide">
                                    <div class="col-md-12">
                                        <?php
                                        $module = S_MODULE.'_id';
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

                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($address) ? $address : '';
                                        echo render_input('address',_l('address'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                         $value = isset($project_status) ? $project_status : '';
                                        $options = get_s_project_status();
                                        echo render_select('project_status', $options, ['value', 'name'], _l('project_status'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($date_of_sale) ? _d($date_of_sale) : '';
                                        echo render_date_input('date_of_sale',_l('date_of_sale'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($dealer_group) ? $dealer_group : '';
                                        $options = get_s_dealer_group();
                                        echo render_select('dealer_group', $options, ['value', 'name'], _l('dealer_group'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($sales_representative) ? $sales_representative : '';
                                        echo render_input('sales_representative',_l('sales_representative'),$value);
                                        ?>
                                    </div>


                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($building_department) ? $building_department : '';
                                        $options = get_s_building_department();
                                        echo render_select('building_department', $options, ['value', 'name'], _l('building_department'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-12">
                                        <?php
                                        $value = isset($promo_sing_bonus_description) ? $promo_sing_bonus_description : '';
                                        echo render_textarea('promo_sing_bonus_description',  _l('promo_sing_bonus_description'), $value);
                                        ?>
                                    </div>


                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($promo_sing_bonus_amount) ? $promo_sing_bonus_amount : '';
                                        echo render_input('promo_sing_bonus_amount',_l('promo_sing_bonus_amount'),$value,'number');
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($electrical) ? $electrical : '';
                                        echo render_input('electrical',_l('electrical'),$value,'number');
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($roof) ? $roof : '';
                                        echo render_input('roof',_l('roof'),$value,'number');
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($water_heater) ? $water_heater : '';
                                        echo render_input('water_heater',_l('water_heater'),$value,'number');
                                        ?>
                                    </div>


                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($installation_type) ? $installation_type : '';
                                        $options = get_s_installation_type();
                                        echo render_select('installation_type', $options, ['value', 'name'], _l('installation_type'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($system_size) ? $system_size : '';
                                        echo render_input('system_size',_l('system_size'),$value,'number');
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($system_specifications) ? $system_specifications : '';
                                        echo render_input('system_specifications',_l('system_specifications'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($financing_bank) ? $financing_bank : '';
                                        $options = get_s_financing_bank();
                                        echo render_select('financing_bank', $options, ['value', 'name'], _l('financing_bank'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-12">
                                        <?php
                                        $value = isset($loan_condition) ? $loan_condition : '';
                                        echo render_textarea('loan_condition',  _l('loan_condition'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-12 text-center" style="padding-top: 26px;padding-bottom: 25px">
                                        <strong>Pricing And Contracts</strong>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($price_per_watts) ? $price_per_watts : '';
                                        echo render_input('price_per_watts',_l('price_per_watts'),$value,'number');
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($contractor_price_per_watts) ? $contractor_price_per_watts : '';
                                        echo render_input('contractor_price_per_watts',_l('contractor_price_per_watts'),$value,'number');
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($contract_price) ? $contract_price : '';
                                        echo render_input('contract_price',_l('contract_price'),$value,'number');
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($contractor_price) ? $contractor_price : '';
                                        echo render_input('contractor_price',_l('contractor_price'),$value,'number');
                                        ?>
                                    </div>


                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($fee_dollar) ? $fee_dollar : '';
                                        echo render_input('fee_dollar',_l('fee_dollar'),$value,'number');
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($fee_percent) ? $fee_percent : '';
                                        echo render_input('fee_percent',_l('fee_percent').' %',$value,'number');
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($upload_pdf_contract) ? $upload_pdf_contract : '';
                                        echo render_input('upload_pdf_contract',_l('upload_pdf_contract'),$value,'file');
                                        ?>
                                        <?php
                                        if(isset($upload_pdf_contract) && !empty($upload_pdf_contract)){
                                            ?>
                                            <a href="<?php echo base_url('modules/'.S_MODULE.'/uploads/'.$upload_pdf_contract)?>">Click to View</a>
                                        <?php } ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($upload_solar_quote) ? $upload_solar_quote : '';
                                        echo render_input('upload_solar_quote',_l('upload_solar_quote'),$value,'file');
                                        ?>
                                        <?php
                                        if(isset($upload_solar_quote) && !empty($upload_solar_quote)){
                                        ?>
                                        <a href="<?php echo base_url('modules/'.S_MODULE.'/uploads/'.$upload_solar_quote)?>">Click to View</a>
                                        <?php } ?>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="btn-bottom-toolbar btn-toolbar-container-out text-right">
            <button type="submit" name="submit" value="save"  class="btn btn-info contact-form-submitter save">SAVE</button>
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
            project_status: {required: true},
            cc_customer_profile_id: {required: true},
        };
        _validate_form($('._<?php echo S_MODULE;?>_form'), rules);
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
    <?php if (isset($edit_mode)){?>
    $("#cc_customer_profile_id").trigger("change");
    <?php } ?>
</script>
</body>
</html>


