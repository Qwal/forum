"use strict";define("uploader",["translator","benchpress"],function(o,s){var a={};a.open=function(e,r,o,s){console.warn("[uploader] uploader.open() is deprecated, please use uploader.show() instead, and pass parameters as a singe option with callback, e.g. uploader.show({}, callback);");a.show({route:e,params:r,fileSize:o},s)};a.show=function(o,s){var t=o.hasOwnProperty("fileSize")&&o.fileSize!==undefined?parseInt(o.fileSize,10):false;e({showHelp:o.hasOwnProperty("showHelp")&&o.showHelp!==undefined?o.showHelp:true,fileSize:t,title:o.title||"[[global:upload_file]]",description:o.description||"",button:o.button||"[[global:upload]]",accept:o.accept?o.accept.replace(/,/g,"&#44; "):""},function(e){e=$(e);e.modal("show");e.on("hidden.bs.modal",function(){e.remove()});var r=e.find("#uploadForm");r.attr("action",o.route);r.find("#params").val(JSON.stringify(o.params));e.find("#fileUploadSubmitBtn").on("click",function(){$(this).addClass("disabled");r.submit()});r.submit(function(){i(e,t,s);return false})})};a.hideAlerts=function(e){$(e).find("#alert-status, #alert-success, #alert-error, #upload-progress-box").addClass("hide")};function i(t,e,r){function o(e,r){a.hideAlerts(t);if(e==="error"){t.find("#fileUploadSubmitBtn").removeClass("disabled")}t.find("#alert-"+e).translateText(r).removeClass("hide")}o("status","[[uploads:uploading-file]]");t.find("#upload-progress-bar").css("width","0%");t.find("#upload-progress-box").show().removeClass("hide");var s=t.find("#fileInput");if(!s.val()){return o("error","[[uploads:select-file-to-upload]]")}if(!l(s[0],e)){return o("error","[[error:file-too-big, "+e+"]]")}t.find("#uploadForm").ajaxSubmit({headers:{"x-csrf-token":config.csrf_token},error:function(e){e=n(e);o("error",e.responseJSON?e.responseJSON.error||e.statusText:"error uploading, code : "+e.status)},uploadProgress:function(e,r,o,s){t.find("#upload-progress-bar").css("width",s+"%")},success:function(e){e=n(e);if(e.error){return o("error",e.error)}r(e[0].url);o("success","[[uploads:upload-success]]");setTimeout(function(){a.hideAlerts(t);t.modal("hide")},750)}})}function e(e,r){s.parse("partials/modals/upload_file_modal",e,function(e){o.translate(e,r)})}function n(e){if(typeof e==="string"){try{return $.parseJSON(e)}catch(e){return{error:"[[error:parse-error]]"}}}return e}function l(e,r){if(window.FileReader&&r){return e.files[0].size<=r*1e3}return true}return a});
//# sourceMappingURL=public/src/modules/uploader.js.map