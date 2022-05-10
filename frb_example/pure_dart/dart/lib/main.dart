import 'dart:ffi';
import 'dart:typed_data';

import 'package:flutter_rust_bridge/flutter_rust_bridge.dart';
import 'package:flutter_rust_bridge_example/bridge_generated.dart';
import 'package:test/test.dart';

void main(List<String> args) async {
  test('main test', () async {
    final dylibPath = args[0];

    print('flutter_rust_bridge example program start (dylibPath=$dylibPath)');

    print('construct api');
    final dylib = DynamicLibrary.open(dylibPath);
    final api = FlutterRustBridgeExampleImpl(dylib);

    print('call functions');

    print('dart call simpleAdder');
    {
      expect(await api.simpleAdder(a: 42, b: 100), 142);
    }

    print('dart call primitiveTypes');
    {
      expect(await api.primitiveTypes(myI32: 123, myI64: 10000000000000, myF64: 12345678901234567890.123, myBool: true),
          42);
    }

    print('dart call primitiveU32');
    {
      expect(await api.primitiveU32(myU32: 0xff112233), 0xfe112233);
    }

    print('dart call handleReturnUnit');
    {
      await api.handleReturnUnit();
    }

    print('dart call handleString');
    {
      expect(await api.handleString(s: "Hello, world!"), "Hello, world!Hello, world!");
    }

    print('dart call handleVecU8');
    {
      final len = 100000;
      expect(await api.handleVecU8(v: Uint8List.fromList(List.filled(len, 127))),
          Uint8List.fromList(List.filled(len * 2, 127)));
    }

    print('dart call handleVecOfPrimitive');
    {
      final n = 10000;
      final resp = await api.handleVecOfPrimitive(n: n);
      expect(resp.uint8List, Uint8List.fromList(List.filled(n, 42)));
      expect(resp.int8List, Int8List.fromList(List.filled(n, 42)));
      expect(resp.uint16List, Uint16List.fromList(List.filled(n, 42)));
      expect(resp.int16List, Int16List.fromList(List.filled(n, 42)));
      expect(resp.uint32List, Uint32List.fromList(List.filled(n, 42)));
      expect(resp.int32List, Int32List.fromList(List.filled(n, 42)));
      expect(resp.uint64List, Uint64List.fromList(List.filled(n, 42)));
      expect(resp.int64List, Int64List.fromList(List.filled(n, 42)));
      expect(resp.float32List, Float32List.fromList(List.filled(n, 42)));
      expect(resp.float64List, Float64List.fromList(List.filled(n, 42)));
    }

    print('dart call handleZeroCopyVecOfPrimitive');
    {
      final n = 10000;
      final resp = await api.handleZeroCopyVecOfPrimitive(n: n);
      expect(resp.uint8List, Uint8List.fromList(List.filled(n, 42)));
      expect(resp.int8List, Int8List.fromList(List.filled(n, 42)));
      expect(resp.uint16List, Uint16List.fromList(List.filled(n, 42)));
      expect(resp.int16List, Int16List.fromList(List.filled(n, 42)));
      expect(resp.uint32List, Uint32List.fromList(List.filled(n, 42)));
      expect(resp.int32List, Int32List.fromList(List.filled(n, 42)));
      expect(resp.uint64List, Uint64List.fromList(List.filled(n, 42)));
      expect(resp.int64List, Int64List.fromList(List.filled(n, 42)));
      expect(resp.float32List, Float32List.fromList(List.filled(n, 42)));
      expect(resp.float64List, Float64List.fromList(List.filled(n, 42)));
    }

    print('dart call handleStruct');
    {
      final structResp =
          await api.handleStruct(arg: MySize(width: 42, height: 100), boxed: MySize(width: 1000, height: 10000));
      expect(structResp.width, 42 + 1000);
      expect(structResp.height, 100 + 10000);
    }

    print('dart call handleNewtype');
    {
      final newtypeResp = await api.handleNewtype(arg: NewTypeInt(field0: 42));
      expect(newtypeResp.field0, 84);
    }

    print('dart call handleListOfStruct');
    {
      final listOfStructResp =
          await api.handleListOfStruct(l: [MySize(width: 42, height: 100), MySize(width: 420, height: 1000)]);
      expect(listOfStructResp.length, 4);
      expect(listOfStructResp[0].width, 42);
      expect(listOfStructResp[1].width, 420);
      expect(listOfStructResp[2].width, 42);
      expect(listOfStructResp[3].width, 420);
    }

    print('dart call handleStringList');
    {
      final names = await api.handleStringList(names: ['Steve', 'Bob', 'Alex']);
      expect(names, ['Steve', 'Bob', 'Alex']);
    }

    print('dart call handleComplexStruct');
    {
      final arrLen = 5;
      final complexStructResp = await api.handleComplexStruct(s: _createMyTreeNode(arrLen: arrLen));
      expect(complexStructResp.valueI32, 100);
      expect(complexStructResp.valueVecU8, List.filled(arrLen, 100));
      expect(complexStructResp.children[0].valueVecU8, List.filled(arrLen, 110));
      expect(complexStructResp.children[0].children[0].valueVecU8, List.filled(arrLen, 111));
      expect(complexStructResp.children[1].valueVecU8, List.filled(arrLen, 120));
    }

    print('dart call handle_sync_return');
    {
      expect(api.handleSyncReturn(mode: 'NORMAL'), List.filled(100, 42));

      for (final mode in ['RESULT_ERR', 'PANIC']) {
        try {
          api.handleSyncReturn(mode: mode);
          fail("exception not thrown");
        } catch (e) {
          print('dart catch e: $e');
          expect(e, isA<FfiException>());
        }
      }
    }

    print('dart call handle_stream');
    {
      final stream = api.handleStream(arg: 'hello');
      var cnt = 0;
      await for (final value in stream) {
        print("output from handle_stream's stream: $value");
        cnt++;
      }
      expect(cnt, 10);
    }

    print('dart call returnErr');
    {
      try {
        await api.returnErr();
        fail("exception not thrown");
      } catch (e) {
        print('dart catch e: $e');
        expect(e, isA<FfiException>());
      }
    }

    print('dart call returnPanic');
    {
      try {
        await api.returnPanic();
        fail("exception not thrown");
      } catch (e) {
        print('dart catch e: $e');
        expect(e, isA<FfiException>());
      }
    }

    print('dart call handleOptionalReturn');
    {
      expect((await api.handleOptionalReturn(left: 1, right: 1))!, 1);
      expect(await api.handleOptionalReturn(left: 2, right: 0), null);
    }

    print('dart call handleOptionalStruct');
    {
      {
        expect(await api.handleOptionalStruct(), null);
      }

      {
        final message = 'Hello there.';
        final ret = await api.handleOptionalStruct(document: message);
        if (ret == null) fail('handleOptionalStruct returned null for non-null document');
        expect(ret.tag, 'div');
        expect(ret.text, null);
        expect(ret.attributes?[0].key, 'id');
        expect(ret.attributes?[0].value, 'root');

        expect(ret.children?[0].tag, 'p');
        expect(ret.children?[0].text, null);
        expect(ret.children?[0].attributes, null);
        expect(ret.children?[0].children?[0].text, message);
      }
    }

    print('dart call handleOptionalIncrement');
    {
      expect(await api.handleOptionalIncrement(), null);

      var ret = await api.handleOptionalIncrement(opt: ExoticOptionals(attributesNullable: []));
      if (ret == null) fail('increment returned null for non-null params');
      final loopFor = 20;
      for (var i = 1; i < loopFor; i++) {
        ret = await api.handleOptionalIncrement(opt: ret);
      }
      if (ret == null) fail('ret nulled after loop');
      expect(ret.int32, loopFor);
      expect(ret.int32, loopFor);
      expect(ret.float64, loopFor);
      expect(ret.boolean, false);
      expect(ret.zerocopy?.length, loopFor);
      expect(ret.int8List?.length, loopFor);
      expect(ret.uint8List?.length, loopFor);
      expect(ret.attributesNullable.length, loopFor);
      expect(ret.nullableAttributes?.length, loopFor);
      expect(ret.newtypeint?.field0, loopFor);
    }

    print('dart call handleIncrementBoxedOptional');
    {
      {
        expect(await api.handleIncrementBoxedOptional(), 42);
      }

      {
        var ret = 0.0;
        final loopFor = 100;
        for (var i = 0; i < loopFor; i++) {
          ret = await api.handleIncrementBoxedOptional(opt: ret);
        }
        expect(ret, loopFor);
      }
    }

    print('dart call handleOptionBoxArguments');
    {
      print(await api.handleOptionBoxArguments());

      {
        final optional10 = await api.handleOptionBoxArguments(
          boolbox: true,
          structbox: await api.handleOptionalIncrement(opt: ExoticOptionals(attributesNullable: [])),
        );
        print(optional10);
      }
    }

    print('dart call handleReturnEnum');
    {
      expect(await api.handleReturnEnum(input: "Tuesday"), Weekdays.Tuesday);
      expect(await api.handleReturnEnum(input: "Foreverday"), null);
    }

    print('dart call handleEnumParameter');
    {
      expect(await api.handleEnumParameter(weekday: Weekdays.Saturday), Weekdays.Saturday);
    }

    print('dart call handleEnumStruct');
    {
      expect(await api.handleEnumStruct(val: Empty()), Empty());
      expect(
        await api.handleEnumStruct(
          val: Primitives(int32: 0, float64: 1, boolean: false),
        ),
        Primitives(int32: 1, float64: 2, boolean: true),
      );
      expect(
        await api.handleEnumStruct(val: Optional(null, 0)),
        Optional(null, 1),
      );
      expect(
        await api.handleEnumStruct(val: Buffer(Uint8List.fromList([]))),
        Buffer(Uint8List.fromList([1])),
      );
      expect(
        await api.handleEnumStruct(val: Enums(Weekdays.Monday)),
        Enums(Weekdays.Tuesday),
      );
      expect(
        await api.handleEnumStruct(val: Nested(Empty(), 0)),
        Nested(Empty(), 1),
      );
    }

    print('dart call useImportedStruct()');
    {
      expect(
        await api.useImportedStruct(myStruct: MyStruct(content: false)),
        false,
      );
      expect(
        await api.useImportedStruct(myStruct: MyStruct(content: true)),
        true,
      );
    }

    print('dart call useImportedEnum()');
    {
      expect(
        await api.useImportedEnum(myEnum: MyEnum.False),
        false,
      );
      expect(
        await api.useImportedEnum(myEnum: MyEnum.True),
        true,
      );
    }

    print('dart call getAppSettings()');
    {
      var settings = await api.getAppSettings();
      expect(settings.version, "1.0.0-rc.1");
      expect(settings.mode, ApplicationMode.Standalone);
      expect(settings.env.vars[0].field0, "myenv");
    }

    print('dart call isAppEmbedded()');
    {
      expect(
          await api.isAppEmbedded(
              appSettings: ApplicationSettings(
                  name: "from dart",
                  version: "XX",
                  mode: ApplicationMode.Embedded,
                  env: ApplicationEnv(vars: [ApplicationEnvVar(field0: "sendback", field1: true)]))),
          true);
    }

    print('dart call getMessage()');
    {
      var message = await api.getMessage();
      expect(message is RenderPixel, true);
      message as RenderPixel;
      expect(message.x, 5);
      expect(message.y, 10);
    }

    _createGarbage();
    await Future.delayed(Duration(seconds: 1));
    _createGarbage();
    await Future.delayed(Duration(seconds: 1));

    print('loop and call many times');
    var obj = _createMyTreeNode(arrLen: 5);
    for (var i = 0; i < 500; ++i) {
      obj = await api.handleComplexStruct(s: obj);
    }

    print('dart call getArray()');
    expect(await api.getArray(), [1, 2, 3, 4, 5]);

    print('dart call returnStructWithArray()');
    {
      var a = MyArray(a: Uint32List.fromList([1, 2, 3]), b: Uint16List.fromList([1]));
      expect(await api.takeAndUnpackArray(a: a), [1, 2, 3]);
    }

    print('dart call returnStructWithArray() with wrong sized list');
    {
      try {
        var a = MyArray(a: Uint32List.fromList([1, 2]), b: Uint16List.fromList([1]));
        await api.takeAndUnpackArray(a: a);
        fail("exception not thrown");
      } catch (e) {
        print(e);
        expect(e, isA<Exception>());
      }
    }

    print('dart call scaleArray()');
    {
      final point1 = Point(x: 1.0, y: 2.0);
      final point2 = Point(x: 3.0, y: 4.0);
      expect(point1.x, 1.0);
      expect(point1.y, 2.0);
      expect(point2.x, 3.0);
      expect(point2.y, 4.0);

      final List<Point> points = await api.scaleArray(points: [point1, point2], scale: 2.0);

      expect(points[0].x, 2.0);
      expect(points[0].y, 4.0);
      expect(points[1].x, 6.0);
      expect(points[1].y, 8.0);
    }

    print('dart call scaleArray() with wrong sized list');
    {
      try {
        final point1 = Point(x: 1.0, y: 2.0);
        await api.scaleArray(points: [point1], scale: 2.0);
        fail("exception not thrown");
      } catch (e) {
        print(e);
        expect(e, isA<Exception>());
      }
    }
    print('dart call getUsize');
    expect(await api.getUsize(u: 2), 2);

    print('flutter_rust_bridge example program end');
  });
}

int _createGarbage() {
  print('dart create garbage (thus make it more possible to GC)');
  var cum = 0;
  for (var i = 0; i < 1000; ++i) {
    final l = List.filled(5000, 42);
    cum += l[42];
  }
  return cum;
}

MyTreeNode _createMyTreeNode({required int arrLen}) {
  return MyTreeNode(
    valueI32: 100,
    valueVecU8: Uint8List.fromList(List.filled(arrLen, 100)),
    valueBoolean: true,
    children: [
      MyTreeNode(
        valueI32: 110,
        valueVecU8: Uint8List.fromList(List.filled(arrLen, 110)),
        valueBoolean: true,
        children: [
          MyTreeNode(
            valueI32: 111,
            valueVecU8: Uint8List.fromList(List.filled(arrLen, 111)),
            valueBoolean: true,
            children: [],
          ),
        ],
      ),
      MyTreeNode(
        valueI32: 120,
        valueVecU8: Uint8List.fromList(List.filled(arrLen, 120)),
        valueBoolean: true,
        children: [],
      ),
    ],
  );
}

// vim:expandtab:ts=2:sw=2
