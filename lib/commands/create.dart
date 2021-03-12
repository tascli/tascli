import 'package:prompts/prompts.dart' as prompts;
import 'package:tascli/helpers/json.dart';

void createLocalTask(Map<String, dynamic> json, String taskName) {
  Map<String, dynamic> task = new Map();

  if (taskName == null) {
    task['name'] = prompts.get('Enter the name:');
  } else {
    task['name'] = taskName;
  }

  task['description'] = prompts.get('And the description?');
  task['date'] = prompts.get('When should this task finished?');
  task['favourite'] = prompts.getBool('Mark as favourite?');

  task['state'] = 1;

  List<dynamic> tasks = json['tasks'];
  tasks.add(task);
  writeJson(json);
}
