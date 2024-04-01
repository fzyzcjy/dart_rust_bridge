//! Utilities to support the auto-generated Rust code.
//! These functions are usually *not* meant to be used by humans directly.

mod boilerplate;
mod boilerplate_io;
mod boilerplate_web;
mod cast;
#[cfg(feature = "rust-async")]
mod misc_rust_async;
mod pointer;

pub use crate::codec::dco::{transform_result_dco, Rust2DartMessageDco};
pub use crate::codec::sse::{
    Dart2RustMessageSse, Rust2DartMessageSse, SseDeserializer, SseSerializer,
};
pub use crate::codec::{cst::CstCodec, dco::DcoCodec, sse::SseCodec, BaseCodec};
#[cfg(feature = "dart-opaque")]
pub use crate::dart_opaque::dart2rust::{cst_decode_dart_opaque, sse_decode_dart_opaque};
pub use crate::generalized_arc::base_arc::BaseArc;
pub use crate::generalized_arc::std_arc::StdArc; // TODO temp
pub use crate::generalized_isolate::Channel;
pub use crate::generalized_isolate::IntoDartExceptPrimitive;
pub use crate::handler::handler::{FfiCallMode, TaskInfo};

pub use crate::misc::version::FLUTTER_RUST_BRIDGE_RUNTIME_VERSION;
pub use crate::platform_types::{
    DartAbi, MessagePort, PlatformGeneralizedUint8ListPtr, WireSyncRust2DartDco,
    WireSyncRust2DartSse,
};
pub use crate::rust2dart::action::Rust2DartAction;
pub use crate::rust2dart::stream_sink::StreamSinkBase;
pub use crate::rust_async;
pub use crate::rust_async::{BaseAsyncRuntime, SimpleAsyncRuntime};
#[cfg(feature = "rust-async")]
pub use crate::rust_auto_opaque::{dart2rust::rust_auto_opaque_encode, RustAutoOpaqueBase};
pub use crate::rust_opaque::{dart2rust::decode_rust_opaque_nom, RustOpaqueBase};
pub use crate::thread_pool::{BaseThreadPool, SimpleThreadPool};
#[cfg(wasm)]
pub use crate::web_transfer::transfer_closure::TransferClosure;
#[cfg(feature = "anyhow")]
pub use anyhow;
pub use byteorder;
#[cfg(wasm)]
pub use cast::slice_from_byte_buffer;
#[cfg(feature = "dart-opaque")]
#[cfg(not(wasm))]
pub use dart_sys_fork as dart_sys;
#[cfg(feature = "rust-async")]
pub use futures;
#[cfg(wasm)]
pub use js_sys;
pub use lazy_static::lazy_static;
#[cfg(feature = "rust-async")]
pub use misc_rust_async::*;
pub use pointer::*;
#[cfg(wasm)]
pub use wasm_bindgen;
