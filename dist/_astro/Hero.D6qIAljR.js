import{j as b}from"./jsx-runtime.lLJip256.js";import{c as jt,g as wt,r as ct}from"./index.CrPmW2s9.js";import{r as Et}from"./index.D2MAbzvX.js";var mt={exports:{}};(function(q,nt){(function(Y,V){q.exports=V(Et())})(typeof self<"u"?self:jt,Y=>(()=>{var V={7403:(e,o,t)=>{t.d(o,{default:()=>U});var n=t(4087),s=t.n(n);const a=function(w){return new RegExp(/<[a-z][\s\S]*>/i).test(w)},r=function(w,h){return Math.floor(Math.random()*(h-w+1))+w};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",p="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",m="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",d="CHANGE_DELETE_SPEED",g="CHANGE_DELAY",_="CHANGE_CURSOR",N="PASTE_STRING",T="HTML_TAG";function O(w){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},O(w)}function x(w,h){var S=Object.keys(w);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(w);h&&(E=E.filter(function(H){return Object.getOwnPropertyDescriptor(w,H).enumerable})),S.push.apply(S,E)}return S}function j(w){for(var h=1;h<arguments.length;h++){var S=arguments[h]!=null?arguments[h]:{};h%2?x(Object(S),!0).forEach(function(E){A(w,E,S[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(S)):x(Object(S)).forEach(function(E){Object.defineProperty(w,E,Object.getOwnPropertyDescriptor(S,E))})}return w}function k(w){return function(h){if(Array.isArray(h))return C(h)}(w)||function(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}(w)||function(h,S){if(h){if(typeof h=="string")return C(h,S);var E=Object.prototype.toString.call(h).slice(8,-1);return E==="Object"&&h.constructor&&(E=h.constructor.name),E==="Map"||E==="Set"?Array.from(h):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?C(h,S):void 0}}(w)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function C(w,h){(h==null||h>w.length)&&(h=w.length);for(var S=0,E=new Array(h);S<h;S++)E[S]=w[S];return E}function P(w,h){for(var S=0;S<h.length;S++){var E=h[S];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(w,Q(E.key),E)}}function A(w,h,S){return(h=Q(h))in w?Object.defineProperty(w,h,{value:S,enumerable:!0,configurable:!0,writable:!0}):w[h]=S,w}function Q(w){var h=function(S,E){if(O(S)!=="object"||S===null)return S;var H=S[Symbol.toPrimitive];if(H!==void 0){var i=H.call(S,"string");if(O(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(S)}(w);return O(h)==="symbol"?h:String(h)}const U=function(){function w(E,H){var i=this;if(function(y,D){if(!(y instanceof D))throw new TypeError("Cannot call a class as a function")}(this,w),A(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),A(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),A(this,"setupWrapperElement",function(){i.state.elements.container&&(i.state.elements.wrapper.className=i.options.wrapperClassName,i.state.elements.cursor.className=i.options.cursorClassName,i.state.elements.cursor.innerHTML=i.options.cursor,i.state.elements.container.innerHTML="",i.state.elements.container.appendChild(i.state.elements.wrapper),i.state.elements.container.appendChild(i.state.elements.cursor))}),A(this,"start",function(){return i.state.eventLoopPaused=!1,i.runEventLoop(),i}),A(this,"pause",function(){return i.state.eventLoopPaused=!0,i}),A(this,"stop",function(){return i.state.eventLoop&&((0,n.cancel)(i.state.eventLoop),i.state.eventLoop=null),i}),A(this,"pauseFor",function(y){return i.addEventToQueue(l,{ms:y}),i}),A(this,"typeOutAllStrings",function(){return typeof i.options.strings=="string"?(i.typeString(i.options.strings).pauseFor(i.options.pauseFor),i):(i.options.strings.forEach(function(y){i.typeString(y).pauseFor(i.options.pauseFor).deleteAll(i.options.deleteSpeed)}),i)}),A(this,"typeString",function(y){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(y))return i.typeOutHTMLString(y,D);if(y){var F=(i.options||{}).stringSplitter,R=typeof F=="function"?F(y):y.split("");i.typeCharacters(R,D)}return i}),A(this,"pasteString",function(y){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(y)?i.typeOutHTMLString(y,D,!0):(y&&i.addEventToQueue(N,{character:y,node:D}),i)}),A(this,"typeOutHTMLString",function(y){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,F=arguments.length>2?arguments[2]:void 0,R=function(B){var W=document.createElement("div");return W.innerHTML=B,W.childNodes}(y);if(R.length>0)for(var L=0;L<R.length;L++){var I=R[L],$=I.innerHTML;I&&I.nodeType!==3?(I.innerHTML="",i.addEventToQueue(v,{node:I,parentNode:D}),F?i.pasteString($,I):i.typeString($,I)):I.textContent&&(F?i.pasteString(I.textContent,D):i.typeString(I.textContent,D))}return i}),A(this,"deleteAll",function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return i.addEventToQueue(p,{speed:y}),i}),A(this,"changeDeleteSpeed",function(y){if(!y)throw new Error("Must provide new delete speed");return i.addEventToQueue(d,{speed:y}),i}),A(this,"changeDelay",function(y){if(!y)throw new Error("Must provide new delay");return i.addEventToQueue(g,{delay:y}),i}),A(this,"changeCursor",function(y){if(!y)throw new Error("Must provide new cursor");return i.addEventToQueue(_,{cursor:y}),i}),A(this,"deleteChars",function(y){if(!y)throw new Error("Must provide amount of characters to delete");for(var D=0;D<y;D++)i.addEventToQueue(c);return i}),A(this,"callFunction",function(y,D){if(!y||typeof y!="function")throw new Error("Callback must be a function");return i.addEventToQueue(m,{cb:y,thisArg:D}),i}),A(this,"typeCharacters",function(y){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!y||!Array.isArray(y))throw new Error("Characters must be an array");return y.forEach(function(F){i.addEventToQueue(u,{character:F,node:D})}),i}),A(this,"removeCharacters",function(y){if(!y||!Array.isArray(y))throw new Error("Characters must be an array");return y.forEach(function(){i.addEventToQueue(c)}),i}),A(this,"addEventToQueue",function(y,D){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.addEventToStateProperty(y,D,F,"eventQueue")}),A(this,"addReverseCalledEvent",function(y,D){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.options.loop?i.addEventToStateProperty(y,D,F,"reverseCalledEvents"):i}),A(this,"addEventToStateProperty",function(y,D){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2],R=arguments.length>3?arguments[3]:void 0,L={eventName:y,eventArgs:D||{}};return i.state[R]=F?[L].concat(k(i.state[R])):[].concat(k(i.state[R]),[L]),i}),A(this,"runEventLoop",function(){i.state.lastFrameTime||(i.state.lastFrameTime=Date.now());var y=Date.now(),D=y-i.state.lastFrameTime;if(!i.state.eventQueue.length){if(!i.options.loop)return;i.state.eventQueue=k(i.state.calledEvents),i.state.calledEvents=[],i.options=j({},i.state.initialOptions)}if(i.state.eventLoop=s()(i.runEventLoop),!i.state.eventLoopPaused){if(i.state.pauseUntil){if(y<i.state.pauseUntil)return;i.state.pauseUntil=null}var F,R=k(i.state.eventQueue),L=R.shift();if(!(D<=(F=L.eventName===f||L.eventName===c?i.options.deleteSpeed==="natural"?r(40,80):i.options.deleteSpeed:i.options.delay==="natural"?r(120,160):i.options.delay))){var I=L.eventName,$=L.eventArgs;switch(i.logInDevMode({currentEvent:L,state:i.state,delay:F}),I){case N:case u:var B=$.character,W=$.node,at=document.createTextNode(B),G=at;i.options.onCreateTextNode&&typeof i.options.onCreateTextNode=="function"&&(G=i.options.onCreateTextNode(B,at)),G&&(W?W.appendChild(G):i.state.elements.wrapper.appendChild(G)),i.state.visibleNodes=[].concat(k(i.state.visibleNodes),[{type:"TEXT_NODE",character:B,node:G}]);break;case c:R.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case l:var dt=L.eventArgs.ms;i.state.pauseUntil=Date.now()+parseInt(dt);break;case m:var st=L.eventArgs,ht=st.cb,vt=st.thisArg;ht.call(vt,{elements:i.state.elements});break;case v:var it=L.eventArgs,K=it.node,Z=it.parentNode;Z?Z.appendChild(K):i.state.elements.wrapper.appendChild(K),i.state.visibleNodes=[].concat(k(i.state.visibleNodes),[{type:T,node:K,parentNode:Z||i.state.elements.wrapper}]);break;case p:var xt=i.state.visibleNodes,tt=$.speed,J=[];tt&&J.push({eventName:d,eventArgs:{speed:tt,temp:!0}});for(var ut=0,yt=xt.length;ut<yt;ut++)J.push({eventName:f,eventArgs:{removingCharacterNode:!1}});tt&&J.push({eventName:d,eventArgs:{speed:i.options.deleteSpeed,temp:!0}}),R.unshift.apply(R,J);break;case f:var gt=L.eventArgs.removingCharacterNode;if(i.state.visibleNodes.length){var et=i.state.visibleNodes.pop(),bt=et.type,X=et.node,_t=et.character;i.options.onRemoveNode&&typeof i.options.onRemoveNode=="function"&&i.options.onRemoveNode({node:X,character:_t}),X&&X.parentNode.removeChild(X),bt===T&&gt&&R.unshift({eventName:f,eventArgs:{}})}break;case d:i.options.deleteSpeed=L.eventArgs.speed;break;case g:i.options.delay=L.eventArgs.delay;break;case _:i.options.cursor=L.eventArgs.cursor,i.state.elements.cursor.innerHTML=L.eventArgs.cursor}i.options.loop&&(L.eventName===f||L.eventArgs&&L.eventArgs.temp||(i.state.calledEvents=[].concat(k(i.state.calledEvents),[L]))),i.state.eventQueue=R,i.state.lastFrameTime=y}}}),E)if(typeof E=="string"){var ot=document.querySelector(E);if(!ot)throw new Error("Could not find container element");this.state.elements.container=ot}else this.state.elements.container=E;H&&(this.options=j(j({},this.options),H)),this.state.initialOptions=j({},this.options),this.init()}var h,S;return h=w,(S=[{key:"init",value:function(){var E,H;this.setupWrapperElement(),this.addEventToQueue(_,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(E=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(E)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(E){this.options.devMode&&console.log(E)}}])&&P(h.prototype,S),Object.defineProperty(h,"prototype",{writable:!1}),w}()},8552:(e,o,t)=>{var n=t(852)(t(5639),"DataView");e.exports=n},1989:(e,o,t)=>{var n=t(1789),s=t(401),a=t(7667),r=t(1327),u=t(1866);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var m=p[f];this.set(m[0],m[1])}}c.prototype.clear=n,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},8407:(e,o,t)=>{var n=t(7040),s=t(4125),a=t(2117),r=t(7518),u=t(4705);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var m=p[f];this.set(m[0],m[1])}}c.prototype.clear=n,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},7071:(e,o,t)=>{var n=t(852)(t(5639),"Map");e.exports=n},3369:(e,o,t)=>{var n=t(4785),s=t(1285),a=t(6e3),r=t(9916),u=t(5265);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var m=p[f];this.set(m[0],m[1])}}c.prototype.clear=n,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},3818:(e,o,t)=>{var n=t(852)(t(5639),"Promise");e.exports=n},8525:(e,o,t)=>{var n=t(852)(t(5639),"Set");e.exports=n},8668:(e,o,t)=>{var n=t(3369),s=t(619),a=t(2385);function r(u){var c=-1,p=u==null?0:u.length;for(this.__data__=new n;++c<p;)this.add(u[c])}r.prototype.add=r.prototype.push=s,r.prototype.has=a,e.exports=r},6384:(e,o,t)=>{var n=t(8407),s=t(7465),a=t(3779),r=t(7599),u=t(4758),c=t(4309);function p(f){var l=this.__data__=new n(f);this.size=l.size}p.prototype.clear=s,p.prototype.delete=a,p.prototype.get=r,p.prototype.has=u,p.prototype.set=c,e.exports=p},2705:(e,o,t)=>{var n=t(5639).Symbol;e.exports=n},1149:(e,o,t)=>{var n=t(5639).Uint8Array;e.exports=n},577:(e,o,t)=>{var n=t(852)(t(5639),"WeakMap");e.exports=n},4963:e=>{e.exports=function(o,t){for(var n=-1,s=o==null?0:o.length,a=0,r=[];++n<s;){var u=o[n];t(u,n,o)&&(r[a++]=u)}return r}},4636:(e,o,t)=>{var n=t(2545),s=t(5694),a=t(1469),r=t(4144),u=t(5776),c=t(6719),p=Object.prototype.hasOwnProperty;e.exports=function(f,l){var m=a(f),v=!m&&s(f),d=!m&&!v&&r(f),g=!m&&!v&&!d&&c(f),_=m||v||d||g,N=_?n(f.length,String):[],T=N.length;for(var O in f)!l&&!p.call(f,O)||_&&(O=="length"||d&&(O=="offset"||O=="parent")||g&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||u(O,T))||N.push(O);return N}},2488:e=>{e.exports=function(o,t){for(var n=-1,s=t.length,a=o.length;++n<s;)o[a+n]=t[n];return o}},2908:e=>{e.exports=function(o,t){for(var n=-1,s=o==null?0:o.length;++n<s;)if(t(o[n],n,o))return!0;return!1}},8470:(e,o,t)=>{var n=t(7813);e.exports=function(s,a){for(var r=s.length;r--;)if(n(s[r][0],a))return r;return-1}},8866:(e,o,t)=>{var n=t(2488),s=t(1469);e.exports=function(a,r,u){var c=r(a);return s(a)?c:n(c,u(a))}},4239:(e,o,t)=>{var n=t(2705),s=t(9607),a=t(2333),r=n?n.toStringTag:void 0;e.exports=function(u){return u==null?u===void 0?"[object Undefined]":"[object Null]":r&&r in Object(u)?s(u):a(u)}},9454:(e,o,t)=>{var n=t(4239),s=t(7005);e.exports=function(a){return s(a)&&n(a)=="[object Arguments]"}},939:(e,o,t)=>{var n=t(2492),s=t(7005);e.exports=function a(r,u,c,p,f){return r===u||(r==null||u==null||!s(r)&&!s(u)?r!=r&&u!=u:n(r,u,c,p,a,f))}},2492:(e,o,t)=>{var n=t(6384),s=t(7114),a=t(8351),r=t(6096),u=t(4160),c=t(1469),p=t(4144),f=t(6719),l="[object Arguments]",m="[object Array]",v="[object Object]",d=Object.prototype.hasOwnProperty;e.exports=function(g,_,N,T,O,x){var j=c(g),k=c(_),C=j?m:u(g),P=k?m:u(_),A=(C=C==l?v:C)==v,Q=(P=P==l?v:P)==v,U=C==P;if(U&&p(g)){if(!p(_))return!1;j=!0,A=!1}if(U&&!A)return x||(x=new n),j||f(g)?s(g,_,N,T,O,x):a(g,_,C,N,T,O,x);if(!(1&N)){var w=A&&d.call(g,"__wrapped__"),h=Q&&d.call(_,"__wrapped__");if(w||h){var S=w?g.value():g,E=h?_.value():_;return x||(x=new n),O(S,E,N,T,x)}}return!!U&&(x||(x=new n),r(g,_,N,T,O,x))}},8458:(e,o,t)=>{var n=t(3560),s=t(5346),a=t(3218),r=t(346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,p=Object.prototype,f=c.toString,l=p.hasOwnProperty,m=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(v){return!(!a(v)||s(v))&&(n(v)?m:u).test(r(v))}},8749:(e,o,t)=>{var n=t(4239),s=t(1780),a=t(7005),r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1,e.exports=function(u){return a(u)&&s(u.length)&&!!r[n(u)]}},280:(e,o,t)=>{var n=t(5726),s=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(r){if(!n(r))return s(r);var u=[];for(var c in Object(r))a.call(r,c)&&c!="constructor"&&u.push(c);return u}},2545:e=>{e.exports=function(o,t){for(var n=-1,s=Array(o);++n<o;)s[n]=t(n);return s}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var n=t(5639)["__core-js_shared__"];e.exports=n},7114:(e,o,t)=>{var n=t(8668),s=t(2908),a=t(4757);e.exports=function(r,u,c,p,f,l){var m=1&c,v=r.length,d=u.length;if(v!=d&&!(m&&d>v))return!1;var g=l.get(r),_=l.get(u);if(g&&_)return g==u&&_==r;var N=-1,T=!0,O=2&c?new n:void 0;for(l.set(r,u),l.set(u,r);++N<v;){var x=r[N],j=u[N];if(p)var k=m?p(j,x,N,u,r,l):p(x,j,N,r,u,l);if(k!==void 0){if(k)continue;T=!1;break}if(O){if(!s(u,function(C,P){if(!a(O,P)&&(x===C||f(x,C,c,p,l)))return O.push(P)})){T=!1;break}}else if(x!==j&&!f(x,j,c,p,l)){T=!1;break}}return l.delete(r),l.delete(u),T}},8351:(e,o,t)=>{var n=t(2705),s=t(1149),a=t(7813),r=t(7114),u=t(8776),c=t(1814),p=n?n.prototype:void 0,f=p?p.valueOf:void 0;e.exports=function(l,m,v,d,g,_,N){switch(v){case"[object DataView]":if(l.byteLength!=m.byteLength||l.byteOffset!=m.byteOffset)return!1;l=l.buffer,m=m.buffer;case"[object ArrayBuffer]":return!(l.byteLength!=m.byteLength||!_(new s(l),new s(m)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+l,+m);case"[object Error]":return l.name==m.name&&l.message==m.message;case"[object RegExp]":case"[object String]":return l==m+"";case"[object Map]":var T=u;case"[object Set]":var O=1&d;if(T||(T=c),l.size!=m.size&&!O)return!1;var x=N.get(l);if(x)return x==m;d|=2,N.set(l,m);var j=r(T(l),T(m),d,g,_,N);return N.delete(l),j;case"[object Symbol]":if(f)return f.call(l)==f.call(m)}return!1}},6096:(e,o,t)=>{var n=t(8234),s=Object.prototype.hasOwnProperty;e.exports=function(a,r,u,c,p,f){var l=1&u,m=n(a),v=m.length;if(v!=n(r).length&&!l)return!1;for(var d=v;d--;){var g=m[d];if(!(l?g in r:s.call(r,g)))return!1}var _=f.get(a),N=f.get(r);if(_&&N)return _==r&&N==a;var T=!0;f.set(a,r),f.set(r,a);for(var O=l;++d<v;){var x=a[g=m[d]],j=r[g];if(c)var k=l?c(j,x,g,r,a,f):c(x,j,g,a,r,f);if(!(k===void 0?x===j||p(x,j,u,c,f):k)){T=!1;break}O||(O=g=="constructor")}if(T&&!O){var C=a.constructor,P=r.constructor;C==P||!("constructor"in a)||!("constructor"in r)||typeof C=="function"&&C instanceof C&&typeof P=="function"&&P instanceof P||(T=!1)}return f.delete(a),f.delete(r),T}},1957:(e,o,t)=>{var n=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=n},8234:(e,o,t)=>{var n=t(8866),s=t(9551),a=t(3674);e.exports=function(r){return n(r,a,s)}},5050:(e,o,t)=>{var n=t(7019);e.exports=function(s,a){var r=s.__data__;return n(a)?r[typeof a=="string"?"string":"hash"]:r.map}},852:(e,o,t)=>{var n=t(8458),s=t(7801);e.exports=function(a,r){var u=s(a,r);return n(u)?u:void 0}},9607:(e,o,t)=>{var n=t(2705),s=Object.prototype,a=s.hasOwnProperty,r=s.toString,u=n?n.toStringTag:void 0;e.exports=function(c){var p=a.call(c,u),f=c[u];try{c[u]=void 0;var l=!0}catch{}var m=r.call(c);return l&&(p?c[u]=f:delete c[u]),m}},9551:(e,o,t)=>{var n=t(4963),s=t(479),a=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols,u=r?function(c){return c==null?[]:(c=Object(c),n(r(c),function(p){return a.call(c,p)}))}:s;e.exports=u},4160:(e,o,t)=>{var n=t(8552),s=t(7071),a=t(3818),r=t(8525),u=t(577),c=t(4239),p=t(346),f="[object Map]",l="[object Promise]",m="[object Set]",v="[object WeakMap]",d="[object DataView]",g=p(n),_=p(s),N=p(a),T=p(r),O=p(u),x=c;(n&&x(new n(new ArrayBuffer(1)))!=d||s&&x(new s)!=f||a&&x(a.resolve())!=l||r&&x(new r)!=m||u&&x(new u)!=v)&&(x=function(j){var k=c(j),C=k=="[object Object]"?j.constructor:void 0,P=C?p(C):"";if(P)switch(P){case g:return d;case _:return f;case N:return l;case T:return m;case O:return v}return k}),e.exports=x},7801:e=>{e.exports=function(o,t){return o?.[t]}},1789:(e,o,t)=>{var n=t(4536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var n=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;if(n){var u=r[a];return u==="__lodash_hash_undefined__"?void 0:u}return s.call(r,a)?r[a]:void 0}},1327:(e,o,t)=>{var n=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;return n?r[a]!==void 0:s.call(r,a)}},1866:(e,o,t)=>{var n=t(4536);e.exports=function(s,a){var r=this.__data__;return this.size+=this.has(s)?0:1,r[s]=n&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,n){var s=typeof t;return!!(n=n??9007199254740991)&&(s=="number"||s!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<n}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var n,s=t(4429),a=(n=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(r){return!!a&&a in r}},5726:e=>{var o=Object.prototype;e.exports=function(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var n=t(8470),s=Array.prototype.splice;e.exports=function(a){var r=this.__data__,u=n(r,a);return!(u<0||(u==r.length-1?r.pop():s.call(r,u,1),--this.size,0))}},2117:(e,o,t)=>{var n=t(8470);e.exports=function(s){var a=this.__data__,r=n(a,s);return r<0?void 0:a[r][1]}},7518:(e,o,t)=>{var n=t(8470);e.exports=function(s){return n(this.__data__,s)>-1}},4705:(e,o,t)=>{var n=t(8470);e.exports=function(s,a){var r=this.__data__,u=n(r,s);return u<0?(++this.size,r.push([s,a])):r[u][1]=a,this}},4785:(e,o,t)=>{var n=t(1989),s=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||s),string:new n}}},1285:(e,o,t)=>{var n=t(5050);e.exports=function(s){var a=n(this,s).delete(s);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var n=t(5050);e.exports=function(s){return n(this,s).get(s)}},9916:(e,o,t)=>{var n=t(5050);e.exports=function(s){return n(this,s).has(s)}},5265:(e,o,t)=>{var n=t(5050);e.exports=function(s,a){var r=n(this,s),u=r.size;return r.set(s,a),this.size+=r.size==u?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(s,a){n[++t]=[a,s]}),n}},4536:(e,o,t)=>{var n=t(852)(Object,"create");e.exports=n},6916:(e,o,t)=>{var n=t(5569)(Object.keys,Object);e.exports=n},1167:(e,o,t)=>{e=t.nmd(e);var n=t(1957),s=o&&!o.nodeType&&o,a=s&&e&&!e.nodeType&&e,r=a&&a.exports===s&&n.process,u=function(){try{return a&&a.require&&a.require("util").types||r&&r.binding&&r.binding("util")}catch{}}();e.exports=u},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(n){return o(t(n))}}},5639:(e,o,t)=>{var n=t(1957),s=typeof self=="object"&&self&&self.Object===Object&&self,a=n||s||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(s){n[++t]=s}),n}},7465:(e,o,t)=>{var n=t(8407);e.exports=function(){this.__data__=new n,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,n=t.delete(o);return this.size=t.size,n}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var n=t(8407),s=t(7071),a=t(3369);e.exports=function(r,u){var c=this.__data__;if(c instanceof n){var p=c.__data__;if(!s||p.length<199)return p.push([r,u]),this.size=++c.size,this;c=this.__data__=new a(p)}return c.set(r,u),this.size=c.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var n=t(9454),s=t(7005),a=Object.prototype,r=a.hasOwnProperty,u=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(p){return s(p)&&r.call(p,"callee")&&!u.call(p,"callee")};e.exports=c},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var n=t(3560),s=t(1780);e.exports=function(a){return a!=null&&s(a.length)&&!n(a)}},4144:(e,o,t)=>{e=t.nmd(e);var n=t(5639),s=t(5062),a=o&&!o.nodeType&&o,r=a&&e&&!e.nodeType&&e,u=r&&r.exports===a?n.Buffer:void 0,c=(u?u.isBuffer:void 0)||s;e.exports=c},8446:(e,o,t)=>{var n=t(939);e.exports=function(s,a){return n(s,a)}},3560:(e,o,t)=>{var n=t(4239),s=t(3218);e.exports=function(a){if(!s(a))return!1;var r=n(a);return r=="[object Function]"||r=="[object GeneratorFunction]"||r=="[object AsyncFunction]"||r=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var n=t(8749),s=t(1717),a=t(1167),r=a&&a.isTypedArray,u=r?s(r):n;e.exports=u},3674:(e,o,t)=>{var n=t(4636),s=t(280),a=t(8612);e.exports=function(r){return a(r)?n(r):s(r)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,n,s,a,r;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,s=(o=function(){var u;return 1e9*(u=t())[0]+u[1]})(),r=1e9*process.uptime(),a=s-r):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var n=t(75),s=typeof window>"u"?t.g:window,a=["moz","webkit"],r="AnimationFrame",u=s["request"+r],c=s["cancel"+r]||s["cancelRequest"+r],p=0;!u&&p<a.length;p++)u=s[a[p]+"Request"+r],c=s[a[p]+"Cancel"+r]||s[a[p]+"CancelRequest"+r];if(!u||!c){var f=0,l=0,m=[];u=function(v){if(m.length===0){var d=n(),g=Math.max(0,16.666666666666668-(d-f));f=g+d,setTimeout(function(){var _=m.slice(0);m.length=0;for(var N=0;N<_.length;N++)if(!_[N].cancelled)try{_[N].callback(f)}catch(T){setTimeout(function(){throw T},0)}},Math.round(g))}return m.push({handle:++l,callback:v,cancelled:!1}),l},c=function(v){for(var d=0;d<m.length;d++)m[d].handle===v&&(m[d].cancelled=!0)}}e.exports=function(v){return u.call(s,v)},e.exports.cancel=function(){c.apply(s,arguments)},e.exports.polyfill=function(v){v||(v=s),v.requestAnimationFrame=u,v.cancelAnimationFrame=c}},8156:e=>{e.exports=Y}},M={};function z(e){var o=M[e];if(o!==void 0)return o.exports;var t=M[e]={id:e,loaded:!1,exports:{}};return V[e].call(t.exports,t,t.exports,z),t.loaded=!0,t.exports}z.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return z.d(o,{a:o}),o},z.d=(e,o)=>{for(var t in o)z.o(o,t)&&!z.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},z.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),z.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),z.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var rt={};return(()=>{z.d(rt,{default:()=>m});var e=z(8156),o=z.n(e),t=z(7403),n=z(8446),s=z.n(n);function a(v){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},a(v)}function r(v,d){for(var g=0;g<d.length;g++){var _=d[g];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(v,f(_.key),_)}}function u(v,d){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,_){return g.__proto__=_,g},u(v,d)}function c(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}function p(v){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)},p(v)}function f(v){var d=function(g,_){if(a(g)!=="object"||g===null)return g;var N=g[Symbol.toPrimitive];if(N!==void 0){var T=N.call(g,"string");if(a(T)!=="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(v);return a(d)==="symbol"?d:String(d)}var l=function(v){(function(x,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(j&&j.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),j&&u(x,j)})(O,v);var d,g,_,N,T=(_=O,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var x,j=p(_);if(N){var k=p(this).constructor;x=Reflect.construct(j,arguments,k)}else x=j.apply(this,arguments);return function(C,P){if(P&&(a(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(C)}(this,x)});function O(){var x,j,k,C;(function(U,w){if(!(U instanceof w))throw new TypeError("Cannot call a class as a function")})(this,O);for(var P=arguments.length,A=new Array(P),Q=0;Q<P;Q++)A[Q]=arguments[Q];return j=c(x=T.call.apply(T,[this].concat(A))),C={instance:null},(k=f(k="state"))in j?Object.defineProperty(j,k,{value:C,enumerable:!0,configurable:!0,writable:!0}):j[k]=C,x}return d=O,(g=[{key:"componentDidMount",value:function(){var x=this,j=new t.default(this.typewriter,this.props.options);this.setState({instance:j},function(){var k=x.props.onInit;k&&k(j)})}},{key:"componentDidUpdate",value:function(x){s()(this.props.options,x.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var x=this,j=this.props.component;return o().createElement(j,{ref:function(k){return x.typewriter=k},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&r(d.prototype,g),Object.defineProperty(d,"prototype",{writable:!1}),O}(e.Component);l.defaultProps={component:"div"};const m=l})(),rt.default})())})(mt);var Nt=mt.exports;const pt=wt(Nt),lt={src:"/_astro/adhim_niokagi.itm8V4Bw.jpg",width:2270,height:2270,format:"jpg"},ft="/_astro/Adhim_Niokagi_IT_CVS.ChhDTG-7.pdf";function At(){const[q,nt]=ct.useState(!1);ct.useEffect(()=>{const M=setTimeout(()=>{nt(!0)},50);return()=>clearTimeout(M)},[]);const Y=()=>{window.scrollBy({top:650,left:0,behavior:"smooth"})},V=[{name:"Linkedin",icon:"bx bxl-linkedin",url:"https://linkedin.com/in/adhim-niokagi"},{name:"Instagram",icon:"bx bxl-instagram",url:"https://instagram.com/nioka.o"},{name:"Github",icon:"bx bxl-github",url:"https://github.com/nioka666"},{name:"Whatsapp",icon:"bx bxl-whatsapp",url:"https://wa.me/6287755588990"}];return b.jsxs(b.Fragment,{children:[b.jsxs("section",{className:"hero",children:[b.jsx("section",{className:"social-media",children:V.map(M=>b.jsx("a",{href:M.url,className:"tooltip tooltip-left","data-tip":M.name,children:b.jsx("i",{className:`${M.icon} cursor-pointer text-[21px] text-black`},M.name)},M.name))}),b.jsxs("section",{className:"headline",children:[b.jsx("h1",{className:"font-semibold leading-tight md:text-[45px] lg:text-[56px] lg:text-black",children:"Adhim Niokagi"}),b.jsxs("h6",{className:"text-black md:mt-3 md:text-base lg:mt-1 lg:text-xl",children:[b.jsx("i",{className:"uil uil-minus"})," ",b.jsx("i",{className:"uil uil-minus ms-[-15px]"})," ",b.jsx("i",{className:"uil uil-minus ms-[-15px]"})," ",b.jsx("i",{className:"uil uil-minus ms-[-15px]"})," ",b.jsx("span",{className:"ms-2",children:"Front-End Developer"})]}),b.jsx("div",{className:"text-gray mt-5 h-[80px] w-[85%] font-normal md:text-[14px] lg:text-[16.5px]",children:b.jsx(pt,{onInit:M=>{M.typeString("I'm a").pauseFor(500).typeString(" Front-End Developer,").pauseFor(1e3).typeString(" work based in Mojokerto, East Java,").pauseFor(1e3).typeString(" passionate and dedicated to my work.").start()},options:{autoStart:!0}})}),b.jsxs("div",{className:"mt-10 flex gap-5",children:[b.jsxs("button",{role:"button",className:"rounded-[18px] bg-gray-800 py-[17px] font-medium text-white transition-all hover:shadow-md md:px-[25px] md:text-sm lg:px-9 lg:text-base",children:["Say Hello"," ",b.jsx("i",{className:"uil uil-location-arrow md:ms-1 lg:ms-2"})]}),b.jsx("a",{href:ft,target:"_blank",children:b.jsxs("button",{role:"button",className:"flex items-center rounded-2xl bg-transparent py-[15px] font-medium text-black max-sm:text-sm md:px-4 md:text-sm lg:px-7 lg:text-base",children:["View CV",b.jsx("i",{className:"bx bx-file ms-3 text-2xl text-gray-600"})]})})]})]}),b.jsx("picture",{className:`blob me-[10px] overflow-hidden ${q?"animate-fade-in":"opacity-0"} md:mt-[-30px] md:w-[260px] lg:mt-[-70px] lg:h-[250px] lg:w-[355px] nionotebook:mt-[-5px] nionotebook:h-[315px] nionotebook:w-[325px]`,children:b.jsx("img",{src:lt.src,alt:"Adhim Niokagi"})})]}),b.jsxs("section",{className:"sm-hero",children:[b.jsxs("div",{className:"mt-16 flex items-center px-6 max-sm:gap-9 max-miniphone:gap-5 sm:gap-10",children:[b.jsx("section",{className:"social-media",children:V.map(M=>b.jsx("a",{href:M.url,className:"tooltip tooltip-right","data-tip":M.name,children:b.jsx("i",{className:`${M.icon} cursor-pointer text-xl max-miniphone:text-base`},M.name)},M.name))}),b.jsx("picture",{className:`blob overflow-hidden max-md:ms-[2px] max-miniphone:ms-[-3px] ${q?"animate-fade-in":"opacity-0"} max-sm:h-full max-sm:w-[227px] max-miniphone:w-[223px] sm:h-full sm:w-[280px] md:h-full md:w-[10px]`,children:b.jsx("img",{src:lt.src,alt:"Adhim Niokagi"})})]}),b.jsxs("section",{className:"mx-6 mt-7 flex flex-col",children:[b.jsx("h1",{className:"mb-1 font-semibold leading-[53px] max-sm:text-[40px] max-miniphone:text-[28px] sm:text-[47px]",children:"Adhim Niokagi"}),b.jsxs("h6",{className:"text-black max-sm:text-[17px] max-miniphone:text-[14px] sm:text-xl",children:[b.jsx("i",{className:"uil uil-minus"})," ",b.jsx("i",{className:"uil uil-minus ms-[-15px]"})," ",b.jsx("i",{className:"uil uil-minus ms-[-15px]"})," ",b.jsx("i",{className:"uil uil-minus ms-[-15px]"})," ",b.jsx("span",{className:"ms-2",children:"Front-End Developer"})]}),b.jsx("div",{className:"text-niogray mt-[13.5px] h-[110px] w-full leading-7 max-sm:text-[16.5px] max-miniphone:h-[70px] max-miniphone:text-[13px] max-miniphone:leading-5 sm:text-[18px]",children:b.jsx(pt,{onInit:M=>{M.typeString("Hello..  Im a").pauseFor(500).typeString(" Junior Front-End Web Developer.").pauseFor(1e3).typeString(" Work based in Mojokerto, East Java.").start()},options:{autoStart:!0}})}),b.jsxs("div",{className:"mt-10 flex items-center gap-[33px] max-sm:mt-8 max-miniphone:gap-2 sm:mt-0 sm:gap-[40px]",children:[b.jsxs("button",{role:"button",className:"rounded-[18px] bg-gray-800 px-8 py-[18px] text-[14px] font-medium text-white transition-all hover:bg-gray-700 max-miniphone:px-6 max-miniphone:py-[15.7px] max-miniphone:text-[11px] sm:text-[15px]",children:["Say Hello ",b.jsx("i",{className:"uil uil-location-arrow ms-1"})]}),b.jsx("a",{href:ft,target:"_blank",children:b.jsxs("button",{role:"button",className:"flex items-center gap-[11px] rounded-2xl bg-transparent px-0 text-[14px] font-medium text-black max-miniphone:text-[10px] sm:text-[15px]",children:["View CV",b.jsx("i",{className:"bx bx-file text-2xl text-gray-600"})]})})]})]})]}),b.jsx("section",{className:"ms-[85px] mt-20 max-lg:hidden lg:ms-[130px]",children:b.jsxs("button",{role:"button",className:"flex items-center gap-1 rounded-2xl bg-transparent text-base font-normal text-black transition-all hover:translate-y-1",onClick:Y,children:[b.jsx("i",{className:"bx bx-mouse text-3xl text-gray-600"}),"Scroll Down",b.jsx("i",{className:"bx bx-down-arrow-alt ms-1 text-xl text-gray-600"})]})})]})}export{At as default};