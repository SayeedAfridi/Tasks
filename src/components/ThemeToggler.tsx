import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from '@src/contexts';
import { hp } from '@src/utils';

const ThemeToggler: React.FC = () => {
  const {
    theme,
    currentThemeMode: mode,
    toggleDarkMode: toggle,
  } = useContext(ThemeContext);
  return (
    <Pressable onPress={toggle}>
      <Feather
        size={hp(4.5)}
        color={theme.colors.text}
        name={mode === 'dark' ? 'moon' : 'sun'}
      />
    </Pressable>
  );
};

export default ThemeToggler;
