import { ContentViewScreen } from '@hwmobile/screens/ContentViewScreen';
import { HomeScreen } from '@hwmobile/screens/HomeScreen';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';

interface IRouteConfig {
  name: keyof RootStackParamsList;
  component: FunctionComponent;
  options?: NativeStackNavigationOptions;
}

const routeConfig: IRouteConfig[] = [
  { name: 'HomeScreen', component: HomeScreen, options: { headerShown: false } },
  { name: 'ContentViewScreen', component: ContentViewScreen, options: { headerShown: false } },
];

export type RootStackParamsList = {
  HomeScreen: undefined;
  ContentViewScreen: { movieId: number };
};

export const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamsList>();
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {routeConfig.map(({ name, component, options }) => {
        return <Stack.Screen key={name} name={name} component={component} options={options} />;
      })}
    </Stack.Navigator>
  );
};
