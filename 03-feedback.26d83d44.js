!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire4c75=r),(0,r.register)("dCfNN",function(t,n){var r="Expected a function",i=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return m.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(r);function x(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||m&&r>=a}function h(){var e,n,r,i=g();if(O(i))return S(i);f=setTimeout(h,(e=i-l,n=i-c,r=t-e,m?v(r,a-n):r))}function S(e){return(f=void 0,d&&i)?x(e):(i=o=void 0,u)}function T(){var e,n=g(),r=O(n);if(i=arguments,o=this,l=n,r){if(void 0===f)return c=e=l,f=setTimeout(h,t),s?x(e):u;if(m)return f=setTimeout(h,t),x(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?p(b(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:S(g())},T}(e,t,{leading:i,maxWait:t,trailing:o})}});var i=r("dCfNN");let o={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector('input[name="email"]'),textareaMessage:document.querySelector('textarea[name="message"]')},{email:a,message:u}=o.form.elements,f="feedback-form-state";(function(){try{let e=localStorage.getItem(f);e&&(o.inputEmail.value=JSON.parse(e).email,o.textareaMessage.value=JSON.parse(e).message)}catch(e){console.error("Проблеми з доступом до локальних даних:",e)}})(),o.form.addEventListener("input",(i&&i.__esModule?i.default:i)(function(e){let t={email:o.inputEmail.value,message:o.textareaMessage.value};localStorage.setItem(f,JSON.stringify(t))},500)),o.form.addEventListener("submit",function(e){e.preventDefault(),console.log({email:a.value,message:u.value}),e.currentTarget.reset(),localStorage.removeItem(f)})}();
//# sourceMappingURL=03-feedback.26d83d44.js.map
