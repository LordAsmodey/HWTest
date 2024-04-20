import { BannersSlider, Divider, Header, Layout, TitleText } from '@hwmobile/components/';
import { RootStackParamsList } from '@hwmobile/navigation/staks/RootStak.tsx';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <Layout style={styles.layoutExtraStyles}>
      <Header title="Home" />
      <Divider marginBottom="8" />
      <BannersSlider />
      <Divider marginBottom="24" />
      <TitleText title="Trending Now" />
      <Pressable onPress={() => navigation.navigate('ContentViewScreen')}>
        <Text style={{ color: 'white', fontSize: 20 }}>Watch video</Text>
      </Pressable>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutExtraStyles: {
    paddingLeft: 16,
  },
});
