// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homepage from './screens/homepage';
import secondpage from './screens/secondpage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homepage} />
        <Stack.Screen name="secondpage" component={secondpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
