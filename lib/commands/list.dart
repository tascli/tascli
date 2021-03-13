import 'package:colorize/colorize.dart';

void listLocalTasks (Map<String, dynamic> json) {

  for (var i = 0; i < json['states'].length; ++i) {
    Map<String, dynamic> state = json['states'][i];

    // Blue
    if (state['color'] == 'blue') {
      print(new Colorize('\n${json['states'][i]['name']}:')..blue()..bold());
    }
    // Red
    else if (state['color'] == 'red') {
      print(new Colorize('\n${json['states'][i]['name']}:')..red()..bold());
    }
    // Yellow
    else if (state['color'] == 'yellow') {
      print(new Colorize('\n${json['states'][i]['name']}:')..yellow()..bold());
    }
    // Green
    else if (state['color'] == 'green') {
      print(new Colorize('\n${json['states'][i]['name']}:')..green()..bold());
    }

    for (var n = 0; n < json['tasks'].length; ++n) {
      if (json['tasks'][n]['state'] == state['name']) {
        print('  ${new Colorize('${json['tasks'][n]['id']}.')..darkGray()} ${new Colorize(json['tasks'][n]['name'])..bold()..underline()} ${json['tasks'][n]['description']}');
      }
    }
  }


}