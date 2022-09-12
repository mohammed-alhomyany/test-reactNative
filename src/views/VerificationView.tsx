import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { PhoneInput } from '../components/PhoneInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { Separator } from '../components/Separator';
import { TextInput } from '../components/TextInput';
import { OtpModal } from '../modals/OtpModal';
import { AppStackParamList } from '../navigations/AppStackParamList';

const windowWidth = Dimensions.get('window').width;
type VerificationScreenProp = StackNavigationProp<AppStackParamList, 'Verification'>;

const VerificationView = () => {
  const navigation = useNavigation<VerificationScreenProp>();

  const verify = () => setIsVisibleOtpModal(true);

  const cancel = () => navigation.goBack();

  const [isVisibleOtpModal, setIsVisibleOtpModal] = useState(false);

  const closeOtp = () => setIsVisibleOtpModal(false);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View>
          <View
            style={{
              backgroundColor: 'black',
              height: 150,
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              padding: 40,
              flexDirection: 'row'
            }}>
            <Entypo name="circle-with-cross" size={30} color="white" onPress={cancel} />
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>تسجيل جديد</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                backgroundColor: 'black',
                height: 2,
                flex: 1,
                marginVertical: 15,
                marginHorizontal: 20,
                borderRadius: 20
              }}
            />
            <View
              style={{
                backgroundColor: 'black',
                height: 2,
                flex: 1,
                marginVertical: 15,
                marginHorizontal: 20,
                borderRadius: 20
              }}
            />
          </View>
        </View>
      )
    });
    return () => {};
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>الايميل</Text>
        <TextInput inputProps={{ placeholder: 'الايميل' }} />
        <Text style={styles.label}>الجوال</Text>
        <PhoneInput
          inputProps={{
            placeholder: '5xxxxxxxx*',
            maxLength: 9
          }}
        />
        <Separator height={40} />
        <PrimaryButton title="تحقق" onPress={verify} />
      </View>
      <OtpModal isVisible={isVisibleOtpModal} onClose={closeOtp} onVerify={() => {}} />
    </>
  );
};

export default VerificationView;

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: 'white',
    flex: 1
  },
  label: {
    textAlign: 'right',
    color: 'gray',
    fontSize: 18,
    marginTop: 30
  },
  resetPassword: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    marginVertical: 25
  }
});
