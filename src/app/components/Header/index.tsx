import { SearchIcon, TitleText } from '@hwmobile/components/';
import { Style, colors, fontFamilySet } from '@hwmobile/theme/';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import giftIcon from '../../../assets/icons/giftIcon.png';

export const Header = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <TitleText title={title} />
    <View style={styles.iconsWrapper}>
      <Image source={giftIcon} />
      <View style={styles.searchIcon}>
        <SearchIcon />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  title: {
    color: 'white',
    fontFamily: fontFamilySet(Style.bold),
    fontSize: 20,
  },
  iconsWrapper: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  searchIcon: { paddingTop: 6 },
});
