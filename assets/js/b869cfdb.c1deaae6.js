/*! For license information please see b869cfdb.c1deaae6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48492],{71979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(85893),s=n(11151);const i={sidebar_label:"Frame.setContent"},o="Frame.setContent() method",a={id:"api/puppeteer.frame.setcontent",title:"Frame.setContent() method",description:"Set the content of the frame.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.frame.setcontent.md",sourceDirName:"api",slug:"/api/puppeteer.frame.setcontent",permalink:"/api/puppeteer.frame.setcontent",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"Frame.setContent"},sidebar:"api",previous:{title:"Frame.select",permalink:"/api/puppeteer.frame.select"},next:{title:"Frame.tap",permalink:"/api/puppeteer.frame.tap"}},p={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"framesetcontent-method",children:"Frame.setContent() method"}),"\n",(0,r.jsx)(t.p,{children:"Set the content of the frame."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  abstract setContent(\n    html: string,\n    options?: {\n      timeout?: number;\n      waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];\n    }\n  ): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"html"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"HTML markup to assign to the page."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsxs)(t.td,{children:["{ timeout?: number; waitUntil?: ",(0,r.jsx)(t.a,{href:"/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"})," | ",(0,r.jsx)(t.a,{href:"/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"}),"[]; }"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Options to configure how long before timing out and at what point to consider the content setting successful."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!p.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);