import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  text: {padding: 30},
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.ratio(46, 46, true),
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: Metrics.generatedFontSize(16, 16, true),
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.size_16
  },
  linearbabaStyle: { borderRadius: 10, marginTop: 25, },
  

});
