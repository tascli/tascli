import 'package:tascli/helpers/getSystem.dart';
import 'package:colorize/colorize.dart';

void help() {
  print('\nTasCli is an open-source task-manager for command line lovers 💕. \n');
  print(new Colorize(' Available commands:')..bold());
  print('${new Colorize('  tascli')..yellow()} list - list all tasks');
  print('${new Colorize('  tascli')..yellow()} create - add a new task');
  print('${new Colorize('  tascli')..yellow()} done - finish a task');
  print('${new Colorize('  tascli')..yellow()} delete - delete a task\n');
  print(new Colorize('Info:')..bold());
  if (getSystem()[1] == 'windows') {
    print('${new Colorize('  tascli.json')..cyan()} stored in ${getSystem()[0]} \\tascli.json');
  } else {
    print('${new Colorize('  tascli.json')..cyan()} stored in ${getSystem()[0]} /tascli.json');
  }
}