import { AuthNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';
import { View } from 'react-native';

export interface SigninFeaturesProps extends AuthNavigationProps<'Signin'> {}

const SigninFeatures: React.FC<SigninFeaturesProps> = ({}) => {
  return <View />;
};

export default SigninFeatures;
