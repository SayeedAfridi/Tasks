import { useTheme } from '@src/hooks';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader: React.FC = ({}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator color={theme.colors.text} size='large' />
    </View>
  );
};

export default Loader;
