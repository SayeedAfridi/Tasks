import useMount from '@src/hooks/useMount';
import { storageService } from '@src/services';
import theme, { Theme, darkTheme } from '@src/theme';
import { ThemeContextInterface, ThemeModeString } from '@src/types';
import React from 'react';
import { StatusBar } from 'react-native';

export const ThemeContext = React.createContext<ThemeContextInterface>(
  undefined!
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = React.useState<ThemeModeString>('dark');
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(darkTheme);

  //get persists theme mode on mount
  useMount(async () => {
    const mode = await storageService.getThemeMode();
    setThemeMode(mode);
    setCurrentTheme(mode === 'dark' ? darkTheme : theme);
  });

  // change theme on every toggle
  React.useEffect(() => {
    if (themeMode === 'dark') {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(theme);
    }
  }, [themeMode]);

  const toggleDarkMode = async () => {
    try {
      if (themeMode === 'dark') {
        await storageService.setThemeMode('light');
        setThemeMode('light');
      } else {
        await storageService.setThemeMode('dark');
        setThemeMode('dark');
      }
    } catch (error) {}
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        toggleDarkMode,
        currentThemeMode: themeMode,
      }}
    >
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor={'rgba(0,0,0, 0.3)'}
      />
      {children}
    </ThemeContext.Provider>
  );
};
