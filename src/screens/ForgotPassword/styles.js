import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';
import {Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.ratio(20),
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
  subDescription: {fontFamily: Fonts.type.bold, color: Colors.black},
});
