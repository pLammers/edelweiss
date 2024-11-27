(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const ln=!1;var sn=Array.isArray,an=Array.from,on=Object.defineProperty,le=Object.getOwnPropertyDescriptor,un=Object.getOwnPropertyDescriptors,be=Object.getPrototypeOf;function cn(e){for(var n=0;n<e.length;n++)e[n]()}const A=2,Ne=4,te=8,de=16,N=32,K=64,M=128,ee=256,b=512,F=1024,V=2048,P=4096,Z=8192,fn=16384,_e=32768,vn=65536,dn=1<<18,De=1<<19,_n=Symbol("$state"),hn=Symbol("legacy props");function Ie(e){return e===this.v}function gn(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ae(e){return!gn(e,this.v)}function pn(){throw new Error("effect_update_depth_exceeded")}function mn(e){throw new Error("props_invalid_value")}function wn(){throw new Error("state_unsafe_local_read")}function bn(){throw new Error("state_unsafe_mutation")}let G=!1;function En(){G=!0}function Ce(e){return{f:0,v:e,reactions:null,equals:Ie,version:0}}function yn(e,n=!1){var r;const t=Ce(e);return n||(t.equals=Ae),G&&m!==null&&m.l!==null&&((r=m.l).s??(r.s=[])).push(t),t}function xn(e,n=!1){return kn(yn(e,n))}function kn(e){return _!==null&&_.f&A&&(z===null?Rn([e]):z.push(e)),e}function Tn(e,n){return _!==null&&me()&&_.f&(A|de)&&(z===null||!z.includes(e))&&bn(),zn(e,n)}function zn(e,n){return e.equals(n)||(e.v=n,e.version=Je(),Fe(e,F),me()&&c!==null&&c.f&b&&!(c.f&N)&&(p!==null&&p.includes(e)?(D(c,F),ie(c)):C===null?Bn([e]):C.push(e))),n}function Fe(e,n){var t=e.reactions;if(t!==null)for(var r=me(),l=t.length,i=0;i<l;i++){var s=t[i],a=s.f;a&F||!r&&s===c||(D(s,n),a&(b|M)&&(a&A?Fe(s,V):ie(s)))}}const Sn=1,Nn=2,Dn=8;let In=!1;var Ee,He,je;function An(){if(Ee===void 0){Ee=window;var e=Element.prototype,n=Node.prototype;He=le(n,"firstChild").get,je=le(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function qe(e=""){return document.createTextNode(e)}function he(e){return He.call(e)}function ge(e){return je.call(e)}function g(e,n){return he(e)}function Cn(e,n){{var t=he(e);return t instanceof Comment&&t.data===""?ge(t):t}}function w(e,n=1,t=!1){let r=e;for(;n--;)r=ge(r);return r}function Le(e){var n=A|F;c===null?n|=M:c.f|=De;const t={children:null,ctx:m,deps:null,equals:Ie,f:n,fn:e,reactions:null,v:null,version:0,parent:c};if(_!==null&&_.f&A){var r=_;(r.children??(r.children=[])).push(t)}return t}function Fn(e){const n=Le(e);return n.equals=Ae,n}function Oe(e){var n=e.children;if(n!==null){e.children=null;for(var t=0;t<n.length;t+=1){var r=n[t];r.f&A?pe(r):R(r)}}}function Pe(e){var n,t=c;S(e.parent);try{Oe(e),n=Qe(e)}finally{S(t)}return n}function Me(e){var n=Pe(e),t=(L||e.f&M)&&e.deps!==null?V:b;D(e,t),e.equals(n)||(e.v=n,e.version=Je())}function pe(e){Oe(e),W(e,0),D(e,Z),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Hn(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function Y(e,n,t,r=!0){var l=(e&K)!==0,i=c,s={ctx:m,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|F,first:null,fn:n,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(t){var a=O;try{ke(!0),re(s),s.f|=fn}catch(v){throw R(s),v}finally{ke(a)}}else n!==null&&ie(s);var o=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&De)===0;if(!o&&!l&&r&&(i!==null&&Hn(s,i),_!==null&&_.f&A)){var f=_;(f.children??(f.children=[])).push(s)}return s}function Re(e){const n=Y(te,null,!1);return D(n,b),n.teardown=e,n}function jn(e){const n=Y(K,e,!0);return()=>{R(n)}}function qn(e){return Y(Ne,e,!1)}function Be(e){return Ue(e)}function Ue(e,n=0){return Y(te|de|n,e,!0)}function se(e,n=!0){return Y(te|N,e,!0,n)}function We(e){var n=e.teardown;if(n!==null){const t=_;H(null);try{n.call(null)}finally{H(t)}}}function Ke(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var t=0;t<n.length;t+=1)pe(n[t])}}function Ve(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;R(t,n),t=r}}function Ln(e){for(var n=e.first;n!==null;){var t=n.next;n.f&N||R(n),n=t}}function R(e,n=!0){var t=!1;if((n||e.f&dn)&&e.nodes_start!==null){for(var r=e.nodes_start,l=e.nodes_end;r!==null;){var i=r===l?null:ge(r);r.remove(),r=i}t=!0}Ve(e,n&&!t),Ke(e),W(e,0),D(e,Z);var s=e.transitions;if(s!==null)for(const o of s)o.stop();We(e);var a=e.parent;a!==null&&a.first!==null&&Ze(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function Ze(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function ye(e,n){var t=[];Ge(e,t,!0),On(t,()=>{R(e),n&&n()})}function On(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var l of e)l.out(r)}else n()}function Ge(e,n,t){if(!(e.f&P)){if(e.f^=P,e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&n.push(s);for(var r=e.first;r!==null;){var l=r.next,i=(r.f&_e)!==0||(r.f&N)!==0;Ge(r,n,i?t:!1),r=l}}}function xe(e){Ye(e,!0)}function Ye(e,n){if(e.f&P){$(e)&&re(e),e.f^=P;for(var t=e.first;t!==null;){var r=t.next,l=(t.f&_e)!==0||(t.f&N)!==0;Ye(t,l?n:!1),t=r}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&i.in()}}let ae=!1,oe=[];function Pn(){ae=!1;const e=oe.slice();oe=[],cn(e)}function Mn(e){ae||(ae=!0,queueMicrotask(Pn)),oe.push(e)}let ne=!1,O=!1;function ke(e){O=e}let ue=[],U=0;let _=null;function H(e){_=e}let c=null;function S(e){c=e}let z=null;function Rn(e){z=e}let p=null,y=0,C=null;function Bn(e){C=e}let $e=0,L=!1,m=null;function Je(){return++$e}function me(){return!G||m!==null&&m.l===null}function $(e){var s,a;var n=e.f;if(n&F)return!0;if(n&V){var t=e.deps,r=(n&M)!==0;if(t!==null){var l;if(n&ee){for(l=0;l<t.length;l++)((s=t[l]).reactions??(s.reactions=[])).push(e);e.f^=ee}for(l=0;l<t.length;l++){var i=t[l];if($(i)&&Me(i),r&&c!==null&&!L&&!((a=i==null?void 0:i.reactions)!=null&&a.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}r||D(e,b)}return!1}function Un(e,n,t){throw e}function Qe(e){var d;var n=p,t=y,r=C,l=_,i=L,s=z,a=m,o=e.f;p=null,y=0,C=null,_=o&(N|K)?null:e,L=!O&&(o&M)!==0,z=null,m=e.ctx;try{var f=(0,e.fn)(),v=e.deps;if(p!==null){var u;if(W(e,y),v!==null&&y>0)for(v.length=y+p.length,u=0;u<p.length;u++)v[y+u]=p[u];else e.deps=v=p;if(!L)for(u=y;u<v.length;u++)((d=v[u]).reactions??(d.reactions=[])).push(e)}else v!==null&&y<v.length&&(W(e,y),v.length=y);return f}finally{p=n,y=t,C=r,_=l,L=i,z=s,m=a}}function Wn(e,n){let t=n.reactions;if(t!==null){var r=t.indexOf(e);if(r!==-1){var l=t.length-1;l===0?t=n.reactions=null:(t[r]=t[l],t.pop())}}t===null&&n.f&A&&(p===null||!p.includes(n))&&(D(n,V),n.f&(M|ee)||(n.f^=ee),W(n,0))}function W(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Wn(e,t[r])}function re(e){var n=e.f;if(!(n&Z)){D(e,b);var t=c;c=e;try{n&de?Ln(e):Ve(e),Ke(e),We(e);var r=Qe(e);e.teardown=typeof r=="function"?r:null,e.version=$e}catch(l){Un(l)}finally{c=t}}}function Kn(){U>1e3&&(U=0,pn()),U++}function Vn(e){var n=e.length;if(n!==0){Kn();var t=O;O=!0;try{for(var r=0;r<n;r++){var l=e[r];l.f&b||(l.f^=b);var i=[];Xe(l,i),Zn(i)}}finally{O=t}}}function Zn(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];!(r.f&(Z|P))&&$(r)&&(re(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ze(r):r.fn=null))}}function Gn(){if(ne=!1,U>1001)return;const e=ue;ue=[],Vn(e),ne||(U=0)}function ie(e){ne||(ne=!0,queueMicrotask(Gn));for(var n=e;n.parent!==null;){n=n.parent;var t=n.f;if(t&(K|N)){if(!(t&b))return;n.f^=b}}ue.push(n)}function Xe(e,n){var t=e.first,r=[];e:for(;t!==null;){var l=t.f,i=(l&N)!==0,s=i&&(l&b)!==0;if(!s&&!(l&P))if(l&te){i?t.f^=b:$(t)&&re(t);var a=t.first;if(a!==null){t=a;continue}}else l&Ne&&r.push(t);var o=t.next;if(o===null){let u=t.parent;for(;u!==null;){if(e===u)break e;var f=u.next;if(f!==null){t=f;continue e}u=u.parent}}t=o}for(var v=0;v<r.length;v++)a=r[v],n.push(a),Xe(a,n)}function en(e){var a;var n=e.f,t=(n&A)!==0;if(t&&n&Z){var r=Pe(e);return pe(e),r}if(_!==null){z!==null&&z.includes(e)&&wn();var l=_.deps;p===null&&l!==null&&l[y]===e?y++:p===null?p=[e]:p.push(e),C!==null&&c!==null&&c.f&b&&!(c.f&N)&&C.includes(e)&&(D(c,F),ie(c))}else if(t&&e.deps===null){var i=e,s=i.parent;s!==null&&!((a=s.deriveds)!=null&&a.includes(i))&&(s.deriveds??(s.deriveds=[])).push(i)}return t&&(i=e,$(i)&&Me(i)),e.v}const Yn=~(F|V|b);function D(e,n){e.f=e.f&Yn|n}function $n(e,n=!1,t){m={p:m,c:null,e:null,m:!1,s:e,x:null,l:null},G&&!n&&(m.l={s:null,u:null,r1:[],r2:Ce(!1)})}function Jn(e){const n=m;if(n!==null){const s=n.e;if(s!==null){var t=c,r=_;n.e=null;try{for(var l=0;l<s.length;l++){var i=s[l];S(i.effect),H(i.reaction),qn(i.fn)}}finally{S(t),H(r)}}m=n.p,n.m=!0}return{}}function Qn(e,n,t,r=!0){r&&t();for(var l of n)e.addEventListener(l,t);Re(()=>{for(var i of n)e.removeEventListener(i,t)})}function nn(e){var n=_,t=c;H(null),S(null);try{return e()}finally{H(n),S(t)}}const Xn=new Set,Te=new Set;function et(e,n,t,r){function l(i){if(r.capture||B.call(n,i),!i.cancelBubble)return nn(()=>t.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Mn(()=>{n.addEventListener(e,l,r)}):n.addEventListener(e,l,r),l}function nt(e,n,t,r,l){var i={capture:r,passive:l},s=et(e,n,t,i);(n===document.body||n===window||n===document)&&Re(()=>{n.removeEventListener(e,s,i)})}function B(e){var we;var n=this,t=n.ownerDocument,r=e.type,l=((we=e.composedPath)==null?void 0:we.call(e))||[],i=l[0]||e.target,s=0,a=e.__root;if(a){var o=l.indexOf(a);if(o!==-1&&(n===document||n===window)){e.__root=n;return}var f=l.indexOf(n);if(f===-1)return;o<=f&&(s=o)}if(i=l[s]||e.target,i!==n){on(e,"currentTarget",{configurable:!0,get(){return i||t}});var v=_,u=c;H(null),S(null);try{for(var d,h=[];i!==null;){var E=i.assignedSlot||i.parentNode||i.host||null;try{var k=i["__"+r];if(k!==void 0&&!i.disabled)if(sn(k)){var[J,...T]=k;J.apply(i,[e,...T])}else k.call(i,e)}catch(Q){d?h.push(Q):d=Q}if(e.cancelBubble||E===n||E===null)break;i=E}if(d){for(let Q of h)queueMicrotask(()=>{throw Q});throw d}}finally{e.__root=n,delete e.currentTarget,H(v),S(u)}}}function tt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function tn(e,n){var t=c;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function I(e,n){var t,r=!e.startsWith("<!>");return()=>{t===void 0&&(t=tt(r?e:"<!>"+e),t=he(t));var l=t.cloneNode(!0);return tn(l,l),l}}function rt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=qe();return e.append(n,t),tn(n,t),e}function x(e,n){e!==null&&e.before(n)}const it=["touchstart","touchmove"];function lt(e){return it.includes(e)}function ce(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function st(e,n){return at(e,n)}const q=new Map;function at(e,{target:n,anchor:t,props:r={},events:l,context:i,intro:s=!0}){An();var a=new Set,o=u=>{for(var d=0;d<u.length;d++){var h=u[d];if(!a.has(h)){a.add(h);var E=lt(h);n.addEventListener(h,B,{passive:E});var k=q.get(h);k===void 0?(document.addEventListener(h,B,{passive:E}),q.set(h,1)):q.set(h,k+1)}}};o(an(Xn)),Te.add(o);var f=void 0,v=jn(()=>{var u=t??n.appendChild(qe());return se(()=>{if(i){$n({});var d=m;d.c=i}l&&(r.$$events=l),f=e(u,r)||{},i&&Jn()}),()=>{var E;for(var d of a){n.removeEventListener(d,B);var h=q.get(d);--h===0?(document.removeEventListener(d,B),q.delete(d)):q.set(d,h)}Te.delete(o),ze.delete(f),u!==t&&((E=u.parentNode)==null||E.removeChild(u))}});return ze.set(f,v),f}let ze=new WeakMap;function rn(e,n,t,r=null,l=!1){var i=e,s=null,a=null,o=null,f=l?_e:0;Ue(()=>{o!==(o=!!n())&&(o?(s?xe(s):s=se(()=>t(i)),a&&ye(a,()=>{a=null})):(a?xe(a):r&&(a=se(()=>r(i))),s&&ye(s,()=>{s=null})))},f)}function ot(e,n,t,r){var l=e.__attributes??(e.__attributes={});l[n]!==(l[n]=t)&&("__styles"in e&&(e.__styles={}),t==null?e.removeAttribute(n):typeof t!="string"&&ut(e).includes(n)?e[n]=t:e.setAttribute(n,t))}var Se=new Map;function ut(e){var n=Se.get(e.nodeName);if(n)return n;Se.set(e.nodeName,n=[]);for(var t,r=be(e),l=Element.prototype;l!==r;){t=un(r);for(var i in t)t[i].set&&n.push(i);r=be(r)}return n}function ct(e,n){var t=e.__className,r=ft(n);(t!==r||In)&&(n==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function ft(e){return e??""}function vt(e,n){Qn(window,["resize"],()=>nn(()=>n(window[e])))}let X=!1;function dt(e){var n=X;try{return X=!1,[e(),X]}finally{X=n}}function _t(e){for(var n=c,t=c;n!==null&&!(n.f&(N|K));)n=n.parent;try{return S(n),e()}finally{S(t)}}function j(e,n,t,r){var J;var l=(t&Sn)!==0,i=!G||(t&Nn)!==0,s=(t&Dn)!==0,a=!1,o;[o,a]=dt(()=>e[n]);var f=_n in e||hn in e,v=((J=le(e,n))==null?void 0:J.set)??(f&&s&&n in e?T=>e[n]=T:void 0),u=r,d=!0,h=()=>(d&&(d=!1,u=r),u);o===void 0&&r!==void 0&&(v&&i&&mn(),o=h(),v&&v(o));var E;if(i)E=()=>{var T=e[n];return T===void 0?h():(d=!0,T)};else{var k=_t(()=>(l?Le:Fn)(()=>e[n]));k.f|=vn,E=()=>{var T=en(k);return T!==void 0&&(u=void 0),T===void 0?u:T}}return E}const ht="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);En();var gt=I('<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.3756754674714!2d8.9937615!3d49.7225544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd59cde213f919%3A0x484a2bca6594892c!2sHundesalon-Edelweiss!5e0!3m2!1sde!2sde!4v1731774995518!5m2!1sde!2sde" width="600" height="450" style="border:0;max-width:100%;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');function pt(e){var n=gt();x(e,n)}var mt=I('<div class="footer-container svelte-19ja4g0"><h2 class="footer-headline svelte-19ja4g0">Kontakt</h2> <div class="footer-wrapper svelte-19ja4g0"><div class="footer-contact-information svelte-19ja4g0"><img class="logo svelte-19ja4g0" src="./assets/logo.png" alt="logo"> <div class="text-header svelte-19ja4g0">Inhaberin:</div> <div class="text-content svelte-19ja4g0">Marion Kabus</div> <br> <div class="text-header svelte-19ja4g0">Termin buchen:</div> <div class="text-content svelte-19ja4g0"><img class="icon svelte-19ja4g0" src="./assets/icons/phone.png" alt="phone"> 015120777965</div> <div class="text-content svelte-19ja4g0"><img class="icon svelte-19ja4g0" src="./assets/icons/mail.png" alt="mail"> info@hundesalon-edelweiss.de</div> <div class="text-content svelte-19ja4g0"><img class="icon svelte-19ja4g0" src="./assets/icons/instagram.png" alt="instagram"> <a href="https://www.instagram.com/hundesalon_edelweiss/" target="_blank" class="svelte-19ja4g0">hundesalon_edelweiss</a></div> <br> <div class="text-header svelte-19ja4g0">Termin buchen:</div> <div class="text-content svelte-19ja4g0">-> Täglich telefonisch</div> <div class="text-content svelte-19ja4g0">-> WhatsApp</div> <div class="text-content svelte-19ja4g0">-> E-Mail</div></div> <div class="footer-location svelte-19ja4g0"><div class="footer-location-address svelte-19ja4g0"><div>Königer Straße 20, 64732 Zell (Bad König)</div></div> <div class="footer-location-map"><!></div></div></div></div>');function wt(e){var n=mt(),t=w(g(n),2),r=w(g(t),2),l=w(g(r),2),i=g(l);pt(i),x(e,n)}var bt=I("<button> </button>");function fe(e,n){let t=j(n,"text",8,""),r=j(n,"cssClass",8,""),l=j(n,"onClick",8);var i=bt(),s=g(i);Be(()=>{ct(i,`${r()??""} svelte-nox8yv`),ce(s,t())}),nt("click",i,function(...a){var o;(o=l())==null||o.apply(this,a)}),x(e,i)}const ve=function(){window.open("https://wa.me/+4915120777965","_blank")};var Et=I('<div class="header-container svelte-1gv3qve"><div class="header-menu svelte-1gv3qve"><h1 class="header-menu-left svelte-1gv3qve"><img src="./assets/wholelogo_horizontal.png" alt="logo" class="svelte-1gv3qve"></h1></div> <div class="header-center svelte-1gv3qve"><div>Dein Hund ist wieder</div> <div style="font-weight: bolder;">"fellig"?</div></div> <div class="header-bottom svelte-1gv3qve"><div class="svelte-1gv3qve">Dann ab zum Hundesalon Edelweiss in Bad König-Zell!</div> <!></div></div>');function yt(e){var n=Et(),t=w(g(n),4),r=w(g(t),2);fe(r,{text:"Termin buchen",onClick:ve}),x(e,n)}var xt=I('<img class="edelweiss-headline-logo svelte-z0iglx" src="./assets/logo.png" alt="logo">'),kt=I('<div class="edelweiss-headline-container svelte-z0iglx"><!> <div class="edelweiss-headline-upper svelte-z0iglx">Hundesalon</div> <div class="edelweiss-headline-lower svelte-z0iglx">EDELWEISS</div></div>');function Tt(e,n){let t=j(n,"showLogo",8,!1);var r=kt(),l=g(r);rn(l,t,i=>{var s=xt();x(i,s)}),x(e,r)}var zt=I(`<div class="intro-container svelte-1w0y20p"><div class="intro-content svelte-1w0y20p"><div class="mountains svelte-1w0y20p"></div> <div class="h-font-size-l slogan svelte-1w0y20p">Dein Hund ist wieder "fellig"?</div> <div class="h-font-size-l"><div style="color: black">Dann ab zum</div> <div style="color: white">Hundesalon Edelweiss</div> <div style="color: black">in Bad-König Zell</div></div> <div class="absolute-container svelte-1w0y20p" style="height: 92vw"><img class="intro-block1-image svelte-1w0y20p" src="./assets/image00002_shortformat.png" alt="ziege"> <div class="h-font-size-l intro-block1-image-abs-text svelte-1w0y20p" style="color: white">Wer stutzt hier meinen Hunde zusammen?</div></div> <div class="intro-text svelte-1w0y20p">Ich bin Marion, geboren im Dezember 1970 in Groß-Umstadt und
                darf mich stolze Mama von zwei wundervollen Buben nennen. Ich
                lebe glücklich, gemeinsam mit meinem lieben Freund, unseren
                Traum von einer kleinen Farm, umgeben von unseren Ziegen,
                Schafen, einem Hund, einer Katze, sowie Enten und Hühnern.</div> <div class="absolute-container svelte-1w0y20p"><img class="intro-block2-image svelte-1w0y20p" src="./assets/ziegen2.jpeg" alt="ziege"></div></div> <div class="intro-footer svelte-1w0y20p"><div class="intro-text h-color-dark svelte-1w0y20p">Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt. Ich lege
                meinen Fokus darauf, Hundebesitzern im stressigen Alltag zu
                helfen, indem ich liebevolle und geduldige Pflegeleistungen für
                ihre Fellnasen anbiete. Dazu gehören Baden, Föhnen, Ausbürsten
                (Unterwolle, Verfilzungen), Pfötchenpflege, sowie das Scheren
                oder Schneiden einfacher, ansprechender und hübscher Frisuren.
                Mein Ziel ist es, dass sich die Hundchen rundum wohl und
                glücklich fühlen, deshalb freue ich mich über jeden einzelnen
                Besucher in meinem Salon.</div> <!></div></div>`),St=I(`<div class="intro-container svelte-1w0y20p"><div class="intro-content svelte-1w0y20p"><div class="mountains svelte-1w0y20p"></div> <!> <div class="intro-block-container svelte-1w0y20p"><div class="intro-block svelte-1w0y20p"><div class="intro-headline svelte-1w0y20p">Wer stutzt hier meinen Hund zusammen?</div> <div class="intro-text svelte-1w0y20p">Ich bin Marion, geboren 1970 in Groß-Umstadt. Ich bin
                        eine stolze Mama von zwei wundervollen Buben und lebe
                        meinen Traum von einer kleinen Farm, umgeben von meinen
                        geliebten Tieren - Ziegen, einem Hund, einer Katze sowie
                        Enten und Hühnern. <br><br> Als gelernte Reiseverkehrskauffrau bin ich schließlich als
                        Quereinsteiger in einer Tierarztpraxis gelandet und habe
                        dort x Jahre gearbeitet.</div> <img class="intro-block1-image svelte-1w0y20p" src="./assets/ziegen1.png" alt="ziege"></div> <div class="intro-block end svelte-1w0y20p"><img class="intro-block2-image svelte-1w0y20p" src="./assets/image00002.jpeg" alt="ziege"> <div class="intro-headline svelte-1w0y20p">Deine Hundefriseurin in Zell!</div> <div class="intro-text svelte-1w0y20p">Ich liebe es, mich um unsere tierischen Freunde zu
                        kümmern. Mit meinem Freund an der Seite, dessen
                        Unterstützung unentbehrlich für die Verwirklichung
                        meines Traums war, konnte ich meinen eigenen Hundesalon
                        eröffnen. Auch meine liebe Familie hat mir geraten, zu
                        tun, was mich glücklich macht. <br><br> Meine Wurzeln liegen in Österreich, und durch das Edelweiß
                        verkörpere ich meine Liebe zu den Bergen und den schönen
                        Erinnerungen an meine Heimat, die einen besonderen Platz
                        in meinem Herzen haben.</div></div></div></div> <div class="intro-footer svelte-1w0y20p"><div class="intro-text h-color-dark svelte-1w0y20p">Ich habe meine Erfüllung in einem Beruf gefunden, der sich ganz
                um Tiere dreht. Ich bringe meine Erfahrungen täglich ein und
                freue mich, sie mit Dir und Deinem Hund zu teilen. <br> <br> Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt. Ich biete
                ein entspanntes und liebevolles Umfeld und lege selbstverständlich
                großen Wert auf eine behutsame und gleichzeitig professionelle Pflege.</div> <!></div></div>`);function Nt(e){let n=xn();var t=rt(),r=Cn(t);rn(r,()=>en(n)<=1210,l=>{var i=zt(),s=w(g(i),2),a=w(g(s),2);fe(a,{cssClass:"h-self-center",text:"Termin buchen",onClick:ve}),x(l,i)},l=>{var i=St(),s=g(i),a=w(g(s),2);Tt(a,{});var o=w(s,2),f=w(g(o),2);fe(f,{cssClass:"h-self-center",text:"Termin buchen",onClick:ve}),x(l,i)}),vt("innerWidth",l=>Tn(n,l)),x(e,t)}var Dt=I('<div class="teaser svelte-rqbvy8"><div> </div> <div> </div></div>');function It(e,n){let t=j(n,"backgroundUrl",8,""),r=j(n,"text1",8,""),l=j(n,"text2",8,"");var i=Dt(),s=g(i),a=g(s),o=w(s,2),f=g(o);Be(()=>{ot(i,"style",`background-image: url(${t()??""});`),ce(a,r()),ce(f,l())}),x(e,i)}var At=I("<main><!> <!> <!> <!></main>");function Ct(e){var n=At(),t=g(n);yt(t);var r=w(t,2);Nt(r);var l=w(r,2);It(l,{text1:"ES GIBT NUR EINEN EINZIGEN, DEN KLÜGSTEN UND SCHÖNSTEN HUND",text2:"AUF DER WELT - UND JEDER BESITZT GENAU DIESEN!",backgroundUrl:"./assets/waterhose_dog.png"});var i=w(l,2);wt(i),x(e,n)}st(Ct,{target:document.getElementById("app")});