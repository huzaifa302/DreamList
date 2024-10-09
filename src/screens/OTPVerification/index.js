import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {AppButton, Block} from '../../common';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Colors, Fonts} from '../../theme';
import {ButtonView} from '../../components';
import {NavigationService, Util} from '../../utils';

const CELL_COUNT = 4;

const OTPVerification = ({route}) => {
  const isForgot = route.params?.isForgot ?? false;
  const isRegister = route.params?.isRegister ?? false;

  console.log(route);
  const [value, setValue] = useState('9999');
  const [timer, setTimer] = useState('00');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });


  function _timer() {
    var count = 15;
    var interval = setInterval(function () {
      setTimer(count < 10 ? '0' + count : count);
      if (count === 0) {
        clearInterval(interval);
        setTimer('00');
      }
      count--;
    }, 1000);
  }

  const VerifyPress = () => {
    isRegister
      ? NavigationService.navigate('AccountSucess')
      : NavigationService.navigate('ResetPassword');
  };

  function RenderOTPVerificationContainer() {

    const email= 'faizasdsdhs@gmail.com'

    return (
      <>
        <Text style={styles.heading}>OTP Verification</Text>
        <Text style={styles.description}>
          Please enter the OTP you received to{'\n'}
          <Text style={styles.subDescription}>"{Util.maskEmail(email)}</Text>
        
        </Text>
        <Block row middle style={styles.containerFieldsStyle}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={null}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Block
                middle
                row
                style={[
                  styles.codeFieldStyle,
                  isFocused && styles.focusCellStyle,
                ]}>
                <Text
                  key={index}
                  style={styles.cellStyle}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </Block>
            )}
          />
        </Block>
        <Block middle row style={styles.containerTimerStyle}>
          <Text style={styles.expireText}>Expires in:</Text>
          <Text style={styles.time}>{' 0:' + timer}</Text>
        </Block>
        <View style={styles.resendContainer}>
          <Text style={styles.didNotText}>Did not recieve code?</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        </View>
        <AppButton
          title="Verify Now"
          containerStyle={styles.btnStyle}
          useLinear={true}
          onPress={VerifyPress}
        />
      </>
    );
  }

  return (
    <ImageBackground style={styles.container}>
      {RenderOTPVerificationContainer()}
    </ImageBackground>
  );
};

export default OTPVerification;
