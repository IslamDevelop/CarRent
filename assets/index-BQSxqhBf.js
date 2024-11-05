function TC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function IC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tg={exports:{}},eu={},Ig={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),kC=Symbol.for("react.portal"),RC=Symbol.for("react.fragment"),xC=Symbol.for("react.strict_mode"),NC=Symbol.for("react.profiler"),PC=Symbol.for("react.provider"),AC=Symbol.for("react.context"),bC=Symbol.for("react.forward_ref"),OC=Symbol.for("react.suspense"),DC=Symbol.for("react.memo"),LC=Symbol.for("react.lazy"),Sp=Symbol.iterator;function MC(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rg=Object.assign,xg={};function os(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||kg}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ng(){}Ng.prototype=os.prototype;function fh(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||kg}var ph=fh.prototype=new Ng;ph.constructor=fh;Rg(ph,os.prototype);ph.isPureReactComponent=!0;var Tp=Array.isArray,Pg=Object.prototype.hasOwnProperty,mh={current:null},Ag={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Pg.call(e,r)&&!Ag.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Uo,type:t,key:s,ref:o,props:i,_owner:mh.current}}function FC(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _h(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function UC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ip=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UC(""+t.key):e.toString(36)}function Pa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case kC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hu(o,0):r,Tp(i)?(n="",t!=null&&(n=t.replace(Ip,"$&/")+"/"),Pa(i,e,n,"",function(u){return u})):i!=null&&(_h(i)&&(i=FC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ip,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hu(s,a);o+=Pa(s,e,n,l,i)}else if(l=MC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hu(s,a++),o+=Pa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oa(t,e,n){if(t==null)return t;var r=[],i=0;return Pa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Aa={transition:null},BC={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:mh};function Og(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:oa,forEach:function(t,e,n){oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oa(t,function(){e++}),e},toArray:function(t){return oa(t,function(e){return e})||[]},only:function(t){if(!_h(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=os;Y.Fragment=RC;Y.Profiler=NC;Y.PureComponent=fh;Y.StrictMode=xC;Y.Suspense=OC;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BC;Y.act=Og;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Pg.call(e,l)&&!Ag.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Uo,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:AC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PC,_context:t},t.Consumer=t};Y.createElement=bg;Y.createFactory=function(t){var e=bg.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:bC,render:t}};Y.isValidElement=_h;Y.lazy=function(t){return{$$typeof:LC,_payload:{_status:-1,_result:t},_init:jC}};Y.memo=function(t,e){return{$$typeof:DC,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Aa.transition;Aa.transition={};try{t()}finally{Aa.transition=e}};Y.unstable_act=Og;Y.useCallback=function(t,e){return ut.current.useCallback(t,e)};Y.useContext=function(t){return ut.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};Y.useEffect=function(t,e){return ut.current.useEffect(t,e)};Y.useId=function(){return ut.current.useId()};Y.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return ut.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};Y.useRef=function(t){return ut.current.useRef(t)};Y.useState=function(t){return ut.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return ut.current.useTransition()};Y.version="18.3.1";Ig.exports=Y;var k=Ig.exports;const ht=IC(k),zc=TC({__proto__:null,default:ht},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zC=k,VC=Symbol.for("react.element"),$C=Symbol.for("react.fragment"),WC=Object.prototype.hasOwnProperty,HC=zC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qC={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WC.call(e,r)&&!qC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VC,type:t,key:s,ref:o,props:i,_owner:HC.current}}eu.Fragment=$C;eu.jsx=Dg;eu.jsxs=Dg;Tg.exports=eu;var f=Tg.exports,Lg={exports:{}},Pt={},Mg={exports:{}},Fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,V){var $=D.length;D.push(V);e:for(;0<$;){var ce=$-1>>>1,we=D[ce];if(0<i(we,V))D[ce]=V,D[$]=we,$=ce;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var V=D[0],$=D.pop();if($!==V){D[0]=$;e:for(var ce=0,we=D.length,mi=we>>>1;ce<mi;){var rn=2*(ce+1)-1,vs=D[rn],zt=rn+1,Or=D[zt];if(0>i(vs,$))zt<we&&0>i(Or,vs)?(D[ce]=Or,D[zt]=$,ce=zt):(D[ce]=vs,D[rn]=$,ce=rn);else if(zt<we&&0>i(Or,$))D[ce]=Or,D[zt]=$,ce=zt;else break e}}return V}function i(D,V){var $=D.sortIndex-V.sortIndex;return $!==0?$:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,g=!1,v=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=D)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(D){if(E=!1,m(D),!v)if(n(l)!==null)v=!0,et(I);else{var V=n(u);V!==null&&Ke(w,V.startTime-D)}}function I(D,V){v=!1,E&&(E=!1,_(P),P=-1),g=!0;var $=h;try{for(m(V),c=n(l);c!==null&&(!(c.expirationTime>V)||D&&!Oe());){var ce=c.callback;if(typeof ce=="function"){c.callback=null,h=c.priorityLevel;var we=ce(c.expirationTime<=V);V=t.unstable_now(),typeof we=="function"?c.callback=we:c===n(l)&&r(l),m(V)}else r(l);c=n(l)}if(c!==null)var mi=!0;else{var rn=n(u);rn!==null&&Ke(w,rn.startTime-V),mi=!1}return mi}finally{c=null,h=$,g=!1}}var N=!1,b=null,P=-1,H=5,j=-1;function Oe(){return!(t.unstable_now()-j<H)}function W(){if(b!==null){var D=t.unstable_now();j=D;var V=!0;try{V=b(!0,D)}finally{V?Q():(N=!1,b=null)}}else N=!1}var Q;if(typeof p=="function")Q=function(){p(W)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,De=ge.port2;ge.port1.onmessage=W,Q=function(){De.postMessage(null)}}else Q=function(){S(W,0)};function et(D){b=D,N||(N=!0,Q())}function Ke(D,V){P=S(function(){D(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,et(I))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var $=h;h=V;try{return D()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=h;h=D;try{return V()}finally{h=$}},t.unstable_scheduleCallback=function(D,V,$){var ce=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ce+$:ce):$=ce,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=$+we,D={id:d++,callback:V,priorityLevel:D,startTime:$,expirationTime:we,sortIndex:-1},$>ce?(D.sortIndex=$,e(u,D),n(l)===null&&D===n(u)&&(E?(_(P),P=-1):E=!0,Ke(w,$-ce))):(D.sortIndex=we,e(l,D),v||g||(v=!0,et(I))),D},t.unstable_shouldYield=Oe,t.unstable_wrapCallback=function(D){var V=h;return function(){var $=h;h=V;try{return D.apply(this,arguments)}finally{h=$}}}})(Fg);Mg.exports=Fg;var GC=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KC=k,Rt=GC;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ug=new Set,io={};function li(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(io[t]=e,t=0;t<e.length;t++)Ug.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,YC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},Rp={};function QC(t){return Vc.call(Rp,t)?!0:Vc.call(kp,t)?!1:YC.test(t)?Rp[t]=!0:(kp[t]=!0,!1)}function XC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JC(t,e,n,r){if(e===null||typeof e>"u"||XC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var gh=/[\-:]([a-z])/g;function vh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gh,vh);Ge[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gh,vh);Ge[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gh,vh);Ge[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function yh(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JC(e,n,i,r)&&(n=null),r||i===null?QC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=KC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),Ci=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),Bg=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),xp=Symbol.iterator;function ys(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,qu;function Ds(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Gu=!1;function Ku(t,e){if(!t||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function ZC(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=Ku(t.type,!1),t;case 11:return t=Ku(t.type.render,!1),t;case 1:return t=Ku(t.type,!0),t;default:return""}}function qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Si:return"Fragment";case Ci:return"Portal";case $c:return"Profiler";case wh:return"StrictMode";case Wc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bg:return(t.displayName||"Context")+".Consumer";case jg:return(t._context.displayName||"Context")+".Provider";case Eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:qc(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return qc(t(e))}catch{}}return null}function eS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(e);case 8:return e===wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tS(t){var e=Vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function la(t){t._valueTracker||(t._valueTracker=tS(t))}function $g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ya(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gc(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Np(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wg(t,e){e=e.checked,e!=null&&yh(t,"checked",e,!1)}function Kc(t,e){Wg(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||Ya(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Ls(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function Hg(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,Gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nS=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){nS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function Kg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rS=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(rS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function Sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,Ui=null,ji=null;function Op(t){if(t=zo(t)){if(typeof td!="function")throw Error(R(280));var e=t.stateNode;e&&(e=su(e),td(t.stateNode,t.type,e))}}function Qg(t){Ui?ji?ji.push(t):ji=[t]:Ui=t}function Xg(){if(Ui){var t=Ui,e=ji;if(ji=Ui=null,Op(t),e)for(t=0;t<e.length;t++)Op(e[t])}}function Jg(t,e){return t(e)}function Zg(){}var Yu=!1;function ev(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return Jg(t,e,n)}finally{Yu=!1,(Ui!==null||ji!==null)&&(Zg(),Xg())}}function oo(t,e){var n=t.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var nd=!1;if(Dn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){nd=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{nd=!1}function iS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Vs=!1,Qa=null,Xa=!1,rd=null,sS={onError:function(t){Vs=!0,Qa=t}};function oS(t,e,n,r,i,s,o,a,l){Vs=!1,Qa=null,iS.apply(sS,arguments)}function aS(t,e,n,r,i,s,o,a,l){if(oS.apply(this,arguments),Vs){if(Vs){var u=Qa;Vs=!1,Qa=null}else throw Error(R(198));Xa||(Xa=!0,rd=u)}}function ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dp(t){if(ui(t)!==t)throw Error(R(188))}function lS(t){var e=t.alternate;if(!e){if(e=ui(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dp(i),t;if(s===r)return Dp(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function nv(t){return t=lS(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var iv=Rt.unstable_scheduleCallback,Lp=Rt.unstable_cancelCallback,uS=Rt.unstable_shouldYield,cS=Rt.unstable_requestPaint,Ce=Rt.unstable_now,dS=Rt.unstable_getCurrentPriorityLevel,Th=Rt.unstable_ImmediatePriority,sv=Rt.unstable_UserBlockingPriority,Ja=Rt.unstable_NormalPriority,hS=Rt.unstable_LowPriority,ov=Rt.unstable_IdlePriority,tu=null,fn=null;function fS(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:_S,pS=Math.log,mS=Math.LN2;function _S(t){return t>>>=0,t===0?32:31-(pS(t)/mS|0)|0}var ca=64,da=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Za(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ms(a):(s&=o,s!==0&&(r=Ms(s)))}else o=n&~i,o!==0?r=Ms(o):s!==0&&(r=Ms(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function gS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=gS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function av(){var t=ca;return ca<<=1,!(ca&4194240)&&(ca=64),t}function Qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function yS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ih(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,kh,cv,dv,hv,sd=!1,ha=[],lr=null,ur=null,cr=null,ao=new Map,lo=new Map,Xn=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zo(e),e!==null&&kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ES(t,e,n,r,i){switch(e){case"focusin":return lr=Es(lr,t,e,n,r,i),!0;case"dragenter":return ur=Es(ur,t,e,n,r,i),!0;case"mouseover":return cr=Es(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ao.set(s,Es(ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,lo.set(s,Es(lo.get(s)||null,t,e,n,r,i)),!0}return!1}function fv(t){var e=Br(t.target);if(e!==null){var n=ui(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,hv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ed=r,n.target.dispatchEvent(r),ed=null}else return e=zo(n),e!==null&&kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Fp(t,e,n){ba(t)&&n.delete(e)}function CS(){sd=!1,lr!==null&&ba(lr)&&(lr=null),ur!==null&&ba(ur)&&(ur=null),cr!==null&&ba(cr)&&(cr=null),ao.forEach(Fp),lo.forEach(Fp)}function Cs(t,e){t.blockedOn===e&&(t.blockedOn=null,sd||(sd=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,CS)))}function uo(t){function e(i){return Cs(i,t)}if(0<ha.length){Cs(ha[0],t);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Cs(lr,t),ur!==null&&Cs(ur,t),cr!==null&&Cs(cr,t),ao.forEach(e),lo.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)fv(n),n.blockedOn===null&&Xn.shift()}var Bi=Vn.ReactCurrentBatchConfig,el=!0;function SS(t,e,n,r){var i=ee,s=Bi.transition;Bi.transition=null;try{ee=1,Rh(t,e,n,r)}finally{ee=i,Bi.transition=s}}function TS(t,e,n,r){var i=ee,s=Bi.transition;Bi.transition=null;try{ee=4,Rh(t,e,n,r)}finally{ee=i,Bi.transition=s}}function Rh(t,e,n,r){if(el){var i=od(t,e,n,r);if(i===null)oc(t,e,r,tl,n),Mp(t,r);else if(ES(i,t,e,n,r))r.stopPropagation();else if(Mp(t,r),e&4&&-1<wS.indexOf(t)){for(;i!==null;){var s=zo(i);if(s!==null&&uv(s),s=od(t,e,n,r),s===null&&oc(t,e,r,tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else oc(t,e,r,null,n)}}var tl=null;function od(t,e,n,r){if(tl=null,t=Sh(r),t=Br(t),t!==null)if(e=ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dS()){case Th:return 1;case sv:return 4;case Ja:case hS:return 16;case ov:return 536870912;default:return 16}default:return 16}}var sr=null,xh=null,Oa=null;function mv(){if(Oa)return Oa;var t,e=xh,n=e.length,r,i="value"in sr?sr.value:sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Oa=i.slice(t,1<r?1-r:void 0)}function Da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function Up(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fa:Up,this.isPropagationStopped=Up,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nh=At(as),Bo=me({},as,{view:0,detail:0}),IS=At(Bo),Xu,Ju,Ss,nu=me({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(Xu=t.screenX-Ss.screenX,Ju=t.screenY-Ss.screenY):Ju=Xu=0,Ss=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),jp=At(nu),kS=me({},nu,{dataTransfer:0}),RS=At(kS),xS=me({},Bo,{relatedTarget:0}),Zu=At(xS),NS=me({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),PS=At(NS),AS=me({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bS=At(AS),OS=me({},as,{data:0}),Bp=At(OS),DS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MS[t])?!!e[t]:!1}function Ph(){return FS}var US=me({},Bo,{key:function(t){if(t.key){var e=DS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(t){return t.type==="keypress"?Da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jS=At(US),BS=me({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=At(BS),zS=me({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),VS=At(zS),$S=me({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),WS=At($S),HS=me({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qS=At(HS),GS=[9,13,27,32],Ah=Dn&&"CompositionEvent"in window,$s=null;Dn&&"documentMode"in document&&($s=document.documentMode);var KS=Dn&&"TextEvent"in window&&!$s,_v=Dn&&(!Ah||$s&&8<$s&&11>=$s),Vp=" ",$p=!1;function gv(t,e){switch(t){case"keyup":return GS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function YS(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:($p=!0,Vp);case"textInput":return t=e.data,t===Vp&&$p?null:t;default:return null}}function QS(t,e){if(Ti)return t==="compositionend"||!Ah&&gv(t,e)?(t=mv(),Oa=xh=sr=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var XS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XS[t.type]:e==="textarea"}function yv(t,e,n,r){Qg(r),e=nl(e,"onChange"),0<e.length&&(n=new Nh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ws=null,co=null;function JS(t){Pv(t,0)}function ru(t){var e=Ri(t);if($g(e))return t}function ZS(t,e){if(t==="change")return e}var wv=!1;if(Dn){var ec;if(Dn){var tc="oninput"in document;if(!tc){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),tc=typeof Hp.oninput=="function"}ec=tc}else ec=!1;wv=ec&&(!document.documentMode||9<document.documentMode)}function qp(){Ws&&(Ws.detachEvent("onpropertychange",Ev),co=Ws=null)}function Ev(t){if(t.propertyName==="value"&&ru(co)){var e=[];yv(e,co,t,Sh(t)),ev(JS,e)}}function eT(t,e,n){t==="focusin"?(qp(),Ws=e,co=n,Ws.attachEvent("onpropertychange",Ev)):t==="focusout"&&qp()}function tT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(co)}function nT(t,e){if(t==="click")return ru(e)}function rT(t,e){if(t==="input"||t==="change")return ru(e)}function iT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:iT;function ho(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=Gp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gp(n)}}function Cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sv(){for(var t=window,e=Ya();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ya(t.document)}return e}function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sT(t){var e=Sv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cv(n.ownerDocument.documentElement,n)){if(r!==null&&bh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kp(n,s);var o=Kp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oT=Dn&&"documentMode"in document&&11>=document.documentMode,Ii=null,ad=null,Hs=null,ld=!1;function Yp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||Ii==null||Ii!==Ya(r)||(r=Ii,"selectionStart"in r&&bh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&ho(Hs,r)||(Hs=r,r=nl(ad,"onSelect"),0<r.length&&(e=new Nh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},nc={},Tv={};Dn&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function iu(t){if(nc[t])return nc[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tv)return nc[t]=e[n];return t}var Iv=iu("animationend"),kv=iu("animationiteration"),Rv=iu("animationstart"),xv=iu("transitionend"),Nv=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Nv.set(t,e),li(e,[t])}for(var rc=0;rc<Qp.length;rc++){var ic=Qp[rc],aT=ic.toLowerCase(),lT=ic[0].toUpperCase()+ic.slice(1);xr(aT,"on"+lT)}xr(Iv,"onAnimationEnd");xr(kv,"onAnimationIteration");xr(Rv,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(xv,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function Xp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aS(r,e,void 0,t),t.currentTarget=null}function Pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Xp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Xp(i,a,u),s=l}}}if(Xa)throw t=rd,Xa=!1,rd=null,t}function se(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var r=t+"__bubble";n.has(r)||(Av(e,t,2,!1),n.add(r))}function sc(t,e,n){var r=0;e&&(r|=4),Av(n,t,r,e)}var ma="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[ma]){t[ma]=!0,Ug.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ma]||(e[ma]=!0,sc("selectionchange",!1,e))}}function Av(t,e,n,r){switch(pv(e)){case 1:var i=SS;break;case 4:i=TS;break;default:i=Rh}n=i.bind(null,e,n,t),i=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ev(function(){var u=s,d=Sh(n),c=[];e:{var h=Nv.get(t);if(h!==void 0){var g=Nh,v=t;switch(t){case"keypress":if(Da(n)===0)break e;case"keydown":case"keyup":g=jS;break;case"focusin":v="focus",g=Zu;break;case"focusout":v="blur",g=Zu;break;case"beforeblur":case"afterblur":g=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=RS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=VS;break;case Iv:case kv:case Rv:g=PS;break;case xv:g=WS;break;case"scroll":g=IS;break;case"wheel":g=qS;break;case"copy":case"cut":case"paste":g=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zp}var E=(e&4)!==0,S=!E&&t==="scroll",_=E?h!==null?h+"Capture":null:h;E=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,_!==null&&(w=oo(p,_),w!=null&&E.push(po(p,w,m)))),S)break;p=p.return}0<E.length&&(h=new g(h,v,null,n,d),c.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ed&&(v=n.relatedTarget||n.fromElement)&&(Br(v)||v[Ln]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Br(v):null,v!==null&&(S=ui(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(E=jp,w="onMouseLeave",_="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=zp,w="onPointerLeave",_="onPointerEnter",p="pointer"),S=g==null?h:Ri(g),m=v==null?h:Ri(v),h=new E(w,p+"leave",g,n,d),h.target=S,h.relatedTarget=m,w=null,Br(d)===u&&(E=new E(_,p+"enter",v,n,d),E.target=m,E.relatedTarget=S,w=E),S=w,g&&v)t:{for(E=g,_=v,p=0,m=E;m;m=_i(m))p++;for(m=0,w=_;w;w=_i(w))m++;for(;0<p-m;)E=_i(E),p--;for(;0<m-p;)_=_i(_),m--;for(;p--;){if(E===_||_!==null&&E===_.alternate)break t;E=_i(E),_=_i(_)}E=null}else E=null;g!==null&&Jp(c,h,g,E,!1),v!==null&&S!==null&&Jp(c,S,v,E,!0)}}e:{if(h=u?Ri(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=ZS;else if(Wp(h))if(wv)I=rT;else{I=tT;var N=eT}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=nT);if(I&&(I=I(t,u))){yv(c,I,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Yc(h,"number",h.value)}switch(N=u?Ri(u):window,t){case"focusin":(Wp(N)||N.contentEditable==="true")&&(Ii=N,ad=u,Hs=null);break;case"focusout":Hs=ad=Ii=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,Yp(c,n,d);break;case"selectionchange":if(oT)break;case"keydown":case"keyup":Yp(c,n,d)}var b;if(Ah)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ti?gv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(_v&&n.locale!=="ko"&&(Ti||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ti&&(b=mv()):(sr=d,xh="value"in sr?sr.value:sr.textContent,Ti=!0)),N=nl(u,P),0<N.length&&(P=new Bp(P,t,null,n,d),c.push({event:P,listeners:N}),b?P.data=b:(b=vv(n),b!==null&&(P.data=b)))),(b=KS?YS(t,n):QS(t,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(d=new Bp("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=b))}Pv(c,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oo(t,n),s!=null&&r.unshift(po(t,s,i)),s=oo(t,e),s!=null&&r.push(po(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=oo(n,s),l!=null&&o.unshift(po(n,l,a))):i||(l=oo(n,s),l!=null&&o.push(po(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function Zp(t){return(typeof t=="string"?t:""+t).replace(cT,`
`).replace(dT,"")}function _a(t,e,n){if(e=Zp(e),Zp(t)!==e&&n)throw Error(R(425))}function rl(){}var ud=null,cd=null;function dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,hT=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,fT=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(pT)}:hd;function pT(t){setTimeout(function(){throw t})}function ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);uo(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),un="__reactFiber$"+ls,mo="__reactProps$"+ls,Ln="__reactContainer$"+ls,fd="__reactEvents$"+ls,mT="__reactListeners$"+ls,_T="__reactHandles$"+ls;function Br(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[un])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[un]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function su(t){return t[mo]||null}var pd=[],xi=-1;function Nr(t){return{current:t}}function le(t){0>xi||(t.current=pd[xi],pd[xi]=null,xi--)}function ie(t,e){xi++,pd[xi]=t.current,t.current=e}var Cr={},Ze=Nr(Cr),gt=Nr(!1),Kr=Cr;function Yi(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function il(){le(gt),le(Ze)}function nm(t,e,n){if(Ze.current!==Cr)throw Error(R(168));ie(Ze,e),ie(gt,n)}function bv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,eS(t)||"Unknown",i));return me({},n,r)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,Kr=Ze.current,ie(Ze,t),ie(gt,gt.current),!0}function rm(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=bv(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,le(gt),le(Ze),ie(Ze,t)):le(gt),ie(gt,n)}var Cn=null,ou=!1,lc=!1;function Ov(t){Cn===null?Cn=[t]:Cn.push(t)}function gT(t){ou=!0,Ov(t)}function Pr(){if(!lc&&Cn!==null){lc=!0;var t=0,e=ee;try{var n=Cn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,ou=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),iv(Th,Pr),i}finally{ee=e,lc=!1}}return null}var Ni=[],Pi=0,ol=null,al=0,Ot=[],Dt=0,Yr=null,Sn=1,Tn="";function Lr(t,e){Ni[Pi++]=al,Ni[Pi++]=ol,ol=t,al=e}function Dv(t,e,n){Ot[Dt++]=Sn,Ot[Dt++]=Tn,Ot[Dt++]=Yr,Yr=t;var r=Sn;t=Tn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Jt(e)+i|n<<i|r,Tn=s+t}else Sn=1<<s|n<<i|r,Tn=t}function Oh(t){t.return!==null&&(Lr(t,1),Dv(t,1,0))}function Dh(t){for(;t===ol;)ol=Ni[--Pi],Ni[Pi]=null,al=Ni[--Pi],Ni[Pi]=null;for(;t===Yr;)Yr=Ot[--Dt],Ot[Dt]=null,Tn=Ot[--Dt],Ot[Dt]=null,Sn=Ot[--Dt],Ot[Dt]=null}var kt=null,St=null,he=!1,qt=null;function Lv(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,St=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Sn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,St=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _d(t){if(he){var e=St;if(e){var n=e;if(!im(t,e)){if(md(t))throw Error(R(418));e=dr(n.nextSibling);var r=kt;e&&im(t,e)?Lv(r,n):(t.flags=t.flags&-4097|2,he=!1,kt=t)}}else{if(md(t))throw Error(R(418));t.flags=t.flags&-4097|2,he=!1,kt=t}}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function ga(t){if(t!==kt)return!1;if(!he)return sm(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dd(t.type,t.memoizedProps)),e&&(e=St)){if(md(t))throw Mv(),Error(R(418));for(;e;)Lv(t,e),e=dr(e.nextSibling)}if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=kt?dr(t.stateNode.nextSibling):null;return!0}function Mv(){for(var t=St;t;)t=dr(t.nextSibling)}function Qi(){St=kt=null,he=!1}function Lh(t){qt===null?qt=[t]:qt.push(t)}var vT=Vn.ReactCurrentBatchConfig;function Ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function va(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function Fv(t){function e(_,p){if(t){var m=_.deletions;m===null?(_.deletions=[p],_.flags|=16):m.push(p)}}function n(_,p){if(!t)return null;for(;p!==null;)e(_,p),p=p.sibling;return null}function r(_,p){for(_=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function i(_,p){return _=mr(_,p),_.index=0,_.sibling=null,_}function s(_,p,m){return _.index=m,t?(m=_.alternate,m!==null?(m=m.index,m<p?(_.flags|=2,p):m):(_.flags|=2,p)):(_.flags|=1048576,p)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,p,m,w){return p===null||p.tag!==6?(p=mc(m,_.mode,w),p.return=_,p):(p=i(p,m),p.return=_,p)}function l(_,p,m,w){var I=m.type;return I===Si?d(_,p,m.props.children,w,m.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Yn&&om(I)===p.type)?(w=i(p,m.props),w.ref=Ts(_,p,m),w.return=_,w):(w=za(m.type,m.key,m.props,null,_.mode,w),w.ref=Ts(_,p,m),w.return=_,w)}function u(_,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=_c(m,_.mode,w),p.return=_,p):(p=i(p,m.children||[]),p.return=_,p)}function d(_,p,m,w,I){return p===null||p.tag!==7?(p=qr(m,_.mode,w,I),p.return=_,p):(p=i(p,m),p.return=_,p)}function c(_,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=mc(""+p,_.mode,m),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case aa:return m=za(p.type,p.key,p.props,null,_.mode,m),m.ref=Ts(_,null,p),m.return=_,m;case Ci:return p=_c(p,_.mode,m),p.return=_,p;case Yn:var w=p._init;return c(_,w(p._payload),m)}if(Ls(p)||ys(p))return p=qr(p,_.mode,m,null),p.return=_,p;va(_,p)}return null}function h(_,p,m,w){var I=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(_,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case aa:return m.key===I?l(_,p,m,w):null;case Ci:return m.key===I?u(_,p,m,w):null;case Yn:return I=m._init,h(_,p,I(m._payload),w)}if(Ls(m)||ys(m))return I!==null?null:d(_,p,m,w,null);va(_,m)}return null}function g(_,p,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return _=_.get(m)||null,a(p,_,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case aa:return _=_.get(w.key===null?m:w.key)||null,l(p,_,w,I);case Ci:return _=_.get(w.key===null?m:w.key)||null,u(p,_,w,I);case Yn:var N=w._init;return g(_,p,m,N(w._payload),I)}if(Ls(w)||ys(w))return _=_.get(m)||null,d(p,_,w,I,null);va(p,w)}return null}function v(_,p,m,w){for(var I=null,N=null,b=p,P=p=0,H=null;b!==null&&P<m.length;P++){b.index>P?(H=b,b=null):H=b.sibling;var j=h(_,b,m[P],w);if(j===null){b===null&&(b=H);break}t&&b&&j.alternate===null&&e(_,b),p=s(j,p,P),N===null?I=j:N.sibling=j,N=j,b=H}if(P===m.length)return n(_,b),he&&Lr(_,P),I;if(b===null){for(;P<m.length;P++)b=c(_,m[P],w),b!==null&&(p=s(b,p,P),N===null?I=b:N.sibling=b,N=b);return he&&Lr(_,P),I}for(b=r(_,b);P<m.length;P++)H=g(b,_,P,m[P],w),H!==null&&(t&&H.alternate!==null&&b.delete(H.key===null?P:H.key),p=s(H,p,P),N===null?I=H:N.sibling=H,N=H);return t&&b.forEach(function(Oe){return e(_,Oe)}),he&&Lr(_,P),I}function E(_,p,m,w){var I=ys(m);if(typeof I!="function")throw Error(R(150));if(m=I.call(m),m==null)throw Error(R(151));for(var N=I=null,b=p,P=p=0,H=null,j=m.next();b!==null&&!j.done;P++,j=m.next()){b.index>P?(H=b,b=null):H=b.sibling;var Oe=h(_,b,j.value,w);if(Oe===null){b===null&&(b=H);break}t&&b&&Oe.alternate===null&&e(_,b),p=s(Oe,p,P),N===null?I=Oe:N.sibling=Oe,N=Oe,b=H}if(j.done)return n(_,b),he&&Lr(_,P),I;if(b===null){for(;!j.done;P++,j=m.next())j=c(_,j.value,w),j!==null&&(p=s(j,p,P),N===null?I=j:N.sibling=j,N=j);return he&&Lr(_,P),I}for(b=r(_,b);!j.done;P++,j=m.next())j=g(b,_,P,j.value,w),j!==null&&(t&&j.alternate!==null&&b.delete(j.key===null?P:j.key),p=s(j,p,P),N===null?I=j:N.sibling=j,N=j);return t&&b.forEach(function(W){return e(_,W)}),he&&Lr(_,P),I}function S(_,p,m,w){if(typeof m=="object"&&m!==null&&m.type===Si&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case aa:e:{for(var I=m.key,N=p;N!==null;){if(N.key===I){if(I=m.type,I===Si){if(N.tag===7){n(_,N.sibling),p=i(N,m.props.children),p.return=_,_=p;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Yn&&om(I)===N.type){n(_,N.sibling),p=i(N,m.props),p.ref=Ts(_,N,m),p.return=_,_=p;break e}n(_,N);break}else e(_,N);N=N.sibling}m.type===Si?(p=qr(m.props.children,_.mode,w,m.key),p.return=_,_=p):(w=za(m.type,m.key,m.props,null,_.mode,w),w.ref=Ts(_,p,m),w.return=_,_=w)}return o(_);case Ci:e:{for(N=m.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(_,p.sibling),p=i(p,m.children||[]),p.return=_,_=p;break e}else{n(_,p);break}else e(_,p);p=p.sibling}p=_c(m,_.mode,w),p.return=_,_=p}return o(_);case Yn:return N=m._init,S(_,p,N(m._payload),w)}if(Ls(m))return v(_,p,m,w);if(ys(m))return E(_,p,m,w);va(_,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(_,p.sibling),p=i(p,m),p.return=_,_=p):(n(_,p),p=mc(m,_.mode,w),p.return=_,_=p),o(_)):n(_,p)}return S}var Xi=Fv(!0),Uv=Fv(!1),ll=Nr(null),ul=null,Ai=null,Mh=null;function Fh(){Mh=Ai=ul=null}function Uh(t){var e=ll.current;le(ll),t._currentValue=e}function gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){ul=t,Mh=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Mh!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(ul===null)throw Error(R(308));Ai=t,ul.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var zr=null;function jh(t){zr===null?zr=[t]:zr.push(t)}function jv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,jh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function La(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ih(t,n)}}function am(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,E=a;switch(h=e,g=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){c=v.call(g,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,h=typeof v=="function"?v.call(g,c,h):v,h==null)break e;c=me({},c,h);break e;case 2:Qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=c}}function lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Vo={},pn=Nr(Vo),_o=Nr(Vo),go=Nr(Vo);function Vr(t){if(t===Vo)throw Error(R(174));return t}function zh(t,e){switch(ie(go,e),ie(_o,t),ie(pn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xc(e,t)}le(pn),ie(pn,e)}function Ji(){le(pn),le(_o),le(go)}function zv(t){Vr(go.current);var e=Vr(pn.current),n=Xc(e,t.type);e!==n&&(ie(_o,t),ie(pn,n))}function Vh(t){_o.current===t&&(le(pn),le(_o))}var fe=Nr(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function $h(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var Ma=Vn.ReactCurrentDispatcher,cc=Vn.ReactCurrentBatchConfig,Qr=0,pe=null,Ne=null,Ue=null,hl=!1,qs=!1,vo=0,yT=0;function Ye(){throw Error(R(321))}function Wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Hh(t,e,n,r,i,s){if(Qr=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ma.current=t===null||t.memoizedState===null?ST:TT,t=n(r,i),qs){s=0;do{if(qs=!1,vo=0,25<=s)throw Error(R(301));s+=1,Ue=Ne=null,e.updateQueue=null,Ma.current=IT,t=n(r,i)}while(qs)}if(Ma.current=fl,e=Ne!==null&&Ne.next!==null,Qr=0,Ue=Ne=pe=null,hl=!1,e)throw Error(R(300));return t}function qh(){var t=vo!==0;return vo=0,t}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?pe.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ut(){if(Ne===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Ue===null?pe.memoizedState:Ue.next;if(e!==null)Ue=e,Ne=t;else{if(t===null)throw Error(R(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ue===null?pe.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function yo(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Qr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,pe.lanes|=d,Xr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tn(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Vv(){}function $v(t,e){var n=pe,r=Ut(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,Gh(qv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,wo(9,Hv.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(R(349));Qr&30||Wv(n,e,i)}return i}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hv(t,e,n,r){e.value=n,e.getSnapshot=r,Gv(e)&&Kv(t)}function qv(t,e,n){return n(function(){Gv(e)&&Kv(t)})}function Gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function Kv(t){var e=Mn(t,1);e!==null&&Zt(e,t,1,-1)}function um(t){var e=on();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=CT.bind(null,pe,t),[e.memoizedState,t]}function wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yv(){return Ut().memoizedState}function Fa(t,e,n,r){var i=on();pe.flags|=t,i.memoizedState=wo(1|e,n,void 0,r===void 0?null:r)}function au(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Wh(r,o.deps)){i.memoizedState=wo(e,n,s,r);return}}pe.flags|=t,i.memoizedState=wo(1|e,n,s,r)}function cm(t,e){return Fa(8390656,8,t,e)}function Gh(t,e){return au(2048,8,t,e)}function Qv(t,e){return au(4,2,t,e)}function Xv(t,e){return au(4,4,t,e)}function Jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,Jv.bind(null,e,t),n)}function Kh(){}function ey(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ty(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ny(t,e,n){return Qr&21?(tn(n,e)||(n=av(),pe.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function wT(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=cc.transition;cc.transition={};try{t(!1),e()}finally{ee=n,cc.transition=r}}function ry(){return Ut().memoizedState}function ET(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iy(t))sy(e,n);else if(n=jv(t,e,n,r),n!==null){var i=at();Zt(n,t,r,i),oy(n,e,r)}}function CT(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iy(t))sy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var l=e.interleaved;l===null?(i.next=i,jh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=jv(t,e,i,r),n!==null&&(i=at(),Zt(n,t,r,i),oy(n,e,r))}}function iy(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function sy(t,e){qs=hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function oy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ih(t,n)}}var fl={readContext:Ft,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},ST={readContext:Ft,useCallback:function(t,e){return on().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,Jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=on();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=on();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ET.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=on();return t={current:t},e.memoizedState=t},useState:um,useDebugValue:Kh,useDeferredValue:function(t){return on().memoizedState=t},useTransition:function(){var t=um(!1),e=t[0];return t=wT.bind(null,t[1]),on().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=on();if(he){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),ze===null)throw Error(R(349));Qr&30||Wv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cm(qv.bind(null,r,s,t),[t]),r.flags|=2048,wo(9,Hv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=on(),e=ze.identifierPrefix;if(he){var n=Tn,r=Sn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TT={readContext:Ft,useCallback:ey,useContext:Ft,useEffect:Gh,useImperativeHandle:Zv,useInsertionEffect:Qv,useLayoutEffect:Xv,useMemo:ty,useReducer:dc,useRef:Yv,useState:function(){return dc(yo)},useDebugValue:Kh,useDeferredValue:function(t){var e=Ut();return ny(e,Ne.memoizedState,t)},useTransition:function(){var t=dc(yo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:$v,useId:ry,unstable_isNewReconciler:!1},IT={readContext:Ft,useCallback:ey,useContext:Ft,useEffect:Gh,useImperativeHandle:Zv,useInsertionEffect:Qv,useLayoutEffect:Xv,useMemo:ty,useReducer:hc,useRef:Yv,useState:function(){return hc(yo)},useDebugValue:Kh,useDeferredValue:function(t){var e=Ut();return Ne===null?e.memoizedState=t:ny(e,Ne.memoizedState,t)},useTransition:function(){var t=hc(yo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:$v,useId:ry,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=pr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Zt(e,t,i,r),La(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=pr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Zt(e,t,i,r),La(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=pr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=hr(t,i,r),e!==null&&(Zt(e,t,r,n),La(e,t,r))}};function dm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ho(n,r)||!ho(i,s):!0}function ay(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=vt(e)?Kr:Ze.current,r=e.contextTypes,s=(r=r!=null)?Yi(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=vt(e)?Kr:Ze.current,i.context=Yi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lu.enqueueReplaceState(i,i.state,null),cl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zi(t,e){try{var n="",r=e;do n+=ZC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kT=typeof WeakMap=="function"?WeakMap:Map;function ly(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ml||(ml=!0,Pd=r),wd(t,e)},n}function uy(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wd(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BT.bind(null,t,e,n),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var RT=Vn.ReactCurrentOwner,mt=!1;function rt(t,e,n,r){e.child=t===null?Uv(e,null,n,r):Xi(e,t.child,n,r)}function _m(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=Hh(t,e,n,r,s,i),n=qh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(he&&n&&Oh(e),e.flags|=1,rt(t,e,r,i),e.child)}function gm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cy(t,e,s,r,i)):(t=za(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function cy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ho(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return Ed(t,e,n,r,i)}function dy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Oi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Oi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Oi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Oi,Ct),Ct|=r;return rt(t,e,i,n),e.child}function hy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,r,i){var s=vt(n)?Kr:Ze.current;return s=Yi(e,s),zi(e,i),n=Hh(t,e,n,r,s,i),r=qh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(he&&r&&Oh(e),e.flags|=1,rt(t,e,n,i),e.child)}function vm(t,e,n,r,i){if(vt(n)){var s=!0;sl(e)}else s=!1;if(zi(e,i),e.stateNode===null)Ua(t,e),ay(e,n,r),yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=vt(n)?Kr:Ze.current,u=Yi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&hm(e,o,r,u),Qn=!1;var h=e.memoizedState;o.state=h,cl(e,r,o,i),l=e.memoizedState,a!==r||h!==l||gt.current||Qn?(typeof d=="function"&&(vd(e,n,d,r),l=e.memoizedState),(a=Qn||dm(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wt(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=vt(n)?Kr:Ze.current,l=Yi(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&hm(e,o,r,l),Qn=!1,h=e.memoizedState,o.state=h,cl(e,r,o,i);var v=e.memoizedState;a!==c||h!==v||gt.current||Qn?(typeof g=="function"&&(vd(e,n,g,r),v=e.memoizedState),(u=Qn||dm(e,n,u,r,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Cd(t,e,n,r,s,i)}function Cd(t,e,n,r,i,s){hy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rm(e,n,!1),Fn(t,e,s);r=e.stateNode,RT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,a,s)):rt(t,e,a,s),e.memoizedState=r.state,i&&rm(e,n,!0),e.child}function fy(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),zh(t,e.containerInfo)}function ym(t,e,n,r,i){return Qi(),Lh(i),e.flags|=256,rt(t,e,n,r),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function py(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(fe,i&1),t===null)return _d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=du(o,r,0,null),t=qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Td(n),e.memoizedState=Sd,t):Yh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=mr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sd,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yh(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,r){return r!==null&&Lh(r),Xi(e,t.child,null,n),t=Yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fc(Error(R(422))),ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=du({mode:"visible",children:r.children},i,0,null),s=qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=Sd,s);if(!(e.mode&1))return ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=fc(s,r,void 0),ya(t,e,o,r)}if(a=(o&t.childLanes)!==0,mt||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Zt(r,t,i,-1))}return tf(),r=fc(Error(R(421))),ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=dr(i.nextSibling),kt=e,he=!0,qt=null,t!==null&&(Ot[Dt++]=Sn,Ot[Dt++]=Tn,Ot[Dt++]=Yr,Sn=t.id,Tn=t.overflow,Yr=e),e=Yh(e,r.children),e.flags|=4096,e)}function wm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gd(t.return,e,n)}function pc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function my(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n,e);else if(t.tag===19)wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pc(e,!0,n,null,s);break;case"together":pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NT(t,e,n){switch(e.tag){case 3:fy(e),Qi();break;case 5:zv(e);break;case 1:vt(e.type)&&sl(e);break;case 4:zh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(ll,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?py(t,e,n):(ie(fe,fe.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);ie(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return my(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,dy(t,e,n)}return Fn(t,e,n)}var _y,Id,gy,vy;_y=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};gy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vr(pn.current);var s=null;switch(n){case"input":i=Gc(t,i),r=Gc(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Qc(t,i),r=Qc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rl)}Jc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(io.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Is(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PT(t,e,n){var r=e.pendingProps;switch(Dh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return vt(e.type)&&il(),Qe(e),null;case 3:return r=e.stateNode,Ji(),le(gt),le(Ze),$h(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Od(qt),qt=null))),Id(t,e),Qe(e),null;case 5:Vh(e);var i=Vr(go.current);if(n=e.type,t!==null&&e.stateNode!=null)gy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return Qe(e),null}if(t=Vr(pn.current),ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[mo]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Fs.length;i++)se(Fs[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Np(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Ap(r,s),se("invalid",r)}Jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&_a(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_a(r.textContent,a,t),i=["children",""+a]):io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":la(r),Pp(r,s,!0);break;case"textarea":la(r),bp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[mo]=r,_y(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fs.length;i++)se(Fs[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":Np(t,r),i=Gc(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),se("invalid",t);break;case"textarea":Ap(t,r),i=Qc(t,r),se("invalid",t);break;default:i=r}Jc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",t):l!=null&&yh(t,s,l,o))}switch(n){case"input":la(t),Pp(t,r,!1);break;case"textarea":la(t),bp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)vy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Vr(go.current),Vr(pn.current),ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:_a(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return Qe(e),null;case 13:if(le(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&St!==null&&e.mode&1&&!(e.flags&128))Mv(),Qi(),e.flags|=98560,s=!1;else if(s=ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[un]=e}else Qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else qt!==null&&(Od(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?be===0&&(be=3):tf())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Ji(),Id(t,e),t===null&&fo(e.stateNode.containerInfo),Qe(e),null;case 10:return Uh(e.type._context),Qe(e),null;case 17:return vt(e.type)&&il(),Qe(e),null;case 19:if(le(fe),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Is(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,Is(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>es&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return Qe(e),null}else 2*Ce()-s.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=fe.current,ie(fe,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return ef(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function AT(t,e){switch(Dh(e),e.tag){case 1:return vt(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ji(),le(gt),le(Ze),$h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vh(e),null;case 13:if(le(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(fe),null;case 4:return Ji(),null;case 10:return Uh(e.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var wa=!1,Xe=!1,bT=typeof WeakSet=="function"?WeakSet:Set,M=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function kd(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Em=!1;function OT(t,e){if(ud=el,t=Sv(),bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},el=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,S=v.memoizedState,_=e.stateNode,p=_.getSnapshotBeforeUpdate(e.elementType===e.type?E:Wt(e.type,E),S);_.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ve(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Em,Em=!1,v}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kd(e,n,s)}i=i.next}while(i!==r)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yy(t){var e=t.alternate;e!==null&&(t.alternate=null,yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[mo],delete e[fd],delete e[mT],delete e[_T])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wy(t){return t.tag===5||t.tag===3||t.tag===4}function Cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}function Nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}var He=null,Ht=!1;function qn(t,e,n){for(n=n.child;n!==null;)Ey(t,e,n),n=n.sibling}function Ey(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:Xe||bi(n,e);case 6:var r=He,i=Ht;He=null,qn(t,e,n),He=r,Ht=i,He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?ac(t.parentNode,n):t.nodeType===1&&ac(t,n),uo(t)):ac(He,n.stateNode));break;case 4:r=He,i=Ht,He=n.stateNode.containerInfo,Ht=!0,qn(t,e,n),He=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kd(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!Xe&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,qn(t,e,n),Xe=r):qn(t,e,n);break;default:qn(t,e,n)}}function Sm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bT),e.forEach(function(r){var i=VT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Ht=!1;break e;case 3:He=a.stateNode.containerInfo,Ht=!0;break e;case 4:He=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(He===null)throw Error(R(160));Ey(s,o,i),He=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cy(e,t),e=e.sibling}function Cy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),sn(t),r&4){try{Gs(3,t,t.return),uu(3,t)}catch(E){ve(t,t.return,E)}try{Gs(5,t,t.return)}catch(E){ve(t,t.return,E)}}break;case 1:Vt(e,t),sn(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if(Vt(e,t),sn(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var i=t.stateNode;try{so(i,"")}catch(E){ve(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wg(i,s),Zc(a,o);var u=Zc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?Yg(i,c):d==="dangerouslySetInnerHTML"?Gg(i,c):d==="children"?so(i,c):yh(i,d,c,u)}switch(a){case"input":Kc(i,s);break;case"textarea":Hg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Fi(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[mo]=s}catch(E){ve(t,t.return,E)}}break;case 6:if(Vt(e,t),sn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){ve(t,t.return,E)}}break;case 3:if(Vt(e,t),sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(e.containerInfo)}catch(E){ve(t,t.return,E)}break;case 4:Vt(e,t),sn(t);break;case 13:Vt(e,t),sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jh=Ce())),r&4&&Sm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(u=Xe)||d,Vt(e,t),Xe=u):Vt(e,t),sn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(M=t,d=t.child;d!==null;){for(c=M=d;M!==null;){switch(h=M,g=h.child,h.tag){case 0:case 11:case 14:case 15:Gs(4,h,h.return);break;case 1:bi(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){ve(r,n,E)}}break;case 5:bi(h,h.return);break;case 22:if(h.memoizedState!==null){Im(c);continue}}g!==null?(g.return=h,M=g):Im(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kg("display",o))}catch(E){ve(t,t.return,E)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(E){ve(t,t.return,E)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Vt(e,t),sn(t),r&4&&Sm(t);break;case 21:break;default:Vt(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wy(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(so(i,""),r.flags&=-33);var s=Cm(t);Nd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Cm(t);xd(t,a,o);break;default:throw Error(R(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DT(t,e,n){M=t,Sy(t)}function Sy(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Xe;a=wa;var u=Xe;if(wa=o,(Xe=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?km(i):l!==null?(l.return=o,M=l):km(i);for(;s!==null;)M=s,Sy(s),s=s.sibling;M=i,wa=a,Xe=u}Tm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Tm(t)}}function Tm(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&uo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Xe||e.flags&512&&Rd(e)}catch(h){ve(e,e.return,h)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Im(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function km(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{Rd(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{Rd(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var LT=Math.ceil,pl=Vn.ReactCurrentDispatcher,Qh=Vn.ReactCurrentOwner,Mt=Vn.ReactCurrentBatchConfig,X=0,ze=null,Se=null,qe=0,Ct=0,Oi=Nr(0),be=0,Eo=null,Xr=0,cu=0,Xh=0,Ks=null,pt=null,Jh=0,es=1/0,En=null,ml=!1,Pd=null,fr=null,Ea=!1,or=null,_l=0,Ys=0,Ad=null,ja=-1,Ba=0;function at(){return X&6?Ce():ja!==-1?ja:ja=Ce()}function pr(t){return t.mode&1?X&2&&qe!==0?qe&-qe:vT.transition!==null?(Ba===0&&(Ba=av()),Ba):(t=ee,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function Zt(t,e,n,r){if(50<Ys)throw Ys=0,Ad=null,Error(R(185));jo(t,n,r),(!(X&2)||t!==ze)&&(t===ze&&(!(X&2)&&(cu|=n),be===4&&Jn(t,qe)),yt(t,r),n===1&&X===0&&!(e.mode&1)&&(es=Ce()+500,ou&&Pr()))}function yt(t,e){var n=t.callbackNode;vS(t,e);var r=Za(t,t===ze?qe:0);if(r===0)n!==null&&Lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lp(n),e===1)t.tag===0?gT(Rm.bind(null,t)):Ov(Rm.bind(null,t)),fT(function(){!(X&6)&&Pr()}),n=null;else{switch(lv(r)){case 1:n=Th;break;case 4:n=sv;break;case 16:n=Ja;break;case 536870912:n=ov;break;default:n=Ja}n=Ay(n,Ty.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ty(t,e){if(ja=-1,Ba=0,X&6)throw Error(R(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=Za(t,t===ze?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gl(t,r);else{e=r;var i=X;X|=2;var s=ky();(ze!==t||qe!==e)&&(En=null,es=Ce()+500,Hr(t,e));do try{UT();break}catch(a){Iy(t,a)}while(!0);Fh(),pl.current=s,X=i,Se!==null?e=0:(ze=null,qe=0,e=be)}if(e!==0){if(e===2&&(i=id(t),i!==0&&(r=i,e=bd(t,i))),e===1)throw n=Eo,Hr(t,0),Jn(t,r),yt(t,Ce()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!MT(i)&&(e=gl(t,r),e===2&&(s=id(t),s!==0&&(r=s,e=bd(t,s))),e===1))throw n=Eo,Hr(t,0),Jn(t,r),yt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Mr(t,pt,En);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=Jh+500-Ce(),10<e)){if(Za(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hd(Mr.bind(null,t,pt,En),e);break}Mr(t,pt,En);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LT(r/1960))-r,10<r){t.timeoutHandle=hd(Mr.bind(null,t,pt,En),r);break}Mr(t,pt,En);break;case 5:Mr(t,pt,En);break;default:throw Error(R(329))}}}return yt(t,Ce()),t.callbackNode===n?Ty.bind(null,t):null}function bd(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=pt,pt=n,e!==null&&Od(e)),t}function Od(t){pt===null?pt=t:pt.push.apply(pt,t)}function MT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~Xh,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Rm(t){if(X&6)throw Error(R(327));Vi();var e=Za(t,0);if(!(e&1))return yt(t,Ce()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var r=id(t);r!==0&&(e=r,n=bd(t,r))}if(n===1)throw n=Eo,Hr(t,0),Jn(t,e),yt(t,Ce()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,pt,En),yt(t,Ce()),null}function Zh(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(es=Ce()+500,ou&&Pr())}}function Jr(t){or!==null&&or.tag===0&&!(X&6)&&Vi();var e=X;X|=1;var n=Mt.transition,r=ee;try{if(Mt.transition=null,ee=1,t)return t()}finally{ee=r,Mt.transition=n,X=e,!(X&6)&&Pr()}}function ef(){Ct=Oi.current,le(Oi)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hT(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Dh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Ji(),le(gt),le(Ze),$h();break;case 5:Vh(r);break;case 4:Ji();break;case 13:le(fe);break;case 19:le(fe);break;case 10:Uh(r.type._context);break;case 22:case 23:ef()}n=n.return}if(ze=t,Se=t=mr(t.current,null),qe=Ct=e,be=0,Eo=null,Xh=cu=Xr=0,pt=Ks=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return t}function Iy(t,e){do{var n=Se;try{if(Fh(),Ma.current=fl,hl){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(Qr=0,Ue=Ne=pe=null,qs=!1,vo=0,Qh.current=null,n===null||n.return===null){be=1,Eo=e,Se=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=pm(o);if(g!==null){g.flags&=-257,mm(g,o,a,s,e),g.mode&1&&fm(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){fm(s,u,e),tf();break e}l=Error(R(426))}}else if(he&&a.mode&1){var S=pm(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),mm(S,o,a,s,e),Lh(Zi(l,a));break e}}s=l=Zi(l,a),be!==4&&(be=2),Ks===null?Ks=[s]:Ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=ly(s,l,e);am(s,_);break e;case 1:a=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fr===null||!fr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=uy(s,a,e);am(s,w);break e}}s=s.return}while(s!==null)}xy(n)}catch(I){e=I,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function ky(){var t=pl.current;return pl.current=fl,t===null?fl:t}function tf(){(be===0||be===3||be===2)&&(be=4),ze===null||!(Xr&268435455)&&!(cu&268435455)||Jn(ze,qe)}function gl(t,e){var n=X;X|=2;var r=ky();(ze!==t||qe!==e)&&(En=null,Hr(t,e));do try{FT();break}catch(i){Iy(t,i)}while(!0);if(Fh(),X=n,pl.current=r,Se!==null)throw Error(R(261));return ze=null,qe=0,be}function FT(){for(;Se!==null;)Ry(Se)}function UT(){for(;Se!==null&&!uS();)Ry(Se)}function Ry(t){var e=Py(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?xy(t):Se=e,Qh.current=null}function xy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AT(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Se=null;return}}else if(n=PT(n,e,Ct),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);be===0&&(be=5)}function Mr(t,e,n){var r=ee,i=Mt.transition;try{Mt.transition=null,ee=1,jT(t,e,n,r)}finally{Mt.transition=i,ee=r}return null}function jT(t,e,n,r){do Vi();while(or!==null);if(X&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yS(t,s),t===ze&&(Se=ze=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,Ay(Ja,function(){return Vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ee;ee=1;var a=X;X|=4,Qh.current=null,OT(t,n),Cy(n,t),sT(cd),el=!!ud,cd=ud=null,t.current=n,DT(n),cS(),X=a,ee=o,Mt.transition=s}else t.current=n;if(Ea&&(Ea=!1,or=t,_l=i),s=t.pendingLanes,s===0&&(fr=null),fS(n.stateNode),yt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ml)throw ml=!1,t=Pd,Pd=null,t;return _l&1&&t.tag!==0&&Vi(),s=t.pendingLanes,s&1?t===Ad?Ys++:(Ys=0,Ad=t):Ys=0,Pr(),null}function Vi(){if(or!==null){var t=lv(_l),e=Mt.transition,n=ee;try{if(Mt.transition=null,ee=16>t?16:t,or===null)var r=!1;else{if(t=or,or=null,_l=0,X&6)throw Error(R(331));var i=X;for(X|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Gs(8,d,s)}var c=d.child;if(c!==null)c.return=d,M=c;else for(;M!==null;){d=M;var h=d.sibling,g=d.return;if(yy(d),d===u){M=null;break}if(h!==null){h.return=g,M=h;break}M=g}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var S=E.sibling;E.sibling=null,E=S}while(E!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,M=_;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,M=m;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uu(9,a)}}catch(I){ve(a,a.return,I)}if(a===o){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(X=i,Pr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(tu,t)}catch{}r=!0}return r}finally{ee=n,Mt.transition=e}}return!1}function xm(t,e,n){e=Zi(n,e),e=ly(t,e,1),t=hr(t,e,1),e=at(),t!==null&&(jo(t,1,e),yt(t,e))}function ve(t,e,n){if(t.tag===3)xm(t,t,n);else for(;e!==null;){if(e.tag===3){xm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=Zi(n,t),t=uy(e,t,1),e=hr(e,t,1),t=at(),e!==null&&(jo(e,1,t),yt(e,t));break}}e=e.return}}function BT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(qe&n)===n&&(be===4||be===3&&(qe&130023424)===qe&&500>Ce()-Jh?Hr(t,0):Xh|=n),yt(t,e)}function Ny(t,e){e===0&&(t.mode&1?(e=da,da<<=1,!(da&130023424)&&(da=4194304)):e=1);var n=at();t=Mn(t,e),t!==null&&(jo(t,e,n),yt(t,n))}function zT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ny(t,n)}function VT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Ny(t,n)}var Py;Py=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,NT(t,e,n);mt=!!(t.flags&131072)}else mt=!1,he&&e.flags&1048576&&Dv(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ua(t,e),t=e.pendingProps;var i=Yi(e,Ze.current);zi(e,n),i=Hh(null,e,r,t,i,n);var s=qh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bh(e),i.updater=lu,e.stateNode=i,i._reactInternals=e,yd(e,r,t,n),e=Cd(null,e,r,!0,s,n)):(e.tag=0,he&&s&&Oh(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WT(r),t=Wt(r,t),i){case 0:e=Ed(null,e,r,t,n);break e;case 1:e=vm(null,e,r,t,n);break e;case 11:e=_m(null,e,r,t,n);break e;case 14:e=gm(null,e,r,Wt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),vm(t,e,r,i,n);case 3:e:{if(fy(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bv(t,e),cl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zi(Error(R(423)),e),e=ym(t,e,r,n,i);break e}else if(r!==i){i=Zi(Error(R(424)),e),e=ym(t,e,r,n,i);break e}else for(St=dr(e.stateNode.containerInfo.firstChild),kt=e,he=!0,qt=null,n=Uv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){e=Fn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return zv(e),t===null&&_d(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dd(r,i)?o=null:s!==null&&dd(r,s)&&(e.flags|=32),hy(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&_d(e),null;case 13:return py(t,e,n);case 4:return zh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),_m(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(ll,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!gt.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Pn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=Ft(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),gm(t,e,r,i,n);case 15:return cy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Ua(t,e),e.tag=1,vt(r)?(t=!0,sl(e)):t=!1,zi(e,n),ay(e,r,i),yd(e,r,i,n),Cd(null,e,r,!0,t,n);case 19:return my(t,e,n);case 22:return dy(t,e,n)}throw Error(R(156,e.tag))};function Ay(t,e){return iv(t,e)}function $T(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new $T(t,e,n,r)}function nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WT(t){if(typeof t=="function")return nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eh)return 11;if(t===Ch)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Si:return qr(n.children,i,s,e);case wh:o=8,i|=8;break;case $c:return t=Lt(12,n,e,i|2),t.elementType=$c,t.lanes=s,t;case Wc:return t=Lt(13,n,e,i),t.elementType=Wc,t.lanes=s,t;case Hc:return t=Lt(19,n,e,i),t.elementType=Hc,t.lanes=s,t;case zg:return du(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jg:o=10;break e;case Bg:o=9;break e;case Eh:o=11;break e;case Ch:o=14;break e;case Yn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function du(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=zg,t.lanes=n,t.stateNode={isHidden:!1},t}function mc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qu(0),this.expirationTimes=Qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rf(t,e,n,r,i,s,o,a,l){return t=new HT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(s),t}function qT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function by(t){if(!t)return Cr;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(vt(n))return bv(t,n,e)}return e}function Oy(t,e,n,r,i,s,o,a,l){return t=rf(n,r,!0,t,i,s,o,a,l),t.context=by(null),n=t.current,r=at(),i=pr(n),s=Pn(r,i),s.callback=e??null,hr(n,s,i),t.current.lanes=i,jo(t,i,r),yt(t,r),t}function hu(t,e,n,r){var i=e.current,s=at(),o=pr(i);return n=by(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(i,e,o),t!==null&&(Zt(t,i,o,s),La(t,i,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sf(t,e){Nm(t,e),(t=t.alternate)&&Nm(t,e)}function GT(){return null}var Dy=typeof reportError=="function"?reportError:function(t){console.error(t)};function of(t){this._internalRoot=t}fu.prototype.render=of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));hu(t,e,null,null)};fu.prototype.unmount=of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){hu(null,t,null,null)}),e[Ln]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&fv(t)}};function af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function KT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vl(o);s.call(u)}}var o=Oy(e,r,t,0,null,!1,!1,"",Pm);return t._reactRootContainer=o,t[Ln]=o.current,fo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vl(l);a.call(u)}}var l=rf(t,0,!1,null,null,!1,!1,"",Pm);return t._reactRootContainer=l,t[Ln]=l.current,fo(t.nodeType===8?t.parentNode:t),Jr(function(){hu(e,l,n,r)}),l}function mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vl(o);a.call(l)}}hu(e,o,t,i)}else o=KT(n,e,t,i,r);return vl(o)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(Ih(e,n|1),yt(e,Ce()),!(X&6)&&(es=Ce()+500,Pr()))}break;case 13:Jr(function(){var r=Mn(t,1);if(r!==null){var i=at();Zt(r,t,1,i)}}),sf(t,1)}};kh=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=at();Zt(e,t,134217728,n)}sf(t,134217728)}};cv=function(t){if(t.tag===13){var e=pr(t),n=Mn(t,e);if(n!==null){var r=at();Zt(n,t,e,r)}sf(t,e)}};dv=function(){return ee};hv=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};td=function(t,e,n){switch(e){case"input":if(Kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=su(r);if(!i)throw Error(R(90));$g(r),Kc(r,i)}}}break;case"textarea":Hg(t,n);break;case"select":e=n.value,e!=null&&Fi(t,!!n.multiple,e,!1)}};Jg=Zh;Zg=Jr;var YT={usingClientEntryPoint:!1,Events:[zo,Ri,su,Qg,Xg,Zh]},ks={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QT={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||GT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{tu=Ca.inject(QT),fn=Ca}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(e))throw Error(R(200));return qT(t,e,null,n)};Pt.createRoot=function(t,e){if(!af(t))throw Error(R(299));var n=!1,r="",i=Dy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rf(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,fo(t.nodeType===8?t.parentNode:t),new of(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Jr(t)};Pt.hydrate=function(t,e,n){if(!pu(e))throw Error(R(200));return mu(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!af(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Oy(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,fo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fu(e)};Pt.render=function(t,e,n){if(!pu(e))throw Error(R(200));return mu(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!pu(t))throw Error(R(40));return t._reactRootContainer?(Jr(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Pt.unstable_batchedUpdates=Zh;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pu(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return mu(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function Ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ly)}catch(t){console.error(t)}}Ly(),Lg.exports=Pt;var XT=Lg.exports,My,Am=XT;My=Am.createRoot,Am.hydrateRoot;const JT="_Header_10i9s_1",ZT="_slideDown_10i9s_1",eI={Header:JT,slideDown:ZT};/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}var ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ar||(ar={}));const bm="popstate";function tI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Dd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yl(i)}return rI(e,n,null,t)}function Te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Fy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nI(){return Math.random().toString(36).substr(2,8)}function Om(t,e){return{usr:t.state,key:t.key,idx:e}}function Dd(t,e,n,r){return n===void 0&&(n=null),Co({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?us(e):e,{state:n,key:e&&e.key||r||nI()})}function yl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ar.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Co({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=ar.Pop;let S=d(),_=S==null?null:S-u;u=S,l&&l({action:a,location:E.location,delta:_})}function h(S,_){a=ar.Push;let p=Dd(E.location,S,_);u=d()+1;let m=Om(p,u),w=E.createHref(p);try{o.pushState(m,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(w)}s&&l&&l({action:a,location:E.location,delta:1})}function g(S,_){a=ar.Replace;let p=Dd(E.location,S,_);u=d();let m=Om(p,u),w=E.createHref(p);o.replaceState(m,"",w),s&&l&&l({action:a,location:E.location,delta:0})}function v(S){let _=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:yl(S);return p=p.replace(/ $/,"%20"),Te(_,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,_)}let E={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(bm,c),l=S,()=>{i.removeEventListener(bm,c),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let _=v(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:h,replace:g,go(S){return o.go(S)}};return E}var Dm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dm||(Dm={}));function iI(t,e,n){return n===void 0&&(n="/"),sI(t,e,n,!1)}function sI(t,e,n,r){let i=typeof e=="string"?us(e):e,s=lf(i.pathname||"/",n);if(s==null)return null;let o=Uy(t);oI(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=gI(s);a=mI(o[l],u,r)}return a}function Uy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=_r([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Uy(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:fI(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of jy(s.path))i(s,o,l)}),e}function jy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jy(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function oI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aI=/^:[\w-]+$/,lI=3,uI=2,cI=1,dI=10,hI=-2,Lm=t=>t==="*";function fI(t,e){let n=t.split("/"),r=n.length;return n.some(Lm)&&(r+=hI),e&&(r+=uI),n.filter(i=>!Lm(i)).reduce((i,s)=>i+(aI.test(s)?lI:s===""?cI:dI),r)}function pI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mI(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=Mm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Mm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:_r([s,c.pathname]),pathnameBase:EI(_r([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=_r([s,c.pathnameBase]))}return o}function Mm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_I(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let E=a[c]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const v=a[c];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function _I(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function gI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function vI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?us(t):t;return{pathname:n?n.startsWith("/")?n:yI(n,e):e,search:CI(r),hash:SI(i)}}function yI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function By(t,e){let n=wI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=us(t):(i=Co({},t),Te(!i.pathname||!i.pathname.includes("?"),gc("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),gc("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),gc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=vI(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const _r=t=>t.join("/").replace(/\/\/+/g,"/"),EI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,SI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function TI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Vy=["post","put","patch","delete"];new Set(Vy);const II=["get",...Vy];new Set(II);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},So.apply(this,arguments)}const uf=k.createContext(null),kI=k.createContext(null),ci=k.createContext(null),_u=k.createContext(null),di=k.createContext({outlet:null,matches:[],isDataRoute:!1}),$y=k.createContext(null);function RI(t,e){let{relative:n}=e===void 0?{}:e;$o()||Te(!1);let{basename:r,navigator:i}=k.useContext(ci),{hash:s,pathname:o,search:a}=Hy(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:_r([r,o])),i.createHref({pathname:l,search:a,hash:s})}function $o(){return k.useContext(_u)!=null}function gu(){return $o()||Te(!1),k.useContext(_u).location}function Wy(t){k.useContext(ci).static||k.useLayoutEffect(t)}function vu(){let{isDataRoute:t}=k.useContext(di);return t?BI():xI()}function xI(){$o()||Te(!1);let t=k.useContext(uf),{basename:e,future:n,navigator:r}=k.useContext(ci),{matches:i}=k.useContext(di),{pathname:s}=gu(),o=JSON.stringify(By(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return Wy(()=>{a.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=zy(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:_r([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function Hy(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=k.useContext(ci),{matches:i}=k.useContext(di),{pathname:s}=gu(),o=JSON.stringify(By(i,r.v7_relativeSplatPath));return k.useMemo(()=>zy(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function NI(t,e){return PI(t,e)}function PI(t,e,n,r){$o()||Te(!1);let{navigator:i}=k.useContext(ci),{matches:s}=k.useContext(di),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=gu(),d;if(e){var c;let S=typeof e=="string"?us(e):e;l==="/"||(c=S.pathname)!=null&&c.startsWith(l)||Te(!1),d=S}else d=u;let h=d.pathname||"/",g=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=iI(t,{pathname:g}),E=LI(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:_r([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:_r([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&E?k.createElement(_u.Provider,{value:{location:So({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ar.Pop}},E):E}function AI(){let t=jI(),e=TI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const bI=k.createElement(AI,null);class OI extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(di.Provider,{value:this.props.routeContext},k.createElement($y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DI(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(uf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(di.Provider,{value:e},r)}function LI(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||Te(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,v=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,v=!1,E=null,S=null;n&&(g=a&&c.route.id?a[c.route.id]:void 0,E=c.route.errorElement||bI,l&&(u<0&&h===0?(v=!0,S=null):u===h&&(v=!0,S=c.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,h+1)),p=()=>{let m;return g?m=E:v?m=S:c.route.Component?m=k.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,k.createElement(DI,{match:c,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?k.createElement(OI,{location:n.location,revalidation:n.revalidation,component:E,error:g,children:p(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):p()},null)}var qy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qy||{}),wl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wl||{});function MI(t){let e=k.useContext(uf);return e||Te(!1),e}function FI(t){let e=k.useContext(kI);return e||Te(!1),e}function UI(t){let e=k.useContext(di);return e||Te(!1),e}function Gy(t){let e=UI(),n=e.matches[e.matches.length-1];return n.route.id||Te(!1),n.route.id}function jI(){var t;let e=k.useContext($y),n=FI(wl.UseRouteError),r=Gy(wl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function BI(){let{router:t}=MI(qy.UseNavigateStable),e=Gy(wl.UseNavigateStable),n=k.useRef(!1);return Wy(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,So({fromRouteId:e},s)))},[t,e])}function it(t){Te(!1)}function zI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:s,static:o=!1,future:a}=t;$o()&&Te(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:So({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=us(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:v="default"}=r,E=k.useMemo(()=>{let S=lf(d,l);return S==null?null:{location:{pathname:S,search:c,hash:h,state:g,key:v},navigationType:i}},[l,d,c,h,g,v,i]);return E==null?null:k.createElement(ci.Provider,{value:u},k.createElement(_u.Provider,{children:n,value:E}))}function Ky(t){let{children:e,location:n}=t;return NI(Ld(e),n)}new Promise(()=>{});function Ld(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Ld(r.props.children,s));return}r.type!==it&&Te(!1),!r.props.index||!r.props.children||Te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ld(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Md.apply(this,arguments)}function VI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $I(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function WI(t,e){return t.button===0&&(!e||e==="_self")&&!$I(t)}const HI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],qI="6";try{window.__reactRouterVersion=qI}catch{}const GI="startTransition",Fm=zc[GI];function KI(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=tI({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=k.useCallback(c=>{u&&Fm?Fm(()=>l(c)):l(c)},[l,u]);return k.useLayoutEffect(()=>o.listen(d),[o,d]),k.createElement(zI,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const YI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,an=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=VI(e,HI),{basename:g}=k.useContext(ci),v,E=!1;if(typeof u=="string"&&QI.test(u)&&(v=u,YI))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),I=lf(w.pathname,g);w.origin===m.origin&&I!=null?u=I+w.search+w.hash:E=!0}catch{}let S=RI(u,{relative:i}),_=XI(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function p(m){r&&r(m),m.defaultPrevented||_(m)}return k.createElement("a",Md({},h,{href:v||S,onClick:E||s?r:p,ref:n,target:l}))});var Um;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Um||(Um={}));var jm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jm||(jm={}));function XI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=vu(),u=gu(),d=Hy(t,{relative:o});return k.useCallback(c=>{if(WI(c,n)){c.preventDefault();let h=r!==void 0?r:yl(u)===yl(d);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}const JI="_headerRight_a9f18_11",ZI="_slideDown_a9f18_1",e1="_ulNav_a9f18_79",t1="_slideUp_a9f18_1",Bm={headerRight:JI,slideDown:ZI,ulNav:e1,slideUp:t1};var zm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw cs(e)},cs=function(t){return new Error("Firebase Database ("+Yy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},n1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new r1;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xy=function(t){const e=Qy(t);return cf.encodeByteArray(e,!0)},El=function(t){return Xy(t).replace(/\./g,"")},Cl=function(t){try{return cf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t){return Jy(void 0,t)}function Jy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!s1(n)||(t[n]=Jy(t[n],e[n]));return t}function s1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=()=>o1().__FIREBASE_DEFAULTS__,l1=()=>{if(typeof process>"u"||typeof zm>"u")return;const t=zm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},u1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cl(t[1]);return e&&JSON.parse(e)},df=()=>{try{return a1()||l1()||u1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zy=t=>{var e,n;return(n=(e=df())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},e0=t=>{const e=Zy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},t0=()=>{var t;return(t=df())===null||t===void 0?void 0:t.config},n0=t=>{var e;return(e=df())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[El(JSON.stringify(n)),El(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function c1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function i0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h1(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function s0(){return Yy.NODE_ADMIN===!0}function f1(){try{return typeof indexedDB=="object"}catch{return!1}}function p1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=m1,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo.prototype.create)}}class Wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $n(i,a,r)}}function _1(t,e){return t.replace(g1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const g1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=To(Cl(s[0])||""),n=To(Cl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},v1=function(t){const e=o0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},y1=function(t){const e=o0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ts(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Tl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vm(s)&&Vm(o)){if(!Tl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function E1(t,e){const n=new C1(t,e);return n.subscribe.bind(n)}class C1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");S1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vc),i.error===void 0&&(i.error=vc),i.complete===void 0&&(i.complete=vc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vc(){}function ff(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I1=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R1(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function k1(t){return t===Fr?void 0:t}function R1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new I1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const N1={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},P1=te.INFO,A1={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},b1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pf{constructor(e){this.name=e,this._logLevel=P1,this._logHandler=b1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const O1=(t,e)=>e.some(n=>t instanceof n);let $m,Wm;function D1(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L1(){return Wm||(Wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a0=new WeakMap,Ud=new WeakMap,l0=new WeakMap,yc=new WeakMap,mf=new WeakMap;function M1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a0.set(n,t)}).catch(()=>{}),mf.set(e,t),e}function F1(t){if(Ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ud.set(t,e)}let jd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U1(t){jd=t(jd)}function j1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wc(this),e,...n);return l0.set(r,e.sort?e.sort():[e]),gr(r)}:L1().includes(t)?function(...e){return t.apply(wc(this),e),gr(a0.get(this))}:function(...e){return gr(t.apply(wc(this),e))}}function B1(t){return typeof t=="function"?j1(t):(t instanceof IDBTransaction&&F1(t),O1(t,D1())?new Proxy(t,jd):t)}function gr(t){if(t instanceof IDBRequest)return M1(t);if(yc.has(t))return yc.get(t);const e=B1(t);return e!==t&&(yc.set(t,e),mf.set(e,t)),e}const wc=t=>mf.get(t);function z1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gr(o.result),l.oldVersion,l.newVersion,gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const V1=["get","getKey","getAll","getAllKeys","count"],$1=["put","add","delete","clear"],Ec=new Map;function Hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ec.set(e,s),s}U1(t=>({...t,get:(e,n,r)=>Hm(e,n)||t.get(e,n,r),has:(e,n)=>!!Hm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bd="@firebase/app",qm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new pf("@firebase/app"),q1="@firebase/app-compat",G1="@firebase/analytics-compat",K1="@firebase/analytics",Y1="@firebase/app-check-compat",Q1="@firebase/app-check",X1="@firebase/auth",J1="@firebase/auth-compat",Z1="@firebase/database",ek="@firebase/data-connect",tk="@firebase/database-compat",nk="@firebase/functions",rk="@firebase/functions-compat",ik="@firebase/installations",sk="@firebase/installations-compat",ok="@firebase/messaging",ak="@firebase/messaging-compat",lk="@firebase/performance",uk="@firebase/performance-compat",ck="@firebase/remote-config",dk="@firebase/remote-config-compat",hk="@firebase/storage",fk="@firebase/storage-compat",pk="@firebase/firestore",mk="@firebase/vertexai-preview",_k="@firebase/firestore-compat",gk="firebase",vk="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="[DEFAULT]",yk={[Bd]:"fire-core",[q1]:"fire-core-compat",[K1]:"fire-analytics",[G1]:"fire-analytics-compat",[Q1]:"fire-app-check",[Y1]:"fire-app-check-compat",[X1]:"fire-auth",[J1]:"fire-auth-compat",[Z1]:"fire-rtdb",[ek]:"fire-data-connect",[tk]:"fire-rtdb-compat",[nk]:"fire-fn",[rk]:"fire-fn-compat",[ik]:"fire-iid",[sk]:"fire-iid-compat",[ok]:"fire-fcm",[ak]:"fire-fcm-compat",[lk]:"fire-perf",[uk]:"fire-perf-compat",[ck]:"fire-rc",[dk]:"fire-rc-compat",[hk]:"fire-gcs",[fk]:"fire-gcs-compat",[pk]:"fire-fst",[_k]:"fire-fst-compat",[mk]:"fire-vertex","fire-js":"fire-js",[gk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Map,wk=new Map,Vd=new Map;function Gm(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Vd.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of Il.values())Gm(n,t);for(const n of wk.values())Gm(n,t);return!0}function Eu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new Wo("app","Firebase",Ek);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=vk;function u0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=t0()),!n)throw vr.create("no-options");const s=Il.get(i);if(s){if(Tl(n,s.options)&&Tl(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new x1(i);for(const l of Vd.values())o.addComponent(l);const a=new Ck(n,r,o);return Il.set(i,a),a}function _f(t=zd){const e=Il.get(t);if(!e&&t===zd&&t0())return u0();if(!e)throw vr.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let i=(r=yk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}Zr(new Sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="firebase-heartbeat-database",Tk=1,Io="firebase-heartbeat-store";let Cc=null;function c0(){return Cc||(Cc=z1(Sk,Tk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Io)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Cc}async function Ik(t){try{const n=(await c0()).transaction(Io),r=await n.objectStore(Io).get(d0(t));return await n.done,r}catch(e){if(e instanceof $n)Un.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function Km(t,e){try{const r=(await c0()).transaction(Io,"readwrite");await r.objectStore(Io).put(e,d0(t)),await r.done}catch(n){if(n instanceof $n)Un.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function d0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=1024,Rk=30*24*60*60*1e3;class xk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ym();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Rk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ym(),{heartbeatsToSend:r,unsentEntries:i}=Nk(this._heartbeatsCache.heartbeats),s=El(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Un.warn(n),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function Nk(t,e=kk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f1()?p1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ik(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qm(t){return El(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t){Zr(new Sr("platform-logger",e=>new W1(e),"PRIVATE")),Zr(new Sr("heartbeat",e=>new xk(e),"PRIVATE")),mn(Bd,qm,t),mn(Bd,qm,"esm2017"),mn("fire-js","")}Ak("");function gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function h0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bk=h0,f0=new Wo("auth","Firebase",h0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new pf("@firebase/auth");function Ok(t,...e){kl.logLevel<=te.WARN&&kl.warn(`Auth (${hi}): ${t}`,...e)}function Va(t,...e){kl.logLevel<=te.ERROR&&kl.error(`Auth (${hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw vf(t,...e)}function _n(t,...e){return vf(t,...e)}function p0(t,e,n){const r=Object.assign(Object.assign({},bk()),{[e]:n});return new Wo("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return p0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return f0.create(t,...e)}function z(t,e,...n){if(!t)throw vf(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function jn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dk(){return Xm()==="http:"||Xm()==="https:"}function Xm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dk()||d1()||"connection"in navigator)?navigator.onLine:!0}function Mk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=hf()||i0()}get(){return Lk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=new Ho(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function br(t,e,n,r,i={}){return _0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ds(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},s);return c1()||(u.referrerPolicy="no-referrer"),m0.fetch()(g0(t,t.config.apiHost,n,a),u)})}async function _0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fk),e);try{const i=new Bk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sa(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw p0(t,d,u);nn(t,d)}}catch(i){if(i instanceof $n)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function qo(t,e,n,r,i={}){const s=await br(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function g0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,i):`${t.config.apiScheme}://${i}`}function jk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),Uk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}function Jm(t){return t!==void 0&&t.enterprise!==void 0}class zk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Vk(t,e){return br(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function v0(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wk(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=wf(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qs(Sc(i.auth_time)),issuedAtTime:Qs(Sc(i.iat)),expirationTime:Qs(Sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cl(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zm(t){const e=wf(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&Hk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ko(t,v0(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?y0(s.providerUserInfo):[],a=Kk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function Gk(t){const e=$e(t);await Rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function y0(t){return t.map(e=>{var{providerId:n}=e,r=gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e){const n=await _0(t,{},async()=>{const r=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=g0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",m0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qk(t,e){return br(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=Zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Yk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $i;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wk(this,e)}reload(){return Gk(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await ko(this,$k(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:N,stsTokenManager:b}=n;z(m&&b,e,"internal-error");const P=$i.fromJSON(this.name,b);z(typeof m=="string",e,"internal-error"),Gn(c,e.name),Gn(h,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof I=="boolean",e,"internal-error"),Gn(g,e.name),Gn(v,e.name),Gn(E,e.name),Gn(S,e.name),Gn(_,e.name),Gn(p,e.name);const H=new kn({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:I,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:P,createdAt:_,lastLoginAt:p});return N&&Array.isArray(N)&&(H.providerData=N.map(j=>Object.assign({},j))),S&&(H._redirectEventId=S),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new $i;i.updateFromServerResponse(n);const s=new kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Rl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?y0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new $i;a.updateFromIdToken(r);const l=new kn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;function Rn(t){jn(t instanceof Function,"Expected a class definition");let e=e_.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}w0.type="NONE";const t_=w0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t,e,n){return`firebase:${t}:${e}:${n}`}class Wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$a(this.userKey,i.apiKey,s),this.fullPersistenceKey=$a("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wi(Rn(t_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(t_);const o=$a(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=kn._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Wi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k0(e))return"Blackberry";if(R0(e))return"Webos";if(C0(e))return"Safari";if((e.includes("chrome/")||S0(e))&&!e.includes("edge/"))return"Chrome";if(I0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E0(t=lt()){return/firefox\//i.test(t)}function C0(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S0(t=lt()){return/crios\//i.test(t)}function T0(t=lt()){return/iemobile/i.test(t)}function I0(t=lt()){return/android/i.test(t)}function k0(t=lt()){return/blackberry/i.test(t)}function R0(t=lt()){return/webos/i.test(t)}function Ef(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xk(t=lt()){var e;return Ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jk(){return h1()&&document.documentMode===10}function x0(t=lt()){return Ef(t)||I0(t)||R0(t)||k0(t)||/windows phone/i.test(t)||T0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t,e=[]){let n;switch(t){case"Browser":n=n_(lt());break;case"Worker":n=`${n_(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e={}){return br(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=6;class nR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r_(this),this.idTokenSubscription=new r_(this),this.beforeStateQueue=new Zk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await v0(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(An(this));const n=e?$e(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eR(this),n=new nR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ok(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fi(t){return $e(t)}class r_{constructor(e){this.auth=e,this.observer=null,this.addObserver=E1(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iR(t){Cu=t}function P0(t){return Cu.loadJS(t)}function sR(){return Cu.recaptchaEnterpriseScript}function oR(){return Cu.gapiScript}function aR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lR="recaptcha-enterprise",uR="NO_RECAPTCHA";class cR{constructor(e){this.type=lR,this.auth=fi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Vk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Jm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(uR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Jm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=sR();l.length!==0&&(l+=a),P0(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function i_(t,e,n,r=!1){const i=new cR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await i_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await i_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t,e){const n=Eu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tl(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function hR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fR(t,e,n){const r=fi(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=A0(e),{host:o,port:a}=pR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),mR()}function A0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pR(t){const e=A0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:s_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:s_(o)}}}function s_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function _R(t,e){return br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(t,e){return qo(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function yR(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Cf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,n,"signInWithPassword",gR);case"emailLink":return vR(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,r,"signUpPassword",_R);case"emailLink":return yR(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e){return qo(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="http://localhost";class ei extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hi(e,n)}buildRequest(){const e={requestUri:wR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CR(t){const e=Us(js(t)).link,n=e?Us(js(e)).deep_link_id:null,r=Us(js(t)).deep_link_id;return(r?Us(js(r)).link:null)||r||n||e||t}class Sf{constructor(e){var n,r,i,s,o,a;const l=Us(js(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=ER((i=l.mode)!==null&&i!==void 0?i:null);z(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CR(e);try{return new Sf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return Ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sf.parseLink(n);return z(r,"argument-error"),Ro._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends b0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Go{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Go{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Go{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e){return qo(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kn._fromIdTokenResponse(e,r,i),o=o_(r);return new ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=o_(r);return new ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function o_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends $n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xl(e,n,r,i)}}function O0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(t,s,e,r):s})}async function TR(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await ko(t,O0(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=wf(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(t,e,n=!1){if(cn(t.app))return Promise.reject(An(t));const r="signIn",i=await O0(t,r,e),s=await ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kR(t,e){return D0(fi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(t){const e=fi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RR(t,e,n){if(cn(t.app))return Promise.reject(An(t));const r=fi(t),o=await Hd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&L0(t),l}),a=await ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xR(t,e,n){return cn(t.app)?Promise.reject(An(t)):kR($e(t),hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&L0(t),r})}function NR(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function PR(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function AR(t){return $e(t).signOut()}const Nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nl,"1"),this.storage.removeItem(Nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=1e3,OR=10;class F0 extends M0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=x0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}F0.type="LOCAL";const DR=F0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0 extends M0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U0.type="SESSION";const j0=U0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await LR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Tf("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function FR(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function UR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BR(){return B0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="firebaseLocalStorageDb",zR=1,Pl="firebaseLocalStorage",V0="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(t,e){return t.transaction([Pl],e?"readwrite":"readonly").objectStore(Pl)}function VR(){const t=indexedDB.deleteDatabase(z0);return new Ko(t).toPromise()}function qd(){const t=indexedDB.open(z0,zR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pl,{keyPath:V0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pl)?e(r):(r.close(),await VR(),e(await qd()))})})}async function a_(t,e,n){const r=Tu(t,!0).put({[V0]:e,value:n});return new Ko(r).toPromise()}async function $R(t,e){const n=Tu(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function l_(t,e){const n=Tu(t,!0).delete(e);return new Ko(n).toPromise()}const WR=800,HR=3;class $0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(BR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UR(),!this.activeServiceWorker)return;this.sender=new MR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qd();return await a_(e,Nl,"1"),await l_(e,Nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>a_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$R(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>l_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tu(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$0.type="LOCAL";const qR=$0;new Ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t,e){return e?Rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends Cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KR(t){return D0(t.auth,new If(t),t.bypassAuthState)}function YR(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),IR(n,new If(t),t.bypassAuthState)}async function QR(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),TR(n,new If(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KR;case"linkViaPopup":case"linkViaRedirect":return QR;case"reauthViaPopup":case"reauthViaRedirect":return YR;default:nn(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=new Ho(2e3,1e4);class Di extends W0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XR.get())};e()}}Di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="pendingRedirect",Wa=new Map;class ZR extends W0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await ex(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ex(t,e){const n=rx(e),r=nx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tx(t,e){Wa.set(t._key(),e)}function nx(t){return Rn(t._redirectPersistence)}function rx(t){return $a(JR,t.config.apiKey,t.name)}async function ix(t,e,n=!1){if(cn(t.app))return Promise.reject(An(t));const r=fi(t),i=GR(r,e),o=await new ZR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=10*60*1e3;class ox{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ax(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!H0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(u_(e))}saveEventToCache(e){this.cachedEventUids.add(u_(e)),this.lastProcessedEventTime=Date.now()}}function u_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function H0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ax(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return H0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e={}){return br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cx=/^https?/;async function dx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lx(t);for(const n of e)try{if(hx(n))return}catch{}nn(t,"unauthorized-domain")}function hx(t){const e=$d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cx.test(n))return!1;if(ux.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new Ho(3e4,6e4);function c_(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function px(t){return new Promise((e,n)=>{var r,i,s;function o(){c_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c_(),n(_n(t,"network-request-failed"))},timeout:fx.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const a=aR("iframefcb");return gn()[a]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},P0(`${oR()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function mx(t){return Ha=Ha||px(t),Ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=new Ho(5e3,15e3),gx="__/auth/iframe",vx="emulator/auth/iframe",yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ex(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,vx):`https://${t.config.authDomain}/${gx}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=wx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ds(r).slice(1)}`}async function Cx(t){const e=await mx(t),n=gn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:Ex(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),a=gn().setTimeout(()=>{s(o)},_x.get());function l(){gn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tx=500,Ix=600,kx="_blank",Rx="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xx(t,e,n,r=Tx,i=Ix){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Sx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=lt().toLowerCase();n&&(a=S0(u)?kx:n),E0(u)&&(e=e||Rx,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(Xk(u)&&a!=="_self")return Nx(e||"",a),new d_(null);const c=window.open(e||"",a,d);z(c,t,"popup-blocked");try{c.focus()}catch{}return new d_(c)}function Nx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="__/auth/handler",Ax="emulator/auth/handler",bx=encodeURIComponent("fac");async function h_(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof b0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Go){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${bx}=${encodeURIComponent(l)}`:"";return`${Ox(t)}?${ds(a).slice(1)}${u}`}function Ox({config:t}){return t.emulator?yf(t,Ax):`https://${t.authDomain}/${Px}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class Dx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=j0,this._completeRedirectFn=ix,this._overrideRedirectResult=tx}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await h_(e,n,r,$d(),i);return xx(e,o,Tf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await h_(e,n,r,$d(),i);return FR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cx(e),r=new ox(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Tc];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return x0()||C0()||Ef()}}const Lx=Dx;var f_="@firebase/auth",p_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ux(t){Zr(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N0(t)},u=new rR(r,i,s,l);return hR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new Sr("auth-internal",e=>{const n=fi(e.getProvider("auth").getImmediate());return(r=>new Mx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(f_,p_,Fx(t)),mn(f_,p_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=5*60,Bx=n0("authIdTokenMaxAge")||jx;let m_=null;const zx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bx)return;const i=n==null?void 0:n.token;m_!==i&&(m_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function q0(t=_f()){const e=Eu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dR(t,{popupRedirectResolver:Lx,persistence:[qR,DR,j0]}),r=n0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zx(s.toString());PR(n,o,()=>o(n.currentUser)),NR(n,a=>o(a))}}const i=Zy("auth");return i&&fR(n,`http://${i}`),n}function Vx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Vx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ux("Browser");var $x="firebase",Wx="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn($x,Wx,"app");var __={};const g_="@firebase/database",v_="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G0="";function Hx(t){G0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:To(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Wn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qx(e)}}catch{}return new Gx},$r=K0("localStorage"),Kx=K0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new pf("@firebase/database"),Yx=function(){let t=1;return function(){return t++}}(),Y0=function(t){const e=T1(t),n=new w1;n.update(e);const r=n.digest();return cf.encodeByteArray(r)},Yo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Yo.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let Xs=null,y_=!0;const Qx=function(t,e){A(!e,"Can't turn on custom loggers persistently."),qi.logLevel=te.VERBOSE,Xs=qi.log.bind(qi)},Je=function(...t){if(y_===!0&&(y_=!1,Xs===null&&Kx.get("logging_enabled")===!0&&Qx()),Xs){const e=Yo.apply(null,t);Xs(e)}},Qo=function(t){return function(...e){Je(t,...e)}},Gd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Yo(...t);qi.error(e)},Bn=function(...t){const e=`FIREBASE FATAL ERROR: ${Yo(...t)}`;throw qi.error(e),new Error(e)},wt=function(...t){const e="FIREBASE WARNING: "+Yo(...t);qi.warn(e)},Xx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Q0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Jx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ns="[MIN_NAME]",ni="[MAX_NAME]",fs=function(t,e){if(t===e)return 0;if(t===ns||e===ni)return-1;if(e===ns||t===ni)return 1;{const n=w_(t),r=w_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Zx=function(t,e){return t===e?0:t<e?-1:1},Rs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},kf=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=kf(t[e[r]]);return n+="}",n},X0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Et(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const J0=function(t){A(!Q0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},eN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const rN=new RegExp("^-?(0*)\\d{1,10}$"),iN=-2147483648,sN=2147483647,w_=function(t){if(rN.test(t)){const e=Number(t);if(e>=iN&&e<=sN)return e}return null},ps=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},oN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Js=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class qa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qa.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="5",Z0="v",ew="s",tw="r",nw="f",rw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iw="ls",sw="p",Kd="ac",ow="websocket",aw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function uw(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===ow)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===aw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uN(t)&&(n.ns=t.namespace);const i=[];return Et(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.counters_={}}incrementCounter(e,n=1){Wn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return i1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={},kc={};function xf(t){const e=t.toString();return Ic[e]||(Ic[e]=new cN),Ic[e]}function dN(t,e){const n=t.toString();return kc[n]||(kc[n]=e()),kc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ps(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="start",fN="close",pN="pLPCommand",mN="pRTLPCB",cw="id",dw="pw",hw="ser",_N="cb",gN="seg",vN="ts",yN="d",wN="dframe",fw=1870,pw=30,EN=fw-pw,CN=25e3,SN=3e4;class Li{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qo(e),this.stats_=xf(n),this.urlFn=l=>(this.appCheckToken&&(l[Kd]=this.appCheckToken),uw(n,aw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SN)),Jx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Nf((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===E_)this.id=a,this.password=l;else if(o===fN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[E_]="t",r[hw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_N]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Z0]=Rf,this.transportSessionId&&(r[ew]=this.transportSessionId),this.lastSessionId&&(r[iw]=this.lastSessionId),this.applicationId&&(r[sw]=this.applicationId),this.appCheckToken&&(r[Kd]=this.appCheckToken),typeof location<"u"&&location.hostname&&rw.test(location.hostname)&&(r[tw]=nw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eN()&&!tN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Xy(n),i=X0(r,EN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[wN]="t",r[cw]=e,r[dw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Nf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Yx(),window[pN+this.uniqueCallbackIdentifier]=e,window[mN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Nf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Je("frame writing exception"),a.stack&&Je(a.stack),Je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cw]=this.myID,e[dw]=this.myPW,e[hw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pw+r.length<=fw;){const o=this.pendingSegs.shift();r=r+"&"+gN+i+"="+o.seg+"&"+vN+i+"="+o.ts+"&"+yN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(CN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=16384,IN=45e3;let Al=null;typeof MozWebSocket<"u"?Al=MozWebSocket:typeof WebSocket<"u"&&(Al=WebSocket);class Gt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qo(this.connId),this.stats_=xf(n),this.connURL=Gt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Z0]=Rf,typeof location<"u"&&location.hostname&&rw.test(location.hostname)&&(o[tw]=nw),n&&(o[ew]=n),r&&(o[iw]=r),i&&(o[Kd]=i),s&&(o[sw]=s),uw(e,ow,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$r.set("previous_websocket_failure",!0);try{let r;s0(),this.mySock=new Al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Al!==null&&!Gt.forceDisallow_}static previouslyFailed(){return $r.isInMemoryStorage||$r.get("previous_websocket_failure")===!0}markConnectionHealthy(){$r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=To(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=X0(n,TN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Li,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let r=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gt];else{const i=this.transports_=[];for(const s of xo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=6e4,RN=5e3,xN=10*1024,NN=100*1024,Rc="t",C_="d",PN="s",S_="r",AN="e",T_="o",I_="a",k_="n",R_="p",bN="h";class ON{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qo("c:"+this.id+":"),this.transportManager_=new xo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Js(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rc in e){const n=e[Rc];n===I_?this.upgradeIfSecondaryHealthy_():n===S_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===T_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Rs("t",e),r=Rs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:R_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:I_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:k_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Rs("t",e),r=Rs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Rs(Rc,e);if(C_ in e){const r=e[C_];if(n===bN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===k_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PN?this.onConnectionShutdown_(r):n===S_?this.onReset_(r):n===AN?Gd("Server Error: "+r):n===T_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rf!==r&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Js(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Js(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:R_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends _w{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bl}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=32,N_=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ne("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tr(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function gw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function Ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ne)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ne(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return ot(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Pf(t,e){if(Tr(t)!==Tr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tr(t)>Tr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class LN{constructor(e,n){this.errorPrefix_=n,this.parts_=vw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=wu(this.parts_[r]);ww(this)}}function MN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wu(e),ww(t)}function FN(t){const e=t.parts_.pop();t.byteLength_-=wu(e),t.parts_.length>0&&(t.byteLength_-=1)}function ww(t){if(t.byteLength_>N_)throw new Error(t.errorPrefix_+"has a key path longer than "+N_+" bytes ("+t.byteLength_+").");if(t.parts_.length>x_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+x_+") or object contains a cycle "+Ur(t))}function Ur(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af extends _w{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Af}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=1e3,UN=60*5*1e3,P_=30*1e3,jN=1.3,BN=3e4,zN="server_kill",A_=3;class bn extends mw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=bn.nextPersistentConnectionId_++,this.log_=Qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xs,this.maxReconnectDelay_=UN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!s0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Af.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new yu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;bn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Wn(e,"w")){const r=ts(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||y1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=P_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=v1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gd("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BN&&(this.reconnectDelay_=xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new ON(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{wt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(zN)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&wt(c),l())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fd(this.interruptReasons_)&&(this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>kf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ne(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=A_&&(this.reconnectDelay_=P_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=A_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+G0.replace(/\./g,"-")]=1,hf()?e["framework.cordova"]=1:i0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bl.getInstance().currentlyOnline();return Fd(this.interruptReasons_)&&e}}bn.nextPersistentConnectionId_=0;bn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new G(ns,e),i=new G(ns,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;class Ew extends Iu{static get __EMPTY_NODE(){return Ta}static set __EMPTY_NODE(e){Ta=e}compare(e,n){return fs(e.name,n.name)}isDefinedOn(e){throw cs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(ni,Ta)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Ta)}toString(){return".key"}}const Gi=new Ew;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??_t.EMPTY_NODE,this.right=s??_t.EMPTY_NODE}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0;je.BLACK=!1;class VN{copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ia(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ia(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ia(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ia(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new VN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t,e){return fs(t.name,e.name)}function bf(t,e){return fs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yd;function WN(t){Yd=t}const Cw=function(t){return typeof t=="number"?"number:"+J0(t):"string:"+t},Sw=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wn(e,".sv"),"Priority must be a string or number.")}else A(t===Yd||t.isEmpty(),"priority of unexpected type.");A(t===Yd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b_;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sw(this.priorityNode_)}static set __childrenNodeConstructor(e){b_=e}static get __childrenNodeConstructor(){return b_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:q(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||Tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=J0(this.value_):e+=this.value_,this.lazyHash_=Y0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tw,Iw;function HN(t){Tw=t}function qN(t){Iw=t}class GN extends Iu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?fs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(ni,new Fe("[PRIORITY-POST]",Iw))}makePost(e,n){const r=Tw(e);return new G(n,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new GN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=Math.log(2);class YN{constructor(e){const n=s=>parseInt(Math.log(s)/KN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ol=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new je(h,c.node,je.BLACK,null,null);{const g=parseInt(d/2,10)+l,v=i(l,g),E=i(g+1,u);return c=t[g],h=n?n(c):c,new je(h,c.node,je.BLACK,v,E)}},s=function(l){let u=null,d=null,c=t.length;const h=function(v,E){const S=c-v,_=c;c-=v;const p=i(S+1,_),m=t[S],w=n?n(m):m;g(new je(w,m.node,E,null,p))},g=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const E=l.nextBitIsOne(),S=Math.pow(2,l.count-(v+1));E?h(S,je.BLACK):(h(S,je.BLACK),h(S,je.RED))}return d},o=new YN(t.length),a=s(o);return new _t(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;const gi={};class xn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(gi&&ye,"ChildrenNode.ts has not been loaded"),xc=xc||new xn({".priority":gi},{".priority":ye}),xc}get(e){const n=ts(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return Wn(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Gi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ol(r,e.getCompare()):a=gi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new xn(d,u)}addToIndexes(e,n){const r=Sl(this.indexes_,(i,s)=>{const o=ts(this.indexSet_,s);if(A(o,"Missing index implementation for "+s),i===gi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ol(a,o.getCompare())}else return gi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new xn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Sl(this.indexes_,i=>{if(i===gi)return i;{const s=n.get(e.name);return s?i.remove(new G(e.name,s)):i}});return new xn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Sw(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ns||(Ns=new B(new _t(bf),null,xn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ns}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ns:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new G(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ns:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{A(q(e)!==".priority"||Tr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(re(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ye,(o,a)=>{n[o]=a.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cw(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Y0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xo?-1:0}withIndex(e){if(e===Gi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),i=n.getIterator(ye);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gi?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QN extends B{constructor(){super(new _t(bf),B.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Xo=new QN;Object.defineProperties(G,{MIN:{value:new G(ns,B.EMPTY_NODE)},MAX:{value:new G(ni,Xo)}});Ew.__EMPTY_NODE=B.EMPTY_NODE;Fe.__childrenNodeConstructor=B;WN(Xo);qN(Xo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=!0;function Be(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,Be(e))}if(!(t instanceof Array)&&XN){const n=[];let r=!1;if(Et(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=Ol(n,$N,o=>o.name,bf);if(r){const o=Ol(n,ye.getCompare());return new B(s,Be(e),new xn({".priority":o},{".priority":ye}))}else return new B(s,Be(e),xn.Default)}else{let n=B.EMPTY_NODE;return Et(t,(r,i)=>{if(Wn(t,r)&&r.substring(0,1)!=="."){const s=Be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Be(e))}}HN(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN extends Iu{constructor(e){super(),this.indexPath_=e,A(!K(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?fs(e.name,n.name):s}makePost(e,n){const r=Be(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Xo);return new G(ni,e)}toString(){return vw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN extends Iu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?fs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const r=Be(e);return new G(n,r)}toString(){return".value"}}const eP=new ZN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){return{type:"value",snapshotNode:t}}function rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function No(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Po(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(No(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(rs(n,r)):o.trackChildChange(Po(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,s)=>{n.hasChild(i)||r.trackChildChange(No(i,s))}),n.isLeafNode()||n.forEachChild(ye,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Po(i,s,o))}else r.trackChildChange(rs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.indexedFilter_=new Of(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ao.getStartPost_(e),this.endPost_=Ao.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new G(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,a)=>{s.matches(new G(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ao(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new G(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new G(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Po(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(No(n,c));const E=a.updateImmediateChild(n,B.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(rs(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(No(u.name,u.node)),s.trackChildChange(rs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ns}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ni}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new Df;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rP(t){return t.loadsAllData()?new Of(t.getIndex()):t.hasLimit()?new nP(t):new Ao(t)}function O_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===eP?n="$value":t.index_===Gi?n="$key":(A(t.index_ instanceof JN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function D_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends mw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Dl.getListenId_(e,r),a={};this.listens_[o]=a;const l=O_(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),ts(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Dl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=O_(e._queryParams),r=e._path.toString(),i=new yu;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=To(a.responseText)}catch{wt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&wt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return{value:null,children:new Map}}function Rw(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,Ll());const i=t.children.get(r);e=re(e),Rw(i,e,n)}}function Qd(t,e,n){t.value!==null?n(e,t.value):sP(t,(r,i)=>{const s=new ne(e.toString()+"/"+r);Qd(i,s,n)})}function sP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Et(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=10*1e3,aP=30*1e3,lP=5*60*1e3;class uP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new oP(e);const r=L_+(aP-L_)*Math.random();Js(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Et(e,(i,s)=>{s>0&&Wn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Js(this.reportStats_.bind(this),Math.floor(Math.random()*2*lP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function xw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Xt.ACK_USER_WRITE,this.source=xw()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new Ml(J(),n,this.revert)}}else return A(q(this.path)===e,"operationForChild called for unrelated child."),new Ml(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new bo(this.source,J()):new bo(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Xt.OVERWRITE}operationForChild(e){return K(this.path)?new ri(this.source,J(),this.snap.getImmediateChild(e)):new ri(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Xt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new ri(this.source,J(),n.value):new Oo(this.source,J(),n)}else return A(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oo(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(tP(o.childName,o.snapshotNode))}),Ps(t,i,"child_removed",e,r,n),Ps(t,i,"child_added",e,r,n),Ps(t,i,"child_moved",s,r,n),Ps(t,i,"child_changed",e,r,n),Ps(t,i,"value",e,r,n),i}function Ps(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>fP(t,a,l)),o.forEach(a=>{const l=hP(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function hP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fP(t,e,n){if(e.childName==null||n.childName==null)throw cs("Should only compare child_ events.");const r=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e){return{eventCache:t,serverCache:e}}function Zs(t,e,n,r){return ku(new Ir(e,n,r),t.serverCache)}function Nw(t,e,n,r){return ku(t.eventCache,new Ir(e,n,r))}function Fl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ii(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;const pP=()=>(Nc||(Nc=new _t(Zx)),Nc);class ae{constructor(e,n=pP()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Et(e,(r,i)=>{n=n.set(new ne(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(K(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(re(e),n);return s!=null?{path:Ae(new ne(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(re(e)):new ae(null)}}set(e,n){if(K(e))return new ae(n,this.children);{const r=q(e),s=(this.children.get(r)||new ae(null)).set(re(e),n),o=this.children.insert(r,s);return new ae(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(re(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(re(e)):null}}setTree(e,n){if(K(e))return n;{const r=q(e),s=(this.children.get(r)||new ae(null)).setTree(re(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ae(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(re(e),Ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(re(e),Ae(n,i),r):new ae(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new ae(null))}}function eo(t,e,n){if(K(e))return new en(new ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ot(i,e);return s=s.updateChild(o,n),new en(t.writeTree_.set(i,s))}else{const i=new ae(n),s=t.writeTree_.setTree(e,i);return new en(s)}}}function M_(t,e,n){let r=t;return Et(n,(i,s)=>{r=eo(r,Ae(e,i),s)}),r}function F_(t,e){if(K(e))return en.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new en(n)}}function Xd(t,e){return pi(t,e)!=null}function pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function U_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,i)=>{e.push(new G(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new G(r,i.value))}),e}function yr(t,e){if(K(e))return t;{const n=pi(t,e);return n!=null?new en(new ae(n)):new en(t.writeTree_.subtree(e))}}function Jd(t){return t.writeTree_.isEmpty()}function is(t,e){return Pw(J(),t.writeTree_,e)}function Pw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Pw(Ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ae(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t,e){return Dw(e,t)}function mP(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=eo(t.visibleWrites,e,n)),t.lastWriteId=r}function _P(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function gP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&vP(a,r.path)?i=!1:Qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return yP(t),!0;if(r.snap)t.visibleWrites=F_(t.visibleWrites,r.path);else{const a=r.children;Et(a,l=>{t.visibleWrites=F_(t.visibleWrites,Ae(r.path,l))})}return!0}else return!1}function vP(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Ae(t.path,n),e))return!0;return!1}function yP(t){t.visibleWrites=Aw(t.allWrites,wP,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wP(t){return t.visible}function Aw(t,e,n){let r=en.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Qt(n,o)?(a=ot(n,o),r=eo(r,a,s.snap)):Qt(o,n)&&(a=ot(o,n),r=eo(r,J(),s.snap.getChild(a)));else if(s.children){if(Qt(n,o))a=ot(n,o),r=M_(r,a,s.children);else if(Qt(o,n))if(a=ot(o,n),K(a))r=M_(r,J(),s.children);else{const l=ts(s.children,q(a));if(l){const u=l.getChild(re(a));r=eo(r,J(),u)}}}else throw cs("WriteRecord should have .snap or .children")}}return r}function bw(t,e,n,r,i){if(!r&&!i){const s=pi(t.visibleWrites,e);if(s!=null)return s;{const o=yr(t.visibleWrites,e);if(Jd(o))return n;if(n==null&&!Xd(o,J()))return null;{const a=n||B.EMPTY_NODE;return is(o,a)}}}else{const s=yr(t.visibleWrites,e);if(!i&&Jd(s))return n;if(!i&&n==null&&!Xd(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Qt(u.path,e)||Qt(e,u.path))},a=Aw(t.allWrites,o,e),l=n||B.EMPTY_NODE;return is(a,l)}}}function EP(t,e,n){let r=B.EMPTY_NODE;const i=pi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yr(t.visibleWrites,e);return n.forEachChild(ye,(o,a)=>{const l=is(yr(s,new ne(o)),a);r=r.updateImmediateChild(o,l)}),U_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yr(t.visibleWrites,e);return U_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function CP(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ae(e,n);if(Xd(t.visibleWrites,s))return null;{const o=yr(t.visibleWrites,s);return Jd(o)?i.getChild(n):is(o,i.getChild(n))}}function SP(t,e,n,r){const i=Ae(e,n),s=pi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yr(t.visibleWrites,i);return is(o,r.getNode().getImmediateChild(n))}else return null}function TP(t,e){return pi(t.visibleWrites,e)}function IP(t,e,n,r,i,s,o){let a;const l=yr(t.visibleWrites,e),u=pi(l,J());if(u!=null)a=u;else if(n!=null)a=is(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function kP(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function Ul(t,e,n,r){return bw(t.writeTree,t.treePath,e,n,r)}function Ff(t,e){return EP(t.writeTree,t.treePath,e)}function j_(t,e,n,r){return CP(t.writeTree,t.treePath,e,n,r)}function jl(t,e){return TP(t.writeTree,Ae(t.treePath,e))}function RP(t,e,n,r,i,s){return IP(t.writeTree,t.treePath,e,n,r,i,s)}function Uf(t,e,n){return SP(t.writeTree,t.treePath,e,n)}function Ow(t,e){return Dw(Ae(t.treePath,e),t.writeTree)}function Dw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Po(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,No(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,rs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Po(r,e.snapshotNode,i.oldSnap));else throw cs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Lw=new NP;class jf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ir(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ii(this.viewCache_),s=RP(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t){return{filter:t}}function AP(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bP(t,e,n,r,i){const s=new xP;let o,a;if(n.type===Xt.OVERWRITE){const u=n;u.source.fromUser?o=Zd(t,e,u.path,u.snap,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=Bl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Xt.MERGE){const u=n;u.source.fromUser?o=DP(t,e,u.path,u.children,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=eh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Xt.ACK_USER_WRITE){const u=n;u.revert?o=FP(t,e,u.path,r,i,s):o=LP(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Xt.LISTEN_COMPLETE)o=MP(t,e,n.path,r,s);else throw cs("Unknown operation type: "+n.type);const l=s.getChanges();return OP(e,o,l),{viewCache:o,changes:l}}function OP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Fl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(kw(Fl(e)))}}function Mw(t,e,n,r,i,s){const o=e.eventCache;if(jl(r,n)!=null)return e;{let a,l;if(K(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ii(e),d=u instanceof B?u:B.EMPTY_NODE,c=Ff(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Ul(r,ii(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){A(Tr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=j_(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=re(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=j_(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Uf(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Zs(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Bl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(K(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=q(n);if(!l.isCompleteForPath(n)&&Tr(n)>1)return e;const v=re(n),S=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=d.updatePriority(l.getNode(),S):u=d.updateChild(l.getNode(),g,S,v,Lw,null)}const c=Nw(e,u,l.isFullyInitialized()||K(n),d.filtersNodes()),h=new jf(i,c,s);return Mw(t,c,n,i,h,a)}function Zd(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new jf(i,e,s);if(K(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Zs(e,u,!0,t.filter.filtersNodes());else{const c=q(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Zs(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=re(n),g=a.getNode().getImmediateChild(c);let v;if(K(h))v=r;else{const E=d.getCompleteChild(c);E!=null?gw(h)===".priority"&&E.getChild(yw(h)).isEmpty()?v=E:v=E.updateChild(h,r):v=B.EMPTY_NODE}if(g.equals(v))l=e;else{const E=t.filter.updateChild(a.getNode(),c,v,h,d,o);l=Zs(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function B_(t,e){return t.eventCache.isCompleteForChild(e)}function DP(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Ae(n,l);B_(e,q(d))&&(a=Zd(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Ae(n,l);B_(e,q(d))||(a=Zd(t,a,d,u,i,s,o))}),a}function z_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function eh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;K(n)?u=r:u=new ae(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=z_(t,g,h);l=Bl(t,l,new ne(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),E=z_(t,v,h);l=Bl(t,l,new ne(c),E,i,s,o,a)}}),l}function LP(t,e,n,r,i,s,o){if(jl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(K(n)){let u=new ae(null);return l.getNode().forEachChild(Gi,(d,c)=>{u=u.set(new ne(d),c)}),eh(t,e,n,u,i,s,a,o)}else return e}else{let u=new ae(null);return r.foreach((d,c)=>{const h=Ae(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),eh(t,e,n,u,i,s,a,o)}}function MP(t,e,n,r,i){const s=e.serverCache,o=Nw(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return Mw(t,o,n,r,Lw,i)}function FP(t,e,n,r,i,s){let o;if(jl(r,n)!=null)return e;{const a=new jf(r,e,i),l=e.eventCache.getNode();let u;if(K(n)||q(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ul(r,ii(e));else{const c=e.serverCache.getNode();A(c instanceof B,"serverChildren would be complete if leaf node"),d=Ff(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=q(n);let c=Uf(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,re(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,B.EMPTY_NODE,re(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ul(r,ii(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||jl(r,J())!=null,Zs(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Of(r.getIndex()),s=rP(r);this.processor_=PP(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),d=new Ir(l,o.isFullyInitialized(),i.filtersNodes()),c=new Ir(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ku(c,d),this.eventGenerator_=new cP(this.query_)}get query(){return this.query_}}function jP(t){return t.viewCache_.serverCache.getNode()}function BP(t){return Fl(t.viewCache_)}function zP(t,e){const n=ii(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function V_(t){return t.eventRegistrations_.length===0}function VP(t,e){t.eventRegistrations_.push(e)}function $_(t,e,n){const r=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function W_(t,e,n,r){e.type===Xt.MERGE&&e.source.queryId!==null&&(A(ii(t.viewCache_),"We should always have a full cache before handling merges"),A(Fl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=bP(t.processor_,i,e,n,r);return AP(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Fw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function $P(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{r.push(rs(s,o))}),n.isFullyInitialized()&&r.push(kw(n.getNode())),Fw(t,r,n.getNode(),e)}function Fw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return dP(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;class Uw{constructor(){this.views=new Map}}function WP(t){A(!zl,"__referenceConstructor has already been defined"),zl=t}function HP(){return A(zl,"Reference.ts has not been loaded"),zl}function qP(t){return t.views.size===0}function Bf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return A(s!=null,"SyncTree gave us an op for an invalid query."),W_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(W_(o,e,n,r));return s}}function jw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ul(n,i?r:null),l=!1;a?l=!0:r instanceof B?(a=Ff(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const u=ku(new Ir(a,l,!1),new Ir(r,i,!1));return new UP(e,u)}return o}function GP(t,e,n,r,i,s){const o=jw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),VP(o,n),$P(o,n)}function KP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=kr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat($_(u,n,r)),V_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat($_(l,n,r)),V_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!kr(t)&&s.push(new(HP())(e._repo,e._path)),{removed:s,events:o}}function Bw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wr(t,e){let n=null;for(const r of t.views.values())n=n||zP(r,e);return n}function zw(t,e){if(e._queryParams.loadsAllData())return xu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Vw(t,e){return zw(t,e)!=null}function kr(t){return xu(t)!=null}function xu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl;function YP(t){A(!Vl,"__referenceConstructor has already been defined"),Vl=t}function QP(){return A(Vl,"Reference.ts has not been loaded"),Vl}let XP=1;class H_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=kP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $w(t,e,n,r,i){return mP(t.pendingWriteTree_,e,n,r,i),i?Zo(t,new ri(xw(),e,n)):[]}function Wr(t,e,n=!1){const r=_P(t.pendingWriteTree_,e);if(gP(t.pendingWriteTree_,e)){let s=new ae(null);return r.snap!=null?s=s.set(J(),!0):Et(r.children,o=>{s=s.set(new ne(o),!0)}),Zo(t,new Ml(r.path,s,n))}else return[]}function Jo(t,e,n){return Zo(t,new ri(Lf(),e,n))}function JP(t,e,n){const r=ae.fromObject(n);return Zo(t,new Oo(Lf(),e,r))}function ZP(t,e){return Zo(t,new bo(Lf(),e))}function eA(t,e,n){const r=Vf(t,n);if(r){const i=$f(r),s=i.path,o=i.queryId,a=ot(s,e),l=new bo(Mf(o),a);return Wf(t,s,l)}else return[]}function $l(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Vw(o,e))){const l=KP(o,e,n,r);qP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>kr(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=rA(h);for(let v=0;v<g.length;++v){const E=g[v],S=E.query,_=Gw(t,E);t.listenProvider_.startListening(to(S),Do(t,S),_.hashFn,_.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(to(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Nu(h));t.listenProvider_.stopListening(to(h),g)}))}iA(t,u)}return a}function Ww(t,e,n,r){const i=Vf(t,r);if(i!=null){const s=$f(i),o=s.path,a=s.queryId,l=ot(o,e),u=new ri(Mf(a),l,n);return Wf(t,o,u)}else return[]}function tA(t,e,n,r){const i=Vf(t,r);if(i){const s=$f(i),o=s.path,a=s.queryId,l=ot(o,e),u=ae.fromObject(n),d=new Oo(Mf(a),l,u);return Wf(t,o,d)}else return[]}function th(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const v=ot(h,i);s=s||wr(g,v),o=o||kr(g)});let a=t.syncPointTree_.get(i);a?(o=o||kr(a),s=s||wr(a,J())):(a=new Uw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const E=wr(v,J());E&&(s=s.updateImmediateChild(g,E))}));const u=Vw(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=Nu(e);A(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=sA();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Ru(t.pendingWriteTree_,i);let c=GP(a,e,n,d,s,l);if(!u&&!o&&!r){const h=zw(a,e);c=c.concat(oA(t,e,h))}return c}function zf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),u=wr(a,l);if(u)return u});return bw(i,e,s,n,!0)}function nA(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=ot(u,n);r=r||wr(d,c)});let i=t.syncPointTree_.get(n);i?r=r||wr(i,J()):(i=new Uw,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ir(r,!0,!1):null,a=Ru(t.pendingWriteTree_,e._path),l=jw(i,e,a,s?o.getNode():B.EMPTY_NODE,s);return BP(l)}function Zo(t,e){return Hw(e,t.syncPointTree_,null,Ru(t.pendingWriteTree_,J()))}function Hw(t,e,n,r){if(K(t.path))return qw(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=wr(i,J()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=Ow(r,o);s=s.concat(Hw(a,l,u,d))}return i&&(s=s.concat(Bf(i,t,r,n))),s}}function qw(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=wr(i,J()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Ow(r,o),d=t.operationForChild(o);d&&(s=s.concat(qw(d,a,l,u)))}),i&&(s=s.concat(Bf(i,t,r,n))),s}function Gw(t,e){const n=e.query,r=Do(t,n);return{hashFn:()=>(jP(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?eA(t,n._path,r):ZP(t,n._path);{const s=nN(i,n);return $l(t,n,null,s)}}}}function Do(t,e){const n=Nu(e);return t.queryToTagMap.get(n)}function Nu(t){return t._path.toString()+"$"+t._queryIdentifier}function Vf(t,e){return t.tagToQueryMap.get(e)}function $f(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function Wf(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=Ru(t.pendingWriteTree_,e);return Bf(r,n,i,null)}function rA(t){return t.fold((e,n,r)=>{if(n&&kr(n))return[xu(n)];{let i=[];return n&&(i=Bw(n)),Et(r,(s,o)=>{i=i.concat(o)}),i}})}function to(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(QP())(t._repo,t._path):t}function iA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Nu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function sA(){return XP++}function oA(t,e,n){const r=e._path,i=Do(t,e),s=Gw(t,n),o=t.listenProvider_.startListening(to(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)A(!kr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!K(u)&&d&&kr(d))return[xu(d).query];{let h=[];return d&&(h=h.concat(Bw(d).map(g=>g.query))),Et(c,(g,v)=>{h=h.concat(v)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(to(d),Do(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hf(n)}node(){return this.node_}}class qf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ae(this.path_,e);return new qf(this.syncTree_,n)}node(){return zf(this.syncTree_,this.path_)}}const aA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},q_=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uA(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},uA=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},cA=function(t,e,n,r){return Gf(e,new qf(n,t),r)},Kw=function(t,e,n){return Gf(t,new Hf(e),n)};function Gf(t,e,n){const r=t.getPriority().val(),i=q_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=q_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,Be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Fe(i))),o.forEachChild(ye,(a,l)=>{const u=Gf(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yf(t,e){let n=e instanceof ne?e:new ne(e),r=t,i=q(n);for(;i!==null;){const s=ts(r.node.children,i)||{children:{},childCount:0};r=new Kf(i,r,s),n=re(n),i=q(n)}return r}function ms(t){return t.node.value}function Yw(t,e){t.node.value=e,nh(t)}function Qw(t){return t.node.childCount>0}function dA(t){return ms(t)===void 0&&!Qw(t)}function Pu(t,e){Et(t.node.children,(n,r)=>{e(new Kf(n,t,r))})}function Xw(t,e,n,r){n&&!r&&e(t),Pu(t,i=>{Xw(i,e,!0,r)}),n&&r&&e(t)}function hA(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ea(t){return new ne(t.parent===null?t.name:ea(t.parent)+"/"+t.name)}function nh(t){t.parent!==null&&fA(t.parent,t.name,t)}function fA(t,e,n){const r=dA(n),i=Wn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,nh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=/[\[\].#$\/\u0000-\u001F\u007F]/,mA=/[\[\].#$\u0000-\u001F\u007F]/,Pc=10*1024*1024,Jw=function(t){return typeof t=="string"&&t.length!==0&&!pA.test(t)},Zw=function(t){return typeof t=="string"&&t.length!==0&&!mA.test(t)},_A=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zw(t)},gA=function(t,e,n,r){Qf(ff(t,"value"),e,n)},Qf=function(t,e,n){const r=n instanceof ne?new LN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ur(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ur(r)+" with contents = "+e.toString());if(Q0(e))throw new Error(t+"contains "+e.toString()+" "+Ur(r));if(typeof e=="string"&&e.length>Pc/3&&wu(e)>Pc)throw new Error(t+"contains a string greater than "+Pc+" utf8 bytes "+Ur(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Et(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Jw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ur(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MN(r,o),Qf(t,a,r),FN(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ur(r)+" in addition to actual children.")}},eE=function(t,e,n,r){if(!Zw(n))throw new Error(ff(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),eE(t,e,n)},yA=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},wA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_A(n))throw new Error(ff(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Pf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function tE(t,e,n){Xf(t,n),nE(t,r=>Pf(r,e))}function yn(t,e,n){Xf(t,n),nE(t,r=>Qt(r,e)||Qt(e,r))}function nE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(CA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xs&&Je("event: "+n.toString()),ps(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="repo_interrupt",TA=25;class IA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ll(),this.transactionQueueTree_=new Kf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kA(t,e,n){if(t.stats_=xf(t.repoInfo_),t.forceRestClient_||oN())t.server_=new Dl(t.repoInfo_,(r,i,s,o)=>{G_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>K_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new bn(t.repoInfo_,e,(r,i,s,o)=>{G_(t,r,i,s,o)},r=>{K_(t,r)},r=>{xA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=dN(t.repoInfo_,()=>new uP(t.stats_,t.server_)),t.infoData_=new iP,t.infoSyncTree_=new H_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Jo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zf(t,"connected",!1),t.serverSyncTree_=new H_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);yn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function RA(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jf(t){return aA({timestamp:RA(t)})}function G_(t,e,n,r,i){t.dataUpdateCount++;const s=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Sl(n,u=>Be(u));o=tA(t.serverSyncTree_,s,l,i)}else{const l=Be(n);o=Ww(t.serverSyncTree_,s,l,i)}else if(r){const l=Sl(n,u=>Be(u));o=JP(t.serverSyncTree_,s,l)}else{const l=Be(n);o=Jo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=bu(t,s)),yn(t.eventQueue_,a,o)}function K_(t,e){Zf(t,"connected",e),e===!1&&AA(t)}function xA(t,e){Et(e,(n,r)=>{Zf(t,n,r)})}function Zf(t,e,n){const r=new ne("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(r,i);const s=Jo(t.infoSyncTree_,r,i);yn(t.eventQueue_,r,s)}function rE(t){return t.nextWriteId_++}function NA(t,e,n){const r=nA(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Be(i).withIndex(e._queryParams.getIndex());th(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Jo(t.serverSyncTree_,e._path,s);else{const a=Do(t.serverSyncTree_,e);o=Ww(t.serverSyncTree_,e._path,s,a)}return yn(t.eventQueue_,e._path,o),$l(t.serverSyncTree_,e,n,null,!0),s},i=>(Au(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function PA(t,e,n,r,i){Au(t,"set",{path:e.toString(),value:n,priority:r});const s=Jf(t),o=Be(n,r),a=zf(t.serverSyncTree_,e),l=Kw(o,a,s),u=rE(t),d=$w(t.serverSyncTree_,e,l,u,!0);Xf(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const v=h==="ok";v||wt("set at "+e+" failed: "+h);const E=Wr(t.serverSyncTree_,u,!v);yn(t.eventQueue_,e,E),LA(t,i,h,g)});const c=lE(t,e);bu(t,c),yn(t.eventQueue_,c,[])}function AA(t){Au(t,"onDisconnectEvents");const e=Jf(t),n=Ll();Qd(t.onDisconnect_,J(),(i,s)=>{const o=cA(i,s,t.serverSyncTree_,e);Rw(n,i,o)});let r=[];Qd(n,J(),(i,s)=>{r=r.concat(Jo(t.serverSyncTree_,i,s));const o=lE(t,i);bu(t,o)}),t.onDisconnect_=Ll(),yn(t.eventQueue_,J(),r)}function bA(t,e,n){let r;q(e._path)===".info"?r=th(t.infoSyncTree_,e,n):r=th(t.serverSyncTree_,e,n),tE(t.eventQueue_,e._path,r)}function OA(t,e,n){let r;q(e._path)===".info"?r=$l(t.infoSyncTree_,e,n):r=$l(t.serverSyncTree_,e,n),tE(t.eventQueue_,e._path,r)}function DA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SA)}function Au(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Je(n,...e)}function LA(t,e,n,r){e&&ps(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function iE(t,e,n){return zf(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function ep(t,e=t.transactionQueueTree_){if(e||Ou(t,e),ms(e)){const n=oE(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&MA(t,ea(e),n)}else Qw(e)&&Pu(e,n=>{ep(t,n)})}function MA(t,e,n){const r=n.map(u=>u.currentWriteId),i=iE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];A(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=ot(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Au(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Wr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ou(t,Yf(t.transactionQueueTree_,e)),ep(t,t.transactionQueueTree_),yn(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ps(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{wt("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}bu(t,e)}},o)}function bu(t,e){const n=sE(t,e),r=ea(n),i=oE(t,n);return FA(t,i,r),r}function FA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ot(n,l.path);let d=!1,c;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Wr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=TA)d=!0,c="maxretry",i=i.concat(Wr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=iE(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){Qf("transaction failed: Data returned ",g,l.path);let v=Be(g);typeof g=="object"&&g!=null&&Wn(g,".priority")||(v=v.updatePriority(h.getPriority()));const S=l.currentWriteId,_=Jf(t),p=Kw(v,h,_);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=rE(t),o.splice(o.indexOf(S),1),i=i.concat($w(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Wr(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(Wr(t.serverSyncTree_,l.currentWriteId,!0))}yn(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Ou(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ps(r[a]);ep(t,t.transactionQueueTree_)}function sE(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&ms(r)===void 0;)r=Yf(r,n),e=re(e),n=q(e);return r}function oE(t,e){const n=[];return aE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function aE(t,e,n){const r=ms(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Pu(e,i=>{aE(t,i,n)})}function Ou(t,e){const n=ms(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Yw(e,n.length>0?n:void 0)}Pu(e,r=>{Ou(t,r)})}function lE(t,e){const n=ea(sE(t,e)),r=Yf(t.transactionQueueTree_,e);return hA(r,i=>{Ac(t,i)}),Ac(t,r),Xw(r,i=>{Ac(t,i)}),n}function Ac(t,e){const n=ms(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Yw(e,void 0):n.length=s+1,yn(t.eventQueue_,ea(e),i);for(let o=0;o<r.length;o++)ps(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):wt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Y_=function(t,e){const n=BA(t),r=n.namespace;n.domain==="firebase.com"&&Bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Xx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ne(n.pathString)}},BA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=UA(t.substring(d,c)));const h=jA(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class VA{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:gw(this._path)}get ref(){return new Hn(this._repo,this._path)}get _queryIdentifier(){const e=D_(this._queryParams),n=kf(e);return n==="{}"?"default":n}get _queryObject(){return D_(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof tp))return!1;const n=this._repo===e._repo,r=Pf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+DN(this._path)}}class Hn extends tp{constructor(e,n){super(e,n,new Df,!1)}get parent(){const e=yw(this._path);return e===null?null:new Hn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Lo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),r=rh(this.ref,e);return new Lo(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Lo(i,rh(this.ref,r),ye)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jt(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?rh(t._root,e):t._root}function rh(t,e){return t=$e(t),q(t._path)===null?vA("child","path",e):eE("child","path",e),new Hn(t._repo,Ae(t._path,e))}function ta(t,e){t=$e(t),yA("set",t._path),gA("set",e,t._path);const n=new yu;return PA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function cE(t){t=$e(t);const e=new uE(()=>{}),n=new Du(e);return NA(t._repo,t,n).then(r=>new Lo(r,new Hn(t._repo,t._path),t._queryParams.getIndex()))}class Du{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new zA("value",this,new Lo(e.snapshotNode,new Hn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new VA(this,e,n):null}matches(e){return e instanceof Du?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $A(t,e,n,r,i){const s=new uE(n,void 0),o=new Du(s);return bA(t._repo,t,o),()=>OA(t._repo,t,o)}function _s(t,e,n,r){return $A(t,"value",e)}WP(Hn);YP(Hn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="FIREBASE_DATABASE_EMULATOR_HOST",ih={};let HA=!1;function qA(t,e,n,r){t.repoInfo_=new lw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function GA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Y_(s,i),a=o.repoInfo,l;typeof process<"u"&&__&&(l=__[WA]),l?(s=`http://${l}?ns=${a.namespace}`,o=Y_(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new lN(t.name,t.options,e);wA("Invalid Firebase Database URL",o),K(o.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=YA(a,t,u,new aN(t.name,n));return new QA(d,t)}function KA(t,e){const n=ih[e];(!n||n[t.key]!==t)&&Bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DA(t),delete n[t.key]}function YA(t,e,n,r){let i=ih[e.name];i||(i={},ih[e.name]=i);let s=i[t.toURLString()];return s&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new IA(t,HA,n,r),i[t.toURLString()]=s,s}class QA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hn(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function XA(t=_f(),e){const n=Eu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=e0("database");r&&JA(n,...r)}return n}function JA(t,e,n,r={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Bn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new qa(qa.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:r0(r.mockUserToken,t.app.options.projectId);s=new qa(o)}qA(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){Hx(hi),Zr(new Sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return GA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mn(g_,v_,t),mn(g_,v_,"esm2017")}bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ZA();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebasestorage.googleapis.com",hE="storageBucket",eb=2*60*1e3,tb=10*60*1e3,nb=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends $n{constructor(e,n,r=0){super(bc(e),`Firebase Storage: ${n} (${bc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function bc(t){return"storage/"+t}function np(){const t="An unknown error occurred, please check the error payload for server response.";return new _e(ue.UNKNOWN,t)}function rb(t){return new _e(ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ib(t){return new _e(ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(ue.UNAUTHENTICATED,t)}function ob(){return new _e(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ab(t){return new _e(ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function fE(){return new _e(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pE(){return new _e(ue.CANCELED,"User canceled the upload/download.")}function lb(t){return new _e(ue.INVALID_URL,"Invalid URL '"+t+"'.")}function ub(t){return new _e(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cb(){return new _e(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+hE+"' property when initializing the app?")}function mE(){return new _e(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function db(){return new _e(ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function hb(){return new _e(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fb(t){return new _e(ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sh(t){return new _e(ue.INVALID_ARGUMENT,t)}function _E(){return new _e(ue.APP_DELETED,"The Firebase app was deleted.")}function pb(t){return new _e(ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function no(t,e){return new _e(ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function As(t){throw new _e(ue.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw ub(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const d="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${c}/${d}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},E=n===dE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",_=new RegExp(`^https?://${E}/${i}/${S}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:v,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<m.length;w++){const I=m[w],N=I.regex.exec(e);if(N){const b=N[I.indices.bucket];let P=N[I.indices.path];P||(P=""),r=new Tt(b,P),I.postModify(r);break}}if(r==null)throw lb(e);return r}}class mb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...S){u||(u=!0,e.apply(null,S))}function c(S){i=setTimeout(()=>{i=null,t(g,l())},S)}function h(){s&&clearTimeout(s)}function g(S,..._){if(u){h();return}if(S){h(),d.call(null,S,..._);return}if(l()||o){h(),d.call(null,S,..._);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,c(m)}let v=!1;function E(S){v||(v=!0,h(),!u&&(i!==null?(S||(a=2),clearTimeout(i),c(0)):S||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function gb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){return t!==void 0}function yb(t){return typeof t=="function"}function wb(t){return typeof t=="object"&&!Array.isArray(t)}function Lu(t){return typeof t=="string"||t instanceof String}function Q_(t){return rp()&&t instanceof Blob}function rp(){return typeof Blob<"u"}function X_(t,e,n,r){if(r<e)throw sh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw sh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function gE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r,i,s,o,a,l,u,d,c,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ka(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Gr.NO_ERROR,l=s.getStatus();if(!a||vE(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Gr.ABORT;r(!1,new ka(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ka(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());vb(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=np();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?_E():pE();o(l)}else{const l=fE();o(l)}};this.canceled_?n(!1,new ka(!1,null,!0)):this.backoffId_=_b(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Cb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Sb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ib(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kb(t,e,n,r,i,s,o=!0){const a=gE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Tb(u,e),Cb(u,n),Sb(u,s),Ib(u,r),new Eb(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xb(...t){const e=Rb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(rp())return new Blob(t);throw new _e(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Nb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){if(typeof atob>"u")throw fb("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Oc{constructor(e,n){this.data=e,this.contentType=n||null}}function Ab(t,e){switch(t){case dn.RAW:return new Oc(yE(e));case dn.BASE64:case dn.BASE64URL:return new Oc(wE(t,e));case dn.DATA_URL:return new Oc(Ob(e),Db(e))}throw np()}function yE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bb(t){let e;try{e=decodeURIComponent(t)}catch{throw no(dn.DATA_URL,"Malformed data URL.")}return yE(e)}function wE(t,e){switch(t){case dn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw no(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw no(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Pb(e)}catch(i){throw i.message.includes("polyfill")?i:no(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class EE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw no(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Lb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Ob(t){const e=new EE(t);return e.base64?wE(dn.BASE64,e.rest):bb(e.rest)}function Db(t){return new EE(t).contentType}function Lb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){let r=0,i="";Q_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Q_(this.data_)){const r=this.data_,i=Nb(r,e,n);return i===null?null:new rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(rp()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr(xb.apply(null,n))}else{const n=e.map(o=>Lu(o)?Ab(dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new rr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){let e;try{e=JSON.parse(t)}catch{return null}return wb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Fb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function SE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t,e){return e}class tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Ub}}let Ra=null;function jb(t){return!Lu(t)||t.length<2?t:SE(t)}function TE(){if(Ra)return Ra;const t=[];t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0));function e(s,o){return jb(o)}const n=new tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new tt("size");return i.xform=r,t.push(i),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),Ra=t,Ra}function Bb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function zb(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Bb(r,t),r}function IE(t,e,n){const r=CE(e);return r===null?null:zb(t,r,n)}function Vb(t,e,n,r){const i=CE(e);if(i===null||!Lu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,c=t.fullPath,h="/b/"+o(d)+"/o/"+o(c),g=na(h,n,r),v=gE({alt:"media",token:u});return g+v})[0]}function kE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class gs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){if(!t)throw np()}function ip(t,e){function n(r,i){const s=IE(t,i,e);return On(s!==null),s}return n}function $b(t,e){function n(r,i){const s=IE(t,i,e);return On(s!==null),Vb(s,i,t.host,t._protocol)}return n}function ra(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ob():i=sb():n.getStatus()===402?i=ib(t.bucket):n.getStatus()===403?i=ab(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function RE(t){const e=ra(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=rb(t.path)),s.serverResponse=i.serverResponse,s}return n}function Wb(t,e,n){const r=e.fullServerUrl(),i=na(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new gs(i,s,ip(t,n),o);return a.errorHandler=RE(e),a}function Hb(t,e,n){const r=e.fullServerUrl(),i=na(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new gs(i,s,$b(t,n),o);return a.errorHandler=RE(e),a}function qb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qb(null,e)),r}function Gb(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let w=0;w<2;w++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=xE(e,r,i),d=kE(u,n),c="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=rr.getBlob(c,r,h);if(g===null)throw mE();const v={name:u.fullPath},E=na(s,t.host,t._protocol),S="POST",_=t.maxUploadRetryTime,p=new gs(E,S,ip(t,n),_);return p.urlParams=v,p.headers=o,p.body=g.uploadData(),p.errorHandler=ra(e),p}class Wl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function sp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{On(!1)}return On(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Kb(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=xE(e,r,i),a={name:o.fullPath},l=na(s,t.host,t._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},c=kE(o,n),h=t.maxUploadRetryTime;function g(E){sp(E);let S;try{S=E.getResponseHeader("X-Goog-Upload-URL")}catch{On(!1)}return On(Lu(S)),S}const v=new gs(l,u,g,h);return v.urlParams=a,v.headers=d,v.body=c,v.errorHandler=ra(e),v}function Yb(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const d=sp(u,["active","final"]);let c=null;try{c=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{On(!1)}c||On(!1);const h=Number(c);return On(!isNaN(h)),new Wl(h,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new gs(n,o,s,a);return l.headers=i,l.errorHandler=ra(e),l}const J_=256*1024;function Qb(t,e,n,r,i,s,o,a){const l=new Wl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw db();const u=l.total-l.current;let d=u;i>0&&(d=Math.min(d,i));const c=l.current,h=c+d;let g="";d===0?g="finalize":u===d?g="upload, finalize":g="upload";const v={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},E=r.slice(c,h);if(E===null)throw mE();function S(w,I){const N=sp(w,["active","final"]),b=l.current+d,P=r.size();let H;return N==="final"?H=ip(e,s)(w,I):H=null,new Wl(b,P,N==="final",H)}const _="POST",p=e.maxUploadRetryTime,m=new gs(n,_,S,p);return m.headers=v,m.body=E.uploadData(),m.progressCallback=a||null,m.errorHandler=ra(t),m}const ft={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Dc(t){switch(t){case"running":case"pausing":case"canceling":return ft.RUNNING;case"paused":return ft.PAUSED;case"success":return ft.SUCCESS;case"canceled":return ft.CANCELED;case"error":return ft.ERROR;default:return ft.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r){if(yb(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Jb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw As("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw As("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw As("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw As("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw As("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Zb extends Jb{initXhr(){this.xhr_.responseType="text"}}function Ei(){return new Zb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=TE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(vE(i.status,[]))if(s)i=fE();else{this.sleepTime=Math.max(this.sleepTime*2,nb),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ue.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Kb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ei,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=Yb(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ei,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=J_*this._chunkMultiplier,n=new Wl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Qb(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ei,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){J_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Wb(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ei,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Gb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ei,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=pE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Dc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new Xb(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Dc(this._state)){case ft.SUCCESS:vi(this._resolve.bind(null,this.snapshot))();break;case ft.CANCELED:case ft.ERROR:const n=this._reject;vi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Dc(this._state)){case ft.RUNNING:case ft.PAUSED:e.next&&vi(e.next.bind(e,this.snapshot))();break;case ft.SUCCESS:e.complete&&vi(e.complete.bind(e))();break;case ft.CANCELED:case ft.ERROR:e.error&&vi(e.error.bind(e,this._error))();break;default:e.error&&vi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new si(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return SE(this._location.path)}get storage(){return this._service}get parent(){const e=Mb(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new si(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pb(e)}}function tO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new eO(t,new rr(e),n)}function nO(t){t._throwIfRoot("getDownloadURL");const e=Hb(t.storage,t._location,TE());return t.storage.makeRequestWithTokens(e,Ei).then(n=>{if(n===null)throw hb();return n})}function rO(t,e){const n=Fb(t._location.path,e),r=new Tt(t._location.bucket,n);return new si(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){return/^[A-Za-z]+:\/\//.test(t)}function sO(t,e){return new si(t,e)}function NE(t,e){if(t instanceof op){const n=t;if(n._bucket==null)throw cb();const r=new si(n,n._bucket);return e!=null?NE(r,e):r}else return e!==void 0?rO(t,e):t}function oO(t,e){if(e&&iO(e)){if(t instanceof op)return sO(t,e);throw sh("To use ref(service, url), the first argument must be a Storage instance.")}else return NE(t,e)}function Z_(t,e){const n=e==null?void 0:e[hE];return n==null?null:Tt.makeFromBucketSpec(n,t)}function aO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:r0(i,t.app.options.projectId))}class op{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=dE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eb,this._maxUploadRetryTime=tb,this._requests=new Set,i!=null?this._bucket=Tt.makeFromBucketSpec(i,this._host):this._bucket=Z_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=Z_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){X_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){X_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new si(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new mb(_E());{const o=kb(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const eg="@firebase/storage",tg="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="storage";function AE(t,e,n){return t=$e(t),tO(t,e,n)}function bE(t){return t=$e(t),nO(t)}function OE(t,e){return t=$e(t),oO(t,e)}function lO(t=_f(),e){t=$e(t);const r=Eu(t,PE).getImmediate({identifier:e}),i=e0("storage");return i&&uO(r,...i),r}function uO(t,e,n,r={}){aO(t,e,n,r)}function cO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new op(n,r,i,e,hi)}function dO(){Zr(new Sr(PE,cO,"PUBLIC").setMultipleInstances(!0)),mn(eg,tg,""),mn(eg,tg,"esm2017")}dO();const hO={apiKey:"AIzaSyCrrUf1ub3xbIh9NOoMyHIMRvtlYpT4NA4",authDomain:"carrent-d712d.firebaseapp.com",projectId:"carrent-d712d",storageBucket:"carrent-d712d.appspot.com",messagingSenderId:"672391030058",appId:"1:672391030058:web:157fb2039beefe5eb1ea53",measurementId:"G-R6WXZFEKFE",databaseUrl:"https://carrent-d712d-default-rtdb.firebaseio.com/"},ap=u0(hO),Ve=q0(ap),Bt=XA(ap),DE=lO(ap),fO=()=>{const[t,e]=k.useState(!1);return k.useEffect(()=>{const n=Ve.onAuthStateChanged(r=>{e(!!r)});return()=>n()},[]),f.jsx("div",{children:f.jsxs("div",{className:Bm.headerRight,children:[f.jsxs("ul",{className:Bm.ulNav,children:[f.jsx("li",{children:f.jsx(an,{to:"/",children:"Home"})}),t?f.jsx("li",{children:f.jsx(an,{to:"/Profile",children:"Profile"})}):!1,f.jsx("li",{children:f.jsx(an,{to:"/SearchAuto",children:"Cars"})}),t?f.jsx("li",{children:f.jsx(an,{to:"/MyCars",children:"Add"})}):!1,t?f.jsx("li",{children:f.jsx(an,{to:"/MyOrders",children:"Order"})}):!1,f.jsx("li",{children:f.jsx(an,{to:"/AboutUs",children:"About us"})})]}),f.jsx("div",{children:f.jsx("ul",{children:f.jsx(an,{to:"/Login",children:t?f.jsx("button",{onClick:()=>AR(Ve),children:"Sign out"}):f.jsx("button",{children:"Login | Sign up"})})})})]})})},pO=()=>(k.useState(!0),f.jsx("div",{className:"container",children:f.jsxs("div",{className:eI.Header,children:[f.jsx("div",{children:f.jsx("h2",{children:"CARENT"})}),f.jsx("div",{children:f.jsx(fO,{})})]})})),mO="_Profile_7abol_1",_O="_profile_7abol_27",gO="_avatar_7abol_67",vO="_nameLabel_7abol_109",yO="_personal_7abol_127",wO="_profileBtn_7abol_177",Kn={Profile:mO,profile:_O,avatar:gO,nameLabel:vO,personal:yO,profileBtn:wO},EO=({type:t,fullWidth:e,to:n,children:r,variant:i="solid ",onClick:s})=>{const o={width:e?"100%":void 0};return f.jsx(f.Fragment,{children:n?f.jsx(an,{to:n,className:`btn ${i||""}`,children:r}):f.jsx("button",{style:o,type:t&&t,className:`btn ${i||""}`,onClick:s,children:r})})};var ia=t=>t.type==="checkbox",Mi=t=>t instanceof Date,st=t=>t==null;const LE=t=>typeof t=="object";var Ie=t=>!st(t)&&!Array.isArray(t)&&LE(t)&&!Mi(t),CO=t=>Ie(t)&&t.target?ia(t.target)?t.target.checked:t.target.value:t,SO=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,TO=(t,e)=>t.has(SO(e)),IO=t=>{const e=t.constructor&&t.constructor.prototype;return Ie(e)&&e.hasOwnProperty("isPrototypeOf")},lp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function bt(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(lp&&(t instanceof Blob||t instanceof FileList))&&(n||Ie(t)))if(e=n?[]:{},!n&&!IO(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=bt(t[r]));else return t;return e}var Mu=t=>Array.isArray(t)?t.filter(Boolean):[],Ee=t=>t===void 0,F=(t,e,n)=>{if(!e||!Ie(t))return n;const r=Mu(e.split(/[,[\].]+?/)).reduce((i,s)=>st(i)?i:i[s],t);return Ee(r)||r===t?Ee(t[e])?n:t[e]:r},ln=t=>typeof t=="boolean",up=t=>/^\w*$/.test(t),ME=t=>Mu(t.replace(/["|']|\]/g,"").split(/\.|\[/)),oe=(t,e,n)=>{let r=-1;const i=up(e)?[e]:ME(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=Ie(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}if(a==="__proto__")return;t[a]=l,t=t[a]}return t};const ng={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Kt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},wn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ht.createContext(null);var kO=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==Kt.all&&(e._proxyFormState[o]=!r||Kt.all),t[o]}});return i},dt=t=>Ie(t)&&!Object.keys(t).length,RO=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return dt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===Kt.all)},Ga=t=>Array.isArray(t)?t:[t];function xO(t){const e=ht.useRef(t);e.current=t,ht.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var hn=t=>typeof t=="string",NO=(t,e,n,r,i)=>hn(t)?(r&&e.watch.add(t),F(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),F(n,s))):(r&&(e.watchAll=!0),n),PO=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},rg=t=>({isOnSubmit:!t||t===Kt.onSubmit,isOnBlur:t===Kt.onBlur,isOnChange:t===Kt.onChange,isOnAll:t===Kt.all,isOnTouch:t===Kt.onTouched}),ig=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const ro=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=F(t,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)return!0;if(o.ref&&e(o.ref,o.name)&&!r)return!0;if(ro(a,e))break}else if(Ie(a)&&ro(a,e))break}}};var AO=(t,e,n)=>{const r=Ga(F(t,n));return oe(r,"root",e[n]),oe(t,n,r),t},cp=t=>t.type==="file",Nn=t=>typeof t=="function",Hl=t=>{if(!lp)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Ka=t=>hn(t),dp=t=>t.type==="radio",ql=t=>t instanceof RegExp;const sg={value:!1,isValid:!1},og={value:!0,isValid:!0};var FE=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Ee(t[0].attributes.value)?Ee(t[0].value)||t[0].value===""?og:{value:t[0].value,isValid:!0}:og:sg}return sg};const ag={isValid:!1,value:null};var UE=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,ag):ag;function lg(t,e,n="validate"){if(Ka(t)||Array.isArray(t)&&t.every(Ka)||ln(t)&&!t)return{type:n,message:Ka(t)?t:"",ref:e}}var yi=t=>Ie(t)&&!ql(t)?t:{value:t,message:""},ug=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:d,max:c,pattern:h,validate:g,name:v,valueAsNumber:E,mount:S,disabled:_}=t._f,p=F(e,v);if(!S||_)return{};const m=o?o[0]:s,w=W=>{r&&m.reportValidity&&(m.setCustomValidity(ln(W)?"":W||""),m.reportValidity())},I={},N=dp(s),b=ia(s),P=N||b,H=(E||cp(s))&&Ee(s.value)&&Ee(p)||Hl(s)&&s.value===""||p===""||Array.isArray(p)&&!p.length,j=PO.bind(null,v,n,I),Oe=(W,Q,ge,De=wn.maxLength,et=wn.minLength)=>{const Ke=W?Q:ge;I[v]={type:W?De:et,message:Ke,ref:s,...j(W?De:et,Ke)}};if(i?!Array.isArray(p)||!p.length:a&&(!P&&(H||st(p))||ln(p)&&!p||b&&!FE(o).isValid||N&&!UE(o).isValid)){const{value:W,message:Q}=Ka(a)?{value:!!a,message:a}:yi(a);if(W&&(I[v]={type:wn.required,message:Q,ref:m,...j(wn.required,Q)},!n))return w(Q),I}if(!H&&(!st(d)||!st(c))){let W,Q;const ge=yi(c),De=yi(d);if(!st(p)&&!isNaN(p)){const et=s.valueAsNumber||p&&+p;st(ge.value)||(W=et>ge.value),st(De.value)||(Q=et<De.value)}else{const et=s.valueAsDate||new Date(p),Ke=$=>new Date(new Date().toDateString()+" "+$),D=s.type=="time",V=s.type=="week";hn(ge.value)&&p&&(W=D?Ke(p)>Ke(ge.value):V?p>ge.value:et>new Date(ge.value)),hn(De.value)&&p&&(Q=D?Ke(p)<Ke(De.value):V?p<De.value:et<new Date(De.value))}if((W||Q)&&(Oe(!!W,ge.message,De.message,wn.max,wn.min),!n))return w(I[v].message),I}if((l||u)&&!H&&(hn(p)||i&&Array.isArray(p))){const W=yi(l),Q=yi(u),ge=!st(W.value)&&p.length>+W.value,De=!st(Q.value)&&p.length<+Q.value;if((ge||De)&&(Oe(ge,W.message,Q.message),!n))return w(I[v].message),I}if(h&&!H&&hn(p)){const{value:W,message:Q}=yi(h);if(ql(W)&&!p.match(W)&&(I[v]={type:wn.pattern,message:Q,ref:s,...j(wn.pattern,Q)},!n))return w(Q),I}if(g){if(Nn(g)){const W=await g(p,e),Q=lg(W,m);if(Q&&(I[v]={...Q,...j(wn.validate,Q.message)},!n))return w(Q.message),I}else if(Ie(g)){let W={};for(const Q in g){if(!dt(W)&&!n)break;const ge=lg(await g[Q](p,e),m,Q);ge&&(W={...ge,...j(Q,ge.message)},w(ge.message),n&&(I[v]=W))}if(!dt(W)&&(I[v]={ref:m,...W},!n))return I}}return w(!0),I};function bO(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Ee(t)?r++:t[e[r++]];return t}function OO(t){for(const e in t)if(t.hasOwnProperty(e)&&!Ee(t[e]))return!1;return!0}function ke(t,e){const n=Array.isArray(e)?e:up(e)?[e]:ME(e),r=n.length===1?t:bO(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Ie(r)&&dt(r)||Array.isArray(r)&&OO(r))&&ke(t,n.slice(0,-1)),t}var Lc=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},Gl=t=>st(t)||!LE(t);function ir(t,e){if(Gl(t)||Gl(e))return t===e;if(Mi(t)&&Mi(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Mi(s)&&Mi(o)||Ie(s)&&Ie(o)||Array.isArray(s)&&Array.isArray(o)?!ir(s,o):s!==o)return!1}}return!0}var jE=t=>t.type==="select-multiple",DO=t=>dp(t)||ia(t),Mc=t=>Hl(t)&&t.isConnected,BE=t=>{for(const e in t)if(Nn(t[e]))return!0;return!1};function Kl(t,e={}){const n=Array.isArray(t);if(Ie(t)||n)for(const r in t)Array.isArray(t[r])||Ie(t[r])&&!BE(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Kl(t[r],e[r])):st(t[r])||(e[r]=!0);return e}function zE(t,e,n){const r=Array.isArray(t);if(Ie(t)||r)for(const i in t)Array.isArray(t[i])||Ie(t[i])&&!BE(t[i])?Ee(e)||Gl(n[i])?n[i]=Array.isArray(t[i])?Kl(t[i],[]):{...Kl(t[i])}:zE(t[i],st(e)?{}:e[i],n[i]):n[i]=!ir(t[i],e[i]);return n}var xa=(t,e)=>zE(t,e,Kl(e)),VE=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Ee(t)?t:e?t===""?NaN:t&&+t:n&&hn(t)?new Date(t):r?r(t):t;function Fc(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return cp(e)?e.files:dp(e)?UE(t.refs).value:jE(e)?[...e.selectedOptions].map(({value:n})=>n):ia(e)?FE(t.refs).value:VE(Ee(e.value)?t.ref.value:e.value,t)}var LO=(t,e,n,r)=>{const i={};for(const s of t){const o=F(e,s);o&&oe(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},bs=t=>Ee(t)?t:ql(t)?t.source:Ie(t)?ql(t.value)?t.value.source:t.value:t;const cg="AsyncFunction";var MO=t=>(!t||!t.validate)&&!!(Nn(t.validate)&&t.validate.constructor.name===cg||Ie(t.validate)&&Object.values(t.validate).find(e=>e.constructor.name===cg)),FO=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function dg(t,e,n){const r=F(t,n);if(r||up(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=F(e,s),a=F(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var UO=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,jO=(t,e)=>!Mu(F(t,e)).length&&ke(t,e);const BO={mode:Kt.onSubmit,reValidateMode:Kt.onChange,shouldFocusError:!0};function zO(t={}){let e={...BO,...t},n={submitCount:0,isDirty:!1,isLoading:Nn(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},i=Ie(e.defaultValues)||Ie(e.values)?bt(e.defaultValues||e.values)||{}:{},s=e.shouldUnregister?{}:bt(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},c={values:Lc(),array:Lc(),state:Lc()},h=rg(e.mode),g=rg(e.reValidateMode),v=e.criteriaMode===Kt.all,E=y=>C=>{clearTimeout(u),u=setTimeout(y,C)},S=async y=>{if(d.isValid||y){const C=e.resolver?dt((await P()).errors):await j(r,!0);C!==n.isValid&&c.state.next({isValid:C})}},_=(y,C)=>{(d.isValidating||d.validatingFields)&&((y||Array.from(a.mount)).forEach(T=>{T&&(C?oe(n.validatingFields,T,C):ke(n.validatingFields,T))}),c.state.next({validatingFields:n.validatingFields,isValidating:!dt(n.validatingFields)}))},p=(y,C=[],T,L,O=!0,x=!0)=>{if(L&&T){if(o.action=!0,x&&Array.isArray(F(r,y))){const U=T(F(r,y),L.argA,L.argB);O&&oe(r,y,U)}if(x&&Array.isArray(F(n.errors,y))){const U=T(F(n.errors,y),L.argA,L.argB);O&&oe(n.errors,y,U),jO(n.errors,y)}if(d.touchedFields&&x&&Array.isArray(F(n.touchedFields,y))){const U=T(F(n.touchedFields,y),L.argA,L.argB);O&&oe(n.touchedFields,y,U)}d.dirtyFields&&(n.dirtyFields=xa(i,s)),c.state.next({name:y,isDirty:W(y,C),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else oe(s,y,C)},m=(y,C)=>{oe(n.errors,y,C),c.state.next({errors:n.errors})},w=y=>{n.errors=y,c.state.next({errors:n.errors,isValid:!1})},I=(y,C,T,L)=>{const O=F(r,y);if(O){const x=F(s,y,Ee(T)?F(i,y):T);Ee(x)||L&&L.defaultChecked||C?oe(s,y,C?x:Fc(O._f)):De(y,x),o.mount&&S()}},N=(y,C,T,L,O)=>{let x=!1,U=!1;const Z={name:y},Le=!!(F(r,y)&&F(r,y)._f&&F(r,y)._f.disabled);if(!T||L){d.isDirty&&(U=n.isDirty,n.isDirty=Z.isDirty=W(),x=U!==Z.isDirty);const Me=Le||ir(F(i,y),C);U=!!(!Le&&F(n.dirtyFields,y)),Me||Le?ke(n.dirtyFields,y):oe(n.dirtyFields,y,!0),Z.dirtyFields=n.dirtyFields,x=x||d.dirtyFields&&U!==!Me}if(T){const Me=F(n.touchedFields,y);Me||(oe(n.touchedFields,y,T),Z.touchedFields=n.touchedFields,x=x||d.touchedFields&&Me!==T)}return x&&O&&c.state.next(Z),x?Z:{}},b=(y,C,T,L)=>{const O=F(n.errors,y),x=d.isValid&&ln(C)&&n.isValid!==C;if(t.delayError&&T?(l=E(()=>m(y,T)),l(t.delayError)):(clearTimeout(u),l=null,T?oe(n.errors,y,T):ke(n.errors,y)),(T?!ir(O,T):O)||!dt(L)||x){const U={...L,...x&&ln(C)?{isValid:C}:{},errors:n.errors,name:y};n={...n,...U},c.state.next(U)}},P=async y=>{_(y,!0);const C=await e.resolver(s,e.context,LO(y||a.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return _(y),C},H=async y=>{const{errors:C}=await P(y);if(y)for(const T of y){const L=F(C,T);L?oe(n.errors,T,L):ke(n.errors,T)}else n.errors=C;return C},j=async(y,C,T={valid:!0})=>{for(const L in y){const O=y[L];if(O){const{_f:x,...U}=O;if(x){const Z=a.array.has(x.name),Le=O._f&&MO(O._f);Le&&d.validatingFields&&_([L],!0);const Me=await ug(O,s,v,e.shouldUseNativeValidation&&!C,Z);if(Le&&d.validatingFields&&_([L]),Me[x.name]&&(T.valid=!1,C))break;!C&&(F(Me,x.name)?Z?AO(n.errors,Me,x.name):oe(n.errors,x.name,Me[x.name]):ke(n.errors,x.name))}!dt(U)&&await j(U,C,T)}}return T.valid},Oe=()=>{for(const y of a.unMount){const C=F(r,y);C&&(C._f.refs?C._f.refs.every(T=>!Mc(T)):!Mc(C._f.ref))&&zt(y)}a.unMount=new Set},W=(y,C)=>(y&&C&&oe(s,y,C),!ir(ce(),i)),Q=(y,C,T)=>NO(y,a,{...o.mount?s:Ee(C)?i:hn(y)?{[y]:C}:C},T,C),ge=y=>Mu(F(o.mount?s:i,y,t.shouldUnregister?F(i,y,[]):[])),De=(y,C,T={})=>{const L=F(r,y);let O=C;if(L){const x=L._f;x&&(!x.disabled&&oe(s,y,VE(C,x)),O=Hl(x.ref)&&st(C)?"":C,jE(x.ref)?[...x.ref.options].forEach(U=>U.selected=O.includes(U.value)):x.refs?ia(x.ref)?x.refs.length>1?x.refs.forEach(U=>(!U.defaultChecked||!U.disabled)&&(U.checked=Array.isArray(O)?!!O.find(Z=>Z===U.value):O===U.value)):x.refs[0]&&(x.refs[0].checked=!!O):x.refs.forEach(U=>U.checked=U.value===O):cp(x.ref)?x.ref.value="":(x.ref.value=O,x.ref.type||c.values.next({name:y,values:{...s}})))}(T.shouldDirty||T.shouldTouch)&&N(y,O,T.shouldTouch,T.shouldDirty,!0),T.shouldValidate&&$(y)},et=(y,C,T)=>{for(const L in C){const O=C[L],x=`${y}.${L}`,U=F(r,x);(a.array.has(y)||!Gl(O)||U&&!U._f)&&!Mi(O)?et(x,O,T):De(x,O,T)}},Ke=(y,C,T={})=>{const L=F(r,y),O=a.array.has(y),x=bt(C);oe(s,y,x),O?(c.array.next({name:y,values:{...s}}),(d.isDirty||d.dirtyFields)&&T.shouldDirty&&c.state.next({name:y,dirtyFields:xa(i,s),isDirty:W(y,x)})):L&&!L._f&&!st(x)?et(y,x,T):De(y,x,T),ig(y,a)&&c.state.next({...n}),c.values.next({name:o.mount?y:void 0,values:{...s}})},D=async y=>{o.mount=!0;const C=y.target;let T=C.name,L=!0;const O=F(r,T),x=()=>C.type?Fc(O._f):CO(y),U=Z=>{L=Number.isNaN(Z)||ir(Z,F(s,T,Z))};if(O){let Z,Le;const Me=x(),Dr=y.type===ng.BLUR||y.type===ng.FOCUS_OUT,EC=!FO(O._f)&&!e.resolver&&!F(n.errors,T)&&!O._f.deps||UO(Dr,F(n.touchedFields,T),n.isSubmitted,g,h),$u=ig(T,a,Dr);oe(s,T,Me),Dr?(O._f.onBlur&&O._f.onBlur(y),l&&l(0)):O._f.onChange&&O._f.onChange(y);const Wu=N(T,Me,Dr,!1),CC=!dt(Wu)||$u;if(!Dr&&c.values.next({name:T,type:y.type,values:{...s}}),EC)return d.isValid&&(t.mode==="onBlur"?Dr&&S():S()),CC&&c.state.next({name:T,...$u?{}:Wu});if(!Dr&&$u&&c.state.next({...n}),e.resolver){const{errors:Ep}=await P([T]);if(U(Me),L){const SC=dg(n.errors,r,T),Cp=dg(Ep,r,SC.name||T);Z=Cp.error,T=Cp.name,Le=dt(Ep)}}else _([T],!0),Z=(await ug(O,s,v,e.shouldUseNativeValidation))[T],_([T]),U(Me),L&&(Z?Le=!1:d.isValid&&(Le=await j(r,!0)));L&&(O._f.deps&&$(O._f.deps),b(T,Le,Z,Wu))}},V=(y,C)=>{if(F(n.errors,C)&&y.focus)return y.focus(),1},$=async(y,C={})=>{let T,L;const O=Ga(y);if(e.resolver){const x=await H(Ee(y)?y:O);T=dt(x),L=y?!O.some(U=>F(x,U)):T}else y?(L=(await Promise.all(O.map(async x=>{const U=F(r,x);return await j(U&&U._f?{[x]:U}:U)}))).every(Boolean),!(!L&&!n.isValid)&&S()):L=T=await j(r);return c.state.next({...!hn(y)||d.isValid&&T!==n.isValid?{}:{name:y},...e.resolver||!y?{isValid:T}:{},errors:n.errors}),C.shouldFocus&&!L&&ro(r,V,y?O:a.mount),L},ce=y=>{const C={...o.mount?s:i};return Ee(y)?C:hn(y)?F(C,y):y.map(T=>F(C,T))},we=(y,C)=>({invalid:!!F((C||n).errors,y),isDirty:!!F((C||n).dirtyFields,y),error:F((C||n).errors,y),isValidating:!!F(n.validatingFields,y),isTouched:!!F((C||n).touchedFields,y)}),mi=y=>{y&&Ga(y).forEach(C=>ke(n.errors,C)),c.state.next({errors:y?n.errors:{}})},rn=(y,C,T)=>{const L=(F(r,y,{_f:{}})._f||{}).ref,O=F(n.errors,y)||{},{ref:x,message:U,type:Z,...Le}=O;oe(n.errors,y,{...Le,...C,ref:L}),c.state.next({name:y,errors:n.errors,isValid:!1}),T&&T.shouldFocus&&L&&L.focus&&L.focus()},vs=(y,C)=>Nn(y)?c.values.subscribe({next:T=>y(Q(void 0,C),T)}):Q(y,C,!0),zt=(y,C={})=>{for(const T of y?Ga(y):a.mount)a.mount.delete(T),a.array.delete(T),C.keepValue||(ke(r,T),ke(s,T)),!C.keepError&&ke(n.errors,T),!C.keepDirty&&ke(n.dirtyFields,T),!C.keepTouched&&ke(n.touchedFields,T),!C.keepIsValidating&&ke(n.validatingFields,T),!e.shouldUnregister&&!C.keepDefaultValue&&ke(i,T);c.values.next({values:{...s}}),c.state.next({...n,...C.keepDirty?{isDirty:W()}:{}}),!C.keepIsValid&&S()},Or=({disabled:y,name:C,field:T,fields:L,value:O})=>{if(ln(y)&&o.mount||y){const x=y?void 0:Ee(O)?Fc(T?T._f:F(L,C)._f):O;oe(s,C,x),N(C,x,!1,!1,!0)}},Vu=(y,C={})=>{let T=F(r,y);const L=ln(C.disabled)||ln(t.disabled);return oe(r,y,{...T||{},_f:{...T&&T._f?T._f:{ref:{name:y}},name:y,mount:!0,...C}}),a.mount.add(y),T?Or({field:T,disabled:ln(C.disabled)?C.disabled:t.disabled,name:y,value:C.value}):I(y,!0,C.value),{...L?{disabled:C.disabled||t.disabled}:{},...e.progressive?{required:!!C.required,min:bs(C.min),max:bs(C.max),minLength:bs(C.minLength),maxLength:bs(C.maxLength),pattern:bs(C.pattern)}:{},name:y,onChange:D,onBlur:D,ref:O=>{if(O){Vu(y,C),T=F(r,y);const x=Ee(O.value)&&O.querySelectorAll&&O.querySelectorAll("input,select,textarea")[0]||O,U=DO(x),Z=T._f.refs||[];if(U?Z.find(Le=>Le===x):x===T._f.ref)return;oe(r,y,{_f:{...T._f,...U?{refs:[...Z.filter(Mc),x,...Array.isArray(F(i,y))?[{}]:[]],ref:{type:x.type,name:y}}:{ref:x}}}),I(y,!1,void 0,x)}else T=F(r,y,{}),T._f&&(T._f.mount=!1),(e.shouldUnregister||C.shouldUnregister)&&!(TO(a.array,y)&&o.action)&&a.unMount.add(y)}}},gp=()=>e.shouldFocusError&&ro(r,V,a.mount),yC=y=>{ln(y)&&(c.state.next({disabled:y}),ro(r,(C,T)=>{const L=F(r,T);L&&(C.disabled=L._f.disabled||y,Array.isArray(L._f.refs)&&L._f.refs.forEach(O=>{O.disabled=L._f.disabled||y}))},0,!1))},vp=(y,C)=>async T=>{let L;T&&(T.preventDefault&&T.preventDefault(),T.persist&&T.persist());let O=bt(s);if(c.state.next({isSubmitting:!0}),e.resolver){const{errors:x,values:U}=await P();n.errors=x,O=U}else await j(r);if(ke(n.errors,"root"),dt(n.errors)){c.state.next({errors:{}});try{await y(O,T)}catch(x){L=x}}else C&&await C({...n.errors},T),gp(),setTimeout(gp);if(c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:dt(n.errors)&&!L,submitCount:n.submitCount+1,errors:n.errors}),L)throw L},wC=(y,C={})=>{F(r,y)&&(Ee(C.defaultValue)?Ke(y,bt(F(i,y))):(Ke(y,C.defaultValue),oe(i,y,bt(C.defaultValue))),C.keepTouched||ke(n.touchedFields,y),C.keepDirty||(ke(n.dirtyFields,y),n.isDirty=C.defaultValue?W(y,bt(F(i,y))):W()),C.keepError||(ke(n.errors,y),d.isValid&&S()),c.state.next({...n}))},yp=(y,C={})=>{const T=y?bt(y):i,L=bt(T),O=dt(y),x=O?i:L;if(C.keepDefaultValues||(i=T),!C.keepValues){if(C.keepDirtyValues)for(const U of a.mount)F(n.dirtyFields,U)?oe(x,U,F(s,U)):Ke(U,F(x,U));else{if(lp&&Ee(y))for(const U of a.mount){const Z=F(r,U);if(Z&&Z._f){const Le=Array.isArray(Z._f.refs)?Z._f.refs[0]:Z._f.ref;if(Hl(Le)){const Me=Le.closest("form");if(Me){Me.reset();break}}}}r={}}s=t.shouldUnregister?C.keepDefaultValues?bt(i):{}:bt(x),c.array.next({values:{...x}}),c.values.next({values:{...x}})}a={mount:C.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!d.isValid||!!C.keepIsValid||!!C.keepDirtyValues,o.watch=!!t.shouldUnregister,c.state.next({submitCount:C.keepSubmitCount?n.submitCount:0,isDirty:O?!1:C.keepDirty?n.isDirty:!!(C.keepDefaultValues&&!ir(y,i)),isSubmitted:C.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:O?{}:C.keepDirtyValues?C.keepDefaultValues&&s?xa(i,s):n.dirtyFields:C.keepDefaultValues&&y?xa(i,y):C.keepDirty?n.dirtyFields:{},touchedFields:C.keepTouched?n.touchedFields:{},errors:C.keepErrors?n.errors:{},isSubmitSuccessful:C.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},wp=(y,C)=>yp(Nn(y)?y(s):y,C);return{control:{register:Vu,unregister:zt,getFieldState:we,handleSubmit:vp,setError:rn,_executeSchema:P,_getWatch:Q,_getDirty:W,_updateValid:S,_removeUnmounted:Oe,_updateFieldArray:p,_updateDisabledField:Or,_getFieldArray:ge,_reset:yp,_resetDefaultValues:()=>Nn(e.defaultValues)&&e.defaultValues().then(y=>{wp(y,e.resetOptions),c.state.next({isLoading:!1})}),_updateFormState:y=>{n={...n,...y}},_disableForm:yC,_subjects:c,_proxyFormState:d,_setErrors:w,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(y){o=y},get _defaultValues(){return i},get _names(){return a},set _names(y){a=y},get _formState(){return n},set _formState(y){n=y},get _options(){return e},set _options(y){e={...e,...y}}},trigger:$,register:Vu,handleSubmit:vp,watch:vs,setValue:Ke,getValues:ce,reset:wp,resetField:wC,clearErrors:mi,unregister:zt,setError:rn,setFocus:(y,C={})=>{const T=F(r,y),L=T&&T._f;if(L){const O=L.refs?L.refs[0]:L.ref;O.focus&&(O.focus(),C.shouldSelect&&O.select())}},getFieldState:we}}function Fu(t={}){const e=ht.useRef(),n=ht.useRef(),[r,i]=ht.useState({isDirty:!1,isValidating:!1,isLoading:Nn(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:Nn(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...zO(t),formState:r});const s=e.current.control;return s._options=t,xO({subject:s._subjects.state,next:o=>{RO(o,s._proxyFormState,s._updateFormState)&&i({...s._formState})}}),ht.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),ht.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),ht.useEffect(()=>{t.values&&!ir(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),ht.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),ht.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),ht.useEffect(()=>{t.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[t.shouldUnregister,s]),e.current.formState=kO(r,s),e.current}async function $E(t){t.userUID=Ve.currentUser.uid;const e=jt(Bt,`/UsersProfile/${t.userUID}`);try{const n=await cE(e);await ta(e,t),console.log("asdasas")}catch{}}const VO=async t=>{const e=t.profilePhoto[0];console.log(e.name);const n=OE(DE,`profilePhoto/${e.name}`),r=AE(n,e);await r;const i=await bE(r.snapshot.ref);t.profilePhoto=i,$E(t),console.log(i)},$O="_footer_10viq_1",WO="_pulseShadow_10viq_1",HO="_section_10viq_29",qO="_socials_10viq_67",wi={footer:$O,pulseShadow:WO,section:HO,socials:qO},hp=()=>f.jsxs("footer",{className:wi.footer,children:[f.jsxs("div",{className:wi.section,children:[f.jsx("h3",{children:"About Us"}),f.jsx("p",{children:"We are a company dedicated to providing the best services and products for our customers."})]}),f.jsxs("div",{className:wi.section,children:[f.jsx("h3",{children:"Follow Us"}),f.jsxs("ul",{className:wi.socials,children:[f.jsx("li",{children:f.jsx("a",{href:"#",children:"Facebook"})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:"Instagram"})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:"Twitter"})})]})]}),f.jsxs("div",{className:wi.section,children:[f.jsx("h3",{children:"Contact"}),f.jsx("p",{children:"Email: info@example.com"}),f.jsx("p",{children:"Phone: +123 456 7890"})]}),f.jsxs("div",{className:wi.section,children:[f.jsx("h3",{children:"Quick Links"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#",children:"Privacy Policy"})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:"Terms of Service"})}),f.jsx("li",{children:f.jsx("a",{href:"#",children:"FAQ"})})]})]})]}),GO="/CarRent/assets/Avatar-D_q7wICs.png",KO=()=>{const[t,e]=k.useState(null),[n,r]=k.useState(!1),{register:i,handleSubmit:s,setValue:o}=Fu(),a=async l=>{try{l.userUID=Ve.currentUser.uid,l.profilePhoto&&await VO(l),await $E(l)}catch(u){console.error("Ошибка при добавлении профиля:",u)}r(!1)};return k.useEffect(()=>{const l=jt(Bt,`/UsersProfile/${Ve.currentUser.uid}`),u=_s(l,d=>{const c=d.val();e(c),c&&Object.keys(c).forEach(h=>{o(h,c[h])})});return()=>u()},[o]),console.log(t),f.jsxs("div",{className:Kn.Profile,children:[f.jsx("div",{className:"container",children:f.jsxs("form",{onSubmit:s(a),className:Kn.profile,children:[f.jsx("h4",{children:"Profile"}),f.jsxs("div",{className:Kn.avatar,children:[f.jsx("input",{type:"file",id:"lads",...i("profilePhoto")}),t&&t.profilePhoto?f.jsx("img",{src:t.profilePhoto,alt:""}):f.jsx("img",{src:GO,alt:"Аватар по умолчанию"})]}),f.jsx("div",{className:Kn.nameLabel,children:f.jsxs("p",{children:[(t==null?void 0:t.name)||"Имя"," ",(t==null?void 0:t.surname)||"Фамилия"]})}),n&&f.jsxs("div",{className:Kn.personal,children:[f.jsxs("div",{className:Kn.personalLeft,children:[f.jsx("input",{type:"text",placeholder:"Имя",...i("name",{required:!0}),defaultValue:t==null?void 0:t.name}),f.jsx("input",{type:"text",placeholder:"Фамилия",...i("surname",{required:!0}),defaultValue:t==null?void 0:t.surname}),f.jsx("input",{type:"date",...i("birthDate",{required:!0}),defaultValue:t==null?void 0:t.birthDate}),f.jsx("input",{type:"number",placeholder:"Телефон",...i("phone",{required:!0}),defaultValue:t==null?void 0:t.phone})]}),f.jsxs("div",{className:Kn.personalRight,children:[f.jsx("input",{type:"email",placeholder:"E-mail",...i("email",{required:!0}),defaultValue:t==null?void 0:t.email}),f.jsx("input",{type:"number",placeholder:"Водительский стаж",...i("drivingExperience",{required:!0}),defaultValue:t==null?void 0:t.drivingExperience}),f.jsx("input",{type:"text",placeholder:"Гражданство",...i("citizenship",{required:!0}),defaultValue:t==null?void 0:t.citizenship}),f.jsx("input",{type:"number",placeholder:"ИНН",...i("inn",{required:!0}),defaultValue:t==null?void 0:t.inn})]})]}),f.jsx("div",{className:Kn.profileBtn,children:f.jsx(EO,{variant:"",onClick:()=>r(!n),children:n?"Save":"Edit"})})]})}),f.jsx(hp,{})]})},YO="_Find_7cofo_3",QO="_FindContainer_7cofo_19",XO="_sideCard_7cofo_43",JO="_lastDivSide_7cofo_83",ZO="_sectionSearch_7cofo_103",eD="_InputSearch_7cofo_145",tD="_carContain_7cofo_211",nD="_cardCar_7cofo_227",rD="_cardLeft_7cofo_241",iD="_cardHeader_7cofo_255",sD="_carModel_7cofo_265",oD="_carImage_7cofo_279",aD="_cardRight_7cofo_297",lD="_cardDetails_7cofo_311",uD="_carPrice_7cofo_325",cD="_CardRightButton_7cofo_345",dD="_BtnCardContain_7cofo_357",Re={Find:YO,FindContainer:QO,sideCard:XO,lastDivSide:JO,sectionSearch:ZO,InputSearch:eD,carContain:tD,cardCar:nD,cardLeft:rD,cardHeader:iD,carModel:sD,carImage:oD,cardRight:aD,cardDetails:lD,carPrice:uD,CardRightButton:cD,BtnCardContain:dD},hD=({onSearch:t})=>{const[e,n]=k.useState(""),r=i=>{const s=i.target.value;n(s),t(s)};return f.jsxs("div",{className:Re.searchInput,children:[f.jsx("h1",{className:Re.title,children:"Поиск автомобиля"}),f.jsx("div",{className:Re.divInput,children:f.jsx("input",{className:Re.input,type:"text",value:e,onChange:r,placeholder:"Введите марку автомобиля"})})]})};var WE={exports:{}},HE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=k;function fD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pD=typeof Object.is=="function"?Object.is:fD,mD=sa.useSyncExternalStore,_D=sa.useRef,gD=sa.useEffect,vD=sa.useMemo,yD=sa.useDebugValue;HE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=_D(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=vD(function(){function l(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&o.hasValue){var v=o.value;if(i(v,g))return c=v}return c=g}if(v=c,pD(d,g))return v;var E=r(g);return i!==void 0&&i(v,E)?v:(d=g,c=E)}var u=!1,d,c,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=mD(t,s[0],s[1]);return gD(function(){o.hasValue=!0,o.value=a},[a]),yD(a),a};WE.exports=HE;var wD=WE.exports,It="default"in zc?ht:zc,hg=Symbol.for("react-redux-context"),fg=typeof globalThis<"u"?globalThis:{};function ED(){if(!It.createContext)return{};const t=fg[hg]??(fg[hg]=new Map);let e=t.get(It.createContext);return e||(e=It.createContext(null),t.set(It.createContext,e)),e}var Rr=ED(),CD=()=>{throw new Error("uSES not initialized!")};function fp(t=Rr){return function(){return It.useContext(t)}}var qE=fp(),GE=CD,SD=t=>{GE=t},TD=(t,e)=>t===e;function ID(t=Rr){const e=t===Rr?qE:fp(t),n=(r,i={})=>{const{equalityFn:s=TD,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();It.useRef(!0);const h=It.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,o.stabilityCheck]),g=GE(l.addNestedSub,a.getState,u||a.getState,h,s);return It.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var kD=ID();function RD(t){t()}function xD(){let t=null,e=null;return{clear(){t=null,e=null},notify(){RD(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var pg={notify(){},get:()=>[]};function ND(t,e){let n,r=pg,i=0,s=!1;function o(E){d();const S=r.subscribe(E);let _=!1;return()=>{_||(_=!0,S(),c())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return s}function d(){i++,n||(n=t.subscribe(l),r=xD())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=pg)}function h(){s||(s=!0,d())}function g(){s&&(s=!1,c())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:g,getListeners:()=>r};return v}var PD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AD=typeof navigator<"u"&&navigator.product==="ReactNative",bD=PD||AD?It.useLayoutEffect:It.useEffect;function OD({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=It.useMemo(()=>{const u=ND(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=It.useMemo(()=>t.getState(),[t]);bD(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Rr;return It.createElement(l.Provider,{value:o},n)}var DD=OD;function KE(t=Rr){const e=t===Rr?qE:fp(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var LD=KE();function MD(t=Rr){const e=t===Rr?LD:KE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var FD=MD();SD(wD.useSyncExternalStoreWithSelector);function We(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var UD=typeof Symbol=="function"&&Symbol.observable||"@@observable",mg=UD,Uc=()=>Math.random().toString(36).substring(7).split("").join("."),jD={INIT:`@@redux/INIT${Uc()}`,REPLACE:`@@redux/REPLACE${Uc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Uc()}`},Yl=jD;function pp(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function YE(t,e,n){if(typeof t!="function")throw new Error(We(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(We(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(We(1));return n(YE)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,_)=>{o.set(_,S)}))}function d(){if(l)throw new Error(We(3));return i}function c(S){if(typeof S!="function")throw new Error(We(4));if(l)throw new Error(We(5));let _=!0;u();const p=a++;return o.set(p,S),function(){if(_){if(l)throw new Error(We(6));_=!1,u(),o.delete(p),s=null}}}function h(S){if(!pp(S))throw new Error(We(7));if(typeof S.type>"u")throw new Error(We(8));if(typeof S.type!="string")throw new Error(We(17));if(l)throw new Error(We(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(p=>{p()}),S}function g(S){if(typeof S!="function")throw new Error(We(10));r=S,h({type:Yl.REPLACE})}function v(){const S=c;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(We(11));function p(){const w=_;w.next&&w.next(d())}return p(),{unsubscribe:S(p)}},[mg](){return this}}}return h({type:Yl.INIT}),{dispatch:h,subscribe:c,getState:d,replaceReducer:g,[mg]:v}}function BD(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Yl.INIT})>"u")throw new Error(We(12));if(typeof n(void 0,{type:Yl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(We(13))})}function zD(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{BD(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],h=n[c],g=o[c],v=h(g,a);if(typeof v>"u")throw a&&a.type,new Error(We(14));u[c]=v,l=l||v!==g}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Ql(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function VD(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(We(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Ql(...a)(i.dispatch),{...i,dispatch:s}}}function $D(t){return pp(t)&&"type"in t&&typeof t.type=="string"}var QE=Symbol.for("immer-nothing"),_g=Symbol.for("immer-draftable"),xt=Symbol.for("immer-state");function Yt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var ss=Object.getPrototypeOf;function oi(t){return!!t&&!!t[xt]}function zn(t){var e;return t?XE(t)||Array.isArray(t)||!!t[_g]||!!((e=t.constructor)!=null&&e[_g])||ju(t)||Bu(t):!1}var WD=Object.prototype.constructor.toString();function XE(t){if(!t||typeof t!="object")return!1;const e=ss(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===WD}function Xl(t,e){Uu(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Uu(t){const e=t[xt];return e?e.type_:Array.isArray(t)?1:ju(t)?2:Bu(t)?3:0}function oh(t,e){return Uu(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function JE(t,e,n){const r=Uu(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function HD(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function ju(t){return t instanceof Map}function Bu(t){return t instanceof Set}function jr(t){return t.copy_||t.base_}function ah(t,e){if(ju(t))return new Map(t);if(Bu(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=XE(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[xt];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(ss(t),r)}else{const r=ss(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function mp(t,e=!1){return zu(t)||oi(t)||!zn(t)||(Uu(t)>1&&(t.set=t.add=t.clear=t.delete=qD),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>mp(r,!0))),t}function qD(){Yt(2)}function zu(t){return Object.isFrozen(t)}var GD={};function ai(t){const e=GD[t];return e||Yt(0,t),e}var Mo;function ZE(){return Mo}function KD(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function gg(t,e){e&&(ai("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function lh(t){uh(t),t.drafts_.forEach(YD),t.drafts_=null}function uh(t){t===Mo&&(Mo=t.parent_)}function vg(t){return Mo=KD(Mo,t)}function YD(t){const e=t[xt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function yg(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[xt].modified_&&(lh(e),Yt(4)),zn(t)&&(t=Jl(e,t),e.parent_||Zl(e,t)),e.patches_&&ai("Patches").generateReplacementPatches_(n[xt].base_,t,e.patches_,e.inversePatches_)):t=Jl(e,n,[]),lh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==QE?t:void 0}function Jl(t,e,n){if(zu(e))return e;const r=e[xt];if(!r)return Xl(e,(i,s)=>wg(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Zl(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Xl(s,(a,l)=>wg(t,r,i,a,l,n,o)),Zl(t,i,!1),n&&t.patches_&&ai("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function wg(t,e,n,r,i,s,o){if(oi(i)){const a=s&&e&&e.type_!==3&&!oh(e.assigned_,r)?s.concat(r):void 0,l=Jl(t,i,a);if(JE(n,r,l),oi(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(zn(i)&&!zu(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Jl(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Zl(t,i)}}function Zl(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&mp(e,n)}function QD(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:ZE(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=_p;n&&(i=[r],s=Fo);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var _p={get(t,e){if(e===xt)return t;const n=jr(t);if(!oh(n,e))return XD(t,n,e);const r=n[e];return t.finalized_||!zn(r)?r:r===jc(t.base_,e)?(Bc(t),t.copy_[e]=dh(r,t)):r},has(t,e){return e in jr(t)},ownKeys(t){return Reflect.ownKeys(jr(t))},set(t,e,n){const r=eC(jr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=jc(jr(t),e),s=i==null?void 0:i[xt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(HD(n,i)&&(n!==void 0||oh(t.base_,e)))return!0;Bc(t),ch(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return jc(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Bc(t),ch(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=jr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Yt(11)},getPrototypeOf(t){return ss(t.base_)},setPrototypeOf(){Yt(12)}},Fo={};Xl(_p,(t,e)=>{Fo[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Fo.deleteProperty=function(t,e){return Fo.set.call(this,t,e,void 0)};Fo.set=function(t,e,n){return _p.set.call(this,t[0],e,n,t[0])};function jc(t,e){const n=t[xt];return(n?jr(n):t)[e]}function XD(t,e,n){var i;const r=eC(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function eC(t,e){if(!(e in t))return;let n=ss(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=ss(n)}}function ch(t){t.modified_||(t.modified_=!0,t.parent_&&ch(t.parent_))}function Bc(t){t.copy_||(t.copy_=ah(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var JD=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&Yt(6),r!==void 0&&typeof r!="function"&&Yt(7);let i;if(zn(e)){const s=vg(this),o=dh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?lh(s):uh(s)}return gg(s,r),yg(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===QE&&(i=void 0),this.autoFreeze_&&mp(i,!0),r){const s=[],o=[];ai("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Yt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){zn(t)||Yt(8),oi(t)&&(t=ZD(t));const e=vg(this),n=dh(t,void 0);return n[xt].isManual_=!0,uh(e),n}finishDraft(t,e){const n=t&&t[xt];(!n||!n.isManual_)&&Yt(9);const{scope_:r}=n;return gg(r,e),yg(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=ai("Patches").applyPatches_;return oi(t)?r(t,e):this.produce(t,i=>r(i,e))}};function dh(t,e){const n=ju(t)?ai("MapSet").proxyMap_(t,e):Bu(t)?ai("MapSet").proxySet_(t,e):QD(t,e);return(e?e.scope_:ZE()).drafts_.push(n),n}function ZD(t){return oi(t)||Yt(10,t),tC(t)}function tC(t){if(!zn(t)||zu(t))return t;const e=t[xt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=ah(t,e.scope_.immer_.useStrictShallowCopy_)}else n=ah(t,!0);return Xl(n,(r,i)=>{JE(n,r,tC(i))}),e&&(e.finalized_=!1),n}var Nt=new JD,nC=Nt.produce;Nt.produceWithPatches.bind(Nt);Nt.setAutoFreeze.bind(Nt);Nt.setUseStrictShallowCopy.bind(Nt);Nt.applyPatches.bind(Nt);Nt.createDraft.bind(Nt);Nt.finishDraft.bind(Nt);function rC(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var eL=rC(),tL=rC,nL=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ql:Ql.apply(null,arguments)};function Eg(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(vn(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>$D(r)&&r.type===t,n}var iC=class Bs extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Bs.prototype)}static get[Symbol.species](){return Bs}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Bs(...e[0].concat(this)):new Bs(...e.concat(this))}};function Cg(t){return zn(t)?nC(t,()=>{}):t}function Sg(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(vn(10));const r=n.insert(e,t);return t.set(e,r),r}function rL(t){return typeof t=="boolean"}var iL=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new iC;return n&&(rL(n)?o.push(eL):o.push(tL(n.extraArgument))),o},sL="RTK_autoBatch",sC=t=>e=>{setTimeout(e,t)},oL=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:sC(10),aL=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?oL:t.type==="callback"?t.queueNotification:sC(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),h=r.subscribe(c);return a.add(d),()=>{h(),a.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[sL]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},lL=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new iC(t);return r&&i.push(aL(typeof r=="object"?r:void 0)),i};function uL(t){const e=iL(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(pp(n))a=zD(n);else throw new Error(vn(1));let l;typeof r=="function"?l=r(e):l=e();let u=Ql;i&&(u=nL({trace:!1,...typeof i=="object"&&i}));const d=VD(...l),c=lL(d);let h=typeof o=="function"?o(c):c();const g=u(...h);return YE(a,s,g)}function oC(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(vn(28));if(a in e)throw new Error(vn(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function cL(t){return typeof t=="function"}function dL(t,e){let[n,r,i]=oC(e),s;if(cL(t))s=()=>Cg(t());else{const a=Cg(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(oi(d)){const g=c(d,l);return g===void 0?d:g}else{if(zn(d))return nC(d,h=>c(h,l));{const h=c(d,l);if(h===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return d},a)}return o.getInitialState=s,o}var hL=Symbol.for("rtk-slice-createasyncthunk");function fL(t,e){return`${t}/${e}`}function pL({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[hL];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(vn(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(gL()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(m,w){const I=typeof m=="string"?m:m.type;if(!I)throw new Error(vn(12));if(I in u.sliceCaseReducersByType)throw new Error(vn(13));return u.sliceCaseReducersByType[I]=w,d},addMatcher(m,w){return u.sliceMatchers.push({matcher:m,reducer:w}),d},exposeAction(m,w){return u.actionCreators[m]=w,d},exposeCaseReducer(m,w){return u.sliceCaseReducersByName[m]=w,d}};l.forEach(m=>{const w=a[m],I={reducerName:m,type:fL(s,m),createNotation:typeof i.reducers=="function"};yL(w)?EL(I,w,d,e):vL(I,w,d)});function c(){const[m={},w=[],I=void 0]=typeof i.extraReducers=="function"?oC(i.extraReducers):[i.extraReducers],N={...m,...u.sliceCaseReducersByType};return dL(i.initialState,b=>{for(let P in N)b.addCase(P,N[P]);for(let P of u.sliceMatchers)b.addMatcher(P.matcher,P.reducer);for(let P of w)b.addMatcher(P.matcher,P.reducer);I&&b.addDefaultCase(I)})}const h=m=>m,g=new Map;let v;function E(m,w){return v||(v=c()),v(m,w)}function S(){return v||(v=c()),v.getInitialState()}function _(m,w=!1){function I(b){let P=b[m];return typeof P>"u"&&w&&(P=S()),P}function N(b=h){const P=Sg(g,w,{insert:()=>new WeakMap});return Sg(P,b,{insert:()=>{const H={};for(const[j,Oe]of Object.entries(i.selectors??{}))H[j]=mL(Oe,b,S,w);return H}})}return{reducerPath:m,getSelectors:N,get selectors(){return N(I)},selectSlice:I}}const p={name:s,reducer:E,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,..._(o),injectInto(m,{reducerPath:w,...I}={}){const N=w??o;return m.inject({reducerPath:N,reducer:E},I),{...p,..._(N,!0)}}};return p}}function mL(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var _L=pL();function gL(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function vL({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!wL(r))throw new Error(vn(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Eg(t,o):Eg(t))}function yL(t){return t._reducerDefinitionType==="asyncThunk"}function wL(t){return t._reducerDefinitionType==="reducerWithPrepare"}function EL({type:t,reducerName:e},n,r,i){if(!i)throw new Error(vn(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,c=i(t,s,d);r.exposeAction(e,c),o&&r.addCase(c.fulfilled,o),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Na,pending:a||Na,rejected:l||Na,settled:u||Na})}function Na(){}function vn(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const CL={cars:[]},aC=_L({name:"searchCar",initialState:CL,reducers:{addCar(t,e){t.cars=e.payload}}}),{addCar:SL}=aC.actions,TL=aC.reducer;async function lC(t){console.log(t);const e=jt(Bt,"/Cars");try{await ta(e,t),console.log("Автомобиль Обновлен")}catch(n){console.error("Ошибка обновления:",n)}}async function uC(t,e){Ve.currentUser.uid;const n=t.carUid;console.log(t.carUid);const r=jt(Bt,`/Orders/${n}${e}`);try{await ta(r,t),console.log("Автомобиль Обновлен")}catch(i){console.error("Ошибка обновления:",i)}}const cC=async(t,e)=>{let n="",r="";const i=jt(Bt,"/Cars");console.log(e),console.log(t);const s=e+t;await _s(i,o=>{n=o.val(),r=n[t],console.log(r.isRented),r.isRented=r.isRented!=!0,r.acceptOrder=!1}),uC(r,s),lC(n)},IL="/CarRent/assets/Salon-D68CKNXi.jpg",dC=()=>{const t=kD(h=>h.searchCar.cars),[e,n]=k.useState(t),[r,i]=k.useState(!1),[s,o]=k.useState(),a=FD();console.log(s);const l=jt(Bt,"/Cars");k.useEffect(()=>{_s(l,h=>{const g=h.val()||[];a(SL(g))})},[]),k.useEffect(()=>{n(t)},[t]);const u=vu(),d=()=>u("/Login");k.useEffect(()=>{const h=Ve.onAuthStateChanged(g=>{i(!!g)});return()=>h()},[]);const c=h=>{const g=h.toLowerCase(),v=t.filter(E=>E.carName.toLowerCase().includes(g)||E.carModel.toLowerCase().includes(g));n(v)};return f.jsxs("div",{className:Re.Find,children:[f.jsx("div",{className:Re.sectionSearch,children:f.jsx("img",{src:IL,alt:""})}),f.jsx("div",{className:Re.InputSearch,children:f.jsx(hD,{onSearch:c})}),f.jsxs("div",{className:Re.FindContainer,children:[f.jsxs("div",{className:Re.sideCard,children:[f.jsx("h2",{children:"Summary"}),f.jsxs("div",{children:[f.jsx("h3",{children:"Model"}),f.jsxs("p",{children:[s==null?void 0:s.carName," ",s==null?void 0:s.carModel]})]}),f.jsxs("div",{children:[f.jsx("h3",{children:"Year of manufacture"}),f.jsx("p",{children:s==null?void 0:s.carYear})]}),f.jsxs("div",{children:[f.jsx("h3",{children:"Transmission"}),f.jsx("p",{children:s==null?void 0:s.carTransmission})]}),f.jsxs("div",{children:[f.jsx("h3",{children:"PICKUP DATE, TIME"}),f.jsx("p",{children:s==null?void 0:s.dateAdd})]}),f.jsxs("div",{className:Re.lastDivSide,children:[f.jsx("h3",{children:"TOTAL TIME"}),f.jsx("p",{children:s==null?void 0:s.rentDays})]})]}),f.jsx("div",{children:e.map((h,g)=>f.jsxs("div",{onClick:()=>{o(h)},className:Re.cardCar,children:[f.jsx("div",{className:Re.cardLeft,children:f.jsx("img",{src:h.carPhoto,alt:"Car",className:Re.carImage})}),f.jsxs("div",{className:Re.cardRight,children:[f.jsxs("div",{className:Re.cardDetails,children:[f.jsxs("div",{className:Re.cardHeader,children:[f.jsxs("p",{children:[h.carName," ",h.carModel," "]}),f.jsxs("p",{className:Re.carPrice,children:["Price: ",h.rentPrice,"₽"]})]}),f.jsxs("span",{children:["добавлено пользователем ",h.carUser," ",h.dateAdd]})]}),f.jsx("div",{className:Re.CardRightButton,children:r?h.isRented==!1?f.jsx("button",{className:Re.BtnCardContain,onClick:()=>{cC(g,h.carName),localStorage.setItem("orderUid",h.carName+g),localStorage.setItem("carUid",h.carUid)},children:"Арендовать"}):f.jsx("button",{children:"Арендовано"}):f.jsx("button",{onClick:()=>d(),children:"Арендовать"})})]})]},h.carName+Math.random()))})]})]})},kL="_MyCars_ilcnv_1",RL="_contain_ilcnv_17",xL="_formMyCars_ilcnv_37",NL="_buttonAndCardContain_ilcnv_51",PL="_formRow_ilcnv_63",AL="_modalBtn_ilcnv_87",bL="_formClose_ilcnv_99",OL="_formAddbutton_ilcnv_131",DL="_cardText_ilcnv_219",LL="_BtnFormaMyCars_ilcnv_229",ML="_checkboxContainer_ilcnv_263",FL="_fileLabel_ilcnv_365",UL="_carContain_ilcnv_397",jL="_carContainFormActive_ilcnv_411",BL="_cardCar_ilcnv_431",zL="_cardLeft_ilcnv_449",VL="_cardHeader_ilcnv_459",$L="_carModel_ilcnv_469",WL="_carPrice_ilcnv_487",HL="_carImage_ilcnv_509",qL="_cardRight_ilcnv_525",GL="_cardDetails_ilcnv_541",KL="_BtnCardContain_ilcnv_557",de={MyCars:kL,contain:RL,formMyCars:xL,buttonAndCardContain:NL,formRow:PL,modalBtn:AL,formClose:bL,formAddbutton:OL,cardText:DL,BtnFormaMyCars:LL,checkboxContainer:ML,fileLabel:FL,carContain:UL,carContainFormActive:jL,cardCar:BL,cardLeft:zL,cardHeader:VL,carModel:$L,carPrice:WL,carImage:HL,cardRight:qL,cardDetails:GL,BtnCardContain:KL},YL=async(t,e)=>{let n="",r="";const i=jt(Bt,"/Cars"),s=e+t;await _s(i,o=>{n=o.val(),r=n[t],console.log(r.acceptOrder),r.acceptOrder=r.acceptOrder!=!0}),uC(r,s),lC(n)},QL=()=>{const t=new Date().getFullYear(),e=new Date().getMonth()+1,n=new Date().getDate(),r=new Date().getHours();let i=new Date().getMinutes();return i<10&&(i=`0${i}`),n+"."+e+"."+t+" "+r+":"+i};async function XL(t){console.log(t);const e=jt(Bt,"/Cars");try{const i=[...(await cE(e)).val()||[],t];await ta(e,i),console.log("Автомобиль добавлен")}catch(n){console.error("Ошибка Добавления:",n)}}const JL=async t=>{const e=t.carPhoto[0];console.log(e);try{const n=OE(DE,`carPhoto/${e.name}`),r=AE(n,e);await new Promise((i,s)=>{r.on("state_changed",o=>{},o=>{console.error("Ошибка загрузки:",o),s(o)},async()=>{const o=JSON.parse(localStorage.getItem("userAuth")),a=await bE(r.snapshot.ref);t.carPhoto=a,t.carUid=Ve.currentUser.uid,t.carPhone=o.phone,t.isRented=!1,t.acceptOrder=!1,console.log("File available at",a),await XL(t),i()})})}catch(n){console.error("Ошибка при добавлении автомобиля и фото:",n)}},ZL=({formActivate:t})=>{const{register:e,handleSubmit:n,formState:{errors:r,isSubmitting:i},reset:s}=Fu({mode:"onSubmit"}),o=async a=>{try{a.carUser=Ve.currentUser.email,a.dateAdd=QL(),await JL(a),console.log(a.carPhoto),console.log("Автомобиль добавлен успешно")}catch(l){console.error("Ошибка при добавлении автомобиля:",l)}s(),t()};return f.jsx("div",{children:f.jsx("form",{className:de.formMyCars,onSubmit:n(o),children:f.jsxs("div",{className:de.formRow,children:[f.jsxs("div",{className:de.formAddbutton,children:[f.jsx("label",{className:de.fileLabel,htmlFor:"carPhoto",children:"Фото автомобиля"}),f.jsx("input",{type:"file",id:"carPhoto",...e("carPhoto")})]}),f.jsx("label",{htmlFor:"carName"}),f.jsx("input",{type:"text",id:"carName",placeholder:"Марка автомобиля",...e("carName",{required:!0})}),r.carName&&f.jsx("span",{children:"Вы не выбрали марку"}),f.jsx("label",{htmlFor:"carModel"}),f.jsx("input",{type:"text",id:"carModel",placeholder:"Модель автомобиля",...e("carModel",{required:!0})}),f.jsx("label",{htmlFor:"carYear"}),f.jsx("input",{type:"number",id:"carYear",placeholder:"Год выпуска",...e("carYear",{required:!0})}),f.jsx("label",{htmlFor:"carTransmission"}),f.jsxs("select",{id:"carTransmission",...e("carTransmission"),children:[f.jsx("option",{value:"Не известно",children:"Коробка передач"}),f.jsx("option",{value:"AT",children:"AT"}),f.jsx("option",{value:"MT",children:"MT"})]}),f.jsx("label",{htmlFor:"rentDays"}),f.jsxs("select",{id:"rentDays",...e("rentDays"),children:[f.jsx("option",{value:"1",children:"1 день"}),f.jsx("option",{value:"2",children:"2 дня"}),f.jsx("option",{value:"3",children:"3 дня"})]}),f.jsx("label",{htmlFor:"rentPrice"}),f.jsx("input",{type:"number",id:"rentPrice",placeholder:"Цена в сутки",...e("rentPrice",{required:!0})}),r.rentPrice&&f.jsx("span",{children:"Ты бесплатно собираешься отдать?"}),f.jsxs("div",{className:de.modalBtn,children:[i?f.jsx("button",{className:de.BtnFormaMyCars,type:"button",children:"Отправка"}):f.jsx("button",{className:de.BtnFormaMyCars,type:"submit",children:"Добавить"}),f.jsx("button",{className:de.formClose,type:"button",onClick:()=>t(),children:"Отмена"})]})]})})})},hC=()=>{const[t,e]=k.useState([]),[n,r]=k.useState(!1),[i,s]=k.useState(!1),o=jt(Bt,"/Cars");k.useEffect(()=>{_s(o,l=>{e(l.val()||[])})},[]),k.useEffect(()=>{const l=Ve.onAuthStateChanged(u=>{s(!!u)});return()=>l()},[]);const a=()=>{r(!n)};return f.jsxs("div",{className:de.MyCars,children:[f.jsx("div",{className:de.contain,children:i?f.jsxs("div",{className:de.buttonAndCardContain,children:[n?f.jsx(ZL,{formActivate:a}):f.jsx("button",{onClick:()=>{a()},className:de.BtnCardContain,children:"Добавить автомобиль"}),f.jsx("div",{}),f.jsx("div",{className:n?de.carContainFormActive:de.carContain,children:t.map((l,u)=>{if(l.carUid===Ve.currentUser.uid)return f.jsxs("div",{className:de.cardCar,children:[f.jsxs("div",{className:de.cardLeft,children:[f.jsxs("div",{className:de.cardHeader,children:[f.jsxs("p",{className:de.carModel,children:[l.carName," ",l.carModel]}),f.jsxs("p",{className:de.carPrice,children:["Price: ",l.rentPrice,"₽"]})]}),f.jsx("img",{src:l.carPhoto,alt:"Car",className:de.carImage})]}),f.jsxs("div",{className:de.cardRight,children:[f.jsxs("div",{className:de.cardDetails,children:[f.jsxs("p",{children:["Год: ",l.carYear]}),f.jsxs("p",{children:["Трансмиссия: ",l.carTransmission]})]}),l.isRented==!0?f.jsx("button",{className:de.BtnCardContain,onClick:d=>{d.stopPropagation(),YL(u,l.carName)},children:l.acceptOrder==!0?"Ордер принят":"Принять Аренду"}):!1,l.isRented==!0?f.jsx("button",{className:de.BtnCardContain,onClick:d=>{d.stopPropagation(),cC(u,l.carName)},children:"Отменить ордер"}):!1,f.jsxs("p",{children:["добавлено ",l.dateAdd]})]})]},l.carName+Math.random())})})]}):f.jsx("h2",{children:"Зарегистрируйтесь для действий"})}),f.jsx(hp,{})]})},eM="_Orders_qwu53_1",tM="_OrdersContain_qwu53_19",nM="_title_qwu53_35",rM="_OrderCardCars_qwu53_81",iM="_OrderCardCarsNone_qwu53_95",sM="_OrderCardCarsComplete_qwu53_109",oM="_OrderCard_qwu53_81",aM="_OrderCardInfo_qwu53_137",lM="_OrderImage_qwu53_159",uM="_orderCardsRight_qwu53_179",cM="_orderCardsInfo_qwu53_209",nt={Orders:eM,OrdersContain:tM,title:nM,OrderCardCars:rM,OrderCardCarsNone:iM,OrderCardCarsComplete:sM,OrderCard:oM,OrderCardInfo:aM,OrderImage:lM,orderCardsRight:uM,orderCardsInfo:cM},dM=()=>{const[t,e]=k.useState([]),n=localStorage.getItem("orderUid")||"",r=localStorage.getItem("carUid")||"";localStorage.getItem("carUid")==Ve.currentUser.uid&&localStorage.removeItem("carUid"),console.log(r),console.log(n);const i=jt(Bt,`/Orders/${r}${n}`);k.useEffect(()=>{_s(i,o=>{e([o.val()||[]]),console.log(o.val())})},[r]);const s=()=>{localStorage.removeItem("carUid"),localStorage.removeItem("orderUid"),e([])};return console.log(t),f.jsx("div",{children:r?f.jsx("div",{children:t.map(o=>f.jsx("div",{children:f.jsxs("div",{className:nt.Orders,children:[f.jsx("div",{className:nt.title,children:f.jsx("h1",{children:"Your orders"})}),f.jsxs("div",{className:nt.OrdersContain,children:[f.jsx("div",{className:o.isRented==!0?o.acceptOrder==!0?nt.OrderCardCarsComplete:nt.OrderCardCars:nt.OrderCardCarsNone,children:f.jsxs("div",{className:nt.OrderCard,children:[f.jsx("div",{className:nt.OrderImage,children:f.jsx("img",{src:o.carPhoto,alt:""})}),f.jsxs("div",{className:nt.OrderCardInfo,children:[f.jsxs("p",{children:[" ",o.carName," ",o.carModel," ",o.carYear," ",o.carTransmission]}),f.jsx("p",{children:o.isRented==!0?o.acceptOrder==!0?o.carPhone:"Ожидание":"Ордер отменен"})]}),f.jsx("button",{onClick:()=>{s()},children:"Убрать ордер"})]},o.carName+Math.random())}),f.jsxs("div",{className:nt.orderCardsRight,children:[f.jsx("h2",{children:"Order info"}),f.jsxs("div",{className:nt.orderCardsInfo,children:[f.jsx("p",{children:"Time"}),f.jsxs("p",{children:[t[0].rentDays," day"]})]}),f.jsxs("div",{className:nt.orderCardsInfo,children:[f.jsx("p",{children:"Rent"}),f.jsx("p",{children:t[0].carUser})]}),f.jsxs("div",{className:nt.orderCardsInfo,children:[f.jsx("p",{children:"Accept"}),f.jsx("p",{children:t[0].acceptOrder==!0?"Complete":"Waiting"})]}),f.jsxs("div",{className:nt.orderCardsInfo,children:[f.jsx("p",{children:"Estimated Total"}),f.jsx("p",{children:t[0].rentPrice})]}),f.jsx("button",{children:"Checkout now"})]})]})]})}))}):f.jsx("div",{className:nt.Orders})})},hM="/CarRent/assets/Dodge-K3hvhEab.jpg",fM="_div_yy3if_1",pM="_aboutTitle_yy3if_19",mM="_aboutMain_yy3if_61",_M="_aboutMainLeft_yy3if_79",gM="_slideInLeft_yy3if_1",vM="_aboutMainRight_yy3if_113",yM="_slideInRight_yy3if_1",Os={div:fM,aboutTitle:pM,aboutMain:mM,aboutMainLeft:_M,slideInLeft:gM,aboutMainRight:vM,slideInRight:yM},fC=()=>f.jsxs("div",{className:Os.div,children:[f.jsx("div",{className:Os.aboutTitle,children:f.jsx("h1",{children:"About Us"})}),f.jsxs("div",{className:Os.aboutMain,children:[f.jsx("div",{className:Os.aboutMainLeft,children:f.jsx("img",{src:hM,alt:""})}),f.jsxs("div",{className:Os.aboutMainRight,children:[f.jsx("p",{children:"We are a specialized team committed to providing reliable car rental services. One of the advantages of renting a car from us is offering competitive and transparent prices. By providing services such as comprehensive insurance."}),f.jsx("p",{children:"Our Company was build by trust and reputation. We`s know how to make our customers love us by oue high products with affordable prices. Our company was build."}),f.jsx("p",{children:"We also offer flexible pricing options, including hourly rates, project fees and retainer agreements, so you can choose the option that best suits your budget and goals."}),f.jsx("h2",{children:"Read More..."})]})]}),f.jsx(hp,{})]}),wM="_homeParent_7h4gc_1",EM="_slider_7h4gc_27",CM="_list_7h4gc_39",SM="_item_7h4gc_39",TM="_content_7h4gc_81",IM="_active_7h4gc_113",kM="_showContent_7h4gc_1",RM="_arrows_7h4gc_163",xM="_slideDown_7h4gc_1",NM="_thumbnail_7h4gc_233",PM="_slideIn_7h4gc_1",$t={homeParent:wM,slider:EM,list:CM,item:SM,content:TM,active:IM,showContent:kM,arrows:RM,slideDown:xM,thumbnail:NM,slideIn:PM},AM="/CarRent/assets/Huracan%20Light-CtloRWer.jpg",bM="/CarRent/assets/Aventador-Bbovgfu4.jpg",OM="/CarRent/assets/Salon-D68CKNXi.jpg",DM="/CarRent/assets/Dodge-K3hvhEab.jpg",LM="/CarRent/assets/GT%20S-CqspfFC_.jpg",pC=()=>{const[t,e]=k.useState(0),n=[{src:DM,title:"The Perfect Road Trip",text:"A sleek convertible roars to life as the driver hits the gas, ready for adventure. The open road stretches ahead, lined with scenic views and endless possibilities."},{src:bM,title:"Choosing the Right Rental Car",text:"Customers browse through a variety of cars, from compact sedans to spacious SUVs, at the rental desk. Friendly staff provide recommendations based on budget and travel needs."},{src:LM,title:"Exploring the City",text:"A stylish hatchback glides through bustling city streets, navigating traffic with ease. The driver stops at popular landmarks, capturing moments with quick photos. "},{src:OM,title:"Driving Through Nature",text:"An all-terrain vehicle tackles rugged trails, showcasing its power and versatility in the wild. Passengers enjoy breathtaking views of mountains and forests as they cruise along winding paths."},{src:AM,title:"Returning the Rental Car",text:"As the sun sets, the driver pulls into the rental agency, the day’s adventures fresh in their mind. They fill out the return paperwork while the staff inspects the vehicle for any damages."}],r=n,i=n.length,s=k.useRef(null);k.useEffect(()=>(o(),()=>clearInterval(s.current)),[]);const o=()=>{s.current=setInterval(()=>{a()},6e3)},a=()=>{e(c=>(c+1)%i)},l=()=>{e(c=>(c-1+i)%i)},u=c=>{e(c),clearInterval(s.current),o()},d=c=>{u(c)};return f.jsx("div",{className:$t.homeParent,children:f.jsxs("div",{className:$t.slider,children:[f.jsx("div",{className:$t.list,children:n.map((c,h)=>f.jsxs("div",{className:`${$t.item} ${h===t?$t.active:""}`,children:[f.jsx("img",{src:c.src,alt:c.title}),f.jsxs("div",{className:$t.content,children:[f.jsx("p",{children:"design"}),f.jsx("h2",{children:c.title}),f.jsx("p",{children:c.text})]})]},h))}),f.jsxs("div",{className:$t.arrows,children:[f.jsx("button",{id:"prev",onClick:l,children:"<"}),f.jsx("button",{id:"next",onClick:a,children:">"})]}),f.jsx("div",{className:$t.thumbnail,children:r.map((c,h)=>f.jsxs("div",{className:`${$t.item} ${h===t?$t.active:""}`,onClick:()=>d(h),children:[f.jsx("img",{src:c.src,alt:`Thumbnail ${h+1}`}),f.jsx("div",{className:$t.content,children:"Name Slider"})]},h))})]})})},MM="_formContainer_31bto_21",FM="_authForm_31bto_47",UM="_animate_31bto_1",jM="_authFormLeft_31bto_125",BM="_authFormRight_31bto_145",zM="_inputs_31bto_191",VM="_formContain_31bto_21",$M="_registrFormContainer_31bto_339",WM="_authFormRegistr_31bto_369",HM="_formIcon_31bto_521",xe={formContainer:MM,authForm:FM,animate:UM,authFormLeft:jM,authFormRight:BM,inputs:zM,formContain:VM,registrFormContainer:$M,authFormRegistr:WM,formIcon:HM},mC="/CarRent/assets/Orange%20Car-BBgwqa1V.mp4",hh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23e8eaed'%3e%3cpath%20d='M480-480q-66%200-113-47t-47-113q0-66%2047-113t113-47q66%200%20113%2047t47%20113q0%2066-47%20113t-113%2047ZM160-160v-112q0-34%2017.5-62.5T224-378q62-31%20126-46.5T480-440q66%200%20130%2015.5T736-378q29%2015%2046.5%2043.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56%200-111%2013.5T260-306q-9%205-14.5%2014t-5.5%2020v32Zm240-320q33%200%2056.5-23.5T560-640q0-33-23.5-56.5T480-720q-33%200-56.5%2023.5T400-640q0%2033%2023.5%2056.5T480-560Zm0-80Zm0%20400Z'/%3e%3c/svg%3e",_C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23e8eaed'%3e%3cpath%20d='M240-80q-33%200-56.5-23.5T160-160v-400q0-33%2023.5-56.5T240-640h40v-80q0-83%2058.5-141.5T480-920q83%200%20141.5%2058.5T680-720v80h40q33%200%2056.5%2023.5T800-560v400q0%2033-23.5%2056.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33%200%2056.5-23.5T560-360q0-33-23.5-56.5T480-440q-33%200-56.5%2023.5T400-360q0%2033%2023.5%2056.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50%200-85%2035t-35%2085v80ZM240-160v-400%20400Z'/%3e%3c/svg%3e",gC=()=>{k.useState([]),k.useState(null);const[t,e]=k.useState(""),n=vu();jt(Bt,"/authUsers/usersAuth");const{register:r,handleSubmit:i,formState:{errors:s,isSubmitting:o}}=Fu({mode:"onBlur"}),a=JSON.parse(localStorage.getItem("userAuth")||"null"),l=async u=>{console.log(u);const d=u.email.trim(),c=u.password.trim();console.log(d),console.log(c);try{await xR(Ve,d,c)}catch(h){switch(h.code){case"auth/wrong-password":e("Неправильный пароль. Пожалуйста, попробуйте снова.");break;case"auth/user-not-found":e("Пользователь с таким email не найден.");break;case"auth/too-many-requests":e("Слишком много неудачных попыток входа. Попробуйте позже.");break;default:e("Неправильный пароль или email.");break}}};return k.useEffect(()=>{const u=Ve.onAuthStateChanged(d=>{d&&n("/CarRent")});return()=>u()},[]),console.log(Ve),console.log(a),f.jsx("div",{className:xe.formContainer,children:f.jsxs("div",{className:xe.authForm,children:[f.jsx("div",{className:xe.authFormLeft,children:f.jsx("video",{loop:!0,muted:!0,src:mC,autoPlay:!0,controls:!0})}),f.jsxs("div",{className:xe.authFormRight,children:[f.jsxs("form",{className:xe.formContain,onSubmit:i(l),children:[f.jsx("h1",{children:"Login"}),f.jsxs("div",{className:xe.inputs,children:[f.jsx("label",{htmlFor:"email"}),f.jsx("input",{...r("email",{required:!0,pattern:{value:/^\S+@\S+$/i,message:"Некорректный email"}}),placeholder:"Email"}),s.email&&f.jsx("span",{style:{color:"rgb(143, 14, 19)",fontSize:"14px",position:"absolute",bottom:"-23px"},children:s.email.message}),f.jsx("img",{src:hh,alt:"User Icon"})]}),f.jsxs("div",{className:xe.inputs,children:[f.jsx("label",{htmlFor:"password"}),f.jsx("input",{type:"password",...r("password",{required:!0}),placeholder:"Password"}),f.jsx("img",{src:_C,alt:"Lock Icon"})]}),f.jsx("div",{children:o?f.jsx("button",{type:"button",className:xe.btnLogin,children:"Loading..."}):f.jsx("button",{className:xe.btnLogin,children:"Login"})})]}),t&&f.jsx("p",{style:{color:"rgb(143, 14, 19)"},children:t}),f.jsxs("p",{children:["Don't have an account?",f.jsx(an,{to:"/Register",children:" Sign Up"})]})]})]})})};async function qM(t){console.log(t);const e=Ve.currentUser.uid,n=jt(Bt,`/authUsers/${e}`);try{await ta(n,t),console.log("Пользователь зарегестрирован")}catch(r){console.error("Ошибка авторизации:",r)}}const GM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M280-40q-33%200-56.5-23.5T200-120v-720q0-33%2023.5-56.5T280-920h400q33%200%2056.5%2023.5T760-840v720q0%2033-23.5%2056.5T680-40H280Zm0-200v120h400v-120H280Zm200%20100q17%200%2028.5-11.5T520-180q0-17-11.5-28.5T480-220q-17%200-28.5%2011.5T440-180q0%2017%2011.5%2028.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0%20560v120-120Zm0-560v-40%2040Z'/%3e%3c/svg%3e",KM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M480-80q-83%200-156-31.5T197-197q-54-54-85.5-127T80-480q0-83%2031.5-156T197-763q54-54%20127-85.5T480-880q83%200%20156%2031.5T763-763q54%2054%2085.5%20127T880-480v58q0%2059-40.5%20100.5T740-280q-35%200-66-15t-52-43q-29%2029-65.5%2043.5T480-280q-83%200-141.5-58.5T280-480q0-83%2058.5-141.5T480-680q83%200%20141.5%2058.5T680-480v58q0%2026%2017%2044t43%2018q26%200%2043-18t17-44v-58q0-134-93-227t-227-93q-134%200-227%2093t-93%20227q0%20134%2093%20227t227%2093h200v80H480Zm0-280q50%200%2085-35t35-85q0-50-35-85t-85-35q-50%200-85%2035t-35%2085q0%2050%2035%2085t85%2035Z'/%3e%3c/svg%3e",vC=()=>{const{register:t,handleSubmit:e,formState:{errors:n,isSubmitting:r,isSubmitSuccessful:i}}=Fu({mode:"onBlur"}),s=vu(),o=async a=>{console.log(a);const l=await q0(),u=a.email,d=a.password;await RR(l,u,d).then(({user:c})=>{const h={username:a.username,email:a.email,password:a.password,phone:a.phone,token:c.accessToken};qM(h),localStorage.setItem("userAuth",JSON.stringify(h))})};return console.log(hh),k.useEffect(()=>{const a=Ve.onAuthStateChanged(l=>{l&&s("/CarRent")});return()=>a()},[]),f.jsx("div",{className:xe.registrFormContainer,children:f.jsxs("div",{className:xe.authFormRegistr,children:[f.jsx("div",{className:xe.authFormLeft,children:f.jsx("video",{loop:!0,muted:!0,src:mC,autoPlay:!0,controls:!0})}),f.jsxs("form",{className:xe.formContain,onSubmit:e(o),children:[f.jsxs("div",{className:xe.inputs,children:[f.jsx("label",{htmlFor:"login"}),f.jsx("input",{type:"text",...t("username",{required:!0}),placeholder:"Name"}),f.jsx("img",{src:hh})]}),f.jsxs("div",{className:xe.inputs,children:[f.jsx("label",{htmlFor:"login"}),f.jsx("input",{...t("email",{required:!0,pattern:{value:/^\S+@\S+$/i,message:"Некорректный email"}}),placeholder:"Email"}),n.email&&f.jsx("span",{style:{color:"rgb(143, 14, 19)",fontSize:"14px",position:"absolute",bottom:"-23px"},children:n.email.message}),f.jsx("img",{src:KM})]}),f.jsxs("div",{className:xe.inputs,children:[f.jsx("label",{htmlFor:"phone"}),f.jsx("input",{type:"number",...t("phone",{required:!0,minLength:{value:10,message:"Минимум 10 цифр"}}),placeholder:"Phone"}),n.phone&&f.jsx("span",{style:{color:"rgb(143, 14, 19)",fontSize:"14px",position:"absolute",bottom:"-23px"},children:n.phone.message}),f.jsx("img",{src:GM})]}),f.jsxs("div",{className:xe.inputs,children:[f.jsx("label",{htmlFor:"pass"}),f.jsx("input",{type:"password",...t("password",{required:!0}),placeholder:"Password"}),f.jsx("img",{src:_C})]}),r?f.jsx("button",{type:"button",className:xe.buttonRegister,children:"Loading..."}):f.jsx("button",{className:xe.buttonRegister,children:"Register"}),f.jsx("span",{children:i?"Вы успешно зарегестрировались":!1})]}),f.jsxs("p",{children:["have an account ",f.jsx(an,{to:"/Login",children:"Sign In"})]})]})})},YM=()=>f.jsxs(Ky,{children:[f.jsx(it,{path:"/CarRent",element:f.jsx(pC,{})}),f.jsx(it,{path:"/Profile",element:f.jsx(KO,{})}),f.jsx(it,{path:"/SearchAuto",element:f.jsx(dC,{})}),f.jsx(it,{path:"/MyCars",element:f.jsx(hC,{})}),f.jsx(it,{path:"/MyOrders",element:f.jsx(dM,{})}),f.jsx(it,{path:"/AboutUs",element:f.jsx(fC,{})}),f.jsx(it,{path:"/Login",element:f.jsx(gC,{})}),f.jsx(it,{path:"/Register",element:f.jsx(vC,{})})]}),QM=()=>f.jsxs(Ky,{children:[f.jsx(it,{path:"/CarRent",element:f.jsx(pC,{})}),f.jsx(it,{path:"/Login",element:f.jsx(gC,{})}),f.jsx(it,{path:"/Register",element:f.jsx(vC,{})}),f.jsx(it,{path:"/AboutUs",element:f.jsx(fC,{})}),f.jsx(it,{path:"/SearchAuto",element:f.jsx(dC,{})}),f.jsx(it,{path:"/MyCars",element:f.jsx(hC,{})})]});function XM(){const[t,e]=k.useState(!1);return k.useEffect(()=>{const n=Ve.onAuthStateChanged(r=>{r&&e(!0)});return()=>n()},[]),f.jsxs(f.Fragment,{children:[f.jsx(pO,{}),t?f.jsx(YM,{}):f.jsx(QM,{})]})}const JM=uL({reducer:{searchCar:TL}});My(document.getElementById("root")).render(f.jsx(DD,{store:JM,children:f.jsx(KI,{children:f.jsx(XM,{})})}));
