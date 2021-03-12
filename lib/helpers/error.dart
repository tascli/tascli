import 'package:colorize/colorize.dart';

void commandNotFound() {
  print('${new Colorize('404')..red()}- requested command not found!');
  print('Tip: ${new Colorize('tascli')..yellow()}help');
}

void taskNotFound() {
  print('${new Colorize('404')..red()}- task not found!');
  print('Tip: Use ${new Colorize('tascli ')..yellow()}list to find existing task.');
}

void unexpectedError() {
  print('${new Colorize('500')..red()}- short: we don\'t know why');
  print('Tip: Submit an issue on https://github.com/tascli/tascli/issues.');
}

void main() {
  commandNotFound();
  taskNotFound();
  unexpectedError();
}