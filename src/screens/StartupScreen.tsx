import { Text } from '@src/components';
import { Container } from '@src/containers';
import { useTheme } from '@src/hooks';
import useInteractionManagerMount from '@src/hooks/useInteractionManagerMount';
import { AppNavigationProps, AppRoutes } from '@src/navigator/navigator.types';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const SignupScreen: React.FC<AppNavigationProps<'Startup'>> = ({
  navigation,
}) => {
  const theme = useTheme();

  useInteractionManagerMount(() => {
    let route: keyof AppRoutes = 'Home';
    setTimeout(() => {
      navigation.replace(route);
    }, 500);
  });
  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Please Wait...</Text>
        <View style={{ height: 16 }} />
        <ActivityIndicator color={theme.colors.text} size='large' />
      </View>
    </Container>
  );
};

export default SignupScreen;
