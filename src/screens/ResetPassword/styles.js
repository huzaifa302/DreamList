import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.ratio(20),
    backgroundColor: Colors.white
  },
  buttonStyle: {
    marginTop: 50,
  },
  heading: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.size_24,
    marginTop: Metrics.ratio(10),
  },
  description: {
    fontFamily: Fonts.type.regular,
    color: Colors.GREY_TEXT_COLOR,
    marginTop: Metrics.ratio(15),
  },
});
