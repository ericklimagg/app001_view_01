import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{
      flex: 1, padding: 30, backgroundColor: 'darkblue',
    }}>

      <Text style={{
        backgroundColor: 'white', 
        color: 'darkblue', 
        fontSize: 30, 
        textAlign: 'center', marginBottom: 50
      }}>Soneto</Text>

      <Text style={{ fontSize: 30, color: 'white' }}>
        <Text>De tudo ao meu amor... {'\n'}serei atento </Text>
        <Text style={{ fontFamily: 'Bernard MT Condensed' }}>Antes, e com tal zelo, e sempre, e tanto{'\n'}</Text>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Que mesmo em face do maior encanto{'\n'}</Text>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Dele se encante mais meu pensamento.{'\n'}</Text>
        <Text>Quero vivê-lo em cada vão momento{'\n'}</Text>
        <Text>...{'\n'}</Text>
        <Text>Que não seja imortal, {'\n'}posto que é chama{'\n'}</Text>
        <Text>Mas que seja infinito enquanto dure!</Text>
      </Text>

      <Text style={{
        backgroundColor: 'white', 
        color: 'darkblue', 
        fontSize: 30,
        textAlign: 'center', 
        marginTop: 50, 
        fontFamily: 'Brush Script MT'
      }}>Vinícius de Moraes {'\n'}(1913-1980)</Text>
    </View>
  );
}

export default App;