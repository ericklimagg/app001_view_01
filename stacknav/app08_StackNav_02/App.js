import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import Marte from './src/Telas/Marte';
import Jupiter from './src/Telas/Jupiter';
import Saturno from './src/Telas/Saturno';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen 
          name="Principal" 
          component={Principal} 
          options={{
            title: "Sistema Solar",
            headerStyle: { backgroundColor: "#000080" },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen 
          name="Marte" 
          component={Marte} 
          options={{
            title: "Planeta Marte",
            headerStyle: { backgroundColor: "#ff4500" },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen 
          name="Jupiter" 
          component={Jupiter} 
          options={{
            title: "Planeta Júpiter",
            headerStyle: { backgroundColor: "#d2b48c" },
            headerTintColor: "black"
          }}
        />
        <Stack.Screen 
          name="Saturno" 
          component={Saturno} 
          options={{
            title: "Planeta Saturno",
            headerStyle: { backgroundColor: "#f4a460" },
            headerTintColor: "black"
          }}
        />
      </Stack.Navigator>
  );
}

export default App;