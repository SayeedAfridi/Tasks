import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AllRoutes } from '@src/navigator/navigator.types';

const useAppNavigation = () => {
  const nav = useNavigation<NavigationProp<AllRoutes>>();
  return nav;
};

export default useAppNavigation;
