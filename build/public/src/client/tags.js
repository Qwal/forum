"use strict";define("forum/tags",["forum/infinitescroll"],function(a){var t={};var e=0;t.init=function(){app.enterRoom("tags");$("#tag-search").on("input propertychange",function(){if(e){clearTimeout(e);e=0}if(!$("#tag-search").val().length){return n()}e=setTimeout(function(){socket.emit("topics.searchAndLoadTags",{query:$("#tag-search").val()},function(t,a){if(t){return app.alertError(t.message)}r(a.tags,true,function(){e=0})})},100)});a.init(t.loadMoreTags)};t.loadMoreTags=function(t){if(t<0||!$(".tag-list").length||$("#tag-search").val()){return}a.loadMore("topics.loadMoreTags",{after:$(".tag-list").attr("data-nextstart")},function(t,a){if(t&&t.tags&&t.tags.length){r(t.tags,false,a);$(".tag-list").attr("data-nextstart",t.nextStart)}else{a()}})};function n(){socket.emit("topics.loadMoreTags",{after:0},function(t,a){if(t){return app.alertError(t.message)}r(a.tags,true)})}function r(t,a,e){e=e||function(){};app.parseAndTranslate("tags","tags",{tags:t},function(t){$(".tag-list")[a?"html":"append"](t);utils.makeNumbersHumanReadable(t.find(".human-readable-number"));e()})}return t});
//# sourceMappingURL=public/src/client/tags.js.map