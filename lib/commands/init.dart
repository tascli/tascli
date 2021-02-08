import 'package:tascli/helpers/getSystem.dart';
import 'package:tascli/helpers/json.dart';
import 'package:tascli/helpers/colors.dart';

void init() {
  Map<String, dynamic> json = {'tasks': []};
  writeJson(json);
  print(green('✓') +
      ' Empty tascli.json created successfully in ' +
      bold(getSystem()[0]));
}
