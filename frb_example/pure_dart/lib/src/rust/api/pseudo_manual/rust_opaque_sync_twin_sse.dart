// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.37.

// ignore_for_file: invalid_use_of_internal_member, unused_import, unnecessary_import

import '../../frb_generated.dart';
import 'package:flutter_rust_bridge/flutter_rust_bridge_for_generated.dart';

HideDataAnotherTwinSse? syncOptionRustOpaqueTwinSse() => RustLib.instance.api
    .crateApiPseudoManualRustOpaqueSyncTwinSseSyncOptionRustOpaqueTwinSse();

HideDataAnotherTwinSse syncCreateOpaqueTwinSse() => RustLib.instance.api
    .crateApiPseudoManualRustOpaqueSyncTwinSseSyncCreateOpaqueTwinSse();

NonCloneDataTwinSse syncCreateNonCloneTwinSse() => RustLib.instance.api
    .crateApiPseudoManualRustOpaqueSyncTwinSseSyncCreateNonCloneTwinSse();

/// Structure for testing the sync-mode RustOpaque code generator.
/// FrbOpaqueSyncReturn must be only return type.
/// FrbOpaqueSyncReturn must be without wrapper like Option<> Vec<> etc.
FrbOpaqueSyncReturnTwinSse frbSyncGeneratorTestTwinSse() => RustLib.instance.api
    .crateApiPseudoManualRustOpaqueSyncTwinSseFrbSyncGeneratorTestTwinSse();

// Rust type: RustOpaqueNom<FrbOpaqueSyncReturnTwinSse>
@sealed
class FrbOpaqueSyncReturnTwinSse extends RustOpaque {
  // Not to be used by end users
  FrbOpaqueSyncReturnTwinSse.frbInternalDcoDecode(List<dynamic> wire)
      : super.frbInternalDcoDecode(wire, _kStaticData);

  // Not to be used by end users
  FrbOpaqueSyncReturnTwinSse.frbInternalSseDecode(
      BigInt ptr, int externalSizeOnNative)
      : super.frbInternalSseDecode(ptr, externalSizeOnNative, _kStaticData);

  static final _kStaticData = RustArcStaticData(
    rustArcIncrementStrongCount: RustLib.instance.api
        .rust_arc_increment_strong_count_FrbOpaqueSyncReturnTwinSse,
    rustArcDecrementStrongCount: RustLib.instance.api
        .rust_arc_decrement_strong_count_FrbOpaqueSyncReturnTwinSse,
    rustArcDecrementStrongCountPtr: RustLib.instance.api
        .rust_arc_decrement_strong_count_FrbOpaqueSyncReturnTwinSsePtr,
  );
}

// Rust type: RustOpaqueNom<HideDataAnotherTwinSse>
@sealed
class HideDataAnotherTwinSse extends RustOpaque {
  // Not to be used by end users
  HideDataAnotherTwinSse.frbInternalDcoDecode(List<dynamic> wire)
      : super.frbInternalDcoDecode(wire, _kStaticData);

  // Not to be used by end users
  HideDataAnotherTwinSse.frbInternalSseDecode(
      BigInt ptr, int externalSizeOnNative)
      : super.frbInternalSseDecode(ptr, externalSizeOnNative, _kStaticData);

  static final _kStaticData = RustArcStaticData(
    rustArcIncrementStrongCount: RustLib
        .instance.api.rust_arc_increment_strong_count_HideDataAnotherTwinSse,
    rustArcDecrementStrongCount: RustLib
        .instance.api.rust_arc_decrement_strong_count_HideDataAnotherTwinSse,
    rustArcDecrementStrongCountPtr: RustLib
        .instance.api.rust_arc_decrement_strong_count_HideDataAnotherTwinSsePtr,
  );
}

// Rust type: RustOpaqueNom<NonCloneDataTwinSse>
@sealed
class NonCloneDataTwinSse extends RustOpaque {
  // Not to be used by end users
  NonCloneDataTwinSse.frbInternalDcoDecode(List<dynamic> wire)
      : super.frbInternalDcoDecode(wire, _kStaticData);

  // Not to be used by end users
  NonCloneDataTwinSse.frbInternalSseDecode(BigInt ptr, int externalSizeOnNative)
      : super.frbInternalSseDecode(ptr, externalSizeOnNative, _kStaticData);

  static final _kStaticData = RustArcStaticData(
    rustArcIncrementStrongCount: RustLib
        .instance.api.rust_arc_increment_strong_count_NonCloneDataTwinSse,
    rustArcDecrementStrongCount: RustLib
        .instance.api.rust_arc_decrement_strong_count_NonCloneDataTwinSse,
    rustArcDecrementStrongCountPtr: RustLib
        .instance.api.rust_arc_decrement_strong_count_NonCloneDataTwinSsePtr,
  );
}