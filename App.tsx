import { CustomStatusBar } from '@hwmobile/components/';
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Hello world!</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
