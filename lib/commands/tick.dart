import 'dart:io';
import 'package:tascli/helpers/error.dart';
import 'package:tascli/helpers/json.dart';

void tickLocalTask(json, taskName) async {
  try {
    for (int i = 0; i < json['tasks'].length; i++) {
      if (json['tasks'][i]['name'] == taskName) {
        json['tasks'][i]['finished'] = true;
        await writeJson(json);
        exit(200);
      }
    }
    taskNotFound();
  } catch (RangeError) {
    taskNotFound();
  }
}