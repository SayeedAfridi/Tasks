import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgetPasswordScreen, SigninScreen, SignupScreen } from '@src/screens';
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
