import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import Tela01 from './src/Telas/Tela01';
import Tela02 from './src/Telas/Tela02';
import Tela03 from './src/Telas/Tela03';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Principal">
      <Stack.Screen 
        name="Principal" 
        component={Principal} 
        options={{ title: 'Bem-Vindo(a)' }} 
      />
      <Stack.Screen 
        name="Tela01" 
        component={Tela01} 
        options={{ title: 'Planeta Mercúrio' }} 
      />
      <Stack.Screen 
        name="Tela02" 
        component={Tela02} 
        options={{ title: 'Planeta Vênus' }} 
      />
      <Stack.Screen 
        name="Tela03" 
        component={Tela03} 
        options={{ title: 'Planeta Marte' }} 
      />
    </Stack.Navigator>
  );
}