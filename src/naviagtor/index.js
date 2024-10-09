import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  Header,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationService} from '../utils';
import {
  SignIn,
  Listing,
  SignUp,
  ForgotPassword,
  ChangePassword,
  OTPVerification,
} from '../screens';
import ContentPagesScreen from '../screens/ContentPagesScreen';
import ResetPassword from '../screens/ResetPassword';
import DrawerNavigator from './drawer';
import Languages from '../screens/Languages';
import Walkthrough from '../screens/WalkthroughScreen';
import Register from '../screens/Register';
import TermOfUse from '../screens/TermsOfUse';
import {ButtonView} from '../components';
import {AppButton} from '../common';
import {Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images} from '../theme';
import AccountSuccess from '../screens/AccountSuccess';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import ProfileSetup from '../screens/ProfileSetup';

const Stack = createStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{paddingHorizontal: 20}}
            onPress={() => navigation.goBack()}>
            <Image
              source={Images.icons.backIcon}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          fontFamily: Fonts.type.bold,
          fontSize: Fonts.size.size_22,
        },
        headerShown: true,
        headerShadowVisible: false,
       
      })}
      initialRouteName="Walkthrough">
      <Stack.Screen
        name="Walkthrough"
        component={Walkthrough}
        options={{title: 'Walkthrough', headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Sign In', headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Register', headerShown: false}}
      />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerification}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{title: 'Change Password'}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{title: 'Forgot Password', headerTitle: ''}}
      />
      <Stack.Screen
        name="Listing"
        component={Listing}
        options={{title: 'Listing'}}
      />
      <Stack.Screen
        name="ContentPagesScreen"
        component={ContentPagesScreen}
        options={{title: 'ContentPagesScreen'}}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Languages"
        component={Languages}
        options={{title: 'Change Language'}}
      />
      <Stack.Screen
        name="TermOfUse"
        component={TermOfUse}
        options={{title: 'Term & Conditions'}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{title: 'Privacy Policy'}}
      />
       <Stack.Screen
        name="AccountSucess"
        component={AccountSuccess}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ProfileSetup"
        component={ProfileSetup}
        options={{headerLeft: false, headerTitleAlign:'left' }}
      />
   
    </Stack.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <StackScreens />
    </NavigationContainer>
  );
};

export default AppContainer;
