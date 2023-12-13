/*! For license information please see bda4ff2c.9db0b0ac.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19144],{54911:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(85893),n=t(11151);const i={sidebar_label:"Page.waitForFrame"},s="Page.waitForFrame() method",o={id:"api/puppeteer.page.waitforframe",title:"Page.waitForFrame() method",description:"Waits for a frame matching the given conditions to appear.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.page.waitforframe.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforframe",permalink:"/api/puppeteer.page.waitforframe",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"Page.waitForFrame"},sidebar:"api",previous:{title:"Page.waitForFileChooser",permalink:"/api/puppeteer.page.waitforfilechooser"},next:{title:"Page.waitForFunction",permalink:"/api/puppeteer.page.waitforfunction"}},p={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"pagewaitforframe-method",children:"Page.waitForFrame() method"}),"\n",(0,a.jsx)(r.p,{children:"Waits for a frame matching the given conditions to appear."}),"\n",(0,a.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  waitForFrame(\n    urlOrPredicate: string | ((frame: Frame) => Awaitable<boolean>),\n    options?: WaitTimeoutOptions\n  ): Promise<Frame>;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Parameter"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"urlOrPredicate"}),(0,a.jsxs)(r.td,{children:["string | ((frame: ",(0,a.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"}),") => ",(0,a.jsx)(r.a,{href:"/api/puppeteer.awaitable",children:"Awaitable"}),"<boolean>)"]}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"options"}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.em,{children:"(Optional)"})})]})]})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:["Promise<",(0,a.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"}),">"]}),"\n",(0,a.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"const frame = await page.waitForFrame(async frame => {\n  return frame.name() === 'Test';\n});\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var a=t(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var a,i={},l=null,c=null;for(a in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,a)&&!p.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:n,type:e,key:l,ref:c,props:i,_owner:o.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var a=t(67294);const n={},i=a.createContext(n);function s(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);