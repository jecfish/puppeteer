/*! For license information please see 2b86941e.538566af.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17053],{43786:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(85893),s=t(11151);const o={sidebar_label:"CLI.(constructor)"},i="CLI.(constructor)",c={id:"browsers-api/browsers.cli._constructor_",title:"CLI.(constructor)",description:"Constructs a new instance of the CLI class",source:"@site/versioned_docs/version-21.6.0/browsers-api/browsers.cli._constructor_.md",sourceDirName:"browsers-api",slug:"/browsers-api/browsers.cli._constructor_",permalink:"/browsers-api/browsers.cli._constructor_",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"CLI.(constructor)"},sidebar:"browsersApi",previous:{title:"CLI",permalink:"/browsers-api/browsers.cli"},next:{title:"CLI.run",permalink:"/browsers-api/browsers.cli.run"}},a={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"cliconstructor",children:"CLI.(constructor)"}),"\n",(0,n.jsxs)(r.p,{children:["Constructs a new instance of the ",(0,n.jsx)(r.code,{children:"CLI"})," class"]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class CLI {\n  constructor(\n    opts?:\n      | string\n      | {\n          cachePath?: string;\n          scriptName?: string;\n          prefixCommand?: {\n            cmd: string;\n            description: string;\n          };\n          allowCachePathOverride?: boolean;\n          pinnedBrowsers?: Partial<{\n            [key in Browser]: string;\n          }>;\n        },\n    rl?: readline.Interface\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"opts"}),(0,n.jsxs)(r.td,{children:["string | { cachePath?: string; scriptName?: string; prefixCommand?: { cmd: string; description: string; }; allowCachePathOverride?: boolean; pinnedBrowsers?: Partial<{ [key in ",(0,n.jsx)(r.a,{href:"/browsers-api/browsers.browser",children:"Browser"}),"]: string; }>; }"]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.em,{children:"(Optional)"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"rl"}),(0,n.jsx)(r.td,{children:"readline.Interface"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.em,{children:"(Optional)"})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,o={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:c.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>i});var n=t(67294);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);