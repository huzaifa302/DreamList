import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';
import {Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
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

  codeFieldStyle: {
    width: Metrics.ratio(58),
    height: Metrics.ratio(58),
    borderRadius: 10,
    borderColor: Colors.FIELD_BORDER,
    borderWidth: 1,
    backgroundColor: Colors.white,
    marginHorizontal: 5,
  },
  containerFieldsStyle: {
    marginTop: Metrics.ratio(40),
  },
  focusCellStyle: {
    borderColor: Colors.BUTTON_LINEAR_COLOR,
    backgroundColor: Colors.PRIMARY_INPUT,
  },
  cellStyle: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_16,
    fontSize: Fonts.size.size_12,
    color: Colors.GREY,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    lineHeight: Metrics.ratio(50),
  },
  containerTimerStyle: {marginTop: Metrics.ratio(10)},
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },

  didNotText: {
    marginRight: 3,
    fontFamily: Fonts.type.regular,
    color: Colors.GREY_TEXT_COLOR,
  },
  resendText: {
    fontFamily: Fonts.type.bold,
    color: Colors.RED_TEXT_COLOR,
  },
  time: {
    fontFamily: Fonts.type.bold,
    color: Colors.RED_TEXT_COLOR,
  },
  expireText: {
    fontFamily: Fonts.type.regular,
    color: Colors.GREY_TEXT_COLOR,
  },
});
