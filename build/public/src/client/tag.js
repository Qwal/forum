"use strict";define("forum/tag",["forum/recent","forum/infinitescroll"],function(n,o){var t={};t.init=function(){app.enterRoom("tags");if($("body").height()<=$(window).height()&&$('[component="category"]').children().length>=20){$("#load-more-btn").show()}$("#load-more-btn").on("click",function(){t()});if(!config.usePagination){o.init(t)}function t(t){if(t<0||!$('[component="category"]').length){return}o.loadMore("topics.loadMoreFromSet",{set:"tag:"+ajaxify.data.tag+":topics",after:$('[component="category"]').attr("data-nextstart"),count:config.topicsPerPage},function(t,o){if(t.topics&&t.topics.length){n.onTopicsLoaded("tag",t.topics,false,o)}else{o();$("#load-more-btn").hide()}$('[component="category"]').attr("data-nextstart",t.nextStart)})}};return t});
//# sourceMappingURL=public/src/client/tag.js.map