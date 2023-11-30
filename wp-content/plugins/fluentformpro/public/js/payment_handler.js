(()=>{"use strict";const t=function(t,e){t||(t=0);var n=parseInt(t)/100,r=2;t%100==0&&0==e.decimal_points&&(r=0);var i=",",a=".";"dot_comma"!=e.currency_separator&&(i=".",a=",");var o,s,f,l,c,u,m,p,d,h,_=e.currency_sign||"",y=(o=n,s=r,f=a,l=i,c=isNaN(s)?2:Math.abs(s),u=f||".",m=void 0===l?",":l,p=o<0?"-":"",d=parseInt(o=Math.abs(o).toFixed(c))+"",h=(h=d.length)>3?h%3:0,p+(h?d.substr(0,h)+m:"")+d.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+m)+(c?u+Math.abs(o-d).toFixed(c).slice(2):""));return"right"==e.currency_sign_position?y+""+_:"left_space"==e.currency_sign_position?_+" "+y:"right_space"==e.currency_sign_position?y+" "+_:_+""+y};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}var s,f=function(){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=n.settings.id;this.$form=t,this.formInstance=n,this.formId=r,this.paymentMethod="",this.paymentConfig=window.fluentform_payment_config,this.appliedCoupons={},this.totalAmount=0,this.formPaymentConfig=window["fluentform_payment_config_"+r]}var n,i,o;return n=e,i=[{key:"$t",value:function(t){return this.paymentConfig.i18n[t]?this.paymentConfig.i18n[t]:t}},{key:"init",value:function(){var t=this;this.initStripeElement(),this.initPaymentMethodChange(),this.$form.on("fluentform_next_action_payment",(function(e,n){var r=n.response.data;r.actionName&&(jQuery("<div/>",{id:"form_success",class:"ff-message-success"}).html(r.message).insertAfter(t.$form),t[r.actionName](r))})),jQuery(".ff_modal_btn").on("click",(function(){t.calculatePayments()})),this.calculatePayments(),this.$form.find(".ff_payment_item,.ff_quantity_item").on("change",(function(e){e.target.min&&+e.target.value<+e.target.min&&(e.target.value=e.target.min),e.target.max&&+e.target.value>+e.target.max&&(e.target.value=e.target.max),t.calculatePayments(),t.mayBeToggleSubscriptionRelatedThings(e)})),this.$form.on("change",".ff-custom-user-input",(function(e){t.handleCustomUserInputChange(e)})),this.$form.on("do_calculation",(function(){t.calculatePayments()})),this.initDiscountCode()}},{key:"calculatePayments",value:function(){var t=this,e=this.$form,n=this.getPaymentItems(),r=0;jQuery.each(n,(function(t,e){r+=e.line_total})),this.totalAmount=r;var i=this.getDiscounts();jQuery.each(i,(function(e,n){var i=n.amount;"percent"===n.coupon_type&&(i=n.amount/100*r),t.totalAmount-=i})),e.trigger("payment_amount_change",{amount:r,items:n,discounts:i}),e.find(".ff_order_total").html(this.getFormattedPrice(this.totalAmount)),e.data("payment_total",this.totalAmount);var a=!Object.keys(n).length;this.hasPaymentItems=a;var o=a?"hide":"show";this.$form.find(".ff_payment_method").closest(".ff-el-group:not(.ff_excluded)")[o](),e.find(".ff_dynamic_payment_summary").length&&this.generateSummaryTable(n,r,i,a)}},{key:"generateSummaryTable",value:function(t,e,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.$form.find(".ff_dynamic_payment_summary .ff_payment_summary_fallback").hide(),i)return this.$form.find(".ff_dynamic_payment_summary .ff_payment_summary").html(""),void this.$form.find(".ff_dynamic_payment_summary .ff_payment_summary_fallback").show();var a='<table class="table ffp_table input_items_table">';a+="<thead><tr><th>".concat(this.$t("item"),"</th><th>").concat(this.$t("price"),"</th><th>").concat(this.$t("qty"),"</th><th>").concat(this.$t("line_total"),"</th></tr></thead>"),a+="<tbody>",jQuery.each(t,(function(t,e){(0===e.price||e.price)&&(a+="<tr>",a+="<td>".concat(e.label,"</td>"),a+="<td>".concat(r.getFormattedPrice(e.price),"</td>"),a+="<td>".concat(e.quantity,"</td>"),a+="<td>".concat(r.getFormattedPrice(e.line_total),"</td>"),a+="</tr>")})),a+="</tbody>";var o="";n.length&&(o+='<tr><th class="item_right" colspan="3">'.concat(this.$t("Sub Total"),"</th><th>").concat(this.getFormattedPrice(e),"</th></tr>"),jQuery.each(n,(function(t,n){var i=n.amount;"percent"===n.coupon_type&&(i=n.amount/100*e),i>=e&&(i=e),o+='<tr><th class="item_right" colspan="3">'.concat(r.$t("discount:")," ").concat(n.title,"</th><th>-").concat(r.getFormattedPrice(i),"</th></tr>"),e-=i}))),o+='<tr><th class="item_right" colspan="3">'.concat(this.$t("total"),"</th><th>").concat(this.getFormattedPrice(e),"</th></tr>"),a+="<tfoot>".concat(o,"</tfoot>"),a+="</table>",this.$form.find(".ff_dynamic_payment_summary .ff_payment_summary").html(a)}},{key:"getPaymentItems",value:function(){var t=this.$form,e=t.find(".ff-el-group:not(.ff_excluded)").find(".ff_payment_item"),n={},r=this;function i(t,e,i){t=t.replace("[","").replace("]","");var a=r.getQuantity(t);a&&(n[t]={label:e,price:i,quantity:a,line_total:a*i})}return e.each((function(e,n){var a=n.type,o=jQuery(n);if(!o.closest(".has-conditions.ff_excluded").length){var s=o.attr("name"),f=o.closest(".ff-el-group").find(".ff-el-input--label label").text();if("radio"===a){var l=t.find("input[name="+s+"]:checked"),c=l.parent().find(".ff_plan_title").text();r.maybeHandleSubscriptionItem(s,l,f,c,i)}else if("hidden"===a)r.maybeHandleSubscriptionItem(s,o,f,"",i);else if("number"==a||"text"==a){var u=window.ff_helper.numericVal(jQuery(this));0!=u&&i(s,f,parseFloat(u))}else if("checkbox"==a){var m=o.data("group_id"),p=t.find('input[data-group_id="'+m+'"]:checked'),d=0,h=[];p.each((function(t,e){var n=jQuery(e).data("payment_value");n&&(d+=parseFloat(n),h.push(jQuery(e).parent().find("span").text()))})),h.length&&(f+=' <ul class="ff_sub_items">',h.forEach((function(t){f+="<li>"+t+"</li>"})),f+=" </ul>"),d&&i(s,f,d)}else if("select-one"===a){var _=t.find("select[name="+s+"] option:selected"),y=_.text();r.maybeHandleSubscriptionItem(s,_,f,y,i)}}})),n}},{key:"maybeHandleSubscriptionItem",value:function(t,e,n,r,i){var a=parseFloat(e.attr("data-payment_value")),o=parseFloat(e.attr("data-signup_fee")),s=e.data("trial_days"),f=parseFloat(e.attr("data-initial_amount"));f&&(i(t+"_signup_fee",this.$t("Signup Fee for")+" "+n+(r?" - "+r:""),f),a-=f),(s&&0===a||a)&&(r&&(n+=" - "+r),s&&(n+=" "+this.$t("(Trial)"),a=0),i(t,n,parseFloat(a)),o&&i(t+"_signup_fee",this.$t("Signup Fee for")+" "+n,o))}},{key:"getQuantity",value:function(t){var e=this.$form.find('input[data-target_product="'+t+'"]');if(!e.length)return 1;var n=e.val();return!n||isNaN(n)?0:parseInt(n)}},{key:"getFormattedPrice",value:function(e){return t(parseFloat(100*e).toFixed(2),window["fluentform_payment_config_"+this.formId].currency_settings)}},{key:"stripeRedirectToCheckout",value:function(t){var e=new Stripe(this.formPaymentConfig.stripe.publishable_key);e.registerAppInfo(this.formPaymentConfig.stripe_app_info),e.redirectToCheckout({sessionId:t.sessionId}).then((function(t){console.log(t)}))}},{key:"normalRedirect",value:function(t){window.location.href=t.redirect_url}},{key:"getDiscounts",value:function(){return Object.values(this.appliedCoupons)}},{key:"initDiscountCode",value:function(){var t=this,e=this.$form.find(".ff_coupon_wrapper");if(!e.length)return!1;this.$form.append('<input type="hidden" class="__ff_all_applied_coupons" name="__ff_all_applied_coupons"/>'),jQuery.each(e,(function(e,n){var r=jQuery(n);r.find(".ff_input-group-append").on("click",(function(){var e=r.find("input.ff_coupon_item"),n=e.val();if(!n)return"";e.attr("disabled",!0),e.attr("name"),jQuery.post(window.fluentFormVars.ajaxUrl,{action:"fluentform_apply_coupon",form_id:t.formId,total_amount:t.totalAmount,coupon:n,other_coupons:t.$form.find(".__ff_all_applied_coupons").val()}).then((function(i){var a=i.coupon;t.appliedCoupons[a.code]=a,t.$form.find(".__ff_all_applied_coupons").attr("value",JSON.stringify(Object.keys(t.appliedCoupons)));var o=a.amount+"%";"fixed"==a.coupon_type&&(o=t.getFormattedPrice(a.amount));var s="".concat(a.code," <span>-").concat(o,"</span>");t.recordCouponMessage(r,n,s,"success"),e.val("")})).fail((function(e){t.recordCouponMessage(r,n,e.responseJSON.message,"error")})).always((function(){e.attr("disabled",!1),t.$form.trigger("do_calculation")}))}))}))}},{key:"recordCouponMessage",value:function(t,e,n,r){var i=this;t.find(".ff_coupon_responses").length||t.append('<ul class="ff_coupon_responses"></ul>');var a=t.find(".ff_coupon_responses");a.find(".ff_error, .ff_resp_item_"+e).remove();var o=jQuery("<li/>",{class:"ff_".concat(r," ff_resp_item_").concat(e)}),s=jQuery("<span/>",{class:"error-clear",html:"&times;",click:function(t){a.find(".ff_resp_item_"+e).remove(),delete i.appliedCoupons[e],i.$form.find(".__ff_all_applied_coupons").attr("value",JSON.stringify(Object.keys(i.appliedCoupons))),i.$form.trigger("do_calculation")}});a.append(o.append(s,n))}},{key:"mayBeToggleSubscriptionRelatedThings",value:function(t){var e=jQuery(t.target);if(e.hasClass("ff_subscription_item")){var n=e.val(),r=e.closest(".ff-el-input--content");r.find(".ff-custom-user-input-wrapper").addClass("hidden_field"),r.find(".ff-custom-user-input-wrapper-"+n).removeClass("hidden_field"),r.find(".ff_summary_container").addClass("hidden_field"),r.find(".ff_summary_container_"+n).removeClass("hidden_field")}}},{key:"handleCustomUserInputChange",value:function(t){var e,n=jQuery(t.target),r=parseFloat(n.val())||0,i=n.data("parent_input_name"),a=n.data("parent_input_type"),o=n.data("plan_index");"select"===a?o=(e=this.$form.find("select[name="+i+"] option:selected")).val():e="radio"===a?this.$form.find("input[name="+i+"]:checked"):this.$form.find("input[name="+i+"]");var s=r+parseFloat(e.data("initial_amount")),f=parseFloat(e.attr("data-signup_fee"));e.attr("data-payment_value",s);var l=n.parent().parent().find(".ff_summary_container_"+o);l.find(".ffbs_subscription_amount").html(this.getFormattedPrice(r)),l.find(".ffbs_first_interval_total").html(this.getFormattedPrice(s+f)),this.calculatePayments()}},{key:"initStripeElement",value:function(){var t=this;if(this.$form.hasClass("ff_has_stripe_inline")){var e;this.stripe=new Stripe(this.formPaymentConfig.stripe.publishable_key),this.stripe.registerAppInfo(this.formPaymentConfig.stripe_app_info);var n=this.stripe.elements(),i={color:"#32325d",fontFamily:'-apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',fontSmoothing:"antialiased",backgroundColor:"white",fontSize:"14px",fontWeight:400,textTransform:"unset",fontStyle:"unset",textDecoration:"none"},a={base:r(r({},i),{},{"::placeholder":{color:"#aab7c4"},":focus":r({},i)}),invalid:{color:"#fa755a",iconColor:"#fa755a"}},o=n.create("card",{style:a,hidePostalCode:!this.formPaymentConfig.stripe.inlineConfig.verifyZip}),s=this.$form.find(".ff_stripe_card_element").attr("id");if(!s)return void console.log("No Stripe Cart Element Found");o.mount("#"+s),o.addEventListener("change",(function(e){t.toggleStripeInlineCardError(e.error)})),this.stripeCard=o,this.$form.on("fluentform_submission_success",(function(){o.clear()})),this.$form.on("fluentform_submission_failed",(function(){t.stripeCard.update({disabled:!1})})),this.registerStripePaymentToken(s);var f=this;this.$form.on("fluentform_update_stripe_inline_element_style",(function(t,e){f.handleStripeStyleUpdate(e,a)}));var l=(null===(e=this.formPaymentConfig.stripe)||void 0===e||null===(e=e.inlineConfig)||void 0===e?void 0:e.inline_styles)||!1;this.handleStripeStyleUpdate(l,a)}}},{key:"getJsStylesFromStringStyle",value:function(t){if(!t)return null;var e={};return(t=t.split(";")).forEach((function(t){if(t){var n=(t=t.split(":"))[0].trim();n.includes("-")&&(n=(n=n.split("-"))[0]+n[1][0].toUpperCase()+n[1].slice(1)),e[n]=t[1].trim()}})),e}},{key:"handleStripeStyleUpdate",value:function(t,e){if(t){var n=this,i={error_msg:n.getJsStylesFromStringStyle(t.error_msg),input:n.getJsStylesFromStringStyle(t.input),focusInput:n.getJsStylesFromStringStyle(t.focusInput),placeholder:n.getJsStylesFromStringStyle(t.placeholder)},a=r({},e),o=["boxShadow","border","borderStyle","borderWidth","borderColor","borderRadius"];if(i.input){for(var s in i.input)e.base[s]||o.includes(s)&&delete i.input[s];a.base=r(r({},a.base),i.input)}if(i.placeholder&&(a.base["::placeholder"]=r(r({},a.base["::placeholder"]),i.placeholder)),i.focusInput){for(var f in i.focusInput)o.includes(f)&&delete i.focusInput[f];a.base[":focus"]=r(r({},a.base[":focus"]),i.focusInput)}i.error_msg&&(a.invalid=r(r({},a.invalid),i.error_msg),jQuery(".ff_card-errors").css(a.invalid)),this.stripeCard.update({style:a})}}},{key:"initPaymentMethodChange",value:function(){var t=this,e=this.$form.find(".ff_payment_method");e.length>1?this.paymentMethod=e.filter((function(t,e){return e.checked})).val():this.paymentMethod=e.val(),e.length>1&&e.change((function(e){t.paymentMethod=e.target.value;var n="stripe"===t.paymentMethod?"block":"none";jQuery(e.target).closest(".ff-el-input--content").find(".stripe-inline-wrapper").css({display:n})}))}},{key:"registerStripePaymentToken",value:function(t){var e=this;this.formInstance.addGlobalValidator("stripeInlinePayment",(function(n,r){if("stripe"===e.paymentMethod&&!e.hasPaymentItems&&!jQuery("#"+t).closest(".ff_excluded").length){e.formInstance.showFormSubmissionProgress(n),jQuery("<div/>",{id:e.formId+"_success",class:"ff-message-success ff_msg_temp"}).html(e.$t("processing_text")).insertAfter(e.$form),e.toggleStripeInlineCardError();var i=jQuery.Deferred();return e.stripe.createPaymentMethod("card",e.stripeCard).then((function(t){t.error?e.toggleStripeInlineCardError(t.error):(e.stripeCard.update({disabled:!0}),e.formInstance.hideFormSubmissionProgress(n),jQuery("<div/>",{id:e.formId+"_success",class:"ff-message-success ff_msg_temp"}).html(e.$t("processing_text")).insertAfter(e.$form),r.data+="&"+jQuery.param({__stripe_payment_method_id:t.paymentMethod.id}),i.resolve())})),i.promise()}}))}},{key:"toggleStripeInlineCardError",value:function(t){var e=this,n=this.$form.find(".ff_card-errors");t?(n.html(t.message),n.closest(".stripe-inline-wrapper").addClass("ff-el-is-error"),this.formInstance.hideFormSubmissionProgress(this.$form),this.stripeCard.update({disabled:!1})):(n.html(""),n.closest(".stripe-inline-wrapper").removeClass("ff-el-is-error")),setTimeout((function(){e.maybeRemoveSubmitError()}),500)}},{key:"stripeSetupIntent",value:function(t){var e=this;this.stripe.confirmCardPayment(t.client_secret,{payment_method:t.payment_method_id}).then((function(n){n.error?e.toggleStripeInlineCardError(n.error):e.handleStripePaymentConfirm({action:"fluentform_sca_inline_confirm_payment_setup_intents",form_id:e.formId,payment_method:n.paymentIntent.payment_method,payemnt_method_id:t.payemnt_method_id,payment_intent_id:n.paymentIntent.id,submission_id:t.submission_id,stripe_subscription_id:t.stripe_subscription_id,type:"handleCardSetup"})}))}},{key:"initStripeSCAModal",value:function(t){var e=this;this.formInstance.showFormSubmissionProgress(this.$form),this.stripe.handleCardAction(t.client_secret).then((function(n){n.error?(e.formInstance.hideFormSubmissionProgress(e.$form),e.toggleStripeInlineCardError(n.error)):e.handleStripePaymentConfirm({action:"fluentform_sca_inline_confirm_payment",form_id:e.formId,payment_method:n.paymentIntent.payment_method,payment_intent_id:n.paymentIntent.id,submission_id:t.submission_id,type:"handleCardAction"})}))}},{key:"handleStripePaymentConfirm",value:function(t){this.maybeRemoveSubmitError(),jQuery("<div/>",{id:this.formId+"_success",class:"ff-message-success ff_msg_temp"}).html(this.$t("confirming_text")).insertAfter(this.$form),this.formInstance.showFormSubmissionProgress(this.$form),window.fluentFormApp(this.$form).sendData(this.$form,t)}},{key:"maybeRemoveSubmitError",value:function(){jQuery("#form_success").remove()}}],i&&a(n.prototype,i),o&&a(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();(s=jQuery).each(s("form.fluentform_has_payment"),(function(){var t=s(this);t.on("fluentform_init_single",(function(e,n){new f(t,n).init()}))})),s(document).on("ff_reinit",(function(t,e){var n=s(e);n.attr("data-ff_reinit","yes");var r=fluentFormApp(n);if(!r)return!1;new f(n,r).init()}))})();