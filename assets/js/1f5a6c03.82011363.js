"use strict";(self.webpackChunkjitdba_site=self.webpackChunkjitdba_site||[]).push([[4042],{7335:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(4848),s=i(8453);const r={},o=void 0,d={id:"4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u826f\u7528\u6cd5-OR",title:"\u4e0d\u826f\u7528\u6cd5-OR",description:"\u539f\u6267\u884c\u8ba1\u5212",source:"@site/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u826f\u7528\u6cd5-OR.md",sourceDirName:"4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b",slug:"/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u826f\u7528\u6cd5-OR",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u826f\u7528\u6cd5-OR",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tidbSidebar",previous:{title:"IndexJoin\u5faa\u73af\u591a-\u4f8b2",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/IndexJoin\u5faa\u73af\u591a-\u4f8b2"},next:{title:"\u4e0d\u826f\u7528\u6cd5-OR\u53d8\u4f53-CASE",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/2\u8bed\u53e5\u4f18\u5316/\u6848\u4f8b/\u4e0d\u826f\u7528\u6cd5-OR\u53d8\u4f53-CASE"}},c={},l=[{value:"\u539f\u6267\u884c\u8ba1\u5212",id:"\u539f\u6267\u884c\u8ba1\u5212",level:2},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:3},{value:"\u4f18\u5316\u5efa\u8bae",id:"\u4f18\u5316\u5efa\u8bae",level:2}];function a(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u539f\u6267\u884c\u8ba1\u5212",children:"\u539f\u6267\u884c\u8ba1\u5212"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"or\u8bed\u53e5",src:i(5231).A+"",width:"1200",height:"249"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u8bed\u53e5\u7c7b\u4f3c\u4e8e\nselect ori.id, ..., t2.name from ori\nleft join t2 on\n   ori.id = t2.id\nOR \n   ori.id = t2.sub_id\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsxs)(n.p,{children:["\u6bcf\u4e2aori.id\u9700\u8981\u548ct2\u7684\u591a\u5217(id, sub_id)\u505a\u6bd4\u8f83, \u65e0\u6cd5\u5355\u952e\u5173\u8054, \u6240\u4ee5\u8fd9\u662f\u4e2a\u7b1b\u5361\u5c14\u79ef\u3002",(0,t.jsx)(n.br,{}),"\n","tidb\u7684plan\u662f ",(0,t.jsx)(n.code,{children:"CARTESIAN left join"}),", \u6267\u884c\u4e863\u79d2\u591a\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,t.jsx)(n.p,{children:"OR\u5bfc\u81f4\u4e86\u7b1b\u5361\u5c14\u79ef\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f18\u5316\u5efa\u8bae",children:"\u4f18\u5316\u5efa\u8bae"}),"\n",(0,t.jsxs)(n.p,{children:["\u628a",(0,t.jsx)(n.code,{children:"OR"}),"\u6539\u4e3a",(0,t.jsx)(n.code,{children:"UNION"}),"\u5b50\u53e5,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u8bed\u53e5\u7c7b\u4f3c\u4e8e\nselect ori.id, ..., t2.name from ori\nleft join t2 on\n   ori.id = t2.id\nUNION\nselect ori.id, t2.name from ori\nleft join t2 on\n   ori.id = t2.sub_id\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"or\u8bed\u53e5",src:i(4912).A+"",width:"1200",height:"212"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6539\u5b8c\u540e\uff0c\u6d88\u9664\u4e86",(0,t.jsx)(n.code,{children:"CARTESIAN"}),", \u4e0a\u9762\u662funion\u524d\u534a\u53e5\u7684plan, \u53ea\u8981250ms\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},5231:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/\u4e0d\u826f\u7528\u6cd5-OR1-47e64933b8718813b299929f41f24a00.jpg"},4912:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/\u4e0d\u826f\u7528\u6cd5-OR2-6d206c0ecb7915a06777ca34e07c03c6.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);