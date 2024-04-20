import { CustomStatusBar } from '@hwmobile/components/';
import { Navigation } from '@hwmobile/navigation/NavigationContainer.tsx';
import { colors } from '@hwmobile/theme/';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomStatusBar />
      <View style={styles.wrapper}>
        <Navigation />
      </View>
    </QueryClientProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
