!function(a){a(document).ready(function(){var b=a("#devvn_tragop_company");a("body").on("change",'#devvn_tragop_company #prepaid, #devvn_tragop_company #month, #devvn_tragop_company input[name^="insurrance_"]',function(){var c=a("#tragop_nonce").val(),d=a(b).serialize(),e=a(this).closest(".devvn_tragop_wrap");return a.ajax({type:"post",dataType:"html",url:devvn_tragop_array.ajaxurl,data:{action:"calc_installment",data:d,nonce:c},context:this,beforeSend:function(){e.addClass("loading_tragop")},success:function(c){a(".devvn_table_chon_tragop",b).html(c),e.removeClass("loading_tragop")},error:function(){e.removeClass("loading_tragop")}}),!1}),a(window).load(function(){a("#prepaid",b).trigger("change")}),a("body").on("click",".cty_submit_form",function(){var c=a(this).data("id"),d=a(this).data("name");a("#cty_interest",b).val(c),a("#cty_interest_name",b).val(d);var e=a('input[name="giayto"]:checked',b).val(),f=a("#prepaid option:selected",b).val(),g=a("#month option:selected",b).val(),h=a(".price_per_month_val_"+c,b).html(),i=a(".total_price_val_"+c,b).html(),j=a(".deposit_money_"+c+" .color_df",b).html();if(a("#prepaid_text").html(f),a("#deposit_money_text").html(j),a("#month_text").html(g),a("#price_per_month_text").html(h),a("#total_price_text").html(i),a("#giayto_text").html(e),a("#name_cty_text").html(d),a(".devvn_installment_bank").addClass("gostep2"),a("#devvn_tragop_main").length>0){var k=a("#devvn_tragop_main").offset().top;a("html, body").animate({scrollTop:k},500)}return!1}),a("body").on("click",".backstep1",function(){if(a(".devvn_installment_bank").removeClass("gostep2"),a("#devvn_tragop_main").length>0){var b=a("#devvn_tragop_main").offset().top;a("html, body").animate({scrollTop:b},500)}return!1}),a.validator.addMethod("vietnamphone",function(a){return/^0+(\d{9,10})$/.test(a)},"H\xe3y \u0111i\u1ec1n \u0111\xfang s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),a.validator.addMethod("customemail",function(a){return""==a?!0:/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(a)},"\u0110\u1ecbnh d\u1ea1ng email kh\xf4ng \u0111\xfang."),b.validate({rules:{tragop_fullname:{required:!0},tragop_phone:{required:{depends:function(){return a(this).val(a.trim(a(this).val())),!0}},vietnamphone:!0},tragop_email:{customemail:!0},tragop_cmnd:{required:!0},tragop_birthday:{required:!0},tragop_address:{required:!0},tragop_state:{required:!0}},messages:{tragop_fullname:"H\u1ecd v\xe0 t\xean l\xe0 b\u1eaft bu\u1ed9c",tragop_phone:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i l\xe0 b\u1eaft bu\u1ed9c",tragop_cmnd:"S\u1ed1 CMND l\xe0 b\u1eaft bu\u1ed9c",tragop_birthday:"Ng\xe0y sinh l\xe0 b\u1eaft bu\u1ed9c",tragop_address:"\u0110\u1ecba ch\u1ec9 l\xe0 b\u1eaft bu\u1ed9c",tragop_state:"T\u1ec9nh th\xe0nh l\xe0 b\u1eaft bu\u1ed9c"}}),b.on("submit",function(){if(b.valid()){var c=a("#tragop_nonce").val(),d=a(b).serialize(),e=a(this).closest(".devvn_tragop_wrap"),f=a(".devvn_tragop_main",e);return a.ajax({type:"post",dataType:"json",url:devvn_tragop_array.ajaxurl,data:{action:"send_infor_tragop",data:d,nonce:c},context:this,beforeSend:function(){e.addClass("loading_tragop")},success:function(b){if(b.success?a(f).html(b.data):alert(b.data),a(".devvn_tragop_prod",e).remove(),e.removeClass("loading_tragop"),a(".devvn_tragop_wrap").length>0){var c=a(".devvn_tragop_wrap").offset().top;a("html, body").animate({scrollTop:c},500)}},error:function(){alert("C\xf3 l\u1ed7i x\u1ea3y ra"),e.removeClass("loading_tragop")}}),!1}}),a("#tragop_birthday").datepicker({changeYear:!0,changeMonth:!0,yearRange:"-60:-15",defaultDate:"-26y",dateFormat:"dd/mm/yy"})})}(jQuery);