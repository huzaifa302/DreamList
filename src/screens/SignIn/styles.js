import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 30,
    paddingHorizontal: Metrics.ratio(20),
  },
  logo: {height: 60, width: width / 2, marginTop: Metrics.ratio(30), marginBottom: 40},
  signText: {fontFamily: Fonts.type.bold, fontSize: Fonts.size.size_30, marginTop: 40,},
  forgetContainer: {paddingTop: Metrics.ratio(20), alignItems: 'flex-end'},
  forgetText: {
    fontFamily: Fonts.type.bold,
    color: Colors.RED_TEXT_COLOR,
  },
  lastContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 35
  },
  accountText: {
    marginRight: Metrics.ratio(5),
    fontFamily: Fonts.type.regular,
    color: Colors.black,
    fontSize: Fonts.size.size_14,
  },
  signUpText: {
    color: Colors.RED_TEXT_COLOR,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_14,
  },
});
