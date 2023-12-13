/*! For license information please see a52bbcfc.215ed7a0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37834],{72139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(85893),i=r(11151);const o={sidebar_label:"Locator"},n="Locator class",a={id:"api/puppeteer.locator",title:"Locator class",description:"Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.locator.md",sourceDirName:"api",slug:"/api/puppeteer.locator",permalink:"/api/puppeteer.locator",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"Locator"},sidebar:"api",previous:{title:"LaunchOptions",permalink:"/api/puppeteer.launchoptions"},next:{title:"Locator.click",permalink:"/api/puppeteer.locator.click"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"locator-class",children:"Locator class"}),"\n",(0,s.jsx)(t.p,{children:"Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Locator<T> extends EventEmitter<LocatorEvents>\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Extends:"})," ",(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,s.jsx)(t.a,{href:"/api/puppeteer.locatorevents",children:"LocatorEvents"}),">"]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Modifiers"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"optional"})}),(0,s.jsx)(t.td,{children:"T"}),(0,s.jsxs)(t.td,{children:["Used for nominally typing ",(0,s.jsx)(t.a,{href:"/api/puppeteer.locator",children:"Locator"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timeout"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"readonly"})}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Modifiers"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.click",children:"click(this, options)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.clone",children:"clone()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Clones the locator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.fill",children:"fill(this, value, options)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Fills out the input identified by the locator using the provided value. The type of the input is determined at runtime and the appropriate fill-out method is chosen based on the type. contenteditable, selector, inputs are supported."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.filter",children:"filter(predicate)"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("p",{children:"Creates an expectation that is evaluated against located values."}),(0,s.jsx)("p",{children:"If the expectations do not match, then the locator will retry."})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.hover",children:"hover(this, options)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.map",children:"map(mapper)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Maps the locator using the provided mapper."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.race",children:"race(locators)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"static"})}),(0,s.jsx)(t.td,{children:"Creates a race between multiple locators but ensures that only a single one acts."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.scroll",children:"scroll(this, options)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.setensureelementisintheviewport",children:"setEnsureElementIsInTheViewport(this, value)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.settimeout",children:"setTimeout(timeout)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.setvisibility",children:"setVisibility(this, visibility)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.setwaitforenabled",children:"setWaitForEnabled(this, value)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.setwaitforstableboundingbox",children:"setWaitForStableBoundingBox(this, value)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.wait",children:"wait(options)"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("p",{children:"Waits for the locator to get the serialized value from the page."}),(0,s.jsx)("p",{children:"Note this requires the value to be JSON-serializable."})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.waithandle",children:"waitHandle(options)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Waits for the locator to get a handle from the page."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var s=r(67294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var s,o={},c=null,d=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)n.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>n});var s=r(67294);const i={},o=s.createContext(i);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);