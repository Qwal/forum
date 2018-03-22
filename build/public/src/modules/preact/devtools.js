(function(e,n){typeof exports==="object"&&typeof module!=="undefined"?n(require("preact")):typeof define==="function"&&define.amd?define(["preact"],n):n(e.preact)})(this,function(e){"use strict";var t="__preactattr_";function r(e){return{type:e.constructor,key:e.key,ref:null,props:e.props}}function i(e){var n=e.nodeType===Node.ELEMENT_NODE?Array.from(e.childNodes):[];var o=e.nodeType===Node.TEXT_NODE;return{_currentElement:o?e.textContent:{type:e.nodeName.toLowerCase(),props:e[t]},_renderedChildren:n.map(function(e){if(e._component){return c(e._component)}return c(e)}),_stringText:o?e.textContent:null,_inDevTools:false,node:e}}function u(e){if(typeof e.type==="function"){return e.type.displayName||e.type.name}return e.type}function p(e){var n=r(e);var o=e.base;var t={getName:function e(){return u(n)},_currentElement:r(e),props:e.props,state:e.state,forceUpdate:e.forceUpdate&&e.forceUpdate.bind(e),setState:e.setState&&e.setState.bind(e),node:o};t._instance=e;if(e._component){t._renderedComponent=c(e._component)}else{t._renderedComponent=c(o)}return t}var f=typeof Map==="function"&&new Map;function c(e){var n=e instanceof Node?i(e):p(e);if(f.has(e)){var o=f.get(e);Object.assign(o,n);return o}f.set(e,n);return n}function a(e){return"."+Object.keys(e).length}function d(e,n){Array.from(e.childNodes).forEach(function(e){if(e._component){n[a(n)]=c(e._component)}else{d(e,n)}})}function m(){var e={getNodeFromInstance:function e(n){return n.node},getClosestInstanceFromNode:function e(n){while(n&&!n._component){n=n.parentNode}return n?c(n._component):null}};var t={};d(document.body,t);var r={_instancesByReactRootID:t,_renderNewRootComponent:function e(){}};var i={mountComponent:function e(){},performUpdateIfNecessary:function e(){},receiveComponent:function e(){},unmountComponent:function e(){}};var n=function e(n){var o=c(n);if(s(n)){o._rootID=a(t);t[o._rootID]=o;r._renderNewRootComponent(o)}_(o,function(e){e._inDevTools=true;i.mountComponent(e)});i.mountComponent(o)};var o=function e(n){var o=[];_(f.get(n),function(e){o.push(e)});var t=c(n);i.receiveComponent(t);_(t,function(e){if(!e._inDevTools){e._inDevTools=true;i.mountComponent(e)}else{i.receiveComponent(e)}});o.forEach(function(e){if(!document.body.contains(e.node)){f.delete(e.node);i.unmountComponent(e)}})};var u=function e(n){var o=c(n);_(function(e){f.delete(e.node);i.unmountComponent(e)});i.unmountComponent(o);f.delete(n);if(o._rootID){delete t[o._rootID]}};return{componentAdded:n,componentUpdated:o,componentRemoved:u,ComponentTree:e,Mount:r,Reconciler:i}}function s(e){if(e._parentComponent||e.__u){return false}if(e.base.parentElement&&e.base.parentElement[t]){return false}return true}function _(e,n){if(e._renderedComponent){if(!e._renderedComponent._component){n(e._renderedComponent);_(e._renderedComponent,n)}}else if(e._renderedChildren){e._renderedChildren.forEach(function(e){n(e);if(!e._component)_(e,n)})}}function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==="undefined"){return}var n=m();var o=e.options.afterMount;e.options.afterMount=function(e){n.componentAdded(e);if(o)o(e)};var t=e.options.afterUpdate;e.options.afterUpdate=function(e){n.componentUpdated(e);if(t)t(e)};var r=e.options.beforeUnmount;e.options.beforeUnmount=function(e){n.componentRemoved(e);if(r)r(e)};__REACT_DEVTOOLS_GLOBAL_HOOK__.inject(n);return function(){e.options.afterMount=o;e.options.afterUpdate=t;e.options.beforeUnmount=r}}n()});
//# sourceMappingURL=node_modules/preact/devtools.js.map