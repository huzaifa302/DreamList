import {View, Text} from 'react-native';
import React, {useState} from 'react';
import TextInputNative from '../TextInputNative';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = ({nextFocusRef, dateOfBirthProps}) => {
  //handle date states
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  // Function to show the modal
  const showDatePicker = () => {
    setShow(true);
  };

  // Function to hide the modal
  const hideDatePicker = () => {
    setShow(false);
  };

  // Function to handle date change
  const handleConfirm = selectedDate => {
    setDate(selectedDate);
    hideDatePicker();
  };

  return (
    <View>
      <TextInputNative
        value={date.toLocaleDateString()}
        nextFocusRef={nextFocusRef}
        topSpaceLarge
        {...dateOfBirthProps}
        title="Date Of Birth"
        customPlaceholder={'Select your Date Of Birth'}
        isCalendar
        onPress={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={show}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={date}
      />
    </View>
  );
};

export default DatePicker;
