"use strict";define("admin/manage/uploads",["uploader"],function(a){var e={};e.init=function(){$("#upload").on("click",function(){a.show({title:"[[admin/manage/uploads:upload-file]]",route:config.relative_path+"/api/admin/upload/file",params:{folder:ajaxify.data.currentFolder}},function(){ajaxify.refresh()})});$(".delete").on("click",function(){var e=$(this).parents("[data-path]");bootbox.confirm("[[admin/manage/uploads:confirm-delete]]",function(a){if(!a){return}socket.emit("admin.uploads.delete",e.attr("data-path"),function(a){if(a){return app.alertError(a.message)}e.remove()})})})};return e});
//# sourceMappingURL=public/src/admin/manage/uploads.js.map