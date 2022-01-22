import { ThemeContext } from '@src/contexts/theme.context';
import { useContext } from 'react';

const useDarkModeToggler = () => {
  const { toggleDarkMode } = useContext(ThemeContext);
  return toggleDarkMode;
};

export default useDarkModeToggler;
