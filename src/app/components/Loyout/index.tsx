import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

type Props = {
  children: ReactNode;
} & ViewProps;

export const Layout = ({ children, ...rest }: Props) => {
  return (
    <View style={styles.wrapper} {...rest}>
      {children}
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#0F0F0F',
  },
};
