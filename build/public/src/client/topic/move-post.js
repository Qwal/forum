"use strict";define("forum/topic/move-post",[],function(){var t={};t.openMovePostModal=function(a){app.parseAndTranslate("partials/move_post_modal",{},function(t){var o=bootbox.dialog({title:"[[topic:move_post]]",message:t,show:true,buttons:{submit:{label:"[[topic:confirm_move]]",className:"btn-primary submit-btn",callback:function(){var t=o.find("#topicId");if(!t.val()){return}i(a.parents("[data-pid]"),a.parents("[data-pid]").attr("data-pid"),t.val(),function(){t.val("")})}}}});o.find(".submit-btn").attr("disabled",true);o.find("#topicId").on("keyup change",function(){o.find(".submit-btn").attr("disabled",!o.find("#topicId").val())})})};function i(o,t,a,i){socket.emit("posts.movePost",{pid:t,tid:a},function(t){if(t){app.alertError(t.message);return i()}o.fadeOut(500,function(){o.remove()});app.alertSuccess("[[topic:post_moved]]");i()})}return t});
//# sourceMappingURL=public/src/client/topic/move-post.js.map