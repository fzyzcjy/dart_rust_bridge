use crate::utils::namespace::Namespace;
use serde::Serialize;
use syn::{ItemImpl, ItemTrait};

#[derive(Debug, Clone, Serialize)]
pub(crate) struct HirTrait {
    pub(crate) namespace: Namespace,
    #[serde(skip_serializing)]
    pub(crate) item_trait: ItemTrait,
}

#[derive(Debug, Clone, Serialize)]
pub(crate) struct HirTraitImpl {
    pub(crate) namespace: Namespace,
    #[serde(skip_serializing)]
    pub(crate) item_impl: ItemImpl,
}