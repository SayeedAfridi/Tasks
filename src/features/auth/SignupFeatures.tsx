import { AuthNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';
import { View } from 'react-native';

export interface SignupFeaturesProps extends AuthNavigationProps<'Signup'> {}

const SignupFeatures: React.FC<SignupFeaturesProps> = ({}) => {
  return <View />;
};

export default SignupFeatures;
