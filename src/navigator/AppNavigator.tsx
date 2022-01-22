import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, StartupScreen } from '@src/screens';
import { AppRoutes } from './navigator.types';
import AuthNavigator from './AuthNavigator';

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

const AppNavigator: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName='Startup'
    >
      <Screen name='Startup' component={StartupScreen} />
      <Screen name='Home' component={HomeScreen} />
      <Screen name='Authentication' component={AuthNavigator} />
    </Navigator>
  );
};

export default AppNavigator;
