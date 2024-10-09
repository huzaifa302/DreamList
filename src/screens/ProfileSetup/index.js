import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Fonts, Images} from '../../theme';
import {Util} from '../../utils';
import * as Progress from 'react-native-progress';
import styles from './styles';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import {TextInputNative} from '../../components';
import { DropDown } from '../../modal';

const {width, height} = Dimensions.get('window');

const stepBar = [
  {
    id: 0,
    stepNumber: 1,
    stepName: 'Personal info',
  },
  {
    id: 1,
    stepNumber: 2,
    stepName: 'Additional info',
  },
  {
    id: 2,
    stepNumber: 3,
    stepName: 'Payment',
  },
];

const ProfileSetup = () => {
  const [currentId, setCurrentId] = useState(0);

  const progress = (currentId + 1) / stepBar.length;

  const [
    formObj,
    nameProps,
    userNameProps,
    countryProps,
    cityProps,
    dateOfBirthProps,
    preferredGenreProps,
    bioProps,
  ] = useHookForm(
    [
      'name',
      'User Name',
      'Country',
      'City',
      'Date Of Birth',
      'Preferred Genre',
      'Bio',
    ],
    {},
    ValidationSchema.PersonalInformation,
  );

  function getIndex(id) {
    switch (id) {
      case 0:
        return (
          <ScrollView style={{flex: 1, marginTop: 30}}>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.ImagePickerConatiner}>
                <Image source={Images.icons.camera} style={styles.cameraIcon} />
              </TouchableOpacity>
              <Text style={styles.uploadText}>Upload Photo *</Text>
            </View>
            <TextInputNative
              nextFocusRef={nameProps.forwardRef}
              maxLength={30}
              topSpaceLarge
              {...nameProps}
              title="Artist Name"
              customPlaceholder={'Enter Your Name'}
            />
            <TextInputNative
              nextFocusRef={userNameProps.forwardRef}
              maxLength={30}
              topSpaceLarge
              {...userNameProps}
              title="User Name"
              customPlaceholder={'Enter Your User Name'}
            />
            <DropDown />
          </ScrollView>
        );
      case 1:
        return (
          <View>
            <Text>Additional ma ho</Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>Payment ma ho</Text>
          </View>
        );
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subConatiner}>
        {stepBar.map(item => {
          const {
            stepsNameColor,
            bordersColor,
            stepbackgroundColor,
            stepNumberColor,
          } = Util.tabbar(item.id, currentId);

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setCurrentId(item.id)}
              activeOpacity={0.8}
              style={styles.stepButton}>
              <View
                style={[
                  styles.stepsView,
                  {
                    borderColor: bordersColor,
                    backgroundColor: stepbackgroundColor,
                  },
                ]}>
                <Text style={{textAlign: 'center', color: stepNumberColor}}>
                  {item.stepNumber}
                </Text>
              </View>
              <Text style={{color: stepsNameColor}}>{item.stepName}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Progress.Bar
        progress={progress}
        width={width - 40}
        style={{marginTop: 10}}
        unfilledColor={Colors.LIGHT_TONE}
        borderColor="transparent"
        borderWidth={0}
        height={3}
      />
      {getIndex(currentId)}
    </View>
  );
};

export default ProfileSetup;
