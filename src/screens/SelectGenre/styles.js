import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  toggleContainer: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.FIELD_BORDER,
  },
  tickImage: {width: 10, height: 10, marginBottom: 3, tintColor: Colors.white},
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  genreText:{
    fontSize: Fonts.size.size_16,
    fontFamily: Fonts.type.regular,
    color: Colors.black
  }
});
