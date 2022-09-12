import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type TProps = {
  title: string;
  onPress?: () => void;
  color?: string;
  ref?: any;
  extraStyle?: object;
  disabled?: boolean;
};

export const PrimaryBorderedWhiteButton: React.FC<TProps> = ({
  title,
  onPress,
  color = 'black',
  extraStyle,
  disabled = false
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, { borderColor: color }, extraStyle]}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    height: 50
  },
  text: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});
