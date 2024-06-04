// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.37.

// ignore_for_file: invalid_use_of_internal_member, unused_import, unnecessary_import

import '../../auxiliary/sample_types.dart';
import '../../frb_generated.dart';
import 'package:flutter_rust_bridge/flutter_rust_bridge_for_generated.dart';

Future<void> funcReturnUnitTwinSse() => RustLib.instance.api
    .crateApiPseudoManualMiscTypeTwinSseFuncReturnUnitTwinSse();

Future<List<MySize>> handleListOfStructTwinSse({required List<MySize> l}) =>
    RustLib.instance.api
        .crateApiPseudoManualMiscTypeTwinSseHandleListOfStructTwinSse(l: l);

Future<List<String>> handleStringListTwinSse({required List<String> names}) =>
    RustLib.instance.api
        .crateApiPseudoManualMiscTypeTwinSseHandleStringListTwinSse(
            names: names);

Future<EmptyTwinSse> emptyStructTwinSse({required EmptyTwinSse empty}) =>
    RustLib.instance.api
        .crateApiPseudoManualMiscTypeTwinSseEmptyStructTwinSse(empty: empty);

class EmptyTwinSse {
  const EmptyTwinSse();

  @override
  int get hashCode => 0;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is EmptyTwinSse && runtimeType == other.runtimeType;
}