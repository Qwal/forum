"use strict";define("composer/controls",["composer/preview"],function(i){var e={};e.insertIntoTextarea=function(e,t){var n=$(e);var r=n.val();var c=n.parents('[component="composer"]');n.val(r.slice(0,e.selectionStart)+t+r.slice(e.selectionStart));i.render(c)};e.wrapSelectionInTextareaWith=function(e,t,n){if(n===undefined){n=t}var r=$(e);var c=r.val();var i=/^(\s*)([\s\S]*?)(\s*)$/.exec(c.slice(e.selectionStart,e.selectionEnd));if(!i[2]){i=[null,"",c.slice(e.selectionStart,e.selectionEnd),""]}r.val(c.slice(0,e.selectionStart)+i[1]+t+i[2]+n+i[3]+c.slice(e.selectionEnd));return[i[1].length,i[3].length]};e.updateTextareaSelection=function(e,t,n){e.setSelectionRange(t,n);$(e).focus()};return e});
//# sourceMappingURL=node_modules/nodebb-plugin-composer-default/static/lib/composer/controls.js.map