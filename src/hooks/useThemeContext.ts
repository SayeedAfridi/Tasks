import { ThemeContext } from '@src/contexts/theme.context';
import { useContext } from 'react';

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;
