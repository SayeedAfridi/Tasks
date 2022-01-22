import {
  NavigationContainerProps,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AppRoutes } from './navigator.types';

export interface RootNavigationContainerProps
  extends NavigationContainerProps {}

export const rootNavRef = React.createRef<NavigationContainerRef<AppRoutes>>();

const RootNavigationContainer: React.FC<RootNavigationContainerProps> = ({
  children,
  ...rest
}) => {
  return (
    <NavigationContainer {...rest} ref={rootNavRef}>
      {children}
    </NavigationContainer>
  );
};

export default RootNavigationContainer;
