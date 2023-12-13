/*! For license information please see 7784063e.1b8edac3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38612],{92545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var a=r(85893),n=r(11151);const d={sidebar_label:"Frame.addStyleTag"},s="Frame.addStyleTag() method",l={id:"api/puppeteer.frame.addstyletag",title:"Frame.addStyleTag() method",description:"Adds a HTMLStyleElement into the frame with the desired URL",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.frame.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addstyletag",permalink:"/api/puppeteer.frame.addstyletag",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"Frame.addStyleTag"},sidebar:"api",previous:{title:"Frame.addScriptTag",permalink:"/api/puppeteer.frame.addscripttag"},next:{title:"Frame.addStyleTag_1",permalink:"/api/puppeteer.frame.addstyletag_1"}},i={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"frameaddstyletag-method",children:"Frame.addStyleTag() method"}),"\n",(0,a.jsxs)(t.p,{children:["Adds a ",(0,a.jsx)(t.code,{children:"HTMLStyleElement"})," into the frame with the desired URL"]}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  addStyleTag(\n    options: Omit<FrameAddStyleTagOptions, 'url'>\n  ): Promise<ElementHandle<HTMLStyleElement>>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"options"}),(0,a.jsxs)(t.td,{children:["Omit<",(0,a.jsx)(t.a,{href:"/api/puppeteer.frameaddstyletagoptions",children:"FrameAddStyleTagOptions"}),", 'url'>"]}),(0,a.jsx)(t.td,{})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLStyleElement>>"]}),"\n",(0,a.jsxs)(t.p,{children:["An ",(0,a.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the loaded ",(0,a.jsx)(t.code,{children:"<style>"})," element."]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var a,d={},o=null,p=null;for(a in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,a)&&!i.hasOwnProperty(a)&&(d[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===d[a]&&(d[a]=t[a]);return{$$typeof:n,type:e,key:o,ref:p,props:d,_owner:l.current}}t.Fragment=d,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var a=r(67294);const n={},d=a.createContext(n);function s(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);