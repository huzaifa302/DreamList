import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, Images} from '../../theme';
import {TextInputNative} from '../../components';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import {NavigationService} from '../../utils';
import {AppButton} from '../../common';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const SignIn = () => {
  const [formObj, emailProps, passwordProps] = useHookForm(
    ['email', 'password'],
    {email: 'john@yopmail.com', password: '123456789'},
    ValidationSchema.logIn,
  );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('Home', {payload: values});
  });

  const ForgetPress = () => {
    NavigationService.navigate('ForgotPassword');
  };

  const RegisterPress = () => {
    NavigationService.navigate('Register');
  };
  return (
    <ImageBackground
      source={Images.images.BackgroundImage}
      style={styles.backgroundImageContainer}>
      <ScrollView>
        <Image
          source={Images.images.logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.signText}>Sign In</Text>
        <TextInputNative
          nextFocusRef={passwordProps.forwardRef}
          maxLength={30}
          topSpaceLarge
          {...emailProps}
          title="Email Address"
          customPlaceholder={'Enter Your Email'}
        />
        <TextInputNative
          title="Password"
          customPlaceholder={'Enter Your Password'}
          secureTextEntry
          topSpaceLarge
          {...passwordProps}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.forgetContainer}
          onPress={ForgetPress}>
          <Text style={styles.forgetText}>Forgot Password?</Text>
        </TouchableOpacity>
        <AppButton
          title={'Sign In'}
          containerStyle={styles.loginButtonStyle}
          textStyle={styles.loginButtonText}
          onPress={submit}
          useLinear={true}
        />
      </ScrollView>
        <View style={styles.lastContainer}>
          <Text style={styles.accountText}>{'Don’t have an account?'}</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={RegisterPress}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

export default SignIn;
