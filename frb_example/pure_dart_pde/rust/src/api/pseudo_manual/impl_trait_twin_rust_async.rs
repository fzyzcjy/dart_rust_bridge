// NOTE: This file is mimicking how a human developer writes tests,
// and is auto-generated from `impl_trait.rs` by frb_internal
// Please do not modify manually, but modify the origin and re-run frb_internal generator

// AUTO-GENERATED FROM frb_example/pure_dart, DO NOT EDIT

pub struct StructWithTraitTwinRustAsync {
    pub value: u32,
}

pub trait SimpleTraitTwinRustAsync {
    fn simple_trait_fn_twin_rust_async() -> Self;

    fn simple_trait_fn_with_default_impl_twin_rust_async() -> i32 {
        42
    }
}

impl SimpleTraitTwinRustAsync for StructWithTraitTwinRustAsync {
    fn simple_trait_fn_twin_rust_async() -> Self {
        StructWithTraitTwinRustAsync { value: 42 }
    }
}