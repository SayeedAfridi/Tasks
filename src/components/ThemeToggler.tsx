import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from '@src/contexts';
import { hp } from '@src/utils';

export interface ThemeTogglerProps {
  size?: number;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ size = 4.5 }) => {
  const {
    theme,
    currentThemeMode: mode,
    toggleDarkMode: toggle,
  } = useContext(ThemeContext);
  return (
    <Pressable onPress={toggle}>
      <Feather
        size={hp(size)}
        color={theme.colors.text}
        name={mode === 'dark' ? 'moon' : 'sun'}
      />
    </Pressable>
  );
};

export default ThemeToggler;
