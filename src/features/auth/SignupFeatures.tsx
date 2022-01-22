import { TextInput } from '@src/components';
import { useCurrentThemeMode } from '@src/hooks';
import { AuthNavigationProps } from '@src/navigator/navigator.types';
import { signupAsync } from '@src/redux/auth/auth.async';
import { selectIsSigningUp } from '@src/redux/auth/auth.selectors';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Authlayout from './components/Authlayout';
import { signupInitialValues, signupSchema } from './Schemas';

export interface SignupFeaturesProps extends AuthNavigationProps<'Signup'> {}

const SignupFeatures: React.FC<SignupFeaturesProps> = ({ navigation }) => {
  const themeMode = useCurrentThemeMode();
  const loading = useSelector(selectIsSigningUp);
  const dispatch = useDispatch();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };
  const handleSecondaryPress = () => {
    navigation.navigate('Signin');
  };
  const handleSubmit = (v: typeof signupInitialValues) => {
    const data = {
      email: v.email,
      password: v.password,
      name: v.name,
    };
    dispatch(signupAsync(data));
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit: submit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: signupInitialValues,
    validationSchema: signupSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Authlayout
      title='Create Account'
      mainButtonTitle='Signup'
      mainButtonPress={submit}
      accountText='Already have an account?'
      backPress={handleBackButtonPress}
      secondaryButtonTitle='Signin'
      secondaryButtonPress={handleSecondaryPress}
      busy={loading}
      animation={require('./assets/login')}
    >
      <TextInput
        placeholder='Your Name'
        keyboardAppearance={themeMode}
        value={values.name}
        error={errors.name}
        touched={touched.name}
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
      />
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
        placeholder='Password'
        keyboardAppearance={themeMode}
        password
        autoCapitalize='none'
        value={values.password}
        error={errors.password}
        touched={touched.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
      />
      <TextInput
        placeholder='Confirm Password'
        keyboardAppearance={themeMode}
        password
        autoCapitalize='none'
        value={values.confirmPassword}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
      />
    </Authlayout>
  );
};

export default SignupFeatures;
