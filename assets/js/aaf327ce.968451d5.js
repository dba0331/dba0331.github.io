"use strict";(self.webpackChunkjitdba_site=self.webpackChunkjitdba_site||[]).push([[5069],{3329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=t(4848),o=t(8453),r=t(6113);const s={sidebar_position:9,title:"\u5927\u4e8b\u52a1\u53ca\u5176\u5b83"},c="",d={id:"4SQL\u4e0e\u4f18\u5316/3\u4e8b\u52a1\u548c\u9501/9\u5927\u4e8b\u52a1\u53ca\u5176\u5b83",title:"\u5927\u4e8b\u52a1\u53ca\u5176\u5b83",description:"\u793a\u610f\u56fe",source:"@site/docs/4SQL\u4e0e\u4f18\u5316/3\u4e8b\u52a1\u548c\u9501/9\u5927\u4e8b\u52a1\u53ca\u5176\u5b83.md",sourceDirName:"4SQL\u4e0e\u4f18\u5316/3\u4e8b\u52a1\u548c\u9501",slug:"/4SQL\u4e0e\u4f18\u5316/3\u4e8b\u52a1\u548c\u9501/9\u5927\u4e8b\u52a1\u53ca\u5176\u5b83",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/3\u4e8b\u52a1\u548c\u9501/9\u5927\u4e8b\u52a1\u53ca\u5176\u5b83",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u5927\u4e8b\u52a1\u53ca\u5176\u5b83"},sidebar:"tidbSidebar",previous:{title:"\u5206\u6790\u9501\u7684\u4fe1\u606f",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/3\u4e8b\u52a1\u548c\u9501/8\u5206\u6790\u9501\u7684\u4fe1\u606f"},next:{title:"\u5e38\u89c1\u8bef\u89e3",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/3\u4e8b\u52a1\u548c\u9501/10\u5e38\u89c1\u8bef\u89e3"}},l={},a=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u5176\u5b83\u62a5\u9519\u4fe1\u606f",id:"\u5176\u5b83\u62a5\u9519\u4fe1\u606f",level:2},{value:"\u672a\u6d89\u53ca\u7684\u77e5\u8bc6\u70b9",id:"\u672a\u6d89\u53ca\u7684\u77e5\u8bc6\u70b9",level:2},{value:"\u68c0\u7d22(\u5927\u4e8b\u52a1\u53ca\u5176\u5b83)",id:"\u68c0\u7d22\u5927\u4e8b\u52a1\u53ca\u5176\u5b83",level:2}];function h(e){const n={admonition:"admonition",blockquote:"blockquote",br:"br",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u793a\u610f\u56fe"}),"\n","\n",(0,i.jsx)(r.A,{children:"/img/4SQL\u4e0e\u4f18\u5316/3\u4e8b\u52a1\u548c\u9501/\u5927\u4e8b\u52a1\u53ca\u5176\u5b83.svg"}),"\n",(0,i.jsx)(n.h1,{id:""}),"\n",(0,i.jsx)(n.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5176\u5b83oracle/mysql\u6570\u636e\u5e93\u4e2d, \u7531\u4e8e\u6709undo\u6a21\u5757, \u4ee5\u53ca\u4fee\u6539\u7684\u6570\u636e\u5148\u5199\u76d8\u7684\u673a\u5236, \u810f\u6570\u636e\u4e0d\u9700\u8981\u4fdd\u5b58\u5728\u4f1a\u8bdd\u5185\u5b58\u6216\u6570\u636e\u5e93\u7f13\u5b58\u4e2d, \u4e8b\u52a1\u5927\u5c0f\u4e00\u822c\u4e0d\u53d7\u9650\u5236\uff08\u4e0d\u80fd\u8d85\u51faundo\u8868\u7a7a\u95f4\u5927\u5c0f\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728tidb\u4e2d, \u4e8b\u52a1\u4fee\u6539\u7684\u6570\u636e\u8981\u5148\u5b58\u50a8\u5728\u4f1a\u8bdd\u7684\u672c\u5730\u5185\u5b58\u4e2d, \u7b49\u4e8b\u52a1\u63d0\u4ea4\u65f6, \u624d\u4e00\u6b21\u6027\u5199\u5165\u78c1\u76d8, \u56e0\u6b64\u5bf9\u4e8b\u52a1\u5927\u5c0f\u6709\u9650\u5236\uff08\u76ee\u524d\u662f\u8fd9\u6837\uff09, \u5426\u5219\u4e8b\u52a1\u8fc7\u5927\u53ef\u80fd\u6709\u5404\u79cd\u5404\u6837\u7684\u62a5\u9519\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5176\u5b83\u62a5\u9519\u4fe1\u606f",children:"\u5176\u5b83\u62a5\u9519\u4fe1\u606f"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u5982\u679c\u5927\u7684\u4e50\u89c2\u4e8b\u52a1\u5728prewrite\u4e0a\u9501\u65f6\u51fa\u73b0\u5199\u5199\u51b2\u7a81, \u4f1a\u5728tidb\u65e5\u5fd7\u4e2d\u5199\u5927\u91cf\u7684\u65e5\u5fd7(\u51b2\u7a81\u7684\u6bcf\u4e00\u884c, \u90fd\u4f1a\u6253\u5370\u4e00\u6761\u65e5\u5fd7)",(0,i.jsx)(n.br,{}),"\n",'["prewrite encounters lock"] [session=xxx] [lock="key: 748000001]',(0,i.jsx)(n.br,{}),"\n",'["prewrite encounters lock"] [session=xxx] [lock="key: 748000002]',(0,i.jsx)(n.br,{}),"\n",'["prewrite encounters lock"] [session=xxx] [lock="key: 748000003]',(0,i.jsx)(n.br,{}),"\n","..."]})}),"\n",(0,i.jsx)(n.p,{children:"gc\u4e5f\u6709\u4e0eresolve lock\u76f8\u5173\u7684\u65e5\u5fd7, \u8fd9\u4e2a\u597d\u8c61\u6ca1\u4ec0\u4e48\u95ee\u9898"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'[gc_worker.go:1025]["[gc worker] resolve locks failed"] [uuid=...][safePoint=43655xxxx][error="context canceled"]'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u60b2\u89c2\u4e8b\u52a1\u8bfb\u53d6\u6570\u636e\u65f6\u9047\u5230\u9501, \u5982\u679c\u7cfb\u7edf\u5f02\u5e38\u65f6 tidb \u53ef\u80fd\u6709\u65e5\u5fd7"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'[command dispatched failed]...[sql="select ..."][err="[tikv:9004]Resolve lock timeout]'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u672a\u6d89\u53ca\u7684\u77e5\u8bc6\u70b9",children:"\u672a\u6d89\u53ca\u7684\u77e5\u8bc6\u70b9"}),"\n",(0,i.jsx)(n.p,{children:"resolve ts\u7684\u4f5c\u7528\u548c\u673a\u5236, \u76ee\u524d\u53ea\u662f\u77e5\u9053\u6709\u8fd9\u4e48\u4e2a\u4e1c\u897f, \u4ee5\u540e\u518d\u8865\u5145\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u68c0\u7d22\u5927\u4e8b\u52a1\u53ca\u5176\u5b83",children:"\u68c0\u7d22(\u5927\u4e8b\u52a1\u53ca\u5176\u5b83)"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"used by local search"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"\u80fd\u5426\u4f30\u7b97\u4e8b\u52a1\u7684\u5927\u5c0f? delete\u53ea\u8bb0\u5f55key,\u5927\u5c0f\u76f8\u5bf9\u597d\u4f30\u7b97,insert/update\u8981\u8bb0\u5f55kv,\u5927\u5c0f\u548c\u5b57\u6bb5\u6570\u91cf\u6709\u5173,\u8868\u4e0a\u7684\u7d22\u5f15\u6570\u91cf,\u5f71\u54cd\u4e8b\u52a1\u5927\u5c0f,\u5927\u8868\u590d\u5236,\u6570\u636e\u88c5\u8f7d,\n\u600e\u4e48\u5212\u5206\u6279\u6b21,\u6279\u91cfDML,\u5982\u6e05\u7406\u6570\u636e,\u4e1a\u52a1\u8dd1\u6279,\u5176\u5b83\u6279\u5904\u7406,\u4e8b\u52a1\u5927\u5c0f,\u8d85\u51fa\u9650\u5236,\u6545\u969c\u5206\u6790,\n\u4e8b\u52a1\u4e3a\u4ec0\u4e48\u5927,sql\u62a5\u9519out of memroy quota,binlog\u5f88\u5927,grpc\u4e0a\u96502G,\u96be\u4ee5\u4f30\u7b97,\u957f\u65f6\u95f4\u672a\u5173\u95ed\u7684\u4e8b\u52a1,\u53ef\u80fd\u963b\u6b62gc safepoint\u63a8\u8fdb,\n\u53ef\u80fd\u963b\u585e\u5176\u5b83DDL\u64cd\u4f5c,resolved-ts\u7684,lock heap size\u589e\u5927,tikv OOM,\n\u5927\u4e8b\u52a1,\u4e0d\u65ad\u91cd\u542f"})})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6113:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(6540),o=t(4848);class r extends i.Component{componentDidMount(){$("#graph").graphviz({url:this.props.children,ready:function(){var e=this;e.nodes().click((function(){var n=$();n.push(this),n=(n=n.add(e.linkedFrom(this,!0))).add(e.linkedTo(this,!0)),e.highlight(n,!0),e.bringToFront(n)})),$(document).keydown((function(n){27==n.keyCode&&e.highlight()})),$("#graph")[0].addEventListener("click",(function(){e.highlight()}),!0)}})}render(){return(0,o.jsx)("div",{id:"graph",children:" "})}}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);