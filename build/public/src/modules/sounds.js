"use strict";define("sounds",["storage"],function(r){var u={};var i;var a;var o={};u.loadMap=function n(t){socket.emit("modules.sounds.getUserSoundMap",function(n,e){if(n){return app.alertError(n.message)}a=e;if(t){t()}})};function s(n){var e=2;function t(){e-=1;if(e===0&&n){n()}}if(i){e-=1}else{$.getJSON(config.relative_path+"/assets/sounds/fileMap.json",function(n){i=n;t()})}u.loadMap(t)}u.playSound=function n(e){if(!a||!i){return s(t)}function t(){if(!i[e]){return}var n=o[e]||new Audio(config.relative_path+"/assets/sounds/"+i[e]);o[e]=n;n.pause();n.currentTime=0;n.play()}t()};u.play=function n(e,t){function o(){if(!a[e]){return}if(t){var n="sounds.handled:"+t;if(r.getItem(n)){return}r.setItem(n,true);setTimeout(function(){r.removeItem(n)},5e3)}u.playSound(a[e])}if(!a||!i){return s(o)}o()};socket.on("event:sounds.reloadMapping",function(){u.loadMap()});return u});
//# sourceMappingURL=public/src/modules/sounds.js.map