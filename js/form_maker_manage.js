function fm_check_page_load() {
  if (!document.getElementById('araqel') || (document.getElementById('araqel').value == '0')) {
    alert('Please wait while page loading.');
    return false;
  }
  else {
    return true;
  }
}

function remove_whitespace(node) {
  var ttt;
  for (ttt = 0; ttt < node.childNodes.length; ttt++) {
    if (node.childNodes[ttt] && node.childNodes[ttt].nodeType == '3' && !/\S/.test(node.childNodes[ttt].nodeValue)) {
      node.removeChild(node.childNodes[ttt]);
      ttt--;
    }
    else {
      if (node.childNodes[ttt].childNodes.length) {
        remove_whitespace(node.childNodes[ttt]);
      }
    }
  }
  return;
}

function refresh_() {
	document.getElementById('counter').value = gen;
	for (i = 1; i <= form_view_max; i++) {
		if (document.getElementById('form_id_tempform_view' + i)) {
			if (document.getElementById('page_next_' + i)) {
				document.getElementById('page_next_' + i).removeAttribute('src');
      }
			if (document.getElementById('page_previous_' + i)) {
				document.getElementById('page_previous_' + i).removeAttribute('src');
      }
			document.getElementById('form_id_tempform_view' + i).parentNode.removeChild(document.getElementById('form_id_tempform_view_img' + i));
			document.getElementById('form_id_tempform_view' + i).removeAttribute('style');
		}
  }
	document.getElementById('form_front').value = document.getElementById('take').innerHTML;
}

function refresh_old() {
  document.getElementById('form').value = document.getElementById('take').innerHTML;
  document.getElementById('counter').value = gen;
  n = gen;
  for (i = 0; i < n; i++) {
    if (document.getElementById(i)) {
      for (z = 0; z < document.getElementById(i).childNodes.length; z++) {
        if (document.getElementById(i).childNodes[z].nodeType == 3) {
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[z]);
        }
      }
      if (document.getElementById(i).getAttribute('type') == "type_captcha" || document.getElementById(i).getAttribute('type') == "type_recaptcha") {
        if (document.getElementById(i).childNodes[10]) {
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        }
        else {
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
          document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        }
        continue;
      }

      if (document.getElementById(i).getAttribute('type') == "type_section_break") {
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        continue;
      }

      if (document.getElementById(i).childNodes[10]) {
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[2]);
      }
      else {
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
        document.getElementById(i).removeChild(document.getElementById(i).childNodes[1]);
      }
    }
  }

  for (i = 0; i <= n; i++) {
    if (document.getElementById(i)) {
      type = document.getElementById(i).getAttribute("type");
      switch (type) {
        case "type_text":
        case "type_number":
        case "type_password":
        case "type_submitter_mail":
        case "type_own_select":
        case "type_country":
        case "type_hidden":
        case "type_map":
        case "type_mark_map":
        case "type_paypal_select": {
          remove_add_(i + "_elementform_id_temp");
          break;
        }

        case "type_submit_reset": {
          remove_add_(i + "_element_submitform_id_temp");
          if (document.getElementById(i + "_element_resetform_id_temp"))
            remove_add_(i + "_element_resetform_id_temp");
          break;
        }

        case "type_captcha": {
          remove_add_("_wd_captchaform_id_temp");
          remove_add_("_element_refreshform_id_temp");
          remove_add_("_wd_captcha_inputform_id_temp");
          break;
        }

        case "type_recaptcha": {
          document.getElementById("public_key").value = document.getElementById("wd_recaptchaform_id_temp").getAttribute("public_key");
          document.getElementById("private_key").value = document.getElementById("wd_recaptchaform_id_temp").getAttribute("private_key");
          document.getElementById("recaptcha_theme").value = document.getElementById("wd_recaptchaform_id_temp").getAttribute("theme");
          document.getElementById('wd_recaptchaform_id_temp').innerHTML = '';
          remove_add_("wd_recaptchaform_id_temp");
          break;
        }

        case "type_file_upload": {
          remove_add_(i + "_elementform_id_temp");
          break;
        }

        case "type_textarea": {
          remove_add_(i + "_elementform_id_temp");
          break;
        }

        case "type_name": {
          if (document.getElementById(i + "_element_titleform_id_temp")) {
            remove_add_(i + "_element_titleform_id_temp");
            remove_add_(i + "_element_firstform_id_temp");
            remove_add_(i + "_element_lastform_id_temp");
            remove_add_(i + "_element_middleform_id_temp");
          }
          else {
            remove_add_(i + "_element_firstform_id_temp");
            remove_add_(i + "_element_lastform_id_temp");
          }
          break;
        }

        case "type_phone": {
          remove_add_(i + "_element_firstform_id_temp");
          remove_add_(i + "_element_lastform_id_temp");
          break;
        }

        case "type_paypal_price": {
          remove_add_(i + "_element_dollarsform_id_temp");
          remove_add_(i + "_element_centsform_id_temp");
          break;
        }

        case "type_address": {
          if (document.getElementById(id_for_country+"_disable_fieldsform_id_temp")) {
            if (document.getElementById(id_for_country+"_disable_fieldsform_id_temp").getAttribute('street1') == 'no') {
              remove_add_(i+"_street1form_id_temp");
            }
            if (document.getElementById(id_for_country+"_disable_fieldsform_id_temp").getAttribute('street2') == 'no')	{
              remove_add_(i+"_street2form_id_temp");
            }
            if (document.getElementById(id_for_country+"_disable_fieldsform_id_temp").getAttribute('city') == 'no') {
              remove_add_(i+"_cityform_id_temp");
            }
            if (document.getElementById(id_for_country+"_disable_fieldsform_id_temp").getAttribute('state') == 'no') {
              remove_add_(i+"_stateform_id_temp");
            }
            if (document.getElementById(id_for_country+"_disable_fieldsform_id_temp").getAttribute('postal') == 'no') {
              remove_add_(i+"_postalform_id_temp");
            }
            if (document.getElementById(id_for_country+"_disable_fieldsform_id_temp").getAttribute('country') == 'no') {
              remove_add_(i+"_countryform_id_temp");
            }
          }
          break;
        }

        case "type_checkbox":
        case "type_radio":
        case "type_paypal_checkbox":
        case "type_paypal_radio":
        case "type_paypal_shipping": {
          is = true;
          for (j = 0; j < 100; j++) {
            if (document.getElementById(i + "_elementform_id_temp" + j)) {
              remove_add_(i + "_elementform_id_temp" + j);
            }
          }
          break;
        }

        case "type_star_rating": {
          remove_add_(i+"_elementform_id_temp");
          break;
        }
        
        case "type_scale_rating": {
          remove_add_(i+"_elementform_id_temp");
          break;
        }

        case "type_spinner": {
          remove_add_(i+"_elementform_id_temp");
          break;
        }

        case "type_slider": {
          remove_add_(i+"_elementform_id_temp");
          break;
        }

        case "type_range": {
          remove_add_(i+"_elementform_id_temp0");
          remove_add_(i+"_elementform_id_temp1");
          break;
        }

        case "type_grading": {
          for (k = 0; k < 100; k++) {
            if (document.getElementById(i+"_elementform_id_temp"+k)) {
              remove_add_(i+"_elementform_id_temp"+k);
            }
          }
          break;
        }

        case "type_matrix": {
          remove_add_(i+"_elementform_id_temp");
          break;
        }

        case "type_button": {
          for (j = 0; j < 100; j++) {
            if (document.getElementById(i + "_elementform_id_temp" + j)) {
              remove_add_(i + "_elementform_id_temp" + j);
            }
          }
          break;
        }

        case "type_time": {
          if (document.getElementById(i + "_ssform_id_temp")) {
            remove_add_(i + "_ssform_id_temp");
            remove_add_(i + "_mmform_id_temp");
            remove_add_(i + "_hhform_id_temp");
          }
          else {
            remove_add_(i + "_mmform_id_temp");
            remove_add_(i + "_hhform_id_temp");
          }
          break;
        }

        case "type_date": {
          remove_add_(i + "_elementform_id_temp");
          remove_add_(i + "_buttonform_id_temp");
          break;
        }

        case "type_date_fields": {
          remove_add_(i + "_dayform_id_temp");
          remove_add_(i + "_monthform_id_temp");
          remove_add_(i + "_yearform_id_temp");
          break;
        }
      }
    }
  }

  for (i = 1; i <= form_view_max; i++) {
    if (document.getElementById('form_id_tempform_view' + i)) {
      if (document.getElementById('page_next_' + i)) {
        document.getElementById('page_next_' + i).removeAttribute('src');
      }
      if (document.getElementById('page_previous_' + i)) {
        document.getElementById('page_previous_' + i).removeAttribute('src');
      }
      document.getElementById('form_id_tempform_view' + i).parentNode.removeChild(document.getElementById('form_id_tempform_view_img' + i));
      document.getElementById('form_id_tempform_view' + i).removeAttribute('style');
    }
  }

  for (t = 1; t <= form_view_max; t++) {
    if (document.getElementById('form_id_tempform_view' + t)) {
      form_view_element = document.getElementById('form_id_tempform_view' + t);
      remove_whitespace(form_view_element);
      n = form_view_element.childNodes.length - 2;
      for (q = 0; q <= n; q++) {
        if (form_view_element.childNodes[q]) {
          if (form_view_element.childNodes[q].nodeType != 3) {
            if (!form_view_element.childNodes[q].id) {
              del = true;
              GLOBAL_tr = form_view_element.childNodes[q];
              for (x = 0; x < GLOBAL_tr.firstChild.childNodes.length; x++) {
                table = GLOBAL_tr.firstChild.childNodes[x];
                tbody = table.firstChild;
                if (tbody.childNodes.length) {
                  del = false;
                }
              }
              if (del) {
                form_view_element.removeChild(form_view_element.childNodes[q]);
              }
            }
          }
        }
      }
    }
  }
  document.getElementById('form_front').value = document.getElementById('take').innerHTML;
}

function form_maker_options_tabs(id) {
  jQuery("#fieldset_id").val(id);
  jQuery(".fm_fieldset_active").removeClass("fm_fieldset_active").addClass("fm_fieldset_deactive");
  jQuery("#" + id + "_fieldset").removeClass("fm_fieldset_deactive").addClass("fm_fieldset_active");
  jQuery(".fm_fieldset_tab").removeClass("active");
  jQuery("#" + id).addClass("active");
  return false;
}

function set_type(type) {
  switch(type) {
    case 'post':
    document.getElementById('post').removeAttribute('style');
    document.getElementById('page').setAttribute('style','display:none');
    document.getElementById('custom_text').setAttribute('style','display:none');
    document.getElementById('url').setAttribute('style','display:none');
    document.getElementById('none').setAttribute('style','display:none');
    break;
    case 'page':
      document.getElementById('page').removeAttribute('style');
      document.getElementById('post').setAttribute('style','display:none');
      document.getElementById('custom_text').setAttribute('style','display:none');
      document.getElementById('url').setAttribute('style','display:none');
      document.getElementById('none').setAttribute('style','display:none');
      break;
    case 'custom_text':
      document.getElementById('page').setAttribute('style','display:none');
      document.getElementById('post').setAttribute('style','display:none');
      document.getElementById('custom_text').removeAttribute('style');
      document.getElementById('url').setAttribute('style','display:none');
      document.getElementById('none').setAttribute('style','display:none');
      break;
    case 'url':
      document.getElementById('page').setAttribute('style','display:none');
      document.getElementById('post').setAttribute('style','display:none');
      document.getElementById('custom_text').setAttribute('style','display:none');
      document.getElementById('url').removeAttribute('style');
      document.getElementById('none').setAttribute('style','display:none');
      break;
    case 'none':
      document.getElementById('page').setAttribute('style','display:none');
      document.getElementById('post').setAttribute('style','display:none');
      document.getElementById('custom_text').setAttribute('style','display:none');
      document.getElementById('url').setAttribute('style','display:none');
      document.getElementById('none').removeAttribute('style');
      break;
  }
}

function insertAtCursor(myField, myValue) {
  if (myField.style.display == "none") {
    tinyMCE.execCommand('mceInsertContent', false, "%" + myValue + "%");
    return;
  }
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
  }
  else if (myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos)
      + "%" + myValue + "%"
      + myField.value.substring(endPos, myField.value.length);
  }
  else {
    myField.value += "%" + myValue + "%";
  }
}

function check_isnum(e) {
  var chCode1 = e.which || e.keyCode;
  if (chCode1 > 31 && (chCode1 < 48 || chCode1 > 57)) {
    return false;
  }
  return true;
}

// Check Email.
function spider_check_email(id) {
  if (document.getElementById(id) && jQuery('#' + id).val() != '') {
    var email_array = jQuery('#' + id).val().split(',');
    for (var email_id = 0; email_id < email_array.length; email_id++) {
      var email = email_array[email_id].replace(/^\s+|\s+$/g, '');
      if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1) {
        alert('This is not a valid email address.');
        jQuery('#' + id).css('border', '1px solid #FF0000');
        jQuery('#' + id).focus();
        jQuery('html, body').animate({
          scrollTop:jQuery('#' + id).offset().top - 200
        }, 500);
        return true;
      }
    }
  }
  return false;
}

function spider_edit_ip(id) {
  var ip = jQuery("#ip" + id).html();
  jQuery("#td_ip_" + id).html('<input id="ip' + id + '" class="input_th' + id + '" type="text" onkeypress="return spider_check_isnum(event)" value="' + ip + '" name="ip' + id + '" />');
  jQuery("#td_edit_" + id).html('<a class="button-primary button button-small" onclick="if (spider_check_required(\'ip' + id + '\', \'IP\')) {return false;} spider_set_input_value(\'task\', \'save\'); spider_set_input_value(\'current_id\', ' + id + '); spider_save_ip(' + id + ')">Save IP</a>');
}

function spider_save_ip(id) {
  var ip = jQuery("#ip" + id).val();
  var post_data = {};
  post_data["ip"] = ip;
  post_data["current_id"] = id;
  post_data["task"] = "save";
  jQuery.post(
    jQuery("#blocked_ips").attr("action"),
    post_data,
    function (data) {
      jQuery("#td_ip_" + id).html('<a id="ip' + id + '" class="pointer" title="Edit" onclick="spider_edit_ip(' + id + ')">' + ip + '</a>');
      jQuery("#td_edit_" + id).html('<a onclick="spider_edit_ip(' + id + ')">Edit</a>');
    }
  ).success(function (data, textStatus, errorThrown) {
    jQuery(".update, .error").hide();
    jQuery("#fm_blocked_ips_message").html("<div class='updated'><strong><p>Items Succesfully Saved.</p></strong></div>");
    jQuery("#fm_blocked_ips_message").show();
  });
}

function wdhide(id) {
	document.getElementById(id).style.display = "none";
}
function wdshow(id) {
	document.getElementById(id).style.display = "block";
}
