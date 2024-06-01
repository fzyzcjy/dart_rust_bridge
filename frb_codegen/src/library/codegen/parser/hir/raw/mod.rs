use crate::codegen::dumper::Dumper;
use crate::codegen::ir::hir::raw::HirRawPack;
use crate::utils::namespace::Namespace;
use crate::codegen::parser::hir::internal_config::ParserHirInternalConfig;
use crate::library::commands::cargo_expand::run_cargo_expand;
use itertools::concat;
use crate::utils::crate_name::CrateName;

pub(crate) fn parse(
    config: &ParserHirInternalConfig,
    dumper: &Dumper,
) -> anyhow::Result<HirRawPack> {
    let crates = concat([
        vec![CrateName::self_crate()],
        config.third_party_crate_names.clone(),
    ])
    .iter()
    .map(|crate_name| {
        Ok((
            crate_name.to_owned(),
            run_cargo_expand(
                &config.rust_crate_dir,
                (*crate_name != CrateName::self_crate()).then(|| crate_name),
                dumper,
            )?,
        ))
    })
    .collect::<anyhow::Result<Vec<_>>>()?
    .into_iter()
    .collect();
    Ok(HirRawPack { crates })
}