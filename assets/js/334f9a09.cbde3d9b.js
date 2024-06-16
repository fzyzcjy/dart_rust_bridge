"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[1312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(a,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,u=new Array(l);u[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var s=2;s<l;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const l={},u="Multiple input folders",o={unversionedId:"guides/miscellaneous/multi-input",id:"guides/miscellaneous/multi-input",title:"Multiple input folders",description:"The rust_input configuration key supports multiple entries separated by commas.",source:"@site/docs/guides/miscellaneous/multi-input.md",sourceDirName:"guides/miscellaneous",slug:"/guides/miscellaneous/multi-input",permalink:"/flutter_rust_bridge/guides/miscellaneous/multi-input",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/guides/miscellaneous/multi-input.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parameter defaults",permalink:"/flutter_rust_bridge/guides/miscellaneous/default"},next:{title:"Pure Dart",permalink:"/flutter_rust_bridge/guides/miscellaneous/pure-dart"}},a={},s=[],p={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multiple-input-folders"},"Multiple input folders"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rust_input")," configuration key supports multiple entries separated by commas.\nFor example, consider the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rust_input: crate::api,crate::hello::world\n")),(0,i.kt)("p",null,"Roughly speaking, it will scan ",(0,i.kt)("inlineCode",{parentName:"p"},"src/api/**/*.rs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"src/hello/world/**/*.rs"),"."),(0,i.kt)("p",null,"More strictly speaking, it scans Rust modules instead of real files, thus complex scenarios such as multiple modules\ninside one file are supported."))}c.isMDXComponent=!0}}]);