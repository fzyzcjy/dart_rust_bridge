"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[3373],{15680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>m});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?t.createElement(y,l(l({ref:r},d),{},{components:n})):t.createElement(y,l({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19857:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=n(58168),a=(n(96540),n(15680));const i={},l="Building a WASM binary manually",o={unversionedId:"manual/miscellaneous/archived/build-wasm",id:"manual/miscellaneous/archived/build-wasm",title:"Building a WASM binary manually",description:"Here are the complete commands for building a WASM binary with this library:",source:"@site/docs/manual/miscellaneous/92-archived/08-build-wasm.md",sourceDirName:"manual/miscellaneous/92-archived",slug:"/manual/miscellaneous/archived/build-wasm",permalink:"/flutter_rust_bridge/manual/miscellaneous/archived/build-wasm",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/manual/miscellaneous/92-archived/08-build-wasm.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Unit tests in dart",permalink:"/flutter_rust_bridge/manual/miscellaneous/archived/unit-tests-dart"},next:{title:"Multiple files",permalink:"/flutter_rust_bridge/manual/miscellaneous/archived/multiple-files"}},s={},u=[{value:"Setting up the web server",id:"setting-up-the-web-server",level:2}],d={toc:u};function c(e){let{components:r,...n}=e;return(0,a.yg)("wrapper",(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"building-a-wasm-binary-manually"},"Building a WASM binary manually"),(0,a.yg)("p",null,"Here are the complete commands for building a WASM binary with this library:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'export RUSTUP_TOOLCHAIN=nightly\nexport RUSTFLAGS="-C target-feature=+atomics,+bulk-memory,+mutable-globals"\nwasm-pack build \\\n    -t no-modules \\\n    -d <WASM_OUTPUT_PATH> \\\n    --no-typescript -- \\\n    -Z build-std=std,panic_abort\n')),(0,a.yg)("p",null,"Continue reading for more details."),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"flutter_rust_bridge_codegen")," expects a certain setup that is modeled after the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/rustwasm/wasm-bindgen/tree/main/examples/raytrace-parallel"},"wasm_bindgen raytracing example"),"\nand by extension consumes the ",(0,a.yg)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/wasm-bindgen"},(0,a.yg)("inlineCode",{parentName:"a"},"wasm_bindgen"))," library and its ecosystem.\nThe requirements are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The standard library being built with the ",(0,a.yg)("inlineCode",{parentName:"li"},"panic_abort")," feature"),(0,a.yg)("li",{parentName:"ul"},"The library and standard library being built with the target\nfeatures ",(0,a.yg)("inlineCode",{parentName:"li"},"atomics"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"bulk_memory")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"mutable_globals")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"wasm-pack")," called with ",(0,a.yg)("inlineCode",{parentName:"li"},"-t no-modules")," (to be relaxed in the future)")),(0,a.yg)("p",null,"Note that these features also represent a hard requirement on your\nusers' browser versions."),(0,a.yg)("p",null,"Furthermore, this library does not support JavaScript\nruntimes as of writing."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"WASM_OUTPUT_PATH")," refers to the output directory of the WASM module.\nIf running Flutter, this is usually ",(0,a.yg)("inlineCode",{parentName:"p"},"web/pkg"),"."),(0,a.yg)("h2",{id:"setting-up-the-web-server"},"Setting up the web server"),(0,a.yg)("p",null,"Once you have built your binary and are ready to deploy, you will also need\nto configure your web server to respond with these two headers:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)"},(0,a.yg)("inlineCode",{parentName:"a"},"Cross-Origin-Resource-Policy"))," set to ",(0,a.yg)("inlineCode",{parentName:"li"},"same-origin")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"},(0,a.yg)("inlineCode",{parentName:"a"},"Cross-Origin-Embedder-Policy"))," set to ",(0,a.yg)("inlineCode",{parentName:"li"},"require-corp"),(0,a.yg)("sup",{parentName:"li",id:"fnref-1"},(0,a.yg)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,a.yg)("p",null,"Here is a sample web server that accomplishes this task (excerpt from ",(0,a.yg)("inlineCode",{parentName:"p"},"flutter_rust_bridge_serve"),"):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-dart"},"import 'package:shelf/shelf.dart';\nimport 'package:shelf/shelf_io.dart';\nimport 'package:shelf_static/shelf_static.dart';\n\nvoid main() async {\n    final root = \"/* directory containing index.html */\";\n    final staticFilesHandler = createStaticHandler(root, defaultDocument: 'index.html');\n    final handler = const Pipeline().addMiddleware((handler) {\n        return (req) async {\n            final res = await handler(req);\n            return res.change(headers: const {\n                'Cross-Origin-Opener-Policy': 'same-origin',\n                'Cross-Origin-Embedder-Policy': 'require-corp',\n            });\n        };\n    }).addHandler(staticFilesHandler);\n    await serve(handler, 'localhost', 8080);\n}\n")),(0,a.yg)("div",{className:"footnotes"},(0,a.yg)("hr",{parentName:"div"}),(0,a.yg)("ol",{parentName:"div"},(0,a.yg)("li",{parentName:"ol",id:"fn-1"},"When running Flutter Web, you may encounter issues with downloading Flutter\nsupport scripts which have not been marked as ",(0,a.yg)("inlineCode",{parentName:"li"},'crossorigin="anonymous"')," and\ntherefore cannot be loaded. For local testing, you can specify ",(0,a.yg)("inlineCode",{parentName:"li"},"credentialless"),"\ninstead.",(0,a.yg)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);