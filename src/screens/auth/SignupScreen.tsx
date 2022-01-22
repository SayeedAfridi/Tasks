import { SignupFeatures } from '@src/features';
import { AuthNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';

const SignupScreen: React.FC<AuthNavigationProps<'Signup'>> = (props) => {
  return <SignupFeatures {...props} />;
};

export default SignupScreen;
