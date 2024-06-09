// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.37.

// ignore_for_file: invalid_use_of_internal_member, unused_import, unnecessary_import

import '../auxiliary/sample_types.dart';
import '../frb_generated.dart';
import 'package:collection/collection.dart';
import 'package:flutter_rust_bridge/flutter_rust_bridge_for_generated.dart';
import 'package:freezed_annotation/freezed_annotation.dart' hide protected;
part 'mirror.freezed.dart';

Future<ApplicationSettings> getAppSettingsTwinNormal() =>
    RustLib.instance.api.crateApiMirrorGetAppSettingsTwinNormal();

Future<ApplicationSettings> getFallibleAppSettingsTwinNormal() =>
    RustLib.instance.api.crateApiMirrorGetFallibleAppSettingsTwinNormal();

Future<bool> isAppEmbeddedTwinNormal(
        {required ApplicationSettings appSettings}) =>
    RustLib.instance.api
        .crateApiMirrorIsAppEmbeddedTwinNormal(appSettings: appSettings);

Stream<ApplicationSettings> appSettingsStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorAppSettingsStreamTwinNormal();

Stream<List<ApplicationSettings>> appSettingsVecStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorAppSettingsVecStreamTwinNormal();

Stream<MirrorStructTwinNormal> mirrorStructStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorMirrorStructStreamTwinNormal();

Stream<(ApplicationSettings, RawStringEnumMirrored)>
    mirrorTupleStreamTwinNormal() =>
        RustLib.instance.api.crateApiMirrorMirrorTupleStreamTwinNormal();

Future<ApplicationMessage> getMessageTwinNormal() =>
    RustLib.instance.api.crateApiMirrorGetMessageTwinNormal();

Future<Numbers> repeatNumberTwinNormal(
        {required int num, required BigInt times}) =>
    RustLib.instance.api
        .crateApiMirrorRepeatNumberTwinNormal(num: num, times: times);

Future<Sequences> repeatSequenceTwinNormal(
        {required int seq, required BigInt times}) =>
    RustLib.instance.api
        .crateApiMirrorRepeatSequenceTwinNormal(seq: seq, times: times);

Future<int?> firstNumberTwinNormal({required Numbers nums}) =>
    RustLib.instance.api.crateApiMirrorFirstNumberTwinNormal(nums: nums);

Future<int?> firstSequenceTwinNormal({required Sequences seqs}) =>
    RustLib.instance.api.crateApiMirrorFirstSequenceTwinNormal(seqs: seqs);

Future<RawStringMirrored> testRawStringMirroredTwinNormal() =>
    RustLib.instance.api.crateApiMirrorTestRawStringMirroredTwinNormal();

Future<NestedRawStringMirrored> testNestedRawStringMirroredTwinNormal() =>
    RustLib.instance.api.crateApiMirrorTestNestedRawStringMirroredTwinNormal();

Future<RawStringEnumMirrored> testRawStringEnumMirroredTwinNormal(
        {required bool nested}) =>
    RustLib.instance.api
        .crateApiMirrorTestRawStringEnumMirroredTwinNormal(nested: nested);

Future<ListOfNestedRawStringMirrored>
    testListOfRawNestedStringMirroredTwinNormal() => RustLib.instance.api
        .crateApiMirrorTestListOfRawNestedStringMirroredTwinNormal();

Future<List<RawStringMirrored>> testFallibleOfRawStringMirroredTwinNormal() =>
    RustLib.instance.api
        .crateApiMirrorTestFallibleOfRawStringMirroredTwinNormal();

Future<List<RawStringEnumMirrored>> testListOfNestedEnumsMirroredTwinNormal() =>
    RustLib.instance.api
        .crateApiMirrorTestListOfNestedEnumsMirroredTwinNormal();

Future<ContainsMirroredSubStructTwinNormal>
    testContainsMirroredSubStructTwinNormal() => RustLib.instance.api
        .crateApiMirrorTestContainsMirroredSubStructTwinNormal();

Future<StructWithHashMap> testHashmapWithMirroredValueTwinNormal() =>
    RustLib.instance.api.crateApiMirrorTestHashmapWithMirroredValueTwinNormal();

Stream<ApplicationMode> mirrorEnumStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorMirrorEnumStreamTwinNormal();

Stream<ApplicationMode?> mirrorOptionEnumStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorMirrorOptionEnumStreamTwinNormal();

Stream<List<ApplicationMode>> mirrorVecEnumStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorMirrorVecEnumStreamTwinNormal();

Stream<Map<int, ApplicationMode>> mirrorMapEnumStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorMirrorMapEnumStreamTwinNormal();

Stream<Set<ApplicationMode>> mirrorSetEnumStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorMirrorSetEnumStreamTwinNormal();

Stream<ApplicationModeArray2> mirrorArrayEnumStreamTwinNormal() =>
    RustLib.instance.api.crateApiMirrorMirrorArrayEnumStreamTwinNormal();

class AnotherTwinNormal {
  final String a;

  const AnotherTwinNormal({
    required this.a,
  });

  @override
  int get hashCode => a.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AnotherTwinNormal &&
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

class ApplicationModeArray2 extends NonGrowableListView<ApplicationMode> {
  static const arraySize = 2;

  @internal
  List<ApplicationMode> get inner => _inner;
  final List<ApplicationMode> _inner;

  ApplicationModeArray2(this._inner)
      : assert(_inner.length == arraySize),
        super(_inner);

  ApplicationModeArray2.init(ApplicationMode fill)
      : this(List<ApplicationMode>.filled(arraySize, fill));
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

class ContainsMirroredSubStructTwinNormal {
  final RawStringMirrored test;
  final AnotherTwinNormal test2;

  const ContainsMirroredSubStructTwinNormal({
    required this.test,
    required this.test2,
  });

  @override
  int get hashCode => test.hashCode ^ test2.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ContainsMirroredSubStructTwinNormal &&
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

class MirrorStructTwinNormal {
  final ApplicationSettings a;
  final MyStruct b;
  final List<MyEnum> c;
  final List<ApplicationSettings> d;

  const MirrorStructTwinNormal({
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
      other is MirrorStructTwinNormal &&
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