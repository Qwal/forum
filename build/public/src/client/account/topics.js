"use strict";define("forum/account/topics",["forum/account/header","forum/infinitescroll"],function(t,i){var n={};var o;n.init=function(){t.init();n.handleInfiniteScroll("account/topics","uid:"+ajaxify.data.theirid+":topics")};n.handleInfiniteScroll=function(t,n){o=n;if(!config.usePagination){i.init(e)}};function e(t){if(t<0){return}i.loadMore("topics.loadMoreFromSet",{set:o,after:$('[component="category"]').attr("data-nextstart"),count:config.topicsPerPage},function(t,n){if(t.topics&&t.topics.length){a(t.topics,n)}else{n()}$('[component="category"]').attr("data-nextstart",t.nextStart)})}function a(n,i){app.parseAndTranslate("account/topics","topics",{topics:n},function(t){$('[component="category"]').append(t);t.find(".timeago").timeago();app.createUserTooltips();utils.makeNumbersHumanReadable(t.find(".human-readable-number"));$(window).trigger("action:topics.loaded",{topics:n});i()})}return n});
//# sourceMappingURL=public/src/client/account/topics.js.map