import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

export const CustomStatusBar = () => (
  <View style={styles.statusBar}>
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  statusBar: { backgroundColor: '#0F0F0F' },
});
