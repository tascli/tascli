import 'package:tascli/helpers/colors.dart';
import 'package:tascli/helpers/types.dart';

void listLocalTasks (Map<String, dynamic> json) {
  List<dynamic> tasks = json['tasks'];

  for (int i = 0; i < tasks.length; i++) {
    String name = gray(tasks[i]['name']);
    String tick = ' ';
    if (tasks[i]['finished']) {
      tick = green('✓');
    }
    String favourite = '';
    if (tasks[i]['favourite']) {
      favourite = yellow('★');
    }
    String description = tasks[i]['description'];
    print('$tick $name  $description  $favourite');
  }
}