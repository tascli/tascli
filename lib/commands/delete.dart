import 'dart:io';
import 'package:tascli/helpers/error.dart';
import 'package:tascli/helpers/json.dart';

void deleteLocalTask(Map<String, dynamic> json, String taskName) async {
  try {
    for (int i = 0; i < json['tasks'].length; i++) {
      if (json['tasks'][i]['name'] == taskName) {
        json['tasks'].removeAt(i);
        await writeJson(json);
        exit(200);
      }
    }
    taskNotFound();
  } catch (RangeError) {
    taskNotFound();
  }
}

