"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[2162],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=l(t),f=i,m=g["".concat(s,".").concat(f)]||g[f]||p[f]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6264:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const o={},a="Ignoring things",u={unversionedId:"guides/misc-features/ignoring",id:"guides/misc-features/ignoring",title:"Ignoring things",description:"The #[frb(ignore)] (or equivalently, /// frb:ignore) can be put on things to ignore them.",source:"@site/docs/guides/misc-features/ignoring.md",sourceDirName:"guides/misc-features",slug:"/guides/misc-features/ignoring",permalink:"/flutter_rust_bridge/guides/misc-features/ignoring",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/guides/misc-features/ignoring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rename Dart types",permalink:"/flutter_rust_bridge/guides/misc-features/dart-type-rename"},next:{title:"frb_override_* prefix",permalink:"/flutter_rust_bridge/guides/misc-features/override-prefix"}},s={},l=[{value:"Example",id:"example",level:2}],c={toc:l};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ignoring-things"},"Ignoring things"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"#[frb(ignore)]")," (or equivalently, ",(0,i.kt)("inlineCode",{parentName:"p"},"/// frb:ignore"),") can be put on things to ignore them."),(0,i.kt)("p",null,"To ignore a ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," (module), we can only use the latter syntax because Rust grammar does not support the former yet."),(0,i.kt)("p",null,"To see extra approaches to ignore functions, please refer to ",(0,i.kt)("a",{parentName:"p",href:"../functions/ignoring"},"this page"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[frb(ignore)]\npub struct ThisStructWillBeIgnore;\n\n#[frb(ignore)]\npub fn this_function_will_be_ignored() {}\n\n/// frb:ignore\nmod this_submodule_will_be_ignored;\n")))}p.isMDXComponent=!0}}]);