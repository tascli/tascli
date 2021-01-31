import 'package:tascli/helpers/json.dart';

void tickLocalTask(json, taskName) {
  for (int i = 0; i < json['tasks'].length; i++) {
    if (json['tasks'][i]['name'] == taskName) {
      json['tasks'][i]['finished'] = true;
    }
  }

  writeJson(json);
}