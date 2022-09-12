import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native';

type TProps = {
  style?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
};

export const TextInput = React.forwardRef<any, TProps>(({ inputProps, style }, ref) => (
  <View style={[styles.container, style]}>
    <RNTextInput
      ref={ref}
      {...inputProps}
      style={[
        styles.input,
        {
          textAlign: 'right'
        },
        inputProps?.style
      ]}
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
    height: 50
  }
});
