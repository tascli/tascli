import 'dart:io';
import 'package:prompts/prompts.dart' as prompts;
import 'package:tascli/helpers/error.dart';
import 'package:tascli/helpers/json.dart';

void createLocalTask(Map<String, dynamic> json, String taskName, String taskDescription, String taskFavourite) {
  Map<String, dynamic> task = new Map();

  if (taskName == null || taskDescription == null) {
    missingArgument();
    exit(400);
  }


  task['name'] = taskName;
  task['description'] = taskDescription;
  task['favourite'] = taskFavourite != null ? taskFavourite : false;
  task['state'] = json['states'][0]['name'];


  List<dynamic> tasks = json['tasks'];
  tasks.add(task);
  writeJson(json);

  print(json['tasks'].indexOf(task));

  task['id'] = json['tasks'].indexOf(task);
  task['id'] = task['id'] + 1;
  writeJson(json);
}
