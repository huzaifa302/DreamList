import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Fonts, Images} from '../../theme';
import styles from './styles';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import {ButtonView, TextInputNative} from '../../components';
import {AppButton, Block} from '../../common';
import {NavigationService} from '../../utils';

const Register = () => {
  const [formObj, emailProps, passwordProps, confirmProps, nameProps] =
    useHookForm(
      ['email', 'password', 'confirmPassword', 'name'],
      {},
      ValidationSchema.signUp,
    );

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const TermPress = () => {
    NavigationService.navigate('TermOfUse');
  };

  const PrivacyPress = () => {
    NavigationService.navigate('PrivacyPolicy');
  };

  const SignInPress = () => {
    NavigationService.navigate('SignIn');
  };
  const onSubmit = () => {
    NavigationService.navigate('OTPVerification', {isRegister: true}) ;
  };

  return (
    <ImageBackground
      resizeMode="contain"
      source={Images.images.BackgroundImage}
      style={styles.bgContainer}>
      <ScrollView>
        <Image source={Images.images.logo} style={styles.logo} />
        <Text style={styles.heading}>Registration</Text>
        <Text style={styles.description}>
          Please enter your details to Sign Up
        </Text>
        <TextInputNative
          nextFocusRef={nameProps.forwardRef}
          maxLength={30}
          topSpaceLarge
          {...nameProps}
          title="Full Name"
          customPlaceholder={'Enter Your Name'}
        />
        <TextInputNative
          nextFocusRef={emailProps.forwardRef}
          maxLength={30}
          topSpaceLarge
          {...emailProps}
          title="Email Address"
          customPlaceholder={'Enter Your Email Address'}
        />
        <TextInputNative
          nextFocusRef={passwordProps.forwardRef}
          maxLength={30}
          topSpaceLarge
          secureTextEntry
          {...passwordProps}
          title="Password"
          customPlaceholder={'Enter Your Password'}
        />
        <TextInputNative
          nextFocusRef={confirmProps.forwardRef}
          maxLength={30}
          topSpaceLarge
          secureTextEntry
          {...confirmProps}
          title="Confirm Password"
          customPlaceholder={'Confirm Your Password'}
        />
        <Block row style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={toggleCheckBox}
            style={[
              styles.toggleContainer,
              {
                backgroundColor: isChecked
                  ? Colors.white
                  : Colors.RED_TEXT_COLOR,
              },
            ]}>
            <Image
              source={Images.icons.Tick}
              style={styles.tickImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={{paddingLeft: 10}}>
            By creating an account you agree to our{' '}
            <Text onPress={TermPress} style={styles.TermsText}>
              Terms & Conditions and
            </Text>{' '}
            <Text onPress={PrivacyPress} style={styles.TermsText}>
              Privacy Policy
            </Text>
          </Text>
        </Block>
      </ScrollView>
      <Block flex style={{marginBottom: 40}}>
        <AppButton
          useLinear={true}
          title={'Sign Up'}
          linearStyle={{marginBottom: 10}}
          onPress={onSubmit}
        />
        <View style={styles.lastContainer}>
          <Text style={styles.alreadyText}>Already Have An Account?</Text>
          <TouchableOpacity onPress={SignInPress} activeOpacity={0.8}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Block>
    </ImageBackground>
  );
};

export default Register;
