import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type TProps = {
  title: string;
  onPress?: () => void;
  color?: string;
  ref?: any;
  extraStyle?: object;
  disabled?: boolean;
};

export const PrimaryButton: React.FC<TProps> = ({
  title,
  onPress,
  color = 'black',
  extraStyle,
  disabled = false
}) => {
  const [buttonColor, setButtonColor] = useState(color);
  const originalButtonColor = color;

  useEffect(() => {
    if (disabled) setButtonColor('gray');
    else setButtonColor(originalButtonColor);
  }, [disabled]);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, { backgroundColor: buttonColor }, extraStyle]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'white'
  },
  text: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});
