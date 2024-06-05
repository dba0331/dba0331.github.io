"use strict";(self.webpackChunkjitdba_site=self.webpackChunkjitdba_site||[]).push([[1736],{2383:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=i(4848),r=i(8453);const o={sidebar_position:4},t="",d={id:"4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-HashJoin",title:"\u8ba1\u5212-HashJoin",description:"hashjoin",source:"@site/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-HashJoin.md",sourceDirName:"4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212",slug:"/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-HashJoin",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-HashJoin",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tidbSidebar",previous:{title:"\u8ba1\u5212-Apply",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-Apply"},next:{title:"\u8ba1\u5212-IndexHashJoin",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-IndexHashJoin"}},c={},l=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"hash join\u5b9e\u73b0",id:"hash-join\u5b9e\u73b0",level:2},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:2}];function h(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:""}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"hashjoin",src:i(3610).A+"",width:"1200",height:"200"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- \u8bed\u53e5\u7c7b\u4f3c\u5982\u4e0b, \nselect t.*, v.* from t, v\nwhere t.val = v.id\nand t.col='xxxx'\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u57fa\u672c\u539f\u7406:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u628aT\u548cV\u4e24\u4e2a\u8868\u90fd\u8bfb\u5230\u5185\u5b58 (\u5b9e\u9645\u4e0a\u4e0d\u9700\u8981\u5168\u90e8\u63d0\u524d\u8bfb\u5230\u5185\u5b58, \u8fd9\u91cc\u7b80\u5316\u4e86)"}),"\n",(0,s.jsx)(e.li,{children:"\u6839\u636e\u5173\u8054\u6761\u4ef6, \u5728\u5185\u5b58\u4e2d\u7b5b\u9009\u4e24\u8868\u4e2d\u7b26\u5408\u6761\u4ef6\u7684\u8bb0\u5f55"}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"HashJoin\u7684\u4e3b\u8981\u95ee\u9898, \u662f\u5bf9\u5927\u8868\u4e0d\u53cb\u597d, \u5927\u8868\u7684\u6570\u636e\u53ef\u80fd\u8981\u5168\u8868\u626b\u63cf\u4e00\u904d\u3002"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"HasjJoin\u53ea\u80fd\u7528\u4e8e\u7b49\u503c\u8fde\u63a5\u800c\u4e0d\u662f > < \u5417\uff1f"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e0d\u9650\u5236, \u8fd9\u662f\u6700\u57fa\u672c\u7684\u4e00\u4e2a\u5173\u8054\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u53e6\u5916"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["(1)\u5bf9\u4e8eA left join B, \u7531\u4e8e\u9700\u8981\u68c0\u67e5A\u4e2d\u6bcf\u4e00\u6761\u8bb0\u5f55, \u56e0\u6b64\u53ea\u80fd\u7531B\u6784\u9020 HashTable\u3002",(0,s.jsx)(e.br,{}),"\n","(2)\u4e00\u822c\u4e0d\u8bf4\u5927\u8868\u5c0f\u8868, \u800c\u662f\u8bf4Outer(\u9a71\u52a8, probe)\u8868, Inner\u8868(\u6784\u9020\u54c8\u5e0c, build)\u3002",(0,s.jsx)(e.br,{}),"\n","(3)\u5bf9\u4e8eexists/in\u7b49semi join, \u4f18\u5316\u5668\u53ef\u80fd\u6539\u5199\u4e3aleft join, \u5219\u4e3b\u8868\u4e5f\u662fOuter\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"(\u6709\u6ca1\u6709\u53ef\u80fdbuild\u662fOuter\u7684\u60c5\u51b5?)"}),"\n",(0,s.jsx)(e.h2,{id:"hash-join\u5b9e\u73b0",children:"hash join\u5b9e\u73b0"}),"\n",(0,s.jsxs)(e.p,{children:["\u300aTiDB \u6e90\u7801\u9605\u8bfb\u7cfb\u5217\u6587\u7ae0\uff08\u4e5d\uff09Hash Join\u300b",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"https://cn.pingcap.com/blog/tidb-source-code-reading-9",children:"https://cn.pingcap.com/blog/tidb-source-code-reading-9"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\u4e3b\u8981\u7ebf\u7a0b:\n    Main Thread\uff0c\u4e00\u4e2a\uff0c\u6267\u884c\u4e0b\u5217\u4efb\u52a1\uff1a\n        \u8bfb\u53d6\u6240\u6709\u7684 Inner \u8868\u6570\u636e\uff1b\n        \u6839\u636e Inner \u8868\u6570\u636e\u6784\u9020\u54c8\u5e0c\u8868\uff1b\n        \u542f\u52a8 Outer Fetcher \u548c Join Worker \u5f00\u59cb\u540e\u53f0\u5de5\u4f5c\uff0c\u751f\u6210 Join \u7ed3\u679c\uff0c\u5404\u4e2a goroutine \u7684\u542f\u52a8\u8fc7\u7a0b\u7531 fetchOuterAndProbeHashTable \u8fd9\u4e2a\u51fd\u6570\u5b8c\u6210\uff1b\n        \u5c06 Join Worker \u8ba1\u7b97\u51fa\u7684 Join \u7ed3\u679c\u8fd4\u56de\u7ed9 NextChunk\u63a5\u53e3\u7684\u8c03\u7528\u65b9\u6cd5\u3002\n    Outer Fetcher\uff0c\u4e00\u4e2a\uff0c\u8d1f\u8d23\u8bfb\u53d6 Outer \u8868\u7684\u6570\u636e\u5e76\u5206\u53d1\u7ed9\u5404\u4e2a Join Worker\uff1b\n    Join Worker\uff0c\u591a\u4e2a\uff0c\u8d1f\u8d23\u67e5\u54c8\u5e0c\u8868\u3001Join \u5339\u914d\u7684 Inner \u548c Outer \u8868\u7684\u6570\u636e\uff0c\u5e76\u628a\u7ed3\u679c\u4f20\u9012\u7ed9 Main Thread\u3002\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5176\u5b83",children:"\u5176\u5b83"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2a\u4f18\u5316, \u5728v6.1.5\u4e2d\u5c31\u6539\u8fdb\u4e86, build\u4e3a0\u65f6, probe\u5c31\u63d0\u524d\u4e2d\u6b62\u3002"}),"\n",(0,s.jsx)(e.p,{children:"v6.3.0 new hints \u6307\u5b9a Hash join \u7684 build && probe \u7aef\uff1a"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"HASH_JOIN_BUILD \u548c HASH_JOIN_PROBE\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6837\u53ef\u4ee5\u9009\u5b9a\u8f83\u5c0f\u7684\u8868\u4f5c\u4e3a build \u7aef\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},3610:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/hashjoin-915519af14272fbdd5d6a676d64e1fb5.jpg"},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>d});var s=i(6540);const r={},o=s.createContext(r);function t(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);