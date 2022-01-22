import { isIOS } from '@src/constants/platform.constants';
import { useTheme } from '@src/hooks';
import React from 'react';

import {
  KeyboardAvoidingView,
  ScrollViewProps,
  ScrollView,
} from 'react-native';

export interface KeyboardAvoidingScrollViewProps extends ScrollViewProps {}

const KeyboardAvoidingScrollView: React.FC<KeyboardAvoidingScrollViewProps> = ({
  children,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardDismissMode='interactive'
        contentContainerStyle={[rest.contentContainerStyle, { flexGrow: 1 }]}
        {...rest}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingScrollView;
