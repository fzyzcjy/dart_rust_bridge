use crate::codegen::generator::api_dart::spec_generator::base::{
    ApiDartGenerator, ApiDartGeneratorContext,
};
use crate::codegen::ir::mir::ty::delegate::MirTypeDelegateProxyVariant;
use crate::library::codegen::generator::api_dart::spec_generator::info::ApiDartGeneratorInfoTrait;

pub(crate) fn compute_func_implementation(
    ir: &MirTypeDelegateProxyVariant,
    context: ApiDartGeneratorContext,
    rust_async: bool,
) -> String {
    let mut ans = format!("{}(this)", compute_dart_extra_type(ir, context));
    if rust_async {
        ans = format!("Future.value({ans})");
    }
    ans
}

pub(crate) fn compute_dart_extra_type(
    ir: &MirTypeDelegateProxyVariant,
    context: ApiDartGeneratorContext,
) -> String {
    let inner_dart_api_type = ApiDartGenerator::new(ir.inner.clone(), context).dart_api_type();
    let upstream_dart_api_type =
        ApiDartGenerator::new(ir.upstream.clone(), context).dart_api_type();
    format!(
        "{}ProxyVariant{}",
        inner_dart_api_type, upstream_dart_api_type
    )
}