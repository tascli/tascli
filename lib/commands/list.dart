import 'package:colorize/colorize.dart';

void listLocalTasks (Map<String, dynamic> json) {

  for (var i = 0; i < json['states'].length; ++i) {
    Map<String, dynamic> state = json['states'][i];

    // TODO: Add more colors
    if (state['color'] == 'blue') {
      print(new Colorize('${json['states'][i]['name']}:')..cyan()..bold());
    }

    for (var n = 0; n < json['tasks'].length; ++n) {
      if (json['tasks'][n]['state'] == state['name']) {
        print('  ${new Colorize('${json['tasks'][n]['id']}.')..darkGray()} ${new Colorize(json['tasks'][n]['name'])..bold()..underline()} ${json['tasks'][n]['description']}');
      }
    }
  }


}