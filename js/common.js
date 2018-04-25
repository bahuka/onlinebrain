
  jQuery(document).ready(function($) {
  
  if(localStorage.login == 1)
  {
		var user_email = localStorage.email;
		$('#use_mil').val(user_email);
		var use_email = jQuery('#use_mil').val();
		$('#login-signup').hide(); 
		$('#dashboard').show(); 
		$('#hdr_logo').hide();
		$('#aft_login').show();
		$('#wek_form').hide();
		$('#mnday').hide();
		$('#tusedy').hide();		
	$('.inven_tory').click( function (){
		var wdheigth = jQuery(window).height();
		$('#ck_calndr').hide();
		$('.add_invt').hide();
		$('#add_pls').css({"visibility": "visible"});
		$('#ck_invent').show();
		$('#dashboard').hide();
		$('#settings').hide();
		$('.mg_titl h1').html('My stuff');
		$('#ims').attr("src", "img/home.png");
		$('#inv').attr("src","img/click_ivent.png");
		$('#cln').attr("src","img/clnder.png");
		$('#remb').attr("src","img/remember.png");
		$('#seting').attr("src", "img/seting.png");
		$('#ho_wrk').attr("src", "img/home_work.png");
		$('#st_remind').hide();
		$('#wek_form').hide();
		$('.hme_wrk').hide();
	    $('#all_tsk_shw').hide();
		$('#task_clndr').hide();
		$("#my_daily").hide();
		var slect_invnt = jQuery("#inv_pg").val();
		var use_email = jQuery('#use_mil').val();
		$.ajax({
			type: "POST",
			url: "http://myonlinebrain.com.au/api.php",
			data: {use_email: use_email, func:'slect_invnt'},
			cache: false,
			datatype: 'json',
			success: function(data){ 
				var JSONObject = JSON.parse(data);
				$('.get_apn_invt').html('');
				for (var key in JSONObject) {
					if (JSONObject.hasOwnProperty(key)) {
					//alert(JSONObject[key]["name"] + ", " + JSONObject[key]["image"]);
						var ats = '<div class="apn_sct"> <div class="invot_img"> <img class="on_inv_image" src=img/'+ JSONObject[key]["image"] +' </div> <div class="invot_nme"> '+ JSONObject[key]["name"] +' </div>  </div>';
						//alert(ats);
						$('.get_apn_invt').append(ats);
					}
				}	

			 // alert(json.array_results); 
			 // $('#gt_invt').append('array_results');
			}			  
		});
			
			
	});	
	
	$('#add_pls').click(function(){
		$('.add_invt').show();
		$('#ck_invent').hide();
		$('.mg_titl h1').html('Add');
		$('#ck_calndr').hide();
		$('#settings').hide();
		$('#st_remind').hide();
		$('#wek_form').hide();
		$('#inv').attr("src","img/invent.png");
		$('#mnday').hide();
		$('#tusedy').hide();
		$('.hme_wrk').hide();
		$('#all_tsk_shw').hide();
		$('#task_clndr').hide();
		$("#my_daily").hide();
	});
	
	$('#home_st').click(function(){
		$('#ims').attr("src", "img/clcik_home.png");
		$('#inv').attr("src","img/invent.png");
		$('#cln').attr("src","img/clnder.png");
		$('#remb').attr("src","img/remember.png");
		$('#seting').attr("src", "img/seting.png");
		$('#ho_wrk').attr("src", "img/home_work.png");
		$('#login-signup').hide(); 
		$('#dashboard').show(); 
		$('#hdr_logo').hide();
		$('#aft_login').hide();
		$('.add_invt').hide();
		$('#ck_invent').hide();
		$('#aft_login').show();
		$('#settings').hide();
		$('#st_remind').hide();
		$('#add_pls').css({"visibility": "hidden"});
		$('.mg_titl h1').html('My online brain  ');
		$('#ck_calndr').hide();
		$('#wek_form').hide();
		$('#mnday').hide();
		$('#tusedy').hide();
		$('.hme_wrk').hide();
		$('#all_tsk_shw').hide();
		$('#task_clndr').hide();
		$("#my_daily").hide();
	});
	
	$('.cal_endr').click(function(){
		$('#ck_calndr').show();
		$('#ims').attr("src", "img/home.png");
		$('#inv').attr("src","img/invent.png");
		$('#remb').attr("src","img/remember.png");
		$('#cln').attr("src","img/click_clander.png");
		$('#seting').attr("src", "img/seting.png");
		$('#ho_wrk').attr("src", "img/home_work.png");
		$('#login-signup').hide(); 
		$('#dashboard').hide(); 
		$('#hdr_logo').hide();
		$('#aft_login').hide();
		$('.add_invt').hide();
		$('#ck_invent').hide();
		$('#aft_login').show();
		$('#dashboard').hide();
		$('#settings').hide();
		$('#st_remind').hide();
		$('#add_pls').css({"visibility": "hidden"});
		$('.mg_titl h1').html('Calendar');
		$('#wek_form').hide();
		$('#mnday').hide();
		$('#tusedy').hide();
		$('.hme_wrk').hide();
		$('#all_tsk_shw').hide();
		$('#task_clndr').hide();
		$("#my_daily").hide();
	});
	
	$('.remi_nder').click(function(){
		$('#ims').attr("src", "img/home.png");
		$('#inv').attr("src","img/invent.png");
		$('#cln').attr("src","img/clnder.png");
		$('#remb').attr("src","img/click_rember.png");
		$('#seting').attr("src", "img/seting.png");
		$('#ho_wrk').attr("src", "img/home_work.png");
		$('#ck_calndr').hide();
		$('#login-signup').hide(); 
		$('#dashboard').hide(); 
		$('#hdr_logo').hide();
		$('#aft_login').hide();
		$('.add_invt').hide();
		$('#ck_invent').hide();
		$('#aft_login').show();
		$('#dashboard').hide();
		$('#settings').hide();
		$('#add_pls').css({"visibility": "hidden"});
		$('.mg_titl h1').html('Reminders');
		$('#st_remind').show();
		$('#wek_form').hide();
		$('#mnday').hide();
		$('#tusedy').hide();
		$('.hme_wrk').hide();
		$('#all_tsk_shw').hide();
		$('#task_clndr').hide();
		$("#my_daily").hide();
	});
	$('.seting').click(function(){
		$('#ims').attr("src", "img/home.png");
		$('#inv').attr("src","img/invent.png");
		$('#cln').attr("src","img/clnder.png");
		$('#remb').attr("src","img/click_rember.png");
		$('#remb').attr("src","img/remember.png");
		$('#seting').attr("src", "img/click_seting.png");
		$('#ho_wrk').attr("src", "img/home_work.png");
		$('#ck_calndr').hide();
		$('#login-signup').hide(); 
		$('#dashboard').hide(); 
		$('#hdr_logo').hide();
		$('#aft_login').hide();
		$('.add_invt').hide();
		$('#ck_invent').hide();
		$('#aft_login').show();
		$('#dashboard').hide();
		$('#add_pls').css({"visibility": "hidden"});
		$('.mg_titl h1').html('Settings');
		$('#st_remind').hide();
		$('#settings').show();
		$('#wek_form').hide();
		$('#mnday').hide();
		$('#tusedy').hide();
		$('.hme_wrk').hide();
		$('#all_tsk_shw').hide();
		$('#task_clndr').hide();
		$("#my_daily").hide();
	});
	
	$('#mndy').click(function (){
		$('#wek_form').show();	
		$('#ck_calndr').hide();
		$('#login-signup').hide(); 
		$('#dashboard').hide(); 
		$('#hdr_logo').hide();
		$('#aft_login').hide();
		$('.add_invt').hide();
		$('#ck_invent').hide();
		$('#aft_login').hide();
		$('#dashboard').hide();
		$('#add_pls').css({"visibility": "hidden"});
		$('.mg_titl h1').html('Settings');
		$('#st_remind').hide();
		$('#settings').hide();
		
		$('#ims').attr("src", "img/home.png");
		$('#inv').attr("src","img/invent.png");
		$('#cln').attr("src","img/clnder.png");
		$('#remb').attr("src","img/click_rember.png");
		$('#seting').attr("src", "img/seting.png");
		$('#ho_wrk').attr("src", "img/home_work.png");
		$('#add_pls').css({"visibility": "hidden"});
		$('.mg_titl h1').html('Reminders');
		$('#aft_login').show();
		$('#mnday').show();
		$('#tusedy').hide();
		$('.hme_wrk').hide();
		$('#all_tsk_shw').hide();
		$('#task_clndr').hide();
		$("#my_daily").hide();
	});
	$('#tusdy').click(function (){
		$('#wek_form').show();	
		$('#ck_calndr').hide();
		$('#login-signup').hide(); 
		$('#dashboard').hide(); 
		$('#hdr_logo').hide();
		$('#aft_login').hide();
		$('.add_invt').hide();
		$('#ck_invent').hide();
		$('#aft_login').hide();
		$('#dashboard').hide();
		$('#add_pls').css({"visibility": "hidden"});
		$('.mg_titl h1').html('Settings');
		$('#st_remind').hide();
		$('#settings').hide();
		
		$('#ims').attr("src", "img/home.png");
		$('#inv').attr("src","img/invent.png");
		$('#cln').attr("src","img/clnder.png");
		$('#remb').attr("src","img/click_rember.png");
		$('#seting').attr("src", "img/seting.png");
		$('#ho_wrk').attr("src", "img/home_work.png");
		$('#add_pls').css({"visibility": "hidden"});
		$('.mg_titl h1').html('Reminders');
		$('#aft_login').show();
		$('#mnday').hide();
		$('#tusedy').show();
		$('.hme_wrk').hide();
		$('#all_tsk_shw').hide();
		$('#task_clndr').hide();
		$("#my_daily").hide();
	});
	
	/*$('.home_work').click(function(){
		$('#ck_calndr').hide();
	});*/
	
	 /**************Add inventory**************/		
		 $("#add_inventory").submit(function(e){
			 $("#my_daily").hide();
			e.preventDefault();
			var st_name = jQuery("#st_name").val();
			var int_beon = jQuery("#int_beon").val();
			var tk_pic = jQuery("#st_name").val();
			var chs_pic = jQuery("#int_beon").val();
			var use_email = jQuery('#use_mil').val();
			$.ajax({
				type: "POST",
				url: "http://myonlinebrain.com.au/api.php",
				data: {use_email: use_email,st_name : st_name,int_beon : int_beon,tk_pic : tk_pic,chs_pic : chs_pic,func:'Add'},
				cache: false,
				datatype: 'json',
				success: function(data){ 
				  var json = $.parseJSON(data);
				  alert("Inventory Add Successfully"); 
				  /*$('#ck_invent').show();
				  $('.add_invt').hide();*/
			    },
				error: function (data) {
					alert("Failure");
				} 
			  
			});
			
		 });
		/*******************************************/
		
		/**********add task**************/
		$('#add_tk').click(function (){
			$('#wek_form').hide();	
			$('#ck_calndr').hide();
			$('#login-signup').hide(); 
			$('#dashboard').hide(); 
			$('#hdr_logo').hide();
			$('.add_invt').hide();
			$('#ck_invent').hide();
			$('#add_pls').css({"visibility": "hidden"});
			$('.mg_titl h1').html('Homework tasks');
			$('#st_remind').hide();
			$('#settings').hide();
			$('#ims').attr("src", "img/home.png");
			$('#inv').attr("src","img/invent.png");
			$('#remb').attr("src","img/remember.png");
			$('#cln').attr("src","img/clnder.png");
			$('#seting').attr("src", "img/seting.png");	
			$('#ho_wrk').attr("src", "img/clcik_hmwork.png");
			$('#aft_login').show();
			$('#mnday').hide();
			$('#tusedy').hide();
			$('#task_clndr').show();
			$('.hme_wrk').hide();
			$('#all_tsk_shw').hide();
			$("#my_daily").hide();
		});
		
		/*******************************/
		
		/*********home-work************/
		$('#home_work').click(function (){
			$('#wek_form').hide();	
			$('#ck_calndr').hide();
			$('#login-signup').hide(); 
			$('#dashboard').hide(); 
			$('#hdr_logo').hide();
			$('.add_invt').hide();
			$('#ck_invent').hide();
			$('#add_pls').css({"visibility": "hidden"});
			$('.mg_titl h1').html('Homework');
			$('#st_remind').hide();
			$('#settings').hide();
			$('#ims').attr("src", "img/home.png");
			$('#inv').attr("src","img/invent.png");
			$('#remb').attr("src","img/remember.png");
			$('#cln').attr("src","img/clnder.png");
			$('#seting').attr("src", "img/seting.png");	
			$('#ho_wrk').attr("src", "img/clcik_hmwork.png");
			$('#aft_login').show();
			$('#mnday').hide();
			$('#tusedy').hide();
			$('.hme_wrk').show();
			$('#all_tsk_shw').hide();
			$('#task_clndr').hide();
			$("#my_daily").hide();
		});
		/*******************/
		
		/*******view_all***********/
		$('#viw_tsk').click(function (){
			$('#wek_form').hide();	
			$('#ck_calndr').hide();
			$('#login-signup').hide(); 
			$('#dashboard').hide(); 
			$('#hdr_logo').hide();
			$('.add_invt').hide();
			$('#ck_invent').hide();
			$('#add_pls').css({"visibility": "hidden"});
			$('.mg_titl h1').html('All homework tasks');
			$('#st_remind').hide();
			$('#settings').hide();
			$('#ims').attr("src", "img/home.png");
			$('#inv').attr("src","img/invent.png");
			$('#remb').attr("src","img/remember.png");
			$('#cln').attr("src","img/clnder.png");
			$('#seting').attr("src", "img/seting.png");	
			$('#ho_wrk').attr("src", "img/clcik_hmwork.png");
			$('#aft_login').show();
			$('#mnday').hide();
			$('#tusedy').hide();
			$('.hme_wrk').hide();
			$('#all_tsk_shw').show();
			$('#task_clndr').hide();
			$("#my_daily").hide();
		});
  }
  
  $("#signupform").submit(function(e){
    e.preventDefault();
    var email = jQuery("#register-email").val();
    var pwd = jQuery("#signup-password").val();
    var pwd1 = jQuery("#signup-confirmpassword").val();
		if(pwd != "" && pwd != pwd1) {
            
            alert("Error: Please check that you've entered and confirmed your password!");
            jQuery("#signup-confirmpassword").focus();
            return false;
            
		}   
		else{      
          $.ajax({
            type: "POST",
            url: "http://myonlinebrain.com.au/api.php",
            data: {email : email,pwd : pwd,func:'register'},
            cache: false,
            datatype: 'json',
            success: function(data){ 
              var json = $.parseJSON(data);
              alert(json.message);
              if(json.status == 1)
              {
                $('#signupbox').hide(); $('#loginbox').show();
                $('#login-email').val(email);
                $('#login-password').focus();  
              }
             
            }
          });
        }    
    });
         
    $("#loginform").submit(function(e){
			e.preventDefault();
			var email = jQuery("#login-email").val();
			var pwd = jQuery("#login-password").val();
    
      //alert(email)
          $.ajax({
            type: "POST",
            url: "http://myonlinebrain.com.au/api.php",
            data: {email : email,pwd : pwd,func:'login'},
            cache: false,
            datatype: 'json',
            success: function(data){ 
              var json = $.parseJSON(data);
              alert(json.status);
              if(json.status == 1)
              {
                $('#login-signup').hide(); 
                $('#dashboard').show();
                localStorage.login = 1;
                localStorage.email = email;
              }
              else
              {
                alert(json.message);
              }
                        
			} 
          });   
    });   
            
	//date picker
	jQuery( "#datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
	jQuery("#datepicker").on("change",function(){
        var datepicker = jQuery(this).val();
		$("#date_mts").html("<input type='hidden' name='dat_frmt' id='chk_dte' value='"+datepicker+"'>");  
	});
	jQuery( "#timepiker" ).timepicker({ 'timeFormat': 'H:i A'});
	jQuery("#timepiker").on("change",function(){
        var timepiker = jQuery(this).val();
		//alert(timepiker);
		$("#tim_mts").html("<input type='hidden' name='time_frmt' id='chk_time' value='"+timepiker+"'>");  		
	});
	
	$("#task_sv").submit(function(e){
		e.preventDefault();	
		var user_email = localStorage.email;
		$('#use_mil').val(user_email);
		var use_email = jQuery('#use_mil').val();
		var task_name = jQuery("#tsk_nm").val();
		var des_cription = jQuery("#acd_desc").val();
		var chk_dte = jQuery("#chk_dte").val();
		var chk_time = jQuery("#chk_time").val();
		//alert(chk_time);
		$.ajax({
            type: "POST",
            url: "http://myonlinebrain.com.au/api.php",
            data: {task_names : task_name,desc_cription : des_cription,chk_date: chk_dte, user_email: use_email,task_time: chk_time, func:'Save'},
            cache: false,
            datatype: 'json',
            success: function(data){ 
			//alert(data);
              alert("Save Successfully!");
            },
			error: function (data) {
				//alert(data);
				alert("Failure"); 
			}           
			
        });
		
	});
	
	
});  


	////on calender date click ////
	function myFunction(id) {
			var cl_dt_frmt = $('#set_frmt_time'+id).val();
			//$("#chk_cld_on").html("<input type='hidden' name='chk_clndr' id='chk_clndr' value='"+cl_dt_frmt+"'>"); 
			var user_email = localStorage.email;
			$('#use_mil').val(user_email);
			var users_email = jQuery('#use_mil').val();
			$.ajax({
				type: "POST",
				url: "http://myonlinebrain.com.au/api.php",
				data: {cl_dt_frmts : cl_dt_frmt, userd_email: users_email, func:'clndr'},
				cache: false,
				datatype: 'json',
				success: function(data){ 
					var JSONObject = JSON.parse(data);
					$('#day_data').html('');
					for (var key in JSONObject) {
						if (JSONObject.hasOwnProperty(key)) {
						//alert(JSONObject[key]["name"] + ", " + JSONObject[key]["image"]);
							var ats = '<li><div class="dys_chk"><div class="chk_tm"> '+ JSONObject[key]["task_name"] +' </div><div class="ck_event"> '+ JSONObject[key]["task_name"] +' </div><div class="ck_evnt_tm"> '+ JSONObject[key]["task_description"] +' </div></div></li>';
							//alert(ats);
							$('#day_data').append(ats);
						}
					}	
					$("#my_daily").show();
					$('.mg_titl h1').html('DAY');
					$("#ck_calndr").hide();
				},
				error: function (data) {
					alert("error, please try again!"); 
				}           
				
			});
	} 

