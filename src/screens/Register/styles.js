import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 40,
  },
  logo: {height: 60, width: width / 2, marginTop: Metrics.ratio(30)},
  heading: {
    paddingTop: 35,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.size_24,
  },
  description: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_14,
    color: Colors.GREY_TEXT_COLOR,
    paddingTop: 8
  }, toggleContainer: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.FIELD_BORDER,
  },
  tickImage: {width: 10, height: 10, marginBottom: 3},
  TermsText: {
    fontFamily: Fonts.type.bold,
    color: Colors.RED_TEXT_COLOR,
  },
  lastContainer: {justifyContent: 'center', flexDirection: 'row'},
  alreadyText: {
    paddingRight: 5,
    fontFamily: Fonts.type.regular,
    color: Colors.black,
  },
  signInText: {
    fontFamily: Fonts.type.regular,
    color: Colors.RED_TEXT_COLOR,
  }

});
