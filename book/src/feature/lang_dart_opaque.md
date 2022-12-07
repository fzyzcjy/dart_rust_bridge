# Arbitrary Dart types (opaque)

Any Dart type can be passed to Rust. This is done by wrapping it with `DartOpaque`.

`flutter_rust_bridge` ensures that any Dart objects are always removed on the parent Dart thread.


## Example `DartOpaque` 

Rust:

```rust,noplayground
pub fn get_dart_opaque(a: DartOpaque) { ... }
pub fn return_dart_opaque() -> DartOpaque { ... }
...
```

And use it in Dart:

```dart
var opaque = await api.getDartOpaque(() => '42');
Object answer_obj = await api.returnDartOpaque();
var fn = answer_obj as String Function();
print(fn());
```

## Implementation details

As for how it is implemented as well as the design towards safety, please refer to [this doc](../contributing/dart_opaque_type_safety.md)).