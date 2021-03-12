import 'package:args/args.dart';
import 'package:tascli/helpers/error.dart';
import 'package:tascli/helpers/json.dart';
import 'package:tascli/commands/list.dart';
import 'package:tascli/commands/create.dart';
import 'package:tascli/commands/help.dart';
import 'package:tascli/commands/delete.dart';
import 'package:tascli/commands/init.dart';

ArgResults argResults;

void main(arguments) async {
  Map<String, dynamic> json = await getJson();

  final parser = ArgParser();
  argResults = parser.parse(arguments);

  // List
  if (argResults.rest.length == 0) {
    listLocalTasks(json);
  }
  else if (argResults.rest[0] == 'list') {
    listLocalTasks(json);
  }

  // Delete
  else if (argResults.rest[0] == 'delete') {
    if (argResults.rest.length == 1) {
      taskNotFound();
    } else {
      deleteLocalTask(json, argResults.rest[1]);
    }
  }

  // Help
  else if (argResults.rest[0] == 'help') {
    help();
  }

  // Create
  else if (argResults.rest[0] == 'create') {
    if (argResults.rest.length == 1) {
      createLocalTask(json, null);
    } else {
      createLocalTask(json, argResults.rest[1]);
    }
  }

  // Init
  else if (argResults.rest[0] == 'init') {
    init();
  }

  // 404
  else {
    commandNotFound();
  }
}