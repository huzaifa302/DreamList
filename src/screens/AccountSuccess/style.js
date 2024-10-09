import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
 container: {flex: 1, backgroundColor: Colors.white, paddingHorizontal: 20},
 subConatiner: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {height: height / 5, width: width},
  heading: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.size_24,
    textAlign: 'center',
    marginTop: 20,
  },
  subText: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_14,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  }
});
