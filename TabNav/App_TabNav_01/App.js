import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './src/Home';
import Titulos from './src/Titulos';
import Idolos from './src/Idolos.tsxjs';

import { styles } from './styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#009EEA',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Títulos"
        component={Titulos}
        options={{
          title: 'Nossas Taças',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="emoji-events" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Ídolos"
        component={Idolos}
        options={{
          title: 'Lendas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="star" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}