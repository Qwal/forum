"use strict";define("sort",["components"],function(e){var t={};t.handleSort=function(r,t,o){var a=e.get("thread/sort");a.find("i").removeClass("fa-check");var n=a.find('a[data-sort="'+config[r]+'"]');n.find("i").addClass("fa-check");$(".category, .topic").on("click",'[component="thread/sort"] a',function(){var a=$(this).attr("data-sort");socket.emit(t,a,function(t){if(t){return app.alertError(t.message)}config[r]=a;ajaxify.go(o)})})};return t});
//# sourceMappingURL=public/src/modules/sort.js.map