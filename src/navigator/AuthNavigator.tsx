import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgetPasswordScreen, SigninScreen } from '@src/screens';
import SignupScreen from '@src/screens/StartupScreen';
import React from 'react';
import { AuthRoutes } from './navigator.types';

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

const AuthNavigator: React.FC = ({}) => {
  return (
    <Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Screen name='Signin' component={SigninScreen} />
      <Screen name='ForgetPassword' component={ForgetPasswordScreen} />
      <Screen name='Signup' component={SignupScreen} />
    </Navigator>
  );
};

export default AuthNavigator;
