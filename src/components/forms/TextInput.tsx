import React from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RnTextInputProps,
  View,
} from 'react-native';
import { Theme } from '@src/theme';
import { useTheme } from '@src/hooks';
import { makeStyles } from '@src/theme/theme.utils';
import Text from '../Text';
import { Feather } from '@expo/vector-icons';
import { HEIGHT } from '@src/constants/number.constants';
import { hp } from '@src/utils';

interface TextInputProps extends RnTextInputProps {
  placeholder?: string;
  error?: string;
  touched?: boolean;
  label?: string;
  labelVariant?: keyof Theme['textVariants'];
  height?: number;
  password?: boolean;
}

export type TextInputRef = RNTextInput;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing.s,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.borderRadii.xl,
    borderWidth: 2,
    paddingHorizontal: theme.spacing.l,
  },
}));

const SIZE = 18;

const TextInput = React.forwardRef<TextInputRef, TextInputProps>(
  (
    {
      error,
      touched,
      label,
      labelVariant = 'inputLabel',
      height,
      password,
      ...props
    }: TextInputProps,

    ref
  ) => {
    const styles = useStyles();
    const theme = useTheme();
    const reColor: keyof typeof theme.colors = !touched
      ? 'grey'
      : !error
      ? 'primary'
      : 'danger';

    const borderColor =
      touched && error ? theme.colors.danger : theme.colors.primary;

    const color = theme.colors[reColor];

    const [view, setView] = React.useState<boolean>(false);
    const togglePasswordView = () => {
      setView((prev) => !prev);
    };

    return (
      <View style={styles.container}>
        {label ? <Text variant={labelVariant}>{label}</Text> : null}
        <View
          style={[
            styles.inputContainer,
            { borderColor, height: height || HEIGHT },
          ]}
        >
          <RNTextInput
            ref={ref}
            underlineColorAndroid='transparent'
            style={{
              flex: 1,
              color: theme.colors.text,
            }}
            selectionColor={theme.colors.primary}
            secureTextEntry={password && !view}
            placeholderTextColor={theme.colors.grey}
            {...props}
          />
          {password ? (
            <Pressable
              onPress={togglePasswordView}
              style={{
                padding: theme.spacing.s,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather
                size={hp(1.8)}
                color={theme.colors.grey}
                name={view ? 'eye' : 'eye-off'}
              />
            </Pressable>
          ) : null}
        </View>

        <View>
          {touched && error ? (
            <Text
              variant='error'
              style={{
                marginTop: theme.spacing.s,
                marginLeft: theme.spacing.l + 3,
              }}
            >
              {error}
            </Text>
          ) : null}
        </View>
      </View>
    );
  }
);

export default TextInput;
