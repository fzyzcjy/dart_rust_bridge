// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.37.

// ignore_for_file: invalid_use_of_internal_member, unused_import, unnecessary_import

import '../../auxiliary/sample_types.dart';
import '../../frb_generated.dart';
import 'package:flutter_rust_bridge/flutter_rust_bridge_for_generated.dart';

void funcReturnUnitTwinSync() => RustLib.instance.api
    .crateApiPseudoManualMiscTypeTwinSyncFuncReturnUnitTwinSync();

List<MySize> handleListOfStructTwinSync({required List<MySize> l}) =>
    RustLib.instance.api
        .crateApiPseudoManualMiscTypeTwinSyncHandleListOfStructTwinSync(l: l);

List<String> handleStringListTwinSync({required List<String> names}) => RustLib
    .instance.api
    .crateApiPseudoManualMiscTypeTwinSyncHandleStringListTwinSync(names: names);

EmptyTwinSync emptyStructTwinSync({required EmptyTwinSync empty}) =>
    RustLib.instance.api
        .crateApiPseudoManualMiscTypeTwinSyncEmptyStructTwinSync(empty: empty);

class EmptyTwinSync {
  const EmptyTwinSync();

  @override
  int get hashCode => 0;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is EmptyTwinSync && runtimeType == other.runtimeType;
}