import React from 'react';
import { Modal, ModalProps, Pressable, StyleSheet, View } from 'react-native';
import KeyboardAvoidingScrollView from './KeyboardAvoidingScrollView';

export interface BaseModalProps extends ModalProps {
  children?: React.ReactNode | React.ReactNode[];
}

const BaseModal: React.FC<BaseModalProps> = ({
  children,
  transparent,
  ...rest
}) => {
  return (
    <Modal
      transparent={transparent || true}
      statusBarTranslucent={true}
      animationType='fade'
      {...rest}
    >
      <Pressable
        onPress={rest.onRequestClose}
        style={[styles.container, StyleSheet.absoluteFill]}
      />
      <KeyboardAvoidingScrollView>
        <View style={styles.childContainer}>{children}</View>
      </KeyboardAvoidingScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  childContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BaseModal;
