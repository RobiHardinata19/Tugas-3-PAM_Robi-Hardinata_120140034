import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/HomePage';
import Penerbangan from './screen/JadwalTerbang';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Penerbangan" component={Penerbangan} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}