import React from 'react';
import {ScrollView} from 'react-native';
import {AppButton, Block, Text} from '../../common';
import {TextInputNative} from '../../components';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {View} from 'react-native-reanimated/lib/typescript/Animated';

const ResetPassword = () => {
  const [formObj, passwordProps, confirmPasswordProps] = useHookForm(
    ['password', 'confirmPassword'],
    {},
    ValidationSchema.resetPassword,
  );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('SignIn');
  });

  return (
    <Block flex style={styles.container}>
      <Text style={styles.heading}>Reset Password</Text>
      <Text style={styles.description}>
        Your new password must be different from the{'\n'}previously used
        password{' '}
      </Text>
      <TextInputNative
        title="New Password"
        customPlaceholder={'Enter Your New Password'}
        topSpaceLarge
        maxLength={30}
        nextFocusRef={passwordProps.forwaredRef}
        secureTextEntry
        {...passwordProps}
      />
      <TextInputNative
        title="Confirm New Password"
        customPlaceholder={'Re-Enter Your New Password'}
        topSpaceLarge
        maxLength={30}
        nextFocusRef={passwordProps.forwaredRef}
        secureTextEntry
        {...confirmPasswordProps}
      />
      <AppButton useLinear={true} title={'Reset Password'} onPress={submit} />
    </Block>
  );
};

export default ResetPassword;
