(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const ln=!1;var sn=Array.isArray,an=Array.from,on=Object.defineProperty,le=Object.getOwnPropertyDescriptor,un=Object.getOwnPropertyDescriptors,be=Object.getPrototypeOf;function vn(e){for(var n=0;n<e.length;n++)e[n]()}const I=2,De=4,te=8,de=16,D=32,K=64,R=128,ee=256,b=512,C=1024,Z=2048,M=4096,V=8192,fn=16384,_e=32768,cn=65536,dn=1<<18,ze=1<<19,_n=Symbol("$state"),hn=Symbol("legacy props");function Fe(e){return e===this.v}function mn(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ie(e){return!mn(e,this.v)}function pn(){throw new Error("effect_update_depth_exceeded")}function gn(e){throw new Error("props_invalid_value")}function wn(){throw new Error("state_unsafe_local_read")}function bn(){throw new Error("state_unsafe_mutation")}let G=!1;function En(){G=!0}function Ae(e){return{f:0,v:e,reactions:null,equals:Fe,version:0}}function xn(e,n=!1){var r;const t=Ae(e);return n||(t.equals=Ie),G&&g!==null&&g.l!==null&&((r=g.l).s??(r.s=[])).push(t),t}function yn(e,n=!1){return kn(xn(e,n))}function kn(e){return _!==null&&_.f&I&&(N===null?Bn([e]):N.push(e)),e}function Sn(e,n){return _!==null&&ge()&&_.f&(I|de)&&(N===null||!N.includes(e))&&bn(),Nn(e,n)}function Nn(e,n){return e.equals(n)||(e.v=n,e.version=Je(),Ce(e,C),ge()&&v!==null&&v.f&b&&!(v.f&D)&&(p!==null&&p.includes(e)?(z(v,C),ie(v)):A===null?Un([e]):A.push(e))),n}function Ce(e,n){var t=e.reactions;if(t!==null)for(var r=ge(),l=t.length,i=0;i<l;i++){var s=t[i],a=s.f;a&C||!r&&s===v||(z(s,n),a&(b|R)&&(a&I?Ce(s,Z):ie(s)))}}const Tn=1,Dn=2,zn=8;let Fn=!1;var Ee,He,Le;function In(){if(Ee===void 0){Ee=window;var e=Element.prototype,n=Node.prototype;He=le(n,"firstChild").get,Le=le(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function qe(e=""){return document.createTextNode(e)}function he(e){return He.call(e)}function me(e){return Le.call(e)}function m(e,n){return he(e)}function An(e,n){{var t=he(e);return t instanceof Comment&&t.data===""?me(t):t}}function w(e,n=1,t=!1){let r=e;for(;n--;)r=me(r);return r}function Oe(e){var n=I|C;v===null?n|=R:v.f|=ze;const t={children:null,ctx:g,deps:null,equals:Fe,f:n,fn:e,reactions:null,v:null,version:0,parent:v};if(_!==null&&_.f&I){var r=_;(r.children??(r.children=[])).push(t)}return t}function Cn(e){const n=Oe(e);return n.equals=Ie,n}function Pe(e){var n=e.children;if(n!==null){e.children=null;for(var t=0;t<n.length;t+=1){var r=n[t];r.f&I?pe(r):B(r)}}}function Me(e){var n,t=v;T(e.parent);try{Pe(e),n=Qe(e)}finally{T(t)}return n}function Re(e){var n=Me(e),t=(O||e.f&R)&&e.deps!==null?Z:b;z(e,t),e.equals(n)||(e.v=n,e.version=Je())}function pe(e){Pe(e),W(e,0),z(e,V),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Hn(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function Y(e,n,t,r=!0){var l=(e&K)!==0,i=v,s={ctx:g,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|C,first:null,fn:n,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(t){var a=P;try{ke(!0),re(s),s.f|=fn}catch(c){throw B(s),c}finally{ke(a)}}else n!==null&&ie(s);var o=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&ze)===0;if(!o&&!l&&r&&(i!==null&&Hn(s,i),_!==null&&_.f&I)){var f=_;(f.children??(f.children=[])).push(s)}return s}function Be(e){const n=Y(te,null,!1);return z(n,b),n.teardown=e,n}function Ln(e){const n=Y(K,e,!0);return()=>{B(n)}}function qn(e){return Y(De,e,!1)}function Ue(e){return je(e)}function je(e,n=0){return Y(te|de|n,e,!0)}function se(e,n=!0){return Y(te|D,e,!0,n)}function We(e){var n=e.teardown;if(n!==null){const t=_;H(null);try{n.call(null)}finally{H(t)}}}function Ke(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var t=0;t<n.length;t+=1)pe(n[t])}}function Ze(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;B(t,n),t=r}}function On(e){for(var n=e.first;n!==null;){var t=n.next;n.f&D||B(n),n=t}}function B(e,n=!0){var t=!1;if((n||e.f&dn)&&e.nodes_start!==null){for(var r=e.nodes_start,l=e.nodes_end;r!==null;){var i=r===l?null:me(r);r.remove(),r=i}t=!0}Ze(e,n&&!t),Ke(e),W(e,0),z(e,V);var s=e.transitions;if(s!==null)for(const o of s)o.stop();We(e);var a=e.parent;a!==null&&a.first!==null&&Ve(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function Ve(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function xe(e,n){var t=[];Ge(e,t,!0),Pn(t,()=>{B(e),n&&n()})}function Pn(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var l of e)l.out(r)}else n()}function Ge(e,n,t){if(!(e.f&M)){if(e.f^=M,e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&n.push(s);for(var r=e.first;r!==null;){var l=r.next,i=(r.f&_e)!==0||(r.f&D)!==0;Ge(r,n,i?t:!1),r=l}}}function ye(e){Ye(e,!0)}function Ye(e,n){if(e.f&M){$(e)&&re(e),e.f^=M;for(var t=e.first;t!==null;){var r=t.next,l=(t.f&_e)!==0||(t.f&D)!==0;Ye(t,l?n:!1),t=r}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&i.in()}}let ae=!1,oe=[];function Mn(){ae=!1;const e=oe.slice();oe=[],vn(e)}function Rn(e){ae||(ae=!0,queueMicrotask(Mn)),oe.push(e)}let ne=!1,P=!1;function ke(e){P=e}let ue=[],j=0;let _=null;function H(e){_=e}let v=null;function T(e){v=e}let N=null;function Bn(e){N=e}let p=null,x=0,A=null;function Un(e){A=e}let $e=0,O=!1,g=null;function Je(){return++$e}function ge(){return!G||g!==null&&g.l===null}function $(e){var s,a;var n=e.f;if(n&C)return!0;if(n&Z){var t=e.deps,r=(n&R)!==0;if(t!==null){var l;if(n&ee){for(l=0;l<t.length;l++)((s=t[l]).reactions??(s.reactions=[])).push(e);e.f^=ee}for(l=0;l<t.length;l++){var i=t[l];if($(i)&&Re(i),r&&v!==null&&!O&&!((a=i==null?void 0:i.reactions)!=null&&a.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}r||z(e,b)}return!1}function jn(e,n,t){throw e}function Qe(e){var d;var n=p,t=x,r=A,l=_,i=O,s=N,a=g,o=e.f;p=null,x=0,A=null,_=o&(D|K)?null:e,O=!P&&(o&R)!==0,N=null,g=e.ctx;try{var f=(0,e.fn)(),c=e.deps;if(p!==null){var u;if(W(e,x),c!==null&&x>0)for(c.length=x+p.length,u=0;u<p.length;u++)c[x+u]=p[u];else e.deps=c=p;if(!O)for(u=x;u<c.length;u++)((d=c[u]).reactions??(d.reactions=[])).push(e)}else c!==null&&x<c.length&&(W(e,x),c.length=x);return f}finally{p=n,x=t,A=r,_=l,O=i,N=s,g=a}}function Wn(e,n){let t=n.reactions;if(t!==null){var r=t.indexOf(e);if(r!==-1){var l=t.length-1;l===0?t=n.reactions=null:(t[r]=t[l],t.pop())}}t===null&&n.f&I&&(p===null||!p.includes(n))&&(z(n,Z),n.f&(R|ee)||(n.f^=ee),W(n,0))}function W(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Wn(e,t[r])}function re(e){var n=e.f;if(!(n&V)){z(e,b);var t=v;v=e;try{n&de?On(e):Ze(e),Ke(e),We(e);var r=Qe(e);e.teardown=typeof r=="function"?r:null,e.version=$e}catch(l){jn(l)}finally{v=t}}}function Kn(){j>1e3&&(j=0,pn()),j++}function Zn(e){var n=e.length;if(n!==0){Kn();var t=P;P=!0;try{for(var r=0;r<n;r++){var l=e[r];l.f&b||(l.f^=b);var i=[];Xe(l,i),Vn(i)}}finally{P=t}}}function Vn(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];!(r.f&(V|M))&&$(r)&&(re(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ve(r):r.fn=null))}}function Gn(){if(ne=!1,j>1001)return;const e=ue;ue=[],Zn(e),ne||(j=0)}function ie(e){ne||(ne=!0,queueMicrotask(Gn));for(var n=e;n.parent!==null;){n=n.parent;var t=n.f;if(t&(K|D)){if(!(t&b))return;n.f^=b}}ue.push(n)}function Xe(e,n){var t=e.first,r=[];e:for(;t!==null;){var l=t.f,i=(l&D)!==0,s=i&&(l&b)!==0;if(!s&&!(l&M))if(l&te){i?t.f^=b:$(t)&&re(t);var a=t.first;if(a!==null){t=a;continue}}else l&De&&r.push(t);var o=t.next;if(o===null){let u=t.parent;for(;u!==null;){if(e===u)break e;var f=u.next;if(f!==null){t=f;continue e}u=u.parent}}t=o}for(var c=0;c<r.length;c++)a=r[c],n.push(a),Xe(a,n)}function en(e){var a;var n=e.f,t=(n&I)!==0;if(t&&n&V){var r=Me(e);return pe(e),r}if(_!==null){N!==null&&N.includes(e)&&wn();var l=_.deps;p===null&&l!==null&&l[x]===e?x++:p===null?p=[e]:p.push(e),A!==null&&v!==null&&v.f&b&&!(v.f&D)&&A.includes(e)&&(z(v,C),ie(v))}else if(t&&e.deps===null){var i=e,s=i.parent;s!==null&&!((a=s.deriveds)!=null&&a.includes(i))&&(s.deriveds??(s.deriveds=[])).push(i)}return t&&(i=e,$(i)&&Re(i)),e.v}const Yn=~(C|Z|b);function z(e,n){e.f=e.f&Yn|n}function $n(e,n=!1,t){g={p:g,c:null,e:null,m:!1,s:e,x:null,l:null},G&&!n&&(g.l={s:null,u:null,r1:[],r2:Ae(!1)})}function Jn(e){const n=g;if(n!==null){const s=n.e;if(s!==null){var t=v,r=_;n.e=null;try{for(var l=0;l<s.length;l++){var i=s[l];T(i.effect),H(i.reaction),qn(i.fn)}}finally{T(t),H(r)}}g=n.p,n.m=!0}return{}}function Qn(e,n,t,r=!0){r&&t();for(var l of n)e.addEventListener(l,t);Be(()=>{for(var i of n)e.removeEventListener(i,t)})}function nn(e){var n=_,t=v;H(null),T(null);try{return e()}finally{H(n),T(t)}}const Xn=new Set,Se=new Set;function et(e,n,t,r){function l(i){if(r.capture||U.call(n,i),!i.cancelBubble)return nn(()=>t.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Rn(()=>{n.addEventListener(e,l,r)}):n.addEventListener(e,l,r),l}function nt(e,n,t,r,l){var i={capture:r,passive:l},s=et(e,n,t,i);(n===document.body||n===window||n===document)&&Be(()=>{n.removeEventListener(e,s,i)})}function U(e){var we;var n=this,t=n.ownerDocument,r=e.type,l=((we=e.composedPath)==null?void 0:we.call(e))||[],i=l[0]||e.target,s=0,a=e.__root;if(a){var o=l.indexOf(a);if(o!==-1&&(n===document||n===window)){e.__root=n;return}var f=l.indexOf(n);if(f===-1)return;o<=f&&(s=o)}if(i=l[s]||e.target,i!==n){on(e,"currentTarget",{configurable:!0,get(){return i||t}});var c=_,u=v;H(null),T(null);try{for(var d,h=[];i!==null;){var E=i.assignedSlot||i.parentNode||i.host||null;try{var k=i["__"+r];if(k!==void 0&&!i.disabled)if(sn(k)){var[J,...S]=k;J.apply(i,[e,...S])}else k.call(i,e)}catch(Q){d?h.push(Q):d=Q}if(e.cancelBubble||E===n||E===null)break;i=E}if(d){for(let Q of h)queueMicrotask(()=>{throw Q});throw d}}finally{e.__root=n,delete e.currentTarget,H(c),T(u)}}}function tt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function tn(e,n){var t=v;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function F(e,n){var t,r=!e.startsWith("<!>");return()=>{t===void 0&&(t=tt(r?e:"<!>"+e),t=he(t));var l=t.cloneNode(!0);return tn(l,l),l}}function rt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=qe();return e.append(n,t),tn(n,t),e}function y(e,n){e!==null&&e.before(n)}const it=["touchstart","touchmove"];function lt(e){return it.includes(e)}function ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function st(e,n){return at(e,n)}const q=new Map;function at(e,{target:n,anchor:t,props:r={},events:l,context:i,intro:s=!0}){In();var a=new Set,o=u=>{for(var d=0;d<u.length;d++){var h=u[d];if(!a.has(h)){a.add(h);var E=lt(h);n.addEventListener(h,U,{passive:E});var k=q.get(h);k===void 0?(document.addEventListener(h,U,{passive:E}),q.set(h,1)):q.set(h,k+1)}}};o(an(Xn)),Se.add(o);var f=void 0,c=Ln(()=>{var u=t??n.appendChild(qe());return se(()=>{if(i){$n({});var d=g;d.c=i}l&&(r.$$events=l),f=e(u,r)||{},i&&Jn()}),()=>{var E;for(var d of a){n.removeEventListener(d,U);var h=q.get(d);--h===0?(document.removeEventListener(d,U),q.delete(d)):q.set(d,h)}Se.delete(o),Ne.delete(f),u!==t&&((E=u.parentNode)==null||E.removeChild(u))}});return Ne.set(f,c),f}let Ne=new WeakMap;function rn(e,n,t,r=null,l=!1){var i=e,s=null,a=null,o=null,f=l?_e:0;je(()=>{o!==(o=!!n())&&(o?(s?ye(s):s=se(()=>t(i)),a&&xe(a,()=>{a=null})):(a?ye(a):r&&(a=se(()=>r(i))),s&&xe(s,()=>{s=null})))},f)}function ot(e,n,t,r){var l=e.__attributes??(e.__attributes={});l[n]!==(l[n]=t)&&("__styles"in e&&(e.__styles={}),t==null?e.removeAttribute(n):typeof t!="string"&&ut(e).includes(n)?e[n]=t:e.setAttribute(n,t))}var Te=new Map;function ut(e){var n=Te.get(e.nodeName);if(n)return n;Te.set(e.nodeName,n=[]);for(var t,r=be(e),l=Element.prototype;l!==r;){t=un(r);for(var i in t)t[i].set&&n.push(i);r=be(r)}return n}function vt(e,n){var t=e.__className,r=ft(n);(t!==r||Fn)&&(n==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function ft(e){return e??""}function ct(e,n){Qn(window,["resize"],()=>nn(()=>n(window[e])))}let X=!1;function dt(e){var n=X;try{return X=!1,[e(),X]}finally{X=n}}function _t(e){for(var n=v,t=v;n!==null&&!(n.f&(D|K));)n=n.parent;try{return T(n),e()}finally{T(t)}}function L(e,n,t,r){var J;var l=(t&Tn)!==0,i=!G||(t&Dn)!==0,s=(t&zn)!==0,a=!1,o;[o,a]=dt(()=>e[n]);var f=_n in e||hn in e,c=((J=le(e,n))==null?void 0:J.set)??(f&&s&&n in e?S=>e[n]=S:void 0),u=r,d=!0,h=()=>(d&&(d=!1,u=r),u);o===void 0&&r!==void 0&&(c&&i&&gn(),o=h(),c&&c(o));var E;if(i)E=()=>{var S=e[n];return S===void 0?h():(d=!0,S)};else{var k=_t(()=>(l?Oe:Cn)(()=>e[n]));k.f|=cn,E=()=>{var S=en(k);return S!==void 0&&(u=void 0),S===void 0?u:S}}return E}const ht="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);En();var mt=F('<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.3756754674714!2d8.9937615!3d49.7225544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd59cde213f919%3A0x484a2bca6594892c!2sHundesalon-Edelweiss!5e0!3m2!1sde!2sde!4v1731774995518!5m2!1sde!2sde" width="600" height="450" style="border:0;max-width:100%;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');function pt(e){var n=mt();y(e,n)}var gt=F('<div class="footer-container svelte-72u4mb"><h2 class="footer-headline svelte-72u4mb">Kontakt</h2> <div class="footer-wrapper svelte-72u4mb"><div class="footer-contact-information svelte-72u4mb"><img class="logo svelte-72u4mb" src="./images/logo.png" alt="logo"> <div class="text-header svelte-72u4mb">Inhaberin:</div> <div class="text-content svelte-72u4mb">Marion Kabus</div> <br> <div class="text-header svelte-72u4mb">Termin buchen:</div> <div class="text-content svelte-72u4mb"><img class="icon svelte-72u4mb" src="./assets/icons/phone.png" alt="phone"> 015120777965</div> <div class="text-content svelte-72u4mb"><img class="icon svelte-72u4mb" src="./assets/icons/mail.png" alt="mail"> <a href="mailto:info@hundesalon-edelweiss.de" target="_self" class="svelte-72u4mb">info@hundesalon-edelweiss.de</a></div> <div class="text-content svelte-72u4mb"><img class="icon svelte-72u4mb" src="./assets/icons/instagram.png" alt="instagram"> <a href="https://www.instagram.com/hundesalon_edelweiss/" target="_blank" class="svelte-72u4mb">hundesalon_edelweiss</a></div> <br> <div class="text-header svelte-72u4mb">Termin buchen:</div> <div class="text-content svelte-72u4mb">•  Täglich telefonisch</div> <div class="text-content svelte-72u4mb">•  WhatsApp</div> <div class="text-content svelte-72u4mb">•  E-Mail</div></div> <div class="footer-location svelte-72u4mb"><div class="footer-location-address svelte-72u4mb"><div>Königer Straße 20, 64732 Zell (Bad König)</div></div> <div class="footer-location-map"><!></div></div></div></div>');function wt(e){var n=gt(),t=w(m(n),2),r=w(m(t),2),l=w(m(r),2),i=m(l);pt(i),y(e,n)}var bt=F("<button> </button>");function fe(e,n){let t=L(n,"text",8,""),r=L(n,"cssClass",8,""),l=L(n,"onClick",8);var i=bt(),s=m(i);Ue(()=>{vt(i,`${r()??""} svelte-nox8yv`),ve(s,t())}),nt("click",i,function(...a){var o;(o=l())==null||o.apply(this,a)}),y(e,i)}const ce=function(){window.open("https://wa.me/+4915120777965","_blank")};var Et=F('<div class="header-container svelte-1aknqdp"><div class="header-menu svelte-1aknqdp"><h1 class="header-menu-left svelte-1aknqdp"><img src="./images/wholelogo_horizontal.png" alt="logo" class="svelte-1aknqdp"></h1></div> <div class="header-center svelte-1aknqdp"><div>Dein Hund ist wieder</div> <div style="font-weight: bolder;">"fellig"?</div></div> <div class="header-bottom svelte-1aknqdp"><div class="svelte-1aknqdp">Dann ab zum Hundesalon Edelweiss in Bad König-Zell!</div> <!></div></div>');function xt(e){var n=Et(),t=w(m(n),4),r=w(m(t),2);fe(r,{text:"Termin buchen",onClick:ce}),y(e,n)}var yt=F('<img class="edelweiss-headline-logo svelte-bfjt86" src="./assets/logo.png" alt="logo">'),kt=F('<div class="edelweiss-headline-container svelte-bfjt86"><!> <div class="edelweiss-headline-upper svelte-bfjt86">Hundesalon</div> <div class="edelweiss-headline-lower svelte-bfjt86">EDELWEISS</div></div>');function St(e,n){let t=L(n,"showLogo",8,!1);var r=kt(),l=m(r);rn(l,t,i=>{var s=yt();y(i,s)}),y(e,r)}var Nt=F('<div class="teaser svelte-rqbvy8"><div> </div> <div> </div></div>');function Tt(e,n){let t=L(n,"backgroundUrl",8,""),r=L(n,"text1",8,""),l=L(n,"text2",8,"");var i=Nt(),s=m(i),a=m(s),o=w(s,2),f=m(o);Ue(()=>{ot(i,"style",`background-image: url(${t()??""});`),ve(a,r()),ve(f,l())}),y(e,i)}var Dt=F(`<div class="intro-container svelte-lv2wmt"><div class="intro-content svelte-lv2wmt"><div class="mountains svelte-lv2wmt"></div> <div class="h-font-size-l slogan svelte-lv2wmt">Dein Hund ist wieder "fellig"?</div> <div class="h-font-size-l"><div style="color: black">Dann ab zum</div> <div style="color: white;font-weight: bold;">Hundesalon Edelweiss</div> <div style="color: black">in Bad-König Zell</div></div> <div class="absolute-container svelte-lv2wmt" style="height: 92vw"><img class="intro-block1-image svelte-lv2wmt" src="./images/image00002_shortformat.png" alt="ziege"> <div class="h-font-size-l intro-block1-image-abs-text svelte-lv2wmt" style="color: white">Wer stutzt hier meinen Hund zusammen?</div></div> <div class="intro-text h-width-95 svelte-lv2wmt">Ich bin Marion, geboren im Dezember 1970 in Groß-Umstadt und
                darf mich stolze Mama von zwei wundervollen Buben nennen. Ich
                lebe glücklich, gemeinsam mit meinem lieben Freund, unseren
                Traum von einer kleinen Farm, umgeben von unseren Ziegen,
                Schafen, einem Hund, einer Katze, sowie Enten und Hühnern.</div> <div class="absolute-container svelte-lv2wmt"><img class="intro-block2-image svelte-lv2wmt" src="./images/ziegen2.jpeg" alt="ziege"></div> <div class="intro-text h-width-95 svelte-lv2wmt">Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt. Ich lege
                meinen Fokus darauf, Hundebesitzern im stressigen Alltag zu
                helfen, indem ich liebevolle und geduldige Pflegeleistungen für
                ihre Fellnasen anbiete.</div></div> <!> <div class="intro-footer svelte-lv2wmt"><div class="intro-text h-color-pink svelte-lv2wmt">Zu meinen Leistungen gehören Baden, Föhnen, Ausbürsten
                (Unterwolle, Verfilzungen), Pfötchenpflege, sowie das Scheren
                oder Schneiden einfacher, ansprechender und hübscher Frisuren. <br><br> Mein Ziel ist es, dass sich die Hundchen rundum wohl und glücklich
                fühlen, deshalb freue ich mich über jeden einzelnen Besucher in meinem
                Salon.</div> <!></div></div>`),zt=F(`<div class="intro-container svelte-lv2wmt"><div class="intro-content svelte-lv2wmt"><div class="mountains svelte-lv2wmt"></div> <!> <div class="intro-block-container svelte-lv2wmt"><div class="intro-block svelte-lv2wmt"><div class="intro-headline svelte-lv2wmt">Wer stutzt hier meinen Hund zusammen?</div> <div class="intro-text svelte-lv2wmt">Ich bin Marion, geboren im Dezember 1970 in Groß-Umstadt
                        und darf mich stolze Mama von zwei wundervollen Buben
                        nennen. Ich lebe glücklich, gemeinsam mit meinem lieben
                        Freund, unseren Traum von einer kleinen Farm, umgeben
                        von unseren Ziegen, Schafen, einem Hund, einer Katze,
                        sowie Enten und Hühnern.</div> <img class="intro-block1-image svelte-lv2wmt" src="./images/ziegen1.png" alt="ziege"></div> <div class="intro-block end svelte-lv2wmt"><img class="intro-block2-image svelte-lv2wmt" src="./images/image00002.jpeg" alt="ziege"> <div class="intro-headline svelte-lv2wmt">Deine Hundefriseurin in Zell!</div> <div class="intro-text svelte-lv2wmt">Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt.
                        Ich lege meinen Fokus darauf, Hundebesitzern im
                        stressigen Alltag zu helfen, indem ich liebevolle und
                        geduldige Pflegeleistungen für ihre Fellnasen anbiete.</div> <img class="intro-block2-edelweiss svelte-lv2wmt" src="./images/edelweiss.png" alt="edelweiss"></div></div></div> <div class="intro-footer svelte-lv2wmt"><div class="intro-text h-color-dark svelte-lv2wmt">Zu meinen Leistungen gehören Baden, Föhnen, Ausbürsten
                (Unterwolle, Verfilzungen), Pfötchenpflege, sowie das Scheren
                oder Schneiden einfacher, ansprechender und hübscher Frisuren.
                Mein Ziel ist es, dass sich die Hundchen rundum wohl und
                glücklich fühlen, deshalb freue ich mich über jeden einzelnen
                Besucher in meinem Salon.</div> <!></div></div>`);function Ft(e){let n=yn();var t=rt(),r=An(t);rn(r,()=>en(n)<=1200,l=>{var i=Dt(),s=w(m(i),2);Tt(s,{text1:"ES GIBT NUR EINEN EINZIGEN, DEN KLÜGSTEN UND SCHÖNSTEN HUND",text2:"AUF DER WELT - UND JEDER BESITZT GENAU DIESEN!",backgroundUrl:"./images/waterhose_dog.png"});var a=w(s,2),o=w(m(a),2);fe(o,{cssClass:"h-self-center",text:"Termin buchen",onClick:ce}),y(l,i)},l=>{var i=zt(),s=m(i),a=w(m(s),2);St(a,{});var o=w(s,2),f=w(m(o),2);fe(f,{cssClass:"h-self-center",text:"Termin buchen",onClick:ce}),y(l,i)}),ct("innerWidth",l=>Sn(n,l)),y(e,t)}var It=F("<main><!> <!> <!></main>");function At(e){var n=It(),t=m(n);xt(t);var r=w(t,2);Ft(r);var l=w(r,2);wt(l),y(e,n)}st(At,{target:document.getElementById("app")});
