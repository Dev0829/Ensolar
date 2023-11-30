<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>
<?php init_head();
?>
<div id="wrapper" xmlns="http://www.w3.org/1999/html">
    <div class="content">
        <div class="row">
            <div class="_filters _hidden_inputs hidden my_list_filters">
                <?php
                echo form_hidden('total','');
                ?>
            </div>
            <div class="col-md-12">
                <div class="panel_s">
                    <div class="panel-body">
                        <div class="_buttons">
                            <div class="btn-group pull-right btn-with-tooltip-group _filter_data" data-toggle="tooltip" data-title="Filter by" data-original-title="" title="">
                                <ul class="dropdown-menu dropdown-menu-right width300">
                                    <li hidden>
                                        <a href="#" data-cview="total" onclick="dt_custom_view('total','.table-<?php echo P_MODULE; ?>','total'); return false;"><?php echo _l('total'); ?></a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="flex items-center justify-between">

                                <?php if (has_permission(P_MODULE_PERMISSION, '', 'create'))
                                { ?>
                                    <span class="pull-right header-btn-new">
                                <a href="<?php echo admin_url(P_MODULE.'/create') ?>" class="btn btn-info pull-left display-block"><?php echo _l('add');?>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </a>
                            </span>
                                <?php } ?>
                            </div>
                        </div>


                        <div class="clearfix"></div>
                        <hr class="hr-panel-heading">

                        <?php

                        $table_c = array(
                            _l('ID'),
                           // _l('Category'),
                            _l('first_name'),
                            _l('last_name'),
                            _l('language'),
                            _l('phone_number'),
                            _l('email'),
                            _l('welcome_call'),
                            _l('ntp_requested'),
                            _l('ntp_granted'),
                            _l('utility'),
                            _l('Create Date'),
                        );
                     array_push($table_c,_l('actions'));
                        ?>
                    <?php render_datatable($table_c,P_MODULE); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php init_tail(); ?>
<script>

    $(function(){
        var dtServerParams = {},

            input_Filters = $('._hidden_inputs._filters.my_list_filters input');
        
        $.each(input_Filters, function () {

            dtServerParams[$(this).attr('name')] = '[name="' + $(this).attr('name') + '"]';

        });
        
        initDataTable('.table-<?php echo P_MODULE;?>', window.location.href,[],[0,0],dtServerParams,['0','DESC']);

    });

</script>

</body>

</html>

