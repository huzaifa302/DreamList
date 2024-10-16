import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';
import { TextInput } from 'react-native-gesture-handler';

export default StyleSheet.create({
  container: {
    marginTop: 10,
    position: 'relative',
  },
  inputField:{
    height: 46,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: Colors.FIELD_BORDER,
    paddingLeft: 45,
  },
  imageContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 10
  },
  image: {height: 20, width: 20, tintColor: Colors.SEPARATOR_LINE},
  separator: {
    borderWidth: 1,
    height: 22,
    width: 1,
    borderColor: Colors.FIELD_BORDER,
    marginLeft: 10,
  }
});
