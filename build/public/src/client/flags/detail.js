"use strict";define("forum/flags/detail",["forum/flags/list","components","translator","benchpress"],function(t,e,a,s){var n={};n.init=function(){$("#state").val(ajaxify.data.state).removeAttr("disabled");$("#assignee").val(ajaxify.data.assignee).removeAttr("disabled");$("[data-action]").on("click",function(){var t=this.getAttribute("data-action");switch(t){case"update":socket.emit("flags.update",{flagId:ajaxify.data.flagId,data:$("#attributes").serializeArray()},function(t,a){if(t){return app.alertError(t.message)}app.alertSuccess("[[flags:updated]]");n.reloadHistory(a)});break;case"appendNote":socket.emit("flags.appendNote",{flagId:ajaxify.data.flagId,note:document.getElementById("note").value},function(t,a){if(t){return app.alertError(t.message)}app.alertSuccess("[[flags:note-added]]");n.reloadNotes(a.notes);n.reloadHistory(a.history)});break}});t.enableFilterForm();t.enableChatButtons()};n.reloadNotes=function(t){s.parse("flags/detail","notes",{notes:t},function(t){var a=e.get("flag/notes");a.empty();a.html(t);a.find("span.timeago").timeago();document.getElementById("note").value=""})};n.reloadHistory=function(t){s.parse("flags/detail","history",{history:t},function(t){a.translate(t,function(t){var a=e.get("flag/history");a.empty();a.html(t);a.find("span.timeago").timeago()})})};return n});
//# sourceMappingURL=public/src/client/flags/detail.js.map