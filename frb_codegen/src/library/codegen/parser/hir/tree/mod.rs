mod parser;
mod transformer;

use crate::codegen::ir::hir::raw::pack::HirRawPack;
use crate::codegen::ir::hir::tree::pack::HirTreePack;
use crate::codegen::parser::hir::internal_config::ParserHirInternalConfig;

pub(crate) fn parse(
    config: &ParserHirInternalConfig,
    hir_raw: HirRawPack,
) -> anyhow::Result<HirTreePack> {
    let pack = parser::pack::parse_pack(config, hir_raw)?;
    let pack = transformer::pub_use_transformer::transform(pack)?;
    Ok(pack)
}