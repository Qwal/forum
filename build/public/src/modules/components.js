"use strict";define("components",function(){var o={};o.core={"topic/teaser":function(t){if(t){return $('[component="category/topic"][data-tid="'+t+'"] [component="topic/teaser"]')}return $('[component="topic/teaser"]')},topic:function(t,o){return $('[component="topic"][data-'+t+'="'+o+'"]')},post:function(t,o){return $('[component="post"][data-'+t+'="'+o+'"]')},"post/content":function(t){return o.core.post("pid",t).find('[component="post/content"]')},"post/header":function(t){return o.core.post("pid",t).find('[component="post/header"]')},"post/anchor":function(t){return o.core.post("index",t).find('[component="post/anchor"]')},"post/vote-count":function(t){return o.core.post("pid",t).find('[component="post/vote-count"]')},"post/bookmark-count":function(t){return o.core.post("pid",t).find('[component="post/bookmark-count"]')},"user/postcount":function(t){return $('[component="user/postcount"][data-uid="'+t+'"]')},"user/reputation":function(t){return $('[component="user/reputation"][data-uid="'+t+'"]')},"category/topic":function(t,o){return $('[component="category/topic"][data-'+t+'="'+o+'"]')},"categories/category":function(t,o){return $('[component="categories/category"][data-'+t+'="'+o+'"]')},"chat/message":function(t){return $('[component="chat/message"][data-mid="'+t+'"]')},"chat/message/body":function(t){return $('[component="chat/message"][data-mid="'+t+'"] [component="chat/message/body"]')},"chat/recent/room":function(t){return $('[component="chat/recent/room"][data-roomid="'+t+'"]')}};o.get=function(){var t=Array.prototype.slice.call(arguments,1);if(o.core[arguments[0]]&&t.length){return o.core[arguments[0]].apply(this,t)}return $('[component="'+arguments[0]+'"]')};return o});
//# sourceMappingURL=public/src/modules/components.js.map