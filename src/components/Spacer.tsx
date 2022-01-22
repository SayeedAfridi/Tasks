import { hp } from '@src/utils';
import React from 'react';
import { View } from 'react-native';

export interface SpacerProps {
  space?: 'tiny' | 'small' | 'medium' | 'large' | number;
  direction?: 'vertical' | 'horinzontal';
}

const Spacer: React.FC<SpacerProps> = ({
  space = 1,
  direction = 'vertical',
}) => {
  let responsiveSpace;
  switch (space) {
    case 'small':
      responsiveSpace = Math.round(hp(1.5));
      break;
    case 'medium':
      responsiveSpace = Math.round(hp(2));
      break;
    case 'large':
      responsiveSpace = Math.round(hp(2.5));
      break;
    default:
      responsiveSpace = Math.round(hp(space));
  }

  return (
    <View
      style={{
        height: direction === 'vertical' ? responsiveSpace : 0,
        width: direction === 'horinzontal' ? responsiveSpace : 0,
      }}
    />
  );
};

export default Spacer;
