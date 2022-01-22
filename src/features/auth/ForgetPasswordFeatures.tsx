import { AuthNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';
import { View } from 'react-native';

export interface ForgetPasswordFeaturesProps
  extends AuthNavigationProps<'ForgetPassword'> {}

const ForgetPasswordFeatures: React.FC<ForgetPasswordFeaturesProps> = ({}) => {
  return <View />;
};

export default ForgetPasswordFeatures;
