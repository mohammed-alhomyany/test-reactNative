import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

type TProps = {
  isVisible: boolean;
  close: () => void;
  height?: number;
  avoidKeyboard?: boolean;
};

export const BottomSheet: React.FC<TProps> = ({
  isVisible,
  close,
  children,
  height = Platform.OS === 'ios' ? 585 : 545,
  avoidKeyboard = false
}) => (
  <Modal isVisible={isVisible} style={styles.modal} avoidKeyboard={avoidKeyboard}>
    <SafeAreaView style={[styles.modalContainer, { height }]}>
      <View style={styles.content}>{children}</View>
      <View style={styles.closeButtonContainer}>
        <MaterialIcons name="keyboard-arrow-down" size={50} color="white" onPress={close} />
      </View>
    </SafeAreaView>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    borderTopEndRadius: 20
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  closeButtonContainer: {
    position: 'absolute',
    end: 0,
    backgroundColor: 'white',
    borderTopEndRadius: 40,
    borderBottomStartRadius: 40,
    padding: 8
  }
});
