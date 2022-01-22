import { ForgetPasswordFeatures } from '@src/features';
import { AuthNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';

const ForgetPasswordScreen: React.FC<AuthNavigationProps<'ForgetPassword'>> = (
  props
) => {
  return <ForgetPasswordFeatures {...props} />;
};

export default ForgetPasswordScreen;
