"use strict";(self.webpackChunkjitdba_site=self.webpackChunkjitdba_site||[]).push([[5835],{5535:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=i(4848),s=i(8453);const d={sidebar_position:6,sidebar_class_name:"my_nop_item"},o="",r={id:"4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-IndexJoin",title:"\u8ba1\u5212-IndexJoin",description:"\u548cindexHashJoin\u7684\u533a\u522b",source:"@site/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-IndexJoin.md",sourceDirName:"4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212",slug:"/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-IndexJoin",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-IndexJoin",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_class_name:"my_nop_item"},sidebar:"tidbSidebar",previous:{title:"\u8ba1\u5212-IndexHashJoin",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-IndexHashJoin"},next:{title:"\u8ba1\u5212-UnionScan",permalink:"/docs/4SQL\u4e0e\u4f18\u5316/1\u6267\u884c\u8ba1\u5212/\u8ba1\u5212-UnionScan"}},a={},l=[{value:"hash\u7684\u95ee\u9898",id:"hash\u7684\u95ee\u9898",level:2},{value:"\u5e38\u89c1\u7684\u89e3\u8bfb",id:"\u5e38\u89c1\u7684\u89e3\u8bfb",level:2},{value:"hint\u7528\u6cd5",id:"hint\u7528\u6cd5",level:2},{value:"v616\u4e2destRows\u4f30\u7b97\u504f\u5927 (\u5bfc\u81f4\u8d70\u4e86hashjoin?)",id:"v616\u4e2destrows\u4f30\u7b97\u504f\u5927-\u5bfc\u81f4\u8d70\u4e86hashjoin",level:2},{value:"\u5bf9inl\u53cabuild/probe\u7684\u89e3\u8bfb",id:"\u5bf9inl\u53cabuildprobe\u7684\u89e3\u8bfb",level:2}];function c(n){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:""}),"\n",(0,t.jsx)(e.p,{children:"\u548cindexHashJoin\u7684\u533a\u522b"}),"\n",(0,t.jsx)(e.p,{children:"IndexHashJoin \u5168\u79f0\u662f Index Nested Loop Hash Join\uff0c\u4e0e Index Nested Loop Join \u7684\u4f7f\u7528\u6761\u4ef6\u5b8c\u5168\u4e00\u6837\uff0c\u4e24\u8005\u7684\u533a\u522b\u662f"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"IndexJoin\u4f1a\u5728\u8fde\u63a5\u7684\u5185\u8868\u4e0a\u5efa\u54c8\u5e0c\u8868\uff0c\u5bf9\u4e8e\u5185\u5b58\u7684\u4f7f\u7528\u662f\u6709\u56fa\u5b9a\u4e0a\u9650\u7684\uff0c"}),"\n",(0,t.jsx)(e.li,{children:"IndexHashJoin\u4f1a\u5728\u8fde\u63a5\u7684\u5916\u8868\u4e0a\u5efa\u54c8\u5e0c\u8868\uff0c\u4f7f\u7528\u7684\u5185\u5b58\u4f7f\u7528\u53d6\u51b3\u4e8e\u5185\u8868\u5339\u914d\u5230\u7684\u884c\u6570\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"hash\u7684\u95ee\u9898",children:"hash\u7684\u95ee\u9898"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd8\u662f\u6ca1\u770b\u61c2, inl\u5728\u5185\u8868\u4e0a\u5efa\u54c8\u5e0c\u8868?\n\u4e00\u822c\u662f\u5c0f\u8868\u9a71\u52a8\u5927\u8868, \u5927\u8868\u5efahash, \u4e0d\u662f\u4ee3\u4ef7\u66f4\u5927?\n\u53e6\u5916\uff0c\u5efahash\u7684\u76ee\u7684\u662f\u4ec0\u4e48"}),"\n",(0,t.jsx)(e.h2,{id:"\u5e38\u89c1\u7684\u89e3\u8bfb",children:"\u5e38\u89c1\u7684\u89e3\u8bfb"}),"\n",(0,t.jsx)(e.p,{children:"\u5148\u4e0d\u8bf4hash\u95ee\u9898\uff0c\u770b\u4e00\u4e2a\u6700\u5e38\u89c1\u7684 A IndexJoin B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"IndexJoin                                  inner join, inner:IndexReader_3, outkey:A.id, innkey:B\n    TableReadder\n        TableFullScan    table:A \u5c0f\u8868\n    IndexReader_3(Probe)\n        IndexRangeScan_4 table:B \u5927\u8868,\u7d22\u5f15  range:decided by [eq(A.id, B.id)] \u7d22\u5f15\u8fc7\u6ee4\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u91ccA\uff08\u5916\u8868\uff09\u53d6\u4e00\u6761\u8bb0\u5f55\uff0c\u53bb\u7d22\u5f15\u8bbf\u95eeB, \u6240\u4ee5Build\u4e0d\u4e00\u5b9a\u5c31\u662f\u5185\u8868"}),"\n",(0,t.jsx)(e.p,{children:"\u6362\u6210IndexHashJoin\uff0c\u4e0a\u9762\u6267\u884c\u7684\u8fc7\u7a0b\u4e5f\u4e00\u6837\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"hint\u7528\u6cd5",children:"hint\u7528\u6cd5"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6ce8\u610f, inl_join(t1, t3) \u5728t1,t2,t3\u65f6\u4e0d\u4e00\u5b9a\u751f\u6548, \u8981leading(t1,t3) inl_join(t1, t3)"}),(0,t.jsx)(e.br,{}),"\n","(\u597d\u8c61leading\u5728\u5f88\u591a\u5730\u65b9\u90fd\u4e0d\u751f\u6548?)"]}),"\n",(0,t.jsx)(e.h2,{id:"v616\u4e2destrows\u4f30\u7b97\u504f\u5927-\u5bfc\u81f4\u8d70\u4e86hashjoin",children:"v616\u4e2destRows\u4f30\u7b97\u504f\u5927 (\u5bfc\u81f4\u8d70\u4e86hashjoin?)"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728 v6.1.6 \u7248\u672c index join \u7684 inner \u7aef estRows \u4f30\u7b97\u504f\u5dee\u8f83\u5927\u4e5f\u662f\u5df2\u77e5\u95ee\u9898",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"https://github.com/pingcap/tidb/issues/44802",children:"https://github.com/pingcap/tidb/issues/44802"}),(0,t.jsx)(e.br,{}),"\n","\u5728\u9ad8\u7248\u672c\u5df2\u7ecf\u4fee\u590d\uff0c\u53ef\u4ee5\u901a\u8fc7 set @@tidb_opt_fix_control = '44855",":ON","';"]}),"\n",(0,t.jsxs)(e.p,{children:["v6.1.5 \u7248\u672c\uff0c\u6267\u884c\u8ba1\u5212\u5728 indexjoin \u548c hashjoin \u9009\u62e9\u4e0a\u7684\u5dee\u5f02\u5bfc\u81f4\u6267\u884c\u65f6\u95f4\u76f8\u5dee\u51e0\u767e\u500d\u3002hint \u5f3a\u5236\u8d70 indexjoin \u540e\u6548\u679c\u7b26\u5408\u9884\u671f\u3002\n\u5ba2\u6237\u6709\u51e0\u4e07\u4e2a\u76f8\u4f3c\u7684\u6162 SQL \uff0c\u90fd\u505a hint \u5de5\u4f5c\u91cf\u5de8\u5927\uff0c\u4f46\u662f\u67e5\u8be2\u6761\u4ef6\u5dee\u5f02\u4e5f\u65e0\u6cd5\u505a binding.",(0,t.jsx)(e.br,{}),"\n","\u5728 v6.5.2 \u7248\u672c\u4e0a\u6d4b\u8bd5\uff0c\u5f00\u542f tidb_cost_model_version = 2 \u540e\uff0c\u7565\u6709\u6240\u6539\u5584\uff0c\u4f46\u8fd8\u662f\u6709\u5927\u90e8\u5206\u4e0d\u80fd\u9009\u62e9\u6b63\u786e\u7684\u6267\u884c\u8ba1\u5212"]}),"\n",(0,t.jsx)(e.h2,{id:"\u5bf9inl\u53cabuildprobe\u7684\u89e3\u8bfb",children:"\u5bf9inl\u53cabuild/probe\u7684\u89e3\u8bfb"}),"\n",(0,t.jsxs)(e.p,{children:["(1) inner\u8fde\u63a5",(0,t.jsx)(e.br,{}),"\n","\u5982\u679cta join tb, \u5219inl_join(x)\u4e2d\u53ef\u4efb\u610f",(0,t.jsx)(e.br,{}),"\n","\u6bd4\u5982inl(b), \u5219ta\u4e2d\u6bcf\u4e00\u6761\u53bb\u67e5tb: index range decide by eq(ta.id, tb.id)"]}),"\n",(0,t.jsx)(e.p,{children:"(2) outer\u8fde\u63a5, \u4e00\u822c hashjoin, \u8fd9\u91cc\u6539\u4e3ainl"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select /*+ inl_join(tb) */ ta.* from ta \nleft join tb\n    on ta.id = tb.id  and tb.name = tb.name\n\nIndexJoin                                   left outer join, inner:IndexLookUp10, outer key:ta.id, \n    TableReader (build)   \u5916\u8868\n        TableFullScan           ta\n    IndexLookUp10 (probe) \u5185\u8868\n        Selection                           not(isnull(tb.id))\n            IndexRangeScan      tb,idx_tb   range: decided by **eq(tb.id, ta.id)**\n        Selection                           not(isnull(tb.name))\n            TableRowIDScan      tb\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa, \u6bcf\u6b21 \u5185\u8868 IndexLookUp10 (probe)\u7684\u8fc7\u6ee4\u53c2\u6570\u662f\u4ece build\u4e2d\u53d6\u5f97\u7684 ta.id"}),"\n",(0,t.jsxs)(e.p,{children:["(3) outer\u8fde\u63a5, \u6307\u5b9a\u5916\u8868\u4e3ainl, \u5728\u903b\u8f91\u4e0a\u65e0\u610f\u4e49",(0,t.jsx)(e.br,{}),"\n","inl_join(ta)  ta left join tb",(0,t.jsx)(e.br,{}),"\n","probe ta\u65f6\u7531tb.id\u4f20\u5165\u6761\u4ef6? \u903b\u8f91\u4e0a\u53ea\u80fd\u7528ta.id\u53bb\u67e5tb.id\u662f\u5426\u5b58\u5728\n\u4e5f\u5c31\u662fouter join\u65f6, \u5185\u8868\u662f\u56fa\u5b9a\u7684"]}),"\n",(0,t.jsx)(e.p,{children:"(4) outer\u8fde\u63a5\u4f46\u7b49\u4ef7\u4e8einner\u7684\u60c5\u51b5, \u53ef\u4ee5\u7528inl"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"ta left join tb\n    on ta.id = tb.id\n    and tb.name='xxx'  --\u8fd8\u662f\u53f3\u8868\n\nta left join tb\n    on ta.id = tb.id\nwhere tb.name='xxx'  --\u542b\u4e49\u53d8\u4e86, \u7b49\u540c inner join\n"})}),"\n",(0,t.jsx)(e.p,{children:"(5) semi join"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select  ta.* from ta where exists(select  1 from tb where ta.id = tb.id)\n\u9ed8\u8ba4\u662fHashJoin, \u901f\u5ea6\u633a\u5feb\n\nselect /*+ inl_join(tb@q2) */ ta.* from ta where exists(select /*+ QB_NAME(q2) */ 1 from tb where ta.id = tb.id)\n\nIndexJoin                   semi join, inner:IndexReader(tb idx by ta.id), outer key:ta.id\n    TableReader build (ta)\n    IndexReader probe (tb)\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e2a\u6548\u679c\uff0c\u548cno_decorrelate\u5e26\u6765\u7684Apply(tb loop\u4f1a\u53d8\u591a, \u65f6\u95f4\u4e5f\u6162\u4e00\u4e9b), \u8fd8\u662f\u6709\u4e00\u4e9b\u533a\u522b"})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>r});var t=i(6540);const s={},d=t.createContext(s);function o(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);