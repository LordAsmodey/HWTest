import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStack } from './staks/RootStak.tsx';

export const Navigation = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);
