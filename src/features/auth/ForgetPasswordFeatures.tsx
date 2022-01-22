import { TextInput } from '@src/components';
import { useCurrentThemeMode } from '@src/hooks';
import { AuthNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';
import Authlayout from './components/Authlayout';

export interface ForgetPasswordFeaturesProps
  extends AuthNavigationProps<'ForgetPassword'> {}

const ForgetPasswordFeatures: React.FC<ForgetPasswordFeaturesProps> = ({
  navigation,
}) => {
  const themeMode = useCurrentThemeMode();
  const handleBackButtonPress = () => {
    navigation.goBack();
  };
  const handleSecondaryPress = () => {
    navigation.navigate('Signin');
  };
  const handleSubmit = () => {};
  return (
    <Authlayout
      title='Forget Password'
      mainButtonTitle='Send Link'
      mainButtonPress={handleSubmit}
      accountText='Already have an account?'
      backPress={handleBackButtonPress}
      secondaryButtonTitle='Signin'
      secondaryButtonPress={handleSecondaryPress}
      animation={require('./assets/forgetpass')}
    >
      <TextInput
        placeholder='Your Email'
        keyboardAppearance={themeMode}
        keyboardType='email-address'
        autoCapitalize='none'
      />
    </Authlayout>
  );
};

export default ForgetPasswordFeatures;
