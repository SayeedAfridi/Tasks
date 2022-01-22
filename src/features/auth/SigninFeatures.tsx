import { TextInput } from '@src/components';
import { useCurrentThemeMode } from '@src/hooks';
import { AuthNavigationProps } from '@src/navigator/navigator.types';
import { signinAsync } from '@src/redux/auth/auth.async';
import { selectIsSigningIn } from '@src/redux/auth/auth.selectors';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Authlayout from './components/Authlayout';
import { signinInitialValues, signinSchema } from './Schemas';

export interface SigninFeaturesProps extends AuthNavigationProps<'Signin'> {}

const SigninFeatures: React.FC<SigninFeaturesProps> = ({ navigation }) => {
  const themeMode = useCurrentThemeMode();
  const loading = useSelector(selectIsSigningIn);
  const dispatch = useDispatch();

  const handleForgetPasswordPress = () => {
    navigation.navigate('ForgetPassword');
  };
  const handleSecondaryPress = () => {
    navigation.navigate('Signup');
  };

  const handleSubmit = (v: typeof signinInitialValues) => {
    dispatch(signinAsync(v));
  };

  const {
    handleSubmit: submit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: signinInitialValues,
    validationSchema: signinSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Authlayout
      title='Signin'
      forgetPassPress={handleForgetPasswordPress}
      mainButtonTitle='Signin'
      mainButtonPress={submit}
      accountText="Don't have an account?"
      secondaryButtonTitle='Create Account'
      secondaryButtonPress={handleSecondaryPress}
      animation={require('./assets/login')}
      busy={loading}
    >
      <TextInput
        placeholder='Your Email'
        keyboardAppearance={themeMode}
        keyboardType='email-address'
        autoCapitalize='none'
        value={values.email}
        error={errors.email}
        touched={touched.email}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
      />
      <TextInput
        placeholder='Your Password'
        keyboardAppearance={themeMode}
        password
        autoCapitalize='none'
        value={values.password}
        error={errors.password}
        touched={touched.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
      />
    </Authlayout>
  );
};

export default SigninFeatures;
