import React from 'react';
import { View } from 'react-native';

type TProps = {
  vertical?: boolean;
  horizontal?: boolean;
  width?: number;
  height?: number;
};

export const Separator: React.FC<TProps> = ({ vertical, horizontal, width, height }) => (
  <View
    style={[
      !vertical && !horizontal && { height: height ?? 15 },
      horizontal && { width: width ?? 20 }
    ]}
  />
);
