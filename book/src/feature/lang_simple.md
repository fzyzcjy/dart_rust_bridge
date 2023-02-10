# Simple correspondence

Here is a brief glance showing what the code generator can generate (non-exhaustive). Some rows have hyper-links pointing to more detailed explanations.

| Rust                                                 | Dart                                                 |
| ---------------------------------------------------- | ---------------------------------------------------- |
| [`Vec<u8>`, `Vec<i8>`..](lang_vec.md)                | `Uint8List`, `Int8List`, ..                          |
| [`Vec<T>`](lang_vec.md)                              | `List<T>`                                            |
| [`[T; N]`](lang_vec.md)                              | `List<T>`                                            |
| [`struct { .. }`, `struct( .. )`](lang_struct.md)    | `class`                                              |
| [`enum { A, B }`](lang_enum.md)                      | `enum`                                               |
| [`enum { A(..) }`](lang_enum.md)                     | `@freezed class`                                     |
| [`use ...`](lang_external.md)                        | act normally                                         |
| [`Option<T>`](lang_option.md)                        | `T?`                                                 |
| [Arbitrary Rust types (opaque)](lang_rust_opaque.md) | `RustOpaque`                                         |
| `DartOpaque`                                         | [Arbitrary Dart types (opaque)](lang_dart_opaque.md) |
| `Box<T>`                                             | `T`                                                  |
| comments                                             | same                                                 |
| `Result::Err`, panic                                 | `throw Exception`                                    |
| `i8`, `u8`, .., `usize`                              | `int`                                                |
| `f32`, `f64`                                         | `double`                                             |
| `bool`                                               | `bool`                                               |
| `String`                                             | `String`                                             |
| `()`                                                 | `void`                                               |
| `type A = B`                                         | [type alias](lang_type_alias.md)                     |

Types from `chrono` crate are supported as a feature, see [here](lang_chrono.md).
Types from `uuid` crate are supported as a feature, see [here](lang_uuid.md).
