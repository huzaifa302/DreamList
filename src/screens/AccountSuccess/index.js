import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {Colors, Fonts, Images} from '../../theme';
import {AppButton} from '../../common';
import style from './style';
import {NavigationService} from '../../utils';

const ContinuePress = () => {
  NavigationService.navigate('ProfileSetup');
};

const AccountSuccess = () => {
  return (
    <View style={style.container}>
      <View style={style.subConatiner}>
        <View>
          <Image
            resizeMode="contain"
            style={style.imageStyle}
            source={Images.images.success}
          />
          <Text style={style.heading}>Account Successfully{'\n'}Created!</Text>
          <Text style={style.subText}>
            Congratulations! You’ve successfully Registered, you can now enjoy
            the app{' '}
          </Text>
        </View>
      </View>

      <AppButton
        useLinear={true}
        title={'Continue'}
        linearStyle={{marginBottom: 40}}
        onPress={ContinuePress}
      />
    </View>
  );
};

export default AccountSuccess;
