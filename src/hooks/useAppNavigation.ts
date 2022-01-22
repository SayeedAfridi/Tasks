import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@src/navigator/navigator.types';

const useAppNavigation = () => {
  const nav = useNavigation<NavigationProp<AppRoutes>>();
  return nav;
};

export default useAppNavigation;
