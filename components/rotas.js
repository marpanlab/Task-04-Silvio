import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import barragrande from './barragrande';
import lencois from './lencois';
import paraty from './paraty';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="barragrande" component={barragrande} />
        <Stack.Screen name="lencois" component={lencois} />
        <Stack.Screen name="paraty" component={paraty} />
    </Stack.Navigator>
  </NavigationContainer>
  )

}
