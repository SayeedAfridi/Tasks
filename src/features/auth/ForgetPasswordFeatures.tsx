import { TextInput } from '@src/components';
import { getErrorMessage } from '@src/error-handler/helper';
import { useCurrentThemeMode } from '@src/hooks';
import { AuthNavigationProps } from '@src/navigator/navigator.types';
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from '@src/redux/snackbar/snackbar.slice';
import { authService } from '@src/services';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import Authlayout from './components/Authlayout';
import { forgetPasswordInitialValues, forgetPasswordSchema } from './Schemas';

export interface ForgetPasswordFeaturesProps
  extends AuthNavigationProps<'ForgetPassword'> {}

const ForgetPasswordFeatures: React.FC<ForgetPasswordFeaturesProps> = ({
  navigation,
}) => {
  const themeMode = useCurrentThemeMode();
  const [loading, setLoading] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };
  const handleSecondaryPress = () => {
    navigation.navigate('Signin');
  };
  const handleSubmit = async (v: typeof forgetPasswordInitialValues) => {
    try {
      setLoading(true);
      await authService.forgetPassword(v.email);
      setLoading(false);
      dispatch(
        showSuccessSnackbar({
          message: 'Please check your email to reset password!',
        })
      );
      resetForm();
    } catch (error) {
      const msg = getErrorMessage(error);
      dispatch(showErrorSnackbar({ message: msg }));
      setLoading(false);
    }
  };

  const {
    handleSubmit: submit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: forgetPasswordInitialValues,
    validationSchema: forgetPasswordSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Authlayout
      title='Forget Password'
      mainButtonTitle='Send Link'
      mainButtonPress={submit}
      busy={loading}
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
        value={values.email}
        error={errors.email}
        touched={touched.email}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
      />
    </Authlayout>
  );
};

export default ForgetPasswordFeatures;
