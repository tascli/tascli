import 'package:tascli/helpers/types.dart';
import 'package:tascli/helpers/json.dart';

void deleteLocalTask (Map<String, dynamic> json, String name) {
  List<Task> tasks = json['tasks'];
  for (int i = 0; i < tasks.length; i++) {
    if (tasks[i].name == name) {
      tasks.removeAt(i);
    }
  }

  writeJson(json);
}