import { Container } from '@src/containers';
import { HomeFeatures } from '@src/features';
import { AppNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';

const HomeScreen: React.FC<AppNavigationProps<'Home'>> = ({}) => {
  return (
    <Container>
      <HomeFeatures />
    </Container>
  );
};

export default HomeScreen;
