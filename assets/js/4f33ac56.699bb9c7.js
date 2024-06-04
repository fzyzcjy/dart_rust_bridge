"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[2319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},l="Multiple files",o={unversionedId:"manual/miscellaneous/archived/multiple-files",id:"manual/miscellaneous/archived/multiple-files",title:"Multiple files",description:"When having a large project, it is often insufficient to put everything in a single api.rs, but instead we may want to separate it into apiofonemodule.rs, apiofanothermodule.rs, etc. That is why we have this feature.",source:"@site/docs/manual/miscellaneous/92-archived/09-multiple-files.md",sourceDirName:"manual/miscellaneous/92-archived",slug:"/manual/miscellaneous/archived/multiple-files",permalink:"/flutter_rust_bridge/manual/miscellaneous/archived/multiple-files",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/manual/miscellaneous/92-archived/09-multiple-files.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building a WASM binary manually",permalink:"/flutter_rust_bridge/manual/miscellaneous/archived/build-wasm"},next:{title:"Generating multiple files",permalink:"/flutter_rust_bridge/manual/miscellaneous/archived/generate-multiple-files"}},s={},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multiple-files"},"Multiple files"),(0,a.kt)("p",null,"When having a large project, it is often insufficient to put everything in a single ",(0,a.kt)("inlineCode",{parentName:"p"},"api.rs"),", but instead we may want to separate it into ",(0,a.kt)("inlineCode",{parentName:"p"},"api_of_one_module.rs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"api_of_another_module.rs"),", etc. That is why we have this feature."),(0,a.kt)("p",null,"Basically, just specify all input Rust files and all output locations and we are done. Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'flutter_rust_bridge_codegen \\\n  --rust-input "$REPO_DIR/native/src/api_1.rs" "$REPO_DIR/native/src/api_2.rs" \\\n  --dart-output "$REPO_DIR/lib/bridge_generated_api_1.dart" "$REPO_DIR/lib/bridge_generated_api_2.dart" \\\n  --class-name ApiClass1 ApiClass2 \\\n  --rust-output generated_api_1 generated_api_2\n')),(0,a.kt)("p",null,"For more details, have a look at ",(0,a.kt)("a",{parentName:"p",href:"generate-multiple-files"},"this article"),"."))}c.isMDXComponent=!0}}]);