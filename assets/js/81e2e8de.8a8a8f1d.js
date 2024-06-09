"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[8252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},l="Vec and array",o={unversionedId:"guides/types/translatable/detailed/vec",id:"guides/types/translatable/detailed/vec",title:"Vec and array",description:"Vec, Vec, ...",source:"@site/docs/guides/types/translatable/detailed/vec.md",sourceDirName:"guides/types/translatable/detailed",slug:"/guides/types/translatable/detailed/vec",permalink:"/flutter_rust_bridge/guides/types/translatable/detailed/vec",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/guides/types/translatable/detailed/vec.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Detailed types",permalink:"/flutter_rust_bridge/guides/types/translatable/detailed/"},next:{title:"Structs",permalink:"/flutter_rust_bridge/guides/types/translatable/detailed/struct"}},p={},c=[{value:"<code>Vec&lt;u8&gt;</code>, <code>Vec&lt;i8&gt;</code>, ...",id:"vecu8-veci8-",level:2},{value:"<code>Vec&lt;T&gt;</code>",id:"vect",level:2},{value:"<code>[T; N]</code>",id:"t-n",level:2},{value:"Example",id:"example",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vec-and-array"},"Vec and array"),(0,a.kt)("h2",{id:"vecu8-veci8-"},(0,a.kt)("inlineCode",{parentName:"h2"},"Vec<u8>"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"Vec<i8>"),", ..."),(0,a.kt)("p",null,"In Dart, when you want to express a long byte array such as a big image or some binary blob, people normally use ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8List")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"List<int>")," since the former is much performant. ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter_rust_bridge")," takes this into consideration for you. When you have ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<i8>"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<i32>"),", etc), it will be translated into ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8List")," or its friends."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../simple-correspondence"},"This section")," provides more details about ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," and its friends."),(0,a.kt)("h2",{id:"vect"},(0,a.kt)("inlineCode",{parentName:"h2"},"Vec<T>")),(0,a.kt)("p",null,"When you have normal ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," types other than ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"i8")," etc, it will be converted to normal ",(0,a.kt)("inlineCode",{parentName:"p"},"List<T>"),"."),(0,a.kt)("p",null,"Remark: ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<Box<T>>")," is not supported yet though fixable (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fzyzcjy/flutter_rust_bridge/issues/1072"},"#1072"),"), but according to ",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rust-clippy/master/index.html#vec_box"},"clippy lints"),", it is usually better to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>")," directly."),(0,a.kt)("h2",{id:"t-n"},(0,a.kt)("inlineCode",{parentName:"h2"},"[T; N]")),(0,a.kt)("p",null,"Since Dart does not have special treatment for static-sized arrays, it is converted to ",(0,a.kt)("inlineCode",{parentName:"p"},"List<T>")," as well."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn draw_tree(tree: Vec<TreeNode>) -> Vec<u8> { ... }\n")),(0,a.kt)("p",null,"Becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dart"},"Future<Uint8List> drawTree({required List<TreeNode> tree});\n")),(0,a.kt)("p",null,"Remark: If you are curious about ",(0,a.kt)("inlineCode",{parentName:"p"},"Future"),", have a look at ",(0,a.kt)("a",{parentName:"p",href:"../../../concurrency/async-dart"},"this"),"."))}u.isMDXComponent=!0}}]);