"use strict";(self.webpackChunkjitdba_site=self.webpackChunkjitdba_site||[]).push([[5709],{4303:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>r});var t=i(4848),s=i(8453);const d={},c=void 0,l={id:"4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u6362",title:"\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u6362",description:"\u539f\u6267\u884c\u8ba1\u5212",source:"@site/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u6362.md",sourceDirName:"4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b",slug:"/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u6362",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u6362",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tidbSidebar",previous:{title:"\u4e0d\u8d70IndexJoin-2-\u7f3a\u5c11\u7d22\u5f15",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-2-\u7f3a\u5c11\u7d22\u5f15"},next:{title:"\u4e0d\u8d70IndexJoin-4-\u9ad8\u4f30\u5185\u88681",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u8d70IndexJoin-4-\u9ad8\u4f30\u5185\u88681"}},o={},r=[{value:"\u539f\u6267\u884c\u8ba1\u5212",id:"\u539f\u6267\u884c\u8ba1\u5212",level:2},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:3},{value:"\u4f18\u5316\u5efa\u8bae",id:"\u4f18\u5316\u5efa\u8bae",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u539f\u6267\u884c\u8ba1\u5212",children:"\u539f\u6267\u884c\u8ba1\u5212"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"or\u8bed\u53e5",src:i(1273).A+"",width:"1200",height:"200"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u8bed\u53e5\u7c7b\u4f3c\u5982\u4e0b, \u5176\u4e2dt.val\u662fvarchar, v.id\u662fbigint\nselect t.*, v.* from t, v\nwhere t.val = v.id\nand t.col='xxxx'\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6bd4\u8f83\u6709\u610f\u601d\u7684\u662f, \u4f18\u5316\u5668\u628at.val\u548cv.id\u90fd\u505a\u4e86\u8f6c\u6362"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u628at.val\u8f6c\u6210 double"}),"\n",(0,t.jsx)(n.li,{children:"\u628av.id\u4e5f\u8f6c\u6210 double"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"or\u8bed\u53e5",src:i(8699).A+"",width:"1200",height:"387"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsxs)(n.p,{children:["\u9690\u5f0f\u8f6c\u6362\u540e, \u5173\u8054\u6761\u4ef6\u53d8\b\u4e3a ",(0,t.jsx)(n.code,{children:"cast(t.val as double) = cast(v.id as double)"}),"\u8fd9\u6837\u7684\u51fd\u6570\u8ba1\u7b97, \u4e0d\u6ee1\u8db3 IndexJoin\u7684\u6761\u4ef6, \u56e0\u6b64\u4e0d\u8d70IndexJoin\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,t.jsx)(n.p,{children:"\u9690\u5f0f\u8f6c\u6362\u5bfc\u81f4\u65e0\u6cd5IndexJoin"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f18\u5316\u5efa\u8bae",children:"\u4f18\u5316\u5efa\u8bae"}),"\n",(0,t.jsx)(n.p,{children:"\u9a71\u52a8\u8868\u5b57\u6bb5\u7528cast\u8f6c\u6362, \u88ab\u9a71\u52a8\u8868\u5b57\u6bb5\u4e0d\u53d8\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select t.*, v.* from t, v\nwhere cast(t.val as unsigned bigint) = v.id\nand t.col='xxxx'\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"or\u8bed\u53e5",src:i(7566).A+"",width:"600",height:"277"})}),"\n",(0,t.jsx)(n.p,{children:"\u6539\u5b8c\u540e\uff0c\u53ef\u4ee5\u8d70IndexJoin"})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1273:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u63621-915519af14272fbdd5d6a676d64e1fb5.jpg"},7566:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u63622-826c82779e554712293b2a582356f5d0.jpg"},8699:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/\u4e0d\u8d70IndexJoin-3-\u9690\u5f0f\u8f6c\u63623-acd57a9a9930d458a83555ba1c37271c.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var t=i(6540);const s={},d=t.createContext(s);function c(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);