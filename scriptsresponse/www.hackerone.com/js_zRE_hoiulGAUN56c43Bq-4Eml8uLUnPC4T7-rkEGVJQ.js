/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));;
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):n(this[0].form)}}));;
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],e):e(jQuery)}((function(e){return e.fn.labels=function(){var t,s,i,n,a;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(t=this.eq(0).parents().last()).add(t.length?t.siblings():this.siblings()),s="label[for='"+e.ui.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n))}}));;
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],(function(n,i){var e="Width"===i?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),h={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};function s(n,i,r,h){return t.each(e,(function(){i-=parseFloat(t.css(n,"padding"+this))||0,r&&(i-=parseFloat(t.css(n,"border"+this+"Width"))||0),h&&(i-=parseFloat(t.css(n,"margin"+this))||0)})),i}t.fn["inner"+i]=function(n){return void 0===n?h["inner"+i].call(this):this.each((function(){t(this).css(r,s(this,n)+"px")}))},t.fn["outer"+i]=function(n,e){return"number"!=typeof n?h["outer"+i].call(this,n):this.each((function(){t(this).css(r,s(this,n,!0,e)+"px")}))}})),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))})}));;
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.scrollParent=function(t){var n=this.css("position"),o="absolute"===n,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var t=e(this);return(!o||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))})).eq(0);return"fixed"!==n&&i.length?i:e(this[0].ownerDocument||document)}}));;
/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],e):e(jQuery)}((function(e){return e.extend(e.expr[":"],{tabbable:function(n){var t=e.attr(n,"tabindex"),u=null!=t;return(!u||t>=0)&&e.ui.focusable(n,u)}})}));;
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){return i.fn.extend({uniqueId:(n=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++n)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var n}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.escapeSelector=(n=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(e){return e.replace(n,"\\$1")});var n}));;
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.focusable=function(i,t){var n,a,r,s,o,u=i.nodeName.toLowerCase();return"area"===u?(a=(n=i.parentNode).name,!(!i.href||!a||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+a+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(s=!i.disabled)&&(o=e(i).closest("fieldset")[0])&&(s=!o.disabled):s="a"===u&&i.href||t,s&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"hidden"!==i}(e(i)))},e.extend(e.expr[":"],{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));;
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(E){"function"==typeof define&&define.amd?define(["jquery","./version"],E):E(jQuery)}((function(E){return E.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.ui.plugin={add:function(e,i,o){var t,u=n.ui[e].prototype;for(t in o)u.plugins[t]=u.plugins[t]||[],u.plugins[t].push([i,o[t]])},call:function(n,e,i,o){var t,u=n.plugins[e];if(u&&(o||n.element[0].parentNode&&11!==n.element[0].parentNode.nodeType))for(t=0;t<u.length;t++)n.options[u[t][0]]&&u[t][1].apply(n.element,i)}}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));;
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){var e,i=0,s=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove")}catch(t){}e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(e,s){t.isFunction(s)?r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}():r[e]=s})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;a<r;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r))!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(n,o){var a,r;for(r=0;r<n.length;r++)a=s.classesElementLookup[n[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),s.classesElementLookup[n[r]]=a,i.push(n[r]),o&&e.classes[n[r]]&&i.push(e.classes[n[r]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&n(e.keys.match(/\S+/g)||[],!0),e.extra&&n(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))}))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));;
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);;
/**
 * @file
 * Fast Autocomplete jQuery plugin.
 */

(function ($, Drupal) {
  var facJsonRequest = null;

  /**
   * Apply the fastAutocomplete plugin to given input:text elements.
   */
  $.fn.fastAutocomplete = function (options) {
    // Default settings.
    var settings = $.extend({
      id: null,
      jsonFilesPath: undefined,
      keyMinLength: 1,
      keyMaxLength: 5,
      breakpoint: 0,
      enabled: false,
      resizeTimer: null,
      emptyResult: '',
      allResultsLink: true,
      allResultsLinkThreshold: -1,
      highlightEnabled: false,
      resultLocation: false
    }, options);

    // Check if a jsonFilesPath is set before doing anything.
    if (settings.jsonFilesPath !== undefined) {
      // Only apply the plugin on input fields of type text.
      this.filter('input').each(function (index) {
        var that = this;

        $(this).attr({
          'autocomplete':'off',
          'autocorrect': 'off',
          'autocapitalize': 'none',
          'spellcheck': 'false',
          'aria-autocomplete':'list',
          'aria-owns': 'fac-result-' + settings.id + '-' + index
        });

        // Create the hidden result div.
        var $facResult = $('<div>').attr({
          'class': 'fac-result hidden',
          'id': 'fac-result-' + settings.id + '-' + index
        });

        toggleResponsiveBehavior($facResult, settings);
        $(window).resize(function (e) {
          clearTimeout(settings.resizeTimer);
          settings.resizeTimer = setTimeout(toggleResponsiveBehavior($facResult, settings), 250);
        });

        // Add a hidden div to announce changes to screen readers.
        var $announce = $('<div>').attr({
          'class': 'announce visually-hidden',
          'role': 'status',
          'aria-live': 'polite'
        });
        $announce.appendTo($facResult);

        // Create result list.
        var $resultList = $('<ul>').attr({
          'class': 'result-list hidden'
        }).appendTo($facResult);

        if (settings.allResultsLink) {
          // Add the see all link to the result div.
          var $seeAllLink = $('<li>').attr({
            'class': 'see-all-link'
          }).html('<div><a href="#">' + Drupal.t('See all results') + '</a></div></li>');
          // The mousedown and click events are to prevent the default link behavior.
          $seeAllLink.find('> div > a').mousedown(function (e) {
            e.preventDefault();
          }).click(function (e) {
            e.preventDefault();
          });
          $seeAllLink.css('cursor', 'pointer').mousedown(function (e) {
            switch (e.which) {
              // Left mouse click.
              case 1:
                $(that).closest('form').submit();
                break;
            }
            e.preventDefault();
          }).hover(function (e) {
            $facResult.find('> ul.result-list > li.selected').removeClass('selected');
            $(this).addClass('selected');
          }).addClass('hidden');
          $seeAllLink.appendTo($resultList);
        }

        if (settings.emptyResult) {
          // Add the empty result text.
          var $emptyResults = $('<div>').attr({
            'class': 'empty-result'
          });
          $emptyResults.html(settings.emptyResult);
          $emptyResults.find('a').each(function () {
            $(this).on('mousedown', function (e) {
              e.preventDefault();
              switch (e.which) {
                // Left mouse click.
                case 1:
                  window.location = $(this).attr('href');
                  break;
              }
            });
          });
          $emptyResults.appendTo($facResult);
        }

        if (settings.resultLocation) {
          $facResult.appendTo(settings.resultLocation);
        }
        else {
          var $form = $(this).closest('form');
          $form.addClass('form-fac-result');
          $facResult.appendTo($form);
        }
        // When a character is entered perform the necessary ajax call. Don't
        // respond to any special keys.
        $(this).on('keyup', function (e) {
          if (settings.enabled) {
            if (!e) {
              e = window.event;
            }
            switch (e.keyCode) {
              case 9:
              case 16:
              case 17:
              case 18:
              case 20:
              case 33:
              case 34:
              case 35:
              case 36:
              case 37:
              case 38:
              case 39:
              case 40:
              case 13:
              case 27:
                return;

              default:
                populateResults(this, $facResult, settings);
                return;
            }
            e.preventDefault();
          }
        });

        $(this).on('paste', function (e) {
          $(that).trigger('keyup');
        });

        // Handle special keys (up, down, esc).
        $(this).on('keydown', function (e) {
          if (settings.enabled) {
            if (!e) {
              e = window.event;
            }

            switch (e.keyCode) {
              // Down arrow.
              case 40:
                selectDown($facResult);
                e.preventDefault();
                break;

              // Up arrow.
              case 38:
                selectUp($facResult);
                e.preventDefault();
                break;

              // Enter.
              case 13:
                var $selected = $facResult.find('li.selected:not(.see-all-link)');
                if ($selected.length) {
                  $selected.find('a:not(.contextual-links)')[0].click();
                  e.preventDefault();
                }
                else {
                  return;
                }
                break;

              // Esc.
              case 27:
                if (facJsonRequest !== null) {
                  facJsonRequest.abort();
                }
                $facResult.addClass('hidden');
                e.preventDefault();
                break;

              default:
                return;
            }
          }
        });

        // Hide the result div when the input element loses focus.
        $(this).on('blur', function (e) {
          if (settings.enabled) {
            if (facJsonRequest !== null) {
              facJsonRequest.abort();
            }
            $facResult.addClass('hidden');
          }
        });

        // When the input element gains focus, show the result.
        $(this).on('focus', function (e) {
          if (settings.enabled) {
            $facResult.removeClass('hidden');
          }
        });
      });
    }

    // Return the original object to make the plugin chainable.
    return this;
  };

  // Enable or disable the Fast Autocomplete behavior based on a breakpoint.
  function toggleResponsiveBehavior($facResult, settings) {
    var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (browserWidth >= settings.breakpoint) {
      settings.enabled = true;
    }
    else {
      settings.enabled = false;
      if ($facResult !== undefined) {
        $facResult.addClass('hidden');
      }
    }
  }

  // Populates the results div with suggestions from an AJAX response.
  function populateResults(element, $facResult, settings) {
    var value = $(element).val();
    value = value.trim();

    // Remove any slashes from the value, since that will cause 404s,
    // because the slash will create extra path parameters that we do
    // not want.
    value = value.replace(/\s*\/\s*/g, '_');
    value = value.replace(/\s+/g, '_');

    // Make sure the value is lowercase for case-insensitive search.
    value.toLowerCase();

    var $resultList = $facResult.find('> ul.result-list');
    var $emptyResult = $facResult.find('> div.empty-result');
    var $announce = $facResult.find('> div.announce');
    var $seeAllLink = undefined;
    if (settings.allResultsLink) {
      $seeAllLink = $resultList.find('> li.see-all-link');
    }

    // Trim the result to the maximum length.
    if (value.length > settings.keyMaxLength) {
      value = value.substring(0, settings.keyMaxLength);
    }

    // Only perform the ajax call if the key has a minimum length. Append a
    // timestamp to the url to prevent the browser caching the json response.
    if (value.length >= settings.keyMinLength) {
      $(element).trigger('fac:requestStart');
      facJsonRequest = $.ajax({
        url: settings.jsonFilesPath + value + '.json?nocache=' + (new Date()).getTime(),
        dataType: 'json',
        type: 'GET',
        processData: false,
        beforeSend : function () {
          if (facJsonRequest !== null) {
            facJsonRequest.abort();
          }
        },
        success: function (data, status, xhr) {
          if (data.items.length) {
            $announce.text(Drupal.formatPlural(data.items.length, '@count result found.', '@count results found.') + ' ' + Drupal.t('Use the up/down keys to navigate the results or press <ENTER> to show all results.'));
            if ($seeAllLink) {
              if (data.items.length >= settings.allResultsLinkThreshold) {
                $seeAllLink.find('> div > a').html(Drupal.t('See all results for "%key"', {'%key': $(element).val()}));
                $seeAllLink.removeClass('hidden');
              }
              else {
                $seeAllLink.addClass('hidden');
              }
            }
            $resultList.find('> li.result').remove();
            $emptyResult.addClass('hidden');
            $.each(data.items, function (key, dataValue) {
              var $item = $('<li class="result">' + dataValue + '</li>');
              Drupal.attachBehaviors($item[0]);
              $item.css('cursor', 'pointer').mousedown(function (e) {
                e.preventDefault();
                switch (e.which) {
                  // Left mouse click.
                  case 1:
                    $item.find('a:not(.contextual-links a)')[0].click();
                    break;

                }
              }).hover(function (e) {
                $resultList.find('> li.selected').removeClass('selected');
                $(this).addClass('selected');
              });
              if ($seeAllLink !== undefined) {
                $item.insertBefore($seeAllLink);
              }
              else {
                $item.appendTo($resultList);
              }
            });
            $resultList.removeClass('hidden');
            $facResult.removeClass('hidden');
            if (settings.highlightingEnabled) {
              $resultList.find('> li.result').unmark().mark($(element).val().split(' '));
            }
          }
          else {
            $announce.text('No results found.');
            $resultList.addClass('hidden');
            $resultList.find('li.result').remove();
            if ($seeAllLink) {
              $seeAllLink.addClass('hidden');
            }
            $facResult.addClass('hidden');
            $emptyResult.removeClass('hidden');
          }
          $(element).trigger('fac:requestEnd');
        },
        fail: function () {
          $(element).trigger('fac:requestEnd');
        }
      });
    }
    else {
      if (settings.highlightingEnabled) {
        $resultList.find('> li.result').unmark().mark($(element).val().split(' '));
      }
      // If the key is empty, clear the result div and show the empty result content.
      if (value.length < 1) {
        $announce.text('');
        $resultList.addClass('hidden');
        $resultList.find('> li.result').remove();
        if ($seeAllLink) {
          $seeAllLink.addClass('hidden');
        }
        $facResult.addClass('hidden');
        $emptyResult.removeClass('hidden');
      }
    }
  }

  // Select the next suggestion.
  function selectDown($facResult) {
    var selector = '> div.empty-result ul';
    if ($facResult.find('> ul.result-list > li').length) {
      selector = '> ul.result-list';
    }
    var $selected = $facResult.find(selector + ' > li.selected');
    if ($selected.length) {
      $selected.removeClass('selected');
      $selected.next('li').addClass('selected');
    }
    else {
      $facResult.find(selector + ' > li:first').addClass('selected');
    }
  }

  // Select the previous suggestion.
  function selectUp($facResult) {
    var selector = '> div.empty-result ul';
    if ($facResult.find('> ul.result-list > li').length) {
      selector = '> ul.result-list';
    }
    var $selected = $facResult.find(selector + ' > li.selected');
    if ($selected.length) {
      $selected.removeClass('selected');
      $selected.prev('li').addClass('selected');
    }
    else {
      $facResult.find(selector + ' > li:last').addClass('selected');
    }
  }

}(jQuery, Drupal));
;
/**
 * @file
 * Fast Autocomplete scripts.
 */

(function ($, Drupal) {
  'use strict';

  /**
   * Enables Fast Autocomplete functionality.
   */
  Drupal.behaviors.fac = {
    attach: function (context, settings) {
      $.each(drupalSettings.fac, function (index, value) {
        $(value.inputSelectors).once('fac').fastAutocomplete(value);
      });
    }
  };

})(jQuery, Drupal);
;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){return function(){var i,o=Math.max,e=Math.abs,n=/left|center|right/,l=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,h=/%$/,r=t.fn.position;function p(t,i,o){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?o/100:1)]}function c(i,o){return parseInt(t.css(i,o),10)||0}function a(i){var o=i[0];return 9===o.nodeType?{width:i.width(),height:i.height(),offset:{top:0,left:0}}:t.isWindow(o)?{width:i.width(),height:i.height(),offset:{top:i.scrollTop(),left:i.scrollLeft()}}:o.preventDefault?{width:0,height:0,offset:{top:o.pageY,left:o.pageX}}:{width:i.outerWidth(),height:i.outerHeight(),offset:i.offset()}}t.position={scrollbarWidth:function(){if(void 0!==i)return i;var o,e,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),o=l.offsetWidth,n.css("overflow","scroll"),o===(e=l.offsetWidth)&&(e=n[0].clientWidth),n.remove(),i=o-e},getScrollInfo:function(i){var o=i.isWindow||i.isDocument?"":i.element.css("overflow-x"),e=i.isWindow||i.isDocument?"":i.element.css("overflow-y"),n="scroll"===o||"auto"===o&&i.width<i.element[0].scrollWidth;return{width:"scroll"===e||"auto"===e&&i.height<i.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var o=t(i||window),e=t.isWindow(o[0]),n=!!o[0]&&9===o[0].nodeType;return{element:o,isWindow:e,isDocument:n,offset:!e&&!n?t(i).offset():{left:0,top:0},scrollLeft:o.scrollLeft(),scrollTop:o.scrollTop(),width:o.outerWidth(),height:o.outerHeight()}}},t.fn.position=function(i){if(!i||!i.of)return r.apply(this,arguments);i=t.extend({},i);var h,d,g,u,m,w,W=t(i.of),v=t.position.getWithinInfo(i.within),y=t.position.getScrollInfo(v),H=(i.collision||"flip").split(" "),b={};return w=a(W),W[0].preventDefault&&(i.at="left top"),d=w.width,g=w.height,u=w.offset,m=t.extend({},u),t.each(["my","at"],(function(){var t,o,e=(i[this]||"").split(" ");1===e.length&&(e=n.test(e[0])?e.concat(["center"]):l.test(e[0])?["center"].concat(e):["center","center"]),e[0]=n.test(e[0])?e[0]:"center",e[1]=l.test(e[1])?e[1]:"center",t=f.exec(e[0]),o=f.exec(e[1]),b[this]=[t?t[0]:0,o?o[0]:0],i[this]=[s.exec(e[0])[0],s.exec(e[1])[0]]})),1===H.length&&(H[1]=H[0]),"right"===i.at[0]?m.left+=d:"center"===i.at[0]&&(m.left+=d/2),"bottom"===i.at[1]?m.top+=g:"center"===i.at[1]&&(m.top+=g/2),h=p(b.at,d,g),m.left+=h[0],m.top+=h[1],this.each((function(){var n,l,f=t(this),s=f.outerWidth(),r=f.outerHeight(),a=c(this,"marginLeft"),w=c(this,"marginTop"),x=s+a+c(this,"marginRight")+y.width,T=r+w+c(this,"marginBottom")+y.height,L=t.extend({},m),P=p(b.my,f.outerWidth(),f.outerHeight());"right"===i.my[0]?L.left-=s:"center"===i.my[0]&&(L.left-=s/2),"bottom"===i.my[1]?L.top-=r:"center"===i.my[1]&&(L.top-=r/2),L.left+=P[0],L.top+=P[1],n={marginLeft:a,marginTop:w},t.each(["left","top"],(function(o,e){t.ui.position[H[o]]&&t.ui.position[H[o]][e](L,{targetWidth:d,targetHeight:g,elemWidth:s,elemHeight:r,collisionPosition:n,collisionWidth:x,collisionHeight:T,offset:[h[0]+P[0],h[1]+P[1]],my:i.my,at:i.at,within:v,elem:f})})),i.using&&(l=function(t){var n=u.left-L.left,l=n+d-s,h=u.top-L.top,p=h+g-r,c={target:{element:W,left:u.left,top:u.top,width:d,height:g},element:{element:f,left:L.left,top:L.top,width:s,height:r},horizontal:l<0?"left":n>0?"right":"center",vertical:p<0?"top":h>0?"bottom":"middle"};d<s&&e(n+l)<d&&(c.horizontal="center"),g<r&&e(h+p)<g&&(c.vertical="middle"),o(e(n),e(l))>o(e(h),e(p))?c.important="horizontal":c.important="vertical",i.using.call(this,t,c)}),f.offset(t.extend(L,{using:l}))}))},t.ui.position={fit:{left:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollLeft:n.offset.left,f=n.width,s=t.left-i.collisionPosition.marginLeft,h=l-s,r=s+i.collisionWidth-f-l;i.collisionWidth>f?h>0&&r<=0?(e=t.left+h+i.collisionWidth-f-l,t.left+=h-e):t.left=r>0&&h<=0?l:h>r?l+f-i.collisionWidth:l:h>0?t.left+=h:r>0?t.left-=r:t.left=o(t.left-s,t.left)},top:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollTop:n.offset.top,f=i.within.height,s=t.top-i.collisionPosition.marginTop,h=l-s,r=s+i.collisionHeight-f-l;i.collisionHeight>f?h>0&&r<=0?(e=t.top+h+i.collisionHeight-f-l,t.top+=h-e):t.top=r>0&&h<=0?l:h>r?l+f-i.collisionHeight:l:h>0?t.top+=h:r>0?t.top-=r:t.top=o(t.top-s,t.top)}},flip:{left:function(t,i){var o,n,l=i.within,f=l.offset.left+l.scrollLeft,s=l.width,h=l.isWindow?l.scrollLeft:l.offset.left,r=t.left-i.collisionPosition.marginLeft,p=r-h,c=r+i.collisionWidth-s-h,a="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];p<0?((o=t.left+a+d+g+i.collisionWidth-s-f)<0||o<e(p))&&(t.left+=a+d+g):c>0&&((n=t.left-i.collisionPosition.marginLeft+a+d+g-h)>0||e(n)<c)&&(t.left+=a+d+g)},top:function(t,i){var o,n,l=i.within,f=l.offset.top+l.scrollTop,s=l.height,h=l.isWindow?l.scrollTop:l.offset.top,r=t.top-i.collisionPosition.marginTop,p=r-h,c=r+i.collisionHeight-s-h,a="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,d="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,g=-2*i.offset[1];p<0?((n=t.top+a+d+g+i.collisionHeight-s-f)<0||n<e(p))&&(t.top+=a+d+g):c>0&&((o=t.top-i.collisionPosition.marginTop+a+d+g-h)>0||e(o)<c)&&(t.top+=a+d+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position}));;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var b=a(this).attr("title")||"";return a("<a>").text(b).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(b,c){var d=(b.attr("aria-describedby")||"").split(/\s+/);d.push(c),b.data("ui-tooltip-id",c).attr("aria-describedby",a.trim(d.join(" ")))},_removeDescribedBy:function(b){var c=b.data("ui-tooltip-id"),d=(b.attr("aria-describedby")||"").split(/\s+/),e=a.inArray(c,d);e!==-1&&d.splice(e,1),b.removeData("ui-tooltip-id"),d=a.trim(d.join(" ")),d?b.attr("aria-describedby",d):b.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=a("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=a([])},_setOption:function(b,c){var d=this;this._super(b,c),"content"===b&&a.each(this.tooltips,function(a,b){d._updateContent(b.element)})},_setOptionDisabled:function(a){this[a?"_disable":"_enable"]()},_disable:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d.element[0],b.close(e,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var b=a(this);if(b.is("[title]"))return b.data("ui-tooltip-title",b.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var b=a(this);b.data("ui-tooltip-title")&&b.attr("title",b.data("ui-tooltip-title"))}),this.disabledTitles=a([])},open:function(b){var c=this,d=a(b?b.target:this.element).closest(this.options.items);d.length&&!d.data("ui-tooltip-id")&&(d.attr("title")&&d.data("ui-tooltip-title",d.attr("title")),d.data("ui-tooltip-open",!0),b&&"mouseover"===b.type&&d.parents().each(function(){var b,d=a(this);d.data("ui-tooltip-open")&&(b=a.Event("blur"),b.target=b.currentTarget=this,c.close(b,!0)),d.attr("title")&&(d.uniqueId(),c.parents[this.id]={element:this,title:d.attr("title")},d.attr("title",""))}),this._registerCloseHandlers(b,d),this._updateContent(d,b))},_updateContent:function(a,b){var c,d=this.options.content,e=this,f=b?b.type:null;return"string"==typeof d||d.nodeType||d.jquery?this._open(b,a,d):(c=d.call(a[0],function(c){e._delay(function(){a.data("ui-tooltip-open")&&(b&&(b.type=f),this._open(b,a,c))})}),void(c&&this._open(b,a,c)))},_open:function(b,c,d){function e(a){j.of=a,g.is(":hidden")||g.position(j)}var f,g,h,i,j=a.extend({},this.options.position);if(d){if(f=this._find(c))return void f.tooltip.find(".ui-tooltip-content").html(d);c.is("[title]")&&(b&&"mouseover"===b.type?c.attr("title",""):c.removeAttr("title")),f=this._tooltip(c),g=f.tooltip,this._addDescribedBy(c,g.attr("id")),g.find(".ui-tooltip-content").html(d),this.liveRegion.children().hide(),i=a("<div>").html(g.find(".ui-tooltip-content").html()),i.removeAttr("name").find("[name]").removeAttr("name"),i.removeAttr("id").find("[id]").removeAttr("id"),i.appendTo(this.liveRegion),this.options.track&&b&&/^mouse/.test(b.type)?(this._on(this.document,{mousemove:e}),e(b)):g.position(a.extend({of:c},this.options.position)),g.hide(),this._show(g,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){g.is(":visible")&&(e(j.of),clearInterval(h))},a.fx.interval)),this._trigger("open",b,{tooltip:g})}},_registerCloseHandlers:function(b,c){var d={keyup:function(b){if(b.keyCode===a.ui.keyCode.ESCAPE){var d=a.Event(b);d.currentTarget=c[0],this.close(d,!0)}}};c[0]!==this.element[0]&&(d.remove=function(){this._removeTooltip(this._find(c).tooltip)}),b&&"mouseover"!==b.type||(d.mouseleave="close"),b&&"focusin"!==b.type||(d.focusout="close"),this._on(!0,c,d)},close:function(b){var c,d=this,e=a(b?b.currentTarget:this.element),f=this._find(e);return f?(c=f.tooltip,void(f.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&!e.attr("title")&&e.attr("title",e.data("ui-tooltip-title")),this._removeDescribedBy(e),f.hiding=!0,c.stop(!0),this._hide(c,this.options.hide,function(){d._removeTooltip(a(this))}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),b&&"mouseleave"===b.type&&a.each(this.parents,function(b,c){a(c.element).attr("title",c.title),delete d.parents[b]}),f.closing=!0,this._trigger("close",b,{tooltip:c}),f.hiding||(f.closing=!1)))):void e.removeData("ui-tooltip-open")},_tooltip:function(b){var c=a("<div>").attr("role","tooltip"),d=a("<div>").appendTo(c),e=c.uniqueId().attr("id");return this._addClass(d,"ui-tooltip-content"),this._addClass(c,"ui-tooltip","ui-widget ui-widget-content"),c.appendTo(this._appendTo(b)),this.tooltips[e]={element:b,tooltip:c}},_find:function(a){var b=a.data("ui-tooltip-id");return b?this.tooltips[b]:null},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]},_appendTo:function(a){var b=a.closest(".ui-front, dialog");return b.length||(b=this.document[0].body),b},_destroy:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur"),f=d.element;e.target=e.currentTarget=f[0],b.close(e,!0),a("#"+c).remove(),f.data("ui-tooltip-title")&&(f.attr("title")||f.attr("title",f.data("ui-tooltip-title")),f.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),a.uiBackCompat!==!1&&a.widget("ui.tooltip",a.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var a=this._superApply(arguments);return this.options.tooltipClass&&a.tooltip.addClass(this.options.tooltipClass),a}}),a.ui.tooltip});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../widget"],a):a(jQuery)}(function(a){var b=/ui-corner-([a-z]){2,6}/g;return a.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var b=this,c=[];a.each(this.options.items,function(d,e){var f,g={};if(e)return"controlgroupLabel"===d?(f=b.element.find(e),f.each(function(){var b=a(this);b.children(".ui-controlgroup-label-contents").length||b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),b._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),void(c=c.concat(f.get()))):void(a.fn[d]&&(g=b["_"+d+"Options"]?b["_"+d+"Options"]("middle"):{classes:{}},b.element.find(e).each(function(){var e=a(this),f=e[d]("instance"),h=a.widget.extend({},g);if("button"!==d||!e.parent(".ui-spinner").length){f||(f=e[d]()[d]("instance")),f&&(h.classes=b._resolveClassesValues(h.classes,f)),e[d](h);var i=e[d]("widget");a.data(i[0],"ui-controlgroup-data",f?f:e[d]("instance")),c.push(i[0])}})))}),this.childWidgets=a(a.unique(c)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(b){this.childWidgets.each(function(){var c=a(this),d=c.data("ui-controlgroup-data");d&&d[b]&&d[b]()})},_updateCornerClass:function(a,b){var c="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,c),this._addClass(a,null,d)},_buildSimpleOptions:function(a,b){var c="vertical"===this.options.direction,d={classes:{}};return d.classes[b]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[a],d},_spinnerOptions:function(a){var b=this._buildSimpleOptions(a,"ui-spinner");return b.classes["ui-spinner-up"]="",b.classes["ui-spinner-down"]="",b},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},_selectmenuOptions:function(a){var b="vertical"===this.options.direction;return{width:!!b&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(b?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(b?"top":"left")},last:{"ui-selectmenu-button-open":b?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(b?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}},_resolveClassesValues:function(c,d){var e={};return a.each(c,function(f){var g=d.options.classes[f]||"";g=a.trim(g.replace(b,"")),e[f]=(g+" "+c[f]).replace(/\s+/g," ")}),e},_setOption:function(a,b){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,b),"disabled"===a?void this._callChildMethod(b?"disable":"enable"):void this.refresh()},refresh:function(){var b,c=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),b=this.childWidgets,this.options.onlyVisible&&(b=b.filter(":visible")),b.length&&(a.each(["first","last"],function(a,d){var e=b[d]().data("ui-controlgroup-data");if(e&&c["_"+e.widgetName+"Options"]){var f=c["_"+e.widgetName+"Options"](1===b.length?"only":d);f.classes=c._resolveClassesValues(f.classes,e),e.element[e.widgetName](f)}else c._updateCornerClass(b[d](),d)}),this._callChildMethod("refresh"))}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],a):a(jQuery)}(function(a){return a.ui.formResetMixin={_formResetHandler:function(){var b=a(this);setTimeout(function(){var c=b.data("ui-form-reset-instances");a.each(c,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)}},_unbindFormResetHandler:function(){if(this.form.length){var b=this.form.data("ui-form-reset-instances");b.splice(a.inArray(this,b),1),b.length?this.form.data("ui-form-reset-instances",b):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.checkboxradio",[a.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var b,c,d=this,e=this._super()||{};return this._readType(),c=this.element.labels(),this.label=a(c[c.length-1]),this.label.length||a.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){d.originalLabel+=3===this.nodeType?a(this).text():this.outerHTML}),this.originalLabel&&(e.label=this.originalLabel),b=this.element[0].disabled,null!=b&&(e.disabled=b),e},_create:function(){var a=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var b=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===b&&/radio|checkbox/.test(this.type)||a.error("Can't create checkboxradio on element.nodeName="+b+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var b,c=this.element[0].name,d="input[name='"+a.ui.escapeSelector(c)+"']";return c?(b=this.form.length?a(this.form[0].elements).filter(d):a(d).filter(function(){return 0===a(this).form().length}),b.not(this.element)):a([])},_toggleClasses:function(){var b=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",b),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",b)._toggleClass(this.icon,null,"ui-icon-blank",!b),"radio"===this.type&&this._getRadioGroup().each(function(){var b=a(this).checkboxradio("instance");b&&b._removeClass(b.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(a,b){if("label"!==a||b)return this._super(a,b),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",b),void(this.element[0].disabled=b)):void this.refresh()},_updateIcon:function(b){var c="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=a("<span>"),this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(c+=b?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,b?"ui-icon-blank":"ui-icon-check")):c+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",c),b||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)},refresh:function(){var a=this.element[0].checked,b=this.element[0].disabled;this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),b!==this.options.disabled&&this._setOptions({disabled:b})}}]),a.ui.checkboxradio});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));;
/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],e):e(jQuery)}((function(e){var t=!1;return e(document).on("mouseup",(function(){t=!1})),e.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,(function(e){return t._mouseDown(e)})).on("click."+this.widgetName,(function(i){if(!0===e.data(i.target,t.widgetName+".preventClickEvent"))return e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1})),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,o=1===i.which,n=!("string"!=typeof this.options.cancel||!i.target.nodeName)&&e(i.target).closest(this.options.cancel).length;return!(o&&!n&&this._mouseCapture(i))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){s.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=!1!==this._mouseStart(i),!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(i){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&e.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,t=!1,i.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}));;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blurActiveElement(b),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);d.closest(c).length||a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.resizable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}}),a.ui.resizable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel,icons:d.icons,text:d.text},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,delete d.icons,"boolean"==typeof d.text&&delete d.text,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),e&&"string"==typeof c&&f.resizable("option","handles",c),e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),a.ui.dialog});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../version","../keycode"],a):a(jQuery)}(function(a){function b(a){for(var b,c;a.length&&a[0]!==document;){if(b=a.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.regional.en=a.extend(!0,{},this.regional[""]),this.regional["en-US"]=a.extend(!0,{},this.regional.en),this.dpDiv=d(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function d(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.on("mouseout",c,function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",c,e)}function e(){a.datepicker._isDisabledDatepicker(g.inline?g.dpDiv.parent()[0]:g.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))}function f(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.12.1"}});var g;return a.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return f(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var e=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:e,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?d(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(c),a.data(b,"datepicker",c),c.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.off("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||b.on("focus",this._showDatepicker),"button"!==d&&"both"!==d||(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.on("click",function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(b),c.dpDiv.css("display","block"))},_dialogDatepicker:function(b,c,d,e,g){var h,i,j,k,l,m=this._dialogInst;return m||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),a("body").append(this._dialogInput),m=this._dialogInst=this._newInst(this._dialogInput,!1),m.settings={},a.data(this._dialogInput[0],"datepicker",m)),f(m.settings,e||{}),c=c&&c.constructor===Date?this._formatDate(m,c):c,this._dialogInput.val(c),this._pos=g?g.length?g:[g.pageX,g.pageY]:null,this._pos||(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[i/2-100+k,j/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),m.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],"datepicker",m),this},_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,"datepicker");d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,"datepicker"),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==c&&"span"!==c||d.removeClass(this.markerClassName).empty(),g===e&&(g=null))},_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,"datepicker")}catch(c){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(b,c,d){var e,g,h,i,j=this._getInst(b);return 2===arguments.length&&"string"==typeof c?"defaults"===c?a.extend({},a.datepicker._defaults):j?"all"===c?a.extend({},j.settings):this._get(j,c):null:(e=c||{},"string"==typeof c&&(e={},e[c]=d),void(j&&(this._curInst===j&&this._hideDatepicker(),g=this._getDateDatepicker(b,!0),h=this._getMinMaxDate(j,"min"),i=this._getMinMaxDate(j,"max"),f(j.settings,e),null!==h&&void 0!==e.dateFormat&&void 0===e.minDate&&(j.settings.minDate=this._formatDate(j,h)),null!==i&&void 0!==e.dateFormat&&void 0===e.maxDate&&(j.settings.maxDate=this._formatDate(j,i)),"disabled"in e&&(e.disabled?this._disableDatepicker(b):this._enableDatepicker(b)),this._attachments(a(b),j),this._autoSize(j),this._setDate(j,g),this._updateAlternate(j),this._updateDatepicker(j))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},_showDatepicker:function(c){if(c=c.target||c,"input"!==c.nodeName.toLowerCase()&&(c=a("input",c.parentNode)[0]),!a.datepicker._isDisabledDatepicker(c)&&a.datepicker._lastInput!==c){var d,e,g,h,i,j,k;d=a.datepicker._getInst(c),a.datepicker._curInst&&a.datepicker._curInst!==d&&(a.datepicker._curInst.dpDiv.stop(!0,!0),d&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),e=a.datepicker._get(d,"beforeShow"),g=e?e.apply(c,[c,d]):{},g!==!1&&(f(d.settings,g),d.lastVal=null,a.datepicker._lastInput=c,a.datepicker._setDateFromField(d),a.datepicker._inDialog&&(c.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(c),a.datepicker._pos[1]+=c.offsetHeight),h=!1,a(c).parents().each(function(){return h|="fixed"===a(this).css("position"),!h}),i={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,d.dpDiv.empty(),d.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(d),i=a.datepicker._checkOffset(d,i,h),d.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":h?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),d.inline||(j=a.datepicker._get(d,"showAnim"),k=a.datepicker._get(d,"duration"),d.dpDiv.css("z-index",b(a(c))+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[j]?d.dpDiv.show(j,a.datepicker._get(d,"showOptions"),k):d.dpDiv[j||"show"](j?k:null),a.datepicker._shouldFocusInput(d)&&d.input.trigger("focus"),a.datepicker._curInst=d))}},_updateDatepicker:function(b){this.maxRows=4,g=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b);var c,d=this._getNumberOfMonths(b),f=d[1],h=17,i=b.dpDiv.find("."+this._dayOverClass+" a");i.length>0&&e.apply(i.get(0)),b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&b.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",h*f+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.trigger("focus"),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var c,d,e,f,g=this._curInst;!g||b&&g!==a.data(b,"datepicker")||this._datepickerShowing&&(c=this._get(g,"showAnim"),d=this._get(g,"duration"),e=function(){a.datepicker._tidyDialog(g)},a.effects&&(a.effects.effect[c]||a.effects[c])?g.dpDiv.hide(c,a.datepicker._get(g,"showOptions"),d,e):g.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(g,"onClose"),f&&f.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).val(e))},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e="y"===a?d:1,f=new RegExp("^\\d{"+e+","+d+"}"),g=c.substring(i).match(f);if(!g)throw"Missing number at position "+i;return i+=g[0].length,parseInt(g[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(i,d.length).toLowerCase()===d.toLowerCase())return f=b[0],i+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+i},x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(p===-1?p=(new Date).getFullYear():p<100&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(p<=k?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),r<=f)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getFullYear()%100<10?"0":"")+b.getFullYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).on(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)D=(v+k)%7,C+="<th scope='col'"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{
for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.selectedYear+("Y"===c?b:0),e=a.selectedMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).on("mousedown",a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new c,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.12.1",a.datepicker});;

window.profiles = {
  leadership: [
    {
      name: "M\u00E5rten Mickos",
      title: "CEO",
      image: "/assets/images/headshots/marten_mickos.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/martenmickos" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/martenmickos" },
      ],
    }, {
      name: "Jobert Abma",
      title: "Co-founder & Engineering",
      image: "/assets/images/headshots/jobert_120.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/jobertabma" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/jobertabma" },
      ],
    }, {
      name: "Michiel Prins",
      title: "Co-founder & Product",
      image: "/assets/images/headshots/michiel_prins.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/michielprins" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/michiel3" },
      ],
    }, {
      name: "Alex Rice",
      title: "Co-founder & CTO",
      image: "/assets/images/headshots/alex_120.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/senorarroz" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/alexrice" },
      ],
    }, {
      name: "Liz Brittain",
      title: "CFO",
      image: "/assets/images/headshots/liz_brittain.jpg",
      links: [
        { identifier: "linkedin", url: "https://www.linkedin.com/in/liz-brittain-3a14501/" },
      ],
    }, {
      name: "Guillaume Vives",
      title: "Chief Product Officer",
      image: "/sites/default/files/guillaume_vives.jpg",
      links: [
        { identifier: "linkedin", url: "https://www.linkedin.com/in/gvives/" },
      ],
    }, {
      name: "Marjorie Janiewicz",
      title: "SVP of Sales",
      image: "/assets/images/headshots/marjorie_janiewicz.jpg",
      links: [
        { identifier: "linkedin", url: "https://www.linkedin.com/in/marjorietoucas" },
      ],
    }, {
      name: "Dean Breda",
      title: "General Counsel",
      image: "/assets/images/headshots/dean_breda.jpg",
      links: [
        { identifier: "linkedin", url: "https://www.linkedin.com/in/dean-breda-84bb117/" },
      ],
    }, {
      name: "Rana Robillard",
      title: "Chief People Officer",
      image: "/assets/images/headshots/rana_robillard.jpg",
      links: [
        { identifier: "linkedin", url: "https://www.linkedin.com/in/ranarobillard/" },
      ],
    }, {
      name: "Amanda Berger",
      title: "SVP, Customer Success",
      image: "/sites/default/files/amanda-berger.jpg",
      links: [
        { identifier: "linkedin", url: "https://www.linkedin.com/in/amberger/" },
      ],
    },
  ],
  boardAndAdvisors: [
    {
      name: "Bill Gurley",
      title: "Benchmark",
      image: "/assets/images/headshots/bill_120.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/bgurley" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/billgurley" },
      ],
    }, {
      name: "Jon Sakoda",
      title: "NEA",
      image: "/assets/images/headshots/jon_sakoda.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/jonsakoda" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/jonsakoda" },
      ],
    }, {
      name: "John Hering",
      title: "Lookout",
      image: "/assets/images/headshots/john_120.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/johnhering" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/johnhering" },
      ],
    }, {
      name: "Ryan McGeehan",
      title: "Former Head of Security Facebook, Coinbase",
      image: "/assets/images/headshots/ryan_120.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/magoo" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/m4goo" },
      ],
    }, {
      name: "Chris Evans",
      title: "Former CISO Tesla, Google Project Zero, Chrome",
      image: "/assets/images/headshots/chris_120.jpg",
      links: [
        { identifier: "twitter", url: "https://twitter.com/scarybeasts" },
        { identifier: "linkedin", url: "https://www.linkedin.com/in/scarybeast" },
      ],
    }, {
      name: "Hoang Vuong",
      title: "COO, GoFundMe",
      image: "/assets/images/headshots/hoang_120.jpg",
      links: [
        { identifier: "linkedin", url: "https://www.linkedin.com/pub/hoang-vuong/0/101/875" },
      ],
    },
  ],
  team: [{
    name: "Zac Akin",
    image: "/assets/images/headshots/zac_akin.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/zacakin" },
      { identifier: "linkedin", url: "https://www.linkedin.com/in/zacakin" },
    ],
  }, {
    name: "Adam August",
    image: "/assets/images/headshots/adam_august.png",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/adamaugust" },
    ],
  }, {
    name: "Adam Bacchus",
    image: "/assets/images/headshots/adam_bacchus.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/sushihack" },
      { identifier: "linkedin", url: "https://www.linkedin.com/in/adambacchus" },
    ],
  }, {
    name: "Meredith Baker",
    image: "/assets/images/headshots/meredith_baker.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/meredithdbaker" },
    ],
  }, {
    name: "Lars Bekkema",
    image: "/assets/images/headshots/lars_bekkema.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/lbekkema" },
      { identifier: "github", url: "https://github.com/lbekkema" },
    ],
  }, {
    name: "Guy Ben-Simhon",
    image: "/assets/images/headshots/ben_guy-simhon.png",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/guybensimhon" },
    ],
  }, {
    name: "Evan Brynne",
    image: "/assets/images/headshots/evan_brynne.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/evanbrynne" },
      { identifier: "github", url: "https://github.com/ebrynne" },
    ],
  }, {
    name: "Adam Carosso",
    image: "/assets/images/headshots/adam_carosso.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/adamcarosso" },
    ],
  }, {
    name: "Russell Coleman",
    image: "/assets/images/headshots/russell_coleman.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/russellcoleman" },
    ],
  }, {
    name: "Barry Conklin",
    image: "/assets/images/headshots/barry_conklin.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/barry-conklin-b35aa645" },
    ],
  }, {
    name: "Tom Cook",
    image: "/assets/images/headshots/tom_cook.png",
    links: [
      { identifier: "twitter", url: "https://twitter.com/ywxwy" },
      { identifier: "linkedin", url: "https://www.linkedin.com/in/tcoooooooooooooooooooooooooook" },
      { identifier: "github", url: "https://github.com/tomcook" },
    ],
  }, {
    name: "George Cuchural",
    image: "/assets/images/headshots/george_cuchural.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/georgecuchural" },
    ],
  }, {
    name: "Christina D'Ambrosio",
    image: "/assets/images/headshots/christina_dambrosio.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/cdam84" },
      { identifier: "linkedin", url: "https://www.linkedin.com/in/christinamdambrosio" },
    ],
  }, {
    name: "Zach Dando-Thompson",
    image: "/assets/images/headshots/zach_dando-thompson.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/zachdando" },
      { identifier: "linkedin", url: "https://www.linkedin.com/in/zachary-dando-thompson-7536324" },
    ],
  }, {
    name: "Jan Deelstra",
    image: "/assets/images/headshots/jan_deelstra.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/jjoos" },
      { identifier: "github", url: "https://github.com/jjoos" },
    ],
  }, {
    name: "Brandie Gaines",
    image: "/assets/images/headshots/brandie_gaines.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/brandiegaines" },
    ],
  }, {
    name: "Maarten van Gijssel",
    image: "/assets/images/headshots/maarten_van_gijssel.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/pub/maarten-van-gijssel/91/a08/855",},
      { identifier: "github", url: "https://github.com/mvgijssel" },
    ],
  }, {
    name: "Kayla Gu",
    image: "/assets/images/headshots/kayla_gu.jpg",
    links: [],
  }, {
    name: "Crystal Hazen",
    image: "/assets/images/headshots/crystal_hazen.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/crystal-hazen-84967a8" },
    ],
  }, {
    name: "Kate Heffernan",
    image: "/assets/images/headshots/kate_heffernan.jpg",
    links: [],
  }, {
    name: "David Horvath",
    image: "/assets/images/headshots/david_horvath.jpg",
    links: [],
  }, {
    name: "Daniela Howard",
    image: "/assets/images/headshots/daniela_howard.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/daniela-howard" },
    ],
  }, {
    name: "Vishal Jalan",
    image: "/assets/images/headshots/vishal_jalan.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/jalanvishal" },
    ],
  }, {
    name: "Alexander Jeurissen",
    image: "/assets/images/headshots/alexander_jeurissen.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/alexanderjeuris" },
      { identifier: "github", url: "https://github.com/alexanderjeurissen" },
    ],
  }, {
    name: "Sonya Juang",
    image: "/assets/images/headshots/sonya_juang.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/sonyajuang" },
    ],
  }, {
    name: "Will von Kaenel",
    image: "/assets/images/headshots/will_von_kaenel.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/william-von-kaenel-1127a062" },
    ],
  }, {
    name: "Jens Kanis",
    image: "/assets/images/headshots/jens_kanis.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/jenskanis" },
      { identifier: "linkedin", url: "https://linkedin.com/in/jenskanis" },
    ],
  }, {
    name: "Nicole Kawaguchi",
    image: "/assets/images/headshots/nicole_kawaguchi.jpeg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/nicolekawaguchi" },
    ],
  }, {
    name: "John Kim",
    image: "/assets/images/headshots/john_kim.jpg",
    links: [],
  }, {
    name: "Philip Kocanda",
    image: "/assets/images/headshots/philip_kocanda.png",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/philipkocanda" },
    ],
  }, {
    name: "Sonja Koppensteiner",
    image: "/assets/images/headshots/sonja_koppensteiner.jpg",
    links: [],
  }, {
    name: "Lauren Koszarek",
    image: "/assets/images/headshots/lauren_koszarek.png",
    links: [
      { identifier: "twitter", url: "https://twitter.com/LKozz" },
      { identifier: "linkedin", url: "https://www.linkedin.com/pub/lauren-koszarek/19/218/8aa" },
    ],
  }, {
    name: "Ted Kramer",
    image: "/assets/images/headshots/ted_kramer.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/ted-kramer-1952102a" },
    ],
  }, {
    name: "Josephine Lee",
    image: "/assets/images/headshots/josephine_lee.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/leejosephinem" },
      { identifier: "linkedin", url: "https://www.linkedin.com/in/leejosephinem" },
    ],
  }, {
    name: "Reed Loden",
    image: "/assets/images/headshots/reed_loden.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/reedloden" },
      { identifier: "github", url: "https://github.com/reedloden" },
    ],
  }, {
    name: "Aditi Lonhari",
    image: "/assets/images/headshots/aditi_lonhari.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/aditi-lonhari" },
      { identifier: "github", url: "https://github.com/aditilonhari" },
    ],
  }, {
    name: "Ivan Malykh",
    image: "/assets/images/headshots/ivan_malykh.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/ivanmalijkh" },
      { identifier: "twitter", url: "https://twitter.com/ivdma" },
    ],
  }, {
    name: "Kelcey Morton",
    image: "/assets/images/headshots/kelcey_morton.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/pub/kelcey-morton/31/8b6/78b" },
    ],
  }, {
    name: "Nisha Bagyam Nallasivam",
    image: "/assets/images/headshots/nisha_bagyam_nallasivam.jpg",
    links: [
      {
        identifier: "linkedin",
        url: "https://www.linkedin.com/pub/nisha-bagyam-nallasivam/a/aa8/aab",
      },
    ],
  }, {
    name: "Tracy Nelson",
    image: "/assets/images/headshots/tracy_nelson.jpg",
    links: [
      {
        identifier: "linkedin",
        url: "https://www.linkedin.com/profile/view?id=AAMAAABsYCEBUjuU70sjSuYEduo3p-Nfb7FkoDY",
      },
    ],
  }, {
  name: "Ming Ng",
    image: "/assets/images/headshots/ming_ng.jpg",
    links: [],
  }, {
    name: "Christine Nolan",
    image: "/assets/images/headshots/christine_nolan.jpg",
    links: [
      {
        identifier: "linkedin",
        url: "https://www.linkedin.com/in/christine-e-nolan",
      },
    ],
  }, {
    name: "Remon Oldenbeuving",
    image: "/assets/images/headshots/remon_oldenbeuving.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/R51" },
      { identifier: "github", url: "https://github.com/RSO" },
    ],
  }, {
    name: "Jonathan Ponciano",
    image: "/assets/images/headshots/jonathan_ponciano.png",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/jonathanponciano" },
    ],
  }, {
    name: "Jack Presnell",
    image: "/assets/images/headshots/jack_presnell.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/jack-presnell-15240790" },
    ],
  }, {
    name: "Kevin Rosenbaum",
    image: "/assets/images/headshots/kevin_rosenbaum.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/kevin-rosenbaum-18824b84" },
      { identifier: "twitter", url: "https://twitter.com/rosenawesome" },
    ],
  }, {
    name: "Martijn Russchen",
    image: "/assets/images/headshots/martijn_russchen.jpg",
    links: [
      { identifier: "linkedin", url: "https://nl.linkedin.com/in/mrusschen" },
      { identifier: "github", url: "https://github.com/martijnrusschen" },
    ],
  }, {
    name: "Ben Sadeghipour",
    image: "/assets/images/headshots/ben_sadeghipour.jpeg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/behrouzsadeghipour" },
    ],
  }, {
    name: "Feb Sansaneeyakiat",
    image: "/assets/images/headshots/feb_sansaneeyakiat.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/febsansaneeyakiat" },
    ],
  }, {
    name: "Candace Sauvé",
    image: "/assets/images/headshots/candace_sauve.jpg",
    links: [
      { identifier: "linkedin", url: "http://linkedin.com/in/candacesauve" },
    ],
  }, {
    name: "Chris Schilling",
    image: "/assets/images/headshots/chris_schilling.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/chris-schilling-917767b4" },
    ],
  }, {
    name: "Siebe Jan Stoker",
    image: "/assets/images/headshots/siebe_jan_stoker.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/pub/sj-stoker/a1/bb3/8a8" },
      { identifier: "github", url: "https://github.com/esjee" },
    ],
  }, {
    name: "Eunice Sun",
    image: "/assets/images/headshots/eunice_sun.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/eunicesun" },
    ],
  }, {
    name: "Callum Thomas",
    image: "/assets/images/headshots/callum_thomas.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/callum-thomas-76886b81" },
    ],
  }, {
    name: "Luke Tucker",
    image: "/assets/images/headshots/luke_tucker.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/lukettucker" },
      { identifier: "twitter", url: "https://twitter.com/luketucker" },
    ],
  }, {
    name: "Annette Veltman-Bats",
    image: "/assets/images/headshots/annette_veltman_bats.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/annette-veltman-bats-a6b34628" },
    ],
  }, {
    name: "Tom de Vries",
    image: "/assets/images/headshots/tom_de_vries.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/tomdev" },
      { identifier: "github", url: "https://github.com/tomdev" },
    ],
  }, {
    name: "Peiying Wen",
    image: "/assets/images/headshots/peiying_wen.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/wenpeiying530" },
    ],
  }, {
    name: "Ben Willis",
    image: "/assets/images/headshots/ben_willis.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/benjaminwillis" },
      { identifier: "github", url: "https://github.com/bwillis" },
    ],
  }, {
    name: "Fern Wood",
    image: "/assets/images/headshots/fern_wood.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/pub/fern-wood/3a/336/a0b" },
      { identifier: "github", url: "https://github.com/IronRadon" },
    ],
  }, {
    name: "Michael Woolslayer",
    image: "/assets/images/headshots/michael_woolslayer.jpg",
    links: [
      { identifier: "linkedin", url: "https://www.linkedin.com/in/mrwool" },
    ],
  }, {
    name: "Dirk Zittersteyn",
    image: "/assets/images/headshots/dirk_zittersteyn.jpg",
    links: [
      { identifier: "twitter", url: "https://twitter.com/DZittersteyn" },
      { identifier: "linkedin", url: "https://nl.linkedin.com/in/dzittersteyn" },
    ],
  }],
};
;
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2013 M. Alsup
 * Version: 3.0.3 (11-JUL-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */
;(function($, undefined) {
"use strict";

var ver = '3.0.3';

function debug(s) {
	if ($.fn.cycle.debug)
		log(s);
}		
function log() {
	/*global console */
	if (window.console && console.log)
		console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
	return el.cyclePause;
};


// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in first arg == 'resume') and indicates
//	 that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
		
		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;
		this.cycleStop = 0; // issue #108

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();

		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards);}, startTime);
		}
	});
};

function triggerPause(cont, byHover, onPager) {
	var opts = $(cont).data('cycle.opts');
	if (!opts)
		return;
	var paused = !!cont.cyclePause;
	if (paused && opts.paused)
		opts.paused(cont, opts, byHover, onPager);
	else if (!paused && opts.resumed)
		opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop === undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'destroy':
		case 'stop':
			var opts = $(cont).data('cycle.opts');
			if (!opts)
				return false;
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			if (opts.elements)
				$(opts.elements).stop();
			$(cont).removeData('cycle.opts');
			if (options == 'destroy')
				destroy(cont, opts);
			return false;
		case 'toggle':
			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
			checkInstantResume(cont.cyclePause, arg2, cont);
			triggerPause(cont);
			return false;
		case 'pause':
			cont.cyclePause = 1;
			triggerPause(cont);
			return false;
		case 'resume':
			cont.cyclePause = 0;
			checkInstantResume(false, arg2, cont);
			triggerPause(cont);
			return false;
		case 'prev':
		case 'next':
			opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			if (typeof arg2 == 'string') 
				opts.oneTimeFx = arg2;
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		}
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
	
	function checkInstantResume(isPaused, arg2, cont) {
		if (!isPaused && arg2 === true) { // resume now!
			var options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not resume');
				return false;
			}
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			go(options.elements, options, 1, !options.backwards);
		}
	}
}

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
}

// unbind event handlers
function destroy(cont, opts) {
	if (opts.next)
		$(opts.next).unbind(opts.prevNextEvent);
	if (opts.prev)
		$(opts.prev).unbind(opts.prevNextEvent);
	
	if (opts.pager || opts.pagerAnchorBuilder)
		$.each(opts.pagerAnchors || [], function() {
			this.unbind().remove();
		});
	opts.pagerAnchors = null;
	$(cont).unbind('mouseenter.cycle mouseleave.cycle');
	if (opts.destroy) // callback
		opts.destroy(opts);
}

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	var startingSlideSpecified;
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
	if (meta)
		opts = $.extend(opts, meta);
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.backwards); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide !== undefined) {
		opts.startingSlide = parseInt(opts.startingSlide,10);
		if (opts.startingSlide >= els.length || opts.startSlide < 0)
			opts.startingSlide = 0; // catch bogus input
		else 
			startingSlideSpecified = true;
	}
	else if (opts.backwards)
		opts.startingSlide = els.length - 1;
	else
		opts.startingSlide = 0;

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		if (startingSlideSpecified) {
			// try to find the specified starting slide and if found set start slide index in the map accordingly
			for ( var cnt = 0; cnt < els.length; cnt++ ) {
				if ( opts.startingSlide == opts.randomMap[cnt] ) {
					opts.randomIndex = cnt;
				}
			}
		}
		else {
			opts.randomIndex = 1;
			opts.startingSlide = opts.randomMap[1];
		}
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z;
		if (opts.backwards)
			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
		else
			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z);
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit) {
		if (!opts.aspect) {
	        if (opts.width)
	            $slides.width(opts.width);
	        if (opts.height && opts.height != 'auto')
	            $slides.height(opts.height);
		} else {
			$slides.each(function(){
				var $slide = $(this);
				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
				if( opts.width && $slide.width() != opts.width ) {
					$slide.width( opts.width );
					$slide.height( opts.width / ratio );
				}

				if( opts.height && $slide.height() < opts.height ) {
					$slide.height( opts.height );
					$slide.width( opts.height * ratio );
				}
			});
		}
	}

	if (opts.center && ((!opts.fit) || opts.aspect)) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
				"margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
			});
		});
	}

	if (opts.center && !opts.fit && !opts.slideResize) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
				"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
			});
		});
	}
		
	// stretch container
	var reshape = (opts.containerResize || opts.containerResizeHeight) && $cont.innerHeight() < 1;
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (opts.containerResize && maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
		if (opts.containerResizeHeight && maxh > 0)
			$cont.css({height:maxh+'px'});
	}

	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
	if (opts.pause)
		$cont.bind('mouseenter.cycle', function(){
			pauseFlag = true;
			this.cyclePause++;
			triggerPause(cont, true);
		}).bind('mouseleave.cycle', function(){
				if (pauseFlag)
					this.cyclePause--;
				triggerPause(cont, true);
		});

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

		if ( $el.is('img') ) {
			var loading = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loading) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options);}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.cssAfter = opts.cssAfter || {};
	opts.cssFirst = opts.cssFirst || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout,10);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		
		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.backwards)
		opts.nextSlide = opts.startingSlide === 0 ? (els.length-1) : opts.startingSlide-1;
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (!opts.skipInitializationCallbacks) {
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
	}
	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});
	if (opts.pager || opts.pagerAnchorBuilder)
		buildPager(els,opts);

	exposeAddSlide(opts, els);

	return opts;
}

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
}

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (var p in txs) {
			if (txs.hasOwnProperty(p)) {
				tx = txs[p];
				if (txs.hasOwnProperty(p) && $.isFunction(tx))
					opts.fxs.push(p);
			}
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
}

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		// add the slide to the random map and resort
		if (opts.random) {
			opts.randomMap.push(opts.slideCount-1);
			opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		}

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$s.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager || opts.pagerAnchorBuilder)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		debug('manualTrump in go(), stopping active transition');
		$(els).stop(true,true);
		opts.busy = 0;
		clearTimeout(p.cycleTimeout);
	}

	// don't begin another timeout-based transition if there is one active
	if (opts.busy) {
		debug('transition active, ignoring new tx request');
		return;
	}


	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	var changed = false;
	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
		changed = true;
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
				opts.lastFx = 0;
			else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
				opts.lastFx = opts.fxs.length - 1;
			fx = opts.fxs[opts.lastFx];
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			opts.busy = 0;
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
			if (!p.cycleStop) {
				// queue next transition
				queueNext();
			}
		};

		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
		
		// get ready to perform the transition
		opts.busy = 1;
		if (opts.fxFn) // fx function provided?
			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else
			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
	}
	else {
		queueNext();
	}

	if (changed || opts.nextSlide == opts.currSlide) {
		// calculate the next slide
		var roll;
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length) {
				opts.randomIndex = 0;
				opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
			}
			opts.nextSlide = opts.randomMap[opts.randomIndex];
			if (opts.nextSlide == opts.currSlide)
				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
		}
		else if (opts.backwards) {
			roll = (opts.nextSlide - 1) < 0;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = 1;
				opts.currSlide = 0;
			}
			else {
				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
				opts.currSlide = roll ? 0 : opts.nextSlide+1;
			}
		}
		else { // sequence
			roll = (opts.nextSlide + 1) == els.length;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = els.length-2;
				opts.currSlide = els.length-1;
			}
			else {
				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
			}
		}
	}
	if (changed && opts.pager)
		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
	
	function queueNext() {
		// stage the next transition
		var ms = 0, timeout = opts.timeout;
		if (opts.timeout && !opts.continuous) {
			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
         if (opts.fx == 'shuffle')
            ms -= opts.speedOut;
      }
		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
			ms = 10;
		if (ms > 0)
			p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards); }, ms);
	}
}

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
}

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
	var val = moveForward ? 1 : -1;
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
	if ($.isFunction(cb))
		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, moveForward);
	return false;
}

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
}

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder)) {
		a = opts.pagerAnchorBuilder(i,el);
		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
	}
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone[0]);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	opts.pagerAnchors =  opts.pagerAnchors || [];
	opts.pagerAnchors.push($a);
	
	var pagerFn = function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
		if ($.isFunction(cb))
			cb(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
	};
	
	if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
		$a.hover(pagerFn, function(){/* no-op */} );
	}
	else {
		$a.bind(opts.pagerEvent, pagerFn);
	}
	
	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
		$a.bind('click.cycle', function(){return false;}); // suppress click
	
	var cont = opts.$cont[0];
	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
	if (opts.pauseOnPagerHover) {
		$a.hover(
			function() { 
				pauseFlag = true;
				cont.cyclePause++; 
				triggerPause(cont,true,true);
			}, function() { 
				if (pauseFlag)
					cont.cyclePause--; 
				triggerPause(cont,true,true);
			} 
		);
	}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	debug('applying clearType background-color hack');
	function hex(s) {
		s = parseInt(s,10).toString(16);
		return s.length < 2 ? '0'+s : s;
	}
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v && v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	}
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
}

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	if (typeof opts.cssBefore.opacity == 'undefined')
		opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (opts.slideResize && w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (opts.slideResize && h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut, animInDelay = opts.animInDelay, animOutDelay = opts.animOutDelay;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {
		$n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function() {
			cb();
		});
	};
	$l.delay(animOutDelay).animate(opts.animOut, speedOut, easeOut, function() {
		$l.css(opts.cssAfter);
		if (!opts.sync) 
			fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
    activePagerClass: 'activeSlide', // class name used for the active pager link
    after:            null,     // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
    animIn:           null,     // properties that define how the slide animates in
    animInDelay:      0,        // allows delay before next slide transitions in	
    animOut:          null,     // properties that define how the slide animates out
    animOutDelay:     0,        // allows delay before current slide transitions out
    aspect:           false,    // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
    autostop:         0,        // true to end slideshow after X transitions (where X == slide count)
    autostopCount:    0,        // number of transitions (optionally used with autostop to define X)
    backwards:        false,    // true to start slideshow at last slide and move backwards through the stack
    before:           null,     // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    center:           null,     // set to true to have cycle add top/left margin to each slide (use with width and height options)
    cleartype:        !$.support.opacity,  // true if clearType corrections should be applied (for IE)
    cleartypeNoBg:    false,    // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    containerResize:  1,        // resize container to fit largest slide
    containerResizeHeight:  0,  // resize containers height to fit the largest slide but leave the width dynamic
    continuous:       0,        // true to start next transition immediately after current one completes
    cssAfter:         null,     // properties that defined the state of the slide after transitioning out
    cssBefore:        null,     // properties that define the initial state of the slide before transitioning in
    delay:            0,        // additional delay (in ms) for first transition (hint: can be negative)
    easeIn:           null,     // easing for "in" transition
    easeOut:          null,     // easing for "out" transition
    easing:           null,     // easing method for both in and out transitions
    end:              null,     // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    fastOnEvent:      0,        // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    fit:              0,        // force slides to fit container
    fx:               'fade',   // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    fxFn:             null,     // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height:           'auto',   // container height (if the 'fit' option is true, the slides will be set to this height as well)
    manualTrump:      true,     // causes manual transition to stop an active transition instead of being ignored
    metaAttr:         'cycle',  // data- attribute that holds the option data for the slideshow
    next:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
    nowrap:           0,        // true to prevent slideshow from wrapping
    onPagerEvent:     null,     // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    onPrevNextEvent:  null,     // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    pager:            null,     // element, jQuery object, or jQuery selector string for the element to use as pager container
    pagerAnchorBuilder: null,   // callback fn for building anchor links:  function(index, DOMelement)
    pagerEvent:       'click.cycle', // name of event which drives the pager navigation
    pause:            0,        // true to enable "pause on hover"
    pauseOnPagerHover: 0,       // true to pause when hovering over pager link
    prev:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
    prevNextEvent:    'click.cycle',// event which drives the manual transition to the previous or next slide
    random:           0,        // true for random, false for sequence (not applicable to shuffle fx)
    randomizeEffects: 1,        // valid when multiple effects are used; true to make the effect sequence random
    requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout:   250,      // ms delay for requeue
    rev:              0,        // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
    shuffle:          null,     // coords for shuffle animation, ex: { top:15, left: 200 }
    skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
    slideExpr:        null,     // expression for selecting slides (if something other than all children is required)
    slideResize:      1,        // force slide width/height to fixed size before every transition
    speed:            1000,     // speed of the transition (any valid fx speed value)
    speedIn:          null,     // speed of the 'in' transition
    speedOut:         null,     // speed of the 'out' transition
    startingSlide:    undefined,// zero-based index of the first slide to be displayed
    sync:             1,        // true if in/out transitions should occur simultaneously
    timeout:          4000,     // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn:        null,     // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    updateActivePagerLink: null,// callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    width:            null      // container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
"use strict";

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
	opts.before.push(function(curr,next,opts,w,h,rev) {
		$(curr).css('zIndex',opts.slideCount + (rev !== true ? 1 : 0));
		$(next).css('zIndex',opts.slideCount + (rev !== true ? 0 : 1));
	});
	opts.animIn.opacity = 1;
	opts.animOut.opacity = 0;
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.cssFirst.top = 0;
	opts.animIn.top = 0;
	opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst.top = 0;
	opts.cssBefore.top = -h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = -w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.width = 'show';
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animIn.height = 'show';
	opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		if (opts.rev)
			fwd = !fwd;
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++) {
				if (fwd)
					opts.els.push(opts.els.shift());
				else
					opts.els.unshift(opts.els.pop());
			}
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z,10)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
		opts.animOut.width = next.cycleW;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.height = 0;
	opts.animIn.top = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
	});
	opts.cssFirst.top = 0;
	opts.cssFirst.left = 0;
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
	});
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
	opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = w;
	opts.animIn.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = h;
	opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = this.cycleH;
		opts.animOut.top = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = next.cycleH;
		opts.animOut.top = curr.cycleH/2;
		opts.animOut.height = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssAfter.display = '';
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2,10);
			var left = parseInt(w/2,10);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count),10) : 0;
			var ll = l ? l - parseInt(step * (l/count),10) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);;
/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function(a,b,c,d){function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="stellar",g={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},h={scroll:{getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)},getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)}},position:{getLeft:function(a){return-1*parseInt(a.css("left"),10)},getTop:function(a){return-1*parseInt(a.css("top"),10)}},margin:{getLeft:function(a){return-1*parseInt(a.css("margin-left"),10)},getTop:function(a){return-1*parseInt(a.css("margin-top"),10)}},transform:{getLeft:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[5],10):0}}},i={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[k]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},j=function(){var b,c=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,d=a("script")[0].style,e="";for(b in d)if(c.test(b)){e=b.match(c)[0];break}return"WebkitOpacity"in d&&(e="Webkit"),"KhtmlOpacity"in d&&(e="Khtml"),function(a){return e+(e.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),k=j("transform"),l=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,m=l?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},n=l?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},o=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)};e.prototype={init:function(){this.options.name=f+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this,b=h[a.options.scrollProperty];this._getScrollLeft=function(){return b.getLeft(a.$scrollElement)},this._getScrollTop=function(){return b.getTop(a.$scrollElement)}},_defineSetters:function(){var b=this,c=h[b.options.scrollProperty],d=i[b.options.positionProperty],e=c.setLeft,f=c.setTop;this._setScrollLeft="function"==typeof e?function(a){e(b.$scrollElement,a)}:a.noop,this._setScrollTop="function"==typeof f?function(a){f(b.$scrollElement,a)}:a.noop,this._setPosition=d.setPosition||function(a,c,e,f,g){b.options.horizontalScrolling&&d.setLeft(a,c,e),b.options.verticalScrolling&&d.setTop(a,f,g)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},refresh:function(c){var d=this,e=d._getScrollLeft(),f=d._getScrollTop();c&&c.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).load(function(){var a=d._getScrollLeft(),b=d._getScrollTop();d._setScrollLeft(a+1),d._setScrollTop(b+1),d._setScrollLeft(a),d._setScrollTop(b)}),this._setScrollLeft(e),this._setScrollTop(f)},_detectViewport:function(){var a=this.$viewportElement.offset(),b=null!==a&&a!==d;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=b?a.top:0,this.viewportOffsetLeft=b?a.left:0},_findParticles:function(){{var b=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var c,e,f,g,h,i,j,k,l,m=a(this),n=0,o=0,p=0,q=0;if(m.data("stellar-elementIsActive")){if(m.data("stellar-elementIsActive")!==this)return}else m.data("stellar-elementIsActive",this);b.options.showElement(m),m.data("stellar-startingLeft")?(m.css("left",m.data("stellar-startingLeft")),m.css("top",m.data("stellar-startingTop"))):(m.data("stellar-startingLeft",m.css("left")),m.data("stellar-startingTop",m.css("top"))),f=m.position().left,g=m.position().top,h="auto"===m.css("margin-left")?0:parseInt(m.css("margin-left"),10),i="auto"===m.css("margin-top")?0:parseInt(m.css("margin-top"),10),k=m.offset().left-h,l=m.offset().top-i,m.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(n=p,o=q,j=b,!1):(p+=b.position().left,void(q+=b.position().top))}),c=m.data("stellar-horizontal-offset")!==d?m.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,e=m.data("stellar-vertical-offset")!==d?m.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:m,$offsetParent:j,isFixed:"fixed"===m.css("position"),horizontalOffset:c,verticalOffset:e,startingPositionLeft:f,startingPositionTop:g,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:n,parentOffsetTop:o,stellarRatio:m.data("stellar-ratio")!==d?m.data("stellar-ratio"):1,width:m.outerWidth(!0),height:m.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},_handleScrollEvent:function(){var a=this,b=!1,c=function(){a._repositionElements(),b=!1},d=function(){b||(o(c),b=!0)};this.$scrollElement.bind("scroll."+this.name,d),d()},_startAnimationLoop:function(){var a=this;this._animationLoop=function(){o(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[f]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+f,null)}):void 0},a[f]=function(){var c=a(b);return c.stellar.apply(c,Array.prototype.slice.call(arguments,0))},a[f].scrollProperty=h,a[f].positionProperty=i,b.Stellar=e}(jQuery,this,document);;

_linkedin_partner_id = "682812";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();
;

(function(w, d, c) {
w['techtargetic'] = w['techtargetic'] || {};w['techtargetic'].client = c;var s = d.createElement("script");s.type = "text/javascript";s.async = !0;s.crossorigin = "anonymous";var rd = new Date();rd=rd.getFullYear()+''+rd.getMonth()+rd.getDate();s.src = "https://trk.techtarget.com/tracking.js";var n = d.getElementsByTagName("script")[0];n.parentNode.insertBefore(s, n);
})(window, document, '16607667');
;
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);;
/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */

(function($) {

  $.fn.niceSelect = function(method,args) {

    // Methods
    if (typeof method == 'string') {
      if (method == 'update') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');

          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);

            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');

          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });
        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {
        console.log('Method "' + method + '" does not exist.')
      }
      return this;
    }

    // Hide native select
    //this.hide();
    this.addClass('sr-only');

    // Create custom markup
    this.each(function() {
      var $select = $(this);

      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });

    function create_nice_select($select) {

      var like_label = '';
      if($select.data('label')) {
        like_label = '<span class="like-label">'+$select.data('label')+'</span>';
      }

      $select.after($('<div></div>')
        .addClass('nice-select')
        .addClass($select.attr('class') || '')
        .addClass($select.attr('disabled') ? 'disabled' : '')
        .removeClass('sr-only')
        .attr('tabindex', '-1')
        .attr('aria-hidden', 'true')
        .html('<span class="current"></span><i class="ico-h1-angle"></i>'+like_label+'<ul class="list"></ul>')
      );

      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');

      $dropdown.find('.current').html($selected.data('display') || $selected.text());

      var arg_opts = '';
      if (typeof args == 'string') {
        if (args == 'clear_filter') {
          arg_opts = '<a href="#" class="clear-single-filter"><i class="fas fa-times"></i></a>';
        }
      }

      $options.each(function(i) {
        var $option = $(this);
        var display = $option.data('display');

        $dropdown.find('ul').append($('<li></li>')
          .attr('data-value', $option.val())
          .attr('data-display', (display || null))
          .addClass('option' +
            ($option.is(':selected') ? ' selected' : '') +
            ($option.is(':disabled') ? ' disabled' : ''))
          .html($option.text()+arg_opts)
        );
      });
    }

    /* Event listeners */

    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');

    // Open/close
    $(document).on('click.nice_select', '.nice-select', function(event) {
      var $dropdown = $(this);

      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');

      if($dropdown.hasClass('open')) {
        $dropdown.find('.option');
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    });

    // Close when clicking outside
    $(document).on('click.nice_select', function(event) {
      if($(event.target).closest('.nice-select').length === 0 || $(event.target).hasClass('selected')) {
        $('.nice-select').removeClass('open').find('.option');
      }
    });
// Close when clicking outside // label fix
// 	$(document).on('click.nice_select', function(event) {
// 		if($(event.target).closest('.nice-select').length === 0 && event.target.tagName !== 'SELECT') {
// 			$('.nice-select').removeClass('open').find('.option');
// 		}
// 	});


    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled):not(.selected)', function(event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');

      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');

      var text = $option.data('display') || $option.text();

      $dropdown.find('.current').text(text);

	    $dropdown.prev('select').val($option.data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function(event) {
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }
        return false;
      // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled):not(.selected)').first();
          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }
        return false;
      // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled):not(.selected)').first();
          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }
        return false;
      // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        }
      // Tab
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    });

    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }

    return this;

  };

}(jQuery));
;
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);;
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};
var action = getUrlParameter('action');
var clean_uri = location.protocol + "//" + location.host + location.pathname;

var invalid_marketo_Domains = ['@gmail.', '@yahoo.', '@hotmail.', '@live.', '@aol.', '@outlook.'];

function is_marketo_EmailGood(email) {
  for (var i = 0; i < invalid_marketo_Domains.length; i++) {
    var domain = invalid_marketo_Domains[i];
    if (email.indexOf(domain) != -1) {
      return false;
    }
  }
  return true;
}

(function ($) {
  var isMobile = false;
  if ($(window).width() <= 850) {
    isMobile = true;
  }
  // Detect if mobile
  $(window).resize(function () {
    if ($(window).width() > 849) {
      isMobile = false;
    } else {
      isMobile = true;
    }
  });

  if (isMobile) {
    $('.superman-footer__heading').addClass('open');
    $('a.footer').toggle();
    $('.superman-footer__heading').on('click', function () {
      $(this).toggleClass('open close');
      $(this).siblings('a.footer').toggle();
    })

    $('.image__right').each(function () {
      $(this).prependTo($(this).siblings('.text__left').eq(0));
    });
  }

  function LoadRegisterForm() {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1368, function (form) {
      lightbox = MktoForms2.lightbox(form).show();
    });
    MktoForms2.whenReady(function (form) {
      $(document).keyup(function (e) {
        if (e.which == 27) {
          lightbox.hide();
        }
      });
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
          ga('send', 'event', 'Web Form', 'Submit', 'Register');

        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        return false;
      });
    });
  }

  $('.topbar-navigation-link.contact, a.contact, button.contact').click(function (e) {
    e.preventDefault();
    LoadContactForm();
  });
  if (/^#contact/.test(window.location.hash) === true) {
    LoadContactForm();
  }

  function LoadContactForm() {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1013, function (form) {
      lightbox = MktoForms2.lightbox(form).show();
      if (location.pathname == "/product/response") {
        $('#mktoForm_1013 .mktoHtmlText p').first().text('Want to get up and running with HackerOne Response? Give us a few details and we’ll be in touch shortly!');
      } else if (location.pathname == "/product/bounty") {
        $('#mktoForm_1013 .mktoHtmlText p').first().text('Want to tap into the ultimate level of hacker-powered security with HackerOne Bounty? Give us a few details and we’ll be in touch shortly!');
      } else if (location.pathname == "/product/challenge") {
        $('#mktoForm_1013 .mktoHtmlText p').first().text('Up for a HackerOne Challenge? Want to learn more? Give us a few details and we’ll be in touch shortly!');
      } else if (location.pathname == "/services") {
        $('#mktoForm_1013 .mktoHtmlText p').first().text("We're looking forward to serving you. Give us a few details and we’ll be in touch shortly!");
      } else if (location.pathname == "/") {
        $('#mktoForm_1013 .mktoHtmlText p').first().text("Start uncovering critical vulnerabilities today. Give us a few details and we’ll be in touch shortly!");
      }
    });
    MktoForms2.whenReady(function (form) {
      $(document).keyup(function (e) {
        if (e.which == 27) {
          lightbox.hide();
        }
      });
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
          ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');

        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        return false;
      });
    });
  }

  if ($('#mktoForm_1014').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1014);
    MktoForms2.whenReady(function (form) {
      //Add an onSuccess handler
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
          ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');

        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (values, followUpUrl) {
        //get the form's jQuery element and hide it
        form.getFormElem().hide();
        $('div.confirmform').show();
        //return false to prevent the submission handler from taking the lead to the follow up url.
        return false;
      });
    });
  }

  if ($('#mktoForm_1017').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1017);
    MktoForms2.whenReady(function (form) {
      if ($('.sidebar .wistia_embed').length > 0) {
        $('.mktoButton').text('Watch Now');
        window.history.replaceState({}, document.title, clean_uri);
      }
      $(document).keyup(function (e) {
        if (e.which == 27) {
          lightbox.hide();
        }
      });
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        ga('send', 'event', 'Resource', 'Download', document.title);
        $('#mktoForm_1017').hide();
        $('#confirmform').show();
        window._wq = window._wq || [];
        _wq.push({
          id: "_all",
          options: {
            popover: true
          },
          onReady: function (video) {
            $('.col--two-thirds').toggle();
            $('.sidebar').removeClass('col--one-third').css({
              width: "100%"
            });
            video.play();
          }
        });
        return false;
      });
    });
  }

  if ($('#mktoForm_1043').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1043);
    MktoForms2.whenReady(function (form) {
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      //Add an onSuccess handler
      form.onSuccess(function (values, followUpUrl) {
        //get the form's jQuery element and hide it
        window.location.href = "/vulnerability-coordination-maturity-model/survey";

        //return false to prevent the submission handler from taking the lead to the follow up url.
        return false;
      });
    });
  }

  if ($('#mktoForm_1074').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1074);
    MktoForms2.whenReady(function (form) {
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
          ga('send', 'event', 'Web Form', 'Submit', 'PSIRT');
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      //Add an onSuccess handler
      form.onSuccess(function (values, followUpUrl) {
        //get the form's jQuery element and hide it
        form.getFormElem().hide();
        $('#confirmform').show();
        //return false to prevent the submission handler from taking the lead to the follow up url.
        return false;
      });
    });
  }

  if ($('#mktoForm_1079').length > 0) {
    if (window.location.host == "www.hackerone.com") {
      pkey = 'pk_live_lRw8HPwEZXQzo8s9IB39lzxl';
    } else {
      pkey = 'pk_test_6ltyLq3vwAekvRWYL6gQKC9j';
    }

    var handler = StripeCheckout.configure({
      key: pkey,
      image: 'https://www.hackerone.com/assets/images/logo_h1.png',
      zipCode: true,
      closed: function () {
        $(".mktoButton").removeAttr('disabled').html("Go");
      },
      token: function (token, args) {
        $.ajax({
          url: '/stripe_checkout/charge',
          type: 'post',
          data: {
            tokenid: token.id,
            email: token.email,
            amount: 100
          },
          success: function (data) {
            $('#mktoForm_1079').hide();
            $('.sign-up h2').hide();
            $('.contact-sales').hide();
            $('#confirmform').show();
            $('body,html').animate({
              scrollTop: jQuery('#confirmform').offset().top - 150
            }, "slow");
            Munchkin.munchkinFunction('visitWebPage', {
              url: window.location.pathname,
              params: 'checkout=true'
            });
          },
          error: function (data) {
            $('#mktoForm_1079').hide();
            $('.sign-up h2').hide();
            $('#errorform').show();
            $('body,html').animate({
              scrollTop: jQuery('#errorform').offset().top - 150
            }, "slow");

          }
        }); // end ajax call
      }
    });

    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1079);
    MktoForms2.whenReady(function (form) {
      vals = form.vals();
      $('#preview-modal').click(function () {
        $('strong.company').each(function () {
          $(this).text($('input#Company').val() ? $('input#Company').val() : "Your Company");
        })
        var tmpDiv = jQuery(document.createElement('div'));
        var sanitizedDomains = [];

        var unsanitizedDomains = $('textarea#Customer_Defined_Scope__c').val().split('\n');
        for (var i = 0; i < unsanitizedDomains.length; i++) {
          sanitizedDomains.push(tmpDiv.text(unsanitizedDomains[i]).html());
        }
        $('ul.scope li').remove();
        $.each(sanitizedDomains, function () {
          $('ul.scope').append('<li>' + this + '</li>');
        });
        $('#preview').dialog({
          title: "Preview",
          buttons: {
            Ok: function () {
              $(this).dialog('close');
            }
          },
          modal: true,
          width: "80%"
        });
        return false;
      })

      form.onValidate(function () {
        handler.open({
          name: 'HackerOne',
          description: '',
          amount: 100,
          email: form.vals().Email,
          zipCode: true,
          allowRememberMe: false
        });
        //Check if the honeypot field is empty

        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
          ga('send', 'event', 'Web Form', 'Submit', document.title);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function () {
        return false;
      });
    });
  }
  if ($('#mktoForm_1167').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1167);
    MktoForms2.whenReady(function (form) {
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
          ga('send', 'event', 'Newsletter', 'ZeroDaily', document.title);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      //Add an onSuccess handler
      form.onSuccess(function (values, followUpUrl) {
        //get the form's jQuery element and hide it
        form.getFormElem().hide();
        $('div.confirmform').show();
        //return false to prevent the submission handler from taking the lead to the follow up url.
        return false;
      });
    });
  }
  if ($('#mktoForm_1187').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1187);
    MktoForms2.whenReady(function (form) {
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
          ga('send', 'event', 'Web Form', 'Submit', 'Challenge');
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      //Add an onSuccess handler
      form.onSuccess(function (values, followUpUrl) {
        //get the form's jQuery element and hide it
        form.getFormElem().hide();
        $('#confirmform').show();
        //return false to prevent the submission handler from taking the lead to the follow up url.
        return false;
      });
    });
  }
  if ($('#mktoForm_1211').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1211);
    MktoForms2.whenReady(function (form) {
      $('.mktoFormRow input[type="hidden"]').parent().hide();
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
          ga('send', 'event', 'Newsletter', 'Blog', document.title);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      //Add an onSuccess handler
      form.onSuccess(function (values, followUpUrl) {
        //get the form's jQuery element and hide it
        form.getFormElem().hide();
        $('div.confirmform').show();
        //return false to prevent the submission handler from taking the lead to the follow up url.
        return false;
      });
    });
  }
  if ($('#mktoForm_1218').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1218, function () {
      var event = new CustomEvent('mktoFormLoaded');
      document.dispatchEvent(event);
    });
    MktoForms2.whenReady(function (form) {
      form.onValidate(function () {
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            } else {
              form.submittable(true);
              ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');
            }
          }
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (values, followUpUrl) {
        form.getFormElem().hide();
        $('div.confirmform').show();
        return false;
      });
    });
  }
  if ($('#mktoForm_1232').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1232);
    MktoForms2.whenReady(function (form) {
      form.onValidate(function () {
        var vals = form.vals();
        // Get the values

        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
        var patt = new RegExp(/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)([\w-]+.)+[\w-]{2,4})?$/);
        if (patt.test(vals.Email)) {
          form.submittable(true);
        } else {
          var emailElem = form.getFormElem().find("#Email");
          form.showErrorMessage("Please enter your work email address.", emailElem);
          form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        ga('send', 'event', 'GooglePlay', 'Registration', document.title);
        $('#mktoForm_1232').slideUp();
        if ($('#Public_Security_Contact__c').val() == "No") {
          $('.create-program').slideDown();
          setTimeout(
            function () {
              window.location.replace("https://hackerone.com/teams/new/googleplay");
            }, 10000);
        } else {
          $('.confirmform').slideDown();
          $('body, html').animate({
            scrollTop: ($('#first').offset().top + 320)
          }, 500);
        }
        return false;
      });
    });
  }

  if ($('#mktoForm_1246').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1246);
  }

  if ($('#mktoForm_1281').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1281);
    MktoForms2.whenReady(function (form) {
      $(document).keyup(function (e) {
        if (e.which == 27) {
          lightbox.hide();
        }
      });
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        ga('send', 'event', 'Partner', 'Contact Request', document.title);
        $('#mktoForm_1281').hide();
        $('#confirmform').show();
        return false;
      });
    });
  }

  if ($('#mktoForm_1354').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1354);
    MktoForms2.whenReady(function (form) {
      if ($('.sidebar .wistia_embed').length > 0) {
        $('.mktoButton').text('Watch Now');
        window.history.replaceState({}, document.title, clean_uri);
      }
      $(document).keyup(function (e) {
        if (e.which == 27) {
          lightbox.hide();
        }
      });
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        ga('send', 'event', 'Resource', 'Download', document.title);
        $('#mktoForm_1354').hide();
        $('#confirmform').show();
        window._wq = window._wq || [];
        _wq.push({
          id: "_all",
          options: {
            popover: true
          },
          onReady: function (video) {
            $('.col--two-thirds').toggle();
            $('.sidebar').removeClass('col--one-third').css({
              width: "100%"
            });
            video.play();
          }
        });
        return false;
      });
    });
  }
  if ($('#mktoForm_1371').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1371);
    MktoForms2.whenReady(function (form) {
      //Add an onSuccess handler

      form.onSuccess(function (values, followUpUrl) {
        ga('send', 'event', 'Web Form', 'Submit', 'Critical Bug');
        //get the form's jQuery element and hide it
        form.getFormElem().hide();
        $('div.confirmform').show();
        //return false to prevent the submission handler from taking the lead to the follow up url.
        return false;
      });
    });
  }

  if ($('.mktoForm').length > 0) {
    $('.mktoFormRow.row').last().find('.mktoFieldWrap').css('border-bottom', '1px solid #c2c2c2');
  }

  $('a.register').click(function (e) {
    e.preventDefault();
    LoadRegisterForm();
  });

  $('.community-contact').click(function (e) {
    e.preventDefault();
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1082, function (form) {
      lightbox = MktoForms2.lightbox(form).show();
    });
    MktoForms2.whenReady(function (form) {
      $(document).keyup(function (e) {
        if (e.which == 27) {
          lightbox.hide();
        }
      });
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        ga('send', 'event', 'Web Form', 'Submit', 'Community Edition');
        $('.community-contact').hide();
        $('#confirmform').show();
        return false;
      });
    });
  });


  function LoadRSAForm(id) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1309, function (form) {
      lightbox = MktoForms2.lightbox(form).show();
      if (id == "meeting") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("H1-Party Meeting");
      } else
      if (id == "h1-415") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("H1-415 Meeting");
      } else
      if (id == "bsides") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("BSides Meeting");
      } else
      if (id == "h1-party") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("H1-Party Meeting");
      } else
      if (id == "outdoor") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("H1 Lounge");
      } else
      if (id == "community-day") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("H1-415 Community Day");
      } else
      if (id == "wis-panel") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("Women in Security Panel");
      } else
      if (id == "hacker-panel") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("Hacker Panel");
      } else
      if (id == "ciso-panel") {
        $('#mktoForm_1309 input[name=eventDateCode]').val("CISO Panel");
      } else
        $('#mktoForm_1309 input[name=eventDateCode]').val("RSA Pre-Registration");
    });
    MktoForms2.whenReady(function (form) {
      $(document).keyup(function (e) {
        if (e.which == 27) {
          lightbox.hide();
        }
      });
      form.onValidate(function () {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          form.submittable(true);
        } else {
          // This is a spam bot! Don't submit the form
          form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        if (id == "h1-415") {
          $('a[data-id=' + id + ']').parent().after("<br /><p>Thanks for registering. We’ll be in touch shortly with confirmation details.</p>");
        } else
          $('a[data-id=' + id + ']').parent().after("<br /><p>Thanks for registering. We’ll be in touch shortly with confirmation details.</p>");
        return false;
      });
    });
  }

  $('.events a.primary-btn--small:not(".aws"), .header .secondary-btn').click(function (e) {
    e.preventDefault();
    event = $(this).data('id');
    if (event)
      LoadRSAForm(event);
  });

  if (/^#contact/.test(window.location.hash) === true) {
    LoadContactForm();
  }

  if ($('.mktoForm').length > 0) {
    $('.mktoFormRow.row').last().find('.mktoFieldWrap').css('border-bottom', '1px solid #c2c2c2');
  }

  if (action == "ungated") {
    $('#mktoForm_1017').hide();
    $('#confirmform').show();
    if ($('.sidebar .wistia_embed').length > 0) {
      window._wq = window._wq || [];
      _wq.push({
        id: "_all",
        options: {
          popover: true
        },
        onReady: function (video) {
          $('.col--two-thirds').toggle();
          $('.sidebar').removeClass('col--one-third').css({
            width: "100%"
          });
        }
      });
    }
  }
})(jQuery);
;
// function to modify and style according to design all Marketo forms
var modifyMarketoForm = {
  init: function () {
    var self = this;
    // custom event 'mktoFormLoaded' is invoked when forms are loaded
    jQuery(document).on('mktoFormLoaded', function () {
        self._removeMarketoCSS();
    });
  },

  // remove the external stylesheets and the inline styles
  _removeMarketoCSS: function () {
    var links = window.document.getElementsByTagName('link');
    jQuery(links).each(function () {
      var thisLinkElement = jQuery(this);
      var thisLinkURL = thisLinkElement.attr('href');
      if (thisLinkURL.indexOf('marketo.com') > 1) {
        thisLinkElement.remove();
      }
    });

    jQuery('[id*="mktoForm"]').each(function () {
      jQuery(this).find('style').remove();
      jQuery(this).find('[style]').removeAttr('style');
    });
    jQuery('#Reason_for_Contact__c option:first-child').remove();
    jQuery('#Reason_for_Contact__c').niceSelect(null, null);
    jQuery('#mktoForm_1409 select').niceSelect(null, null);
    jQuery('#mktoForm_1417 select').niceSelect(null, null);
    jQuery('#mktoForm_1412 select').niceSelect(null, null);
  }
};

jQuery.fn.isInViewport = function(adj) {
  var elementTop = jQuery(this).offset().top + adj;
  var elementBottom = elementTop + jQuery(this).outerHeight() - (2*adj);
  var viewportTop = jQuery(window).scrollTop();
  var viewportBottom = viewportTop + jQuery(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

jQuery(document).ready(function($) {
  modifyMarketoForm.init();

  function resize_func() {
    $('#services-wrap .text-wrap').removeAttr('style');
    var heightBox
    var boxTexts = $('#services-wrap .text-wrap')
      .map(function() { return $(this).height(); })
      .get()
    var heightBox = Math.max.apply(null, boxTexts)

    $('#services-wrap .text-wrap').height(heightBox);

    $('.image_banner_cta').each(function() {
      var img_h = $(this).find('img').height();
      if (img_h < 290) $(this).addClass('danger');
    });

    if ($(window).width() > 639 && $(window).width() < 1140) {
      $('.parent-initiatives .layout--threecol-section .block-image_block img').each(function() {
        if ($(this).width() > $(this).parent().width()) {
          $(this).css({
            left: ($(this).parent().width() - $(this).width()) / 2
          });
        }
      });

      $('.parent-solutions .layout--threecol-section .block-image_block img').each(function() {
        if ($(this).width() > $(this).parent().width()) {
          $(this).css({
            left: ($(this).parent().width() - $(this).width()) / 2
          });
        }
      });
    }
  }

  var winW;
  var winH;
  var $window = $(window);

  $('#cat_dropdown').niceSelect(null, null);
  $('#job-filters select').niceSelect(null, null);

  $('#cat_dropdown').on('change', function() {
    window.location.href = this.value;
  });

  $('#job-filters select').on('change', function() {
    var loc = $('select#locations').val();
    var pos = $('select#positions').val();

    if (!$(this).hasClass('initial')) {
      $(this).next('.nice-select').addClass('initial');
      $(this).addClass('initial');
    }

    $('.vig-panel').hide();

    if (loc == 1 && pos == 1) {
      $('.vig-panel').show();
    } else if (loc == 1) {
      $('.vig-panel[data-pos="'+pos+'"]').show();
    } else if (pos == 1) {
      $('.vig-panel[data-loc="'+loc+'"]').show();
    } else {
      $('.vig-panel[data-pos="'+pos+'"][data-loc="'+loc+'"]').show();
    }

  });

  $('.vig-panel > a').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).next('.expandable').slideDown();
    } else {
      $(this).next('.expandable').slideUp();
    }
  });

  if (($('.parent-product').length && !($('.product-clear').length)) || $('body.services').length) {
    var stat_src = $('.custom-wrap:first-child .layout__region--first img').attr('src');
    if (stat_src) {
      ani_src = stat_src.replace('_static.png','_animated.gif');
      $('.custom-wrap:first-child .layout__region--first img').attr('src', ani_src);
    }
  }

  $('.btn.fancybox').on('click', function() {
    if (winW <= 600) {
      var the_title = $(this).parent('div').siblings('h5').html();
      $.fancybox.open({
        src  : '#form-wrap',
        type : 'inline',
        autoFocus: false,
        afterShow : function(instance, current) {
          $('.fancybox-slide').find('input[name=eventDateCode]').val(the_title);
        }
      });
    }
  });

  $('#filters select').niceSelect(null, null);

  $('#filters select').on('change', function() {
    var type = $('select#types').val();
    var region = $('select#regions').val();

    if (!$(this).hasClass('initial')) {
      $(this).next('.nice-select').addClass('initial').find('li[data-value="0"]').remove();
      $(this).addClass('initial');
    }

    if (type == 0 || region == 0) {
      if (type == 0) {
        type = 1;
        $('select#types').addClass('initial').val(1);
        $niceselect = $('select#types').next('.nice-select');
      } else if (region == 0) {
        region = 1;
        $('select#regions').addClass('initial').val(1);
        $niceselect = $('select#regions').next('.nice-select');
      }
      $niceselect.addClass('initial').find('li[data-value='+0+']').remove();
      $selected = $niceselect.find('li[data-value='+1+']');
      $selected.addClass('selected');
      $niceselect.find('.current').text($selected.text());
    }

    $('.child_event').slideUp();
    if (region == 1 && type == 1) {
      $('.child_event').slideDown();
    } else if (region == 1) {
      $('.child_event[data-type="'+type+'"]').slideDown();
    } else if (type == 1) {
      $('.child_event[data-region="'+region+'"]').slideDown();
    } else {
      $('.child_event[data-type="'+type+'"][data-region="'+region+'"]').slideDown();
    }

  });

	$('.sorcery img').each(function() {
		var src = $(this).prop('currentSrc');
		if (src == null)
			src = $(this).attr('src');
		$(this).parent('.sorcery').css('background-image','url("'+src+'")');
	});

  $('.topbar-navigation-item:not(.link--button)').hover(function() {
      $('#topbar').toggleClass('hovered')
  });

  $('.slider_links li:first-child').addClass('active');

  $('.slider_links li a').on('click', function(e) {
    e.preventDefault();
    $li = $(this).parent('li');
    $li.addClass('active').siblings().removeClass('active');

    var idx = $li.index();
    var owl = $(this).parents('.layout__region').next('.layout__region').find('.how-to-slider');

    owl.trigger('to.owl.carousel', idx);
  });

  $('.how-to-slider').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		items: 1,
 		mouseDrag: false,
 		animateOut: 'fadeOut',
 		dots: false,
 		nav: true,
 		navText: ['<i class="ico-h1-angle"></i>','<i class="ico-h1-angle"></i>'],
	}).on('changed.owl.carousel', function(event) {
    var idx = event.item.index;
    $ol = $(this).parents('.layout__region').prev('.layout__region').find('ol');
    $('li', $ol).removeClass('active');
    $('li:eq('+idx+')', $ol).addClass('active');
  });

  $('#hacker-slider').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		items: 1,
 		mouseDrag: false,
 		animateOut: 'fadeOut',
 		dots: false,
 		nav: true,
 		navText: ['<i class="ico-h1-angle"></i>','<i class="ico-h1-angle"></i>'],
	}).on('changed.owl.carousel', function(event) {
		//do things
  });

  $('#company-slider').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		items: 1,
 		mouseDrag: false,
 		animateOut: 'fadeOut',
 		dots: false,
 		nav: true,
 		navText: ['<i class="ico-h1-angle"></i>','<i class="ico-h1-angle"></i>'],
	}).on('changed.owl.carousel', function(event) {
		//do things
  });

  $('body:not(.home) div:not(.layout-builder-block) > #homepage-logo-slider-wrap .field_image_link').addClass('owl-carousel').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		dots: false,
 		nav: true,
 		navText: ['<i class="ico-h1-angle"></i>','<i class="ico-h1-angle"></i>'],
    responsive : {
      0 : {
        items: 1,
        slideBy: 1,
      },
      414 : {
        items: 2,
        slideBy: 2,
      },
      590 : {
        items: 3,
        slideBy: 3,
      },
      840 : {
        items: 4,
        slideBy: 4,
      },
      1024 : {
        items: 5,
        slideBy: 5,
      }
    }
	});

	$('div:not(.layout-builder-block) > #homepage-logo-slider').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		dots: false,
 		nav: true,
 		navText: ['<i class="ico-h1-angle"></i>','<i class="ico-h1-angle"></i>'],
    responsive : {
      0 : {
        items: 1,
        slideBy: 1,
      },
      414 : {
        items: 2,
        slideBy: 2,
      },
      590 : {
        items: 3,
        slideBy: 3,
      },
      840 : {
        items: 4,
        slideBy: 4,
      },
      1024 : {
        items: 5,
        slideBy: 5,
      }
    }
	});

	$('#home-slider').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		items: 1,
 		mouseDrag: false,
 		animateOut: 'fadeOut',
 		dotsContainer: '#owl-dots-container',
	});

  $('#story-slider').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		items     : 3,
 		mouseDrag : false,
 		dots      : false,
 		nav       : true,
 		navText   : ['<i class="ico-h1-angle"></i>','<i class="ico-h1-angle"></i>'],
		margin		: 40,
		autoWidth	: true,
	});

  $('.block-slider').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		items     : 3,
 		mouseDrag : false,
 		dots      : false,
 		nav       : true,
 		navText   : ['<i class="ico-h1-angle"></i>','<i class="ico-h1-angle"></i>'],
		margin		: 40,
		autoWidth	: true,
	});

	$('#words-slider-wrap:not(.layout-builder__region) #words-slider').on('initialized.owl.carousel', function(e) {
		//do things
	}).owlCarousel({
 		items: 1,
 		mouseDrag: false,
 		animateOut: 'fadeOut',
 		dots: true,
 		nav: true,
 		navText: ['<i class="ico-h1-angle"></i>','<i class="ico-h1-angle"></i>'],
	});

	$('#spotlight-slider').on('initialized.owl.carousel', function(e) {
		$('#bar').width('100%');
		$('#name-tag-holder').html($(this).find('.active .name-tag').html());
	}).owlCarousel({
 		items: 1,
 		mouseDrag: false,
 		animateOut: 'fadeOut',
 		dots: false,
 		nav: false,
 		loop: true,
 		autoplay: true,
 		autoplaySpeed: true,
 		autoplayTimeout: 10000,
	}).on('change.owl.carousel', function(e) {
    $('#bar').addClass('changing').width('0%');
    $('#name-tag-holder').html($(this).find('.active + .owl-item .name-tag').html());
  }).on('translate.owl.carousel', function(e) {
    $('#bar').removeClass('changing').width('100%');
  });

  if ($('.for-business-hacker-community').length) {
    $('.block-images_with_links .field_image_link img.horz').each(function() {
      var the_adj = ($(this).width() - 125) / -2;
      $(this).css('margin-left', the_adj);
    });

    $('.paragraph--type--images-with-link a').hover(function() {
      $(this).parents('.paragraph--type--images-with-link').find('a').toggleClass('hovered');
    });
  }

  $('#live-events-wrap .grid-fixt a').on('click', function(e) {
    e.preventDefault();

    if (!$(this).hasClass('active')) {
      $(this).parent().siblings().find('a').removeClass('active');
      $(this).addClass('active');

      var the_year = $('#years a.active').data('year');
      var the_region = $('#regions a.active').data('region');

      $('.grid-flex .event').each(function() {
        $(this).removeClass('active');
        if ($(this).data('year') == the_year && ($(this).data('region') == the_region || the_region == 'all')) {
          $(this).addClass('active');
        }
      });
    }
  });

  var v_idx = 0;
  var v_rotate = 0;
  var v_post;
  var v_pre;

  $('#lazy-susan-outer button').on('click', function() {
    if ($(this).hasClass('owl-prev')) {
      v_idx--;
      if (v_idx < 0) v_idx = 3;
    } else {
      v_idx++;
      if (v_idx > 3) v_idx = 0;
    }

    $('#tabs li, #panels .panel').removeClass('active');
    $('#tabs li:eq('+v_idx+'), #panels .panel:eq('+v_idx+')').addClass('active');

    if ($('div[id^="wedge_"].active img').length) {
      var ani_src = $('div[id^="wedge_"].active img').attr('src');
      ani_src = ani_src.replace('_animated.gif','_static.png');
      $('div[id^="wedge_"].active img').attr('src', ani_src);
    }

    $('div[id^="wedge_"]').removeAttr('class');

    if ($('#wedge_'+v_idx+' img').length) {
      var img_src = $('#wedge_'+v_idx+' img').attr('src');
      img_src = img_src.replace('_static.png','_animated.gif');
      $('#wedge_'+v_idx+' img').attr('src', img_src);
    }

    $('#wedge_'+v_idx).addClass('active');

    v_post = v_idx - 1;
    v_pre = v_idx + 1;

    if (v_post < 0) v_post = 3;
    if (v_pre > 3) v_pre = 0;

    $('#wedge_'+v_post).addClass('postactive');
    $('#wedge_'+v_pre).addClass('preactive');

    if ($(this).hasClass('owl-prev')) {
      v_rotate += 90;
    } else {
      v_rotate -= 90;
    }

    $('#lazy-susan').css({'transform': 'rotate('+v_rotate+'deg)'});
  });

  $('#tabs a').on('click', function(e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      var cur_idx = $('#tabs li.active').index();

      $(this).parent().addClass('active');
      $(this).parent().siblings('li').removeClass('active');

      var idx = $(this).parent().index();

      $panels = $(this).parents('#tabs').next('#panels');
      $panels.find('.panel').removeClass('active');
      $panels.find('.panel:eq('+idx+')').addClass('active');

      var magic = idx - cur_idx;
      if (magic > 0) {
        while (magic > 0) {
          $('#lazy-susan-outer .owl-next').trigger('click');
          magic--;
        }
      } else {
        while (magic < 0) {
          $('#lazy-susan-outer .owl-prev').trigger('click');
          magic++;
        }
      }
    }
  });

  $('a.pin').on('click', function(e) {
    if (!$(this).hasClass('active')) {
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
    } else if ($(this).attr('href') == '#') {
      e.preventDefault();
      $(this).removeClass('active');
    }
  });

  $(document).on('focus', '#marketo_form input', function() {
    $(this).parent().addClass('focused');
  }).on('blur', '#marketo_form input', function() {
    if ($(this).val().trim() == '') {
      $(this).parent().removeClass('focused');
      $(this).val('');
    }
  });

  $(document).on('focus', '#mktoForm_1275 input', function() {
    $(this).parent().addClass('focused');
  }).on('blur', '#mktoForm_1275 input', function() {
    if ($(this).val().trim() == '') {
      $(this).parent().removeClass('focused');
      $(this).val('');
    }
  });

  $(document).on('focus', '#marketo_form textarea', function() {
    $(this).parent().addClass('focused');
  }).on('blur', '#marketo_form textarea', function() {
    if ($(this).val().trim() == '') {
      $(this).parent().removeClass('focused');
      $(this).val('');
    }
  });

  $(document).on('keydown', '#marketo_form input', function() {
    $(this).next($('.mktoError')).fadeOut();
  });

  if ($('a.pin').length) {
    $(document).mouseup(function(e) {
      var container = $('a.pin');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('a.pin').removeClass('active');
      }
    });
  }

  $('#single-city a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#form-wrap').offset().top - 20
    }, 'slow');
  });

  $('#map-pin > a').on('click', function(e) {
    e.preventDefault();
    $(this).next('p').toggleClass('active');
  });

  $('#new-riff a').hover(function() {
    $(this).parent().siblings('.mask').toggleClass('hover');
  });

  if ($('#mktoForm_1223').length > 0) {
    MktoForms2.loadForm('https://app-sj17.marketo.com', '168-NAU-732', 1223, function() {
      if (!$('#mktoForm_1223.old').length) {
        var event = new CustomEvent('mktoFormLoaded');
        document.dispatchEvent(event);
      }
    });

    MktoForms2.whenReady(function (form) {
      $('.mktoLabel[for="Email"]').html('<div class="mktoAsterix">*</div>Business Email');

      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            } else {
              form.submittable(true);
              //ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function () {
        form.getFormElem().hide();
        ga('send', 'event', 'Web Form', 'Submit', document.title);
        $('#confirmform').show();
        return false;
      });
    });
  }

  if ($('#mktoForm_1261').length > 0) {
    MktoForms2.loadForm('https://app-sj17.marketo.com', '168-NAU-732', 1261, function() {
      var event = new CustomEvent('mktoFormLoaded');
      document.dispatchEvent(event);
    });
    MktoForms2.whenReady(function (form) {
      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            } else {
              form.submittable(true);
              //ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        ga('send', 'event', 'Event', 'Submit', document.title);
        $('#mktoForm_1261').hide();
        $('#confirmform').show();
        return false;
      });
    });
  }

  if ($('#mktoForm_1325').length > 0) {
    MktoForms2.loadForm('https://app-sj17.marketo.com', '168-NAU-732', 1325, function() {
      var event = new CustomEvent('mktoFormLoaded');
      document.dispatchEvent(event);
    });
    MktoForms2.whenReady(function (form) {
      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            } else {
              form.submittable(true);
              //ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        ga('send', 'event', 'Event', 'Meeting Request', document.title);
        $('#mktoForm_1325').hide();
        $('#confirmform').show();
        return false;
      });
    });
  }


  if ($('#mktoForm_1275').length > 0) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1275, function() {
      var event = new CustomEvent('mktoFormLoaded');
      document.dispatchEvent(event);
    });

    MktoForms2.whenReady(function (form) {
      $('#LblmktoCheckbox_5845_0').html('<strong>Who Will Win the Fight of Automation?</strong><br />September 2, 2020 <span>at 1 PM ET / 10 AM PT</span>');
      $('#mktoCheckbox_5845_0').prop( 'checked', true );
      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        ga('send', 'event', 'Webinar', 'Registration', document.title);
        $('#mktoForm_1275, .post-hide').hide();
        $('#thanks_1275').show();
        return false;
      });
    });
  }

  if ($('#mktoForm_1368.isac').length > 0 ) {
    MktoForms2.loadForm('https://app-sj17.marketo.com', '168-NAU-732', 1368, function() {
      var event = new CustomEvent('mktoFormLoaded');
      //document.dispatchEvent(event);
    });
    MktoForms2.whenReady(function (form) {
      if ($('body.isac2020').length || $('body.gov-roundtable20').length || $('body.us-hackerpanel-20').length) {
        $('.mktoButton').text('Watch Now');
      }
      if ($('#mktoForm_1368.allow-all').length > 0) {
        $('.mktoLabel[for="Email"]').html('<div class="mktoAsterix">*</div>Email');
      }
      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email && $('#mktoForm_1368.allow-all').length == 0) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            } else {
              form.submittable(true);
              //ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function (form) {
        if ($('body.isac2020').length) {
          $('#mktoForm_1368').hide();
          $('div#confirmform').show();
        }
        ga('send', 'event', 'Web Form', 'Submit', document.title);
        $('.post-hide').hide();
        $('#thanks_1368').show();
        return false;
      });
    });
  }

  if ($('#mktoForm_1409.apac').length > 0 ) {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1409);
    MktoForms2.whenReady(function (form) {
      $('.mktoButton').text('Watch Now');
      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            } else {
              form.submittable(true);
              //ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function(values, followUpUrl) {
        form.getFormElem().hide();
        $('div#confirmform').show();
        ga('send', 'event', 'Web Form', 'Submit', document.title);
        $('.post-hide').hide();
        $('#thanks_1368').show();
        return false;
      });
    });
  }

  if ($('#mktoForm_1409:not(.apac)').length > 0 ) {

    MktoForms2.loadForm('https://app-sj17.marketo.com', '168-NAU-732', 1409, function() {
      var event = new CustomEvent('mktoFormLoaded');
      document.dispatchEvent(event);
    });
    MktoForms2.whenReady(function (form) {
      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
              $('#Email').val('').addClass('important');
              $('#Email').on('focus', function() {
                $(this).removeClass('important');
              });

            } else {
              form.submittable(true);
              //ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function(values, followUpUrl) {
        form.getFormElem().hide();
        $('#marketo_form > h3').text($('div#confirmform h3').text());
        $('#marketo_form > p').text($('div#confirmform p').text()).css('padding', '0 0 24px 0');
        ga('send', 'event', 'Web Form', 'Submit', document.title);
        return false;
      });
    });
  }

  $('.events-human-vs-machine #block-wrap .block a').on('click', function(e) {
    var target = $(this).attr('rel');
    if (target) {
      e.preventDefault();
      $('html,body').animate({
         scrollTop: $('#'+target).offset().top - 80
      });
    }
  });


  $('a.reg-now').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
       scrollTop: $('#form-wrap').offset().top
    }, function() {
      $('#FirstName').focus();
    });
  });

  if ($('#mktoForm_1368:not(.isac)').length > 0) {
    MktoForms2.loadForm('https://app-sj17.marketo.com', '168-NAU-732', 1368, function() {
      if (!$('body[class*="security-at"]').length) {
        var event = new CustomEvent('mktoFormLoaded');
        document.dispatchEvent(event);
      }
    });
    MktoForms2.whenReady(function (form) {
      //Add an onSuccess handler

      if ($('body.hacktivitycon').length) {
        $('#marketo_form').appendTo($('#js-form'));
        $('.jump').on('click', function(e) {
          e.preventDefault();
          $('html,body').animate({
             scrollTop: $('#js-form').offset().top - 200
          }, function() {
            $('#FirstName').focus();
          });
        });
      }
      if ($('#mktoForm_1368.allow-all').length > 0 || $('body.hacktivitycon').length) {
        $('.mktoLabel[for="Email"]').html('<div class="mktoAsterix">*</div>Email');
      }

      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email && $('#mktoForm_1368.allow-all').length == 0 && $('body.hacktivitycon').length == 0) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
              if (!$('body[class*="security-at"]').length) {
                emailElem.val('').addClass('important');
                emailElem.on('focus', function() {
                  $(this).removeClass('important');
                });
              }
            } else {
              form.submittable(true);
              ga('send', 'event', 'Web Form', 'Submit', 'Contact Us');
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function(values, followUpUrl) {
        //get the form's jQuery element and hide it
        form.getFormElem().hide();
        if (!$('body[class*="security-at"]').length) {
          $('#marketo_form > h3').text($('div#confirmform h3').text());
          $('#marketo_form > p').text($('div#confirmform p').text()).css('padding', '0 0 24px 0');
        } else {
          $('div#confirmform').show();
        }
        //return false to prevent the submission handler from taking the lead to the follow up url.
        return false;
      });
    });
  }

  if ($('#mktoForm_1417').length > 0) {
  	MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1417, function() {
      var event = new CustomEvent('mktoFormLoaded');
      document.dispatchEvent(event);
  	});
    MktoForms2.whenReady(function (form) {
      //Add an onSuccess handler

      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            } else {
              form.submittable(true);
              ga('send', 'event', 'Web Form', 'Submit', document.title);
            }
          }
        } else {
           // This is a spam bot! Don't submit the form
           form.submittable(false);
        }
      });
      form.onSuccess(function(values, followUpUrl) {
       //get the form's jQuery element and hide it
       form.getFormElem().hide();
       $('div#confirmform').show();
       //return false to prevent the submission handler from taking the lead to the follow up url.
       return false;
      });
    });
  }

  if ($('#mktoForm_1452').length > 0) {
  	MktoForms2.loadForm("https://app-sj17.marketo.com", "168-NAU-732", 1452, function() {
      var event = new CustomEvent('mktoFormLoaded');
      document.dispatchEvent(event);
  	});
    MktoForms2.whenReady(function (form) {
      //Add an onSuccess handler

      form.onValidate(function() {
        // Get the values
        var vals = form.vals();
        //Check if the honeypot field is empty
        //if (vals.honeypot == "") {
          // Not a spam bot! Submit the form
          var email = form.vals().Email;
          if (email) {
            if (!is_marketo_EmailGood(email)) {
              form.submitable(false);
              var emailElem = form.getFormElem().find('input[name="Email"]');
              form.showErrorMessage("Please use a business email", emailElem);
            } else {
              form.submittable(true);
              ga('send', 'event', 'Web Form', 'Submit', document.title);
            }
          }
//         } else {
//            // This is a spam bot! Don't submit the form
//            form.submittable(false);
//         }
      });
      form.onSuccess(function(values, followUpUrl) {
       //get the form's jQuery element and hide it
       //form.getFormElem().hide();
       $('#marketo_form').append('<h5>Thank you for your submission.</h5>');
       //return false to prevent the submission handler from taking the lead to the follow up url.
       return false;
      });
    });
  }

  if ($('body.hacktivitycon').length) {

    $('.speaker-block > div').hover(function() {
      $(this).siblings().toggleClass('hovered');
    });


    $('.fancy-vid').fancybox({
      autoFocus: false,
      beforeClose: function() {
        $('.playlist .fancybox-button--close').hide();
      },
    });


    $('.speaker-block > div').on('click', function() {

      var startSlide = $(this).parent().index();
      var $slider = $('.speaker-slider').clone();

      $.fancybox.open($slider.find('.speaker-block'), {
        loop : true,
        autoFocus: false,
        btnTpl: {
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left">' +
            '<i class="ico-h1-angle"></i>' +
            "</button>",

          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right">' +
            '<i class="ico-h1-angle"></i>' +
            "</button>" +
            '<button id="kill-switch" type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="Close"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg></button>',
        },
        onInit : function(instance, current) {
          instance.jumpTo(startSlide);
          $('.fancy-vid').fancybox({
            autoFocus: false,
            beforeClose: function() {
              $('.playlist .fancybox-button--close').hide();
            },
          });
        },
        beforeClose: function() {
          $('.fancybox-navigation').hide();
        },
      });

    });

  }

  $('#bug-play').on('click', function(e) {
    $('#bug-video').trigger( $('#bug-video').prop('paused') ? 'play' : 'pause');
  });

  $('.careers .anchor').on('click', function(e) {
    e.preventDefault();

    var adj = 100;
    if (winW < 1081) { adj = 120; }
    if (winW < 850) { adj = 0; }

    $('html,body').animate({
       scrollTop: $('#open-positions').offset().top - adj
    });
  });

  $('#layout-builder .layout--fourcol-section .layout__region > a').on('click', function(e) {
    e.preventDefault();
  });

  $(window).on('load', function() {

    winW = $(this).width();
    winH = $(this).height();

    resize_func();

    $('body').addClass('loaded');

    $('.sorcery img').each(function() {
      var src = $(this).prop('currentSrc');
      if (src == null)
        src = $(this).attr('src');
      $(this).parent('.sorcery').css('background-image','url("'+src+'")');
    });

    var st;
    var lastScrollTop = 0;
    var footer_top;
    var form_bottom;
    var marketo_form = $('#marketo_form');
    var event_no_banner = $('#event-no-banner')

    $(window).on('scroll', function(e) {
      st = $(this).scrollTop();
      winW = $(window).width();
      winH = $(window).height();

      if (marketo_form.length) {
        footer_top = $('footer').offset().top - 40;
        form_bottom = marketo_form.offset().top + marketo_form.outerHeight();
        if (event_no_banner.length) {
          if ((st+160) >= event_no_banner.outerHeight(true)) {
            marketo_form.addClass('non-absolute');
          } else {
            marketo_form.removeClass('non-absolute');
          }
        }
      }

      if (marketo_form.length && st > lastScrollTop) {
        if (form_bottom > footer_top) {
          marketo_form.addClass('unfixed');
        }
      } else {
        if (marketo_form.length && form_bottom >= (winH + st - 30)) {
          $('#marketo_form').removeClass('unfixed');
        }
      }
      lastScrollTop = st;

    });

    var resizeTimer;
    var prevWinW = $window.width();
    $(window).on('resize', function(e) {
      $('.image_banner_cta').each(function() {
        $(this).removeClass('danger');
      });

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        // Run code here, resizing has "stopped"
        winW = $(this).width();
        winH = $(this).height();

        //only if width changed
        if (prevWinW != winW) {
          prevWinW = winW;
          resize_func();
        }
      }, 250, function() { clearTimeout(resizeTimer); });
    });
  });
});
;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function i(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      i.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 9);
}([function (e, t) {
  e.exports = jQuery;
}, function (e, t, i) {
  e.exports = function () {
    "use strict";

    var e = "millisecond",
        t = "second",
        i = "minute",
        n = "hour",
        o = "day",
        a = "week",
        r = "month",
        s = "quarter",
        l = "year",
        d = "date",
        c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        h = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    },
        p = function p(e, t, i) {
      var n = String(e);
      return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(i) + e;
    },
        f = {
      s: p,
      z: function z(e) {
        var t = -e.utcOffset(),
            i = Math.abs(t),
            n = Math.floor(i / 60),
            o = i % 60;
        return (t <= 0 ? "+" : "-") + p(n, 2, "0") + ":" + p(o, 2, "0");
      },
      m: function e(t, i) {
        if (t.date() < i.date()) return -e(i, t);
        var n = 12 * (i.year() - t.year()) + (i.month() - t.month()),
            o = t.clone().add(n, r),
            a = i - o < 0,
            s = t.clone().add(n + (a ? -1 : 1), r);
        return +(-(n + (i - o) / (a ? o - s : s - o)) || 0);
      },
      a: function a(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      },
      p: function p(c) {
        return {
          M: r,
          y: l,
          w: a,
          d: o,
          D: d,
          h: n,
          m: i,
          s: t,
          ms: e,
          Q: s
        }[c] || String(c || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(e) {
        return void 0 === e;
      }
    },
        g = "en",
        m = {};

    m[g] = h;

    var v = function v(e) {
      return e instanceof w;
    },
        b = function b(e, t, i) {
      var n;
      if (!e) return g;
      if ("string" == typeof e) m[e] && (n = e), t && (m[e] = t, n = e);else {
        var o = e.name;
        m[o] = e, n = o;
      }
      return !i && n && (g = n), n || !i && g;
    },
        y = function y(e, t) {
      if (v(e)) return e.clone();
      var i = "object" == _typeof(t) ? t : {};
      return i.date = e, i.args = arguments, new w(i);
    },
        x = f;

    x.l = b, x.i = v, x.w = function (e, t) {
      return y(e, {
        locale: t.$L,
        utc: t.$u,
        x: t.$x,
        $offset: t.$offset
      });
    };

    var w = function () {
      function h(e) {
        this.$L = b(e.locale, null, !0), this.parse(e);
      }

      var p = h.prototype;
      return p.parse = function (e) {
        this.$d = function (e) {
          var t = e.date,
              i = e.utc;
          if (null === t) return new Date(NaN);
          if (x.u(t)) return new Date();
          if (t instanceof Date) return new Date(t);

          if ("string" == typeof t && !/Z$/i.test(t)) {
            var n = t.match(c);

            if (n) {
              var o = n[2] - 1 || 0,
                  a = (n[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, a)) : new Date(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, a);
            }
          }

          return new Date(t);
        }(e), this.$x = e.x || {}, this.init();
      }, p.init = function () {
        var e = this.$d;
        this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
      }, p.$utils = function () {
        return x;
      }, p.isValid = function () {
        return !("Invalid Date" === this.$d.toString());
      }, p.isSame = function (e, t) {
        var i = y(e);
        return this.startOf(t) <= i && i <= this.endOf(t);
      }, p.isAfter = function (e, t) {
        return y(e) < this.startOf(t);
      }, p.isBefore = function (e, t) {
        return this.endOf(t) < y(e);
      }, p.$g = function (e, t, i) {
        return x.u(e) ? this[t] : this.set(i, e);
      }, p.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, p.valueOf = function () {
        return this.$d.getTime();
      }, p.startOf = function (e, s) {
        var c = this,
            u = !!x.u(s) || s,
            h = x.p(e),
            p = function p(e, t) {
          var i = x.w(c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e), c);
          return u ? i : i.endOf(o);
        },
            f = function f(e, t) {
          return x.w(c.toDate()[e].apply(c.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), c);
        },
            g = this.$W,
            m = this.$M,
            v = this.$D,
            b = "set" + (this.$u ? "UTC" : "");

        switch (h) {
          case l:
            return u ? p(1, 0) : p(31, 11);

          case r:
            return u ? p(1, m) : p(0, m + 1);

          case a:
            var y = this.$locale().weekStart || 0,
                w = (g < y ? g + 7 : g) - y;
            return p(u ? v - w : v + (6 - w), m);

          case o:
          case d:
            return f(b + "Hours", 0);

          case n:
            return f(b + "Minutes", 1);

          case i:
            return f(b + "Seconds", 2);

          case t:
            return f(b + "Milliseconds", 3);

          default:
            return this.clone();
        }
      }, p.endOf = function (e) {
        return this.startOf(e, !1);
      }, p.$set = function (a, s) {
        var c,
            u = x.p(a),
            h = "set" + (this.$u ? "UTC" : ""),
            p = (c = {}, c[o] = h + "Date", c[d] = h + "Date", c[r] = h + "Month", c[l] = h + "FullYear", c[n] = h + "Hours", c[i] = h + "Minutes", c[t] = h + "Seconds", c[e] = h + "Milliseconds", c)[u],
            f = u === o ? this.$D + (s - this.$W) : s;

        if (u === r || u === l) {
          var g = this.clone().set(d, 1);
          g.$d[p](f), g.init(), this.$d = g.set(d, Math.min(this.$D, g.daysInMonth())).$d;
        } else p && this.$d[p](f);

        return this.init(), this;
      }, p.set = function (e, t) {
        return this.clone().$set(e, t);
      }, p.get = function (e) {
        return this[x.p(e)]();
      }, p.add = function (e, s) {
        var d,
            c = this;
        e = Number(e);

        var u = x.p(s),
            h = function h(t) {
          var i = y(c);
          return x.w(i.date(i.date() + Math.round(t * e)), c);
        };

        if (u === r) return this.set(r, this.$M + e);
        if (u === l) return this.set(l, this.$y + e);
        if (u === o) return h(1);
        if (u === a) return h(7);
        var p = (d = {}, d[i] = 6e4, d[n] = 36e5, d[t] = 1e3, d)[u] || 1,
            f = this.$d.getTime() + e * p;
        return x.w(f, this);
      }, p.subtract = function (e, t) {
        return this.add(-1 * e, t);
      }, p.format = function (e) {
        var t = this;
        if (!this.isValid()) return "Invalid Date";

        var i = e || "YYYY-MM-DDTHH:mm:ssZ",
            n = x.z(this),
            o = this.$locale(),
            a = this.$H,
            r = this.$m,
            s = this.$M,
            l = o.weekdays,
            d = o.months,
            c = function c(e, n, o, a) {
          return e && (e[n] || e(t, i)) || o[n].substr(0, a);
        },
            h = function h(e) {
          return x.s(a % 12 || 12, e, "0");
        },
            p = o.meridiem || function (e, t, i) {
          var n = e < 12 ? "AM" : "PM";
          return i ? n.toLowerCase() : n;
        },
            f = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: s + 1,
          MM: x.s(s + 1, 2, "0"),
          MMM: c(o.monthsShort, s, d, 3),
          MMMM: c(d, s),
          D: this.$D,
          DD: x.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: c(o.weekdaysMin, this.$W, l, 2),
          ddd: c(o.weekdaysShort, this.$W, l, 3),
          dddd: l[this.$W],
          H: String(a),
          HH: x.s(a, 2, "0"),
          h: h(1),
          hh: h(2),
          a: p(a, r, !0),
          A: p(a, r, !1),
          m: String(r),
          mm: x.s(r, 2, "0"),
          s: String(this.$s),
          ss: x.s(this.$s, 2, "0"),
          SSS: x.s(this.$ms, 3, "0"),
          Z: n
        };

        return i.replace(u, function (e, t) {
          return t || f[e] || n.replace(":", "");
        });
      }, p.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, p.diff = function (e, d, c) {
        var u,
            h = x.p(d),
            p = y(e),
            f = 6e4 * (p.utcOffset() - this.utcOffset()),
            g = this - p,
            m = x.m(this, p);
        return m = (u = {}, u[l] = m / 12, u[r] = m, u[s] = m / 3, u[a] = (g - f) / 6048e5, u[o] = (g - f) / 864e5, u[n] = g / 36e5, u[i] = g / 6e4, u[t] = g / 1e3, u)[h] || g, c ? m : x.a(m);
      }, p.daysInMonth = function () {
        return this.endOf(r).$D;
      }, p.$locale = function () {
        return m[this.$L];
      }, p.locale = function (e, t) {
        if (!e) return this.$L;
        var i = this.clone(),
            n = b(e, t, !0);
        return n && (i.$L = n), i;
      }, p.clone = function () {
        return x.w(this.$d, this);
      }, p.toDate = function () {
        return new Date(this.valueOf());
      }, p.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, p.toISOString = function () {
        return this.$d.toISOString();
      }, p.toString = function () {
        return this.$d.toUTCString();
      }, h;
    }(),
        k = w.prototype;

    return y.prototype = k, [["$ms", e], ["$s", t], ["$m", i], ["$H", n], ["$W", o], ["$M", r], ["$y", l], ["$D", d]].forEach(function (e) {
      k[e[1]] = function (t) {
        return this.$g(t, e[0], e[1]);
      };
    }), y.extend = function (e, t) {
      return e.$i || (e(t, w, y), e.$i = !0), y;
    }, y.locale = b, y.isDayjs = v, y.unix = function (e) {
      return y(1e3 * e);
    }, y.en = m[g], y.Ls = m, y.p = {}, y;
  }();
}, function (e, t, i) {
  (function (t) {
    var i = /^\s+|\s+$/g,
        n = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        r = parseInt,
        s = "object" == _typeof(t) && t && t.Object === Object && t,
        l = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        d = s || l || Function("return this")(),
        c = Object.prototype.toString,
        u = Math.max,
        h = Math.min,
        p = function p() {
      return d.Date.now();
    };

    function f(e) {
      var t = _typeof(e);

      return !!e && ("object" == t || "function" == t);
    }

    function g(e) {
      if ("number" == typeof e) return e;
      if (function (e) {
        return "symbol" == _typeof(e) || function (e) {
          return !!e && "object" == _typeof(e);
        }(e) && "[object Symbol]" == c.call(e);
      }(e)) return NaN;

      if (f(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = f(t) ? t + "" : t;
      }

      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(i, "");
      var s = o.test(e);
      return s || a.test(e) ? r(e.slice(2), s ? 2 : 8) : n.test(e) ? NaN : +e;
    }

    e.exports = function (e, t, i) {
      var n,
          o,
          a,
          r,
          s,
          l,
          d = 0,
          c = !1,
          m = !1,
          v = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");

      function b(t) {
        var i = n,
            a = o;
        return n = o = void 0, d = t, r = e.apply(a, i);
      }

      function y(e) {
        return d = e, s = setTimeout(w, t), c ? b(e) : r;
      }

      function x(e) {
        var i = e - l;
        return void 0 === l || i >= t || i < 0 || m && e - d >= a;
      }

      function w() {
        var e = p();
        if (x(e)) return k(e);
        s = setTimeout(w, function (e) {
          var i = t - (e - l);
          return m ? h(i, a - (e - d)) : i;
        }(e));
      }

      function k(e) {
        return s = void 0, v && n ? b(e) : (n = o = void 0, r);
      }

      function T() {
        var e = p(),
            i = x(e);

        if (n = arguments, o = this, l = e, i) {
          if (void 0 === s) return y(l);
          if (m) return s = setTimeout(w, t), b(l);
        }

        return void 0 === s && (s = setTimeout(w, t)), r;
      }

      return t = g(t) || 0, f(i) && (c = !!i.leading, a = (m = "maxWait" in i) ? u(g(i.maxWait) || 0, t) : a, v = "trailing" in i ? !!i.trailing : v), T.cancel = function () {
        void 0 !== s && clearTimeout(s), d = 0, n = l = o = s = void 0;
      }, T.flush = function () {
        return void 0 === s ? r : k(p());
      }, T;
    };
  }).call(this, i(4));
}, function (e, t, i) {
  var n, o;
  /*!
   * JavaScript Cookie v2.2.1
   * https://github.com/js-cookie/js-cookie
   *
   * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
   * Released under the MIT license
   */

  !function (a) {
    if (void 0 === (o = "function" == typeof (n = a) ? n.call(t, i, t, e) : n) || (e.exports = o), !0, e.exports = a(), !!0) {
      var r = window.Cookies,
          s = window.Cookies = a();

      s.noConflict = function () {
        return window.Cookies = r, s;
      };
    }
  }(function () {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var i = arguments[e];

        for (var n in i) {
          t[n] = i[n];
        }
      }

      return t;
    }

    function t(e) {
      return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }

    return function i(n) {
      function o() {}

      function a(t, i, a) {
        if ("undefined" != typeof document) {
          "number" == typeof (a = e({
            path: "/"
          }, o.defaults, a)).expires && (a.expires = new Date(1 * new Date() + 864e5 * a.expires)), a.expires = a.expires ? a.expires.toUTCString() : "";

          try {
            var r = JSON.stringify(i);
            /^[\{\[]/.test(r) && (i = r);
          } catch (e) {}

          i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var s = "";

          for (var l in a) {
            a[l] && (s += "; " + l, !0 !== a[l] && (s += "=" + a[l].split(";")[0]));
          }

          return document.cookie = t + "=" + i + s;
        }
      }

      function r(e, i) {
        if ("undefined" != typeof document) {
          for (var o = {}, a = document.cookie ? document.cookie.split("; ") : [], r = 0; r < a.length; r++) {
            var s = a[r].split("="),
                l = s.slice(1).join("=");
            i || '"' !== l.charAt(0) || (l = l.slice(1, -1));

            try {
              var d = t(s[0]);
              if (l = (n.read || n)(l, d) || t(l), i) try {
                l = JSON.parse(l);
              } catch (e) {}
              if (o[d] = l, e === d) break;
            } catch (e) {}
          }

          return e ? o[e] : o;
        }
      }

      return o.set = a, o.get = function (e) {
        return r(e, !1);
      }, o.getJSON = function (e) {
        return r(e, !0);
      }, o.remove = function (t, i) {
        a(t, "", e(i, {
          expires: -1
        }));
      }, o.defaults = {}, o.withConverter = i, o;
    }(function () {});
  });
}, function (e, t) {
  var i;

  i = function () {
    return this;
  }();

  try {
    i = i || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
  }

  e.exports = i;
}, function (e, t, i) {
  var n, o, a;
  !function (r) {
    "use strict";

    o = [i(0)], void 0 === (a = "function" == typeof (n = function n(e) {
      var t = window.Slick || {};
      (i = 0, t = function t(_t2, n) {
        var o,
            a = this;
        a.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(_t2),
          appendDots: e(_t2),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function customPaging(t, i) {
            return e('<button type="button" />').text(i + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, a.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, e.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.focussed = !1, a.interrupted = !1, a.hidden = "hidden", a.paused = !0, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = e(_t2), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, o = e(_t2).data("slick") || {}, a.options = e.extend({}, a.defaults, n, o), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, void 0 !== document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = e.proxy(a.autoPlay, a), a.autoPlayClear = e.proxy(a.autoPlayClear, a), a.autoPlayIterator = e.proxy(a.autoPlayIterator, a), a.changeSlide = e.proxy(a.changeSlide, a), a.clickHandler = e.proxy(a.clickHandler, a), a.selectHandler = e.proxy(a.selectHandler, a), a.setPosition = e.proxy(a.setPosition, a), a.swipeHandler = e.proxy(a.swipeHandler, a), a.dragHandler = e.proxy(a.dragHandler, a), a.keyHandler = e.proxy(a.keyHandler, a), a.instanceUid = i++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.registerBreakpoints(), a.init(!0);
      }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
        }).find("a, input, button, select").attr({
          tabindex: "0"
        });
      }, t.prototype.addSlide = t.prototype.slickAdd = function (t, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, i) {
          e(i).attr("data-slick-index", t);
        }), o.$slidesCache = o.$slides, o.reinit();
      }, t.prototype.animateHeight = function () {
        var e = this;

        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({
            height: t
          }, e.options.speed);
        }
      }, t.prototype.animateSlide = function (t, i) {
        var n = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
          left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
          top: t
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
          animStart: o.currentLeft
        }).animate({
          animStart: t
        }, {
          duration: o.options.speed,
          easing: o.options.easing,
          step: function step(e) {
            e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n));
          },
          complete: function complete() {
            i && i.call();
          }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
          o.disableTransition(), i.call();
        }, o.options.speed));
      }, t.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t;
      }, t.prototype.asNavFor = function (t) {
        var i = this.getNavTarget();
        null !== i && "object" == _typeof(i) && i.each(function () {
          var i = e(this).slick("getSlick");
          i.unslicked || i.slideHandler(t, !0);
        });
      }, t.prototype.applyTransition = function (e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
      }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
      }, t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }, t.prototype.autoPlayIterator = function () {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
      }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
        }));
      }, t.prototype.buildDots = function () {
        var t,
            i,
            n = this;

        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
          for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) {
            i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
          }

          n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active");
        }
      }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, i) {
          e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "");
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable");
      }, t.prototype.buildRows = function () {
        var e,
            t,
            i,
            n,
            o,
            a,
            r,
            s = this;

        if (n = document.createDocumentFragment(), a = s.$slider.children(), s.options.rows > 0) {
          for (r = s.options.slidesPerRow * s.options.rows, o = Math.ceil(a.length / r), e = 0; e < o; e++) {
            var l = document.createElement("div");

            for (t = 0; t < s.options.rows; t++) {
              var d = document.createElement("div");

              for (i = 0; i < s.options.slidesPerRow; i++) {
                var c = e * r + (t * s.options.slidesPerRow + i);
                a.get(c) && d.appendChild(a.get(c));
              }

              l.appendChild(d);
            }

            n.appendChild(l);
          }

          s.$slider.empty().append(n), s.$slider.children().children().children().css({
            width: 100 / s.options.slidesPerRow + "%",
            display: "inline-block"
          });
        }
      }, t.prototype.checkResponsive = function (t, i) {
        var n,
            o,
            a,
            r = this,
            s = !1,
            l = r.$slider.width(),
            d = window.innerWidth || e(window).width();

        if ("window" === r.respondTo ? a = d : "slider" === r.respondTo ? a = l : "min" === r.respondTo && (a = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
          for (n in o = null, r.breakpoints) {
            r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? a < r.breakpoints[n] && (o = r.breakpoints[n]) : a > r.breakpoints[n] && (o = r.breakpoints[n]));
          }

          null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), s = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), s = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), s = o), t || !1 === s || r.$slider.trigger("breakpoint", [r, s]);
        }
      }, t.prototype.changeSlide = function (t, i) {
        var n,
            o,
            a = this,
            r = e(t.currentTarget);

        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), n = a.slideCount % a.options.slidesToScroll != 0 ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
          case "previous":
            o = 0 === n ? a.options.slidesToScroll : a.options.slidesToShow - n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - o, !1, i);
            break;

          case "next":
            o = 0 === n ? a.options.slidesToScroll : n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + o, !1, i);
            break;

          case "index":
            var s = 0 === t.data.index ? 0 : t.data.index || r.index() * a.options.slidesToScroll;
            a.slideHandler(a.checkNavigable(s), !1, i), r.children().trigger("focus");
            break;

          default:
            return;
        }
      }, t.prototype.checkNavigable = function (e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];else for (var n in t) {
          if (e < t[n]) {
            e = i;
            break;
          }

          i = t[n];
        }
        return e;
      }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }, t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }, t.prototype.cleanUpRows = function () {
        var e,
            t = this;
        t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
      }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
      }, t.prototype.destroy = function (t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
          e(this).attr("style", e(this).data("originalStyling"));
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i]);
      }, t.prototype.disableTransition = function (e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
      }, t.prototype.fadeSlide = function (e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
          zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
          opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
          opacity: 1,
          zIndex: i.options.zIndex
        }), t && setTimeout(function () {
          i.disableTransition(e), t.call();
        }, i.options.speed));
      }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
          opacity: 0,
          zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
          opacity: 0,
          zIndex: t.options.zIndex - 2
        }));
      }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
      }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
          i.stopImmediatePropagation();
          var n = e(this);
          setTimeout(function () {
            t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay());
          }, 0);
        });
      }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
      }, t.prototype.getDotCount = function () {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (!0 === e.options.infinite) {
          if (e.slideCount <= e.options.slidesToShow) ++n;else for (; t < e.slideCount;) {
            ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
          }
        } else if (!0 === e.options.centerMode) n = e.slideCount;else if (e.options.asNavFor) for (; t < e.slideCount;) {
          ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        } else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1;
      }, t.prototype.getLeft = function (e) {
        var t,
            i,
            n,
            o,
            a = this,
            r = 0;
        return a.slideOffset = 0, i = a.$slides.first().outerHeight(!0), !0 === a.options.infinite ? (a.slideCount > a.options.slidesToShow && (a.slideOffset = a.slideWidth * a.options.slidesToShow * -1, o = -1, !0 === a.options.vertical && !0 === a.options.centerMode && (2 === a.options.slidesToShow ? o = -1.5 : 1 === a.options.slidesToShow && (o = -2)), r = i * a.options.slidesToShow * o), a.slideCount % a.options.slidesToScroll != 0 && e + a.options.slidesToScroll > a.slideCount && a.slideCount > a.options.slidesToShow && (e > a.slideCount ? (a.slideOffset = (a.options.slidesToShow - (e - a.slideCount)) * a.slideWidth * -1, r = (a.options.slidesToShow - (e - a.slideCount)) * i * -1) : (a.slideOffset = a.slideCount % a.options.slidesToScroll * a.slideWidth * -1, r = a.slideCount % a.options.slidesToScroll * i * -1))) : e + a.options.slidesToShow > a.slideCount && (a.slideOffset = (e + a.options.slidesToShow - a.slideCount) * a.slideWidth, r = (e + a.options.slidesToShow - a.slideCount) * i), a.slideCount <= a.options.slidesToShow && (a.slideOffset = 0, r = 0), !0 === a.options.centerMode && a.slideCount <= a.options.slidesToShow ? a.slideOffset = a.slideWidth * Math.floor(a.options.slidesToShow) / 2 - a.slideWidth * a.slideCount / 2 : !0 === a.options.centerMode && !0 === a.options.infinite ? a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2) - a.slideWidth : !0 === a.options.centerMode && (a.slideOffset = 0, a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2)), t = !1 === a.options.vertical ? e * a.slideWidth * -1 + a.slideOffset : e * i * -1 + r, !0 === a.options.variableWidth && (n = a.slideCount <= a.options.slidesToShow || !1 === a.options.infinite ? a.$slideTrack.children(".slick-slide").eq(e) : a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow), t = !0 === a.options.rtl ? n[0] ? -1 * (a.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === a.options.centerMode && (n = a.slideCount <= a.options.slidesToShow || !1 === a.options.infinite ? a.$slideTrack.children(".slick-slide").eq(e) : a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow + 1), t = !0 === a.options.rtl ? n[0] ? -1 * (a.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (a.$list.width() - n.outerWidth()) / 2)), t;
      }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e];
      }, t.prototype.getNavigableIndexes = function () {
        var e,
            t = this,
            i = 0,
            n = 0,
            o = [];

        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) {
          o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        }

        return o;
      }, t.prototype.getSlick = function () {
        return this;
      }, t.prototype.getSlideCount = function () {
        var t,
            i,
            n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (o, a) {
          if (a.offsetLeft - i + e(a).outerWidth() / 2 > -1 * n.swipeLeft) return t = a, !1;
        }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll;
      }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({
          data: {
            message: "index",
            index: parseInt(e)
          }
        }, t);
      }, t.prototype.init = function (t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay());
      }, t.prototype.initADA = function () {
        var t = this,
            i = Math.ceil(t.slideCount / t.options.slidesToShow),
            n = t.getNavigableIndexes().filter(function (e) {
          return e >= 0 && e < t.slideCount;
        });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
        }).find("a, input, button, select").attr({
          tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
          var o = n.indexOf(i);

          if (e(this).attr({
            role: "tabpanel",
            id: "slick-slide" + t.instanceUid + i,
            tabindex: -1
          }), -1 !== o) {
            var a = "slick-slide-control" + t.instanceUid + o;
            e("#" + a).length && e(this).attr({
              "aria-describedby": a
            });
          }
        }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
          var a = n[o];
          e(this).attr({
            role: "presentation"
          }), e(this).find("button").first().attr({
            role: "tab",
            id: "slick-slide-control" + t.instanceUid + o,
            "aria-controls": "slick-slide" + t.instanceUid + a,
            "aria-label": o + 1 + " of " + i,
            "aria-selected": null,
            tabindex: "-1"
          });
        }).eq(t.currentSlide).find("button").attr({
          "aria-selected": "true",
          tabindex: "0"
        }).end());

        for (var o = t.currentSlide, a = o + t.options.slidesToShow; o < a; o++) {
          t.options.focusOnChange ? t.$slides.eq(o).attr({
            tabindex: "0"
          }) : t.$slides.eq(o).removeAttr("tabindex");
        }

        t.activateADA();
      }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
          message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }, t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
          action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition);
      }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
      }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
          data: {
            message: !0 === t.options.rtl ? "next" : "previous"
          }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
          data: {
            message: !0 === t.options.rtl ? "previous" : "next"
          }
        }));
      }, t.prototype.lazyLoad = function () {
        var t,
            i,
            n,
            o = this;

        function a(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
                i = e(this).attr("data-lazy"),
                n = e(this).attr("data-srcset"),
                a = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                r = document.createElement("img");
            r.onload = function () {
              t.animate({
                opacity: 0
              }, 100, function () {
                n && (t.attr("srcset", n), a && t.attr("sizes", a)), t.attr("src", i).animate({
                  opacity: 1
                }, 200, function () {
                  t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                }), o.$slider.trigger("lazyLoaded", [o, t, i]);
              });
            }, r.onerror = function () {
              t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, i]);
            }, r.src = i;
          });
        }

        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (i > 0 && i--, n <= o.slideCount && n++)), t = o.$slider.find(".slick-slide").slice(i, n), "anticipated" === o.options.lazyLoad) for (var r = i - 1, s = n, l = o.$slider.find(".slick-slide"), d = 0; d < o.options.slidesToScroll; d++) {
          r < 0 && (r = o.slideCount - 1), t = (t = t.add(l.eq(r))).add(l.eq(s)), r--, s++;
        }
        a(t), o.slideCount <= o.options.slidesToShow ? a(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? a(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && a(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
      }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
          opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({
          data: {
            message: "next"
          }
        });
      }, t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }, t.prototype.pause = t.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0;
      }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
      }, t.prototype.postSlide = function (t) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
      }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({
          data: {
            message: "previous"
          }
        });
      }, t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }, t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var i,
            n,
            o,
            a,
            r,
            s = this,
            l = e("img[data-lazy]", s.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), a = i.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
          o && (i.attr("srcset", o), a && i.attr("sizes", a)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad();
        }, r.onerror = function () {
          t < 3 ? setTimeout(function () {
            s.progressiveLazyLoad(t + 1);
          }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad());
        }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s]);
      }, t.prototype.refresh = function (t) {
        var i,
            n,
            o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
          currentSlide: i
        }), o.init(), t || o.changeSlide({
          data: {
            message: "index",
            index: i
          }
        }, !1);
      }, t.prototype.registerBreakpoints = function () {
        var t,
            i,
            n,
            o = this,
            a = o.options.responsive || null;

        if ("array" === e.type(a) && a.length) {
          for (t in o.respondTo = o.options.respondTo || "window", a) {
            if (n = o.breakpoints.length - 1, a.hasOwnProperty(t)) {
              for (i = a[t].breakpoint; n >= 0;) {
                o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
              }

              o.breakpoints.push(i), o.breakpointSettings[i] = a[t].settings;
            }
          }

          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]);
      }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
          t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
        }, 50));
      }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
        var n = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit();
      }, t.prototype.setCSS = function (e) {
        var t,
            i,
            n = this,
            o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)));
      }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
          padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
          padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }, t.prototype.setFade = function () {
        var t,
            i = this;
        i.$slides.each(function (n, o) {
          t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
            position: "relative",
            right: t,
            top: 0,
            zIndex: i.options.zIndex - 2,
            opacity: 0
          }) : e(o).css({
            position: "relative",
            left: t,
            top: 0,
            zIndex: i.options.zIndex - 2,
            opacity: 0
          });
        }), i.$slides.eq(i.currentSlide).css({
          zIndex: i.options.zIndex - 1,
          opacity: 1
        });
      }, t.prototype.setHeight = function () {
        var e = this;

        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }, t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t,
            i,
            n,
            o,
            a,
            r = this,
            s = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0], s = arguments[1], a = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? a = "responsive" : void 0 !== arguments[1] && (a = "single")), "single" === a) r.options[n] = o;else if ("multiple" === a) e.each(n, function (e, t) {
          r.options[e] = t;
        });else if ("responsive" === a) for (i in o) {
          if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];else {
            for (t = r.options.responsive.length - 1; t >= 0;) {
              r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1), t--;
            }

            r.options.responsive.push(o[i]);
          }
        }
        s && (r.unload(), r.reinit());
      }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
      }, t.prototype.setProps = function () {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
      }, t.prototype.setSlideClasses = function (e) {
        var t,
            i,
            n,
            o,
            a = this;

        if (i = a.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), a.$slides.eq(e).addClass("slick-current"), !0 === a.options.centerMode) {
          var r = a.options.slidesToShow % 2 == 0 ? 1 : 0;
          t = Math.floor(a.options.slidesToShow / 2), !0 === a.options.infinite && (e >= t && e <= a.slideCount - 1 - t ? a.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = a.options.slidesToShow + e, i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - a.options.slidesToShow).addClass("slick-center") : e === a.slideCount - 1 && i.eq(a.options.slidesToShow).addClass("slick-center")), a.$slides.eq(e).addClass("slick-center");
        } else e >= 0 && e <= a.slideCount - a.options.slidesToShow ? a.$slides.slice(e, e + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= a.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = a.slideCount % a.options.slidesToShow, n = !0 === a.options.infinite ? a.options.slidesToShow + e : e, a.options.slidesToShow == a.options.slidesToScroll && a.slideCount - e < a.options.slidesToShow ? i.slice(n - (a.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

        "ondemand" !== a.options.lazyLoad && "anticipated" !== a.options.lazyLoad || a.lazyLoad();
      }, t.prototype.setupInfinite = function () {
        var t,
            i,
            n,
            o = this;

        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
          for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) {
            i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
          }

          for (t = 0; t < n + o.slideCount; t += 1) {
            i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
          }

          o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
            e(this).attr("id", "");
          });
        }
      }, t.prototype.interrupt = function (e) {
        e || this.autoPlay(), this.interrupted = e;
      }, t.prototype.selectHandler = function (t) {
        var i = this,
            n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o);
      }, t.prototype.slideHandler = function (e, t, i) {
        var n,
            o,
            a,
            r,
            s,
            l,
            d = this;
        if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e)) if (!1 === t && d.asNavFor(e), n = e, s = d.getLeft(n), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function () {
          d.postSlide(n);
        }) : d.postSlide(n));else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function () {
          d.postSlide(n);
        }) : d.postSlide(n));else {
          if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), a = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = (l = d.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(a), d.fadeSlide(o, function () {
            d.postSlide(o);
          })) : d.postSlide(o), void d.animateHeight();
          !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, function () {
            d.postSlide(o);
          }) : d.postSlide(o);
        }
      }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading");
      }, t.prototype.swipeDirection = function () {
        var e,
            t,
            i,
            n,
            o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical";
      }, t.prototype.swipeEnd = function (e) {
        var t,
            i,
            n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;

        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
          switch (i = n.swipeDirection()) {
            case "left":
            case "down":
              t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
              break;

            case "right":
            case "up":
              t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1;
          }

          "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]));
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {});
      }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
          case "start":
            t.swipeStart(e);
            break;

          case "move":
            t.swipeMove(e);
            break;

          case "end":
            t.swipeEnd(e);
        }
      }, t.prototype.swipeMove = function (e) {
        var t,
            i,
            n,
            o,
            a,
            r,
            s = this;
        return a = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || s.scrolling || a && 1 !== a.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== a ? a[0].pageX : e.clientX, s.touchObject.curY = void 0 !== a ? a[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))), !s.options.verticalSwiping && !s.swiping && r > 4 ? (s.scrolling = !0, !1) : (!0 === s.options.verticalSwiping && (s.touchObject.swipeLength = r), i = s.swipeDirection(), void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && (s.swiping = !0, e.preventDefault()), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + n * o : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = t + n * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))));
      }, t.prototype.swipeStart = function (e) {
        var t,
            i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0;
      }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
      }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
      }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
      }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"));
      }, t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
      }, e.fn.slick = function () {
        var e,
            i,
            n = this,
            o = arguments[0],
            a = Array.prototype.slice.call(arguments, 1),
            r = n.length;

        for (e = 0; e < r; e++) {
          if ("object" == _typeof(o) || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, a), void 0 !== i) return i;
        }

        return n;
      };
      var i;
    }) ? n.apply(t, o) : n) || (e.exports = a);
  }();
}, function (e, t, i) {
  /*!
   * Chart.js v2.9.4
   * https://www.chartjs.org
   * (c) 2020 Chart.js Contributors
   * Released under the MIT License
   */
  e.exports = function (e) {
    "use strict";

    e = e && e.hasOwnProperty("default") ? e["default"] : e;

    var t = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    },
        i = function (e, t) {
      return e(t = {
        exports: {}
      }, t.exports), t.exports;
    }(function (e) {
      var i = {};

      for (var n in t) {
        t.hasOwnProperty(n) && (i[t[n]] = n);
      }

      var o = e.exports = {
        rgb: {
          channels: 3,
          labels: "rgb"
        },
        hsl: {
          channels: 3,
          labels: "hsl"
        },
        hsv: {
          channels: 3,
          labels: "hsv"
        },
        hwb: {
          channels: 3,
          labels: "hwb"
        },
        cmyk: {
          channels: 4,
          labels: "cmyk"
        },
        xyz: {
          channels: 3,
          labels: "xyz"
        },
        lab: {
          channels: 3,
          labels: "lab"
        },
        lch: {
          channels: 3,
          labels: "lch"
        },
        hex: {
          channels: 1,
          labels: ["hex"]
        },
        keyword: {
          channels: 1,
          labels: ["keyword"]
        },
        ansi16: {
          channels: 1,
          labels: ["ansi16"]
        },
        ansi256: {
          channels: 1,
          labels: ["ansi256"]
        },
        hcg: {
          channels: 3,
          labels: ["h", "c", "g"]
        },
        apple: {
          channels: 3,
          labels: ["r16", "g16", "b16"]
        },
        gray: {
          channels: 1,
          labels: ["gray"]
        }
      };

      for (var a in o) {
        if (o.hasOwnProperty(a)) {
          if (!("channels" in o[a])) throw new Error("missing channels property: " + a);
          if (!("labels" in o[a])) throw new Error("missing channel labels property: " + a);
          if (o[a].labels.length !== o[a].channels) throw new Error("channel and label counts mismatch: " + a);
          var r = o[a].channels,
              s = o[a].labels;
          delete o[a].channels, delete o[a].labels, Object.defineProperty(o[a], "channels", {
            value: r
          }), Object.defineProperty(o[a], "labels", {
            value: s
          });
        }
      }

      o.rgb.hsl = function (e) {
        var t,
            i,
            n = e[0] / 255,
            o = e[1] / 255,
            a = e[2] / 255,
            r = Math.min(n, o, a),
            s = Math.max(n, o, a),
            l = s - r;
        return s === r ? t = 0 : n === s ? t = (o - a) / l : o === s ? t = 2 + (a - n) / l : a === s && (t = 4 + (n - o) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), i = (r + s) / 2, [t, 100 * (s === r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i];
      }, o.rgb.hsv = function (e) {
        var t,
            i,
            n,
            o,
            a,
            r = e[0] / 255,
            s = e[1] / 255,
            l = e[2] / 255,
            d = Math.max(r, s, l),
            c = d - Math.min(r, s, l),
            u = function u(e) {
          return (d - e) / 6 / c + .5;
        };

        return 0 === c ? o = a = 0 : (a = c / d, t = u(r), i = u(s), n = u(l), r === d ? o = n - i : s === d ? o = 1 / 3 + t - n : l === d && (o = 2 / 3 + i - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * a, 100 * d];
      }, o.rgb.hwb = function (e) {
        var t = e[0],
            i = e[1],
            n = e[2];
        return [o.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(i, n)) * 100, 100 * (n = 1 - 1 / 255 * Math.max(t, Math.max(i, n)))];
      }, o.rgb.cmyk = function (e) {
        var t,
            i = e[0] / 255,
            n = e[1] / 255,
            o = e[2] / 255;
        return [100 * ((1 - i - (t = Math.min(1 - i, 1 - n, 1 - o))) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t];
      }, o.rgb.keyword = function (e) {
        var n = i[e];
        if (n) return n;
        var o,
            a,
            r,
            s = 1 / 0;

        for (var l in t) {
          if (t.hasOwnProperty(l)) {
            var d = t[l],
                c = (a = e, r = d, Math.pow(a[0] - r[0], 2) + Math.pow(a[1] - r[1], 2) + Math.pow(a[2] - r[2], 2));
            c < s && (s = c, o = l);
          }
        }

        return o;
      }, o.keyword.rgb = function (e) {
        return t[e];
      }, o.rgb.xyz = function (e) {
        var t = e[0] / 255,
            i = e[1] / 255,
            n = e[2] / 255;
        return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * i + .0722 * n), 100 * (.0193 * t + .1192 * i + .9505 * n)];
      }, o.rgb.lab = function (e) {
        var t = o.rgb.xyz(e),
            i = t[0],
            n = t[1],
            a = t[2];
        return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
      }, o.hsl.rgb = function (e) {
        var t,
            i,
            n,
            o,
            a,
            r = e[0] / 360,
            s = e[1] / 100,
            l = e[2] / 100;
        if (0 === s) return [a = 255 * l, a, a];
        t = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];

        for (var d = 0; d < 3; d++) {
          (n = r + 1 / 3 * -(d - 1)) < 0 && n++, n > 1 && n--, a = 6 * n < 1 ? t + 6 * (i - t) * n : 2 * n < 1 ? i : 3 * n < 2 ? t + (i - t) * (2 / 3 - n) * 6 : t, o[d] = 255 * a;
        }

        return o;
      }, o.hsl.hsv = function (e) {
        var t = e[0],
            i = e[1] / 100,
            n = e[2] / 100,
            o = i,
            a = Math.max(n, .01);
        return i *= (n *= 2) <= 1 ? n : 2 - n, o *= a <= 1 ? a : 2 - a, [t, 100 * (0 === n ? 2 * o / (a + o) : 2 * i / (n + i)), (n + i) / 2 * 100];
      }, o.hsv.rgb = function (e) {
        var t = e[0] / 60,
            i = e[1] / 100,
            n = e[2] / 100,
            o = Math.floor(t) % 6,
            a = t - Math.floor(t),
            r = 255 * n * (1 - i),
            s = 255 * n * (1 - i * a),
            l = 255 * n * (1 - i * (1 - a));

        switch (n *= 255, o) {
          case 0:
            return [n, l, r];

          case 1:
            return [s, n, r];

          case 2:
            return [r, n, l];

          case 3:
            return [r, s, n];

          case 4:
            return [l, r, n];

          case 5:
            return [n, r, s];
        }
      }, o.hsv.hsl = function (e) {
        var t,
            i,
            n,
            o = e[0],
            a = e[1] / 100,
            r = e[2] / 100,
            s = Math.max(r, .01);
        return n = (2 - a) * r, i = a * s, [o, 100 * (i = (i /= (t = (2 - a) * s) <= 1 ? t : 2 - t) || 0), 100 * (n /= 2)];
      }, o.hwb.rgb = function (e) {
        var t,
            i,
            n,
            o,
            a,
            r,
            s,
            l = e[0] / 360,
            d = e[1] / 100,
            c = e[2] / 100,
            u = d + c;

        switch (u > 1 && (d /= u, c /= u), n = 6 * l - (t = Math.floor(6 * l)), 0 != (1 & t) && (n = 1 - n), o = d + n * ((i = 1 - c) - d), t) {
          default:
          case 6:
          case 0:
            a = i, r = o, s = d;
            break;

          case 1:
            a = o, r = i, s = d;
            break;

          case 2:
            a = d, r = i, s = o;
            break;

          case 3:
            a = d, r = o, s = i;
            break;

          case 4:
            a = o, r = d, s = i;
            break;

          case 5:
            a = i, r = d, s = o;
        }

        return [255 * a, 255 * r, 255 * s];
      }, o.cmyk.rgb = function (e) {
        var t = e[0] / 100,
            i = e[1] / 100,
            n = e[2] / 100,
            o = e[3] / 100;
        return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, i * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o))];
      }, o.xyz.rgb = function (e) {
        var t,
            i,
            n,
            o = e[0] / 100,
            a = e[1] / 100,
            r = e[2] / 100;
        return i = -.9689 * o + 1.8758 * a + .0415 * r, n = .0557 * o + -.204 * a + 1.057 * r, t = (t = 3.2406 * o + -1.5372 * a + -.4986 * r) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
      }, o.xyz.lab = function (e) {
        var t = e[0],
            i = e[1],
            n = e[2];
        return i /= 100, n /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (t - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
      }, o.lab.xyz = function (e) {
        var t,
            i,
            n,
            o = e[0];
        t = e[1] / 500 + (i = (o + 16) / 116), n = i - e[2] / 200;
        var a = Math.pow(i, 3),
            r = Math.pow(t, 3),
            s = Math.pow(n, 3);
        return i = a > .008856 ? a : (i - 16 / 116) / 7.787, t = r > .008856 ? r : (t - 16 / 116) / 7.787, n = s > .008856 ? s : (n - 16 / 116) / 7.787, [t *= 95.047, i *= 100, n *= 108.883];
      }, o.lab.lch = function (e) {
        var t,
            i = e[0],
            n = e[1],
            o = e[2];
        return (t = 360 * Math.atan2(o, n) / 2 / Math.PI) < 0 && (t += 360), [i, Math.sqrt(n * n + o * o), t];
      }, o.lch.lab = function (e) {
        var t,
            i = e[0],
            n = e[1];
        return t = e[2] / 360 * 2 * Math.PI, [i, n * Math.cos(t), n * Math.sin(t)];
      }, o.rgb.ansi16 = function (e) {
        var t = e[0],
            i = e[1],
            n = e[2],
            a = 1 in arguments ? arguments[1] : o.rgb.hsv(e)[2];
        if (0 === (a = Math.round(a / 50))) return 30;
        var r = 30 + (Math.round(n / 255) << 2 | Math.round(i / 255) << 1 | Math.round(t / 255));
        return 2 === a && (r += 60), r;
      }, o.hsv.ansi16 = function (e) {
        return o.rgb.ansi16(o.hsv.rgb(e), e[2]);
      }, o.rgb.ansi256 = function (e) {
        var t = e[0],
            i = e[1],
            n = e[2];
        return t === i && i === n ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(i / 255 * 5) + Math.round(n / 255 * 5);
      }, o.ansi16.rgb = function (e) {
        var t = e % 10;
        if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
        var i = .5 * (1 + ~~(e > 50));
        return [(1 & t) * i * 255, (t >> 1 & 1) * i * 255, (t >> 2 & 1) * i * 255];
      }, o.ansi256.rgb = function (e) {
        if (e >= 232) {
          var t = 10 * (e - 232) + 8;
          return [t, t, t];
        }

        var i;
        return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((i = e % 36) / 6) / 5 * 255, i % 6 / 5 * 255];
      }, o.rgb.hex = function (e) {
        var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
        return "000000".substring(t.length) + t;
      }, o.hex.rgb = function (e) {
        var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t) return [0, 0, 0];
        var i = t[0];
        3 === t[0].length && (i = i.split("").map(function (e) {
          return e + e;
        }).join(""));
        var n = parseInt(i, 16);
        return [n >> 16 & 255, n >> 8 & 255, 255 & n];
      }, o.rgb.hcg = function (e) {
        var t,
            i = e[0] / 255,
            n = e[1] / 255,
            o = e[2] / 255,
            a = Math.max(Math.max(i, n), o),
            r = Math.min(Math.min(i, n), o),
            s = a - r;
        return t = s <= 0 ? 0 : a === i ? (n - o) / s % 6 : a === n ? 2 + (o - i) / s : 4 + (i - n) / s + 4, t /= 6, [360 * (t %= 1), 100 * s, 100 * (s < 1 ? r / (1 - s) : 0)];
      }, o.hsl.hcg = function (e) {
        var t = e[1] / 100,
            i = e[2] / 100,
            n = 1,
            o = 0;
        return (n = i < .5 ? 2 * t * i : 2 * t * (1 - i)) < 1 && (o = (i - .5 * n) / (1 - n)), [e[0], 100 * n, 100 * o];
      }, o.hsv.hcg = function (e) {
        var t = e[1] / 100,
            i = e[2] / 100,
            n = t * i,
            o = 0;
        return n < 1 && (o = (i - n) / (1 - n)), [e[0], 100 * n, 100 * o];
      }, o.hcg.rgb = function (e) {
        var t = e[0] / 360,
            i = e[1] / 100,
            n = e[2] / 100;
        if (0 === i) return [255 * n, 255 * n, 255 * n];
        var o,
            a = [0, 0, 0],
            r = t % 1 * 6,
            s = r % 1,
            l = 1 - s;

        switch (Math.floor(r)) {
          case 0:
            a[0] = 1, a[1] = s, a[2] = 0;
            break;

          case 1:
            a[0] = l, a[1] = 1, a[2] = 0;
            break;

          case 2:
            a[0] = 0, a[1] = 1, a[2] = s;
            break;

          case 3:
            a[0] = 0, a[1] = l, a[2] = 1;
            break;

          case 4:
            a[0] = s, a[1] = 0, a[2] = 1;
            break;

          default:
            a[0] = 1, a[1] = 0, a[2] = l;
        }

        return o = (1 - i) * n, [255 * (i * a[0] + o), 255 * (i * a[1] + o), 255 * (i * a[2] + o)];
      }, o.hcg.hsv = function (e) {
        var t = e[1] / 100,
            i = t + e[2] / 100 * (1 - t),
            n = 0;
        return i > 0 && (n = t / i), [e[0], 100 * n, 100 * i];
      }, o.hcg.hsl = function (e) {
        var t = e[1] / 100,
            i = e[2] / 100 * (1 - t) + .5 * t,
            n = 0;
        return i > 0 && i < .5 ? n = t / (2 * i) : i >= .5 && i < 1 && (n = t / (2 * (1 - i))), [e[0], 100 * n, 100 * i];
      }, o.hcg.hwb = function (e) {
        var t = e[1] / 100,
            i = t + e[2] / 100 * (1 - t);
        return [e[0], 100 * (i - t), 100 * (1 - i)];
      }, o.hwb.hcg = function (e) {
        var t = e[1] / 100,
            i = 1 - e[2] / 100,
            n = i - t,
            o = 0;
        return n < 1 && (o = (i - n) / (1 - n)), [e[0], 100 * n, 100 * o];
      }, o.apple.rgb = function (e) {
        return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
      }, o.rgb.apple = function (e) {
        return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
      }, o.gray.rgb = function (e) {
        return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
      }, o.gray.hsl = o.gray.hsv = function (e) {
        return [0, 0, e[0]];
      }, o.gray.hwb = function (e) {
        return [0, 100, e[0]];
      }, o.gray.cmyk = function (e) {
        return [0, 0, 0, e[0]];
      }, o.gray.lab = function (e) {
        return [e[0], 0, 0];
      }, o.gray.hex = function (e) {
        var t = 255 & Math.round(e[0] / 100 * 255),
            i = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
        return "000000".substring(i.length) + i;
      }, o.rgb.gray = function (e) {
        return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
      };
    });

    function n(e) {
      var t = function () {
        for (var e = {}, t = Object.keys(i), n = t.length, o = 0; o < n; o++) {
          e[t[o]] = {
            distance: -1,
            parent: null
          };
        }

        return e;
      }(),
          n = [e];

      for (t[e].distance = 0; n.length;) {
        for (var o = n.pop(), a = Object.keys(i[o]), r = a.length, s = 0; s < r; s++) {
          var l = a[s],
              d = t[l];
          -1 === d.distance && (d.distance = t[o].distance + 1, d.parent = o, n.unshift(l));
        }
      }

      return t;
    }

    function o(e, t) {
      return function (i) {
        return t(e(i));
      };
    }

    function a(e, t) {
      for (var n = [t[e].parent, e], a = i[t[e].parent][e], r = t[e].parent; t[r].parent;) {
        n.unshift(t[r].parent), a = o(i[t[r].parent][r], a), r = t[r].parent;
      }

      return a.conversion = n, a;
    }

    i.rgb, i.hsl, i.hsv, i.hwb, i.cmyk, i.xyz, i.lab, i.lch, i.hex, i.keyword, i.ansi16, i.ansi256, i.hcg, i.apple, i.gray;
    var r = {};
    Object.keys(i).forEach(function (e) {
      r[e] = {}, Object.defineProperty(r[e], "channels", {
        value: i[e].channels
      }), Object.defineProperty(r[e], "labels", {
        value: i[e].labels
      });

      var t = function (e) {
        for (var t = n(e), i = {}, o = Object.keys(t), r = o.length, s = 0; s < r; s++) {
          var l = o[s];
          null !== t[l].parent && (i[l] = a(l, t));
        }

        return i;
      }(e);

      Object.keys(t).forEach(function (i) {
        var n = t[i];
        r[e][i] = function (e) {
          var t = function t(_t3) {
            if (null == _t3) return _t3;
            arguments.length > 1 && (_t3 = Array.prototype.slice.call(arguments));
            var i = e(_t3);
            if ("object" == _typeof(i)) for (var n = i.length, o = 0; o < n; o++) {
              i[o] = Math.round(i[o]);
            }
            return i;
          };

          return "conversion" in e && (t.conversion = e.conversion), t;
        }(n), r[e][i].raw = function (e) {
          var t = function t(_t4) {
            return null == _t4 ? _t4 : (arguments.length > 1 && (_t4 = Array.prototype.slice.call(arguments)), e(_t4));
          };

          return "conversion" in e && (t.conversion = e.conversion), t;
        }(n);
      });
    });
    var s = r,
        l = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    },
        d = {
      getRgba: c,
      getHsla: u,
      getRgb: function getRgb(e) {
        var t = c(e);
        return t && t.slice(0, 3);
      },
      getHsl: function getHsl(e) {
        var t = u(e);
        return t && t.slice(0, 3);
      },
      getHwb: h,
      getAlpha: function getAlpha(e) {
        var t = c(e);
        return t || (t = u(e)) || (t = h(e)) ? t[3] : void 0;
      },
      hexString: function hexString(e, t) {
        return t = void 0 !== t && 3 === e.length ? t : e[3], "#" + v(e[0]) + v(e[1]) + v(e[2]) + (t >= 0 && t < 1 ? v(Math.round(255 * t)) : "");
      },
      rgbString: function rgbString(e, t) {
        return t < 1 || e[3] && e[3] < 1 ? p(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
      },
      rgbaString: p,
      percentString: function percentString(e, t) {
        if (t < 1 || e[3] && e[3] < 1) return f(e, t);
        var i = Math.round(e[0] / 255 * 100),
            n = Math.round(e[1] / 255 * 100),
            o = Math.round(e[2] / 255 * 100);
        return "rgb(" + i + "%, " + n + "%, " + o + "%)";
      },
      percentaString: f,
      hslString: function hslString(e, t) {
        return t < 1 || e[3] && e[3] < 1 ? g(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
      },
      hslaString: g,
      hwbString: function hwbString(e, t) {
        return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")";
      },
      keyword: function keyword(e) {
        return b[e.slice(0, 3)];
      }
    };

    function c(e) {
      if (e) {
        var t = [0, 0, 0],
            i = 1,
            n = e.match(/^#([a-fA-F0-9]{3,4})$/i),
            o = "";

        if (n) {
          o = (n = n[1])[3];

          for (var a = 0; a < t.length; a++) {
            t[a] = parseInt(n[a] + n[a], 16);
          }

          o && (i = Math.round(parseInt(o + o, 16) / 255 * 100) / 100);
        } else if (n = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
          for (o = n[2], n = n[1], a = 0; a < t.length; a++) {
            t[a] = parseInt(n.slice(2 * a, 2 * a + 2), 16);
          }

          o && (i = Math.round(parseInt(o, 16) / 255 * 100) / 100);
        } else if (n = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
          for (a = 0; a < t.length; a++) {
            t[a] = parseInt(n[a + 1]);
          }

          i = parseFloat(n[4]);
        } else if (n = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
          for (a = 0; a < t.length; a++) {
            t[a] = Math.round(2.55 * parseFloat(n[a + 1]));
          }

          i = parseFloat(n[4]);
        } else if (n = e.match(/(\w+)/)) {
          if ("transparent" == n[1]) return [0, 0, 0, 0];
          if (!(t = l[n[1]])) return;
        }

        for (a = 0; a < t.length; a++) {
          t[a] = m(t[a], 0, 255);
        }

        return i = i || 0 == i ? m(i, 0, 1) : 1, t[3] = i, t;
      }
    }

    function u(e) {
      if (e) {
        var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

        if (t) {
          var i = parseFloat(t[4]);
          return [m(parseInt(t[1]), 0, 360), m(parseFloat(t[2]), 0, 100), m(parseFloat(t[3]), 0, 100), m(isNaN(i) ? 1 : i, 0, 1)];
        }
      }
    }

    function h(e) {
      if (e) {
        var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

        if (t) {
          var i = parseFloat(t[4]);
          return [m(parseInt(t[1]), 0, 360), m(parseFloat(t[2]), 0, 100), m(parseFloat(t[3]), 0, 100), m(isNaN(i) ? 1 : i, 0, 1)];
        }
      }
    }

    function p(e, t) {
      return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")";
    }

    function f(e, t) {
      return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")";
    }

    function g(e, t) {
      return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")";
    }

    function m(e, t, i) {
      return Math.min(Math.max(t, e), i);
    }

    function v(e) {
      var t = e.toString(16).toUpperCase();
      return t.length < 2 ? "0" + t : t;
    }

    var b = {};

    for (var y in l) {
      b[l[y]] = y;
    }

    var x = function x(e) {
      return e instanceof x ? e : this instanceof x ? (this.valid = !1, this.values = {
        rgb: [0, 0, 0],
        hsl: [0, 0, 0],
        hsv: [0, 0, 0],
        hwb: [0, 0, 0],
        cmyk: [0, 0, 0, 0],
        alpha: 1
      }, void ("string" == typeof e ? (t = d.getRgba(e)) ? this.setValues("rgb", t) : (t = d.getHsla(e)) ? this.setValues("hsl", t) : (t = d.getHwb(e)) && this.setValues("hwb", t) : "object" == _typeof(e) && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new x(e);
      var t;
    };

    x.prototype = {
      isValid: function isValid() {
        return this.valid;
      },
      rgb: function rgb() {
        return this.setSpace("rgb", arguments);
      },
      hsl: function hsl() {
        return this.setSpace("hsl", arguments);
      },
      hsv: function hsv() {
        return this.setSpace("hsv", arguments);
      },
      hwb: function hwb() {
        return this.setSpace("hwb", arguments);
      },
      cmyk: function cmyk() {
        return this.setSpace("cmyk", arguments);
      },
      rgbArray: function rgbArray() {
        return this.values.rgb;
      },
      hslArray: function hslArray() {
        return this.values.hsl;
      },
      hsvArray: function hsvArray() {
        return this.values.hsv;
      },
      hwbArray: function hwbArray() {
        var e = this.values;
        return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb;
      },
      cmykArray: function cmykArray() {
        return this.values.cmyk;
      },
      rgbaArray: function rgbaArray() {
        var e = this.values;
        return e.rgb.concat([e.alpha]);
      },
      hslaArray: function hslaArray() {
        var e = this.values;
        return e.hsl.concat([e.alpha]);
      },
      alpha: function alpha(e) {
        return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this);
      },
      red: function red(e) {
        return this.setChannel("rgb", 0, e);
      },
      green: function green(e) {
        return this.setChannel("rgb", 1, e);
      },
      blue: function blue(e) {
        return this.setChannel("rgb", 2, e);
      },
      hue: function hue(e) {
        return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e);
      },
      saturation: function saturation(e) {
        return this.setChannel("hsl", 1, e);
      },
      lightness: function lightness(e) {
        return this.setChannel("hsl", 2, e);
      },
      saturationv: function saturationv(e) {
        return this.setChannel("hsv", 1, e);
      },
      whiteness: function whiteness(e) {
        return this.setChannel("hwb", 1, e);
      },
      blackness: function blackness(e) {
        return this.setChannel("hwb", 2, e);
      },
      value: function value(e) {
        return this.setChannel("hsv", 2, e);
      },
      cyan: function cyan(e) {
        return this.setChannel("cmyk", 0, e);
      },
      magenta: function magenta(e) {
        return this.setChannel("cmyk", 1, e);
      },
      yellow: function yellow(e) {
        return this.setChannel("cmyk", 2, e);
      },
      black: function black(e) {
        return this.setChannel("cmyk", 3, e);
      },
      hexString: function hexString() {
        return d.hexString(this.values.rgb);
      },
      rgbString: function rgbString() {
        return d.rgbString(this.values.rgb, this.values.alpha);
      },
      rgbaString: function rgbaString() {
        return d.rgbaString(this.values.rgb, this.values.alpha);
      },
      percentString: function percentString() {
        return d.percentString(this.values.rgb, this.values.alpha);
      },
      hslString: function hslString() {
        return d.hslString(this.values.hsl, this.values.alpha);
      },
      hslaString: function hslaString() {
        return d.hslaString(this.values.hsl, this.values.alpha);
      },
      hwbString: function hwbString() {
        return d.hwbString(this.values.hwb, this.values.alpha);
      },
      keyword: function keyword() {
        return d.keyword(this.values.rgb, this.values.alpha);
      },
      rgbNumber: function rgbNumber() {
        var e = this.values.rgb;
        return e[0] << 16 | e[1] << 8 | e[2];
      },
      luminosity: function luminosity() {
        for (var e = this.values.rgb, t = [], i = 0; i < e.length; i++) {
          var n = e[i] / 255;
          t[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
        }

        return .2126 * t[0] + .7152 * t[1] + .0722 * t[2];
      },
      contrast: function contrast(e) {
        var t = this.luminosity(),
            i = e.luminosity();
        return t > i ? (t + .05) / (i + .05) : (i + .05) / (t + .05);
      },
      level: function level(e) {
        var t = this.contrast(e);
        return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
      },
      dark: function dark() {
        var e = this.values.rgb;
        return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
      },
      light: function light() {
        return !this.dark();
      },
      negate: function negate() {
        for (var e = [], t = 0; t < 3; t++) {
          e[t] = 255 - this.values.rgb[t];
        }

        return this.setValues("rgb", e), this;
      },
      lighten: function lighten(e) {
        var t = this.values.hsl;
        return t[2] += t[2] * e, this.setValues("hsl", t), this;
      },
      darken: function darken(e) {
        var t = this.values.hsl;
        return t[2] -= t[2] * e, this.setValues("hsl", t), this;
      },
      saturate: function saturate(e) {
        var t = this.values.hsl;
        return t[1] += t[1] * e, this.setValues("hsl", t), this;
      },
      desaturate: function desaturate(e) {
        var t = this.values.hsl;
        return t[1] -= t[1] * e, this.setValues("hsl", t), this;
      },
      whiten: function whiten(e) {
        var t = this.values.hwb;
        return t[1] += t[1] * e, this.setValues("hwb", t), this;
      },
      blacken: function blacken(e) {
        var t = this.values.hwb;
        return t[2] += t[2] * e, this.setValues("hwb", t), this;
      },
      greyscale: function greyscale() {
        var e = this.values.rgb,
            t = .3 * e[0] + .59 * e[1] + .11 * e[2];
        return this.setValues("rgb", [t, t, t]), this;
      },
      clearer: function clearer(e) {
        var t = this.values.alpha;
        return this.setValues("alpha", t - t * e), this;
      },
      opaquer: function opaquer(e) {
        var t = this.values.alpha;
        return this.setValues("alpha", t + t * e), this;
      },
      rotate: function rotate(e) {
        var t = this.values.hsl,
            i = (t[0] + e) % 360;
        return t[0] = i < 0 ? 360 + i : i, this.setValues("hsl", t), this;
      },
      mix: function mix(e, t) {
        var i = e,
            n = void 0 === t ? .5 : t,
            o = 2 * n - 1,
            a = this.alpha() - i.alpha(),
            r = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2,
            s = 1 - r;
        return this.rgb(r * this.red() + s * i.red(), r * this.green() + s * i.green(), r * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n));
      },
      toJSON: function toJSON() {
        return this.rgb();
      },
      clone: function clone() {
        var e,
            t,
            i = new x(),
            n = this.values,
            o = i.values;

        for (var a in n) {
          n.hasOwnProperty(a) && (e = n[a], "[object Array]" === (t = {}.toString.call(e)) ? o[a] = e.slice(0) : "[object Number]" === t ? o[a] = e : console.error("unexpected color value:", e));
        }

        return i;
      }
    }, x.prototype.spaces = {
      rgb: ["red", "green", "blue"],
      hsl: ["hue", "saturation", "lightness"],
      hsv: ["hue", "saturation", "value"],
      hwb: ["hue", "whiteness", "blackness"],
      cmyk: ["cyan", "magenta", "yellow", "black"]
    }, x.prototype.maxes = {
      rgb: [255, 255, 255],
      hsl: [360, 100, 100],
      hsv: [360, 100, 100],
      hwb: [360, 100, 100],
      cmyk: [100, 100, 100, 100]
    }, x.prototype.getValues = function (e) {
      for (var t = this.values, i = {}, n = 0; n < e.length; n++) {
        i[e.charAt(n)] = t[e][n];
      }

      return 1 !== t.alpha && (i.a = t.alpha), i;
    }, x.prototype.setValues = function (e, t) {
      var i,
          n,
          o = this.values,
          a = this.spaces,
          r = this.maxes,
          l = 1;
      if (this.valid = !0, "alpha" === e) l = t;else if (t.length) o[e] = t.slice(0, e.length), l = t[e.length];else if (void 0 !== t[e.charAt(0)]) {
        for (i = 0; i < e.length; i++) {
          o[e][i] = t[e.charAt(i)];
        }

        l = t.a;
      } else if (void 0 !== t[a[e][0]]) {
        var d = a[e];

        for (i = 0; i < e.length; i++) {
          o[e][i] = t[d[i]];
        }

        l = t.alpha;
      }
      if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === e) return !1;

      for (i = 0; i < e.length; i++) {
        n = Math.max(0, Math.min(r[e][i], o[e][i])), o[e][i] = Math.round(n);
      }

      for (var c in a) {
        c !== e && (o[c] = s[e][c](o[e]));
      }

      return !0;
    }, x.prototype.setSpace = function (e, t) {
      var i = t[0];
      return void 0 === i ? this.getValues(e) : ("number" == typeof i && (i = Array.prototype.slice.call(t)), this.setValues(e, i), this);
    }, x.prototype.setChannel = function (e, t, i) {
      var n = this.values[e];
      return void 0 === i ? n[t] : (i === n[t] || (n[t] = i, this.setValues(e, n)), this);
    }, "undefined" != typeof window && (window.Color = x);
    var w = x;

    function k(e) {
      return -1 === ["__proto__", "prototype", "constructor"].indexOf(e);
    }

    var T,
        S = {
      noop: function noop() {},
      uid: (T = 0, function () {
        return T++;
      }),
      isNullOrUndef: function isNullOrUndef(e) {
        return null == e;
      },
      isArray: function isArray(e) {
        if (Array.isArray && Array.isArray(e)) return !0;
        var t = Object.prototype.toString.call(e);
        return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6);
      },
      isObject: function isObject(e) {
        return null !== e && "[object Object]" === Object.prototype.toString.call(e);
      },
      isFinite: function (_isFinite) {
        function isFinite(_x) {
          return _isFinite.apply(this, arguments);
        }

        isFinite.toString = function () {
          return _isFinite.toString();
        };

        return isFinite;
      }(function (e) {
        return ("number" == typeof e || e instanceof Number) && isFinite(e);
      }),
      valueOrDefault: function valueOrDefault(e, t) {
        return void 0 === e ? t : e;
      },
      valueAtIndexOrDefault: function valueAtIndexOrDefault(e, t, i) {
        return S.valueOrDefault(S.isArray(e) ? e[t] : e, i);
      },
      callback: function callback(e, t, i) {
        if (e && "function" == typeof e.call) return e.apply(i, t);
      },
      each: function each(e, t, i, n) {
        var o, a, r;
        if (S.isArray(e)) {
          if (a = e.length, n) for (o = a - 1; o >= 0; o--) {
            t.call(i, e[o], o);
          } else for (o = 0; o < a; o++) {
            t.call(i, e[o], o);
          }
        } else if (S.isObject(e)) for (a = (r = Object.keys(e)).length, o = 0; o < a; o++) {
          t.call(i, e[r[o]], r[o]);
        }
      },
      arrayEquals: function arrayEquals(e, t) {
        var i, n, o, a;
        if (!e || !t || e.length !== t.length) return !1;

        for (i = 0, n = e.length; i < n; ++i) {
          if (o = e[i], a = t[i], o instanceof Array && a instanceof Array) {
            if (!S.arrayEquals(o, a)) return !1;
          } else if (o !== a) return !1;
        }

        return !0;
      },
      clone: function clone(e) {
        if (S.isArray(e)) return e.map(S.clone);

        if (S.isObject(e)) {
          for (var t = Object.create(e), i = Object.keys(e), n = i.length, o = 0; o < n; ++o) {
            t[i[o]] = S.clone(e[i[o]]);
          }

          return t;
        }

        return e;
      },
      _merger: function _merger(e, t, i, n) {
        if (k(e)) {
          var o = t[e],
              a = i[e];
          S.isObject(o) && S.isObject(a) ? S.merge(o, a, n) : t[e] = S.clone(a);
        }
      },
      _mergerIf: function _mergerIf(e, t, i) {
        if (k(e)) {
          var n = t[e],
              o = i[e];
          S.isObject(n) && S.isObject(o) ? S.mergeIf(n, o) : t.hasOwnProperty(e) || (t[e] = S.clone(o));
        }
      },
      merge: function merge(e, t, i) {
        var n,
            o,
            a,
            r,
            s,
            l = S.isArray(t) ? t : [t],
            d = l.length;
        if (!S.isObject(e)) return e;

        for (n = (i = i || {}).merger || S._merger, o = 0; o < d; ++o) {
          if (t = l[o], S.isObject(t)) for (s = 0, r = (a = Object.keys(t)).length; s < r; ++s) {
            n(a[s], e, t, i);
          }
        }

        return e;
      },
      mergeIf: function mergeIf(e, t) {
        return S.merge(e, t, {
          merger: S._mergerIf
        });
      },
      extend: Object.assign || function (e) {
        return S.merge(e, [].slice.call(arguments, 1), {
          merger: function merger(e, t, i) {
            t[e] = i[e];
          }
        });
      },
      inherits: function inherits(e) {
        var t = this,
            i = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
          return t.apply(this, arguments);
        },
            n = function n() {
          this.constructor = i;
        };

        return n.prototype = t.prototype, i.prototype = new n(), i.extend = S.inherits, e && S.extend(i.prototype, e), i.__super__ = t.prototype, i;
      },
      _deprecated: function _deprecated(e, t, i, n) {
        void 0 !== t && console.warn(e + ': "' + i + '" is deprecated. Please use "' + n + '" instead');
      }
    },
        _ = S;
    S.callCallback = S.callback, S.indexOf = function (e, t, i) {
      return Array.prototype.indexOf.call(e, t, i);
    }, S.getValueOrDefault = S.valueOrDefault, S.getValueAtIndexOrDefault = S.valueAtIndexOrDefault;
    var C = {
      linear: function linear(e) {
        return e;
      },
      easeInQuad: function easeInQuad(e) {
        return e * e;
      },
      easeOutQuad: function easeOutQuad(e) {
        return -e * (e - 2);
      },
      easeInOutQuad: function easeInOutQuad(e) {
        return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1);
      },
      easeInCubic: function easeInCubic(e) {
        return e * e * e;
      },
      easeOutCubic: function easeOutCubic(e) {
        return (e -= 1) * e * e + 1;
      },
      easeInOutCubic: function easeInOutCubic(e) {
        return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2);
      },
      easeInQuart: function easeInQuart(e) {
        return e * e * e * e;
      },
      easeOutQuart: function easeOutQuart(e) {
        return -((e -= 1) * e * e * e - 1);
      },
      easeInOutQuart: function easeInOutQuart(e) {
        return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2);
      },
      easeInQuint: function easeInQuint(e) {
        return e * e * e * e * e;
      },
      easeOutQuint: function easeOutQuint(e) {
        return (e -= 1) * e * e * e * e + 1;
      },
      easeInOutQuint: function easeInOutQuint(e) {
        return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2);
      },
      easeInSine: function easeInSine(e) {
        return 1 - Math.cos(e * (Math.PI / 2));
      },
      easeOutSine: function easeOutSine(e) {
        return Math.sin(e * (Math.PI / 2));
      },
      easeInOutSine: function easeInOutSine(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1);
      },
      easeInExpo: function easeInExpo(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      },
      easeOutExpo: function easeOutExpo(e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
      },
      easeInOutExpo: function easeInOutExpo(e) {
        return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e));
      },
      easeInCirc: function easeInCirc(e) {
        return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
      },
      easeOutCirc: function easeOutCirc(e) {
        return Math.sqrt(1 - (e -= 1) * e);
      },
      easeInOutCirc: function easeInOutCirc(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      },
      easeInElastic: function easeInElastic(e) {
        var t = 1.70158,
            i = 0,
            n = 1;
        return 0 === e ? 0 : 1 === e ? 1 : (i || (i = .3), n < 1 ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i));
      },
      easeOutElastic: function easeOutElastic(e) {
        var t = 1.70158,
            i = 0,
            n = 1;
        return 0 === e ? 0 : 1 === e ? 1 : (i || (i = .3), n < 1 ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / i) + 1);
      },
      easeInOutElastic: function easeInOutElastic(e) {
        var t = 1.70158,
            i = 0,
            n = 1;
        return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i) * .5 + 1);
      },
      easeInBack: function easeInBack(e) {
        var t = 1.70158;
        return e * e * ((t + 1) * e - t);
      },
      easeOutBack: function easeOutBack(e) {
        var t = 1.70158;
        return (e -= 1) * e * ((t + 1) * e + t) + 1;
      },
      easeInOutBack: function easeInOutBack(e) {
        var t = 1.70158;
        return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      easeInBounce: function easeInBounce(e) {
        return 1 - C.easeOutBounce(1 - e);
      },
      easeOutBounce: function easeOutBounce(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
      },
      easeInOutBounce: function easeInOutBounce(e) {
        return e < .5 ? .5 * C.easeInBounce(2 * e) : .5 * C.easeOutBounce(2 * e - 1) + .5;
      }
    },
        M = {
      effects: C
    };
    _.easingEffects = C;
    var D = Math.PI,
        A = D / 180,
        P = 2 * D,
        $ = D / 2,
        O = D / 4,
        I = 2 * D / 3,
        L = {
      clear: function clear(e) {
        e.ctx.clearRect(0, 0, e.width, e.height);
      },
      roundedRect: function roundedRect(e, t, i, n, o, a) {
        if (a) {
          var r = Math.min(a, o / 2, n / 2),
              s = t + r,
              l = i + r,
              d = t + n - r,
              c = i + o - r;
          e.moveTo(t, l), s < d && l < c ? (e.arc(s, l, r, -D, -$), e.arc(d, l, r, -$, 0), e.arc(d, c, r, 0, $), e.arc(s, c, r, $, D)) : s < d ? (e.moveTo(s, i), e.arc(d, l, r, -$, $), e.arc(s, l, r, $, D + $)) : l < c ? (e.arc(s, l, r, -D, 0), e.arc(s, c, r, 0, D)) : e.arc(s, l, r, -D, D), e.closePath(), e.moveTo(t, i);
        } else e.rect(t, i, n, o);
      },
      drawPoint: function drawPoint(e, t, i, n, o, a) {
        var r,
            s,
            l,
            d,
            c,
            u = (a || 0) * A;
        if (t && "object" == _typeof(t) && ("[object HTMLImageElement]" === (r = t.toString()) || "[object HTMLCanvasElement]" === r)) return e.save(), e.translate(n, o), e.rotate(u), e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), void e.restore();

        if (!(isNaN(i) || i <= 0)) {
          switch (e.beginPath(), t) {
            default:
              e.arc(n, o, i, 0, P), e.closePath();
              break;

            case "triangle":
              e.moveTo(n + Math.sin(u) * i, o - Math.cos(u) * i), u += I, e.lineTo(n + Math.sin(u) * i, o - Math.cos(u) * i), u += I, e.lineTo(n + Math.sin(u) * i, o - Math.cos(u) * i), e.closePath();
              break;

            case "rectRounded":
              d = i - (c = .516 * i), s = Math.cos(u + O) * d, l = Math.sin(u + O) * d, e.arc(n - s, o - l, c, u - D, u - $), e.arc(n + l, o - s, c, u - $, u), e.arc(n + s, o + l, c, u, u + $), e.arc(n - l, o + s, c, u + $, u + D), e.closePath();
              break;

            case "rect":
              if (!a) {
                d = Math.SQRT1_2 * i, e.rect(n - d, o - d, 2 * d, 2 * d);
                break;
              }

              u += O;

            case "rectRot":
              s = Math.cos(u) * i, l = Math.sin(u) * i, e.moveTo(n - s, o - l), e.lineTo(n + l, o - s), e.lineTo(n + s, o + l), e.lineTo(n - l, o + s), e.closePath();
              break;

            case "crossRot":
              u += O;

            case "cross":
              s = Math.cos(u) * i, l = Math.sin(u) * i, e.moveTo(n - s, o - l), e.lineTo(n + s, o + l), e.moveTo(n + l, o - s), e.lineTo(n - l, o + s);
              break;

            case "star":
              s = Math.cos(u) * i, l = Math.sin(u) * i, e.moveTo(n - s, o - l), e.lineTo(n + s, o + l), e.moveTo(n + l, o - s), e.lineTo(n - l, o + s), u += O, s = Math.cos(u) * i, l = Math.sin(u) * i, e.moveTo(n - s, o - l), e.lineTo(n + s, o + l), e.moveTo(n + l, o - s), e.lineTo(n - l, o + s);
              break;

            case "line":
              s = Math.cos(u) * i, l = Math.sin(u) * i, e.moveTo(n - s, o - l), e.lineTo(n + s, o + l);
              break;

            case "dash":
              e.moveTo(n, o), e.lineTo(n + Math.cos(u) * i, o + Math.sin(u) * i);
          }

          e.fill(), e.stroke();
        }
      },
      _isPointInArea: function _isPointInArea(e, t) {
        return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6;
      },
      clipArea: function clipArea(e, t) {
        e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
      },
      unclipArea: function unclipArea(e) {
        e.restore();
      },
      lineTo: function lineTo(e, t, i, n) {
        var o = i.steppedLine;

        if (o) {
          if ("middle" === o) {
            var a = (t.x + i.x) / 2;
            e.lineTo(a, n ? i.y : t.y), e.lineTo(a, n ? t.y : i.y);
          } else "after" === o && !n || "after" !== o && n ? e.lineTo(t.x, i.y) : e.lineTo(i.x, t.y);

          e.lineTo(i.x, i.y);
        } else i.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : e.lineTo(i.x, i.y);
      }
    },
        F = L;
    _.clear = L.clear, _.drawRoundedRectangle = function (e) {
      e.beginPath(), L.roundedRect.apply(L, arguments);
    };
    var z = {
      _set: function _set(e, t) {
        return _.merge(this[e] || (this[e] = {}), t);
      }
    };

    z._set("global", {
      defaultColor: "rgba(0,0,0,0.1)",
      defaultFontColor: "#666",
      defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      defaultFontSize: 12,
      defaultFontStyle: "normal",
      defaultLineHeight: 1.2,
      showLines: !0
    });

    var E = z,
        R = _.valueOrDefault,
        B = {
      toLineHeight: function toLineHeight(e, t) {
        var i = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
        if (!i || "normal" === i[1]) return 1.2 * t;

        switch (e = +i[2], i[3]) {
          case "px":
            return e;

          case "%":
            e /= 100;
        }

        return t * e;
      },
      toPadding: function toPadding(e) {
        var t, i, n, o;
        return _.isObject(e) ? (t = +e.top || 0, i = +e.right || 0, n = +e.bottom || 0, o = +e.left || 0) : t = i = n = o = +e || 0, {
          top: t,
          right: i,
          bottom: n,
          left: o,
          height: t + n,
          width: o + i
        };
      },
      _parseFont: function _parseFont(e) {
        var t = E.global,
            i = R(e.fontSize, t.defaultFontSize),
            n = {
          family: R(e.fontFamily, t.defaultFontFamily),
          lineHeight: _.options.toLineHeight(R(e.lineHeight, t.defaultLineHeight), i),
          size: i,
          style: R(e.fontStyle, t.defaultFontStyle),
          weight: null,
          string: ""
        };
        return n.string = function (e) {
          return !e || _.isNullOrUndef(e.size) || _.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
        }(n), n;
      },
      resolve: function resolve(e, t, i, n) {
        var o,
            a,
            r,
            s = !0;

        for (o = 0, a = e.length; o < a; ++o) {
          if (void 0 !== (r = e[o]) && (void 0 !== t && "function" == typeof r && (r = r(t), s = !1), void 0 !== i && _.isArray(r) && (r = r[i], s = !1), void 0 !== r)) return n && !s && (n.cacheable = !1), r;
        }
      }
    },
        N = {
      _factorize: function _factorize(e) {
        var t,
            i = [],
            n = Math.sqrt(e);

        for (t = 1; t < n; t++) {
          e % t == 0 && (i.push(t), i.push(e / t));
        }

        return n === (0 | n) && i.push(n), i.sort(function (e, t) {
          return e - t;
        }).pop(), i;
      },
      log10: Math.log10 || function (e) {
        var t = Math.log(e) * Math.LOG10E,
            i = Math.round(t);
        return e === Math.pow(10, i) ? i : t;
      }
    },
        H = N;
    _.log10 = N.log10;
    var W = _,
        j = M,
        V = F,
        q = B,
        U = H,
        Y = {
      getRtlAdapter: function getRtlAdapter(e, t, i) {
        return e ? function (e, t) {
          return {
            x: function x(i) {
              return e + e + t - i;
            },
            setWidth: function setWidth(e) {
              t = e;
            },
            textAlign: function textAlign(e) {
              return "center" === e ? e : "right" === e ? "left" : "right";
            },
            xPlus: function xPlus(e, t) {
              return e - t;
            },
            leftForLtr: function leftForLtr(e, t) {
              return e - t;
            }
          };
        }(t, i) : {
          x: function x(e) {
            return e;
          },
          setWidth: function setWidth(e) {},
          textAlign: function textAlign(e) {
            return e;
          },
          xPlus: function xPlus(e, t) {
            return e + t;
          },
          leftForLtr: function leftForLtr(e, t) {
            return e;
          }
        };
      },
      overrideTextDirection: function overrideTextDirection(e, t) {
        var i, n;
        "ltr" !== t && "rtl" !== t || (n = [(i = e.canvas.style).getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", t, "important"), e.prevTextDirection = n);
      },
      restoreTextDirection: function restoreTextDirection(e) {
        var t = e.prevTextDirection;
        void 0 !== t && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
      }
    };
    W.easing = j, W.canvas = V, W.options = q, W.math = U, W.rtl = Y;

    var G = function G(e) {
      W.extend(this, e), this.initialize.apply(this, arguments);
    };

    W.extend(G.prototype, {
      _type: void 0,
      initialize: function initialize() {
        this.hidden = !1;
      },
      pivot: function pivot() {
        var e = this;
        return e._view || (e._view = W.extend({}, e._model)), e._start = {}, e;
      },
      transition: function transition(e) {
        var t = this,
            i = t._model,
            n = t._start,
            o = t._view;
        return i && 1 !== e ? (o || (o = t._view = {}), n || (n = t._start = {}), function (e, t, i, n) {
          var o,
              a,
              r,
              s,
              l,
              d,
              c,
              u,
              h,
              p = Object.keys(i);

          for (o = 0, a = p.length; o < a; ++o) {
            if (d = i[r = p[o]], t.hasOwnProperty(r) || (t[r] = d), (s = t[r]) !== d && "_" !== r[0]) {
              if (e.hasOwnProperty(r) || (e[r] = s), (c = _typeof(d)) == _typeof(l = e[r])) if ("string" === c) {
                if ((u = w(l)).valid && (h = w(d)).valid) {
                  t[r] = h.mix(u, n).rgbString();
                  continue;
                }
              } else if (W.isFinite(l) && W.isFinite(d)) {
                t[r] = l + (d - l) * n;
                continue;
              }
              t[r] = d;
            }
          }
        }(n, o, i, e), t) : (t._view = W.extend({}, i), t._start = null, t);
      },
      tooltipPosition: function tooltipPosition() {
        return {
          x: this._model.x,
          y: this._model.y
        };
      },
      hasValue: function hasValue() {
        return W.isNumber(this._model.x) && W.isNumber(this._model.y);
      }
    }), G.extend = W.inherits;
    var X = G,
        K = X.extend({
      chart: null,
      currentStep: 0,
      numSteps: 60,
      easing: "",
      render: null,
      onAnimationProgress: null,
      onAnimationComplete: null
    }),
        Q = K;
    Object.defineProperty(K.prototype, "animationObject", {
      get: function get() {
        return this;
      }
    }), Object.defineProperty(K.prototype, "chartInstance", {
      get: function get() {
        return this.chart;
      },
      set: function set(e) {
        this.chart = e;
      }
    }), E._set("global", {
      animation: {
        duration: 1e3,
        easing: "easeOutQuart",
        onProgress: W.noop,
        onComplete: W.noop
      }
    });
    var Z = {
      animations: [],
      request: null,
      addAnimation: function addAnimation(e, t, i, n) {
        var o,
            a,
            r = this.animations;

        for (t.chart = e, t.startTime = Date.now(), t.duration = i, n || (e.animating = !0), o = 0, a = r.length; o < a; ++o) {
          if (r[o].chart === e) return void (r[o] = t);
        }

        r.push(t), 1 === r.length && this.requestAnimationFrame();
      },
      cancelAnimation: function cancelAnimation(e) {
        var t = W.findIndex(this.animations, function (t) {
          return t.chart === e;
        });
        -1 !== t && (this.animations.splice(t, 1), e.animating = !1);
      },
      requestAnimationFrame: function requestAnimationFrame() {
        var e = this;
        null === e.request && (e.request = W.requestAnimFrame.call(window, function () {
          e.request = null, e.startDigest();
        }));
      },
      startDigest: function startDigest() {
        this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
      },
      advance: function advance() {
        for (var e, t, i, n, o = this.animations, a = 0; a < o.length;) {
          t = (e = o[a]).chart, i = e.numSteps, n = Math.floor((Date.now() - e.startTime) / e.duration * i) + 1, e.currentStep = Math.min(n, i), W.callback(e.render, [t, e], t), W.callback(e.onAnimationProgress, [e], t), e.currentStep >= i ? (W.callback(e.onAnimationComplete, [e], t), t.animating = !1, o.splice(a, 1)) : ++a;
        }
      }
    },
        J = W.options.resolve,
        ee = ["push", "pop", "shift", "splice", "unshift"];

    function te(e, t) {
      var i = e._chartjs;

      if (i) {
        var n = i.listeners,
            o = n.indexOf(t);
        -1 !== o && n.splice(o, 1), n.length > 0 || (ee.forEach(function (t) {
          delete e[t];
        }), delete e._chartjs);
      }
    }

    var ie = function ie(e, t) {
      this.initialize(e, t);
    };

    W.extend(ie.prototype, {
      datasetElementType: null,
      dataElementType: null,
      _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
      _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
      initialize: function initialize(e, t) {
        var i = this;
        i.chart = e, i.index = t, i.linkScales(), i.addElements(), i._type = i.getMeta().type;
      },
      updateIndex: function updateIndex(e) {
        this.index = e;
      },
      linkScales: function linkScales() {
        var e = this.getMeta(),
            t = this.chart,
            i = t.scales,
            n = this.getDataset(),
            o = t.options.scales;
        null !== e.xAxisID && e.xAxisID in i && !n.xAxisID || (e.xAxisID = n.xAxisID || o.xAxes[0].id), null !== e.yAxisID && e.yAxisID in i && !n.yAxisID || (e.yAxisID = n.yAxisID || o.yAxes[0].id);
      },
      getDataset: function getDataset() {
        return this.chart.data.datasets[this.index];
      },
      getMeta: function getMeta() {
        return this.chart.getDatasetMeta(this.index);
      },
      getScaleForId: function getScaleForId(e) {
        return this.chart.scales[e];
      },
      _getValueScaleId: function _getValueScaleId() {
        return this.getMeta().yAxisID;
      },
      _getIndexScaleId: function _getIndexScaleId() {
        return this.getMeta().xAxisID;
      },
      _getValueScale: function _getValueScale() {
        return this.getScaleForId(this._getValueScaleId());
      },
      _getIndexScale: function _getIndexScale() {
        return this.getScaleForId(this._getIndexScaleId());
      },
      reset: function reset() {
        this._update(!0);
      },
      destroy: function destroy() {
        this._data && te(this._data, this);
      },
      createMetaDataset: function createMetaDataset() {
        var e = this.datasetElementType;
        return e && new e({
          _chart: this.chart,
          _datasetIndex: this.index
        });
      },
      createMetaData: function createMetaData(e) {
        var t = this.dataElementType;
        return t && new t({
          _chart: this.chart,
          _datasetIndex: this.index,
          _index: e
        });
      },
      addElements: function addElements() {
        var e,
            t,
            i = this.getMeta(),
            n = this.getDataset().data || [],
            o = i.data;

        for (e = 0, t = n.length; e < t; ++e) {
          o[e] = o[e] || this.createMetaData(e);
        }

        i.dataset = i.dataset || this.createMetaDataset();
      },
      addElementAndReset: function addElementAndReset(e) {
        var t = this.createMetaData(e);
        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0);
      },
      buildOrUpdateElements: function buildOrUpdateElements() {
        var e,
            t,
            i = this,
            n = i.getDataset(),
            o = n.data || (n.data = []);
        i._data !== o && (i._data && te(i._data, i), o && Object.isExtensible(o) && (t = i, (e = o)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
          configurable: !0,
          enumerable: !1,
          value: {
            listeners: [t]
          }
        }), ee.forEach(function (t) {
          var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
              n = e[t];
          Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: function value() {
              var t = Array.prototype.slice.call(arguments),
                  o = n.apply(this, t);
              return W.each(e._chartjs.listeners, function (e) {
                "function" == typeof e[i] && e[i].apply(e, t);
              }), o;
            }
          });
        }))), i._data = o), i.resyncElements();
      },
      _configure: function _configure() {
        this._config = W.merge(Object.create(null), [this.chart.options.datasets[this._type], this.getDataset()], {
          merger: function merger(e, t, i) {
            "_meta" !== e && "data" !== e && W._merger(e, t, i);
          }
        });
      },
      _update: function _update(e) {
        this._configure(), this._cachedDataOpts = null, this.update(e);
      },
      update: W.noop,
      transition: function transition(e) {
        for (var t = this.getMeta(), i = t.data || [], n = i.length, o = 0; o < n; ++o) {
          i[o].transition(e);
        }

        t.dataset && t.dataset.transition(e);
      },
      draw: function draw() {
        var e = this.getMeta(),
            t = e.data || [],
            i = t.length,
            n = 0;

        for (e.dataset && e.dataset.draw(); n < i; ++n) {
          t[n].draw();
        }
      },
      getStyle: function getStyle(e) {
        var t,
            i = this.getMeta(),
            n = i.dataset;
        return this._configure(), n && void 0 === e ? t = this._resolveDatasetElementOptions(n || {}) : (e = e || 0, t = this._resolveDataElementOptions(i.data[e] || {}, e)), !1 !== t.fill && null !== t.fill || (t.backgroundColor = t.borderColor), t;
      },
      _resolveDatasetElementOptions: function _resolveDatasetElementOptions(e, t) {
        var i,
            n,
            o,
            a,
            r = this,
            s = r.chart,
            l = r._config,
            d = e.custom || {},
            c = s.options.elements[r.datasetElementType.prototype._type] || {},
            u = r._datasetElementOptions,
            h = {},
            p = {
          chart: s,
          dataset: r.getDataset(),
          datasetIndex: r.index,
          hover: t
        };

        for (i = 0, n = u.length; i < n; ++i) {
          o = u[i], a = t ? "hover" + o.charAt(0).toUpperCase() + o.slice(1) : o, h[o] = J([d[a], l[a], c[a]], p);
        }

        return h;
      },
      _resolveDataElementOptions: function _resolveDataElementOptions(e, t) {
        var i = this,
            n = e && e.custom,
            o = i._cachedDataOpts;
        if (o && !n) return o;
        var a,
            r,
            s,
            l,
            d = i.chart,
            c = i._config,
            u = d.options.elements[i.dataElementType.prototype._type] || {},
            h = i._dataElementOptions,
            p = {},
            f = {
          chart: d,
          dataIndex: t,
          dataset: i.getDataset(),
          datasetIndex: i.index
        },
            g = {
          cacheable: !n
        };
        if (n = n || {}, W.isArray(h)) for (r = 0, s = h.length; r < s; ++r) {
          p[l = h[r]] = J([n[l], c[l], u[l]], f, t, g);
        } else for (r = 0, s = (a = Object.keys(h)).length; r < s; ++r) {
          p[l = a[r]] = J([n[l], c[h[l]], c[l], u[l]], f, t, g);
        }
        return g.cacheable && (i._cachedDataOpts = Object.freeze(p)), p;
      },
      removeHoverStyle: function removeHoverStyle(e) {
        W.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle;
      },
      setHoverStyle: function setHoverStyle(e) {
        var t = this.chart.data.datasets[e._datasetIndex],
            i = e._index,
            n = e.custom || {},
            o = e._model,
            a = W.getHoverColor;
        e.$previousStyle = {
          backgroundColor: o.backgroundColor,
          borderColor: o.borderColor,
          borderWidth: o.borderWidth
        }, o.backgroundColor = J([n.hoverBackgroundColor, t.hoverBackgroundColor, a(o.backgroundColor)], void 0, i), o.borderColor = J([n.hoverBorderColor, t.hoverBorderColor, a(o.borderColor)], void 0, i), o.borderWidth = J([n.hoverBorderWidth, t.hoverBorderWidth, o.borderWidth], void 0, i);
      },
      _removeDatasetHoverStyle: function _removeDatasetHoverStyle() {
        var e = this.getMeta().dataset;
        e && this.removeHoverStyle(e);
      },
      _setDatasetHoverStyle: function _setDatasetHoverStyle() {
        var e,
            t,
            i,
            n,
            o,
            a,
            r = this.getMeta().dataset,
            s = {};

        if (r) {
          for (a = r._model, o = this._resolveDatasetElementOptions(r, !0), e = 0, t = (n = Object.keys(o)).length; e < t; ++e) {
            s[i = n[e]] = a[i], a[i] = o[i];
          }

          r.$previousStyle = s;
        }
      },
      resyncElements: function resyncElements() {
        var e = this.getMeta(),
            t = this.getDataset().data,
            i = e.data.length,
            n = t.length;
        n < i ? e.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
      },
      insertElements: function insertElements(e, t) {
        for (var i = 0; i < t; ++i) {
          this.addElementAndReset(e + i);
        }
      },
      onDataPush: function onDataPush() {
        var e = arguments.length;
        this.insertElements(this.getDataset().data.length - e, e);
      },
      onDataPop: function onDataPop() {
        this.getMeta().data.pop();
      },
      onDataShift: function onDataShift() {
        this.getMeta().data.shift();
      },
      onDataSplice: function onDataSplice(e, t) {
        this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2);
      },
      onDataUnshift: function onDataUnshift() {
        this.insertElements(0, arguments.length);
      }
    }), ie.extend = W.inherits;
    var ne = ie,
        oe = 2 * Math.PI;

    function ae(e, t) {
      var i = t.startAngle,
          n = t.endAngle,
          o = t.pixelMargin,
          a = o / t.outerRadius,
          r = t.x,
          s = t.y;
      e.beginPath(), e.arc(r, s, t.outerRadius, i - a, n + a), t.innerRadius > o ? (a = o / t.innerRadius, e.arc(r, s, t.innerRadius - o, n + a, i - a, !0)) : e.arc(r, s, o, n + Math.PI / 2, i - Math.PI / 2), e.closePath(), e.clip();
    }

    function re(e, t, i) {
      var n = "inner" === t.borderAlign;
      n ? (e.lineWidth = 2 * t.borderWidth, e.lineJoin = "round") : (e.lineWidth = t.borderWidth, e.lineJoin = "bevel"), i.fullCircles && function (e, t, i, n) {
        var o,
            a = i.endAngle;

        for (n && (i.endAngle = i.startAngle + oe, ae(e, i), i.endAngle = a, i.endAngle === i.startAngle && i.fullCircles && (i.endAngle += oe, i.fullCircles--)), e.beginPath(), e.arc(i.x, i.y, i.innerRadius, i.startAngle + oe, i.startAngle, !0), o = 0; o < i.fullCircles; ++o) {
          e.stroke();
        }

        for (e.beginPath(), e.arc(i.x, i.y, t.outerRadius, i.startAngle, i.startAngle + oe), o = 0; o < i.fullCircles; ++o) {
          e.stroke();
        }
      }(e, t, i, n), n && ae(e, i), e.beginPath(), e.arc(i.x, i.y, t.outerRadius, i.startAngle, i.endAngle), e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), e.closePath(), e.stroke();
    }

    E._set("global", {
      elements: {
        arc: {
          backgroundColor: E.global.defaultColor,
          borderColor: "#fff",
          borderWidth: 2,
          borderAlign: "center"
        }
      }
    });

    var se = X.extend({
      _type: "arc",
      inLabelRange: function inLabelRange(e) {
        var t = this._view;
        return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2);
      },
      inRange: function inRange(e, t) {
        var i = this._view;

        if (i) {
          for (var n = W.getAngleFromPoint(i, {
            x: e,
            y: t
          }), o = n.angle, a = n.distance, r = i.startAngle, s = i.endAngle; s < r;) {
            s += oe;
          }

          for (; o > s;) {
            o -= oe;
          }

          for (; o < r;) {
            o += oe;
          }

          var l = o >= r && o <= s,
              d = a >= i.innerRadius && a <= i.outerRadius;
          return l && d;
        }

        return !1;
      },
      getCenterPoint: function getCenterPoint() {
        var e = this._view,
            t = (e.startAngle + e.endAngle) / 2,
            i = (e.innerRadius + e.outerRadius) / 2;
        return {
          x: e.x + Math.cos(t) * i,
          y: e.y + Math.sin(t) * i
        };
      },
      getArea: function getArea() {
        var e = this._view;
        return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2));
      },
      tooltipPosition: function tooltipPosition() {
        var e = this._view,
            t = e.startAngle + (e.endAngle - e.startAngle) / 2,
            i = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
        return {
          x: e.x + Math.cos(t) * i,
          y: e.y + Math.sin(t) * i
        };
      },
      draw: function draw() {
        var e,
            t = this._chart.ctx,
            i = this._view,
            n = "inner" === i.borderAlign ? .33 : 0,
            o = {
          x: i.x,
          y: i.y,
          innerRadius: i.innerRadius,
          outerRadius: Math.max(i.outerRadius - n, 0),
          pixelMargin: n,
          startAngle: i.startAngle,
          endAngle: i.endAngle,
          fullCircles: Math.floor(i.circumference / oe)
        };

        if (t.save(), t.fillStyle = i.backgroundColor, t.strokeStyle = i.borderColor, o.fullCircles) {
          for (o.endAngle = o.startAngle + oe, t.beginPath(), t.arc(o.x, o.y, o.outerRadius, o.startAngle, o.endAngle), t.arc(o.x, o.y, o.innerRadius, o.endAngle, o.startAngle, !0), t.closePath(), e = 0; e < o.fullCircles; ++e) {
            t.fill();
          }

          o.endAngle = o.startAngle + i.circumference % oe;
        }

        t.beginPath(), t.arc(o.x, o.y, o.outerRadius, o.startAngle, o.endAngle), t.arc(o.x, o.y, o.innerRadius, o.endAngle, o.startAngle, !0), t.closePath(), t.fill(), i.borderWidth && re(t, i, o), t.restore();
      }
    }),
        le = W.valueOrDefault,
        de = E.global.defaultColor;

    E._set("global", {
      elements: {
        line: {
          tension: .4,
          backgroundColor: de,
          borderWidth: 3,
          borderColor: de,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          capBezierPoints: !0,
          fill: !0
        }
      }
    });

    var ce = X.extend({
      _type: "line",
      draw: function draw() {
        var e,
            t,
            i,
            n = this,
            o = n._view,
            a = n._chart.ctx,
            r = o.spanGaps,
            s = n._children.slice(),
            l = E.global,
            d = l.elements.line,
            c = -1,
            u = n._loop;

        if (s.length) {
          if (n._loop) {
            for (e = 0; e < s.length; ++e) {
              if (t = W.previousItem(s, e), !s[e]._view.skip && t._view.skip) {
                s = s.slice(e).concat(s.slice(0, e)), u = r;
                break;
              }
            }

            u && s.push(s[0]);
          }

          for (a.save(), a.lineCap = o.borderCapStyle || d.borderCapStyle, a.setLineDash && a.setLineDash(o.borderDash || d.borderDash), a.lineDashOffset = le(o.borderDashOffset, d.borderDashOffset), a.lineJoin = o.borderJoinStyle || d.borderJoinStyle, a.lineWidth = le(o.borderWidth, d.borderWidth), a.strokeStyle = o.borderColor || l.defaultColor, a.beginPath(), (i = s[0]._view).skip || (a.moveTo(i.x, i.y), c = 0), e = 1; e < s.length; ++e) {
            i = s[e]._view, t = -1 === c ? W.previousItem(s, e) : s[c], i.skip || (c !== e - 1 && !r || -1 === c ? a.moveTo(i.x, i.y) : W.canvas.lineTo(a, t._view, i), c = e);
          }

          u && a.closePath(), a.stroke(), a.restore();
        }
      }
    }),
        ue = W.valueOrDefault,
        he = E.global.defaultColor;

    function pe(e) {
      var t = this._view;
      return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius;
    }

    E._set("global", {
      elements: {
        point: {
          radius: 3,
          pointStyle: "circle",
          backgroundColor: he,
          borderColor: he,
          borderWidth: 1,
          hitRadius: 1,
          hoverRadius: 4,
          hoverBorderWidth: 1
        }
      }
    });

    var fe = X.extend({
      _type: "point",
      inRange: function inRange(e, t) {
        var i = this._view;
        return !!i && Math.pow(e - i.x, 2) + Math.pow(t - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
      },
      inLabelRange: pe,
      inXRange: pe,
      inYRange: function inYRange(e) {
        var t = this._view;
        return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius;
      },
      getCenterPoint: function getCenterPoint() {
        var e = this._view;
        return {
          x: e.x,
          y: e.y
        };
      },
      getArea: function getArea() {
        return Math.PI * Math.pow(this._view.radius, 2);
      },
      tooltipPosition: function tooltipPosition() {
        var e = this._view;
        return {
          x: e.x,
          y: e.y,
          padding: e.radius + e.borderWidth
        };
      },
      draw: function draw(e) {
        var t = this._view,
            i = this._chart.ctx,
            n = t.pointStyle,
            o = t.rotation,
            a = t.radius,
            r = t.x,
            s = t.y,
            l = E.global,
            d = l.defaultColor;
        t.skip || (void 0 === e || W.canvas._isPointInArea(t, e)) && (i.strokeStyle = t.borderColor || d, i.lineWidth = ue(t.borderWidth, l.elements.point.borderWidth), i.fillStyle = t.backgroundColor || d, W.canvas.drawPoint(i, n, a, r, s, o));
      }
    }),
        ge = E.global.defaultColor;

    function me(e) {
      return e && void 0 !== e.width;
    }

    function ve(e) {
      var t, i, n, o, a;
      return me(e) ? (a = e.width / 2, t = e.x - a, i = e.x + a, n = Math.min(e.y, e.base), o = Math.max(e.y, e.base)) : (a = e.height / 2, t = Math.min(e.x, e.base), i = Math.max(e.x, e.base), n = e.y - a, o = e.y + a), {
        left: t,
        top: n,
        right: i,
        bottom: o
      };
    }

    function be(e, t, i) {
      return e === t ? i : e === i ? t : e;
    }

    function ye(e, t, i) {
      var n,
          o,
          a,
          r,
          s = e.borderWidth,
          l = function (e) {
        var t = e.borderSkipped,
            i = {};
        return t ? (e.horizontal ? e.base > e.x && (t = be(t, "left", "right")) : e.base < e.y && (t = be(t, "bottom", "top")), i[t] = !0, i) : i;
      }(e);

      return W.isObject(s) ? (n = +s.top || 0, o = +s.right || 0, a = +s.bottom || 0, r = +s.left || 0) : n = o = a = r = +s || 0, {
        t: l.top || n < 0 ? 0 : n > i ? i : n,
        r: l.right || o < 0 ? 0 : o > t ? t : o,
        b: l.bottom || a < 0 ? 0 : a > i ? i : a,
        l: l.left || r < 0 ? 0 : r > t ? t : r
      };
    }

    function xe(e, t, i) {
      var n = null === t,
          o = null === i,
          a = !(!e || n && o) && ve(e);
      return a && (n || t >= a.left && t <= a.right) && (o || i >= a.top && i <= a.bottom);
    }

    E._set("global", {
      elements: {
        rectangle: {
          backgroundColor: ge,
          borderColor: ge,
          borderSkipped: "bottom",
          borderWidth: 0
        }
      }
    });

    var we = X.extend({
      _type: "rectangle",
      draw: function draw() {
        var e = this._chart.ctx,
            t = this._view,
            i = function (e) {
          var t = ve(e),
              i = t.right - t.left,
              n = t.bottom - t.top,
              o = ye(e, i / 2, n / 2);
          return {
            outer: {
              x: t.left,
              y: t.top,
              w: i,
              h: n
            },
            inner: {
              x: t.left + o.l,
              y: t.top + o.t,
              w: i - o.l - o.r,
              h: n - o.t - o.b
            }
          };
        }(t),
            n = i.outer,
            o = i.inner;

        e.fillStyle = t.backgroundColor, e.fillRect(n.x, n.y, n.w, n.h), n.w === o.w && n.h === o.h || (e.save(), e.beginPath(), e.rect(n.x, n.y, n.w, n.h), e.clip(), e.fillStyle = t.borderColor, e.rect(o.x, o.y, o.w, o.h), e.fill("evenodd"), e.restore());
      },
      height: function height() {
        var e = this._view;
        return e.base - e.y;
      },
      inRange: function inRange(e, t) {
        return xe(this._view, e, t);
      },
      inLabelRange: function inLabelRange(e, t) {
        var i = this._view;
        return me(i) ? xe(i, e, null) : xe(i, null, t);
      },
      inXRange: function inXRange(e) {
        return xe(this._view, e, null);
      },
      inYRange: function inYRange(e) {
        return xe(this._view, null, e);
      },
      getCenterPoint: function getCenterPoint() {
        var e,
            t,
            i = this._view;
        return me(i) ? (e = i.x, t = (i.y + i.base) / 2) : (e = (i.x + i.base) / 2, t = i.y), {
          x: e,
          y: t
        };
      },
      getArea: function getArea() {
        var e = this._view;
        return me(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base);
      },
      tooltipPosition: function tooltipPosition() {
        var e = this._view;
        return {
          x: e.x,
          y: e.y
        };
      }
    }),
        ke = {},
        Te = se,
        Se = ce,
        _e = fe,
        Ce = we;
    ke.Arc = Te, ke.Line = Se, ke.Point = _e, ke.Rectangle = Ce;
    var Me = W._deprecated,
        De = W.valueOrDefault;

    function Ae(e, t, i) {
      var n,
          o,
          a = i.barThickness,
          r = t.stackCount,
          s = t.pixels[e],
          l = W.isNullOrUndef(a) ? function (e, t) {
        var i,
            n,
            o,
            a,
            r = e._length;

        for (o = 1, a = t.length; o < a; ++o) {
          r = Math.min(r, Math.abs(t[o] - t[o - 1]));
        }

        for (o = 0, a = e.getTicks().length; o < a; ++o) {
          n = e.getPixelForTick(o), r = o > 0 ? Math.min(r, Math.abs(n - i)) : r, i = n;
        }

        return r;
      }(t.scale, t.pixels) : -1;
      return W.isNullOrUndef(a) ? (n = l * i.categoryPercentage, o = i.barPercentage) : (n = a * r, o = 1), {
        chunk: n / r,
        ratio: o,
        start: s - n / 2
      };
    }

    E._set("bar", {
      hover: {
        mode: "label"
      },
      scales: {
        xAxes: [{
          type: "category",
          offset: !0,
          gridLines: {
            offsetGridLines: !0
          }
        }],
        yAxes: [{
          type: "linear"
        }]
      }
    }), E._set("global", {
      datasets: {
        bar: {
          categoryPercentage: .8,
          barPercentage: .9
        }
      }
    });
    var Pe = ne.extend({
      dataElementType: ke.Rectangle,
      _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
      initialize: function initialize() {
        var e,
            t,
            i = this;
        ne.prototype.initialize.apply(i, arguments), (e = i.getMeta()).stack = i.getDataset().stack, e.bar = !0, t = i._getIndexScale().options, Me("bar chart", t.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Me("bar chart", t.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Me("bar chart", t.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Me("bar chart", i._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Me("bar chart", t.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness");
      },
      update: function update(e) {
        var t,
            i,
            n = this.getMeta().data;

        for (this._ruler = this.getRuler(), t = 0, i = n.length; t < i; ++t) {
          this.updateElement(n[t], t, e);
        }
      },
      updateElement: function updateElement(e, t, i) {
        var n = this,
            o = n.getMeta(),
            a = n.getDataset(),
            r = n._resolveDataElementOptions(e, t);

        e._xScale = n.getScaleForId(o.xAxisID), e._yScale = n.getScaleForId(o.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
          backgroundColor: r.backgroundColor,
          borderColor: r.borderColor,
          borderSkipped: r.borderSkipped,
          borderWidth: r.borderWidth,
          datasetLabel: a.label,
          label: n.chart.data.labels[t]
        }, W.isArray(a.data[t]) && (e._model.borderSkipped = null), n._updateElementGeometry(e, t, i, r), e.pivot();
      },
      _updateElementGeometry: function _updateElementGeometry(e, t, i, n) {
        var o = this,
            a = e._model,
            r = o._getValueScale(),
            s = r.getBasePixel(),
            l = r.isHorizontal(),
            d = o._ruler || o.getRuler(),
            c = o.calculateBarValuePixels(o.index, t, n),
            u = o.calculateBarIndexPixels(o.index, t, d, n);

        a.horizontal = l, a.base = i ? s : c.base, a.x = l ? i ? s : c.head : u.center, a.y = l ? u.center : i ? s : c.head, a.height = l ? u.size : void 0, a.width = l ? void 0 : u.size;
      },
      _getStacks: function _getStacks(e) {
        var t,
            i,
            n = this._getIndexScale(),
            o = n._getMatchingVisibleMetas(this._type),
            a = n.options.stacked,
            r = o.length,
            s = [];

        for (t = 0; t < r && (i = o[t], (!1 === a || -1 === s.indexOf(i.stack) || void 0 === a && void 0 === i.stack) && s.push(i.stack), i.index !== e); ++t) {
          ;
        }

        return s;
      },
      getStackCount: function getStackCount() {
        return this._getStacks().length;
      },
      getStackIndex: function getStackIndex(e, t) {
        var i = this._getStacks(e),
            n = void 0 !== t ? i.indexOf(t) : -1;

        return -1 === n ? i.length - 1 : n;
      },
      getRuler: function getRuler() {
        var e,
            t,
            i = this._getIndexScale(),
            n = [];

        for (e = 0, t = this.getMeta().data.length; e < t; ++e) {
          n.push(i.getPixelForValue(null, e, this.index));
        }

        return {
          pixels: n,
          start: i._startPixel,
          end: i._endPixel,
          stackCount: this.getStackCount(),
          scale: i
        };
      },
      calculateBarValuePixels: function calculateBarValuePixels(e, t, i) {
        var n,
            o,
            a,
            r,
            s,
            l,
            d,
            c = this.chart,
            u = this._getValueScale(),
            h = u.isHorizontal(),
            p = c.data.datasets,
            f = u._getMatchingVisibleMetas(this._type),
            g = u._parseValue(p[e].data[t]),
            m = i.minBarLength,
            v = u.options.stacked,
            b = this.getMeta().stack,
            y = void 0 === g.start ? 0 : g.max >= 0 && g.min >= 0 ? g.min : g.max,
            x = void 0 === g.start ? g.end : g.max >= 0 && g.min >= 0 ? g.max - g.min : g.min - g.max,
            w = f.length;

        if (v || void 0 === v && void 0 !== b) for (n = 0; n < w && (o = f[n]).index !== e; ++n) {
          o.stack === b && (a = void 0 === (d = u._parseValue(p[o.index].data[t])).start ? d.end : d.min >= 0 && d.max >= 0 ? d.max : d.min, (g.min < 0 && a < 0 || g.max >= 0 && a > 0) && (y += a));
        }
        return r = u.getPixelForValue(y), l = (s = u.getPixelForValue(y + x)) - r, void 0 !== m && Math.abs(l) < m && (l = m, s = x >= 0 && !h || x < 0 && h ? r - m : r + m), {
          size: l,
          base: r,
          head: s,
          center: s + l / 2
        };
      },
      calculateBarIndexPixels: function calculateBarIndexPixels(e, t, i, n) {
        var o = "flex" === n.barThickness ? function (e, t, i) {
          var n,
              o = t.pixels,
              a = o[e],
              r = e > 0 ? o[e - 1] : null,
              s = e < o.length - 1 ? o[e + 1] : null,
              l = i.categoryPercentage;
          return null === r && (r = a - (null === s ? t.end - t.start : s - a)), null === s && (s = a + a - r), n = a - (a - Math.min(r, s)) / 2 * l, {
            chunk: Math.abs(s - r) / 2 * l / t.stackCount,
            ratio: i.barPercentage,
            start: n
          };
        }(t, i, n) : Ae(t, i, n),
            a = this.getStackIndex(e, this.getMeta().stack),
            r = o.start + o.chunk * a + o.chunk / 2,
            s = Math.min(De(n.maxBarThickness, 1 / 0), o.chunk * o.ratio);
        return {
          base: r - s / 2,
          head: r + s / 2,
          center: r,
          size: s
        };
      },
      draw: function draw() {
        var e = this.chart,
            t = this._getValueScale(),
            i = this.getMeta().data,
            n = this.getDataset(),
            o = i.length,
            a = 0;

        for (W.canvas.clipArea(e.ctx, e.chartArea); a < o; ++a) {
          var r = t._parseValue(n.data[a]);

          isNaN(r.min) || isNaN(r.max) || i[a].draw();
        }

        W.canvas.unclipArea(e.ctx);
      },
      _resolveDataElementOptions: function _resolveDataElementOptions() {
        var e = this,
            t = W.extend({}, ne.prototype._resolveDataElementOptions.apply(e, arguments)),
            i = e._getIndexScale().options,
            n = e._getValueScale().options;

        return t.barPercentage = De(i.barPercentage, t.barPercentage), t.barThickness = De(i.barThickness, t.barThickness), t.categoryPercentage = De(i.categoryPercentage, t.categoryPercentage), t.maxBarThickness = De(i.maxBarThickness, t.maxBarThickness), t.minBarLength = De(n.minBarLength, t.minBarLength), t;
      }
    }),
        $e = W.valueOrDefault,
        Oe = W.options.resolve;

    E._set("bubble", {
      hover: {
        mode: "single"
      },
      scales: {
        xAxes: [{
          type: "linear",
          position: "bottom",
          id: "x-axis-0"
        }],
        yAxes: [{
          type: "linear",
          position: "left",
          id: "y-axis-0"
        }]
      },
      tooltips: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(e, t) {
            var i = t.datasets[e.datasetIndex].label || "",
                n = t.datasets[e.datasetIndex].data[e.index];
            return i + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")";
          }
        }
      }
    });

    var Ie = ne.extend({
      dataElementType: ke.Point,
      _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
      update: function update(e) {
        var t = this,
            i = t.getMeta().data;
        W.each(i, function (i, n) {
          t.updateElement(i, n, e);
        });
      },
      updateElement: function updateElement(e, t, i) {
        var n = this,
            o = n.getMeta(),
            a = e.custom || {},
            r = n.getScaleForId(o.xAxisID),
            s = n.getScaleForId(o.yAxisID),
            l = n._resolveDataElementOptions(e, t),
            d = n.getDataset().data[t],
            c = n.index,
            u = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == _typeof(d) ? d : NaN, t, c),
            h = i ? s.getBasePixel() : s.getPixelForValue(d, t, c);

        e._xScale = r, e._yScale = s, e._options = l, e._datasetIndex = c, e._index = t, e._model = {
          backgroundColor: l.backgroundColor,
          borderColor: l.borderColor,
          borderWidth: l.borderWidth,
          hitRadius: l.hitRadius,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          radius: i ? 0 : l.radius,
          skip: a.skip || isNaN(u) || isNaN(h),
          x: u,
          y: h
        }, e.pivot();
      },
      setHoverStyle: function setHoverStyle(e) {
        var t = e._model,
            i = e._options,
            n = W.getHoverColor;
        e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
          radius: t.radius
        }, t.backgroundColor = $e(i.hoverBackgroundColor, n(i.backgroundColor)), t.borderColor = $e(i.hoverBorderColor, n(i.borderColor)), t.borderWidth = $e(i.hoverBorderWidth, i.borderWidth), t.radius = i.radius + i.hoverRadius;
      },
      _resolveDataElementOptions: function _resolveDataElementOptions(e, t) {
        var i = this,
            n = i.chart,
            o = i.getDataset(),
            a = e.custom || {},
            r = o.data[t] || {},
            s = ne.prototype._resolveDataElementOptions.apply(i, arguments),
            l = {
          chart: n,
          dataIndex: t,
          dataset: o,
          datasetIndex: i.index
        };

        return i._cachedDataOpts === s && (s = W.extend({}, s)), s.radius = Oe([a.radius, r.r, i._config.radius, n.options.elements.point.radius], l, t), s;
      }
    }),
        Le = W.valueOrDefault,
        Fe = Math.PI,
        ze = 2 * Fe,
        Ee = Fe / 2;

    E._set("doughnut", {
      animation: {
        animateRotate: !0,
        animateScale: !1
      },
      hover: {
        mode: "single"
      },
      legendCallback: function legendCallback(e) {
        var t,
            i,
            n,
            o = document.createElement("ul"),
            a = e.data,
            r = a.datasets,
            s = a.labels;
        if (o.setAttribute("class", e.id + "-legend"), r.length) for (t = 0, i = r[0].data.length; t < i; ++t) {
          (n = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[0].backgroundColor[t], s[t] && n.appendChild(document.createTextNode(s[t]));
        }
        return o.outerHTML;
      },
      legend: {
        labels: {
          generateLabels: function generateLabels(e) {
            var t = e.data;
            return t.labels.length && t.datasets.length ? t.labels.map(function (i, n) {
              var o = e.getDatasetMeta(0),
                  a = o.controller.getStyle(n);
              return {
                text: i,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                lineWidth: a.borderWidth,
                hidden: isNaN(t.datasets[0].data[n]) || o.data[n].hidden,
                index: n
              };
            }) : [];
          }
        },
        onClick: function onClick(e, t) {
          var i,
              n,
              o,
              a = t.index,
              r = this.chart;

          for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) {
            (o = r.getDatasetMeta(i)).data[a] && (o.data[a].hidden = !o.data[a].hidden);
          }

          r.update();
        }
      },
      cutoutPercentage: 50,
      rotation: -Ee,
      circumference: ze,
      tooltips: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(e, t) {
            var i = t.labels[e.index],
                n = ": " + t.datasets[e.datasetIndex].data[e.index];
            return W.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
          }
        }
      }
    });

    var Re = ne.extend({
      dataElementType: ke.Arc,
      linkScales: W.noop,
      _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
      getRingIndex: function getRingIndex(e) {
        for (var t = 0, i = 0; i < e; ++i) {
          this.chart.isDatasetVisible(i) && ++t;
        }

        return t;
      },
      update: function update(e) {
        var t,
            i,
            n,
            o,
            a = this,
            r = a.chart,
            s = r.chartArea,
            l = r.options,
            d = 1,
            c = 1,
            u = 0,
            h = 0,
            p = a.getMeta(),
            f = p.data,
            g = l.cutoutPercentage / 100 || 0,
            m = l.circumference,
            v = a._getRingWeight(a.index);

        if (m < ze) {
          var b = l.rotation % ze,
              y = (b += b >= Fe ? -ze : b < -Fe ? ze : 0) + m,
              x = Math.cos(b),
              w = Math.sin(b),
              k = Math.cos(y),
              T = Math.sin(y),
              S = b <= 0 && y >= 0 || y >= ze,
              _ = b <= Ee && y >= Ee || y >= ze + Ee,
              C = b <= -Ee && y >= -Ee || y >= Fe + Ee,
              M = b === -Fe || y >= Fe ? -1 : Math.min(x, x * g, k, k * g),
              D = C ? -1 : Math.min(w, w * g, T, T * g),
              A = S ? 1 : Math.max(x, x * g, k, k * g),
              P = _ ? 1 : Math.max(w, w * g, T, T * g);

          d = (A - M) / 2, c = (P - D) / 2, u = -(A + M) / 2, h = -(P + D) / 2;
        }

        for (n = 0, o = f.length; n < o; ++n) {
          f[n]._options = a._resolveDataElementOptions(f[n], n);
        }

        for (r.borderWidth = a.getMaxBorderWidth(), t = (s.right - s.left - r.borderWidth) / d, i = (s.bottom - s.top - r.borderWidth) / c, r.outerRadius = Math.max(Math.min(t, i) / 2, 0), r.innerRadius = Math.max(r.outerRadius * g, 0), r.radiusLength = (r.outerRadius - r.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), r.offsetX = u * r.outerRadius, r.offsetY = h * r.outerRadius, p.total = a.calculateTotal(), a.outerRadius = r.outerRadius - r.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - r.radiusLength * v, 0), n = 0, o = f.length; n < o; ++n) {
          a.updateElement(f[n], n, e);
        }
      },
      updateElement: function updateElement(e, t, i) {
        var n = this,
            o = n.chart,
            a = o.chartArea,
            r = o.options,
            s = r.animation,
            l = (a.left + a.right) / 2,
            d = (a.top + a.bottom) / 2,
            c = r.rotation,
            u = r.rotation,
            h = n.getDataset(),
            p = i && s.animateRotate || e.hidden ? 0 : n.calculateCircumference(h.data[t]) * (r.circumference / ze),
            f = i && s.animateScale ? 0 : n.innerRadius,
            g = i && s.animateScale ? 0 : n.outerRadius,
            m = e._options || {};
        W.extend(e, {
          _datasetIndex: n.index,
          _index: t,
          _model: {
            backgroundColor: m.backgroundColor,
            borderColor: m.borderColor,
            borderWidth: m.borderWidth,
            borderAlign: m.borderAlign,
            x: l + o.offsetX,
            y: d + o.offsetY,
            startAngle: c,
            endAngle: u,
            circumference: p,
            outerRadius: g,
            innerRadius: f,
            label: W.valueAtIndexOrDefault(h.label, t, o.data.labels[t])
          }
        });
        var v = e._model;
        i && s.animateRotate || (v.startAngle = 0 === t ? r.rotation : n.getMeta().data[t - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), e.pivot();
      },
      calculateTotal: function calculateTotal() {
        var e,
            t = this.getDataset(),
            i = this.getMeta(),
            n = 0;
        return W.each(i.data, function (i, o) {
          e = t.data[o], isNaN(e) || i.hidden || (n += Math.abs(e));
        }), n;
      },
      calculateCircumference: function calculateCircumference(e) {
        var t = this.getMeta().total;
        return t > 0 && !isNaN(e) ? ze * (Math.abs(e) / t) : 0;
      },
      getMaxBorderWidth: function getMaxBorderWidth(e) {
        var t,
            i,
            n,
            o,
            a,
            r,
            s,
            l,
            d = 0,
            c = this.chart;
        if (!e) for (t = 0, i = c.data.datasets.length; t < i; ++t) {
          if (c.isDatasetVisible(t)) {
            e = (n = c.getDatasetMeta(t)).data, t !== this.index && (a = n.controller);
            break;
          }
        }
        if (!e) return 0;

        for (t = 0, i = e.length; t < i; ++t) {
          o = e[t], a ? (a._configure(), r = a._resolveDataElementOptions(o, t)) : r = o._options, "inner" !== r.borderAlign && (s = r.borderWidth, d = (l = r.hoverBorderWidth) > (d = s > d ? s : d) ? l : d);
        }

        return d;
      },
      setHoverStyle: function setHoverStyle(e) {
        var t = e._model,
            i = e._options,
            n = W.getHoverColor;
        e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth
        }, t.backgroundColor = Le(i.hoverBackgroundColor, n(i.backgroundColor)), t.borderColor = Le(i.hoverBorderColor, n(i.borderColor)), t.borderWidth = Le(i.hoverBorderWidth, i.borderWidth);
      },
      _getRingWeightOffset: function _getRingWeightOffset(e) {
        for (var t = 0, i = 0; i < e; ++i) {
          this.chart.isDatasetVisible(i) && (t += this._getRingWeight(i));
        }

        return t;
      },
      _getRingWeight: function _getRingWeight(e) {
        return Math.max(Le(this.chart.data.datasets[e].weight, 1), 0);
      },
      _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length);
      }
    });
    E._set("horizontalBar", {
      hover: {
        mode: "index",
        axis: "y"
      },
      scales: {
        xAxes: [{
          type: "linear",
          position: "bottom"
        }],
        yAxes: [{
          type: "category",
          position: "left",
          offset: !0,
          gridLines: {
            offsetGridLines: !0
          }
        }]
      },
      elements: {
        rectangle: {
          borderSkipped: "left"
        }
      },
      tooltips: {
        mode: "index",
        axis: "y"
      }
    }), E._set("global", {
      datasets: {
        horizontalBar: {
          categoryPercentage: .8,
          barPercentage: .9
        }
      }
    });
    var Be = Pe.extend({
      _getValueScaleId: function _getValueScaleId() {
        return this.getMeta().xAxisID;
      },
      _getIndexScaleId: function _getIndexScaleId() {
        return this.getMeta().yAxisID;
      }
    }),
        Ne = W.valueOrDefault,
        He = W.options.resolve,
        We = W.canvas._isPointInArea;

    function je(e, t) {
      var i = e && e.options.ticks || {},
          n = i.reverse,
          o = void 0 === i.min ? t : 0,
          a = void 0 === i.max ? t : 0;
      return {
        start: n ? a : o,
        end: n ? o : a
      };
    }

    function Ve(e, t, i) {
      var n = i / 2,
          o = je(e, n),
          a = je(t, n);
      return {
        top: a.end,
        right: o.end,
        bottom: a.start,
        left: o.start
      };
    }

    function qe(e) {
      var t, i, n, o;
      return W.isObject(e) ? (t = e.top, i = e.right, n = e.bottom, o = e.left) : t = i = n = o = e, {
        top: t,
        right: i,
        bottom: n,
        left: o
      };
    }

    E._set("line", {
      showLines: !0,
      spanGaps: !1,
      hover: {
        mode: "label"
      },
      scales: {
        xAxes: [{
          type: "category",
          id: "x-axis-0"
        }],
        yAxes: [{
          type: "linear",
          id: "y-axis-0"
        }]
      }
    });

    var Ue = ne.extend({
      datasetElementType: ke.Line,
      dataElementType: ke.Point,
      _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
      _dataElementOptions: {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation"
      },
      update: function update(e) {
        var t,
            i,
            n = this,
            o = n.getMeta(),
            a = o.dataset,
            r = o.data || [],
            s = n.chart.options,
            l = n._config,
            d = n._showLine = Ne(l.showLine, s.showLines);

        for (n._xScale = n.getScaleForId(o.xAxisID), n._yScale = n.getScaleForId(o.yAxisID), d && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), a._scale = n._yScale, a._datasetIndex = n.index, a._children = r, a._model = n._resolveDatasetElementOptions(a), a.pivot()), t = 0, i = r.length; t < i; ++t) {
          n.updateElement(r[t], t, e);
        }

        for (d && 0 !== a._model.tension && n.updateBezierControlPoints(), t = 0, i = r.length; t < i; ++t) {
          r[t].pivot();
        }
      },
      updateElement: function updateElement(e, t, i) {
        var n,
            o,
            a = this,
            r = a.getMeta(),
            s = e.custom || {},
            l = a.getDataset(),
            d = a.index,
            c = l.data[t],
            u = a._xScale,
            h = a._yScale,
            p = r.dataset._model,
            f = a._resolveDataElementOptions(e, t);

        n = u.getPixelForValue("object" == _typeof(c) ? c : NaN, t, d), o = i ? h.getBasePixel() : a.calculatePointY(c, t, d), e._xScale = u, e._yScale = h, e._options = f, e._datasetIndex = d, e._index = t, e._model = {
          x: n,
          y: o,
          skip: s.skip || isNaN(n) || isNaN(o),
          radius: f.radius,
          pointStyle: f.pointStyle,
          rotation: f.rotation,
          backgroundColor: f.backgroundColor,
          borderColor: f.borderColor,
          borderWidth: f.borderWidth,
          tension: Ne(s.tension, p ? p.tension : 0),
          steppedLine: !!p && p.steppedLine,
          hitRadius: f.hitRadius
        };
      },
      _resolveDatasetElementOptions: function _resolveDatasetElementOptions(e) {
        var t = this,
            i = t._config,
            n = e.custom || {},
            o = t.chart.options,
            a = o.elements.line,
            r = ne.prototype._resolveDatasetElementOptions.apply(t, arguments);

        return r.spanGaps = Ne(i.spanGaps, o.spanGaps), r.tension = Ne(i.lineTension, a.tension), r.steppedLine = He([n.steppedLine, i.steppedLine, a.stepped]), r.clip = qe(Ne(i.clip, Ve(t._xScale, t._yScale, r.borderWidth))), r;
      },
      calculatePointY: function calculatePointY(e, t, i) {
        var n,
            o,
            a,
            r,
            s,
            l,
            d,
            c = this.chart,
            u = this._yScale,
            h = 0,
            p = 0;

        if (u.options.stacked) {
          for (s = +u.getRightValue(e), d = (l = c._getSortedVisibleDatasetMetas()).length, n = 0; n < d && (a = l[n]).index !== i; ++n) {
            o = c.data.datasets[a.index], "line" === a.type && a.yAxisID === u.id && ((r = +u.getRightValue(o.data[t])) < 0 ? p += r || 0 : h += r || 0);
          }

          return s < 0 ? u.getPixelForValue(p + s) : u.getPixelForValue(h + s);
        }

        return u.getPixelForValue(e);
      },
      updateBezierControlPoints: function updateBezierControlPoints() {
        var e,
            t,
            i,
            n,
            o = this.chart,
            a = this.getMeta(),
            r = a.dataset._model,
            s = o.chartArea,
            l = a.data || [];

        function d(e, t, i) {
          return Math.max(Math.min(e, i), t);
        }

        if (r.spanGaps && (l = l.filter(function (e) {
          return !e._model.skip;
        })), "monotone" === r.cubicInterpolationMode) W.splineCurveMonotone(l);else for (e = 0, t = l.length; e < t; ++e) {
          i = l[e]._model, n = W.splineCurve(W.previousItem(l, e)._model, i, W.nextItem(l, e)._model, r.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
        }
        if (o.options.elements.line.capBezierPoints) for (e = 0, t = l.length; e < t; ++e) {
          i = l[e]._model, We(i, s) && (e > 0 && We(l[e - 1]._model, s) && (i.controlPointPreviousX = d(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = d(i.controlPointPreviousY, s.top, s.bottom)), e < l.length - 1 && We(l[e + 1]._model, s) && (i.controlPointNextX = d(i.controlPointNextX, s.left, s.right), i.controlPointNextY = d(i.controlPointNextY, s.top, s.bottom)));
        }
      },
      draw: function draw() {
        var e,
            t = this.chart,
            i = this.getMeta(),
            n = i.data || [],
            o = t.chartArea,
            a = t.canvas,
            r = 0,
            s = n.length;

        for (this._showLine && (e = i.dataset._model.clip, W.canvas.clipArea(t.ctx, {
          left: !1 === e.left ? 0 : o.left - e.left,
          right: !1 === e.right ? a.width : o.right + e.right,
          top: !1 === e.top ? 0 : o.top - e.top,
          bottom: !1 === e.bottom ? a.height : o.bottom + e.bottom
        }), i.dataset.draw(), W.canvas.unclipArea(t.ctx)); r < s; ++r) {
          n[r].draw(o);
        }
      },
      setHoverStyle: function setHoverStyle(e) {
        var t = e._model,
            i = e._options,
            n = W.getHoverColor;
        e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
          radius: t.radius
        }, t.backgroundColor = Ne(i.hoverBackgroundColor, n(i.backgroundColor)), t.borderColor = Ne(i.hoverBorderColor, n(i.borderColor)), t.borderWidth = Ne(i.hoverBorderWidth, i.borderWidth), t.radius = Ne(i.hoverRadius, i.radius);
      }
    }),
        Ye = W.options.resolve;

    E._set("polarArea", {
      scale: {
        type: "radialLinear",
        angleLines: {
          display: !1
        },
        gridLines: {
          circular: !0
        },
        pointLabels: {
          display: !1
        },
        ticks: {
          beginAtZero: !0
        }
      },
      animation: {
        animateRotate: !0,
        animateScale: !0
      },
      startAngle: -.5 * Math.PI,
      legendCallback: function legendCallback(e) {
        var t,
            i,
            n,
            o = document.createElement("ul"),
            a = e.data,
            r = a.datasets,
            s = a.labels;
        if (o.setAttribute("class", e.id + "-legend"), r.length) for (t = 0, i = r[0].data.length; t < i; ++t) {
          (n = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[0].backgroundColor[t], s[t] && n.appendChild(document.createTextNode(s[t]));
        }
        return o.outerHTML;
      },
      legend: {
        labels: {
          generateLabels: function generateLabels(e) {
            var t = e.data;
            return t.labels.length && t.datasets.length ? t.labels.map(function (i, n) {
              var o = e.getDatasetMeta(0),
                  a = o.controller.getStyle(n);
              return {
                text: i,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                lineWidth: a.borderWidth,
                hidden: isNaN(t.datasets[0].data[n]) || o.data[n].hidden,
                index: n
              };
            }) : [];
          }
        },
        onClick: function onClick(e, t) {
          var i,
              n,
              o,
              a = t.index,
              r = this.chart;

          for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) {
            (o = r.getDatasetMeta(i)).data[a].hidden = !o.data[a].hidden;
          }

          r.update();
        }
      },
      tooltips: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(e, t) {
            return t.labels[e.index] + ": " + e.yLabel;
          }
        }
      }
    });

    var Ge = ne.extend({
      dataElementType: ke.Arc,
      linkScales: W.noop,
      _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
      _getIndexScaleId: function _getIndexScaleId() {
        return this.chart.scale.id;
      },
      _getValueScaleId: function _getValueScaleId() {
        return this.chart.scale.id;
      },
      update: function update(e) {
        var t,
            i,
            n,
            o = this,
            a = o.getDataset(),
            r = o.getMeta(),
            s = o.chart.options.startAngle || 0,
            l = o._starts = [],
            d = o._angles = [],
            c = r.data;

        for (o._updateRadius(), r.count = o.countVisibleElements(), t = 0, i = a.data.length; t < i; t++) {
          l[t] = s, n = o._computeAngle(t), d[t] = n, s += n;
        }

        for (t = 0, i = c.length; t < i; ++t) {
          c[t]._options = o._resolveDataElementOptions(c[t], t), o.updateElement(c[t], t, e);
        }
      },
      _updateRadius: function _updateRadius() {
        var e = this,
            t = e.chart,
            i = t.chartArea,
            n = t.options,
            o = Math.min(i.right - i.left, i.bottom - i.top);
        t.outerRadius = Math.max(o / 2, 0), t.innerRadius = Math.max(n.cutoutPercentage ? t.outerRadius / 100 * n.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength;
      },
      updateElement: function updateElement(e, t, i) {
        var n = this,
            o = n.chart,
            a = n.getDataset(),
            r = o.options,
            s = r.animation,
            l = o.scale,
            d = o.data.labels,
            c = l.xCenter,
            u = l.yCenter,
            h = r.startAngle,
            p = e.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[t]),
            f = n._starts[t],
            g = f + (e.hidden ? 0 : n._angles[t]),
            m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[t]),
            v = e._options || {};
        W.extend(e, {
          _datasetIndex: n.index,
          _index: t,
          _scale: l,
          _model: {
            backgroundColor: v.backgroundColor,
            borderColor: v.borderColor,
            borderWidth: v.borderWidth,
            borderAlign: v.borderAlign,
            x: c,
            y: u,
            innerRadius: 0,
            outerRadius: i ? m : p,
            startAngle: i && s.animateRotate ? h : f,
            endAngle: i && s.animateRotate ? h : g,
            label: W.valueAtIndexOrDefault(d, t, d[t])
          }
        }), e.pivot();
      },
      countVisibleElements: function countVisibleElements() {
        var e = this.getDataset(),
            t = this.getMeta(),
            i = 0;
        return W.each(t.data, function (t, n) {
          isNaN(e.data[n]) || t.hidden || i++;
        }), i;
      },
      setHoverStyle: function setHoverStyle(e) {
        var t = e._model,
            i = e._options,
            n = W.getHoverColor,
            o = W.valueOrDefault;
        e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth
        }, t.backgroundColor = o(i.hoverBackgroundColor, n(i.backgroundColor)), t.borderColor = o(i.hoverBorderColor, n(i.borderColor)), t.borderWidth = o(i.hoverBorderWidth, i.borderWidth);
      },
      _computeAngle: function _computeAngle(e) {
        var t = this,
            i = this.getMeta().count,
            n = t.getDataset(),
            o = t.getMeta();
        if (isNaN(n.data[e]) || o.data[e].hidden) return 0;
        var a = {
          chart: t.chart,
          dataIndex: e,
          dataset: n,
          datasetIndex: t.index
        };
        return Ye([t.chart.options.elements.arc.angle, 2 * Math.PI / i], a, e);
      }
    });
    E._set("pie", W.clone(E.doughnut)), E._set("pie", {
      cutoutPercentage: 0
    });
    var Xe = Re,
        Ke = W.valueOrDefault;

    E._set("radar", {
      spanGaps: !1,
      scale: {
        type: "radialLinear"
      },
      elements: {
        line: {
          fill: "start",
          tension: 0
        }
      }
    });

    var Qe = ne.extend({
      datasetElementType: ke.Line,
      dataElementType: ke.Point,
      linkScales: W.noop,
      _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
      _dataElementOptions: {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation"
      },
      _getIndexScaleId: function _getIndexScaleId() {
        return this.chart.scale.id;
      },
      _getValueScaleId: function _getValueScaleId() {
        return this.chart.scale.id;
      },
      update: function update(e) {
        var t,
            i,
            n = this,
            o = n.getMeta(),
            a = o.dataset,
            r = o.data || [],
            s = n.chart.scale,
            l = n._config;

        for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), a._scale = s, a._datasetIndex = n.index, a._children = r, a._loop = !0, a._model = n._resolveDatasetElementOptions(a), a.pivot(), t = 0, i = r.length; t < i; ++t) {
          n.updateElement(r[t], t, e);
        }

        for (n.updateBezierControlPoints(), t = 0, i = r.length; t < i; ++t) {
          r[t].pivot();
        }
      },
      updateElement: function updateElement(e, t, i) {
        var n = this,
            o = e.custom || {},
            a = n.getDataset(),
            r = n.chart.scale,
            s = r.getPointPositionForValue(t, a.data[t]),
            l = n._resolveDataElementOptions(e, t),
            d = n.getMeta().dataset._model,
            c = i ? r.xCenter : s.x,
            u = i ? r.yCenter : s.y;

        e._scale = r, e._options = l, e._datasetIndex = n.index, e._index = t, e._model = {
          x: c,
          y: u,
          skip: o.skip || isNaN(c) || isNaN(u),
          radius: l.radius,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          backgroundColor: l.backgroundColor,
          borderColor: l.borderColor,
          borderWidth: l.borderWidth,
          tension: Ke(o.tension, d ? d.tension : 0),
          hitRadius: l.hitRadius
        };
      },
      _resolveDatasetElementOptions: function _resolveDatasetElementOptions() {
        var e = this,
            t = e._config,
            i = e.chart.options,
            n = ne.prototype._resolveDatasetElementOptions.apply(e, arguments);

        return n.spanGaps = Ke(t.spanGaps, i.spanGaps), n.tension = Ke(t.lineTension, i.elements.line.tension), n;
      },
      updateBezierControlPoints: function updateBezierControlPoints() {
        var e,
            t,
            i,
            n,
            o = this.getMeta(),
            a = this.chart.chartArea,
            r = o.data || [];

        function s(e, t, i) {
          return Math.max(Math.min(e, i), t);
        }

        for (o.dataset._model.spanGaps && (r = r.filter(function (e) {
          return !e._model.skip;
        })), e = 0, t = r.length; e < t; ++e) {
          i = r[e]._model, n = W.splineCurve(W.previousItem(r, e, !0)._model, i, W.nextItem(r, e, !0)._model, i.tension), i.controlPointPreviousX = s(n.previous.x, a.left, a.right), i.controlPointPreviousY = s(n.previous.y, a.top, a.bottom), i.controlPointNextX = s(n.next.x, a.left, a.right), i.controlPointNextY = s(n.next.y, a.top, a.bottom);
        }
      },
      setHoverStyle: function setHoverStyle(e) {
        var t = e._model,
            i = e._options,
            n = W.getHoverColor;
        e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
          radius: t.radius
        }, t.backgroundColor = Ke(i.hoverBackgroundColor, n(i.backgroundColor)), t.borderColor = Ke(i.hoverBorderColor, n(i.borderColor)), t.borderWidth = Ke(i.hoverBorderWidth, i.borderWidth), t.radius = Ke(i.hoverRadius, i.radius);
      }
    });
    E._set("scatter", {
      hover: {
        mode: "single"
      },
      scales: {
        xAxes: [{
          id: "x-axis-1",
          type: "linear",
          position: "bottom"
        }],
        yAxes: [{
          id: "y-axis-1",
          type: "linear",
          position: "left"
        }]
      },
      tooltips: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(e) {
            return "(" + e.xLabel + ", " + e.yLabel + ")";
          }
        }
      }
    }), E._set("global", {
      datasets: {
        scatter: {
          showLine: !1
        }
      }
    });
    var Ze = {
      bar: Pe,
      bubble: Ie,
      doughnut: Re,
      horizontalBar: Be,
      line: Ue,
      polarArea: Ge,
      pie: Xe,
      radar: Qe,
      scatter: Ue
    };

    function Je(e, t) {
      return e["native"] ? {
        x: e.x,
        y: e.y
      } : W.getRelativePosition(e, t);
    }

    function et(e, t) {
      var i,
          n,
          o,
          a,
          r,
          s,
          l = e._getSortedVisibleDatasetMetas();

      for (n = 0, a = l.length; n < a; ++n) {
        for (o = 0, r = (i = l[n].data).length; o < r; ++o) {
          (s = i[o])._view.skip || t(s);
        }
      }
    }

    function tt(e, t) {
      var i = [];
      return et(e, function (e) {
        e.inRange(t.x, t.y) && i.push(e);
      }), i;
    }

    function it(e, t, i, n) {
      var o = Number.POSITIVE_INFINITY,
          a = [];
      return et(e, function (e) {
        if (!i || e.inRange(t.x, t.y)) {
          var r = e.getCenterPoint(),
              s = n(t, r);
          s < o ? (a = [e], o = s) : s === o && a.push(e);
        }
      }), a;
    }

    function nt(e) {
      var t = -1 !== e.indexOf("x"),
          i = -1 !== e.indexOf("y");
      return function (e, n) {
        var o = t ? Math.abs(e.x - n.x) : 0,
            a = i ? Math.abs(e.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
      };
    }

    function ot(e, t, i) {
      var n = Je(t, e);
      i.axis = i.axis || "x";
      var o = nt(i.axis),
          a = i.intersect ? tt(e, n) : it(e, n, !1, o),
          r = [];
      return a.length ? (e._getSortedVisibleDatasetMetas().forEach(function (e) {
        var t = e.data[a[0]._index];
        t && !t._view.skip && r.push(t);
      }), r) : [];
    }

    var at = {
      modes: {
        single: function single(e, t) {
          var i = Je(t, e),
              n = [];
          return et(e, function (e) {
            if (e.inRange(i.x, i.y)) return n.push(e), n;
          }), n.slice(0, 1);
        },
        label: ot,
        index: ot,
        dataset: function dataset(e, t, i) {
          var n = Je(t, e);
          i.axis = i.axis || "xy";
          var o = nt(i.axis),
              a = i.intersect ? tt(e, n) : it(e, n, !1, o);
          return a.length > 0 && (a = e.getDatasetMeta(a[0]._datasetIndex).data), a;
        },
        "x-axis": function xAxis(e, t) {
          return ot(e, t, {
            intersect: !1
          });
        },
        point: function point(e, t) {
          return tt(e, Je(t, e));
        },
        nearest: function nearest(e, t, i) {
          var n = Je(t, e);
          i.axis = i.axis || "xy";
          var o = nt(i.axis);
          return it(e, n, i.intersect, o);
        },
        x: function x(e, t, i) {
          var n = Je(t, e),
              o = [],
              a = !1;
          return et(e, function (e) {
            e.inXRange(n.x) && o.push(e), e.inRange(n.x, n.y) && (a = !0);
          }), i.intersect && !a && (o = []), o;
        },
        y: function y(e, t, i) {
          var n = Je(t, e),
              o = [],
              a = !1;
          return et(e, function (e) {
            e.inYRange(n.y) && o.push(e), e.inRange(n.x, n.y) && (a = !0);
          }), i.intersect && !a && (o = []), o;
        }
      }
    },
        rt = W.extend;

    function st(e, t) {
      return W.where(e, function (e) {
        return e.pos === t;
      });
    }

    function lt(e, t) {
      return e.sort(function (e, i) {
        var n = t ? i : e,
            o = t ? e : i;
        return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
      });
    }

    function dt(e, t, i, n) {
      return Math.max(e[i], t[i]) + Math.max(e[n], t[n]);
    }

    function ct(e, t, i) {
      var n,
          o,
          a = i.box,
          r = e.maxPadding;

      if (i.size && (e[i.pos] -= i.size), i.size = i.horizontal ? a.height : a.width, e[i.pos] += i.size, a.getPadding) {
        var s = a.getPadding();
        r.top = Math.max(r.top, s.top), r.left = Math.max(r.left, s.left), r.bottom = Math.max(r.bottom, s.bottom), r.right = Math.max(r.right, s.right);
      }

      if (n = t.outerWidth - dt(r, e, "left", "right"), o = t.outerHeight - dt(r, e, "top", "bottom"), n !== e.w || o !== e.h) {
        e.w = n, e.h = o;
        var l = i.horizontal ? [n, e.w] : [o, e.h];
        return !(l[0] === l[1] || isNaN(l[0]) && isNaN(l[1]));
      }
    }

    function ut(e, t) {
      var i = t.maxPadding;

      function n(e) {
        var n = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
        return e.forEach(function (e) {
          n[e] = Math.max(t[e], i[e]);
        }), n;
      }

      return n(e ? ["left", "right"] : ["top", "bottom"]);
    }

    function ht(e, t, i) {
      var n,
          o,
          a,
          r,
          s,
          l,
          d = [];

      for (n = 0, o = e.length; n < o; ++n) {
        (r = (a = e[n]).box).update(a.width || t.w, a.height || t.h, ut(a.horizontal, t)), ct(t, i, a) && (l = !0, d.length && (s = !0)), r.fullWidth || d.push(a);
      }

      return s && ht(d, t, i) || l;
    }

    function pt(e, t, i) {
      var n,
          o,
          a,
          r,
          s = i.padding,
          l = t.x,
          d = t.y;

      for (n = 0, o = e.length; n < o; ++n) {
        r = (a = e[n]).box, a.horizontal ? (r.left = r.fullWidth ? s.left : t.left, r.right = r.fullWidth ? i.outerWidth - s.right : t.left + t.w, r.top = d, r.bottom = d + r.height, r.width = r.right - r.left, d = r.bottom) : (r.left = l, r.right = l + r.width, r.top = t.top, r.bottom = t.top + t.h, r.height = r.bottom - r.top, l = r.right);
      }

      t.x = l, t.y = d;
    }

    E._set("global", {
      layout: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    });

    var ft,
        gt = {
      defaults: {},
      addBox: function addBox(e, t) {
        e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function () {
          return [{
            z: 0,
            draw: function draw() {
              t.draw.apply(t, arguments);
            }
          }];
        }, e.boxes.push(t);
      },
      removeBox: function removeBox(e, t) {
        var i = e.boxes ? e.boxes.indexOf(t) : -1;
        -1 !== i && e.boxes.splice(i, 1);
      },
      configure: function configure(e, t, i) {
        for (var n, o = ["fullWidth", "position", "weight"], a = o.length, r = 0; r < a; ++r) {
          n = o[r], i.hasOwnProperty(n) && (t[n] = i[n]);
        }
      },
      update: function update(e, t, i) {
        if (e) {
          var n = e.options.layout || {},
              o = W.options.toPadding(n.padding),
              a = t - o.width,
              r = i - o.height,
              s = function (e) {
            var t = function (e) {
              var t,
                  i,
                  n,
                  o = [];

              for (t = 0, i = (e || []).length; t < i; ++t) {
                n = e[t], o.push({
                  index: t,
                  box: n,
                  pos: n.position,
                  horizontal: n.isHorizontal(),
                  weight: n.weight
                });
              }

              return o;
            }(e),
                i = lt(st(t, "left"), !0),
                n = lt(st(t, "right")),
                o = lt(st(t, "top"), !0),
                a = lt(st(t, "bottom"));

            return {
              leftAndTop: i.concat(o),
              rightAndBottom: n.concat(a),
              chartArea: st(t, "chartArea"),
              vertical: i.concat(n),
              horizontal: o.concat(a)
            };
          }(e.boxes),
              l = s.vertical,
              d = s.horizontal,
              c = Object.freeze({
            outerWidth: t,
            outerHeight: i,
            padding: o,
            availableWidth: a,
            vBoxMaxWidth: a / 2 / l.length,
            hBoxMaxHeight: r / 2
          }),
              u = rt({
            maxPadding: rt({}, o),
            w: a,
            h: r,
            x: o.left,
            y: o.top
          }, o);

          !function (e, t) {
            var i, n, o;

            for (i = 0, n = e.length; i < n; ++i) {
              (o = e[i]).width = o.horizontal ? o.box.fullWidth && t.availableWidth : t.vBoxMaxWidth, o.height = o.horizontal && t.hBoxMaxHeight;
            }
          }(l.concat(d), c), ht(l, u, c), ht(d, u, c) && ht(l, u, c), function (e) {
            var t = e.maxPadding;

            function i(i) {
              var n = Math.max(t[i] - e[i], 0);
              return e[i] += n, n;
            }

            e.y += i("top"), e.x += i("left"), i("right"), i("bottom");
          }(u), pt(s.leftAndTop, u, c), u.x += u.w, u.y += u.h, pt(s.rightAndBottom, u, c), e.chartArea = {
            left: u.left,
            top: u.top,
            right: u.left + u.w,
            bottom: u.top + u.h
          }, W.each(s.chartArea, function (t) {
            var i = t.box;
            rt(i, e.chartArea), i.update(u.w, u.h);
          });
        }
      }
    },
        mt = (ft = Object.freeze({
      __proto__: null,
      "default": "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n"
    })) && ft["default"] || ft,
        vt = ["animationstart", "webkitAnimationStart"],
        bt = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout"
    };

    function yt(e, t) {
      var i = W.getStyle(e, t),
          n = i && i.match(/^(\d+)(\.\d+)?px$/);
      return n ? Number(n[1]) : void 0;
    }

    var xt = !!function () {
      var e = !1;

      try {
        var t = Object.defineProperty({}, "passive", {
          get: function get() {
            e = !0;
          }
        });
        window.addEventListener("e", null, t);
      } catch (e) {}

      return e;
    }() && {
      passive: !0
    };

    function wt(e, t, i) {
      e.addEventListener(t, i, xt);
    }

    function kt(e, t, i) {
      e.removeEventListener(t, i, xt);
    }

    function Tt(e, t, i, n, o) {
      return {
        type: e,
        chart: t,
        "native": o || null,
        x: void 0 !== i ? i : null,
        y: void 0 !== n ? n : null
      };
    }

    function St(e) {
      var t = document.createElement("div");
      return t.className = e || "", t;
    }

    function _t(e, t, i) {
      var n,
          o,
          a,
          r,
          s = e.$chartjs || (e.$chartjs = {}),
          l = s.resizer = function (e) {
        var t = St("chartjs-size-monitor"),
            i = St("chartjs-size-monitor-expand"),
            n = St("chartjs-size-monitor-shrink");
        i.appendChild(St()), n.appendChild(St()), t.appendChild(i), t.appendChild(n), t._reset = function () {
          i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6;
        };

        var o = function o() {
          t._reset(), e();
        };

        return wt(i, "scroll", o.bind(i, "expand")), wt(n, "scroll", o.bind(n, "shrink")), t;
      }((n = function n() {
        if (s.resizer) {
          var n = i.options.maintainAspectRatio && e.parentNode,
              o = n ? n.clientWidth : 0;
          t(Tt("resize", i)), n && n.clientWidth < o && i.canvas && t(Tt("resize", i));
        }
      }, a = !1, r = [], function () {
        r = Array.prototype.slice.call(arguments), o = o || this, a || (a = !0, W.requestAnimFrame.call(window, function () {
          a = !1, n.apply(o, r);
        }));
      }));

      !function (e, t) {
        var i = e.$chartjs || (e.$chartjs = {}),
            n = i.renderProxy = function (e) {
          "chartjs-render-animation" === e.animationName && t();
        };

        W.each(vt, function (t) {
          wt(e, t, n);
        }), i.reflow = !!e.offsetParent, e.classList.add("chartjs-render-monitor");
      }(e, function () {
        if (s.resizer) {
          var t = e.parentNode;
          t && t !== l.parentNode && t.insertBefore(l, t.firstChild), l._reset();
        }
      });
    }

    function Ct(e) {
      var t = e.$chartjs || {},
          i = t.resizer;
      delete t.resizer, function (e) {
        var t = e.$chartjs || {},
            i = t.renderProxy;
        i && (W.each(vt, function (t) {
          kt(e, t, i);
        }), delete t.renderProxy), e.classList.remove("chartjs-render-monitor");
      }(e), i && i.parentNode && i.parentNode.removeChild(i);
    }

    var Mt = {
      disableCSSInjection: !1,
      _enabled: "undefined" != typeof window && "undefined" != typeof document,
      _ensureLoaded: function _ensureLoaded(e) {
        if (!this.disableCSSInjection) {
          var t = e.getRootNode ? e.getRootNode() : document;
          !function (e, t) {
            var i = e.$chartjs || (e.$chartjs = {});

            if (!i.containsStyles) {
              i.containsStyles = !0, t = "/* Chart.js */\n" + t;
              var n = document.createElement("style");
              n.setAttribute("type", "text/css"), n.appendChild(document.createTextNode(t)), e.appendChild(n);
            }
          }(t.host ? t : document.head, mt);
        }
      },
      acquireContext: function acquireContext(e, t) {
        "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
        var i = e && e.getContext && e.getContext("2d");
        return i && i.canvas === e ? (this._ensureLoaded(e), function (e, t) {
          var i = e.style,
              n = e.getAttribute("height"),
              o = e.getAttribute("width");

          if (e.$chartjs = {
            initial: {
              height: n,
              width: o,
              style: {
                display: i.display,
                height: i.height,
                width: i.width
              }
            }
          }, i.display = i.display || "block", null === o || "" === o) {
            var a = yt(e, "width");
            void 0 !== a && (e.width = a);
          }

          if (null === n || "" === n) if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);else {
            var r = yt(e, "height");
            void 0 !== a && (e.height = r);
          }
        }(e, t), i) : null;
      },
      releaseContext: function releaseContext(e) {
        var t = e.canvas;

        if (t.$chartjs) {
          var i = t.$chartjs.initial;
          ["height", "width"].forEach(function (e) {
            var n = i[e];
            W.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
          }), W.each(i.style || {}, function (e, i) {
            t.style[i] = e;
          }), t.width = t.width, delete t.$chartjs;
        }
      },
      addEventListener: function addEventListener(e, t, i) {
        var n = e.canvas;

        if ("resize" !== t) {
          var o = i.$chartjs || (i.$chartjs = {});
          wt(n, t, (o.proxies || (o.proxies = {}))[e.id + "_" + t] = function (t) {
            i(function (e, t) {
              var i = bt[e.type] || e.type,
                  n = W.getRelativePosition(e, t);
              return Tt(i, t, n.x, n.y, e);
            }(t, e));
          });
        } else _t(n, i, e);
      },
      removeEventListener: function removeEventListener(e, t, i) {
        var n = e.canvas;

        if ("resize" !== t) {
          var o = ((i.$chartjs || {}).proxies || {})[e.id + "_" + t];
          o && kt(n, t, o);
        } else Ct(n);
      }
    };
    W.addEvent = wt, W.removeEvent = kt;
    var Dt = Mt._enabled ? Mt : {
      acquireContext: function acquireContext(e) {
        return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null;
      }
    },
        At = W.extend({
      initialize: function initialize() {},
      acquireContext: function acquireContext() {},
      releaseContext: function releaseContext() {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {}
    }, Dt);

    E._set("global", {
      plugins: {}
    });

    var Pt = {
      _plugins: [],
      _cacheId: 0,
      register: function register(e) {
        var t = this._plugins;
        [].concat(e).forEach(function (e) {
          -1 === t.indexOf(e) && t.push(e);
        }), this._cacheId++;
      },
      unregister: function unregister(e) {
        var t = this._plugins;
        [].concat(e).forEach(function (e) {
          var i = t.indexOf(e);
          -1 !== i && t.splice(i, 1);
        }), this._cacheId++;
      },
      clear: function clear() {
        this._plugins = [], this._cacheId++;
      },
      count: function count() {
        return this._plugins.length;
      },
      getAll: function getAll() {
        return this._plugins;
      },
      notify: function notify(e, t, i) {
        var n,
            o,
            a,
            r,
            s,
            l = this.descriptors(e),
            d = l.length;

        for (n = 0; n < d; ++n) {
          if ("function" == typeof (s = (a = (o = l[n]).plugin)[t]) && ((r = [e].concat(i || [])).push(o.options), !1 === s.apply(a, r))) return !1;
        }

        return !0;
      },
      descriptors: function descriptors(e) {
        var t = e.$plugins || (e.$plugins = {});
        if (t.id === this._cacheId) return t.descriptors;
        var i = [],
            n = [],
            o = e && e.config || {},
            a = o.options && o.options.plugins || {};
        return this._plugins.concat(o.plugins || []).forEach(function (e) {
          if (-1 === i.indexOf(e)) {
            var t = e.id,
                o = a[t];
            !1 !== o && (!0 === o && (o = W.clone(E.global.plugins[t])), i.push(e), n.push({
              plugin: e,
              options: o || {}
            }));
          }
        }), t.descriptors = n, t.id = this._cacheId, n;
      },
      _invalidate: function _invalidate(e) {
        delete e.$plugins;
      }
    },
        $t = {
      constructors: {},
      defaults: {},
      registerScaleType: function registerScaleType(e, t, i) {
        this.constructors[e] = t, this.defaults[e] = W.clone(i);
      },
      getScaleConstructor: function getScaleConstructor(e) {
        return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0;
      },
      getScaleDefaults: function getScaleDefaults(e) {
        return this.defaults.hasOwnProperty(e) ? W.merge(Object.create(null), [E.scale, this.defaults[e]]) : {};
      },
      updateScaleDefaults: function updateScaleDefaults(e, t) {
        this.defaults.hasOwnProperty(e) && (this.defaults[e] = W.extend(this.defaults[e], t));
      },
      addScalesToLayout: function addScalesToLayout(e) {
        W.each(e.scales, function (t) {
          t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, gt.addBox(e, t);
        });
      }
    },
        Ot = W.valueOrDefault,
        It = W.rtl.getRtlAdapter;

    E._set("global", {
      tooltips: {
        enabled: !0,
        custom: null,
        mode: "nearest",
        position: "average",
        intersect: !0,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleFontStyle: "bold",
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleFontColor: "#fff",
        titleAlign: "left",
        bodySpacing: 2,
        bodyFontColor: "#fff",
        bodyAlign: "left",
        footerFontStyle: "bold",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFontColor: "#fff",
        footerAlign: "left",
        yPadding: 6,
        xPadding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        multiKeyBackground: "#fff",
        displayColors: !0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        callbacks: {
          beforeTitle: W.noop,
          title: function title(e, t) {
            var i = "",
                n = t.labels,
                o = n ? n.length : 0;

            if (e.length > 0) {
              var a = e[0];
              a.label ? i = a.label : a.xLabel ? i = a.xLabel : o > 0 && a.index < o && (i = n[a.index]);
            }

            return i;
          },
          afterTitle: W.noop,
          beforeBody: W.noop,
          beforeLabel: W.noop,
          label: function label(e, t) {
            var i = t.datasets[e.datasetIndex].label || "";
            return i && (i += ": "), W.isNullOrUndef(e.value) ? i += e.yLabel : i += e.value, i;
          },
          labelColor: function labelColor(e, t) {
            var i = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;

            return {
              borderColor: i.borderColor,
              backgroundColor: i.backgroundColor
            };
          },
          labelTextColor: function labelTextColor() {
            return this._options.bodyFontColor;
          },
          afterLabel: W.noop,
          afterBody: W.noop,
          beforeFooter: W.noop,
          footer: W.noop,
          afterFooter: W.noop
        }
      }
    });

    var Lt = {
      average: function average(e) {
        if (!e.length) return !1;
        var t,
            i,
            n = 0,
            o = 0,
            a = 0;

        for (t = 0, i = e.length; t < i; ++t) {
          var r = e[t];

          if (r && r.hasValue()) {
            var s = r.tooltipPosition();
            n += s.x, o += s.y, ++a;
          }
        }

        return {
          x: n / a,
          y: o / a
        };
      },
      nearest: function nearest(e, t) {
        var i,
            n,
            o,
            a = t.x,
            r = t.y,
            s = Number.POSITIVE_INFINITY;

        for (i = 0, n = e.length; i < n; ++i) {
          var l = e[i];

          if (l && l.hasValue()) {
            var d = l.getCenterPoint(),
                c = W.distanceBetweenPoints(t, d);
            c < s && (s = c, o = l);
          }
        }

        if (o) {
          var u = o.tooltipPosition();
          a = u.x, r = u.y;
        }

        return {
          x: a,
          y: r
        };
      }
    };

    function Ft(e, t) {
      return t && (W.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
    }

    function zt(e) {
      return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e;
    }

    function Et(e) {
      var t = E.global;
      return {
        xPadding: e.xPadding,
        yPadding: e.yPadding,
        xAlign: e.xAlign,
        yAlign: e.yAlign,
        rtl: e.rtl,
        textDirection: e.textDirection,
        bodyFontColor: e.bodyFontColor,
        _bodyFontFamily: Ot(e.bodyFontFamily, t.defaultFontFamily),
        _bodyFontStyle: Ot(e.bodyFontStyle, t.defaultFontStyle),
        _bodyAlign: e.bodyAlign,
        bodyFontSize: Ot(e.bodyFontSize, t.defaultFontSize),
        bodySpacing: e.bodySpacing,
        titleFontColor: e.titleFontColor,
        _titleFontFamily: Ot(e.titleFontFamily, t.defaultFontFamily),
        _titleFontStyle: Ot(e.titleFontStyle, t.defaultFontStyle),
        titleFontSize: Ot(e.titleFontSize, t.defaultFontSize),
        _titleAlign: e.titleAlign,
        titleSpacing: e.titleSpacing,
        titleMarginBottom: e.titleMarginBottom,
        footerFontColor: e.footerFontColor,
        _footerFontFamily: Ot(e.footerFontFamily, t.defaultFontFamily),
        _footerFontStyle: Ot(e.footerFontStyle, t.defaultFontStyle),
        footerFontSize: Ot(e.footerFontSize, t.defaultFontSize),
        _footerAlign: e.footerAlign,
        footerSpacing: e.footerSpacing,
        footerMarginTop: e.footerMarginTop,
        caretSize: e.caretSize,
        cornerRadius: e.cornerRadius,
        backgroundColor: e.backgroundColor,
        opacity: 0,
        legendColorBackground: e.multiKeyBackground,
        displayColors: e.displayColors,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      };
    }

    function Rt(e, t) {
      return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding;
    }

    function Bt(e) {
      return Ft([], zt(e));
    }

    var Nt = X.extend({
      initialize: function initialize() {
        this._model = Et(this._options), this._lastActive = [];
      },
      getTitle: function getTitle() {
        var e = this,
            t = e._options,
            i = t.callbacks,
            n = i.beforeTitle.apply(e, arguments),
            o = i.title.apply(e, arguments),
            a = i.afterTitle.apply(e, arguments),
            r = [];
        return r = Ft(r, zt(n)), r = Ft(r, zt(o)), r = Ft(r, zt(a));
      },
      getBeforeBody: function getBeforeBody() {
        return Bt(this._options.callbacks.beforeBody.apply(this, arguments));
      },
      getBody: function getBody(e, t) {
        var i = this,
            n = i._options.callbacks,
            o = [];
        return W.each(e, function (e) {
          var a = {
            before: [],
            lines: [],
            after: []
          };
          Ft(a.before, zt(n.beforeLabel.call(i, e, t))), Ft(a.lines, n.label.call(i, e, t)), Ft(a.after, zt(n.afterLabel.call(i, e, t))), o.push(a);
        }), o;
      },
      getAfterBody: function getAfterBody() {
        return Bt(this._options.callbacks.afterBody.apply(this, arguments));
      },
      getFooter: function getFooter() {
        var e = this,
            t = e._options.callbacks,
            i = t.beforeFooter.apply(e, arguments),
            n = t.footer.apply(e, arguments),
            o = t.afterFooter.apply(e, arguments),
            a = [];
        return a = Ft(a, zt(i)), a = Ft(a, zt(n)), a = Ft(a, zt(o));
      },
      update: function update(e) {
        var t,
            i,
            n,
            o,
            a,
            r,
            s,
            l,
            d,
            c,
            u = this,
            h = u._options,
            p = u._model,
            f = u._model = Et(h),
            g = u._active,
            m = u._data,
            v = {
          xAlign: p.xAlign,
          yAlign: p.yAlign
        },
            b = {
          x: p.x,
          y: p.y
        },
            y = {
          width: p.width,
          height: p.height
        },
            x = {
          x: p.caretX,
          y: p.caretY
        };

        if (g.length) {
          f.opacity = 1;
          var w = [],
              k = [];
          x = Lt[h.position].call(u, g, u._eventPosition);
          var T = [];

          for (t = 0, i = g.length; t < i; ++t) {
            T.push((n = g[t], o = void 0, a = void 0, r = void 0, s = void 0, l = void 0, d = void 0, c = void 0, o = n._xScale, a = n._yScale || n._scale, r = n._index, s = n._datasetIndex, l = n._chart.getDatasetMeta(s).controller, d = l._getIndexScale(), c = l._getValueScale(), {
              xLabel: o ? o.getLabelForIndex(r, s) : "",
              yLabel: a ? a.getLabelForIndex(r, s) : "",
              label: d ? "" + d.getLabelForIndex(r, s) : "",
              value: c ? "" + c.getLabelForIndex(r, s) : "",
              index: r,
              datasetIndex: s,
              x: n._model.x,
              y: n._model.y
            }));
          }

          h.filter && (T = T.filter(function (e) {
            return h.filter(e, m);
          })), h.itemSort && (T = T.sort(function (e, t) {
            return h.itemSort(e, t, m);
          })), W.each(T, function (e) {
            w.push(h.callbacks.labelColor.call(u, e, u._chart)), k.push(h.callbacks.labelTextColor.call(u, e, u._chart));
          }), f.title = u.getTitle(T, m), f.beforeBody = u.getBeforeBody(T, m), f.body = u.getBody(T, m), f.afterBody = u.getAfterBody(T, m), f.footer = u.getFooter(T, m), f.x = x.x, f.y = x.y, f.caretPadding = h.caretPadding, f.labelColors = w, f.labelTextColors = k, f.dataPoints = T, y = function (e, t) {
            var i = e._chart.ctx,
                n = 2 * t.yPadding,
                o = 0,
                a = t.body,
                r = a.reduce(function (e, t) {
              return e + t.before.length + t.lines.length + t.after.length;
            }, 0);
            r += t.beforeBody.length + t.afterBody.length;
            var s = t.title.length,
                l = t.footer.length,
                d = t.titleFontSize,
                c = t.bodyFontSize,
                u = t.footerFontSize;
            n += s * d, n += s ? (s - 1) * t.titleSpacing : 0, n += s ? t.titleMarginBottom : 0, n += r * c, n += r ? (r - 1) * t.bodySpacing : 0, n += l ? t.footerMarginTop : 0, n += l * u, n += l ? (l - 1) * t.footerSpacing : 0;

            var h = 0,
                p = function p(e) {
              o = Math.max(o, i.measureText(e).width + h);
            };

            return i.font = W.fontString(d, t._titleFontStyle, t._titleFontFamily), W.each(t.title, p), i.font = W.fontString(c, t._bodyFontStyle, t._bodyFontFamily), W.each(t.beforeBody.concat(t.afterBody), p), h = t.displayColors ? c + 2 : 0, W.each(a, function (e) {
              W.each(e.before, p), W.each(e.lines, p), W.each(e.after, p);
            }), h = 0, i.font = W.fontString(u, t._footerFontStyle, t._footerFontFamily), W.each(t.footer, p), {
              width: o += 2 * t.xPadding,
              height: n
            };
          }(this, f), b = function (e, t, i, n) {
            var o = e.x,
                a = e.y,
                r = e.caretSize,
                s = e.caretPadding,
                l = e.cornerRadius,
                d = i.xAlign,
                c = i.yAlign,
                u = r + s,
                h = l + s;
            return "right" === d ? o -= t.width : "center" === d && ((o -= t.width / 2) + t.width > n.width && (o = n.width - t.width), o < 0 && (o = 0)), "top" === c ? a += u : a -= "bottom" === c ? t.height + u : t.height / 2, "center" === c ? "left" === d ? o += u : "right" === d && (o -= u) : "left" === d ? o -= h : "right" === d && (o += h), {
              x: o,
              y: a
            };
          }(f, y, v = function (e, t) {
            var i,
                n,
                o,
                a,
                r,
                s = e._model,
                l = e._chart,
                d = e._chart.chartArea,
                c = "center",
                u = "center";
            s.y < t.height ? u = "top" : s.y > l.height - t.height && (u = "bottom");
            var h = (d.left + d.right) / 2,
                p = (d.top + d.bottom) / 2;
            "center" === u ? (i = function i(e) {
              return e <= h;
            }, n = function n(e) {
              return e > h;
            }) : (i = function i(e) {
              return e <= t.width / 2;
            }, n = function n(e) {
              return e >= l.width - t.width / 2;
            }), o = function o(e) {
              return e + t.width + s.caretSize + s.caretPadding > l.width;
            }, a = function a(e) {
              return e - t.width - s.caretSize - s.caretPadding < 0;
            }, r = function r(e) {
              return e <= p ? "top" : "bottom";
            }, i(s.x) ? (c = "left", o(s.x) && (c = "center", u = r(s.y))) : n(s.x) && (c = "right", a(s.x) && (c = "center", u = r(s.y)));
            var f = e._options;
            return {
              xAlign: f.xAlign ? f.xAlign : c,
              yAlign: f.yAlign ? f.yAlign : u
            };
          }(this, y), u._chart);
        } else f.opacity = 0;

        return f.xAlign = v.xAlign, f.yAlign = v.yAlign, f.x = b.x, f.y = b.y, f.width = y.width, f.height = y.height, f.caretX = x.x, f.caretY = x.y, u._model = f, e && h.custom && h.custom.call(u, f), u;
      },
      drawCaret: function drawCaret(e, t) {
        var i = this._chart.ctx,
            n = this._view,
            o = this.getCaretPosition(e, t, n);
        i.lineTo(o.x1, o.y1), i.lineTo(o.x2, o.y2), i.lineTo(o.x3, o.y3);
      },
      getCaretPosition: function getCaretPosition(e, t, i) {
        var n,
            o,
            a,
            r,
            s,
            l,
            d = i.caretSize,
            c = i.cornerRadius,
            u = i.xAlign,
            h = i.yAlign,
            p = e.x,
            f = e.y,
            g = t.width,
            m = t.height;
        if ("center" === h) s = f + m / 2, "left" === u ? (o = (n = p) - d, a = n, r = s + d, l = s - d) : (o = (n = p + g) + d, a = n, r = s - d, l = s + d);else if ("left" === u ? (n = (o = p + c + d) - d, a = o + d) : "right" === u ? (n = (o = p + g - c - d) - d, a = o + d) : (n = (o = i.caretX) - d, a = o + d), "top" === h) s = (r = f) - d, l = r;else {
          s = (r = f + m) + d, l = r;
          var v = a;
          a = n, n = v;
        }
        return {
          x1: n,
          x2: o,
          x3: a,
          y1: r,
          y2: s,
          y3: l
        };
      },
      drawTitle: function drawTitle(e, t, i) {
        var n,
            o,
            a,
            r = t.title,
            s = r.length;

        if (s) {
          var l = It(t.rtl, t.x, t.width);

          for (e.x = Rt(t, t._titleAlign), i.textAlign = l.textAlign(t._titleAlign), i.textBaseline = "middle", n = t.titleFontSize, o = t.titleSpacing, i.fillStyle = t.titleFontColor, i.font = W.fontString(n, t._titleFontStyle, t._titleFontFamily), a = 0; a < s; ++a) {
            i.fillText(r[a], l.x(e.x), e.y + n / 2), e.y += n + o, a + 1 === s && (e.y += t.titleMarginBottom - o);
          }
        }
      },
      drawBody: function drawBody(e, t, i) {
        var n,
            o,
            a,
            r,
            s,
            l,
            d,
            c,
            u = t.bodyFontSize,
            h = t.bodySpacing,
            p = t._bodyAlign,
            f = t.body,
            g = t.displayColors,
            m = 0,
            v = g ? Rt(t, "left") : 0,
            b = It(t.rtl, t.x, t.width),
            y = function y(t) {
          i.fillText(t, b.x(e.x + m), e.y + u / 2), e.y += u + h;
        },
            x = b.textAlign(p);

        for (i.textAlign = p, i.textBaseline = "middle", i.font = W.fontString(u, t._bodyFontStyle, t._bodyFontFamily), e.x = Rt(t, x), i.fillStyle = t.bodyFontColor, W.each(t.beforeBody, y), m = g && "right" !== x ? "center" === p ? u / 2 + 1 : u + 2 : 0, s = 0, d = f.length; s < d; ++s) {
          for (n = f[s], o = t.labelTextColors[s], a = t.labelColors[s], i.fillStyle = o, W.each(n.before, y), l = 0, c = (r = n.lines).length; l < c; ++l) {
            if (g) {
              var w = b.x(v);
              i.fillStyle = t.legendColorBackground, i.fillRect(b.leftForLtr(w, u), e.y, u, u), i.lineWidth = 1, i.strokeStyle = a.borderColor, i.strokeRect(b.leftForLtr(w, u), e.y, u, u), i.fillStyle = a.backgroundColor, i.fillRect(b.leftForLtr(b.xPlus(w, 1), u - 2), e.y + 1, u - 2, u - 2), i.fillStyle = o;
            }

            y(r[l]);
          }

          W.each(n.after, y);
        }

        m = 0, W.each(t.afterBody, y), e.y -= h;
      },
      drawFooter: function drawFooter(e, t, i) {
        var n,
            o,
            a = t.footer,
            r = a.length;

        if (r) {
          var s = It(t.rtl, t.x, t.width);

          for (e.x = Rt(t, t._footerAlign), e.y += t.footerMarginTop, i.textAlign = s.textAlign(t._footerAlign), i.textBaseline = "middle", n = t.footerFontSize, i.fillStyle = t.footerFontColor, i.font = W.fontString(n, t._footerFontStyle, t._footerFontFamily), o = 0; o < r; ++o) {
            i.fillText(a[o], s.x(e.x), e.y + n / 2), e.y += n + t.footerSpacing;
          }
        }
      },
      drawBackground: function drawBackground(e, t, i, n) {
        i.fillStyle = t.backgroundColor, i.strokeStyle = t.borderColor, i.lineWidth = t.borderWidth;
        var o = t.xAlign,
            a = t.yAlign,
            r = e.x,
            s = e.y,
            l = n.width,
            d = n.height,
            c = t.cornerRadius;
        i.beginPath(), i.moveTo(r + c, s), "top" === a && this.drawCaret(e, n), i.lineTo(r + l - c, s), i.quadraticCurveTo(r + l, s, r + l, s + c), "center" === a && "right" === o && this.drawCaret(e, n), i.lineTo(r + l, s + d - c), i.quadraticCurveTo(r + l, s + d, r + l - c, s + d), "bottom" === a && this.drawCaret(e, n), i.lineTo(r + c, s + d), i.quadraticCurveTo(r, s + d, r, s + d - c), "center" === a && "left" === o && this.drawCaret(e, n), i.lineTo(r, s + c), i.quadraticCurveTo(r, s, r + c, s), i.closePath(), i.fill(), t.borderWidth > 0 && i.stroke();
      },
      draw: function draw() {
        var e = this._chart.ctx,
            t = this._view;

        if (0 !== t.opacity) {
          var i = {
            width: t.width,
            height: t.height
          },
              n = {
            x: t.x,
            y: t.y
          },
              o = Math.abs(t.opacity < .001) ? 0 : t.opacity,
              a = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
          this._options.enabled && a && (e.save(), e.globalAlpha = o, this.drawBackground(n, t, e, i), n.y += t.yPadding, W.rtl.overrideTextDirection(e, t.textDirection), this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), W.rtl.restoreTextDirection(e, t.textDirection), e.restore());
        }
      },
      handleEvent: function handleEvent(e) {
        var t,
            i = this,
            n = i._options;
        return i._lastActive = i._lastActive || [], "mouseout" === e.type ? i._active = [] : (i._active = i._chart.getElementsAtEventForMode(e, n.mode, n), n.reverse && i._active.reverse()), (t = !W.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
          x: e.x,
          y: e.y
        }, i.update(!0), i.pivot())), t;
      }
    }),
        Ht = Lt,
        Wt = Nt;
    Wt.positioners = Ht;
    var jt = W.valueOrDefault;

    function Vt() {
      return W.merge(Object.create(null), [].slice.call(arguments), {
        merger: function merger(e, t, i, n) {
          if ("xAxes" === e || "yAxes" === e) {
            var o,
                a,
                r,
                s = i[e].length;

            for (t[e] || (t[e] = []), o = 0; o < s; ++o) {
              r = i[e][o], a = jt(r.type, "xAxes" === e ? "category" : "linear"), o >= t[e].length && t[e].push({}), !t[e][o].type || r.type && r.type !== t[e][o].type ? W.merge(t[e][o], [$t.getScaleDefaults(a), r]) : W.merge(t[e][o], r);
            }
          } else W._merger(e, t, i, n);
        }
      });
    }

    function qt() {
      return W.merge(Object.create(null), [].slice.call(arguments), {
        merger: function merger(e, t, i, n) {
          var o = t[e] || Object.create(null),
              a = i[e];
          "scales" === e ? t[e] = Vt(o, a) : "scale" === e ? t[e] = W.merge(o, [$t.getScaleDefaults(a.type), a]) : W._merger(e, t, i, n);
        }
      });
    }

    function Ut(e) {
      var t = e.options;
      W.each(e.scales, function (t) {
        gt.removeBox(e, t);
      }), t = qt(E.global, E[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize();
    }

    function Yt(e, t, i) {
      var n,
          o = function o(e) {
        return e.id === n;
      };

      do {
        n = t + i++;
      } while (W.findIndex(e, o) >= 0);

      return n;
    }

    function Gt(e) {
      return "top" === e || "bottom" === e;
    }

    function Xt(e, t) {
      return function (i, n) {
        return i[e] === n[e] ? i[t] - n[t] : i[e] - n[e];
      };
    }

    E._set("global", {
      elements: {},
      events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
      hover: {
        onHover: null,
        mode: "nearest",
        intersect: !0,
        animationDuration: 400
      },
      onClick: null,
      maintainAspectRatio: !0,
      responsive: !0,
      responsiveAnimationDuration: 0
    });

    var Kt = function Kt(e, t) {
      return this.construct(e, t), this;
    };

    W.extend(Kt.prototype, {
      construct: function construct(e, t) {
        var i = this;

        t = function (e) {
          var t = (e = e || Object.create(null)).data = e.data || {};
          return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = qt(E.global, E[e.type], e.options || {}), e;
        }(t);

        var n = At.acquireContext(e, t),
            o = n && n.canvas,
            a = o && o.height,
            r = o && o.width;
        i.id = W.uid(), i.ctx = n, i.canvas = o, i.config = t, i.width = r, i.height = a, i.aspectRatio = a ? r / a : null, i.options = t.options, i._bufferedRender = !1, i._layers = [], i.chart = i, i.controller = i, Kt.instances[i.id] = i, Object.defineProperty(i, "data", {
          get: function get() {
            return i.config.data;
          },
          set: function set(e) {
            i.config.data = e;
          }
        }), n && o ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item");
      },
      initialize: function initialize() {
        var e = this;
        return Pt.notify(e, "beforeInit"), W.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.initToolTip(), Pt.notify(e, "afterInit"), e;
      },
      clear: function clear() {
        return W.canvas.clear(this), this;
      },
      stop: function stop() {
        return Z.cancelAnimation(this), this;
      },
      resize: function resize(e) {
        var t = this,
            i = t.options,
            n = t.canvas,
            o = i.maintainAspectRatio && t.aspectRatio || null,
            a = Math.max(0, Math.floor(W.getMaximumWidth(n))),
            r = Math.max(0, Math.floor(o ? a / o : W.getMaximumHeight(n)));

        if ((t.width !== a || t.height !== r) && (n.width = t.width = a, n.height = t.height = r, n.style.width = a + "px", n.style.height = r + "px", W.retinaScale(t, i.devicePixelRatio), !e)) {
          var s = {
            width: a,
            height: r
          };
          Pt.notify(t, "resize", [s]), i.onResize && i.onResize(t, s), t.stop(), t.update({
            duration: i.responsiveAnimationDuration
          });
        }
      },
      ensureScalesHaveIDs: function ensureScalesHaveIDs() {
        var e = this.options,
            t = e.scales || {},
            i = e.scale;
        W.each(t.xAxes, function (e, i) {
          e.id || (e.id = Yt(t.xAxes, "x-axis-", i));
        }), W.each(t.yAxes, function (e, i) {
          e.id || (e.id = Yt(t.yAxes, "y-axis-", i));
        }), i && (i.id = i.id || "scale");
      },
      buildOrUpdateScales: function buildOrUpdateScales() {
        var e = this,
            t = e.options,
            i = e.scales || {},
            n = [],
            o = Object.keys(i).reduce(function (e, t) {
          return e[t] = !1, e;
        }, {});
        t.scales && (n = n.concat((t.scales.xAxes || []).map(function (e) {
          return {
            options: e,
            dtype: "category",
            dposition: "bottom"
          };
        }), (t.scales.yAxes || []).map(function (e) {
          return {
            options: e,
            dtype: "linear",
            dposition: "left"
          };
        }))), t.scale && n.push({
          options: t.scale,
          dtype: "radialLinear",
          isDefault: !0,
          dposition: "chartArea"
        }), W.each(n, function (t) {
          var n = t.options,
              a = n.id,
              r = jt(n.type, t.dtype);
          Gt(n.position) !== Gt(t.dposition) && (n.position = t.dposition), o[a] = !0;
          var s = null;
          if (a in i && i[a].type === r) (s = i[a]).options = n, s.ctx = e.ctx, s.chart = e;else {
            var l = $t.getScaleConstructor(r);
            if (!l) return;
            s = new l({
              id: a,
              type: r,
              options: n,
              ctx: e.ctx,
              chart: e
            }), i[s.id] = s;
          }
          s.mergeTicksOptions(), t.isDefault && (e.scale = s);
        }), W.each(o, function (e, t) {
          e || delete i[t];
        }), e.scales = i, $t.addScalesToLayout(this);
      },
      buildOrUpdateControllers: function buildOrUpdateControllers() {
        var e,
            t,
            i = this,
            n = [],
            o = i.data.datasets;

        for (e = 0, t = o.length; e < t; e++) {
          var a = o[e],
              r = i.getDatasetMeta(e),
              s = a.type || i.config.type;
          if (r.type && r.type !== s && (i.destroyDatasetMeta(e), r = i.getDatasetMeta(e)), r.type = s, r.order = a.order || 0, r.index = e, r.controller) r.controller.updateIndex(e), r.controller.linkScales();else {
            var l = Ze[r.type];
            if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
            r.controller = new l(i, e), n.push(r.controller);
          }
        }

        return n;
      },
      resetElements: function resetElements() {
        var e = this;
        W.each(e.data.datasets, function (t, i) {
          e.getDatasetMeta(i).controller.reset();
        }, e);
      },
      reset: function reset() {
        this.resetElements(), this.tooltip.initialize();
      },
      update: function update(e) {
        var t,
            i,
            n = this;

        if (e && "object" == _typeof(e) || (e = {
          duration: e,
          lazy: arguments[1]
        }), Ut(n), Pt._invalidate(n), !1 !== Pt.notify(n, "beforeUpdate")) {
          n.tooltip._data = n.data;
          var o = n.buildOrUpdateControllers();

          for (t = 0, i = n.data.datasets.length; t < i; t++) {
            n.getDatasetMeta(t).controller.buildOrUpdateElements();
          }

          n.updateLayout(), n.options.animation && n.options.animation.duration && W.each(o, function (e) {
            e.reset();
          }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Pt.notify(n, "afterUpdate"), n._layers.sort(Xt("z", "_idx")), n._bufferedRender ? n._bufferedRequest = {
            duration: e.duration,
            easing: e.easing,
            lazy: e.lazy
          } : n.render(e);
        }
      },
      updateLayout: function updateLayout() {
        var e = this;
        !1 !== Pt.notify(e, "beforeLayout") && (gt.update(this, this.width, this.height), e._layers = [], W.each(e.boxes, function (t) {
          t._configure && t._configure(), e._layers.push.apply(e._layers, t._layers());
        }, e), e._layers.forEach(function (e, t) {
          e._idx = t;
        }), Pt.notify(e, "afterScaleUpdate"), Pt.notify(e, "afterLayout"));
      },
      updateDatasets: function updateDatasets() {
        if (!1 !== Pt.notify(this, "beforeDatasetsUpdate")) {
          for (var e = 0, t = this.data.datasets.length; e < t; ++e) {
            this.updateDataset(e);
          }

          Pt.notify(this, "afterDatasetsUpdate");
        }
      },
      updateDataset: function updateDataset(e) {
        var t = this.getDatasetMeta(e),
            i = {
          meta: t,
          index: e
        };
        !1 !== Pt.notify(this, "beforeDatasetUpdate", [i]) && (t.controller._update(), Pt.notify(this, "afterDatasetUpdate", [i]));
      },
      render: function render(e) {
        var t = this;
        e && "object" == _typeof(e) || (e = {
          duration: e,
          lazy: arguments[1]
        });
        var i = t.options.animation,
            n = jt(e.duration, i && i.duration),
            o = e.lazy;

        if (!1 !== Pt.notify(t, "beforeRender")) {
          var a = function a(e) {
            Pt.notify(t, "afterRender"), W.callback(i && i.onComplete, [e], t);
          };

          if (i && n) {
            var r = new Q({
              numSteps: n / 16.66,
              easing: e.easing || i.easing,
              render: function render(e, t) {
                var i = W.easing.effects[t.easing],
                    n = t.currentStep,
                    o = n / t.numSteps;
                e.draw(i(o), o, n);
              },
              onAnimationProgress: i.onProgress,
              onAnimationComplete: a
            });
            Z.addAnimation(t, r, n, o);
          } else t.draw(), a(new Q({
            numSteps: 0,
            chart: t
          }));

          return t;
        }
      },
      draw: function draw(e) {
        var t,
            i,
            n = this;

        if (n.clear(), W.isNullOrUndef(e) && (e = 1), n.transition(e), !(n.width <= 0 || n.height <= 0) && !1 !== Pt.notify(n, "beforeDraw", [e])) {
          for (i = n._layers, t = 0; t < i.length && i[t].z <= 0; ++t) {
            i[t].draw(n.chartArea);
          }

          for (n.drawDatasets(e); t < i.length; ++t) {
            i[t].draw(n.chartArea);
          }

          n._drawTooltip(e), Pt.notify(n, "afterDraw", [e]);
        }
      },
      transition: function transition(e) {
        for (var t = 0, i = (this.data.datasets || []).length; t < i; ++t) {
          this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
        }

        this.tooltip.transition(e);
      },
      _getSortedDatasetMetas: function _getSortedDatasetMetas(e) {
        var t,
            i,
            n = [];

        for (t = 0, i = (this.data.datasets || []).length; t < i; ++t) {
          e && !this.isDatasetVisible(t) || n.push(this.getDatasetMeta(t));
        }

        return n.sort(Xt("order", "index")), n;
      },
      _getSortedVisibleDatasetMetas: function _getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      },
      drawDatasets: function drawDatasets(e) {
        var t, i;

        if (!1 !== Pt.notify(this, "beforeDatasetsDraw", [e])) {
          for (i = (t = this._getSortedVisibleDatasetMetas()).length - 1; i >= 0; --i) {
            this.drawDataset(t[i], e);
          }

          Pt.notify(this, "afterDatasetsDraw", [e]);
        }
      },
      drawDataset: function drawDataset(e, t) {
        var i = {
          meta: e,
          index: e.index,
          easingValue: t
        };
        !1 !== Pt.notify(this, "beforeDatasetDraw", [i]) && (e.controller.draw(t), Pt.notify(this, "afterDatasetDraw", [i]));
      },
      _drawTooltip: function _drawTooltip(e) {
        var t = this.tooltip,
            i = {
          tooltip: t,
          easingValue: e
        };
        !1 !== Pt.notify(this, "beforeTooltipDraw", [i]) && (t.draw(), Pt.notify(this, "afterTooltipDraw", [i]));
      },
      getElementAtEvent: function getElementAtEvent(e) {
        return at.modes.single(this, e);
      },
      getElementsAtEvent: function getElementsAtEvent(e) {
        return at.modes.label(this, e, {
          intersect: !0
        });
      },
      getElementsAtXAxis: function getElementsAtXAxis(e) {
        return at.modes["x-axis"](this, e, {
          intersect: !0
        });
      },
      getElementsAtEventForMode: function getElementsAtEventForMode(e, t, i) {
        var n = at.modes[t];
        return "function" == typeof n ? n(this, e, i) : [];
      },
      getDatasetAtEvent: function getDatasetAtEvent(e) {
        return at.modes.dataset(this, e, {
          intersect: !0
        });
      },
      getDatasetMeta: function getDatasetMeta(e) {
        var t = this.data.datasets[e];
        t._meta || (t._meta = {});
        var i = t._meta[this.id];
        return i || (i = t._meta[this.id] = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: t.order || 0,
          index: e
        }), i;
      },
      getVisibleDatasetCount: function getVisibleDatasetCount() {
        for (var e = 0, t = 0, i = this.data.datasets.length; t < i; ++t) {
          this.isDatasetVisible(t) && e++;
        }

        return e;
      },
      isDatasetVisible: function isDatasetVisible(e) {
        var t = this.getDatasetMeta(e);
        return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden;
      },
      generateLegend: function generateLegend() {
        return this.options.legendCallback(this);
      },
      destroyDatasetMeta: function destroyDatasetMeta(e) {
        var t = this.id,
            i = this.data.datasets[e],
            n = i._meta && i._meta[t];
        n && (n.controller.destroy(), delete i._meta[t]);
      },
      destroy: function destroy() {
        var e,
            t,
            i = this,
            n = i.canvas;

        for (i.stop(), e = 0, t = i.data.datasets.length; e < t; ++e) {
          i.destroyDatasetMeta(e);
        }

        n && (i.unbindEvents(), W.canvas.clear(i), At.releaseContext(i.ctx), i.canvas = null, i.ctx = null), Pt.notify(i, "destroy"), delete Kt.instances[i.id];
      },
      toBase64Image: function toBase64Image() {
        return this.canvas.toDataURL.apply(this.canvas, arguments);
      },
      initToolTip: function initToolTip() {
        var e = this;
        e.tooltip = new Wt({
          _chart: e,
          _chartInstance: e,
          _data: e.data,
          _options: e.options.tooltips
        }, e);
      },
      bindEvents: function bindEvents() {
        var e = this,
            t = e._listeners = {},
            i = function i() {
          e.eventHandler.apply(e, arguments);
        };

        W.each(e.options.events, function (n) {
          At.addEventListener(e, n, i), t[n] = i;
        }), e.options.responsive && (i = function i() {
          e.resize();
        }, At.addEventListener(e, "resize", i), t.resize = i);
      },
      unbindEvents: function unbindEvents() {
        var e = this,
            t = e._listeners;
        t && (delete e._listeners, W.each(t, function (t, i) {
          At.removeEventListener(e, i, t);
        }));
      },
      updateHoverStyle: function updateHoverStyle(e, t, i) {
        var n,
            o,
            a,
            r = i ? "set" : "remove";

        for (o = 0, a = e.length; o < a; ++o) {
          (n = e[o]) && this.getDatasetMeta(n._datasetIndex).controller[r + "HoverStyle"](n);
        }

        "dataset" === t && this.getDatasetMeta(e[0]._datasetIndex).controller["_" + r + "DatasetHoverStyle"]();
      },
      eventHandler: function eventHandler(e) {
        var t = this,
            i = t.tooltip;

        if (!1 !== Pt.notify(t, "beforeEvent", [e])) {
          t._bufferedRender = !0, t._bufferedRequest = null;
          var n = t.handleEvent(e);
          i && (n = i._start ? i.handleEvent(e) : n | i.handleEvent(e)), Pt.notify(t, "afterEvent", [e]);
          var o = t._bufferedRequest;
          return o ? t.render(o) : n && !t.animating && (t.stop(), t.render({
            duration: t.options.hover.animationDuration,
            lazy: !0
          })), t._bufferedRender = !1, t._bufferedRequest = null, t;
        }
      },
      handleEvent: function handleEvent(e) {
        var t,
            i = this,
            n = i.options || {},
            o = n.hover;
        return i.lastActive = i.lastActive || [], "mouseout" === e.type ? i.active = [] : i.active = i.getElementsAtEventForMode(e, o.mode, o), W.callback(n.onHover || n.hover.onHover, [e["native"], i.active], i), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(i, e["native"], i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), t = !W.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, t;
      }
    }), Kt.instances = {};
    var Qt = Kt;

    function Zt() {
      throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
    }

    function Jt(e) {
      this.options = e || {};
    }

    Kt.Controller = Kt, Kt.types = {}, W.configMerge = qt, W.scaleMerge = Vt, W.extend(Jt.prototype, {
      formats: Zt,
      parse: Zt,
      format: Zt,
      add: Zt,
      diff: Zt,
      startOf: Zt,
      endOf: Zt,
      _create: function _create(e) {
        return e;
      }
    }), Jt.override = function (e) {
      W.extend(Jt.prototype, e);
    };
    var ei = {
      _date: Jt
    },
        ti = {
      formatters: {
        values: function values(e) {
          return W.isArray(e) ? e : "" + e;
        },
        linear: function linear(e, t, i) {
          var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
          Math.abs(n) > 1 && e !== Math.floor(e) && (n = e - Math.floor(e));
          var o = W.log10(Math.abs(n)),
              a = "";
          if (0 !== e) {
            if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
              var r = W.log10(Math.abs(e)),
                  s = Math.floor(r) - Math.floor(o);
              s = Math.max(Math.min(s, 20), 0), a = e.toExponential(s);
            } else {
              var l = -1 * Math.floor(o);
              l = Math.max(Math.min(l, 20), 0), a = e.toFixed(l);
            }
          } else a = "0";
          return a;
        },
        logarithmic: function logarithmic(e, t, i) {
          var n = e / Math.pow(10, Math.floor(W.log10(e)));
          return 0 === e ? "0" : 1 === n || 2 === n || 5 === n || 0 === t || t === i.length - 1 ? e.toExponential() : "";
        }
      }
    },
        ii = W.isArray,
        ni = W.isNullOrUndef,
        oi = W.valueOrDefault,
        ai = W.valueAtIndexOrDefault;

    function ri(e, t, i) {
      var n,
          o = e.getTicks().length,
          a = Math.min(t, o - 1),
          r = e.getPixelForTick(a),
          s = e._startPixel,
          l = e._endPixel;
      if (!(i && (n = 1 === o ? Math.max(r - s, l - r) : 0 === t ? (e.getPixelForTick(1) - r) / 2 : (r - e.getPixelForTick(a - 1)) / 2, (r += a < t ? n : -n) < s - 1e-6 || r > l + 1e-6))) return r;
    }

    function si(e, t, i, n) {
      var o,
          a,
          r,
          s,
          l,
          d,
          c,
          u,
          h,
          p,
          f,
          g,
          m,
          v = i.length,
          b = [],
          y = [],
          x = [],
          w = 0,
          k = 0;

      for (o = 0; o < v; ++o) {
        if (s = i[o].label, l = i[o].major ? t.major : t.minor, e.font = d = l.string, c = n[d] = n[d] || {
          data: {},
          gc: []
        }, u = l.lineHeight, h = p = 0, ni(s) || ii(s)) {
          if (ii(s)) for (a = 0, r = s.length; a < r; ++a) {
            f = s[a], ni(f) || ii(f) || (h = W.measureText(e, c.data, c.gc, h, f), p += u);
          }
        } else h = W.measureText(e, c.data, c.gc, h, s), p = u;

        b.push(h), y.push(p), x.push(u / 2), w = Math.max(h, w), k = Math.max(p, k);
      }

      function T(e) {
        return {
          width: b[e] || 0,
          height: y[e] || 0,
          offset: x[e] || 0
        };
      }

      return function (e, t) {
        W.each(e, function (e) {
          var i,
              n = e.gc,
              o = n.length / 2;

          if (o > t) {
            for (i = 0; i < o; ++i) {
              delete e.data[n[i]];
            }

            n.splice(0, o);
          }
        });
      }(n, v), g = b.indexOf(w), m = y.indexOf(k), {
        first: T(0),
        last: T(v - 1),
        widest: T(g),
        highest: T(m)
      };
    }

    function li(e) {
      return e.drawTicks ? e.tickMarkLength : 0;
    }

    function di(e) {
      var t, i;
      return e.display ? (t = W.options._parseFont(e), i = W.options.toPadding(e.padding), t.lineHeight + i.height) : 0;
    }

    function ci(e, t) {
      return W.extend(W.options._parseFont({
        fontFamily: oi(t.fontFamily, e.fontFamily),
        fontSize: oi(t.fontSize, e.fontSize),
        fontStyle: oi(t.fontStyle, e.fontStyle),
        lineHeight: oi(t.lineHeight, e.lineHeight)
      }), {
        color: W.options.resolve([t.fontColor, e.fontColor, E.global.defaultFontColor])
      });
    }

    function ui(e) {
      var t = ci(e, e.minor);
      return {
        minor: t,
        major: e.major.enabled ? ci(e, e.major) : t
      };
    }

    function hi(e) {
      var t,
          i,
          n,
          o = [];

      for (i = 0, n = e.length; i < n; ++i) {
        void 0 !== (t = e[i])._index && o.push(t);
      }

      return o;
    }

    function pi(e, t, i, n) {
      var o,
          a,
          r,
          s,
          l = oi(i, 0),
          d = Math.min(oi(n, e.length), e.length),
          c = 0;

      for (t = Math.ceil(t), n && (t = (o = n - i) / Math.floor(o / t)), s = l; s < 0;) {
        c++, s = Math.round(l + c * t);
      }

      for (a = Math.max(l, 0); a < d; a++) {
        r = e[a], a === s ? (r._index = a, c++, s = Math.round(l + c * t)) : delete r.label;
      }
    }

    E._set("scale", {
      display: !0,
      position: "left",
      offset: !1,
      gridLines: {
        display: !0,
        color: "rgba(0,0,0,0.1)",
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickMarkLength: 10,
        zeroLineWidth: 1,
        zeroLineColor: "rgba(0,0,0,0.25)",
        zeroLineBorderDash: [],
        zeroLineBorderDashOffset: 0,
        offsetGridLines: !1,
        borderDash: [],
        borderDashOffset: 0
      },
      scaleLabel: {
        display: !1,
        labelString: "",
        padding: {
          top: 4,
          bottom: 4
        }
      },
      ticks: {
        beginAtZero: !1,
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        padding: 0,
        reverse: !1,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 0,
        labelOffset: 0,
        callback: ti.formatters.values,
        minor: {},
        major: {}
      }
    });

    var fi = X.extend({
      zeroLineIndex: 0,
      getPadding: function getPadding() {
        return {
          left: this.paddingLeft || 0,
          top: this.paddingTop || 0,
          right: this.paddingRight || 0,
          bottom: this.paddingBottom || 0
        };
      },
      getTicks: function getTicks() {
        return this._ticks;
      },
      _getLabels: function _getLabels() {
        var e = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [];
      },
      mergeTicksOptions: function mergeTicksOptions() {},
      beforeUpdate: function beforeUpdate() {
        W.callback(this.options.beforeUpdate, [this]);
      },
      update: function update(e, t, i) {
        var n,
            o,
            a,
            r,
            s,
            l = this,
            d = l.options.ticks,
            c = d.sampleSize;
        if (l.beforeUpdate(), l.maxWidth = e, l.maxHeight = t, l.margins = W.extend({
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, i), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), r = l.buildTicks() || [], (!(r = l.afterBuildTicks(r) || r) || !r.length) && l.ticks) for (r = [], n = 0, o = l.ticks.length; n < o; ++n) {
          r.push({
            value: l.ticks[n],
            major: !1
          });
        }
        return l._ticks = r, s = c < r.length, a = l._convertTicksToLabels(s ? function (e, t) {
          for (var i = [], n = e.length / t, o = 0, a = e.length; o < a; o += n) {
            i.push(e[Math.floor(o)]);
          }

          return i;
        }(r, c) : r), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = d.display && (d.autoSkip || "auto" === d.source) ? l._autoSkip(r) : r, s && (a = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = a, l.afterUpdate(), l.minSize;
      },
      _configure: function _configure() {
        var e,
            t,
            i = this,
            n = i.options.ticks.reverse;
        i.isHorizontal() ? (e = i.left, t = i.right) : (e = i.top, t = i.bottom, n = !n), i._startPixel = e, i._endPixel = t, i._reversePixels = n, i._length = t - e;
      },
      afterUpdate: function afterUpdate() {
        W.callback(this.options.afterUpdate, [this]);
      },
      beforeSetDimensions: function beforeSetDimensions() {
        W.callback(this.options.beforeSetDimensions, [this]);
      },
      setDimensions: function setDimensions() {
        var e = this;
        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0;
      },
      afterSetDimensions: function afterSetDimensions() {
        W.callback(this.options.afterSetDimensions, [this]);
      },
      beforeDataLimits: function beforeDataLimits() {
        W.callback(this.options.beforeDataLimits, [this]);
      },
      determineDataLimits: W.noop,
      afterDataLimits: function afterDataLimits() {
        W.callback(this.options.afterDataLimits, [this]);
      },
      beforeBuildTicks: function beforeBuildTicks() {
        W.callback(this.options.beforeBuildTicks, [this]);
      },
      buildTicks: W.noop,
      afterBuildTicks: function afterBuildTicks(e) {
        var t = this;
        return ii(e) && e.length ? W.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = W.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e);
      },
      beforeTickToLabelConversion: function beforeTickToLabelConversion() {
        W.callback(this.options.beforeTickToLabelConversion, [this]);
      },
      convertTicksToLabels: function convertTicksToLabels() {
        var e = this.options.ticks;
        this.ticks = this.ticks.map(e.userCallback || e.callback, this);
      },
      afterTickToLabelConversion: function afterTickToLabelConversion() {
        W.callback(this.options.afterTickToLabelConversion, [this]);
      },
      beforeCalculateTickRotation: function beforeCalculateTickRotation() {
        W.callback(this.options.beforeCalculateTickRotation, [this]);
      },
      calculateTickRotation: function calculateTickRotation() {
        var e,
            t,
            i,
            n,
            o,
            a,
            r,
            s = this,
            l = s.options,
            d = l.ticks,
            c = s.getTicks().length,
            u = d.minRotation || 0,
            h = d.maxRotation,
            p = u;
        !s._isVisible() || !d.display || u >= h || c <= 1 || !s.isHorizontal() ? s.labelRotation = u : (t = (e = s._getLabelSizes()).widest.width, i = e.highest.height - e.highest.offset, n = Math.min(s.maxWidth, s.chart.width - t), t + 6 > (o = l.offset ? s.maxWidth / c : n / (c - 1)) && (o = n / (c - (l.offset ? .5 : 1)), a = s.maxHeight - li(l.gridLines) - d.padding - di(l.scaleLabel), r = Math.sqrt(t * t + i * i), p = W.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / o, 1)), Math.asin(Math.min(a / r, 1)) - Math.asin(i / r))), p = Math.max(u, Math.min(h, p))), s.labelRotation = p);
      },
      afterCalculateTickRotation: function afterCalculateTickRotation() {
        W.callback(this.options.afterCalculateTickRotation, [this]);
      },
      beforeFit: function beforeFit() {
        W.callback(this.options.beforeFit, [this]);
      },
      fit: function fit() {
        var e = this,
            t = e.minSize = {
          width: 0,
          height: 0
        },
            i = e.chart,
            n = e.options,
            o = n.ticks,
            a = n.scaleLabel,
            r = n.gridLines,
            s = e._isVisible(),
            l = "bottom" === n.position,
            d = e.isHorizontal();

        if (d ? t.width = e.maxWidth : s && (t.width = li(r) + di(a)), d ? s && (t.height = li(r) + di(a)) : t.height = e.maxHeight, o.display && s) {
          var c = ui(o),
              u = e._getLabelSizes(),
              h = u.first,
              p = u.last,
              f = u.widest,
              g = u.highest,
              m = .4 * c.minor.lineHeight,
              v = o.padding;

          if (d) {
            var b = 0 !== e.labelRotation,
                y = W.toRadians(e.labelRotation),
                x = Math.cos(y),
                w = Math.sin(y),
                k = w * f.width + x * (g.height - (b ? g.offset : 0)) + (b ? 0 : m);
            t.height = Math.min(e.maxHeight, t.height + k + v);

            var T,
                S,
                _ = e.getPixelForTick(0) - e.left,
                C = e.right - e.getPixelForTick(e.getTicks().length - 1);

            b ? (T = l ? x * h.width + w * h.offset : w * (h.height - h.offset), S = l ? w * (p.height - p.offset) : x * p.width + w * p.offset) : (T = h.width / 2, S = p.width / 2), e.paddingLeft = Math.max((T - _) * e.width / (e.width - _), 0) + 3, e.paddingRight = Math.max((S - C) * e.width / (e.width - C), 0) + 3;
          } else {
            var M = o.mirror ? 0 : f.width + v + m;
            t.width = Math.min(e.maxWidth, t.width + M), e.paddingTop = h.height / 2, e.paddingBottom = p.height / 2;
          }
        }

        e.handleMargins(), d ? (e.width = e._length = i.width - e.margins.left - e.margins.right, e.height = t.height) : (e.width = t.width, e.height = e._length = i.height - e.margins.top - e.margins.bottom);
      },
      handleMargins: function handleMargins() {
        var e = this;
        e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left), e.margins.top = Math.max(e.paddingTop, e.margins.top), e.margins.right = Math.max(e.paddingRight, e.margins.right), e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom));
      },
      afterFit: function afterFit() {
        W.callback(this.options.afterFit, [this]);
      },
      isHorizontal: function isHorizontal() {
        var e = this.options.position;
        return "top" === e || "bottom" === e;
      },
      isFullWidth: function isFullWidth() {
        return this.options.fullWidth;
      },
      getRightValue: function getRightValue(e) {
        if (ni(e)) return NaN;
        if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN;
        if (e) if (this.isHorizontal()) {
          if (void 0 !== e.x) return this.getRightValue(e.x);
        } else if (void 0 !== e.y) return this.getRightValue(e.y);
        return e;
      },
      _convertTicksToLabels: function _convertTicksToLabels(e) {
        var t,
            i,
            n,
            o = this;

        for (o.ticks = e.map(function (e) {
          return e.value;
        }), o.beforeTickToLabelConversion(), t = o.convertTicksToLabels(e) || o.ticks, o.afterTickToLabelConversion(), i = 0, n = e.length; i < n; ++i) {
          e[i].label = t[i];
        }

        return t;
      },
      _getLabelSizes: function _getLabelSizes() {
        var e = this,
            t = e._labelSizes;
        return t || (e._labelSizes = t = si(e.ctx, ui(e.options.ticks), e.getTicks(), e.longestTextCache), e.longestLabelWidth = t.widest.width), t;
      },
      _parseValue: function _parseValue(e) {
        var t, i, n, o;
        return ii(e) ? (t = +this.getRightValue(e[0]), i = +this.getRightValue(e[1]), n = Math.min(t, i), o = Math.max(t, i)) : (t = void 0, i = e = +this.getRightValue(e), n = e, o = e), {
          min: n,
          max: o,
          start: t,
          end: i
        };
      },
      _getScaleLabel: function _getScaleLabel(e) {
        var t = this._parseValue(e);

        return void 0 !== t.start ? "[" + t.start + ", " + t.end + "]" : +this.getRightValue(e);
      },
      getLabelForIndex: W.noop,
      getPixelForValue: W.noop,
      getValueForPixel: W.noop,
      getPixelForTick: function getPixelForTick(e) {
        var t = this.options.offset,
            i = this._ticks.length,
            n = 1 / Math.max(i - (t ? 0 : 1), 1);
        return e < 0 || e > i - 1 ? null : this.getPixelForDecimal(e * n + (t ? n / 2 : 0));
      },
      getPixelForDecimal: function getPixelForDecimal(e) {
        return this._reversePixels && (e = 1 - e), this._startPixel + e * this._length;
      },
      getDecimalForPixel: function getDecimalForPixel(e) {
        var t = (e - this._startPixel) / this._length;
        return this._reversePixels ? 1 - t : t;
      },
      getBasePixel: function getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      },
      getBaseValue: function getBaseValue() {
        var e = this.min,
            t = this.max;
        return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
      },
      _autoSkip: function _autoSkip(e) {
        var t,
            i,
            n,
            o,
            a = this.options.ticks,
            r = this._length,
            s = a.maxTicksLimit || r / this._tickSize() + 1,
            l = a.major.enabled ? function (e) {
          var t,
              i,
              n = [];

          for (t = 0, i = e.length; t < i; t++) {
            e[t].major && n.push(t);
          }

          return n;
        }(e) : [],
            d = l.length,
            c = l[0],
            u = l[d - 1];
        if (d > s) return function (e, t, i) {
          var n,
              o,
              a = 0,
              r = t[0];

          for (i = Math.ceil(i), n = 0; n < e.length; n++) {
            o = e[n], n === r ? (o._index = n, r = t[++a * i]) : delete o.label;
          }
        }(e, l, d / s), hi(e);

        if (n = function (e, t, i, n) {
          var o,
              a,
              r,
              s,
              l = function (e) {
            var t,
                i,
                n = e.length;
            if (n < 2) return !1;

            for (i = e[0], t = 1; t < n; ++t) {
              if (e[t] - e[t - 1] !== i) return !1;
            }

            return i;
          }(e),
              d = (t.length - 1) / n;

          if (!l) return Math.max(d, 1);

          for (r = 0, s = (o = W.math._factorize(l)).length - 1; r < s; r++) {
            if ((a = o[r]) > d) return a;
          }

          return Math.max(d, 1);
        }(l, e, 0, s), d > 0) {
          for (t = 0, i = d - 1; t < i; t++) {
            pi(e, n, l[t], l[t + 1]);
          }

          return o = d > 1 ? (u - c) / (d - 1) : null, pi(e, n, W.isNullOrUndef(o) ? 0 : c - o, c), pi(e, n, u, W.isNullOrUndef(o) ? e.length : u + o), hi(e);
        }

        return pi(e, n), hi(e);
      },
      _tickSize: function _tickSize() {
        var e = this.options.ticks,
            t = W.toRadians(this.labelRotation),
            i = Math.abs(Math.cos(t)),
            n = Math.abs(Math.sin(t)),
            o = this._getLabelSizes(),
            a = e.autoSkipPadding || 0,
            r = o ? o.widest.width + a : 0,
            s = o ? o.highest.height + a : 0;

        return this.isHorizontal() ? s * i > r * n ? r / i : s / n : s * n < r * i ? s / i : r / n;
      },
      _isVisible: function _isVisible() {
        var e,
            t,
            i,
            n = this.chart,
            o = this.options.display;
        if ("auto" !== o) return !!o;

        for (e = 0, t = n.data.datasets.length; e < t; ++e) {
          if (n.isDatasetVisible(e) && ((i = n.getDatasetMeta(e)).xAxisID === this.id || i.yAxisID === this.id)) return !0;
        }

        return !1;
      },
      _computeGridLineItems: function _computeGridLineItems(e) {
        var t,
            i,
            n,
            o,
            a,
            r,
            s,
            l,
            d,
            c,
            u,
            h,
            p,
            f,
            g,
            m,
            v,
            b = this,
            y = b.chart,
            x = b.options,
            w = x.gridLines,
            k = x.position,
            T = w.offsetGridLines,
            S = b.isHorizontal(),
            _ = b._ticksToDraw,
            C = _.length + (T ? 1 : 0),
            M = li(w),
            D = [],
            A = w.drawBorder ? ai(w.lineWidth, 0, 0) : 0,
            P = A / 2,
            $ = W._alignPixel,
            O = function O(e) {
          return $(y, e, A);
        };

        for ("top" === k ? (t = O(b.bottom), s = b.bottom - M, d = t - P, u = O(e.top) + P, p = e.bottom) : "bottom" === k ? (t = O(b.top), u = e.top, p = O(e.bottom) - P, s = t + P, d = b.top + M) : "left" === k ? (t = O(b.right), r = b.right - M, l = t - P, c = O(e.left) + P, h = e.right) : (t = O(b.left), c = e.left, h = O(e.right) - P, r = t + P, l = b.left + M), i = 0; i < C; ++i) {
          n = _[i] || {}, ni(n.label) && i < _.length || (i === b.zeroLineIndex && x.offset === T ? (f = w.zeroLineWidth, g = w.zeroLineColor, m = w.zeroLineBorderDash || [], v = w.zeroLineBorderDashOffset || 0) : (f = ai(w.lineWidth, i, 1), g = ai(w.color, i, "rgba(0,0,0,0.1)"), m = w.borderDash || [], v = w.borderDashOffset || 0), void 0 !== (o = ri(b, n._index || i, T)) && (a = $(y, o, f), S ? r = l = c = h = a : s = d = u = p = a, D.push({
            tx1: r,
            ty1: s,
            tx2: l,
            ty2: d,
            x1: c,
            y1: u,
            x2: h,
            y2: p,
            width: f,
            color: g,
            borderDash: m,
            borderDashOffset: v
          })));
        }

        return D.ticksLength = C, D.borderValue = t, D;
      },
      _computeLabelItems: function _computeLabelItems() {
        var e,
            t,
            i,
            n,
            o,
            a,
            r,
            s,
            l,
            d,
            c,
            u,
            h = this,
            p = h.options,
            f = p.ticks,
            g = p.position,
            m = f.mirror,
            v = h.isHorizontal(),
            b = h._ticksToDraw,
            y = ui(f),
            x = f.padding,
            w = li(p.gridLines),
            k = -W.toRadians(h.labelRotation),
            T = [];

        for ("top" === g ? (a = h.bottom - w - x, r = k ? "left" : "center") : "bottom" === g ? (a = h.top + w + x, r = k ? "right" : "center") : "left" === g ? (o = h.right - (m ? 0 : w) - x, r = m ? "left" : "right") : (o = h.left + (m ? 0 : w) + x, r = m ? "right" : "left"), e = 0, t = b.length; e < t; ++e) {
          n = (i = b[e]).label, ni(n) || (s = h.getPixelForTick(i._index || e) + f.labelOffset, d = (l = i.major ? y.major : y.minor).lineHeight, c = ii(n) ? n.length : 1, v ? (o = s, u = "top" === g ? ((k ? 1 : .5) - c) * d : (k ? 0 : .5) * d) : (a = s, u = (1 - c) * d / 2), T.push({
            x: o,
            y: a,
            rotation: k,
            label: n,
            font: l,
            textOffset: u,
            textAlign: r
          }));
        }

        return T;
      },
      _drawGrid: function _drawGrid(e) {
        var t = this,
            i = t.options.gridLines;

        if (i.display) {
          var n,
              o,
              a,
              r,
              s,
              l = t.ctx,
              d = t.chart,
              c = W._alignPixel,
              u = i.drawBorder ? ai(i.lineWidth, 0, 0) : 0,
              h = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));

          for (a = 0, r = h.length; a < r; ++a) {
            n = (s = h[a]).width, o = s.color, n && o && (l.save(), l.lineWidth = n, l.strokeStyle = o, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), i.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), i.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
          }

          if (u) {
            var p,
                f,
                g,
                m,
                v = u,
                b = ai(i.lineWidth, h.ticksLength - 1, 1),
                y = h.borderValue;
            t.isHorizontal() ? (p = c(d, t.left, v) - v / 2, f = c(d, t.right, b) + b / 2, g = m = y) : (g = c(d, t.top, v) - v / 2, m = c(d, t.bottom, b) + b / 2, p = f = y), l.lineWidth = u, l.strokeStyle = ai(i.color, 0), l.beginPath(), l.moveTo(p, g), l.lineTo(f, m), l.stroke();
          }
        }
      },
      _drawLabels: function _drawLabels() {
        var e = this;

        if (e.options.ticks.display) {
          var t,
              i,
              n,
              o,
              a,
              r,
              s,
              l,
              d = e.ctx,
              c = e._labelItems || (e._labelItems = e._computeLabelItems());

          for (t = 0, n = c.length; t < n; ++t) {
            if (r = (a = c[t]).font, d.save(), d.translate(a.x, a.y), d.rotate(a.rotation), d.font = r.string, d.fillStyle = r.color, d.textBaseline = "middle", d.textAlign = a.textAlign, s = a.label, l = a.textOffset, ii(s)) for (i = 0, o = s.length; i < o; ++i) {
              d.fillText("" + s[i], 0, l), l += r.lineHeight;
            } else d.fillText(s, 0, l);
            d.restore();
          }
        }
      },
      _drawTitle: function _drawTitle() {
        var e = this,
            t = e.ctx,
            i = e.options,
            n = i.scaleLabel;

        if (n.display) {
          var o,
              a,
              r = oi(n.fontColor, E.global.defaultFontColor),
              s = W.options._parseFont(n),
              l = W.options.toPadding(n.padding),
              d = s.lineHeight / 2,
              c = i.position,
              u = 0;

          if (e.isHorizontal()) o = e.left + e.width / 2, a = "bottom" === c ? e.bottom - d - l.bottom : e.top + d + l.top;else {
            var h = "left" === c;
            o = h ? e.left + d + l.top : e.right - d - l.top, a = e.top + e.height / 2, u = h ? -.5 * Math.PI : .5 * Math.PI;
          }
          t.save(), t.translate(o, a), t.rotate(u), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = r, t.font = s.string, t.fillText(n.labelString, 0, 0), t.restore();
        }
      },
      draw: function draw(e) {
        this._isVisible() && (this._drawGrid(e), this._drawTitle(), this._drawLabels());
      },
      _layers: function _layers() {
        var e = this,
            t = e.options,
            i = t.ticks && t.ticks.z || 0,
            n = t.gridLines && t.gridLines.z || 0;
        return e._isVisible() && i !== n && e.draw === e._draw ? [{
          z: n,
          draw: function draw() {
            e._drawGrid.apply(e, arguments), e._drawTitle.apply(e, arguments);
          }
        }, {
          z: i,
          draw: function draw() {
            e._drawLabels.apply(e, arguments);
          }
        }] : [{
          z: i,
          draw: function draw() {
            e.draw.apply(e, arguments);
          }
        }];
      },
      _getMatchingVisibleMetas: function _getMatchingVisibleMetas(e) {
        var t = this,
            i = t.isHorizontal();
        return t.chart._getSortedVisibleDatasetMetas().filter(function (n) {
          return (!e || n.type === e) && (i ? n.xAxisID === t.id : n.yAxisID === t.id);
        });
      }
    });
    fi.prototype._draw = fi.prototype.draw;
    var gi = fi,
        mi = W.isNullOrUndef,
        vi = gi.extend({
      determineDataLimits: function determineDataLimits() {
        var e,
            t = this,
            i = t._getLabels(),
            n = t.options.ticks,
            o = n.min,
            a = n.max,
            r = 0,
            s = i.length - 1;

        void 0 !== o && (e = i.indexOf(o)) >= 0 && (r = e), void 0 !== a && (e = i.indexOf(a)) >= 0 && (s = e), t.minIndex = r, t.maxIndex = s, t.min = i[r], t.max = i[s];
      },
      buildTicks: function buildTicks() {
        var e = this._getLabels(),
            t = this.minIndex,
            i = this.maxIndex;

        this.ticks = 0 === t && i === e.length - 1 ? e : e.slice(t, i + 1);
      },
      getLabelForIndex: function getLabelForIndex(e, t) {
        var i = this.chart;
        return i.getDatasetMeta(t).controller._getValueScaleId() === this.id ? this.getRightValue(i.data.datasets[t].data[e]) : this._getLabels()[e];
      },
      _configure: function _configure() {
        var e = this,
            t = e.options.offset,
            i = e.ticks;
        gi.prototype._configure.call(e), e.isHorizontal() || (e._reversePixels = !e._reversePixels), i && (e._startValue = e.minIndex - (t ? .5 : 0), e._valueRange = Math.max(i.length - (t ? 0 : 1), 1));
      },
      getPixelForValue: function getPixelForValue(e, t, i) {
        var n,
            o,
            a,
            r = this;
        return mi(t) || mi(i) || (e = r.chart.data.datasets[i].data[t]), mi(e) || (n = r.isHorizontal() ? e.x : e.y), (void 0 !== n || void 0 !== e && isNaN(t)) && (o = r._getLabels(), e = W.valueOrDefault(n, e), t = -1 !== (a = o.indexOf(e)) ? a : t, isNaN(t) && (t = e)), r.getPixelForDecimal((t - r._startValue) / r._valueRange);
      },
      getPixelForTick: function getPixelForTick(e) {
        var t = this.ticks;
        return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex);
      },
      getValueForPixel: function getValueForPixel(e) {
        var t = Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
        return Math.min(Math.max(t, 0), this.ticks.length - 1);
      },
      getBasePixel: function getBasePixel() {
        return this.bottom;
      }
    }),
        bi = {
      position: "bottom"
    };
    vi._defaults = bi;
    var yi = W.noop,
        xi = W.isNullOrUndef,
        wi = gi.extend({
      getRightValue: function getRightValue(e) {
        return "string" == typeof e ? +e : gi.prototype.getRightValue.call(this, e);
      },
      handleTickRangeOptions: function handleTickRangeOptions() {
        var e = this,
            t = e.options.ticks;

        if (t.beginAtZero) {
          var i = W.sign(e.min),
              n = W.sign(e.max);
          i < 0 && n < 0 ? e.max = 0 : i > 0 && n > 0 && (e.min = 0);
        }

        var o = void 0 !== t.min || void 0 !== t.suggestedMin,
            a = void 0 !== t.max || void 0 !== t.suggestedMax;
        void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), o !== a && e.min >= e.max && (o ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--);
      },
      getTickLimit: function getTickLimit() {
        var e,
            t = this.options.ticks,
            i = t.stepSize,
            n = t.maxTicksLimit;
        return i ? e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (e = this._computeTickLimit(), n = n || 11), n && (e = Math.min(n, e)), e;
      },
      _computeTickLimit: function _computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      },
      handleDirectionalChanges: yi,
      buildTicks: function buildTicks() {
        var e = this,
            t = e.options.ticks,
            i = e.getTickLimit(),
            n = {
          maxTicks: i = Math.max(2, i),
          min: t.min,
          max: t.max,
          precision: t.precision,
          stepSize: W.valueOrDefault(t.fixedStepSize, t.stepSize)
        },
            o = e.ticks = function (e, t) {
          var i,
              n,
              o,
              a,
              r = [],
              s = e.stepSize,
              l = s || 1,
              d = e.maxTicks - 1,
              c = e.min,
              u = e.max,
              h = e.precision,
              p = t.min,
              f = t.max,
              g = W.niceNum((f - p) / d / l) * l;
          if (g < 1e-14 && xi(c) && xi(u)) return [p, f];
          (a = Math.ceil(f / g) - Math.floor(p / g)) > d && (g = W.niceNum(a * g / d / l) * l), s || xi(h) ? i = Math.pow(10, W._decimalPlaces(g)) : (i = Math.pow(10, h), g = Math.ceil(g * i) / i), n = Math.floor(p / g) * g, o = Math.ceil(f / g) * g, s && (!xi(c) && W.almostWhole(c / g, g / 1e3) && (n = c), !xi(u) && W.almostWhole(u / g, g / 1e3) && (o = u)), a = (o - n) / g, a = W.almostEquals(a, Math.round(a), g / 1e3) ? Math.round(a) : Math.ceil(a), n = Math.round(n * i) / i, o = Math.round(o * i) / i, r.push(xi(c) ? n : c);

          for (var m = 1; m < a; ++m) {
            r.push(Math.round((n + m * g) * i) / i);
          }

          return r.push(xi(u) ? o : u), r;
        }(n, e);

        e.handleDirectionalChanges(), e.max = W.max(o), e.min = W.min(o), t.reverse ? (o.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max);
      },
      convertTicksToLabels: function convertTicksToLabels() {
        var e = this;
        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), gi.prototype.convertTicksToLabels.call(e);
      },
      _configure: function _configure() {
        var e,
            t = this,
            i = t.getTicks(),
            n = t.min,
            o = t.max;
        gi.prototype._configure.call(t), t.options.offset && i.length && (n -= e = (o - n) / Math.max(i.length - 1, 1) / 2, o += e), t._startValue = n, t._endValue = o, t._valueRange = o - n;
      }
    }),
        ki = {
      position: "left",
      ticks: {
        callback: ti.formatters.linear
      }
    };

    function Ti(e, t, i, n) {
      var o,
          a,
          r = e.options,
          s = function (e, t, i) {
        var n = [i.type, void 0 === t && void 0 === i.stack ? i.index : "", i.stack].join(".");
        return void 0 === e[n] && (e[n] = {
          pos: [],
          neg: []
        }), e[n];
      }(t, r.stacked, i),
          l = s.pos,
          d = s.neg,
          c = n.length;

      for (o = 0; o < c; ++o) {
        a = e._parseValue(n[o]), isNaN(a.min) || isNaN(a.max) || i.data[o].hidden || (l[o] = l[o] || 0, d[o] = d[o] || 0, r.relativePoints ? l[o] = 100 : a.min < 0 || a.max < 0 ? d[o] += a.min : l[o] += a.max);
      }
    }

    function Si(e, t, i) {
      var n,
          o,
          a = i.length;

      for (n = 0; n < a; ++n) {
        o = e._parseValue(i[n]), isNaN(o.min) || isNaN(o.max) || t.data[n].hidden || (e.min = Math.min(e.min, o.min), e.max = Math.max(e.max, o.max));
      }
    }

    var _i = wi.extend({
      determineDataLimits: function determineDataLimits() {
        var e,
            t,
            i,
            n,
            o = this,
            a = o.options,
            r = o.chart.data.datasets,
            s = o._getMatchingVisibleMetas(),
            l = a.stacked,
            d = {},
            c = s.length;

        if (o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, void 0 === l) for (e = 0; !l && e < c; ++e) {
          l = void 0 !== (t = s[e]).stack;
        }

        for (e = 0; e < c; ++e) {
          i = r[(t = s[e]).index].data, l ? Ti(o, d, t, i) : Si(o, t, i);
        }

        W.each(d, function (e) {
          n = e.pos.concat(e.neg), o.min = Math.min(o.min, W.min(n)), o.max = Math.max(o.max, W.max(n));
        }), o.min = W.isFinite(o.min) && !isNaN(o.min) ? o.min : 0, o.max = W.isFinite(o.max) && !isNaN(o.max) ? o.max : 1, o.handleTickRangeOptions();
      },
      _computeTickLimit: function _computeTickLimit() {
        var e;
        return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = W.options._parseFont(this.options.ticks), Math.ceil(this.height / e.lineHeight));
      },
      handleDirectionalChanges: function handleDirectionalChanges() {
        this.isHorizontal() || this.ticks.reverse();
      },
      getLabelForIndex: function getLabelForIndex(e, t) {
        return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
      },
      getPixelForValue: function getPixelForValue(e) {
        return this.getPixelForDecimal((+this.getRightValue(e) - this._startValue) / this._valueRange);
      },
      getValueForPixel: function getValueForPixel(e) {
        return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
      },
      getPixelForTick: function getPixelForTick(e) {
        var t = this.ticksAsNumbers;
        return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e]);
      }
    }),
        Ci = ki;

    _i._defaults = Ci;
    var Mi = W.valueOrDefault,
        Di = W.math.log10,
        Ai = {
      position: "left",
      ticks: {
        callback: ti.formatters.logarithmic
      }
    };

    function Pi(e, t) {
      return W.isFinite(e) && e >= 0 ? e : t;
    }

    var $i = gi.extend({
      determineDataLimits: function determineDataLimits() {
        var e,
            t,
            i,
            n,
            o,
            a,
            r = this,
            s = r.options,
            l = r.chart,
            d = l.data.datasets,
            c = r.isHorizontal();

        function u(e) {
          return c ? e.xAxisID === r.id : e.yAxisID === r.id;
        }

        r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, r.minNotZero = Number.POSITIVE_INFINITY;
        var h = s.stacked;
        if (void 0 === h) for (e = 0; e < d.length; e++) {
          if (t = l.getDatasetMeta(e), l.isDatasetVisible(e) && u(t) && void 0 !== t.stack) {
            h = !0;
            break;
          }
        }

        if (s.stacked || h) {
          var p = {};

          for (e = 0; e < d.length; e++) {
            var f = [(t = l.getDatasetMeta(e)).type, void 0 === s.stacked && void 0 === t.stack ? e : "", t.stack].join(".");
            if (l.isDatasetVisible(e) && u(t)) for (void 0 === p[f] && (p[f] = []), o = 0, a = (n = d[e].data).length; o < a; o++) {
              var g = p[f];
              i = r._parseValue(n[o]), isNaN(i.min) || isNaN(i.max) || t.data[o].hidden || i.min < 0 || i.max < 0 || (g[o] = g[o] || 0, g[o] += i.max);
            }
          }

          W.each(p, function (e) {
            if (e.length > 0) {
              var t = W.min(e),
                  i = W.max(e);
              r.min = Math.min(r.min, t), r.max = Math.max(r.max, i);
            }
          });
        } else for (e = 0; e < d.length; e++) {
          if (t = l.getDatasetMeta(e), l.isDatasetVisible(e) && u(t)) for (o = 0, a = (n = d[e].data).length; o < a; o++) {
            i = r._parseValue(n[o]), isNaN(i.min) || isNaN(i.max) || t.data[o].hidden || i.min < 0 || i.max < 0 || (r.min = Math.min(i.min, r.min), r.max = Math.max(i.max, r.max), 0 !== i.min && (r.minNotZero = Math.min(i.min, r.minNotZero)));
          }
        }

        r.min = W.isFinite(r.min) ? r.min : null, r.max = W.isFinite(r.max) ? r.max : null, r.minNotZero = W.isFinite(r.minNotZero) ? r.minNotZero : null, this.handleTickRangeOptions();
      },
      handleTickRangeOptions: function handleTickRangeOptions() {
        var e = this,
            t = e.options.ticks;
        e.min = Pi(t.min, e.min), e.max = Pi(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(Di(e.min)) - 1), e.max = Math.pow(10, Math.floor(Di(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(Di(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(Di(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(Di(e.max))) : e.minNotZero = 1);
      },
      buildTicks: function buildTicks() {
        var e = this,
            t = e.options.ticks,
            i = !e.isHorizontal(),
            n = {
          min: Pi(t.min),
          max: Pi(t.max)
        },
            o = e.ticks = function (e, t) {
          var i,
              n,
              o = [],
              a = Mi(e.min, Math.pow(10, Math.floor(Di(t.min)))),
              r = Math.floor(Di(t.max)),
              s = Math.ceil(t.max / Math.pow(10, r));
          0 === a ? (i = Math.floor(Di(t.minNotZero)), n = Math.floor(t.minNotZero / Math.pow(10, i)), o.push(a), a = n * Math.pow(10, i)) : (i = Math.floor(Di(a)), n = Math.floor(a / Math.pow(10, i)));
          var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;

          do {
            o.push(a), 10 == ++n && (n = 1, l = ++i >= 0 ? 1 : l), a = Math.round(n * Math.pow(10, i) * l) / l;
          } while (i < r || i === r && n < s);

          var d = Mi(e.max, a);
          return o.push(d), o;
        }(n, e);

        e.max = W.max(o), e.min = W.min(o), t.reverse ? (i = !i, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), i && o.reverse();
      },
      convertTicksToLabels: function convertTicksToLabels() {
        this.tickValues = this.ticks.slice(), gi.prototype.convertTicksToLabels.call(this);
      },
      getLabelForIndex: function getLabelForIndex(e, t) {
        return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
      },
      getPixelForTick: function getPixelForTick(e) {
        var t = this.tickValues;
        return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e]);
      },
      _getFirstTickValue: function _getFirstTickValue(e) {
        var t = Math.floor(Di(e));
        return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t);
      },
      _configure: function _configure() {
        var e = this,
            t = e.min,
            i = 0;
        gi.prototype._configure.call(e), 0 === t && (t = e._getFirstTickValue(e.minNotZero), i = Mi(e.options.ticks.fontSize, E.global.defaultFontSize) / e._length), e._startValue = Di(t), e._valueOffset = i, e._valueRange = (Di(e.max) - Di(t)) / (1 - i);
      },
      getPixelForValue: function getPixelForValue(e) {
        var t = this,
            i = 0;
        return (e = +t.getRightValue(e)) > t.min && e > 0 && (i = (Di(e) - t._startValue) / t._valueRange + t._valueOffset), t.getPixelForDecimal(i);
      },
      getValueForPixel: function getValueForPixel(e) {
        var t = this,
            i = t.getDecimalForPixel(e);
        return 0 === i && 0 === t.min ? 0 : Math.pow(10, t._startValue + (i - t._valueOffset) * t._valueRange);
      }
    }),
        Oi = Ai;
    $i._defaults = Oi;
    var Ii = W.valueOrDefault,
        Li = W.valueAtIndexOrDefault,
        Fi = W.options.resolve,
        zi = {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        color: "rgba(0,0,0,0.1)",
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
      },
      gridLines: {
        circular: !1
      },
      ticks: {
        showLabelBackdrop: !0,
        backdropColor: "rgba(255,255,255,0.75)",
        backdropPaddingY: 2,
        backdropPaddingX: 2,
        callback: ti.formatters.linear
      },
      pointLabels: {
        display: !0,
        fontSize: 10,
        callback: function callback(e) {
          return e;
        }
      }
    };

    function Ei(e) {
      var t = e.ticks;
      return t.display && e.display ? Ii(t.fontSize, E.global.defaultFontSize) + 2 * t.backdropPaddingY : 0;
    }

    function Ri(e, t, i, n, o) {
      return e === n || e === o ? {
        start: t - i / 2,
        end: t + i / 2
      } : e < n || e > o ? {
        start: t - i,
        end: t
      } : {
        start: t,
        end: t + i
      };
    }

    function Bi(e) {
      return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right";
    }

    function Ni(e, t, i, n) {
      var o,
          a,
          r = i.y + n / 2;
      if (W.isArray(t)) for (o = 0, a = t.length; o < a; ++o) {
        e.fillText(t[o], i.x, r), r += n;
      } else e.fillText(t, i.x, r);
    }

    function Hi(e, t, i) {
      90 === e || 270 === e ? i.y -= t.h / 2 : (e > 270 || e < 90) && (i.y -= t.h);
    }

    function Wi(e) {
      return W.isNumber(e) ? e : 0;
    }

    var ji = wi.extend({
      setDimensions: function setDimensions() {
        var e = this;
        e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = Ei(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2;
      },
      determineDataLimits: function determineDataLimits() {
        var e = this,
            t = e.chart,
            i = Number.POSITIVE_INFINITY,
            n = Number.NEGATIVE_INFINITY;
        W.each(t.data.datasets, function (o, a) {
          if (t.isDatasetVisible(a)) {
            var r = t.getDatasetMeta(a);
            W.each(o.data, function (t, o) {
              var a = +e.getRightValue(t);
              isNaN(a) || r.data[o].hidden || (i = Math.min(a, i), n = Math.max(a, n));
            });
          }
        }), e.min = i === Number.POSITIVE_INFINITY ? 0 : i, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions();
      },
      _computeTickLimit: function _computeTickLimit() {
        return Math.ceil(this.drawingArea / Ei(this.options));
      },
      convertTicksToLabels: function convertTicksToLabels() {
        var e = this;
        wi.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(function () {
          var t = W.callback(e.options.pointLabels.callback, arguments, e);
          return t || 0 === t ? t : "";
        });
      },
      getLabelForIndex: function getLabelForIndex(e, t) {
        return +this.getRightValue(this.chart.data.datasets[t].data[e]);
      },
      fit: function fit() {
        var e = this.options;
        e.display && e.pointLabels.display ? function (e) {
          var t,
              i,
              n,
              o = W.options._parseFont(e.options.pointLabels),
              a = {
            l: 0,
            r: e.width,
            t: 0,
            b: e.height - e.paddingTop
          },
              r = {};

          e.ctx.font = o.string, e._pointLabelSizes = [];
          var s,
              l,
              d,
              c = e.chart.data.labels.length;

          for (t = 0; t < c; t++) {
            n = e.getPointPosition(t, e.drawingArea + 5), s = e.ctx, l = o.lineHeight, d = e.pointLabels[t], i = W.isArray(d) ? {
              w: W.longestText(s, s.font, d),
              h: d.length * l
            } : {
              w: s.measureText(d).width,
              h: l
            }, e._pointLabelSizes[t] = i;
            var u = e.getIndexAngle(t),
                h = W.toDegrees(u) % 360,
                p = Ri(h, n.x, i.w, 0, 180),
                f = Ri(h, n.y, i.h, 90, 270);
            p.start < a.l && (a.l = p.start, r.l = u), p.end > a.r && (a.r = p.end, r.r = u), f.start < a.t && (a.t = f.start, r.t = u), f.end > a.b && (a.b = f.end, r.b = u);
          }

          e.setReductions(e.drawingArea, a, r);
        }(this) : this.setCenterPoint(0, 0, 0, 0);
      },
      setReductions: function setReductions(e, t, i) {
        var n = this,
            o = t.l / Math.sin(i.l),
            a = Math.max(t.r - n.width, 0) / Math.sin(i.r),
            r = -t.t / Math.cos(i.t),
            s = -Math.max(t.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
        o = Wi(o), a = Wi(a), r = Wi(r), s = Wi(s), n.drawingArea = Math.min(Math.floor(e - (o + a) / 2), Math.floor(e - (r + s) / 2)), n.setCenterPoint(o, a, r, s);
      },
      setCenterPoint: function setCenterPoint(e, t, i, n) {
        var o = this,
            a = o.width - t - o.drawingArea,
            r = e + o.drawingArea,
            s = i + o.drawingArea,
            l = o.height - o.paddingTop - n - o.drawingArea;
        o.xCenter = Math.floor((r + a) / 2 + o.left), o.yCenter = Math.floor((s + l) / 2 + o.top + o.paddingTop);
      },
      getIndexAngle: function getIndexAngle(e) {
        var t = this.chart,
            i = (e * (360 / t.data.labels.length) + ((t.options || {}).startAngle || 0)) % 360;
        return (i < 0 ? i + 360 : i) * Math.PI * 2 / 360;
      },
      getDistanceFromCenterForValue: function getDistanceFromCenterForValue(e) {
        var t = this;
        if (W.isNullOrUndef(e)) return NaN;
        var i = t.drawingArea / (t.max - t.min);
        return t.options.ticks.reverse ? (t.max - e) * i : (e - t.min) * i;
      },
      getPointPosition: function getPointPosition(e, t) {
        var i = this.getIndexAngle(e) - Math.PI / 2;
        return {
          x: Math.cos(i) * t + this.xCenter,
          y: Math.sin(i) * t + this.yCenter
        };
      },
      getPointPositionForValue: function getPointPositionForValue(e, t) {
        return this.getPointPosition(e, this.getDistanceFromCenterForValue(t));
      },
      getBasePosition: function getBasePosition(e) {
        var t = this.min,
            i = this.max;
        return this.getPointPositionForValue(e || 0, this.beginAtZero ? 0 : t < 0 && i < 0 ? i : t > 0 && i > 0 ? t : 0);
      },
      _drawGrid: function _drawGrid() {
        var e,
            t,
            i,
            n = this,
            o = n.ctx,
            a = n.options,
            r = a.gridLines,
            s = a.angleLines,
            l = Ii(s.lineWidth, r.lineWidth),
            d = Ii(s.color, r.color);

        if (a.pointLabels.display && function (e) {
          var t = e.ctx,
              i = e.options,
              n = i.pointLabels,
              o = Ei(i),
              a = e.getDistanceFromCenterForValue(i.ticks.reverse ? e.min : e.max),
              r = W.options._parseFont(n);

          t.save(), t.font = r.string, t.textBaseline = "middle";

          for (var s = e.chart.data.labels.length - 1; s >= 0; s--) {
            var l = 0 === s ? o / 2 : 0,
                d = e.getPointPosition(s, a + l + 5),
                c = Li(n.fontColor, s, E.global.defaultFontColor);
            t.fillStyle = c;
            var u = e.getIndexAngle(s),
                h = W.toDegrees(u);
            t.textAlign = Bi(h), Hi(h, e._pointLabelSizes[s], d), Ni(t, e.pointLabels[s], d, r.lineHeight);
          }

          t.restore();
        }(n), r.display && W.each(n.ticks, function (e, i) {
          0 !== i && (t = n.getDistanceFromCenterForValue(n.ticksAsNumbers[i]), function (e, t, i, n) {
            var o,
                a = e.ctx,
                r = t.circular,
                s = e.chart.data.labels.length,
                l = Li(t.color, n - 1),
                d = Li(t.lineWidth, n - 1);

            if ((r || s) && l && d) {
              if (a.save(), a.strokeStyle = l, a.lineWidth = d, a.setLineDash && (a.setLineDash(t.borderDash || []), a.lineDashOffset = t.borderDashOffset || 0), a.beginPath(), r) a.arc(e.xCenter, e.yCenter, i, 0, 2 * Math.PI);else {
                o = e.getPointPosition(0, i), a.moveTo(o.x, o.y);

                for (var c = 1; c < s; c++) {
                  o = e.getPointPosition(c, i), a.lineTo(o.x, o.y);
                }
              }
              a.closePath(), a.stroke(), a.restore();
            }
          }(n, r, t, i));
        }), s.display && l && d) {
          for (o.save(), o.lineWidth = l, o.strokeStyle = d, o.setLineDash && (o.setLineDash(Fi([s.borderDash, r.borderDash, []])), o.lineDashOffset = Fi([s.borderDashOffset, r.borderDashOffset, 0])), e = n.chart.data.labels.length - 1; e >= 0; e--) {
            t = n.getDistanceFromCenterForValue(a.ticks.reverse ? n.min : n.max), i = n.getPointPosition(e, t), o.beginPath(), o.moveTo(n.xCenter, n.yCenter), o.lineTo(i.x, i.y), o.stroke();
          }

          o.restore();
        }
      },
      _drawLabels: function _drawLabels() {
        var e = this,
            t = e.ctx,
            i = e.options.ticks;

        if (i.display) {
          var n,
              o,
              a = e.getIndexAngle(0),
              r = W.options._parseFont(i),
              s = Ii(i.fontColor, E.global.defaultFontColor);

          t.save(), t.font = r.string, t.translate(e.xCenter, e.yCenter), t.rotate(a), t.textAlign = "center", t.textBaseline = "middle", W.each(e.ticks, function (a, l) {
            (0 !== l || i.reverse) && (n = e.getDistanceFromCenterForValue(e.ticksAsNumbers[l]), i.showLabelBackdrop && (o = t.measureText(a).width, t.fillStyle = i.backdropColor, t.fillRect(-o / 2 - i.backdropPaddingX, -n - r.size / 2 - i.backdropPaddingY, o + 2 * i.backdropPaddingX, r.size + 2 * i.backdropPaddingY)), t.fillStyle = s, t.fillText(a, 0, -n));
          }), t.restore();
        }
      },
      _drawTitle: W.noop
    }),
        Vi = zi;
    ji._defaults = Vi;
    var qi = W._deprecated,
        Ui = W.options.resolve,
        Yi = W.valueOrDefault,
        Gi = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Xi = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Ki = {
      millisecond: {
        common: !0,
        size: 1,
        steps: 1e3
      },
      second: {
        common: !0,
        size: 1e3,
        steps: 60
      },
      minute: {
        common: !0,
        size: 6e4,
        steps: 60
      },
      hour: {
        common: !0,
        size: 36e5,
        steps: 24
      },
      day: {
        common: !0,
        size: 864e5,
        steps: 30
      },
      week: {
        common: !1,
        size: 6048e5,
        steps: 4
      },
      month: {
        common: !0,
        size: 2628e6,
        steps: 12
      },
      quarter: {
        common: !1,
        size: 7884e6,
        steps: 4
      },
      year: {
        common: !0,
        size: 3154e7
      }
    },
        Qi = Object.keys(Ki);

    function Zi(e, t) {
      return e - t;
    }

    function Ji(e) {
      return W.valueOrDefault(e.time.min, e.ticks.min);
    }

    function en(e) {
      return W.valueOrDefault(e.time.max, e.ticks.max);
    }

    function tn(e, t, i, n) {
      var o = function (e, t, i) {
        for (var n, o, a, r = 0, s = e.length - 1; r >= 0 && r <= s;) {
          if (o = e[(n = r + s >> 1) - 1] || null, a = e[n], !o) return {
            lo: null,
            hi: a
          };
          if (a[t] < i) r = n + 1;else {
            if (!(o[t] > i)) return {
              lo: o,
              hi: a
            };
            s = n - 1;
          }
        }

        return {
          lo: a,
          hi: null
        };
      }(e, t, i),
          a = o.lo ? o.hi ? o.lo : e[e.length - 2] : e[0],
          r = o.lo ? o.hi ? o.hi : e[e.length - 1] : e[1],
          s = r[t] - a[t],
          l = s ? (i - a[t]) / s : 0,
          d = (r[n] - a[n]) * l;

      return a[n] + d;
    }

    function nn(e, t) {
      var i = e._adapter,
          n = e.options.time,
          o = n.parser,
          a = o || n.format,
          r = t;
      return "function" == typeof o && (r = o(r)), W.isFinite(r) || (r = "string" == typeof a ? i.parse(r, a) : i.parse(r)), null !== r ? +r : (o || "function" != typeof a || (r = a(t), W.isFinite(r) || (r = i.parse(r))), r);
    }

    function on(e, t) {
      if (W.isNullOrUndef(t)) return null;
      var i = e.options.time,
          n = nn(e, e.getRightValue(t));
      return null === n || i.round && (n = +e._adapter.startOf(n, i.round)), n;
    }

    function an(e, t, i, n) {
      var o,
          a,
          r,
          s = Qi.length;

      for (o = Qi.indexOf(e); o < s - 1; ++o) {
        if (r = (a = Ki[Qi[o]]).steps ? a.steps : Xi, a.common && Math.ceil((i - t) / (r * a.size)) <= n) return Qi[o];
      }

      return Qi[s - 1];
    }

    function rn(e, t, i) {
      var n,
          o,
          a = [],
          r = {},
          s = t.length;

      for (n = 0; n < s; ++n) {
        r[o = t[n]] = n, a.push({
          value: o,
          major: !1
        });
      }

      return 0 !== s && i ? function (e, t, i, n) {
        var o,
            a,
            r = e._adapter,
            s = +r.startOf(t[0].value, n),
            l = t[t.length - 1].value;

        for (o = s; o <= l; o = +r.add(o, 1, n)) {
          (a = i[o]) >= 0 && (t[a].major = !0);
        }

        return t;
      }(e, a, r, i) : a;
    }

    var sn = gi.extend({
      initialize: function initialize() {
        this.mergeTicksOptions(), gi.prototype.initialize.call(this);
      },
      update: function update() {
        var e = this,
            t = e.options,
            i = t.time || (t.time = {}),
            n = e._adapter = new ei._date(t.adapters.date);
        return qi("time scale", i.format, "time.format", "time.parser"), qi("time scale", i.min, "time.min", "ticks.min"), qi("time scale", i.max, "time.max", "ticks.max"), W.mergeIf(i.displayFormats, n.formats()), gi.prototype.update.apply(e, arguments);
      },
      getRightValue: function getRightValue(e) {
        return e && void 0 !== e.t && (e = e.t), gi.prototype.getRightValue.call(this, e);
      },
      determineDataLimits: function determineDataLimits() {
        var e,
            t,
            i,
            n,
            o,
            a,
            r,
            s = this,
            l = s.chart,
            d = s._adapter,
            c = s.options,
            u = c.time.unit || "day",
            h = Xi,
            p = Gi,
            f = [],
            g = [],
            m = [],
            v = s._getLabels();

        for (e = 0, i = v.length; e < i; ++e) {
          m.push(on(s, v[e]));
        }

        for (e = 0, i = (l.data.datasets || []).length; e < i; ++e) {
          if (l.isDatasetVisible(e)) {
            if (o = l.data.datasets[e].data, W.isObject(o[0])) for (g[e] = [], t = 0, n = o.length; t < n; ++t) {
              a = on(s, o[t]), f.push(a), g[e][t] = a;
            } else g[e] = m.slice(0), r || (f = f.concat(m), r = !0);
          } else g[e] = [];
        }

        m.length && (h = Math.min(h, m[0]), p = Math.max(p, m[m.length - 1])), f.length && (f = i > 1 ? function (e) {
          var t,
              i,
              n,
              o = {},
              a = [];

          for (t = 0, i = e.length; t < i; ++t) {
            o[n = e[t]] || (o[n] = !0, a.push(n));
          }

          return a;
        }(f).sort(Zi) : f.sort(Zi), h = Math.min(h, f[0]), p = Math.max(p, f[f.length - 1])), h = on(s, Ji(c)) || h, p = on(s, en(c)) || p, h = h === Xi ? +d.startOf(Date.now(), u) : h, p = p === Gi ? +d.endOf(Date.now(), u) + 1 : p, s.min = Math.min(h, p), s.max = Math.max(h + 1, p), s._table = [], s._timestamps = {
          data: f,
          datasets: g,
          labels: m
        };
      },
      buildTicks: function buildTicks() {
        var e,
            t,
            i,
            n = this,
            o = n.min,
            a = n.max,
            r = n.options,
            s = r.ticks,
            l = r.time,
            d = n._timestamps,
            c = [],
            u = n.getLabelCapacity(o),
            h = s.source,
            p = r.distribution;

        for (d = "data" === h || "auto" === h && "series" === p ? d.data : "labels" === h ? d.labels : function (e, t, i, n) {
          var o,
              a = e._adapter,
              r = e.options,
              s = r.time,
              l = s.unit || an(s.minUnit, t, i, n),
              d = Ui([s.stepSize, s.unitStepSize, 1]),
              c = "week" === l && s.isoWeekday,
              u = t,
              h = [];
          if (c && (u = +a.startOf(u, "isoWeek", c)), u = +a.startOf(u, c ? "day" : l), a.diff(i, t, l) > 1e5 * d) throw t + " and " + i + " are too far apart with stepSize of " + d + " " + l;

          for (o = u; o < i; o = +a.add(o, d, l)) {
            h.push(o);
          }

          return o !== i && "ticks" !== r.bounds || h.push(o), h;
        }(n, o, a, u), "ticks" === r.bounds && d.length && (o = d[0], a = d[d.length - 1]), o = on(n, Ji(r)) || o, a = on(n, en(r)) || a, e = 0, t = d.length; e < t; ++e) {
          (i = d[e]) >= o && i <= a && c.push(i);
        }

        return n.min = o, n.max = a, n._unit = l.unit || (s.autoSkip ? an(l.minUnit, n.min, n.max, u) : function (e, t, i, n, o) {
          var a, r;

          for (a = Qi.length - 1; a >= Qi.indexOf(i); a--) {
            if (r = Qi[a], Ki[r].common && e._adapter.diff(o, n, r) >= t - 1) return r;
          }

          return Qi[i ? Qi.indexOf(i) : 0];
        }(n, c.length, l.minUnit, n.min, n.max)), n._majorUnit = s.major.enabled && "year" !== n._unit ? function (e) {
          for (var t = Qi.indexOf(e) + 1, i = Qi.length; t < i; ++t) {
            if (Ki[Qi[t]].common) return Qi[t];
          }
        }(n._unit) : void 0, n._table = function (e, t, i, n) {
          if ("linear" === n || !e.length) return [{
            time: t,
            pos: 0
          }, {
            time: i,
            pos: 1
          }];
          var o,
              a,
              r,
              s,
              l,
              d = [],
              c = [t];

          for (o = 0, a = e.length; o < a; ++o) {
            (s = e[o]) > t && s < i && c.push(s);
          }

          for (c.push(i), o = 0, a = c.length; o < a; ++o) {
            l = c[o + 1], r = c[o - 1], s = c[o], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || d.push({
              time: s,
              pos: o / (a - 1)
            });
          }

          return d;
        }(n._timestamps.data, o, a, p), n._offsets = function (e, t, i, n, o) {
          var a,
              r,
              s = 0,
              l = 0;
          return o.offset && t.length && (a = tn(e, "time", t[0], "pos"), s = 1 === t.length ? 1 - a : (tn(e, "time", t[1], "pos") - a) / 2, r = tn(e, "time", t[t.length - 1], "pos"), l = 1 === t.length ? r : (r - tn(e, "time", t[t.length - 2], "pos")) / 2), {
            start: s,
            end: l,
            factor: 1 / (s + 1 + l)
          };
        }(n._table, c, 0, 0, r), s.reverse && c.reverse(), rn(n, c, n._majorUnit);
      },
      getLabelForIndex: function getLabelForIndex(e, t) {
        var i = this,
            n = i._adapter,
            o = i.chart.data,
            a = i.options.time,
            r = o.labels && e < o.labels.length ? o.labels[e] : "",
            s = o.datasets[t].data[e];
        return W.isObject(s) && (r = i.getRightValue(s)), a.tooltipFormat ? n.format(nn(i, r), a.tooltipFormat) : "string" == typeof r ? r : n.format(nn(i, r), a.displayFormats.datetime);
      },
      tickFormatFunction: function tickFormatFunction(e, t, i, n) {
        var o = this._adapter,
            a = this.options,
            r = a.time.displayFormats,
            s = r[this._unit],
            l = this._majorUnit,
            d = r[l],
            c = i[t],
            u = a.ticks,
            h = l && d && c && c.major,
            p = o.format(e, n || (h ? d : s)),
            f = h ? u.major : u.minor,
            g = Ui([f.callback, f.userCallback, u.callback, u.userCallback]);
        return g ? g(p, t, i) : p;
      },
      convertTicksToLabels: function convertTicksToLabels(e) {
        var t,
            i,
            n = [];

        for (t = 0, i = e.length; t < i; ++t) {
          n.push(this.tickFormatFunction(e[t].value, t, e));
        }

        return n;
      },
      getPixelForOffset: function getPixelForOffset(e) {
        var t = this._offsets,
            i = tn(this._table, "time", e, "pos");
        return this.getPixelForDecimal((t.start + i) * t.factor);
      },
      getPixelForValue: function getPixelForValue(e, t, i) {
        var n = null;
        if (void 0 !== t && void 0 !== i && (n = this._timestamps.datasets[i][t]), null === n && (n = on(this, e)), null !== n) return this.getPixelForOffset(n);
      },
      getPixelForTick: function getPixelForTick(e) {
        var t = this.getTicks();
        return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null;
      },
      getValueForPixel: function getValueForPixel(e) {
        var t = this._offsets,
            i = this.getDecimalForPixel(e) / t.factor - t.end,
            n = tn(this._table, "pos", i, "time");
        return this._adapter._create(n);
      },
      _getLabelSize: function _getLabelSize(e) {
        var t = this.options.ticks,
            i = this.ctx.measureText(e).width,
            n = W.toRadians(this.isHorizontal() ? t.maxRotation : t.minRotation),
            o = Math.cos(n),
            a = Math.sin(n),
            r = Yi(t.fontSize, E.global.defaultFontSize);
        return {
          w: i * o + r * a,
          h: i * a + r * o
        };
      },
      getLabelWidth: function getLabelWidth(e) {
        return this._getLabelSize(e).w;
      },
      getLabelCapacity: function getLabelCapacity(e) {
        var t = this,
            i = t.options.time,
            n = i.displayFormats,
            o = n[i.unit] || n.millisecond,
            a = t.tickFormatFunction(e, 0, rn(t, [e], t._majorUnit), o),
            r = t._getLabelSize(a),
            s = Math.floor(t.isHorizontal() ? t.width / r.w : t.height / r.h);

        return t.options.offset && s--, s > 0 ? s : 1;
      }
    }),
        ln = {
      position: "bottom",
      distribution: "linear",
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        displayFormat: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
      },
      ticks: {
        autoSkip: !1,
        source: "auto",
        major: {
          enabled: !1
        }
      }
    };
    sn._defaults = ln;
    var dn = {
      category: vi,
      linear: _i,
      logarithmic: $i,
      radialLinear: ji,
      time: sn
    },
        cn = {
      datetime: "MMM D, YYYY, h:mm:ss a",
      millisecond: "h:mm:ss.SSS a",
      second: "h:mm:ss a",
      minute: "h:mm a",
      hour: "hA",
      day: "MMM D",
      week: "ll",
      month: "MMM YYYY",
      quarter: "[Q]Q - YYYY",
      year: "YYYY"
    };
    ei._date.override("function" == typeof e ? {
      _id: "moment",
      formats: function formats() {
        return cn;
      },
      parse: function parse(t, i) {
        return "string" == typeof t && "string" == typeof i ? t = e(t, i) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null;
      },
      format: function format(t, i) {
        return e(t).format(i);
      },
      add: function add(t, i, n) {
        return e(t).add(i, n).valueOf();
      },
      diff: function diff(t, i, n) {
        return e(t).diff(e(i), n);
      },
      startOf: function startOf(t, i, n) {
        return t = e(t), "isoWeek" === i ? t.isoWeekday(n).valueOf() : t.startOf(i).valueOf();
      },
      endOf: function endOf(t, i) {
        return e(t).endOf(i).valueOf();
      },
      _create: function _create(t) {
        return e(t);
      }
    } : {}), E._set("global", {
      plugins: {
        filler: {
          propagate: !0
        }
      }
    });
    var un = {
      dataset: function dataset(e) {
        var t = e.fill,
            i = e.chart,
            n = i.getDatasetMeta(t),
            o = n && i.isDatasetVisible(t) && n.dataset._children || [],
            a = o.length || 0;
        return a ? function (e, t) {
          return t < a && o[t]._view || null;
        } : null;
      },
      boundary: function boundary(e) {
        var t = e.boundary,
            i = t ? t.x : null,
            n = t ? t.y : null;
        return W.isArray(t) ? function (e, i) {
          return t[i];
        } : function (e) {
          return {
            x: null === i ? e.x : i,
            y: null === n ? e.y : n
          };
        };
      }
    };

    function hn(e, t, i) {
      var n,
          o = e._model || {},
          a = o.fill;
      if (void 0 === a && (a = !!o.backgroundColor), !1 === a || null === a) return !1;
      if (!0 === a) return "origin";
      if (n = parseFloat(a, 10), isFinite(n) && Math.floor(n) === n) return "-" !== a[0] && "+" !== a[0] || (n = t + n), !(n === t || n < 0 || n >= i) && n;

      switch (a) {
        case "bottom":
          return "start";

        case "top":
          return "end";

        case "zero":
          return "origin";

        case "origin":
        case "start":
        case "end":
          return a;

        default:
          return !1;
      }
    }

    function pn(e) {
      return (e.el._scale || {}).getPointPositionForValue ? function (e) {
        var t,
            i,
            n,
            o,
            a,
            r = e.el._scale,
            s = r.options,
            l = r.chart.data.labels.length,
            d = e.fill,
            c = [];
        if (!l) return null;

        for (t = s.ticks.reverse ? r.max : r.min, i = s.ticks.reverse ? r.min : r.max, n = r.getPointPositionForValue(0, t), o = 0; o < l; ++o) {
          a = "start" === d || "end" === d ? r.getPointPositionForValue(o, "start" === d ? t : i) : r.getBasePosition(o), s.gridLines.circular && (a.cx = n.x, a.cy = n.y, a.angle = r.getIndexAngle(o) - Math.PI / 2), c.push(a);
        }

        return c;
      }(e) : function (e) {
        var t,
            i = e.el._model || {},
            n = e.el._scale || {},
            o = e.fill,
            a = null;
        if (isFinite(o)) return null;

        if ("start" === o ? a = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === o ? a = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? a = i.scaleZero : n.getBasePixel && (a = n.getBasePixel()), null != a) {
          if (void 0 !== a.x && void 0 !== a.y) return a;
          if (W.isFinite(a)) return {
            x: (t = n.isHorizontal()) ? a : null,
            y: t ? null : a
          };
        }

        return null;
      }(e);
    }

    function fn(e, t, i) {
      var n,
          o = e[t].fill,
          a = [t];
      if (!i) return o;

      for (; !1 !== o && -1 === a.indexOf(o);) {
        if (!isFinite(o)) return o;
        if (!(n = e[o])) return !1;
        if (n.visible) return o;
        a.push(o), o = n.fill;
      }

      return !1;
    }

    function gn(e) {
      var t = e.fill,
          i = "dataset";
      return !1 === t ? null : (isFinite(t) || (i = "boundary"), un[i](e));
    }

    function mn(e) {
      return e && !e.skip;
    }

    function vn(e, t, i, n, o) {
      var a, r, s, l;

      if (n && o) {
        for (e.moveTo(t[0].x, t[0].y), a = 1; a < n; ++a) {
          W.canvas.lineTo(e, t[a - 1], t[a]);
        }

        if (void 0 === i[0].angle) for (e.lineTo(i[o - 1].x, i[o - 1].y), a = o - 1; a > 0; --a) {
          W.canvas.lineTo(e, i[a], i[a - 1], !0);
        } else for (r = i[0].cx, s = i[0].cy, l = Math.sqrt(Math.pow(i[0].x - r, 2) + Math.pow(i[0].y - s, 2)), a = o - 1; a > 0; --a) {
          e.arc(r, s, l, i[a].angle, i[a - 1].angle, !0);
        }
      }
    }

    function bn(e, t, i, n, o, a) {
      var r,
          s,
          l,
          d,
          c,
          u,
          h,
          p,
          f = t.length,
          g = n.spanGaps,
          m = [],
          v = [],
          b = 0,
          y = 0;

      for (e.beginPath(), r = 0, s = f; r < s; ++r) {
        c = i(d = t[l = r % f]._view, l, n), u = mn(d), h = mn(c), a && void 0 === p && u && (s = f + (p = r + 1)), u && h ? (b = m.push(d), y = v.push(c)) : b && y && (g ? (u && m.push(d), h && v.push(c)) : (vn(e, m, v, b, y), b = y = 0, m = [], v = []));
      }

      vn(e, m, v, b, y), e.closePath(), e.fillStyle = o, e.fill();
    }

    var yn = {
      id: "filler",
      afterDatasetsUpdate: function afterDatasetsUpdate(e, t) {
        var i,
            n,
            o,
            a,
            r = (e.data.datasets || []).length,
            s = t.propagate,
            l = [];

        for (n = 0; n < r; ++n) {
          a = null, (o = (i = e.getDatasetMeta(n)).dataset) && o._model && o instanceof ke.Line && (a = {
            visible: e.isDatasetVisible(n),
            fill: hn(o, n, r),
            chart: e,
            el: o
          }), i.$filler = a, l.push(a);
        }

        for (n = 0; n < r; ++n) {
          (a = l[n]) && (a.fill = fn(l, n, s), a.boundary = pn(a), a.mapper = gn(a));
        }
      },
      beforeDatasetsDraw: function beforeDatasetsDraw(e) {
        var t,
            i,
            n,
            o,
            a,
            r,
            s,
            l = e._getSortedVisibleDatasetMetas(),
            d = e.ctx;

        for (i = l.length - 1; i >= 0; --i) {
          (t = l[i].$filler) && t.visible && (o = (n = t.el)._view, a = n._children || [], r = t.mapper, s = o.backgroundColor || E.global.defaultColor, r && s && a.length && (W.canvas.clipArea(d, e.chartArea), bn(d, a, r, o, s, n._loop), W.canvas.unclipArea(d)));
        }
      }
    },
        xn = W.rtl.getRtlAdapter,
        wn = W.noop,
        kn = W.valueOrDefault;

    function Tn(e, t) {
      return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth;
    }

    E._set("global", {
      legend: {
        display: !0,
        position: "top",
        align: "center",
        fullWidth: !0,
        reverse: !1,
        weight: 1e3,
        onClick: function onClick(e, t) {
          var i = t.datasetIndex,
              n = this.chart,
              o = n.getDatasetMeta(i);
          o.hidden = null === o.hidden ? !n.data.datasets[i].hidden : null, n.update();
        },
        onHover: null,
        onLeave: null,
        labels: {
          boxWidth: 40,
          padding: 10,
          generateLabels: function generateLabels(e) {
            var t = e.data.datasets,
                i = e.options.legend || {},
                n = i.labels && i.labels.usePointStyle;
            return e._getSortedDatasetMetas().map(function (i) {
              var o = i.controller.getStyle(n ? 0 : void 0);
              return {
                text: t[i.index].label,
                fillStyle: o.backgroundColor,
                hidden: !e.isDatasetVisible(i.index),
                lineCap: o.borderCapStyle,
                lineDash: o.borderDash,
                lineDashOffset: o.borderDashOffset,
                lineJoin: o.borderJoinStyle,
                lineWidth: o.borderWidth,
                strokeStyle: o.borderColor,
                pointStyle: o.pointStyle,
                rotation: o.rotation,
                datasetIndex: i.index
              };
            }, this);
          }
        }
      },
      legendCallback: function legendCallback(e) {
        var t,
            i,
            n,
            o = document.createElement("ul"),
            a = e.data.datasets;

        for (o.setAttribute("class", e.id + "-legend"), t = 0, i = a.length; t < i; t++) {
          (n = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[t].backgroundColor, a[t].label && n.appendChild(document.createTextNode(a[t].label));
        }

        return o.outerHTML;
      }
    });

    var Sn = X.extend({
      initialize: function initialize(e) {
        W.extend(this, e), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1;
      },
      beforeUpdate: wn,
      update: function update(e, t, i) {
        var n = this;
        return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
      },
      afterUpdate: wn,
      beforeSetDimensions: wn,
      setDimensions: function setDimensions() {
        var e = this;
        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
          width: 0,
          height: 0
        };
      },
      afterSetDimensions: wn,
      beforeBuildLabels: wn,
      buildLabels: function buildLabels() {
        var e = this,
            t = e.options.labels || {},
            i = W.callback(t.generateLabels, [e.chart], e) || [];
        t.filter && (i = i.filter(function (i) {
          return t.filter(i, e.chart.data);
        })), e.options.reverse && i.reverse(), e.legendItems = i;
      },
      afterBuildLabels: wn,
      beforeFit: wn,
      fit: function fit() {
        var e = this,
            t = e.options,
            i = t.labels,
            n = t.display,
            o = e.ctx,
            a = W.options._parseFont(i),
            r = a.size,
            s = e.legendHitBoxes = [],
            l = e.minSize,
            d = e.isHorizontal();

        if (d ? (l.width = e.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = e.maxHeight), n) {
          if (o.font = a.string, d) {
            var c = e.lineWidths = [0],
                u = 0;
            o.textAlign = "left", o.textBaseline = "middle", W.each(e.legendItems, function (e, t) {
              var n = Tn(i, r) + r / 2 + o.measureText(e.text).width;
              (0 === t || c[c.length - 1] + n + 2 * i.padding > l.width) && (u += r + i.padding, c[c.length - (t > 0 ? 0 : 1)] = 0), s[t] = {
                left: 0,
                top: 0,
                width: n,
                height: r
              }, c[c.length - 1] += n + i.padding;
            }), l.height += u;
          } else {
            var h = i.padding,
                p = e.columnWidths = [],
                f = e.columnHeights = [],
                g = i.padding,
                m = 0,
                v = 0;
            W.each(e.legendItems, function (e, t) {
              var n = Tn(i, r) + r / 2 + o.measureText(e.text).width;
              t > 0 && v + r + 2 * h > l.height && (g += m + i.padding, p.push(m), f.push(v), m = 0, v = 0), m = Math.max(m, n), v += r + h, s[t] = {
                left: 0,
                top: 0,
                width: n,
                height: r
              };
            }), g += m, p.push(m), f.push(v), l.width += g;
          }

          e.width = l.width, e.height = l.height;
        } else e.width = l.width = e.height = l.height = 0;
      },
      afterFit: wn,
      isHorizontal: function isHorizontal() {
        return "top" === this.options.position || "bottom" === this.options.position;
      },
      draw: function draw() {
        var e = this,
            t = e.options,
            i = t.labels,
            n = E.global,
            o = n.defaultColor,
            a = n.elements.line,
            r = e.height,
            s = e.columnHeights,
            l = e.width,
            d = e.lineWidths;

        if (t.display) {
          var c,
              u = xn(t.rtl, e.left, e.minSize.width),
              h = e.ctx,
              p = kn(i.fontColor, n.defaultFontColor),
              f = W.options._parseFont(i),
              g = f.size;

          h.textAlign = u.textAlign("left"), h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = p, h.fillStyle = p, h.font = f.string;

          var m = Tn(i, g),
              v = e.legendHitBoxes,
              b = function b(e, n) {
            switch (t.align) {
              case "start":
                return i.padding;

              case "end":
                return e - n;

              default:
                return (e - n + i.padding) / 2;
            }
          },
              y = e.isHorizontal();

          c = y ? {
            x: e.left + b(l, d[0]),
            y: e.top + i.padding,
            line: 0
          } : {
            x: e.left + i.padding,
            y: e.top + b(r, s[0]),
            line: 0
          }, W.rtl.overrideTextDirection(e.ctx, t.textDirection);
          var x = g + i.padding;
          W.each(e.legendItems, function (t, n) {
            var p = h.measureText(t.text).width,
                f = m + g / 2 + p,
                w = c.x,
                k = c.y;
            u.setWidth(e.minSize.width), y ? n > 0 && w + f + i.padding > e.left + e.minSize.width && (k = c.y += x, c.line++, w = c.x = e.left + b(l, d[c.line])) : n > 0 && k + x > e.top + e.minSize.height && (w = c.x = w + e.columnWidths[c.line] + i.padding, c.line++, k = c.y = e.top + b(r, s[c.line]));
            var T = u.x(w);
            !function (e, t, n) {
              if (!(isNaN(m) || m <= 0)) {
                h.save();
                var r = kn(n.lineWidth, a.borderWidth);

                if (h.fillStyle = kn(n.fillStyle, o), h.lineCap = kn(n.lineCap, a.borderCapStyle), h.lineDashOffset = kn(n.lineDashOffset, a.borderDashOffset), h.lineJoin = kn(n.lineJoin, a.borderJoinStyle), h.lineWidth = r, h.strokeStyle = kn(n.strokeStyle, o), h.setLineDash && h.setLineDash(kn(n.lineDash, a.borderDash)), i && i.usePointStyle) {
                  var s = m * Math.SQRT2 / 2,
                      l = u.xPlus(e, m / 2),
                      d = t + g / 2;
                  W.canvas.drawPoint(h, n.pointStyle, s, l, d, n.rotation);
                } else h.fillRect(u.leftForLtr(e, m), t, m, g), 0 !== r && h.strokeRect(u.leftForLtr(e, m), t, m, g);

                h.restore();
              }
            }(T, k, t), v[n].left = u.leftForLtr(T, v[n].width), v[n].top = k, function (e, t, i, n) {
              var o = g / 2,
                  a = u.xPlus(e, m + o),
                  r = t + o;
              h.fillText(i.text, a, r), i.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(a, r), h.lineTo(u.xPlus(a, n), r), h.stroke());
            }(T, k, t, p), y ? c.x += f + i.padding : c.y += x;
          }), W.rtl.restoreTextDirection(e.ctx, t.textDirection);
        }
      },
      _getLegendItemAt: function _getLegendItemAt(e, t) {
        var i,
            n,
            o,
            a = this;
        if (e >= a.left && e <= a.right && t >= a.top && t <= a.bottom) for (o = a.legendHitBoxes, i = 0; i < o.length; ++i) {
          if (e >= (n = o[i]).left && e <= n.left + n.width && t >= n.top && t <= n.top + n.height) return a.legendItems[i];
        }
        return null;
      },
      handleEvent: function handleEvent(e) {
        var t,
            i = this,
            n = i.options,
            o = "mouseup" === e.type ? "click" : e.type;

        if ("mousemove" === o) {
          if (!n.onHover && !n.onLeave) return;
        } else {
          if ("click" !== o) return;
          if (!n.onClick) return;
        }

        t = i._getLegendItemAt(e.x, e.y), "click" === o ? t && n.onClick && n.onClick.call(i, e["native"], t) : (n.onLeave && t !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, e["native"], i._hoveredItem), i._hoveredItem = t), n.onHover && t && n.onHover.call(i, e["native"], t));
      }
    });

    function _n(e, t) {
      var i = new Sn({
        ctx: e.ctx,
        options: t,
        chart: e
      });
      gt.configure(e, i, t), gt.addBox(e, i), e.legend = i;
    }

    var Cn = {
      id: "legend",
      _element: Sn,
      beforeInit: function beforeInit(e) {
        var t = e.options.legend;
        t && _n(e, t);
      },
      beforeUpdate: function beforeUpdate(e) {
        var t = e.options.legend,
            i = e.legend;
        t ? (W.mergeIf(t, E.global.legend), i ? (gt.configure(e, i, t), i.options = t) : _n(e, t)) : i && (gt.removeBox(e, i), delete e.legend);
      },
      afterEvent: function afterEvent(e, t) {
        var i = e.legend;
        i && i.handleEvent(t);
      }
    },
        Mn = W.noop;

    E._set("global", {
      title: {
        display: !1,
        fontStyle: "bold",
        fullWidth: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3
      }
    });

    var Dn = X.extend({
      initialize: function initialize(e) {
        W.extend(this, e), this.legendHitBoxes = [];
      },
      beforeUpdate: Mn,
      update: function update(e, t, i) {
        var n = this;
        return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
      },
      afterUpdate: Mn,
      beforeSetDimensions: Mn,
      setDimensions: function setDimensions() {
        var e = this;
        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
          width: 0,
          height: 0
        };
      },
      afterSetDimensions: Mn,
      beforeBuildLabels: Mn,
      buildLabels: Mn,
      afterBuildLabels: Mn,
      beforeFit: Mn,
      fit: function fit() {
        var e,
            t = this,
            i = t.options,
            n = t.minSize = {},
            o = t.isHorizontal();
        i.display ? (e = (W.isArray(i.text) ? i.text.length : 1) * W.options._parseFont(i).lineHeight + 2 * i.padding, t.width = n.width = o ? t.maxWidth : e, t.height = n.height = o ? e : t.maxHeight) : t.width = n.width = t.height = n.height = 0;
      },
      afterFit: Mn,
      isHorizontal: function isHorizontal() {
        var e = this.options.position;
        return "top" === e || "bottom" === e;
      },
      draw: function draw() {
        var e = this,
            t = e.ctx,
            i = e.options;

        if (i.display) {
          var n,
              o,
              a,
              r = W.options._parseFont(i),
              s = r.lineHeight,
              l = s / 2 + i.padding,
              d = 0,
              c = e.top,
              u = e.left,
              h = e.bottom,
              p = e.right;

          t.fillStyle = W.valueOrDefault(i.fontColor, E.global.defaultFontColor), t.font = r.string, e.isHorizontal() ? (o = u + (p - u) / 2, a = c + l, n = p - u) : (o = "left" === i.position ? u + l : p - l, a = c + (h - c) / 2, n = h - c, d = Math.PI * ("left" === i.position ? -.5 : .5)), t.save(), t.translate(o, a), t.rotate(d), t.textAlign = "center", t.textBaseline = "middle";
          var f = i.text;
          if (W.isArray(f)) for (var g = 0, m = 0; m < f.length; ++m) {
            t.fillText(f[m], 0, g, n), g += s;
          } else t.fillText(f, 0, 0, n);
          t.restore();
        }
      }
    });

    function An(e, t) {
      var i = new Dn({
        ctx: e.ctx,
        options: t,
        chart: e
      });
      gt.configure(e, i, t), gt.addBox(e, i), e.titleBlock = i;
    }

    var Pn = {},
        $n = yn,
        On = Cn,
        In = {
      id: "title",
      _element: Dn,
      beforeInit: function beforeInit(e) {
        var t = e.options.title;
        t && An(e, t);
      },
      beforeUpdate: function beforeUpdate(e) {
        var t = e.options.title,
            i = e.titleBlock;
        t ? (W.mergeIf(t, E.global.title), i ? (gt.configure(e, i, t), i.options = t) : An(e, t)) : i && (gt.removeBox(e, i), delete e.titleBlock);
      }
    };

    for (var Ln in Pn.filler = $n, Pn.legend = On, Pn.title = In, Qt.helpers = W, function () {
      function e(e, t, i) {
        var n;
        return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[i])) : n = e, n;
      }

      function t(e) {
        return null != e && "none" !== e;
      }

      function i(i, n, o) {
        var a = document.defaultView,
            r = W._getParentNode(i),
            s = a.getComputedStyle(i)[n],
            l = a.getComputedStyle(r)[n],
            d = t(s),
            c = t(l),
            u = Number.POSITIVE_INFINITY;

        return d || c ? Math.min(d ? e(s, i, o) : u, c ? e(l, r, o) : u) : "none";
      }

      W.where = function (e, t) {
        if (W.isArray(e) && Array.prototype.filter) return e.filter(t);
        var i = [];
        return W.each(e, function (e) {
          t(e) && i.push(e);
        }), i;
      }, W.findIndex = Array.prototype.findIndex ? function (e, t, i) {
        return e.findIndex(t, i);
      } : function (e, t, i) {
        i = void 0 === i ? e : i;

        for (var n = 0, o = e.length; n < o; ++n) {
          if (t.call(i, e[n], n, e)) return n;
        }

        return -1;
      }, W.findNextWhere = function (e, t, i) {
        W.isNullOrUndef(i) && (i = -1);

        for (var n = i + 1; n < e.length; n++) {
          var o = e[n];
          if (t(o)) return o;
        }
      }, W.findPreviousWhere = function (e, t, i) {
        W.isNullOrUndef(i) && (i = e.length);

        for (var n = i - 1; n >= 0; n--) {
          var o = e[n];
          if (t(o)) return o;
        }
      }, W.isNumber = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }, W.almostEquals = function (e, t, i) {
        return Math.abs(e - t) < i;
      }, W.almostWhole = function (e, t) {
        var i = Math.round(e);
        return i - t <= e && i + t >= e;
      }, W.max = function (e) {
        return e.reduce(function (e, t) {
          return isNaN(t) ? e : Math.max(e, t);
        }, Number.NEGATIVE_INFINITY);
      }, W.min = function (e) {
        return e.reduce(function (e, t) {
          return isNaN(t) ? e : Math.min(e, t);
        }, Number.POSITIVE_INFINITY);
      }, W.sign = Math.sign ? function (e) {
        return Math.sign(e);
      } : function (e) {
        return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1;
      }, W.toRadians = function (e) {
        return e * (Math.PI / 180);
      }, W.toDegrees = function (e) {
        return e * (180 / Math.PI);
      }, W._decimalPlaces = function (e) {
        if (W.isFinite(e)) {
          for (var t = 1, i = 0; Math.round(e * t) / t !== e;) {
            t *= 10, i++;
          }

          return i;
        }
      }, W.getAngleFromPoint = function (e, t) {
        var i = t.x - e.x,
            n = t.y - e.y,
            o = Math.sqrt(i * i + n * n),
            a = Math.atan2(n, i);
        return a < -.5 * Math.PI && (a += 2 * Math.PI), {
          angle: a,
          distance: o
        };
      }, W.distanceBetweenPoints = function (e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }, W.aliasPixel = function (e) {
        return e % 2 == 0 ? 0 : .5;
      }, W._alignPixel = function (e, t, i) {
        var n = e.currentDevicePixelRatio,
            o = i / 2;
        return Math.round((t - o) * n) / n + o;
      }, W.splineCurve = function (e, t, i, n) {
        var o = e.skip ? t : e,
            a = t,
            r = i.skip ? t : i,
            s = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
            l = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
            d = s / (s + l),
            c = l / (s + l),
            u = n * (d = isNaN(d) ? 0 : d),
            h = n * (c = isNaN(c) ? 0 : c);
        return {
          previous: {
            x: a.x - u * (r.x - o.x),
            y: a.y - u * (r.y - o.y)
          },
          next: {
            x: a.x + h * (r.x - o.x),
            y: a.y + h * (r.y - o.y)
          }
        };
      }, W.EPSILON = Number.EPSILON || 1e-14, W.splineCurveMonotone = function (e) {
        var t,
            i,
            n,
            o,
            a,
            r,
            s,
            l,
            d,
            c = (e || []).map(function (e) {
          return {
            model: e._model,
            deltaK: 0,
            mK: 0
          };
        }),
            u = c.length;

        for (t = 0; t < u; ++t) {
          if (!(n = c[t]).model.skip) {
            if (i = t > 0 ? c[t - 1] : null, (o = t < u - 1 ? c[t + 1] : null) && !o.model.skip) {
              var h = o.model.x - n.model.x;
              n.deltaK = 0 !== h ? (o.model.y - n.model.y) / h : 0;
            }

            !i || i.model.skip ? n.mK = n.deltaK : !o || o.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
          }
        }

        for (t = 0; t < u - 1; ++t) {
          n = c[t], o = c[t + 1], n.model.skip || o.model.skip || (W.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = o.mK = 0 : (a = n.mK / n.deltaK, r = o.mK / n.deltaK, (l = Math.pow(a, 2) + Math.pow(r, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = a * s * n.deltaK, o.mK = r * s * n.deltaK)));
        }

        for (t = 0; t < u; ++t) {
          (n = c[t]).model.skip || (i = t > 0 ? c[t - 1] : null, o = t < u - 1 ? c[t + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), o && !o.model.skip && (d = (o.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK));
        }
      }, W.nextItem = function (e, t, i) {
        return i ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1];
      }, W.previousItem = function (e, t, i) {
        return i ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1];
      }, W.niceNum = function (e, t) {
        var i = Math.floor(W.log10(e)),
            n = e / Math.pow(10, i);
        return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
      }, W.requestAnimFrame = "undefined" == typeof window ? function (e) {
        e();
      } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
        return window.setTimeout(e, 1e3 / 60);
      }, W.getRelativePosition = function (e, t) {
        var i,
            n,
            o = e.originalEvent || e,
            a = e.target || e.srcElement,
            r = a.getBoundingClientRect(),
            s = o.touches;
        s && s.length > 0 ? (i = s[0].clientX, n = s[0].clientY) : (i = o.clientX, n = o.clientY);
        var l = parseFloat(W.getStyle(a, "padding-left")),
            d = parseFloat(W.getStyle(a, "padding-top")),
            c = parseFloat(W.getStyle(a, "padding-right")),
            u = parseFloat(W.getStyle(a, "padding-bottom")),
            h = r.right - r.left - l - c,
            p = r.bottom - r.top - d - u;
        return {
          x: i = Math.round((i - r.left - l) / h * a.width / t.currentDevicePixelRatio),
          y: n = Math.round((n - r.top - d) / p * a.height / t.currentDevicePixelRatio)
        };
      }, W.getConstraintWidth = function (e) {
        return i(e, "max-width", "clientWidth");
      }, W.getConstraintHeight = function (e) {
        return i(e, "max-height", "clientHeight");
      }, W._calculatePadding = function (e, t, i) {
        return (t = W.getStyle(e, t)).indexOf("%") > -1 ? i * parseInt(t, 10) / 100 : parseInt(t, 10);
      }, W._getParentNode = function (e) {
        var t = e.parentNode;
        return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t;
      }, W.getMaximumWidth = function (e) {
        var t = W._getParentNode(e);

        if (!t) return e.clientWidth;

        var i = t.clientWidth,
            n = i - W._calculatePadding(t, "padding-left", i) - W._calculatePadding(t, "padding-right", i),
            o = W.getConstraintWidth(e);

        return isNaN(o) ? n : Math.min(n, o);
      }, W.getMaximumHeight = function (e) {
        var t = W._getParentNode(e);

        if (!t) return e.clientHeight;

        var i = t.clientHeight,
            n = i - W._calculatePadding(t, "padding-top", i) - W._calculatePadding(t, "padding-bottom", i),
            o = W.getConstraintHeight(e);

        return isNaN(o) ? n : Math.min(n, o);
      }, W.getStyle = function (e, t) {
        return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t);
      }, W.retinaScale = function (e, t) {
        var i = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;

        if (1 !== i) {
          var n = e.canvas,
              o = e.height,
              a = e.width;
          n.height = o * i, n.width = a * i, e.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = o + "px", n.style.width = a + "px");
        }
      }, W.fontString = function (e, t, i) {
        return t + " " + e + "px " + i;
      }, W.longestText = function (e, t, i, n) {
        var o = (n = n || {}).data = n.data || {},
            a = n.garbageCollect = n.garbageCollect || [];
        n.font !== t && (o = n.data = {}, a = n.garbageCollect = [], n.font = t), e.font = t;
        var r,
            s,
            l,
            d,
            c,
            u = 0,
            h = i.length;

        for (r = 0; r < h; r++) {
          if (null != (d = i[r]) && !0 !== W.isArray(d)) u = W.measureText(e, o, a, u, d);else if (W.isArray(d)) for (s = 0, l = d.length; s < l; s++) {
            null == (c = d[s]) || W.isArray(c) || (u = W.measureText(e, o, a, u, c));
          }
        }

        var p = a.length / 2;

        if (p > i.length) {
          for (r = 0; r < p; r++) {
            delete o[a[r]];
          }

          a.splice(0, p);
        }

        return u;
      }, W.measureText = function (e, t, i, n, o) {
        var a = t[o];
        return a || (a = t[o] = e.measureText(o).width, i.push(o)), a > n && (n = a), n;
      }, W.numberOfLabelLines = function (e) {
        var t = 1;
        return W.each(e, function (e) {
          W.isArray(e) && e.length > t && (t = e.length);
        }), t;
      }, W.color = w ? function (e) {
        return e instanceof CanvasGradient && (e = E.global.defaultColor), w(e);
      } : function (e) {
        return console.error("Color.js not found!"), e;
      }, W.getHoverColor = function (e) {
        return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : W.color(e).saturate(.5).darken(.1).rgbString();
      };
    }(), Qt._adapters = ei, Qt.Animation = Q, Qt.animationService = Z, Qt.controllers = Ze, Qt.DatasetController = ne, Qt.defaults = E, Qt.Element = X, Qt.elements = ke, Qt.Interaction = at, Qt.layouts = gt, Qt.platform = At, Qt.plugins = Pt, Qt.Scale = gi, Qt.scaleService = $t, Qt.Ticks = ti, Qt.Tooltip = Wt, Qt.helpers.each(dn, function (e, t) {
      Qt.scaleService.registerScaleType(t, e, e._defaults);
    }), Pn) {
      Pn.hasOwnProperty(Ln) && Qt.plugins.register(Pn[Ln]);
    }

    Qt.platform.initialize();
    var Fn = Qt;
    return "undefined" != typeof window && (window.Chart = Qt), Qt.Chart = Qt, Qt.Legend = Pn.legend._element, Qt.Title = Pn.title._element, Qt.pluginService = Qt.plugins, Qt.PluginBase = Qt.Element.extend({}), Qt.canvasHelpers = Qt.helpers.canvas, Qt.layoutService = Qt.layouts, Qt.LinearScaleBase = wi, Qt.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (e) {
      Qt[e] = function (t, i) {
        return new Qt(t, Qt.helpers.merge(i || {}, {
          type: e.charAt(0).toLowerCase() + e.slice(1)
        }));
      };
    }), Fn;
  }(function () {
    try {
      return i(8);
    } catch (e) {}
  }());
}, function (e, t, i) {
  (function (t) {
    var i = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        n = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        o = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        a = "[" + o + "]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
        s = "\\d+",
        l = "[\\u2700-\\u27bf]",
        d = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
        c = "[^\\ud800-\\udfff" + o + s + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
        u = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        h = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        p = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
        f = "(?:" + d + "|" + c + ")",
        g = "(?:" + p + "|" + c + ")",
        m = "(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",
        v = "[\\ufe0e\\ufe0f]?" + m + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", u, h].join("|") + ")[\\ufe0e\\ufe0f]?" + m + ")*"),
        b = "(?:" + [l, u, h].join("|") + ")" + v,
        y = RegExp("['’]", "g"),
        x = RegExp(r, "g"),
        w = RegExp([p + "?" + d + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [a, p, "$"].join("|") + ")", g + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [a, p + f, "$"].join("|") + ")", p + "?" + f + "+(?:['’](?:d|ll|m|re|s|t|ve))?", p + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", s, b].join("|"), "g"),
        k = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        T = "object" == _typeof(t) && t && t.Object === Object && t,
        S = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        _ = T || S || Function("return this")();

    var C,
        M = (C = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "ss"
    }, function (e) {
      return null == C ? void 0 : C[e];
    });
    var D = Object.prototype.toString,
        A = _.Symbol,
        P = A ? A.prototype : void 0,
        $ = P ? P.toString : void 0;

    function O(e) {
      if ("string" == typeof e) return e;
      if (function (e) {
        return "symbol" == _typeof(e) || function (e) {
          return !!e && "object" == _typeof(e);
        }(e) && "[object Symbol]" == D.call(e);
      }(e)) return $ ? $.call(e) : "";
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }

    function I(e) {
      return null == e ? "" : O(e);
    }

    var L,
        F = (L = function L(e, t, i) {
      return e + (i ? "_" : "") + t.toLowerCase();
    }, function (e) {
      return function (e, t, i, n) {
        var o = -1,
            a = e ? e.length : 0;

        for (n && a && (i = e[++o]); ++o < a;) {
          i = t(i, e[o], o, e);
        }

        return i;
      }(function (e, t, n) {
        return e = I(e), void 0 === (t = n ? void 0 : t) ? function (e) {
          return k.test(e);
        }(e) ? function (e) {
          return e.match(w) || [];
        }(e) : function (e) {
          return e.match(i) || [];
        }(e) : e.match(t) || [];
      }(function (e) {
        return (e = I(e)) && e.replace(n, M).replace(x, "");
      }(e).replace(y, "")), L, "");
    });
    e.exports = F;
  }).call(this, i(4));
}, function (e, t) {
  if ("undefined" == typeof moment) {
    var i = new Error("Cannot find module 'moment'");
    throw i.code = "MODULE_NOT_FOUND", i;
  }

  e.exports = moment;
}, function (e, t, i) {
  "use strict";

  i.r(t);

  var n = function n(e) {
    return "".concat(e.charAt(0).toLowerCase()).concat(e.replace(/[\W_]/g, "|").split("|").map(function (e) {
      return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
    }).join("").slice(1));
  };

  var o = /*#__PURE__*/function () {
    function o(e) {
      _classCallCheck(this, o);

      this.routes = e;
    }

    _createClass(o, [{
      key: "fire",
      value: function fire(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "init";
        var i = arguments.length > 2 ? arguments[2] : undefined;
        document.dispatchEvent(new CustomEvent("routed", {
          bubbles: !0,
          detail: {
            route: e,
            fn: t
          }
        }));
        "" !== e && this.routes[e] && "function" == typeof this.routes[e][t] && this.routes[e][t](i);
      }
    }, {
      key: "loadEvents",
      value: function loadEvents() {
        var _this = this;

        this.fire("common"), document.querySelector("body").className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(n).forEach(function (e) {
          _this.fire(e), _this.fire(e, "finalize");
        }), this.fire("common", "finalize");
      }
    }]);

    return o;
  }(),
      a = i(0),
      r = i.n(a),
      s = i(2),
      l = i.n(s);

  var d = jQuery;

  var c = /*#__PURE__*/function () {
    function c(e) {
      var _this2 = this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$item = _ref.item,
          t = _ref$item === void 0 ? ".accordion__item" : _ref$item,
          _ref$header = _ref.header,
          i = _ref$header === void 0 ? ".accordion__title" : _ref$header,
          _ref$body = _ref.body,
          n = _ref$body === void 0 ? ".accordion__content" : _ref$body,
          _ref$toggle = _ref.toggle,
          o = _ref$toggle === void 0 ? ".accordion__toggle" : _ref$toggle;

      _classCallCheck(this, c);

      this._headerClass = i, this._bodyClass = n, this._width = window.innerWidth, this.el = d(e), this.items = this.el.find(t), this.toggleBtn = d(o), requestAnimationFrame(function () {
        _this2.start();
      });
    }

    _createClass(c, [{
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(e) {
        this._width = e;
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        this.items.on("click.accordion", this._headerClass, d.proxy(this.toggle, this)), this.toggleBtn.on("click.accordion", d.proxy(this.toggleAll, this)), d(window).on("resize.accordion", l()(d.proxy(this.onResize, this), 100));
      }
    }, {
      key: "removelisteners",
      value: function removelisteners() {
        this.items.off("click.accordion"), this.toggleBtn.off("click.accordion");
      }
    }, {
      key: "onResize",
      value: function onResize() {
        var e = window.innerWidth;
        this.width != e && (this.destroy(), this.start(), this.width = e);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.items.removeClass("-closed"), this.items.attr("style", ""), this.items.data({
          openHeight: void 0,
          closedHeight: void 0
        }), this.toggleBtn.data("isOpen", void 0), this.removelisteners();
      }
    }, {
      key: "start",
      value: function start() {
        var _this3 = this;

        this.items.each(function (e, t) {
          var i = d(t),
              n = i.find(_this3._headerClass),
              o = i.find(_this3._bodyClass),
              a = n.get(0).getBoundingClientRect().height,
              r = o.get(0).getBoundingClientRect().height;
          i.data("openHeight", a + r), i.data("closedHeight", a), e && i.height(a).addClass("-closed");
        }), this.addListeners();
      }
    }, {
      key: "animate",
      value: function animate(e, t) {
        var i = e.data(t ? "openHeight" : "closedHeight");
        e.toggleClass("-closed", !t), e.animate({
          height: i
        }, 300);
      }
    }, {
      key: "toggle",
      value: function toggle(e) {
        var t = d(e.delegateTarget),
            i = t.hasClass("-closed");
        this.animate(t, i);
      }
    }, {
      key: "toggleAll",
      value: function toggleAll(e) {
        var _this4 = this;

        var t = d(e.currentTarget),
            i = t.data("isOpen");
        this.items.each(function (e, t) {
          _this4.animate(d(t), !i);
        }), t.html(i ? "Expand All" : "Collapse All"), t.data("isOpen", !i);
      }
    }]);

    return c;
  }();

  var u = i(1),
      h = i.n(u),
      p = {
    SGT: {
      code: "SGT",
      country: "Asia",
      name: "Singapore Time"
    },
    AET: {
      code: "AET",
      country: "Australia",
      name: "Australia Eastern Time"
    },
    BST: {
      code: "BST",
      country: "UK",
      name: "British Summer Time"
    },
    CET: {
      code: "CET",
      country: "Europe",
      name: "Central European Time"
    },
    PT: {
      code: "PT",
      country: "North America",
      name: "Pacific Time"
    },
    ET: {
      code: "ET",
      country: "North America",
      name: "Eastern Time"
    }
  },
      f = [{
    id: "managing-cyber-threats-with-human-intelligence",
    type: "Keynote",
    register: !1,
    title: "Managing Cyber Threats with Human Intelligence",
    "abstract": "<p>In the wake of stay-at-home orders across the globe, one thing has become abundantly clear for all organizations: we’re leaving our civilization dependent on software not ready to be depended on, managed by security teams not staffed to cope. Based on research from our Fourth Annual Hacker-Powered Security Report, we’ll delve into how it is humans — creative, diverse, and global — that are needed to solve the problem and secure our connected society.</p>",
    speakers: [{
      name: "Mårten Mickos",
      title: "CEO of HackerOne",
      photo: "/assets/images/static_pages/security-at-2020/headshots/marten-mickos.jpg"
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-21T09:30:00"),
      end: new Date("2020-10-21T10:00:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-21T12:30:00"),
      end: new Date("2020-10-21T13:00:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-20T09:30:00"),
      end: new Date("2020-10-20T10:00:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-20T10:30:00"),
      end: new Date("2020-10-20T11:00:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-20T09:30:00"),
      end: new Date("2020-10-20T10:00:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-20T12:30:00"),
      end: new Date("2020-10-20T13:00:00")
    }]
  }, {
    id: "hack-the-globe-meet-the-hackers",
    type: "Panel",
    register: !1,
    title: "Hack the Globe: Meet the Hackers",
    "abstract": "<p>Hackers can be found in over 150 countries across the globe and, thanks to them, over 170,000 valid vulnerabilities have surfaced, earning the community over $100 million in bounties. There are many driving the future of hacking, each with a unique skill set and approach to supplement security teams’ efforts. Armed with the most robust database of vulnerability trends and industry benchmarks, in this talk, three leading hackers will discuss their varied approaches to bug hunting, what keeps them loyal to a program, what motivates them, and why they do what they do.</p>",
    speakers: [{
      name: "Jesse Kinser",
      title: "Hacker",
      photo: "/assets/images/static_pages/security-at-2020/headshots/jesse-kinser.jpg"
    }, {
      name: "Allyson O'Malley",
      title: "Hacker",
      photo: ""
    }, {
      name: "Katie Paxton-Fear",
      title: "Hacker",
      photo: ""
    }, {
      name: "Nicole Perlroth",
      title: "Moderator, NYT",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-21T11:00:00"),
      end: new Date("2020-10-21T12:00:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-21T14:00:00"),
      end: new Date("2020-10-21T15:00:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-20T10:00:00"),
      end: new Date("2020-10-20T11:00:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-20T11:00:00"),
      end: new Date("2020-10-20T12:00:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-20T10:00:00"),
      end: new Date("2020-10-20T11:00:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-20T13:00:00"),
      end: new Date("2020-10-20T14:00:00")
    }]
  }, {
    id: "engaging-hackers-to-help-secure-elections",
    type: "Panel",
    register: !1,
    title: "Engaging Hackers to Help Secure Elections",
    "abstract": "<p>With the 2020 election just weeks away, election security is top of mind for all. Hackers can play a crucial role in helping protect election systems. In an August announcement, six major voting vendors committed to authorizing security researchers to help secure their election systems by launching vulnerability disclosure policies. In this talk, hear from voting vendors and security experts on how the elections industry is engaging hackers with the launch of vulnerability disclosure policies, including how industry best practices on coordinated vulnerability disclosure have helped shape the elections industry’s efforts to protect the 2020 election and beyond.</p>",
    speakers: [{
      name: "Scott Algeier",
      title: "Moderator, Executive Director, IT-ISAC",
      photo: ""
    }, {
      name: "Jack Cable",
      title: "Security Researcher and Student, Stanford University",
      photo: ""
    }, {
      name: "Katie Trimble-Noble",
      title: "Director of PSIRT and Bug Bounty",
      photo: ""
    }, {
      name: "Chris Wlaschin",
      title: "Vice President of Systems Security, ES&S",
      photo: ""
    }, {
      name: "Eric Coomer",
      title: "Director Product Strategy & Security, Dominion Voting Systems",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-21T13:00:00"),
      end: new Date("2020-10-21T13:45:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-21T16:00:00"),
      end: new Date("2020-10-21T16:45:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-20T13:00:00"),
      end: new Date("2020-10-20T13:45:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-20T14:00:00"),
      end: new Date("2020-10-20T14:45:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-20T13:00:00"),
      end: new Date("2020-10-20T13:45:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-20T16:00:00"),
      end: new Date("2020-10-20T16:45:00")
    }]
  }, {
    id: "ready-or-not-security-digital-transformation",
    type: "Panel",
    register: !1,
    title: "Ready or Not: Security & Digital Transformation",
    "abstract": "<p>An evolving attack surface is synonymous with innovation. COVID-19 accelerated digital transformation for some enterprises, forcing immediate cloud migrations, unfamiliar configurations, and new integrations to enable business for a suddenly all-remote workforce. As a result, security teams are forced to become more agile while reducing risk and securing a rapidly changing attack surface.</p> <p>This session will cover:</p> <ul> <li>Scaling security efforts that are as agile as a shifting attack surface</li> <li>How security teams can maintain application integrity and prevent security risks</li> <li>Threading security insights throughout the SDLC in real-time</li> </ul>",
    speakers: [{
      name: "Austin Sturm",
      title: "Security Engineer at AWS",
      photo: ""
    }, {
      name: "George Gerchow",
      title: "CSO at Sumo Logic",
      photo: "/assets/images/static_pages/security-at-2020/headshots/george-gerchow.jpg"
    }, {
      name: "Miju Han",
      title: "Moderator, HackerOne",
      photo: "/assets/images/static_pages/security-at-2020/headshots/miju-han.jpg"
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-21T14:00:00"),
      end: new Date("2020-10-21T15:00:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-21T17:00:00"),
      end: new Date("2020-10-21T18:00:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-20T14:00:00"),
      end: new Date("2020-10-20T15:00:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-20T15:00:00"),
      end: new Date("2020-10-20T16:00:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-20T14:00:00"),
      end: new Date("2020-10-20T15:00:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-20T17:00:00"),
      end: new Date("2020-10-20T18:00:00")
    }]
  }, {
    id: "open-innovation-prioritizing-diversity-inclusion",
    type: "Panel",
    register: !1,
    title: "Open Innovation: Prioritizing Diversity & Inclusion",
    "abstract": "<p>Recent research shows that less than 25% of the cybersecurity workforce identifies as female, and Black representation as low as 3% (male or female). Minorities reaching security leadership positions are few and far between. Culture in cybersecurity is ripe for change.</p>",
    speakers: [{
      name: "Molly Q. Ford",
      title: "Vice President of Global Equality Programs at Salesforce",
      photo: ""
    }, {
      name: "Mårten Mickos",
      title: "Moderator, CEO of HackerOne",
      photo: "/assets/images/static_pages/security-at-2020/headshots/marten-mickos.jpg"
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-22T11:30:00"),
      end: new Date("2020-10-22T12:15:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-22T14:30:00"),
      end: new Date("2020-10-22T15:15:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-21T09:30:00"),
      end: new Date("2020-10-21T10:15:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-21T10:30:00"),
      end: new Date("2020-10-21T11:15:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-21T09:30:00"),
      end: new Date("2020-10-21T10:15:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-21T12:30:00"),
      end: new Date("2020-10-21T13:15:00")
    }]
  }, {
    id: "leveraging-compliance-frameworks-to-improve-security-posture",
    type: "Panel",
    register: !1,
    title: "Beyond the Checkbox: Leveraging Compliance Frameworks to Improve Security Posture",
    "abstract": "<p>So many of today’s frameworks were created in the era of waterfall software development, a methodology that is now almost as extinct as the mammoth species. Yet, while necessary for organizations across the globe to meet data protection standards and prove compliance, many take a checkbox approach to meet the bare minimum of the required controls. This talk will discuss how to use compliance frameworks in a way that actually improves your organizations’ security posture.</p>",
    speakers: [{
      name: "Jen Brown",
      title: "Senior Compliance Manager and Data Protection Officer at Sift",
      photo: ""
    }, {
      name: "Sam Cowan",
      title: "Moderator, Head of Compliance at HackerOne",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-22T14:00:00"),
      end: new Date("2020-10-22T15:00:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-22T17:00:00"),
      end: new Date("2020-10-22T18:00:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-21T10:15:00"),
      end: new Date("2020-10-21T11:15:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-21T11:15:00"),
      end: new Date("2020-10-21T12:15:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-21T10:15:00"),
      end: new Date("2020-10-21T11:15:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-21T13:15:00"),
      end: new Date("2020-10-21T14:15:00")
    }]
  }, {
    id: "introducing-the-bug-bounty-lifecycle",
    type: "Panel",
    register: !1,
    title: "Beyond Bounties: Introducing the Bug Bounty Lifecycle",
    "abstract": "<p>We can ingest bugs from our researchers, but how do we derive the most value for every bounty that we pay for? Verizon Media calls this the Bug Bounty Lifecycle (BBLC), which encompasses how bugs from researchers drive insights back to the Product Security and Development teams to make a bigger organizational impact. Leveraging the BBLC can magnify one bug's remediation results to ultimately yield better, more secure products. Sean Poris, Mack Staples, and Vibha Sethi will walk through real-world scenarios, and you'll walk away with a better understanding of how you can optimize your security efforts and make an organizational impact.</p>",
    speakers: [{
      name: "Sean Poris",
      title: "Director of Product Security at Verizon Media",
      photo: ""
    }, {
      name: "Mack Staples",
      title: "Bug Bounty Lifecycle Engineer at Verizon Media",
      photo: ""
    }, {
      name: "Vibha Sethi",
      title: "Principal Software Development Engineer at Verizon Media",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-22T13:30:00"),
      end: new Date("2020-10-21T14:00:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-22T16:30:00"),
      end: new Date("2020-10-21T17:00:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-21T13:00:00"),
      end: new Date("2020-10-21T13:30:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-21T14:00:00"),
      end: new Date("2020-10-21T14:30:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-21T13:00:00"),
      end: new Date("2020-10-21T13:30:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-21T16:00:00"),
      end: new Date("2020-10-21T16:30:00")
    }]
  }, {
    id: "quantifying-risk",
    type: "Panel",
    register: !1,
    title: "Quantifying Risk: Tackling Cybersecurity Amidst Change",
    "abstract": "<p>Every year security teams wade through uncharted waters and risk. 2020 was a year anticipated like any other but couldn’t have been more different. In an industry that’s been fighting for resources for years, security leaders are tasked with doing more with even fewer resources than before. When making the case for security, how do you measure and market success? What is ROI in security terms? Lack of breach, testing coverage, number of fixes?</p> <p>In this session, security leaders will discuss:</p> <ul> <li>Measuring value & ROI in cybersecurity</li> <li>A CISO playbook in the face of a economic downturn</li> <li>Scaling security amidst calls for vendor consolidation and cost-cutting</li> </ul>",
    speakers: [{
      name: "Larkin Ryder",
      title: "CISO at Slack",
      photo: ""
    }, {
      name: "Benjamin Vaughn",
      title: "CISO at Hyatt",
      photo: ""
    }, {
      name: "Alex Rice",
      title: "Moderator, HackerOne",
      photo: "/assets/images/static_pages/security-at-2020/headshots/alex-rice.jpg"
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-22T10:30:00"),
      end: new Date("2020-10-22T11:30:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-22T13:30:00"),
      end: new Date("2020-10-22T14:30:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-21T13:30:00"),
      end: new Date("2020-10-21T14:30:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-21T14:30:00"),
      end: new Date("2020-10-21T15:30:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-21T13:30:00"),
      end: new Date("2020-10-21T14:30:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-21T16:30:00"),
      end: new Date("2020-10-21T17:30:00")
    }]
  }, {
    id: "shifting-the-culture-of-cybersecurity",
    type: "Fireside Chat",
    register: !1,
    title: "Fireside Chat: Shifting the Culture of Cybersecurity",
    "abstract": "<p>Cybersecurity is an industry built on a foundation of firewalls, black boxes, and a shield mentality. In many ways, it still is. Yet, innovation and agility breeds in a culture of openness and shared knowledge. How can leaders and security teams bridge security defense with industry collaboration?</p><p>This fireside chat will cover what it takes to create a wave of cultural openness, prioritizing security as a competitive differentiator, and the true business impact of cybersecurity.</p>",
    speakers: [{
      name: "Justin Berman",
      title: "Former Head of Security at Dropbox",
      photo: ""
    }, {
      name: "Amanda Berger",
      title: "Moderator, HackerOne SVP of Customer Success",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-23T11:30:00"),
      end: new Date("2020-10-23T12:30:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-23T14:30:00"),
      end: new Date("2020-10-23T15:30:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-22T09:30:00"),
      end: new Date("2020-10-22T10:30:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-22T10:30:00"),
      end: new Date("2020-10-22T11:30:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-22T09:30:00"),
      end: new Date("2020-10-22T10:30:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-22T12:30:00"),
      end: new Date("2020-10-22T13:30:00")
    }]
  }, {
    id: "how-a-bug-becomes-a-fix",
    type: "Panel",
    register: !1,
    title: "How a Bug Becomes a Fix",
    "abstract": "<p>From testing to vulnerability report, to validation, to CVSS, to security team, to developer...now what? In this session LINE will trace the path of a bug from hacker to fix and feed it back into the SDLC, and all the communication that happened along the way.</p>",
    speakers: [{
      name: "Robin Lunde",
      title: "Security Engineer",
      photo: ""
    }, {
      name: "Youngsung Kim",
      title: "Senior Security Engineer at LINE",
      photo: ""
    }, {
      name: "Ron Chan",
      title: "Hacker",
      photo: ""
    }, {
      name: "Prash Somaiya",
      title: "Moderator",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-23T10:30:00"),
      end: new Date("2020-10-23T11:30:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-23T13:30:00"),
      end: new Date("2020-10-23T14:30:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-22T10:30:00"),
      end: new Date("2020-10-22T11:30:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-22T11:30:00"),
      end: new Date("2020-10-22T12:30:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-22T10:30:00"),
      end: new Date("2020-10-22T11:30:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-22T13:30:00"),
      end: new Date("2020-10-22T14:30:00")
    }]
  }, {
    id: "hackers-guide-to-shopify-graphql-api",
    type: "Webinar",
    register: !1,
    title: "A Hacker's Guide to Shopify's GraphQL API",
    "abstract": "<p>Shopify uses GraphQL for both their developer-facing and undocumented APIs. In their core application alone, there is a considerable amount of undocumented functionality available over GraphQL. They don't make this schema publicly available, and as a result, have noticed that bugs in new functionality can go unreported until that part of the API is being actively used in Shopify apps. This prompted the team to create a roadmap for researchers on how to effectively discover new functionality in Shopify APIs, and how they can get started testing it.</p> <p>In this session, Jennifer will cover lessons learned from developing and releasing a guide related to testing Shopify's APIs, including:</p> <ul> <li>Data from previous reports that prompted this idea</li> <li>Feedback from hackers and adjustments made</li> <li>Data related to the guide's impact on the volume of GraphQL-related bugs, average severity, valid reports and duplicates</li> <li>A look at the technical details of interesting bugs found in our APIs</li> </ul>",
    speakers: [{
      name: "Jennifer Newton",
      title: "Senior Application Security Engineer at Shopify",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-23T14:00:00"),
      end: new Date("2020-10-23T14:30:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-23T16:00:00"),
      end: new Date("2020-10-23T16:30:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-22T13:15:00"),
      end: new Date("2020-10-22T13:45:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-22T13:00:00"),
      end: new Date("2020-10-22T13:30:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-22T16:00:00"),
      end: new Date("2020-10-22T16:30:00")
    }]
  }, {
    id: "contemplating-future-of-collaboration-security",
    type: "Panel",
    register: !1,
    title: "Contemplating the Future of Collaboration & Security",
    "abstract": "<p>In this session HackerOne VP of Customer Success Amanda Berger will recap learnings and reflections from Security@ 2020, securing ecosystems not assets, and Co-founder Michiel Prins will discuss product vision and what lies ahead for the future of collaboration and cybersecurity.</p>",
    speakers: [{
      name: "Amanda Berger",
      title: "HackerOne SVP of Customer Success",
      photo: "/assets/images/static_pages/security-at-2020/headshots/amanda-berger.jpg"
    }, {
      name: "Michiel Prins",
      title: "Co-founder",
      photo: "/assets/images/static_pages/security-at-2020/headshots/michiel-prins.jpg"
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-23T09:30:00"),
      end: new Date("2020-10-23T09:50:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-23T12:30:00"),
      end: new Date("2020-10-23T12:50:00")
    }, {
      region: p.BST.code,
      start: new Date("2020-10-22T13:45:00"),
      end: new Date("2020-10-22T14:05:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-22T14:45:00"),
      end: new Date("2020-10-22T14:05:00")
    }, {
      region: p.PT.code,
      start: new Date("2020-10-22T14:00:00"),
      end: new Date("2020-10-22T14:20:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-22T17:00:00"),
      end: new Date("2020-10-22T17:20:00")
    }]
  }, {
    id: "covid-playbook",
    type: "Roundtable",
    register: !0,
    title: "The 2021 CISO Playbook",
    "abstract": "<p>With increased uncertainty and risk in 2020, enterprises and governments alike are forced to rethink their cybersecurity strategies, phasing out standard solutions at a time that is anything but standard. Join security leaders from across the country to discuss how to prioritize application security strategies that uncover real-world threats and scale across attack surfaces. We'll delve into proving security return-on-investment, creating a playbook to ramp product security controls over time, and getting C-level buy-in.</p>",
    speakers: [{
      name: "Alex Rice",
      title: "Moderator",
      photo: "/assets/images/static_pages/security-at-2020/headshots/alex-rice.jpg"
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-21T10:00:00"),
      end: new Date("2020-10-21T11:00:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-21T13:00:00"),
      end: new Date("2020-10-21T14:00:00")
    }]
  }, {
    id: "meet-the-hackers",
    type: "Panel",
    register: !1,
    title: "Meet the Hackers Who Want to Hack Your Digital Transformation",
    "abstract": "<p>2020 has sent shockwaves across the globe, making it even more critical that we can rely on our internet-connected devices and applications. As a result, organizations across the globe are expediting their digital transformations to keep pace with increased demand from constituents and expanded requirements for employees, leaving their systems and infrastructures more vulnerable than ever. Through this digital transformation, one thing has become abundantly clear: we’re leaving our civilization dependent on software not ready to be depended on, managed by security teams not staffed to cope. In this talk, we hear from hackers who are stepping in to fill the gaps amidst evolving security demands. Discover who they are, what they look for, their value-add for scaling security, and what makes an attack surface ready to invite hackers in.</p>",
    speakers: [{
      name: "Emil Tan",
      title: "Moderator, Co-Founder, Division Zero (Div0) — a Singapore Cybersecurity Community Group",
      photo: ""
    }, {
      name: "filedescriptor",
      title: "Hacker",
      photo: ""
    }, {
      name: 'Nathaniel "naffy" Wakelam',
      title: "Hacker",
      photo: ""
    }, {
      name: 'Shubham "Shubs" "notnaffy" Shah',
      title: "Hacker",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-21T12:00:00"),
      end: new Date("2020-10-21T13:00:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-21T15:00:00"),
      end: new Date("2020-10-21T16:00:00")
    }]
  }, {
    id: "combating-threats",
    type: "Roundtable",
    register: !0,
    title: "Roundtable: Combating Cyber Threats in the New Normal",
    "abstract": "<p>Join cybersecurity execs from financial services and insurance organizations to discuss:</p> <ul> <li>Navigating evolving cybersecurity attack surfaces amidst change</li> <li>Hiring and resourcing for your team amidst budget constraints</li> <li>How organisations can turn hackers from a threat to an asset</li> <li>Lessons learned from the adoption of vulnerability disclosure and bug bounty programs in the FSI and Government sectors in Singapore</li> </ul>",
    speakers: [{
      name: "Scott Flower",
      title: "Moderator, FS-ISAC Threat Intelligence",
      photo: ""
    }, {
      name: "Bosi",
      title: "HackerOne Expert Present",
      photo: ""
    }],
    times: [{
      region: p.SGT.code,
      start: new Date("2020-10-22T09:30:00"),
      end: new Date("2020-10-22T10:30:00")
    }, {
      region: p.AET.code,
      start: new Date("2020-10-22T12:30:00"),
      end: new Date("2020-10-22T13:30:00")
    }]
  }, {
    id: "emea-fsi",
    type: "Roundtable",
    register: !0,
    title: "Financial Services Roundtable: Combating Cyber Threats in the New Normal",
    "abstract": "<p>This event is an exclusive roundtable for customers and prospects in the FSI sector. The format will be an open discussion led by a HackerOne representative and will introduce some top HackerOne customers to discuss their own experience.</p> <p>Attendees will have the opportunity to ask their peers any questions they’ve ever had about working with hackers and gain insights to help with any challenges particular to FSI organisations.</p> <p>Key session takeaways for attendees:</p> <ul> <li>Real world examples of the challenges that have led our FSI customers to develop hacker powered security programs</li> <li>Insight into the process of launching and running a hacker powered security program</li> <li>A chance to ask questions of existing customers about their experience and challenges</li> <li>Practical advice on how to engage and secure buy-in from stakeholders for these programs</li> <li>Data insights from our FSI customer dataset on overall trends, common vulnerabilities, and industry standards for bounty prices and time to resolution</li> </ul><p>Attendance to these exclusive roundtable sessions are capped so please register separately below to reserve your spot now.</p>",
    speakers: [{
      name: "Mads Syska Hasling",
      title: "CISO, Saxobank",
      photo: ""
    }, {
      name: "Mark Rampton",
      title: "Head of Cybersecurity, Starling Bank",
      photo: ""
    }, {
      name: "Martin Airault",
      title: "Moderator, HackerOne",
      photo: ""
    }],
    times: [{
      region: p.BST.code,
      start: new Date("2020-10-20T11:00:00"),
      end: new Date("2020-10-20T11:45:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-20T12:00:00"),
      end: new Date("2020-10-20T13:00:00")
    }]
  }, {
    id: "e-commerce",
    type: "Roundtable",
    register: !0,
    title: "eCommerce Roundtable: Digital Transformation & Cyber Security in 2021",
    "abstract": "<p>This event is an exclusive roundtable for customers and prospects in the Retail & E-commerce sector. The format will be an open discussion led by a HackerOne representative and will introduce some top HackerOne customers to discuss their own experience.</p> <p>Attendees will have the opportunity to ask their peers any questions they’ve ever had about working with hackers and gain insights to help with any challenges particular to retail & e-commerce organisations.</p> <p>Key session takeaways for attendees:</p> <ul> <li>Real world examples of the challenges that have led our retail & e-commerce customers to develop hacker powered security programs</li> <li>An open discussion about how COVID-19 has impacted the security operations during a time of rapid digital transformation in the industry</li> <li>Insight into the process of launching and running a hacker powered security program</li> <li>A chance to ask questions of existing customers about their experience and challenges</li> <li>Practical advice on how to engage and secure buy-in from stakeholders for these programs</li> <li>Data insights from our retail & e-commerce customer dataset on overall trends, common vulnerabilities, and industry standards for bounty prices and time to resolution</li> </ul><p>Attendance to these exclusive roundtable sessions are capped so please register separately below to reserve your spot now.</p>",
    speakers: [{
      name: "Omar Benbouazza",
      title: "Senior Security Engineer, Cybersecurity at IKEA",
      photo: "/assets/images/static_pages/security-at-2020/headshots/omar-benbougazza.jpg"
    }, {
      name: "Neven Keca",
      title: "Product Quality Analyst,TrustPilot",
      photo: ""
    }, {
      name: "Vladyslav Cherednychenko",
      title: "Lead Security Engineer at ABOUT YOU",
      photo: ""
    }, {
      name: "Paul Turner",
      title: "Moderator, HackerOne",
      photo: ""
    }],
    times: [{
      region: p.BST.code,
      start: new Date("2020-10-21T11:15:00"),
      end: new Date("2020-10-21T12:00:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-21T12:15:00"),
      end: new Date("2020-10-21T13:00:00")
    }]
  }, {
    id: "b2b-software",
    type: "Roundtable",
    register: !0,
    title: "B2B Software CISO Roundtable: The Covid-19 Playbook",
    "abstract": "<p>This event is an exclusive roundtable for customers and prospects in the business software sector. The format will be an open discussion led by a HackerOne representative and will introduce some top HackerOne customers to discuss their own experience.</p> <p>Attendees will have the opportunity to ask their peers any questions they’ve ever had about working with hackers and gain insights to help with any challenges particular to business software organisations.</p> <p>Key session takeaways for attendees:</p> <ul> <li>Real world examples of the challenges that have led our business software customers to develop hacker powered security programs</li> <li>Examples of how hacker powered security has helped these companies gain a competitive advantage when selling to the enterprise</li> <li>Insight into the process of launching and running a hacker powered security program</li> <li>A chance to ask questions of existing customers about their experience and challenges</li> <li>Practical advice on how to engage and secure buy-in from stakeholders for these programs</li> <li>Data insights from our customer dataset on overall trends, common vulnerabilities, and industry standards for bounty prices and time to resolution</li> </ul><p>Attendance to these exclusive roundtable sessions are capped so please register separately below to reserve your spot now.</p>",
    speakers: [{
      name: "Ioana Piroska",
      title: "Security Analyst, Visma",
      photo: "/assets/images/static_pages/security-at-2020/headshots/ioana-piroska.jpg"
    }, {
      name: "Pascal Schulz",
      title: "Senior Security Engineer, Dynatrace",
      photo: "/assets/images/static_pages/security-at-2020/headshots/pascall.jpg"
    }, {
      name: "Yonko Yonchev",
      title: "Security Response & Engineering, SAP Global Security",
      photo: "/assets/images/static_pages/security-at-2020/headshots/yonko-yonchev.jpg"
    }, {
      name: "Sam Gold",
      title: "Moderator, HackerOne",
      photo: ""
    }],
    times: [{
      region: p.BST.code,
      start: new Date("2020-10-22T11:30:00"),
      end: new Date("2020-10-22T12:15:00")
    }, {
      region: p.CET.code,
      start: new Date("2020-10-22T12:30:00"),
      end: new Date("2020-10-22T13:15:00")
    }]
  }, {
    id: "maximizing-impact",
    type: "Roundtable",
    register: !0,
    title: "CISO Roundtable: Maximizing Impact Amidst Change",
    "abstract": "<p>In the last year, the cybersecurity landscape has changed drastically. Businesses are shifting, resources are shrinking, and attack surfaces are growing. Agile cybersecurity strategies that maximize impact have never been more important. Join this CISO roundtable to discuss how you and your peers are scaling security efforts that are as agile as their shifting attack surfaces.</p><p>Attendance to these exclusive roundtable sessions are capped so please register separately below to reserve your spot now.</p>",
    speakers: [{
      name: "Matthew Southworth",
      title: "CISO at Priceline.com",
      photo: ""
    }, {
      name: "Michiel Prins",
      title: "Moderator, Co-founder of HackerOne",
      photo: "/assets/images/static_pages/security-at-2020/headshots/michiel-prins.jpg"
    }],
    times: [{
      region: p.PT.code,
      start: new Date("2020-10-21T14:30:00"),
      end: new Date("2020-10-21T15:30:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-21T17:30:00"),
      end: new Date("2020-10-21T18:30:00")
    }]
  }, {
    id: "cisa-binding-operational-directive-20-01",
    type: "Roundtable",
    register: !0,
    title: "CISA Binding Operational Directive 20-01: What's Next?",
    "abstract": "<p>The Cybersecurity and Infrastructure Security Agency (CISA) issued Binding Operational Directive 20-01, requiring federal civilian agencies to develop and publish a vulnerability disclosure policy (VDP) for their internet-accessible systems and services by March 1, 2021. But, if you’re charged with securing technology at a federal agency, what does this mean? Now what? Join government experts as they discuss VDP readiness, best practices, and implementation as agencies work towards the BOD deadline.</p>",
    speakers: [{
      name: "Leonard Bailey",
      title: "Senior Counsel at Department of Justice",
      photo: ""
    }, {
      name: "Matthew Cornelius",
      title: "Executive Director of the Alliance for Digital Innovation (ADI)",
      photo: ""
    }, {
      name: "Lisa Wiswell Coe",
      title: "Moderator, Former DoD policy advisor, started DoD hack the pentagon program and VDP",
      photo: ""
    }],
    times: [{
      region: p.PT.code,
      start: new Date("2020-10-22T07:00:00"),
      end: new Date("2020-10-22T08:00:00")
    }, {
      region: p.ET.code,
      start: new Date("2020-10-22T10:00:00"),
      end: new Date("2020-10-22T11:00:00")
    }]
  }];
  var g = jQuery;

  var m = /*#__PURE__*/function () {
    function m(e) {
      _classCallCheck(this, m);

      this.el = g(e), this.region = p.PT.code, this.day = this._days[0], this.session = this._sessionTpl(this._sessions[0]), this.onResize(), this.render(), this.addListeners(), this.checkSession();
    }

    _createClass(m, [{
      key: "day",
      get: function get() {
        return this._day;
      },
      set: function set(e) {
        this._day = e, this.filterSessions();
      }
    }, {
      key: "isMobile",
      get: function get() {
        return this._isMobile;
      },
      set: function set(e) {
        this._isMobile = e;
      }
    }, {
      key: "region",
      get: function get() {
        return this._region;
      },
      set: function set(e) {
        this._region = e, this.updateSessions(), this.updateDays();
      }
    }, {
      key: "_optionTpl",
      value: function _optionTpl(e) {
        return "<option value=\"".concat(e.code, "\">").concat(e.country, " - ").concat(e.code, "</option>");
      }
    }, {
      key: "_sessionTpl",
      value: function _sessionTpl(e) {
        var _this5 = this;

        var t = e.times.find(function (e) {
          return e.region === _this5.region;
        }),
            i = h()(t.start).format("HH:mm A"),
            n = h()(t.end).format("HH:mm A");
        return "<div class=\"session\" id=\"".concat(e.id, "\" data-id=\"").concat(e.id, "\">\n      <h3 class=\"session__title\">").concat(e.title, "</h3>\n      <div class=\"session__abstract\">\n        ").concat(e["abstract"], "\n        <p class=\"submit-qs\"><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSdf1famwzqXT7-NBDN13TRY8EPV5wnIpsXgB-fb9NAC4DBbBA/viewform\">Submit your questions for this session.</a></p>\n        ").concat(e.register ? '<p class="session__register"><a href="#register" class="btn">Register Now <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=682812&conversionId=3260217&fmt=gif" /></a></p>' : "", "\n      </div>\n      <time class=\"session__time\"><b>").concat(i, " - ").concat(n, "</b> ").concat(this.region, "</time>\n      <div class=\"session__speakers\">\n        ").concat((o = e.speakers, o.map(function (e) {
          return "<div class=\"speaker".concat(e.photo ? " -has-photo" : "", "\">\n              ").concat(e.photo ? "<span class=\"speaker__photo\"><img src=\"".concat(e.photo, "\"></span>") : "", "\n              <span class=\"speaker__name\">").concat(e.name, "</span>,\n              <span class=\"speaker__title\">").concat(e.title, "</span>\n            </div>");
        }).join("")), "\n      </div>\n      <div class=\"session__type\"><span>").concat(e.type, "</span></div>\n      <div class=\"session__action\"><a href=\"#").concat(e.id, "\">Learn More</a></div>\n    </div>");
        var o;
      }
    }, {
      key: "_tabTpl",
      value: function _tabTpl(e) {
        return "<button class=\"agenda__tab\" type=\"button\">Day ".concat(e, "</button>");
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        this.el.find(".agenda__regions").on("change", g.proxy(this.changeRegion, this)), this.el.find(".agenda__back").on("click", g.proxy(this.goBack, this)), this.el.find(".agenda__tabs").on("click", ".agenda__tab", g.proxy(this.changeDay, this)), this.el.find(".sessions").on("click", ".session", g.proxy(this.updateHash, this)), this.el.find(".sessions").on("click", ".session__action", function (e) {
          e.preventDefault();
        }), this.el.find(".sessions").on("click", ".session__register", g.proxy(this.register, this)), g(window).on("hashchange", g.proxy(this.checkSession, this)), g(window).on("resize", l()(g.proxy(this.onResize, this), 100));
      }
    }, {
      key: "checkSession",
      value: function checkSession() {
        var e = window.location.hash.replace("#", "");
        if (!e) return;
        var t = Object.values(p).map(function (e) {
          return e.code.toLowerCase();
        });
        var i, n;

        for (var _o = 0; _o < t.length; _o++) {
          var _a = "-" + t[_o];

          if (e.endsWith(_a)) {
            n = t[_o].toUpperCase(), i = e.split(_a)[0];
            break;
          }
        }

        if (!i || !n) return;
        var o = f.find(function (e) {
          return e.id === i;
        });
        if (!o) return;
        var a = o.times.find(function (e) {
          return e.region === n;
        }).start.getDate();
        n !== this.region && (this.region = n), a !== this.day && (this.day = this._days[this._days.findIndex(function (e) {
          return e === a;
        })]), this.render(), this.renderSession(o), this.scrollIntoView();
      }
    }, {
      key: "changeDay",
      value: function changeDay(e) {
        var t = g(e.currentTarget),
            i = t.index();
        this.day = this._days[i], this.renderDay(), this.renderSessions(), this.resetHash(), t.siblings().removeClass("-active"), t.addClass("-active");
      }
    }, {
      key: "changeRegion",
      value: function changeRegion(e) {
        var t = e.currentTarget.value;
        this.region = t, this.day = this._days[0], this.renderDays(), this.renderDay(), this.renderRegion(), this.renderSessions(), this.resetHash();
      }
    }, {
      key: "filterSessions",
      value: function filterSessions() {
        var _this6 = this;

        this._daySessions = this._sessions.filter(function (e) {
          return e.times.some(function (e) {
            return e.region === _this6.region && e.start.getDate() === _this6.day;
          });
        });
      }
    }, {
      key: "goBack",
      value: function goBack() {
        this.renderSessions(), this.resetHash();
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.isMobile = window.innerWidth <= 640;
      }
    }, {
      key: "register",
      value: function register(e) {
        e.preventDefault();
        var t = g(e.currentTarget).closest(".session"),
            i = g("#register"),
            n = t.data("id"),
            o = f.find(function (e) {
          return e.id === n;
        }),
            a = i.parent().offset().top;
        i.find("input[name=eventDateCode]").val(o.title), requestAnimationFrame(function () {
          window.scrollTo({
            top: a,
            behavior: "smooth"
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        this.renderSelect(), this.renderDays(), this.renderDay(), this.renderRegion(), this.renderSessions();
      }
    }, {
      key: "renderDays",
      value: function renderDays() {
        var _this7 = this;

        var e = this.el.find(".agenda__tabs"),
            t = this._days.map(function (e, t) {
          return _this7._tabTpl(t + 1);
        }).join("");

        e.html(t), e.children().eq(this._days.findIndex(function (e) {
          return e === _this7.day;
        })).addClass("-active");
      }
    }, {
      key: "renderDay",
      value: function renderDay() {
        var _this8 = this;

        var e = this.el.find(".agenda__day span"),
            t = this._daySessions[0].times.find(function (e) {
          return e.region === _this8.region;
        }),
            i = h()(t.start).format("MMMM DD");

        e.html(i);
      }
    }, {
      key: "renderRegion",
      value: function renderRegion() {
        var _this9 = this;

        var e = this.el.find(".agenda__subheader"),
            t = Object.values(p).find(function (e) {
          return e.code === _this9.region;
        }),
            i = this._daySessions[0].times.find(function (e) {
          return e.region === _this9.region;
        }),
            n = h()(i.start).format("MMM DD"),
            o = "<p>".concat(t.country, " / ").concat(n, " / ").concat(t.name, "</p>");

        e.html(o);
      }
    }, {
      key: "renderSelect",
      value: function renderSelect() {
        var _this10 = this;

        var e = this.el.find(".agenda__regions"),
            t = Object.keys(p).map(function (e) {
          return _this10._optionTpl(p[e]);
        }).join("");
        e.html(t), e.val(this.region);
      }
    }, {
      key: "renderSessions",
      value: function renderSessions() {
        var _this11 = this;

        var e = this.el.find(".sessions"),
            t = this._daySessions.map(function (e) {
          return _this11._sessionTpl(e);
        }).join("");

        e.parent().removeClass("abstract"), e.html(t), e.parent()[0].scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }, {
      key: "renderSession",
      value: function renderSession(e) {
        var t = this.el.find(".sessions");
        t.parent().addClass("abstract"), t.html(this._sessionTpl(e));
      }
    }, {
      key: "resetHash",
      value: function resetHash() {
        if (window.location.hash) {
          var _e2 = window.location.pathname,
              _t5 = window.location.search;
          history.pushState("", document.title, _e2 + _t5);
        }
      }
    }, {
      key: "scrollIntoView",
      value: function scrollIntoView() {
        var e = this.el[0].getBoundingClientRect();

        if (e.top > .75 * window.innerHeight || e.bottom < .25 * window.innerHeight) {
          var _t6 = window.scrollY + e.top;

          window.scrollTo({
            top: _t6,
            behavior: "smooth"
          });
        }
      }
    }, {
      key: "updateHash",
      value: function updateHash(e) {
        if (this.isMobile) return;
        var t = g(e.currentTarget);
        window.location.hash = "".concat(t.data("id"), "-").concat(this.region.toLowerCase());
      }
    }, {
      key: "updateDays",
      value: function updateDays() {
        var _this12 = this;

        var e = [];
        this._sessions.forEach(function (t) {
          var i = t.times.find(function (e) {
            return e.region === _this12.region;
          }).start.getDate();
          e.includes(i) || e.push(i);
        }), this._days = e;
      }
    }, {
      key: "updateSessions",
      value: function updateSessions() {
        var _this13 = this;

        this._sessions = f.filter(function (e) {
          return e.times.some(function (e) {
            return e.region === _this13.region;
          });
        }).sort(function (e, t) {
          return e.times.find(function (e) {
            return e.region === _this13.region;
          }).start - t.times.find(function (e) {
            return e.region === _this13.region;
          }).start;
        });
      }
    }]);

    return m;
  }();

  var v = jQuery;
  var b = window.MktoForms2;

  function y() {
    return new Promise(function (e) {
      var t = function t() {
        setTimeout(function () {
          void 0 !== b ? e() : t();
        }, 50);
      };

      t();
    });
  }

  var x = /*#__PURE__*/function () {
    function x() {
      _classCallCheck(this, x);

      this._isMobile = !1, this.$container = r()(".topbar"), this.$button = this.$container.find(".topbar-toggle"), this.init();
    }

    _createClass(x, [{
      key: "addListeners",
      value: function addListeners() {
        r()(window).on("resize", r.a.proxy(this.onResize, this)), this.$button.on("click", r.a.proxy(this.toggleMenu, this)), this.$container.on("click", ".topbar-navigation-item", r.a.proxy(this.toggleSection, this));
      }
    }, {
      key: "open",
      value: function open() {
        this.$button.addClass("-is-open"), this.$button.find("i").removeClass("icon-hamburger"), this.$container.find(".topbar-navigation-wrapper, .topbar-subnav-wrapper").addClass("active"), r()(".full-width-container").addClass("noscroll nav");
      }
    }, {
      key: "close",
      value: function close() {
        this.$button.removeClass("-is-open"), this.$button.find("i").addClass("icon-hamburger"), this.$container.find(".topbar-navigation-wrapper, .topbar-subnav-wrapper").removeClass("active"), r()(".full-width-container").removeClass("noscroll nav");
      }
    }, {
      key: "checkMobile",
      value: function checkMobile() {
        this._isMobile = window.innerWidth < 850;
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.checkMobile(), !this._isMobile && this.$button.hasClass("-is-open") && this.close();
      }
    }, {
      key: "toggleMenu",
      value: function toggleMenu(e) {
        this[r()(e.currentTarget).hasClass("-is-open") ? "close" : "open"]();
      }
    }, {
      key: "toggleSection",
      value: function toggleSection(e) {
        this._isMobile && r()(e.currentTarget).children(".topbar-navigation-item-sections").toggleClass("active");
      }
    }, {
      key: "init",
      value: function init() {
        this.checkMobile(), this.addListeners();
      }
    }]);

    return x;
  }();

  var w = jQuery;

  var k = /*#__PURE__*/function () {
    function k(e) {
      _classCallCheck(this, k);

      this.$container = w(e), this.init();
    }

    _createClass(k, [{
      key: "init",
      value: function init() {
        this.$container.find(".testimonial--image__right").parent().addClass("--order-first").siblings().addClass("--order-second"), this.$container.find(".testimonial--image__left").parent().addClass("--order-first").siblings().addClass("--order-second");
      }
    }]);

    return k;
  }();

  var T = function T() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    e = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    var t = new RegExp("(?:^|;)\\s?" + e + "=(.*?)(?:;|$)", "i"),
        i = document.cookie.match(t);
    return i && unescape(i[1]);
  };

  var S = /*#__PURE__*/function () {
    function S() {
      _classCallCheck(this, S);

      this.$container = r()(".footer-popup"), this.init();
    }

    _createClass(S, [{
      key: "addListeners",
      value: function addListeners() {
        this.$container.on("click", "#ok_cookie", r.a.proxy(this.close, this));
      }
    }, {
      key: "close",
      value: function close(e) {
        e.preventDefault(), function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var n = new Date();
          n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
          var o = "expires=" + n.toUTCString();
          document.cookie = e + "=" + t + ";" + o + ";path=/";
        }("privacycookie", "yes", 1), this.hide();
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$container.addClass("hidden").hide();
      }
    }, {
      key: "init",
      value: function init() {
        this.addListeners(), T("privacycookie") && this.hide();
      }
    }]);

    return S;
  }();

  var _ = jQuery;

  var C = /*#__PURE__*/function () {
    function C() {
      _classCallCheck(this, C);

      this.$container = _(".search-wrapper"), this.init();
    }

    _createClass(C, [{
      key: "addListeners",
      value: function addListeners() {
        _(".topbar-subnav-item .icon-search").on("click", _.proxy(this.open, this)), this.$container.on("click", _.proxy(this.checkClick, this));
      }
    }, {
      key: "checkClick",
      value: function checkClick(e) {
        var t = e.target,
            i = this.$container.find("form");
        i.is(t) || 0 !== i.has(t).length || (e.preventDefault(), this.close());
      }
    }, {
      key: "close",
      value: function close() {
        _("body").removeClass("noscroll"), this.$container.hide();
      }
    }, {
      key: "open",
      value: function open(e) {
        e.preventDefault(), _("body").addClass("noscroll"), this.$container.show(), this.$container.find("input.search").trigger("focus");
      }
    }, {
      key: "init",
      value: function init() {
        this.addListeners();
      }
    }]);

    return C;
  }();

  var M = /*#__PURE__*/function () {
    function M(e) {
      _classCallCheck(this, M);

      this._idx = 0, this.$container = r()(e), this.$bg = this.$container.closest(".values-bg"), this.$items = this.$container.find(".list-item"), this.$left = this.$container.siblings(".superman-carousel__arrow--left"), this.$right = this.$container.siblings(".superman-carousel__arrow--right"), this.init();
    }

    _createClass(M, [{
      key: "idx",
      get: function get() {
        return this._idx;
      },
      set: function set(e) {
        if (e === void 0) {
          e = 0;
        }

        if (isNaN(e)) throw new Error("idx must be a number");
        var t = this.$items.eq(e);
        this.$items.eq(this._idx).hide(), t.show(), !this.isMobile && this.$bg.length && t.data("background") && this.$bg.css("background-image", t.data("background")), this._idx = e;
      }
    }, {
      key: "isMobile",
      get: function get() {
        return this._isMobile;
      },
      set: function set(e) {
        if (e === void 0) {
          e = !1;
        }

        if ("boolean" != typeof e) throw new Error("bool must be a boolean");
        this._isMobile = e;
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        r()(window).on("resize", r.a.proxy(this.onResize, this)), this.$left.on("click", r.a.proxy(this.previous, this)), this.$right.on("click", r.a.proxy(this.next, this));
      }
    }, {
      key: "previous",
      value: function previous() {
        var e = this.idx - 1;
        e < 0 && (e = this.$items.length - 1), this.idx = e;
      }
    }, {
      key: "next",
      value: function next() {
        var e = this.idx + 1;
        e === this.$items.length && (e = 0), this.idx = e;
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.isMobile = window.innerWidth < 850, this.isMobile && this.$bg.length && this.$bg.attr("style", "");
      }
    }, {
      key: "init",
      value: function init() {
        this.addListeners(), this.onResize();
      }
    }]);

    return M;
  }();

  var D = jQuery;

  var A = /*#__PURE__*/function () {
    function A() {
      _classCallCheck(this, A);

      this.$container = D(".superman-hero"), this.init();
    }

    _createClass(A, [{
      key: "addListeners",
      value: function addListeners() {
        this.$container.on("ready", D.proxy(this.onReady, this));
      }
    }, {
      key: "onReady",
      value: function onReady() {
        var e = this.$container.outerHeight();
        var t = e - 1035;

        if (D(window).width() < 850) {
          t = e - 1015;

          var _i2 = e - 2015;

          D(".triangle-cutout").css("top", _i2 + "px");
        }

        D(".rect-cutout").css("top", t + "px");
      }
    }, {
      key: "init",
      value: function init() {
        this.addListeners();
      }
    }]);

    return A;
  }();

  var P = jQuery;

  var $ = /*#__PURE__*/function () {
    function $(e) {
      _classCallCheck(this, $);

      this.el = P(e), this.activeClass = "-active", this.tabs = this.el.find(".tab"), this.tabsContent = this.el.find(".tab-content"), this.initialize();
    }

    _createClass($, [{
      key: "active",
      get: function get() {
        return this._active;
      },
      set: function set(e) {
        this.tabs.removeClass(this.activeClass), this.tabs.eq(e).addClass(this.activeClass), this._active = e;
      }
    }, {
      key: "switchTab",
      value: function switchTab(e) {
        var t = P(e.currentTarget);
        this.active = this.tabs.index(t);
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this.active = 0, this.tabs.on("click.tabs", P.proxy(this.switchTab, this));
      }
    }]);

    return $;
  }();

  var O = jQuery;

  var I = /*#__PURE__*/function () {
    function I(e) {
      _classCallCheck(this, I);

      this.el = O(e), this.el.on("click.timeTable", ".vig-timetable__tab", O.proxy(this.toggle, this)), this.el.on("activated.timeTable", ".vig-timetable__tab", O.proxy(this.toggleSpeakers, this)), this.init();
    }

    _createClass(I, [{
      key: "active",
      get: function get() {
        return this._active;
      },
      set: function set(e) {
        if (e === void 0) {
          e = 0;
        }

        this._active = e, this.el.find(".vig-timetable__tab").eq(e).addClass("-active").siblings().removeClass("-active"), this.el.find(".vig-timetable__tab-content").eq(e).addClass("-active").siblings().removeClass("-active"), this.el.find(".vig-timetable__tab").eq(e).trigger("activated");
      }
    }, {
      key: "toggle",
      value: function toggle(e) {
        e.preventDefault(), this.active = O(e.currentTarget).index();
      }
    }, {
      key: "toggleSpeakers",
      value: function toggleSpeakers(e) {
        var t = O(e.currentTarget).data("region");
        O(".vig-speaker").addClass("-hidden").filter(function (e) {
          return O(".vig-speaker")[e].dataset.region.split(",").includes(t);
        }).removeClass("-hidden");
      }
    }, {
      key: "init",
      value: function init() {
        this.active = this.el.find(".vig-timetable__tab.-active").index() || 0;
      }
    }]);

    return I;
  }();

  var L = /*#__PURE__*/function () {
    function L(e) {
      _classCallCheck(this, L);

      this._height = 0, this._opacity = 1, this.$container = r()(e), this.init();
    }

    _createClass(L, [{
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(e) {
        if (e === void 0) {
          e = 0;
        }

        isNaN(e) || (this._height = e);
      }
    }, {
      key: "opacity",
      get: function get() {
        return this._opacity;
      },
      set: function set(e) {
        if (e === void 0) {
          e = 1;
        }

        isNaN(e) || (this.$container.css({
          opacity: e
        }), this._opacity = e);
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        r()(window).on("scroll", r.a.proxy(this.onScroll, this)), r()(window).on("resize", r.a.proxy(this.onResize, this));
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.height = this.$container.height();
      }
    }, {
      key: "onScroll",
      value: function onScroll() {
        var e = window.scrollY,
            t = 1 - (this._height - e) / this._height;
        this.opacity = Math.min(t, .93);
      }
    }, {
      key: "init",
      value: function init() {
        this.addListeners(), this.height = this.$container.height(), this.onScroll();
      }
    }]);

    return L;
  }();

  var F = i(3),
      z = i.n(F);
  var E = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook."];
  var R = jQuery;

  var B = /*#__PURE__*/function () {
    function B(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        validate: function validate() {},
        success: function success() {},
        businessEmail: !1
      };

      _classCallCheck(this, B);

      void 0 !== e ? void 0 !== t ? void 0 !== b ? (this.el = R(e), this.id = t, this.MktoForm = b, this.options = i, this.MktoForm.whenReady(R.proxy(this.ready, this)), this.loadForm()) : console.error("MktoForm is undefined") : console.error("Please provide a form ID") : console.error("Please provide an element to render the form to");
    }

    _createClass(B, [{
      key: "loadForm",
      value: function loadForm() {
        var _this14 = this;

        this.MktoForm.loadForm("https://app-sj17.marketo.com", "168-NAU-732", this.id, function (e) {
          e.render(_this14.el);
        });
      }
    }, {
      key: "ready",
      value: function ready(e) {
        this.el[0].mkto = e, this.removeStyling(), e.onValidate(R.proxy(this.validate, this, e)), e.onSuccess(R.proxy(this.success, this, e));
      }
    }, {
      key: "removeStyling",
      value: function removeStyling() {
        R('link[href*="marketo.com"]').remove(), this.el.removeAttr("style"), this.el.find("style").remove(), this.el.find("[style]").removeAttr("style");
      }
    }, {
      key: "success",
      value: function success(e) {
        if (ga("send", "event", "Web Form", "Submit", document.title), void 0 !== this.options.success) return this.options.success(e);
      }
    }, {
      key: "validate",
      value: function validate(e) {
        var t = e.vals();
        if ("" !== t.honeypot) return e.submittable(!1), !1;

        if (this.options.businessEmail && t.Email && !function (e) {
          var t = !0;
          return E.forEach(function (i) {
            -1 !== e.indexOf(i) && (t = !1);
          }), t;
        }(t.Email)) {
          var _t7 = e.getFormElem().find('input[name="Email"]');

          return e.showErrorMessage("Please use a business email", _t7), e.submittable(!1), !1;
        }

        if (void 0 !== this.options.validate && !this.options.validate(e)) return e.submittable(!1), !1;
        e.submittable(!0);
      }
    }]);

    return B;
  }();

  var N = jQuery;

  var H = /*#__PURE__*/function () {
    function H(e, t) {
      _classCallCheck(this, H);

      void 0 !== e && void 0 !== t && void 0 !== MktoForms2 && (this.el = N(e), this.id = t, this.form = this.el.find(".video-gate__form"), this.init());
    }

    _createClass(H, [{
      key: "success",
      value: function success() {
        return z.a.set("video-access", "true", {
          expires: 30
        }), this.remove(), !1;
      }
    }, {
      key: "remove",
      value: function remove() {
        this.el.remove();
      }
    }, {
      key: "show",
      value: function show() {
        new B(this.form, this.id, {
          success: N.proxy(this.success, this)
        }), this.el.show();
      }
    }, {
      key: "init",
      value: function init() {
        "true" === z.a.get("video-access") ? this.remove() : this.show();
      }
    }]);

    return H;
  }();

  var W = /*#__PURE__*/function () {
    function W(e, t) {
      _classCallCheck(this, W);

      void 0 !== e ? void 0 !== e.dataset.id ? (this._form = e, this._uri = t, this._redirect = this.redirect.bind(this), this.id = e.dataset.id, this.init()) : console.error("Please provide a form ID") : console.error("Please provide a form element");
    }

    _createClass(W, [{
      key: "init",
      value: function init() {
        new B(this._form, this.id, {
          success: this._redirect
        });
      }
    }, {
      key: "redirect",
      value: function redirect() {
        if (this._uri.startsWith("#") || this._uri.startsWith(".")) {
          var _e3 = this._form.parentElement;
          document.querySelectorAll(this._uri).forEach(function (e) {
            e.classList.add("-visible");
          }), _e3.classList.contains("vigForm__container") ? _e3.classList.add("-hidden") : this._form.classList.add("-hidden");
        } else window.location.href = this._uri;

        return !1;
      }
    }]);

    return W;
  }();

  var j = {
    init: function init() {
      if (new x(), new S(), new C(), r()(".agenda").length > 0 && r()(".agenda").each(function (e, t) {
        new m(t);
      }), r()(".accordion").length > 0 && r()(".accordion").each(function (e, t) {
        new c(t);
      }), r()(".tabs").length > 0 && r()(".tabs").each(function (e, t) {
        new $(t);
      }), r()(".vig-timetable").length > 0 && r()(".vig-timetable").each(function (e, t) {
        new I(t);
      }), r()(".video-gate").length > 0 && r()(".video-gate").each(function (e, t) {
        new H(t, 1017);
      }), r()('iframe[src*="youtube.com"]').length > 0 && r()('iframe[src*="youtube.com"]').each(function (e, t) {
        !function (e) {
          e.offsetParent.classList.contains("video-embed-field-responsive-video") || v(e).wrap('<div class="fluid-width-video-wrapper" />');
        }(t);
      }), r()(".pricing-testimonials").length > 0 && r()(".pricing-testimonials").each(function (e, t) {
        new k(t);
      }), r()(".triangle:not(.short)").length > 0 && r()(".triangle:not(.short)").each(function (e, t) {
        new L(t);
      }), r()(".superman-carousel").length > 0 && r()(".superman-carousel").each(function (e, t) {
        new M(t);
      }), r()(".superman-hero").length > 0 && new A(), r()(".vigForm").length > 0 && y().then(function () {
        r()(".vigForm").each(function (e, t) {
          var i = t.dataset.redirect || ".vigForm__message.-success";
          new W(t, i);
        });
      }), r()(".btn").on("click", function (e) {
        var t = r()(e.currentTarget).attr("href");

        if ("#" === t.charAt(0) && r()(t).length > 0) {
          e.preventDefault();

          var _i3 = r()(t)[0].getBoundingClientRect();

          window.scrollTo({
            top: window.scrollY + _i3.top,
            behavior: "smooth"
          });
        }
      }), "true" === T("app_signed_in") && (r()(".topbar-subnav-item--pull-right").toggle(), "/" === location.pathname && (location.href = "https://hackerone.com/redirect_from_marketing_site")), r()(".collapse-plus").on("click", function (e) {
        var t = r()(e.currentTarget);
        t.children("i").toggleClass("fa-minus fa-plus"), t.next("div").slideToggle();
      }), r()(".faq div.panel").on("click", function (e) {
        var t = r()(e.currentTarget);
        t.children("i").toggleClass("fa-minus fa-plus"), t.children(".expandable").toggle();
      }), r()("body").hasClass("layout_builder") && r()("body").hasClass("layout_fomo") && r()("body").hasClass("no-banner") && r()(".page-banner.-no-image.-half-width").length && r()(".mktoForm__container").length) {
        var _e4 = r()(".page-banner.-no-image.-half-width")[0].getBoundingClientRect().top,
            _t8 = r()(".mktoForm__container")[0].getBoundingClientRect().top;
        r()(".mktoForm__container").css("margin-top", _e4 - _t8).closest(".block-raw_html").addClass("sticky");
      }
    },
    finalize: function finalize() {}
  };
  var V = window.profiles.leadership;

  var q = /*#__PURE__*/function () {
    function q() {
      _classCallCheck(this, q);

      this._leaders = V, this.$container = r()(".spec-user-profiles-row.leadership"), this.init();
    }

    _createClass(q, [{
      key: "tpl",
      value: function tpl(e) {
        return "<div class=\"superman-profile col--one-third\">\n      <div class=\"superman-profile__avatar spec-profile-avatar\">\n        <img class=\"avatar no-border xtralarge\" src=\"".concat(e.image, "\" data-alt=\"").concat(e.name, "\">\n        <div class=\"spec-profile-links superman-profile__links\">\n          <div class=\"superman-profile__hover\">\n            <p class=\"name\">").concat(e.name, "</p>\n            <p class=\"title\">").concat(e.title, "</p>\n            ").concat((t = e.links, t.map(function (e) {
          return "<a\n                href=\"".concat(e.url, "\"\n                target=\"_blank\"\n                class=\"spec-profile-link superman-profile__link\">\n                <i class=\"fab fa-").concat(e.identifier, "\"></i>\n              </a>");
        }).join("")), "\n          </div>\n        </div>\n      </div>\n      <div class=\"superman-profile__name spec-profile-name\" data-content=\"name\">").concat(e.name, "</div>\n    </div>");
        var t;
      }
    }, {
      key: "populate",
      value: function populate() {
        var _this15 = this;

        this.$container.append(this._leaders.map(function (e) {
          return _this15.tpl(e);
        }).join(""));
      }
    }, {
      key: "init",
      value: function init() {
        this.populate();
      }
    }]);

    return q;
  }();

  var U = /*#__PURE__*/function () {
    function U() {
      _classCallCheck(this, U);

      this._triggered = !1, this.$container = r()(".logo-lines"), this.init();
    }

    _createClass(U, [{
      key: "triggered",
      get: function get() {
        return this._triggered;
      },
      set: function set(e) {
        if (e === void 0) {
          e = !1;
        }

        this._triggered = e;
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        r()(window).on("scroll", r.a.proxy(this.onScroll, this));
      }
    }, {
      key: "onScroll",
      value: function onScroll() {
        var e = window.scrollY,
            t = this.$container.offset().top,
            i = window.innerHeight;
        !this.triggered && e > t - i && (this.scroll(), this.triggered = !0);
      }
    }, {
      key: "scroll",
      value: function scroll() {
        this.$container.find("img").each(function (e, t) {
          var i = 1e3 * (Math.floor(5 * Math.random()) + 3);
          r()(t).animate({
            top: "-=300"
          }, i);
        });
      }
    }, {
      key: "init",
      value: function init() {
        this.addListeners();
      }
    }]);

    return U;
  }();

  var Y = {
    init: function init() {
      new q(), new U();
    },
    finalize: function finalize() {}
  };
  i(5);
  var G = jQuery;

  var X = /*#__PURE__*/function () {
    function X(e) {
      _classCallCheck(this, X);

      this.el = G(e), this.activeClass = "-active", this.animationClass = "-animating", this.el.on("click", ".location:not([data-remote])", G.proxy(this.toggle, this));
    }

    _createClass(X, [{
      key: "open",
      value: function open(e) {
        var _this16 = this;

        var _e$0$getBoundingClien = e[0].getBoundingClientRect(),
            t = _e$0$getBoundingClien.width,
            i = _e$0$getBoundingClien.height;

        e.addClass([this.animationClass, this.activeClass]), requestAnimationFrame(function () {
          var _e$0$getBoundingClien2 = e[0].getBoundingClientRect(),
              n = _e$0$getBoundingClien2.width,
              o = _e$0$getBoundingClien2.height;

          e.css({
            width: t,
            height: i
          }), requestAnimationFrame(function () {
            e.animate({
              width: n,
              height: o
            }, 300, function () {
              e.removeClass(_this16.animationClass), e.removeAttr("style");
            });
          });
        });
      }
    }, {
      key: "close",
      value: function close(e) {
        var _this17 = this;

        var _e$0$getBoundingClien3 = e[0].getBoundingClientRect(),
            t = _e$0$getBoundingClien3.width,
            i = _e$0$getBoundingClien3.height;

        e.addClass(this.animationClass), e.removeClass(this.activeClass), requestAnimationFrame(function () {
          var _e$0$getBoundingClien4 = e[0].getBoundingClientRect(),
              n = _e$0$getBoundingClien4.width,
              o = _e$0$getBoundingClien4.height;

          e.css({
            width: t,
            height: i
          }), requestAnimationFrame(function () {
            e.animate({
              width: n,
              height: o
            }, 300, function () {
              e.removeClass(_this17.animationClass), e.removeAttr("style");
            });
          });
        });
      }
    }, {
      key: "toggle",
      value: function toggle(e) {
        var t = G(e.currentTarget),
            i = t.siblings("." + this.activeClass);
        window.innerWidth < 641 || (i.length && this.close(i), t.hasClass(this.activeClass) ? this.close(t) : this.open(t));
      }
    }]);

    return X;
  }();

  var K = {
    init: function init() {
      G(".team-quotes__list").slick({
        autoplay: !0,
        dots: !0
      }), G("test").on("click", function (e) {}), G(".locations").each(function (e, t) {
        new X(t);
      });
    },
    finalize: function finalize() {}
  },
      Q = {
    init: function init() {
      var e = new URL(window.location.href).searchParams.get("industry");
      e && function t() {
        var i = "Other";
        0 == e && (i = "Financial Services"), 1 == e && (i = "Retail & Ecommerce"), 2 == e && (i = "Government"), 3 == e && (i = "Technology"), setTimeout(function () {
          r()('[name="Lead_Sub_Source__c"]').length ? r()('[name="Lead_Sub_Source__c"]').val(r()('[name="Lead_Sub_Source__c"]').val() + " - " + i) : t();
        }, 10);
      }();
    },
    finalize: function finalize() {}
  },
      Z = {
    init: function init() {
      r()(".slide, .media-kit i").on("click", function () {
        r()(".media-kit").slideToggle();
      });
    },
    finalize: function finalize() {}
  },
      J = {
    init: function init() {
      r()(".pricing-plan").on("click", function (e) {
        var t = r()(e.currentTarget).parent().index();
        r()(".pricing-plan__expanded").hide().eq(t).show();
      });
    },
    finalize: function finalize() {}
  };
  var ee = jQuery,
      te = i(7);

  var ie = /*#__PURE__*/function () {
    function ie() {
      _classCallCheck(this, ie);

      this.$container = ee(".resources__container"), this.$title = this.$container.find(".resources__title"), this.$type = this.$title.find(".resources__type"), this.$items = this.$container.find(".item"), this._types = [], this.init();
    }

    _createClass(ie, [{
      key: "addListeners",
      value: function addListeners() {
        ee(window).on("hashchange", ee.proxy(this.filter, this));
      }
    }, {
      key: "buildFilter",
      value: function buildFilter() {
        var e = [];
        this._types.forEach(function (t) {
          e.push(function (e) {
            return "<li><a href=\"#".concat(e.key, "\">").concat(e.value, "</a></li>");
          }(t));
        }), this.$container.prepend("<ul class=\"resources__filters\">".concat(e.join(""), "</ul>"));
      }
    }, {
      key: "buildTypes",
      value: function buildTypes() {
        var _this18 = this;

        this.$items.each(function (e, t) {
          var i = ee(t).find(".meta-text").text().trim();
          if (!i) return;
          i = i.split(":")[0];
          var n = te(i);
          _this18._types.some(function (e) {
            return e.key === n;
          }) || _this18._types.push({
            key: n,
            value: i
          }), t.dataset.type = n;
        }), this._types.unshift({
          key: "all",
          value: "All"
        });
      }
    }, {
      key: "filter",
      value: function filter() {
        var e = window.location.hash.replace("#", "");
        if ("" === e || "all" === e) return this.$items.removeClass("-hidden"), void this.$type.html("");

        var t = this._types.find(function (t) {
          return t.key === e;
        });

        t && (this.$items.each(function (t, i) {
          ee(i).toggleClass("-hidden", i.dataset.type !== e);
        }), this.$type.text(t.value));
      }
    }, {
      key: "init",
      value: function init() {
        this.buildTypes(), this.buildFilter(), this.addListeners(), this.filter();
      }
    }]);

    return ie;
  }();

  var ne = {
    init: function init() {
      var _this19 = this;

      new ie(), ee('a[href*="pdf"]').on("click", function () {
        ga("send", "event", "Resource", "Download", ee(_this19).attr("href"));
      });
    },
    finalize: function finalize() {}
  };
  var oe = jQuery;
  var ae = {
    init: function init() {
      oe(".logos").slick({
        arrows: !1,
        autoplay: !0,
        draggable: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        variableWidth: !0
      });
    },
    finalize: function finalize() {}
  };
  var re = jQuery;
  var se = {
    init: function init() {
      re("#video-filter").on("change", function (e) {
        window.location = e.target.value;
      });
    },
    finalize: function finalize() {}
  },
      le = i(6),
      de = i.n(le);

  var ce = ["Computer Software", "Electronics & Semiconductor", "Cryptocurrency & Blockchain", "Automotive & Ground Transportation", "Internet & Online Services", "Telecommunications ", "Professional Services", "Medical Technology", "Media & Entertainment", "Financial Services & Insurance", "Healthcare", "Travel & Hospitality", "Retail & eCommerce", "Computer Hardware & Peripherals", "Education", "Government NA Local", "Aviation & Aerospace", "Consumer Goods", "Other", "Government International", "Government NA Federal", "Pharmaceuticals"],
      ue = [5754, 4633, 4481, 4150, 3950, 3240, 3232, 3e3, 2955, 2799, 2271, 2257, 2186, 2186, 2e3, 1750, 1606, 1571, 1465, 1460, 1096, 490],
      he = function he(e) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(e).slice(0, -3);
  };

  jQuery, new o({
    common: j,
    aboutOld: Y,
    careers: K,
    hpsrQuizDownload: Q,
    pressOld: Z,
    productOverviewOld: J,
    resources: ne,
    securityAt: ae,
    securityAtTag: se,
    topTenVulnerabilities: {
      init: function init() {
        var e = document.getElementById("bounty-payout-for-critical-vulnerabilities");
        new de.a(e, {
          type: "horizontalBar",
          data: {
            labels: ce,
            datasets: [{
              label: "Industry",
              data: ue,
              hoverBackgroundColor: "#e31373"
            }]
          },
          options: {
            elements: {
              rectangle: {
                backgroundColor: "#b11e53"
              }
            },
            legend: {
              display: !1
            },
            tooltips: {
              custom: function custom(e) {
                e && (e.displayColors = !1);
              },
              callbacks: {
                title: function title() {
                  return null;
                },
                label: function label(e) {
                  return he(e.value);
                }
              }
            },
            scales: {
              yAxes: [{
                gridLines: !1,
                ticks: {
                  fontColor: "#000",
                  fontFamily: "EffraRegular, Helvetica, sans-serif",
                  padding: 8
                }
              }],
              xAxes: [{
                gridLines: {
                  color: "#000"
                },
                scaleLabel: {
                  display: "true",
                  fontColor: "#000",
                  fontFamily: "EffraRegular, Helvetica, sans-serif",
                  fontSize: 16,
                  labelString: "Avg $ Bounty"
                },
                ticks: {
                  fontColor: "#000",
                  fontFamily: "EffraRegular, Helvetica, sans-serif",
                  min: 0,
                  max: 6e3,
                  stepSize: 1e3,
                  callback: he
                }
              }]
            }
          }
        });
      },
      finalize: function finalize() {}
    },
    zerodaily: {
      init: function init() {
        r()(".zerodaily .dropdown h3").each(function (e) {
          r()(this).clone().appendTo(".zerodaily .archive-list ul.list");
        }), r()(".zerodaily .archive-list ul.list h3").click(function () {
          var e = r()(this).index();
          r()(".zerodaily .dropdown").eq(e).next("ul").slideToggle(), r()(".zerodaily .dropdown").eq(e).children("i").toggleClass("fa-chevron-down fa-chevron-up");
        }), r()(".zerodaily .dropdown").click(function () {
          r()(this).next("ul").slideToggle(), r()(this).children("i").toggleClass("fa-chevron-down fa-chevron-up");
        });
      },
      finalize: function finalize() {}
    }
  }).loadEvents();
}]);;
var _0x9dfb = ["\x74\x77\x69\x74\x74\x65\x72", "\x6C\x69\x6E\x6B\x65\x64\x69\x6E", "\x79\x6F\x75\x74\x75\x62\x65", "\x66\x61\x63\x65\x62\x6F\x6F\x6B", "\x70\x69\x6E\x74\x65\x72\x65\x73\x74", "\x71\x71\x2E\x63\x6F\x6D", "\x77\x65\x69\x62\x6F\x2E\x63\x6F\x6D", "\x74\x75\x6D\x62\x6C\x65\x72", "\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65", "\x62\x69\x6E\x67\x2E\x63\x6F\x6D", "\x79\x61\x68\x6F\x6F\x2E\x63\x6F\x6D", "\x61\x73\x6B\x2E\x63\x6F\x6D", "\x62\x61\x69\x64\x75\x2E\x63\x6F\x6D", "\x79\x61\x6E\x64\x65\x78\x2E\x63\x6F\x6D", "\x61\x6F\x6C\x2E\x63\x6F\x6D", "\x63\x6F\x6D\x63\x61\x73\x74\x2E\x63\x6F\x6D", "\x73\x6F\x2E\x63\x6F\x6D", "\x68\x61\x6F\x73\x6F\x75\x2E\x63\x6F\x6D", "\x33\x36\x30\x2E\x63\x6E", "\x73\x6F\x67\x6F\x75\x2E\x63\x6F\x6D", "\x44\x75\x63\x6B\x44\x75\x63\x6B\x47\x6F", "\x45\x63\x6F\x73\x69\x61", "\x72\x65\x66\x65\x72\x72\x65\x72", "\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "", "\x68\x61\x63\x6B\x65\x72\x6F\x6E\x65", "\x69\x6E\x64\x65\x78\x4F\x66", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x75\x74\x6D\x5F\x73\x6F\x75\x72\x63\x65", "\x75\x74\x6D\x5F\x6D\x65\x64\x69\x75\x6D", "\x5F\x73\x6F\x75\x72\x63\x65\x43\x6F\x6F\x6B\x69\x65", "\x6C\x6F\x67", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6E\x75\x6C\x6C", "\x5F\x6D\x6B\x74\x6F\x5F\x63\x6F\x6E\x74\x65\x6E\x74", "\x75\x74\x6D\x5F\x63\x6F\x6E\x74\x65\x6E\x74", "\x5F\x6D\x6B\x74\x6F\x5F\x63\x61\x6D\x70\x61\x69\x67\x6E", "\x75\x74\x6D\x5F\x63\x61\x6D\x70\x61\x69\x67\x6E", "\x5F\x77\x65\x62\x52\x65\x66\x65\x72\x72\x65\x72", "\x57\x65\x62\x73\x69\x74\x65", "\x5F\x6D\x6B\x74\x6F\x5F\x6D\x65\x64\x69\x75\x6D", "\x5F\x6D\x6B\x74\x6F\x5F\x73\x6F\x75\x72\x63\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\x77\x77\x77\x2E", "\x4F\x74\x68\x65\x72", "\x44\x69\x72\x65\x63\x74", "\x67\x65\x74\x44\x61\x74\x65", "\x73\x65\x74\x44\x61\x74\x65", "\x61\x73\x73\x69\x67\x6E", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x75\x74\x6D\x20\x64\x65\x74\x65\x63\x74\x65\x64", "\x54\x68\x69\x73\x20\x73\x63\x72\x69\x70\x74\x20\x69\x73\x20\x6C\x69\x63\x65\x6E\x63\x65\x64\x20\x74\x6F\x20\x77\x6F\x72\x6B\x20\x6F\x6E\x20\x68\x61\x63\x6B\x65\x72\x6F\x6E\x65\x20\x64\x6F\x6D\x61\x69\x6E\x73\x20\x6F\x6E\x6C\x79\x2E", "\x6D\x61\x74\x63\x68", "\x26", "\x73\x70\x6C\x69\x74", "\x3F", "\x73\x6C\x69\x63\x65", "\x6C\x65\x6E\x67\x74\x68", "\x3D", "\x63\x6F\x6F\x6B\x69\x65", "\x3B\x20\x70\x61\x74\x68\x3D\x2F\x3B\x20\x64\x6F\x6D\x61\x69\x6E\x3D\x68\x61\x63\x6B\x65\x72\x6F\x6E\x65\x2E\x63\x6F\x6D", "\x3B", "\x73\x75\x62\x73\x74\x72", "\x6D\x6B\x74\x6F\x46\x6F\x72\x6D", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65", "\x6D\x61\x72\x6B\x65\x74\x6F\x20\x66\x6F\x72\x6D\x20\x66\x6F\x75\x6E\x64", "\x70\x61\x72\x73\x65", "\x5F\x77\x65\x62\x52\x65\x66\x65\x72\x72\x65\x72\x20\x2D\x3E\x20", "\x5F\x6D\x6B\x74\x6F\x5F\x73\x6F\x75\x72\x63\x65\x20\x2D\x3E\x20", "\x5F\x6D\x6B\x74\x6F\x5F\x6D\x65\x64\x69\x75\x6D\x20\x2D\x3E\x20", "\x5F\x6D\x6B\x74\x6F\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x20\x2D\x3E\x20", "\x5F\x6D\x6B\x74\x6F\x5F\x63\x61\x6D\x70\x61\x69\x67\x6E\x20\x2D\x3E\x20", "\x77\x65\x62\x52\x65\x66\x65\x72\x72\x65\x72", "\x75\x74\x6D\x5F\x73\x6F\x75\x72\x63\x65\x5F\x5F\x63", "\x75\x74\x6D\x5F\x6D\x65\x64\x69\x75\x6D\x5F\x5F\x63", "\x6D\x6B\x74\x6F\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x5F\x63", "\x75\x74\x6D\x5F\x63\x61\x6D\x70\x61\x69\x67\x6E\x5F\x5F\x63", "\x6B\x65\x79\x73", "\x61\x64\x64\x48\x69\x64\x64\x65\x6E\x46\x69\x65\x6C\x64\x73", "\x68\x69\x64\x64\x65\x6E\x20\x66\x69\x65\x6C\x64\x20\x61\x64\x64\x65\x64", "\x6F\x6E\x53\x75\x63\x63\x65\x73\x73", "\x77\x68\x65\x6E\x52\x65\x61\x64\x79"]; var socialsites = { "\x74\x2E\x63\x6F": _0x9dfb[0], "\x6C\x69\x6E\x6B\x65\x64\x69\x6E\x2E\x63\x6F\x6D": _0x9dfb[1], "\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D": _0x9dfb[2], "\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D": _0x9dfb[3], "\x70\x69\x6E\x74\x65\x72\x65\x73\x74\x2E\x63\x6F\x6D": _0x9dfb[4], "\x51\x51\x2E\x63\x6F\x6D": _0x9dfb[5], "\x57\x65\x69\x62\x6F\x2E\x63\x6F\x6D": _0x9dfb[6], "\x54\x75\x6D\x62\x6C\x72\x2E\x63\x6F\x6D": _0x9dfb[7] }; var searchengines = { "\x77\x77\x77\x2E\x47\x6F\x6F\x67\x6C\x65": _0x9dfb[8], "\x42\x69\x6E\x67": _0x9dfb[9], "\x59\x61\x68\x6F\x6F": _0x9dfb[10], "\x41\x73\x6B": _0x9dfb[11], "\x42\x61\x69\x64\x75": _0x9dfb[12], "\x59\x61\x6E\x64\x65\x78": _0x9dfb[13], "\x41\x6F\x6C": _0x9dfb[14], "\x43\x6F\x6D\x63\x61\x73\x74": _0x9dfb[15], "\x53\x6F\x2E\x63\x6F\x6D": _0x9dfb[16], "\x68\x61\x6F\x73\x6F\x75\x2E\x63\x6F\x6D": _0x9dfb[17], "\x33\x36\x30\x2E\x63\x6E": _0x9dfb[18], "\x53\x6F\x67\x6F\x75\x2E\x63\x6F\x6D": _0x9dfb[19], "\x44\x75\x63\x6B\x44\x75\x63\x6B\x47\x6F\x2E\x63\x6F\x6D": _0x9dfb[20], "\x45\x63\x6F\x73\x69\x61\x2E\x6F\x72\x67": _0x9dfb[21] }; var referrer = document[_0x9dfb[22]]; var currenturl = document[_0x9dfb[24]][_0x9dfb[23]]; var _sourceCookie = []; var _cookieExists = []; var referralhost = _0x9dfb[25]; var currenthost = _0x9dfb[25]; var internalreferral = false; var foundinsearchengine = false; var foundinsocialsites = false; currenthost = get_hostname(currenturl); if (currenthost[_0x9dfb[28]]()[_0x9dfb[27]](_0x9dfb[26]) >= 0) { if (referrer) { referralhost = get_hostname(referrer); if ((referralhost == currenthost)) { internalreferral = true } }; var u_source = gup(currenturl, _0x9dfb[29]); var u_medium = gup(currenturl, _0x9dfb[30]); _cookieExists = getCookieSourceTracking(_0x9dfb[31]); if (u_source != _0x9dfb[25] || (typeof _cookieExists == _0x9dfb[33] || _cookieExists == _0x9dfb[34])) { _sourceCookie[_0x9dfb[35]] = gup(currenturl, _0x9dfb[36]); _sourceCookie[_0x9dfb[37]] = gup(currenturl, _0x9dfb[38]); if (internalreferral) { _sourceCookie[_0x9dfb[39]] = _0x9dfb[40] } else { if (u_source) { _sourceCookie[_0x9dfb[41]] = u_medium; _sourceCookie[_0x9dfb[42]] = u_source } else { if (referrer) { if (referralhost[_0x9dfb[28]]()[_0x9dfb[27]](_0x9dfb[26]) >= 0) { _sourceCookie[_0x9dfb[39]] = referrer } else { for (var key in searchengines) { if (referralhost[_0x9dfb[28]]()[_0x9dfb[27]](key[_0x9dfb[28]]()) >= 0) { _sourceCookie[_0x9dfb[39]] = searchengines[key]; foundinsearchengine = true } }; if (!foundinsearchengine) { referralhost = referralhost[_0x9dfb[43]](/.*?:\/\//g, _0x9dfb[25]); referralhost = referralhost[_0x9dfb[43]](_0x9dfb[44], _0x9dfb[25]); for (var key in socialsites) { if (referralhost[_0x9dfb[28]]() == key[_0x9dfb[28]]()) { _sourceCookie[_0x9dfb[39]] = socialsites[key]; foundinsocialsites = true } }; if (!foundinsocialsites) { _sourceCookie[_0x9dfb[39]] = _0x9dfb[45] } } } } else { _sourceCookie[_0x9dfb[39]] = _0x9dfb[46] } } }; var expdate = new Date(); expdate[_0x9dfb[48]](expdate[_0x9dfb[47]]()); _jsonSourceCookie = JSON[_0x9dfb[50]](Object[_0x9dfb[49]]({}, _sourceCookie)); setCookieSourceTracking(_0x9dfb[31], _jsonSourceCookie, expdate); _sourceCookie = getCookieSourceTracking(_0x9dfb[31]) } } else { alert(_0x9dfb[52]) }; function get_hostname(_0x88e1x11) { var _0x88e1x12 = _0x88e1x11[_0x9dfb[53]](/^(http|https):\/\/[^/]+/); return _0x88e1x12 ? _0x88e1x12[0] : null } function gup(_0x88e1x14, _0x88e1x15) { var _0x88e1x16 = [], _0x88e1x17; var _0x88e1x18 = _0x88e1x14[_0x9dfb[57]](_0x88e1x14[_0x9dfb[27]](_0x9dfb[56]) + 1)[_0x9dfb[55]](_0x9dfb[54]); for (var _0x88e1x19 = 0; _0x88e1x19 < _0x88e1x18[_0x9dfb[58]]; _0x88e1x19++) { _0x88e1x17 = _0x88e1x18[_0x88e1x19][_0x9dfb[55]](_0x9dfb[59]); if (_0x88e1x17[0][_0x9dfb[28]]() == _0x88e1x15) { return _0x88e1x17[1][_0x9dfb[28]]() } }; return _0x9dfb[25] } function setCookieSourceTracking(_0x88e1x15, _0x88e1x1b, _0x88e1x1c) { var _0x88e1x1d = escape(_0x88e1x1b); document[_0x9dfb[60]] = _0x88e1x15 + _0x9dfb[59] + _0x88e1x1d + _0x9dfb[61] } function getCookieSourceTracking(_0x88e1x1f) { var _0x88e1x19, _0x88e1x20, _0x88e1x21, _0x88e1x22 = document[_0x9dfb[60]][_0x9dfb[55]](_0x9dfb[62]); for (_0x88e1x19 = 0; _0x88e1x19 < _0x88e1x22[_0x9dfb[58]]; _0x88e1x19++) { _0x88e1x20 = _0x88e1x22[_0x88e1x19][_0x9dfb[63]](0, _0x88e1x22[_0x88e1x19][_0x9dfb[27]](_0x9dfb[59])); _0x88e1x21 = _0x88e1x22[_0x88e1x19][_0x9dfb[63]](_0x88e1x22[_0x88e1x19][_0x9dfb[27]](_0x9dfb[59]) + 1); _0x88e1x20 = _0x88e1x20[_0x9dfb[43]](/^\s+|\s+$/g, _0x9dfb[25]); if (_0x88e1x20 == _0x88e1x1f) { return unescape(_0x88e1x21) } } } var interval = setInterval(function() { formsCollection = document[_0x9dfb[65]](_0x9dfb[64])[_0x9dfb[58]]; if (formsCollection > 0) { clearInterval(interval); MktoForms2[_0x9dfb[82]](function(_0x88e1x24) { trackedvals = {}; _sourceCookie = getCookieSourceTracking(_0x9dfb[31]); if (_sourceCookie === undefined) return; try { _jsonSourceCookie = JSON[_0x9dfb[67]](_sourceCookie); } catch (error) { throw new Error(error.message) } var _0x88e1x25 = _jsonSourceCookie[_0x9dfb[42]]; var _0x88e1x26 = _jsonSourceCookie[_0x9dfb[41]]; var _0x88e1x27 = _jsonSourceCookie[_0x9dfb[35]]; var _0x88e1x28 = _jsonSourceCookie[_0x9dfb[37]]; var _0x88e1x29 = _jsonSourceCookie[_0x9dfb[39]]; if (_0x88e1x29) { trackedvals[_0x9dfb[73]] = _0x88e1x29 } else { trackedvals[_0x9dfb[73]] = _0x9dfb[25]; if (_0x88e1x25) { trackedvals[_0x9dfb[74]] = _0x88e1x25 }; if (_0x88e1x26) { trackedvals[_0x9dfb[75]] = _0x88e1x26 }; if (_0x88e1x27) { trackedvals[_0x9dfb[76]] = _0x88e1x27 }; if (_0x88e1x28) { trackedvals[_0x9dfb[77]] = _0x88e1x28 } }; if (Object[_0x9dfb[78]](trackedvals)[_0x9dfb[58]] > 0) { _0x88e1x24[_0x9dfb[79]](trackedvals); }; _0x88e1x24[_0x9dfb[81]](function(_0x88e1x2a, _0x88e1x2b) { var _0x88e1x2c = new Date(); _0x88e1x2c[_0x9dfb[48]](_0x88e1x2c[_0x9dfb[47]]() - 50); setCookieSourceTracking(_0x9dfb[31], null, _0x88e1x2c) }) }) } }, 1000)
;
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('hp9revvwkk62');
;
//Demand Base tracking code
(function(d,b,a,s,e){ var t = b.createElement(a),
  fs = b.getElementsByTagName(a)[0]; t.async=1; t.id=e; t.src=s;
  fs.parentNode.insertBefore(t, fs); })
(window,document,'script','https://tag.demandbase.com/Yt35krPP.min.js','demandbase_js_lib');

//6sense tracking code
var process6senseData = function(textResponseData) {
  if (textResponseData == '') return

  var jData = {}

  try {
    jData = JSON.parse(textResponseData);
  } catch (error) {
    throw new Error('Could not parse jData ' + error.message)
  }

  ga('set', {
    'dimension4': jData.company.name,
    'dimension7': jData.company.country,
    'dimension8': jData.company.state,
    'dimension9': jData.company.city,
    'dimension5' : jData.company.industry,
  });

  if (jData.hasOwnProperty('scores') && jData.scores.hasOwnProperty('6sense')) {
    ga('set',{
      'dimension10': jData.scores['6sense'].buying_stage,
    });
  }
};

window._6si = window._6si || [];
window._6si.push(['enableEventTracking', true]);
window._6si.push(['setToken', 'ff531f5bd71970d86f5b7930474d10d3']);
window._6si.push(['setEndpoint', 'b.6sc.co']);
window._6si.push(['enableCompanyDetails', true, process6senseData]);
window._6si.push(['setEpsilonKey', '78d5ec1ed6b29876c4dbdaef62259d7066bb4393']);

(function() {
  var gd = document.createElement('script'); gd.type = 'text/javascript'; gd.async = true;
  gd.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'j.6sc.co/6si.min.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gd, s);
})();
;
//Twitter universal website tag code
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','nxsuz');
twq('track','PageView');
//End Twitter universal website tag code;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  $(document).ready(function () {
    $.ajax({
      type: 'POST',
      cache: false,
      url: drupalSettings.statistics.url,
      data: drupalSettings.statistics.data
    });
  });
})(jQuery, Drupal, drupalSettings);;
