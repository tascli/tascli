import 'package:args/args.dart';
import 'package:tascli/commands/delete.dart';
import 'package:tascli/commands/tick.dart';
import 'package:tascli/commands/untick.dart';
import 'package:tascli/helpers/json.dart';
import 'package:tascli/commands/list.dart';
import 'package:tascli/commands/create.dart';

ArgResults argResults;

void main(arguments) async {

  Map<String, dynamic> json = await getJson();

  final parser = ArgParser();
  argResults = parser.parse(arguments);

  if (argResults.rest[0] == 'create') {
    createLocalTask(json);
  } else if (argResults.rest[0] == 'list') {
    listLocalTasks(json);
  } else if (argResults.rest[0] == 'delete') {
    deleteLocalTask(json, argResults.rest[1]);
  } else if (argResults.rest[0] == 'tick') {
    tickLocalTask(json, argResults.rest[1]);
  } else if (argResults.rest[0] == 'untick') {
    untickLocalTask(json, argResults.rest[1]);
  }
}