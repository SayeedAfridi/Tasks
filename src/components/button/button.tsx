import { HEIGHT } from '@src/constants/number.constants';
import { useTheme } from '@src/hooks';
import { makeStyles } from '@src/theme/theme.utils';
import { hp } from '@src/utils';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import Text from '../Text';

export interface ButtonProps extends PressableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'default';
  onPress?: () => void;
  loading?: boolean;
}

const useStyle = makeStyles((theme) => ({
  root: {
    paddingHorizontal: theme.spacing.l + 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadii.xl,
    margin: theme.spacing.s,
    height: HEIGHT,
    flexDirection: 'row',
  },
}));

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  disabled,
  onPress,
  variant,
  loading,
  ...rest
}) => {
  const styles = useStyle();
  const theme = useTheme();

  const opacity = disabled ? 0.8 : 1;
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'secondary'
      ? theme.colors.secondary
      : theme.colors.grey;
  const color =
    variant === 'primary'
      ? theme.colors.black
      : variant === 'secondary'
      ? theme.colors.white
      : theme.colors.black;

  const handlePress = () => {
    if (!loading) {
      onPress?.();
    }
  };

  return (
    <Pressable
      style={[styles.root, style, { opacity, backgroundColor }]}
      onPress={handlePress}
      {...rest}
    >
      <Text variant='button' style={{ color }}>
        {title}
      </Text>
      {loading ? (
        <View
          style={{
            position: 'absolute',
            left: hp(3),
          }}
        >
          <ActivityIndicator color={color} />
        </View>
      ) : null}
    </Pressable>
  );
};

export default Button;
