// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.37.

// ignore_for_file: invalid_use_of_internal_member, unused_import, unnecessary_import

import '../../auxiliary/sample_types.dart';
import '../../frb_generated.dart';
import '../mirror.dart';
import 'package:flutter_rust_bridge/flutter_rust_bridge_for_generated.dart';
import 'package:freezed_annotation/freezed_annotation.dart' hide protected;
part 'mirror_twin_sync.freezed.dart';

ApplicationSettings getAppSettingsTwinSync() => RustLib.instance.api
    .crateApiPseudoManualMirrorTwinSyncGetAppSettingsTwinSync();

ApplicationSettings getFallibleAppSettingsTwinSync() => RustLib.instance.api
    .crateApiPseudoManualMirrorTwinSyncGetFallibleAppSettingsTwinSync();

bool isAppEmbeddedTwinSync({required ApplicationSettings appSettings}) =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncIsAppEmbeddedTwinSync(
            appSettings: appSettings);

Stream<ApplicationSettings> appSettingsStreamTwinSync() => RustLib.instance.api
    .crateApiPseudoManualMirrorTwinSyncAppSettingsStreamTwinSync();

Stream<List<ApplicationSettings>> appSettingsVecStreamTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncAppSettingsVecStreamTwinSync();

Stream<MirrorStructTwinSync> mirrorStructStreamTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncMirrorStructStreamTwinSync();

Stream<(ApplicationSettings, RawStringEnumMirrored)>
    mirrorTupleStreamTwinSync() => RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncMirrorTupleStreamTwinSync();

ApplicationMessage getMessageTwinSync() =>
    RustLib.instance.api.crateApiPseudoManualMirrorTwinSyncGetMessageTwinSync();

Numbers repeatNumberTwinSync({required int num, required BigInt times}) =>
    RustLib.instance.api.crateApiPseudoManualMirrorTwinSyncRepeatNumberTwinSync(
        num: num, times: times);

Sequences repeatSequenceTwinSync({required int seq, required BigInt times}) =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncRepeatSequenceTwinSync(
            seq: seq, times: times);

int? firstNumberTwinSync({required Numbers nums}) => RustLib.instance.api
    .crateApiPseudoManualMirrorTwinSyncFirstNumberTwinSync(nums: nums);

int? firstSequenceTwinSync({required Sequences seqs}) => RustLib.instance.api
    .crateApiPseudoManualMirrorTwinSyncFirstSequenceTwinSync(seqs: seqs);

RawStringMirrored testRawStringMirroredTwinSync() => RustLib.instance.api
    .crateApiPseudoManualMirrorTwinSyncTestRawStringMirroredTwinSync();

NestedRawStringMirrored testNestedRawStringMirroredTwinSync() => RustLib
    .instance.api
    .crateApiPseudoManualMirrorTwinSyncTestNestedRawStringMirroredTwinSync();

RawStringEnumMirrored testRawStringEnumMirroredTwinSync(
        {required bool nested}) =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncTestRawStringEnumMirroredTwinSync(
            nested: nested);

ListOfNestedRawStringMirrored testListOfRawNestedStringMirroredTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncTestListOfRawNestedStringMirroredTwinSync();

List<RawStringMirrored> testFallibleOfRawStringMirroredTwinSync() => RustLib
    .instance.api
    .crateApiPseudoManualMirrorTwinSyncTestFallibleOfRawStringMirroredTwinSync();

List<RawStringEnumMirrored> testListOfNestedEnumsMirroredTwinSync() => RustLib
    .instance.api
    .crateApiPseudoManualMirrorTwinSyncTestListOfNestedEnumsMirroredTwinSync();

ContainsMirroredSubStructTwinSync testContainsMirroredSubStructTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncTestContainsMirroredSubStructTwinSync();

StructWithHashMap testHashmapWithMirroredValueTwinSync() => RustLib.instance.api
    .crateApiPseudoManualMirrorTwinSyncTestHashmapWithMirroredValueTwinSync();

Stream<ApplicationMode> mirrorEnumStreamTwinSync() => RustLib.instance.api
    .crateApiPseudoManualMirrorTwinSyncMirrorEnumStreamTwinSync();

Stream<ApplicationMode?> mirrorOptionEnumStreamTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncMirrorOptionEnumStreamTwinSync();

Stream<List<ApplicationMode>> mirrorVecEnumStreamTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncMirrorVecEnumStreamTwinSync();

Stream<Map<int, ApplicationMode>> mirrorMapEnumStreamTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncMirrorMapEnumStreamTwinSync();

Stream<Set<ApplicationMode>> mirrorSetEnumStreamTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncMirrorSetEnumStreamTwinSync();

Stream<ApplicationModeArray2> mirrorArrayEnumStreamTwinSync() =>
    RustLib.instance.api
        .crateApiPseudoManualMirrorTwinSyncMirrorArrayEnumStreamTwinSync();

class AnotherTwinSync {
  final String a;

  const AnotherTwinSync({
    required this.a,
  });

  @override
  int get hashCode => a.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AnotherTwinSync &&
          runtimeType == other.runtimeType &&
          a == other.a;
}

class ApplicationEnv {
  final List<ApplicationEnvVar> vars;

  const ApplicationEnv({
    required this.vars,
  });

  @override
  int get hashCode => vars.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ApplicationEnv &&
          runtimeType == other.runtimeType &&
          vars == other.vars;
}

class ApplicationEnvVar {
  final String field0;
  final bool field1;

  const ApplicationEnvVar({
    required this.field0,
    required this.field1,
  });

  @override
  int get hashCode => field0.hashCode ^ field1.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ApplicationEnvVar &&
          runtimeType == other.runtimeType &&
          field0 == other.field0 &&
          field1 == other.field1;
}

@freezed
sealed class ApplicationMessage with _$ApplicationMessage {
  const ApplicationMessage._();

  const factory ApplicationMessage.displayMessage(
    String field0,
  ) = ApplicationMessage_DisplayMessage;
  const factory ApplicationMessage.renderPixel({
    required int x,
    required int y,
  }) = ApplicationMessage_RenderPixel;
  const factory ApplicationMessage.exit() = ApplicationMessage_Exit;
}

enum ApplicationMode {
  standalone,
  embedded,
  ;
}

class ApplicationSettings {
  final String name;
  final String version;
  final ApplicationMode mode;
  final ApplicationEnv env;
  final ApplicationEnv? envOptional;

  const ApplicationSettings({
    required this.name,
    required this.version,
    required this.mode,
    required this.env,
    this.envOptional,
  });

  @override
  int get hashCode =>
      name.hashCode ^
      version.hashCode ^
      mode.hashCode ^
      env.hashCode ^
      envOptional.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ApplicationSettings &&
          runtimeType == other.runtimeType &&
          name == other.name &&
          version == other.version &&
          mode == other.mode &&
          env == other.env &&
          envOptional == other.envOptional;
}

class ContainsMirroredSubStructTwinSync {
  final RawStringMirrored test;
  final AnotherTwinSync test2;

  const ContainsMirroredSubStructTwinSync({
    required this.test,
    required this.test2,
  });

  @override
  int get hashCode => test.hashCode ^ test2.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ContainsMirroredSubStructTwinSync &&
          runtimeType == other.runtimeType &&
          test == other.test &&
          test2 == other.test2;
}

class HashMapValue {
  final String inner;

  const HashMapValue({
    required this.inner,
  });

  @override
  int get hashCode => inner.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is HashMapValue &&
          runtimeType == other.runtimeType &&
          inner == other.inner;
}

class ListOfNestedRawStringMirrored {
  final List<NestedRawStringMirrored> raw;

  const ListOfNestedRawStringMirrored({
    required this.raw,
  });

  @override
  int get hashCode => raw.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ListOfNestedRawStringMirrored &&
          runtimeType == other.runtimeType &&
          raw == other.raw;
}

class MirrorStructTwinSync {
  final ApplicationSettings a;
  final MyStruct b;
  final List<MyEnum> c;
  final List<ApplicationSettings> d;

  const MirrorStructTwinSync({
    required this.a,
    required this.b,
    required this.c,
    required this.d,
  });

  @override
  int get hashCode => a.hashCode ^ b.hashCode ^ c.hashCode ^ d.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is MirrorStructTwinSync &&
          runtimeType == other.runtimeType &&
          a == other.a &&
          b == other.b &&
          c == other.c &&
          d == other.d;
}

class NestedRawStringMirrored {
  final RawStringMirrored raw;

  const NestedRawStringMirrored({
    required this.raw,
  });

  @override
  int get hashCode => raw.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is NestedRawStringMirrored &&
          runtimeType == other.runtimeType &&
          raw == other.raw;
}

class Numbers {
  final Int32List field0;

  const Numbers({
    required this.field0,
  });

  @override
  int get hashCode => field0.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Numbers &&
          runtimeType == other.runtimeType &&
          field0 == other.field0;
}

@freezed
sealed class RawStringEnumMirrored with _$RawStringEnumMirrored {
  const RawStringEnumMirrored._();

  const factory RawStringEnumMirrored.raw(
    RawStringMirrored field0,
  ) = RawStringEnumMirrored_Raw;
  const factory RawStringEnumMirrored.nested(
    NestedRawStringMirrored field0,
  ) = RawStringEnumMirrored_Nested;
  const factory RawStringEnumMirrored.listOfNested(
    ListOfNestedRawStringMirrored field0,
  ) = RawStringEnumMirrored_ListOfNested;
}

class RawStringMirrored {
  final String value;

  const RawStringMirrored({
    required this.value,
  });

  @override
  int get hashCode => value.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is RawStringMirrored &&
          runtimeType == other.runtimeType &&
          value == other.value;
}

class Sequences {
  final Int32List field0;

  const Sequences({
    required this.field0,
  });

  @override
  int get hashCode => field0.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Sequences &&
          runtimeType == other.runtimeType &&
          field0 == other.field0;
}

class StructWithHashMap {
  final Map<String, HashMapValue> map;

  const StructWithHashMap({
    required this.map,
  });

  @override
  int get hashCode => map.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is StructWithHashMap &&
          runtimeType == other.runtimeType &&
          map == other.map;
}