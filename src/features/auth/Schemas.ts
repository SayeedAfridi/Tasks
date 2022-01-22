import * as yup from 'yup';

export const signinInitialValues = {
  email: '',
  password: '',
};

export const signupInitialValues = {
  ...signinInitialValues,
  confirmPassword: '',
  name: '',
};

export const forgetPasswordInitialValues = {
  email: '',
};

const baseSigninSchema = {
  email: yup
    .string()
    .email('Please eneter a valid email')
    .required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
};

const baseSignupSchema = {
  ...baseSigninSchema,
  name: yup.string().required('Please enter your name'),
  confirmPassword: yup
    .string()
    .equals([yup.ref('password')], "Password doesn't match")
    .required('Please confirm your password'),
};

export const signinSchema = yup.object().shape(baseSigninSchema);
export const signupSchema = yup.object().shape(baseSignupSchema);
export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please eneter a valid email')
    .required('Please enter your email'),
});
