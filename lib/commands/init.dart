import 'package:tascli/helpers/getSystem.dart';
import 'package:tascli/helpers/json.dart';
import 'package:colorize/colorize.dart';

void init() {
  Map<String, dynamic> json = {'tasks': []};
  writeJson(json);
  print('${new Colorize('✓')..green}\n Empty tascli.json created successfully in ${new Colorize(getSystem()[0])..bold()}');
}
