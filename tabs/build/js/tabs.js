!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Tabs",e):t.Tabs=e()}(this,function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var a=[],n=!0,r=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!e||a.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}return a}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return function(){function n(e){t(this,n);this.settings=Object.assign({},{activeClass:"_is-active",hiddenClass:"_is-hidden"},e),this.init()}return e(n,[{key:"init",value:function(){var t=this;document.querySelectorAll("[data-tabs]").forEach(function(e,a){var n=e.querySelectorAll("[data-tab]"),r=e.dataset.tab?document.querySelector("[data-tabs-content="+e.dataset.tab+"]"):document.querySelectorAll("[data-tabs-content]")[a],i=new Map;n.forEach(function(t,e){var a=t.dataset.tab?r.querySelector("[data-tab="+t.dataset.tab+"]"):r.querySelectorAll("[data-tab]")[e];i.set(t,a)}),e.addEventListener("click",function(a){var n=a.target;if(n!==e){for(;!n.hasAttribute("data-tab");)n=n.parentNode;t.switch(n,i)}}),e.querySelector("[data-tab]."+t.settings.activeClass)||t.switch(n[0],i)})}},{key:"switch",value:function(t,e){var n=!0,r=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value,l=a(c,2),u=l[0],d=l[1];u.classList.remove(this.settings.activeClass),d.classList.add(this.settings.hiddenClass)}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}t.classList.add(this.settings.activeClass),e.get(t).classList.remove(this.settings.hiddenClass)}}]),n}()});
//# sourceMappingURL=tabs.js.map
