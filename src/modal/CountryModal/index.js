import React, {useEffect, useImperativeHandle, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {Util} from '../../utils';
import {ButtonView} from '../../components';
import Modal from 'react-native-modal';
import style from './style';
import {Metrics} from '../../theme';
import {CountryPicker} from 'react-native-country-codes-picker';
import {Block} from '../../common';

const CountryModal = (props, forwardedRef) => {
  const [data, setData] = useState({
    description: undefined,
    isVisible: false,
    isNassuGame: false,
    holeData: [],
    callback: () => {},
  });

  const [isKeyboardHeight, setKeyboardHeight] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardHeight(e.endCoordinates.height); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // hide modal function
  const hideModal = () => {
    setData({...data, isVisible: false});
  };

  // show and hide functions for ref
  useImperativeHandle(forwardedRef, () => ({
    show: (options = data) => {
      setData({...options, isVisible: true});
    },
    hide: hideModal,
  }));

  const {title, description, callback, isVisible} = data;

  const modalHeight = Metrics.screenHeight - Metrics.navBarWithStatusHeight;

  return (
    <CountryPicker
      show={isVisible}
      onBackdropPress={() => {
        hideModal();
      }}
      style={{
        marginTop: Metrics.navBarWithStatusHeight,
        modal: {
          height: Util.isPlatformAndroid()
            ? modalHeight - isKeyboardHeight
            : modalHeight,
        },
      }}
      pickerButtonOnPress={item => {
        data?.callback && data?.callback(item);
        hideModal();
      }}
    />
  );
};

export default React.forwardRef(CountryModal);
