import {View, Text, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Colors, Images} from '../../theme';
import styles from './styles';
import { AppButton } from '../../common';
import { NavigationService } from '../../utils';
import { useRoute } from '@react-navigation/native'; // Import useRoute
import SearchInput from '../../components/SearchInput';

const SelectGenre = () => {
  const route = useRoute(); // Get the route object
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleCheckBox = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const data = [
    {id: 1, title: 'Pop'},
    {id: 2, title: 'HipHop'},
    {id: 3, title: 'Jazz'},
    {id: 4, title: 'Rock'},
    {id: 5, title: 'Metal'},
    {id: 6, title: 'Electric'},
    {id: 7, title: 'Qawali'},
    {id: 8, title: 'Bollywood'},
    {id: 9, title: 'Hollywood'},
    {id: 10, title: '90s'},
  ];

  // Handle submit button
  const handleSubmit = () => {
    const selectedGenresTitles = data
      .filter(item => selectedItems.includes(item.id))
      .map(item => item.title);
    
    // Ensure onGenreSelect is defined before calling
    if (route.params?.onGenreSelect) {
      route.params.onGenreSelect(selectedGenresTitles);
    }

    NavigationService.goBack(); // Go back to the previous screen
  };

  const renderItem = ({item}) => (
    <View style={styles.genreContainer}>
      <Text style={styles.genreText}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => toggleCheckBox(item.id)}
        style={[
          styles.toggleContainer,
          {
            backgroundColor: selectedItems.includes(item.id)
              ? Colors.PRIMARY_COLOR
              : Colors.white,
          },
        ]}>
        {selectedItems.includes(item.id) && (
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
    <ScrollView
      style={{backgroundColor: Colors.white, flex: 1, paddingHorizontal: 20}}>
        <SearchInput />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <AppButton useLinear={true} title={'Submit'} onPress={handleSubmit} />
    </ScrollView>
  );
};

export default SelectGenre;
