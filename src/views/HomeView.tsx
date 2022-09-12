import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryBorderedWhiteButton } from '../components/PrimaryBorderedWhiteButton';
import { PrimaryButton } from '../components/PrimaryButton';
import { Separator } from '../components/Separator';
import { TextInput } from '../components/TextInput';
import { AppStackParamList } from '../navigations/AppStackParamList';

type HomeScreenProp = StackNavigationProp<AppStackParamList, 'Home'>;

const HomeView = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const register = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>البريد الالكتروني</Text>
      <TextInput inputProps={{ placeholder: 'البريد الالكتروني' }} />
      <Text style={styles.label}>كلمة المرور</Text>
      <TextInput inputProps={{ placeholder: 'كلمة المرور', secureTextEntry: true }} />
      <Text style={styles.resetPassword}>هل نسيت كلمة المرور؟</Text>
      <PrimaryButton title="تسجيل الدخول" />
      <Separator />
      <PrimaryBorderedWhiteButton title="التسجيل" onPress={register} />
    </View>
  );
};

export default HomeView;

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
