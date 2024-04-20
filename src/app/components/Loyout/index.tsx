import { colors } from '@hwmobile/theme/';
import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

type Props = {
  children: ReactNode;
  style?: ViewProps['style'];
} & ViewProps;

export const Layout = ({ children, style, ...rest }: Props) => {
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
};
