"use strict";define("admin/manage/group",["forum/groups/memberlist","iconSelect","admin/modules/colorpicker","translator","benchpress"],function(u,c,d,l,p){var e={};e.init=function(){var a=$("#group-details-search");var n=$("#group-details-search-results");var e=$("#group-icon");var r=$("#change-group-user-title");var t=$("#change-group-label-color");var s=$("#group-label-preview");var i;var o=ajaxify.data.group.name;$("#group-selector").on("change",function(){ajaxify.go("admin/manage/groups/"+$(this).val()+window.location.hash)});u.init("admin/manage/group");r.keyup(function(){s.text(r.val())});t.keyup(function(){s.css("background",t.val()||"#000000")});a.on("keyup",function(){if(i){clearTimeout(i)}i=setTimeout(function(){var e=a.val();var s;socket.emit("admin.user.search",{query:e},function(e,a){if(!e&&a&&a.users.length>0){var r=a.users.length;var t;if(r>20){r=20}n.empty();for(t=0;t<r;t+=1){s=$("<li />");s.attr({title:a.users[t].username,"data-uid":a.users[t].uid,"data-username":a.users[t].username,"data-userslug":a.users[t].userslug,"data-picture":a.users[t].picture,"data-usericon-bgColor":a.users[t]["icon:bgColor"],"data-usericon-text":a.users[t]["icon:text"]}).append(a.users[t].picture?$("<img />").addClass("avatar avatar-sm").attr("src",a.users[t].picture):$("<div />").addClass("avatar avatar-sm").css("background-color",a.users[t]["icon:bgColor"]).html(a.users[t]["icon:text"])).append($("<span />").html(a.users[t].username));n.append(s)}}else{n.translateHtml("<li>[[admin/manage/groups:edit.no-users-found]]</li>")}})},200)});n.on("click","li[data-uid]",function(){var r=$(this);var e=parseInt(r.attr("data-uid"),10);socket.emit("admin.groups.join",{groupName:o,uid:e},function(e){if(e){return app.alertError(e.message)}var a={uid:r.attr("data-uid"),username:r.attr("data-username"),userslug:r.attr("data-userslug"),picture:r.attr("data-picture"),"icon:bgColor":r.attr("data-usericon-bgColor"),"icon:text":r.attr("data-usericon-text")};p.parse("admin/partials/groups/memberlist","group.members",{group:{isOwner:ajaxify.data.group.isOwner,members:[a]}},function(e){l.translate(e,function(e){$('[component="groups/members"] tbody').prepend(e)})})})});$('[component="groups/members"]').on("click","[data-action]",function(){var e=$(this);var a=e.parents("[data-uid]");var r=a.find(".member-name .user-owner-icon");var t=!r.hasClass("invisible");var s=a.attr("data-uid");var n=e.attr("data-action");switch(n){case"toggleOwnership":socket.emit("groups."+(t?"rescind":"grant"),{toUid:s,groupName:o},function(e){if(e){return app.alertError(e.message)}r.toggleClass("invisible")});break;case"kick":bootbox.confirm("[[admin/manage/groups:edit.confirm-remove-user]]",function(e){if(!e){return}socket.emit("admin.groups.leave",{uid:s,groupName:o},function(e){if(e){return app.alertError(e.message)}a.slideUp().remove()})});break;default:break}});$("#group-icon").on("click",function(){c.init(e)});d.enable(t,function(e,a){s.css("background-color","#"+a)});$("#save").on("click",function(){socket.emit("admin.groups.update",{groupName:o,values:{name:$("#change-group-name").val(),userTitle:r.val(),description:$("#change-group-desc").val(),icon:e.attr("value"),labelColor:t.val(),userTitleEnabled:$("#group-userTitleEnabled").is(":checked"),private:$("#group-private").is(":checked"),hidden:$("#group-hidden").is(":checked"),disableJoinRequests:$("#group-disableJoinRequests").is(":checked")}},function(e){if(e){return app.alertError(e.message)}var a=$("#change-group-name").val();if(o===a){app.alertSuccess("[[admin/manage/groups:edit.save-success]]")}else{ajaxify.go("admin/manage/groups/"+encodeURIComponent(a),undefined,true)}});return false})};return e});
//# sourceMappingURL=public/src/admin/manage/group.js.map