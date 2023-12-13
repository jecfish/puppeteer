/*! For license information please see fabdf7ae.281d3be4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43898],{68722:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=i(85893),o=i(11151);i(53787),i(50551);const t={},s="Configuration",c={id:"guides/configuration",title:"Configuration",description:"All defaults in Puppeteer can be customized in two ways:",source:"@site/versioned_docs/version-21.6.0/guides/configuration.mdx",sourceDirName:"guides",slug:"/guides/configuration",permalink:"/guides/configuration",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{},sidebar:"docs",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"Query Selectors",permalink:"/guides/query-selectors"}},l={},a=[{value:"Configuration files",id:"configuration-files",level:2},{value:"Examples",id:"examples",level:3},{value:"Changing the default cache directory",id:"changing-the-default-cache-directory",level:4},{value:"Environment variables",id:"environment-variables",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n","\n","\n",(0,r.jsx)(n.p,{children:"All defaults in Puppeteer can be customized in two ways:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#configuration-files",children:"Configuration files"})," (",(0,r.jsx)(n.strong,{children:"recommended"}),")"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#environment-variables",children:"Environment variables"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Note that some options are only customizable through environment variables (such\nas ",(0,r.jsx)(n.code,{children:"HTTPS_PROXY"}),")."]})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Puppeteer's configuration files and environment variables are ignored by ",(0,r.jsx)(n.code,{children:"puppeteer-core"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"configuration-files",children:"Configuration files"}),"\n",(0,r.jsxs)(n.p,{children:["Configuration files are the ",(0,r.jsx)(n.strong,{children:"recommended"})," choice for configuring Puppeteer.\nPuppeteer will look up the file tree for any of the following formats:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".puppeteerrc.cjs"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".puppeteerrc.js"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".puppeteerrc"})," (YAML/JSON),"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".puppeteerrc.json"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".puppeteerrc.yaml"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"puppeteer.config.js"}),", and"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"puppeteer.config.cjs"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Puppeteer will also read a ",(0,r.jsx)(n.code,{children:"puppeteer"})," key from your application's\n",(0,r.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"../api/puppeteer.configuration",children:(0,r.jsx)(n.code,{children:"Configuration"})})," interface for possible\noptions."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["After adding a configuration file, you may need to remove and reinstall\n",(0,r.jsx)(n.code,{children:"puppeteer"})," for it to take effect if the changes affect installation."]})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h4,{id:"changing-the-default-cache-directory",children:"Changing the default cache directory"}),"\n",(0,r.jsxs)(n.p,{children:["Starting in v19.0.0, Puppeteer stores browsers in ",(0,r.jsx)(n.code,{children:"~/.cache/puppeteer"})," to\nglobally cache browsers between installation. This can cause problems if\n",(0,r.jsx)(n.code,{children:"puppeteer"})," is packed during some build step and moved to a fresh location. The\nfollowing configuration can solve this issue (reinstall ",(0,r.jsx)(n.code,{children:"puppeteer"})," to take\neffect):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="project-directory/.puppeteerrc.cjs"',children:"const {join} = require('path');\n\n/**\n * @type {import(\"puppeteer\").Configuration}\n */\nmodule.exports = {\n  // Changes the cache location for Puppeteer.\n  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),\n};\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Notice this is only possible with CommonJS configuration files as information\nabout the ambient environment is needed (in this case, ",(0,r.jsx)(n.code,{children:"__dirname"}),")."]})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,r.jsxs)(n.p,{children:["Along with configuration files, Puppeteer looks for certain\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Environment_variable",children:"environment variables"})," for\ncustomizing behavior. Environment variables will always override configuration\nfile options when applicable."]}),"\n",(0,r.jsxs)(n.p,{children:["The following options are ",(0,r.jsx)(n.em,{children:"environment-only"})," options"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"HTTP_PROXY"}),", ",(0,r.jsx)(n.code,{children:"HTTPS_PROXY"}),", ",(0,r.jsx)(n.code,{children:"NO_PROXY"})," - defines HTTP proxy settings that are\nused to download and run the browser."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["All other options can be found in the documentation for the\n",(0,r.jsx)(n.a,{href:"../api/puppeteer.configuration",children:(0,r.jsx)(n.code,{children:"Configuration"})})," interface."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,n,i)=>{var r=i(67294),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,i){var r,t={},a=null,d=null;for(r in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:d,props:t,_owner:c.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},85893:(e,n,i)=>{e.exports=i(75251)},50551:(e,n,i)=>{i(67294)},53787:(e,n,i)=>{i(67294),i(30358)},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var r=i(67294);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);