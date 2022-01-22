import { SigninFeatures } from '@src/features';
import { AuthNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';

const SigninScreen: React.FC<AuthNavigationProps<'Signin'>> = (props) => {
  return <SigninFeatures {...props} />;
};

export default SigninScreen;
