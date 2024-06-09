use std::pin::Pin;
use crate::lockable::lockable_order::LockableOrder;

// Only for generated code, not for normal users
pub trait Lockable {
    type RwLockReadGuard;
    type RwLockWriteGuard;

    fn lockable_order(&self) -> LockableOrder;

    fn lockable_decode_sync_ref(&self) -> Self::RwLockReadGuard;

    fn lockable_decode_sync_ref_mut(&self) -> Self::RwLockWriteGuard;

    // Manually mimic async_trait's output to avoid introducing another runtime dependency
    fn lockable_decode_async_ref<'a>(
        &'a self,
    ) -> Pin<Box<dyn core::future::Future<Output = Self::RwLockReadGuard> + Send + 'a>>
    where
        Self: Sync + 'a;

    fn lockable_decode_async_ref_mut<'a>(
        &'a self,
    ) -> Pin<Box<dyn core::future::Future<Output = Self::RwLockWriteGuard> + Send + 'a>>
    where
        Self: Sync + 'a;
}