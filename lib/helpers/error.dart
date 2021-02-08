import 'package:tascli/helpers/colors.dart';

void commandNotFound() {
  print(red('404') + ' - requested command not found!');
  print('Tip: ' + yellow('tascli') + ' help');
}

void taskNotFound() {
  print(red('404') + ' - task not found!');
  print('Tip: Use ' + yellow('tascli ') + 'list to find existing task.');
}

void unexpectedError() {
  print(red('500') + ' - short: we don\'t know why');
  print('Tip: Submit an issue on https://github.com/tascli/tascli/issues.');
}

void main() {
  commandNotFound();
  taskNotFound();
  unexpectedError();
}