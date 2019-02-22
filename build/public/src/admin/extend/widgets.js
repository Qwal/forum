"use strict";define("admin/extend/widgets",["jqueryui"],function(){var a={};a.init=function(){$("#widgets .nav-pills a").on("click",function(a){var t=$(this);$("#widgets .nav-pills li").removeClass("active");t.parent().addClass("active");$("#widgets .tab-pane").removeClass("active");$('#widgets .tab-pane[data-template="'+t.attr("data-template")+'"]').addClass("active");a.preventDefault();return false});$("#widget-selector").on("change",function(){$(".available-widgets [data-widget]").addClass("hide");$('.available-widgets [data-widget="'+$(this).val()+'"]').removeClass("hide")});$("#widget-selector").trigger("change");i();r()};function t(){$('[data-location="drafts"]').insertAfter($('[data-location="drafts"]').closest(".tab-content"));$("#widgets .available-widgets .widget-panel").draggable({helper:function(a){return $(a.target).parents(".widget-panel").clone()},distance:10,connectToSortable:".widget-area"});$("#widgets .available-containers .containers > [data-container-html]").draggable({helper:function(a){var t=$(a.target);t=t.attr("data-container-html")?t:t.parents("[data-container-html]");return t.clone().addClass("block").width(t.width()).css("opacity","0.5")},distance:10}).each(function(){$(this).attr("data-container-html",$(this).attr("data-container-html").replace(/\\\{([\s\S]*?)\\\}/g,"{$1}"))});$("#widgets .widget-area").sortable({update:function(a,t){e(t.item);n(t.item)},connectWith:"div"}).on("click",".delete-widget",function(){var a=$(this).parents(".widget-panel");bootbox.confirm("[[admin/extend/widgets:alert.confirm-delete]]",function(t){if(t){a.remove()}})}).on("mouseup","> .panel > .panel-heading",function(a){if(!($(this).parent().is(".ui-sortable-helper")||$(a.target).closest(".delete-widget").length)){$(this).parent().children(".panel-body").toggleClass("hidden")}});$("#save").on("click",a);function a(){var a=[];$("#widgets [data-template][data-location]").each(function(t,e){e=$(e);var n=e.attr("data-template");var i=e.attr("data-location");var r=e.children(".widget-area");var d=[];r.find(".widget-panel[data-widget]").each(function(){var a={};var t=$(this).find("form").serializeArray();for(var e in t){if(t.hasOwnProperty(e)){if(t[e].name){if(a[t[e].name]){if(!Array.isArray(a[t[e].name])){a[t[e].name]=[a[t[e].name]]}a[t[e].name].push(t[e].value)}else{a[t[e].name]=t[e].value}}}}d.push({widget:$(this).attr("data-widget"),data:a})});a.push({template:n,location:i,widgets:d})});socket.emit("admin.widgets.set",a,function(a){if(a){app.alertError(a.message)}app.alert({alert_id:"admin:widgets",type:"success",title:"[[admin/extend/widgets:alert.updated]]",message:"[[admin/extend/widgets:alert.update-success]]",timeout:2500})})}$(".color-selector").on("click",".btn",function(){var a=$(this);var t=a.parents(".color-selector");var e=t.parents("[data-container-html]");var n=[];t.children().each(function(){n.push($(this).attr("data-class"))});e.removeClass(n.join(" ")).addClass(a.attr("data-class"));e.attr("data-container-html",e.attr("data-container-html").replace(/class="[a-zA-Z0-9-\s]+"/,'class="'+e[0].className.replace(" pointer ui-draggable ui-draggable-handle","")+'"'))})}function e(a){var t=(new Date).getFullYear();a.find(".date-selector").datepicker({changeMonth:true,changeYear:true,yearRange:t+":"+(t+100)})}function n(a){if(!a.hasClass("block")){a.addClass("block").css("width","").css("height","").droppable({accept:"[data-container-html]",drop:function(a,t){var e=$(this);e.find(".panel-body .container-html").val(t.draggable.attr("data-container-html"));e.find(".panel-body").removeClass("hidden")},hoverClass:"panel-info"}).children(".panel-heading").append('<div class="pull-right pointer"><span class="delete-widget"><i class="fa fa-times-circle"></i></span></div><div class="pull-left pointer"><span class="toggle-widget"><i class="fa fa-chevron-circle-down"></i></span>&nbsp;</div>').children("small").html("")}}function i(){function a(a,t){if(t.title){var e=a.find(".panel-heading strong");e.text(e.text()+" - "+t.title)}a.find("input, textarea, select").each(function(){var a=$(this);var e=t[a.attr("name")];if(a.attr("type")==="checkbox"){a.prop("checked",!!e).trigger("change")}else{a.val(e)}});return a}$.get(RELATIVE_PATH+"/api/admin/extend/widgets",function(i){var r=i.areas;for(var d=0;d<r.length;d+=1){var l=r[d];var s=$('#widgets .area[data-template="'+l.template+'"][data-location="'+l.location+'"]').find(".widget-area");s.html("");for(var c=0;c<l.data.length;c+=1){var o=l.data[c];var p=$('.available-widgets [data-widget="'+o.widget+'"]').clone(true).removeClass("hide");s.append(a(p,o.data));n(p);e(p)}}t()})}function r(){var a=$('[component="clone"]');var t=$('[component="clone/button"]');a.find(".dropdown-menu li").on("click",function(){var a=$(this).find("a").text();t.translateHtml("[[admin/extend/widgets:clone-from]] <strong>"+a+"</strong>");t.attr("data-template",a)});t.on("click",function(){var a=t.attr("data-template");if(!a){return app.alertError("[[admin/extend/widgets:error.select-clone]]")}var e=$("#active-widgets .active.tab-pane[data-template] .area");var n=$('#active-widgets .tab-pane[data-template="'+a+'"] .area');var i=e.map(function(){return $(this).attr("data-location")}).get();var r=n.map(function(){var a=$(this).attr("data-location");return i.indexOf(a)!==-1?a:undefined}).get().filter(function(a){return a});function d(t){$('#active-widgets .tab-pane[data-template="'+a+'"] [data-location="'+t+'"]').each(function(){$(this).find("[data-widget]").each(function(){var a=$(this).clone(true);$('#active-widgets .active.tab-pane[data-template]:not([data-template="global"]) [data-location="'+t+'"] .widget-area').append(a)})})}for(var l=0,s=r.length;l<s;l++){var c=r[l];d(c)}app.alertSuccess("[[admin/extend/widgets:alert.clone-success]]")})}return a});
//# sourceMappingURL=widgets.js.map