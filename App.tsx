import { CustomStatusBar } from '@hwmobile/components/';
import { Navigation } from '@hwmobile/navigation/NavigationContainer.tsx';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <CustomStatusBar />
      <View style={styles.wrapper}>
        <Navigation />
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
});
