"use strict";(self.webpackChunkjitdba_site=self.webpackChunkjitdba_site||[]).push([[2464],{4613:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=i(4848),r=i(8453),o=i(6113);const s={sidebar_position:1},c="",d={id:"2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/GC,\u5408\u5e76,MVCC/\u6982\u8ff0",title:"\u6982\u8ff0",description:"/img/2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/GC,\u5408\u5e76,MVCC/\u6982\u8ff0.svg",source:"@site/docs/2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/GC,\u5408\u5e76,MVCC/\u6982\u8ff0.md",sourceDirName:"2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/GC,\u5408\u5e76,MVCC",slug:"/2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/GC,\u5408\u5e76,MVCC/\u6982\u8ff0",permalink:"/docs/2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/GC,\u5408\u5e76,MVCC/\u6982\u8ff0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tidbSidebar",previous:{title:"tikv\u4e3b\u8981\u7ec4\u4ef6",permalink:"/docs/2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/1tikv\u4e3b\u8981\u7ec4\u4ef6"},next:{title:"mvcc\u6570\u91cf\u53ca\u5f71\u54cd\u56e0\u7d20",permalink:"/docs/2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/GC,\u5408\u5e76,MVCC/mvcc\u6570\u91cf\u53ca\u5f71\u54cd\u56e0\u7d20"}},l={},a=[];function h(n){const e={br:"br",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{children:"/img/2\u5b9e\u4f8b\u7ba1\u7406\u4e0e\u4f18\u5316/2TiKV\u5b9e\u4f8b/GC,\u5408\u5e76,MVCC/\u6982\u8ff0.svg "}),"\n",(0,t.jsx)(e.h1,{id:""}),"\n",(0,t.jsxs)(e.p,{children:["TiKV\u91c7\u7528LSM\u5b58\u50a8\u7b97\u6cd5, \u6240\u4ee5\u6709",(0,t.jsx)(e.code,{children:"\u5408\u5e76"})," (compaction) \u673a\u5236\u3002",(0,t.jsx)(e.br,{}),"\n","MVCC\u662f\u6307\u8868\u4e2d\u4fdd\u7559\u7684\u65e7\u7684\u5386\u53f2\u6570\u636e, \u6bd4\u5982\u4e00\u884c\u6570\u636eupdate\u4e8610\u6b21, \u5219\u4f1a\u670910\u4e2a\u5386\u53f2\u7248\u672c\u3002",(0,t.jsx)(e.br,{}),"\n","GC\u673a\u5236\u4e0eLSM\u7b97\u6cd5\u65e0\u5173, \u662f\u81ea\u5b9a\u4e49\u7684, \u7528\u6765\u5728\u540e\u53f0\u81ea\u52a8\u56de\u6536delete\u6570\u636e\u540e\u7684\u7a7a\u95f4, \u4ee5\u53camvcc\u8001\u7248\u672c\u7684\u7a7a\u95f4\u3002",(0,t.jsx)(e.br,{}),"\n","(oracle\u6570\u636e\u5e93\u5219\u8981\u901a\u8fc7\u624b\u5de5move\u8868\u6765\u56de\u6536delete\u6570\u636e\u7a7a\u95f4)"]}),"\n",(0,t.jsx)(e.p,{children:"\u4f20\u7edf\u7684GC\u56de\u6536\u6d41\u7a0b, \u6709\u4ee5\u4e0b\u95ee\u9898"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6bcf10\u5206\u949fgc worker\u8fd0\u884c\u65f6, raft store cpu\u548c\u5176\u5b83\u8d44\u6e90\u4f1a\u660e\u663e\u4e0a\u6da8, \u7279\u522b\u662f\u5f53\u5e93\u6bd4\u8f83\u5927\u65f6\u66f4\u660e\u663e;"}),"\n",(0,t.jsx)(e.li,{children:"gc\u56de\u6536\u548crocksdb\u5408\u5e76\u90fd\u4f1a\u8bfb\u5199region, \u64cd\u4f5c\u6709\u91cd\u590d\u7684\u5730\u65b9;"}),"\n",(0,t.jsx)(e.li,{children:"\u6570\u636e\u6ca1\u6709\u9a6c\u4e0a\u6e05\u7406, \u8fd8\u4f1a\u4ee5tombstone\u72b6\u6001\u7559\u5728\u8868\u4e2d;"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u7531\u4e8e\u6700\u7ec8\u6570\u636e\u6e05\u7406\u8fd8\u662f\u9760",(0,t.jsx)(e.code,{children:"\u5408\u5e76"}),"\u64cd\u4f5c, \u56e0\u6b64v5\u5f15\u5165Compaction filter\u6765\u4f18\u5316gc\u64cd\u4f5c,\u5b83\u7684\u4f18\u7f3a\u70b9"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4f18\u70b9\u662f\u51cf\u5c11\u91cd\u590d\u64cd\u4f5c, \u8282\u7ea6\u8d44\u6e90, \u76f4\u63a5\u4ece\u78c1\u76d8\u6e05\u7406\u6570\u636e, \u6b63\u5e38gc\u6d41\u7a0b\u8fd8\u5728, \u4e0d\u8fc7\u4efb\u52a1\u5c31\u5c11\u4e86;"}),"\n",(0,t.jsx)(e.li,{children:"\u7f3a\u70b9\u662f\u5982\u679c\u7cfb\u7edfDML\u5c11\u65f6, compaction\u64cd\u4f5c\u4e5f\u5c11, \u5219\u65e7\u6570\u636e\u8fd8\u4e00\u76f4\u5728\u78c1\u76d8\u4e0a, \u5f71\u54cd\u8bfb\u8868\u7684\u6548\u7387;"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u597d\u8c61\u76d1\u63a7\u4e2dtikv compaction operation\u5c11\u4e8e10\u6b21/s, \u90fd\u5c5e\u4e8e\u5408\u5e76\u8f83\u5c11\u7684\u3002\u6b64\u65f6\u7528\u4f20\u7edfgc\u56de\u6536, \u53ef\u80fd\u6548\u679c\u66f4\u7a33\u5b9a\u4e00\u4e9b\u3002",(0,t.jsx)(e.br,{}),"\n","\u53e6\u5916\u5728v7.1\u4e4b\u540eCompaction filter\u5bf9\u4e0a\u9762\u7f3a\u70b9\u6709\u4f18\u5316, \u53ef\u4ee5\u9ed8\u8ba4\u5f00\u542f\u3002"]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},6113:(n,e,i)=>{i.d(e,{A:()=>o});var t=i(6540),r=i(4848);class o extends t.Component{componentDidMount(){$("#graph").graphviz({url:this.props.children,ready:function(){var n=this;n.nodes().click((function(){var e=$();e.push(this),e=(e=e.add(n.linkedFrom(this,!0))).add(n.linkedTo(this,!0)),n.highlight(e,!0),n.bringToFront(e)})),$(document).keydown((function(e){27==e.keyCode&&n.highlight()})),$("#graph")[0].addEventListener("click",(function(){n.highlight()}),!0)}})}render(){return(0,r.jsx)("div",{id:"graph",children:" "})}}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var t=i(6540);const r={},o=t.createContext(r);function s(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);