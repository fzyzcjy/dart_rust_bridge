#[cfg(feature = "rust-async")]
#[cfg(not(wasm))]
mod io;
#[cfg(feature = "rust-async")]
#[cfg(not(wasm))]
pub use io::*;

#[cfg(feature = "rust-async")]
#[cfg(wasm)]
mod web;
use futures::Future;
#[cfg(feature = "rust-async")]
#[cfg(wasm)]
pub use web::*;

#[cfg(not(feature = "rust-async"))]
mod stub;
#[cfg(not(feature = "rust-async"))]
pub use stub::*;

pub trait BaseAsyncRuntime {
    type JoinHandle<O>;

    #[cfg(feature = "rust-async")]
    #[cfg(not(wasm))]
    fn spawn<F>(&self, future: F) -> Self::JoinHandle<F::Output>
    where
        F: Future + Send + 'static,
        F::Output: Send + 'static;

    #[cfg(feature = "rust-async")]
    #[cfg(not(wasm))]
    fn spawn_blocking<F>(&self, func: F) -> Self::JoinHandle<F::Output>
    where
        F: FnOnce() + Send + 'static,
        F::Output: Send + 'static;

    #[cfg(feature = "rust-async")]
    #[cfg(not(wasm))]
    fn block_on<F: Future>(&self, future: F) -> F::Output;

    #[cfg(feature = "rust-async")]
    #[cfg(wasm)]
    fn spawn<F>(&self, future: F)
    where
        F: Future<Output = ()> + 'static;
}
