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
                        <h4 class="list-title border-right" style="border-right: 1px solid #dee2e6 !important;border-right-color: rgb(222, 226, 230);margin-top: 2px;margin-bottom: 0px;margin-right: 1rem !important;padding-right: 1rem !important;display: inline-block;float: left;"><?php echo _l('Clients');?></h4>
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
            <?php echo form_open($this->uri->uri_string(), array('class' => '_'.C_MODULE.'_form', 'autocomplete' => 'off', 'name'=>C_MODULE.'_form','enctype'=>'multipart/form-data')); ?>
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
                                        $module = C_MODULE.'_id';
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
                                        $value = isset($first_name) ? $first_name : '';
                                        echo render_input('first_name',_l('first_name'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($last_name) ? $last_name : '';
                                        echo render_input('last_name',_l('last_name'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($language) ? $language : '';
                                        $options = get_c_language();
                                        echo render_select('language', $options, ['value', 'name'], _l('language'), $value);

                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($phone_number) ? $phone_number : '';
                                        echo render_input('phone_number',_l('phone_number'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($email) ? $email : '';
                                        echo render_input('email',_l('email'),$value,'email');
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
                                        $value = isset($city) ? $city : '';
                                        echo render_input('city',_l('city'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($zip_ode) ? $zip_ode : '';
                                        echo render_input('zip_ode',_l('zip_ode'),$value);
                                        ?>
                                    </div>

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($how_did_the_customer_reach_us) ? $how_did_the_customer_reach_us : '';
                                        $options = get_c_how_did_the_customer_reach_us();
                                        echo render_select('how_did_the_customer_reach_us', $options, ['value', 'name'], _l('how_did_the_customer_reach_us'), $value);
                                        ?>
                                    </div>

                                    <div class="col-md-6 hide" id="referral_name_div">
                                        <?php
                                        $value = isset($referral_name) ? $referral_name : '';
                                        echo render_input('referral_name',_l('referral_name'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6 hide" id="referral_div">
                                        <?php
                                        $value = isset($referral) ? $referral : '';
                                        echo render_input('referral',_l('referral'),$value);
                                        ?>
                                    </div>

                                    <div class="clearfix"></div>
                                    <hr class="hr-panel-heading">

                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($co_borrower_full_name) ? $co_borrower_full_name : '';
                                        echo render_input('co_borrower_full_name',_l('co_borrower_full_name'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($co_borrower_phonenumber) ? $co_borrower_phonenumber : '';
                                        echo render_input('co_borrower_phonenumber',_l('co_borrower_phonenumber'),$value);
                                        ?>
                                    </div>
                                    <div class="col-md-6">
                                        <?php
                                        $value = isset($co_borrower_e_mail) ? $co_borrower_e_mail : '';
                                        echo render_input('co_borrower_e_mail',_l('co_borrower_e_mail'),$value,'email');
                                        ?>
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
            first_name: {required: true},
            email: {email: true},
            co_borrower_e_mail: {email: true},
            referral: {number: true},
        };
        _validate_form($('._<?php echo C_MODULE;?>_form'), rules);
    });

    $('body').on('change','#how_did_the_customer_reach_us',function (){
        let thisVal = $(this).val();
        if (thisVal == 'Referral'){
            $("#referral_name_div").removeClass("hide");
            $('#referral_name').prop("disabled", false)
        } else {
            if(!$('#referral_name_div').hasClass('hide')){
                $('#referral_name_div').addClass('hide');
                $('#referral_div').addClass('hide');
                $('#referral_name').prop("disabled", true)
            }
        }
    });

    $('body').on('blur','#referral_name',function (){
        let thisVal = $(this).val();
        if (thisVal == ''){
            if(!$('#referral_div').hasClass('hide')){
                $('#referral_div').addClass('hide');
                $('#referral').prop("disabled", true)
            }
        } else {
            $("#referral_div").removeClass("hide");
            $('#referral').prop("disabled", false)
        }
    });

    $("#how_did_the_customer_reach_us").trigger("change");
    $("#referral_name").trigger("blur");

</script>
</body>
</html>


