"use strict";(self.webpackChunkjitdba_site=self.webpackChunkjitdba_site||[]).push([[2392],{1881:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=i(4848),r=i(8453);const s={},o=void 0,d={id:"4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-2-\u7f3a\u5c11\u7d22\u5f15",title:"\u4e0d\u8d70IndexJoin-2-\u7f3a\u5c11\u7d22\u5f15",description:"\u539f\u6267\u884c\u8ba1\u5212",source:"@site/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-2-\u7f3a\u5c11\u7d22\u5f15.md",sourceDirName:"4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b",slug:"/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-2-\u7f3a\u5c11\u7d22\u5f15",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-2-\u7f3a\u5c11\u7d22\u5f15",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tidbSidebar",previous:{title:"\u4e0d\u8d70IndexJoin-1-\u5173\u8054\u65b9\u5f0f",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-1-\u5173\u8054\u65b9\u5f0f"},next:{title:"\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u6362",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u6362"}},c={},l=[{value:"\u539f\u6267\u884c\u8ba1\u5212",id:"\u539f\u6267\u884c\u8ba1\u5212",level:2},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4f18\u5316\u5efa\u8bae",id:"\u4f18\u5316\u5efa\u8bae",level:2}];function a(e){const n={admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u539f\u6267\u884c\u8ba1\u5212",children:"\u539f\u6267\u884c\u8ba1\u5212"}),"\n",(0,t.jsxs)(n.p,{children:["create table a(id int, name varchar(20));",(0,t.jsx)(n.br,{}),"\n","create table b(id int, name varchar(20));"]}),"\n",(0,t.jsxs)(n.p,{children:["explain select a.* , b.* from a, b\nwhere a.name = b.name\n",(0,t.jsx)(n.img,{alt:"or\u8bed\u53e5",src:i(3591).A+"",width:"1004",height:"340"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"IndexJoin\u7684\u57fa\u672c\u8981\u6c42\u4e4b\u4e8c:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5185\u8868\u5173\u8054\u5b57\u6bb5\u4e0a\u6709\u7d22\u5f15,\u4e14\u662f\u7d22\u5f15\u524d\u7f00"}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5f3a\u5236\u6307\u5b9ahint"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"explain\nselect /*+ inl_join(b) */\na.* , b.* from a, b\nwhere a.name = b.name\n"})}),"\n",(0,t.jsx)(n.p,{children:"hint\u4e0d\u751f\u6548, \u6709\u544a\u8b66"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Optimizer Hint /*+ INL_JOIN(b) ",(0,t.jsx)(n.em,{children:"/ or /"}),"+ TIDB_INLJ(b) */ is inapplicable"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f18\u5316\u5efa\u8bae",children:"\u4f18\u5316\u5efa\u8bae"}),"\n",(0,t.jsx)(n.p,{children:"\u5185\u8868\u5b57\u6bb5\u4e0a\u5efa\u7d22\u5f15\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3591:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/\u4e0d\u8d70IndexJoin-2-\u7f3a\u5c11\u7d22\u5f151-f5f28564f006d9887ee242f1fe6e07d1.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);