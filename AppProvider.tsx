import React from 'react';
import AppNavigator from '@src/navigator/AppNavigator';
import { useCurrentThemeMode } from '@src/hooks';
import { StatusBar } from 'expo-status-bar';
import ErrorHandler from '@src/error-handler/ErrorHandler';

const AppProvider: React.FC = ({}) => {
  const mode = useCurrentThemeMode();
  return (
    <>
      <StatusBar style={mode === 'light' ? 'dark' : 'light'} />
      <AppNavigator />
      <ErrorHandler />
    </>
  );
};

export default AppProvider;
