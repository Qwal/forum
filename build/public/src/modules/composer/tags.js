"use strict";define("composer/tags",function(){var t={};t.init=function(t,n){var o=t.find(".tags");if(!o.length){return}o.tagsinput({maxTags:config.maximumTagsPerTopic,maxChars:config.maximumTagLength,confirmKeys:[13,44],trimValue:true});o.on("beforeItemAdd",function(t){var i=utils.cleanUpTag(t.item,config.maximumTagLength);var e=i!==t.item;t.cancel=e||t.item.length<config.minimumTagLength||t.item.length>config.maximumTagLength;if(t.item.length<config.minimumTagLength){return app.alertError("[[error:tag-too-short, "+config.minimumTagLength+"]]")}else if(t.item.length>config.maximumTagLength){return app.alertError("[[error:tag-too-long, "+config.maximumTagLength+"]]")}if(e){o.tagsinput("add",i)}});o.on("itemAdded",function(t){var i=n.hasOwnProperty("cid")?n.cid:ajaxify.data.cid;socket.emit("topics.isTagAllowed",{tag:t.item,cid:i||0},function(e,a){if(e){return app.alertError(e.message)}if(!a){return o.tagsinput("remove",t.item)}$(window).trigger("action:tag.added",{cid:i,tagEl:o,tag:t.item})})});a(n.tags,o);var r=t.find(".bootstrap-tagsinput input");i(t,n,ajaxify.data);app.loadJQueryUI(function(){r.autocomplete({delay:100,position:{my:"left bottom",at:"left top",collision:"flip"},appendTo:t.find(".bootstrap-tagsinput"),open:function(){$(this).autocomplete("widget").css("z-index",2e4)},source:function(t,i){socket.emit("topics.autocompleteTags",{query:t.term,cid:n.cid},function(t,e){if(t){return app.alertError(t.message)}if(e){i(e)}$(".ui-autocomplete a").attr("data-ajaxify","false")})},select:function(t,i){e(r)}})});r.attr("tabIndex",o.attr("tabIndex"));r.attr("size",o.attr("placeholder").length);r.on("blur",function(){e(r)});$('[component="composer/tag/dropdown"]').on("click","li",function(){var t=$(this).attr("data-tag");if(t){a([t],o)}return false})};t.onChangeCategory=function(t,e,a){$.get(config.relative_path+"/api/category/"+a,function(a){var n=t.find('[component="composer/tag/dropdown"]');if(!n.length){return}i(t,e,a);n.toggleClass("hidden",!a.tagWhitelist||!a.tagWhitelist.length);if(a.tagWhitelist){app.parseAndTranslate("composer","tagWhitelist",{tagWhitelist:a.tagWhitelist},function(t){n.find(".dropdown-menu").html(t)})}})};function i(t,i,e){var a=t.find(".tags");var n=t.find(".bootstrap-tagsinput input");if(!n.length){return}if(e.tagWhitelist&&e.tagWhitelist.length){n.attr("readonly","");n.attr("placeholder","");a.tagsinput("items").slice().forEach(function(t){if(e.tagWhitelist.indexOf(t)===-1){a.tagsinput("remove",t)}})}else{n.removeAttr("readonly");n.attr("placeholder",t.find("input.tags").attr("placeholder"))}t.find(".tags-container").toggleClass("hidden",e.privileges&&e.privileges.hasOwnProperty("topics:tag")&&!e.privileges["topics:tag"]||config.maximumTagsPerTopic===0&&!i.tags.length);if(e.privileges&&e.privileges.hasOwnProperty("topics:tag")&&!e.privileges["topics:tag"]){a.tagsinput("removeAll")}$(window).trigger("action:tag.toggleInput",{postContainer:t,tagWhitelist:e.tagWhitelist,tagsInput:n})}function e(t){var i=jQuery.Event("keypress");i.which=13;i.keyCode=13;setTimeout(function(){t.trigger(i)},100)}function a(t,i){if(t&&t.length){for(var e=0;e<t.length;++e){i.tagsinput("add",t[e])}}}t.getTags=function(t){return $('.composer[data-uuid="'+t+'"]'+" .tags").tagsinput("items")};return t});
//# sourceMappingURL=tags.js.map