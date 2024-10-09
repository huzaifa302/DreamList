import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white, paddingHorizontal: 20},
  subConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  stepButton: {flexDirection: 'row', alignItems: 'center'},
 stepsView: {
    borderWidth: 1,
    borderRadius: 50,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  ImagePickerConatiner: {
  width: 92,
  height: 92,
  borderWidth: 1,
  borderColor: Colors.LIGHT_TONE,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderStyle: 'dashed',
},
cameraIcon: {height: 24, width: 24},
uploadText: {
  textAlign: 'center',
  paddingTop: 10,
  fontFamily: Fonts.type.regular,
  fontSize: Fonts.size.size_14,
}
});
