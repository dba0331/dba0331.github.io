"use strict";(self.webpackChunkjitdba_site=self.webpackChunkjitdba_site||[]).push([[6770],{2141:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=i(4848),s=i(8453),o=i(6113);const r={sidebar_position:1,title:"sql\u6267\u884c\u6982\u89c8"},l=void 0,d={id:"4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/1sql\u6267\u884c\u6982\u89c8",title:"sql\u6267\u884c\u6982\u89c8",description:"\u793a\u610f\u56fe",source:"@site/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/1sql\u6267\u884c\u6982\u89c8.md",sourceDirName:"4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212",slug:"/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/1sql\u6267\u884c\u6982\u89c8",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/1sql\u6267\u884c\u6982\u89c8",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"sql\u6267\u884c\u6982\u89c8"},sidebar:"tidbSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/3\u8868\u548c\u5bf9\u8c61\u7ba1\u7406/DDL\u8bed\u53e5/\u6982\u8ff0"},next:{title:"\u6982\u8ff0",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/2plan\u53cainfo\u89e3\u8bfb/\u6982\u8ff0"}},c={},a=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u68c0\u7d22\u7528\u8bcd(sql\u6267\u884c\u6982\u89c8)",id:"\u68c0\u7d22\u7528\u8bcdsql\u6267\u884c\u6982\u89c8",level:2}];function h(n){const e={h2:"h2",p:"p",...(0,s.R)(),...n.components},{Details:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"\u793a\u610f\u56fe"}),"\n","\n",(0,t.jsx)(o.A,{children:"/img/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/1sql\u6267\u884c\u6982\u89c8.svg"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"...\u5f85\u7eed"}),"\n",(0,t.jsx)(e.h2,{id:"\u68c0\u7d22\u7528\u8bcdsql\u6267\u884c\u6982\u89c8",children:"\u68c0\u7d22\u7528\u8bcd(sql\u6267\u884c\u6982\u89c8)"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"used by local search"}),(0,t.jsx)("div",{children:(0,t.jsx)(e.p,{children:"\u7edf\u8ba1\u4fe1\u606f\u4e0d\u51c6 -> sql\u8ba1\u5212\u5dee , sql\u8ba1\u5212\u5dee -> sql\u6267\u884c\u6162 , tikv\u914d\u7f6e\u4e0d\u8db3 -> apply pool cpu\u9ad8 , apply pool cpu\u9ad8 -> grpc\u7528\u65f6\u9ad8 , grpc\u7528\u65f6\u9ad8 -> sql\u6267\u884c\u6162 , \u5927\u8868\u5168\u8868\u626b\u63cf -> sql\u6267\u884c\u6162 , \u5927\u8868\u5168\u8868\u626b\u63cf -> \u7f51\u7edc\u5ef6\u8fdf\u9ad8 , \u7f51\u7edc\u5ef6\u8fdf\u9ad8 -> grpc\u7528\u65f6\u9ad8 , sql\u8ba1\u5212 -> \u4f18\u5316\u5668\u5df2\u77e5\u4e0d\u8db3 , sql\u8ba1\u5212 -> \u8868\u5173\u8054 , sql\u8ba1\u5212 -> \u6307\u5b9ahint , \u4f18\u5316\u5668\u5df2\u77e5\u4e0d\u8db3 -> \u8c13\u8bcd\u6761\u4ef6\u4e0d\u4f20\u64ad , \u4f18\u5316\u5668\u5df2\u77e5\u4e0d\u8db3 -> \u9ad8\u4f30\u5185\u8868\u6761\u6570 , \u9ad8\u4f30\u5185\u8868\u6761\u6570 -> HashJoin , HashJoin -> \u5927\u8868\u5168\u8868\u626b\u63cf , \u8868\u5173\u8054 -> HashJoin , \u8868\u5173\u8054 -> Apply\u6807\u91cf\u5b50\u67e5\u8be2 , \u8868\u5173\u8054 -> IndexJoin , \u8868\u5173\u8054 -> \u4e0d\u80fdIndexJoin , \u6307\u5b9ahint -> \u8868\u5173\u8054\u7684hint , Apply\u6807\u91cf\u5b50\u67e5\u8be2 -> \u5916\u8868\u8bb0\u5f55\u591a , Apply\u6807\u91cf\u5b50\u67e5\u8be2 -> \u5916\u8868\u8bb0\u5f55\u5c11 , IndexJoin -> \u5916\u8868\u8bb0\u5f55\u591a , IndexJoin -> \u5916\u8868\u8bb0\u5f55\u5c11 , \u4e0d\u80fdIndexJoin -> HashJoin , \u5916\u8868\u8bb0\u5f55\u591a -> sql\u6267\u884c\u6162 , \u5916\u8868\u8bb0\u5f55\u5c11 -> sql\u6267\u884c\u6b63\u5e38 , sql\u8c03\u6574 -> \u6307\u5b9ahint , sql\u8c03\u6574 -> \u624b\u5de5\u6539\u5199 , sql\u8c03\u6574 -> \u7ed1\u5b9aplan , \u8868\u5173\u8054\u7684hint -> \u63d0\u793ainl_join , \u8868\u5173\u8054\u7684hint -> \u63d0\u793ahash_join , \u63d0\u793ainl_join -> IndexJoin , \u63d0\u793ainl_join -> \u4e0d\u80fdIndexJoin , \u63d0\u793ahash_join -> HashJoin , \u5916\u8868\u5927\u65f6HashJoin -> sql\u6267\u884c\u6b63\u5e38 , \u5916\u8868\u662f\u5927\u8868 -> HashJoin , \u5916\u8868\u662f\u5927\u8868 -> \u63d0\u793a\\nsemi_join_rewrite , \u5916\u8868\u662f\u5c0f\u8868 -> IndexJoin , \u63d0\u793asemi_join_rewrite -> IndexJoin ,"})})]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},6113:(n,e,i)=>{i.d(e,{A:()=>o});var t=i(6540),s=i(4848);class o extends t.Component{componentDidMount(){$("#graph").graphviz({url:this.props.children,ready:function(){var n=this;n.nodes().click((function(){var e=$();e.push(this),e=(e=e.add(n.linkedFrom(this,!0))).add(n.linkedTo(this,!0)),n.highlight(e,!0),n.bringToFront(e)})),$(document).keydown((function(e){27==e.keyCode&&n.highlight()})),$("#graph")[0].addEventListener("click",(function(){n.highlight()}),!0)}})}render(){return(0,s.jsx)("div",{id:"graph",children:" "})}}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var t=i(6540);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);