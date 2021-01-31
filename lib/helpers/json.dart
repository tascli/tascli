import 'dart:io';
import 'dart:convert';
import 'package:tascli/helpers/getSystem.dart';
import 'package:tascli/helpers/types.dart';

Future<Map<String, dynamic>> getJson() async {
  Map<String, dynamic> json;

  await new File(getSystem()[0] + '/tascli.json').readAsString().then((String jsonString) {
    json = jsonDecode(jsonString);
  });

  return json;
}

void writeJson(Map<String, dynamic> json) async {
  await new File(getSystem()[0] + '/tascli.json').writeAsString(jsonEncode(json));
}