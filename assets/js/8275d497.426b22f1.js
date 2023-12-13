/*! For license information please see 8275d497.426b22f1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7110],{44344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(85893),n=r(11151);const a={sidebar_label:"Target"},d="Target class",i={id:"api/puppeteer.target",title:"Target class",description:"Target represents a CDP target. In CDP a target is something that can be debugged such a frame, a page or a worker.",source:"@site/../docs/api/puppeteer.target.md",sourceDirName:"api",slug:"/api/puppeteer.target",permalink:"/next/api/puppeteer.target",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Target"},sidebar:"api",previous:{title:"SecurityDetails.validTo",permalink:"/next/api/puppeteer.securitydetails.validto"},next:{title:"Target.browser",permalink:"/next/api/puppeteer.target.browser"}},o={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"target-class",children:"Target class"}),"\n",(0,s.jsxs)(t.p,{children:["Target represents a ",(0,s.jsx)(t.a,{href:"https://chromedevtools.github.io/devtools-protocol/tot/Target/",children:"CDP target"}),". In CDP a target is something that can be debugged such a frame, a page or a worker."]}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Target\n"})}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(t.code,{children:"Target"})," class."]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Modifiers"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.target.browser",children:"browser()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Get the browser the target belongs to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.target.browsercontext",children:"browserContext()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Get the browser context the target belongs to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.target.createcdpsession",children:"createCDPSession()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Creates a Chrome Devtools Protocol session attached to the target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.target.opener",children:"opener()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Get the target that opened this target. Top-level targets return ",(0,s.jsx)("code",{children:"null"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.target.page",children:"page()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["If the target is not of type ",(0,s.jsx)("code",{children:'"page"'}),", ",(0,s.jsx)("code",{children:'"webview"'})," or ",(0,s.jsx)("code",{children:'"background_page"'}),", returns ",(0,s.jsx)("code",{children:"null"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.target.type",children:"type()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Identifies what kind of target this is."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.target.url",children:"url()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.target.worker",children:"worker()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["If the target is not of type ",(0,s.jsx)("code",{children:'"service_worker"'})," or ",(0,s.jsx)("code",{children:'"shared_worker"'}),", returns ",(0,s.jsx)("code",{children:"null"}),"."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var s,a={},c=null,l=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)d.call(t,s)&&!o.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>d});var s=r(67294);const n={},a=s.createContext(n);function d(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);