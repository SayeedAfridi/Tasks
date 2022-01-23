import useTheme from '@src/hooks/useTheme';
import { hp } from '@src/utils';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import palette from './palette';
import textVariants from './textVariants';

const theme = {
  colors: {
    background: palette.white,
    primary: palette.darkTangerine,
    secondary: palette.blue,
    text: palette.black,
    black: palette.black,
    grey: palette.grey,
    white: palette.white,
    transparent: 'transparent',
    danger: palette.red,
    success: palette.green,
  },
  spacing: {
    s: Math.round(hp(1)),
    m: Math.round(hp(2)),
    l: Math.round(hp(3)),
    xl: Math.round(hp(6)),
    none: 0,
    bottomTab: 55,
  },
  borderRadii: {
    s: 5,
    m: 10,
    l: 20,
    xl: 32,
    none: 0,
  },
  textVariants,
};

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.yankeeBlue,
    text: palette.white,
  },
};

export default theme;
