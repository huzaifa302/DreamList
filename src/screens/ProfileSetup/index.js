import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, Fonts, Images} from '../../theme';
import {ImagePicker, NavigationService, Util} from '../../utils';
import * as Progress from 'react-native-progress';
import styles from './styles';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import {TextInputNative} from '../../components';
import {CountryModal, DropDown} from '../../modal';
import {AppButton} from '../../common';
import DatePicker from '../../components/DatePicker';

const {width, height} = Dimensions.get('window');

const ThirdStepNextPress = () => {
  NavigationService.navigate('PaymentMethod');
};

//Header steps array
const stepBar = [
  {
    id: 0,
    stepNumber: 1,
    stepName: 'Personal info',
  },
  {
    id: 1,
    stepNumber: 2,
    stepName: 'Additional info',
  },
  {
    id: 2,
    stepNumber: 3,
    stepName: 'Payment',
  },
];

//Membership Plan Array
const bulletPoints = [
  {
    title: 'Premium Plan',
    price: '$25.55 ',
    points: [
      'Ability to Favorite Playlists/Playlist Companies',
      'Upload Song for Dreamlist Playlist Submission/Promotion',
      'Waived Entrance Fee for Dreamlist Competitions \n -Premium Users Enter for Free \n -Non-Premium Users Pay Entry Fee',
      'Ad-Free Experience',
      'Home Page Showcases Recommended Playlists',
    ],
  },
  {
    title: 'Free Plan',
    price: '$0.00',
    points: [
      'Search and View Verified Playlists',
      'Comment and Rate Playlists',
      'Follow and Chat with Other Users',
      'Artist of the Week Eligibility',
    ],
  },
];

const ProfileSetup = () => {
  //Handling steps navigation throught this state
  const [currentId, setCurrentId] = useState(0);

  //Handling Membership Plan selcted color, bg etc through this state
  const [selectedPlan, setSelectedPlan] = useState(null);

  //handling upload more fields throught this states
  const [fields, setFields] = useState([{id: Date.now(), canDelete: false}]);

  //Function to add more fields
  const handleUploadMore = () => {
    if (fields.length < 10) {
      setFields([...fields, {id: Date.now(), canDelete: true}]); // New fields have canDelete: true
    } else {
      alert('You can not add more than Ten fields');
    }
  };

  //Function to delete the specific field
  const handleDeleteFields = idToDelete => {
    const updatedFields = fields.filter(field => field.id !== idToDelete);
    setFields(updatedFields);
  };

  //Saved the index of selected plan through this function
  const handlePress = index => {
    setSelectedPlan(index);
  };

  //Handling Progress bar length throught this condition
  const progress = (currentId + 1) / stepBar.length;

  const countryModalRef = useRef();

  const onCountryShow = onChange => {
    countryModalRef.current.show({
      callback: item => {
        console.log(item);
        onChange(item?.name?.en);
      },
    });
  };

  //handle genre states for display on placeholder
  const [selectedGenre, setSelectedGenre] = useState('');

  // Function to handle selected genre from the genre modal
  const handleSelectedGenre = genreArray => {
    setSelectedGenre(genreArray.join(', '));
  };

  //Personal info fields Props and schema
  const [
    formObj,
    nameProps,
    userNameProps,
    countryProps,
    cityProps,
    dateOfBirthProps,
    preferredGenreProps,
    bioProps,
  ] = useHookForm(
    [
      'name',
      'User Name',
      'Country',
      'City',
      'Date Of Birth',
      'Preferred Genre',
      'Bio',
    ],
    {},
    ValidationSchema.PersonalInformation,
  );

  //Handling all three steps of profile setup through cases using id
  function getIndex(id) {
    switch (id) {
      case 0:
        //personal info return start here!!
        return (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}>
            <View style>
              <TouchableOpacity
              onPress={() => ImagePicker.showGalleryAndCameraOptions(val => {
                // onChange(val.uri);
                // setFileType(val);
              })}
                activeOpacity={0.8}
                style={styles.ImagePickerConatiner}>
                <Image source={Images.icons.camera} style={styles.cameraIcon} />
              </TouchableOpacity>
              <Text style={styles.uploadImageText}>Upload Photo *</Text>
            </View>
            <TextInputNative
              nextFocusRef={userNameProps.forwardRef}
              maxLength={30}
              topSpaceLarge
              {...nameProps}
              title="Artist Name"
              customPlaceholder={'Enter Your Name'}
            />
            <TextInputNative
              nextFocusRef={cityProps.forwardRef}
              maxLength={30}
              topSpaceLarge
              {...userNameProps}
              title="User Name"
              customPlaceholder={'Enter Your User Name'}
            />
            <TextInputNative
              maxLength={30}
              topSpaceLarge
              {...countryProps}
              title="Country"
              customPlaceholder={'Select Your Country'}
              onPress={onCountryShow}
              isRightArrow
              isCalendar={false}
            />
            <TextInputNative
              nextFocusRef={bioProps.forwardRef}
              maxLength={30}
              topSpaceLarge
              {...cityProps}
              title="City"
              customPlaceholder={'Enter Your City Name'}
            />
            <DatePicker dateOfBirthProps={dateOfBirthProps} />
            <TextInputNative
              maxLength={30}
              topSpaceLarge
              value={selectedGenre}
              title="Genre Preferred"
              customPlaceholder={
                !selectedGenre ? 'Select Your Genre' : selectedGenre
              }
              onPress={() =>
                NavigationService.navigate('SelectGenre', {
                  onGenreSelect: handleSelectedGenre,
                })
              }
              isRightArrow
              isCalendar={false}
              {...preferredGenreProps}
            />
            <TextInputNative
              maxLength={255}
              topSpaceLarge
              title="Bio"
              customPlaceholder={'Short note about your self'}
              {...bioProps}
              multiline
              multlineStyle={{height: height / 5}}
            />
            <AppButton useLinear={true} title={'Next'} onPress={ ()=> setCurrentId(1)} />
          </ScrollView>
          //personal info return end here!!
        );

      case 1:
        //Additional info return start here!!
        return (
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.linkText}>Link Your Music</Text>
              <TouchableOpacity
                onPress={handleUploadMore}
                activeOpacity={0.8}
                style={styles.uploadContainer}>
                <Text style={styles.uploadText}>+Upload more</Text>
              </TouchableOpacity>
            </View>
            {fields.map((field, index) => (
              <View key={field.id} style={styles.uploadContainer}>
                <TextInput
                  style={styles.linkField}
                  placeholder="Enter Your Spotify Link here"
                />
                {/* Conditional Rendering for Icons */}
                {!field.canDelete ? (
                  <Image source={Images.icons.link} style={styles.linkIcon} />
                ) : (
                  <TouchableOpacity
                    onPress={() => handleDeleteFields(field.id)}
                    style={styles.deleteIcon}>
                    <Image
                      source={Images.icons.delete}
                      style={{
                        height: 24,
                        width: 24,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            ))}
            <AppButton title={'influence'} useLinear={true} onPress={() => NavigationService.navigate('SelectInfluences')} />
          </ScrollView>
          //Additional info return end here!!
        );
      case 2:
        //payment return start here
        return (
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.subscriptionText}>
              Subscription Payment plan
            </Text>
            <Text style={styles.subsDescription}>
              Subscribe for aiming to serve as a comprehensive hub for
              entrepreneurs and business enthusiasts.
            </Text>
            {bulletPoints.map((item, index) => {
              //map of membership plan
              const isSelected = selectedPlan === index;
              return (
                <TouchableOpacity
                  onPress={() => handlePress(index)}
                  activeOpacity={0.8}
                  style={[
                    styles.planContainer,
                    {
                      backgroundColor: isSelected
                        ? Colors.PRIMARY_COLOR
                        : Colors.PLAN_BG,
                    },
                  ]}>
                  <View style={styles.titleAndPriceContainer}>
                    <Text
                      style={[
                        styles.planTitle,
                        {color: isSelected ? Colors.white : Colors.black},
                      ]}>
                      {item?.title}
                    </Text>
                    <Text
                      style={[
                        styles.planPrice,
                        {
                          color: isSelected
                            ? Colors.white
                            : Colors.PRIMARY_COLOR,
                        },
                      ]}>
                      {item?.price}
                    </Text>
                  </View>
                  {item?.points?.map((point, idx) => (
                    <View key={idx} style={styles.planPointContainer}>
                      <Image
                        source={Images.icons.checkicon}
                        style={[
                          styles.planCheckImage,
                          {
                            tintColor: isSelected
                              ? Colors.white
                              : Colors.PRIMARY_COLOR,
                          },
                        ]}
                        resizeMode="contain"
                      />
                      <Text
                        style={[
                          styles.points,
                          {
                            color: isSelected ? Colors.white : Colors.black,
                          },
                        ]}>
                        {point}
                      </Text>
                    </View>
                  ))}
                </TouchableOpacity>
              );
            })}
            <AppButton
              useLinear={true}
              title={'Next'}
              onPress={ThirdStepNextPress}
            />
          </ScrollView>
          //payment return end here
        );
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subConatiner}>
        {stepBar.map(item => {
          //steps map start here
          const {
            stepsNameColor,
            bordersColor,
            stepbackgroundColor,
            stepNumberColor,
          } = Util.tabbar(item.id, currentId);

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setCurrentId(item.id)}
              activeOpacity={0.8}
              style={styles.stepButton}>
              <View
                style={[
                  styles.stepsView,
                  {
                    borderColor: bordersColor,
                    backgroundColor: stepbackgroundColor,
                  },
                ]}>
                <Text style={{textAlign: 'center', color: stepNumberColor}}>
                  {item.stepNumber}
                </Text>
              </View>
              <Text style={{color: stepsNameColor}}>{item.stepName}</Text>
            </TouchableOpacity>
          );
          //steps map end here
        })}
      </View>
      <Progress.Bar
        progress={progress}
        width={width - 40}
        style={{marginTop: 10}}
        unfilledColor={Colors.LIGHT_TONE}
        borderColor="transparent"
        borderWidth={0}
        height={3}
      />
      {getIndex(currentId)}
      <CountryModal ref={countryModalRef} />
    </View>
  );
};

export default ProfileSetup;
