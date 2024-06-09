// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.37.

// ignore_for_file: invalid_use_of_internal_member, unused_import, unnecessary_import

import '../../auxiliary/new_module_system/sub_module.dart';
import '../../auxiliary/old_module_system/sub_module.dart';
import '../../auxiliary/sample_types.dart';
import '../../frb_generated.dart';
import 'package:flutter_rust_bridge/flutter_rust_bridge_for_generated.dart';

Future<bool> useImportedStructTwinRustAsync({required MyStruct myStruct}) =>
    RustLib.instance.api
        .crateApiPseudoManualExternalTypeInCrateTwinRustAsyncUseImportedStructTwinRustAsync(
            myStruct: myStruct);

Future<bool> useImportedEnumTwinRustAsync({required MyEnum myEnum}) => RustLib
    .instance.api
    .crateApiPseudoManualExternalTypeInCrateTwinRustAsyncUseImportedEnumTwinRustAsync(
        myEnum: myEnum);

Future<OldSimpleStruct> callOldModuleSystemTwinRustAsync() => RustLib
    .instance.api
    .crateApiPseudoManualExternalTypeInCrateTwinRustAsyncCallOldModuleSystemTwinRustAsync();

Future<NewSimpleStruct> callNewModuleSystemTwinRustAsync() => RustLib
    .instance.api
    .crateApiPseudoManualExternalTypeInCrateTwinRustAsyncCallNewModuleSystemTwinRustAsync();