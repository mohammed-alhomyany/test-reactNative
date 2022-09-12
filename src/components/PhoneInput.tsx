import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native';

type TProps = {
  style?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
};

export const PhoneInput = React.forwardRef<any, TProps>(({ inputProps, style }, ref) => (
  <View style={[styles.container, style]}>
    <Text
      style={{
        paddingTop: 10,
        padding: 10,
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
      }}>
      +966
    </Text>
    <RNTextInput
      ref={ref}
      {...inputProps}
      style={[styles.input, inputProps?.style]}
      textAlign="left"
      keyboardType="phone-pad"
    />
  </View>
));

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 0,
    marginTop: 10
  },
  input: {
    fontSize: 15,
    paddingHorizontal: 16,
    height: 0
  }
});
