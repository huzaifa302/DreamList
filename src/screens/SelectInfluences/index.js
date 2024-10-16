import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Images} from '../../theme';
import {useHookForm} from '../../utils/ValidationUtil';
import SearchInput from '../../components/SearchInput';
import styles from './styles';

const SelectInfluences = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const data = [
    {
      image: Images.influnencersIcons.anjum,
      name: 'Talha Anjum',
    },
    {
      image: Images.influnencersIcons.yunus,
      name: 'Talhah Yunus',
    },
    {
      image: Images.influnencersIcons.faris,
      name: 'Faris Shafi',
    },
    {
      image: Images.influnencersIcons.mustafa,
      name: 'Mustafa Zahid',
    },
    {
      image: Images.influnencersIcons.travis,
      name: 'Travis Scott',
    },
    {
      image: Images.influnencersIcons.eminem,
      name: 'Eminem',
    },
    {
      image: Images.influnencersIcons.dua,
      name: 'Dua Lipa',
    },
    {
      image: Images.influnencersIcons.jj47,
      name: 'JJ47',
    },
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{height: 45, width: 45}} source={item.image} />
        <Text style={{paddingLeft: 20}}>{item.name}</Text>
      </View>
      <TouchableOpacity
        onPress={toggleCheckBox}
        style={[
          styles.toggleContainer,
          {
            backgroundColor: isChecked ? Colors.PRIMARY_COLOR : Colors.white,
          },
        ]}>
        {isChecked && (
          <Image
            source={Images.icons.checkicon}
            style={styles.tickImage}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{backgroundColor: Colors.white, flex: 1, paddingHorizontal: 20}}>
      <SearchInput />
      <FlatList renderItem={renderItem} data={data} contentContainerStyle={{marginTop: 10}} />
    </View>
  );
};

export default SelectInfluences;
