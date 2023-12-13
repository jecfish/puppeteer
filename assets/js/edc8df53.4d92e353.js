/*! For license information please see edc8df53.4d92e353.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88218],{58930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(85893),a=r(11151);const o={sidebar_label:"BrowserContext.waitForTarget"},s="BrowserContext.waitForTarget() method",i={id:"api/puppeteer.browsercontext.waitfortarget",title:"BrowserContext.waitForTarget() method",description:"Waits until a target matching the given predicate appears and returns it.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.browsercontext.waitfortarget.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.waitfortarget",permalink:"/api/puppeteer.browsercontext.waitfortarget",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"BrowserContext.waitForTarget"},sidebar:"api",previous:{title:"BrowserContext.targets",permalink:"/api/puppeteer.browsercontext.targets"},next:{title:"Page",permalink:"/api/puppeteer.page"}},p={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"browsercontextwaitfortarget-method",children:"BrowserContext.waitForTarget() method"}),"\n",(0,n.jsxs)(t.p,{children:["Waits until a ",(0,n.jsx)(t.a,{href:"/api/puppeteer.target",children:"target"})," matching the given ",(0,n.jsx)(t.code,{children:"predicate"})," appears and returns it."]}),"\n",(0,n.jsxs)(t.p,{children:["This will look all open ",(0,n.jsx)(t.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract waitForTarget(\n    predicate: (x: Target) => boolean | Promise<boolean>,\n    options?: WaitForTargetOptions\n  ): Promise<Target>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"predicate"}),(0,n.jsxs)(t.td,{children:["(x: ",(0,n.jsx)(t.a,{href:"/api/puppeteer.target",children:"Target"}),") => boolean | Promise<boolean>"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.waitfortargetoptions",children:"WaitForTargetOptions"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"(Optional)"})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/api/puppeteer.target",children:"Target"}),">"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["Finding a target for a page opened via ",(0,n.jsx)(t.code,{children:"window.open"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browserContext.waitForTarget(\n  target => target.url() === 'https://www.example.com/'\n);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!p.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var n=r(67294);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);