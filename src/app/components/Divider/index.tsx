import React from 'react';
import { View } from 'react-native';

export const Divider = ({ marginTop = '0', marginBottom = '0' }) => {
  return <View style={[{ marginTop: +marginTop, marginBottom: +marginBottom }]} />;
};
