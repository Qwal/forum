"use strict";define("admin/manage/users",["translator","benchpress"],function(u,m){var e={};e.init=function(){var e=$(".nav-pills li");var a=window.location.pathname;if(!e.find('a[href="'+a+'"]').length){a=config.relative_path+"/admin/manage/users/latest"}e.removeClass("active").find('a[href="'+a+'"]').parent().addClass("active");function r(){var e=[];$('.users-table [component="user/select/single"]').each(function(){if($(this).is(":checked")){e.push($(this).attr("data-uid"))}});return e}function n(e,a){$('.users-table [component="user/select/single"]:checked').parents(".user-row").find(e).each(function(){$(this).toggleClass("hidden",!a)})}function t(){$('.users-table [component="user/select/single"]').prop("checked",false);$('.users-table [component="user/select/all"]').prop("checked",false)}function s(){$('.users-table [component="user/select/single"]:checked').parents(".user-row").remove()}function i(a,s,r){return function(e){if(e){return app.alertError(e.message)}app.alertSuccess(a);if(s){n(s,r)}t()}}$('[component="user/select/all"]').on("click",function(){if($(this).is(":checked")){$('.users-table [component="user/select/single"]').prop("checked",true)}else{$('.users-table [component="user/select/single"]').prop("checked",false)}});$(".ban-user").on("click",function(){var a=r();if(!a.length){app.alertError("[[error:no-users-selected]]");return false}bootbox.confirm(a.length>1?"[[admin/manage/users:alerts.confirm-ban-multi]]":"[[admin/manage/users:alerts.confirm-ban]]",function(e){if(e){socket.emit("user.banUsers",{uids:a,reason:""},i("[[admin/manage/users:alerts.ban-success]]",".ban",true))}})});$(".ban-user-temporary").on("click",function(){var s=r();if(!s.length){app.alertError("[[error:no-users-selected]]");return false}m.parse("admin/partials/temporary-ban",{},function(e){bootbox.dialog({className:"ban-modal",title:"[[user:ban_account]]",message:e,show:true,buttons:{close:{label:"[[global:close]]",className:"btn-link"},submit:{label:"[[admin/manage/users:alerts.button-ban-x, "+s.length+"]]",callback:function(){var e=$(".ban-modal form").serializeArray().reduce(function(e,a){e[a.name]=a.value;return e},{});var a=e.length>0?Date.now()+e.length*1e3*60*60*(parseInt(e.unit,10)?24:1):0;socket.emit("user.banUsers",{uids:s,until:a,reason:e.reason},i("[[admin/manage/users:alerts.ban-success]]",".ban",true))}}}})})});$(".unban-user").on("click",function(){var e=r();if(!e.length){app.alertError("[[error:no-users-selected]]");return false}socket.emit("user.unbanUsers",e,i("[[admin/manage/users:alerts.unban-success]]",".ban",false))});$(".reset-lockout").on("click",function(){var e=r();if(!e.length){return}socket.emit("admin.user.resetLockouts",e,i("[[admin/manage/users:alerts.lockout-reset-success]]"))});$(".validate-email").on("click",function(){var a=r();if(!a.length){return}bootbox.confirm("[[admin/manage/users:alerts.confirm-validate-email]]",function(e){if(!e){return}socket.emit("admin.user.validateEmail",a,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.validate-email-success]]");n(".notvalidated",false);n(".validated",true);t()})})});$(".send-validation-email").on("click",function(){var e=r();if(!e.length){return}socket.emit("admin.user.sendValidationEmail",e,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[notifications:email-confirm-sent]]")})});$(".password-reset-email").on("click",function(){var a=r();if(!a.length){return}bootbox.confirm("[[admin/manage/users:alerts.password-reset-confirm]]",function(e){if(e){socket.emit("admin.user.sendPasswordResetEmail",a,i("[[notifications:email-confirm-sent]]"))}})});$(".delete-user").on("click",function(){var a=r();if(!a.length){return}bootbox.confirm("[[admin/manage/users:alerts.confirm-delete]]",function(e){if(e){socket.emit("admin.user.deleteUsers",a,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.delete-success]]");s();t();if(!$('.users-table [component="user/select/single"]').length){ajaxify.refresh()}})}})});$(".delete-user-and-content").on("click",function(){var a=r();if(!a.length){return}bootbox.confirm("[[admin/manage/users:alerts.confirm-purge]]",function(e){if(e){socket.emit("admin.user.deleteUsersAndContent",a,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.delete-success]]");s();t();if(!$('.users-table [component="user/select/single"]').length){ajaxify.refresh()}})}})});function o(){$("#createUser").on("click",function(){m.parse("admin/partials/create_user_modal",{},function(e){bootbox.dialog({message:e,title:"[[admin/manage/users:alerts.create]]",onEscape:true,buttons:{cancel:{label:"[[admin/manage/users:alerts.button-cancel]]",className:"btn-link"},create:{label:"[[admin/manage/users:alerts.button-create]]",className:"btn-primary",callback:function(){l.call(this);return false}}}})})})}function l(){var a=this;var e=document.getElementById("create-user-name").value;var s=document.getElementById("create-user-email").value;var r=document.getElementById("create-user-password").value;var n=document.getElementById("create-user-password-again").value;var t=$("#create-modal-error");if(r!==n){return t.translateHtml("[[admin/manage/users:alerts.error-x, [[admin/manage/users:alerts.error-passwords-different]]]]").removeClass("hide")}var i={username:e,email:s,password:r};socket.emit("admin.user.createUser",i,function(e){if(e){return t.translateHtml("[[admin/manage/users:alerts.error-x, "+e.message+"]]").removeClass("hide")}a.modal("hide");a.on("hidden.bs.modal",function(){ajaxify.refresh()});app.alertSuccess("[[admin/manage/users:alerts.create-success]]")})}var c=0;$("#search-user-uid, #search-user-name, #search-user-email, #search-user-ip").on("keyup",function(){if(c!==0){clearTimeout(c);c=0}var e=$(this);var a=e.attr("data-search-type");c=setTimeout(function(){$(".fa-spinner").removeClass("hidden");socket.emit("admin.user.search",{searchBy:a,query:e.val()},function(e,a){if(e){return app.alertError(e.message)}m.parse("admin/manage/users","users",a,function(e){u.translate(e,function(e){e=$(e);$(".users-table tr").not(":first").remove();$(".users-table tr").first().after(e);e.find(".timeago").timeago();$(".fa-spinner").addClass("hidden");if(a&&a.users.length===0){$("#user-notfound-notify").translateHtml("[[admin/manage/users:search.not-found]]").removeClass("hide").addClass("label-danger").removeClass("label-success")}else{$("#user-notfound-notify").translateHtml(u.compile("admin/manage/users:alerts.x-users-found",a.users.length,a.timing)).removeClass("hide").addClass("label-success").removeClass("label-danger")}})})})},250)});o();d()};function d(){$('[component="user/invite"]').on("click",function(){bootbox.prompt("[[admin/manage/users:alerts.prompt-email]]",function(a){if(!a){return}socket.emit("user.invite",a,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.email-sent-to, "+a+"]]")})})})}return e});
//# sourceMappingURL=public/src/admin/manage/users.js.map