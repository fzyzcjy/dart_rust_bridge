// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.37.

// ignore_for_file: invalid_use_of_internal_member, unused_import, unnecessary_import

import '../../frb_generated.dart';
import 'package:flutter_rust_bridge/flutter_rust_bridge_for_generated.dart';

Future<DateTime> datetimeUtcTwinRustAsyncSse({required DateTime d}) => RustLib
    .instance.api
    .crateApiPseudoManualChronoTypeTwinRustAsyncSseDatetimeUtcTwinRustAsyncSse(
        d: d);

Future<DateTime> datetimeLocalTwinRustAsyncSse({required DateTime d}) => RustLib
    .instance.api
    .crateApiPseudoManualChronoTypeTwinRustAsyncSseDatetimeLocalTwinRustAsyncSse(
        d: d);

Future<DateTime> naivedatetimeTwinRustAsyncSse({required DateTime d}) => RustLib
    .instance.api
    .crateApiPseudoManualChronoTypeTwinRustAsyncSseNaivedatetimeTwinRustAsyncSse(
        d: d);

Future<DateTime?> optionalEmptyDatetimeUtcTwinRustAsyncSse({DateTime? d}) =>
    RustLib.instance.api
        .crateApiPseudoManualChronoTypeTwinRustAsyncSseOptionalEmptyDatetimeUtcTwinRustAsyncSse(
            d: d);

Future<Duration> durationTwinRustAsyncSse({required Duration d}) =>
    RustLib.instance.api
        .crateApiPseudoManualChronoTypeTwinRustAsyncSseDurationTwinRustAsyncSse(
            d: d);

Future<List<Duration>> handleTimestampsTwinRustAsyncSse(
        {required List<DateTime> timestamps, required DateTime epoch}) =>
    RustLib.instance.api
        .crateApiPseudoManualChronoTypeTwinRustAsyncSseHandleTimestampsTwinRustAsyncSse(
            timestamps: timestamps, epoch: epoch);

Future<List<DateTime>> handleDurationsTwinRustAsyncSse(
        {required List<Duration> durations, required DateTime since}) =>
    RustLib.instance.api
        .crateApiPseudoManualChronoTypeTwinRustAsyncSseHandleDurationsTwinRustAsyncSse(
            durations: durations, since: since);

Future<TestChronoTwinRustAsyncSse> testChronoTwinRustAsyncSse() => RustLib
    .instance.api
    .crateApiPseudoManualChronoTypeTwinRustAsyncSseTestChronoTwinRustAsyncSse();

Future<TestChronoTwinRustAsyncSse> testPreciseChronoTwinRustAsyncSse() => RustLib
    .instance.api
    .crateApiPseudoManualChronoTypeTwinRustAsyncSseTestPreciseChronoTwinRustAsyncSse();

Future<Duration> howLongDoesItTakeTwinRustAsyncSse(
        {required FeatureChronoTwinRustAsyncSse mine}) =>
    RustLib.instance.api
        .crateApiPseudoManualChronoTypeTwinRustAsyncSseHowLongDoesItTakeTwinRustAsyncSse(
            mine: mine);

class FeatureChronoTwinRustAsyncSse {
  final DateTime utc;
  final DateTime local;
  final Duration duration;
  final DateTime naive;

  const FeatureChronoTwinRustAsyncSse({
    required this.utc,
    required this.local,
    required this.duration,
    required this.naive,
  });

  @override
  int get hashCode =>
      utc.hashCode ^ local.hashCode ^ duration.hashCode ^ naive.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is FeatureChronoTwinRustAsyncSse &&
          runtimeType == other.runtimeType &&
          utc == other.utc &&
          local == other.local &&
          duration == other.duration &&
          naive == other.naive;
}

class TestChronoTwinRustAsyncSse {
  final DateTime? dt;
  final DateTime? dt2;
  final Duration? du;

  const TestChronoTwinRustAsyncSse({
    this.dt,
    this.dt2,
    this.du,
  });

  @override
  int get hashCode => dt.hashCode ^ dt2.hashCode ^ du.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is TestChronoTwinRustAsyncSse &&
          runtimeType == other.runtimeType &&
          dt == other.dt &&
          dt2 == other.dt2 &&
          du == other.du;
}