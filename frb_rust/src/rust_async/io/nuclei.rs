use crate::rust_async::BaseAsyncRuntime;
pub use async_lock::{RwLock, RwLockReadGuard, RwLockWriteGuard};
use std::future::Future;

#[derive(Debug)]
pub struct SimpleAsyncRuntime();

impl Default for SimpleAsyncRuntime {
    fn default() -> Self {
        return Self();
    }
}

impl BaseAsyncRuntime for SimpleAsyncRuntime {
    type JoinHandle<O> = nuclei::Task<O>;

    fn spawn<F>(&self, future: F) -> Self::JoinHandle<F::Output>
    where
        F: Future + Send + 'static,
        F::Output: Send + 'static,
    {
        nuclei::spawn(future)
    }

    fn spawn_blocking<F>(&self, func: F) -> Self::JoinHandle<F::Output>
    where
        F: FnOnce() + Send + 'static,
        F::Output: Send + 'static,
    {
        nuclei::spawn_blocking(func)
    }

    fn block_on<F: Future>(&self, future: F) -> F::Output {
        nuclei::block_on(future)
    }
}
