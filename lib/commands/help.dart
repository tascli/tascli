 import 'package:tascli/helpers/colors.dart';
import 'package:tascli/helpers/getSystem.dart';

void help() {
  print('\nTasCli is an open-source task-manager for command line lovers 💕. \n');
  print(gray(' Available commands:'));
  print(yellow('  tascli') + ' list - list all tasks');
  print(yellow('  tascli') + ' create - add a new task');
  print(yellow('  tascli') + ' done - finish a task');
  print(yellow('  tascli') + ' delete - delete a task\n');
  print(gray(' Info:'));
  if (getSystem()[1] == 'windows') {
    print(cyan('  tascli.json') + ' stored in ' + getSystem()[0] + '\\tascli.json');
  } else {
    print(cyan('  tascli.json') + ' stored in ' + getSystem()[0] + '/tascli.json');
  }
}