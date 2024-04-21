import { BannersSlider, Divider, Header, Layout, SectionList } from '@hwmobile/components/';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <Layout style={styles.layoutExtraStyles}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Home" />
        <Divider marginBottom="8" />
        <BannersSlider />
        <Divider marginBottom="24" />
        <SectionList />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutExtraStyles: {
    paddingLeft: 16,
  },
});
