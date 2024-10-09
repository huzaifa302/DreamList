import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {flex: 1, justifyContent: 'center', backgroundColor: 'black'},
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    paddingTop: Metrics.ratio(20),
  },
  logo: {height: Metrics.ratio(80), width: width},
  textConatiner: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: Metrics.ratio(20),
  },
  welcomeText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.size_18,
  },
  titleText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.size_30,
  },
  description: {
    color: Colors.white,
    textAlign: 'center',
    marginTop: Metrics.ratio(30),
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.ratio(20),
    marginTop: Metrics.ratio(30),
    gap: 10,
  },
  signInButton: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.grey,
  },

  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Metrics.ratio(40),
    alignItems: 'flex-end',
  },
  term: {
    color: Colors.GREY_BORDER,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_15,
  },
  termTouch: {paddingRight: Metrics.ratio(20)},
  separator: {borderWidth: 1, borderColor: Colors.GREY_BORDER, height: 20},
  privacyTouch: {paddingLeft: Metrics.ratio(20)},
  privacy: {
    color: Colors.GREY_BORDER,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_15,
  },
});
