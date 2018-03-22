define("emoji",["require","exports"],function(u,m){"use strict";Object.defineProperty(m,"__esModule",{value:true});var i=window.config.relative_path+"/plugins/nodebb-plugin-emoji";m.base=i;var o=window.config["cache-buster"];m.buster=o;function r(e,r){var n=":"+e.name+":";var t=r?" defer":"";if(e.image){return"<img\n      "+(r?"data-":"")+'src="'+i+"/emoji/"+e.pack+"/"+e.image+"?"+o+'"\n      class="not-responsive emoji emoji-'+e.pack+" emoji--"+e.name+" "+t+'"\n      title="'+n+'"\n      alt="'+e.character+'"\n    />'}return'<span\n    class="emoji-'+e.pack+" emoji--"+e.name+'"\n    title="'+n+'"\n  ><span>'+e.character+"</span></span>"}m.buildEmoji=r;m.strategy={match:/\B:([^\s\n:]+)$/,search:function(e,r){r(m.search(e.toLowerCase().replace(/[_-]/g,"")))},index:1,replace:function(e){return":"+e.name+": "},template:function(e){return r(e)+" "+e.name},cache:true};var e=false;function n(a){if(e){return}e=true;Promise.all([new Promise(function(e,r){u(["fuzzysearch"],e,r)}),new Promise(function(e,r){u(["leven"],e,r)}),new Promise(function(e,r){u(["composer/formatting"],e,r)}),$.getJSON(i+"/emoji/table.json?"+o)]).then(function(e){var i=e[0],o=e[1],r=e[2],n=e[3];m.table=n;var c=Object.keys(m.table).map(function(e){var r=m.table[e];return{name:e,aliases:r.aliases,keywords:r.keywords,character:r.character,image:r.image,pack:r.pack}});function s(e,r){var n=r.length;for(var t=0;t<n;t+=1){if(i(e,r[t])){return r[t]}}return null}function t(a){function t(e,r){var n=r*(1+o(a,e));return e.startsWith(a)?n-2:n}return c.filter(function(e){if(i(a,e.name)){e.score=t(e.name,1);return true}var r=s(a,e.aliases);if(r){e.score=t(r,3);return true}var n=s(a,e.keywords);if(n){e.score=t(n,7);return true}return false}).sort(function(e,r){return e.score-r.score}).sort(function(e,r){var n=+e.name.startsWith(a);var t=+r.name.startsWith(a);return t-n}).slice(0,10)}m.search=t;r.addButtonDispatch("emoji-add-emoji",function(n){new Promise(function(e,r){u(["emoji-dialog"],e,r)}).then(function(e){var r=e.openForInsert;r(n)})});if(a){setTimeout(a,0)}}).catch(function(e){var r=Error("[[emoji:meta-load-failed]]");console.error(r);window.app.alertError(r);throw e})}m.init=n});
//# sourceMappingURL=node_modules/nodebb-plugin-emoji/build/public/lib/emoji.js.map