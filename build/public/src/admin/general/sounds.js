"use strict";define("admin/general/sounds",["sounds","settings","admin/settings"],function(n,t,e){var i={};i.init=function(){$(".sounds").find('button[data-action="play"]').on("click",function(t){t.preventDefault();var e=$(this).parent().parent().find("select").val();n.playSound(e)});e.prepare()};return i});
//# sourceMappingURL=sounds.js.map