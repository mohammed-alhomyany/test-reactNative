import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '../components/PrimaryButton';
import { Separator } from '../components/Separator';
import { TextInput } from '../components/TextInput';
import { AppStackParamList } from '../navigations/AppStackParamList';

const windowWidth = Dimensions.get('window').width;
type RegisterScreenProp = StackNavigationProp<AppStackParamList, 'Register'>;

const RegisterView = () => {
  const navigation = useNavigation<RegisterScreenProp>();

  const cancel = () => navigation.goBack();

  const next = () => navigation.navigate('Verification');

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
                backgroundColor: 'lightgray',
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
    <View style={styles.container}>
      <Text style={styles.label}>رقم الهوية</Text>
      <TextInput inputProps={{ placeholder: 'رقم الهوية', keyboardType: 'number-pad' }} />
      <Text style={styles.label}>تاريخ الميلاد</Text>
      <TextInput inputProps={{ placeholder: 'تاريخ الميلاد' }} />
      <Separator height={40} />
      <PrimaryButton title="التالي" onPress={next} />
    </View>
  );
};

export default RegisterView;

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
