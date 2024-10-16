import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {Colors, Images} from '../../theme';
import styles from './styles';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search any Influencer"
        style={styles.inputField}
      />
      <View style={styles.imageContainer}>
        <Image source={Images.icons.search} style={styles.image} />
        <View style={styles.separator} />
      </View>
    </View>
  );
};

export default SearchInput;
