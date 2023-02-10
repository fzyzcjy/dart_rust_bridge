# Using dummy headers

`flutter_rust_bridge_codegen` created a C header which lists all the
exported symbols from our library, then uses it so that Xcode won't strip
the symbols.

Add `ios/Runner/bridge_generated.h` (or `macos/Runner/bridge_generated.h`)
to the project, either by dragging it onto the project tree or
via the **Add Files to "Runner"...** menu option.

Switch to the **Build Phases** tab and drag the **bridge_generated.h** file over
to the **Copy Bundle Resources** phase, if it isn't already present.

## iOS

Next, add this line to `ios/Runner/Runner-Bridging-Header.h`:

```diff
+#import "bridge_generated.h"
```

and in `ios/Runner/AppDelegate.swift`:

```diff
 override func application(
     _ application: UIApplication,
     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
 ) -> Bool {
+    let dummy = dummy_method_to_enforce_bundling()
+    print(dummy)
     ..
 }
```

It is important that you use the result of `dummy_method_to_enforce_bundling()` (like in the example above), otherwise the symbols might still get stripped.

### Stripping iOS symbols

If you release your app through App Store, the steps above might not be sufficient. In that case you need to modify how Xcode strips the symbols:

1. In Xcode, go to Target Runner > Build Settings > Strip Style.
2. Change from **All Symbols** to **Non-Global Symbols**.

Ref: https://docs.flutter.dev/development/platform-integration/ios/c-interop#stripping-ios-symbols

## MacOS

Flutter on MacOS does not use headers by default, so let's go ahead
and add one ourselves. In the **Build Settings** tab, set the
**Objective-C Bridging Header** to be **Runner/bridge_generated.h**.

Finally, use `dummy_method_to_enforce_bundling` somewhere within
`macos/Runner/AppDelegate.swift`, as long as Xcode does not consider it dead code.
