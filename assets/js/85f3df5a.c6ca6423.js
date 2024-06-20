"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[5605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="Trait implementations",l={unversionedId:"guides/traits/implementations",id:"guides/traits/implementations",title:"Trait implementations",description:"The impl A for B is supported, and is translated to a class B implements A.",source:"@site/docs/guides/traits/implementations.md",sourceDirName:"guides/traits",slug:"/guides/traits/implementations",permalink:"/flutter_rust_bridge/guides/traits/implementations",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/guides/traits/implementations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Trait definitions",permalink:"/flutter_rust_bridge/guides/traits/definitions"},next:{title:"Trait objects / dyn T / Arbitrary implementers",permalink:"/flutter_rust_bridge/guides/traits/trait-objects"}},s={},p=[{value:"Unignore a function",id:"unignore-a-function",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trait-implementations"},"Trait implementations"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"impl A for B")," is supported, and is translated to a ",(0,i.kt)("inlineCode",{parentName:"p"},"class B implements A"),".\nIn addition, the methods inside this ",(0,i.kt)("inlineCode",{parentName:"p"},"impl")," block will also be converted automatically."),(0,i.kt)("h2",{id:"unignore-a-function"},"Unignore a function"),(0,i.kt)("p",null,"Some trait implementations are ignored by default to avoid generating meaningless things to Dart side such as ",(0,i.kt)("inlineCode",{parentName:"p"},"clone")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deref"),".\nHowever, if a function is ignored while you want it, you can put arbitrary attributes on it to tell flutter_rust_bridge you want it.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"#[frb] fn f() { .. }")," suffices. Attributes with real contents like ",(0,i.kt)("inlineCode",{parentName:"p"},"#[frb(sync)] fn f() { .. }")," also works."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"For example, suppose we write down:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyTrait for MyStruct {\n    fn f(&self, a: String) -> i32 { ... }\n}\n")),(0,i.kt)("p",null,"Then, the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"MyStruct")," class will be like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class MyStruct implements MyTrait {\n    ...\n    int f(String a) => ...;\n}\n")),(0,i.kt)("p",null,'Therefore, the trait can act as an "interface" or an "abstract class" in the Dart world.'))}c.isMDXComponent=!0}}]);