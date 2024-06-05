use crate::codegen::ir::hir::misc::item_fn::GeneralizedItemFn;
use crate::codegen::ir::hir::misc::serializers::serialize_generalized_item_fn;
use crate::codegen::ir::hir::misc::serializers::serialize_syn;
use crate::utils::namespace::{Namespace, NamespacedName};
use proc_macro2::Span;
use serde::{Serialize, Serializer};
use syn::spanned::Spanned;
use syn::{Attribute, ImplItemFn, ItemFn, ItemImpl, Signature, TraitItemFn, Visibility};
use crate::utils::syn_utils::ty_to_string;

#[derive(Debug, Clone, Serialize)]
pub(crate) struct HirFlatFunction {
    pub(crate) namespace: Namespace,
    pub(crate) owner: HirFlatFunctionOwner,
    #[serde(serialize_with = "serialize_generalized_item_fn")]
    pub(crate) item_fn: GeneralizedItemFn,
}

impl HirFlatFunction {
    pub(crate) fn owner_and_name(&self) -> SimpleOwnerAndName {
        (self.owner.simple_name(), self.item_fn.name())
    }

    pub(crate) fn is_public(&self) -> Option<bool> {
        match self.owner {
            HirFlatFunctionOwner::Function
            | HirFlatFunctionOwner::StructOrEnum {
                trait_def_name: None,
                ..
            } => (self.item_fn.vis()).map(|vis| matches!(vis, Visibility::Public(_))),
            HirFlatFunctionOwner::StructOrEnum {
                trait_def_name: Some(_),
                ..
            } => None,
        }
    }
}

#[derive(Debug, Clone, Serialize)]
pub(crate) enum HirFlatFunctionOwner {
    Function,
    StructOrEnum {
        #[serde(serialize_with = "serialize_syn")]
        impl_ty: syn::Type,
        trait_def_name: Option<String>,
    },
    TraitDef {
        trait_def_name: NamespacedName,
    },
}

impl HirFlatFunctionOwner {
    pub(crate) fn simple_name(&self) -> Option<String> {
        match self {
            Self::Function => None,
            Self::StructOrEnum { impl_ty, .. } => Some(ty_to_string(impl_ty)),
        }
    }
}

pub(crate) type SimpleOwnerAndName = (Option<String>, String);