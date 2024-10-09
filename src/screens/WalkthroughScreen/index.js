import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import Video, {VideoRef} from 'react-native-video';
import styles from './styles';
import {AppButton, Block} from '../../common';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts, Images} from '../../theme';
import {NavigationService} from '../../utils';

const {height, width} = Dimensions.get('window');

const Walkthrough = () => {
  const videoRef = useRef(null);

  const RegisterPress = () => {
    NavigationService.navigate('Register');
  };

  const SignInPress = () => {
    NavigationService.navigate('SignIn');
  };

  const TermPress = () => {
    NavigationService.navigate('TermOfUse');
  };

  const PrivacyPress = () => {
    NavigationService.navigate('PrivacyPolicy');
  };

  return (
    <Block style={styles.container}>
      <Video
        source={require('../../assets/video/BackgroundVideo.mp4')}
        ref={videoRef}
        repeat={true}
        style={styles.backgroundVideo}></Video>
      <Block style={styles.subContainer}>
        <Image
          source={Images.images.logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textConatiner}>
          <Text style={styles.welcomeText}>
            Welcome to{'\n'}
            <Text style={styles.titleText}>Dreamlist</Text>
          </Text>

          <Text style={styles.description}>
            Your own personal Dreamlist?{'\n'}Real Playlists, Real Music, Real
            People
          </Text>
        </View>
      </Block>
      <View style={styles.buttonContainer}>
        <View style={{flex: 1,}}>
        <AppButton
          title={'Register?'}
          onPress={RegisterPress}
          useLinear={true}
          linearStyle={ {marginTop: 0} }
        />
        </View>
        <View style={{flex: 1}}>
        <AppButton title={'Sign In'} onPress={SignInPress}  containerStyle={styles.signInButton} />
        </View>
      </View>
      <View style={styles.quickLinksContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.termTouch}
          onPress={TermPress}>
          <Text style={styles.term}>Terms of Use</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.privacyTouch}
          onPress={PrivacyPress}>
          <Text style={styles.privacy}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </Block>
  );
};

export default Walkthrough;
