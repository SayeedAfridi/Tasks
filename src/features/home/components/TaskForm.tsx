import {
  BaseModal,
  Button,
  Spacer,
  Text,
  TextInput,
  TextInputRef,
} from '@src/components';
import { useTheme } from '@src/hooks';
import { selectUser } from '@src/redux/auth/auth.selectors';
import { createTaskAsync } from '@src/redux/task/task.async';
import { selectIsCreatingTask } from '@src/redux/task/task.selectors';
import { hp, wp } from '@src/utils';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import FAB from 'react-native-fab';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';

const TaskForm: React.FC = ({}) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const loading = useSelector(selectIsCreatingTask);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const inputRef = React.useRef<TextInputRef>(null);

  React.useEffect(() => {
    if (visible) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [visible]);

  const handleSubmit = async (v: any) => {
    if (!user) {
      return;
    }
    await dispatch(createTaskAsync({ title: v.title, userUid: user.uid }));
    resetForm();
    setVisible(false);
  };

  const {
    handleSubmit: submit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: { title: '' },
    validationSchema: object().shape({
      title: string()
        .max(35, 'Task must be less than 40 character')
        .required('please enter your task'),
    }),
    onSubmit: handleSubmit,
  });

  const theme = useTheme();
  return (
    <>
      <FAB
        buttonColor={theme.colors.primary}
        iconTextColor='#000'
        onClickAction={() => {
          setVisible(true);
        }}
        visible={true}
      />
      <BaseModal visible={visible} onRequestClose={() => setVisible(false)}>
        <View
          style={{
            padding: theme.spacing.m,
            width: wp(80),
            backgroundColor: theme.colors.background,
            borderRadius: theme.borderRadii.m,
          }}
        >
          <Text
            variant='title'
            style={{
              textAlign: 'center',
              marginVertical: theme.spacing.m,
            }}
          >
            Add Task
          </Text>
          <Spacer />
          <TextInput
            ref={inputRef}
            placeholder='Your task'
            value={values.title}
            error={errors.title}
            touched={touched.title}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            onSubmitEditing={() => submit()}
          />
          <Spacer />

          <Button
            onPress={submit}
            loading={loading}
            variant='primary'
            title='Add'
          />
          <Button onPress={() => setVisible(false)} title='Cancel' />
        </View>
      </BaseModal>
    </>
  );
};

export default TaskForm;
