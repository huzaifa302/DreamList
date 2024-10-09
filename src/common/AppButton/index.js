import React from 'react';
import {Text} from 'react-native';
import {ButtonView} from '../../components';
import PropTypes from 'prop-types';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../theme';

const AppButton = ({
  title,
  containerStyle,
  textStyle,
  onPress,
  disabled,
  useLinear,
  linearColor,
  linearStyle,
}) => {
  return useLinear ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[styles.linearbabaStyle, linearStyle]}
      colors={[linearColor || Colors.BUTTON_COLOR, Colors.BUTTON_LINEAR_COLOR]}>
      <ButtonView
        style={[styles.buttonStyle, containerStyle]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[styles.buttonTextStyle, textStyle]}>{title}</Text>
      </ButtonView>
    </LinearGradient>
  ) : (
    <ButtonView
      style={[styles.buttonStyle, containerStyle]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonTextStyle, textStyle]}>{title}</Text>
    </ButtonView>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  useLinear: PropTypes.bool,
  linearColor: PropTypes.array,
  linearStyle: PropTypes.object
};

AppButton.defaultProps = {
  title: '',
  containerStyle: {},
  textStyle: {},
  onPress: () => {},
  disabled: false,
  useLinear: false,
  linearColor: null,
  linearStyle: {},
};

export default AppButton;
