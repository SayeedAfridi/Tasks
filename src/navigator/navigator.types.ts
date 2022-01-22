import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AppRoutes, RouteName>,
    NativeStackNavigationProp<AppRoutes, 'Authentication'>
  >;
  route: RouteProp<AppRoutes, RouteName>;
}

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes> {
  navigation: NativeStackNavigationProp<AuthRoutes, RouteName>;
  route: RouteProp<AuthRoutes, RouteName>;
}

export type AppRoutes = {
  Home: undefined;
  Startup: undefined;
  Authentication: undefined;
};

export type AuthRoutes = {
  Signin: undefined;
  Signup: undefined;
  ForgetPassword: undefined;
};

export type AllRoutes = AppRoutes & AuthRoutes;
