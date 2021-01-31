import 'package:prompts/prompts.dart' as prompts;
import 'package:tascli/helpers/types.dart';
import 'package:tascli/helpers/json.dart';

void createLocalTask(Map<String, dynamic> json) {
  Map<String, dynamic> task = new Map();

  task['name'] = prompts.get('Enter the name:');
  task['description'] = prompts.get('And the description?');
  task['date'] = prompts.get('When should this task finished?');
  task['favourite'] = prompts.getBool('Do you love it?');

  task['finished'] = false;

  List<dynamic> tasks = json['tasks'];
  tasks.add(task);
  writeJson(json);
}