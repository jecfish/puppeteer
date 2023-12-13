/*! For license information please see c2138e4c.09c74d9b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78353],{84060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var s=r(85893),i=r(11151);const n={sidebar_label:"DeviceRequestPrompt"},c="DeviceRequestPrompt class",o={id:"api/puppeteer.devicerequestprompt",title:"DeviceRequestPrompt class",description:"Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.devicerequestprompt.md",sourceDirName:"api",slug:"/api/puppeteer.devicerequestprompt",permalink:"/api/puppeteer.devicerequestprompt",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"DeviceRequestPrompt"},sidebar:"api",previous:{title:"Device",permalink:"/api/puppeteer.device"},next:{title:"DeviceRequestPrompt.cancel",permalink:"/api/puppeteer.devicerequestprompt.cancel"}},d={},p=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"devicerequestprompt-class",children:"DeviceRequestPrompt class"}),"\n",(0,s.jsx)(t.p,{children:"Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare class DeviceRequestPrompt\n"})}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"DeviceRequestPrompt"})," instances are returned via the ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page.waitfordeviceprompt",children:"Page.waitForDevicePrompt()"})," method."]}),"\n",(0,s.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(t.code,{children:"DeviceRequestPrompt"})," class."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const [deviceRequest] = Promise.all([\n  page.waitForDevicePrompt(),\n  page.click('#connect-bluetooth'),\n]);\nawait devicePrompt.select(\n  await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))\n);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Modifiers"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"devices"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/api/puppeteer.devicerequestpromptdevice",children:"DeviceRequestPromptDevice"}),"[]"]}),(0,s.jsx)(t.td,{children:"Current list of selectable devices."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Modifiers"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.devicerequestprompt.cancel",children:"cancel()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Cancel the prompt."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.devicerequestprompt.select",children:"select(device)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Select a device in the prompt's list."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.devicerequestprompt.waitfordevice",children:"waitForDevice(filter, options)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Resolve to the first device in the prompt matching a filter."})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,t,r)=>{var s=r(67294),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var s,n={},p=null,l=null;for(s in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,s)&&!d.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:p,ref:l,props:n,_owner:o.current}}t.Fragment=n,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>c});var s=r(67294);const i={},n=s.createContext(i);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);