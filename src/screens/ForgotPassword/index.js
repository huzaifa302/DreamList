import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {TextInputNative} from '../../components';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import {AppButton} from '../../common';
import styles from './styles';
import { NavigationService } from '../../utils';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import { Images } from '../../theme';

const ForgetPassword = () => {
  const [formObj, emailProps] = useHookForm(
    ['email'],
    {},
    ValidationSchema.forgotPassword,
  );
  const ContinuePress = () => {
    NavigationService.navigate('OTPVerification');
  };
  return (
    <ImageBackground source={Images.images.BackgroundImage} style={{flex:  1,}}>
    <View style={styles.container}>
      <Text style={styles.heading}>Forget Password</Text>
      <Text style={styles.description}>
        Enter the email address associated with your account to receive a
        <Text style={styles.subDescription}> 4-digit verification code</Text>
      </Text>
      <TextInputNative
        title="Email Address"
        {...emailProps}
        customPlaceholder={'Enter Your Email Address'}
        topSpaceLarge
        containerStyle={{marginTop: 30}}
      />
      <AppButton title={'Continue'} useLinear={true} onPress={ContinuePress} />
    </View>
    </ImageBackground>
  );
};

export default ForgetPassword;
