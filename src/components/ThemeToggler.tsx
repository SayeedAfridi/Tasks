import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from '@src/contexts';
import { hp } from '@src/utils';
import { StatusBar } from 'expo-status-bar';

const ThemeToggler: React.FC = () => {
  const {
    theme,
    currentThemeMode: mode,
    toggleDarkMode: toggle,
  } = useContext(ThemeContext);
  return (
    <Pressable onPress={toggle}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <Feather
        size={hp(4.5)}
        color={theme.colors.text}
        name={mode === 'dark' ? 'moon' : 'sun'}
      />
    </Pressable>
  );
};

export default ThemeToggler;
