import { Text } from '@src/components';
import { useTheme } from '@src/hooks';
import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';

export interface NoContainerProps {
  title: string;
  onRefresh?: () => void;
}

const NoContainer: React.FC<NoContainerProps> = ({ title, onRefresh }) => {
  const theme = useTheme();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          tintColor={theme.colors.text}
          titleColor={theme.colors.text}
          colors={[theme.colors.text]}
          progressBackgroundColor={theme.colors.background}
          refreshing={false}
          onRefresh={onRefresh}
        />
      }
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{title}</Text>
      </View>
    </ScrollView>
  );
};

export default NoContainer;
