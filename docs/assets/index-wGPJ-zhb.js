(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const ln=!1;var sn=Array.isArray,an=Array.from,on=Object.defineProperty,le=Object.getOwnPropertyDescriptor,un=Object.getOwnPropertyDescriptors,we=Object.getPrototypeOf;function fn(e){for(var n=0;n<e.length;n++)e[n]()}const C=2,ze=4,te=8,de=16,z=32,K=64,M=128,ee=256,w=512,L=1024,V=2048,R=4096,G=8192,cn=16384,_e=32768,vn=65536,dn=1<<18,De=1<<19,_n=Symbol("$state"),hn=Symbol("legacy props");function Ie(e){return e===this.v}function mn(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ce(e){return!mn(e,this.v)}function gn(){throw new Error("effect_update_depth_exceeded")}function pn(e){throw new Error("props_invalid_value")}function bn(){throw new Error("state_unsafe_local_read")}function wn(){throw new Error("state_unsafe_mutation")}let Z=!1;function En(){Z=!0}function He(e){return{f:0,v:e,reactions:null,equals:Ie,version:0}}function xn(e,n=!1){var r;const t=He(e);return n||(t.equals=Ce),Z&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(t),t}function kn(e,n=!1){return yn(xn(e,n))}function yn(e){return _!==null&&_.f&C&&(N===null?qn([e]):N.push(e)),e}function Tn(e,n){return _!==null&&pe()&&_.f&(C|de)&&(N===null||!N.includes(e))&&wn(),Nn(e,n)}function Nn(e,n){return e.equals(n)||(e.v=n,e.version=Je(),Le(e,L),pe()&&f!==null&&f.f&w&&!(f.f&z)&&(g!==null&&g.includes(e)?(D(f,L),ie(f)):H===null?Bn([e]):H.push(e))),n}function Le(e,n){var t=e.reactions;if(t!==null)for(var r=pe(),l=t.length,i=0;i<l;i++){var s=t[i],a=s.f;a&L||!r&&s===f||(D(s,n),a&(w|M)&&(a&C?Le(s,V):ie(s)))}}const Sn=1,zn=2,Dn=8;let In=!1;var Ee,Oe,Ae;function Cn(){if(Ee===void 0){Ee=window;var e=Element.prototype,n=Node.prototype;Oe=le(n,"firstChild").get,Ae=le(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Fe(e=""){return document.createTextNode(e)}function he(e){return Oe.call(e)}function me(e){return Ae.call(e)}function m(e,n){return he(e)}function Hn(e,n){{var t=he(e);return t instanceof Comment&&t.data===""?me(t):t}}function b(e,n=1,t=!1){let r=e;for(;n--;)r=me(r);return r}function je(e){var n=C|L;f===null?n|=M:f.f|=De;const t={children:null,ctx:p,deps:null,equals:Ie,f:n,fn:e,reactions:null,v:null,version:0,parent:f};if(_!==null&&_.f&C){var r=_;(r.children??(r.children=[])).push(t)}return t}function Ln(e){const n=je(e);return n.equals=Ce,n}function Pe(e){var n=e.children;if(n!==null){e.children=null;for(var t=0;t<n.length;t+=1){var r=n[t];r.f&C?ge(r):q(r)}}}function Re(e){var n,t=f;S(e.parent);try{Pe(e),n=Qe(e)}finally{S(t)}return n}function Me(e){var n=Re(e),t=(j||e.f&M)&&e.deps!==null?V:w;D(e,t),e.equals(n)||(e.v=n,e.version=Je())}function ge(e){Pe(e),W(e,0),D(e,G),e.v=e.children=e.deps=e.ctx=e.reactions=null}function On(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function Y(e,n,t,r=!0){var l=(e&K)!==0,i=f,s={ctx:p,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|L,first:null,fn:n,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(t){var a=P;try{ye(!0),re(s),s.f|=cn}catch(v){throw q(s),v}finally{ye(a)}}else n!==null&&ie(s);var o=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&De)===0;if(!o&&!l&&r&&(i!==null&&On(s,i),_!==null&&_.f&C)){var c=_;(c.children??(c.children=[])).push(s)}return s}function qe(e){const n=Y(te,null,!1);return D(n,w),n.teardown=e,n}function An(e){const n=Y(K,e,!0);return()=>{q(n)}}function Fn(e){return Y(ze,e,!1)}function Be(e){return Ue(e)}function Ue(e,n=0){return Y(te|de|n,e,!0)}function se(e,n=!0){return Y(te|z,e,!0,n)}function We(e){var n=e.teardown;if(n!==null){const t=_;O(null);try{n.call(null)}finally{O(t)}}}function Ke(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var t=0;t<n.length;t+=1)ge(n[t])}}function Ve(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;q(t,n),t=r}}function jn(e){for(var n=e.first;n!==null;){var t=n.next;n.f&z||q(n),n=t}}function q(e,n=!0){var t=!1;if((n||e.f&dn)&&e.nodes_start!==null){for(var r=e.nodes_start,l=e.nodes_end;r!==null;){var i=r===l?null:me(r);r.remove(),r=i}t=!0}Ve(e,n&&!t),Ke(e),W(e,0),D(e,G);var s=e.transitions;if(s!==null)for(const o of s)o.stop();We(e);var a=e.parent;a!==null&&a.first!==null&&Ge(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function Ge(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function xe(e,n){var t=[];Ze(e,t,!0),Pn(t,()=>{q(e),n&&n()})}function Pn(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var l of e)l.out(r)}else n()}function Ze(e,n,t){if(!(e.f&R)){if(e.f^=R,e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&n.push(s);for(var r=e.first;r!==null;){var l=r.next,i=(r.f&_e)!==0||(r.f&z)!==0;Ze(r,n,i?t:!1),r=l}}}function ke(e){Ye(e,!0)}function Ye(e,n){if(e.f&R){$(e)&&re(e),e.f^=R;for(var t=e.first;t!==null;){var r=t.next,l=(t.f&_e)!==0||(t.f&z)!==0;Ye(t,l?n:!1),t=r}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&i.in()}}let ae=!1,oe=[];function Rn(){ae=!1;const e=oe.slice();oe=[],fn(e)}function Mn(e){ae||(ae=!0,queueMicrotask(Rn)),oe.push(e)}let ne=!1,P=!1;function ye(e){P=e}let ue=[],U=0;let _=null;function O(e){_=e}let f=null;function S(e){f=e}let N=null;function qn(e){N=e}let g=null,x=0,H=null;function Bn(e){H=e}let $e=0,j=!1,p=null;function Je(){return++$e}function pe(){return!Z||p!==null&&p.l===null}function $(e){var s,a;var n=e.f;if(n&L)return!0;if(n&V){var t=e.deps,r=(n&M)!==0;if(t!==null){var l;if(n&ee){for(l=0;l<t.length;l++)((s=t[l]).reactions??(s.reactions=[])).push(e);e.f^=ee}for(l=0;l<t.length;l++){var i=t[l];if($(i)&&Me(i),r&&f!==null&&!j&&!((a=i==null?void 0:i.reactions)!=null&&a.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}r||D(e,w)}return!1}function Un(e,n,t){throw e}function Qe(e){var d;var n=g,t=x,r=H,l=_,i=j,s=N,a=p,o=e.f;g=null,x=0,H=null,_=o&(z|K)?null:e,j=!P&&(o&M)!==0,N=null,p=e.ctx;try{var c=(0,e.fn)(),v=e.deps;if(g!==null){var u;if(W(e,x),v!==null&&x>0)for(v.length=x+g.length,u=0;u<g.length;u++)v[x+u]=g[u];else e.deps=v=g;if(!j)for(u=x;u<v.length;u++)((d=v[u]).reactions??(d.reactions=[])).push(e)}else v!==null&&x<v.length&&(W(e,x),v.length=x);return c}finally{g=n,x=t,H=r,_=l,j=i,N=s,p=a}}function Wn(e,n){let t=n.reactions;if(t!==null){var r=t.indexOf(e);if(r!==-1){var l=t.length-1;l===0?t=n.reactions=null:(t[r]=t[l],t.pop())}}t===null&&n.f&C&&(g===null||!g.includes(n))&&(D(n,V),n.f&(M|ee)||(n.f^=ee),W(n,0))}function W(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Wn(e,t[r])}function re(e){var n=e.f;if(!(n&G)){D(e,w);var t=f;f=e;try{n&de?jn(e):Ve(e),Ke(e),We(e);var r=Qe(e);e.teardown=typeof r=="function"?r:null,e.version=$e}catch(l){Un(l)}finally{f=t}}}function Kn(){U>1e3&&(U=0,gn()),U++}function Vn(e){var n=e.length;if(n!==0){Kn();var t=P;P=!0;try{for(var r=0;r<n;r++){var l=e[r];l.f&w||(l.f^=w);var i=[];Xe(l,i),Gn(i)}}finally{P=t}}}function Gn(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];!(r.f&(G|R))&&$(r)&&(re(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ge(r):r.fn=null))}}function Zn(){if(ne=!1,U>1001)return;const e=ue;ue=[],Vn(e),ne||(U=0)}function ie(e){ne||(ne=!0,queueMicrotask(Zn));for(var n=e;n.parent!==null;){n=n.parent;var t=n.f;if(t&(K|z)){if(!(t&w))return;n.f^=w}}ue.push(n)}function Xe(e,n){var t=e.first,r=[];e:for(;t!==null;){var l=t.f,i=(l&z)!==0,s=i&&(l&w)!==0;if(!s&&!(l&R))if(l&te){i?t.f^=w:$(t)&&re(t);var a=t.first;if(a!==null){t=a;continue}}else l&ze&&r.push(t);var o=t.next;if(o===null){let u=t.parent;for(;u!==null;){if(e===u)break e;var c=u.next;if(c!==null){t=c;continue e}u=u.parent}}t=o}for(var v=0;v<r.length;v++)a=r[v],n.push(a),Xe(a,n)}function en(e){var a;var n=e.f,t=(n&C)!==0;if(t&&n&G){var r=Re(e);return ge(e),r}if(_!==null){N!==null&&N.includes(e)&&bn();var l=_.deps;g===null&&l!==null&&l[x]===e?x++:g===null?g=[e]:g.push(e),H!==null&&f!==null&&f.f&w&&!(f.f&z)&&H.includes(e)&&(D(f,L),ie(f))}else if(t&&e.deps===null){var i=e,s=i.parent;s!==null&&!((a=s.deriveds)!=null&&a.includes(i))&&(s.deriveds??(s.deriveds=[])).push(i)}return t&&(i=e,$(i)&&Me(i)),e.v}const Yn=~(L|V|w);function D(e,n){e.f=e.f&Yn|n}function $n(e,n=!1,t){p={p,c:null,e:null,m:!1,s:e,x:null,l:null},Z&&!n&&(p.l={s:null,u:null,r1:[],r2:He(!1)})}function Jn(e){const n=p;if(n!==null){const s=n.e;if(s!==null){var t=f,r=_;n.e=null;try{for(var l=0;l<s.length;l++){var i=s[l];S(i.effect),O(i.reaction),Fn(i.fn)}}finally{S(t),O(r)}}p=n.p,n.m=!0}return{}}function Qn(e,n,t,r=!0){r&&t();for(var l of n)e.addEventListener(l,t);qe(()=>{for(var i of n)e.removeEventListener(i,t)})}function nn(e){var n=_,t=f;O(null),S(null);try{return e()}finally{O(n),S(t)}}const Xn=new Set,Te=new Set;function et(e,n,t,r){function l(i){if(r.capture||B.call(n,i),!i.cancelBubble)return nn(()=>t.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Mn(()=>{n.addEventListener(e,l,r)}):n.addEventListener(e,l,r),l}function nt(e,n,t,r,l){var i={capture:r,passive:l},s=et(e,n,t,i);(n===document.body||n===window||n===document)&&qe(()=>{n.removeEventListener(e,s,i)})}function B(e){var be;var n=this,t=n.ownerDocument,r=e.type,l=((be=e.composedPath)==null?void 0:be.call(e))||[],i=l[0]||e.target,s=0,a=e.__root;if(a){var o=l.indexOf(a);if(o!==-1&&(n===document||n===window)){e.__root=n;return}var c=l.indexOf(n);if(c===-1)return;o<=c&&(s=o)}if(i=l[s]||e.target,i!==n){on(e,"currentTarget",{configurable:!0,get(){return i||t}});var v=_,u=f;O(null),S(null);try{for(var d,h=[];i!==null;){var E=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+r];if(y!==void 0&&!i.disabled)if(sn(y)){var[J,...T]=y;J.apply(i,[e,...T])}else y.call(i,e)}catch(Q){d?h.push(Q):d=Q}if(e.cancelBubble||E===n||E===null)break;i=E}if(d){for(let Q of h)queueMicrotask(()=>{throw Q});throw d}}finally{e.__root=n,delete e.currentTarget,O(v),S(u)}}}function tt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function tn(e,n){var t=f;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function I(e,n){var t,r=!e.startsWith("<!>");return()=>{t===void 0&&(t=tt(r?e:"<!>"+e),t=he(t));var l=t.cloneNode(!0);return tn(l,l),l}}function rt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Fe();return e.append(n,t),tn(n,t),e}function k(e,n){e!==null&&e.before(n)}const it=["touchstart","touchmove"];function lt(e){return it.includes(e)}function fe(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function st(e,n){return at(e,n)}const F=new Map;function at(e,{target:n,anchor:t,props:r={},events:l,context:i,intro:s=!0}){Cn();var a=new Set,o=u=>{for(var d=0;d<u.length;d++){var h=u[d];if(!a.has(h)){a.add(h);var E=lt(h);n.addEventListener(h,B,{passive:E});var y=F.get(h);y===void 0?(document.addEventListener(h,B,{passive:E}),F.set(h,1)):F.set(h,y+1)}}};o(an(Xn)),Te.add(o);var c=void 0,v=An(()=>{var u=t??n.appendChild(Fe());return se(()=>{if(i){$n({});var d=p;d.c=i}l&&(r.$$events=l),c=e(u,r)||{},i&&Jn()}),()=>{var E;for(var d of a){n.removeEventListener(d,B);var h=F.get(d);--h===0?(document.removeEventListener(d,B),F.delete(d)):F.set(d,h)}Te.delete(o),Ne.delete(c),u!==t&&((E=u.parentNode)==null||E.removeChild(u))}});return Ne.set(c,v),c}let Ne=new WeakMap;function rn(e,n,t,r=null,l=!1){var i=e,s=null,a=null,o=null,c=l?_e:0;Ue(()=>{o!==(o=!!n())&&(o?(s?ke(s):s=se(()=>t(i)),a&&xe(a,()=>{a=null})):(a?ke(a):r&&(a=se(()=>r(i))),s&&xe(s,()=>{s=null})))},c)}function ot(e,n,t,r){var l=e.__attributes??(e.__attributes={});l[n]!==(l[n]=t)&&("__styles"in e&&(e.__styles={}),t==null?e.removeAttribute(n):typeof t!="string"&&ut(e).includes(n)?e[n]=t:e.setAttribute(n,t))}var Se=new Map;function ut(e){var n=Se.get(e.nodeName);if(n)return n;Se.set(e.nodeName,n=[]);for(var t,r=we(e),l=Element.prototype;l!==r;){t=un(r);for(var i in t)t[i].set&&n.push(i);r=we(r)}return n}function ft(e,n){var t=e.__className,r=ct(n);(t!==r||In)&&(n==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function ct(e){return e??""}function vt(e,n){Qn(window,["resize"],()=>nn(()=>n(window[e])))}let X=!1;function dt(e){var n=X;try{return X=!1,[e(),X]}finally{X=n}}function _t(e){for(var n=f,t=f;n!==null&&!(n.f&(z|K));)n=n.parent;try{return S(n),e()}finally{S(t)}}function A(e,n,t,r){var J;var l=(t&Sn)!==0,i=!Z||(t&zn)!==0,s=(t&Dn)!==0,a=!1,o;[o,a]=dt(()=>e[n]);var c=_n in e||hn in e,v=((J=le(e,n))==null?void 0:J.set)??(c&&s&&n in e?T=>e[n]=T:void 0),u=r,d=!0,h=()=>(d&&(d=!1,u=r),u);o===void 0&&r!==void 0&&(v&&i&&pn(),o=h(),v&&v(o));var E;if(i)E=()=>{var T=e[n];return T===void 0?h():(d=!0,T)};else{var y=_t(()=>(l?je:Ln)(()=>e[n]));y.f|=vn,E=()=>{var T=en(y);return T!==void 0&&(u=void 0),T===void 0?u:T}}return E}const ht="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);En();var mt=I('<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.3756754674714!2d8.9937615!3d49.7225544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd59cde213f919%3A0x484a2bca6594892c!2sHundesalon-Edelweiss!5e0!3m2!1sde!2sde!4v1731774995518!5m2!1sde!2sde" width="600" height="450" style="border:0;max-width:100%;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');function gt(e){var n=mt();k(e,n)}var pt=I('<div class="footer-container svelte-19ja4g0"><h2 class="footer-headline svelte-19ja4g0">Kontakt</h2> <div class="footer-wrapper svelte-19ja4g0"><div class="footer-contact-information svelte-19ja4g0"><img class="logo svelte-19ja4g0" src="./assets/logo.png" alt="logo"> <div class="text-header svelte-19ja4g0">Inhaberin:</div> <div class="text-content svelte-19ja4g0">Marion Kabus</div> <br> <div class="text-header svelte-19ja4g0">Termin buchen:</div> <div class="text-content svelte-19ja4g0"><img class="icon svelte-19ja4g0" src="./assets/icons/phone.png" alt="phone"> 015120777965</div> <div class="text-content svelte-19ja4g0"><img class="icon svelte-19ja4g0" src="./assets/icons/mail.png" alt="mail"> info@hundesalon-edelweiss.de</div> <div class="text-content svelte-19ja4g0"><img class="icon svelte-19ja4g0" src="./assets/icons/instagram.png" alt="instagram"> <a href="https://www.instagram.com/hundesalon_edelweiss/" target="_blank" class="svelte-19ja4g0">hundesalon_edelweiss</a></div> <br> <div class="text-header svelte-19ja4g0">Termin buchen:</div> <div class="text-content svelte-19ja4g0">-> Vor Ort nach Vereinbarung</div> <div class="text-content svelte-19ja4g0">-> Täglich telefonisch</div></div> <div class="footer-location svelte-19ja4g0"><div class="footer-location-address svelte-19ja4g0"><div>Königer Straße 20, 64732 Zell (Bad König)</div></div> <div class="footer-location-map"><!></div></div></div></div>');function bt(e){var n=pt(),t=b(m(n),2),r=b(m(t),2),l=b(m(r),2),i=m(l);gt(i),k(e,n)}var wt=I("<button> </button>");function ce(e,n){let t=A(n,"text",8,""),r=A(n,"cssClass",8,""),l=A(n,"onClick",8);var i=wt(),s=m(i);Be(()=>{ft(i,`${r()??""} svelte-nox8yv`),fe(s,t())}),nt("click",i,function(...a){var o;(o=l())==null||o.apply(this,a)}),k(e,i)}const ve=function(){window.open("https://wa.me/+4915120777965","_blank")};var Et=I('<div class="header-container svelte-11h9i3k"><div class="header-menu svelte-11h9i3k"><h1 class="header-menu-left svelte-11h9i3k"><span class="header-menu-left-logo-text svelte-11h9i3k">Hundesalon</span> <img src="./assets/logo.png" alt="logo" width="100px"> <span class="header-menu-left-logo-text svelte-11h9i3k">EDELWEISS</span></h1></div> <div class="header-center svelte-11h9i3k"><div>Dein Hund ist wieder</div> <div style="font-weight: bolder;">"fellig"?</div></div> <div class="header-bottom svelte-11h9i3k"><div class="svelte-11h9i3k">Dann ab zum Hundesalon Edelweiss in Bad König-Zell!</div> <!></div></div>');function xt(e){var n=Et(),t=b(m(n),4),r=b(m(t),2);ce(r,{text:"Termin buchen",onClick:ve}),k(e,n)}var kt=I('<img class="edelweiss-headline-logo svelte-z0iglx" src="./assets/logo.png" alt="logo">'),yt=I('<div class="edelweiss-headline-container svelte-z0iglx"><!> <div class="edelweiss-headline-upper svelte-z0iglx">Hundesalon</div> <div class="edelweiss-headline-lower svelte-z0iglx">EDELWEISS</div></div>');function Tt(e,n){let t=A(n,"showLogo",8,!1);var r=yt(),l=m(r);rn(l,t,i=>{var s=kt();k(i,s)}),k(e,r)}var Nt=I(`<div class="intro-container svelte-o9mbtb"><div class="intro-content svelte-o9mbtb"><div class="mountains svelte-o9mbtb"></div> <div class="h-font-size-l slogan svelte-o9mbtb">Dein Hund ist wieder "fellig"?</div> <div class="h-font-size-l"><div style="color: black">Dann ab zum</div> <div style="color: white">Hundesalon Edelweiss</div> <div style="color: black">in Bad-König Zell</div></div> <div class="absolute-container svelte-o9mbtb"><img class="intro-block1-image svelte-o9mbtb" src="./assets/ziegen1.png" alt="ziege"> <div class="h-font-size-l intro-block1-image-abs-text svelte-o9mbtb" style="color: white">Wer stutzt hier meinen Hunde zusammen?</div></div> <div class="intro-text svelte-o9mbtb">Ich bin Marion, geboren 1970 in Groß-Umstadt. Ich bin eine
                stolze Mama von zwei wundervollen Buben und lebe meinen Traum
                von einer kleinen Farm, umgeben von meinen geliebten Tieren -
                Ziegen, einem Hund, einer Katze sowie Enten und Hühnern.</div> <div class="absolute-container svelte-o9mbtb"><img class="intro-block2-image svelte-o9mbtb" src="./assets/marion_hund.png" alt="ziege"></div></div> <div class="intro-footer svelte-o9mbtb"><div class="intro-text h-color-dark svelte-o9mbtb">Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt. Ich
                biete ein entspanntes und liebevolles Umfeld und lege
                selbstverständlich großen Wert auf eine behutsame und
                gleichzeitig professionelle Pflege.</div> <!></div></div>`),St=I(`<div class="intro-container svelte-o9mbtb"><div class="intro-content svelte-o9mbtb"><div class="mountains svelte-o9mbtb"></div> <!> <div class="intro-block-container svelte-o9mbtb"><div class="intro-block svelte-o9mbtb"><div class="intro-headline svelte-o9mbtb">Wer stutzt hier meinen Hund zusammen?</div> <div class="intro-text svelte-o9mbtb">Ich bin Marion, geboren 1970 in Groß-Umstadt. Ich bin
                        eine stolze Mama von zwei wundervollen Buben und lebe
                        meinen Traum von einer kleinen Farm, umgeben von meinen
                        geliebten Tieren - Ziegen, einem Hund, einer Katze sowie
                        Enten und Hühnern. <br><br> Als gelernte Reiseverkehrskauffrau bin ich schließlich als
                        Quereinsteiger in einer Tierarztpraxis gelandet und habe
                        dort x Jahre gearbeitet.</div> <img class="intro-block1-image svelte-o9mbtb" src="./assets/ziegen1.png" alt="ziege"></div> <div class="intro-block end svelte-o9mbtb"><img class="intro-block2-image svelte-o9mbtb" src="./assets/marion_hund.png" alt="ziege"> <div class="intro-headline svelte-o9mbtb">Deine Hundefriseurin in Zell!</div> <div class="intro-text svelte-o9mbtb">Ich liebe es, mich um unsere tierischen Freunde zu
                        kümmern. Mit meinem Freund an der Seite, dessen
                        Unterstützung unentbehrlich für die Verwirklichung
                        meines Traums war, konnte ich meinen eigenen Hundesalon
                        eröffnen. Auch meine liebe Familie hat mir geraten, zu
                        tun, was mich glücklich macht. <br><br> Meine Wurzeln liegen in Österreich, und durch das Edelweiß
                        verkörpere ich meine Liebe zu den Bergen und den schönen
                        Erinnerungen an meine Heimat, die einen besonderen Platz
                        in meinem Herzen haben.</div></div></div></div> <div class="intro-footer svelte-o9mbtb"><div class="intro-text h-color-dark svelte-o9mbtb">Ich habe meine Erfüllung in einem Beruf gefunden, der sich ganz
                um Tiere dreht. Ich bringe meine Erfahrungen täglich ein und
                freue mich, sie mit Dir und Deinem Hund zu teilen. <br> <br> Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt. Ich biete
                ein entspanntes und liebevolles Umfeld und lege selbstverständlich
                großen Wert auf eine behutsame und gleichzeitig professionelle Pflege.</div> <!></div></div>`);function zt(e){let n=kn();var t=rt(),r=Hn(t);rn(r,()=>en(n)<=1210,l=>{var i=Nt(),s=b(m(i),2),a=b(m(s),2);ce(a,{cssClass:"h-self-center",text:"Termin buchen",onClick:ve}),k(l,i)},l=>{var i=St(),s=m(i),a=b(m(s),2);Tt(a,{});var o=b(s,2),c=b(m(o),2);ce(c,{cssClass:"h-self-center",text:"Termin buchen",onClick:ve}),k(l,i)}),vt("innerWidth",l=>Tn(n,l)),k(e,t)}var Dt=I('<div class="teaser svelte-1q6bmi7"><div> </div> <div> </div></div>');function It(e,n){let t=A(n,"backgroundUrl",8,""),r=A(n,"text1",8,""),l=A(n,"text2",8,"");var i=Dt(),s=m(i),a=m(s),o=b(s,2),c=m(o);Be(()=>{ot(i,"style",`background-image: url(${t()??""});`),fe(a,r()),fe(c,l())}),k(e,i)}var Ct=I("<main><!> <!> <!> <!></main>");function Ht(e){var n=Ct(),t=m(n);xt(t);var r=b(t,2);zt(r);var l=b(r,2);It(l,{text1:"ES GIBT NUR EINEN EINZIGEN, DEN KLÜGSTEN UND SCHÖNSTEN HUND",text2:"AUF DER WELT - UND JEDER BESITZT GENAU DIESEN!",backgroundUrl:"./assets/waterhose_dog.png"});var i=b(l,2);bt(i),k(e,n)}st(Ht,{target:document.getElementById("app")});