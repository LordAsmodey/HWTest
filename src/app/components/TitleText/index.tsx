import { Style, colors, fontFamilySet } from '@hwmobile/theme/';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const TitleText = ({ title }: { title: string }) => <Text style={styles.title}>{title}</Text>;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: fontFamilySet(Style.bold),
    fontSize: 20,
  },
});
