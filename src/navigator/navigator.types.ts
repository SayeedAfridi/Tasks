import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: NativeStackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export type AppRoutes = {
  Home: undefined;
  Startup: undefined;
};
