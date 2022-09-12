import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BottomSheet } from '../components/BottomSheet';
import { PrimaryButton } from '../components/PrimaryButton';
import { Separator } from '../components/Separator';
import { TextInput } from '../components/TextInput';

type TProps = {
  isVisible: boolean;
  onVerify: () => void;
  onClose: () => void;
};

export const OtpModal: React.FC<TProps> = ({ isVisible, onVerify, onClose }) => {
  return (
    <BottomSheet isVisible={isVisible} close={onClose} height={400} avoidKeyboard>
      <View
        style={{
          width: 147,
          alignSelf: 'center',
          height: 131
        }}
      />
      <Text style={styles.title}>ضع الرقم السري هنا</Text>
      <Separator height={20} />
      <TextInput
        inputProps={{
          textContentType: 'oneTimeCode',
          keyboardType: 'number-pad',
          maxLength: 4,
          style: {
            fontSize: 20,
            fontWeight: 'bold'
          },
          textAlign: 'center'
        }}
      />
      <Separator height={20} />

      <View style={styles.sideButtonsContainer}>
        <PrimaryButton title="تحقق" onPress={onVerify} color="black" extraStyle={{ flex: 1 }} />
        <Separator horizontal width={20} />
        <PrimaryButton title="الغاء" onPress={onClose} color="red" extraStyle={{ flex: 1 }} />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 0,
    height: 55
  },
  sideButtonsContainer: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    color: 'gray'
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  box: {
    width: 300,
    height: 25
  }
});
