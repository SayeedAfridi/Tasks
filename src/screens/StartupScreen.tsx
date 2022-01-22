import { Container } from '@src/containers';
import useInteractionManagerMount from '@src/hooks/useInteractionManagerMount';
import { AppNavigationProps, AppRoutes } from '@src/navigator/navigator.types';
import { authService, dbService, firebaseService } from '@src/services';
import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { hp } from '@src/utils';

const size = hp(45);

const SignupScreen: React.FC<AppNavigationProps<'Startup'>> = ({
  navigation,
}) => {
  const [animationFinished, setanimationFinished] =
    React.useState<boolean>(false);
  const lottieRef = React.useRef<LottieView>();
  const [mounted, setMounted] = React.useState<boolean>(false);

  const handleAnimationFinished = () => {
    console.log('animation finished');
    if (!mounted) {
      lottieRef?.current?.reset();
      return;
    }
    setanimationFinished(true);
  };

  useInteractionManagerMount(() => {
    const app = firebaseService.init();
    dbService.init(app);
    authService.init(app);
    setMounted(true);
  });

  React.useEffect(() => {
    let route: keyof AppRoutes = 'Home';
    if (animationFinished && mounted) {
      navigation.replace(route);
    }
  }, [animationFinished, mounted]);

  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            height: size,
            width: size,
          }}
        >
          <LottieView
            ref={lottieRef as any}
            style={{
              flex: 1,
              height: size,
              width: size,
            }}
            loop={false}
            autoPlay={true}
            source={require('../assets/splash')}
            onAnimationFinish={handleAnimationFinished}
          />
        </View>
      </View>
    </Container>
  );
};

export default SignupScreen;
