import{s as X,f as b,a as A,l as O,g as x,h as y,d as p,c as w,Z as Y,m as U,j as v,i as W,G as l,H as tt,$ as et,B as at,n as J}from"../chunks/scheduler.c1c84dbf.js";import{S as nt,i as st,b as q,d as G,m as H,a as V,c as rt,t as S,e as P,g as ot}from"../chunks/index.64b0efba.js";import{e as K}from"../chunks/each.388c6565.js";import{g as lt}from"../chunks/navigation.34681da2.js";import{I as it}from"../chunks/Icon.677e081b.js";import{f as L}from"../chunks/formatDate.85208f9c.js";import{T as ct}from"../chunks/tournamentStore.996e62b0.js";import{F as M,E as ft,k as dt}from"../chunks/index.c69bd07c.js";function Q(_,t,r){const s=_.slice();return s[4]=t[r],s[6]=r,s}function R(_){let t,r,s,f,d,c,g=_[4].title+"",k,I,m,D=L(_[4].createdAt)+"",h,E,T;return s=new it({props:{name:"tableFiles",width:"24",height:"24"}}),{c(){t=b("a"),r=b("div"),q(s.$$.fragment),f=A(),d=b("div"),c=b("div"),k=O(g),I=A(),m=b("div"),h=O(D),E=A(),this.h()},l(i){t=x(i,"A",{href:!0,class:!0});var u=y(t);r=x(u,"DIV",{class:!0});var B=y(r);G(s.$$.fragment,B),B.forEach(p),f=w(u),d=x(u,"DIV",{class:!0});var $=y(d);c=x($,"DIV",{class:!0});var e=y(c);k=U(e,g),e.forEach(p),I=w($),m=x($,"DIV",{class:!0});var F=y(m);h=U(F,D),F.forEach(p),$.forEach(p),E=w(u),u.forEach(p),this.h()},h(){v(r,"class","flex items-center justify-center variant-ghost-tertiary p-4 rounded shrink-0"),v(c,"class","font-semibold"),v(m,"class","opacity-60"),v(d,"class","flex flex-col"),v(t,"href",`tournaments/${_[6]}`),v(t,"class","py-4 px-4 hover:bg-primary-400/20 flex gap-4 items-center")},m(i,u){W(i,t,u),l(t,r),H(s,r,null),l(t,f),l(t,d),l(d,c),l(c,k),l(d,I),l(d,m),l(m,h),l(t,E),T=!0},p(i,u){(!T||u&1)&&g!==(g=i[4].title+"")&&J(k,g),(!T||u&1)&&D!==(D=L(i[4].createdAt)+"")&&J(h,D)},i(i){T||(V(s.$$.fragment,i),T=!0)},o(i){S(s.$$.fragment,i),T=!1},d(i){i&&p(t),P(s)}}}function mt(_){let t,r,s,f,d,c,g="Tournaments",k,I,m,D,h,E,T,i,u,B;f=new M({props:{icon:ft}});let $=K(_[0]),e=[];for(let a=0;a<$.length;a+=1)e[a]=R(Q(_,$,a));const F=a=>S(e[a],1,1,()=>{e[a]=null});return E=new M({props:{icon:dt}}),{c(){t=b("div"),r=b("div"),s=b("button"),q(f.$$.fragment),d=A(),c=b("div"),c.textContent=g,k=A(),I=b("div"),m=b("div");for(let a=0;a<e.length;a+=1)e[a].c();D=A(),h=b("button"),q(E.$$.fragment),T=O(`
		Add Tournament`),this.h()},l(a){t=x(a,"DIV",{class:!0});var o=y(t);r=x(o,"DIV",{class:!0});var n=y(r);s=x(n,"BUTTON",{class:!0});var C=y(s);G(f.$$.fragment,C),C.forEach(p),d=w(n),c=x(n,"DIV",{class:!0,"data-svelte-h":!0}),Y(c)!=="svelte-p6hkke"&&(c.textContent=g),n.forEach(p),k=w(o),I=x(o,"DIV",{class:!0});var Z=y(I);m=x(Z,"DIV",{class:!0});var z=y(m);for(let j=0;j<e.length;j+=1)e[j].l(z);z.forEach(p),Z.forEach(p),D=w(o),h=x(o,"BUTTON",{class:!0});var N=y(h);G(E.$$.fragment,N),T=U(N,`
		Add Tournament`),N.forEach(p),o.forEach(p),this.h()},h(){v(s,"class","btn btn-icon"),v(c,"class","font-bold"),v(r,"class","flex flex-row gap-2 items-center bg-secondary-600/20 p-2"),v(m,"class","flex flex-col"),v(I,"class","flex gap-4 items-center"),v(h,"class","btn variant-filled-primary flex gap-4 items-center m-4"),v(t,"class","flex flex-col")},m(a,o){W(a,t,o),l(t,r),l(r,s),H(f,s,null),l(r,d),l(r,c),l(t,k),l(t,I),l(I,m);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(m,null);l(t,D),l(t,h),H(E,h,null),l(h,T),i=!0,u||(B=tt(h,"click",_[2]),u=!0)},p(a,[o]){if(o&1){$=K(a[0]);let n;for(n=0;n<$.length;n+=1){const C=Q(a,$,n);e[n]?(e[n].p(C,o),V(e[n],1)):(e[n]=R(C),e[n].c(),V(e[n],1),e[n].m(m,null))}for(ot(),n=$.length;n<e.length;n+=1)F(n);rt()}},i(a){if(!i){V(f.$$.fragment,a);for(let o=0;o<$.length;o+=1)V(e[o]);V(E.$$.fragment,a),i=!0}},o(a){S(f.$$.fragment,a),e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)S(e[o]);S(E.$$.fragment,a),i=!1},d(a){a&&p(t),P(f),et(e,a),P(E),u=!1,B()}}}function ut(_,t,r){let s;const{tournamentStore:f,addNewTournament:d}=ct;return at(_,f,g=>r(0,s=g)),[s,f,()=>{const{index:g}=d();lt(`/tournaments/${g}/edit`)}]}class Et extends nt{constructor(t){super(),st(this,t,ut,mt,X,{})}}export{Et as component};
