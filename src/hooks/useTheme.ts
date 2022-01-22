import { ThemeContext } from '@src/contexts/theme.context';
import { useContext } from 'react';

const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export default useTheme;
