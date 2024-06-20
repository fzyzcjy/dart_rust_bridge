"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[2725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},p="Wrappers",i={unversionedId:"guides/third-party/manual/wrappers",id:"guides/third-party/manual/wrappers",title:"Wrappers",description:"This is not a flutterrustbridge feature,",source:"@site/docs/guides/third-party/manual/wrappers.md",sourceDirName:"guides/third-party/manual",slug:"/guides/third-party/manual/wrappers",permalink:"/flutter_rust_bridge/guides/third-party/manual/wrappers",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/guides/third-party/manual/wrappers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"External types",permalink:"/flutter_rust_bridge/guides/third-party/manual/external-types"},next:{title:"Lifetimes / Return references",permalink:"/flutter_rust_bridge/guides/lifetimes/"}},l={},s=[{value:"Example",id:"example",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wrappers"},"Wrappers"),(0,a.kt)("p",null,"This is not a ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter_rust_bridge")," feature,\nbut an approach that can be useful here,\nand is discussed for completeness."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Suppose in third party crate there is a type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Foo { .. }\n\nimpl Foo {\n    pub fn method_one(..) -> .. { .. }\n    pub fn method_two(..) -> .. { .. }\n    ...\n}\n")),(0,a.kt)("p",null,"And suppose it has some special fields making it not ",(0,a.kt)("inlineCode",{parentName:"p"},"Sync"),", thus cannot directly be used.\nFor simplicity, let us wrap it using a ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutex"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Foo(Mutex<third_party_crate::Foo>);\n")),(0,a.kt)("p",null,"Then, how can we expose the methods? We can surely write down each and every one manually:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// Naive approach, do NOT use\nimpl Foo {\n    pub fn method_one(..) -> .. {\n        self.0.lock().unwrap().method_one(..)\n    }\n    pub fn method_two(..) -> .. {\n        self.0.lock().unwrap().method_two(..)\n    }\n    ...\n}\n")),(0,a.kt)("p",null,"But that's tedious. We can do it faster by using ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/delegate-attr"},"delegate-attr")," or something liek that.\nEssentially, it does nothing but helping us generate those method bodies.\nThen the code looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[delegate(self.0.lock().unwrap())] // <-- just add this, and leave the method body empty\nimpl Foo {\n    pub fn method_one(..) -> .. {}\n    pub fn method_two(..) -> .. {}\n    ...\n}\n")))}c.isMDXComponent=!0}}]);