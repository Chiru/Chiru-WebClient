
/** Src: ../src/libs/jquery-1.8.3.min.js **/
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);

/** Src: ../src/libs/three.min.js **/
// three.js - http://github.com/mrdoob/three.js
'use strict';var THREE=THREE||{REVISION:"54dev"};self.console=self.console||{info:function(){},log:function(){},debug:function(){},warn:function(){},error:function(){}};self.Int32Array=self.Int32Array||Array;self.Float32Array=self.Float32Array||Array;String.prototype.startsWith=String.prototype.startsWith||function(a){return this.slice(0,a.length)===a};String.prototype.endsWith=String.prototype.endsWith||function(a){var a=String(a),b=this.lastIndexOf(a);return(-1<b&&b)===this.length-a.length};
String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};
(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];void 0===window.requestAnimationFrame&&(window.requestAnimationFrame=function(b){var c=Date.now(),f=Math.max(0,16-(c-a)),g=window.setTimeout(function(){b(c+f)},f);a=c+f;return g});window.cancelAnimationFrame=window.cancelAnimationFrame||
function(a){window.clearTimeout(a)}})();THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;
THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};
THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;
THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};THREE.Clock.prototype.start=function(){this.oldTime=this.startTime=Date.now();this.running=!0};THREE.Clock.prototype.stop=function(){this.getElapsedTime();this.running=!1};THREE.Clock.prototype.getElapsedTime=function(){this.getDelta();return this.elapsedTime};
THREE.Clock.prototype.getDelta=function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=Date.now(),a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a};THREE.Color=function(a){void 0!==a&&this.set(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);
this.b=Math.sqrt(this.b);return this},set:function(a){switch(typeof a){case "number":this.setHex(a);break;case "string":this.setStyle(a)}},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSV:function(a,b,c){var d,e,f;0===c?this.r=this.g=this.b=0:(d=Math.floor(6*a),e=6*a-d,a=c*(1-b),f=c*(1-b*e),b=c*(1-b*(1-e)),0===d?(this.r=c,this.g=b,this.b=a):1===d?(this.r=f,this.g=c,this.b=a):2===d?(this.r=a,this.g=c,this.b=b):3===d?(this.r=a,this.g=f,this.b=c):4===d?(this.r=b,this.g=a,this.b=
c):5===d&&(this.r=c,this.g=a,this.b=f));return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},setStyle:function(a){if(/^rgb\((\d+),(\d+),(\d+)\)$/i.test(a))return a=/^rgb\((\d+),(\d+),(\d+)\)$/i.exec(a),
this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.exec(a),this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=
/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},getHSV:function(a){var b=this.r,c=this.g,d=this.b,e=Math.max(Math.max(b,c),d),f=Math.min(Math.min(b,c),d);if(f===e)f=b=0;else{var g=e-f,f=g/e,b=(b===e?(c-d)/g:c===e?2+(d-b)/g:4+(b-c)/g)/6;0>b&&(b+=1);1<b&&(b-=1)}void 0===a&&(a={h:0,s:0,v:0});a.h=b;a.s=f;a.v=e;return a},lerpSelf:function(a,b){this.r+=(a.r-this.r)*b;this.g+=
(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},copy:function(a){this.x=a.x;this.y=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},subSelf:function(a){this.x-=a.x;this.y-=
a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a):this.set(0,0);return this},minSelf:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},maxSelf:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clampSelf:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*
a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===
this.x&&a.y===this.y},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},
sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},multiply:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},multiplySelf:function(a){this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},divideSelf:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a):
this.z=this.y=this.x=0;return this},minSelf:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},maxSelf:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clampSelf:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*
a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){this.x=a.y*b.z-
a.z*b.y;this.y=a.z*b.x-a.x*b.z;this.z=a.x*b.y-a.y*b.x;return this},crossSelf:function(a){var b=this.x,c=this.y,d=this.z;this.x=c*a.z-d*a.y;this.y=d*a.x-b*a.z;this.z=b*a.y-c*a.x;return this},angleTo:function(a){return Math.acos(this.dot(a)/this.length()/a.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y,a=this.z-a.z;return b*b+c*c+a*a},getPositionFromMatrix:function(a){this.x=a.elements[12];this.y=a.elements[13];
this.z=a.elements[14];return this},setEulerFromRotationMatrix:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],i=d[5],j=d[9],m=d[2],p=d[6],d=d[10];void 0===b||"XYZ"===b?(this.y=Math.asin(c(g)),0.99999>Math.abs(g)?(this.x=Math.atan2(-j,d),this.z=Math.atan2(-f,e)):(this.x=Math.atan2(p,i),this.z=0)):"YXZ"===b?(this.x=Math.asin(-c(j)),0.99999>Math.abs(j)?(this.y=Math.atan2(g,d),this.z=Math.atan2(h,i)):(this.y=Math.atan2(-m,e),this.z=0)):"ZXY"===
b?(this.x=Math.asin(c(p)),0.99999>Math.abs(p)?(this.y=Math.atan2(-m,d),this.z=Math.atan2(-f,i)):(this.y=0,this.z=Math.atan2(h,e))):"ZYX"===b?(this.y=Math.asin(-c(m)),0.99999>Math.abs(m)?(this.x=Math.atan2(p,d),this.z=Math.atan2(h,e)):(this.x=0,this.z=Math.atan2(-f,i))):"YZX"===b?(this.z=Math.asin(c(h)),0.99999>Math.abs(h)?(this.x=Math.atan2(-j,i),this.y=Math.atan2(-m,e)):(this.x=0,this.y=Math.atan2(g,d))):"XZY"===b&&(this.z=Math.asin(-c(f)),0.99999>Math.abs(f)?(this.x=Math.atan2(p,i),this.y=Math.atan2(g,
e)):(this.x=Math.atan2(-j,d),this.y=0));return this},setEulerFromQuaternion:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.x*a.x,e=a.y*a.y,f=a.z*a.z,g=a.w*a.w;void 0===b||"XYZ"===b?(this.x=Math.atan2(2*(a.x*a.w-a.y*a.z),g-d-e+f),this.y=Math.asin(c(2*(a.x*a.z+a.y*a.w))),this.z=Math.atan2(2*(a.z*a.w-a.x*a.y),g+d-e-f)):"YXZ"===b?(this.x=Math.asin(c(2*(a.x*a.w-a.y*a.z))),this.y=Math.atan2(2*(a.x*a.z+a.y*a.w),g-d-e+f),this.z=Math.atan2(2*(a.x*a.y+a.z*a.w),g-d+e-f)):"ZXY"===b?(this.x=
Math.asin(c(2*(a.x*a.w+a.y*a.z))),this.y=Math.atan2(2*(a.y*a.w-a.z*a.x),g-d-e+f),this.z=Math.atan2(2*(a.z*a.w-a.x*a.y),g-d+e-f)):"ZYX"===b?(this.x=Math.atan2(2*(a.x*a.w+a.z*a.y),g-d-e+f),this.y=Math.asin(c(2*(a.y*a.w-a.x*a.z))),this.z=Math.atan2(2*(a.x*a.y+a.z*a.w),g+d-e-f)):"YZX"===b?(this.x=Math.atan2(2*(a.x*a.w-a.z*a.y),g-d+e-f),this.y=Math.atan2(2*(a.y*a.w-a.x*a.z),g+d-e-f),this.z=Math.asin(c(2*(a.x*a.y+a.z*a.w)))):"XZY"===b&&(this.x=Math.atan2(2*(a.x*a.w+a.y*a.z),g-d+e-f),this.y=Math.atan2(2*
(a.x*a.z+a.y*a.w),g+d-e-f),this.z=Math.asin(c(2*(a.z*a.w-a.x*a.y))));return this},getScaleFromMatrix:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length(),a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+
b.z;this.w=a.w+b.w;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a,this.w/=a):(this.z=this.y=this.x=0,this.w=1);return this},minSelf:function(a){this.x>
a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},maxSelf:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clampSelf:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},negate:function(){return this.multiplyScalar(-1)},
dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.dot(this)},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*
b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d,a=a.elements,e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],i=a[9];c=a[2];b=a[6];var j=a[10];if(0.01>Math.abs(d-
g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(i-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(i+b)&&0.1>Math.abs(e+h+j-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;j=(j+1)/2;d=(d+g)/4;f=(f+c)/4;i=(i+b)/4;e>h&&e>j?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>j?0.01>h?(b=0.707106781,c=0,d=0.707106781):(c=Math.sqrt(h),b=d/c,d=i/c):0.01>j?(c=b=0.707106781,d=0):(d=Math.sqrt(j),b=f/d,c=i/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-i)*(b-i)+(f-c)*(f-c)+(g-d)*(g-d));
0.001>Math.abs(a)&&(a=1);this.x=(b-i)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+j-1)/2);return this}};THREE.Box2=function(a,b){void 0===a&&void 0===b?(this.min=new THREE.Vector2,this.max=new THREE.Vector2,this.makeEmpty()):(this.min=a.clone(),this.max=void 0===b?(new THREE.Vector2).copy(this.min):b.clone())};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var c=1,d=a.length;c<d;c++)b=a[c],b.x<this.min.x?this.min.x=b.x:b.x>this.max.x&&(this.max.x=b.x),b.y<this.min.y?this.min.y=b.y:b.y>this.max.y&&(this.max.y=b.y)}else this.makeEmpty();return this},setFromCenterAndSize:function(a,b){var c=THREE.Box2.__v1.copy(b).multiplyScalar(0.5);this.min.copy(a).subSelf(c);
this.max.copy(a).addSelf(c);return this},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(){return(new THREE.Vector2).add(this.min,this.max).multiplyScalar(0.5)},size:function(){return(new THREE.Vector2).sub(this.max,this.min)},expandByPoint:function(a){this.min.minSelf(a);this.max.maxSelf(a);return this},
expandByVector:function(a){this.min.subSelf(a);this.max.addSelf(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return this.min.x<=a.x&&a.x<=this.max.x&&this.min.y<=a.y&&a.y<=this.max.y?!0:!1},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a){return new THREE.Vector2((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/
(this.max.y-this.min.y))},isIntersection:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a){return(new THREE.Vector2).copy(a).clampSelf(this.min,this.max)},distanceToPoint:function(a){return THREE.Box2.__v1.copy(a).clampSelf(this.min,this.max).subSelf(a).length()},intersect:function(a){this.min.maxSelf(a.min);this.max.minSelf(a.max);return this},union:function(a){this.min.minSelf(a.min);this.max.maxSelf(a.max);return this},
translate:function(a){this.min.addSelf(a);this.max.addSelf(a);return this},scale:function(a){a=this.size().multiplyScalar(0.5*(a-1));this.expandByVector(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box2.__v1=new THREE.Vector2;THREE.Box3=function(a,b){void 0===a&&void 0===b?(this.min=new THREE.Vector3,this.max=new THREE.Vector3,this.makeEmpty()):(this.min=a.clone(),this.max=void 0===b?(new THREE.Vector3).copy(this.min):b.clone())};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var c=1,d=a.length;c<d;c++)b=a[c],b.x<this.min.x?this.min.x=b.x:b.x>this.max.x&&(this.max.x=b.x),b.y<this.min.y?this.min.y=b.y:b.y>this.max.y&&(this.max.y=b.y),b.z<this.min.z?this.min.z=b.z:b.z>this.max.z&&(this.max.z=b.z)}else this.makeEmpty();return this},setFromCenterAndSize:function(a,b){var c=THREE.Box3.__v1.copy(b).multiplyScalar(0.5);
this.min.copy(a).subSelf(c);this.max.copy(a).addSelf(c);return this},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(){return(new THREE.Vector3).add(this.min,this.max).multiplyScalar(0.5)},size:function(){return(new THREE.Vector3).sub(this.max,this.min)},
expandByPoint:function(a){this.min.minSelf(a);this.max.maxSelf(a);return this},expandByVector:function(a){this.min.subSelf(a);this.max.addSelf(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return this.min.x<=a.x&&a.x<=this.max.x&&this.min.y<=a.y&&a.y<=this.max.y&&this.min.z<=a.z&&a.z<=this.max.z?!0:!1},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=
a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a){return new THREE.Vector3((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersection:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a){return(new THREE.Vector3).copy(a).clampSelf(this.min,this.max)},distanceToPoint:function(a){return THREE.Box3.__v1.copy(a).clampSelf(this.min,
this.max).subSelf(a).length()},intersect:function(a){this.min.maxSelf(a.min);this.max.minSelf(a.max);return this},union:function(a){this.min.minSelf(a.min);this.max.maxSelf(a.max);return this},translate:function(a){this.min.addSelf(a);this.max.addSelf(a);return this},scale:function(a){a=this.size().multiplyScalar(0.5*(a-1));this.expandByVector(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};
THREE.Box3.__v1=new THREE.Vector3;THREE.Matrix3=function(){this.elements=new Float32Array(9)};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,multiplyVector3:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z;a.x=b[0]*c+b[3]*d+b[6]*e;a.y=b[1]*c+b[4]*d+b[7]*e;a.z=b[2]*c+b[5]*d+b[8]*e;return a},multiplyVector3Array:function(a){for(var b=THREE.Matrix3.__v1,c=0,d=a.length;c<d;c+=3)b.x=a[c],b.y=a[c+1],b.z=a[c+2],this.multiplyVector3(b),a[c]=b.x,a[c+1]=b.y,a[c+2]=b.z;return a},getInverse:function(a){var b=a.elements,a=b[10]*b[5]-b[6]*b[9],c=-b[10]*b[1]+b[2]*b[9],d=b[6]*b[1]-b[2]*b[5],e=-b[10]*
b[4]+b[6]*b[8],f=b[10]*b[0]-b[2]*b[8],g=-b[6]*b[0]+b[2]*b[4],h=b[9]*b[4]-b[5]*b[8],i=-b[9]*b[0]+b[1]*b[8],j=b[5]*b[0]-b[1]*b[4],b=b[0]*a+b[1]*e+b[2]*h;0===b&&console.warn("Matrix3.getInverse(): determinant == 0");var b=1/b,m=this.elements;m[0]=b*a;m[1]=b*c;m[2]=b*d;m[3]=b*e;m[4]=b*f;m[5]=b*g;m[6]=b*h;m[7]=b*i;m[8]=b*j;return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},transposeIntoArray:function(a){var b=this.elements;
a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this}};THREE.Matrix3.__v1=new THREE.Vector3;THREE.Matrix4=function(a,b,c,d,e,f,g,h,i,j,m,p,n,s,r,l){this.elements=new Float32Array(16);this.set(void 0!==a?a:1,b||0,c||0,d||0,e||0,void 0!==f?f:1,g||0,h||0,i||0,j||0,void 0!==m?m:1,p||0,n||0,s||0,r||0,void 0!==l?l:1)};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,i,j,m,p,n,s,r,l){var t=this.elements;t[0]=a;t[4]=b;t[8]=c;t[12]=d;t[1]=e;t[5]=f;t[9]=g;t[13]=h;t[2]=i;t[6]=j;t[10]=m;t[14]=p;t[3]=n;t[7]=s;t[11]=r;t[15]=l;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]);return this},lookAt:function(a,b,c){var d=this.elements,
e=THREE.Matrix4.__v1,f=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;g.sub(a,b).normalize();0===g.length()&&(g.z=1);e.cross(c,g).normalize();0===e.length()&&(g.x+=1E-4,e.cross(c,g).normalize());f.cross(g,e);d[0]=e.x;d[4]=f.x;d[8]=g.x;d[1]=e.y;d[5]=f.y;d[9]=g.y;d[2]=e.z;d[6]=f.z;d[10]=g.z;return this},multiply:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],i=c[12],j=c[1],m=c[5],p=c[9],n=c[13],s=c[2],r=c[6],l=c[10],t=c[14],u=c[3],E=c[7],A=c[11],c=c[15],q=d[0],F=d[4],z=d[8],
x=d[12],v=d[1],I=d[5],C=d[9],G=d[13],M=d[2],B=d[6],J=d[10],D=d[14],L=d[3],K=d[7],U=d[11],d=d[15];e[0]=f*q+g*v+h*M+i*L;e[4]=f*F+g*I+h*B+i*K;e[8]=f*z+g*C+h*J+i*U;e[12]=f*x+g*G+h*D+i*d;e[1]=j*q+m*v+p*M+n*L;e[5]=j*F+m*I+p*B+n*K;e[9]=j*z+m*C+p*J+n*U;e[13]=j*x+m*G+p*D+n*d;e[2]=s*q+r*v+l*M+t*L;e[6]=s*F+r*I+l*B+t*K;e[10]=s*z+r*C+l*J+t*U;e[14]=s*x+r*G+l*D+t*d;e[3]=u*q+E*v+A*M+c*L;e[7]=u*F+E*I+A*B+c*K;e[11]=u*z+E*C+A*J+c*U;e[15]=u*x+E*G+A*D+c*d;return this},multiplySelf:function(a){return this.multiply(this,
a)},multiplyToArray:function(a,b,c){var d=this.elements;this.multiply(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){var b=this.elements,
c=a.x,d=a.y,e=a.z,f=1/(b[3]*c+b[7]*d+b[11]*e+b[15]);a.x=(b[0]*c+b[4]*d+b[8]*e+b[12])*f;a.y=(b[1]*c+b[5]*d+b[9]*e+b[13])*f;a.z=(b[2]*c+b[6]*d+b[10]*e+b[14])*f;return a},multiplyVector4:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w;a.x=b[0]*c+b[4]*d+b[8]*e+b[12]*f;a.y=b[1]*c+b[5]*d+b[9]*e+b[13]*f;a.z=b[2]*c+b[6]*d+b[10]*e+b[14]*f;a.w=b[3]*c+b[7]*d+b[11]*e+b[15]*f;return a},multiplyVector3Array:function(a){for(var b=THREE.Matrix4.__v1,c=0,d=a.length;c<d;c+=3)b.x=a[c],b.y=a[c+1],b.z=a[c+2],
this.multiplyVector3(b),a[c]=b.x,a[c+1]=b.y,a[c+2]=b.z;return a},rotateAxis:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z;a.x=c*b[0]+d*b[4]+e*b[8];a.y=c*b[1]+d*b[5]+e*b[9];a.z=c*b[2]+d*b[6]+e*b[10];a.normalize();return a},crossVector:function(a){var b=this.elements,c=new THREE.Vector4;c.x=b[0]*a.x+b[4]*a.y+b[8]*a.z+b[12]*a.w;c.y=b[1]*a.x+b[5]*a.y+b[9]*a.z+b[13]*a.w;c.z=b[2]*a.x+b[6]*a.y+b[10]*a.z+b[14]*a.w;c.w=a.w?b[3]*a.x+b[7]*a.y+b[11]*a.z+b[15]*a.w:1;return c},determinant:function(){var a=
this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],j=a[2],m=a[6],p=a[10],n=a[14],s=a[3],r=a[7],l=a[11],a=a[15];return e*h*m*s-d*i*m*s-e*g*p*s+c*i*p*s+d*g*n*s-c*h*n*s-e*h*j*r+d*i*j*r+e*f*p*r-b*i*p*r-d*f*n*r+b*h*n*r+e*g*j*l-c*i*j*l-e*f*m*l+b*i*m*l+c*f*n*l-b*g*n*l-d*g*j*a+c*h*j*a+d*f*m*a-b*h*m*a-c*f*p*a+b*g*p*a},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=
a[11];a[11]=a[14];a[14]=b;return this},flattenToArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+
14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[12],a[13],a[14])},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getColumnX:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[0],a[1],a[2])},getColumnY:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[4],a[5],a[6])},getColumnZ:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[8],a[9],a[10])},getInverse:function(a){var b=
this.elements,c=a.elements,d=c[0],e=c[4],f=c[8],g=c[12],h=c[1],i=c[5],j=c[9],m=c[13],p=c[2],n=c[6],s=c[10],r=c[14],l=c[3],t=c[7],u=c[11],c=c[15];b[0]=j*r*t-m*s*t+m*n*u-i*r*u-j*n*c+i*s*c;b[4]=g*s*t-f*r*t-g*n*u+e*r*u+f*n*c-e*s*c;b[8]=f*m*t-g*j*t+g*i*u-e*m*u-f*i*c+e*j*c;b[12]=g*j*n-f*m*n-g*i*s+e*m*s+f*i*r-e*j*r;b[1]=m*s*l-j*r*l-m*p*u+h*r*u+j*p*c-h*s*c;b[5]=f*r*l-g*s*l+g*p*u-d*r*u-f*p*c+d*s*c;b[9]=g*j*l-f*m*l-g*h*u+d*m*u+f*h*c-d*j*c;b[13]=f*m*p-g*j*p+g*h*s-d*m*s-f*h*r+d*j*r;b[2]=i*r*l-m*n*l+m*p*t-h*r*
t-i*p*c+h*n*c;b[6]=g*n*l-e*r*l-g*p*t+d*r*t+e*p*c-d*n*c;b[10]=e*m*l-g*i*l+g*h*t-d*m*t-e*h*c+d*i*c;b[14]=g*i*p-e*m*p-g*h*n+d*m*n+e*h*r-d*i*r;b[3]=j*n*l-i*s*l-j*p*t+h*s*t+i*p*u-h*n*u;b[7]=e*s*l-f*n*l+f*p*t-d*s*t-e*p*u+d*n*u;b[11]=f*i*l-e*j*l-f*h*t+d*j*t+e*h*u-d*i*u;b[15]=e*j*p-f*i*p+f*h*n-d*j*n-e*h*s+d*i*s;this.multiplyScalar(1/a.determinant());return this},setRotationFromEuler:function(a,b){var c=this.elements,d=a.x,e=a.y,f=a.z,g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e),i=Math.cos(f),f=
Math.sin(f);if(void 0===b||"XYZ"===b){var j=g*i,m=g*f,p=d*i,n=d*f;c[0]=h*i;c[4]=-h*f;c[8]=e;c[1]=m+p*e;c[5]=j-n*e;c[9]=-d*h;c[2]=n-j*e;c[6]=p+m*e;c[10]=g*h}else"YXZ"===b?(j=h*i,m=h*f,p=e*i,n=e*f,c[0]=j+n*d,c[4]=p*d-m,c[8]=g*e,c[1]=g*f,c[5]=g*i,c[9]=-d,c[2]=m*d-p,c[6]=n+j*d,c[10]=g*h):"ZXY"===b?(j=h*i,m=h*f,p=e*i,n=e*f,c[0]=j-n*d,c[4]=-g*f,c[8]=p+m*d,c[1]=m+p*d,c[5]=g*i,c[9]=n-j*d,c[2]=-g*e,c[6]=d,c[10]=g*h):"ZYX"===b?(j=g*i,m=g*f,p=d*i,n=d*f,c[0]=h*i,c[4]=p*e-m,c[8]=j*e+n,c[1]=h*f,c[5]=n*e+j,c[9]=
m*e-p,c[2]=-e,c[6]=d*h,c[10]=g*h):"YZX"===b?(j=g*h,m=g*e,p=d*h,n=d*e,c[0]=h*i,c[4]=n-j*f,c[8]=p*f+m,c[1]=f,c[5]=g*i,c[9]=-d*i,c[2]=-e*i,c[6]=m*f+p,c[10]=j-n*f):"XZY"===b&&(j=g*h,m=g*e,p=d*h,n=d*e,c[0]=h*i,c[4]=-f,c[8]=e*i,c[1]=j*f+n,c[5]=g*i,c[9]=m*f-p,c[2]=p*f-m,c[6]=d*i,c[10]=n*f+j);return this},setRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,i=e+e,a=c*g,j=c*h,c=c*i,m=d*h,d=d*i,e=e*i,g=f*g,h=f*h,f=f*i;b[0]=1-(m+e);b[4]=j-f;b[8]=c+h;b[1]=j+f;b[5]=1-(a+
e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+m);return this},compose:function(a,b,c){var d=this.elements,e=THREE.Matrix4.__m1,f=THREE.Matrix4.__m2;e.identity();e.setRotationFromQuaternion(b);f.makeScale(c.x,c.y,c.z);this.multiply(e,f);d[12]=a.x;d[13]=a.y;d[14]=a.z;return this},decompose:function(a,b,c){var d=this.elements,e=THREE.Matrix4.__v1,f=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;e.set(d[0],d[1],d[2]);f.set(d[4],d[5],d[6]);g.set(d[8],d[9],d[10]);a=a instanceof THREE.Vector3?a:new THREE.Vector3;b=
b instanceof THREE.Quaternion?b:new THREE.Quaternion;c=c instanceof THREE.Vector3?c:new THREE.Vector3;c.x=e.length();c.y=f.length();c.z=g.length();a.x=d[12];a.y=d[13];a.z=d[14];d=THREE.Matrix4.__m1;d.copy(this);d.elements[0]/=c.x;d.elements[1]/=c.x;d.elements[2]/=c.x;d.elements[4]/=c.y;d.elements[5]/=c.y;d.elements[6]/=c.y;d.elements[8]/=c.z;d.elements[9]/=c.z;d.elements[10]/=c.z;b.setFromRotationMatrix(d);return[a,b,c]},extractPosition:function(a){var b=this.elements,a=a.elements;b[12]=a[12];b[13]=
a[13];b[14]=a[14];return this},extractRotation:function(a){var b=this.elements,a=a.elements,c=THREE.Matrix4.__v1,d=1/c.set(a[0],a[1],a[2]).length(),e=1/c.set(a[4],a[5],a[6]).length(),c=1/c.set(a[8],a[9],a[10]).length();b[0]=a[0]*d;b[1]=a[1]*d;b[2]=a[2]*d;b[4]=a[4]*e;b[5]=a[5]*e;b[6]=a[6]*e;b[8]=a[8]*c;b[9]=a[9]*c;b[10]=a[10]*c;return this},translate:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[12]=b[0]*c+b[4]*d+b[8]*a+b[12];b[13]=b[1]*c+b[5]*d+b[9]*a+b[13];b[14]=b[2]*c+b[6]*d+b[10]*a+b[14];
b[15]=b[3]*c+b[7]*d+b[11]*a+b[15];return this},rotateX:function(a){var b=this.elements,c=b[4],d=b[5],e=b[6],f=b[7],g=b[8],h=b[9],i=b[10],j=b[11],m=Math.cos(a),a=Math.sin(a);b[4]=m*c+a*g;b[5]=m*d+a*h;b[6]=m*e+a*i;b[7]=m*f+a*j;b[8]=m*g-a*c;b[9]=m*h-a*d;b[10]=m*i-a*e;b[11]=m*j-a*f;return this},rotateY:function(a){var b=this.elements,c=b[0],d=b[1],e=b[2],f=b[3],g=b[8],h=b[9],i=b[10],j=b[11],m=Math.cos(a),a=Math.sin(a);b[0]=m*c-a*g;b[1]=m*d-a*h;b[2]=m*e-a*i;b[3]=m*f-a*j;b[8]=m*g+a*c;b[9]=m*h+a*d;b[10]=
m*i+a*e;b[11]=m*j+a*f;return this},rotateZ:function(a){var b=this.elements,c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=b[6],j=b[7],m=Math.cos(a),a=Math.sin(a);b[0]=m*c+a*g;b[1]=m*d+a*h;b[2]=m*e+a*i;b[3]=m*f+a*j;b[4]=m*g-a*c;b[5]=m*h-a*d;b[6]=m*i-a*e;b[7]=m*j-a*f;return this},rotateByAxis:function(a,b){var c=this.elements;if(1===a.x&&0===a.y&&0===a.z)return this.rotateX(b);if(0===a.x&&1===a.y&&0===a.z)return this.rotateY(b);if(0===a.x&&0===a.y&&1===a.z)return this.rotateZ(b);var d=a.x,e=a.y,f=a.z,
g=Math.sqrt(d*d+e*e+f*f),d=d/g,e=e/g,f=f/g,g=d*d,h=e*e,i=f*f,j=Math.cos(b),m=Math.sin(b),p=1-j,n=d*e*p,s=d*f*p,p=e*f*p,d=d*m,r=e*m,m=f*m,f=g+(1-g)*j,g=n+m,e=s-r,n=n-m,h=h+(1-h)*j,m=p+d,s=s+r,p=p-d,i=i+(1-i)*j,j=c[0],d=c[1],r=c[2],l=c[3],t=c[4],u=c[5],E=c[6],A=c[7],q=c[8],F=c[9],z=c[10],x=c[11];c[0]=f*j+g*t+e*q;c[1]=f*d+g*u+e*F;c[2]=f*r+g*E+e*z;c[3]=f*l+g*A+e*x;c[4]=n*j+h*t+m*q;c[5]=n*d+h*u+m*F;c[6]=n*r+h*E+m*z;c[7]=n*l+h*A+m*x;c[8]=s*j+p*t+i*q;c[9]=s*d+p*u+i*F;c[10]=s*r+p*E+i*z;c[11]=s*l+p*A+i*x;
return this},scale:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);
this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,i=e*f,j=e*g;this.set(i*f+c,i*g-d*h,i*h+d*g,0,i*g+d*h,j*g+c,j*h-d*f,0,i*h-d*g,j*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,
b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){var a=c*Math.tan(a*Math.PI/360),e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,i=c-d,j=f-e;g[0]=2/
h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/i;g[9]=0;g[13]=-((c+d)/i);g[2]=0;g[6]=0;g[10]=-2/j;g[14]=-((f+e)/j);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},clone:function(){var a=this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Matrix4.__v1=new THREE.Vector3;THREE.Matrix4.__v2=new THREE.Vector3;THREE.Matrix4.__v3=new THREE.Vector3;THREE.Matrix4.__m1=new THREE.Matrix4;THREE.Matrix4.__m2=new THREE.Matrix4;THREE.Ray=function(a,b){this.origin=void 0!==a?a.clone():new THREE.Vector3;this.direction=void 0!==b?b.clone():new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){void 0===b?b=this.direction.clone():b.copy(this.direction);return b.multiplyScalar(a).addSelf(this.origin)},recastSelf:function(a){this.origin=this.at(a);return this},closestPointToPoint:function(a){var a=a.clone().subSelf(this.origin),b=a.dot(this.direction);return a.copy(this.direction).multiplyScalar(b).addSelf(this.origin)},
distanceToPoint:function(a){var b=THREE.Ray.__v1.sub(a,this.origin).dot(this.direction);THREE.Ray.__v1.copy(this.direction).multiplyScalar(b).addSelf(this.origin);return THREE.Ray.__v1.distanceTo(a)},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},isIntersectionPlane:function(a){return 0!=a.normal.dot(this.direction)||0==a.distanceToPoint(this.origin)?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b){if(0==a.distanceToPoint(this.origin))return 0}else return-(this.origin.dot(a.normal)+
a.constant)/b},intersectPlane:function(a){a=this.distanceToPlane(a);return void 0===a?void 0:this.at(a)},transformSelf:function(a){this.direction=a.multiplyVector3(this.direction.addSelf(this.origin));this.origin=a.multiplyVector3(this.origin);this.direction.subSelf(this.origin);return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Ray.__v1=new THREE.Vector3;THREE.Ray.__v2=new THREE.Vector3;THREE.Frustum=function(){this.planes=[new THREE.Plane,new THREE.Plane,new THREE.Plane,new THREE.Plane,new THREE.Plane,new THREE.Plane]};
THREE.Frustum.prototype.setFromMatrix=function(a){var b=this.planes,c=a.elements,a=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],i=c[6],j=c[7],m=c[8],p=c[9],n=c[10],s=c[11],r=c[12],l=c[13],t=c[14],c=c[15];b[0].setComponents(f-a,j-g,s-m,c-r);b[1].setComponents(f+a,j+g,s+m,c+r);b[2].setComponents(f+d,j+h,s+p,c+l);b[3].setComponents(f-d,j-h,s-p,c-l);b[4].setComponents(f-e,j-i,s-n,c-t);b[5].setComponents(f+e,j+i,s+n,c+t);for(a=0;6>a;a++)b[a].normalize()};
THREE.Frustum.prototype.contains=function(a){for(var b=this.planes,c=a.matrixWorld,d=c.getPosition(),a=-a.geometry.boundingSphere.radius*c.getMaxScaleOnAxis(),e=c=0;6>e;e++)if(c=b[e].distanceToPoint(d),c<=a)return!1;return!0};THREE.Frustum.__v1=new THREE.Vector3;THREE.Plane=function(a,b){void 0===a&&void 0===b?(this.normal=new THREE.Vector3,this.constant=0):(this.normal=a.clone(),this.constant=b||0)};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(a);return this},setFromCoplanarPoints:function(a,b,c){b=THREE.Plane.__v1.sub(b,a).cross(THREE.Plane.__v2.sub(c,a));this.setFromNormalAndCoplanarPoint(b,a);return this},copy:function(a){this.normal.copy(a.normal);this.constant=
a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a){return this.orthoPoint(a).subSelf(a).negate()},orthoPoint:function(a){a=this.distanceToPoint(a);return(new THREE.Vector3).copy(this.normal).multiplyScalar(a)},intersectsLine:function(a,b){var c=this.distanceToPoint(a),
d=this.distanceToPoint(b);return 0>c&&0<d||0>d&&0<c},coplanarPoint:function(){return(new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},translate:function(a){this.constant=-a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};THREE.Plane.__v1=new THREE.Vector3;THREE.Plane.__v2=new THREE.Vector3;THREE.Rectangle=function(){function a(){f=d-b;g=e-c}var b=0,c=0,d=0,e=0,f=0,g=0,h=!0;this.getX=function(){return b};this.getY=function(){return c};this.getWidth=function(){return f};this.getHeight=function(){return g};this.getLeft=function(){return b};this.getTop=function(){return c};this.getRight=function(){return d};this.getBottom=function(){return e};this.set=function(f,g,m,p){h=!1;b=f;c=g;d=m;e=p;a()};this.addPoint=function(f,g){!0===h?(h=!1,b=f,c=g,d=f,e=g):(b=b<f?b:f,c=c<g?c:g,d=d>f?d:f,e=e>
g?e:g);a()};this.add3Points=function(f,g,m,p,n,s){!0===h?(h=!1,b=f<m?f<n?f:n:m<n?m:n,c=g<p?g<s?g:s:p<s?p:s,d=f>m?f>n?f:n:m>n?m:n,e=g>p?g>s?g:s:p>s?p:s):(b=f<m?f<n?f<b?f:b:n<b?n:b:m<n?m<b?m:b:n<b?n:b,c=g<p?g<s?g<c?g:c:s<c?s:c:p<s?p<c?p:c:s<c?s:c,d=f>m?f>n?f>d?f:d:n>d?n:d:m>n?m>d?m:d:n>d?n:d,e=g>p?g>s?g>e?g:e:s>e?s:e:p>s?p>e?p:e:s>e?s:e);a()};this.addRectangle=function(f){!0===h?(h=!1,b=f.getLeft(),c=f.getTop(),d=f.getRight(),e=f.getBottom()):(b=b<f.getLeft()?b:f.getLeft(),c=c<f.getTop()?c:f.getTop(),
d=d>f.getRight()?d:f.getRight(),e=e>f.getBottom()?e:f.getBottom());a()};this.inflate=function(f){b-=f;c-=f;d+=f;e+=f;a()};this.minSelf=function(f){b=b>f.getLeft()?b:f.getLeft();c=c>f.getTop()?c:f.getTop();d=d<f.getRight()?d:f.getRight();e=e<f.getBottom()?e:f.getBottom();a()};this.intersects=function(a){return d<a.getLeft()||b>a.getRight()||e<a.getTop()||c>a.getBottom()?!1:!0};this.empty=function(){h=!0;e=d=c=b=0;a()};this.isEmpty=function(){return h}};THREE.Sphere=function(a,b){void 0===a&&void 0===b?(this.center=new THREE.Vector3,this.radius=0):(this.center=a.clone(),this.radius=b||0)};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromCenterAndPoints:function(a,b){for(var c=0,d=0,e=b.length;d<e;d++)var f=a.distanceToSquared(b[d]),c=Math.max(c,f);this.center=a;this.radius=Math.sqrt(c);return this},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-
this.radius},clampPoint:function(a){var b=this.center.distanceToSquared(a),a=(new THREE.Vector3).copy(a);b>this.radius*this.radius&&(a.subSelf(this.center).normalize(),a.multiplyScalar(this.radius).addSelf(this.center));return a},bounds:function(){var a=new THREE.Box3(this.center,this.center);a.expandByScalar(this.radius);return a},translate:function(){this.center.addSelf(this.offset);return this},scale:function(a){this.radius*=a;return this},equals:function(a){return a.center.equals(this.center)&&
a.radius===this.radius},clone:function(){return(new THREE.Sphere3).copy(this)}};THREE.Math={clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degreesToRadians:function(a){return a*THREE.Math.__d2r},
radiansToDegrees:function(a){return a*THREE.Math.__r2d}};THREE.Math.__d2r=Math.PI/180;THREE.Math.__r2d=180/Math.PI;THREE.Quaternion=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w;return this},setFromEuler:function(a,b){var c=Math.cos(a.x/2),d=Math.cos(a.y/2),e=Math.cos(a.z/2),f=Math.sin(a.x/2),g=Math.sin(a.y/2),h=Math.sin(a.z/2);void 0===b||"XYZ"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e-f*g*h):"YXZ"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*
h-f*g*e,this.w=c*d*e+f*g*h):"ZXY"===b?(this.x=f*d*e-c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e-f*g*h):"ZYX"===b?(this.x=f*d*e-c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h-f*g*e,this.w=c*d*e+f*g*h):"YZX"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h-f*g*e,this.w=c*d*e-f*g*h):"XZY"===b&&(this.x=f*d*e-c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e+f*g*h);return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this.x=a.x*d;this.y=a.y*d;this.z=a.z*d;this.w=Math.cos(c);
return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0],a=b[4],d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],i=b[6],b=b[10],j=c+f+b;0<j?(c=0.5/Math.sqrt(j+1),this.w=0.25/c,this.x=(i-g)*c,this.y=(d-h)*c,this.z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this.w=(i-g)/c,this.x=0.25*c,this.y=(a+e)/c,this.z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this.w=(d-h)/c,this.x=(a+e)/c,this.y=0.25*c,this.z=(g+i)/c):(c=2*Math.sqrt(1+b-c-f),this.w=(e-a)/c,this.x=(d+h)/c,this.y=(g+i)/c,this.z=0.25*c);return this},inverse:function(){this.conjugate().normalize();
return this},conjugate:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);0===a?(this.z=this.y=this.x=0,this.w=1):(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a);return this},multiply:function(a,b){var c=a.x,d=a.y,e=a.z,f=a.w,g=b.x,h=b.y,i=b.z,j=b.w;this.x=c*j+d*i-e*h+f*g;this.y=-c*i+d*j+e*g+f*h;this.z=c*h-
d*g+e*j+f*i;this.w=-c*g-d*h-e*i+f*j;return this},multiplySelf:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,f=a.x,g=a.y,h=a.z,a=a.w;this.x=b*a+e*f+c*h-d*g;this.y=c*a+e*g+d*f-b*h;this.z=d*a+e*h+b*g-c*f;this.w=e*a-b*f-c*g-d*h;return this},multiplyVector3:function(a,b){b||(b=a);var c=a.x,d=a.y,e=a.z,f=this.x,g=this.y,h=this.z,i=this.w,j=i*c+g*e-h*d,m=i*d+h*c-f*e,p=i*e+f*d-g*c,c=-f*c-g*d-h*e;b.x=j*i+c*-f+m*-h-p*-g;b.y=m*i+c*-g+p*-f-j*-h;b.z=p*i+c*-h+j*-g-m*-f;return b},slerpSelf:function(a,b){var c=
this.x,d=this.y,e=this.z,f=this.w,g=f*a.w+c*a.x+d*a.y+e*a.z;0>g?(this.w=-a.w,this.x=-a.x,this.y=-a.y,this.z=-a.z,g=-g):this.copy(a);if(1<=g)return this.w=f,this.x=c,this.y=d,this.z=e,this;var h=Math.acos(g),i=Math.sqrt(1-g*g);if(0.001>Math.abs(i))return this.w=0.5*(f+this.w),this.x=0.5*(c+this.x),this.y=0.5*(d+this.y),this.z=0.5*(e+this.z),this;g=Math.sin((1-b)*h)/i;h=Math.sin(b*h)/i;this.w=f*g+this.w*h;this.x=c*g+this.x*h;this.y=d*g+this.y*h;this.z=e*g+this.z*h;return this},clone:function(){return new THREE.Quaternion(this.x,
this.y,this.z,this.w)}};THREE.Quaternion.slerp=function(a,b,c,d){var e=a.w*b.w+a.x*b.x+a.y*b.y+a.z*b.z;0>e?(c.w=-b.w,c.x=-b.x,c.y=-b.y,c.z=-b.z,e=-e):c.copy(b);if(1<=Math.abs(e))return c.w=a.w,c.x=a.x,c.y=a.y,c.z=a.z,c;var b=Math.acos(e),f=Math.sqrt(1-e*e);if(0.001>Math.abs(f))return c.w=0.5*(a.w+c.w),c.x=0.5*(a.x+c.x),c.y=0.5*(a.y+c.y),c.z=0.5*(a.z+c.z),c;e=Math.sin((1-d)*b)/f;d=Math.sin(d*b)/f;c.w=a.w*e+c.w*d;c.x=a.x*e+c.x*d;c.y=a.y*e+c.y*d;c.z=a.z*e+c.z*d;return c};THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,i,j,m,p,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;j=this.points[c[0]];m=this.points[c[1]];p=this.points[c[2]];n=this.points[c[3]];h=g*g;i=g*h;d.x=b(j.x,m.x,p.x,n.x,g,h,i);d.y=b(j.y,m.y,p.y,n.y,g,h,i);d.z=b(j.z,m.z,p.z,n.z,g,h,i);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],i=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),i+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=i,e=b);h[h.length]=i;return{chunks:h,total:i}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],i=new THREE.Vector3,j=this.getLength();h.push(i.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=j.chunks[b]-j.chunks[b-1];g=Math.ceil(a*c/j.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+c*(1/g)*(f-e),d=this.getPoint(d),
h.push(i.copy(d).clone());h.push(i.copy(this.points[b]).clone())}this.points=h}};THREE.Vertex=function(a){console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");return a};THREE.UV=function(a,b){console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");return new THREE.Vector2(a,b)};THREE.EventTarget=function(){var a={};this.addEventListener=function(b,c){void 0===a[b]&&(a[b]=[]);-1===a[b].indexOf(c)&&a[b].push(c)};this.dispatchEvent=function(b){var c=a[b.type];if(void 0!==c)for(var d=0,e=c.length;d<e;d++)c[d](b)};this.removeEventListener=function(b,c){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)}};(function(a){a.Raycaster=function(b,c,d,e){this.ray=new a.Ray(b,c);0<this.ray.direction.length()&&this.ray.direction.normalize();this.near=d||0;this.far=e||Infinity};var b=new a.Sphere,c=new a.Ray,d=new a.Plane,e=new a.Vector3,f=new a.Matrix4,g=function(a,b){return a.distance-b.distance},h=new a.Vector3,i=new a.Vector3,j=new a.Vector3,m=function(a,b,c,d){h.sub(d,b);i.sub(c,b);j.sub(a,b);var a=h.dot(h),b=h.dot(i),c=h.dot(j),e=i.dot(i),d=i.dot(j),f=1/(a*e-b*b),e=(e*c-b*d)*f,a=(a*d-b*c)*f;return 0<=
e&&0<=a&&1>e+a},p=function(g,h,i){if(g instanceof a.Particle){h=h.ray.distanceToPoint(g.matrixWorld.getPosition());if(h>g.scale.x)return i;i.push({distance:h,point:g.position,face:null,object:g})}else if(g instanceof a.Mesh){b.set(g.matrixWorld.getPosition(),g.geometry.boundingSphere.radius*g.matrixWorld.getMaxScaleOnAxis());if(!h.ray.isIntersectionSphere(b))return i;var j=g.geometry,n=j.vertices,p=g.material instanceof a.MeshFaceMaterial,A=!0===p?g.material.materials:null,q=g.material.side,F,z,x,
v=h.precision;g.matrixRotationWorld.extractRotation(g.matrixWorld);f.getInverse(g.matrixWorld);c.copy(h.ray).transformSelf(f);for(var I=0,C=j.faces.length;I<C;I++){var G=j.faces[I],q=!0===p?A[G.materialIndex]:g.material;if(void 0!==q){d.setFromNormalAndCoplanarPoint(G.normal,G.centroid);var M=c.distanceToPlane(d);if(!(Math.abs(M)<v)&&!(0>M)){q=q.side;if(q!==a.DoubleSide&&(F=c.direction.dot(d.normal),!(q===a.FrontSide?0>F:0<F)))continue;if(!(M<h.near||M>h.far)){e=c.at(M,e);if(G instanceof a.Face3){if(q=
n[G.a],F=n[G.b],z=n[G.c],!m(e,q,F,z))continue}else if(G instanceof a.Face4){if(q=n[G.a],F=n[G.b],z=n[G.c],x=n[G.d],!m(e,q,F,x)&&!m(e,F,z,x))continue}else throw Error("face type not supported");i.push({distance:M,point:h.ray.at(M),face:G,faceIndex:I,object:g})}}}}}},n=function(a,b,c){for(var a=a.getDescendants(),d=0,e=a.length;d<e;d++)p(a[d],b,c)};a.Raycaster.prototype.precision=1E-4;a.Raycaster.prototype.set=function(a,b){this.ray.set(a,b);0<this.ray.direction.length()&&this.ray.direction.normalize()};
a.Raycaster.prototype.intersectObject=function(a,b){var c=[];!0===b&&n(a,this,c);p(a,this,c);c.sort(g);return c};a.Raycaster.prototype.intersectObjects=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)p(a[d],this,c),!0===b&&n(a[d],this,c);c.sort(g);return c}})(THREE);THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.name="";this.properties={};this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Vector3;this.eulerOrder=THREE.Object3D.defaultEulerOrder;this.scale=new THREE.Vector3(1,1,1);this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixRotationWorld=new THREE.Matrix4;this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=
!0;this.quaternion=new THREE.Quaternion;this.useQuaternion=!1;this.boundRadius=0;this.boundRadiusScale=1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this._vector=new THREE.Vector3;THREE.Object3DLibrary[this.id]=this};
THREE.Object3D.prototype={constructor:THREE.Object3D,applyMatrix:function(a){this.matrix.multiply(a,this.matrix);this.scale.getScaleFromMatrix(this.matrix);a=(new THREE.Matrix4).extractRotation(this.matrix);this.rotation.setEulerFromRotationMatrix(a,this.eulerOrder);this.position.getPositionFromMatrix(this.matrix)},translate:function(a,b){this.matrix.rotateAxis(b);this.position.addSelf(b.multiplyScalar(a))},translateX:function(a){this.translate(a,this._vector.set(1,0,0))},translateY:function(a){this.translate(a,
this._vector.set(0,1,0))},translateZ:function(a){this.translate(a,this._vector.set(0,0,1))},localToWorld:function(a){return this.matrixWorld.multiplyVector3(a)},worldToLocal:function(a){return THREE.Object3D.__m1.getInverse(this.matrixWorld).multiplyVector3(a)},lookAt:function(a){this.matrix.lookAt(a,this.position,this.up);this.rotationAutoUpdate&&(!1===this.useQuaternion?this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder):this.quaternion.copy(this.matrix.decompose()[1]))},add:function(a){if(a===
this)console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");else if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;this.children.push(a);for(var b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}},remove:function(a){var b=this.children.indexOf(a);if(-1!==b){a.parent=void 0;this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},
traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},getChildByName:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getChildByName(a,b),void 0!==e))return e}},getDescendants:function(a){void 0===a&&(a=[]);Array.prototype.push.apply(a,this.children);for(var b=0,c=this.children.length;b<c;b++)this.children[b].getDescendants(a);return a},updateMatrix:function(){this.matrix.setPosition(this.position);
!1===this.useQuaternion?this.matrix.setRotationFromEuler(this.rotation,this.eulerOrder):this.matrix.setRotationFromQuaternion(this.quaternion);if(1!==this.scale.x||1!==this.scale.y||1!==this.scale.z)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,Math.max(this.scale.y,this.scale.z));this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):
this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a){void 0===a&&(a=new THREE.Object3D);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.rotation instanceof THREE.Vector3&&a.rotation.copy(this.rotation);a.eulerOrder=this.eulerOrder;a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);
a.matrixWorld.copy(this.matrixWorld);a.matrixRotationWorld.copy(this.matrixRotationWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.quaternion.copy(this.quaternion);a.useQuaternion=this.useQuaternion;a.boundRadius=this.boundRadius;a.boundRadiusScale=this.boundRadiusScale;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;for(var b=0;b<this.children.length;b++)a.add(this.children[b].clone());
return a},deallocate:function(){delete THREE.Object3DLibrary[this.id]}};THREE.Object3D.__m1=new THREE.Matrix4;THREE.Object3D.defaultEulerOrder="XYZ";THREE.Object3DIdCount=0;THREE.Object3DLibrary={};THREE.Projector=function(){function a(){if(f===h){var a=new THREE.RenderableObject;g.push(a);h++;f++;return a}return g[f++]}function b(){if(j===p){var a=new THREE.RenderableVertex;m.push(a);p++;j++;return a}return m[j++]}function c(a,b){return b.z-a.z}function d(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<
c)return!1;a.lerpSelf(b,c);b.lerpSelf(a,1-d);return!0}var e,f,g=[],h=0,i,j,m=[],p=0,n,s,r=[],l=0,t,u=[],E=0,A,q,F=[],z=0,x,v,I=[],C=0,G={objects:[],sprites:[],lights:[],elements:[]},M=new THREE.Vector3,B=new THREE.Vector4,J=new THREE.Matrix4,D=new THREE.Matrix4,L=new THREE.Matrix3,K=new THREE.Frustum,U=new THREE.Vector4,N=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);J.multiply(b.projectionMatrix,b.matrixWorldInverse);J.multiplyVector3(a);return a};
this.unprojectVector=function(a,b){b.projectionMatrixInverse.getInverse(b.projectionMatrix);J.multiply(b.matrixWorld,b.projectionMatrixInverse);J.multiplyVector3(a);return a};this.pickingRay=function(a,b){var c;a.z=-1;c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.subSelf(a).normalize();return new THREE.Raycaster(a,c)};this.projectScene=function(g,h,p,la){var ja=h.near,Ma=h.far,Q=!1,R,ba,ca,P,ka,V,da,Ca,Va,ua,Da,ea,Ha,gb,vb;v=q=t=s=0;G.elements.length=0;g.updateMatrixWorld();
void 0===h.parent&&h.updateMatrixWorld();h.matrixWorldInverse.getInverse(h.matrixWorld);J.multiply(h.projectionMatrix,h.matrixWorldInverse);K.setFromMatrix(J);f=0;G.objects.length=0;G.sprites.length=0;G.lights.length=0;var qb=function(b){for(var c=0,d=b.children.length;c<d;c++){var f=b.children[c];if(!1!==f.visible){if(f instanceof THREE.Light)G.lights.push(f);else if(f instanceof THREE.Mesh||f instanceof THREE.Line){if(!1===f.frustumCulled||!0===K.contains(f))e=a(),e.object=f,null!==f.renderDepth?
e.z=f.renderDepth:(M.copy(f.matrixWorld.getPosition()),J.multiplyVector3(M),e.z=M.z),G.objects.push(e)}else f instanceof THREE.Sprite||f instanceof THREE.Particle?(e=a(),e.object=f,null!==f.renderDepth?e.z=f.renderDepth:(M.copy(f.matrixWorld.getPosition()),J.multiplyVector3(M),e.z=M.z),G.sprites.push(e)):(e=a(),e.object=f,null!==f.renderDepth?e.z=f.renderDepth:(M.copy(f.matrixWorld.getPosition()),J.multiplyVector3(M),e.z=M.z),G.objects.push(e));qb(f)}}};qb(g);!0===p&&G.objects.sort(c);g=0;for(p=G.objects.length;g<
p;g++)if(Ca=G.objects[g].object,Va=Ca.matrixWorld,j=0,Ca instanceof THREE.Mesh){ua=Ca.geometry;ca=ua.vertices;Da=ua.faces;ua=ua.faceVertexUvs;L.getInverse(Va);L.transpose();Ha=Ca.material instanceof THREE.MeshFaceMaterial;gb=!0===Ha?Ca.material:null;R=0;for(ba=ca.length;R<ba;R++)i=b(),i.positionWorld.copy(ca[R]),Va.multiplyVector3(i.positionWorld),i.positionScreen.copy(i.positionWorld),J.multiplyVector4(i.positionScreen),i.positionScreen.x/=i.positionScreen.w,i.positionScreen.y/=i.positionScreen.w,
i.visible=i.positionScreen.z>ja&&i.positionScreen.z<Ma;ca=0;for(R=Da.length;ca<R;ca++)if(ba=Da[ca],vb=!0===Ha?gb.materials[ba.materialIndex]:Ca.material,void 0!==vb){V=vb.side;if(ba instanceof THREE.Face3)if(P=m[ba.a],ka=m[ba.b],da=m[ba.c],!0===P.visible&&!0===ka.visible&&!0===da.visible)if(Q=0>(da.positionScreen.x-P.positionScreen.x)*(ka.positionScreen.y-P.positionScreen.y)-(da.positionScreen.y-P.positionScreen.y)*(ka.positionScreen.x-P.positionScreen.x),V===THREE.DoubleSide||Q===(V===THREE.FrontSide))s===
l?(ea=new THREE.RenderableFace3,r.push(ea),l++,s++,n=ea):n=r[s++],n.v1.copy(P),n.v2.copy(ka),n.v3.copy(da);else continue;else continue;else if(ba instanceof THREE.Face4)if(P=m[ba.a],ka=m[ba.b],da=m[ba.c],ea=m[ba.d],!0===P.visible&&!0===ka.visible&&!0===da.visible&&!0===ea.visible)if(Q=0>(ea.positionScreen.x-P.positionScreen.x)*(ka.positionScreen.y-P.positionScreen.y)-(ea.positionScreen.y-P.positionScreen.y)*(ka.positionScreen.x-P.positionScreen.x)||0>(ka.positionScreen.x-da.positionScreen.x)*(ea.positionScreen.y-
da.positionScreen.y)-(ka.positionScreen.y-da.positionScreen.y)*(ea.positionScreen.x-da.positionScreen.x),V===THREE.DoubleSide||Q===(V===THREE.FrontSide)){if(t===E){var ub=new THREE.RenderableFace4;u.push(ub);E++;t++;n=ub}else n=u[t++];n.v1.copy(P);n.v2.copy(ka);n.v3.copy(da);n.v4.copy(ea)}else continue;else continue;n.normalWorld.copy(ba.normal);!1===Q&&(V===THREE.BackSide||V===THREE.DoubleSide)&&n.normalWorld.negate();L.multiplyVector3(n.normalWorld).normalize();n.centroidWorld.copy(ba.centroid);
Va.multiplyVector3(n.centroidWorld);n.centroidScreen.copy(n.centroidWorld);J.multiplyVector3(n.centroidScreen);da=ba.vertexNormals;P=0;for(ka=da.length;P<ka;P++)ea=n.vertexNormalsWorld[P],ea.copy(da[P]),!1===Q&&(V===THREE.BackSide||V===THREE.DoubleSide)&&ea.negate(),L.multiplyVector3(ea).normalize();n.vertexNormalsLength=da.length;P=0;for(ka=ua.length;P<ka;P++)if(ea=ua[P][ca],void 0!==ea){V=0;for(da=ea.length;V<da;V++)n.uvs[P][V]=ea[V]}n.color=ba.color;n.material=vb;n.z=n.centroidScreen.z;G.elements.push(n)}}else if(Ca instanceof
THREE.Line){D.multiply(J,Va);ca=Ca.geometry.vertices;P=b();P.positionScreen.copy(ca[0]);D.multiplyVector4(P.positionScreen);Va=Ca.type===THREE.LinePieces?2:1;R=1;for(ba=ca.length;R<ba;R++)P=b(),P.positionScreen.copy(ca[R]),D.multiplyVector4(P.positionScreen),0<(R+1)%Va||(ka=m[j-2],U.copy(P.positionScreen),N.copy(ka.positionScreen),!0===d(U,N)&&(U.multiplyScalar(1/U.w),N.multiplyScalar(1/N.w),q===z?(Da=new THREE.RenderableLine,F.push(Da),z++,q++,A=Da):A=F[q++],A.v1.positionScreen.copy(U),A.v2.positionScreen.copy(N),
A.z=Math.max(U.z,N.z),A.material=Ca.material,G.elements.push(A)))}g=0;for(p=G.sprites.length;g<p;g++)Ca=G.sprites[g].object,Va=Ca.matrixWorld,Ca instanceof THREE.Particle&&(B.set(Va.elements[12],Va.elements[13],Va.elements[14],1),J.multiplyVector4(B),B.z/=B.w,0<B.z&&1>B.z&&(v===C?(ja=new THREE.RenderableParticle,I.push(ja),C++,v++,x=ja):x=I[v++],x.object=Ca,x.x=B.x/B.w,x.y=B.y/B.w,x.z=B.z,x.rotation=Ca.rotation.z,x.scale.x=Ca.scale.x*Math.abs(x.x-(B.x+h.projectionMatrix.elements[0])/(B.w+h.projectionMatrix.elements[12])),
x.scale.y=Ca.scale.y*Math.abs(x.y-(B.y+h.projectionMatrix.elements[5])/(B.w+h.projectionMatrix.elements[13])),x.material=Ca.material,G.elements.push(x)));!0===la&&G.elements.sort(c);return G}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0;this.centroid=new THREE.Vector3};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Face4=function(a,b,c,d,e,f,g){this.a=a;this.b=b;this.c=c;this.d=d;this.normal=e instanceof THREE.Vector3?e:new THREE.Vector3;this.vertexNormals=e instanceof Array?e:[];this.color=f instanceof THREE.Color?f:new THREE.Color;this.vertexColors=f instanceof Array?f:[];this.vertexTangents=[];this.materialIndex=void 0!==g?g:0;this.centroid=new THREE.Vector3};
THREE.Face4.prototype={constructor:THREE.Face4,clone:function(){var a=new THREE.Face4(this.a,this.b,this.c,this.d);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.name="";this.vertices=[];this.colors=[];this.normals=[];this.faces=[];this.faceUvs=[[]];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=
this.elementsNeedUpdate=this.verticesNeedUpdate=!1;THREE.GeometryLibrary[this.id]=this};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){var b=new THREE.Matrix3;b.getInverse(a).transpose();for(var c=0,d=this.vertices.length;c<d;c++)a.multiplyVector3(this.vertices[c]);c=0;for(d=this.faces.length;c<d;c++){var e=this.faces[c];b.multiplyVector3(e.normal).normalize();for(var f=0,g=e.vertexNormals.length;f<g;f++)b.multiplyVector3(e.vertexNormals[f]).normalize();a.multiplyVector3(e.centroid)}},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<b;a++)c=
this.faces[a],c.centroid.set(0,0,0),c instanceof THREE.Face3?(c.centroid.addSelf(this.vertices[c.a]),c.centroid.addSelf(this.vertices[c.b]),c.centroid.addSelf(this.vertices[c.c]),c.centroid.divideScalar(3)):c instanceof THREE.Face4&&(c.centroid.addSelf(this.vertices[c.a]),c.centroid.addSelf(this.vertices[c.b]),c.centroid.addSelf(this.vertices[c.c]),c.centroid.addSelf(this.vertices[c.d]),c.centroid.divideScalar(4))},computeFaceNormals:function(){var a,b,c,d,e,f,g=new THREE.Vector3,h=new THREE.Vector3;
a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],d=this.vertices[c.a],e=this.vertices[c.b],f=this.vertices[c.c],g.sub(f,e),h.sub(d,e),g.crossSelf(h),g.normalize(),c.normal.copy(g)},computeVertexNormals:function(a){var b,c,d,e;if(void 0===this.__tmpVertices){e=this.__tmpVertices=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)e[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?d.vertexNormals=[new THREE.Vector3,new THREE.Vector3,
new THREE.Vector3]:d instanceof THREE.Face4&&(d.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3])}else{e=this.__tmpVertices;b=0;for(c=this.vertices.length;b<c;b++)e[b].set(0,0,0)}if(a){var f,g,h,i=new THREE.Vector3,j=new THREE.Vector3,m=new THREE.Vector3,p=new THREE.Vector3,n=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?(a=this.vertices[d.a],f=this.vertices[d.b],g=this.vertices[d.c],i.sub(g,f),j.sub(a,f),i.crossSelf(j),
e[d.a].addSelf(i),e[d.b].addSelf(i),e[d.c].addSelf(i)):d instanceof THREE.Face4&&(a=this.vertices[d.a],f=this.vertices[d.b],g=this.vertices[d.c],h=this.vertices[d.d],m.sub(h,f),j.sub(a,f),m.crossSelf(j),e[d.a].addSelf(m),e[d.b].addSelf(m),e[d.d].addSelf(m),p.sub(h,g),n.sub(f,g),p.crossSelf(n),e[d.b].addSelf(p),e[d.c].addSelf(p),e[d.d].addSelf(p))}else{b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?(e[d.a].addSelf(d.normal),e[d.b].addSelf(d.normal),e[d.c].addSelf(d.normal)):
d instanceof THREE.Face4&&(e[d.a].addSelf(d.normal),e[d.b].addSelf(d.normal),e[d.c].addSelf(d.normal),e[d.d].addSelf(d.normal))}b=0;for(c=this.vertices.length;b<c;b++)e[b].normalize();b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?(d.vertexNormals[0].copy(e[d.a]),d.vertexNormals[1].copy(e[d.b]),d.vertexNormals[2].copy(e[d.c])):d instanceof THREE.Face4&&(d.vertexNormals[0].copy(e[d.a]),d.vertexNormals[1].copy(e[d.b]),d.vertexNormals[2].copy(e[d.c]),d.vertexNormals[3].copy(e[d.d]))},
computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c];e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone();e.__originalVertexNormals||(e.__originalVertexNormals=[]);a=0;for(b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone()}var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<
b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];var g=this.morphNormals[a].faceNormals,h=this.morphNormals[a].vertexNormals,i,j;c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],i=new THREE.Vector3,j=e instanceof THREE.Face3?{a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3}:{a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3,d:new THREE.Vector3},g.push(i),h.push(j)}g=this.morphNormals[a];f.vertices=
this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],i=g.faceNormals[c],j=g.vertexNormals[c],i.copy(e.normal),e instanceof THREE.Face3?(j.a.copy(e.vertexNormals[0]),j.b.copy(e.vertexNormals[1]),j.c.copy(e.vertexNormals[2])):(j.a.copy(e.vertexNormals[0]),j.b.copy(e.vertexNormals[1]),j.c.copy(e.vertexNormals[2]),j.d.copy(e.vertexNormals[3]))}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,
e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){function a(a,b,c,d,e,f,v){h=a.vertices[b];i=a.vertices[c];j=a.vertices[d];m=g[e];p=g[f];n=g[v];s=i.x-h.x;r=j.x-h.x;l=i.y-h.y;t=j.y-h.y;u=i.z-h.z;E=j.z-h.z;A=p.x-m.x;q=n.x-m.x;F=p.y-m.y;z=n.y-m.y;x=1/(A*z-q*F);G.set((z*s-F*r)*x,(z*l-F*t)*x,(z*u-F*E)*x);M.set((A*r-q*s)*x,(A*t-q*l)*x,(A*E-q*u)*x);I[b].addSelf(G);I[c].addSelf(G);I[d].addSelf(G);C[b].addSelf(M);C[c].addSelf(M);C[d].addSelf(M)}var b,c,d,e,f,g,h,i,j,m,p,n,s,r,l,t,u,E,
A,q,F,z,x,v,I=[],C=[],G=new THREE.Vector3,M=new THREE.Vector3,B=new THREE.Vector3,J=new THREE.Vector3,D=new THREE.Vector3;b=0;for(c=this.vertices.length;b<c;b++)I[b]=new THREE.Vector3,C[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)f=this.faces[b],g=this.faceVertexUvs[0][b],f instanceof THREE.Face3?a(this,f.a,f.b,f.c,0,1,2):f instanceof THREE.Face4&&(a(this,f.a,f.b,f.d,0,1,3),a(this,f.b,f.c,f.d,1,2,3));var L=["a","b","c","d"];b=0;for(c=this.faces.length;b<c;b++){f=this.faces[b];for(d=0;d<
f.vertexNormals.length;d++)D.copy(f.vertexNormals[d]),e=f[L[d]],v=I[e],B.copy(v),B.subSelf(D.multiplyScalar(D.dot(v))).normalize(),J.cross(f.vertexNormals[d],v),e=J.dot(C[e]),e=0>e?-1:1,f.vertexTangents[d]=new THREE.Vector4(B.x,B.y,B.z,e)}this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){this.boundingBox=(new THREE.Box3).setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere=
(new THREE.Sphere).setFromCenterAndPoints(new THREE.Vector3,this.vertices)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g,h,i;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=[Math.round(d.x*e),Math.round(d.y*e),Math.round(d.z*e)].join("_"),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];f=0;for(g=this.faces.length;f<g;f++)if(a=this.faces[f],a instanceof THREE.Face3)a.a=c[a.a],a.b=c[a.b],a.c=c[a.c];else if(a instanceof THREE.Face4){a.a=
c[a.a];a.b=c[a.b];a.c=c[a.c];a.d=c[a.d];d=[a.a,a.b,a.c,a.d];for(e=3;0<e;e--)if(d.indexOf(a["abcd"[e]])!==e){d.splice(e,1);this.faces[f]=new THREE.Face3(d[0],d[1],d[2],a.normal,a.color,a.materialIndex);d=0;for(h=this.faceVertexUvs.length;d<h;d++)(i=this.faceVertexUvs[d][f])&&i.splice(e,1);this.faces[f].vertexColors=a.vertexColors;break}}c=this.vertices.length-b.length;this.vertices=b;return c},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());
b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],g=0,h=e.length;g<h;g++)f.push(new THREE.Vector2(e[g].x,e[g].y));a.faceVertexUvs[0].push(f)}return a},deallocate:function(){delete THREE.GeometryLibrary[this.id]}};THREE.GeometryIdCount=0;THREE.GeometryLibrary={};THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.attributes={};this.dynamic=!1;this.offsets=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.morphTargets=[];THREE.GeometryLibrary[this.id]=this};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,applyMatrix:function(a){var b,c;this.attributes.position&&(b=this.attributes.position.array);this.attributes.normal&&(c=this.attributes.normal.array);void 0!==b&&(a.multiplyVector3Array(b),this.verticesNeedUpdate=!0);void 0!==c&&(b=new THREE.Matrix3,b.getInverse(a).transpose(),b.multiplyVector3Array(c),this.normalizeNormals(),this.normalsNeedUpdate=!0)},computeBoundingBox:function(){this.boundingBox||(this.boundingBox=new THREE.Box3);
var a=this.attributes.position.array;if(a){var b=this.boundingBox,c,d,e;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var f=3,g=a.length;f<g;f+=3)c=a[f],d=a[f+1],e=a[f+2],c<b.min.x?b.min.x=c:c>b.max.x&&(b.max.x=c),d<b.min.y?b.min.y=d:d>b.max.y&&(b.max.y=d),e<b.min.z?b.min.z=e:e>b.max.z&&(b.max.z=e)}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){this.boundingSphere||(this.boundingSphere=
new THREE.Sphere);var a=this.attributes.position.array;if(a){for(var b,c=0,d,e,f=0,g=a.length;f<g;f+=3)b=a[f],d=a[f+1],e=a[f+2],b=b*b+d*d+e*e,b>c&&(c=b);this.boundingSphere.radius=Math.sqrt(c)}},computeVertexNormals:function(){if(this.attributes.position){var a,b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a),numItems:a};else{a=0;for(b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=
0}var e=this.attributes.position.array,f=this.attributes.normal.array,g,h,i,j,m,p,n=new THREE.Vector3,s=new THREE.Vector3,r=new THREE.Vector3,l=new THREE.Vector3,t=new THREE.Vector3;if(this.attributes.index){var u=this.attributes.index.array,E=this.offsets;c=0;for(d=E.length;c<d;++c){b=E[c].start;g=E[c].count;var A=E[c].index;a=b;for(b+=g;a<b;a+=3)g=A+u[a],h=A+u[a+1],i=A+u[a+2],j=e[3*g],m=e[3*g+1],p=e[3*g+2],n.set(j,m,p),j=e[3*h],m=e[3*h+1],p=e[3*h+2],s.set(j,m,p),j=e[3*i],m=e[3*i+1],p=e[3*i+2],r.set(j,
m,p),l.sub(r,s),t.sub(n,s),l.crossSelf(t),f[3*g]+=l.x,f[3*g+1]+=l.y,f[3*g+2]+=l.z,f[3*h]+=l.x,f[3*h+1]+=l.y,f[3*h+2]+=l.z,f[3*i]+=l.x,f[3*i+1]+=l.y,f[3*i+2]+=l.z}}else{a=0;for(b=e.length;a<b;a+=9)j=e[a],m=e[a+1],p=e[a+2],n.set(j,m,p),j=e[a+3],m=e[a+4],p=e[a+5],s.set(j,m,p),j=e[a+6],m=e[a+7],p=e[a+8],r.set(j,m,p),l.sub(r,s),t.sub(n,s),l.crossSelf(t),f[a]=l.x,f[a+1]=l.y,f[a+2]=l.z,f[a+3]=l.x,f[a+4]=l.y,f[a+5]=l.z,f[a+6]=l.x,f[a+7]=l.y,f[a+8]=l.z}this.normalizeNormals();this.normalsNeedUpdate=!0}},normalizeNormals:function(){for(var a=
this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},computeTangents:function(){function a(a){ia.x=d[3*a];ia.y=d[3*a+1];ia.z=d[3*a+2];sa.copy(ia);la=i[a];U.copy(la);U.subSelf(ia.multiplyScalar(ia.dot(la))).normalize();N.cross(sa,la);ja=N.dot(j[a]);O=0>ja?-1:1;h[4*a]=U.x;h[4*a+1]=U.y;h[4*a+2]=U.z;h[4*a+3]=O}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===
this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var b=this.attributes.index.array,c=this.attributes.position.array,d=this.attributes.normal.array,e=this.attributes.uv.array,f=c.length/3;if(void 0===this.attributes.tangent){var g=4*f;this.attributes.tangent={itemSize:4,array:new Float32Array(g),numItems:g}}for(var h=this.attributes.tangent.array,i=[],j=[],g=0;g<f;g++)i[g]=new THREE.Vector3,j[g]=new THREE.Vector3;
var m,p,n,s,r,l,t,u,E,A,q,F,z,x,v,f=new THREE.Vector3,g=new THREE.Vector3,I,C,G,M,B,J,D,L=this.offsets;G=0;for(M=L.length;G<M;++G){C=L[G].start;B=L[G].count;var K=L[G].index;I=C;for(C+=B;I<C;I+=3)B=K+b[I],J=K+b[I+1],D=K+b[I+2],m=c[3*B],p=c[3*B+1],n=c[3*B+2],s=c[3*J],r=c[3*J+1],l=c[3*J+2],t=c[3*D],u=c[3*D+1],E=c[3*D+2],A=e[2*B],q=e[2*B+1],F=e[2*J],z=e[2*J+1],x=e[2*D],v=e[2*D+1],s-=m,m=t-m,r-=p,p=u-p,l-=n,n=E-n,F-=A,A=x-A,z-=q,q=v-q,v=1/(F*q-A*z),f.set((q*s-z*m)*v,(q*r-z*p)*v,(q*l-z*n)*v),g.set((F*
m-A*s)*v,(F*p-A*r)*v,(F*n-A*l)*v),i[B].addSelf(f),i[J].addSelf(f),i[D].addSelf(f),j[B].addSelf(g),j[J].addSelf(g),j[D].addSelf(g)}var U=new THREE.Vector3,N=new THREE.Vector3,ia=new THREE.Vector3,sa=new THREE.Vector3,O,la,ja;G=0;for(M=L.length;G<M;++G){C=L[G].start;B=L[G].count;K=L[G].index;I=C;for(C+=B;I<C;I+=3)B=K+b[I],J=K+b[I+1],D=K+b[I+2],a(B),a(J),a(D)}this.tangentsNeedUpdate=this.hasTangents=!0}},deallocate:function(){delete THREE.GeometryLibrary[this.id]}};THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4;this.projectionMatrixInverse=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(a){this.matrix.lookAt(this.position,a,this.up);!0===this.rotationAutoUpdate&&(!1===this.useQuaternion?this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder):this.quaternion.copy(this.matrix.decompose()[1]))};THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*Math.atan(b/(2*a))*(180/Math.PI);this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(this.fov*Math.PI/360)*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=
new THREE.Vector3(0,0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.groundColor=new THREE.Color(b);this.position=new THREE.Vector3(0,100,0);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,0,0);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/2;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=
this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:"anonymous",addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/
a.total).toFixed(0)+"%"):b+((a.loaded/1E3).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");a.pop();return(1>a.length?".":a.join("/"))+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=THREE.Loader.prototype.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.floor(a)==
a}function d(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function e(a,e,f,h,i,j,t){var u=f.toLowerCase().endsWith(".dds"),E=b+"/"+f;if(u){var A=THREE.ImageUtils.loadCompressedTexture(E);a[e]=A}else A=document.createElement("canvas"),a[e]=new THREE.Texture(A);a[e].sourceFile=f;h&&(a[e].repeat.set(h[0],h[1]),1!==h[0]&&(a[e].wrapS=THREE.RepeatWrapping),1!==h[1]&&(a[e].wrapT=THREE.RepeatWrapping));i&&a[e].offset.set(i[0],i[1]);j&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},
void 0!==f[j[0]]&&(a[e].wrapS=f[j[0]]),void 0!==f[j[1]]&&(a[e].wrapT=f[j[1]]));t&&(a[e].anisotropy=t);if(!u){var q=a[e],a=new Image;a.onload=function(){if(!c(this.width)||!c(this.height)){var a=d(this.width),b=d(this.height);q.image.width=a;q.image.height=b;q.image.getContext("2d").drawImage(this,0,0,a,b)}else q.image=this;q.needsUpdate=!0};a.crossOrigin=g.crossOrigin;a.src=E}}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var g=this,h="MeshLambertMaterial",i={color:15658734,opacity:1,
map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var j=a.shading.toLowerCase();"phong"===j?h="MeshPhongMaterial":"basic"===j&&(h="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(i.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)i.transparent=a.transparent;void 0!==a.depthTest&&(i.depthTest=a.depthTest);void 0!==a.depthWrite&&(i.depthWrite=a.depthWrite);void 0!==a.visible&&(i.visible=a.visible);void 0!==a.flipSided&&(i.side=THREE.BackSide);
void 0!==a.doubleSided&&(i.side=THREE.DoubleSide);void 0!==a.wireframe&&(i.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===a.vertexColors?i.vertexColors=THREE.FaceColors:a.vertexColors&&(i.vertexColors=THREE.VertexColors));a.colorDiffuse?i.color=f(a.colorDiffuse):a.DbgColor&&(i.color=a.DbgColor);a.colorSpecular&&(i.specular=f(a.colorSpecular));a.colorAmbient&&(i.ambient=f(a.colorAmbient));a.transparency&&(i.opacity=a.transparency);a.specularCoef&&(i.shininess=a.specularCoef);a.mapDiffuse&&
b&&e(i,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&e(i,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&e(i,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&e(i,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&e(i,"specularMap",a.mapSpecular,a.mapSpecularRepeat,
a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapBumpScale&&(i.bumpScale=a.mapBumpScale);a.mapNormal?(h=THREE.ShaderUtils.lib.normal,j=THREE.UniformsUtils.clone(h.uniforms),j.tNormal.value=i.normalMap,a.mapNormalFactor&&j.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),i.map&&(j.tDiffuse.value=i.map,j.enableDiffuse.value=!0),i.specularMap&&(j.tSpecular.value=i.specularMap,j.enableSpecular.value=!0),i.lightMap&&(j.tAO.value=i.lightMap,j.enableAO.value=!0),j.uDiffuseColor.value.setHex(i.color),
j.uSpecularColor.value.setHex(i.specular),j.uAmbientColor.value.setHex(i.ambient),j.uShininess.value=i.shininess,void 0!==i.opacity&&(j.uOpacity.value=i.opacity),h=new THREE.ShaderMaterial({fragmentShader:h.fragmentShader,vertexShader:h.vertexShader,uniforms:j,lights:!0,fog:!0}),i.transparent&&(h.transparent=!0)):h=new THREE[h](i);void 0!==a.DbgName&&(h.name=a.DbgName);return h}};THREE.BinaryLoader=function(a){THREE.Loader.call(this,a)};THREE.BinaryLoader.prototype=Object.create(THREE.Loader.prototype);THREE.BinaryLoader.prototype.load=function(a,b,c,d){var c=c&&"string"===typeof c?c:this.extractUrlBase(a),d=d&&"string"===typeof d?d:this.extractUrlBase(a),e=this.showProgress?THREE.Loader.prototype.updateProgress:null;this.onLoadStart();this.loadAjaxJSON(this,a,b,c,d,e)};
THREE.BinaryLoader.prototype.loadAjaxJSON=function(a,b,c,d,e,f){var g=new XMLHttpRequest;g.onreadystatechange=function(){if(4==g.readyState)if(200==g.status||0==g.status){var h=JSON.parse(g.responseText);a.loadAjaxBuffers(h,c,e,d,f)}else console.error("THREE.BinaryLoader: Couldn't load ["+b+"] ["+g.status+"]")};g.open("GET",b,!0);g.send(null)};
THREE.BinaryLoader.prototype.loadAjaxBuffers=function(a,b,c,d,e){var f=new XMLHttpRequest,g=c+"/"+a.buffers,h=0;f.onreadystatechange=function(){if(4==f.readyState)if(200==f.status||0==f.status){var c=f.response;void 0===c&&(c=(new Uint8Array(f.responseBody)).buffer);THREE.BinaryLoader.prototype.createBinModel(c,b,d,a.materials)}else console.error("THREE.BinaryLoader: Couldn't load ["+g+"] ["+f.status+"]");else 3==f.readyState?e&&(0==h&&(h=f.getResponseHeader("Content-Length")),e({total:h,loaded:f.responseText.length})):
2==f.readyState&&(h=f.getResponseHeader("Content-Length"))};f.open("GET",g,!0);f.responseType="arraybuffer";f.send(null)};
THREE.BinaryLoader.prototype.createBinModel=function(a,b,c,d){var e=function(){var b,c,d,e,j,m,p,n,s,r,l,t,u,E,A,q;function F(a){return a%4?4-a%4:0}function z(a,b){return(new Uint8Array(a,b,1))[0]}function x(a,b){return(new Uint32Array(a,b,1))[0]}function v(b,c){var d,e,f,g,h,i,j,m=new Uint32Array(a,c,3*b);for(d=0;d<b;d++)e=m[3*d],f=m[3*d+1],g=m[3*d+2],h=K[2*e],e=K[2*e+1],i=K[2*f],j=K[2*f+1],f=K[2*g],g=K[2*g+1],J.faceVertexUvs[0].push([new THREE.Vector2(h,e),new THREE.Vector2(i,j),new THREE.Vector2(f,
g)])}function I(b,c){var d,e,f,g,h,i,j,m,n,p=new Uint32Array(a,c,4*b);for(d=0;d<b;d++)e=p[4*d],f=p[4*d+1],g=p[4*d+2],h=p[4*d+3],i=K[2*e],e=K[2*e+1],j=K[2*f],m=K[2*f+1],f=K[2*g],n=K[2*g+1],g=K[2*h],h=K[2*h+1],J.faceVertexUvs[0].push([new THREE.Vector2(i,e),new THREE.Vector2(j,m),new THREE.Vector2(f,n),new THREE.Vector2(g,h)])}function C(b,c,d){for(var e,f,g,h,c=new Uint32Array(a,c,3*b),i=new Uint16Array(a,d,b),d=0;d<b;d++)e=c[3*d],f=c[3*d+1],g=c[3*d+2],h=i[d],J.faces.push(new THREE.Face3(e,f,g,null,
null,h))}function G(b,c,d){for(var e,f,g,h,i,c=new Uint32Array(a,c,4*b),j=new Uint16Array(a,d,b),d=0;d<b;d++)e=c[4*d],f=c[4*d+1],g=c[4*d+2],h=c[4*d+3],i=j[d],J.faces.push(new THREE.Face4(e,f,g,h,null,null,i))}function M(b,c,d,e){for(var f,g,h,i,j,m,n,c=new Uint32Array(a,c,3*b),d=new Uint32Array(a,d,3*b),p=new Uint16Array(a,e,b),e=0;e<b;e++){f=c[3*e];g=c[3*e+1];h=c[3*e+2];j=d[3*e];m=d[3*e+1];n=d[3*e+2];i=p[e];var s=L[3*m],l=L[3*m+1];m=L[3*m+2];var r=L[3*n],q=L[3*n+1];n=L[3*n+2];J.faces.push(new THREE.Face3(f,
g,h,[new THREE.Vector3(L[3*j],L[3*j+1],L[3*j+2]),new THREE.Vector3(s,l,m),new THREE.Vector3(r,q,n)],null,i))}}function B(b,c,d,e){for(var f,g,h,i,j,m,n,p,s,c=new Uint32Array(a,c,4*b),d=new Uint32Array(a,d,4*b),l=new Uint16Array(a,e,b),e=0;e<b;e++){f=c[4*e];g=c[4*e+1];h=c[4*e+2];i=c[4*e+3];m=d[4*e];n=d[4*e+1];p=d[4*e+2];s=d[4*e+3];j=l[e];var r=L[3*n],q=L[3*n+1];n=L[3*n+2];var t=L[3*p],u=L[3*p+1];p=L[3*p+2];var v=L[3*s],x=L[3*s+1];s=L[3*s+2];J.faces.push(new THREE.Face4(f,g,h,i,[new THREE.Vector3(L[3*
m],L[3*m+1],L[3*m+2]),new THREE.Vector3(r,q,n),new THREE.Vector3(t,u,p),new THREE.Vector3(v,x,s)],null,j))}}var J=this,D=0,L=[],K=[],U,N,ia;THREE.Geometry.call(this);q=a;N=D;E=new Uint8Array(q,N,12);r="";for(u=0;12>u;u++)r+=String.fromCharCode(E[N+u]);b=z(q,N+12);z(q,N+13);z(q,N+14);z(q,N+15);c=z(q,N+16);d=z(q,N+17);e=z(q,N+18);j=z(q,N+19);m=x(q,N+20);p=x(q,N+20+4);n=x(q,N+20+8);s=x(q,N+20+12);r=x(q,N+20+16);l=x(q,N+20+20);t=x(q,N+20+24);u=x(q,N+20+28);E=x(q,N+20+32);A=x(q,N+20+36);q=x(q,N+20+40);
D+=b;N=3*c+j;ia=4*c+j;U=s*N;b=r*(N+3*d);c=l*(N+3*e);j=t*(N+3*d+3*e);N=u*ia;d=E*(ia+4*d);e=A*(ia+4*e);ia=D;var D=new Float32Array(a,D,3*m),sa,O,la,ja;for(sa=0;sa<m;sa++)O=D[3*sa],la=D[3*sa+1],ja=D[3*sa+2],J.vertices.push(new THREE.Vector3(O,la,ja));m=D=ia+3*m*Float32Array.BYTES_PER_ELEMENT;if(p){D=new Int8Array(a,D,3*p);for(ia=0;ia<p;ia++)sa=D[3*ia],O=D[3*ia+1],la=D[3*ia+2],L.push(sa/127,O/127,la/127)}D=m+3*p*Int8Array.BYTES_PER_ELEMENT;p=D+=F(3*p);if(n){m=new Float32Array(a,D,2*n);for(D=0;D<n;D++)ia=
m[2*D],sa=m[2*D+1],K.push(ia,sa)}n=D=p+2*n*Float32Array.BYTES_PER_ELEMENT;U=n+U+F(2*s);p=U+b+F(2*r);b=p+c+F(2*l);c=b+j+F(2*t);N=c+N+F(2*u);j=N+d+F(2*E);d=j+e+F(2*A);l&&(e=p+3*l*Uint32Array.BYTES_PER_ELEMENT,C(l,p,e+3*l*Uint32Array.BYTES_PER_ELEMENT),v(l,e));t&&(l=b+3*t*Uint32Array.BYTES_PER_ELEMENT,e=l+3*t*Uint32Array.BYTES_PER_ELEMENT,M(t,b,l,e+3*t*Uint32Array.BYTES_PER_ELEMENT),v(t,e));A&&(t=j+4*A*Uint32Array.BYTES_PER_ELEMENT,G(A,j,t+4*A*Uint32Array.BYTES_PER_ELEMENT),I(A,t));q&&(A=d+4*q*Uint32Array.BYTES_PER_ELEMENT,
t=A+4*q*Uint32Array.BYTES_PER_ELEMENT,B(q,d,A,t+4*q*Uint32Array.BYTES_PER_ELEMENT),I(q,t));s&&C(s,n,n+3*s*Uint32Array.BYTES_PER_ELEMENT);r&&(s=U+3*r*Uint32Array.BYTES_PER_ELEMENT,M(r,U,s,s+3*r*Uint32Array.BYTES_PER_ELEMENT));u&&G(u,c,c+4*u*Uint32Array.BYTES_PER_ELEMENT);E&&(r=N+4*E*Uint32Array.BYTES_PER_ELEMENT,B(E,N,r,r+4*E*Uint32Array.BYTES_PER_ELEMENT));this.computeCentroids();this.computeFaceNormals()};e.prototype=Object.create(THREE.Geometry.prototype);e=new e(c);c=this.initMaterials(d,c);this.needsTangents(c)&&
e.computeTangents();b(e,c)};THREE.ImageLoader=function(){THREE.EventTarget.call(this);this.crossOrigin=null};THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b){var c=this;void 0===b&&(b=new Image);b.addEventListener("load",function(){c.dispatchEvent({type:"load",content:b})},!1);b.addEventListener("error",function(){c.dispatchEvent({type:"error",message:"Couldn't load URL ["+a+"]"})},!1);c.crossOrigin&&(b.crossOrigin=c.crossOrigin);b.src=a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.withCredentials=this.withCredentials;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText);a.createModel(h,c,d)}else console.warn("THREE.JSONLoader: ["+b+"] seems to be unreachable or file there is empty");a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load ["+b+"] ["+f.status+"]");else f.readyState===
f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.send(null)};
THREE.JSONLoader.prototype.createModel=function(a,b,c){var d=new THREE.Geometry,e=void 0!==a.scale?1/a.scale:1,f,g,h,i,j,m,p,n,s,r,l,t,u,E,A,q=a.faces;r=a.vertices;var F=a.normals,z=a.colors,x=0;for(f=0;f<a.uvs.length;f++)a.uvs[f].length&&x++;for(f=0;f<x;f++)d.faceUvs[f]=[],d.faceVertexUvs[f]=[];i=0;for(j=r.length;i<j;)m=new THREE.Vector3,m.x=r[i++]*e,m.y=r[i++]*e,m.z=r[i++]*e,d.vertices.push(m);i=0;for(j=q.length;i<j;){r=q[i++];m=r&1;h=r&2;f=r&4;g=r&8;n=r&16;p=r&32;l=r&64;r&=128;m?(t=new THREE.Face4,
t.a=q[i++],t.b=q[i++],t.c=q[i++],t.d=q[i++],m=4):(t=new THREE.Face3,t.a=q[i++],t.b=q[i++],t.c=q[i++],m=3);h&&(h=q[i++],t.materialIndex=h);h=d.faces.length;if(f)for(f=0;f<x;f++)u=a.uvs[f],s=q[i++],A=u[2*s],s=u[2*s+1],d.faceUvs[f][h]=new THREE.Vector2(A,s);if(g)for(f=0;f<x;f++){u=a.uvs[f];E=[];for(g=0;g<m;g++)s=q[i++],A=u[2*s],s=u[2*s+1],E[g]=new THREE.Vector2(A,s);d.faceVertexUvs[f][h]=E}n&&(n=3*q[i++],g=new THREE.Vector3,g.x=F[n++],g.y=F[n++],g.z=F[n],t.normal=g);if(p)for(f=0;f<m;f++)n=3*q[i++],g=
new THREE.Vector3,g.x=F[n++],g.y=F[n++],g.z=F[n],t.vertexNormals.push(g);l&&(p=q[i++],p=new THREE.Color(z[p]),t.color=p);if(r)for(f=0;f<m;f++)p=q[i++],p=new THREE.Color(z[p]),t.vertexColors.push(p);d.faces.push(t)}if(a.skinWeights){i=0;for(j=a.skinWeights.length;i<j;i+=2)q=a.skinWeights[i],F=a.skinWeights[i+1],d.skinWeights.push(new THREE.Vector4(q,F,0,0))}if(a.skinIndices){i=0;for(j=a.skinIndices.length;i<j;i+=2)q=a.skinIndices[i],F=a.skinIndices[i+1],d.skinIndices.push(new THREE.Vector4(q,F,0,0))}d.bones=
a.bones;d.animation=a.animation;if(void 0!==a.morphTargets){i=0;for(j=a.morphTargets.length;i<j;i++){d.morphTargets[i]={};d.morphTargets[i].name=a.morphTargets[i].name;d.morphTargets[i].vertices=[];z=d.morphTargets[i].vertices;x=a.morphTargets[i].vertices;q=0;for(F=x.length;q<F;q+=3)r=new THREE.Vector3,r.x=x[q]*e,r.y=x[q+1]*e,r.z=x[q+2]*e,z.push(r)}}if(void 0!==a.morphColors){i=0;for(j=a.morphColors.length;i<j;i++){d.morphColors[i]={};d.morphColors[i].name=a.morphColors[i].name;d.morphColors[i].colors=
[];F=d.morphColors[i].colors;z=a.morphColors[i].colors;e=0;for(q=z.length;e<q;e+=3)x=new THREE.Color(16755200),x.setRGB(z[e],z[e+1],z[e+2]),F.push(x)}}d.computeCentroids();d.computeFaceNormals();a=this.initMaterials(a.materials,c);this.needsTangents(a)&&d.computeTangents();b(d,a)};THREE.LoadingMonitor=function(){THREE.EventTarget.call(this);var a=this,b=0,c=0,d=function(){b++;a.dispatchEvent({type:"progress",loaded:b,total:c});b===c&&a.dispatchEvent({type:"load"})};this.add=function(a){c++;a.addEventListener("load",d,!1)}};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){};this.geometryHandlerMap={};this.hierarchyHandlerMap={};this.addGeometryHandler("ascii",THREE.JSONLoader);this.addGeometryHandler("binary",THREE.BinaryLoader)};THREE.SceneLoader.prototype.constructor=THREE.SceneLoader;
THREE.SceneLoader.prototype.load=function(a,b){var c=this,d=new XMLHttpRequest;d.onreadystatechange=function(){if(4===d.readyState)if(200===d.status||0===d.status){var e=JSON.parse(d.responseText);c.parse(e,b,a)}else console.error("THREE.SceneLoader: Couldn't load ["+a+"] ["+d.status+"]")};d.open("GET",a,!0);d.send(null)};THREE.SceneLoader.prototype.addGeometryHandler=function(a,b){this.geometryHandlerMap[a]={loaderClass:b}};
THREE.SceneLoader.prototype.addHierarchyHandler=function(a,b){this.hierarchyHandlerMap[a]={loaderClass:b}};
THREE.SceneLoader.prototype.parse=function(a,b,c){function d(a,b){return"relativeToHTML"==b?a:p+"/"+a}function e(){f(v.scene,C.objects)}function f(a,b){var c,e,g,i,j,p;for(p in b)if(void 0===v.objects[p]){var l=b[p],q=null;if(l.type&&l.type in m.hierarchyHandlerMap&&void 0===l.loading){c={type:1,url:1,material:1,position:1,rotation:1,scale:1,visible:1,children:1,properties:1,skin:1,morph:1,mirroredLoop:1,duration:1};e={};for(var t in l)t in c||(e[t]=l[t]);s=v.materials[l.material];l.loading=!0;c=
m.hierarchyHandlerMap[l.type].loaderObject;c.addEventListener?(c.addEventListener("load",h(p,a,s,l)),c.load(d(l.url,C.urlBaseType))):c.options?c.load(d(l.url,C.urlBaseType),h(p,a,s,l)):c.load(d(l.url,C.urlBaseType),h(p,a,s,l),e)}else if(void 0!==l.geometry){if(n=v.geometries[l.geometry]){q=!1;s=v.materials[l.material];q=s instanceof THREE.ShaderMaterial;e=l.position;g=l.rotation;i=l.scale;c=l.matrix;j=0;l.material||(s=new THREE.MeshFaceMaterial(v.face_materials[l.geometry]));s instanceof THREE.MeshFaceMaterial&&
0===s.materials.length&&(s=new THREE.MeshFaceMaterial(v.face_materials[l.geometry]));if(s instanceof THREE.MeshFaceMaterial)for(var x=0;x<s.materials.length;x++)q=q||s.materials[x]instanceof THREE.ShaderMaterial;q&&n.computeTangents();l.skin?q=new THREE.SkinnedMesh(n,s):l.morph?(q=new THREE.MorphAnimMesh(n,s),void 0!==l.duration&&(q.duration=l.duration),void 0!==l.time&&(q.time=l.time),void 0!==l.mirroredLoop&&(q.mirroredLoop=l.mirroredLoop),s.morphNormals&&n.computeMorphNormals()):q=new THREE.Mesh(n,
s);q.name=p;c?(q.matrixAutoUpdate=!1,q.matrix.set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15])):(q.position.set(e[0],e[1],e[2]),j?(q.quaternion.set(j[0],j[1],j[2],j[3]),q.useQuaternion=!0):q.rotation.set(g[0],g[1],g[2]),q.scale.set(i[0],i[1],i[2]));q.visible=l.visible;q.castShadow=l.castShadow;q.receiveShadow=l.receiveShadow;a.add(q);v.objects[p]=q}}else"DirectionalLight"===l.type||"PointLight"===l.type||"AmbientLight"===l.type?(E=void 0!==l.color?l.color:
16777215,A=void 0!==l.intensity?l.intensity:1,"DirectionalLight"===l.type?(e=l.direction,u=new THREE.DirectionalLight(E,A),u.position.set(e[0],e[1],e[2]),l.target&&(I.push({object:u,targetName:l.target}),u.target=null)):"PointLight"===l.type?(e=l.position,c=l.distance,u=new THREE.PointLight(E,A,c),u.position.set(e[0],e[1],e[2])):"AmbientLight"===l.type&&(u=new THREE.AmbientLight(E)),a.add(u),u.name=p,v.lights[p]=u,v.objects[p]=u):"PerspectiveCamera"===l.type||"OrthographicCamera"===l.type?("PerspectiveCamera"===
l.type?r=new THREE.PerspectiveCamera(l.fov,l.aspect,l.near,l.far):"OrthographicCamera"===l.type&&(r=new THREE.OrthographicCamera(l.left,l.right,l.top,l.bottom,l.near,l.far)),e=l.position,r.position.set(e[0],e[1],e[2]),a.add(r),r.name=p,v.cameras[p]=r,v.objects[p]=r):(e=l.position,g=l.rotation,i=l.scale,j=0,q=new THREE.Object3D,q.name=p,q.position.set(e[0],e[1],e[2]),j?(q.quaternion.set(j[0],j[1],j[2],j[3]),q.useQuaternion=!0):q.rotation.set(g[0],g[1],g[2]),q.scale.set(i[0],i[1],i[2]),q.visible=void 0!==
l.visible?l.visible:!1,a.add(q),v.objects[p]=q,v.empties[p]=q);if(q){if(void 0!==l.properties)for(var z in l.properties)q.properties[z]=l.properties[z];void 0!==l.children&&f(q,l.children)}}}function g(a){return function(b,c){v.geometries[a]=b;v.face_materials[a]=c;e();q-=1;m.onLoadComplete();j()}}function h(a,b,c,d){return function(f){var f=f.content?f.content:f.dae?f.scene:f,g=d.position,h=d.rotation,i=d.quaternion,n=d.scale;f.position.set(g[0],g[1],g[2]);i?(f.quaternion.set(i[0],i[1],i[2],i[3]),
f.useQuaternion=!0):f.rotation.set(h[0],h[1],h[2]);f.scale.set(n[0],n[1],n[2]);c&&f.traverse(function(a){a.material=c});b.add(f);v.objects[a]=f;e();q-=1;m.onLoadComplete();j()}}function i(a){return function(b,c){v.geometries[a]=b;v.face_materials[a]=c}}function j(){m.callbackProgress({totalModels:z,totalTextures:x,loadedModels:z-q,loadedTextures:x-F},v);m.onLoadProgress();if(0===q&&0===F){for(var a=0;a<I.length;a++){var c=I[a],d=v.objects[c.targetName];d?c.object.target=d:(c.object.target=new THREE.Object3D,
v.scene.add(c.object.target));c.object.target.properties.targetInverse=c.object}b(v)}}var m=this,p=THREE.Loader.prototype.extractUrlBase(c),n,s,r,l,t,u,E,A,q,F,z,x,v,I=[],C=a,G;for(G in this.geometryHandlerMap)a=this.geometryHandlerMap[G].loaderClass,this.geometryHandlerMap[G].loaderObject=new a;for(G in this.hierarchyHandlerMap)a=this.hierarchyHandlerMap[G].loaderClass,this.hierarchyHandlerMap[G].loaderObject=new a;F=q=0;v={scene:new THREE.Scene,geometries:{},face_materials:{},materials:{},textures:{},
objects:{},cameras:{},lights:{},fogs:{},empties:{}};if(C.transform&&(G=C.transform.position,a=C.transform.rotation,c=C.transform.scale,G&&v.scene.position.set(G[0],G[1],G[2]),a&&v.scene.rotation.set(a[0],a[1],a[2]),c&&v.scene.scale.set(c[0],c[1],c[2]),G||a||c))v.scene.updateMatrix(),v.scene.updateMatrixWorld();G=function(a){return function(){F-=a;j();m.onLoadComplete()}};for(var M in C.fogs)a=C.fogs[M],"linear"===a.type?l=new THREE.Fog(0,a.near,a.far):"exp2"===a.type&&(l=new THREE.FogExp2(0,a.density)),
a=a.color,l.color.setRGB(a[0],a[1],a[2]),v.fogs[M]=l;for(var B in C.geometries)l=C.geometries[B],l.type in this.geometryHandlerMap&&(q+=1,m.onLoadStart());for(var J in C.objects)l=C.objects[J],l.type&&l.type in this.hierarchyHandlerMap&&(q+=1,m.onLoadStart());z=q;for(B in C.geometries)if(l=C.geometries[B],"cube"===l.type)n=new THREE.CubeGeometry(l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments),v.geometries[B]=n;else if("plane"===l.type)n=new THREE.PlaneGeometry(l.width,l.height,
l.widthSegments,l.heightSegments),v.geometries[B]=n;else if("sphere"===l.type)n=new THREE.SphereGeometry(l.radius,l.widthSegments,l.heightSegments),v.geometries[B]=n;else if("cylinder"===l.type)n=new THREE.CylinderGeometry(l.topRad,l.botRad,l.height,l.radSegs,l.heightSegs),v.geometries[B]=n;else if("torus"===l.type)n=new THREE.TorusGeometry(l.radius,l.tube,l.segmentsR,l.segmentsT),v.geometries[B]=n;else if("icosahedron"===l.type)n=new THREE.IcosahedronGeometry(l.radius,l.subdivisions),v.geometries[B]=
n;else if(l.type in this.geometryHandlerMap){J={};for(t in l)"type"!==t&&"url"!==t&&(J[t]=l[t]);this.geometryHandlerMap[l.type].loaderObject.load(d(l.url,C.urlBaseType),g(B),J)}else"embedded"===l.type&&(J=C.embeds[l.id],J.metadata=C.metadata,J&&this.geometryHandlerMap.ascii.loaderObject.createModel(J,i(B),""));for(var D in C.textures)if(B=C.textures[D],B.url instanceof Array){F+=B.url.length;for(t=0;t<B.url.length;t++)m.onLoadStart()}else F+=1,m.onLoadStart();x=F;for(D in C.textures){B=C.textures[D];
void 0!==B.mapping&&void 0!==THREE[B.mapping]&&(B.mapping=new THREE[B.mapping]);if(B.url instanceof Array){J=B.url.length;l=[];for(t=0;t<J;t++)l[t]=d(B.url[t],C.urlBaseType);t=(t=l[0].endsWith(".dds"))?THREE.ImageUtils.loadCompressedTextureCube(l,B.mapping,G(J)):THREE.ImageUtils.loadTextureCube(l,B.mapping,G(J))}else t=B.url.toLowerCase().endsWith(".dds"),J=d(B.url,C.urlBaseType),l=G(1),t=t?THREE.ImageUtils.loadCompressedTexture(J,B.mapping,l):THREE.ImageUtils.loadTexture(J,B.mapping,l),void 0!==
THREE[B.minFilter]&&(t.minFilter=THREE[B.minFilter]),void 0!==THREE[B.magFilter]&&(t.magFilter=THREE[B.magFilter]),B.anisotropy&&(t.anisotropy=B.anisotropy),B.repeat&&(t.repeat.set(B.repeat[0],B.repeat[1]),1!==B.repeat[0]&&(t.wrapS=THREE.RepeatWrapping),1!==B.repeat[1]&&(t.wrapT=THREE.RepeatWrapping)),B.offset&&t.offset.set(B.offset[0],B.offset[1]),B.wrap&&(J={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==J[B.wrap[0]]&&(t.wrapS=J[B.wrap[0]]),void 0!==J[B.wrap[1]]&&(t.wrapT=
J[B.wrap[1]]));v.textures[D]=t}var L,K;for(L in C.materials){D=C.materials[L];for(K in D.parameters)"envMap"===K||"map"===K||"lightMap"===K||"bumpMap"===K?D.parameters[K]=v.textures[D.parameters[K]]:"shading"===K?D.parameters[K]="flat"===D.parameters[K]?THREE.FlatShading:THREE.SmoothShading:"side"===K?D.parameters[K]="double"==D.parameters[K]?THREE.DoubleSide:"back"==D.parameters[K]?THREE.BackSide:THREE.FrontSide:"blending"===K?D.parameters[K]=D.parameters[K]in THREE?THREE[D.parameters[K]]:THREE.NormalBlending:
"combine"===K?D.parameters[K]="MixOperation"==D.parameters[K]?THREE.MixOperation:THREE.MultiplyOperation:"vertexColors"===K?"face"==D.parameters[K]?D.parameters[K]=THREE.FaceColors:D.parameters[K]&&(D.parameters[K]=THREE.VertexColors):"wrapRGB"===K&&(G=D.parameters[K],D.parameters[K]=new THREE.Vector3(G[0],G[1],G[2]));void 0!==D.parameters.opacity&&1>D.parameters.opacity&&(D.parameters.transparent=!0);D.parameters.normalMap?(G=THREE.ShaderUtils.lib.normal,B=THREE.UniformsUtils.clone(G.uniforms),t=
D.parameters.color,J=D.parameters.specular,l=D.parameters.ambient,M=D.parameters.shininess,B.tNormal.value=v.textures[D.parameters.normalMap],D.parameters.normalScale&&B.uNormalScale.value.set(D.parameters.normalScale[0],D.parameters.normalScale[1]),D.parameters.map&&(B.tDiffuse.value=D.parameters.map,B.enableDiffuse.value=!0),D.parameters.envMap&&(B.tCube.value=D.parameters.envMap,B.enableReflection.value=!0,B.uReflectivity.value=D.parameters.reflectivity),D.parameters.lightMap&&(B.tAO.value=D.parameters.lightMap,
B.enableAO.value=!0),D.parameters.specularMap&&(B.tSpecular.value=v.textures[D.parameters.specularMap],B.enableSpecular.value=!0),D.parameters.displacementMap&&(B.tDisplacement.value=v.textures[D.parameters.displacementMap],B.enableDisplacement.value=!0,B.uDisplacementBias.value=D.parameters.displacementBias,B.uDisplacementScale.value=D.parameters.displacementScale),B.uDiffuseColor.value.setHex(t),B.uSpecularColor.value.setHex(J),B.uAmbientColor.value.setHex(l),B.uShininess.value=M,D.parameters.opacity&&
(B.uOpacity.value=D.parameters.opacity),s=new THREE.ShaderMaterial({fragmentShader:G.fragmentShader,vertexShader:G.vertexShader,uniforms:B,lights:!0,fog:!0})):s=new THREE[D.type](D.parameters);v.materials[L]=s}for(L in C.materials)if(D=C.materials[L],D.parameters.materials){K=[];for(t=0;t<D.parameters.materials.length;t++)K.push(v.materials[D.parameters.materials[t]]);v.materials[L].materials=K}e();v.cameras&&C.defaults.camera&&(v.currentCamera=v.cameras[C.defaults.camera]);v.fogs&&C.defaults.fog&&
(v.scene.fog=v.fogs[C.defaults.fog]);a=C.defaults.bgcolor;v.bgColor=new THREE.Color;v.bgColor.setRGB(a[0],a[1],a[2]);v.bgColorAlpha=C.defaults.bgalpha;m.callbackSync(v);j()};THREE.TextureLoader=function(){THREE.EventTarget.call(this);this.crossOrigin=null};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a){var b=this,c=new Image;c.addEventListener("load",function(){var a=new THREE.Texture(c);a.needsUpdate=!0;b.dispatchEvent({type:"load",content:a})},!1);c.addEventListener("error",function(){b.dispatchEvent({type:"error",message:"Couldn't load URL ["+a+"]"})},!1);b.crossOrigin&&(c.crossOrigin=b.crossOrigin);c.src=a}};THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.overdraw=!1;this.needsUpdate=this.visible=!0;THREE.MaterialLibrary[this.id]=this};
THREE.Material.prototype.setValues=function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color&&c instanceof THREE.Color?d.copy(c):d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]=c}}};
THREE.Material.prototype.clone=function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;
a.visible=this.visible;return a};THREE.Material.prototype.deallocate=function(){delete THREE.MaterialLibrary[this.id]};THREE.MaterialIdCount=0;THREE.MaterialLibrary={};THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=
this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;
a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=!1;this.perPixel=!0;this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;
this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.perPixel=this.perPixel;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){return new THREE.MeshFaceMaterial(this.materials.slice(0))};THREE.ParticleBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.ParticleBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleBasicMaterial.prototype.clone=function(){var a=new THREE.ParticleBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(){};this.setValues(a)};THREE.ParticleCanvasMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ParticleCanvasMaterial.prototype.clone=function(){var a=new THREE.ParticleCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleDOMMaterial=function(a){this.element=a};THREE.ParticleDOMMaterial.prototype.clone=function(){return new THREE.ParticleDOMMaterial(this.element)};THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.vertexShader=this.fragmentShader="void main() {}";this.uniforms={};this.defines={};this.attributes=null;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=new THREE.Texture;this.useScreenCoordinates=!0;this.depthTest=!this.useScreenCoordinates;this.sizeAttenuation=!this.useScreenCoordinates;this.scaleByViewport=!this.sizeAttenuation;this.alignment=THREE.SpriteAlignment.center.clone();this.fog=!1;this.uvOffset=new THREE.Vector2(0,0);this.uvScale=new THREE.Vector2(1,1);this.setValues(a);a=a||{};void 0===a.depthTest&&(this.depthTest=!this.useScreenCoordinates);
void 0===a.sizeAttenuation&&(this.sizeAttenuation=!this.useScreenCoordinates);void 0===a.scaleByViewport&&(this.scaleByViewport=!this.sizeAttenuation)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.useScreenCoordinates=this.useScreenCoordinates;a.sizeAttenuation=this.sizeAttenuation;a.scaleByViewport=this.scaleByViewport;a.alignment.copy(this.alignment);a.uvOffset.copy(this.uvOffset);a.uvScale.copy(this.uvScale);a.fog=this.fog;return a};THREE.SpriteAlignment={};THREE.SpriteAlignment.topLeft=new THREE.Vector2(1,-1);
THREE.SpriteAlignment.topCenter=new THREE.Vector2(0,-1);THREE.SpriteAlignment.topRight=new THREE.Vector2(-1,-1);THREE.SpriteAlignment.centerLeft=new THREE.Vector2(1,0);THREE.SpriteAlignment.center=new THREE.Vector2(0,0);THREE.SpriteAlignment.centerRight=new THREE.Vector2(-1,0);THREE.SpriteAlignment.bottomLeft=new THREE.Vector2(1,1);THREE.SpriteAlignment.bottomCenter=new THREE.Vector2(0,1);THREE.SpriteAlignment.bottomRight=new THREE.Vector2(-1,1);THREE.Texture=function(a,b,c,d,e,f,g,h,i){this.id=THREE.TextureIdCount++;this.name="";this.image=a;this.mipmaps=[];this.mapping=void 0!==b?b:new THREE.UVMapping;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==i?i:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,
0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.needsUpdate=!1;this.onUpdate=null;THREE.TextureLibrary[this.id]=this};
THREE.Texture.prototype={constructor:THREE.Texture,clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=
this.unpackAlignment;return a},deallocate:function(){delete THREE.TextureLibrary[this.id]}};THREE.TextureIdCount=0;THREE.TextureLibrary={};THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,i,j,m){THREE.Texture.call(this,null,f,g,h,i,j,d,e,m);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,i,j,m){THREE.Texture.call(this,null,f,g,h,i,j,d,e,m);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.Particle=function(a){THREE.Object3D.call(this);this.material=a};THREE.Particle.prototype=Object.create(THREE.Object3D.prototype);THREE.Particle.prototype.clone=function(a){void 0===a&&(a=new THREE.Particle(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.ParticleBasicMaterial({color:16777215*Math.random()});this.sortParticles=!1;this.geometry&&(null===this.geometry.boundingSphere&&this.geometry.computeBoundingSphere(),this.boundRadius=a.boundingSphere.radius);this.frustumCulled=!1};THREE.ParticleSystem.prototype=Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone=function(a){void 0===a&&(a=new THREE.ParticleSystem(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip;this.geometry&&(this.geometry.boundingSphere||this.geometry.computeBoundingSphere())};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random(),wireframe:!0});if(this.geometry&&(null===this.geometry.boundingSphere&&this.geometry.computeBoundingSphere(),this.boundRadius=a.boundingSphere.radius,this.geometry.morphTargets.length)){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var c=0;c<this.geometry.morphTargets.length;c++)this.morphTargetInfluences.push(0),
this.morphTargetDictionary[this.geometry.morphTargets[c].name]=c}};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.clone=function(a){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiply(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var d,e,f;if(this.geometry&&void 0!==this.geometry.bones){for(a=0;a<this.geometry.bones.length;a++)c=this.geometry.bones[a],d=c.pos,e=c.rotq,f=c.scl,b=this.addBone(),b.name=c.name,b.position.set(d[0],d[1],d[2]),b.quaternion.set(e[0],e[1],e[2],e[3]),b.useQuaternion=!0,void 0!==f?b.scale.set(f[0],f[1],f[2]):b.scale.set(1,1,1);for(a=
0;a<this.bones.length;a++)c=this.geometry.bones[a],b=this.bones[a],-1===c.parent?this.add(b):this.bones[c.parent].add(b);a=this.bones.length;this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<a?64:64<a?32:16<a?16:8,this.boneMatrices=new Float32Array(4*this.boneTextureWidth*this.boneTextureHeight),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,
this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*a);this.pose()}};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.addBone=function(a){void 0===a&&(a=new THREE.Bone(this));this.bones.push(a);return a};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1;for(var a=0,b=this.children.length;a<b;a++){var c=this.children[a];c instanceof THREE.Bone?c.update(this.identityMatrix,!1):c.updateMatrixWorld(!0)}if(void 0==this.boneInverses){this.boneInverses=[];a=0;for(b=this.bones.length;a<
b;a++)c=new THREE.Matrix4,c.getInverse(this.bones[a].skinMatrix),this.boneInverses.push(c)}a=0;for(b=this.bones.length;a<b;a++)THREE.SkinnedMesh.offsetMatrix.multiply(this.bones[a].skinMatrix,this.boneInverses[a]),THREE.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices,16*a);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)};
THREE.SkinnedMesh.prototype.pose=function(){this.updateMatrixWorld(!0);for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.SkinnedMesh.offsetMatrix=new THREE.Matrix4;THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};
THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=1E3*((c.end-c.start)/b),this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.Ribbon=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=b};THREE.Ribbon.prototype=Object.create(THREE.Object3D.prototype);THREE.Ribbon.prototype.clone=function(a){void 0===a&&(a=new THREE.Ribbon(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.LODs=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);for(var b=Math.abs(b),c=0;c<this.LODs.length&&!(b<this.LODs[c].visibleAtDistance);c++);this.LODs.splice(c,0,{visibleAtDistance:b,object3D:a});this.add(a)};
THREE.LOD.prototype.update=function(a){if(1<this.LODs.length){a.matrixWorldInverse.getInverse(a.matrixWorld);a=a.matrixWorldInverse;a=-(a.elements[2]*this.matrixWorld.elements[12]+a.elements[6]*this.matrixWorld.elements[13]+a.elements[10]*this.matrixWorld.elements[14]+a.elements[14]);this.LODs[0].object3D.visible=!0;for(var b=1;b<this.LODs.length;b++)if(a>=this.LODs[b].visibleAtDistance)this.LODs[b-1].object3D.visible=!1,this.LODs[b].object3D.visible=!0;else break;for(;b<this.LODs.length;b++)this.LODs[b].object3D.visible=
!1}};THREE.LOD.prototype.clone=function(){};THREE.Sprite=function(a){THREE.Object3D.call(this);this.material=void 0!==a?a:new THREE.SpriteMaterial;this.rotation3d=this.rotation;this.rotation=0};THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.updateMatrix=function(){this.matrix.setPosition(this.position);this.rotation3d.set(0,0,this.rotation);this.matrix.setRotationFromEuler(this.rotation3d);if(1!==this.scale.x||1!==this.scale.y)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,this.scale.y);this.matrixWorldNeedsUpdate=!0};THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.matrixAutoUpdate=!1;this.__objects=[];this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)&&-1===this.__objects.indexOf(a)){this.__objects.push(a);this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1)}else a instanceof THREE.Camera||(b=this.__objects.indexOf(a),-1!==b&&(this.__objects.splice(b,1),this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1)));for(b=0;b<a.children.length;b++)this.__removeObject(a.children[b])};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.CanvasRenderer=function(a){function b(a){E!==a&&(E=l.globalAlpha=a)}function c(a){A!==a&&(a===THREE.NormalBlending?l.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?l.globalCompositeOperation="lighter":a===THREE.SubtractiveBlending&&(l.globalCompositeOperation="darker"),A=a)}function d(a){q!==a&&(q=l.strokeStyle=a)}function e(a){F!==a&&(F=l.fillStyle=a)}console.log("THREE.CanvasRenderer",THREE.REVISION);var a=a||{},f=this,g,h,i,j=new THREE.Projector,m=void 0!==a.canvas?a.canvas:
document.createElement("canvas"),p,n,s,r,l=m.getContext("2d"),t=new THREE.Color(0),u=0,E=1,A=0,q=null,F=null,z=null,x=null,v=null,I,C,G,M,B=new THREE.RenderableVertex,J=new THREE.RenderableVertex,D,L,K,U,N,ia,sa,O,la,ja,Ma,Q,R=new THREE.Color,ba=new THREE.Color,ca=new THREE.Color,P=new THREE.Color,ka=new THREE.Color,V=new THREE.Color,da=new THREE.Color,Ca={},Va={},ua,Da,ea,Ha,gb,vb,qb,ub,Kb,Lb,tb=new THREE.Rectangle,Sa=new THREE.Rectangle,na=new THREE.Rectangle,xb=!1,Na=new THREE.Color,kb=new THREE.Color,
hb=new THREE.Color,Ea=new THREE.Vector3,ab,eb,mc,ib,Eb,Ra,a=16;ab=document.createElement("canvas");ab.width=ab.height=2;eb=ab.getContext("2d");eb.fillStyle="rgba(0,0,0,1)";eb.fillRect(0,0,2,2);mc=eb.getImageData(0,0,2,2);ib=mc.data;Eb=document.createElement("canvas");Eb.width=Eb.height=a;Ra=Eb.getContext("2d");Ra.translate(-a/2,-a/2);Ra.scale(a,a);a--;this.domElement=m;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.setSize=function(a,b){p=a;n=b;s=
Math.floor(p/2);r=Math.floor(n/2);m.width=p;m.height=n;tb.set(-s,-r,s,r);Sa.set(-s,-r,s,r);E=1;A=0;v=x=z=F=q=null};this.setClearColor=function(a,b){t.copy(a);u=void 0!==b?b:1;Sa.set(-s,-r,s,r)};this.setClearColorHex=function(a,b){t.setHex(a);u=void 0!==b?b:1;Sa.set(-s,-r,s,r)};this.getMaxAnisotropy=function(){return 0};this.clear=function(){l.setTransform(1,0,0,-1,s,r);!1===Sa.isEmpty()&&(Sa.minSelf(tb),Sa.inflate(2),1>u&&l.clearRect(Math.floor(Sa.getX()),Math.floor(Sa.getY()),Math.floor(Sa.getWidth()),
Math.floor(Sa.getHeight())),0<u&&(c(THREE.NormalBlending),b(1),e("rgba("+Math.floor(255*t.r)+","+Math.floor(255*t.g)+","+Math.floor(255*t.b)+","+u+")"),l.fillRect(Math.floor(Sa.getX()),Math.floor(Sa.getY()),Math.floor(Sa.getWidth()),Math.floor(Sa.getHeight()))),Sa.empty())};this.render=function(a,m){function k(a,b,c){for(var d=0,e=i.length;d<e;d++){var f=i[d],g=f.color;if(f instanceof THREE.DirectionalLight){var h=f.matrixWorld.getPosition().normalize(),k=b.dot(h);0>=k||(k*=f.intensity,c.r+=g.r*k,
c.g+=g.g*k,c.b+=g.b*k)}else f instanceof THREE.PointLight&&(h=f.matrixWorld.getPosition(),k=b.dot(Ea.sub(h,a).normalize()),0>=k||(k*=0==f.distance?1:1-Math.min(a.distanceTo(h)/f.distance,1),0!=k&&(k*=f.intensity,c.r+=g.r*k,c.g+=g.g*k,c.b+=g.b*k)))}}function n(a,d,e,g,h,i,j,l){f.info.render.vertices+=3;f.info.render.faces++;b(l.opacity);c(l.blending);D=a.positionScreen.x;L=a.positionScreen.y;K=d.positionScreen.x;U=d.positionScreen.y;N=e.positionScreen.x;ia=e.positionScreen.y;p(D,L,K,U,N,ia);(l instanceof
THREE.MeshLambertMaterial||l instanceof THREE.MeshPhongMaterial)&&null===l.map&&null===l.map?(V.copy(l.color),da.copy(l.emissive),l.vertexColors===THREE.FaceColors&&(V.r*=j.color.r,V.g*=j.color.g,V.b*=j.color.b),!0===xb?!1===l.wireframe&&l.shading==THREE.SmoothShading&&3==j.vertexNormalsLength?(ba.r=ca.r=P.r=Na.r,ba.g=ca.g=P.g=Na.g,ba.b=ca.b=P.b=Na.b,k(j.v1.positionWorld,j.vertexNormalsWorld[0],ba),k(j.v2.positionWorld,j.vertexNormalsWorld[1],ca),k(j.v3.positionWorld,j.vertexNormalsWorld[2],P),ba.r=
ba.r*V.r+da.r,ba.g=ba.g*V.g+da.g,ba.b=ba.b*V.b+da.b,ca.r=ca.r*V.r+da.r,ca.g=ca.g*V.g+da.g,ca.b=ca.b*V.b+da.b,P.r=P.r*V.r+da.r,P.g=P.g*V.g+da.g,P.b=P.b*V.b+da.b,ka.r=0.5*(ca.r+P.r),ka.g=0.5*(ca.g+P.g),ka.b=0.5*(ca.b+P.b),ea=F(ba,ca,P,ka),E(D,L,K,U,N,ia,0,0,1,0,0,1,ea)):(R.r=Na.r,R.g=Na.g,R.b=Na.b,k(j.centroidWorld,j.normalWorld,R),R.r=R.r*V.r+da.r,R.g=R.g*V.g+da.g,R.b=R.b*V.b+da.b,!0===l.wireframe?t(R,l.wireframeLinewidth,l.wireframeLinecap,l.wireframeLinejoin):u(R)):!0===l.wireframe?t(l.color,l.wireframeLinewidth,
l.wireframeLinecap,l.wireframeLinejoin):u(l.color)):l instanceof THREE.MeshBasicMaterial||l instanceof THREE.MeshLambertMaterial||l instanceof THREE.MeshPhongMaterial?null!==l.map?l.map.mapping instanceof THREE.UVMapping&&(Ha=j.uvs[0],A(D,L,K,U,N,ia,Ha[g].u,Ha[g].v,Ha[h].u,Ha[h].v,Ha[i].u,Ha[i].v,l.map)):null!==l.envMap?l.envMap.mapping instanceof THREE.SphericalReflectionMapping&&(a=m.matrixWorldInverse,Ea.copy(j.vertexNormalsWorld[g]),gb=0.5*(Ea.x*a.elements[0]+Ea.y*a.elements[4]+Ea.z*a.elements[8])+
0.5,vb=0.5*(Ea.x*a.elements[1]+Ea.y*a.elements[5]+Ea.z*a.elements[9])+0.5,Ea.copy(j.vertexNormalsWorld[h]),qb=0.5*(Ea.x*a.elements[0]+Ea.y*a.elements[4]+Ea.z*a.elements[8])+0.5,ub=0.5*(Ea.x*a.elements[1]+Ea.y*a.elements[5]+Ea.z*a.elements[9])+0.5,Ea.copy(j.vertexNormalsWorld[i]),Kb=0.5*(Ea.x*a.elements[0]+Ea.y*a.elements[4]+Ea.z*a.elements[8])+0.5,Lb=0.5*(Ea.x*a.elements[1]+Ea.y*a.elements[5]+Ea.z*a.elements[9])+0.5,A(D,L,K,U,N,ia,gb,vb,qb,ub,Kb,Lb,l.envMap)):(R.copy(l.color),l.vertexColors===THREE.FaceColors&&
(R.r*=j.color.r,R.g*=j.color.g,R.b*=j.color.b),!0===l.wireframe?t(R,l.wireframeLinewidth,l.wireframeLinecap,l.wireframeLinejoin):u(R)):l instanceof THREE.MeshDepthMaterial?(ua=m.near,Da=m.far,ba.r=ba.g=ba.b=1-jb(a.positionScreen.z,ua,Da),ca.r=ca.g=ca.b=1-jb(d.positionScreen.z,ua,Da),P.r=P.g=P.b=1-jb(e.positionScreen.z,ua,Da),ka.r=0.5*(ca.r+P.r),ka.g=0.5*(ca.g+P.g),ka.b=0.5*(ca.b+P.b),ea=F(ba,ca,P,ka),E(D,L,K,U,N,ia,0,0,1,0,0,1,ea)):l instanceof THREE.MeshNormalMaterial&&(R.r=zc(j.normalWorld.x),R.g=
zc(j.normalWorld.y),R.b=zc(j.normalWorld.z),!0===l.wireframe?t(R,l.wireframeLinewidth,l.wireframeLinecap,l.wireframeLinejoin):u(R))}function p(a,b,c,d,e,f){l.beginPath();l.moveTo(a,b);l.lineTo(c,d);l.lineTo(e,f);l.closePath()}function q(a,b,c,d,e,f,g,h){l.beginPath();l.moveTo(a,b);l.lineTo(c,d);l.lineTo(e,f);l.lineTo(g,h);l.closePath()}function t(a,b,c,e){z!==b&&(z=l.lineWidth=b);x!==c&&(x=l.lineCap=c);v!==e&&(v=l.lineJoin=e);d(a.getStyle());l.stroke();na.inflate(2*b)}function u(a){e(a.getStyle());
l.fill()}function A(a,b,c,d,f,g,h,k,i,j,m,jb,n){if(!(n instanceof THREE.DataTexture||void 0===n.image||0==n.image.width)){if(!0===n.needsUpdate){var p=n.wrapS==THREE.RepeatWrapping,lb=n.wrapT==THREE.RepeatWrapping;Ca[n.id]=l.createPattern(n.image,!0===p&&!0===lb?"repeat":!0===p&&!1===lb?"repeat-x":!1===p&&!0===lb?"repeat-y":"no-repeat");n.needsUpdate=!1}void 0===Ca[n.id]?e("rgba(0,0,0,1)"):e(Ca[n.id]);var p=n.offset.x/n.repeat.x,lb=n.offset.y/n.repeat.y,s=n.image.width*n.repeat.x,r=n.image.height*
n.repeat.y,h=(h+p)*s,k=(1-k+lb)*r,c=c-a,d=d-b,f=f-a,g=g-b,i=(i+p)*s-h,j=(1-j+lb)*r-k,m=(m+p)*s-h,jb=(1-jb+lb)*r-k,p=i*jb-m*j;0===p?(void 0===Va[n.id]&&(b=document.createElement("canvas"),b.width=n.image.width,b.height=n.image.height,b=b.getContext("2d"),b.drawImage(n.image,0,0),Va[n.id]=b.getImageData(0,0,n.image.width,n.image.height).data),b=Va[n.id],h=4*(Math.floor(h)+Math.floor(k)*n.image.width),R.setRGB(b[h]/255,b[h+1]/255,b[h+2]/255),u(R)):(p=1/p,n=(jb*c-j*f)*p,j=(jb*d-j*g)*p,c=(i*f-m*c)*p,d=
(i*g-m*d)*p,a=a-n*h-c*k,h=b-j*h-d*k,l.save(),l.transform(n,j,c,d,a,h),l.fill(),l.restore())}}function E(a,b,c,d,e,f,g,h,k,i,j,m,jb){var n,p;n=jb.width-1;p=jb.height-1;g*=n;h*=p;c-=a;d-=b;e-=a;f-=b;k=k*n-g;i=i*p-h;j=j*n-g;m=m*p-h;p=1/(k*m-j*i);n=(m*c-i*e)*p;i=(m*d-i*f)*p;c=(k*e-j*c)*p;d=(k*f-j*d)*p;a=a-n*g-c*h;b=b-i*g-d*h;l.save();l.transform(n,i,c,d,a,b);l.clip();l.drawImage(jb,0,0);l.restore()}function F(a,b,c,d){ib[0]=255*a.r|0;ib[1]=255*a.g|0;ib[2]=255*a.b|0;ib[4]=255*b.r|0;ib[5]=255*b.g|0;ib[6]=
255*b.b|0;ib[8]=255*c.r|0;ib[9]=255*c.g|0;ib[10]=255*c.b|0;ib[12]=255*d.r|0;ib[13]=255*d.g|0;ib[14]=255*d.b|0;eb.putImageData(mc,0,0);Ra.drawImage(ab,0,0);return Eb}function jb(a,b,c){a=(a-b)/(c-b);return a*a*(3-2*a)}function zc(a){a=0.5*(a+1);return 0>a?0:1<a?1:a}function lb(a,b){var c=b.x-a.x,d=b.y-a.y,e=c*c+d*d;0!==e&&(e=1/Math.sqrt(e),c*=e,d*=e,b.x+=c,b.y+=d,a.x-=c,a.y-=d)}if(!1===m instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{var nc,Uc,oa,$;!0===this.autoClear?this.clear():l.setTransform(1,0,0,-1,s,r);f.info.render.vertices=0;f.info.render.faces=0;g=j.projectScene(a,m,this.sortObjects,this.sortElements);h=g.elements;i=g.lights;xb=0<i.length;if(!0===xb){Na.setRGB(0,0,0);kb.setRGB(0,0,0);hb.setRGB(0,0,0);nc=0;for(Uc=i.length;nc<Uc;nc++){$=i[nc];var pa=$.color;$ instanceof THREE.AmbientLight?(Na.r+=pa.r,Na.g+=pa.g,Na.b+=pa.b):$ instanceof THREE.DirectionalLight?(kb.r+=pa.r,kb.g+=pa.g,kb.b+=pa.b):$ instanceof THREE.PointLight&&
(hb.r+=pa.r,hb.g+=pa.g,hb.b+=pa.b)}}nc=0;for(Uc=h.length;nc<Uc;nc++)if(oa=h[nc],$=oa.material,!(void 0===$||!1===$.visible)){na.empty();if(oa instanceof THREE.RenderableParticle){I=oa;I.x*=s;I.y*=r;var pa=I,db=oa;b($.opacity);c($.blending);var Gb=void 0,Hb=void 0,yb=void 0,zb=void 0,Ac=oa=void 0,md=void 0;$ instanceof THREE.ParticleBasicMaterial?null===$.map?(yb=db.object.scale.x,zb=db.object.scale.y,yb*=db.scale.x*s,zb*=db.scale.y*r,na.set(pa.x-yb,pa.y-zb,pa.x+yb,pa.y+zb),!1!==tb.intersects(na)&&
(e($.color.getStyle()),l.save(),l.translate(pa.x,pa.y),l.rotate(-db.rotation),l.scale(yb,zb),l.fillRect(-1,-1,2,2),l.restore())):(oa=$.map.image,Ac=oa.width>>1,md=oa.height>>1,yb=db.scale.x*s,zb=db.scale.y*r,Gb=yb*Ac,Hb=zb*md,na.set(pa.x-Gb,pa.y-Hb,pa.x+Gb,pa.y+Hb),!1!==tb.intersects(na)&&(l.save(),l.translate(pa.x,pa.y),l.rotate(-db.rotation),l.scale(yb,-zb),l.translate(-Ac,-md),l.drawImage(oa,0,0),l.restore())):$ instanceof THREE.ParticleCanvasMaterial&&(Gb=db.scale.x*s,Hb=db.scale.y*r,na.set(pa.x-
Gb,pa.y-Hb,pa.x+Gb,pa.y+Hb),!1!==tb.intersects(na)&&(d($.color.getStyle()),e($.color.getStyle()),l.save(),l.translate(pa.x,pa.y),l.rotate(-db.rotation),l.scale(Gb,Hb),$.program(l),l.restore()))}else oa instanceof THREE.RenderableLine?(I=oa.v1,C=oa.v2,I.positionScreen.x*=s,I.positionScreen.y*=r,C.positionScreen.x*=s,C.positionScreen.y*=r,na.addPoint(I.positionScreen.x,I.positionScreen.y),na.addPoint(C.positionScreen.x,C.positionScreen.y),!0===tb.intersects(na)&&(pa=I,db=C,b($.opacity),c($.blending),
l.beginPath(),l.moveTo(pa.positionScreen.x,pa.positionScreen.y),l.lineTo(db.positionScreen.x,db.positionScreen.y),$ instanceof THREE.LineBasicMaterial&&(pa=$.linewidth,z!==pa&&(z=l.lineWidth=pa),pa=$.linecap,x!==pa&&(x=l.lineCap=pa),pa=$.linejoin,v!==pa&&(v=l.lineJoin=pa),d($.color.getStyle()),l.stroke(),na.inflate(2*$.linewidth)))):oa instanceof THREE.RenderableFace3?(I=oa.v1,C=oa.v2,G=oa.v3,I.positionScreen.x*=s,I.positionScreen.y*=r,C.positionScreen.x*=s,C.positionScreen.y*=r,G.positionScreen.x*=
s,G.positionScreen.y*=r,!0===$.overdraw&&(lb(I.positionScreen,C.positionScreen),lb(C.positionScreen,G.positionScreen),lb(G.positionScreen,I.positionScreen)),na.add3Points(I.positionScreen.x,I.positionScreen.y,C.positionScreen.x,C.positionScreen.y,G.positionScreen.x,G.positionScreen.y),!0===tb.intersects(na)&&n(I,C,G,0,1,2,oa,$,a)):oa instanceof THREE.RenderableFace4&&(I=oa.v1,C=oa.v2,G=oa.v3,M=oa.v4,I.positionScreen.x*=s,I.positionScreen.y*=r,C.positionScreen.x*=s,C.positionScreen.y*=r,G.positionScreen.x*=
s,G.positionScreen.y*=r,M.positionScreen.x*=s,M.positionScreen.y*=r,B.positionScreen.copy(C.positionScreen),J.positionScreen.copy(M.positionScreen),!0===$.overdraw&&(lb(I.positionScreen,C.positionScreen),lb(C.positionScreen,M.positionScreen),lb(M.positionScreen,I.positionScreen),lb(G.positionScreen,B.positionScreen),lb(G.positionScreen,J.positionScreen)),na.addPoint(I.positionScreen.x,I.positionScreen.y),na.addPoint(C.positionScreen.x,C.positionScreen.y),na.addPoint(G.positionScreen.x,G.positionScreen.y),
na.addPoint(M.positionScreen.x,M.positionScreen.y),!0===tb.intersects(na)&&(pa=I,db=C,Gb=G,Hb=M,yb=B,zb=J,Ac=a,f.info.render.vertices+=4,f.info.render.faces++,b($.opacity),c($.blending),void 0!==$.map&&null!==$.map||void 0!==$.envMap&&null!==$.envMap?(n(pa,db,Hb,0,1,3,oa,$,Ac),n(yb,Gb,zb,1,2,3,oa,$,Ac)):(D=pa.positionScreen.x,L=pa.positionScreen.y,K=db.positionScreen.x,U=db.positionScreen.y,N=Gb.positionScreen.x,ia=Gb.positionScreen.y,sa=Hb.positionScreen.x,O=Hb.positionScreen.y,la=yb.positionScreen.x,
ja=yb.positionScreen.y,Ma=zb.positionScreen.x,Q=zb.positionScreen.y,$ instanceof THREE.MeshLambertMaterial||$ instanceof THREE.MeshPhongMaterial?(V.copy($.color),da.copy($.emissive),$.vertexColors===THREE.FaceColors&&(V.r*=oa.color.r,V.g*=oa.color.g,V.b*=oa.color.b),!0===xb?!1===$.wireframe&&$.shading==THREE.SmoothShading&&4==oa.vertexNormalsLength?(ba.r=ca.r=P.r=ka.r=Na.r,ba.g=ca.g=P.g=ka.g=Na.g,ba.b=ca.b=P.b=ka.b=Na.b,k(oa.v1.positionWorld,oa.vertexNormalsWorld[0],ba),k(oa.v2.positionWorld,oa.vertexNormalsWorld[1],
ca),k(oa.v4.positionWorld,oa.vertexNormalsWorld[3],P),k(oa.v3.positionWorld,oa.vertexNormalsWorld[2],ka),ba.r=ba.r*V.r+da.r,ba.g=ba.g*V.g+da.g,ba.b=ba.b*V.b+da.b,ca.r=ca.r*V.r+da.r,ca.g=ca.g*V.g+da.g,ca.b=ca.b*V.b+da.b,P.r=P.r*V.r+da.r,P.g=P.g*V.g+da.g,P.b=P.b*V.b+da.b,ka.r=ka.r*V.r+da.r,ka.g=ka.g*V.g+da.g,ka.b=ka.b*V.b+da.b,ea=F(ba,ca,P,ka),p(D,L,K,U,sa,O),E(D,L,K,U,sa,O,0,0,1,0,0,1,ea),p(la,ja,N,ia,Ma,Q),E(la,ja,N,ia,Ma,Q,1,0,1,1,0,1,ea)):(R.r=Na.r,R.g=Na.g,R.b=Na.b,k(oa.centroidWorld,oa.normalWorld,
R),R.r=R.r*V.r+da.r,R.g=R.g*V.g+da.g,R.b=R.b*V.b+da.b,q(D,L,K,U,N,ia,sa,O),!0===$.wireframe?t(R,$.wireframeLinewidth,$.wireframeLinecap,$.wireframeLinejoin):u(R)):(R.r=V.r+da.r,R.g=V.g+da.g,R.b=V.b+da.b,q(D,L,K,U,N,ia,sa,O),!0===$.wireframe?t(R,$.wireframeLinewidth,$.wireframeLinecap,$.wireframeLinejoin):u(R))):$ instanceof THREE.MeshBasicMaterial?(R.copy($.color),$.vertexColors===THREE.FaceColors&&(R.r*=oa.color.r,R.g*=oa.color.g,R.b*=oa.color.b),q(D,L,K,U,N,ia,sa,O),!0===$.wireframe?t(R,$.wireframeLinewidth,
$.wireframeLinecap,$.wireframeLinejoin):u(R)):$ instanceof THREE.MeshNormalMaterial?(R.r=zc(oa.normalWorld.x),R.g=zc(oa.normalWorld.y),R.b=zc(oa.normalWorld.z),q(D,L,K,U,N,ia,sa,O),!0===$.wireframe?t(R,$.wireframeLinewidth,$.wireframeLinecap,$.wireframeLinejoin):u(R)):$ instanceof THREE.MeshDepthMaterial&&(ua=m.near,Da=m.far,ba.r=ba.g=ba.b=1-jb(pa.positionScreen.z,ua,Da),ca.r=ca.g=ca.b=1-jb(db.positionScreen.z,ua,Da),P.r=P.g=P.b=1-jb(Hb.positionScreen.z,ua,Da),ka.r=ka.g=ka.b=1-jb(Gb.positionScreen.z,
ua,Da),ea=F(ba,ca,P,ka),p(D,L,K,U,sa,O),E(D,L,K,U,sa,O,0,0,1,0,0,1,ea),p(la,ja,N,ia,Ma,Q),E(la,ja,N,ia,Ma,Q,1,0,1,1,0,1,ea)))));Sa.addRectangle(na)}l.setTransform(1,0,0,1,0,0)}}};THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
envmap_pars_fragment:"#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",envmap_fragment:"#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
envmap_pars_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
envmap_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment:"#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex:"uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
lights_lambert_vertex:"vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
lights_phong_pars_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
lights_phong_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
lights_phong_pars_fragment:"uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
lights_phong_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -viewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, N_BONE_PIXEL_X );\nfloat y = floor( j / N_BONE_PIXEL_X );\nconst float dx = 1.0 / N_BONE_PIXEL_X;\nconst float dy = 1.0 / N_BONE_PIXEL_Y;\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
skinbase_vertex:"#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
default_vertex:"vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
skinnormal_vertex:"#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex:"vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment:"#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#ifdef SHADOWMAP_SOFT\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",alphatest_fragment:"#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment:"#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};
THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",
value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",
value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",
value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal:{uniforms:{opacity:{type:"f",
value:1}},vertexShader:"varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}",fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,
THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,"#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,
"#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,
THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,
THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,
"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,"vNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,
THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,
THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,
THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",
value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,
THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};THREE.WebGLRenderer=function(a){function b(a){if(a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)k.deleteBuffer(a.__webglCustomAttributesList[b].buffer)}function c(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?
g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=k.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}function d(a,b){var c=b.geometry,d=a.faces3,h=a.faces4,i=3*d.length+4*h.length,j=1*d.length+2*h.length,h=3*d.length+4*h.length,d=e(b,a),m=g(d),n=f(d),l=d.vertexColors?d.vertexColors:!1;a.__vertexArray=new Float32Array(3*i);n&&(a.__normalArray=new Float32Array(3*i));c.hasTangents&&(a.__tangentArray=new Float32Array(4*i));l&&
(a.__colorArray=new Float32Array(3*i));if(m){if(0<c.faceUvs.length||0<c.faceVertexUvs.length)a.__uvArray=new Float32Array(2*i);if(1<c.faceUvs.length||1<c.faceVertexUvs.length)a.__uv2Array=new Float32Array(2*i)}b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&(a.__skinIndexArray=new Float32Array(4*i),a.__skinWeightArray=new Float32Array(4*i));a.__faceArray=new Uint16Array(3*j);a.__lineArray=new Uint16Array(2*h);if(a.numMorphTargets){a.__morphTargetsArrays=[];c=0;for(m=a.numMorphTargets;c<
m;c++)a.__morphTargetsArrays.push(new Float32Array(3*i))}if(a.numMorphNormals){a.__morphNormalsArrays=[];c=0;for(m=a.numMorphNormals;c<m;c++)a.__morphNormalsArrays.push(new Float32Array(3*i))}a.__webglFaceCount=3*j;a.__webglLineCount=2*h;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var p in d.attributes){var j=d.attributes[p],c={},s;for(s in j)c[s]=j[s];if(!c.__webglInitialized||c.createUniqueBuffers)c.__webglInitialized=!0,h=1,"v2"===c.type?h=2:
"v3"===c.type?h=3:"v4"===c.type?h=4:"c"===c.type&&(h=3),c.size=h,c.array=new Float32Array(i*h),c.buffer=k.createBuffer(),c.buffer.belongsToAttribute=p,j.needsUpdate=!0,c.__original=j;a.__webglCustomAttributesList.push(c)}}a.__inittedArrays=!0}function e(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function f(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===
THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function g(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a instanceof THREE.ShaderMaterial?!0:!1}function h(a){var b,c,d;for(b in a.attributes)d="index"===b?k.ELEMENT_ARRAY_BUFFER:k.ARRAY_BUFFER,c=a.attributes[b],c.buffer=k.createBuffer(),k.bindBuffer(d,c.buffer),k.bufferData(d,c.array,k.STATIC_DRAW)}function i(a,b,c){var d=a.attributes,e=d.index,f=d.position,g=d.normal,h=d.uv,i=d.color,d=d.tangent;a.elementsNeedUpdate&&
void 0!==e&&(k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.buffer),k.bufferData(k.ELEMENT_ARRAY_BUFFER,e.array,b));a.verticesNeedUpdate&&void 0!==f&&(k.bindBuffer(k.ARRAY_BUFFER,f.buffer),k.bufferData(k.ARRAY_BUFFER,f.array,b));a.normalsNeedUpdate&&void 0!==g&&(k.bindBuffer(k.ARRAY_BUFFER,g.buffer),k.bufferData(k.ARRAY_BUFFER,g.array,b));a.uvsNeedUpdate&&void 0!==h&&(k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.bufferData(k.ARRAY_BUFFER,h.array,b));a.colorsNeedUpdate&&void 0!==i&&(k.bindBuffer(k.ARRAY_BUFFER,
i.buffer),k.bufferData(k.ARRAY_BUFFER,i.array,b));a.tangentsNeedUpdate&&void 0!==d&&(k.bindBuffer(k.ARRAY_BUFFER,d.buffer),k.bufferData(k.ARRAY_BUFFER,d.array,b));if(c)for(var j in a.attributes)delete a.attributes[j].array}function j(a){ab[a]||(k.enableVertexAttribArray(a),ab[a]=!0)}function m(){for(var a in ab)ab[a]&&(k.disableVertexAttribArray(a),ab[a]=!1)}function p(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}function n(a,b){return b[0]-a[0]}function s(a,b,c){if(a.length)for(var d=0,e=a.length;d<e;d++)da=
ca=null,ka=V=Da=ua=ub=qb=ea=-1,wb=!0,a[d].render(b,c,hb,Ea),da=ca=null,ka=V=Da=ua=ub=qb=ea=-1,wb=!0}function r(a,b,c,d,e,f,g,h){var k,i,j,m;b?(i=a.length-1,m=b=-1):(i=0,b=a.length,m=1);for(var n=i;n!==b;n+=m)if(k=a[n],k.render){i=k.object;j=k.buffer;if(h)k=h;else{k=k[c];if(!k)continue;g&&Q.setBlending(k.blending,k.blendEquation,k.blendSrc,k.blendDst);Q.setDepthTest(k.depthTest);Q.setDepthWrite(k.depthWrite);C(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits)}Q.setMaterialFaces(k);j instanceof
THREE.BufferGeometry?Q.renderBufferDirect(d,e,f,k,j,i):Q.renderBuffer(d,e,f,k,j,i)}}function l(a,b,c,d,e,f,g){for(var h,k,i=0,j=a.length;i<j;i++)if(h=a[i],k=h.object,k.visible){if(g)h=g;else{h=h[b];if(!h)continue;f&&Q.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);Q.setDepthTest(h.depthTest);Q.setDepthWrite(h.depthWrite);C(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits)}Q.renderImmediateObject(c,d,e,h,k)}}function t(a,b,c){a.push({buffer:b,object:c,opaque:null,transparent:null})}
function u(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function E(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function A(a,b){for(var c=a.length-1;0<=c;c--)a[c].object===b&&a.splice(c,1)}function q(a,b){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1)}function F(a,b,c,d,e){Va=0;d.needsUpdate&&(d.program&&Q.deallocateMaterial(d),Q.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=
new Float32Array(Q.maxMorphTargets));var f=!1,g=d.program,h=g.uniforms,i=d.uniforms;g!==ca&&(k.useProgram(g),ca=g,f=!0);d.id!==ka&&(ka=d.id,f=!0);if(f||a!==da)k.uniformMatrix4fv(h.projectionMatrix,!1,a.projectionMatrix.elements),a!==da&&(da=a);if(d.skinning)if(xc&&e.useVertexTexture){if(null!==h.boneTexture){var j=z();k.uniform1i(h.boneTexture,j);Q.setTexture(e.boneTexture,j)}}else null!==h.boneGlobalMatrices&&k.uniformMatrix4fv(h.boneGlobalMatrices,!1,e.boneMatrices);if(f){c&&d.fog&&(i.fogColor.value=
c.color,c instanceof THREE.Fog?(i.fogNear.value=c.near,i.fogFar.value=c.far):c instanceof THREE.FogExp2&&(i.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(wb){for(var m=0,n=0,l=0,p,s,r,q=Sc,t=q.directional.colors,u=q.directional.positions,x=q.point.colors,A=q.point.positions,D=q.point.distances,C=q.spot.colors,E=q.spot.positions,F=q.spot.distances,G=q.spot.directions,J=q.spot.anglesCos,R=q.spot.exponents,P=q.hemi.skyColors,
O=q.hemi.groundColors,M=q.hemi.positions,ba=0,V=0,N=0,U=0,ia=0,la=0,ja=0,Ca=0,S=s=0,c=S=S=0,f=b.length;c<f;c++)j=b[c],j.onlyShadow||(p=j.color,r=j.intensity,s=j.distance,j instanceof THREE.AmbientLight?j.visible&&(Q.gammaInput?(m+=p.r*p.r,n+=p.g*p.g,l+=p.b*p.b):(m+=p.r,n+=p.g,l+=p.b)):j instanceof THREE.DirectionalLight?(ia+=1,j.visible&&(s=3*ba,Q.gammaInput?v(t,s,p,r*r):I(t,s,p,r),Ra.copy(j.matrixWorld.getPosition()),Ra.subSelf(j.target.matrixWorld.getPosition()),Ra.normalize(),u[s]=Ra.x,u[s+1]=
Ra.y,u[s+2]=Ra.z,ba+=1)):j instanceof THREE.PointLight?(la+=1,j.visible&&(S=3*V,Q.gammaInput?v(x,S,p,r*r):I(x,S,p,r),r=j.matrixWorld.getPosition(),A[S]=r.x,A[S+1]=r.y,A[S+2]=r.z,D[V]=s,V+=1)):j instanceof THREE.SpotLight?(ja+=1,j.visible&&(S=3*N,Q.gammaInput?v(C,S,p,r*r):I(C,S,p,r),r=j.matrixWorld.getPosition(),E[S]=r.x,E[S+1]=r.y,E[S+2]=r.z,F[N]=s,Ra.copy(r),Ra.subSelf(j.target.matrixWorld.getPosition()),Ra.normalize(),G[S]=Ra.x,G[S+1]=Ra.y,G[S+2]=Ra.z,J[N]=Math.cos(j.angle),R[N]=j.exponent,N+=1)):
j instanceof THREE.HemisphereLight&&(Ca+=1,j.visible&&(p=j.color,s=j.groundColor,S=3*U,Q.gammaInput?(r*=r,v(P,S,p,r),v(O,S,s,r)):(I(P,S,p,r),I(O,S,s,r)),Ra.copy(j.matrixWorld.getPosition()),Ra.normalize(),M[S]=Ra.x,M[S+1]=Ra.y,M[S+2]=Ra.z,U+=1)));c=3*ba;for(f=Math.max(t.length,3*ia);c<f;c++)t[c]=0;c=3*ba;for(f=Math.max(u.length,3*ia);c<f;c++)u[c]=0;c=3*V;for(f=Math.max(x.length,3*la);c<f;c++)x[c]=0;c=3*V;for(f=Math.max(A.length,3*la);c<f;c++)A[c]=0;c=V;for(f=Math.max(D.length,la);c<f;c++)D[c]=0;c=
3*N;for(f=Math.max(C.length,3*ja);c<f;c++)C[c]=0;c=3*N;for(f=Math.max(E.length,3*ja);c<f;c++)E[c]=0;c=3*N;for(f=Math.max(G.length,3*ja);c<f;c++)G[c]=0;c=N;for(f=Math.max(J.length,ja);c<f;c++)J[c]=0;c=N;for(f=Math.max(R.length,ja);c<f;c++)R[c]=0;c=N;for(f=Math.max(F.length,ja);c<f;c++)F[c]=0;c=3*U;for(f=Math.max(P.length,3*Ca);c<f;c++)P[c]=0;c=3*U;for(f=Math.max(O.length,3*Ca);c<f;c++)O[c]=0;c=3*U;for(f=Math.max(M.length,3*Ca);c<f;c++)M[c]=0;q.directional.length=ba;q.point.length=V;q.spot.length=N;
q.hemi.length=U;q.ambient[0]=m;q.ambient[1]=n;q.ambient[2]=l;wb=!1}c=Sc;i.ambientLightColor.value=c.ambient;i.directionalLightColor.value=c.directional.colors;i.directionalLightDirection.value=c.directional.positions;i.pointLightColor.value=c.point.colors;i.pointLightPosition.value=c.point.positions;i.pointLightDistance.value=c.point.distances;i.spotLightColor.value=c.spot.colors;i.spotLightPosition.value=c.spot.positions;i.spotLightDistance.value=c.spot.distances;i.spotLightDirection.value=c.spot.directions;
i.spotLightAngleCos.value=c.spot.anglesCos;i.spotLightExponent.value=c.spot.exponents;i.hemisphereLightSkyColor.value=c.hemi.skyColors;i.hemisphereLightGroundColor.value=c.hemi.groundColors;i.hemisphereLightDirection.value=c.hemi.positions}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){i.opacity.value=d.opacity;Q.gammaInput?i.diffuse.value.copyGammaToLinear(d.color):i.diffuse.value=d.color;i.map.value=d.map;i.lightMap.value=d.lightMap;
i.specularMap.value=d.specularMap;d.bumpMap&&(i.bumpMap.value=d.bumpMap,i.bumpScale.value=d.bumpScale);d.normalMap&&(i.normalMap.value=d.normalMap,i.normalScale.value.copy(d.normalScale));var ea;d.map?ea=d.map:d.specularMap?ea=d.specularMap:d.normalMap?ea=d.normalMap:d.bumpMap&&(ea=d.bumpMap);void 0!==ea&&(c=ea.offset,ea=ea.repeat,i.offsetRepeat.value.set(c.x,c.y,ea.x,ea.y));i.envMap.value=d.envMap;i.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;i.reflectivity.value=d.reflectivity;
i.refractionRatio.value=d.refractionRatio;i.combine.value=d.combine;i.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity,i.dashSize.value=d.dashSize,i.totalSize.value=d.dashSize+d.gapSize,i.scale.value=d.scale):d instanceof THREE.ParticleBasicMaterial?(i.psColor.value=d.color,i.opacity.value=
d.opacity,i.size.value=d.size,i.scale.value=K.height/2,i.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(i.shininess.value=d.shininess,Q.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive),i.specular.value.copyGammaToLinear(d.specular)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive,i.specular.value=d.specular),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(Q.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),
i.emissive.value.copyGammaToLinear(d.emissive)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(i.mNear.value=a.near,i.mFar.value=a.far,i.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(i.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&i.shadowMatrix){c=ea=0;for(f=b.length;c<f;c++)if(j=b[c],j.castShadow&&(j instanceof THREE.SpotLight||j instanceof THREE.DirectionalLight&&!j.shadowCascade))i.shadowMap.value[ea]=
j.shadowMap,i.shadowMapSize.value[ea]=j.shadowMapSize,i.shadowMatrix.value[ea]=j.shadowMatrix,i.shadowDarkness.value[ea]=j.shadowDarkness,i.shadowBias.value[ea]=j.shadowBias,ea++}b=d.uniformsList;i=0;for(ea=b.length;i<ea;i++)if(f=g.uniforms[b[i][1]])if(c=b[i][0],m=c.type,j=c.value,"i"===m)k.uniform1i(f,j);else if("f"===m)k.uniform1f(f,j);else if("v2"===m)k.uniform2f(f,j.x,j.y);else if("v3"===m)k.uniform3f(f,j.x,j.y,j.z);else if("v4"===m)k.uniform4f(f,j.x,j.y,j.z,j.w);else if("c"===m)k.uniform3f(f,
j.r,j.g,j.b);else if("iv1"===m)k.uniform1iv(f,j);else if("iv"===m)k.uniform3iv(f,j);else if("fv1"===m)k.uniform1fv(f,j);else if("fv"===m)k.uniform3fv(f,j);else if("v2v"===m){void 0===c._array&&(c._array=new Float32Array(2*j.length));m=0;for(n=j.length;m<n;m++)l=2*m,c._array[l]=j[m].x,c._array[l+1]=j[m].y;k.uniform2fv(f,c._array)}else if("v3v"===m){void 0===c._array&&(c._array=new Float32Array(3*j.length));m=0;for(n=j.length;m<n;m++)l=3*m,c._array[l]=j[m].x,c._array[l+1]=j[m].y,c._array[l+2]=j[m].z;
k.uniform3fv(f,c._array)}else if("v4v"===m){void 0===c._array&&(c._array=new Float32Array(4*j.length));m=0;for(n=j.length;m<n;m++)l=4*m,c._array[l]=j[m].x,c._array[l+1]=j[m].y,c._array[l+2]=j[m].z,c._array[l+3]=j[m].w;k.uniform4fv(f,c._array)}else if("m4"===m)void 0===c._array&&(c._array=new Float32Array(16)),j.flattenToArray(c._array),k.uniformMatrix4fv(f,!1,c._array);else if("m4v"===m){void 0===c._array&&(c._array=new Float32Array(16*j.length));m=0;for(n=j.length;m<n;m++)j[m].flattenToArrayOffset(c._array,
16*m);k.uniformMatrix4fv(f,!1,c._array)}else if("t"===m){if(l=j,j=z(),k.uniform1i(f,j),l)if(l.image instanceof Array&&6===l.image.length){if(c=l,f=j,6===c.image.length)if(c.needsUpdate){c.image.__webglTextureCube||(c.image.__webglTextureCube=k.createTexture(),Q.info.memory.textures++);k.activeTexture(k.TEXTURE0+f);k.bindTexture(k.TEXTURE_CUBE_MAP,c.image.__webglTextureCube);k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,c.flipY);f=c instanceof THREE.CompressedTexture;j=[];for(m=0;6>m;m++)Q.autoScaleCubemaps&&
!f?(n=j,l=m,q=c.image[m],u=kd,q.width<=u&&q.height<=u||(x=Math.max(q.width,q.height),t=Math.floor(q.width*u/x),u=Math.floor(q.height*u/x),x=document.createElement("canvas"),x.width=t,x.height=u,x.getContext("2d").drawImage(q,0,0,q.width,q.height,0,0,t,u),q=x),n[l]=q):j[m]=c.image[m];m=j[0];n=0===(m.width&m.width-1)&&0===(m.height&m.height-1);l=L(c.format);q=L(c.type);B(k.TEXTURE_CUBE_MAP,c,n);for(m=0;6>m;m++)if(f){u=j[m].mipmaps;x=0;for(A=u.length;x<A;x++)t=u[x],k.compressedTexImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+
m,x,l,t.width,t.height,0,t.data)}else k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,l,l,q,j[m]);c.generateMipmaps&&n&&k.generateMipmap(k.TEXTURE_CUBE_MAP);c.needsUpdate=!1;if(c.onUpdate)c.onUpdate()}else k.activeTexture(k.TEXTURE0+f),k.bindTexture(k.TEXTURE_CUBE_MAP,c.image.__webglTextureCube)}else l instanceof THREE.WebGLRenderTargetCube?(c=l,k.activeTexture(k.TEXTURE0+j),k.bindTexture(k.TEXTURE_CUBE_MAP,c.__webglTexture)):Q.setTexture(l,j)}else if("tv"===m){void 0===c._array&&(c._array=[]);m=0;
for(n=c.value.length;m<n;m++)c._array[m]=z();k.uniform1iv(f,c._array);m=0;for(n=c.value.length;m<n;m++)l=c.value[m],j=c._array[m],l&&Q.setTexture(l,j)}if((d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==h.cameraPosition)b=a.matrixWorld.getPosition(),k.uniform3f(h.cameraPosition,b.x,b.y,b.z);(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==h.viewMatrix&&k.uniformMatrix4fv(h.viewMatrix,
!1,a.matrixWorldInverse.elements)}k.uniformMatrix4fv(h.modelViewMatrix,!1,e._modelViewMatrix.elements);h.normalMatrix&&k.uniformMatrix3fv(h.normalMatrix,!1,e._normalMatrix.elements);null!==h.modelMatrix&&k.uniformMatrix4fv(h.modelMatrix,!1,e.matrixWorld.elements);return g}function z(){var a=Va;a>=Gc&&console.warn("Trying to use "+a+" texture units while this GPU supports only "+Gc);Va+=1;return a}function x(a,b){a._modelViewMatrix.multiply(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getInverse(a._modelViewMatrix);
a._normalMatrix.transpose()}function v(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function I(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function C(a,b,c){Kb!==a&&(a?k.enable(k.POLYGON_OFFSET_FILL):k.disable(k.POLYGON_OFFSET_FILL),Kb=a);if(a&&(Lb!==b||tb!==c))k.polygonOffset(b,c),Lb=b,tb=c}function G(a){for(var a=a.split("\n"),b=0,c=a.length;b<c;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function M(a,b){var c;"fragment"===a?c=k.createShader(k.FRAGMENT_SHADER):"vertex"===a&&(c=k.createShader(k.VERTEX_SHADER));
k.shaderSource(c,b);k.compileShader(c);return!k.getShaderParameter(c,k.COMPILE_STATUS)?(console.error(k.getShaderInfoLog(c)),console.error(G(b)),null):c}function B(a,b,c){c?(k.texParameteri(a,k.TEXTURE_WRAP_S,L(b.wrapS)),k.texParameteri(a,k.TEXTURE_WRAP_T,L(b.wrapT)),k.texParameteri(a,k.TEXTURE_MAG_FILTER,L(b.magFilter)),k.texParameteri(a,k.TEXTURE_MIN_FILTER,L(b.minFilter))):(k.texParameteri(a,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE),k.texParameteri(a,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE),k.texParameteri(a,
k.TEXTURE_MAG_FILTER,D(b.magFilter)),k.texParameteri(a,k.TEXTURE_MIN_FILTER,D(b.minFilter)));if(Fb&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy))k.texParameterf(a,Fb.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Tc)),b.__oldAnisotropy=b.anisotropy}function J(a,b){k.bindRenderbuffer(k.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(k.renderbufferStorage(k.RENDERBUFFER,k.DEPTH_COMPONENT16,b.width,b.height),k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_ATTACHMENT,k.RENDERBUFFER,
a)):b.depthBuffer&&b.stencilBuffer?(k.renderbufferStorage(k.RENDERBUFFER,k.DEPTH_STENCIL,b.width,b.height),k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_STENCIL_ATTACHMENT,k.RENDERBUFFER,a)):k.renderbufferStorage(k.RENDERBUFFER,k.RGBA4,b.width,b.height)}function D(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?k.NEAREST:k.LINEAR}function L(a){if(a===THREE.RepeatWrapping)return k.REPEAT;if(a===THREE.ClampToEdgeWrapping)return k.CLAMP_TO_EDGE;
if(a===THREE.MirroredRepeatWrapping)return k.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return k.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return k.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return k.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return k.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return k.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return k.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return k.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return k.UNSIGNED_SHORT_4_4_4_4;
if(a===THREE.UnsignedShort5551Type)return k.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return k.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return k.BYTE;if(a===THREE.ShortType)return k.SHORT;if(a===THREE.UnsignedShortType)return k.UNSIGNED_SHORT;if(a===THREE.IntType)return k.INT;if(a===THREE.UnsignedIntType)return k.UNSIGNED_INT;if(a===THREE.FloatType)return k.FLOAT;if(a===THREE.AlphaFormat)return k.ALPHA;if(a===THREE.RGBFormat)return k.RGB;if(a===THREE.RGBAFormat)return k.RGBA;if(a===
THREE.LuminanceFormat)return k.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return k.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return k.FUNC_ADD;if(a===THREE.SubtractEquation)return k.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return k.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return k.ZERO;if(a===THREE.OneFactor)return k.ONE;if(a===THREE.SrcColorFactor)return k.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return k.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return k.SRC_ALPHA;if(a===
THREE.OneMinusSrcAlphaFactor)return k.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return k.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return k.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return k.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return k.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return k.SRC_ALPHA_SATURATE;if(void 0!==rb){if(a===THREE.RGB_S3TC_DXT1_Format)return rb.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return rb.COMPRESSED_RGBA_S3TC_DXT1_EXT;
if(a===THREE.RGBA_S3TC_DXT3_Format)return rb.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return rb.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);var a=a||{},K=void 0!==a.canvas?a.canvas:document.createElement("canvas"),U=void 0!==a.precision?a.precision:"highp",N=void 0!==a.alpha?a.alpha:!0,ia=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,sa=void 0!==a.antialias?a.antialias:!1,O=void 0!==a.stencil?a.stencil:!0,la=void 0!==a.preserveDrawingBuffer?
a.preserveDrawingBuffer:!1,ja=void 0!==a.clearColor?new THREE.Color(a.clearColor):new THREE.Color(0),Ma=void 0!==a.clearAlpha?a.clearAlpha:0;this.domElement=K;this.context=null;this.autoUpdateScene=this.autoUpdateObjects=this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.physicallyBasedShading=this.gammaOutput=this.gammaInput=!1;this.shadowMapSoft=this.shadowMapAutoUpdate=!0;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=
this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var Q=this,R=[],ba=0,ca=null,P=null,ka=-1,V=null,da=null,Ca=0,Va=0,ua=-1,Da=-1,ea=-1,Ha=-1,gb=-1,vb=-1,qb=-1,ub=-1,Kb=null,Lb=null,tb=null,Sa=null,na=0,xb=0,Na=0,kb=0,hb=0,Ea=0,ab={},eb=new THREE.Frustum,mc=new THREE.Matrix4,ib=new THREE.Matrix4,Eb=new THREE.Vector3,
Ra=new THREE.Vector3,wb=!0,Sc={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},k,Fb,rb;try{if(!(k=K.getContext("experimental-webgl",{alpha:N,premultipliedAlpha:ia,antialias:sa,stencil:O,preserveDrawingBuffer:la})))throw"Error creating WebGL context.";}catch(ld){console.error(ld)}a=k.getExtension("OES_texture_float");
N=k.getExtension("OES_standard_derivatives");Fb=k.getExtension("EXT_texture_filter_anisotropic")||k.getExtension("MOZ_EXT_texture_filter_anisotropic")||k.getExtension("WEBKIT_EXT_texture_filter_anisotropic");rb=k.getExtension("WEBGL_compressed_texture_s3tc")||k.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||k.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");a||console.log("THREE.WebGLRenderer: Float textures not supported.");N||console.log("THREE.WebGLRenderer: Standard derivatives not supported.");
Fb||console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");rb||console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");k.clearColor(0,0,0,1);k.clearDepth(1);k.clearStencil(0);k.enable(k.DEPTH_TEST);k.depthFunc(k.LEQUAL);k.frontFace(k.CCW);k.cullFace(k.BACK);k.enable(k.CULL_FACE);k.enable(k.BLEND);k.blendEquation(k.FUNC_ADD);k.blendFunc(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA);k.clearColor(ja.r,ja.g,ja.b,Ma);this.context=k;var Gc=k.getParameter(k.MAX_TEXTURE_IMAGE_UNITS),
N=k.getParameter(k.MAX_VERTEX_TEXTURE_IMAGE_UNITS);k.getParameter(k.MAX_TEXTURE_SIZE);var kd=k.getParameter(k.MAX_CUBE_MAP_TEXTURE_SIZE),Tc=Fb?k.getParameter(Fb.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,yc=0<N,xc=yc&&a;rb&&k.getParameter(k.COMPRESSED_TEXTURE_FORMATS);this.getContext=function(){return k};this.supportsVertexTextures=function(){return yc};this.getMaxAnisotropy=function(){return Tc};this.setSize=function(a,b){K.width=a;K.height=b;this.setViewport(0,0,K.width,K.height)};this.setViewport=function(a,
b,c,d){na=void 0!==a?a:0;xb=void 0!==b?b:0;Na=void 0!==c?c:K.width;kb=void 0!==d?d:K.height;k.viewport(na,xb,Na,kb)};this.setScissor=function(a,b,c,d){k.scissor(a,b,c,d)};this.enableScissorTest=function(a){a?k.enable(k.SCISSOR_TEST):k.disable(k.SCISSOR_TEST)};this.setClearColorHex=function(a,b){ja.setHex(a);Ma=b;k.clearColor(ja.r,ja.g,ja.b,Ma)};this.setClearColor=function(a,b){ja.copy(a);Ma=b;k.clearColor(ja.r,ja.g,ja.b,Ma)};this.getClearColor=function(){return ja};this.getClearAlpha=function(){return Ma};
this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=k.COLOR_BUFFER_BIT;if(void 0===b||b)d|=k.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=k.STENCIL_BUFFER_BIT;k.clear(d)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};this.deallocateObject=function(a){if(a.__webglInit)if(a.__webglInit=!1,delete a._modelViewMatrix,delete a._normalMatrix,
a instanceof THREE.Mesh)for(var c in a.geometry.geometryGroups){var d=a.geometry.geometryGroups[c];k.deleteBuffer(d.__webglVertexBuffer);k.deleteBuffer(d.__webglNormalBuffer);k.deleteBuffer(d.__webglTangentBuffer);k.deleteBuffer(d.__webglColorBuffer);k.deleteBuffer(d.__webglUVBuffer);k.deleteBuffer(d.__webglUV2Buffer);k.deleteBuffer(d.__webglSkinIndicesBuffer);k.deleteBuffer(d.__webglSkinWeightsBuffer);k.deleteBuffer(d.__webglFaceBuffer);k.deleteBuffer(d.__webglLineBuffer);var e=void 0,f=void 0;if(d.numMorphTargets){e=
0;for(f=d.numMorphTargets;e<f;e++)k.deleteBuffer(d.__webglMorphTargetsBuffers[e])}if(d.numMorphNormals){e=0;for(f=d.numMorphNormals;e<f;e++)k.deleteBuffer(d.__webglMorphNormalsBuffers[e])}b(d);Q.info.memory.geometries--}else a instanceof THREE.Ribbon?(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),k.deleteBuffer(a.__webglNormalBuffer),b(a),Q.info.memory.geometries--):a instanceof THREE.Line?(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),
k.deleteBuffer(a.__webglLineDistanceBuffer),b(a),Q.info.memory.geometries--):a instanceof THREE.ParticleSystem&&(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),b(a),Q.info.memory.geometries--)};this.deallocateTexture=function(a){if(a.image&&a.image.__webglTextureCube)k.deleteTexture(a.image.__webglTextureCube);else{if(!a.__webglInit)return;a.__webglInit=!1;k.deleteTexture(a.__webglTexture)}Q.info.memory.textures--};this.deallocateRenderTarget=function(a){if(a&&
a.__webglTexture)if(k.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)k.deleteFramebuffer(a.__webglFramebuffer[b]),k.deleteRenderbuffer(a.__webglRenderbuffer[b]);else k.deleteFramebuffer(a.__webglFramebuffer),k.deleteRenderbuffer(a.__webglRenderbuffer)};this.deallocateMaterial=function(a){var b=a.program;if(b){a.program=void 0;var c,d,e=!1,a=0;for(c=R.length;a<c;a++)if(d=R[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(e){e=[];a=0;for(c=
R.length;a<c;a++)d=R[a],d.program!==b&&e.push(d);R=e;k.deleteProgram(b);Q.info.memory.programs--}}};this.updateShadowMap=function(a,b){ca=null;ka=V=ub=qb=ea=-1;wb=!0;Da=ua=-1;this.shadowMapPlugin.update(a,b)};this.renderBufferImmediate=function(a,b,c){a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=k.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=k.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=k.createBuffer());a.hasColors&&!a.__webglColorBuffer&&
(a.__webglColorBuffer=k.createBuffer());a.hasPositions&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglVertexBuffer),k.bufferData(k.ARRAY_BUFFER,a.positionArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.position),k.vertexAttribPointer(b.attributes.position,3,k.FLOAT,!1,0,0));if(a.hasNormals){k.bindBuffer(k.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,f,g,h,i,j,m,n,l,p,s=3*a.count;for(p=0;p<s;p+=9)l=a.normalArray,d=l[p],e=l[p+1],f=l[p+2],g=l[p+3],i=l[p+4],m=l[p+
5],h=l[p+6],j=l[p+7],n=l[p+8],d=(d+g+h)/3,e=(e+i+j)/3,f=(f+m+n)/3,l[p]=d,l[p+1]=e,l[p+2]=f,l[p+3]=d,l[p+4]=e,l[p+5]=f,l[p+6]=d,l[p+7]=e,l[p+8]=f}k.bufferData(k.ARRAY_BUFFER,a.normalArray,k.DYNAMIC_DRAW);k.enableVertexAttribArray(b.attributes.normal);k.vertexAttribPointer(b.attributes.normal,3,k.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglUvBuffer),k.bufferData(k.ARRAY_BUFFER,a.uvArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.uv),k.vertexAttribPointer(b.attributes.uv,
2,k.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,a.colorArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.color),k.vertexAttribPointer(b.attributes.color,3,k.FLOAT,!1,0,0));k.drawArrays(k.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible)if(c=F(a,b,c,d,f),a=c.attributes,b=!1,d=16777215*e.id+2*c.id+(d.wireframe?1:0),d!==V&&(V=d,b=!0),b&&m(),f instanceof
THREE.Mesh)if(f=e.attributes.index){d=e.offsets;1<d.length&&(b=!0);for(var c=0,g=d.length;c<g;c++){var h=d[c].index;if(b){var i=e.attributes.position,l=i.itemSize;k.bindBuffer(k.ARRAY_BUFFER,i.buffer);j(a.position);k.vertexAttribPointer(a.position,l,k.FLOAT,!1,0,4*h*l);l=e.attributes.normal;if(0<=a.normal&&l){var n=l.itemSize;k.bindBuffer(k.ARRAY_BUFFER,l.buffer);j(a.normal);k.vertexAttribPointer(a.normal,n,k.FLOAT,!1,0,4*h*n)}l=e.attributes.uv;0<=a.uv&&l&&(n=l.itemSize,k.bindBuffer(k.ARRAY_BUFFER,
l.buffer),j(a.uv),k.vertexAttribPointer(a.uv,n,k.FLOAT,!1,0,4*h*n));l=e.attributes.color;0<=a.color&&l&&(n=l.itemSize,k.bindBuffer(k.ARRAY_BUFFER,l.buffer),j(a.color),k.vertexAttribPointer(a.color,n,k.FLOAT,!1,0,4*h*n));l=e.attributes.tangent;0<=a.tangent&&l&&(n=l.itemSize,k.bindBuffer(k.ARRAY_BUFFER,l.buffer),j(a.tangent),k.vertexAttribPointer(a.tangent,n,k.FLOAT,!1,0,4*h*n));k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,f.buffer)}k.drawElements(k.TRIANGLES,d[c].count,k.UNSIGNED_SHORT,2*d[c].start);Q.info.render.calls++;
Q.info.render.vertices+=d[c].count;Q.info.render.faces+=d[c].count/3}}else b&&(i=e.attributes.position,l=i.itemSize,k.bindBuffer(k.ARRAY_BUFFER,i.buffer),j(a.position),k.vertexAttribPointer(a.position,l,k.FLOAT,!1,0,0),l=e.attributes.normal,0<=a.normal&&l&&(n=l.itemSize,k.bindBuffer(k.ARRAY_BUFFER,l.buffer),j(a.normal),k.vertexAttribPointer(a.normal,n,k.FLOAT,!1,0,0)),l=e.attributes.uv,0<=a.uv&&l&&(n=l.itemSize,k.bindBuffer(k.ARRAY_BUFFER,l.buffer),j(a.uv),k.vertexAttribPointer(a.uv,n,k.FLOAT,!1,
0,0)),l=e.attributes.color,0<=a.color&&l&&(n=l.itemSize,k.bindBuffer(k.ARRAY_BUFFER,l.buffer),j(a.color),k.vertexAttribPointer(a.color,n,k.FLOAT,!1,0,0)),l=e.attributes.tangent,0<=a.tangent&&l&&(n=l.itemSize,k.bindBuffer(k.ARRAY_BUFFER,l.buffer),j(a.tangent),k.vertexAttribPointer(a.tangent,n,k.FLOAT,!1,0,0))),k.drawArrays(k.TRIANGLES,0,i.numItems/3),Q.info.render.calls++,Q.info.render.vertices+=i.numItems/3,Q.info.render.faces+=i.numItems/3/3;else f instanceof THREE.ParticleSystem&&b&&(i=e.attributes.position,
l=i.itemSize,k.bindBuffer(k.ARRAY_BUFFER,i.buffer),j(a.position),k.vertexAttribPointer(a.position,l,k.FLOAT,!1,0,0),l=e.attributes.color,0<=a.color&&l&&(n=l.itemSize,k.bindBuffer(k.ARRAY_BUFFER,l.buffer),j(a.color),k.vertexAttribPointer(a.color,n,k.FLOAT,!1,0,0)),k.drawArrays(k.POINTS,0,i.numItems/3),Q.info.render.calls++,Q.info.render.points+=i.numItems/3)};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var g,h,c=F(a,b,c,d,f),b=c.attributes,a=!1,c=16777215*e.id+2*c.id+(d.wireframe?1:
0);c!==V&&(V=c,a=!0);a&&m();if(!d.morphTargets&&0<=b.position)a&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglVertexBuffer),j(b.position),k.vertexAttribPointer(b.position,3,k.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),j(c.position),k.vertexAttribPointer(c.position,3,k.FLOAT,!1,0,0)):0<=c.position&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglVertexBuffer),j(c.position),k.vertexAttribPointer(c.position,
3,k.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var i=0;h=f.morphTargetForcedOrder;for(g=f.morphTargetInfluences;i<d.numSupportedMorphTargets&&i<h.length;)0<=c["morphTarget"+i]&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[h[i]]),j(c["morphTarget"+i]),k.vertexAttribPointer(c["morphTarget"+i],3,k.FLOAT,!1,0,0)),0<=c["morphNormal"+i]&&d.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[h[i]]),j(c["morphNormal"+i]),k.vertexAttribPointer(c["morphNormal"+i],3,
k.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[i]=g[h[i]],i++}else{h=[];g=f.morphTargetInfluences;var l,p=g.length;for(l=0;l<p;l++)i=g[l],0<i&&h.push([i,l]);h.length>d.numSupportedMorphTargets?(h.sort(n),h.length=d.numSupportedMorphTargets):h.length>d.numSupportedMorphNormals?h.sort(n):0===h.length&&h.push([0,0]);for(i=0;i<d.numSupportedMorphTargets;)h[i]?(l=h[i][1],0<=c["morphTarget"+i]&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[l]),j(c["morphTarget"+i]),k.vertexAttribPointer(c["morphTarget"+
i],3,k.FLOAT,!1,0,0)),0<=c["morphNormal"+i]&&d.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[l]),j(c["morphNormal"+i]),k.vertexAttribPointer(c["morphNormal"+i],3,k.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[i]=g[l]):f.__webglMorphTargetInfluences[i]=0,i++}null!==d.program.uniforms.morphTargetInfluences&&k.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList){g=0;for(h=e.__webglCustomAttributesList.length;g<
h;g++)c=e.__webglCustomAttributesList[g],0<=b[c.buffer.belongsToAttribute]&&(k.bindBuffer(k.ARRAY_BUFFER,c.buffer),j(b[c.buffer.belongsToAttribute]),k.vertexAttribPointer(b[c.buffer.belongsToAttribute],c.size,k.FLOAT,!1,0,0))}0<=b.color&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglColorBuffer),j(b.color),k.vertexAttribPointer(b.color,3,k.FLOAT,!1,0,0));0<=b.normal&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglNormalBuffer),j(b.normal),k.vertexAttribPointer(b.normal,3,k.FLOAT,!1,0,0));0<=b.tangent&&(k.bindBuffer(k.ARRAY_BUFFER,
e.__webglTangentBuffer),j(b.tangent),k.vertexAttribPointer(b.tangent,4,k.FLOAT,!1,0,0));0<=b.uv&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglUVBuffer),j(b.uv),k.vertexAttribPointer(b.uv,2,k.FLOAT,!1,0,0));0<=b.uv2&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglUV2Buffer),j(b.uv2),k.vertexAttribPointer(b.uv2,2,k.FLOAT,!1,0,0));d.skinning&&(0<=b.skinIndex&&0<=b.skinWeight)&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),j(b.skinIndex),k.vertexAttribPointer(b.skinIndex,4,k.FLOAT,!1,0,0),k.bindBuffer(k.ARRAY_BUFFER,
e.__webglSkinWeightsBuffer),j(b.skinWeight),k.vertexAttribPointer(b.skinWeight,4,k.FLOAT,!1,0,0));0<=b.lineDistance&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglLineDistanceBuffer),j(b.lineDistance),k.vertexAttribPointer(b.lineDistance,1,k.FLOAT,!1,0,0))}f instanceof THREE.Mesh?(d.wireframe?(d=d.wireframeLinewidth,d!==Sa&&(k.lineWidth(d),Sa=d),a&&k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),k.drawElements(k.LINES,e.__webglLineCount,k.UNSIGNED_SHORT,0)):(a&&k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,
e.__webglFaceBuffer),k.drawElements(k.TRIANGLES,e.__webglFaceCount,k.UNSIGNED_SHORT,0)),Q.info.render.calls++,Q.info.render.vertices+=e.__webglFaceCount,Q.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?k.LINE_STRIP:k.LINES,d=d.linewidth,d!==Sa&&(k.lineWidth(d),Sa=d),k.drawArrays(f,0,e.__webglLineCount),Q.info.render.calls++):f instanceof THREE.ParticleSystem?(k.drawArrays(k.POINTS,0,e.__webglParticleCount),Q.info.render.calls++,Q.info.render.points+=e.__webglParticleCount):
f instanceof THREE.Ribbon&&(k.drawArrays(k.TRIANGLE_STRIP,0,e.__webglVertexCount),Q.info.render.calls++)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e,f,g,h,i=a.__lights,j=a.fog;ka=-1;wb=!0;this.autoUpdateScene&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);mc.multiply(b.projectionMatrix,b.matrixWorldInverse);eb.setFromMatrix(mc);
this.autoUpdateObjects&&this.initWebGLObjects(a);s(this.renderPluginsPre,a,b);Q.info.render.calls=0;Q.info.render.vertices=0;Q.info.render.faces=0;Q.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);h=a.__webglObjects;d=0;for(e=h.length;d<e;d++)if(f=h[d],g=f.object,f.render=!1,g.visible&&(!(g instanceof THREE.Mesh||g instanceof THREE.ParticleSystem)||!g.frustumCulled||eb.contains(g))){x(g,b);var m=f,n=m.buffer,
q=void 0,t=q=void 0,t=m.object.material;if(t instanceof THREE.MeshFaceMaterial)q=n.materialIndex,q=t.materials[q],q.transparent?(m.transparent=q,m.opaque=null):(m.opaque=q,m.transparent=null);else if(q=t)q.transparent?(m.transparent=q,m.opaque=null):(m.opaque=q,m.transparent=null);f.render=!0;!0===this.sortObjects&&(null!==g.renderDepth?f.z=g.renderDepth:(Eb.copy(g.matrixWorld.getPosition()),mc.multiplyVector3(Eb),f.z=Eb.z),f.id=g.id)}this.sortObjects&&h.sort(p);h=a.__webglObjectsImmediate;d=0;for(e=
h.length;d<e;d++)f=h[d],g=f.object,g.visible&&(x(g,b),g=f.object.material,g.transparent?(f.transparent=g,f.opaque=null):(f.opaque=g,f.transparent=null));a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),C(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),r(a.__webglObjects,!1,"",b,i,j,!0,d),l(a.__webglObjectsImmediate,"",b,i,j,!1,d)):(d=null,this.setBlending(THREE.NoBlending),
r(a.__webglObjects,!0,"opaque",b,i,j,!1,d),l(a.__webglObjectsImmediate,"opaque",b,i,j,!1,d),r(a.__webglObjects,!1,"transparent",b,i,j,!0,d),l(a.__webglObjectsImmediate,"transparent",b,i,j,!0,d));s(this.renderPluginsPost,a,b);c&&(c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter)&&(c instanceof THREE.WebGLRenderTargetCube?(k.bindTexture(k.TEXTURE_CUBE_MAP,c.__webglTexture),k.generateMipmap(k.TEXTURE_CUBE_MAP),k.bindTexture(k.TEXTURE_CUBE_MAP,null)):(k.bindTexture(k.TEXTURE_2D,
c.__webglTexture),k.generateMipmap(k.TEXTURE_2D),k.bindTexture(k.TEXTURE_2D,null)));this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=F(a,b,c,d,e);V=-1;Q.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,k,eb):e.render(function(a){Q.renderBufferImmediate(a,f,d)})};this.initWebGLObjects=function(a){a.__webglObjects||(a.__webglObjects=[],a.__webglObjectsImmediate=[],a.__webglSprites=[],a.__webglFlares=[]);for(;a.__objectsAdded.length;){var b=
a.__objectsAdded[0],j=a,m=void 0,l=void 0,p=void 0,s=void 0;if(!b.__webglInit)if(b.__webglInit=!0,b._modelViewMatrix=new THREE.Matrix4,b._normalMatrix=new THREE.Matrix3,b instanceof THREE.Mesh)if(l=b.geometry,p=b.material,l instanceof THREE.Geometry){if(void 0===l.geometryGroups){var r=l,v=void 0,x=void 0,z=void 0,B=void 0,D=void 0,C=void 0,F={},G=r.morphTargets.length,I=r.morphNormals.length,J=p instanceof THREE.MeshFaceMaterial;r.geometryGroups={};v=0;for(x=r.faces.length;v<x;v++)z=r.faces[v],B=
J?z.materialIndex:0,void 0===F[B]&&(F[B]={hash:B,counter:0}),C=F[B].hash+"_"+F[B].counter,void 0===r.geometryGroups[C]&&(r.geometryGroups[C]={faces3:[],faces4:[],materialIndex:B,vertices:0,numMorphTargets:G,numMorphNormals:I}),D=z instanceof THREE.Face3?3:4,65535<r.geometryGroups[C].vertices+D&&(F[B].counter+=1,C=F[B].hash+"_"+F[B].counter,void 0===r.geometryGroups[C]&&(r.geometryGroups[C]={faces3:[],faces4:[],materialIndex:B,vertices:0,numMorphTargets:G,numMorphNormals:I})),z instanceof THREE.Face3?
r.geometryGroups[C].faces3.push(v):r.geometryGroups[C].faces4.push(v),r.geometryGroups[C].vertices+=D;r.geometryGroupsList=[];var R=void 0;for(R in r.geometryGroups)r.geometryGroups[R].id=Ca++,r.geometryGroupsList.push(r.geometryGroups[R])}for(m in l.geometryGroups)if(s=l.geometryGroups[m],!s.__webglVertexBuffer){var P=s;P.__webglVertexBuffer=k.createBuffer();P.__webglNormalBuffer=k.createBuffer();P.__webglTangentBuffer=k.createBuffer();P.__webglColorBuffer=k.createBuffer();P.__webglUVBuffer=k.createBuffer();
P.__webglUV2Buffer=k.createBuffer();P.__webglSkinIndicesBuffer=k.createBuffer();P.__webglSkinWeightsBuffer=k.createBuffer();P.__webglFaceBuffer=k.createBuffer();P.__webglLineBuffer=k.createBuffer();var K=void 0,L=void 0;if(P.numMorphTargets){P.__webglMorphTargetsBuffers=[];K=0;for(L=P.numMorphTargets;K<L;K++)P.__webglMorphTargetsBuffers.push(k.createBuffer())}if(P.numMorphNormals){P.__webglMorphNormalsBuffers=[];K=0;for(L=P.numMorphNormals;K<L;K++)P.__webglMorphNormalsBuffers.push(k.createBuffer())}Q.info.memory.geometries++;
d(s,b);l.verticesNeedUpdate=!0;l.morphTargetsNeedUpdate=!0;l.elementsNeedUpdate=!0;l.uvsNeedUpdate=!0;l.normalsNeedUpdate=!0;l.tangentsNeedUpdate=!0;l.colorsNeedUpdate=!0}}else l instanceof THREE.BufferGeometry&&h(l);else if(b instanceof THREE.Ribbon){if(l=b.geometry,!l.__webglVertexBuffer){var O=l;O.__webglVertexBuffer=k.createBuffer();O.__webglColorBuffer=k.createBuffer();O.__webglNormalBuffer=k.createBuffer();Q.info.memory.geometries++;var M=l,N=b,V=M.vertices.length;M.__vertexArray=new Float32Array(3*
V);M.__colorArray=new Float32Array(3*V);M.__normalArray=new Float32Array(3*V);M.__webglVertexCount=V;c(M,N);l.verticesNeedUpdate=!0;l.colorsNeedUpdate=!0;l.normalsNeedUpdate=!0}}else if(b instanceof THREE.Line){if(l=b.geometry,!l.__webglVertexBuffer){var ba=l;ba.__webglVertexBuffer=k.createBuffer();ba.__webglColorBuffer=k.createBuffer();ba.__webglLineDistanceBuffer=k.createBuffer();Q.info.memory.geometries++;var ca=l,U=b,da=ca.vertices.length;ca.__vertexArray=new Float32Array(3*da);ca.__colorArray=
new Float32Array(3*da);ca.__lineDistanceArray=new Float32Array(1*da);ca.__webglLineCount=da;c(ca,U);l.verticesNeedUpdate=!0;l.colorsNeedUpdate=!0;l.lineDistancesNeedUpdate=!0}}else if(b instanceof THREE.ParticleSystem&&(l=b.geometry,!l.__webglVertexBuffer))if(l instanceof THREE.Geometry){var ka=l;ka.__webglVertexBuffer=k.createBuffer();ka.__webglColorBuffer=k.createBuffer();Q.info.memory.geometries++;var ea=l,ia=b,la=ea.vertices.length;ea.__vertexArray=new Float32Array(3*la);ea.__colorArray=new Float32Array(3*
la);ea.__sortArray=[];ea.__webglParticleCount=la;c(ea,ia);l.verticesNeedUpdate=!0;l.colorsNeedUpdate=!0}else l instanceof THREE.BufferGeometry&&h(l);if(!b.__webglActive){if(b instanceof THREE.Mesh)if(l=b.geometry,l instanceof THREE.BufferGeometry)t(j.__webglObjects,l,b);else for(m in l.geometryGroups)s=l.geometryGroups[m],t(j.__webglObjects,s,b);else b instanceof THREE.Ribbon||b instanceof THREE.Line||b instanceof THREE.ParticleSystem?(l=b.geometry,t(j.__webglObjects,l,b)):b instanceof THREE.ImmediateRenderObject||
b.immediateRenderCallback?j.__webglObjectsImmediate.push({object:b,opaque:null,transparent:null}):b instanceof THREE.Sprite?j.__webglSprites.push(b):b instanceof THREE.LensFlare&&j.__webglFlares.push(b);b.__webglActive=!0}a.__objectsAdded.splice(0,1)}for(;a.__objectsRemoved.length;){var ja=a.__objectsRemoved[0],sa=a;ja instanceof THREE.Mesh||ja instanceof THREE.ParticleSystem||ja instanceof THREE.Ribbon||ja instanceof THREE.Line?A(sa.__webglObjects,ja):ja instanceof THREE.Sprite?q(sa.__webglSprites,
ja):ja instanceof THREE.LensFlare?q(sa.__webglFlares,ja):(ja instanceof THREE.ImmediateRenderObject||ja.immediateRenderCallback)&&A(sa.__webglObjectsImmediate,ja);ja.__webglActive=!1;a.__objectsRemoved.splice(0,1)}for(var Ma=0,Va=a.__webglObjects.length;Ma<Va;Ma++){var ua=a.__webglObjects[Ma].object,S=ua.geometry,Ea=void 0,Da=void 0,na=void 0;if(ua instanceof THREE.Mesh)if(S instanceof THREE.BufferGeometry)(S.verticesNeedUpdate||S.elementsNeedUpdate||S.uvsNeedUpdate||S.normalsNeedUpdate||S.colorsNeedUpdate||
S.tangentsNeedUpdate)&&i(S,k.DYNAMIC_DRAW,!S.dynamic),S.verticesNeedUpdate=!1,S.elementsNeedUpdate=!1,S.uvsNeedUpdate=!1,S.normalsNeedUpdate=!1,S.colorsNeedUpdate=!1,S.tangentsNeedUpdate=!1;else{for(var Na=0,Ra=S.geometryGroupsList.length;Na<Ra;Na++)if(Ea=S.geometryGroupsList[Na],na=e(ua,Ea),S.buffersNeedUpdate&&d(Ea,ua),Da=na.attributes&&u(na),S.verticesNeedUpdate||S.morphTargetsNeedUpdate||S.elementsNeedUpdate||S.uvsNeedUpdate||S.normalsNeedUpdate||S.colorsNeedUpdate||S.tangentsNeedUpdate||Da){var ta=
Ea,Sa=ua,Ha=k.DYNAMIC_DRAW,vb=!S.dynamic,gb=na;if(ta.__inittedArrays){var tb=f(gb),qb=gb.vertexColors?gb.vertexColors:!1,ub=g(gb),kb=tb===THREE.SmoothShading,H=void 0,Z=void 0,ab=void 0,T=void 0,hb=void 0,eb=void 0,Mb=void 0,xb=void 0,gc=void 0,rb=void 0,wb=void 0,W=void 0,X=void 0,Y=void 0,ra=void 0,Nb=void 0,Ob=void 0,Pb=void 0,Fb=void 0,Qb=void 0,Rb=void 0,Sb=void 0,Kb=void 0,Tb=void 0,Ub=void 0,Vb=void 0,Lb=void 0,Wb=void 0,Xb=void 0,Yb=void 0,Hc=void 0,Zb=void 0,$b=void 0,ac=void 0,Ic=void 0,
xa=void 0,xc=void 0,oc=void 0,Bc=void 0,Cc=void 0,Wa=void 0,yc=void 0,Ta=void 0,Ua=void 0,pc=void 0,hc=void 0,Oa=0,Qa=0,ic=0,jc=0,Ab=0,bb=0,Aa=0,fb=0,Pa=0,fa=0,ma=0,y=0,ya=void 0,Xa=ta.__vertexArray,Jc=ta.__uvArray,Kc=ta.__uv2Array,Bb=ta.__normalArray,Ia=ta.__tangentArray,Ya=ta.__colorArray,Ja=ta.__skinIndexArray,Ka=ta.__skinWeightArray,nd=ta.__morphTargetsArrays,od=ta.__morphNormalsArrays,pd=ta.__webglCustomAttributesList,w=void 0,bc=ta.__faceArray,sb=ta.__lineArray,mb=Sa.geometry,Sc=mb.elementsNeedUpdate,
Gc=mb.uvsNeedUpdate,Tc=mb.normalsNeedUpdate,kd=mb.tangentsNeedUpdate,ld=mb.colorsNeedUpdate,Jd=mb.morphTargetsNeedUpdate,tc=mb.vertices,va=ta.faces3,wa=ta.faces4,cb=mb.faces,qd=mb.faceVertexUvs[0],rd=mb.faceVertexUvs[1],uc=mb.skinIndices,qc=mb.skinWeights,rc=mb.morphTargets,Vc=mb.morphNormals;if(mb.verticesNeedUpdate){H=0;for(Z=va.length;H<Z;H++)T=cb[va[H]],W=tc[T.a],X=tc[T.b],Y=tc[T.c],Xa[Qa]=W.x,Xa[Qa+1]=W.y,Xa[Qa+2]=W.z,Xa[Qa+3]=X.x,Xa[Qa+4]=X.y,Xa[Qa+5]=X.z,Xa[Qa+6]=Y.x,Xa[Qa+7]=Y.y,Xa[Qa+8]=
Y.z,Qa+=9;H=0;for(Z=wa.length;H<Z;H++)T=cb[wa[H]],W=tc[T.a],X=tc[T.b],Y=tc[T.c],ra=tc[T.d],Xa[Qa]=W.x,Xa[Qa+1]=W.y,Xa[Qa+2]=W.z,Xa[Qa+3]=X.x,Xa[Qa+4]=X.y,Xa[Qa+5]=X.z,Xa[Qa+6]=Y.x,Xa[Qa+7]=Y.y,Xa[Qa+8]=Y.z,Xa[Qa+9]=ra.x,Xa[Qa+10]=ra.y,Xa[Qa+11]=ra.z,Qa+=12;k.bindBuffer(k.ARRAY_BUFFER,ta.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,Xa,Ha)}if(Jd){Wa=0;for(yc=rc.length;Wa<yc;Wa++){H=ma=0;for(Z=va.length;H<Z;H++)pc=va[H],T=cb[pc],W=rc[Wa].vertices[T.a],X=rc[Wa].vertices[T.b],Y=rc[Wa].vertices[T.c],
Ta=nd[Wa],Ta[ma]=W.x,Ta[ma+1]=W.y,Ta[ma+2]=W.z,Ta[ma+3]=X.x,Ta[ma+4]=X.y,Ta[ma+5]=X.z,Ta[ma+6]=Y.x,Ta[ma+7]=Y.y,Ta[ma+8]=Y.z,gb.morphNormals&&(kb?(hc=Vc[Wa].vertexNormals[pc],Qb=hc.a,Rb=hc.b,Sb=hc.c):Sb=Rb=Qb=Vc[Wa].faceNormals[pc],Ua=od[Wa],Ua[ma]=Qb.x,Ua[ma+1]=Qb.y,Ua[ma+2]=Qb.z,Ua[ma+3]=Rb.x,Ua[ma+4]=Rb.y,Ua[ma+5]=Rb.z,Ua[ma+6]=Sb.x,Ua[ma+7]=Sb.y,Ua[ma+8]=Sb.z),ma+=9;H=0;for(Z=wa.length;H<Z;H++)pc=wa[H],T=cb[pc],W=rc[Wa].vertices[T.a],X=rc[Wa].vertices[T.b],Y=rc[Wa].vertices[T.c],ra=rc[Wa].vertices[T.d],
Ta=nd[Wa],Ta[ma]=W.x,Ta[ma+1]=W.y,Ta[ma+2]=W.z,Ta[ma+3]=X.x,Ta[ma+4]=X.y,Ta[ma+5]=X.z,Ta[ma+6]=Y.x,Ta[ma+7]=Y.y,Ta[ma+8]=Y.z,Ta[ma+9]=ra.x,Ta[ma+10]=ra.y,Ta[ma+11]=ra.z,gb.morphNormals&&(kb?(hc=Vc[Wa].vertexNormals[pc],Qb=hc.a,Rb=hc.b,Sb=hc.c,Kb=hc.d):Kb=Sb=Rb=Qb=Vc[Wa].faceNormals[pc],Ua=od[Wa],Ua[ma]=Qb.x,Ua[ma+1]=Qb.y,Ua[ma+2]=Qb.z,Ua[ma+3]=Rb.x,Ua[ma+4]=Rb.y,Ua[ma+5]=Rb.z,Ua[ma+6]=Sb.x,Ua[ma+7]=Sb.y,Ua[ma+8]=Sb.z,Ua[ma+9]=Kb.x,Ua[ma+10]=Kb.y,Ua[ma+11]=Kb.z),ma+=12;k.bindBuffer(k.ARRAY_BUFFER,
ta.__webglMorphTargetsBuffers[Wa]);k.bufferData(k.ARRAY_BUFFER,nd[Wa],Ha);gb.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,ta.__webglMorphNormalsBuffers[Wa]),k.bufferData(k.ARRAY_BUFFER,od[Wa],Ha))}}if(qc.length){H=0;for(Z=va.length;H<Z;H++)T=cb[va[H]],Wb=qc[T.a],Xb=qc[T.b],Yb=qc[T.c],Ka[fa]=Wb.x,Ka[fa+1]=Wb.y,Ka[fa+2]=Wb.z,Ka[fa+3]=Wb.w,Ka[fa+4]=Xb.x,Ka[fa+5]=Xb.y,Ka[fa+6]=Xb.z,Ka[fa+7]=Xb.w,Ka[fa+8]=Yb.x,Ka[fa+9]=Yb.y,Ka[fa+10]=Yb.z,Ka[fa+11]=Yb.w,Zb=uc[T.a],$b=uc[T.b],ac=uc[T.c],Ja[fa]=Zb.x,Ja[fa+
1]=Zb.y,Ja[fa+2]=Zb.z,Ja[fa+3]=Zb.w,Ja[fa+4]=$b.x,Ja[fa+5]=$b.y,Ja[fa+6]=$b.z,Ja[fa+7]=$b.w,Ja[fa+8]=ac.x,Ja[fa+9]=ac.y,Ja[fa+10]=ac.z,Ja[fa+11]=ac.w,fa+=12;H=0;for(Z=wa.length;H<Z;H++)T=cb[wa[H]],Wb=qc[T.a],Xb=qc[T.b],Yb=qc[T.c],Hc=qc[T.d],Ka[fa]=Wb.x,Ka[fa+1]=Wb.y,Ka[fa+2]=Wb.z,Ka[fa+3]=Wb.w,Ka[fa+4]=Xb.x,Ka[fa+5]=Xb.y,Ka[fa+6]=Xb.z,Ka[fa+7]=Xb.w,Ka[fa+8]=Yb.x,Ka[fa+9]=Yb.y,Ka[fa+10]=Yb.z,Ka[fa+11]=Yb.w,Ka[fa+12]=Hc.x,Ka[fa+13]=Hc.y,Ka[fa+14]=Hc.z,Ka[fa+15]=Hc.w,Zb=uc[T.a],$b=uc[T.b],ac=uc[T.c],
Ic=uc[T.d],Ja[fa]=Zb.x,Ja[fa+1]=Zb.y,Ja[fa+2]=Zb.z,Ja[fa+3]=Zb.w,Ja[fa+4]=$b.x,Ja[fa+5]=$b.y,Ja[fa+6]=$b.z,Ja[fa+7]=$b.w,Ja[fa+8]=ac.x,Ja[fa+9]=ac.y,Ja[fa+10]=ac.z,Ja[fa+11]=ac.w,Ja[fa+12]=Ic.x,Ja[fa+13]=Ic.y,Ja[fa+14]=Ic.z,Ja[fa+15]=Ic.w,fa+=16;0<fa&&(k.bindBuffer(k.ARRAY_BUFFER,ta.__webglSkinIndicesBuffer),k.bufferData(k.ARRAY_BUFFER,Ja,Ha),k.bindBuffer(k.ARRAY_BUFFER,ta.__webglSkinWeightsBuffer),k.bufferData(k.ARRAY_BUFFER,Ka,Ha))}if(ld&&qb){H=0;for(Z=va.length;H<Z;H++)T=cb[va[H]],Mb=T.vertexColors,
xb=T.color,3===Mb.length&&qb===THREE.VertexColors?(Tb=Mb[0],Ub=Mb[1],Vb=Mb[2]):Vb=Ub=Tb=xb,Ya[Pa]=Tb.r,Ya[Pa+1]=Tb.g,Ya[Pa+2]=Tb.b,Ya[Pa+3]=Ub.r,Ya[Pa+4]=Ub.g,Ya[Pa+5]=Ub.b,Ya[Pa+6]=Vb.r,Ya[Pa+7]=Vb.g,Ya[Pa+8]=Vb.b,Pa+=9;H=0;for(Z=wa.length;H<Z;H++)T=cb[wa[H]],Mb=T.vertexColors,xb=T.color,4===Mb.length&&qb===THREE.VertexColors?(Tb=Mb[0],Ub=Mb[1],Vb=Mb[2],Lb=Mb[3]):Lb=Vb=Ub=Tb=xb,Ya[Pa]=Tb.r,Ya[Pa+1]=Tb.g,Ya[Pa+2]=Tb.b,Ya[Pa+3]=Ub.r,Ya[Pa+4]=Ub.g,Ya[Pa+5]=Ub.b,Ya[Pa+6]=Vb.r,Ya[Pa+7]=Vb.g,Ya[Pa+8]=
Vb.b,Ya[Pa+9]=Lb.r,Ya[Pa+10]=Lb.g,Ya[Pa+11]=Lb.b,Pa+=12;0<Pa&&(k.bindBuffer(k.ARRAY_BUFFER,ta.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,Ya,Ha))}if(kd&&mb.hasTangents){H=0;for(Z=va.length;H<Z;H++)T=cb[va[H]],gc=T.vertexTangents,Nb=gc[0],Ob=gc[1],Pb=gc[2],Ia[Aa]=Nb.x,Ia[Aa+1]=Nb.y,Ia[Aa+2]=Nb.z,Ia[Aa+3]=Nb.w,Ia[Aa+4]=Ob.x,Ia[Aa+5]=Ob.y,Ia[Aa+6]=Ob.z,Ia[Aa+7]=Ob.w,Ia[Aa+8]=Pb.x,Ia[Aa+9]=Pb.y,Ia[Aa+10]=Pb.z,Ia[Aa+11]=Pb.w,Aa+=12;H=0;for(Z=wa.length;H<Z;H++)T=cb[wa[H]],gc=T.vertexTangents,Nb=gc[0],
Ob=gc[1],Pb=gc[2],Fb=gc[3],Ia[Aa]=Nb.x,Ia[Aa+1]=Nb.y,Ia[Aa+2]=Nb.z,Ia[Aa+3]=Nb.w,Ia[Aa+4]=Ob.x,Ia[Aa+5]=Ob.y,Ia[Aa+6]=Ob.z,Ia[Aa+7]=Ob.w,Ia[Aa+8]=Pb.x,Ia[Aa+9]=Pb.y,Ia[Aa+10]=Pb.z,Ia[Aa+11]=Pb.w,Ia[Aa+12]=Fb.x,Ia[Aa+13]=Fb.y,Ia[Aa+14]=Fb.z,Ia[Aa+15]=Fb.w,Aa+=16;k.bindBuffer(k.ARRAY_BUFFER,ta.__webglTangentBuffer);k.bufferData(k.ARRAY_BUFFER,Ia,Ha)}if(Tc&&tb){H=0;for(Z=va.length;H<Z;H++)if(T=cb[va[H]],hb=T.vertexNormals,eb=T.normal,3===hb.length&&kb)for(xa=0;3>xa;xa++)oc=hb[xa],Bb[bb]=oc.x,Bb[bb+1]=
oc.y,Bb[bb+2]=oc.z,bb+=3;else for(xa=0;3>xa;xa++)Bb[bb]=eb.x,Bb[bb+1]=eb.y,Bb[bb+2]=eb.z,bb+=3;H=0;for(Z=wa.length;H<Z;H++)if(T=cb[wa[H]],hb=T.vertexNormals,eb=T.normal,4===hb.length&&kb)for(xa=0;4>xa;xa++)oc=hb[xa],Bb[bb]=oc.x,Bb[bb+1]=oc.y,Bb[bb+2]=oc.z,bb+=3;else for(xa=0;4>xa;xa++)Bb[bb]=eb.x,Bb[bb+1]=eb.y,Bb[bb+2]=eb.z,bb+=3;k.bindBuffer(k.ARRAY_BUFFER,ta.__webglNormalBuffer);k.bufferData(k.ARRAY_BUFFER,Bb,Ha)}if(Gc&&qd&&ub){H=0;for(Z=va.length;H<Z;H++)if(ab=va[H],rb=qd[ab],void 0!==rb)for(xa=
0;3>xa;xa++)Bc=rb[xa],Jc[ic]=Bc.x,Jc[ic+1]=Bc.y,ic+=2;H=0;for(Z=wa.length;H<Z;H++)if(ab=wa[H],rb=qd[ab],void 0!==rb)for(xa=0;4>xa;xa++)Bc=rb[xa],Jc[ic]=Bc.x,Jc[ic+1]=Bc.y,ic+=2;0<ic&&(k.bindBuffer(k.ARRAY_BUFFER,ta.__webglUVBuffer),k.bufferData(k.ARRAY_BUFFER,Jc,Ha))}if(Gc&&rd&&ub){H=0;for(Z=va.length;H<Z;H++)if(ab=va[H],wb=rd[ab],void 0!==wb)for(xa=0;3>xa;xa++)Cc=wb[xa],Kc[jc]=Cc.x,Kc[jc+1]=Cc.y,jc+=2;H=0;for(Z=wa.length;H<Z;H++)if(ab=wa[H],wb=rd[ab],void 0!==wb)for(xa=0;4>xa;xa++)Cc=wb[xa],Kc[jc]=
Cc.x,Kc[jc+1]=Cc.y,jc+=2;0<jc&&(k.bindBuffer(k.ARRAY_BUFFER,ta.__webglUV2Buffer),k.bufferData(k.ARRAY_BUFFER,Kc,Ha))}if(Sc){H=0;for(Z=va.length;H<Z;H++)bc[Ab]=Oa,bc[Ab+1]=Oa+1,bc[Ab+2]=Oa+2,Ab+=3,sb[fb]=Oa,sb[fb+1]=Oa+1,sb[fb+2]=Oa,sb[fb+3]=Oa+2,sb[fb+4]=Oa+1,sb[fb+5]=Oa+2,fb+=6,Oa+=3;H=0;for(Z=wa.length;H<Z;H++)bc[Ab]=Oa,bc[Ab+1]=Oa+1,bc[Ab+2]=Oa+3,bc[Ab+3]=Oa+1,bc[Ab+4]=Oa+2,bc[Ab+5]=Oa+3,Ab+=6,sb[fb]=Oa,sb[fb+1]=Oa+1,sb[fb+2]=Oa,sb[fb+3]=Oa+3,sb[fb+4]=Oa+1,sb[fb+5]=Oa+2,sb[fb+6]=Oa+2,sb[fb+7]=
Oa+3,fb+=8,Oa+=4;k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,ta.__webglFaceBuffer);k.bufferData(k.ELEMENT_ARRAY_BUFFER,bc,Ha);k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,ta.__webglLineBuffer);k.bufferData(k.ELEMENT_ARRAY_BUFFER,sb,Ha)}if(pd){xa=0;for(xc=pd.length;xa<xc;xa++)if(w=pd[xa],w.__original.needsUpdate){y=0;if(1===w.size)if(void 0===w.boundTo||"vertices"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)T=cb[va[H]],w.array[y]=w.value[T.a],w.array[y+1]=w.value[T.b],w.array[y+2]=w.value[T.c],y+=3;H=0;for(Z=wa.length;H<
Z;H++)T=cb[wa[H]],w.array[y]=w.value[T.a],w.array[y+1]=w.value[T.b],w.array[y+2]=w.value[T.c],w.array[y+3]=w.value[T.d],y+=4}else{if("faces"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)ya=w.value[va[H]],w.array[y]=ya,w.array[y+1]=ya,w.array[y+2]=ya,y+=3;H=0;for(Z=wa.length;H<Z;H++)ya=w.value[wa[H]],w.array[y]=ya,w.array[y+1]=ya,w.array[y+2]=ya,w.array[y+3]=ya,y+=4}}else if(2===w.size)if(void 0===w.boundTo||"vertices"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)T=cb[va[H]],W=w.value[T.a],X=w.value[T.b],
Y=w.value[T.c],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=X.x,w.array[y+3]=X.y,w.array[y+4]=Y.x,w.array[y+5]=Y.y,y+=6;H=0;for(Z=wa.length;H<Z;H++)T=cb[wa[H]],W=w.value[T.a],X=w.value[T.b],Y=w.value[T.c],ra=w.value[T.d],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=X.x,w.array[y+3]=X.y,w.array[y+4]=Y.x,w.array[y+5]=Y.y,w.array[y+6]=ra.x,w.array[y+7]=ra.y,y+=8}else{if("faces"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)Y=X=W=ya=w.value[va[H]],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=X.x,w.array[y+
3]=X.y,w.array[y+4]=Y.x,w.array[y+5]=Y.y,y+=6;H=0;for(Z=wa.length;H<Z;H++)ra=Y=X=W=ya=w.value[wa[H]],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=X.x,w.array[y+3]=X.y,w.array[y+4]=Y.x,w.array[y+5]=Y.y,w.array[y+6]=ra.x,w.array[y+7]=ra.y,y+=8}}else if(3===w.size){var aa;aa="c"===w.type?["r","g","b"]:["x","y","z"];if(void 0===w.boundTo||"vertices"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)T=cb[va[H]],W=w.value[T.a],X=w.value[T.b],Y=w.value[T.c],w.array[y]=W[aa[0]],w.array[y+1]=W[aa[1]],w.array[y+2]=
W[aa[2]],w.array[y+3]=X[aa[0]],w.array[y+4]=X[aa[1]],w.array[y+5]=X[aa[2]],w.array[y+6]=Y[aa[0]],w.array[y+7]=Y[aa[1]],w.array[y+8]=Y[aa[2]],y+=9;H=0;for(Z=wa.length;H<Z;H++)T=cb[wa[H]],W=w.value[T.a],X=w.value[T.b],Y=w.value[T.c],ra=w.value[T.d],w.array[y]=W[aa[0]],w.array[y+1]=W[aa[1]],w.array[y+2]=W[aa[2]],w.array[y+3]=X[aa[0]],w.array[y+4]=X[aa[1]],w.array[y+5]=X[aa[2]],w.array[y+6]=Y[aa[0]],w.array[y+7]=Y[aa[1]],w.array[y+8]=Y[aa[2]],w.array[y+9]=ra[aa[0]],w.array[y+10]=ra[aa[1]],w.array[y+11]=
ra[aa[2]],y+=12}else if("faces"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)Y=X=W=ya=w.value[va[H]],w.array[y]=W[aa[0]],w.array[y+1]=W[aa[1]],w.array[y+2]=W[aa[2]],w.array[y+3]=X[aa[0]],w.array[y+4]=X[aa[1]],w.array[y+5]=X[aa[2]],w.array[y+6]=Y[aa[0]],w.array[y+7]=Y[aa[1]],w.array[y+8]=Y[aa[2]],y+=9;H=0;for(Z=wa.length;H<Z;H++)ra=Y=X=W=ya=w.value[wa[H]],w.array[y]=W[aa[0]],w.array[y+1]=W[aa[1]],w.array[y+2]=W[aa[2]],w.array[y+3]=X[aa[0]],w.array[y+4]=X[aa[1]],w.array[y+5]=X[aa[2]],w.array[y+6]=Y[aa[0]],
w.array[y+7]=Y[aa[1]],w.array[y+8]=Y[aa[2]],w.array[y+9]=ra[aa[0]],w.array[y+10]=ra[aa[1]],w.array[y+11]=ra[aa[2]],y+=12}else if("faceVertices"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)ya=w.value[va[H]],W=ya[0],X=ya[1],Y=ya[2],w.array[y]=W[aa[0]],w.array[y+1]=W[aa[1]],w.array[y+2]=W[aa[2]],w.array[y+3]=X[aa[0]],w.array[y+4]=X[aa[1]],w.array[y+5]=X[aa[2]],w.array[y+6]=Y[aa[0]],w.array[y+7]=Y[aa[1]],w.array[y+8]=Y[aa[2]],y+=9;H=0;for(Z=wa.length;H<Z;H++)ya=w.value[wa[H]],W=ya[0],X=ya[1],Y=ya[2],ra=
ya[3],w.array[y]=W[aa[0]],w.array[y+1]=W[aa[1]],w.array[y+2]=W[aa[2]],w.array[y+3]=X[aa[0]],w.array[y+4]=X[aa[1]],w.array[y+5]=X[aa[2]],w.array[y+6]=Y[aa[0]],w.array[y+7]=Y[aa[1]],w.array[y+8]=Y[aa[2]],w.array[y+9]=ra[aa[0]],w.array[y+10]=ra[aa[1]],w.array[y+11]=ra[aa[2]],y+=12}}else if(4===w.size)if(void 0===w.boundTo||"vertices"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)T=cb[va[H]],W=w.value[T.a],X=w.value[T.b],Y=w.value[T.c],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=W.z,w.array[y+3]=W.w,w.array[y+
4]=X.x,w.array[y+5]=X.y,w.array[y+6]=X.z,w.array[y+7]=X.w,w.array[y+8]=Y.x,w.array[y+9]=Y.y,w.array[y+10]=Y.z,w.array[y+11]=Y.w,y+=12;H=0;for(Z=wa.length;H<Z;H++)T=cb[wa[H]],W=w.value[T.a],X=w.value[T.b],Y=w.value[T.c],ra=w.value[T.d],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=W.z,w.array[y+3]=W.w,w.array[y+4]=X.x,w.array[y+5]=X.y,w.array[y+6]=X.z,w.array[y+7]=X.w,w.array[y+8]=Y.x,w.array[y+9]=Y.y,w.array[y+10]=Y.z,w.array[y+11]=Y.w,w.array[y+12]=ra.x,w.array[y+13]=ra.y,w.array[y+14]=ra.z,w.array[y+
15]=ra.w,y+=16}else if("faces"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)Y=X=W=ya=w.value[va[H]],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=W.z,w.array[y+3]=W.w,w.array[y+4]=X.x,w.array[y+5]=X.y,w.array[y+6]=X.z,w.array[y+7]=X.w,w.array[y+8]=Y.x,w.array[y+9]=Y.y,w.array[y+10]=Y.z,w.array[y+11]=Y.w,y+=12;H=0;for(Z=wa.length;H<Z;H++)ra=Y=X=W=ya=w.value[wa[H]],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=W.z,w.array[y+3]=W.w,w.array[y+4]=X.x,w.array[y+5]=X.y,w.array[y+6]=X.z,w.array[y+7]=X.w,w.array[y+
8]=Y.x,w.array[y+9]=Y.y,w.array[y+10]=Y.z,w.array[y+11]=Y.w,w.array[y+12]=ra.x,w.array[y+13]=ra.y,w.array[y+14]=ra.z,w.array[y+15]=ra.w,y+=16}else if("faceVertices"===w.boundTo){H=0;for(Z=va.length;H<Z;H++)ya=w.value[va[H]],W=ya[0],X=ya[1],Y=ya[2],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=W.z,w.array[y+3]=W.w,w.array[y+4]=X.x,w.array[y+5]=X.y,w.array[y+6]=X.z,w.array[y+7]=X.w,w.array[y+8]=Y.x,w.array[y+9]=Y.y,w.array[y+10]=Y.z,w.array[y+11]=Y.w,y+=12;H=0;for(Z=wa.length;H<Z;H++)ya=w.value[wa[H]],
W=ya[0],X=ya[1],Y=ya[2],ra=ya[3],w.array[y]=W.x,w.array[y+1]=W.y,w.array[y+2]=W.z,w.array[y+3]=W.w,w.array[y+4]=X.x,w.array[y+5]=X.y,w.array[y+6]=X.z,w.array[y+7]=X.w,w.array[y+8]=Y.x,w.array[y+9]=Y.y,w.array[y+10]=Y.z,w.array[y+11]=Y.w,w.array[y+12]=ra.x,w.array[y+13]=ra.y,w.array[y+14]=ra.z,w.array[y+15]=ra.w,y+=16}k.bindBuffer(k.ARRAY_BUFFER,w.buffer);k.bufferData(k.ARRAY_BUFFER,w.array,Ha)}}vb&&(delete ta.__inittedArrays,delete ta.__colorArray,delete ta.__normalArray,delete ta.__tangentArray,
delete ta.__uvArray,delete ta.__uv2Array,delete ta.__faceArray,delete ta.__vertexArray,delete ta.__lineArray,delete ta.__skinIndexArray,delete ta.__skinWeightArray)}}S.verticesNeedUpdate=!1;S.morphTargetsNeedUpdate=!1;S.elementsNeedUpdate=!1;S.uvsNeedUpdate=!1;S.normalsNeedUpdate=!1;S.colorsNeedUpdate=!1;S.tangentsNeedUpdate=!1;S.buffersNeedUpdate=!1;na.attributes&&E(na)}else if(ua instanceof THREE.Ribbon){na=e(ua,S);Da=na.attributes&&u(na);if(S.verticesNeedUpdate||S.colorsNeedUpdate||S.normalsNeedUpdate||
Da){var Cb=S,Wc=k.DYNAMIC_DRAW,Lc=void 0,Mc=void 0,Nc=void 0,Xc=void 0,za=void 0,Yc=void 0,Zc=void 0,$c=void 0,xd=void 0,Za=void 0,Dc=void 0,Fa=void 0,nb=void 0,yd=Cb.vertices,zd=Cb.colors,Ad=Cb.normals,Kd=yd.length,Ld=zd.length,Md=Ad.length,ad=Cb.__vertexArray,bd=Cb.__colorArray,cd=Cb.__normalArray,Nd=Cb.colorsNeedUpdate,Od=Cb.normalsNeedUpdate,sd=Cb.__webglCustomAttributesList;if(Cb.verticesNeedUpdate){for(Lc=0;Lc<Kd;Lc++)Xc=yd[Lc],za=3*Lc,ad[za]=Xc.x,ad[za+1]=Xc.y,ad[za+2]=Xc.z;k.bindBuffer(k.ARRAY_BUFFER,
Cb.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,ad,Wc)}if(Nd){for(Mc=0;Mc<Ld;Mc++)Yc=zd[Mc],za=3*Mc,bd[za]=Yc.r,bd[za+1]=Yc.g,bd[za+2]=Yc.b;k.bindBuffer(k.ARRAY_BUFFER,Cb.__webglColorBuffer);k.bufferData(k.ARRAY_BUFFER,bd,Wc)}if(Od){for(Nc=0;Nc<Md;Nc++)Zc=Ad[Nc],za=3*Nc,cd[za]=Zc.x,cd[za+1]=Zc.y,cd[za+2]=Zc.z;k.bindBuffer(k.ARRAY_BUFFER,Cb.__webglNormalBuffer);k.bufferData(k.ARRAY_BUFFER,cd,Wc)}if(sd){$c=0;for(xd=sd.length;$c<xd;$c++)if(Fa=sd[$c],Fa.needsUpdate&&(void 0===Fa.boundTo||"vertices"===
Fa.boundTo)){za=0;Dc=Fa.value.length;if(1===Fa.size)for(Za=0;Za<Dc;Za++)Fa.array[Za]=Fa.value[Za];else if(2===Fa.size)for(Za=0;Za<Dc;Za++)nb=Fa.value[Za],Fa.array[za]=nb.x,Fa.array[za+1]=nb.y,za+=2;else if(3===Fa.size)if("c"===Fa.type)for(Za=0;Za<Dc;Za++)nb=Fa.value[Za],Fa.array[za]=nb.r,Fa.array[za+1]=nb.g,Fa.array[za+2]=nb.b,za+=3;else for(Za=0;Za<Dc;Za++)nb=Fa.value[Za],Fa.array[za]=nb.x,Fa.array[za+1]=nb.y,Fa.array[za+2]=nb.z,za+=3;else if(4===Fa.size)for(Za=0;Za<Dc;Za++)nb=Fa.value[Za],Fa.array[za]=
nb.x,Fa.array[za+1]=nb.y,Fa.array[za+2]=nb.z,Fa.array[za+3]=nb.w,za+=4;k.bindBuffer(k.ARRAY_BUFFER,Fa.buffer);k.bufferData(k.ARRAY_BUFFER,Fa.array,Wc)}}}S.verticesNeedUpdate=!1;S.colorsNeedUpdate=!1;S.normalsNeedUpdate=!1;na.attributes&&E(na)}else if(ua instanceof THREE.Line){na=e(ua,S);Da=na.attributes&&u(na);if(S.verticesNeedUpdate||S.colorsNeedUpdate||S.lineDistancesNeedUpdate||Da){var Db=S,dd=k.DYNAMIC_DRAW,Oc=void 0,Pc=void 0,Qc=void 0,ed=void 0,La=void 0,fd=void 0,Bd=Db.vertices,Cd=Db.colors,
Dd=Db.lineDistances,Pd=Bd.length,Qd=Cd.length,Rd=Dd.length,gd=Db.__vertexArray,hd=Db.__colorArray,Ed=Db.__lineDistanceArray,Sd=Db.colorsNeedUpdate,Td=Db.lineDistancesNeedUpdate,td=Db.__webglCustomAttributesList,id=void 0,Fd=void 0,$a=void 0,Ec=void 0,ob=void 0,Ga=void 0;if(Db.verticesNeedUpdate){for(Oc=0;Oc<Pd;Oc++)ed=Bd[Oc],La=3*Oc,gd[La]=ed.x,gd[La+1]=ed.y,gd[La+2]=ed.z;k.bindBuffer(k.ARRAY_BUFFER,Db.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,gd,dd)}if(Sd){for(Pc=0;Pc<Qd;Pc++)fd=Cd[Pc],La=
3*Pc,hd[La]=fd.r,hd[La+1]=fd.g,hd[La+2]=fd.b;k.bindBuffer(k.ARRAY_BUFFER,Db.__webglColorBuffer);k.bufferData(k.ARRAY_BUFFER,hd,dd)}if(Td){for(Qc=0;Qc<Rd;Qc++)Ed[Qc]=Dd[Qc];k.bindBuffer(k.ARRAY_BUFFER,Db.__webglLineDistanceBuffer);k.bufferData(k.ARRAY_BUFFER,Ed,dd)}if(td){id=0;for(Fd=td.length;id<Fd;id++)if(Ga=td[id],Ga.needsUpdate&&(void 0===Ga.boundTo||"vertices"===Ga.boundTo)){La=0;Ec=Ga.value.length;if(1===Ga.size)for($a=0;$a<Ec;$a++)Ga.array[$a]=Ga.value[$a];else if(2===Ga.size)for($a=0;$a<Ec;$a++)ob=
Ga.value[$a],Ga.array[La]=ob.x,Ga.array[La+1]=ob.y,La+=2;else if(3===Ga.size)if("c"===Ga.type)for($a=0;$a<Ec;$a++)ob=Ga.value[$a],Ga.array[La]=ob.r,Ga.array[La+1]=ob.g,Ga.array[La+2]=ob.b,La+=3;else for($a=0;$a<Ec;$a++)ob=Ga.value[$a],Ga.array[La]=ob.x,Ga.array[La+1]=ob.y,Ga.array[La+2]=ob.z,La+=3;else if(4===Ga.size)for($a=0;$a<Ec;$a++)ob=Ga.value[$a],Ga.array[La]=ob.x,Ga.array[La+1]=ob.y,Ga.array[La+2]=ob.z,Ga.array[La+3]=ob.w,La+=4;k.bindBuffer(k.ARRAY_BUFFER,Ga.buffer);k.bufferData(k.ARRAY_BUFFER,
Ga.array,dd)}}}S.verticesNeedUpdate=!1;S.colorsNeedUpdate=!1;S.lineDistancesNeedUpdate=!1;na.attributes&&E(na)}else if(ua instanceof THREE.ParticleSystem)if(S instanceof THREE.BufferGeometry)(S.verticesNeedUpdate||S.colorsNeedUpdate)&&i(S,k.DYNAMIC_DRAW,!S.dynamic),S.verticesNeedUpdate=!1,S.colorsNeedUpdate=!1;else{na=e(ua,S);Da=na.attributes&&u(na);if(S.verticesNeedUpdate||S.colorsNeedUpdate||ua.sortParticles||Da){var cc=S,ud=k.DYNAMIC_DRAW,Rc=ua,pb=void 0,dc=void 0,ec=void 0,ha=void 0,fc=void 0,
sc=void 0,jd=cc.vertices,vd=jd.length,wd=cc.colors,Gd=wd.length,vc=cc.__vertexArray,wc=cc.__colorArray,kc=cc.__sortArray,Hd=cc.verticesNeedUpdate,Id=cc.colorsNeedUpdate,lc=cc.__webglCustomAttributesList,Ib=void 0,Fc=void 0,qa=void 0,Jb=void 0,Ba=void 0,ga=void 0;if(Rc.sortParticles){ib.copy(mc);ib.multiplySelf(Rc.matrixWorld);for(pb=0;pb<vd;pb++)ec=jd[pb],Eb.copy(ec),ib.multiplyVector3(Eb),kc[pb]=[Eb.z,pb];kc.sort(n);for(pb=0;pb<vd;pb++)ec=jd[kc[pb][1]],ha=3*pb,vc[ha]=ec.x,vc[ha+1]=ec.y,vc[ha+2]=
ec.z;for(dc=0;dc<Gd;dc++)ha=3*dc,sc=wd[kc[dc][1]],wc[ha]=sc.r,wc[ha+1]=sc.g,wc[ha+2]=sc.b;if(lc){Ib=0;for(Fc=lc.length;Ib<Fc;Ib++)if(ga=lc[Ib],void 0===ga.boundTo||"vertices"===ga.boundTo)if(ha=0,Jb=ga.value.length,1===ga.size)for(qa=0;qa<Jb;qa++)fc=kc[qa][1],ga.array[qa]=ga.value[fc];else if(2===ga.size)for(qa=0;qa<Jb;qa++)fc=kc[qa][1],Ba=ga.value[fc],ga.array[ha]=Ba.x,ga.array[ha+1]=Ba.y,ha+=2;else if(3===ga.size)if("c"===ga.type)for(qa=0;qa<Jb;qa++)fc=kc[qa][1],Ba=ga.value[fc],ga.array[ha]=Ba.r,
ga.array[ha+1]=Ba.g,ga.array[ha+2]=Ba.b,ha+=3;else for(qa=0;qa<Jb;qa++)fc=kc[qa][1],Ba=ga.value[fc],ga.array[ha]=Ba.x,ga.array[ha+1]=Ba.y,ga.array[ha+2]=Ba.z,ha+=3;else if(4===ga.size)for(qa=0;qa<Jb;qa++)fc=kc[qa][1],Ba=ga.value[fc],ga.array[ha]=Ba.x,ga.array[ha+1]=Ba.y,ga.array[ha+2]=Ba.z,ga.array[ha+3]=Ba.w,ha+=4}}else{if(Hd)for(pb=0;pb<vd;pb++)ec=jd[pb],ha=3*pb,vc[ha]=ec.x,vc[ha+1]=ec.y,vc[ha+2]=ec.z;if(Id)for(dc=0;dc<Gd;dc++)sc=wd[dc],ha=3*dc,wc[ha]=sc.r,wc[ha+1]=sc.g,wc[ha+2]=sc.b;if(lc){Ib=
0;for(Fc=lc.length;Ib<Fc;Ib++)if(ga=lc[Ib],ga.needsUpdate&&(void 0===ga.boundTo||"vertices"===ga.boundTo))if(Jb=ga.value.length,ha=0,1===ga.size)for(qa=0;qa<Jb;qa++)ga.array[qa]=ga.value[qa];else if(2===ga.size)for(qa=0;qa<Jb;qa++)Ba=ga.value[qa],ga.array[ha]=Ba.x,ga.array[ha+1]=Ba.y,ha+=2;else if(3===ga.size)if("c"===ga.type)for(qa=0;qa<Jb;qa++)Ba=ga.value[qa],ga.array[ha]=Ba.r,ga.array[ha+1]=Ba.g,ga.array[ha+2]=Ba.b,ha+=3;else for(qa=0;qa<Jb;qa++)Ba=ga.value[qa],ga.array[ha]=Ba.x,ga.array[ha+1]=
Ba.y,ga.array[ha+2]=Ba.z,ha+=3;else if(4===ga.size)for(qa=0;qa<Jb;qa++)Ba=ga.value[qa],ga.array[ha]=Ba.x,ga.array[ha+1]=Ba.y,ga.array[ha+2]=Ba.z,ga.array[ha+3]=Ba.w,ha+=4}}if(Hd||Rc.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,cc.__webglVertexBuffer),k.bufferData(k.ARRAY_BUFFER,vc,ud);if(Id||Rc.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,cc.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,wc,ud);if(lc){Ib=0;for(Fc=lc.length;Ib<Fc;Ib++)if(ga=lc[Ib],ga.needsUpdate||Rc.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,
ga.buffer),k.bufferData(k.ARRAY_BUFFER,ga.array,ud)}}S.verticesNeedUpdate=!1;S.colorsNeedUpdate=!1;na.attributes&&E(na)}}};this.initMaterial=function(a,b,c,d){var e,f,g,h,i,j,m,l,n;a instanceof THREE.MeshDepthMaterial?n="depth":a instanceof THREE.MeshNormalMaterial?n="normal":a instanceof THREE.MeshBasicMaterial?n="basic":a instanceof THREE.MeshLambertMaterial?n="lambert":a instanceof THREE.MeshPhongMaterial?n="phong":a instanceof THREE.LineBasicMaterial?n="basic":a instanceof THREE.LineDashedMaterial?
n="dashed":a instanceof THREE.ParticleBasicMaterial&&(n="particle_basic");if(n){var p=THREE.ShaderLib[n];a.uniforms=THREE.UniformsUtils.clone(p.uniforms);a.vertexShader=p.vertexShader;a.fragmentShader=p.fragmentShader}var s,r,q;e=s=r=q=p=0;for(f=b.length;e<f;e++)g=b[e],g.onlyShadow||(g instanceof THREE.DirectionalLight&&s++,g instanceof THREE.PointLight&&r++,g instanceof THREE.SpotLight&&q++,g instanceof THREE.HemisphereLight&&p++);e=s;f=r;g=q;h=p;p=s=0;for(q=b.length;p<q;p++)r=b[p],r.castShadow&&
(r instanceof THREE.SpotLight&&s++,r instanceof THREE.DirectionalLight&&!r.shadowCascade&&s++);l=s;xc&&d&&d.useVertexTexture?m=1024:(b=k.getParameter(k.MAX_VERTEX_UNIFORM_VECTORS),b=Math.floor((b-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(b=Math.min(d.bones.length,b),b<d.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.bones.length+", this GPU supports just "+b+" (try OpenGL instead of ANGLE)")),m=b);a:{r=a.fragmentShader;q=a.vertexShader;p=a.uniforms;b=a.attributes;s=a.defines;
var c={map:!!a.map,envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,skinning:a.skinning,maxBones:m,useVertexTexture:xc&&d&&d.useVertexTexture,boneTextureWidth:d&&d.boneTextureWidth,boneTextureHeight:d&&d.boneTextureHeight,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,
maxDirLights:e,maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:l,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow,shadowMapSoft:this.shadowMapSoft,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,perPixel:a.perPixel,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide},t,u,v,d=[];n?d.push(n):(d.push(r),d.push(q));for(u in s)d.push(u),d.push(s[u]);for(t in c)d.push(t),d.push(c[t]);
n=d.join();t=0;for(u=R.length;t<u;t++)if(d=R[t],d.code===n){d.usedTimes++;j=d.program;break a}t=[];for(v in s)u=s[v],!1!==u&&(u="#define "+v+" "+u,t.push(u));u=t.join("\n");v=k.createProgram();t=["precision "+U+" float;",u,yc?"#define VERTEX_TEXTURES":"",Q.gammaInput?"#define GAMMA_INPUT":"",Q.gammaOutput?"#define GAMMA_OUTPUT":"",Q.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"","#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+
c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,"#define MAX_BONES "+c.maxBones,c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.boneTextureWidth?"#define N_BONE_PIXEL_X "+
c.boneTextureWidth.toFixed(1):"",c.boneTextureHeight?"#define N_BONE_PIXEL_Y "+c.boneTextureHeight.toFixed(1):"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals?"#define USE_MORPHNORMALS":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapSoft?"#define SHADOWMAP_SOFT":"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?
"#define SHADOWMAP_CASCADE":"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
u=["precision "+U+" float;",c.bumpMap||c.normalMap?"#extension GL_OES_standard_derivatives : enable":"",u,"#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,c.alphaTest?"#define ALPHATEST "+c.alphaTest:"",Q.gammaInput?"#define GAMMA_INPUT":"",Q.gammaOutput?"#define GAMMA_OUTPUT":"",Q.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"",
c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.metal?"#define METAL":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":
"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapSoft?"#define SHADOWMAP_SOFT":"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");u=M("fragment",u+r);t=M("vertex",t+q);k.attachShader(v,t);k.attachShader(v,u);k.linkProgram(v);k.getProgramParameter(v,k.LINK_STATUS)||console.error("Could not initialise shader\nVALIDATE_STATUS: "+k.getProgramParameter(v,k.VALIDATE_STATUS)+
", gl error ["+k.getError()+"]");k.deleteShader(u);k.deleteShader(t);v.uniforms={};v.attributes={};var x;t="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture?t.push("boneTexture"):t.push("boneGlobalMatrices");for(x in p)t.push(x);x=t;t=0;for(u=x.length;t<u;t++)d=x[t],v.uniforms[d]=k.getUniformLocation(v,d);t="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(x=0;x<c.maxMorphTargets;x++)t.push("morphTarget"+
x);for(x=0;x<c.maxMorphNormals;x++)t.push("morphNormal"+x);for(j in b)t.push(j);j=t;x=0;for(b=j.length;x<b;x++)t=j[x],v.attributes[t]=k.getAttribLocation(v,t);v.id=ba++;R.push({program:v,code:n,usedTimes:1});Q.info.memory.programs=R.length;j=v}a.program=j;x=a.program.attributes;if(a.morphTargets){a.numSupportedMorphTargets=0;b="morphTarget";for(j=0;j<this.maxMorphTargets;j++)v=b+j,0<=x[v]&&a.numSupportedMorphTargets++}if(a.morphNormals){a.numSupportedMorphNormals=0;b="morphNormal";for(j=0;j<this.maxMorphNormals;j++)v=
b+j,0<=x[v]&&a.numSupportedMorphNormals++}a.uniformsList=[];for(i in a.uniforms)a.uniformsList.push([a.uniforms[i],i])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?k.disable(k.CULL_FACE):(b===THREE.FrontFaceDirectionCW?k.frontFace(k.CW):k.frontFace(k.CCW),a===THREE.CullFaceBack?k.cullFace(k.BACK):a===THREE.CullFaceFront?k.cullFace(k.FRONT):k.cullFace(k.FRONT_AND_BACK),k.enable(k.CULL_FACE))};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide,a=a.side===THREE.BackSide;ua!==
b&&(b?k.disable(k.CULL_FACE):k.enable(k.CULL_FACE),ua=b);Da!==a&&(a?k.frontFace(k.CW):k.frontFace(k.CCW),Da=a)};this.setDepthTest=function(a){qb!==a&&(a?k.enable(k.DEPTH_TEST):k.disable(k.DEPTH_TEST),qb=a)};this.setDepthWrite=function(a){ub!==a&&(k.depthMask(a),ub=a)};this.setBlending=function(a,b,c,d){a!==ea&&(a===THREE.NoBlending?k.disable(k.BLEND):a===THREE.AdditiveBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.SRC_ALPHA,k.ONE)):a===THREE.SubtractiveBlending?(k.enable(k.BLEND),
k.blendEquation(k.FUNC_ADD),k.blendFunc(k.ZERO,k.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.ZERO,k.SRC_COLOR)):a===THREE.CustomBlending?k.enable(k.BLEND):(k.enable(k.BLEND),k.blendEquationSeparate(k.FUNC_ADD,k.FUNC_ADD),k.blendFuncSeparate(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA)),ea=a);if(a===THREE.CustomBlending){if(b!==Ha&&(k.blendEquation(L(b)),Ha=b),c!==gb||d!==vb)k.blendFunc(L(c),L(d)),gb=c,vb=d}else vb=
gb=Ha=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.__webglTexture=k.createTexture(),Q.info.memory.textures++);k.activeTexture(k.TEXTURE0+b);k.bindTexture(k.TEXTURE_2D,a.__webglTexture);k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,a.flipY);k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);k.pixelStorei(k.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=0===(c.width&c.width-1)&&0===(c.height&c.height-1),e=L(a.format),f=L(a.type);B(k.TEXTURE_2D,
a,d);var g=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<g.length&&d){for(var h=0,i=g.length;h<i;h++)c=g[h],k.texImage2D(k.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else k.texImage2D(k.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture){h=0;for(i=g.length;h<i;h++)c=g[h],k.compressedTexImage2D(k.TEXTURE_2D,h,e,c.width,c.height,0,c.data)}else if(0<g.length&&d){h=0;for(i=g.length;h<i;h++)c=g[h],k.texImage2D(k.TEXTURE_2D,h,e,e,f,c);a.generateMipmaps=
!1}else k.texImage2D(k.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&k.generateMipmap(k.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else k.activeTexture(k.TEXTURE0+b),k.bindTexture(k.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.__webglTexture=k.createTexture();Q.info.memory.textures++;var c=0===(a.width&
a.width-1)&&0===(a.height&a.height-1),d=L(a.format),e=L(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];k.bindTexture(k.TEXTURE_CUBE_MAP,a.__webglTexture);B(k.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=k.createFramebuffer();a.__webglRenderbuffer[f]=k.createRenderbuffer();k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=k.TEXTURE_CUBE_MAP_POSITIVE_X+f;k.bindFramebuffer(k.FRAMEBUFFER,a.__webglFramebuffer[f]);k.framebufferTexture2D(k.FRAMEBUFFER,
k.COLOR_ATTACHMENT0,h,g.__webglTexture,0);J(a.__webglRenderbuffer[f],a)}c&&k.generateMipmap(k.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=k.createFramebuffer(),a.__webglRenderbuffer=k.createRenderbuffer(),k.bindTexture(k.TEXTURE_2D,a.__webglTexture),B(k.TEXTURE_2D,a,c),k.texImage2D(k.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=k.TEXTURE_2D,k.bindFramebuffer(k.FRAMEBUFFER,a.__webglFramebuffer),k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,d,a.__webglTexture,0),J(a.__webglRenderbuffer,
a),c&&k.generateMipmap(k.TEXTURE_2D);b?k.bindTexture(k.TEXTURE_CUBE_MAP,null):k.bindTexture(k.TEXTURE_2D,null);k.bindRenderbuffer(k.RENDERBUFFER,null);k.bindFramebuffer(k.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=Na,a=kb,d=na,e=xb);b!==P&&(k.bindFramebuffer(k.FRAMEBUFFER,b),k.viewport(d,e,c,a),P=b);hb=c;Ea=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);this.addPostPlugin(new THREE.SpritePlugin);
this.addPostPlugin(new THREE.LensFlarePlugin)};THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0};
THREE.WebGLRenderTarget.prototype.clone=function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;return a};THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.RenderableVertex=function(){this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};THREE.RenderableFace3=function(){this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidWorld=new THREE.Vector3;this.centroidScreen=new THREE.Vector3;this.normalWorld=new THREE.Vector3;this.vertexNormalsWorld=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.material=this.color=null;this.uvs=[[]];this.z=null};THREE.RenderableFace4=function(){this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.v4=new THREE.RenderableVertex;this.centroidWorld=new THREE.Vector3;this.centroidScreen=new THREE.Vector3;this.normalWorld=new THREE.Vector3;this.vertexNormalsWorld=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.material=this.color=null;this.uvs=[[]];this.z=null};THREE.RenderableObject=function(){this.z=this.object=null};THREE.RenderableParticle=function(){this.rotation=this.z=this.y=this.x=this.object=null;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.z=null;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.material=null};THREE.ColorUtils={adjustHSV:function(a,b,c,d){var e=THREE.ColorUtils.__hsv;a.getHSV(e);e.h=THREE.Math.clamp(e.h+b,0,1);e.s=THREE.Math.clamp(e.s+c,0,1);e.v=THREE.Math.clamp(e.v+d,0,1);a.setHSV(e.h,e.s,e.v)}};THREE.ColorUtils.__hsv={h:0,s:0,v:0};THREE.GeometryUtils={merge:function(a,b){var c,d,e=a.vertices.length,f=b instanceof THREE.Mesh?b.geometry:b,g=a.vertices,h=f.vertices,i=a.faces,j=f.faces,m=a.faceVertexUvs[0],f=f.faceVertexUvs[0];b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),c=b.matrix,d=new THREE.Matrix4,d.extractRotation(c,b.scale));for(var p=0,n=h.length;p<n;p++){var s=h[p].clone();c&&c.multiplyVector3(s);g.push(s)}p=0;for(n=j.length;p<n;p++){var s=j[p],r,l,t=s.vertexNormals,u=s.vertexColors;s instanceof THREE.Face3?
r=new THREE.Face3(s.a+e,s.b+e,s.c+e):s instanceof THREE.Face4&&(r=new THREE.Face4(s.a+e,s.b+e,s.c+e,s.d+e));r.normal.copy(s.normal);d&&d.multiplyVector3(r.normal);g=0;for(h=t.length;g<h;g++)l=t[g].clone(),d&&d.multiplyVector3(l),r.vertexNormals.push(l);r.color.copy(s.color);g=0;for(h=u.length;g<h;g++)l=u[g],r.vertexColors.push(l.clone());r.materialIndex=s.materialIndex;r.centroid.copy(s.centroid);c&&c.multiplyVector3(r.centroid);i.push(r)}p=0;for(n=f.length;p<n;p++){c=f[p];d=[];g=0;for(h=c.length;g<
h;g++)d.push(new THREE.Vector2(c[g].x,c[g].y));m.push(d)}},removeMaterials:function(a,b){for(var c={},d=0,e=b.length;d<e;d++)c[b[d]]=!0;for(var f,g=[],d=0,e=a.faces.length;d<e;d++)f=a.faces[d],f.materialIndex in c||g.push(f);a.faces=g},randomPointInTriangle:function(a,b,c){var d,e,f,g=new THREE.Vector3,h=THREE.GeometryUtils.__v1;d=THREE.GeometryUtils.random();e=THREE.GeometryUtils.random();1<d+e&&(d=1-d,e=1-e);f=1-d-e;g.copy(a);g.multiplyScalar(d);h.copy(b);h.multiplyScalar(e);g.addSelf(h);h.copy(c);
h.multiplyScalar(f);g.addSelf(h);return g},randomPointInFace:function(a,b,c){var d,e,f;if(a instanceof THREE.Face3)return d=b.vertices[a.a],e=b.vertices[a.b],f=b.vertices[a.c],THREE.GeometryUtils.randomPointInTriangle(d,e,f);if(a instanceof THREE.Face4){d=b.vertices[a.a];e=b.vertices[a.b];f=b.vertices[a.c];var b=b.vertices[a.d],g;c?a._area1&&a._area2?(c=a._area1,g=a._area2):(c=THREE.GeometryUtils.triangleArea(d,e,b),g=THREE.GeometryUtils.triangleArea(e,f,b),a._area1=c,a._area2=g):(c=THREE.GeometryUtils.triangleArea(d,
e,b),g=THREE.GeometryUtils.triangleArea(e,f,b));return THREE.GeometryUtils.random()*(c+g)<c?THREE.GeometryUtils.randomPointInTriangle(d,e,b):THREE.GeometryUtils.randomPointInTriangle(e,f,b)}},randomPointsInGeometry:function(a,b){function c(a){function b(c,d){if(d<c)return c;var e=c+Math.floor((d-c)/2);return j[e]>a?b(c,e-1):j[e]<a?b(e+1,d):e}return b(0,j.length-1)}var d,e,f=a.faces,g=a.vertices,h=f.length,i=0,j=[],m,p,n,s;for(e=0;e<h;e++)d=f[e],d instanceof THREE.Face3?(m=g[d.a],p=g[d.b],n=g[d.c],
d._area=THREE.GeometryUtils.triangleArea(m,p,n)):d instanceof THREE.Face4&&(m=g[d.a],p=g[d.b],n=g[d.c],s=g[d.d],d._area1=THREE.GeometryUtils.triangleArea(m,p,s),d._area2=THREE.GeometryUtils.triangleArea(p,n,s),d._area=d._area1+d._area2),i+=d._area,j[e]=i;d=[];for(e=0;e<b;e++)g=THREE.GeometryUtils.random()*i,g=c(g),d[e]=THREE.GeometryUtils.randomPointInFace(f[g],a,!0);return d},triangleArea:function(a,b,c){var d=THREE.GeometryUtils.__v1,e=THREE.GeometryUtils.__v2;d.sub(b,a);e.sub(c,a);d.crossSelf(e);
return 0.5*d.length()},center:function(a){a.computeBoundingBox();var b=a.boundingBox,c=new THREE.Vector3;c.add(b.min,b.max);c.multiplyScalar(-0.5);a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x,c.y,c.z));a.computeBoundingBox();return c},normalizeUVs:function(a){for(var a=a.faceVertexUvs[0],b=0,c=a.length;b<c;b++)for(var d=a[b],e=0,f=d.length;e<f;e++)1!==d[e].x&&(d[e].x-=Math.floor(d[e].x)),1!==d[e].y&&(d[e].y-=Math.floor(d[e].y))},triangulateQuads:function(a){var b,c,d,e,f=[],g=[],h=[];b=0;
for(c=a.faceUvs.length;b<c;b++)g[b]=[];b=0;for(c=a.faceVertexUvs.length;b<c;b++)h[b]=[];b=0;for(c=a.faces.length;b<c;b++)if(d=a.faces[b],d instanceof THREE.Face4){e=d.a;var i=d.b,j=d.c,m=d.d,p=new THREE.Face3,n=new THREE.Face3;p.color.copy(d.color);n.color.copy(d.color);p.materialIndex=d.materialIndex;n.materialIndex=d.materialIndex;p.a=e;p.b=i;p.c=m;n.a=i;n.b=j;n.c=m;4===d.vertexColors.length&&(p.vertexColors[0]=d.vertexColors[0].clone(),p.vertexColors[1]=d.vertexColors[1].clone(),p.vertexColors[2]=
d.vertexColors[3].clone(),n.vertexColors[0]=d.vertexColors[1].clone(),n.vertexColors[1]=d.vertexColors[2].clone(),n.vertexColors[2]=d.vertexColors[3].clone());f.push(p,n);d=0;for(e=a.faceVertexUvs.length;d<e;d++)a.faceVertexUvs[d].length&&(p=a.faceVertexUvs[d][b],i=p[1],j=p[2],m=p[3],p=[p[0].clone(),i.clone(),m.clone()],i=[i.clone(),j.clone(),m.clone()],h[d].push(p,i));d=0;for(e=a.faceUvs.length;d<e;d++)a.faceUvs[d].length&&(i=a.faceUvs[d][b],g[d].push(i,i))}else{f.push(d);d=0;for(e=a.faceUvs.length;d<
e;d++)g[d].push(a.faceUvs[d][b]);d=0;for(e=a.faceVertexUvs.length;d<e;d++)h[d].push(a.faceVertexUvs[d][b])}a.faces=f;a.faceUvs=g;a.faceVertexUvs=h;a.computeCentroids();a.computeFaceNormals();a.computeVertexNormals();a.hasTangents&&a.computeTangents()},explode:function(a){for(var b=[],c=0,d=a.faces.length;c<d;c++){var e=b.length,f=a.faces[c];if(f instanceof THREE.Face4){var g=f.a,h=f.b,i=f.c,g=a.vertices[g],h=a.vertices[h],i=a.vertices[i],j=a.vertices[f.d];b.push(g.clone());b.push(h.clone());b.push(i.clone());
b.push(j.clone());f.a=e;f.b=e+1;f.c=e+2;f.d=e+3}else g=f.a,h=f.b,i=f.c,g=a.vertices[g],h=a.vertices[h],i=a.vertices[i],b.push(g.clone()),b.push(h.clone()),b.push(i.clone()),f.a=e,f.b=e+1,f.c=e+2}a.vertices=b;delete a.__tmpVertices},tessellate:function(a,b){var c,d,e,f,g,h,i,j,m,p,n,s,r,l,t,u,E,A,q,F=[],z=[];c=0;for(d=a.faceVertexUvs.length;c<d;c++)z[c]=[];c=0;for(d=a.faces.length;c<d;c++)if(e=a.faces[c],e instanceof THREE.Face3)if(f=e.a,g=e.b,h=e.c,j=a.vertices[f],m=a.vertices[g],p=a.vertices[h],
s=j.distanceTo(m),r=m.distanceTo(p),n=j.distanceTo(p),s>b||r>b||n>b){i=a.vertices.length;A=e.clone();q=e.clone();s>=r&&s>=n?(j=j.clone(),j.lerpSelf(m,0.5),A.a=f,A.b=i,A.c=h,q.a=i,q.b=g,q.c=h,3===e.vertexNormals.length&&(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[1],0.5),A.vertexNormals[1].copy(f),q.vertexNormals[0].copy(f)),3===e.vertexColors.length&&(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[1],0.5),A.vertexColors[1].copy(f),q.vertexColors[0].copy(f)),e=0):r>=s&&r>=n?(j=
m.clone(),j.lerpSelf(p,0.5),A.a=f,A.b=g,A.c=i,q.a=i,q.b=h,q.c=f,3===e.vertexNormals.length&&(f=e.vertexNormals[1].clone(),f.lerpSelf(e.vertexNormals[2],0.5),A.vertexNormals[2].copy(f),q.vertexNormals[0].copy(f),q.vertexNormals[1].copy(e.vertexNormals[2]),q.vertexNormals[2].copy(e.vertexNormals[0])),3===e.vertexColors.length&&(f=e.vertexColors[1].clone(),f.lerpSelf(e.vertexColors[2],0.5),A.vertexColors[2].copy(f),q.vertexColors[0].copy(f),q.vertexColors[1].copy(e.vertexColors[2]),q.vertexColors[2].copy(e.vertexColors[0])),
e=1):(j=j.clone(),j.lerpSelf(p,0.5),A.a=f,A.b=g,A.c=i,q.a=i,q.b=g,q.c=h,3===e.vertexNormals.length&&(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[2],0.5),A.vertexNormals[2].copy(f),q.vertexNormals[0].copy(f)),3===e.vertexColors.length&&(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[2],0.5),A.vertexColors[2].copy(f),q.vertexColors[0].copy(f)),e=2);F.push(A,q);a.vertices.push(j);f=0;for(g=a.faceVertexUvs.length;f<g;f++)a.faceVertexUvs[f].length&&(j=a.faceVertexUvs[f][c],q=j[0],h=
j[1],A=j[2],0===e?(m=q.clone(),m.lerpSelf(h,0.5),j=[q.clone(),m.clone(),A.clone()],h=[m.clone(),h.clone(),A.clone()]):1===e?(m=h.clone(),m.lerpSelf(A,0.5),j=[q.clone(),h.clone(),m.clone()],h=[m.clone(),A.clone(),q.clone()]):(m=q.clone(),m.lerpSelf(A,0.5),j=[q.clone(),h.clone(),m.clone()],h=[m.clone(),h.clone(),A.clone()]),z[f].push(j,h))}else{F.push(e);f=0;for(g=a.faceVertexUvs.length;f<g;f++)z[f].push(a.faceVertexUvs[f][c])}else if(f=e.a,g=e.b,h=e.c,i=e.d,j=a.vertices[f],m=a.vertices[g],p=a.vertices[h],
n=a.vertices[i],s=j.distanceTo(m),r=m.distanceTo(p),l=p.distanceTo(n),t=j.distanceTo(n),s>b||r>b||l>b||t>b){u=a.vertices.length;E=a.vertices.length+1;A=e.clone();q=e.clone();s>=r&&s>=l&&s>=t||l>=r&&l>=s&&l>=t?(s=j.clone(),s.lerpSelf(m,0.5),m=p.clone(),m.lerpSelf(n,0.5),A.a=f,A.b=u,A.c=E,A.d=i,q.a=u,q.b=g,q.c=h,q.d=E,4===e.vertexNormals.length&&(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[1],0.5),g=e.vertexNormals[2].clone(),g.lerpSelf(e.vertexNormals[3],0.5),A.vertexNormals[1].copy(f),
A.vertexNormals[2].copy(g),q.vertexNormals[0].copy(f),q.vertexNormals[3].copy(g)),4===e.vertexColors.length&&(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[1],0.5),g=e.vertexColors[2].clone(),g.lerpSelf(e.vertexColors[3],0.5),A.vertexColors[1].copy(f),A.vertexColors[2].copy(g),q.vertexColors[0].copy(f),q.vertexColors[3].copy(g)),e=0):(s=m.clone(),s.lerpSelf(p,0.5),m=n.clone(),m.lerpSelf(j,0.5),A.a=f,A.b=g,A.c=u,A.d=E,q.a=E,q.b=u,q.c=h,q.d=i,4===e.vertexNormals.length&&(f=e.vertexNormals[1].clone(),
f.lerpSelf(e.vertexNormals[2],0.5),g=e.vertexNormals[3].clone(),g.lerpSelf(e.vertexNormals[0],0.5),A.vertexNormals[2].copy(f),A.vertexNormals[3].copy(g),q.vertexNormals[0].copy(g),q.vertexNormals[1].copy(f)),4===e.vertexColors.length&&(f=e.vertexColors[1].clone(),f.lerpSelf(e.vertexColors[2],0.5),g=e.vertexColors[3].clone(),g.lerpSelf(e.vertexColors[0],0.5),A.vertexColors[2].copy(f),A.vertexColors[3].copy(g),q.vertexColors[0].copy(g),q.vertexColors[1].copy(f)),e=1);F.push(A,q);a.vertices.push(s,m);
f=0;for(g=a.faceVertexUvs.length;f<g;f++)a.faceVertexUvs[f].length&&(j=a.faceVertexUvs[f][c],q=j[0],h=j[1],A=j[2],j=j[3],0===e?(m=q.clone(),m.lerpSelf(h,0.5),p=A.clone(),p.lerpSelf(j,0.5),q=[q.clone(),m.clone(),p.clone(),j.clone()],h=[m.clone(),h.clone(),A.clone(),p.clone()]):(m=h.clone(),m.lerpSelf(A,0.5),p=j.clone(),p.lerpSelf(q,0.5),q=[q.clone(),h.clone(),m.clone(),p.clone()],h=[p.clone(),m.clone(),A.clone(),j.clone()]),z[f].push(q,h))}else{F.push(e);f=0;for(g=a.faceVertexUvs.length;f<g;f++)z[f].push(a.faceVertexUvs[f][c])}a.faces=
F;a.faceVertexUvs=z}};THREE.GeometryUtils.random=THREE.Math.random16;THREE.GeometryUtils.__v1=new THREE.Vector3;THREE.GeometryUtils.__v2=new THREE.Vector3;THREE.ImageUtils={crossOrigin:"anonymous",loadTexture:function(a,b,c,d){var e=new Image,f=new THREE.Texture(e,b),b=new THREE.ImageLoader;b.addEventListener("load",function(a){f.image=a.content;f.needsUpdate=!0;c&&c(f)});b.addEventListener("error",function(a){d&&d(a.message)});b.crossOrigin=this.crossOrigin;b.load(a,e);f.sourceFile=a;return f},loadCompressedTexture:function(a,b,c,d){var e=new THREE.CompressedTexture;e.mapping=b;var f=new XMLHttpRequest;f.onload=function(){var a=THREE.ImageUtils.parseDDS(f.response,
!0);e.format=a.format;e.mipmaps=a.mipmaps;e.image.width=a.width;e.image.height=a.height;e.generateMipmaps=!1;e.needsUpdate=!0;c&&c(e)};f.onerror=d;f.open("GET",a,!0);f.responseType="arraybuffer";f.send(null);return e},loadTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.Texture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;for(var b=0,g=a.length;b<g;++b){var h=new Image;e[b]=h;h.onload=function(){e.loadCount+=1;6===e.loadCount&&(f.needsUpdate=!0,c&&c(f))};h.onerror=d;h.crossOrigin=
this.crossOrigin;h.src=a[b]}return f},loadCompressedTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;b=function(a,b){return function(){var d=THREE.ImageUtils.parseDDS(a.response,!0);b.format=d.format;b.mipmaps=d.mipmaps;b.width=d.width;b.height=d.height;e.loadCount+=1;6===e.loadCount&&(f.format=d.format,f.needsUpdate=!0,c&&c(f))}};if(a instanceof Array)for(var g=0,h=a.length;g<h;++g){var i={};
e[g]=i;var j=new XMLHttpRequest;j.onload=b(j,i);j.onerror=d;i=a[g];j.open("GET",i,!0);j.responseType="arraybuffer";j.send(null)}else j=new XMLHttpRequest,j.onload=function(){var a=THREE.ImageUtils.parseDDS(j.response,!0);if(a.isCubemap){for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var g=0;g<a.mipmapCount;g++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+g]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}f.format=a.format;f.needsUpdate=!0;c&&c(f)}},j.onerror=
d,j.open("GET",a,!0),j.responseType="arraybuffer",j.send(null);return f},parseDDS:function(a,b){function c(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}var d={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},e=c("DXT1"),f=c("DXT3"),g=c("DXT5"),h=new Int32Array(a,0,31);if(542327876!==h[0])return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"),d;if(!h[20]&4)return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),
d;var i=h[21];switch(i){case e:e=8;d.format=THREE.RGB_S3TC_DXT1_Format;break;case f:e=16;d.format=THREE.RGBA_S3TC_DXT3_Format;break;case g:e=16;d.format=THREE.RGBA_S3TC_DXT5_Format;break;default:return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ",String.fromCharCode(i&255,i>>8&255,i>>16&255,i>>24&255)),d}d.mipmapCount=1;h[2]&131072&&!1!==b&&(d.mipmapCount=Math.max(1,h[7]));d.isCubemap=h[28]&512?!0:!1;d.width=h[4];d.height=h[3];for(var h=h[1]+4,f=d.width,g=d.height,i=d.isCubemap?
6:1,j=0;j<i;j++){for(var m=0;m<d.mipmapCount;m++){var p=Math.max(4,f)/4*Math.max(4,g)/4*e,n={data:new Uint8Array(a,h,p),width:f,height:g};d.mipmaps.push(n);h+=p;f=Math.max(0.5*f,1);g=Math.max(0.5*g,1)}f=d.width;g=d.height}return d},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]},b=b|1,d=a.width,e=a.height,f=document.createElement("canvas");f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,
0,d,e).data,i=g.createImageData(d,e),j=i.data,m=0;m<d;m++)for(var p=0;p<e;p++){var n=0>p-1?0:p-1,s=p+1>e-1?e-1:p+1,r=0>m-1?0:m-1,l=m+1>d-1?d-1:m+1,t=[],u=[0,0,h[4*(p*d+m)]/255*b];t.push([-1,0,h[4*(p*d+r)]/255*b]);t.push([-1,-1,h[4*(n*d+r)]/255*b]);t.push([0,-1,h[4*(n*d+m)]/255*b]);t.push([1,-1,h[4*(n*d+l)]/255*b]);t.push([1,0,h[4*(p*d+l)]/255*b]);t.push([1,1,h[4*(s*d+l)]/255*b]);t.push([0,1,h[4*(s*d+m)]/255*b]);t.push([-1,1,h[4*(s*d+r)]/255*b]);n=[];r=t.length;for(s=0;s<r;s++){var l=t[s],E=t[(s+1)%
r],l=[l[0]-u[0],l[1]-u[1],l[2]-u[2]],E=[E[0]-u[0],E[1]-u[1],E[2]-u[2]];n.push(c([l[1]*E[2]-l[2]*E[1],l[2]*E[0]-l[0]*E[2],l[0]*E[1]-l[1]*E[0]]))}t=[0,0,0];for(s=0;s<n.length;s++)t[0]+=n[s][0],t[1]+=n[s][1],t[2]+=n[s][2];t[0]/=n.length;t[1]/=n.length;t[2]/=n.length;u=4*(p*d+m);j[u]=255*((t[0]+1)/2)|0;j[u+1]=255*((t[1]+1)/2)|0;j[u+2]=255*t[2]|0;j[u+3]=255}g.putImageData(i,0,0);return f},generateDataTexture:function(a,b,c){for(var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g),
c=Math.floor(255*c.b),h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};THREE.ShaderUtils={lib:{fresnel:{uniforms:{mRefractionRatio:{type:"f",value:1.02},mFresnelBias:{type:"f",value:0.1},mFresnelPower:{type:"f",value:2},mFresnelScale:{type:"f",value:1},tCube:{type:"t",value:null}},fragmentShader:"uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
vertexShader:"uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\nvec3 I = worldPosition.xyz - cameraPosition;\nvReflect = reflect( I, worldNormal );\nvRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"},
normal:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,
1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},uDiffuseColor:{type:"c",value:new THREE.Color(16777215)},uSpecularColor:{type:"c",value:new THREE.Color(1118481)},uAmbientColor:{type:"c",value:new THREE.Color(16777215)},uShininess:{type:"f",value:30},uOpacity:{type:"f",value:1},useRefract:{type:"i",value:0},uRefractionRatio:{type:"f",value:0.98},uReflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,
1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"].join("\n")},
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:"varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"}}};THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){return this.faces[this.face][this.weight][this.style]},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=a},drawText:function(a){for(var b=this.getFace(),c=this.size/b.resolution,d=
0,e=String(a).split(""),f=e.length,g=[],a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,i,j,m,p,n,s,r,l,t,u=b.glyphs[a]||b.glyphs["?"];if(u){if(u.o){b=u._cachedOutline||(u._cachedOutline=u.o.split(" "));j=b.length;for(a=0;a<j;)switch(i=b[a++],i){case "m":i=b[a++]*c+d;m=b[a++]*c;e.moveTo(i,m);break;case "l":i=b[a++]*c+d;m=b[a++]*c;e.lineTo(i,m);break;case "q":i=b[a++]*
c+d;m=b[a++]*c;s=b[a++]*c+d;r=b[a++]*c;e.quadraticCurveTo(s,r,i,m);if(g=f[f.length-1]){p=g.x;n=g.y;g=1;for(h=this.divisions;g<=h;g++){var E=g/h;THREE.Shape.Utils.b2(E,p,s,i);THREE.Shape.Utils.b2(E,n,r,m)}}break;case "b":if(i=b[a++]*c+d,m=b[a++]*c,s=b[a++]*c+d,r=b[a++]*-c,l=b[a++]*c+d,t=b[a++]*-c,e.bezierCurveTo(i,m,s,r,l,t),g=f[f.length-1]){p=g.x;n=g.y;g=1;for(h=this.divisions;g<=h;g++)E=g/h,THREE.Shape.Utils.b3(E,p,s,l,i),THREE.Shape.Utils.b3(E,n,r,t,m)}}}return{offset:u.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){var b=b||{},c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],i,j,m;if(0<b(a))for(j=0;j<e;j++)g[j]=j;else for(j=0;j<e;j++)g[j]=e-1-j;var p=2*e;for(j=e-1;2<e;){if(0>=p--){console.log("Warning, unable to triangulate polygon!");break}i=j;e<=i&&(i=0);j=i+1;e<=j&&(j=0);m=j+1;e<=m&&(m=0);var n;a:{n=a;var s=i,r=j,l=m,t=e,u=g,E=void 0,A=void 0,q=void 0,F=void 0,z=void 0,
x=void 0,v=void 0,I=void 0,C=void 0,A=n[u[s]].x,q=n[u[s]].y,F=n[u[r]].x,z=n[u[r]].y,x=n[u[l]].x,v=n[u[l]].y;if(1E-10>(F-A)*(v-q)-(z-q)*(x-A))n=!1;else{for(E=0;E<t;E++)if(!(E==s||E==r||E==l)){var I=n[u[E]].x,C=n[u[E]].y,G=void 0,M=void 0,B=void 0,J=void 0,D=void 0,L=void 0,K=void 0,U=void 0,N=void 0,ia=void 0,sa=void 0,O=void 0,G=B=D=void 0,G=x-F,M=v-z,B=A-x,J=q-v,D=F-A,L=z-q,K=I-A,U=C-q,N=I-F,ia=C-z,sa=I-x,O=C-v,G=G*ia-M*N,D=D*U-L*K,B=B*O-J*sa;if(0<=G&&0<=B&&0<=D){n=!1;break a}}n=!0}}if(n){f.push([a[g[i]],
a[g[j]],a[g[m]]]);h.push([g[i],g[j],g[m]]);i=j;for(m=j+1;m<e;i++,m++)g[i]=g[m];e--;p=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,i;g<=h;)if(d=Math.floor(g+(h-g)/2),i=c[d]-f,0>i)g=d+1;else if(0<i)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4,a=a+1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().subSelf(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().subSelf(this.v1);b.multiplyScalar(a).addSelf(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(){return this.v2.clone().subSelf(this.v1).normalize()};
THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};
THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};
THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;this.aClockwise||(a=1-a);b=this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){var a=0.5*(c-a),d=0.5*(d-b),f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.sub(this.v2,this.v1);b.multiplyScalar(a);b.addSelf(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e,a=(d.length-1)*a;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};
THREE.CurvePath.prototype.getPoint=function(a){for(var b=a*this.getLength(),c=this.getCurveLengths(),a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,i,j,m,p=a[0]instanceof THREE.Vector3;m=p?new THREE.Vector3:new THREE.Vector2;i=0;for(j=a.length;i<j;i++)h=a[i],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),p&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),m.addSelf(h);a={minX:e,minY:f,maxX:b,maxY:c,centroid:m.divideScalar(j)};p&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,i;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,i=g/c.maxX,i=b.getUtoTmapping(i,g),g=b.getPoint(i),h=b.getNormalVector(i).multiplyScalar(h),f.x=g.x+h.x,f.y=g.y+h.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.rotationWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.rotationObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.rotationObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=
!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.rotationWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.rotationObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),i=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(i);i=i.getPoint(g?1:0);h.push(i.x);h.push(i.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));return b};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);var a=a||12,c=[],d,e,f,g,h,i,j,m,p,n,s,r,l;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];i=f[3];p=f[0];n=f[1];0<c.length?(g=c[c.length-1],s=g.x,
r=g.y):(g=this.actions[d-1].args,s=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)l=f/a,g=THREE.Shape.Utils.b2(l,s,p,h),l=THREE.Shape.Utils.b2(l,r,n,i),c.push(new THREE.Vector2(g,l));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];i=f[5];p=f[0];n=f[1];j=f[2];m=f[3];0<c.length?(g=c[c.length-1],s=g.x,r=g.y):(g=this.actions[d-1].args,s=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)l=f/a,g=THREE.Shape.Utils.b3(l,s,p,j,h),l=THREE.Shape.Utils.b3(l,r,n,m,i),c.push(new THREE.Vector2(g,l));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;l=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;l=l.concat(f[0]);l=new THREE.SplineCurve(l);for(f=1;f<=g;f++)c.push(l.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];i=f[1];n=f[2];j=f[3];g=f[4];p=!!f[5];s=g-j;r=2*a;for(f=1;f<=r;f++)l=f/r,p||(l=1-l),l=j+l*s,g=h+n*Math.cos(l),l=i+n*Math.sin(l),c.push(new THREE.Vector2(g,l));break;case THREE.PathActions.ELLIPSE:h=f[0];i=f[1];n=f[2];m=f[3];j=f[4];g=f[5];p=!!f[6];s=g-j;r=2*a;for(f=1;f<=r;f++)l=f/r,p||
(l=1-l),l=j+l*s,g=h+n*Math.cos(l),l=i+m*Math.sin(l),c.push(new THREE.Vector2(g,l))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(){var a,b,c,d,e=[],f=new THREE.Path;a=0;for(b=this.actions.length;a<b;a++)c=this.actions[a],d=c.args,c=c.action,c==THREE.PathActions.MOVE_TO&&0!=f.actions.length&&(e.push(f),f=new THREE.Path),f[c].apply(f,d);0!=f.actions.length&&e.push(f);if(0==e.length)return[];var g;d=[];a=!THREE.Shape.Utils.isClockWise(e[0].getPoints());if(1==e.length)return f=e[0],g=new THREE.Shape,g.actions=f.actions,g.curves=f.curves,d.push(g),d;if(a){g=new THREE.Shape;a=0;for(b=e.length;a<
b;a++)f=e[a],THREE.Shape.Utils.isClockWise(f.getPoints())?(g.actions=f.actions,g.curves=f.curves,d.push(g),g=new THREE.Shape):g.holes.push(f)}else{a=0;for(b=e.length;a<b;a++)f=e[a],THREE.Shape.Utils.isClockWise(f.getPoints())?(g&&d.push(g),g=new THREE.Shape,g.actions=f.actions,g.curves=f.curves):g.holes.push(f);d.push(g)}return d};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};
THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};
THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={removeHoles:function(a,b){var c=a.concat(),d=c.concat(),e,f,g,h,i,j,m,p,n,s,r=[];for(i=0;i<b.length;i++){j=b[i];Array.prototype.push.apply(d,j);f=Number.POSITIVE_INFINITY;for(e=0;e<j.length;e++){n=j[e];s=[];for(p=0;p<c.length;p++)m=c[p],m=n.distanceToSquared(m),s.push(m),m<f&&(f=m,g=e,h=p)}e=0<=h-1?h-1:c.length-1;f=0<=g-1?g-1:j.length-1;var l=[j[g],c[h],c[e]];p=THREE.FontUtils.Triangulate.area(l);var t=[j[g],j[f],c[h]];n=THREE.FontUtils.Triangulate.area(t);s=h;m=g;h+=1;g+=-1;0>
h&&(h+=c.length);h%=c.length;0>g&&(g+=j.length);g%=j.length;e=0<=h-1?h-1:c.length-1;f=0<=g-1?g-1:j.length-1;l=[j[g],c[h],c[e]];l=THREE.FontUtils.Triangulate.area(l);t=[j[g],j[f],c[h]];t=THREE.FontUtils.Triangulate.area(t);p+n>l+t&&(h=s,g=m,0>h&&(h+=c.length),h%=c.length,0>g&&(g+=j.length),g%=j.length,e=0<=h-1?h-1:c.length-1,f=0<=g-1?g-1:j.length-1);p=c.slice(0,h);n=c.slice(h);s=j.slice(g);m=j.slice(0,g);f=[j[g],j[f],c[h]];r.push([j[g],c[h],c[e]]);r.push(f);c=p.concat(s).concat(m).concat(n)}return{shape:c,
isolatedPts:r,allpoints:d}},triangulateShape:function(a,b){var c=THREE.Shape.Utils.removeHoles(a,b),d=c.allpoints,e=c.isolatedPts,c=THREE.FontUtils.Triangulate(c.shape,!1),f,g,h,i,j={};f=0;for(g=d.length;f<g;f++)i=d[f].x+":"+d[f].y,void 0!==j[i]&&console.log("Duplicate point",i),j[i]=f;f=0;for(g=c.length;f<g;f++){h=c[f];for(d=0;3>d;d++)i=h[d].x+":"+h[d].y,i=j[i],void 0!==i&&(h[d]=i)}f=0;for(g=e.length;f<g;f++){h=e[f];for(d=0;3>d;d++)i=h[d].x+":"+h[d].y,i=j[i],void 0!==i&&(h[d]=i)}return c.concat(e)},
isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+
this.b3p3(a,e)}};THREE.AnimationHandler=function(){var a=[],b={},c={update:function(b){for(var c=0;c<a.length;c++)a[c].update(b)},addToUpdate:function(b){-1===a.indexOf(b)&&a.push(b)},removeFromUpdate:function(b){b=a.indexOf(b);-1!==b&&a.splice(b,1)},add:function(a){void 0!==b[a.name]&&console.log("THREE.AnimationHandler.add: Warning! "+a.name+" already exists in library. Overwriting.");b[a.name]=a;if(!0!==a.initialized){for(var c=0;c<a.hierarchy.length;c++){for(var d=0;d<a.hierarchy[c].keys.length;d++)if(0>a.hierarchy[c].keys[d].time&&
(a.hierarchy[c].keys[d].time=0),void 0!==a.hierarchy[c].keys[d].rot&&!(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)){var h=a.hierarchy[c].keys[d].rot;a.hierarchy[c].keys[d].rot=new THREE.Quaternion(h[0],h[1],h[2],h[3])}if(a.hierarchy[c].keys.length&&void 0!==a.hierarchy[c].keys[0].morphTargets){h={};for(d=0;d<a.hierarchy[c].keys.length;d++)for(var i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++){var j=a.hierarchy[c].keys[d].morphTargets[i];h[j]=-1}a.hierarchy[c].usedMorphTargets=h;
for(d=0;d<a.hierarchy[c].keys.length;d++){var m={};for(j in h){for(i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++)if(a.hierarchy[c].keys[d].morphTargets[i]===j){m[j]=a.hierarchy[c].keys[d].morphTargetsInfluences[i];break}i===a.hierarchy[c].keys[d].morphTargets.length&&(m[j]=0)}a.hierarchy[c].keys[d].morphTargetsInfluences=m}}for(d=1;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].time===a.hierarchy[c].keys[d-1].time&&(a.hierarchy[c].keys.splice(d,1),d--);for(d=0;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].index=
d}d=parseInt(a.length*a.fps,10);a.JIT={};a.JIT.hierarchy=[];for(c=0;c<a.hierarchy.length;c++)a.JIT.hierarchy.push(Array(d));a.initialized=!0}},get:function(a){if("string"===typeof a){if(b[a])return b[a];console.log("THREE.AnimationHandler.get: Couldn't find animation "+a);return null}},parse:function(a){var b=[];if(a instanceof THREE.SkinnedMesh)for(var c=0;c<a.bones.length;c++)b.push(a.bones[c]);else d(a,b);return b}},d=function(a,b){b.push(a);for(var c=0;c<a.children.length;c++)d(a.children[c],
b)};c.LINEAR=0;c.CATMULLROM=1;c.CATMULLROM_FORWARD=2;return c}();THREE.Animation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=this.isPaused=!0;this.interpolationType=void 0!==c?c:THREE.AnimationHandler.LINEAR;this.points=[];this.target=new THREE.Vector3};
THREE.Animation.prototype.play=function(a,b){if(!1===this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;var c,d=this.hierarchy.length,e;for(c=0;c<d;c++){e=this.hierarchy[c];this.interpolationType!==THREE.AnimationHandler.CATMULLROM_FORWARD&&(e.useQuaternion=!0);e.matrixAutoUpdate=!0;void 0===e.animationCache&&(e.animationCache={},e.animationCache.prevKey={pos:0,rot:0,scl:0},e.animationCache.nextKey={pos:0,rot:0,scl:0},e.animationCache.originalMatrix=e instanceof
THREE.Bone?e.skinMatrix:e.matrix);var f=e.animationCache.prevKey;e=e.animationCache.nextKey;f.pos=this.data.hierarchy[c].keys[0];f.rot=this.data.hierarchy[c].keys[0];f.scl=this.data.hierarchy[c].keys[0];e.pos=this.getNextKeyWith("pos",c,1);e.rot=this.getNextKeyWith("rot",c,1);e.scl=this.getNextKeyWith("scl",c,1)}this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};
THREE.Animation.prototype.pause=function(){!0===this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};THREE.Animation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this)};
THREE.Animation.prototype.update=function(a){if(!1!==this.isPlaying){var b=["pos","rot","scl"],c,d,e,f,g,h,i,j,m;m=this.currentTime+=a*this.timeScale;j=this.currentTime%=this.data.length;parseInt(Math.min(j*this.data.fps,this.data.length*this.data.fps),10);for(var p=0,n=this.hierarchy.length;p<n;p++){a=this.hierarchy[p];i=a.animationCache;for(var s=0;3>s;s++){c=b[s];g=i.prevKey[c];h=i.nextKey[c];if(h.time<=m){if(j<m)if(this.loop){g=this.data.hierarchy[p].keys[0];for(h=this.getNextKeyWith(c,p,1);h.time<
j;)g=h,h=this.getNextKeyWith(c,p,h.index+1)}else{this.stop();return}else{do g=h,h=this.getNextKeyWith(c,p,h.index+1);while(h.time<j)}i.prevKey[c]=g;i.nextKey[c]=h}a.matrixAutoUpdate=!0;a.matrixWorldNeedsUpdate=!0;d=(j-g.time)/(h.time-g.time);e=g[c];f=h[c];if(0>d||1<d)console.log("THREE.Animation.update: Warning! Scale out of bounds:"+d+" on bone "+p),d=0>d?0:1;if("pos"===c)if(c=a.position,this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+
(f[2]-e[2])*d;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)this.points[0]=this.getPrevKeyWith("pos",p,g.index-1).pos,this.points[1]=e,this.points[2]=f,this.points[3]=this.getNextKeyWith("pos",p,h.index+1).pos,d=0.33*d+0.33,e=this.interpolateCatmullRom(this.points,d),c.x=e[0],c.y=e[1],c.z=e[2],this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(d=this.interpolateCatmullRom(this.points,1.01*d),
this.target.set(d[0],d[1],d[2]),this.target.subSelf(c),this.target.y=0,this.target.normalize(),d=Math.atan2(this.target.x,this.target.z),a.rotation.set(0,d,0))}else"rot"===c?THREE.Quaternion.slerp(e,f,a.quaternion,d):"scl"===c&&(c=a.scale,c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d)}}}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,b){var c=[],d=[],e,f,g,h,i,j;e=(a.length-1)*b;f=Math.floor(e);e-=f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>a.length-2?f:f+1;c[3]=f>a.length-3?f:f+2;f=a[c[0]];h=a[c[1]];i=a[c[2]];j=a[c[3]];c=e*e;g=e*c;d[0]=this.interpolate(f[0],h[0],i[0],j[0],e,c,g);d[1]=this.interpolate(f[1],h[1],i[1],j[1],e,c,g);d[2]=this.interpolate(f[2],h[2],i[2],j[2],e,c,g);return d};
THREE.Animation.prototype.interpolate=function(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b};THREE.Animation.prototype.getNextKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};THREE.KeyFrameAnimation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;this.JITCompile=void 0!==c?c:!0;a=0;for(b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a,b){if(!this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;this.startTimeMs=b;this.startTime=1E7;this.endTime=-this.startTime;var c,d=this.hierarchy.length,e,f;for(c=0;c<d;c++)e=this.hierarchy[c],f=this.data.hierarchy[c],e.useQuaternion=!0,void 0===f.animationCache&&(f.animationCache={},f.animationCache.prevKey=null,f.animationCache.nextKey=null,f.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:
e.matrix),e=this.data.hierarchy[c].keys,e.length&&(f.animationCache.prevKey=e[0],f.animationCache.nextKey=e[1],this.startTime=Math.min(e[0].time,this.startTime),this.endTime=Math.max(e[e.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.KeyFrameAnimation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;b instanceof THREE.Bone?(d.copy(b.skinMatrix),b.skinMatrix=d):(d.copy(b.matrix),b.matrix=d);delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(this.isPlaying){var b,c,d,e,f=this.data.JIT.hierarchy,g,h,i;h=this.currentTime+=a*this.timeScale;g=this.currentTime%=this.data.length;g<this.startTimeMs&&(g=this.currentTime=this.startTimeMs+g);e=parseInt(Math.min(g*this.data.fps,this.data.length*this.data.fps),10);if((i=g<h)&&!this.loop){for(var a=0,j=this.hierarchy.length;a<j;a++){var m=this.data.hierarchy[a].keys,f=this.data.hierarchy[a].sids;d=m.length-1;e=this.hierarchy[a];if(m.length){for(m=
0;m<f.length;m++)g=f[m],(h=this.getPrevKeyWith(g,a,d))&&h.apply(g);this.data.hierarchy[a].node.updateMatrix();e.matrixWorldNeedsUpdate=!0}}this.stop()}else if(!(g<this.startTime)){a=0;for(j=this.hierarchy.length;a<j;a++){d=this.hierarchy[a];b=this.data.hierarchy[a];var m=b.keys,p=b.animationCache;if(this.JITCompile&&void 0!==f[a][e])d instanceof THREE.Bone?(d.skinMatrix=f[a][e],d.matrixWorldNeedsUpdate=!1):(d.matrix=f[a][e],d.matrixWorldNeedsUpdate=!0);else if(m.length){this.JITCompile&&p&&(d instanceof
THREE.Bone?d.skinMatrix=p.originalMatrix:d.matrix=p.originalMatrix);b=p.prevKey;c=p.nextKey;if(b&&c){if(c.time<=h){if(i&&this.loop){b=m[0];for(c=m[1];c.time<g;)b=c,c=m[b.index+1]}else if(!i)for(var n=m.length-1;c.time<g&&c.index!==n;)b=c,c=m[b.index+1];p.prevKey=b;p.nextKey=c}c.time>=g?b.interpolate(c,g):b.interpolate(c,c.time)}this.data.hierarchy[a].node.updateMatrix();d.matrixWorldNeedsUpdate=!0}}if(this.JITCompile&&void 0===f[0][e]){this.hierarchy[0].updateMatrixWorld(!0);for(a=0;a<this.hierarchy.length;a++)f[a][e]=
this.hierarchy[a]instanceof THREE.Bone?this.hierarchy[a].skinMatrix.clone():this.hierarchy[a].matrix.clone()}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var i=new THREE.PerspectiveCamera(90,1,a,b);i.up.set(0,-1,0);i.lookAt(new THREE.Vector3(0,0,-1));this.add(i);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,n=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=n;c.activeCubeFace=5;a.render(b,i,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CombinedCamera=function(a,b,c,d,e,f,g){THREE.Camera.call(this);this.fov=c;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2;this.cameraO=new THREE.OrthographicCamera(a/-2,a/2,b/2,b/-2,f,g);this.cameraP=new THREE.PerspectiveCamera(c,a/b,d,e);this.zoom=1;this.toPerspective()};THREE.CombinedCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective=function(){this.near=this.cameraP.near;this.far=this.cameraP.far;this.cameraP.fov=this.fov/this.zoom;this.cameraP.updateProjectionMatrix();this.projectionMatrix=this.cameraP.projectionMatrix;this.inPerspectiveMode=!0;this.inOrthographicMode=!1};
THREE.CombinedCamera.prototype.toOrthographic=function(){var a=this.cameraP.aspect,b=(this.cameraP.near+this.cameraP.far)/2,b=Math.tan(this.fov/2)*b,a=2*b*a/2,b=b/this.zoom,a=a/this.zoom;this.cameraO.left=-a;this.cameraO.right=a;this.cameraO.top=b;this.cameraO.bottom=-b;this.cameraO.updateProjectionMatrix();this.near=this.cameraO.near;this.far=this.cameraO.far;this.projectionMatrix=this.cameraO.projectionMatrix;this.inPerspectiveMode=!1;this.inOrthographicMode=!0};
THREE.CombinedCamera.prototype.setSize=function(a,b){this.cameraP.aspect=a/b;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2};THREE.CombinedCamera.prototype.setFov=function(a){this.fov=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.updateProjectionMatrix=function(){this.inPerspectiveMode?this.toPerspective():(this.toPerspective(),this.toOrthographic())};
THREE.CombinedCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);var c=2*Math.atan(b/(2*a))*(180/Math.PI);this.setFov(c);return c};THREE.CombinedCamera.prototype.setZoom=function(a){this.zoom=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.toFrontView=function(){this.rotation.x=0;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toBackView=function(){this.rotation.x=0;this.rotation.y=Math.PI;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toLeftView=function(){this.rotation.x=0;this.rotation.y=-Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toRightView=function(){this.rotation.x=0;this.rotation.y=Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toTopView=function(){this.rotation.x=-Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toBottomView=function(){this.rotation.x=Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.AsteriskGeometry=function(a,b){THREE.Geometry.call(this);for(var c=0.707*a,d=0.707*b,c=[[a,0,0],[b,0,0],[-a,0,0],[-b,0,0],[0,a,0],[0,b,0],[0,-a,0],[0,-b,0],[0,0,a],[0,0,b],[0,0,-a],[0,0,-b],[c,c,0],[d,d,0],[-c,-c,0],[-d,-d,0],[c,-c,0],[d,-d,0],[-c,c,0],[-d,d,0],[c,0,c],[d,0,d],[-c,0,-c],[-d,0,-d],[c,0,-c],[d,0,-d],[-c,0,c],[-d,0,d],[0,c,c],[0,d,d],[0,-c,-c],[0,-d,-d],[0,c,-c],[0,d,-d],[0,-c,c],[0,-d,d]],d=0,e=c.length;d<e;d++)this.vertices.push(new THREE.Vector3(c[d][0],c[d][1],c[d][2]))};
THREE.AsteriskGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);var a=a||50,c=void 0!==c?c:0,d=void 0!==d?d:2*Math.PI,b=void 0!==b?Math.max(3,b):8,e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3;h.x=a*Math.cos(c+e/b*d);h.y=a*Math.sin(c+e/b*d);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,-(h.y/a+1)/2+1))}c=new THREE.Vector3(0,0,-1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c,c,c])),
this.faceVertexUvs[0].push([f[e],f[e+1],g]);this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,l){var t,u=h.widthSegments,E=h.heightSegments,A=e/2,q=f/2,F=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)t="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)t="y",E=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)t="x",u=h.depthSegments;var z=u+1,x=E+1,v=e/u,I=f/E,C=new THREE.Vector3;C[t]=0<g?1:-1;for(e=0;e<x;e++)for(f=0;f<z;f++){var G=new THREE.Vector3;G[a]=(f*v-A)*c;G[b]=(e*I-q)*d;G[t]=g;h.vertices.push(G)}for(e=
0;e<E;e++)for(f=0;f<u;f++)a=new THREE.Face4(f+z*e+F,f+z*(e+1)+F,f+1+z*(e+1)+F,f+1+z*e+F),a.normal.copy(C),a.vertexNormals.push(C.clone(),C.clone(),C.clone(),C.clone()),a.materialIndex=l,h.faces.push(a),h.faceVertexUvs[0].push([new THREE.Vector2(f/u,1-e/E),new THREE.Vector2(f/u,1-(e+1)/E),new THREE.Vector2((f+1)/u,1-(e+1)/E),new THREE.Vector2((f+1)/u,1-e/E)])}THREE.Geometry.call(this);var h=this;this.width=a;this.height=b;this.depth=c;this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=
f||1;a=this.width/2;b=this.height/2;c=this.depth/2;g("z","y",-1,-1,this.depth,this.height,a,0);g("z","y",1,-1,this.depth,this.height,-a,1);g("x","z",1,1,this.width,this.depth,b,2);g("x","z",1,-1,this.width,this.depth,-b,3);g("x","y",1,-1,this.width,this.height,c,4);g("x","y",-1,-1,this.width,this.height,-c,5);this.computeCentroids();this.mergeVertices()};THREE.CubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);var a=void 0!==a?a:20,b=void 0!==b?b:20,c=void 0!==c?c:100,g=c/2,d=d||8,e=e||1,h,i,j=[],m=[];for(i=0;i<=e;i++){var p=[],n=[],s=i/e,r=s*(b-a)+a;for(h=0;h<=d;h++){var l=h/d,t=new THREE.Vector3;t.x=r*Math.sin(2*l*Math.PI);t.y=-s*c+g;t.z=r*Math.cos(2*l*Math.PI);this.vertices.push(t);p.push(this.vertices.length-1);n.push(new THREE.Vector2(l,1-s))}j.push(p);m.push(n)}c=(b-a)/c;for(h=0;h<d;h++){0!==a?(p=this.vertices[j[0][h]].clone(),
n=this.vertices[j[0][h+1]].clone()):(p=this.vertices[j[1][h]].clone(),n=this.vertices[j[1][h+1]].clone());p.setY(Math.sqrt(p.x*p.x+p.z*p.z)*c).normalize();n.setY(Math.sqrt(n.x*n.x+n.z*n.z)*c).normalize();for(i=0;i<e;i++){var s=j[i][h],r=j[i+1][h],l=j[i+1][h+1],t=j[i][h+1],u=p.clone(),E=p.clone(),A=n.clone(),q=n.clone(),F=m[i][h].clone(),z=m[i+1][h].clone(),x=m[i+1][h+1].clone(),v=m[i][h+1].clone();this.faces.push(new THREE.Face4(s,r,l,t,[u,E,A,q]));this.faceVertexUvs[0].push([F,z,x,v])}}if(!f&&0<
a){this.vertices.push(new THREE.Vector3(0,g,0));for(h=0;h<d;h++)s=j[0][h],r=j[0][h+1],l=this.vertices.length-1,u=new THREE.Vector3(0,1,0),E=new THREE.Vector3(0,1,0),A=new THREE.Vector3(0,1,0),F=m[0][h].clone(),z=m[0][h+1].clone(),x=new THREE.Vector2(z.u,0),this.faces.push(new THREE.Face3(s,r,l,[u,E,A])),this.faceVertexUvs[0].push([F,z,x])}if(!f&&0<b){this.vertices.push(new THREE.Vector3(0,-g,0));for(h=0;h<d;h++)s=j[i][h+1],r=j[i][h],l=this.vertices.length-1,u=new THREE.Vector3(0,-1,0),E=new THREE.Vector3(0,
-1,0),A=new THREE.Vector3(0,-1,0),F=m[i][h+1].clone(),z=m[i][h].clone(),x=new THREE.Vector2(z.u,1),this.faces.push(new THREE.Face3(s,r,l,[u,E,A])),this.faceVertexUvs[0].push([F,z,x])}this.computeCentroids();this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.shapebb=a[a.length-1].getBoundingBox(),this.addShapeList(a,b),this.computeCentroids(),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).addSelf(a)}function d(a,b,c){var d=THREE.ExtrudeGeometry.__v1,e=THREE.ExtrudeGeometry.__v2,f=THREE.ExtrudeGeometry.__v3,g=THREE.ExtrudeGeometry.__v4,h=THREE.ExtrudeGeometry.__v5,i=THREE.ExtrudeGeometry.__v6;d.set(a.x-b.x,a.y-b.y);e.set(a.x-c.x,a.y-c.y);d=d.normalize();e=e.normalize();f.set(-d.y,d.x);g.set(e.y,-e.x);h.copy(a).addSelf(f);i.copy(a).addSelf(g);if(h.equals(i))return g.clone();
h.copy(b).addSelf(f);i.copy(c).addSelf(g);f=d.dot(g);g=i.subSelf(h).dot(g);0===f&&(console.log("Either infinite or no solutions!"),0===g?console.log("Its finite solutions."):console.log("Too bad, no solutions."));g/=f;return 0>g?(b=Math.atan2(b.y-a.y,b.x-a.x),a=Math.atan2(c.y-a.y,c.x-a.x),b>a&&(a+=2*Math.PI),c=(b+a)/2,a=-Math.cos(c),c=-Math.sin(c),new THREE.Vector2(a,c)):d.multiplyScalar(g).addSelf(h).subSelf(a).clone()}function e(c,d){var e,f;for(O=c.length;0<=--O;){e=O;f=O-1;0>f&&(f=c.length-1);
for(var g=0,h=s+2*m,g=0;g<h;g++){var i=N*g,j=N*(g+1),l=d+e+i,i=d+f+i,n=d+f+j,j=d+e+j,p=c,r=g,q=h,t=e,u=f,l=l+M,i=i+M,n=n+M,j=j+M;G.faces.push(new THREE.Face4(l,i,n,j,null,null,E));l=A.generateSideWallUV(G,a,p,b,l,i,n,j,r,q,t,u);G.faceVertexUvs[0].push(l)}}}function f(a,b,c){G.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c+=M;d+=M;e+=M;G.faces.push(new THREE.Face3(c,d,e,null,null,u));c=f?A.generateBottomUV(G,a,b,c,d,e):A.generateTopUV(G,a,b,c,d,e);G.faceVertexUvs[0].push(c)}var h=void 0!==
b.amount?b.amount:100,i=void 0!==b.bevelThickness?b.bevelThickness:6,j=void 0!==b.bevelSize?b.bevelSize:i-2,m=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:12,s=void 0!==b.steps?b.steps:1,r=b.extrudePath,l,t=!1,u=b.material,E=b.extrudeMaterial,A=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,q,F,z,x;r&&(l=r.getSpacedPoints(s),t=!0,p=!1,q=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(r,
s,!1),F=new THREE.Vector3,z=new THREE.Vector3,x=new THREE.Vector3);p||(j=i=m=0);var v,I,C,G=this,M=this.vertices.length,n=a.extractPoints(n),B=n.shape,n=n.holes;if(r=!THREE.Shape.Utils.isClockWise(B)){B=B.reverse();I=0;for(C=n.length;I<C;I++)v=n[I],THREE.Shape.Utils.isClockWise(v)&&(n[I]=v.reverse());r=!1}var J=THREE.Shape.Utils.triangulateShape(B,n),r=B;I=0;for(C=n.length;I<C;I++)v=n[I],B=B.concat(v);var D,L,K,U,N=B.length,ia=J.length,sa=[],O=0,la=r.length;D=la-1;for(L=O+1;O<la;O++,D++,L++)D===la&&
(D=0),L===la&&(L=0),sa[O]=d(r[O],r[D],r[L]);var ja=[],Ma,Q=sa.concat();I=0;for(C=n.length;I<C;I++){v=n[I];Ma=[];O=0;la=v.length;D=la-1;for(L=O+1;O<la;O++,D++,L++)D===la&&(D=0),L===la&&(L=0),Ma[O]=d(v[O],v[D],v[L]);ja.push(Ma);Q=Q.concat(Ma)}for(D=0;D<m;D++){v=D/m;K=i*(1-v);L=j*Math.sin(v*Math.PI/2);O=0;for(la=r.length;O<la;O++)U=c(r[O],sa[O],L),f(U.x,U.y,-K);I=0;for(C=n.length;I<C;I++){v=n[I];Ma=ja[I];O=0;for(la=v.length;O<la;O++)U=c(v[O],Ma[O],L),f(U.x,U.y,-K)}}L=j;for(O=0;O<N;O++)U=p?c(B[O],Q[O],
L):B[O],t?(z.copy(q.normals[0]).multiplyScalar(U.x),F.copy(q.binormals[0]).multiplyScalar(U.y),x.copy(l[0]).addSelf(z).addSelf(F),f(x.x,x.y,x.z)):f(U.x,U.y,0);for(v=1;v<=s;v++)for(O=0;O<N;O++)U=p?c(B[O],Q[O],L):B[O],t?(z.copy(q.normals[v]).multiplyScalar(U.x),F.copy(q.binormals[v]).multiplyScalar(U.y),x.copy(l[v]).addSelf(z).addSelf(F),f(x.x,x.y,x.z)):f(U.x,U.y,h/s*v);for(D=m-1;0<=D;D--){v=D/m;K=i*(1-v);L=j*Math.sin(v*Math.PI/2);O=0;for(la=r.length;O<la;O++)U=c(r[O],sa[O],L),f(U.x,U.y,h+K);I=0;for(C=
n.length;I<C;I++){v=n[I];Ma=ja[I];O=0;for(la=v.length;O<la;O++)U=c(v[O],Ma[O],L),t?f(U.x,U.y+l[s-1].y,l[s-1].x+K):f(U.x,U.y,h+K)}}if(p){i=0*N;for(O=0;O<ia;O++)h=J[O],g(h[2]+i,h[1]+i,h[0]+i,!0);i=N*(s+2*m);for(O=0;O<ia;O++)h=J[O],g(h[0]+i,h[1]+i,h[2]+i,!1)}else{for(O=0;O<ia;O++)h=J[O],g(h[2],h[1],h[0],!0);for(O=0;O<ia;O++)h=J[O],g(h[0]+N*s,h[1]+N*s,h[2]+N*s,!1)}h=0;e(r,h);h+=r.length;I=0;for(C=n.length;I<C;I++)v=n[I],e(v,h),h+=v.length};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h){var b=a.vertices[e].x,c=a.vertices[e].y,e=a.vertices[e].z,d=a.vertices[f].x,i=a.vertices[f].y,f=a.vertices[f].z,j=a.vertices[g].x,
m=a.vertices[g].y,g=a.vertices[g].z,p=a.vertices[h].x,n=a.vertices[h].y,a=a.vertices[h].z;return 0.01>Math.abs(c-i)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(j,1-g),new THREE.Vector2(p,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(i,1-f),new THREE.Vector2(m,1-g),new THREE.Vector2(n,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var i=e.shape,j=e.holes;if(!THREE.Shape.Utils.isClockWise(i)){i=i.reverse();e=0;for(f=j.length;e<f;e++)g=j[e],THREE.Shape.Utils.isClockWise(g)&&(j[e]=g.reverse())}var m=THREE.Shape.Utils.triangulateShape(i,j);e=0;for(f=j.length;e<f;e++)g=j[e],
i=i.concat(g);j=i.length;f=m.length;for(e=0;e<j;e++)g=i[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)j=m[e],i=j[0]+h,g=j[1]+h,j=j[2]+h,this.faces.push(new THREE.Face3(i,g,j,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,i,g,j))};THREE.LatheGeometry=function(a,b,c){THREE.Geometry.call(this);for(var b=b||12,c=c||2*Math.PI,d=[],e=(new THREE.Matrix4).makeRotationZ(c/b),f=0;f<a.length;f++)d[f]=a[f].clone(),this.vertices.push(d[f]);for(var g=b+1,c=0;c<g;c++)for(f=0;f<d.length;f++)d[f]=e.multiplyVector3(d[f].clone()),this.vertices.push(d[f]);for(c=0;c<b;c++){d=0;for(e=a.length;d<e-1;d++)this.faces.push(new THREE.Face4(c*e+d,(c+1)%g*e+d,(c+1)%g*e+(d+1)%e,c*e+(d+1)%e)),this.faceVertexUvs[0].push([new THREE.Vector2(1-c/b,d/e),new THREE.Vector2(1-
(c+1)/b,d/e),new THREE.Vector2(1-(c+1)/b,(d+1)/e),new THREE.Vector2(1-c/b,(d+1)/e)])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.width=a;this.height=b;this.widthSegments=c||1;this.heightSegments=d||1;for(var c=a/2,e=b/2,d=this.widthSegments,f=this.heightSegments,g=d+1,h=f+1,i=this.width/d,j=this.height/f,m=new THREE.Vector3(0,0,1),a=0;a<h;a++)for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*i-c,-(a*j-e),0));for(a=0;a<f;a++)for(b=0;b<d;b++)c=new THREE.Face4(b+g*a,b+g*(a+1),b+1+g*(a+1),b+1+g*a),c.normal.copy(m),c.vertexNormals.push(m.clone(),m.clone(),
m.clone(),m.clone()),this.faces.push(c),this.faceVertexUvs[0].push([new THREE.Vector2(b/d,1-a/f),new THREE.Vector2(b/d,1-(a+1)/f),new THREE.Vector2((b+1)/d,1-(a+1)/f),new THREE.Vector2((b+1)/d,1-a/f)]);this.computeCentroids()};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.radius=a||50;this.widthSegments=Math.max(3,Math.floor(b)||8);this.heightSegments=Math.max(2,Math.floor(c)||6);for(var d=void 0!==d?d:0,e=void 0!==e?e:2*Math.PI,f=void 0!==f?f:0,g=void 0!==g?g:Math.PI,h=[],i=[],c=0;c<=this.heightSegments;c++){for(var j=[],m=[],b=0;b<=this.widthSegments;b++){var p=b/this.widthSegments,n=c/this.heightSegments,s=new THREE.Vector3;s.x=-this.radius*Math.cos(d+p*e)*Math.sin(f+n*g);s.y=this.radius*
Math.cos(f+n*g);s.z=this.radius*Math.sin(d+p*e)*Math.sin(f+n*g);this.vertices.push(s);j.push(this.vertices.length-1);m.push(new THREE.Vector2(p,1-n))}h.push(j);i.push(m)}for(c=0;c<this.heightSegments;c++)for(b=0;b<this.widthSegments;b++){var d=h[c][b+1],e=h[c][b],f=h[c+1][b],g=h[c+1][b+1],j=this.vertices[d].clone().normalize(),m=this.vertices[e].clone().normalize(),p=this.vertices[f].clone().normalize(),n=this.vertices[g].clone().normalize(),s=i[c][b+1].clone(),r=i[c][b].clone(),l=i[c+1][b].clone(),
t=i[c+1][b+1].clone();Math.abs(this.vertices[d].y)===this.radius?(this.faces.push(new THREE.Face3(d,f,g,[j,p,n])),this.faceVertexUvs[0].push([s,l,t])):Math.abs(this.vertices[f].y)===this.radius?(this.faces.push(new THREE.Face3(d,e,f,[j,m,p])),this.faceVertexUvs[0].push([s,r,l])):(this.faces.push(new THREE.Face4(d,e,f,g,[j,m,p,n])),this.faceVertexUvs[0].push([s,r,l,t]))}this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};
THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||8;this.tubularSegments=d||6;this.arc=e||2*Math.PI;e=new THREE.Vector3;a=[];b=[];for(c=0;c<=this.radialSegments;c++)for(d=0;d<=this.tubularSegments;d++){var f=d/this.tubularSegments*this.arc,g=2*c/this.radialSegments*Math.PI;e.x=this.radius*Math.cos(f);e.y=this.radius*Math.sin(f);var h=new THREE.Vector3;h.x=(this.radius+this.tube*Math.cos(g))*Math.cos(f);h.y=(this.radius+this.tube*
Math.cos(g))*Math.sin(f);h.z=this.tube*Math.sin(g);this.vertices.push(h);a.push(new THREE.Vector2(d/this.tubularSegments,c/this.radialSegments));b.push(h.clone().subSelf(e).normalize())}for(c=1;c<=this.radialSegments;c++)for(d=1;d<=this.tubularSegments;d++){var e=(this.tubularSegments+1)*c+d-1,f=(this.tubularSegments+1)*(c-1)+d-1,g=(this.tubularSegments+1)*(c-1)+d,h=(this.tubularSegments+1)*c+d,i=new THREE.Face4(e,f,g,h,[b[e],b[f],b[g],b[h]]);i.normal.addSelf(b[e]);i.normal.addSelf(b[f]);i.normal.addSelf(b[g]);
i.normal.addSelf(b[h]);i.normal.normalize();this.faces.push(i);this.faceVertexUvs[0].push([a[e].clone(),a[f].clone(),a[g].clone(),a[h].clone()])}this.computeCentroids()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e,f){var g=Math.cos(a);Math.cos(b);b=Math.sin(a);a*=c/d;c=Math.cos(a);g*=0.5*e*(2+c);b=0.5*e*(2+c)*b;e=0.5*f*e*Math.sin(a);return new THREE.Vector3(g,b,e)}THREE.Geometry.call(this);this.radius=a||200;this.tube=b||40;this.radialSegments=c||64;this.tubularSegments=d||8;this.p=e||2;this.q=f||3;this.heightScale=g||1;this.grid=Array(this.radialSegments);c=new THREE.Vector3;d=new THREE.Vector3;e=new THREE.Vector3;for(a=0;a<this.radialSegments;++a){this.grid[a]=
Array(this.tubularSegments);for(b=0;b<this.tubularSegments;++b){var i=2*(a/this.radialSegments)*this.p*Math.PI,g=2*(b/this.tubularSegments)*Math.PI,f=h(i,g,this.q,this.p,this.radius,this.heightScale),i=h(i+0.01,g,this.q,this.p,this.radius,this.heightScale);c.sub(i,f);d.add(i,f);e.cross(c,d);d.cross(e,c);e.normalize();d.normalize();i=-this.tube*Math.cos(g);g=this.tube*Math.sin(g);f.x+=i*d.x+g*e.x;f.y+=i*d.y+g*e.y;f.z+=i*d.z+g*e.z;this.grid[a][b]=this.vertices.push(new THREE.Vector3(f.x,f.y,f.z))-1}}for(a=
0;a<this.radialSegments;++a)for(b=0;b<this.tubularSegments;++b){var e=(a+1)%this.radialSegments,f=(b+1)%this.tubularSegments,c=this.grid[a][b],d=this.grid[e][b],e=this.grid[e][f],f=this.grid[a][f],g=new THREE.Vector2(a/this.radialSegments,b/this.tubularSegments),i=new THREE.Vector2((a+1)/this.radialSegments,b/this.tubularSegments),j=new THREE.Vector2((a+1)/this.radialSegments,(b+1)/this.tubularSegments),m=new THREE.Vector2(a/this.radialSegments,(b+1)/this.tubularSegments);this.faces.push(new THREE.Face4(c,
d,e,f));this.faceVertexUvs[0].push([g,i,j,m])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.path=a;this.segments=b||64;this.radius=c||1;this.radiusSegments=d||8;this.closed=e||!1;f&&(this.debug=new THREE.Object3D);this.grid=[];var g,h,e=this.segments+1,i,j,m,f=new THREE.Vector3,p,n,s,b=new THREE.TubeGeometry.FrenetFrames(this.path,this.segments,this.closed);p=b.tangents;n=b.normals;s=b.binormals;this.tangents=p;this.normals=n;this.binormals=s;for(b=0;b<e;b++){this.grid[b]=[];d=b/(e-1);m=a.getPointAt(d);d=p[b];g=n[b];
h=s[b];this.debug&&(this.debug.add(new THREE.ArrowHelper(d,m,c,255)),this.debug.add(new THREE.ArrowHelper(g,m,c,16711680)),this.debug.add(new THREE.ArrowHelper(h,m,c,65280)));for(d=0;d<this.radiusSegments;d++)i=2*(d/this.radiusSegments)*Math.PI,j=-this.radius*Math.cos(i),i=this.radius*Math.sin(i),f.copy(m),f.x+=j*g.x+i*h.x,f.y+=j*g.y+i*h.y,f.z+=j*g.z+i*h.z,this.grid[b][d]=this.vertices.push(new THREE.Vector3(f.x,f.y,f.z))-1}for(b=0;b<this.segments;b++)for(d=0;d<this.radiusSegments;d++)e=this.closed?
(b+1)%this.segments:b+1,f=(d+1)%this.radiusSegments,a=this.grid[b][d],c=this.grid[e][d],e=this.grid[e][f],f=this.grid[b][f],p=new THREE.Vector2(b/this.segments,d/this.radiusSegments),n=new THREE.Vector2((b+1)/this.segments,d/this.radiusSegments),s=new THREE.Vector2((b+1)/this.segments,(d+1)/this.radiusSegments),g=new THREE.Vector2(b/this.segments,(d+1)/this.radiusSegments),this.faces.push(new THREE.Face4(a,c,e,f)),this.faceVertexUvs[0].push([p,n,s,g]);this.computeCentroids();this.computeFaceNormals();
this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,i=new THREE.Matrix4,b=b+1,j,m,p;this.tangents=e;this.normals=f;this.binormals=g;for(j=0;j<b;j++)m=j/(b-1),e[j]=a.getTangentAt(m),e[j].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;j=Math.abs(e[0].x);m=Math.abs(e[0].y);p=Math.abs(e[0].z);j<=a&&(a=j,d.set(1,0,0));m<=a&&(a=m,d.set(0,1,0));p<=a&&d.set(0,0,1);h.cross(e[0],d).normalize();
f[0].cross(e[0],h);g[0].cross(e[0],f[0]);for(j=1;j<b;j++)f[j]=f[j-1].clone(),g[j]=g[j-1].clone(),h.cross(e[j-1],e[j]),1E-4<h.length()&&(h.normalize(),d=Math.acos(e[j-1].dot(e[j])),i.makeRotationAxis(h,d).multiplyVector3(f[j])),g[j].cross(e[j],f[j]);if(c){d=Math.acos(f[0].dot(f[b-1]));d/=b-1;0<e[0].dot(h.cross(f[0],f[b-1]))&&(d=-d);for(j=1;j<b;j++)i.makeRotationAxis(e[j],d*j).multiplyVector3(f[j]),g[j].cross(e[j],f[j])}};THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=i.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5,a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c,d){1>d?(d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]),d.centroid.addSelf(a).addSelf(b).addSelf(c).divideScalar(3),d.normal=d.centroid.clone().normalize(),i.faces.push(d),d=Math.atan2(d.centroid.z,-d.centroid.x),
i.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])):(d-=1,f(a,g(a,b),g(a,c),d),f(g(a,b),b,g(b,c),d),f(g(a,c),g(b,c),c,d),f(g(a,b),g(b,c),g(a,c),d))}function g(a,b){p[a.index]||(p[a.index]=[]);p[b.index]||(p[b.index]=[]);var c=p[a.index][b.index];void 0===c&&(p[a.index][b.index]=p[b.index][a.index]=c=e((new THREE.Vector3).add(a,b).divideScalar(2)));return c}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+0.5,a.y));return a}
THREE.Geometry.call(this);for(var c=c||1,d=d||0,i=this,j=0,m=a.length;j<m;j++)e(new THREE.Vector3(a[j][0],a[j][1],a[j][2]));for(var p=[],a=this.vertices,j=0,m=b.length;j<m;j++)f(a[b[j][0]],a[b[j][1]],a[b[j][2]],d);this.mergeVertices();j=0;for(m=this.vertices.length;j<m;j++)this.vertices[j].multiplyScalar(c);this.computeCentroids();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[[-1,c,0],[1,c,0],[-1,-c,0],[1,-c,0],[0,-1,c],[0,1,c],[0,-1,-c],[0,1,-c],[c,0,-1],[c,0,1],[-c,0,-1],[-c,0,1]],[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],[[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],[[2,1,0],[0,3,2],[1,3,0],[2,3,1]],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry=function(a,b,c,d){THREE.Geometry.call(this);var e=this.vertices,f=this.faces,g=this.faceVertexUvs[0],d=void 0===d?!1:d,h,i,j,m,p=b+1;for(h=0;h<=c;h++){m=h/c;for(i=0;i<=b;i++)j=i/b,j=a(j,m),e.push(j)}var n,s,r,l;for(h=0;h<c;h++)for(i=0;i<b;i++)a=h*p+i,e=h*p+i+1,m=(h+1)*p+i,j=(h+1)*p+i+1,n=new THREE.Vector2(i/b,h/c),s=new THREE.Vector2((i+1)/b,h/c),r=new THREE.Vector2(i/b,(h+1)/c),l=new THREE.Vector2((i+1)/b,(h+1)/c),d?(f.push(new THREE.Face3(a,e,m)),f.push(new THREE.Face3(e,
j,m)),g.push([n,s,r]),g.push([s,l,r])):(f.push(new THREE.Face4(a,e,j,m)),g.push([n,s,l,r]));this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ConvexGeometry=function(a){function b(a){var b=a.length();return new THREE.Vector2(a.x/b,a.y/b)}THREE.Geometry.call(this);for(var c=[[0,1,2],[0,2,1]],d=3;d<a.length;d++){var e=d,f=a[e].clone(),g=f.length();f.x+=g*2E-6*(Math.random()-0.5);f.y+=g*2E-6*(Math.random()-0.5);f.z+=g*2E-6*(Math.random()-0.5);for(var g=[],h=0;h<c.length;){var i=c[h],j=f,m=a[i[0]],p;p=m;var n=a[i[1]],s=a[i[2]],r=new THREE.Vector3,l=new THREE.Vector3;r.sub(s,n);l.sub(p,n);r.crossSelf(l);r.normalize();p=r;m=p.dot(m);if(p.dot(j)>=
m){for(j=0;3>j;j++){m=[i[j],i[(j+1)%3]];p=!0;for(n=0;n<g.length;n++)if(g[n][0]===m[1]&&g[n][1]===m[0]){g[n]=g[g.length-1];g.pop();p=!1;break}p&&g.push(m)}c[h]=c[c.length-1];c.pop()}else h++}for(n=0;n<g.length;n++)c.push([g[n][0],g[n][1],e])}e=0;f=Array(a.length);for(d=0;d<c.length;d++){g=c[d];for(h=0;3>h;h++)void 0===f[g[h]]&&(f[g[h]]=e++,this.vertices.push(a[g[h]])),g[h]=f[g[h]]}for(d=0;d<c.length;d++)this.faces.push(new THREE.Face3(c[d][0],c[d][1],c[d][2]));for(d=0;d<this.faces.length;d++)g=this.faces[d],
this.faceVertexUvs[0].push([b(this.vertices[g.a]),b(this.vertices[g.b]),b(this.vertices[g.c])]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ConvexGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.AxisHelper=function(a){var b=new THREE.Geometry;b.vertices.push(new THREE.Vector3,new THREE.Vector3(a||1,0,0),new THREE.Vector3,new THREE.Vector3(0,a||1,0),new THREE.Vector3,new THREE.Vector3(0,0,a||1));b.colors.push(new THREE.Color(16711680),new THREE.Color(16755200),new THREE.Color(65280),new THREE.Color(11206400),new THREE.Color(255),new THREE.Color(43775));a=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,b,a,THREE.LinePieces)};
THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);THREE.ArrowHelper=function(a,b,c,d){THREE.Object3D.call(this);void 0===d&&(d=16776960);void 0===c&&(c=20);var e=new THREE.Geometry;e.vertices.push(new THREE.Vector3(0,0,0));e.vertices.push(new THREE.Vector3(0,1,0));this.line=new THREE.Line(e,new THREE.LineBasicMaterial({color:d}));this.add(this.line);e=new THREE.CylinderGeometry(0,0.05,0.25,5,1);this.cone=new THREE.Mesh(e,new THREE.MeshBasicMaterial({color:d}));this.cone.position.set(0,1,0);this.add(this.cone);b instanceof THREE.Vector3&&(this.position=
b);this.setDirection(a);this.setLength(c)};THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(a){var b=(new THREE.Vector3(0,1,0)).crossSelf(a),a=Math.acos((new THREE.Vector3(0,1,0)).dot(a.clone().normalize()));this.matrix=(new THREE.Matrix4).makeRotationAxis(b.normalize(),a);this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder)};THREE.ArrowHelper.prototype.setLength=function(a){this.scale.set(a,a,a)};
THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.setHex(a);this.cone.material.color.setHex(a)};THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.geometry.vertices.push(new THREE.Vector3);d.geometry.colors.push(new THREE.Color(b));void 0===d.pointMap[a]&&(d.pointMap[a]=[]);d.pointMap[a].push(d.geometry.vertices.length-1)}THREE.Line.call(this);var d=this;this.geometry=new THREE.Geometry;this.material=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors});this.type=THREE.LinePieces;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=
{};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1",
"cf2",3355443);b("cf3","cf4",3355443);this.camera=a;this.update(a)};THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){function a(a,d,e,f){THREE.CameraHelper.__v.set(d,e,f);THREE.CameraHelper.__projector.unprojectVector(THREE.CameraHelper.__v,THREE.CameraHelper.__c);a=b.pointMap[a];if(void 0!==a){d=0;for(e=a.length;d<e;d++)b.geometry.vertices[a[d]].copy(THREE.CameraHelper.__v)}}var b=this;THREE.CameraHelper.__c.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);
a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",0.7,1.1,-1);a("u2",-0.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0};THREE.CameraHelper.__projector=new THREE.Projector;THREE.CameraHelper.__v=new THREE.Vector3;THREE.CameraHelper.__c=new THREE.Camera;THREE.DirectionalLightHelper=function(a,b,c){THREE.Object3D.call(this);this.light=a;this.position=a.position;this.direction=new THREE.Vector3;this.direction.sub(a.target.position,a.position);this.color=a.color.clone();var d=THREE.Math.clamp(a.intensity,0,1);this.color.r*=d;this.color.g*=d;this.color.b*=d;var d=this.color.getHex(),e=new THREE.SphereGeometry(b,16,8),f=new THREE.AsteriskGeometry(1.25*b,2.25*b),g=new THREE.MeshBasicMaterial({color:d,fog:!1}),h=new THREE.LineBasicMaterial({color:d,fog:!1});
this.lightArrow=new THREE.ArrowHelper(this.direction,null,c,d);this.lightSphere=new THREE.Mesh(e,g);this.lightArrow.cone.material.fog=!1;this.lightArrow.line.material.fog=!1;this.lightRays=new THREE.Line(f,h,THREE.LinePieces);this.add(this.lightArrow);this.add(this.lightSphere);this.add(this.lightRays);this.lightSphere.properties.isGizmo=!0;this.lightSphere.properties.gizmoSubject=a;this.lightSphere.properties.gizmoRoot=this;this.targetSphere=null;a.target.properties.targetInverse&&(b=new THREE.SphereGeometry(b,
8,4),c=new THREE.MeshBasicMaterial({color:d,wireframe:!0,fog:!1}),this.targetSphere=new THREE.Mesh(b,c),this.targetSphere.position=a.target.position,this.targetSphere.properties.isGizmo=!0,this.targetSphere.properties.gizmoSubject=a.target,this.targetSphere.properties.gizmoRoot=this.targetSphere,a=new THREE.LineDashedMaterial({color:d,dashSize:4,gapSize:4,opacity:0.75,transparent:!0,fog:!1}),d=new THREE.Geometry,d.vertices.push(this.position.clone()),d.vertices.push(this.targetSphere.position.clone()),
d.computeLineDistances(),this.targetLine=new THREE.Line(d,a),this.targetLine.properties.isGizmo=!0);this.properties.isGizmo=!0};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.update=function(){this.direction.sub(this.light.target.position,this.light.position);this.lightArrow.setDirection(this.direction);this.color.copy(this.light.color);var a=THREE.Math.clamp(this.light.intensity,0,1);this.color.r*=a;this.color.g*=a;this.color.b*=a;this.lightArrow.setColor(this.color.getHex());this.lightSphere.material.color.copy(this.color);this.lightRays.material.color.copy(this.color);this.targetSphere.material.color.copy(this.color);this.targetLine.material.color.copy(this.color);
this.targetLine.geometry.vertices[0].copy(this.light.position);this.targetLine.geometry.vertices[1].copy(this.light.target.position);this.targetLine.geometry.computeLineDistances();this.targetLine.geometry.verticesNeedUpdate=!0};THREE.HemisphereLightHelper=function(a,b,c){THREE.Object3D.call(this);this.light=a;this.position=a.position;var d=THREE.Math.clamp(a.intensity,0,1);this.color=a.color.clone();this.color.r*=d;this.color.g*=d;this.color.b*=d;var e=this.color.getHex();this.groundColor=a.groundColor.clone();this.groundColor.r*=d;this.groundColor.g*=d;this.groundColor.b*=d;for(var d=this.groundColor.getHex(),f=new THREE.SphereGeometry(b,16,8,0,2*Math.PI,0,0.5*Math.PI),g=new THREE.SphereGeometry(b,16,8,0,2*Math.PI,0.5*
Math.PI,Math.PI),h=new THREE.MeshBasicMaterial({color:e,fog:!1}),i=new THREE.MeshBasicMaterial({color:d,fog:!1}),j=0,m=f.faces.length;j<m;j++)f.faces[j].materialIndex=0;j=0;for(m=g.faces.length;j<m;j++)g.faces[j].materialIndex=1;THREE.GeometryUtils.merge(f,g);this.lightSphere=new THREE.Mesh(f,new THREE.MeshFaceMaterial([h,i]));this.lightArrow=new THREE.ArrowHelper(new THREE.Vector3(0,1,0),new THREE.Vector3(0,1.1*(b+c),0),c,e);this.lightArrow.rotation.x=Math.PI;this.lightArrowGround=new THREE.ArrowHelper(new THREE.Vector3(0,
1,0),new THREE.Vector3(0,-1.1*(b+c),0),c,d);b=new THREE.Object3D;b.rotation.x=0.5*-Math.PI;b.add(this.lightSphere);b.add(this.lightArrow);b.add(this.lightArrowGround);this.add(b);this.lightSphere.properties.isGizmo=!0;this.lightSphere.properties.gizmoSubject=a;this.lightSphere.properties.gizmoRoot=this;this.properties.isGizmo=!0;this.target=new THREE.Vector3;this.lookAt(this.target)};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.update=function(){var a=THREE.Math.clamp(this.light.intensity,0,1);this.color.copy(this.light.color);this.groundColor.copy(this.light.groundColor);this.color.r*=a;this.color.g*=a;this.color.b*=a;this.groundColor.r*=a;this.groundColor.g*=a;this.groundColor.b*=a;this.lightSphere.material.materials[0].color.copy(this.color);this.lightSphere.material.materials[1].color.copy(this.groundColor);this.lightArrow.setColor(this.color.getHex());this.lightArrowGround.setColor(this.groundColor.getHex());
this.lookAt(this.target)};THREE.PointLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.position=a.position;this.color=a.color.clone();var c=THREE.Math.clamp(a.intensity,0,1);this.color.r*=c;this.color.g*=c;this.color.b*=c;var d=this.color.getHex(),c=new THREE.SphereGeometry(b,16,8),e=new THREE.AsteriskGeometry(1.25*b,2.25*b),f=new THREE.IcosahedronGeometry(1,2),g=new THREE.MeshBasicMaterial({color:d,fog:!1}),h=new THREE.LineBasicMaterial({color:d,fog:!1}),d=new THREE.MeshBasicMaterial({color:d,fog:!1,wireframe:!0,
opacity:0.1,transparent:!0});this.lightSphere=new THREE.Mesh(c,g);this.lightRays=new THREE.Line(e,h,THREE.LinePieces);this.lightDistance=new THREE.Mesh(f,d);c=a.distance;0===c?this.lightDistance.visible=!1:this.lightDistance.scale.set(c,c,c);this.add(this.lightSphere);this.add(this.lightRays);this.add(this.lightDistance);this.lightSphere.properties.isGizmo=!0;this.lightSphere.properties.gizmoSubject=a;this.lightSphere.properties.gizmoRoot=this;this.properties.isGizmo=!0};
THREE.PointLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.PointLightHelper.prototype.update=function(){this.color.copy(this.light.color);var a=THREE.Math.clamp(this.light.intensity,0,1);this.color.r*=a;this.color.g*=a;this.color.b*=a;this.lightSphere.material.color.copy(this.color);this.lightRays.material.color.copy(this.color);this.lightDistance.material.color.copy(this.color);a=this.light.distance;0===a?this.lightDistance.visible=!1:(this.lightDistance.visible=!0,this.lightDistance.scale.set(a,a,a))};THREE.SpotLightHelper=function(a,b,c){THREE.Object3D.call(this);this.light=a;this.position=a.position;this.direction=new THREE.Vector3;this.direction.sub(a.target.position,a.position);this.color=a.color.clone();var d=THREE.Math.clamp(a.intensity,0,1);this.color.r*=d;this.color.g*=d;this.color.b*=d;var d=this.color.getHex(),e=new THREE.SphereGeometry(b,16,8),f=new THREE.AsteriskGeometry(1.25*b,2.25*b),g=new THREE.CylinderGeometry(1E-4,1,1,8,1,!0),h=new THREE.Matrix4;h.rotateX(-Math.PI/2);h.translate(new THREE.Vector3(0,
-0.5,0));g.applyMatrix(h);var i=new THREE.MeshBasicMaterial({color:d,fog:!1}),h=new THREE.LineBasicMaterial({color:d,fog:!1}),j=new THREE.MeshBasicMaterial({color:d,fog:!1,wireframe:!0,opacity:0.3,transparent:!0});this.lightArrow=new THREE.ArrowHelper(this.direction,null,c,d);this.lightSphere=new THREE.Mesh(e,i);this.lightCone=new THREE.Mesh(g,j);c=a.distance?a.distance:1E4;e=2*c*Math.tan(0.5*a.angle);this.lightCone.scale.set(e,e,c);this.lightArrow.cone.material.fog=!1;this.lightArrow.line.material.fog=
!1;this.lightRays=new THREE.Line(f,h,THREE.LinePieces);this.gyroscope=new THREE.Gyroscope;this.gyroscope.add(this.lightArrow);this.gyroscope.add(this.lightSphere);this.gyroscope.add(this.lightRays);this.add(this.gyroscope);this.add(this.lightCone);this.lookAt(a.target.position);this.lightSphere.properties.isGizmo=!0;this.lightSphere.properties.gizmoSubject=a;this.lightSphere.properties.gizmoRoot=this;this.targetSphere=null;a.target.properties.targetInverse&&(b=new THREE.SphereGeometry(b,8,4),f=new THREE.MeshBasicMaterial({color:d,
wireframe:!0,fog:!1}),this.targetSphere=new THREE.Mesh(b,f),this.targetSphere.position=a.target.position,this.targetSphere.properties.isGizmo=!0,this.targetSphere.properties.gizmoSubject=a.target,this.targetSphere.properties.gizmoRoot=this.targetSphere,a=new THREE.LineDashedMaterial({color:d,dashSize:4,gapSize:4,opacity:0.75,transparent:!0,fog:!1}),d=new THREE.Geometry,d.vertices.push(this.position.clone()),d.vertices.push(this.targetSphere.position.clone()),d.computeLineDistances(),this.targetLine=
new THREE.Line(d,a),this.targetLine.properties.isGizmo=!0);this.properties.isGizmo=!0};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.update=function(){this.direction.sub(this.light.target.position,this.light.position);this.lightArrow.setDirection(this.direction);this.lookAt(this.light.target.position);var a=this.light.distance?this.light.distance:1E4,b=2*a*Math.tan(0.5*this.light.angle);this.lightCone.scale.set(b,b,a);this.color.copy(this.light.color);a=THREE.Math.clamp(this.light.intensity,0,1);this.color.r*=a;this.color.g*=a;this.color.b*=a;this.lightArrow.setColor(this.color.getHex());this.lightSphere.material.color.copy(this.color);
this.lightRays.material.color.copy(this.color);this.lightCone.material.color.copy(this.color);this.targetSphere.material.color.copy(this.color);this.targetLine.material.color.copy(this.color);this.targetLine.geometry.vertices[0].copy(this.light.position);this.targetLine.geometry.vertices[1].copy(this.light.target.position);this.targetLine.geometry.computeLineDistances();this.targetLine.geometry.verticesNeedUpdate=!0};THREE.SubdivisionModifier=function(a){this.subdivisions=void 0===a?1:a;this.useOldVertexColors=!1;this.supportUVs=!0;this.debug=!1};THREE.SubdivisionModifier.prototype.modify=function(a){for(var b=this.subdivisions;0<b--;)this.smooth(a)};THREE.GeometryUtils.orderedKey=function(a,b){return Math.min(a,b)+"_"+Math.max(a,b)};
THREE.GeometryUtils.computeEdgeFaces=function(a){function b(a,b){void 0===g[a]&&(g[a]=[]);g[a].push(b)}var c,d,e,f,g={},h=THREE.GeometryUtils.orderedKey;c=0;for(d=a.faces.length;c<d;c++)e=a.faces[c],e instanceof THREE.Face3?(f=h(e.a,e.b),b(f,c),f=h(e.b,e.c),b(f,c),f=h(e.c,e.a),b(f,c)):e instanceof THREE.Face4&&(f=h(e.a,e.b),b(f,c),f=h(e.b,e.c),b(f,c),f=h(e.c,e.d),b(f,c),f=h(e.d,e.a),b(f,c));return g};
THREE.SubdivisionModifier.prototype.smooth=function(a){function b(){m.debug&&(console&&console.assert)&&console.assert.apply(console,arguments)}function c(){m.debug&&console.log.apply(console,arguments)}function d(){console&&console.log.apply(console,arguments)}function e(a,b,d,e,g,h,l){var n=new THREE.Face4(a,b,d,e,null,g.color,g.materialIndex);if(m.useOldVertexColors){n.vertexColors=[];for(var p,q,r,s=0;4>s;s++){r=h[s];p=new THREE.Color;p.setRGB(0,0,0);for(var t=0;t<r.length;t++)q=g.vertexColors[r[t]-
1],p.r+=q.r,p.g+=q.g,p.b+=q.b;p.r/=r.length;p.g/=r.length;p.b/=r.length;n.vertexColors[s]=p}}i.push(n);m.supportUVs&&(g=[f(a,""),f(b,l),f(d,l),f(e,l)],g[0]?g[1]?g[2]?g[3]?j.push(g):c("d :( ",e+":"+l):c("c :( ",d+":"+l):c("b :( ",b+":"+l):c("a :( ",a+":"+l))}function f(a,b){var e=a+":"+b,f=A[e];return!f?(a>=l&&a<l+r.length?c("face pt"):c("edge pt"),d("warning, UV not found for",e),null):f}function g(a,b,c){var e=a+":"+b;e in A?d("dup vertexNo",a,"oldFaceNo",b,"value",c,"key",e,A[e]):A[e]=c}var h=[],
i=[],j=[],m=this,p=THREE.GeometryUtils.orderedKey,n=THREE.GeometryUtils.computeEdgeFaces,s=a.vertices,r=a.faces,l=s.length,h=s.concat(),t=[],u={},E={},A={},q,F,z,x,v,I=a.faceVertexUvs[0],C;c("originalFaces, uvs, originalVerticesLength",r.length,I.length,l);if(m.supportUVs){q=0;for(F=I.length;q<F;q++){z=0;for(x=I[q].length;z<x;z++)C=r[q]["abcd".charAt(z)],g(C,q,I[q][z])}}0==I.length&&(m.supportUVs=!1);q=0;for(var G in A)q++;q||(m.supportUVs=!1,c("no uvs"));q=0;for(F=r.length;q<F;q++)v=r[q],t.push(v.centroid),
h.push(v.centroid),m.supportUVs&&(x=new THREE.Vector2,v instanceof THREE.Face3?(x.x=f(v.a,q).x+f(v.b,q).x+f(v.c,q).x,x.y=f(v.a,q).y+f(v.b,q).y+f(v.c,q).y,x.x/=3,x.y/=3):v instanceof THREE.Face4&&(x.x=f(v.a,q).x+f(v.b,q).x+f(v.c,q).x+f(v.d,q).x,x.y=f(v.a,q).y+f(v.b,q).y+f(v.c,q).y+f(v.d,q).y,x.x/=4,x.y/=4),g(l+q,"",x));var n=n(a),M;F=0;var B,J;G={};I={};for(q in n){C=n[q];B=q.split("_");J=B[0];B=B[1];z=J;v=[J,B];void 0===G[z]&&(G[z]=[]);G[z].push(v);z=B;v=[J,B];void 0===G[z]&&(G[z]=[]);G[z].push(v);
z=0;for(x=C.length;z<x;z++){v=C[z];M=J;var D=v,L=q;void 0===I[M]&&(I[M]={});I[M][D]=L;M=B;D=q;void 0===I[M]&&(I[M]={});I[M][v]=D}2>C.length&&(E[q]=!0)}for(q in n)C=n[q],v=C[0],M=C[1],B=q.split("_"),J=B[0],B=B[1],x=new THREE.Vector3,b(0<C.length,"an edge without faces?!"),1==C.length?(x.addSelf(s[J]),x.addSelf(s[B]),x.multiplyScalar(0.5)):(x.addSelf(t[v]),x.addSelf(t[M]),x.addSelf(s[J]),x.addSelf(s[B]),x.multiplyScalar(0.25)),u[q]=l+r.length+F,h.push(x),F++,m.supportUVs&&(x=new THREE.Vector2,x.x=f(J,
v).x+f(B,v).x,x.y=f(J,v).y+f(B,v).y,x.x/=2,x.y/=2,g(u[q],v,x),2<=C.length&&(b(2==C.length,"did we plan for more than 2 edges?"),x=new THREE.Vector2,x.x=f(J,M).x+f(B,M).x,x.y=f(J,M).y+f(B,M).y,x.x/=2,x.y/=2,g(u[q],M,x)));c("-- Step 2 done");var K,U;x=["123","12","2","23"];M=["123","23","3","31"];var D=["123","31","1","12"],L=["1234","12","2","23"],N=["1234","23","3","34"],ia=["1234","34","4","41"],sa=["1234","41","1","12"];q=0;for(F=t.length;q<F;q++)v=r[q],C=l+q,v instanceof THREE.Face3?(J=p(v.a,v.b),
B=p(v.b,v.c),K=p(v.c,v.a),e(C,u[J],v.b,u[B],v,x,q),e(C,u[B],v.c,u[K],v,M,q),e(C,u[K],v.a,u[J],v,D,q)):v instanceof THREE.Face4?(J=p(v.a,v.b),B=p(v.b,v.c),K=p(v.c,v.d),U=p(v.d,v.a),e(C,u[J],v.b,u[B],v,L,q),e(C,u[B],v.c,u[K],v,N,q),e(C,u[K],v.d,u[U],v,ia,q),e(C,u[U],v.a,u[J],v,sa,q)):c("face should be a face!",v);u=new THREE.Vector3;v=new THREE.Vector3;q=0;for(F=s.length;q<F;q++)if(void 0!==G[q]){u.set(0,0,0);v.set(0,0,0);B=new THREE.Vector3(0,0,0);C=0;for(z in I[q])u.addSelf(t[z]),C++;M=0;J=G[q].length;
x=C!=J;for(z=0;z<J;z++)E[p(G[q][z][0],G[q][z][1])]&&M++;u.divideScalar(C);M=0;if(x){for(z=0;z<J;z++)if(C=G[q][z],D=1==n[p(C[0],C[1])].length)C=s[C[0]].clone().addSelf(s[C[1]]).divideScalar(2),v.addSelf(C),M++;v.divideScalar(4);b(2==M,"should have only 2 boundary edges")}else{for(z=0;z<J;z++)C=G[q][z],C=s[C[0]].clone().addSelf(s[C[1]]).divideScalar(2),v.addSelf(C);v.divideScalar(J)}B.addSelf(s[q]);x?(B.divideScalar(2),B.addSelf(v)):(B.multiplyScalar(J-3),B.addSelf(u),B.addSelf(v.multiplyScalar(2)),
B.divideScalar(J));h[q]=B}a.vertices=h;a.faces=i;a.faceVertexUvs[0]=j;delete a.__tmpVertices;a.computeCentroids();a.computeFaceNormals();a.computeVertexNormals()};THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=0.25*c.x*Math.PI,c.rotation+=0.25*(c.wantedRotation-c.rotation)};THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var i=h[1];d[i]||(d[i]={start:Infinity,end:-Infinity});h=d[i];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=i)}}for(i in d)h=d[i],this.createAnimation(i,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};THREE.LensFlarePlugin=function(){function a(a){var c=b.createProgram(),d=b.createShader(b.FRAGMENT_SHADER),e=b.createShader(b.VERTEX_SHADER);b.shaderSource(d,a.fragmentShader);b.shaderSource(e,a.vertexShader);b.compileShader(d);b.compileShader(e);b.attachShader(c,d);b.attachShader(c,e);b.linkProgram(c);return c}var b,c,d,e,f,g,h,i,j,m,p,n;this.init=function(s){b=s.context;c=s;d=new Float32Array(16);e=new Uint16Array(6);s=0;d[s++]=-1;d[s++]=-1;d[s++]=0;d[s++]=0;d[s++]=1;d[s++]=-1;d[s++]=1;d[s++]=0;
d[s++]=1;d[s++]=1;d[s++]=1;d[s++]=1;d[s++]=-1;d[s++]=1;d[s++]=0;d[s++]=1;s=0;e[s++]=0;e[s++]=1;e[s++]=2;e[s++]=0;e[s++]=2;e[s++]=3;f=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,f);b.bufferData(b.ARRAY_BUFFER,d,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,e,b.STATIC_DRAW);h=b.createTexture();i=b.createTexture();b.bindTexture(b.TEXTURE_2D,h);b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,0,b.RGB,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,
b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.bindTexture(b.TEXTURE_2D,i);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);0>=b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(j=!1,m=a(THREE.ShaderFlares.lensFlare)):(j=!0,m=a(THREE.ShaderFlares.lensFlareVertexTexture));p={};n={};p.vertex=b.getAttribLocation(m,"position");p.uv=b.getAttribLocation(m,"uv");n.renderType=b.getUniformLocation(m,"renderType");n.map=b.getUniformLocation(m,"map");n.occlusionMap=b.getUniformLocation(m,"occlusionMap");n.opacity=b.getUniformLocation(m,"opacity");n.color=b.getUniformLocation(m,
"color");n.scale=b.getUniformLocation(m,"scale");n.rotation=b.getUniformLocation(m,"rotation");n.screenPosition=b.getUniformLocation(m,"screenPosition")};this.render=function(a,d,e,t){var a=a.__webglFlares,u=a.length;if(u){var E=new THREE.Vector3,A=t/e,q=0.5*e,F=0.5*t,z=16/t,x=new THREE.Vector2(z*A,z),v=new THREE.Vector3(1,1,0),I=new THREE.Vector2(1,1),C=n,z=p;b.useProgram(m);b.enableVertexAttribArray(p.vertex);b.enableVertexAttribArray(p.uv);b.uniform1i(C.occlusionMap,0);b.uniform1i(C.map,1);b.bindBuffer(b.ARRAY_BUFFER,
f);b.vertexAttribPointer(z.vertex,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(z.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.disable(b.CULL_FACE);b.depthMask(!1);var G,M,B,J,D;for(G=0;G<u;G++)if(z=16/t,x.set(z*A,z),J=a[G],E.set(J.matrixWorld.elements[12],J.matrixWorld.elements[13],J.matrixWorld.elements[14]),d.matrixWorldInverse.multiplyVector3(E),d.projectionMatrix.multiplyVector3(E),v.copy(E),I.x=v.x*q+q,I.y=v.y*F+F,j||0<I.x&&I.x<e&&0<I.y&&I.y<t){b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,
h);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,I.x-8,I.y-8,16,16,0);b.uniform1i(C.renderType,0);b.uniform2f(C.scale,x.x,x.y);b.uniform3f(C.screenPosition,v.x,v.y,v.z);b.disable(b.BLEND);b.enable(b.DEPTH_TEST);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,i);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,I.x-8,I.y-8,16,16,0);b.uniform1i(C.renderType,1);b.disable(b.DEPTH_TEST);b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,h);b.drawElements(b.TRIANGLES,
6,b.UNSIGNED_SHORT,0);J.positionScreen.copy(v);J.customUpdateCallback?J.customUpdateCallback(J):J.updateLensFlares();b.uniform1i(C.renderType,2);b.enable(b.BLEND);M=0;for(B=J.lensFlares.length;M<B;M++)D=J.lensFlares[M],0.001<D.opacity&&0.001<D.scale&&(v.x=D.x,v.y=D.y,v.z=D.z,z=D.size*D.scale/t,x.x=z*A,x.y=z,b.uniform3f(C.screenPosition,v.x,v.y,v.z),b.uniform2f(C.scale,x.x,x.y),b.uniform1f(C.rotation,D.rotation),b.uniform1f(C.opacity,D.opacity),b.uniform3f(C.color,D.color.r,D.color.g,D.color.b),c.setBlending(D.blending,
D.blendEquation,D.blendSrc,D.blendDst),c.setTexture(D.texture,1),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0))}b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(!0)}}};THREE.ShadowMapPlugin=function(){var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4,i=new THREE.Vector3,j=new THREE.Vector3;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,c){b.shadowMapEnabled&&b.shadowMapAutoUpdate&&this.update(a,c)};this.update=function(m,p){var n,s,r,l,t,u,E,A,q,F=[];l=0;a.clearColor(1,1,1,1);a.disable(a.BLEND);a.enable(a.CULL_FACE);a.frontFace(a.CCW);b.shadowMapCullFace===THREE.CullFaceFront?
a.cullFace(a.FRONT):a.cullFace(a.BACK);b.setDepthTest(!0);n=0;for(s=m.__lights.length;n<s;n++)if(r=m.__lights[n],r.castShadow)if(r instanceof THREE.DirectionalLight&&r.shadowCascade)for(t=0;t<r.shadowCascadeCount;t++){var z;if(r.shadowCascadeArray[t])z=r.shadowCascadeArray[t];else{q=r;E=t;z=new THREE.DirectionalLight;z.isVirtual=!0;z.onlyShadow=!0;z.castShadow=!0;z.shadowCameraNear=q.shadowCameraNear;z.shadowCameraFar=q.shadowCameraFar;z.shadowCameraLeft=q.shadowCameraLeft;z.shadowCameraRight=q.shadowCameraRight;
z.shadowCameraBottom=q.shadowCameraBottom;z.shadowCameraTop=q.shadowCameraTop;z.shadowCameraVisible=q.shadowCameraVisible;z.shadowDarkness=q.shadowDarkness;z.shadowBias=q.shadowCascadeBias[E];z.shadowMapWidth=q.shadowCascadeWidth[E];z.shadowMapHeight=q.shadowCascadeHeight[E];z.pointsWorld=[];z.pointsFrustum=[];A=z.pointsWorld;u=z.pointsFrustum;for(var x=0;8>x;x++)A[x]=new THREE.Vector3,u[x]=new THREE.Vector3;A=q.shadowCascadeNearZ[E];q=q.shadowCascadeFarZ[E];u[0].set(-1,-1,A);u[1].set(1,-1,A);u[2].set(-1,
1,A);u[3].set(1,1,A);u[4].set(-1,-1,q);u[5].set(1,-1,q);u[6].set(-1,1,q);u[7].set(1,1,q);z.originalCamera=p;u=new THREE.Gyroscope;u.position=r.shadowCascadeOffset;u.add(z);u.add(z.target);p.add(u);r.shadowCascadeArray[t]=z;console.log("Created virtualLight",z)}E=r;A=t;q=E.shadowCascadeArray[A];q.position.copy(E.position);q.target.position.copy(E.target.position);q.lookAt(q.target);q.shadowCameraVisible=E.shadowCameraVisible;q.shadowDarkness=E.shadowDarkness;q.shadowBias=E.shadowCascadeBias[A];u=E.shadowCascadeNearZ[A];
E=E.shadowCascadeFarZ[A];q=q.pointsFrustum;q[0].z=u;q[1].z=u;q[2].z=u;q[3].z=u;q[4].z=E;q[5].z=E;q[6].z=E;q[7].z=E;F[l]=z;l++}else F[l]=r,l++;n=0;for(s=F.length;n<s;n++){r=F[n];r.shadowMap||(r.shadowMap=new THREE.WebGLRenderTarget(r.shadowMapWidth,r.shadowMapHeight,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat}),r.shadowMapSize=new THREE.Vector2(r.shadowMapWidth,r.shadowMapHeight),r.shadowMatrix=new THREE.Matrix4);if(!r.shadowCamera){if(r instanceof THREE.SpotLight)r.shadowCamera=
new THREE.PerspectiveCamera(r.shadowCameraFov,r.shadowMapWidth/r.shadowMapHeight,r.shadowCameraNear,r.shadowCameraFar);else if(r instanceof THREE.DirectionalLight)r.shadowCamera=new THREE.OrthographicCamera(r.shadowCameraLeft,r.shadowCameraRight,r.shadowCameraTop,r.shadowCameraBottom,r.shadowCameraNear,r.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}m.add(r.shadowCamera);b.autoUpdateScene&&m.updateMatrixWorld()}r.shadowCameraVisible&&!r.cameraHelper&&(r.cameraHelper=
new THREE.CameraHelper(r.shadowCamera),r.shadowCamera.add(r.cameraHelper));if(r.isVirtual&&z.originalCamera==p){t=p;l=r.shadowCamera;u=r.pointsFrustum;q=r.pointsWorld;i.set(Infinity,Infinity,Infinity);j.set(-Infinity,-Infinity,-Infinity);for(E=0;8>E;E++)A=q[E],A.copy(u[E]),THREE.ShadowMapPlugin.__projector.unprojectVector(A,t),l.matrixWorldInverse.multiplyVector3(A),A.x<i.x&&(i.x=A.x),A.x>j.x&&(j.x=A.x),A.y<i.y&&(i.y=A.y),A.y>j.y&&(j.y=A.y),A.z<i.z&&(i.z=A.z),A.z>j.z&&(j.z=A.z);l.left=i.x;l.right=
j.x;l.top=j.y;l.bottom=i.y;l.updateProjectionMatrix()}l=r.shadowMap;u=r.shadowMatrix;t=r.shadowCamera;t.position.copy(r.matrixWorld.getPosition());t.lookAt(r.target.matrixWorld.getPosition());t.updateMatrixWorld();t.matrixWorldInverse.getInverse(t.matrixWorld);r.cameraHelper&&(r.cameraHelper.visible=r.shadowCameraVisible);r.shadowCameraVisible&&r.cameraHelper.update();u.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);u.multiplySelf(t.projectionMatrix);u.multiplySelf(t.matrixWorldInverse);h.multiply(t.projectionMatrix,
t.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(l);b.clear();q=m.__webglObjects;r=0;for(l=q.length;r<l;r++)if(E=q[r],u=E.object,E.render=!1,u.visible&&u.castShadow&&(!(u instanceof THREE.Mesh||u instanceof THREE.ParticleSystem)||!u.frustumCulled||g.contains(u)))u._modelViewMatrix.multiply(t.matrixWorldInverse,u.matrixWorld),E.render=!0;r=0;for(l=q.length;r<l;r++)E=q[r],E.render&&(u=E.object,E=E.buffer,x=u.material instanceof THREE.MeshFaceMaterial?u.material.materials[0]:u.material,A=0<
u.geometry.morphTargets.length&&x.morphTargets,x=u instanceof THREE.SkinnedMesh&&x.skinning,A=u.customDepthMaterial?u.customDepthMaterial:x?A?f:e:A?d:c,E instanceof THREE.BufferGeometry?b.renderBufferDirect(t,m.__lights,null,A,E,u):b.renderBuffer(t,m.__lights,null,A,E,u));q=m.__webglObjectsImmediate;r=0;for(l=q.length;r<l;r++)E=q[r],u=E.object,u.visible&&u.castShadow&&(u._modelViewMatrix.multiply(t.matrixWorldInverse,u.matrixWorld),b.renderImmediateObject(t,m.__lights,null,c,u))}n=b.getClearColor();
s=b.getClearAlpha();a.clearColor(n.r,n.g,n.b,s);a.enable(a.BLEND);b.shadowMapCullFace===THREE.CullFaceFront&&a.cullFace(a.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;THREE.SpritePlugin=function(){function a(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var b,c,d,e,f,g,h,i,j;this.init=function(a){b=a.context;c=a;d=new Float32Array(16);e=new Uint16Array(6);a=0;d[a++]=-1;d[a++]=-1;d[a++]=0;d[a++]=0;d[a++]=1;d[a++]=-1;d[a++]=1;d[a++]=0;d[a++]=1;d[a++]=1;d[a++]=1;d[a++]=1;d[a++]=-1;d[a++]=1;d[a++]=0;d[a++]=1;a=0;e[a++]=0;e[a++]=1;e[a++]=2;e[a++]=0;e[a++]=2;e[a++]=3;f=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,f);b.bufferData(b.ARRAY_BUFFER,d,b.STATIC_DRAW);
b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,e,b.STATIC_DRAW);var a=THREE.ShaderSprite.sprite,p=b.createProgram(),n=b.createShader(b.FRAGMENT_SHADER),s=b.createShader(b.VERTEX_SHADER);b.shaderSource(n,a.fragmentShader);b.shaderSource(s,a.vertexShader);b.compileShader(n);b.compileShader(s);b.attachShader(p,n);b.attachShader(p,s);b.linkProgram(p);h=p;i={};j={};i.position=b.getAttribLocation(h,"position");i.uv=b.getAttribLocation(h,"uv");j.uvOffset=b.getUniformLocation(h,
"uvOffset");j.uvScale=b.getUniformLocation(h,"uvScale");j.rotation=b.getUniformLocation(h,"rotation");j.scale=b.getUniformLocation(h,"scale");j.alignment=b.getUniformLocation(h,"alignment");j.color=b.getUniformLocation(h,"color");j.map=b.getUniformLocation(h,"map");j.opacity=b.getUniformLocation(h,"opacity");j.useScreenCoordinates=b.getUniformLocation(h,"useScreenCoordinates");j.sizeAttenuation=b.getUniformLocation(h,"sizeAttenuation");j.screenPosition=b.getUniformLocation(h,"screenPosition");j.modelViewMatrix=
b.getUniformLocation(h,"modelViewMatrix");j.projectionMatrix=b.getUniformLocation(h,"projectionMatrix");j.fogType=b.getUniformLocation(h,"fogType");j.fogDensity=b.getUniformLocation(h,"fogDensity");j.fogNear=b.getUniformLocation(h,"fogNear");j.fogFar=b.getUniformLocation(h,"fogFar");j.fogColor=b.getUniformLocation(h,"fogColor");j.alphaTest=b.getUniformLocation(h,"alphaTest")};this.render=function(d,e,n,s){var r=d.__webglSprites,l=r.length;if(l){var t=i,u=j,E=s/n,n=0.5*n,A=0.5*s;b.useProgram(h);b.enableVertexAttribArray(t.position);
b.enableVertexAttribArray(t.uv);b.disable(b.CULL_FACE);b.enable(b.BLEND);b.bindBuffer(b.ARRAY_BUFFER,f);b.vertexAttribPointer(t.position,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(t.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.uniformMatrix4fv(u.projectionMatrix,!1,e.projectionMatrix.elements);b.activeTexture(b.TEXTURE0);b.uniform1i(u.map,0);var q=t=0,F=d.fog;F?(b.uniform3f(u.fogColor,F.color.r,F.color.g,F.color.b),F instanceof THREE.Fog?(b.uniform1f(u.fogNear,F.near),b.uniform1f(u.fogFar,
F.far),b.uniform1i(u.fogType,1),q=t=1):F instanceof THREE.FogExp2&&(b.uniform1f(u.fogDensity,F.density),b.uniform1i(u.fogType,2),q=t=2)):(b.uniform1i(u.fogType,0),q=t=0);for(var z,x,v=[],F=0;F<l;F++)z=r[F],x=z.material,z.visible&&0!==x.opacity&&(x.useScreenCoordinates?z.z=-z.position.z:(z._modelViewMatrix.multiply(e.matrixWorldInverse,z.matrixWorld),z.z=-z._modelViewMatrix.elements[14]));r.sort(a);for(F=0;F<l;F++)z=r[F],x=z.material,z.visible&&0!==x.opacity&&(x.map&&x.map.image&&x.map.image.width)&&
(b.uniform1f(u.alphaTest,x.alphaTest),x.useScreenCoordinates?(b.uniform1i(u.useScreenCoordinates,1),b.uniform3f(u.screenPosition,(z.position.x-n)/n,(A-z.position.y)/A,Math.max(0,Math.min(1,z.position.z)))):(b.uniform1i(u.useScreenCoordinates,0),b.uniform1i(u.sizeAttenuation,x.sizeAttenuation?1:0),b.uniformMatrix4fv(u.modelViewMatrix,!1,z._modelViewMatrix.elements)),e=d.fog&&x.fog?q:0,t!==e&&(b.uniform1i(u.fogType,e),t=e),e=1/(x.scaleByViewport?s:1),v[0]=e*E*z.scale.x,v[1]=e*z.scale.y,b.uniform2f(u.uvScale,
x.uvScale.x,x.uvScale.y),b.uniform2f(u.uvOffset,x.uvOffset.x,x.uvOffset.y),b.uniform2f(u.alignment,x.alignment.x,x.alignment.y),b.uniform1f(u.opacity,x.opacity),b.uniform3f(u.color,x.color.r,x.color.g,x.color.b),b.uniform1f(u.rotation,z.rotation),b.uniform2fv(u.scale,v),c.setBlending(x.blending,x.blendEquation,x.blendSrc,x.blendDst),c.setDepthTest(x.depthTest),c.setDepthWrite(x.depthWrite),c.setTexture(x.map,0),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0));b.enable(b.CULL_FACE)}}};THREE.DepthPassPlugin=function(){this.enabled=!1;this.renderTarget=null;var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(i,j){var m,p,n,s,r,l;a.clearColor(1,1,1,1);a.disable(a.BLEND);b.setDepthTest(!0);b.autoUpdateScene&&i.updateMatrixWorld();j.matrixWorldInverse.getInverse(j.matrixWorld);h.multiply(j.projectionMatrix,
j.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(this.renderTarget);b.clear();l=i.__webglObjects;m=0;for(p=l.length;m<p;m++)if(n=l[m],r=n.object,n.render=!1,r.visible&&(!(r instanceof THREE.Mesh||r instanceof THREE.ParticleSystem)||!r.frustumCulled||g.contains(r)))r._modelViewMatrix.multiply(j.matrixWorldInverse,r.matrixWorld),n.render=!0;var t;m=0;for(p=l.length;m<p;m++)if(n=l[m],n.render&&(r=n.object,n=n.buffer,!(r instanceof THREE.ParticleSystem)||r.customDepthMaterial))(t=r.material instanceof
THREE.MeshFaceMaterial?r.material.materials[0]:r.material)&&b.setMaterialFaces(r.material),s=0<r.geometry.morphTargets.length&&t.morphTargets,t=r instanceof THREE.SkinnedMesh&&t.skinning,s=r.customDepthMaterial?r.customDepthMaterial:t?s?f:e:s?d:c,n instanceof THREE.BufferGeometry?b.renderBufferDirect(j,i.__lights,null,s,n,r):b.renderBuffer(j,i.__lights,null,s,n,r);l=i.__webglObjectsImmediate;m=0;for(p=l.length;m<p;m++)n=l[m],r=n.object,r.visible&&(r._modelViewMatrix.multiply(j.matrixWorldInverse,
r.matrixWorld),b.renderImmediateObject(j,i.__lights,null,c,r));m=b.getClearColor();p=b.getClearAlpha();a.clearColor(m.r,m.g,m.b,p);a.enable(a.BLEND)}};THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform sampler2D map;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},lensFlare:{vertexShader:"uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};THREE.ShaderSprite={sprite:{vertexShader:"uniform int useScreenCoordinates;\nuniform int sizeAttenuation;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( sizeAttenuation == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
fragmentShader:"precision mediump float;\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"}};


/** Src: ../src/WebNaali.js **/
/**
 * Global namespace that holds highest level functionality
 * @namespace webnaali
 * @version 0.1 dev
 *
 */

(function ( namespace, $, undefined ) {

    // Attributes
    namespace.VERSION = '0.1 dev';
    namespace.NAME = 'WebNaali';


    // Basic methods

    namespace.log = function ( msg ) {
        var str;
        if ( typeof(msg) === 'string' ) {
            str = msg;
        } else if ( typeof(msg) === 'object' ) {
            str = JSON.stringify(msg);
        }else {
            str = "ERROR: Use Strings or Objects with log().";
        }
        var el = document.getElementById( "log" );
        if ( el !== null ) {
            el.innerHTML +=
                "&nbsp[" + new Date().toTimeString().replace( /.*(\d{2}:\d{2}:\d{2}).*/, "$1" ) + "] " + str + "<br>";
            el.scrollTop = el.scrollHeight;
        } else {
            console.log( msg );
        }
    };

    namespace.initScene = function ( container, options ) {
       return this.scene = new namespace.SceneManager( container );
    };

    namespace.initConnection = function ( host, port, options ) {
        var socket = new namespace.WSManager( host, port, options );

        if ( this.scene !== undefined ) {
            this.scene.bindConnection( socket );
        } else {
            console.error( " ERROR: Create scene before creating a WebSocket connection. " );
        }
        return socket;
    };

    namespace.start = function () {
        if ( this.scene !== undefined ) {
            this.scene.start();
        } else {
            console.error( " ERROR: Create a scene before starting the client. " );
        }
    };


    namespace.log( 'WebNaali v' + namespace.VERSION );


}( window['webnaali'] = window['webnaali'] || {}, jQuery ));

/** Src: ../src/util/general/Signals.js **/
/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */

(function ( global ) {

    // SignalBinding -------------------------------------------------
    //================================================================

    /**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name SignalBinding
     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
     * @param {Function} listener Handler function bound to the signal.
     * @param {boolean} isOnce If binding should be executed just once.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. (default = 0).
     */
    function SignalBinding( signal, listener, isOnce, listenerContext, priority ) {

        /**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */
        this._listener = listener;

        /**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */
        this._isOnce = isOnce;

        /**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */
        this.context = listenerContext;

        /**
         * Reference to Signal object that listener is currently bound to.
         * @type Signal
         * @private
         */
        this._signal = signal;

        /**
         * Listener priority
         * @type Number
         * @private
         */
        this._priority = priority || 0;
    }

    SignalBinding.prototype = {

        /**
         * If binding is active and should be executed.
         * @type boolean
         */
        active: true,

        /**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */
        params: null,

        /**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */
        execute: function ( paramsArr ) {
            var handlerReturn, params;
            if ( this.active && !!this._listener ) {
                params = this.params ? this.params.concat( paramsArr ) : paramsArr;
                handlerReturn = this._listener.apply( this.context, params );
                if ( this._isOnce ) {
                    this.detach();
                }
            }
            return handlerReturn;
        },

        /**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */
        detach: function () {
            return this.isBound() ? this._signal.remove( this._listener, this.context ) : null;
        },

        /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
        isBound: function () {
            return (!!this._signal && !!this._listener);
        },

        /**
         * @return {boolean} If SignalBinding will only be executed once.
         */
        isOnce: function () {
            return this._isOnce;
        },

        /**
         * @return {Function} Handler function bound to the signal.
         */
        getListener: function () {
            return this._listener;
        },

        /**
         * @return {Signal} Signal that listener is currently bound to.
         */
        getSignal: function () {
            return this._signal;
        },

        /**
         * Delete instance properties
         * @private
         */
        _destroy: function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString: function () {
            return '[SignalBinding isOnce:' + this._isOnce + ', isBound:' + this.isBound() + ', active:' + this.active + ']';
        }

    };


    /*global SignalBinding:false*/

    // Signal --------------------------------------------------------
    //================================================================

    function validateListener( listener, fnName ) {
        if ( typeof listener !== 'function' ) {
            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace( '{fn}', fnName ) );
        }
    }

    /**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @name Signal
     * @author Miller Medeiros
     * @constructor
     */
    function Signal() {
        /**
         * @type Array.<SignalBinding>
         * @private
         */
        this._bindings = [];
        this._prevParams = null;

        // enforce dispatch to aways work on same context (#47)
        var self = this;
        this.dispatch = function () {
            Signal.prototype.dispatch.apply( self, arguments );
        };
    }

    Signal.prototype = {

        /**
         * Signals Version Number
         * @type String
         * @const
         */
        VERSION: '1.0.0',

        /**
         * If Signal should keep record of previously dispatched parameters and
         * automatically execute listener during `add()`/`addOnce()` if Signal was
         * already dispatched before.
         * @type boolean
         */
        memorize: false,

        /**
         * @type boolean
         * @private
         */
        _shouldPropagate: true,

        /**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */
        active: true,

        /**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [listenerContext]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */
        _registerListener: function ( listener, isOnce, listenerContext, priority ) {

            var prevIndex = this._indexOfListener( listener, listenerContext ),
                binding;

            if ( prevIndex !== -1 ) {
                binding = this._bindings[prevIndex];
                if ( binding.isOnce() !== isOnce ) {
                    throw new Error( 'You cannot add' + (isOnce ? '' : 'Once') + '() then add' + (!isOnce ? '' : 'Once') + '() the same listener without removing the relationship first.' );
                }
            } else {
                binding = new SignalBinding( this, listener, isOnce, listenerContext, priority );
                this._addBinding( binding );
            }

            if ( this.memorize && this._prevParams ) {
                binding.execute( this._prevParams );
            }

            return binding;
        },

        /**
         * @param {SignalBinding} binding
         * @private
         */
        _addBinding: function ( binding ) {
            //simplified insertion sort
            var n = this._bindings.length;
            do {
                --n;
            } while ( this._bindings[n] && binding._priority <= this._bindings[n]._priority );
            this._bindings.splice( n + 1, 0, binding );
        },

        /**
         * @param {Function} listener
         * @return {number}
         * @private
         */
        _indexOfListener: function ( listener, context ) {
            var n = this._bindings.length,
                cur;
            while ( n-- ) {
                cur = this._bindings[n];
                if ( cur._listener === listener && cur.context === context ) {
                    return n;
                }
            }
            return -1;
        },

        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener
         * @param {Object} [context]
         * @return {boolean} if Signal has the specified listener.
         */
        has: function ( listener, context ) {
            return this._indexOfListener( listener, context ) !== -1;
        },

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        add: function ( listener, listenerContext, priority ) {
            validateListener( listener, 'add' );
            return this._registerListener( listener, false, listenerContext, priority );
        },

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        addOnce: function ( listener, listenerContext, priority ) {
            validateListener( listener, 'addOnce' );
            return this._registerListener( listener, true, listenerContext, priority );
        },

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */
        remove: function ( listener, context ) {
            validateListener( listener, 'remove' );

            var i = this._indexOfListener( listener, context );
            if ( i !== -1 ) {
                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                this._bindings.splice( i, 1 );
            }
            return listener;
        },

        /**
         * Remove all listeners from the Signal.
         */
        removeAll: function () {
            var n = this._bindings.length;
            while ( n-- ) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        },

        /**
         * @return {number} Number of listeners attached to the Signal.
         */
        getNumListeners: function () {
            return this._bindings.length;
        },

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see Signal.prototype.disable
         */
        halt: function () {
            this._shouldPropagate = false;
        },

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params] Parameters that should be passed to each handler.
         */
        dispatch: function ( params ) {
            if ( !this.active ) {
                return;
            }

            var paramsArr = Array.prototype.slice.call( arguments ),
                n = this._bindings.length,
                bindings;

            if ( this.memorize ) {
                this._prevParams = paramsArr;
            }

            if ( !n ) {
                //should come after memorize
                return;
            }

            bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
            this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
            //reverse loop since listeners with higher priority will be added at the end of the list
            do {
                n--;
            } while ( bindings[n] && this._shouldPropagate && bindings[n].execute( paramsArr ) !== false );
        },

        /**
         * Forget memorized arguments.
         * @see Signal.memorize
         */
        forget: function () {
            this._prevParams = null;
        },

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */
        dispose: function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString: function () {
            return '[Signal active:' + this.active + ' numListeners:' + this.getNumListeners() + ']';
        }

    };


    // Namespace -----------------------------------------------------
    //================================================================


    //use string because of Google closure compiler ADVANCED_MODE
    /*jslint sub:true */
    global['Signal'] = Signal;


}( window ));


/** Src: ../src/util/parsers/ColladaLoader.js **/
/**
 * @author Tim Knip / http://www.floorplanner.com/ / tim at floorplanner.com
 */

THREE.ColladaLoader = function () {

	var COLLADA = null;
	var scene = null;
	var daeScene;

	var readyCallbackFunc = null;

 	var sources = {};
	var images = {};
	var animations = {};
	var controllers = {};
	var geometries = {};
	var materials = {};
	var effects = {};
	var cameras = {};

	var animData;
	var visualScenes;
	var baseUrl;
	var morphs;
	var skins;

	var flip_uv = true;
	var preferredShading = THREE.SmoothShading;

	var options = {
		// Force Geometry to always be centered at the local origin of the
		// containing Mesh.
		centerGeometry: false,

		// Axis conversion is done for geometries, animations, and controllers.
		// If we ever pull cameras or lights out of the COLLADA file, they'll
		// need extra work.
		convertUpAxis: false,

		subdivideFaces: true,

		upAxis: 'Y',

		// For reflective or refractive materials we'll use this cubemap
		defaultEnvMap: null

	};

	// TODO: support unit conversion as well
	var colladaUnit = 1.0;
	var colladaUp = 'Y';
	var upConversion = null;

	var TO_RADIANS = Math.PI / 180;

	function load ( url, readyCallback, progressCallback ) {

		var length = 0;

		if ( document.implementation && document.implementation.createDocument ) {

			var request = new XMLHttpRequest();

			request.onreadystatechange = function() {

				if( request.readyState == 4 ) {

					if( request.status == 0 || request.status == 200 ) {


						if ( request.responseXML ) {

							readyCallbackFunc = readyCallback;
							parse( request.responseXML, undefined, url );

						} else if ( request.responseText ) {

							readyCallbackFunc = readyCallback;
							var xmlParser = new DOMParser();
							var responseXML = xmlParser.parseFromString( request.responseText, "application/xml" );
							parse( responseXML, undefined, url );

						} else {

							console.error( "ColladaLoader: Empty or non-existing file (" + url + ")" );

						}

					}

				} else if ( request.readyState == 3 ) {

					if ( progressCallback ) {

						if ( length == 0 ) {

							length = request.getResponseHeader( "Content-Length" );

						}

						progressCallback( { total: length, loaded: request.responseText.length } );

					}

				}

			}

			request.open( "GET", url, true );
			request.send( null );

		} else {

			alert( "Don't know how to parse XML!" );

		}

	};

	function parse( doc, callBack, url ) {

		COLLADA = doc;
		callBack = callBack || readyCallbackFunc;

		if ( url !== undefined ) {

			var parts = url.split( '/' );
			parts.pop();
			baseUrl = ( parts.length < 1 ? '.' : parts.join( '/' ) ) + '/';

		}

		parseAsset();
		setUpConversion();
		images = parseLib( "//dae:library_images/dae:image", _Image, "image" );
		materials = parseLib( "//dae:library_materials/dae:material", Material, "material" );
		effects = parseLib( "//dae:library_effects/dae:effect", Effect, "effect" );
		geometries = parseLib( "//dae:library_geometries/dae:geometry", Geometry, "geometry" );
		cameras = parseLib( ".//dae:library_cameras/dae:camera", Camera, "camera" );
		controllers = parseLib( "//dae:library_controllers/dae:controller", Controller, "controller" );
		animations = parseLib( "//dae:library_animations/dae:animation", Animation, "animation" );
		visualScenes = parseLib( ".//dae:library_visual_scenes/dae:visual_scene", VisualScene, "visual_scene" );

		morphs = [];
		skins = [];

		daeScene = parseScene();
		scene = new THREE.Object3D();

		for ( var i = 0; i < daeScene.nodes.length; i ++ ) {

			scene.add( createSceneGraph( daeScene.nodes[ i ] ) );

		}

		createAnimations();

		var result = {

			scene: scene,
			morphs: morphs,
			skins: skins,
			animations: animData,
			dae: {
				images: images,
				materials: materials,
				cameras: cameras,
				effects: effects,
				geometries: geometries,
				controllers: controllers,
				animations: animations,
				visualScenes: visualScenes,
				scene: daeScene
			}

		};

		if ( callBack ) {

			callBack( result );

		}

		return result;

	};

	function setPreferredShading ( shading ) {

		preferredShading = shading;

	};

	function parseAsset () {

		var elements = COLLADA.evaluate( '//dae:asset', COLLADA, _nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );

		var element = elements.iterateNext();

		if ( element && element.childNodes ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'unit':

						var meter = child.getAttribute( 'meter' );

						if ( meter ) {

							colladaUnit = parseFloat( meter );

						}

						break;

					case 'up_axis':

						colladaUp = child.textContent.charAt(0);
						break;

				}

			}

		}

	};

	function parseLib ( q, classSpec, prefix ) {

		var elements = COLLADA.evaluate(q, COLLADA, _nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null) ;

		var lib = {};
		var element = elements.iterateNext();
		var i = 0;

		while ( element ) {

			var daeElement = ( new classSpec() ).parse( element );
			if ( !daeElement.id || daeElement.id.length == 0 ) daeElement.id = prefix + ( i ++ );
			lib[ daeElement.id ] = daeElement;

			element = elements.iterateNext();

		}

		return lib;

	};

	function parseScene() {

		var sceneElement = COLLADA.evaluate( './/dae:scene/dae:instance_visual_scene', COLLADA, _nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null ).iterateNext();

		if ( sceneElement ) {

			var url = sceneElement.getAttribute( 'url' ).replace( /^#/, '' );
			return visualScenes[ url.length > 0 ? url : 'visual_scene0' ];

		} else {

			return null;

		}

	};

	function createAnimations() {

		animData = [];

		// fill in the keys
		recurseHierarchy( scene );

	};

	function recurseHierarchy( node ) {

		var n = daeScene.getChildById( node.name, true ),
			newData = null;

		if ( n && n.keys ) {

			newData = {
				fps: 60,
				hierarchy: [ {
					node: n,
					keys: n.keys,
					sids: n.sids
				} ],
				node: node,
				name: 'animation_' + node.name,
				length: 0
			};

			animData.push(newData);

			for ( var i = 0, il = n.keys.length; i < il; i++ ) {

				newData.length = Math.max( newData.length, n.keys[i].time );

			}

		} else  {

			newData = {
				hierarchy: [ {
					keys: [],
					sids: []
				} ]
			}

		}

		for ( var i = 0, il = node.children.length; i < il; i++ ) {

			var d = recurseHierarchy( node.children[i] );

			for ( var j = 0, jl = d.hierarchy.length; j < jl; j ++ ) {

				newData.hierarchy.push( {
					keys: [],
					sids: []
				} );

			}

		}

		return newData;

	};

	function calcAnimationBounds () {

		var start = 1000000;
		var end = -start;
		var frames = 0;

		for ( var id in animations ) {

			var animation = animations[ id ];

			for ( var i = 0; i < animation.sampler.length; i ++ ) {

				var sampler = animation.sampler[ i ];
				sampler.create();

				start = Math.min( start, sampler.startTime );
				end = Math.max( end, sampler.endTime );
				frames = Math.max( frames, sampler.input.length );

			}

		}

		return { start:start, end:end, frames:frames };

	};

	function createMorph ( geometry, ctrl ) {

		var morphCtrl = ctrl instanceof InstanceController ? controllers[ ctrl.url ] : ctrl;

		if ( !morphCtrl || !morphCtrl.morph ) {

			console.log("could not find morph controller!");
			return;

		}

		var morph = morphCtrl.morph;

		for ( var i = 0; i < morph.targets.length; i ++ ) {

			var target_id = morph.targets[ i ];
			var daeGeometry = geometries[ target_id ];

			if ( !daeGeometry.mesh ||
				 !daeGeometry.mesh.primitives ||
				 !daeGeometry.mesh.primitives.length ) {
				 continue;
			}

			var target = daeGeometry.mesh.primitives[ 0 ].geometry;

			if ( target.vertices.length === geometry.vertices.length ) {

				geometry.morphTargets.push( { name: "target_1", vertices: target.vertices } );

			}

		}

		geometry.morphTargets.push( { name: "target_Z", vertices: geometry.vertices } );

	};

	function createSkin ( geometry, ctrl, applyBindShape ) {

		var skinCtrl = controllers[ ctrl.url ];

		if ( !skinCtrl || !skinCtrl.skin ) {

			console.log( "could not find skin controller!" );
			return;

		}

		if ( !ctrl.skeleton || !ctrl.skeleton.length ) {

			console.log( "could not find the skeleton for the skin!" );
			return;

		}

		var skin = skinCtrl.skin;
		var skeleton = daeScene.getChildById( ctrl.skeleton[ 0 ] );
		var hierarchy = [];

		applyBindShape = applyBindShape !== undefined ? applyBindShape : true;

		var bones = [];
		geometry.skinWeights = [];
		geometry.skinIndices = [];

		//createBones( geometry.bones, skin, hierarchy, skeleton, null, -1 );
		//createWeights( skin, geometry.bones, geometry.skinIndices, geometry.skinWeights );

		/*
		geometry.animation = {
			name: 'take_001',
			fps: 30,
			length: 2,
			JIT: true,
			hierarchy: hierarchy
		};
		*/

		if ( applyBindShape ) {

			for ( var i = 0; i < geometry.vertices.length; i ++ ) {

				skin.bindShapeMatrix.multiplyVector3( geometry.vertices[ i ] );

			}

		}

	};

	function setupSkeleton ( node, bones, frame, parent ) {

		node.world = node.world || new THREE.Matrix4();
		node.world.copy( node.matrix );

		if ( node.channels && node.channels.length ) {

			var channel = node.channels[ 0 ];
			var m = channel.sampler.output[ frame ];

			if ( m instanceof THREE.Matrix4 ) {

				node.world.copy( m );

			}

		}

		if ( parent ) {

			node.world.multiply( parent, node.world );

		}

		bones.push( node );

		for ( var i = 0; i < node.nodes.length; i ++ ) {

			setupSkeleton( node.nodes[ i ], bones, frame, node.world );

		}

	};

	function setupSkinningMatrices ( bones, skin ) {

		// FIXME: this is dumb...

		for ( var i = 0; i < bones.length; i ++ ) {

			var bone = bones[ i ];
			var found = -1;

			if ( bone.type != 'JOINT' ) continue;

			for ( var j = 0; j < skin.joints.length; j ++ ) {

				if ( bone.sid == skin.joints[ j ] ) {

					found = j;
					break;

				}

			}

			if ( found >= 0 ) {

				var inv = skin.invBindMatrices[ found ];

				bone.invBindMatrix = inv;
				bone.skinningMatrix = new THREE.Matrix4();
				bone.skinningMatrix.multiply(bone.world, inv); // (IBMi * JMi)

				bone.weights = [];

				for ( var j = 0; j < skin.weights.length; j ++ ) {

					for (var k = 0; k < skin.weights[ j ].length; k ++) {

						var w = skin.weights[ j ][ k ];

						if ( w.joint == found ) {

							bone.weights.push( w );

						}

					}

				}

			} else {

				throw 'ColladaLoader: Could not find joint \'' + bone.sid + '\'.';

			}

		}

	};

	function applySkin ( geometry, instanceCtrl, frame ) {

		var skinController = controllers[ instanceCtrl.url ];

		frame = frame !== undefined ? frame : 40;

		if ( !skinController || !skinController.skin ) {

			console.log( 'ColladaLoader: Could not find skin controller.' );
			return;

		}

		if ( !instanceCtrl.skeleton || !instanceCtrl.skeleton.length ) {

			console.log( 'ColladaLoader: Could not find the skeleton for the skin. ' );
			return;

		}

		var animationBounds = calcAnimationBounds();
		var skeleton = daeScene.getChildById( instanceCtrl.skeleton[0], true ) ||
					   daeScene.getChildBySid( instanceCtrl.skeleton[0], true );

		var i, j, w, vidx, weight;
		var v = new THREE.Vector3(), o, s;

		// move vertices to bind shape

		for ( i = 0; i < geometry.vertices.length; i ++ ) {

			skinController.skin.bindShapeMatrix.multiplyVector3( geometry.vertices[i] );

		}

		// process animation, or simply pose the rig if no animation

		for ( frame = 0; frame < animationBounds.frames; frame ++ ) {

			var bones = [];
			var skinned = [];

			// zero skinned vertices

			for ( i = 0; i < geometry.vertices.length; i++ ) {

				skinned.push( new THREE.Vector3() );

			}

			// process the frame and setup the rig with a fresh
			// transform, possibly from the bone's animation channel(s)

			setupSkeleton( skeleton, bones, frame );
			setupSkinningMatrices( bones, skinController.skin );

			// skin 'm

			for ( i = 0; i < bones.length; i ++ ) {

				if ( bones[ i ].type != 'JOINT' ) continue;

				for ( j = 0; j < bones[ i ].weights.length; j ++ ) {

					w = bones[ i ].weights[ j ];
					vidx = w.index;
					weight = w.weight;

					o = geometry.vertices[vidx];
					s = skinned[vidx];

					v.x = o.x;
					v.y = o.y;
					v.z = o.z;

					bones[i].skinningMatrix.multiplyVector3(v);

					s.x += (v.x * weight);
					s.y += (v.y * weight);
					s.z += (v.z * weight);

				}

			}

			geometry.morphTargets.push( { name: "target_" + frame, vertices: skinned } );

		}

	};

	function createSceneGraph ( node, parent ) {

		var obj = new THREE.Object3D();
		var skinned = false;
		var skinController;
		var morphController;
		var i, j;

		// FIXME: controllers

		for ( i = 0; i < node.controllers.length; i ++ ) {

			var controller = controllers[ node.controllers[ i ].url ];

			switch ( controller.type ) {

				case 'skin':

					if ( geometries[ controller.skin.source ] ) {

						var inst_geom = new InstanceGeometry();

						inst_geom.url = controller.skin.source;
						inst_geom.instance_material = node.controllers[ i ].instance_material;

						node.geometries.push( inst_geom );
						skinned = true;
						skinController = node.controllers[ i ];

					} else if ( controllers[ controller.skin.source ] ) {

						// urgh: controller can be chained
						// handle the most basic case...

						var second = controllers[ controller.skin.source ];
						morphController = second;
					//	skinController = node.controllers[i];

						if ( second.morph && geometries[ second.morph.source ] ) {

							var inst_geom = new InstanceGeometry();

							inst_geom.url = second.morph.source;
							inst_geom.instance_material = node.controllers[ i ].instance_material;

							node.geometries.push( inst_geom );

						}

					}

					break;

				case 'morph':

					if ( geometries[ controller.morph.source ] ) {

						var inst_geom = new InstanceGeometry();

						inst_geom.url = controller.morph.source;
						inst_geom.instance_material = node.controllers[ i ].instance_material;

						node.geometries.push( inst_geom );
						morphController = node.controllers[ i ];

					}

					console.log( 'ColladaLoader: Morph-controller partially supported.' );

				default:
					break;

			}

		}

		// FIXME: multi-material mesh?
		// geometries

		var double_sided_materials = {};

		for ( i = 0; i < node.geometries.length; i ++ ) {

			var instance_geometry = node.geometries[i];
			var instance_materials = instance_geometry.instance_material;
			var geometry = geometries[ instance_geometry.url ];
			var used_materials = {};
			var used_materials_array = [];
			var num_materials = 0;
			var first_material;

			if ( geometry ) {

				if ( !geometry.mesh || !geometry.mesh.primitives )
					continue;

				if ( obj.name.length == 0 ) {

					obj.name = geometry.id;

				}

				// collect used fx for this geometry-instance

				if ( instance_materials ) {

					for ( j = 0; j < instance_materials.length; j ++ ) {

						var instance_material = instance_materials[ j ];
						var mat = materials[ instance_material.target ];
						var effect_id = mat.instance_effect.url;
						var shader = effects[ effect_id ].shader;
						var material3js = shader.material;

						if ( geometry.doubleSided ) {

							if ( !( material3js in double_sided_materials ) ) {

								var _copied_material = material3js.clone();
								_copied_material.side = THREE.DoubleSide;
								double_sided_materials[ material3js ] = _copied_material;

							}

							material3js = double_sided_materials[ material3js ];

						}

						material3js.opacity = !material3js.opacity ? 1 : material3js.opacity;
						used_materials[ instance_material.symbol ] = num_materials;
						used_materials_array.push( material3js );
						first_material = material3js;
						first_material.name = mat.name == null || mat.name === '' ? mat.id : mat.name;
						num_materials ++;

					}

				}

				var mesh;
				var material = first_material || new THREE.MeshLambertMaterial( { color: 0xdddddd, shading: THREE.FlatShading, side: geometry.doubleSided ? THREE.DoubleSide : THREE.FrontSide } );
				var geom = geometry.mesh.geometry3js;

				if ( num_materials > 1 ) {

					material = new THREE.MeshFaceMaterial( used_materials_array );

					for ( j = 0; j < geom.faces.length; j ++ ) {

						var face = geom.faces[ j ];
						face.materialIndex = used_materials[ face.daeMaterial ]

					}

				}

				if ( skinController !== undefined ) {

					applySkin( geom, skinController );

					material.morphTargets = true;

					mesh = new THREE.SkinnedMesh( geom, material, false );
					mesh.skeleton = skinController.skeleton;
					mesh.skinController = controllers[ skinController.url ];
					mesh.skinInstanceController = skinController;
					mesh.name = 'skin_' + skins.length;

					skins.push( mesh );

				} else if ( morphController !== undefined ) {

					createMorph( geom, morphController );

					material.morphTargets = true;

					mesh = new THREE.Mesh( geom, material );
					mesh.name = 'morph_' + morphs.length;

					morphs.push( mesh );

				} else {

					mesh = new THREE.Mesh( geom, material );
					// mesh.geom.name = geometry.id;

				}

				node.geometries.length > 1 ? obj.add( mesh ) : obj = mesh;

			}

		}

		for ( i = 0; i < node.cameras.length; i ++ ) {

			var instance_camera = node.cameras[i];
			var cparams = cameras[instance_camera.url];

			obj = new THREE.PerspectiveCamera(cparams.fov, cparams.aspect_ratio, cparams.znear, cparams.zfar);

		}

		obj.name = node.id || "";
		obj.matrix = node.matrix;
		var props = node.matrix.decompose();
		obj.position = props[ 0 ];
		obj.quaternion = props[ 1 ];
		obj.useQuaternion = true;
		obj.scale = props[ 2 ];

		if ( options.centerGeometry && obj.geometry ) {

			var delta = THREE.GeometryUtils.center( obj.geometry );
			obj.quaternion.multiplyVector3( delta.multiplySelf( obj.scale ) );
			obj.position.subSelf( delta );

		}

		for ( i = 0; i < node.nodes.length; i ++ ) {

			obj.add( createSceneGraph( node.nodes[i], node ) );

		}

		return obj;

	};

	function getJointId( skin, id ) {

		for ( var i = 0; i < skin.joints.length; i ++ ) {

			if ( skin.joints[ i ] == id ) {

				return i;

			}

		}

	};

	function getLibraryNode( id ) {

		return COLLADA.evaluate( './/dae:library_nodes//dae:node[@id=\'' + id + '\']', COLLADA, _nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null ).iterateNext();

	};

	function getChannelsForNode (node ) {

		var channels = [];
		var startTime = 1000000;
		var endTime = -1000000;

		for ( var id in animations ) {

			var animation = animations[id];

			for ( var i = 0; i < animation.channel.length; i ++ ) {

				var channel = animation.channel[i];
				var sampler = animation.sampler[i];
				var id = channel.target.split('/')[0];

				if ( id == node.id ) {

					sampler.create();
					channel.sampler = sampler;
					startTime = Math.min(startTime, sampler.startTime);
					endTime = Math.max(endTime, sampler.endTime);
					channels.push(channel);

				}

			}

		}

		if ( channels.length ) {

			node.startTime = startTime;
			node.endTime = endTime;

		}

		return channels;

	};

	function calcFrameDuration( node ) {

		var minT = 10000000;

		for ( var i = 0; i < node.channels.length; i ++ ) {

			var sampler = node.channels[i].sampler;

			for ( var j = 0; j < sampler.input.length - 1; j ++ ) {

				var t0 = sampler.input[ j ];
				var t1 = sampler.input[ j + 1 ];
				minT = Math.min( minT, t1 - t0 );

			}
		}

		return minT;

	};

	function calcMatrixAt( node, t ) {

		var animated = {};

		var i, j;

		for ( i = 0; i < node.channels.length; i ++ ) {

			var channel = node.channels[ i ];
			animated[ channel.sid ] = channel;

		}

		var matrix = new THREE.Matrix4();

		for ( i = 0; i < node.transforms.length; i ++ ) {

			var transform = node.transforms[ i ];
			var channel = animated[ transform.sid ];

			if ( channel !== undefined ) {

				var sampler = channel.sampler;
				var value;

				for ( j = 0; j < sampler.input.length - 1; j ++ ) {

					if ( sampler.input[ j + 1 ] > t ) {

						value = sampler.output[ j ];
						//console.log(value.flatten)
						break;

					}

				}

				if ( value !== undefined ) {

					if ( value instanceof THREE.Matrix4 ) {

						matrix = matrix.multiply( matrix, value );

					} else {

						// FIXME: handle other types

						matrix = matrix.multiply( matrix, transform.matrix );

					}

				} else {

					matrix = matrix.multiply( matrix, transform.matrix );

				}

			} else {

				matrix = matrix.multiply( matrix, transform.matrix );

			}

		}

		return matrix;

	};

	function bakeAnimations ( node ) {

		if ( node.channels && node.channels.length ) {

			var keys = [],
				sids = [];

			for ( var i = 0, il = node.channels.length; i < il; i++ ) {

				var channel = node.channels[i],
					fullSid = channel.fullSid,
					sampler = channel.sampler,
					input = sampler.input,
					transform = node.getTransformBySid( channel.sid ),
					member;

				if ( channel.arrIndices ) {

					member = [];

					for ( var j = 0, jl = channel.arrIndices.length; j < jl; j++ ) {

						member[ j ] = getConvertedIndex( channel.arrIndices[ j ] );

					}

				} else {

					member = getConvertedMember( channel.member );

				}

				if ( transform ) {

					if ( sids.indexOf( fullSid ) === -1 ) {

						sids.push( fullSid );

					}

					for ( var j = 0, jl = input.length; j < jl; j++ ) {

						var time = input[j],
							data = sampler.getData( transform.type, j ),
							key = findKey( keys, time );

						if ( !key ) {

							key = new Key( time );
							var timeNdx = findTimeNdx( keys, time );
							keys.splice( timeNdx == -1 ? keys.length : timeNdx, 0, key );

						}

						key.addTarget( fullSid, transform, member, data );

					}

				} else {

					console.log( 'Could not find transform "' + channel.sid + '" in node ' + node.id );

				}

			}

			// post process
			for ( var i = 0; i < sids.length; i++ ) {

				var sid = sids[ i ];

				for ( var j = 0; j < keys.length; j++ ) {

					var key = keys[ j ];

					if ( !key.hasTarget( sid ) ) {

						interpolateKeys( keys, key, j, sid );

					}

				}

			}

			node.keys = keys;
			node.sids = sids;

		}

	};

	function findKey ( keys, time) {

		var retVal = null;

		for ( var i = 0, il = keys.length; i < il && retVal == null; i++ ) {

			var key = keys[i];

			if ( key.time === time ) {

				retVal = key;

			} else if ( key.time > time ) {

				break;

			}

		}

		return retVal;

	};

	function findTimeNdx ( keys, time) {

		var ndx = -1;

		for ( var i = 0, il = keys.length; i < il && ndx == -1; i++ ) {

			var key = keys[i];

			if ( key.time >= time ) {

				ndx = i;

			}

		}

		return ndx;

	};

	function interpolateKeys ( keys, key, ndx, fullSid ) {

		var prevKey = getPrevKeyWith( keys, fullSid, ndx ? ndx-1 : 0 ),
			nextKey = getNextKeyWith( keys, fullSid, ndx+1 );

		if ( prevKey && nextKey ) {

			var scale = (key.time - prevKey.time) / (nextKey.time - prevKey.time),
				prevTarget = prevKey.getTarget( fullSid ),
				nextData = nextKey.getTarget( fullSid ).data,
				prevData = prevTarget.data,
				data;

			if ( prevTarget.type === 'matrix' ) {

				data = prevData;

			} else if ( prevData.length ) {

				data = [];

				for ( var i = 0; i < prevData.length; ++i ) {

					data[ i ] = prevData[ i ] + ( nextData[ i ] - prevData[ i ] ) * scale;

				}

			} else {

				data = prevData + ( nextData - prevData ) * scale;

			}

			key.addTarget( fullSid, prevTarget.transform, prevTarget.member, data );

		}

	};

	// Get next key with given sid

	function getNextKeyWith( keys, fullSid, ndx ) {

		for ( ; ndx < keys.length; ndx++ ) {

			var key = keys[ ndx ];

			if ( key.hasTarget( fullSid ) ) {

				return key;

			}

		}

		return null;

	};

	// Get previous key with given sid

	function getPrevKeyWith( keys, fullSid, ndx ) {

		ndx = ndx >= 0 ? ndx : ndx + keys.length;

		for ( ; ndx >= 0; ndx-- ) {

			var key = keys[ ndx ];

			if ( key.hasTarget( fullSid ) ) {

				return key;

			}

		}

		return null;

	};

	function _Image() {

		this.id = "";
		this.init_from = "";

	};

	_Image.prototype.parse = function(element) {

		this.id = element.getAttribute('id');

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			if ( child.nodeName == 'init_from' ) {

				this.init_from = child.textContent;

			}

		}

		return this;

	};

	function Controller() {

		this.id = "";
		this.name = "";
		this.type = "";
		this.skin = null;
		this.morph = null;

	};

	Controller.prototype.parse = function( element ) {

		this.id = element.getAttribute('id');
		this.name = element.getAttribute('name');
		this.type = "none";

		for ( var i = 0; i < element.childNodes.length; i++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'skin':

					this.skin = (new Skin()).parse(child);
					this.type = child.nodeName;
					break;

				case 'morph':

					this.morph = (new Morph()).parse(child);
					this.type = child.nodeName;
					break;

				default:
					break;

			}
		}

		return this;

	};

	function Morph() {

		this.method = null;
		this.source = null;
		this.targets = null;
		this.weights = null;

	};

	Morph.prototype.parse = function( element ) {

		var sources = {};
		var inputs = [];
		var i;

		this.method = element.getAttribute( 'method' );
		this.source = element.getAttribute( 'source' ).replace( /^#/, '' );

		for ( i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'source':

					var source = ( new Source() ).parse( child );
					sources[ source.id ] = source;
					break;

				case 'targets':

					inputs = this.parseInputs( child );
					break;

				default:

					console.log( child.nodeName );
					break;

			}

		}

		for ( i = 0; i < inputs.length; i ++ ) {

			var input = inputs[ i ];
			var source = sources[ input.source ];

			switch ( input.semantic ) {

				case 'MORPH_TARGET':

					this.targets = source.read();
					break;

				case 'MORPH_WEIGHT':

					this.weights = source.read();
					break;

				default:
					break;

			}
		}

		return this;

	};

	Morph.prototype.parseInputs = function(element) {

		var inputs = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1) continue;

			switch ( child.nodeName ) {

				case 'input':

					inputs.push( (new Input()).parse(child) );
					break;

				default:
					break;
			}
		}

		return inputs;

	};

	function Skin() {

		this.source = "";
		this.bindShapeMatrix = null;
		this.invBindMatrices = [];
		this.joints = [];
		this.weights = [];

	};

	Skin.prototype.parse = function( element ) {

		var sources = {};
		var joints, weights;

		this.source = element.getAttribute( 'source' ).replace( /^#/, '' );
		this.invBindMatrices = [];
		this.joints = [];
		this.weights = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'bind_shape_matrix':

					var f = _floats(child.textContent);
					this.bindShapeMatrix = getConvertedMat4( f );
					break;

				case 'source':

					var src = new Source().parse(child);
					sources[ src.id ] = src;
					break;

				case 'joints':

					joints = child;
					break;

				case 'vertex_weights':

					weights = child;
					break;

				default:

					console.log( child.nodeName );
					break;

			}
		}

		this.parseJoints( joints, sources );
		this.parseWeights( weights, sources );

		return this;

	};

	Skin.prototype.parseJoints = function ( element, sources ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'input':

					var input = ( new Input() ).parse( child );
					var source = sources[ input.source ];

					if ( input.semantic == 'JOINT' ) {

						this.joints = source.read();

					} else if ( input.semantic == 'INV_BIND_MATRIX' ) {

						this.invBindMatrices = source.read();

					}

					break;

				default:
					break;
			}

		}

	};

	Skin.prototype.parseWeights = function ( element, sources ) {

		var v, vcount, inputs = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'input':

					inputs.push( ( new Input() ).parse( child ) );
					break;

				case 'v':

					v = _ints( child.textContent );
					break;

				case 'vcount':

					vcount = _ints( child.textContent );
					break;

				default:
					break;

			}

		}

		var index = 0;

		for ( var i = 0; i < vcount.length; i ++ ) {

			var numBones = vcount[i];
			var vertex_weights = [];

			for ( var j = 0; j < numBones; j++ ) {

				var influence = {};

				for ( var k = 0; k < inputs.length; k ++ ) {

					var input = inputs[ k ];
					var value = v[ index + input.offset ];

					switch ( input.semantic ) {

						case 'JOINT':

							influence.joint = value;//this.joints[value];
							break;

						case 'WEIGHT':

							influence.weight = sources[ input.source ].data[ value ];
							break;

						default:
							break;

					}

				}

				vertex_weights.push( influence );
				index += inputs.length;
			}

			for ( var j = 0; j < vertex_weights.length; j ++ ) {

				vertex_weights[ j ].index = i;

			}

			this.weights.push( vertex_weights );

		}

	};

	function VisualScene () {

		this.id = "";
		this.name = "";
		this.nodes = [];
		this.scene = new THREE.Object3D();

	};

	VisualScene.prototype.getChildById = function( id, recursive ) {

		for ( var i = 0; i < this.nodes.length; i ++ ) {

			var node = this.nodes[ i ].getChildById( id, recursive );

			if ( node ) {

				return node;

			}

		}

		return null;

	};

	VisualScene.prototype.getChildBySid = function( sid, recursive ) {

		for ( var i = 0; i < this.nodes.length; i ++ ) {

			var node = this.nodes[ i ].getChildBySid( sid, recursive );

			if ( node ) {

				return node;

			}

		}

		return null;

	};

	VisualScene.prototype.parse = function( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );
		this.nodes = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'node':

					this.nodes.push( ( new Node() ).parse( child ) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	function Node() {

		this.id = "";
		this.name = "";
		this.sid = "";
		this.nodes = [];
		this.controllers = [];
		this.transforms = [];
		this.geometries = [];
		this.channels = [];
		this.matrix = new THREE.Matrix4();

	};

	Node.prototype.getChannelForTransform = function( transformSid ) {

		for ( var i = 0; i < this.channels.length; i ++ ) {

			var channel = this.channels[i];
			var parts = channel.target.split('/');
			var id = parts.shift();
			var sid = parts.shift();
			var dotSyntax = (sid.indexOf(".") >= 0);
			var arrSyntax = (sid.indexOf("(") >= 0);
			var arrIndices;
			var member;

			if ( dotSyntax ) {

				parts = sid.split(".");
				sid = parts.shift();
				member = parts.shift();

			} else if ( arrSyntax ) {

				arrIndices = sid.split("(");
				sid = arrIndices.shift();

				for ( var j = 0; j < arrIndices.length; j ++ ) {

					arrIndices[ j ] = parseInt( arrIndices[ j ].replace( /\)/, '' ) );

				}

			}

			if ( sid == transformSid ) {

				channel.info = { sid: sid, dotSyntax: dotSyntax, arrSyntax: arrSyntax, arrIndices: arrIndices };
				return channel;

			}

		}

		return null;

	};

	Node.prototype.getChildById = function ( id, recursive ) {

		if ( this.id == id ) {

			return this;

		}

		if ( recursive ) {

			for ( var i = 0; i < this.nodes.length; i ++ ) {

				var n = this.nodes[ i ].getChildById( id, recursive );

				if ( n ) {

					return n;

				}

			}

		}

		return null;

	};

	Node.prototype.getChildBySid = function ( sid, recursive ) {

		if ( this.sid == sid ) {

			return this;

		}

		if ( recursive ) {

			for ( var i = 0; i < this.nodes.length; i ++ ) {

				var n = this.nodes[ i ].getChildBySid( sid, recursive );

				if ( n ) {

					return n;

				}

			}
		}

		return null;

	};

	Node.prototype.getTransformBySid = function ( sid ) {

		for ( var i = 0; i < this.transforms.length; i ++ ) {

			if ( this.transforms[ i ].sid == sid ) return this.transforms[ i ];

		}

		return null;

	};

	Node.prototype.parse = function( element ) {

		var url;

		this.id = element.getAttribute('id');
		this.sid = element.getAttribute('sid');
		this.name = element.getAttribute('name');
		this.type = element.getAttribute('type');

		this.type = this.type == 'JOINT' ? this.type : 'NODE';

		this.nodes = [];
		this.transforms = [];
		this.geometries = [];
		this.cameras = [];
		this.controllers = [];
		this.matrix = new THREE.Matrix4();

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'node':

					this.nodes.push( ( new Node() ).parse( child ) );
					break;

				case 'instance_camera':

					this.cameras.push( ( new InstanceCamera() ).parse( child ) );
					break;

				case 'instance_controller':

					this.controllers.push( ( new InstanceController() ).parse( child ) );
					break;

				case 'instance_geometry':

					this.geometries.push( ( new InstanceGeometry() ).parse( child ) );
					break;

				case 'instance_light':

					break;

				case 'instance_node':

					url = child.getAttribute( 'url' ).replace( /^#/, '' );
					var iNode = getLibraryNode( url );

					if ( iNode ) {

						this.nodes.push( ( new Node() ).parse( iNode )) ;

					}

					break;

				case 'rotate':
				case 'translate':
				case 'scale':
				case 'matrix':
				case 'lookat':
				case 'skew':

					this.transforms.push( ( new Transform() ).parse( child ) );
					break;

				case 'extra':
					break;

				default:

					console.log( child.nodeName );
					break;

			}

		}

		this.channels = getChannelsForNode( this );
		bakeAnimations( this );

		this.updateMatrix();

		return this;

	};

	Node.prototype.updateMatrix = function () {

		this.matrix.identity();

		for ( var i = 0; i < this.transforms.length; i ++ ) {

			this.transforms[ i ].apply( this.matrix );

		}

	};

	function Transform () {

		this.sid = "";
		this.type = "";
		this.data = [];
		this.obj = null;

	};

	Transform.prototype.parse = function ( element ) {

		this.sid = element.getAttribute( 'sid' );
		this.type = element.nodeName;
		this.data = _floats( element.textContent );
		this.convert();

		return this;

	};

	Transform.prototype.convert = function () {

		switch ( this.type ) {

			case 'matrix':

				this.obj = getConvertedMat4( this.data );
				break;

			case 'rotate':

				this.angle = this.data[3] * TO_RADIANS;

			case 'translate':

				fixCoords( this.data, -1 );
				this.obj = new THREE.Vector3( this.data[ 0 ], this.data[ 1 ], this.data[ 2 ] );
				break;

			case 'scale':

				fixCoords( this.data, 1 );
				this.obj = new THREE.Vector3( this.data[ 0 ], this.data[ 1 ], this.data[ 2 ] );
				break;

			default:
				console.log( 'Can not convert Transform of type ' + this.type );
				break;

		}

	};

	Transform.prototype.apply = function ( matrix ) {

		switch ( this.type ) {

			case 'matrix':

				matrix.multiplySelf( this.obj );
				break;

			case 'translate':

				matrix.translate( this.obj );
				break;

			case 'rotate':

				matrix.rotateByAxis( this.obj, this.angle );
				break;

			case 'scale':

				matrix.scale( this.obj );
				break;

		}

	};

	Transform.prototype.update = function ( data, member ) {

		var members = [ 'X', 'Y', 'Z', 'ANGLE' ];

		switch ( this.type ) {

			case 'matrix':

				if ( ! member ) {

					this.obj.copy( data );

				} else if ( member.length === 1 ) {

					switch ( member[ 0 ] ) {

						case 0:

							this.obj.n11 = data[ 0 ];
							this.obj.n21 = data[ 1 ];
							this.obj.n31 = data[ 2 ];
							this.obj.n41 = data[ 3 ];

							break;

						case 1:

							this.obj.n12 = data[ 0 ];
							this.obj.n22 = data[ 1 ];
							this.obj.n32 = data[ 2 ];
							this.obj.n42 = data[ 3 ];

							break;

						case 2:

							this.obj.n13 = data[ 0 ];
							this.obj.n23 = data[ 1 ];
							this.obj.n33 = data[ 2 ];
							this.obj.n43 = data[ 3 ];

							break;

						case 3:

							this.obj.n14 = data[ 0 ];
							this.obj.n24 = data[ 1 ];
							this.obj.n34 = data[ 2 ];
							this.obj.n44 = data[ 3 ];

							break;

					}

				} else if ( member.length === 2 ) {

					var propName = 'n' + ( member[ 0 ] + 1 ) + ( member[ 1 ] + 1 );
					this.obj[ propName ] = data;

				} else {

					console.log('Incorrect addressing of matrix in transform.');

				}

				break;

			case 'translate':
			case 'scale':

				if ( Object.prototype.toString.call( member ) === '[object Array]' ) {

					member = members[ member[ 0 ] ];

				}

				switch ( member ) {

					case 'X':

						this.obj.x = data;
						break;

					case 'Y':

						this.obj.y = data;
						break;

					case 'Z':

						this.obj.z = data;
						break;

					default:

						this.obj.x = data[ 0 ];
						this.obj.y = data[ 1 ];
						this.obj.z = data[ 2 ];
						break;

				}

				break;

			case 'rotate':

				if ( Object.prototype.toString.call( member ) === '[object Array]' ) {

					member = members[ member[ 0 ] ];

				}

				switch ( member ) {

					case 'X':

						this.obj.x = data;
						break;

					case 'Y':

						this.obj.y = data;
						break;

					case 'Z':

						this.obj.z = data;
						break;

					case 'ANGLE':

						this.angle = data * TO_RADIANS;
						break;

					default:

						this.obj.x = data[ 0 ];
						this.obj.y = data[ 1 ];
						this.obj.z = data[ 2 ];
						this.angle = data[ 3 ] * TO_RADIANS;
						break;

				}
				break;

		}

	};

	function InstanceController() {

		this.url = "";
		this.skeleton = [];
		this.instance_material = [];

	};

	InstanceController.prototype.parse = function ( element ) {

		this.url = element.getAttribute('url').replace(/^#/, '');
		this.skeleton = [];
		this.instance_material = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType !== 1 ) continue;

			switch ( child.nodeName ) {

				case 'skeleton':

					this.skeleton.push( child.textContent.replace(/^#/, '') );
					break;

				case 'bind_material':

					var instances = COLLADA.evaluate( './/dae:instance_material', child, _nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );

					if ( instances ) {

						var instance = instances.iterateNext();

						while ( instance ) {

							this.instance_material.push( (new InstanceMaterial()).parse(instance) );
							instance = instances.iterateNext();

						}

					}

					break;

				case 'extra':
					break;

				default:
					break;

			}
		}

		return this;

	};

	function InstanceMaterial () {

		this.symbol = "";
		this.target = "";

	};

	InstanceMaterial.prototype.parse = function ( element ) {

		this.symbol = element.getAttribute('symbol');
		this.target = element.getAttribute('target').replace(/^#/, '');
		return this;

	};

	function InstanceGeometry() {

		this.url = "";
		this.instance_material = [];

	};

	InstanceGeometry.prototype.parse = function ( element ) {

		this.url = element.getAttribute('url').replace(/^#/, '');
		this.instance_material = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1 ) continue;

			if ( child.nodeName == 'bind_material' ) {

				var instances = COLLADA.evaluate( './/dae:instance_material', child, _nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );

				if ( instances ) {

					var instance = instances.iterateNext();

					while ( instance ) {

						this.instance_material.push( (new InstanceMaterial()).parse(instance) );
						instance = instances.iterateNext();

					}

				}

				break;

			}

		}

		return this;

	};

	function Geometry() {

		this.id = "";
		this.mesh = null;

	};

	Geometry.prototype.parse = function ( element ) {

		this.id = element.getAttribute('id');

		extractDoubleSided( this, element );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];

			switch ( child.nodeName ) {

				case 'mesh':

					this.mesh = (new Mesh(this)).parse(child);
					break;

				case 'extra':

					// console.log( child );
					break;

				default:
					break;
			}
		}

		return this;

	};

	function Mesh( geometry ) {

		this.geometry = geometry.id;
		this.primitives = [];
		this.vertices = null;
		this.geometry3js = null;

	};

	Mesh.prototype.parse = function( element ) {

		this.primitives = [];

		var i, j;

		for ( i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'source':

					_source( child );
					break;

				case 'vertices':

					this.vertices = ( new Vertices() ).parse( child );
					break;

				case 'triangles':

					this.primitives.push( ( new Triangles().parse( child ) ) );
					break;

				case 'polygons':

					this.primitives.push( ( new Polygons().parse( child ) ) );
					break;

				case 'polylist':

					this.primitives.push( ( new Polylist().parse( child ) ) );
					break;

				default:
					break;

			}

		}

		this.geometry3js = new THREE.Geometry();

		var vertexData = sources[ this.vertices.input['POSITION'].source ].data;

		for ( i = 0; i < vertexData.length; i += 3 ) {

			this.geometry3js.vertices.push( getConvertedVec3( vertexData, i ).clone() );

		}

		for ( i = 0; i < this.primitives.length; i ++ ) {

			var primitive = this.primitives[ i ];
			primitive.setVertices( this.vertices );
			this.handlePrimitive( primitive, this.geometry3js );

		}

		this.geometry3js.computeCentroids();
		this.geometry3js.computeFaceNormals();

		if ( this.geometry3js.calcNormals ) {

			this.geometry3js.computeVertexNormals();
			delete this.geometry3js.calcNormals;

		}

		this.geometry3js.computeBoundingBox();

		return this;

	};

	Mesh.prototype.handlePrimitive = function( primitive, geom ) {

		var j, k, pList = primitive.p, inputs = primitive.inputs;
		var input, index, idx32;
		var source, numParams;
		var vcIndex = 0, vcount = 3, maxOffset = 0;
		var texture_sets = [];

		for ( j = 0; j < inputs.length; j ++ ) {

			input = inputs[ j ];
			var offset = input.offset + 1;
			maxOffset = (maxOffset < offset)? offset : maxOffset;

			switch ( input.semantic ) {

				case 'TEXCOORD':
					texture_sets.push( input.set );
					break;

			}

		}

		for ( var pCount = 0; pCount < pList.length; ++pCount ) {

			var p = pList[ pCount ], i = 0;

			while ( i < p.length ) {

				var vs = [];
				var ns = [];
				var ts = null;
				var cs = [];

				if ( primitive.vcount ) {

					vcount = primitive.vcount.length ? primitive.vcount[ vcIndex ++ ] : primitive.vcount;

				} else {

					vcount = p.length / maxOffset;

				}


				for ( j = 0; j < vcount; j ++ ) {

					for ( k = 0; k < inputs.length; k ++ ) {

						input = inputs[ k ];
						source = sources[ input.source ];

						index = p[ i + ( j * maxOffset ) + input.offset ];
						numParams = source.accessor.params.length;
						idx32 = index * numParams;

						switch ( input.semantic ) {

							case 'VERTEX':

								vs.push( index );

								break;

							case 'NORMAL':

								ns.push( getConvertedVec3( source.data, idx32 ) );

								break;

							case 'TEXCOORD':

								ts = ts || { };
								if ( ts[ input.set ] === undefined ) ts[ input.set ] = [];
								// invert the V
								ts[ input.set ].push( new THREE.Vector2( source.data[ idx32 ], source.data[ idx32 + 1 ] ) );

								break;

							case 'COLOR':

								cs.push( new THREE.Color().setRGB( source.data[ idx32 ], source.data[ idx32 + 1 ], source.data[ idx32 + 2 ] ) );

								break;

							default:

								break;

						}

					}

				}

				if ( ns.length == 0 ) {

					// check the vertices inputs
					input = this.vertices.input.NORMAL;

					if ( input ) {

						source = sources[ input.source ];
						numParams = source.accessor.params.length;

						for ( var ndx = 0, len = vs.length; ndx < len; ndx++ ) {

							ns.push( getConvertedVec3( source.data, vs[ ndx ] * numParams ) );

						}

					} else {

						geom.calcNormals = true;

					}

				}

				if ( !ts ) {

					ts = { };
					// check the vertices inputs
					input = this.vertices.input.TEXCOORD;

					if ( input ) {

						texture_sets.push( input.set );
						source = sources[ input.source ];
						numParams = source.accessor.params.length;

						for ( var ndx = 0, len = vs.length; ndx < len; ndx++ ) {

							idx32 = vs[ ndx ] * numParams;
							if ( ts[ input.set ] === undefined ) ts[ input.set ] = [ ];
							// invert the V
							ts[ input.set ].push( new THREE.Vector2( source.data[ idx32 ], 1.0 - source.data[ idx32 + 1 ] ) );

						}

					}

				}

				if ( cs.length == 0 ) {

					// check the vertices inputs
					input = this.vertices.input.COLOR;

					if ( input ) {

						source = sources[ input.source ];
						numParams = source.accessor.params.length;

						for ( var ndx = 0, len = vs.length; ndx < len; ndx++ ) {

							idx32 = vs[ ndx ] * numParams;
							cs.push( new THREE.Color().setRGB( source.data[ idx32 ], source.data[ idx32 + 1 ], source.data[ idx32 + 2 ] ) );

						}

					}

				}

				var face = null, faces = [], uv, uvArr;

				if ( vcount === 3 ) {

					faces.push( new THREE.Face3( vs[0], vs[1], vs[2], ns, cs.length ? cs : new THREE.Color() ) );

				} else if ( vcount === 4 ) {
					faces.push( new THREE.Face4( vs[0], vs[1], vs[2], vs[3], ns, cs.length ? cs : new THREE.Color() ) );

				} else if ( vcount > 4 && options.subdivideFaces ) {

					var clr = cs.length ? cs : new THREE.Color(),
						vec1, vec2, vec3, v1, v2, norm;

					// subdivide into multiple Face3s

					for ( k = 1; k < vcount - 1; ) {

						// FIXME: normals don't seem to be quite right

						faces.push( new THREE.Face3( vs[0], vs[k], vs[k+1], [ ns[0], ns[k++], ns[k] ],  clr ) );

					}

				}

				if ( faces.length ) {

					for ( var ndx = 0, len = faces.length; ndx < len; ndx ++ ) {

						face = faces[ndx];
						face.daeMaterial = primitive.material;
						geom.faces.push( face );

						for ( k = 0; k < texture_sets.length; k++ ) {

							uv = ts[ texture_sets[k] ];

							if ( vcount > 4 ) {

								// Grab the right UVs for the vertices in this face
								uvArr = [ uv[0], uv[ndx+1], uv[ndx+2] ];

							} else if ( vcount === 4 ) {

								uvArr = [ uv[0], uv[1], uv[2], uv[3] ];

							} else {

								uvArr = [ uv[0], uv[1], uv[2] ];

							}

							if ( !geom.faceVertexUvs[k] ) {

								geom.faceVertexUvs[k] = [];

							}

							geom.faceVertexUvs[k].push( uvArr );

						}

					}

				} else {

					console.log( 'dropped face with vcount ' + vcount + ' for geometry with id: ' + geom.id );

				}

				i += maxOffset * vcount;

			}
		}

	};

	function Polygons () {

		this.material = "";
		this.count = 0;
		this.inputs = [];
		this.vcount = null;
		this.p = [];
		this.geometry = new THREE.Geometry();

	};

	Polygons.prototype.setVertices = function ( vertices ) {

		for ( var i = 0; i < this.inputs.length; i ++ ) {

			if ( this.inputs[ i ].source == vertices.id ) {

				this.inputs[ i ].source = vertices.input[ 'POSITION' ].source;

			}

		}

	};

	Polygons.prototype.parse = function ( element ) {

		this.material = element.getAttribute( 'material' );
		this.count = _attr_as_int( element, 'count', 0 );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'input':

					this.inputs.push( ( new Input() ).parse( element.childNodes[ i ] ) );
					break;

				case 'vcount':

					this.vcount = _ints( child.textContent );
					break;

				case 'p':

					this.p.push( _ints( child.textContent ) );
					break;

				case 'ph':

					console.warn( 'polygon holes not yet supported!' );
					break;

				default:
					break;

			}

		}

		return this;

	};

	function Polylist () {

		Polygons.call( this );

		this.vcount = [];

	};

	Polylist.prototype = Object.create( Polygons.prototype );

	function Triangles () {

		Polygons.call( this );

		this.vcount = 3;

	};

	Triangles.prototype = Object.create( Polygons.prototype );

	function Accessor() {

		this.source = "";
		this.count = 0;
		this.stride = 0;
		this.params = [];

	};

	Accessor.prototype.parse = function ( element ) {

		this.params = [];
		this.source = element.getAttribute( 'source' );
		this.count = _attr_as_int( element, 'count', 0 );
		this.stride = _attr_as_int( element, 'stride', 0 );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			if ( child.nodeName == 'param' ) {

				var param = {};
				param[ 'name' ] = child.getAttribute( 'name' );
				param[ 'type' ] = child.getAttribute( 'type' );
				this.params.push( param );

			}

		}

		return this;

	};

	function Vertices() {

		this.input = {};

	};

	Vertices.prototype.parse = function ( element ) {

		this.id = element.getAttribute('id');

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			if ( element.childNodes[i].nodeName == 'input' ) {

				var input = ( new Input() ).parse( element.childNodes[ i ] );
				this.input[ input.semantic ] = input;

			}

		}

		return this;

	};

	function Input () {

		this.semantic = "";
		this.offset = 0;
		this.source = "";
		this.set = 0;

	};

	Input.prototype.parse = function ( element ) {

		this.semantic = element.getAttribute('semantic');
		this.source = element.getAttribute('source').replace(/^#/, '');
		this.set = _attr_as_int(element, 'set', -1);
		this.offset = _attr_as_int(element, 'offset', 0);

		if ( this.semantic == 'TEXCOORD' && this.set < 0 ) {

			this.set = 0;

		}

		return this;

	};

	function Source ( id ) {

		this.id = id;
		this.type = null;

	};

	Source.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];

			switch ( child.nodeName ) {

				case 'bool_array':

					this.data = _bools( child.textContent );
					this.type = child.nodeName;
					break;

				case 'float_array':

					this.data = _floats( child.textContent );
					this.type = child.nodeName;
					break;

				case 'int_array':

					this.data = _ints( child.textContent );
					this.type = child.nodeName;
					break;

				case 'IDREF_array':
				case 'Name_array':

					this.data = _strings( child.textContent );
					this.type = child.nodeName;
					break;

				case 'technique_common':

					for ( var j = 0; j < child.childNodes.length; j ++ ) {

						if ( child.childNodes[ j ].nodeName == 'accessor' ) {

							this.accessor = ( new Accessor() ).parse( child.childNodes[ j ] );
							break;

						}
					}
					break;

				default:
					// console.log(child.nodeName);
					break;

			}

		}

		return this;

	};

	Source.prototype.read = function () {

		var result = [];

		//for (var i = 0; i < this.accessor.params.length; i++) {

			var param = this.accessor.params[ 0 ];

			//console.log(param.name + " " + param.type);

			switch ( param.type ) {

				case 'IDREF':
				case 'Name': case 'name':
				case 'float':

					return this.data;

				case 'float4x4':

					for ( var j = 0; j < this.data.length; j += 16 ) {

						var s = this.data.slice( j, j + 16 );
						var m = getConvertedMat4( s );
						result.push( m );
					}

					break;

				default:

					console.log( 'ColladaLoader: Source: Read dont know how to read ' + param.type + '.' );
					break;

			}

		//}

		return result;

	};

	function Material () {

		this.id = "";
		this.name = "";
		this.instance_effect = null;

	};

	Material.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			if ( element.childNodes[ i ].nodeName == 'instance_effect' ) {

				this.instance_effect = ( new InstanceEffect() ).parse( element.childNodes[ i ] );
				break;

			}

		}

		return this;

	};

	function ColorOrTexture () {

		this.color = new THREE.Color( 0 );
		this.color.setRGB( Math.random(), Math.random(), Math.random() );
		this.color.a = 1.0;

		this.texture = null;
		this.texcoord = null;
		this.texOpts = null;

	};

	ColorOrTexture.prototype.isColor = function () {

		return ( this.texture == null );

	};

	ColorOrTexture.prototype.isTexture = function () {

		return ( this.texture != null );

	};

	ColorOrTexture.prototype.parse = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'color':

					var rgba = _floats( child.textContent );
					this.color = new THREE.Color(0);
					this.color.setRGB( rgba[0], rgba[1], rgba[2] );
					this.color.a = rgba[3];
					break;

				case 'texture':

					this.texture = child.getAttribute('texture');
					this.texcoord = child.getAttribute('texcoord');
					// Defaults from:
					// https://collada.org/mediawiki/index.php/Maya_texture_placement_MAYA_extension
					this.texOpts = {
						offsetU: 0,
						offsetV: 0,
						repeatU: 1,
						repeatV: 1,
						wrapU: 1,
						wrapV: 1,
					};
					this.parseTexture( child );
					break;

				default:
					break;

			}

		}

		return this;

	};

	ColorOrTexture.prototype.parseTexture = function ( element ) {

		if ( ! element.childNodes ) return this;

		// This should be supported by Maya, 3dsMax, and MotionBuilder

		if ( element.childNodes[1] && element.childNodes[1].nodeName === 'extra' ) {

			element = element.childNodes[1];

			if ( element.childNodes[1] && element.childNodes[1].nodeName === 'technique' ) {

				element = element.childNodes[1];

			}

		}

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'offsetU':
				case 'offsetV':
				case 'repeatU':
				case 'repeatV':

					this.texOpts[ child.nodeName ] = parseFloat( child.textContent );
					break;

				case 'wrapU':
				case 'wrapV':

					this.texOpts[ child.nodeName ] = parseInt( child.textContent );
					break;

				default:
					this.texOpts[ child.nodeName ] = child.textContent;
					break;

			}

		}

		return this;

	};

	function Shader ( type, effect ) {

		this.type = type;
		this.effect = effect;
		this.material = null;

	};

	Shader.prototype.parse = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'ambient':
				case 'emission':
				case 'diffuse':
				case 'specular':
				case 'transparent':

					this[ child.nodeName ] = ( new ColorOrTexture() ).parse( child );
					break;

				case 'shininess':
				case 'reflectivity':
				case 'index_of_refraction':
				case 'transparency':

					var f = evaluateXPath( child, './/dae:float' );

					if ( f.length > 0 )
						this[ child.nodeName ] = parseFloat( f[ 0 ].textContent );

					break;

				default:
					break;

			}

		}

		this.create();
		return this;

	};

	Shader.prototype.create = function() {

		var props = {};
		var transparent = ( this['transparency'] !== undefined && this['transparency'] < 1.0 );

		for ( var prop in this ) {

			switch ( prop ) {

				case 'ambient':
				case 'emission':
				case 'diffuse':
				case 'specular':

					var cot = this[ prop ];

					if ( cot instanceof ColorOrTexture ) {

						if ( cot.isTexture() ) {

							if ( this.effect.sampler && this.effect.surface ) {

								if ( this.effect.sampler.source == this.effect.surface.sid ) {

									var image = images[this.effect.surface.init_from];

									if ( image ) {

										var texture = THREE.ImageUtils.loadTexture(baseUrl + image.init_from);
										texture.wrapS = cot.texOpts.wrapU ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
										texture.wrapT = cot.texOpts.wrapV ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
										texture.offset.x = cot.texOpts.offsetU;
										texture.offset.y = cot.texOpts.offsetV;
										texture.repeat.x = cot.texOpts.repeatU;
										texture.repeat.y = cot.texOpts.repeatV;
										props['map'] = texture;

										// Texture with baked lighting?
										if ( prop === 'emission' ) props[ 'emissive' ] = 0xffffff;

									}

								}

							}

						} else if ( prop === 'diffuse' || !transparent ) {

							if ( prop === 'emission' ) {

								props[ 'emissive' ] = cot.color.getHex();

							} else {

								props[ prop ] = cot.color.getHex();

							}

						}

					}

					break;

				case 'shininess':

					props[ prop ] = this[ prop ];
					break;

				case 'reflectivity':

					props[ prop ] = this[ prop ];
					if( props[ prop ] > 0.0 ) props['envMap'] = options.defaultEnvMap;
					props['combine'] = THREE.MixOperation;	//mix regular shading with reflective component
					break;

				case 'index_of_refraction':

					props[ 'refractionRatio' ] = this[ prop ]; //TODO: "index_of_refraction" becomes "refractionRatio" in shader, but I'm not sure if the two are actually comparable
					if ( this[ prop ] !== 1.0 ) props['envMap'] = options.defaultEnvMap;
					break;

				case 'transparency':

					if ( transparent ) {

						props[ 'transparent' ] = true;
						props[ 'opacity' ] = this[ prop ];
						transparent = true;

					}

					break;

				default:
					break;

			}

		}

		props[ 'shading' ] = preferredShading;
		props[ 'side' ] = this.effect.doubleSided ? THREE.DoubleSide : THREE.FrontSide;

		switch ( this.type ) {

			case 'constant':

				props.color = props.emission;
				this.material = new THREE.MeshBasicMaterial( props );
				break;

			case 'phong':
			case 'blinn':

				props.color = props.diffuse;
				this.material = new THREE.MeshPhongMaterial( props );
				break;

			case 'lambert':
			default:

				props.color = props.diffuse;
				this.material = new THREE.MeshLambertMaterial( props );
				break;

		}

		return this.material;

	};

	function Surface ( effect ) {

		this.effect = effect;
		this.init_from = null;
		this.format = null;

	};

	Surface.prototype.parse = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'init_from':

					this.init_from = child.textContent;
					break;

				case 'format':

					this.format = child.textContent;
					break;

				default:

					console.log( "unhandled Surface prop: " + child.nodeName );
					break;

			}

		}

		return this;

	};

	function Sampler2D ( effect ) {

		this.effect = effect;
		this.source = null;
		this.wrap_s = null;
		this.wrap_t = null;
		this.minfilter = null;
		this.magfilter = null;
		this.mipfilter = null;

	};

	Sampler2D.prototype.parse = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'source':

					this.source = child.textContent;
					break;

				case 'minfilter':

					this.minfilter = child.textContent;
					break;

				case 'magfilter':

					this.magfilter = child.textContent;
					break;

				case 'mipfilter':

					this.mipfilter = child.textContent;
					break;

				case 'wrap_s':

					this.wrap_s = child.textContent;
					break;

				case 'wrap_t':

					this.wrap_t = child.textContent;
					break;

				default:

					console.log( "unhandled Sampler2D prop: " + child.nodeName );
					break;

			}

		}

		return this;

	};

	function Effect () {

		this.id = "";
		this.name = "";
		this.shader = null;
		this.surface = null;
		this.sampler = null;

	};

	Effect.prototype.create = function () {

		if ( this.shader == null ) {

			return null;

		}

	};

	Effect.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );

		extractDoubleSided( this, element );

		this.shader = null;

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'profile_COMMON':

					this.parseTechnique( this.parseProfileCOMMON( child ) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	Effect.prototype.parseNewparam = function ( element ) {

		var sid = element.getAttribute( 'sid' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'surface':

					this.surface = ( new Surface( this ) ).parse( child );
					this.surface.sid = sid;
					break;

				case 'sampler2D':

					this.sampler = ( new Sampler2D( this ) ).parse( child );
					this.sampler.sid = sid;
					break;

				case 'extra':

					break;

				default:

					console.log( child.nodeName );
					break;

			}

		}

	};

	Effect.prototype.parseProfileCOMMON = function ( element ) {

		var technique;

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'profile_COMMON':

					this.parseProfileCOMMON( child );
					break;

				case 'technique':

					technique = child;
					break;

				case 'newparam':

					this.parseNewparam( child );
					break;

				case 'image':

					var _image = ( new _Image() ).parse( child );
					images[ _image.id ] = _image;
					break;

				case 'extra':
					break;

				default:

					console.log( child.nodeName );
					break;

			}

		}

		return technique;

	};

	Effect.prototype.parseTechnique= function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'constant':
				case 'lambert':
				case 'blinn':
				case 'phong':

					this.shader = ( new Shader( child.nodeName, this ) ).parse( child );
					break;

				default:
					break;

			}

		}

	};

	function InstanceEffect () {

		this.url = "";

	};

	InstanceEffect.prototype.parse = function ( element ) {

		this.url = element.getAttribute( 'url' ).replace( /^#/, '' );
		return this;

	};

	function Animation() {

		this.id = "";
		this.name = "";
		this.source = {};
		this.sampler = [];
		this.channel = [];

	};

	Animation.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );
		this.source = {};

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'animation':

					var anim = ( new Animation() ).parse( child );

					for ( var src in anim.source ) {

						this.source[ src ] = anim.source[ src ];

					}

					for ( var j = 0; j < anim.channel.length; j ++ ) {

						this.channel.push( anim.channel[ j ] );
						this.sampler.push( anim.sampler[ j ] );

					}

					break;

				case 'source':

					var src = ( new Source() ).parse( child );
					this.source[ src.id ] = src;
					break;

				case 'sampler':

					this.sampler.push( ( new Sampler( this ) ).parse( child ) );
					break;

				case 'channel':

					this.channel.push( ( new Channel( this ) ).parse( child ) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	function Channel( animation ) {

		this.animation = animation;
		this.source = "";
		this.target = "";
		this.fullSid = null;
		this.sid = null;
		this.dotSyntax = null;
		this.arrSyntax = null;
		this.arrIndices = null;
		this.member = null;

	};

	Channel.prototype.parse = function ( element ) {

		this.source = element.getAttribute( 'source' ).replace( /^#/, '' );
		this.target = element.getAttribute( 'target' );

		var parts = this.target.split( '/' );

		var id = parts.shift();
		var sid = parts.shift();

		var dotSyntax = ( sid.indexOf(".") >= 0 );
		var arrSyntax = ( sid.indexOf("(") >= 0 );

		if ( dotSyntax ) {

			parts = sid.split(".");
			this.sid = parts.shift();
			this.member = parts.shift();

		} else if ( arrSyntax ) {

			var arrIndices = sid.split("(");
			this.sid = arrIndices.shift();

			for (var j = 0; j < arrIndices.length; j ++ ) {

				arrIndices[j] = parseInt( arrIndices[j].replace(/\)/, '') );

			}

			this.arrIndices = arrIndices;

		} else {

			this.sid = sid;

		}

		this.fullSid = sid;
		this.dotSyntax = dotSyntax;
		this.arrSyntax = arrSyntax;

		return this;

	};

	function Sampler ( animation ) {

		this.id = "";
		this.animation = animation;
		this.inputs = [];
		this.input = null;
		this.output = null;
		this.strideOut = null;
		this.interpolation = null;
		this.startTime = null;
		this.endTime = null;
		this.duration = 0;

	};

	Sampler.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.inputs = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'input':

					this.inputs.push( (new Input()).parse( child ) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	Sampler.prototype.create = function () {

		for ( var i = 0; i < this.inputs.length; i ++ ) {

			var input = this.inputs[ i ];
			var source = this.animation.source[ input.source ];

			switch ( input.semantic ) {

				case 'INPUT':

					this.input = source.read();
					break;

				case 'OUTPUT':

					this.output = source.read();
					this.strideOut = source.accessor.stride;
					break;

				case 'INTERPOLATION':

					this.interpolation = source.read();
					break;

				case 'IN_TANGENT':

					break;

				case 'OUT_TANGENT':

					break;

				default:

					console.log(input.semantic);
					break;

			}

		}

		this.startTime = 0;
		this.endTime = 0;
		this.duration = 0;

		if ( this.input.length ) {

			this.startTime = 100000000;
			this.endTime = -100000000;

			for ( var i = 0; i < this.input.length; i ++ ) {

				this.startTime = Math.min( this.startTime, this.input[ i ] );
				this.endTime = Math.max( this.endTime, this.input[ i ] );

			}

			this.duration = this.endTime - this.startTime;

		}

	};

	Sampler.prototype.getData = function ( type, ndx ) {

		var data;

		if ( type === 'matrix' && this.strideOut === 16 ) {

			data = this.output[ ndx ];

		} else if ( this.strideOut > 1 ) {

			data = [];
			ndx *= this.strideOut;

			for ( var i = 0; i < this.strideOut; ++i ) {

				data[ i ] = this.output[ ndx + i ];

			}

			if ( this.strideOut === 3 ) {

				switch ( type ) {

					case 'rotate':
					case 'translate':

						fixCoords( data, -1 );
						break;

					case 'scale':

						fixCoords( data, 1 );
						break;

				}

			} else if ( this.strideOut === 4 && type === 'matrix' ) {

				fixCoords( data, -1 );

			}

		} else {

			data = this.output[ ndx ];

		}

		return data;

	};

	function Key ( time ) {

		this.targets = [];
		this.time = time;

	};

	Key.prototype.addTarget = function ( fullSid, transform, member, data ) {

		this.targets.push( {
			sid: fullSid,
			member: member,
			transform: transform,
			data: data
		} );

	};

	Key.prototype.apply = function ( opt_sid ) {

		for ( var i = 0; i < this.targets.length; ++i ) {

			var target = this.targets[ i ];

			if ( !opt_sid || target.sid === opt_sid ) {

				target.transform.update( target.data, target.member );

			}

		}

	};

	Key.prototype.getTarget = function ( fullSid ) {

		for ( var i = 0; i < this.targets.length; ++i ) {

			if ( this.targets[ i ].sid === fullSid ) {

				return this.targets[ i ];

			}

		}

		return null;

	};

	Key.prototype.hasTarget = function ( fullSid ) {

		for ( var i = 0; i < this.targets.length; ++i ) {

			if ( this.targets[ i ].sid === fullSid ) {

				return true;

			}

		}

		return false;

	};

	// TODO: Currently only doing linear interpolation. Should support full COLLADA spec.
	Key.prototype.interpolate = function ( nextKey, time ) {

		for ( var i = 0; i < this.targets.length; ++i ) {

			var target = this.targets[ i ],
				nextTarget = nextKey.getTarget( target.sid ),
				data;

			if ( target.transform.type !== 'matrix' && nextTarget ) {

				var scale = ( time - this.time ) / ( nextKey.time - this.time ),
					nextData = nextTarget.data,
					prevData = target.data;

				// check scale error

				if ( scale < 0 || scale > 1 ) {

					console.log( "Key.interpolate: Warning! Scale out of bounds:" + scale );
					scale = scale < 0 ? 0 : 1;

				}

				if ( prevData.length ) {

					data = [];

					for ( var j = 0; j < prevData.length; ++j ) {

						data[ j ] = prevData[ j ] + ( nextData[ j ] - prevData[ j ] ) * scale;

					}

				} else {

					data = prevData + ( nextData - prevData ) * scale;

				}

			} else {

				data = target.data;

			}

			target.transform.update( data, target.member );

		}

	};

	function Camera() {

		this.id = "";
		this.name = "";
		this.technique = "";

	};

	Camera.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'optics':

					this.parseOptics( child );
					break;

				default:
					break;

			}

		}

		return this;

	};

	Camera.prototype.parseOptics = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			if ( element.childNodes[ i ].nodeName == 'technique_common' ) {

				var technique = element.childNodes[ i ];

				for ( var j = 0; j < technique.childNodes.length; j ++ ) {

					this.technique = technique.childNodes[ j ].nodeName;

					if ( this.technique == 'perspective' ) {

						var perspective = technique.childNodes[ j ];

						for ( var k = 0; k < perspective.childNodes.length; k ++ ) {

							var param = perspective.childNodes[ k ];

							switch ( param.nodeName ) {

								case 'yfov':
									this.yfov = param.textContent;
									break;
								case 'xfov':
									this.xfov = param.textContent;
									break;
								case 'znear':
									this.znear = param.textContent;
									break;
								case 'zfar':
									this.zfar = param.textContent;
									break;
								case 'aspect_ratio':
									this.aspect_ratio = param.textContent;
									break;

							}

						}

					} else if ( this.technique == 'orthographic' ) {

						var orthographic = technique.childNodes[ j ];

						for ( var k = 0; k < orthographic.childNodes.length; k ++ ) {

							var param = orthographic.childNodes[ k ];

							switch ( param.nodeName ) {

								case 'xmag':
									this.xmag = param.textContent;
									break;
								case 'ymag':
									this.ymag = param.textContent;
									break;
								case 'znear':
									this.znear = param.textContent;
									break;
								case 'zfar':
									this.zfar = param.textContent;
									break;
								case 'aspect_ratio':
									this.aspect_ratio = param.textContent;
									break;

							}

						}

					}

				}

			}

		}

		return this;

	};

	function InstanceCamera() {

		this.url = "";

	};

	InstanceCamera.prototype.parse = function ( element ) {

		this.url = element.getAttribute('url').replace(/^#/, '');

		return this;

	};

	function _source( element ) {

		var id = element.getAttribute( 'id' );

		if ( sources[ id ] != undefined ) {

			return sources[ id ];

		}

		sources[ id ] = ( new Source(id )).parse( element );
		return sources[ id ];

	};

	function _nsResolver( nsPrefix ) {

		if ( nsPrefix == "dae" ) {

			return "http://www.collada.org/2005/11/COLLADASchema";

		}

		return null;

	};

	function _bools( str ) {

		var raw = _strings( str );
		var data = [];

		for ( var i = 0, l = raw.length; i < l; i ++ ) {

			data.push( (raw[i] == 'true' || raw[i] == '1') ? true : false );

		}

		return data;

	};

	function _floats( str ) {

		var raw = _strings(str);
		var data = [];

		for ( var i = 0, l = raw.length; i < l; i ++ ) {

			data.push( parseFloat( raw[ i ] ) );

		}

		return data;

	};

	function _ints( str ) {

		var raw = _strings( str );
		var data = [];

		for ( var i = 0, l = raw.length; i < l; i ++ ) {

			data.push( parseInt( raw[ i ], 10 ) );

		}

		return data;

	};

	function _strings( str ) {

		return ( str.length > 0 ) ? _trimString( str ).split( /\s+/ ) : [];

	};

	function _trimString( str ) {

		return str.replace( /^\s+/, "" ).replace( /\s+$/, "" );

	};

	function _attr_as_float( element, name, defaultValue ) {

		if ( element.hasAttribute( name ) ) {

			return parseFloat( element.getAttribute( name ) );

		} else {

			return defaultValue;

		}

	};

	function _attr_as_int( element, name, defaultValue ) {

		if ( element.hasAttribute( name ) ) {

			return parseInt( element.getAttribute( name ), 10) ;

		} else {

			return defaultValue;

		}

	};

	function _attr_as_string( element, name, defaultValue ) {

		if ( element.hasAttribute( name ) ) {

			return element.getAttribute( name );

		} else {

			return defaultValue;

		}

	};

	function _format_float( f, num ) {

		if ( f === undefined ) {

			var s = '0.';

			while ( s.length < num + 2 ) {

				s += '0';

			}

			return s;

		}

		num = num || 2;

		var parts = f.toString().split( '.' );
		parts[ 1 ] = parts.length > 1 ? parts[ 1 ].substr( 0, num ) : "0";

		while( parts[ 1 ].length < num ) {

			parts[ 1 ] += '0';

		}

		return parts.join( '.' );

	};

	function evaluateXPath( node, query ) {

		var instances = COLLADA.evaluate( query, node, _nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );

		var inst = instances.iterateNext();
		var result = [];

		while ( inst ) {

			result.push( inst );
			inst = instances.iterateNext();

		}

		return result;

	};

	function extractDoubleSided( obj, element ) {

		obj.doubleSided = false;

		var node = COLLADA.evaluate( './/dae:extra//dae:double_sided', element, _nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );

		if ( node ) {

			node = node.iterateNext();

			if ( node && parseInt( node.textContent, 10 ) === 1 ) {

				obj.doubleSided = true;

			}

		}

	};

	// Up axis conversion

	function setUpConversion() {

		if ( !options.convertUpAxis || colladaUp === options.upAxis ) {

			upConversion = null;

		} else {

			switch ( colladaUp ) {

				case 'X':

					upConversion = options.upAxis === 'Y' ? 'XtoY' : 'XtoZ';
					break;

				case 'Y':

					upConversion = options.upAxis === 'X' ? 'YtoX' : 'YtoZ';
					break;

				case 'Z':

					upConversion = options.upAxis === 'X' ? 'ZtoX' : 'ZtoY';
					break;

			}

		}

	};

	function fixCoords( data, sign ) {

		if ( !options.convertUpAxis || colladaUp === options.upAxis ) {

			return;

		}

		switch ( upConversion ) {

			case 'XtoY':

				var tmp = data[ 0 ];
				data[ 0 ] = sign * data[ 1 ];
				data[ 1 ] = tmp;
				break;

			case 'XtoZ':

				var tmp = data[ 2 ];
				data[ 2 ] = data[ 1 ];
				data[ 1 ] = data[ 0 ];
				data[ 0 ] = tmp;
				break;

			case 'YtoX':

				var tmp = data[ 0 ];
				data[ 0 ] = data[ 1 ];
				data[ 1 ] = sign * tmp;
				break;

			case 'YtoZ':

				var tmp = data[ 1 ];
				data[ 1 ] = sign * data[ 2 ];
				data[ 2 ] = tmp;
				break;

			case 'ZtoX':

				var tmp = data[ 0 ];
				data[ 0 ] = data[ 1 ];
				data[ 1 ] = data[ 2 ];
				data[ 2 ] = tmp;
				break;

			case 'ZtoY':

				var tmp = data[ 1 ];
				data[ 1 ] = data[ 2 ];
				data[ 2 ] = sign * tmp;
				break;

		}

	};

	function getConvertedVec3( data, offset ) {

		var arr = [ data[ offset ], data[ offset + 1 ], data[ offset + 2 ] ];
		fixCoords( arr, -1 );
		return new THREE.Vector3( arr[ 0 ], arr[ 1 ], arr[ 2 ] );

	};

	function getConvertedMat4( data ) {

		if ( options.convertUpAxis ) {

			// First fix rotation and scale

			// Columns first
			var arr = [ data[ 0 ], data[ 4 ], data[ 8 ] ];
			fixCoords( arr, -1 );
			data[ 0 ] = arr[ 0 ];
			data[ 4 ] = arr[ 1 ];
			data[ 8 ] = arr[ 2 ];
			arr = [ data[ 1 ], data[ 5 ], data[ 9 ] ];
			fixCoords( arr, -1 );
			data[ 1 ] = arr[ 0 ];
			data[ 5 ] = arr[ 1 ];
			data[ 9 ] = arr[ 2 ];
			arr = [ data[ 2 ], data[ 6 ], data[ 10 ] ];
			fixCoords( arr, -1 );
			data[ 2 ] = arr[ 0 ];
			data[ 6 ] = arr[ 1 ];
			data[ 10 ] = arr[ 2 ];
			// Rows second
			arr = [ data[ 0 ], data[ 1 ], data[ 2 ] ];
			fixCoords( arr, -1 );
			data[ 0 ] = arr[ 0 ];
			data[ 1 ] = arr[ 1 ];
			data[ 2 ] = arr[ 2 ];
			arr = [ data[ 4 ], data[ 5 ], data[ 6 ] ];
			fixCoords( arr, -1 );
			data[ 4 ] = arr[ 0 ];
			data[ 5 ] = arr[ 1 ];
			data[ 6 ] = arr[ 2 ];
			arr = [ data[ 8 ], data[ 9 ], data[ 10 ] ];
			fixCoords( arr, -1 );
			data[ 8 ] = arr[ 0 ];
			data[ 9 ] = arr[ 1 ];
			data[ 10 ] = arr[ 2 ];

			// Now fix translation
			arr = [ data[ 3 ], data[ 7 ], data[ 11 ] ];
			fixCoords( arr, -1 );
			data[ 3 ] = arr[ 0 ];
			data[ 7 ] = arr[ 1 ];
			data[ 11 ] = arr[ 2 ];

		}

		return new THREE.Matrix4(
			data[0], data[1], data[2], data[3],
			data[4], data[5], data[6], data[7],
			data[8], data[9], data[10], data[11],
			data[12], data[13], data[14], data[15]
			);

	};

	function getConvertedIndex( index ) {

		if ( index > -1 && index < 3 ) {

			var members = ['X', 'Y', 'Z'],
				indices = { X: 0, Y: 1, Z: 2 };

			index = getConvertedMember( members[ index ] );
			index = indices[ index ];

		}

		return index;

	};

	function getConvertedMember( member ) {

		if ( options.convertUpAxis ) {

			switch ( member ) {

				case 'X':

					switch ( upConversion ) {

						case 'XtoY':
						case 'XtoZ':
						case 'YtoX':

							member = 'Y';
							break;

						case 'ZtoX':

							member = 'Z';
							break;

					}

					break;

				case 'Y':

					switch ( upConversion ) {

						case 'XtoY':
						case 'YtoX':
						case 'ZtoX':

							member = 'X';
							break;

						case 'XtoZ':
						case 'YtoZ':
						case 'ZtoY':

							member = 'Z';
							break;

					}

					break;

				case 'Z':

					switch ( upConversion ) {

						case 'XtoZ':

							member = 'X';
							break;

						case 'YtoZ':
						case 'ZtoX':
						case 'ZtoY':

							member = 'Y';
							break;

					}

					break;

			}

		}

		return member;

	};

	return {

		load: load,
		parse: parse,
		setPreferredShading: setPreferredShading,
		applySkin: applySkin,
		geometries : geometries,
		options: options

	};

};


/** Src: ../src/util/parsers/parseUri.js **/
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License

function parseUri (str) {
    var	o   = parseUri.options,
        m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i   = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
}

parseUri.options = {
    strictMode: false,
    key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
    q:   {
        name:   "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};

// Gets the url from browser's address-bar and parses it
function parseUrl( url ) {
    var parsed = parseUri( url );

    //Parsing ip and port from address bar (uses ?ip=IP&port=PORT)
    if ( parsed.queryKey ) {
        var keys = parsed.queryKey;
        console.log( parsed );
        if ( keys.ip )
            _connection.ip = keys.ip;

        if ( keys.port )
            _connection.port = keys.port;

        //For testing
        if ( keys.mobile )
            window.mobile = keys.mobile === '1';

        if ( keys.url )
            _connection.customUrl = keys.url;
    }
}

// Does changes to url in browser address bar
function insertToUrl( key, value ) {
    key = encodeURIComponent( key );
    value = encodeURIComponent( value );

    var kvp = window.location.search.substr( 1 ).split( '&' );
    if ( kvp == '' ) {
        window.history.replaceState( 'Object', 'Title', '?' + key + '=' + value )

    } else {
        var i = kvp.length;
        var x;
        while ( i-- ) {
            x = kvp[i].split( '=' );

            if ( x[0] === key ) {
                x[1] = value;
                kvp[i] = x.join( '=' );
                break;
            }
        }

        if ( i < 0 ) {
            kvp[kvp.length] = [key, value].join( '=' );
        }

        window.history.replaceState( 'Object', 'Title', '?' + kvp.join( '&' ) )
    }
}



// Parses remote storage url
function parseStorageUrl( url ) {
    var parsed = parseUri( url );

    //Adding trailing slash to directory path if it is missing
    if ( parsed.directory.indexOf( '/', parsed.directory.length - 1 ) === -1 )
        parsed.directory += '/';

    // Setting up hardcoded proxy for demo stuff
    var proxy = "chiru.cie.fi:8000/";
    if ( _connection.useProxy )
        parsed.host = proxy + "?" + parsed.host;

    _connection.storageUrl = "http://" + parsed['host'] + parsed.directory;

}

/** Src: ../src/util/controls/PointerLockControls.js **/
/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.PointerLockControls = function ( camera ) {

	var scope = this;

	var pitchObject = new THREE.Object3D();
	pitchObject.add( camera );

	var yawObject = new THREE.Object3D();
	yawObject.position.y = 10;
	yawObject.add( pitchObject );

	var moveForward = false;
	var moveBackward = false;
	var moveLeft = false;
	var moveRight = false;

	var isOnObject = false;
	var canJump = false;

	var velocity = new THREE.Vector3();

	var PI_2 = Math.PI / 2;

	var onMouseMove = function ( event ) {

		if ( scope.enabled === false ) return;

		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		yawObject.rotation.y -= movementX * 0.002;
		pitchObject.rotation.x -= movementY * 0.002;

		pitchObject.rotation.x = Math.max( - PI_2, Math.min( PI_2, pitchObject.rotation.x ) );

	};

	var onKeyDown = function ( event ) {

		switch ( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
			case 65: // a
				moveLeft = true; break;

			case 40: // down
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				moveRight = true;
				break;

			case 32: // space
				if ( canJump === true ) velocity.y += 10;
				canJump = false;
				break;

		}

	};

	var onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
			case 83: // a
				moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				moveRight = false;
				break;

		}

	};

	document.addEventListener( 'mousemove', onMouseMove, false );
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );

	this.enabled = false;

	this.getObject = function () {

		return yawObject;

	};

	this.isOnObject = function ( boolean ) {

		isOnObject = boolean;
		canJump = boolean;

	};

	this.update = function ( delta ) {

		if ( scope.enabled === false ) return;

		delta *= 0.1;

		velocity.x += ( - velocity.x ) * 0.08 * delta;
		velocity.z += ( - velocity.z ) * 0.08 * delta;

		velocity.y -= 0.25 * delta;

		if ( moveForward ) velocity.z -= 0.12 * delta;
		if ( moveBackward ) velocity.z += 0.12 * delta;

		if ( moveLeft ) velocity.x -= 0.12 * delta;
		if ( moveRight ) velocity.x += 0.12 * delta;

		if ( isOnObject === true ) {

			velocity.y = Math.max( 0, velocity.y );

		}

		yawObject.translateX( velocity.x );
		yawObject.translateY( velocity.y ); 
		yawObject.translateZ( velocity.z );

		if ( yawObject.position.y < 10 ) {

			velocity.y = 0;
			yawObject.position.y = 10;

			canJump = true;

		}

	};

};


/** Src: ../src/util/general/Detector.js **/
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

(function ( namespace, $, undefined ) {

    var Detector = namespace['Detector'] = {

        canvas: !!window.CanvasRenderingContext2D,
        webgl: (function () {
            try {
                return !!window['WebGLRenderingContext'] && !!document.createElement( 'canvas' ).getContext( 'experimental-webgl' );
            } catch (e) {
                return false;
            }
        })(),
        workers: !!window.Worker,
        fileapi: window.File && window.FileReader && window.FileList && window.Blob,


        getWebGLError: function ( type, gpuError, browserError ) {
            if ( !this.webgl ) {

                var error = window.WebGLRenderingContext ? gpuError : browserError;

                if ( type === 'element' ) {
                    var element = document.createElement( 'div' );
                    element.id = 'webgl-error-message';
                    element.style.fontFamily = 'monospace';
                    element.style.fontSize = '13px';
                    element.style.fontWeight = 'normal';
                    element.style.textAlign = 'center';
                    element.style.background = '#fff';
                    element.style.color = '#000';
                    element.style.padding = '1.5em';
                    element.style.width = '400px';
                    element.style.margin = '5em auto 0';

                    element.innerHTML = error;

                    return element;

                } else {
                    return error;
                }
            }

            return false;

        },

        throwWebGLError: function ( parameters ) {

            parameters = parameters || {};

            var defaults =
                {
                    parent: document.body,
                    type: 'element',
                    gpuErrorMsg: [
                        'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
                        'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
                    ].join( '\n' ),
                    browserErrorMsg: [
                        'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
                        'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
                    ].join( '\n' )
                },
                settings = $.extend( {}, defaults, parameters ), element;

            if ( settings.type === 'element' ) {
                element = Detector.getWebGLError( settings.type, settings.gpuErrorMsg, settings.browserErrorMsg );
                settings.parent.appendChild( element );

            } else if ( settings.type === 'alert' ) {
                alert( Detector.getWebGLError( settings.type, settings.gpuErrorMsg, settings.browserErrorMsg ) );
            }
        }
    };

}( window['webnaali'] = window['webnaali'] || {}, jQuery ));

/** Src: ../src/util/networking/WSManager.js **/
(function ( namespace, $, undefined ) {

    var WSManager = namespace.WSManager = function ( host, port, options ) {
        var defaults = {
                reconnectInterval: 8000,
                timeout: 8000,
                allowReconnect: true
            },
            settings = $.extend( {}, defaults, options );

        this.ws = null;
        this.url = "ws://" + host + ":" + port;
        this.host = host;
        this.port = port;

        this.reconnecting = false;
        this.connectTimer = null;
        this.reconnectTimer = null;
        this.reconnAttempt = 0;

        this.allowReconnect = settings.allowReconnect;

        //Reconnection interval time (milliseconds)
        this.reconnectInterval = settings.reconnectInterval;

        //Connection attempt timeout (milliseconds)
        this.timeout = settings.timeout;

        //Storage for bound callback events
        this.callbacks = {};

        // Hack for firefox
        window.addEventListener( "beforeunload", function () {
            this.ws.onclose = function () {
            }; // disable onclose handler
            this.ws.close();
            this.ws = null;
        }.bind( this ), false );

    };


    WSManager.prototype.connect = function () {
        this.ws = null;

        try {
            if ( window.WebSocket !== undefined ) {
                this.ws = new window.WebSocket( this.url );
            } else if ( window.MozWebSocket !== undefined ) {
                this.ws = new window.MozWebSocket( this.url );
            } else {
                alert( "This Browser does not support WebSockets.  Use newest version of Google Chrome, FireFox or Opera. " );
                return;
            }
        } catch (e) {
            console.error( 'ERROR:', e.stack );
            return;
        }

        //Timeout for connection attempt NOTE: Disabled due abnormal behaviour with Firefox on Android
        /*
         this.connectTimer = setTimeout(function() {
         if(this.ws != null)
         if(this.ws.readyState != this.ws.OPEN)
         this.ws.close()
         }.bind(this), this.timeout)
         */

        this.ws.onopen = function () {
            //clearTimeout(this.connectTimer)
            //this.connectTimer = null

            clearTimeout( this.reconnectTimer );
            this.reconnectTimer = null;

            this.reconnAttempt = 0;
            this.reconnecting = false;

            this.triggerEvent( "connected", this.host + ":" + this.port );

        }.bind( this );

        this.ws.onmessage = function ( evt ) {
            //console.log("Got msg: " + evt.data)
            this.parseMessage( evt.data );
        }.bind( this );

        this.ws.onclose = function ( evt ) {
            //clearTimeout(this.connectTimer)
            //this.connectTimer = null

            clearTimeout( this.reconnectTimer );
            this.reconnectTimer = null;

            if ( !this.reconnecting ) {
                var reason = "failed";
                if ( evt.wasClean ) {
                    reason = "closed";
                }

                this.triggerEvent( "disconnected", {url: this.host + ":" + this.port, reason: reason, code: evt.code} );
            }

            // Reconnect if the  connection was not closed cleanly (network error/abnormal server close etc.)
            if ( !evt.wasClean && this.allowReconnect ) {
                this.reconnecting = true;

                console.log( "Reconnecting in " + this.reconnectInterval / 1000 + " seconds..." );

                this.reconnectTimer = setTimeout( function () {
                    if ( this.ws !== null ) {
                        if ( this.ws.readyState !== this.ws.OPEN || this.ws.readyState !== this.ws.CONNECTING ) {
                            this.reconnAttempt = this.reconnAttempt + 1;
                            this.triggerEvent( "reconnecting", {host: this.url, attempt: this.reconnAttempt} );

                            this.connect( this.url );
                        }
                    }
                }.bind( this ), this.reconnectInterval );
            }

        }.bind( this );

        this.ws.onerror = function ( e ) {
            this.triggerEvent( "error", e );
        };
    };

    WSManager.prototype.stopReconnect = function () {
        if ( this.reconnectTimer !== null ) {
            clearTimeout( this.reconnectTimer );
        }

        if ( this.connectTimer !== null ) {
            clearTimeout( this.connectTimer );
        }
        this.reconnecting = false;
    };

    WSManager.prototype.parseMessage = function ( message ) {
        var parsed = JSON.parse( message );
        this.processEvent( parsed );
    };

    WSManager.prototype.processEvent = function ( json ) {
        if ( json.event ) {
            //console.log("Got event: "+json['event'])
            if ( json.data ) {

                // Triggering the event
                this.triggerEvent( json.event, json.data );
            }
        }
    };

//A function for binding custom event callbacks for Connection
    WSManager.prototype.bindEvent = function ( eventName, callback ) {
        this.callbacks[eventName] = this.callbacks[eventName] || [];
        this.callbacks[eventName].push( callback );
        return this;
    };

//Triggers the bound event and gives it some data as argument if it has a callback function
    WSManager.prototype.triggerEvent = function ( eventName, message ) {
        var eventChain = this.callbacks[eventName], i;
        if ( eventChain === undefined ) {
            console.log( "Error: Received an unknown event: " + eventName );
            return;
        }
        for ( i = 0; i < eventChain.length; i ++ ) {
            eventChain[i]( message );
        }
    };

}( window.webnaali = window.webnaali || {}, jQuery ));

/** Src: ../src/util/scene/AssetManager.js **/
(function ( namespace, $, undefined ) {

    var AssetManager = namespace.AssetManager = function ( gui, remoteStorage ) {
        //Ref to GUI
        this.GUI = gui;
        this.forceType = 'dae';
        this.remoteStorage = remoteStorage;

        //Storage for bound callback events
        this.callbacks = {};


    };

    AssetManager.prototype.setRemoteStorage = function ( url ) {
        this.remoteStorage = url;
    };

    AssetManager.prototype.checkFileName = function ( assetFileName ) {

        var fileName = assetFileName.split( '.' ),
            type = fileName.slice( -1 )[0];

        if ( type.toLowerCase() !== this.forceType ) {
            fileName[fileName.length - 1] = this.forceType;
            assetFileName = fileName.join( '.' );
        }

        return assetFileName;
    };

    AssetManager.prototype.requestAsset = function ( assetName, relPath ) {
        var trigger, request, asset,
            that = this;

        if ( relPath === undefined ) {
            relPath = '';
        }

        assetName = this.checkFileName( assetName );

        console.log( "Requesting: " + this.remoteStorage + relPath + assetName );


        if ( document.implementation && document.implementation.createDocument ) {

            request = new XMLHttpRequest();
            request.overrideMimeType( 'text/xml' );

            // Linking request with GUI, so it can be aborted
            //this.GUI.loadDiag.xhr = request;

            request.onreadystatechange = function () {

                if ( request.readyState === 4 ) {
                    clearInterval( trigger );
                    trigger = null;

                    if ( request.status === 200 ) {

                        if ( request.responseXML ) {
                            console.log( 'Download complete' );

                            //The final download progress update
                            console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );

                            //Gives the program some time to breath after download so it has time to update the viewport
                            setTimeout( function () {
                                that.processAsset( request, assetName );
                            }, 500 );

                        } else {
                            console.log( 'error', "Empty XML received!" );
                            request = null;
                        }
                    } else if ( request.status === 404 ) {
                        console.log( 'error', "File not found from: " + this.remoteStorage + relPath );
                        request = null;
                    }

                } else if ( request.readyState === 2 ) {
                    console.log( 'Loading asset' );

                    trigger = setInterval( function () {
                        if ( request.readyState === 3 ) {
                            console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );
                        }
                    }, 200 );
                }
            };


            request.onabort = function () {
                clearInterval( trigger );
                trigger = null;
                request = null;
            };

            request.onerror = function ( e ) {
                clearInterval( trigger );
                trigger = null;
                request = null;
                console.log( 'error', "Failed to download: " + this.remoteStorage + relPath + assetName );
            };

            request.open( "GET", this.remoteStorage + assetName, true );
            try {
                request.send( null );
            } catch (e) {
                console.log( 'error', e.message + ", when requesting: " + url );
            }

        } else {
            console.log( 'error', "Your browser can't handle XML." );
        }

        request.assetReady = new Signal();

        return request.assetReady;

    };

    AssetManager.prototype.processAsset = function ( request, name ) {

        var loader = new THREE.ColladaLoader(), xml = request.responseXML,
            that = this;

        loader.options.convertUpAxis = true;
        loader.parse( xml, function colladaReady( collada ) {
            var model = collada.scene;

            model.name = name;

            loader = null;

            console.log( 'ready' );

            request.assetReady.dispatch(model);

        }, this.remoteStorage );
    };

    AssetManager.prototype.assetReady = new Signal();

}( window.webnaali = window.webnaali || {}, jQuery ));

/** Src: ../src/util/scene/ECModel.js **/
(function ( namespace, $, undefined ) {

    var ECModel = namespace.ECModel = function ( assetManager ) {

        this.entities = {};
        this.components = {};
        this.assetManager = assetManager;

    };

    ECModel.prototype = {
        meshAdded: new Signal(),

        //Defines a new entity object
        Entity: function ( id ) {
            this.id = id;
            this.components = {};
            console.debug(this)
        },

        Component: function ( type, parent ) {
            this.type = type;
            this.parent = parent;

            this.addAttribute = function ( name, value ) {
                if ( name !== undefined && name !== '' && value !== undefined ) {
                    this[name] = value;
                }
            };
        },
        addComponent: function ( component, entId ) {
            var entity = this.entities[entId];
            component.parent = entId;

            if ( entity !== undefined ) {
                if ( !entity.components.hasOwnProperty( component.type ) ) {
                    entity.components[component.type] = component;
                    this.componentAdded( component );
                }
            }
        },
        componentAdded: function ( component ) {
            var that = this;

            switch (component.type) {
                case 'EC_Mesh':
                {
                    var trans;
                    console.debug( 'ADDED EC MESH!' );

                    this.assetManager.requestAsset( component['Mesh ref'] ).add( function ( asset ) {

                        trans = component.Transform.split( ',' );
                        for ( var i = trans.length; i--; ) trans[i] = Number( trans[i] );

                        asset.position.set( trans[0], trans[1], trans[2] );
                        asset.rotation.set( trans[3] * Math.PI / 180, trans[4] * Math.PI / 180, trans[5] * Math.PI / 180 );
                        asset.scale.set( trans[6], trans[7], trans[8] );

                        trans = that.entities[component.parent].components['EC_Placeable'].Transform.split( ',' );
                        for ( var i = trans.length; i--; ) trans[i] = Number( trans[i] );

                        asset.position.set( asset.position.x + trans[0], asset.position.y + trans[1], asset.position.z + trans[2] );
                        asset.rotation.set( asset.rotation.x + trans[3] * Math.PI / 180, asset.rotation.y + trans[4] * Math.PI / 180, asset.rotation.z + trans[5] * Math.PI / 180 );
                        asset.scale.set( asset.scale.x * trans[6], asset.scale.y * trans[7], asset.scale.z * trans[8] );


                        component.mesh = asset;
                        //console.log( component.mesh );

                        that.meshAdded.dispatch( component );

                    } );

                }
                    break;
                case 'EC_Placeable':
                {
                    console.log( 'ADDED EC PLACEABLE' );

                }
                    break;

                case 'EC_RigidBody':
                {
                    console.log( 'ADDED EC RigidBody' );

                }
                    break;
            }
        },


        //Adds a custom component to component types
        customComponent: function ( component ) {

            if ( component.type !== undefined ) {
                if ( !this.components.hasOwnProperty( component.type ) ) {
                    this.components[component.type] = component;
                }
            }
        },


        addEntity: function ( entity ) {
            var id = entity.id;
            //console.log( id );
            if ( !this.entities.hasOwnProperty( id ) ) {
                this.entities[id] = entity;
            }
        },

        removeEntity: function ( id ) {
            //TODO: Remove from scene and from hierarchy
        }
    };

}( window.webnaali = window.webnaali || {}, jQuery ));

/** Src: ../src/util/scene/SceneParser.js **/
(function ( namespace, $, undefined ) {

    var SceneParser = namespace.SceneParser = function ( ecModel ) {

        this.ecModel = ecModel;
        this.parser = this.initParser();

    };

    SceneParser.prototype.initParser = function () {
        var parser, xhttp;

        if ( window.DOMParser !== undefined ) {
            parser = function ( xml ) {
                return ( new window.DOMParser() ).parseFromString( xml, "text/xml" );
            };
        } else if ( window.ActiveXObject !== undefined &&
            new window.ActiveXObject( "Microsoft.XMLDOM" ) ) {
            parser = function ( xml ) {
                var xmlDoc = new window.ActiveXObject( "Microsoft.XMLDOM" );
                xmlDoc.async = "false";
                xmlDoc.loadXML( xml );
                return xmlDoc;
            };
        } else {
            throw new Error( "No XML parser found" );
        }


        if ( window.XMLHttpRequest ) {
            xhttp = new XMLHttpRequest();
        } else {    // IE 5/6
            xhttp = new ActiveXObject( "Microsoft.XMLHTTP" );
        }

        // Temporarilly loading static xml
        xhttp.overrideMimeType( 'text/xml' );

        xhttp.open( "GET", "scenes/avatar/scene.txml", false );
        xhttp.send( null );
        parser = xhttp.responseXML;
        console.log( parser );
        return parser;
    };

    SceneParser.prototype.parse = function ( xml ) {

        var entities = this.parser.getElementsByTagName( "entity" ),
            i, j, k, entity, id, components,
            type, attributes, attribute, name, value, ECEnt, ECComp;


        for ( i = 0; i < entities.length; i++ ) {
            entity = entities[i];
            id = entity.getAttribute( "id" );

            ECEnt = new this.ecModel.Entity( id );
            this.ecModel.addEntity(ECEnt);

            components = entity.getElementsByTagName( "component" );

            for ( j = 0; j < components.length; j++ ) {
                type = components[j].getAttribute( "type" );

                attributes = components[j].getElementsByTagName( "attribute" );


                ECComp = new this.ecModel.Component(type);

                for ( k = 0; k < attributes.length; k++ ) {
                    attribute = attributes[k];

                    name = attribute.getAttribute( "name" );
                    value = attribute.getAttribute( "value" );

                    ECComp.addAttribute(name, value);

                }

                this.ecModel.addComponent(ECComp, id);

            }
        }

        return this.ecModel;
    };

}( window.webnaali = window.webnaali || {}, jQuery ));

/** Src: ../src/util/scene/SceneManager.js **/
(function ( namespace, $, undefined ) {

    /**
     * Creates a scene manager object
     *
     * @constructor
     * @this {SceneManager}
     * @type {Function}
     * @param {object} container Container DOM element for webgl renderer
     */

    var SceneManager = namespace['SceneManager'] = function ( container, options ) {
        this.time = Date.now();
        this.container = container;
        this.controls = null;
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.loadedObjects = [];

        this.websocket = null;
        // In final solution the storage url will come through a websocket, but it's now defined here for testing
        this.assetManager = new webnaali.AssetManager( {}, "http://localhost:8000/scenes/avatar/" );
        this.ecModel = new webnaali.ECModel( this.assetManager );

        this.init();
    };


    SceneManager.prototype.renderLoop = function () {
        var self = this;

        (function loop() {
            window.requestAnimationFrame( loop );

            self.controls.isOnObject( false );


            self.controls.rayCaster.ray.origin.copy( self.controls.getObject().position );
            self.controls.rayCaster.ray.origin.y -= 10;

            var intersections = self.controls.rayCaster.intersectObjects( self.loadedObjects ),
                distance;

            if ( intersections.length > 0 ) {

                distance = intersections[ 0 ].distance;

                if ( distance > 0 && distance < 10 ) {

                    self.controls.isOnObject( true );

                }

            }
            self.controls.update( Date.now() - self.time );

            self.renderer.render( self.scene, self.camera );

            self.time = Date.now();
        }());


    };


    SceneManager.prototype.bindConnection = function ( socket ) {

        if ( socket !== undefined ) {
            this.websocket = socket;


            // Binding events

            try {
                this.websocket.bindEvent( "connected", function ( url ) {
                    console.log( "WebSocket connection opened." );
                } );

                this.websocket.bindEvent( "disconnected", function ( e ) {
                    console.log( "WebSocket closed." );

                } );

                this.websocket.bindEvent( "reconnecting", function ( e ) {
                    console.log( "Attempting to reconnect to " + e.host + " (Attempt: " + e.attempt + ")" );

                } );

                this.websocket.bindEvent( "error", function ( e ) {
                    console.log( "WebSocket error" + e );
                } );


                this.websocket.bindEvent( "scene", function ( xml ) {

                    this.parseScene( xml );

                } );

                return true;

            } catch (e) {
                console.error( 'ERROR:', e.stack );
            }

        }

        return false;

    };

    SceneManager.prototype.windowResize = function () {
        var callback = function () {
            this.renderer.setSize( $(this.container).innerWidth(),  $(this.container).innerHeight());

            this.camera.aspect = $(this.container).innerWidth() / $(this.container).innerHeight();
            this.camera.updateProjectionMatrix();

        }.bind( this );
        window.addEventListener( 'resize', callback, false );

        return {
            stop: function () {
                window.removeEventListener( 'resize', callback );
            }
        };
    };


    SceneManager.prototype.parseScene = function ( xml ) {
        var that = this;

        var sceneParser = new webnaali.SceneParser( this.ecModel );
        this.ecModel.meshAdded.add( function ( component ) {
            that.addToScene( component.mesh );
        } );
        sceneParser.parse( xml );

        sceneParser = null;


    };

    SceneManager.prototype.clearScene = function ( filter ) {
        var obj, scene = this.scene, i;

        if ( filter === undefined ) {
            filter = THREE.Object3D;
        }

        //Removes all objects (but not camera/lights)
        for ( i = scene.children.length - 1; i >= 0; i - 1 ) {
            obj = scene.children[i];
            if ( obj instanceof filter ) {
                scene.remove( obj );
            }
        }
    };

    SceneManager.prototype.cleanMemory = function ( freeMemory, cleanAll ) {
        if ( freeMemory === undefined ) {
            freeMemory = true;
        }

        if ( cleanAll === undefined ) {
            cleanAll = false;
        }

        var objects = this.loadedObjects,
            that = this, len;

        if ( freeMemory ) {

            len = 4;
            if ( cleanAll ) {
                len = 0;
            }

            if ( objects.length > len ) {
                while ( objects.length > len ) {
                    //console.log("removing object: " + objects[0].name)

                    removeFromScene( objects[0] );

                    this.renderer.deallocateObject( objects[0] );
                    objects.splice( 0, 1 );

                }
            }
            this.renderer.clear();

        } else {
            objects.forEach( function ( object ) {
                that.renderer.deallocateObject( object );
            } );
            this.renderer.clear();
        }
    };


    SceneManager.prepareAsset = function ( entId ) {

        var ecMesh = this.ecModel.entities[entId].components['EC_Mesh'],
            transform = ecMesh.transform,
            scale;
    };

    SceneManager.prototype.addToScene = function ( object ) {

        this.scene.add( object );
        this.loadedObjects.push( object );

    };

    SceneManager.prototype.init = function () {

        var body = document.body,
            that = this,
            dirLight;

        body.addEventListener( 'click', function ( event ) {
            // Ask the browser to lock the pointer


            body.requestPointerLock = body.requestPointerLock || body.mozRequestPointerLock || body.webkitRequestPointerLock;

            if ( /Firefox/i.test( navigator.userAgent ) ) {

                var fullscreenchange = function ( event ) {

                    if ( document.fullscreenElement === body || document.mozFullscreenElement === body ||
                        document.mozFullScreenElement === body ) {

                        document.removeEventListener( 'fullscreenchange', fullscreenchange );
                        document.removeEventListener( 'mozfullscreenchange', fullscreenchange );

                        body.requestPointerLock();
                    }

                };

                document.addEventListener( 'fullscreenchange', fullscreenchange, false );
                document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

                body.requestFullscreen = body.requestFullscreen || body.mozRequestFullscreen ||
                    body.mozRequestFullScreen || body.webkitRequestFullscreen;

                body.requestFullscreen();

            } else {

                body.requestPointerLock();

            }
            that.controls.enabled = true;
        }, false );


        this.renderer = new THREE.WebGLRenderer( {
            antiAlias: true, // to get smoother output
            preserveDrawingBuffer: false, // true to allow screen shot
            precision: 'highp'
        } );

        this.renderer.setClearColorHex( 0xBBBBBB, 1 );
        this.renderer.setSize( $(this.container).innerWidth(), $(this.container).innerHeight() );
        this.container.appendChild( this.renderer.domElement );


        this.scene = new THREE.Scene();

        /** TEMP SCENE **/
        this.scene.fog = new THREE.FogExp2( 0x000000, 0.00000025 );

        // Camera
        this.camera = new THREE.PerspectiveCamera( 45, ( $(this.container).innerWidth() / $(this.container).innerHeight()), 1, 5000 );
        this.camera.lookAt( this.scene.position );

        this.scene.add( this.camera );


        // Lights

        dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.intensity = 2;
        dirLight.position.set( 17, 10, 15 );
        dirLight.lookAt( this.scene.position );
        this.scene.add( dirLight );
        this.scene.add( new THREE.AmbientLight( 0xffffff ) );

        // Controls
        this.controls = new THREE.PointerLockControls( this.camera );
        this.scene.add( this.controls.getObject() );

        this.controls.rayCaster = new THREE.Raycaster();
        this.controls.rayCaster.ray.direction.set( 0, -1, 0 );


        //Windows resize listener
        this.windowResize();

        var vertex = "varying vec3 vNormal;void main() { vNormal = normal;gl_Position = projectionMatrix *modelViewMatrix *vec4(position,1.0);}";
        var fragment = "varying vec3 vNormal;void main() {vec3 light = vec3(0.5,0.2,1.0);light = normalize(light);float dProd = max(0.0, dot(vNormal, light));gl_FragColor = vec4(dProd, dProd, dProd, 1.0);}";
        var material = new THREE.ShaderMaterial( {
            vertexShader: vertex,
            fragmentShader: fragment
        } );

        var mesh = new THREE.Mesh( new THREE.TorusKnotGeometry( 200, 50, 64, 10 ), material );
        this.loadedObjects.push( mesh );
        this.scene.add( mesh );

        // Adding this here temporarily for testing
        this.parseScene();

    };

    SceneManager.prototype.start = function () {
        try {
            this.renderLoop();
            this.websocket.connect();
        } catch (e) {
            console.error( 'ERROR:', e.stack );
        }
    };

}( window['webnaali'] = window['webnaali'] || {}, jQuery ));




/** Src: ../src/util/scene/Renderer.js **/
var Renderer = function(options) {

    function setColorMode( o3d, colorMode ) {

        var children = o3d.children, geometry = o3d.geometry;

        for ( var i = 0, il = children.length; i < il; i++ ) {
            setColorMode( children[ i ], colorMode );
        }

        if ( geometry ) {
            //o3d.material.shading = THREE.FlatShading
            var mode = THREE.VertexColors;
            if ( colorMode === THREE.NoColors ||
                colorMode === THREE.FaceColors ||
                colorMode === THREE.VertexColors ) {
                mode = colorMode;
            }
            o3d.material.vertexColors = parseInt( mode );
            o3d.material.needsUpdate = true;
        }
    }

    // Sets the WebGL canvas resolution (5-10 fps render speed increase with lower resolution)
    function setRenderQuality( quality ) {
        if ( typeof(quality) === 'undefined' )
            quality = 'high';

        var renderer = _sceneController.renderer;

        if ( quality == 'high' ) {
            renderer.setSize( _container.innerWidth(), _container.innerHeight() );
            renderer.domElement.style.width = null;
            renderer.domElement.style.height = null;
            _sceneController.sceneParams.resolution = 1;
        } else {
            renderer.setSize( _container.innerWidth() / 2, _container.innerHeight() / 2 );
            renderer.domElement.style.width = _container.innerWidth() + 'px';
            renderer.domElement.style.height = _container.innerHeight() + 'px';
            _sceneController.sceneParams.resolution = 0.5;
        }
    }

}
