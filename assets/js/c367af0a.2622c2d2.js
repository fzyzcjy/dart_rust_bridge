"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[1764],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>u});var n=a(96540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=n.createContext({}),p=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=t,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(g,o(o({ref:r},c),{},{components:a})):n.createElement(g,o({ref:r},c))}));function u(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70867:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(58168),t=(a(96540),a(15680));const i={},o="iOS & macOS",l={unversionedId:"manual/integrate/library/platform-setup/ios-and-macos",id:"manual/integrate/library/platform-setup/ios-and-macos",title:"iOS & macOS",description:"Flutter libraries targeting iOS and macOS use cocoapods for dependencies,",source:"@site/docs/manual/integrate/07-library/03-platform-setup/02-ios-and-macos.md",sourceDirName:"manual/integrate/07-library/03-platform-setup",slug:"/manual/integrate/library/platform-setup/ios-and-macos",permalink:"/flutter_rust_bridge/manual/integrate/library/platform-setup/ios-and-macos",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/manual/integrate/07-library/03-platform-setup/02-ios-and-macos.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Windows & Linux",permalink:"/flutter_rust_bridge/manual/integrate/library/platform-setup/windows-and-linux"},next:{title:"Android",permalink:"/flutter_rust_bridge/manual/integrate/library/platform-setup/android"}},s={},p=[{value:"Directory Tree",id:"directory-tree",level:2},{value:"<code>ios/Classes/EnforceBundling.swift</code> and <code>macos/Classes/EnforceBundling.swift</code>",id:"iosclassesenforcebundlingswift-and-macosclassesenforcebundlingswift",level:3},{value:"<code>ios/Frameworks/.gitkeep</code> and <code>macos/Frameworks/.gitkeep</code>",id:"iosframeworksgitkeep-and-macosframeworksgitkeep",level:3},{value:"<code>ios/.gitignore</code>",id:"iosgitignore",level:3},{value:"<code>macos/.gitignore</code>",id:"macosgitignore",level:3},{value:"<code>ios/flutter_library_name.podspec</code> and <code>macos/flutter_library_name.podspec</code> (for Cocoapods)",id:"iosflutter_library_namepodspec-and-macosflutter_library_namepodspec-for-cocoapods",level:3},{value:"Build Script (<code>/scripts/build-apple.sh</code>)",id:"build-script-scriptsbuild-applesh",level:2}],c={toc:p};function d(e){let{components:r,...a}=e;return(0,t.yg)("wrapper",(0,n.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"ios--macos"},"iOS & macOS"),(0,t.yg)("p",null,"Flutter libraries targeting iOS and macOS use cocoapods for dependencies,\nso this page will walk you through setting that up with FRB."),(0,t.yg)("p",null,"The simplist way the author of this page found to integrate with cocoapods for all\nApple platforms (iOS, iOS Simulator, and macOS) is to create an XCFramework.\nWhile you don't need to know what an XCFramework is to follow this guide, if you\nwant to understand how this all works behind the scenes,\nI'd recommend doing a quick Google search on \"What is an XCFramework?\"."),(0,t.yg)("p",null,"Also, this page will introduce the iOS & macOS build script (",(0,t.yg)("inlineCode",{parentName:"p"},"build-apple.sh"),")\nto compile your Rust library for all Apple platforms. Note: unlike all of the other build scripts\npresented in this guide (which we can run on any host OS), ",(0,t.yg)("inlineCode",{parentName:"p"},"build-apple.sh")," must be run on macOS."),(0,t.yg)("h2",{id:"directory-tree"},"Directory Tree"),(0,t.yg)("p",null,"We will need to create several files for both iOS and macOS to:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Prevent our Rust symbols from being accidentally stripped"),(0,t.yg)("li",{parentName:"ul"},'Bundle our "XCFramework" with our Flutter library')),(0,t.yg)("h3",{id:"iosclassesenforcebundlingswift-and-macosclassesenforcebundlingswift"},(0,t.yg)("inlineCode",{parentName:"h3"},"ios/Classes/EnforceBundling.swift")," and ",(0,t.yg)("inlineCode",{parentName:"h3"},"macos/Classes/EnforceBundling.swift")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-swift"},"public func dummyMethodToEnforceBundling() -> Int64 {\n  return dummy_method_to_enforce_bundling()\n}\nlet dummyVar = dummyMethodToEnforceBundling();\n")),(0,t.yg)("h3",{id:"iosframeworksgitkeep-and-macosframeworksgitkeep"},(0,t.yg)("inlineCode",{parentName:"h3"},"ios/Frameworks/.gitkeep")," and ",(0,t.yg)("inlineCode",{parentName:"h3"},"macos/Frameworks/.gitkeep")),(0,t.yg)("p",null,"No file contents here; simply add a blank file (i.e., ",(0,t.yg)("inlineCode",{parentName:"p"},"touch .gitkeep")," in ",(0,t.yg)("inlineCode",{parentName:"p"},"bash"),")."),(0,t.yg)("h3",{id:"iosgitignore"},(0,t.yg)("inlineCode",{parentName:"h3"},"ios/.gitignore")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-gitignore"},"Flutter/\nRunner/\nFrameworks/*\n!Frameworks/.gitkeep\n")),(0,t.yg)("h3",{id:"macosgitignore"},(0,t.yg)("inlineCode",{parentName:"h3"},"macos/.gitignore")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-gitignore"},"Flutter/\nFrameworks/*\n!Frameworks/.gitkeep\n")),(0,t.yg)("h3",{id:"iosflutter_library_namepodspec-and-macosflutter_library_namepodspec-for-cocoapods"},(0,t.yg)("inlineCode",{parentName:"h3"},"ios/flutter_library_name.podspec")," and ",(0,t.yg)("inlineCode",{parentName:"h3"},"macos/flutter_library_name.podspec")," (for Cocoapods)"),(0,t.yg)("p",null,"We cannot use the CMake approach taken on other platforms with Cocoapods,\nso we do something a bit different here. ",(0,t.yg)("inlineCode",{parentName:"p"},".podspec")," files are actually just ruby files;\ndue to this observation, we can access the system shell to make arbitrary changes.\nWhile we could download and extract our Rust binaries for iOS/macOS in ruby directly,\nit is much more straightforward to simply use bash/zsh."),(0,t.yg)("p",null,"Replace all instances of ",(0,t.yg)("inlineCode",{parentName:"p"},"library_name")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"LibraryName")," below with your library name.\nAlso, replace other variables (i.e. ",(0,t.yg)("inlineCode",{parentName:"p"},"YourGitHubAccount")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"repo_name"),") as needed."),(0,t.yg)("p",null,"Note: the same exact ",(0,t.yg)("inlineCode",{parentName:"p"},"flutter_library_name.podspec")," is used for both iOS and macOS;\nyou can thank the ",(0,t.yg)("inlineCode",{parentName:"p"},"XCFramework")," for this simplicity."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ruby"},"release_tag_name = 'library_name-v0.0.0' # generated; do not edit\n\n# We cannot distribute the XCFramework alongside the library directly,\n# so we have to fetch the correct version here.\nframework_name = 'LibraryName.xcframework'\nremote_zip_name = \"#{framework_name}.zip\"\nurl = \"https://github.com/YourGitHubAccount/repo_name/releases/download/#{release_tag_name}/#{remote_zip_name}\"\nlocal_zip_name = \"#{release_tag_name}.zip\"\n`\ncd Frameworks\nrm -rf #{framework_name}\n\nif [ ! -f #{local_zip_name} ]\nthen\n  curl -L #{url} -o #{local_zip_name}\nfi\n\nunzip #{local_zip_name}\ncd -\n`\n\nPod::Spec.new do |spec|\n  spec.name          = 'library_name'\n  spec.version       = '0.0.1'\n  spec.license       = { :file => '../LICENSE' }\n  spec.homepage      = 'https://github.com/YourGitHubAccount/repo_name'\n  spec.authors       = { 'Your Name' => 'your-email@example.com' }\n  spec.summary       = 'iOS/macOS Flutter bindings for library_name'\n\n  spec.source              = { :path => '.' }\n  spec.source_files        = 'Classes/**/*'\n  spec.public_header_files = 'Classes/**/*.h'\n  spec.vendored_frameworks = \"Frameworks/#{framework_name}\"\n\n  spec.ios.deployment_target = '11.0'\n  spec.osx.deployment_target = '10.11'\nend\n")),(0,t.yg)("h2",{id:"build-script-scriptsbuild-applesh"},"Build Script (",(0,t.yg)("inlineCode",{parentName:"h2"},"/scripts/build-apple.sh"),")"),(0,t.yg)("p",null,"Replace ",(0,t.yg)("inlineCode",{parentName:"p"},"library_name")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"LibraryName")," below as needed."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Setup\nBUILD_DIR=platform-build\nmkdir $BUILD_DIR\ncd $BUILD_DIR\n\n# Build static libs\nfor TARGET in \\\n        aarch64-apple-ios x86_64-apple-ios aarch64-apple-ios-sim \\\n        x86_64-apple-darwin aarch64-apple-darwin\ndo\n    rustup target add $TARGET\n    cargo build -r --target=$TARGET\ndone\n\n# Create XCFramework zip\nFRAMEWORK="LibraryName.xcframework"\nLIBNAME=liblibrary_name.a\nmkdir mac-lipo ios-sim-lipo\nIOS_SIM_LIPO=ios-sim-lipo/$LIBNAME\nMAC_LIPO=mac-lipo/$LIBNAME\nlipo -create -output $IOS_SIM_LIPO \\\n        ../target/aarch64-apple-ios-sim/release/$LIBNAME \\\n        ../target/x86_64-apple-ios/release/$LIBNAME\nlipo -create -output $MAC_LIPO \\\n        ../target/aarch64-apple-darwin/release/$LIBNAME \\\n        ../target/x86_64-apple-darwin/release/$LIBNAME\nxcodebuild -create-xcframework \\\n        -library $IOS_SIM_LIPO \\\n        -library $MAC_LIPO \\\n        -library ../target/aarch64-apple-ios/release/$LIBNAME \\\n        -output $FRAMEWORK\nzip -r $FRAMEWORK.zip $FRAMEWORK\n\n# Cleanup\nrm -rf ios-sim-lipo mac-lipo $FRAMEWORK\n')))}d.isMDXComponent=!0}}]);