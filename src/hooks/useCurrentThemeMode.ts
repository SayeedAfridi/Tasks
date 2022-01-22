import { ThemeContext } from '@src/contexts/theme.context';
import { useContext } from 'react';

const useCurrentThemeMode = () => {
  const { currentThemeMode } = useContext(ThemeContext);
  return currentThemeMode;
};

export default useCurrentThemeMode;
