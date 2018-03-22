"use strict";define("admin/appearance/skins",["translator","benchpress"],function(a,s){var t={};t.init=function(){$.ajax({method:"get",url:"https://bootswatch.com/api/3.json"}).done(t.render);$("#skins").on("click",function(t){var a=$(t.target);if(!a.attr("data-action")){a=a.parents("[data-action]")}var e=a.attr("data-action");if(e&&e==="use"){var s=a.parents("[data-theme]");var n=s.attr("data-type");var r=s.attr("data-css");var i=s.attr("data-theme");socket.emit("admin.themes.set",{type:n,id:i,src:r},function(t){if(t){return app.alertError(t.message)}c(i);app.alert({alert_id:"admin:theme",type:"info",title:"[[admin/appearance/skins:skin-updated]]",message:i?"[[admin/appearance/skins:applied-success, "+i+"]]":"[[admin/appearance/skins:revert-success]]",timeout:5e3})})}})};t.render=function(t){var e=$("#bootstrap_themes");s.parse("admin/partials/theme_list",{themes:t.themes.map(function(t){return{type:"bootswatch",id:t.name,name:t.name,description:t.description,screenshot_url:t.thumbnail,url:t.preview,css:t.cssCdn,skin:true}}),showRevert:true},function(t){a.translate(t,function(t){e.html(t);if(config["theme:src"]){var a=config["theme:src"].match(/latest\/(\S+)\/bootstrap.min.css/)[1].replace(/(^|\s)([a-z])/g,function(t,a,e){return a+e.toUpperCase()});c(a)}})})};function c(s){a.translate("[[admin/appearance/skins:select-skin]]  ||  [[admin/appearance/skins:current-skin]]",function(t){t=t.split("  ||  ");var a=t[0];var e=t[1];$("[data-theme]").removeClass("selected").find('[data-action="use"]').each(function(){if($(this).parents("[data-theme]").attr("data-theme")){$(this).html(a).removeClass("btn-success").addClass("btn-primary")}});if(!s){return}$('[data-theme="'+s+'"]').addClass("selected").find('[data-action="use"]').html(e).removeClass("btn-primary").addClass("btn-success")})}return t});
//# sourceMappingURL=public/src/admin/appearance/skins.js.map