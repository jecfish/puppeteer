/*! For license information please see 39da4fcb.c32f7054.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[439],{8867:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=n(85893),i=n(11151);const d={sidebar_label:"Configuration"},s="Configuration interface",o={id:"api/puppeteer.configuration",title:"Configuration interface",description:"Defines options to configure Puppeteer's behavior during installation and runtime.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.configuration.md",sourceDirName:"api",slug:"/api/puppeteer.configuration",permalink:"/api/puppeteer.configuration",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"Configuration"},sidebar:"api",previous:{title:"CommonEventEmitter.removeListener",permalink:"/api/puppeteer.commoneventemitter.removelistener"},next:{title:"connect",permalink:"/api/puppeteer.connect"}},c={},l=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"configuration-interface",children:"Configuration interface"}),"\n",(0,t.jsx)(r.p,{children:"Defines options to configure Puppeteer's behavior during installation and runtime."}),"\n",(0,t.jsx)(r.p,{children:"See individual properties for more information."}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export interface Configuration\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"browserRevision"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)("p",{children:"Specifies a certain version of the browser you'd like Puppeteer to use."}),(0,t.jsxs)("p",{children:["Can be overridden by ",(0,t.jsx)("code",{children:"PUPPETEER_BROWSER_REVISION"}),"."]}),(0,t.jsxs)("p",{children:["See ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"})," on how executable path is inferred."]})]}),(0,t.jsx)(r.td,{children:"A compatible-revision of the browser."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cacheDirectory"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)("p",{children:"Defines the directory to be used by Puppeteer for caching."}),(0,t.jsxs)("p",{children:["Can be overridden by ",(0,t.jsx)("code",{children:"PUPPETEER_CACHE_DIR"}),"."]})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"path.join(os.homedir(), '.cache', 'puppeteer')"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"defaultProduct"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.product",children:"Product"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)("p",{children:"Specifies which browser you'd like Puppeteer to use."}),(0,t.jsxs)("p",{children:["Can be overridden by ",(0,t.jsx)("code",{children:"PUPPETEER_PRODUCT"}),"."]})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"chrome"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"downloadBaseUrl"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)("p",{children:"Specifies the URL prefix that is used to download the browser."}),(0,t.jsxs)("p",{children:["Can be overridden by ",(0,t.jsx)("code",{children:"PUPPETEER_DOWNLOAD_BASE_URL"}),"."]})]}),(0,t.jsxs)(r.td,{children:["Either ",(0,t.jsx)(r.a,{href:"https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing",children:"https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing"})," or ",(0,t.jsx)(r.a,{href:"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central",children:"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central"}),", depending on the product."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"downloadPath"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)("p",{children:"Specifies the path for the downloads folder."}),(0,t.jsxs)("p",{children:["Can be overridden by ",(0,t.jsx)("code",{children:"PUPPETEER_DOWNLOAD_PATH"}),"."]})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"<cacheDirectory>"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"executablePath"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Specifies an executable path to be used in ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"}),"."]}),(0,t.jsxs)("p",{children:["Can be overridden by ",(0,t.jsx)("code",{children:"PUPPETEER_EXECUTABLE_PATH"}),"."]})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Auto-computed."})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"experiments"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.experimentsconfiguration",children:"ExperimentsConfiguration"})}),(0,t.jsx)(r.td,{children:"Defines experimental options for Puppeteer."}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"logLevel"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:"'silent' | 'error' | 'warn'"}),(0,t.jsx)(r.td,{children:"Tells Puppeteer to log at the given level."}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"warn"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"skipDownload"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)("p",{children:"Tells Puppeteer to not download during installation."}),(0,t.jsxs)("p",{children:["Can be overridden by ",(0,t.jsx)("code",{children:"PUPPETEER_SKIP_DOWNLOAD"}),"."]})]}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"temporaryDirectory"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"optional"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)("p",{children:"Defines the directory to be used by Puppeteer for creating temporary files."}),(0,t.jsxs)("p",{children:["Can be overridden by ",(0,t.jsx)("code",{children:"PUPPETEER_TMP_DIR"}),"."]})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"os.tmpdir()"})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},75251:(e,r,n)=>{var t=n(67294),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,d={},l=null,h=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(h=r.ref),r)s.call(r,t)&&!c.hasOwnProperty(t)&&(d[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===d[t]&&(d[t]=r[t]);return{$$typeof:i,type:e,key:l,ref:h,props:d,_owner:o.current}}r.Fragment=d,r.jsx=l,r.jsxs=l},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>s});var t=n(67294);const i={},d=t.createContext(i);function s(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);