import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ backgroundColor: 'blue', height: '100%', width: 300 }}>
      
      <View style={{ backgroundColor: 'orange', height: '20%', width: '100%' }}>
        <Text>Componente VIEW</Text>
        <Text>Erick</Text>
        <Text>27/02/2026</Text>
      </View>

      <View style={{ backgroundColor: 'yellow', height: '70%', width: 100 }}>
        <Text>Componente VIEW</Text>
        <Text>Lima</Text>
        <Text>17/12/2005</Text>
      </View>

      <View style={{ backgroundColor: 'gray', height: '10%', width: 200 }}>
        <Text>Componente VIEW</Text>
        <Text>Grêmio</Text>
        <Text>15/09/1903</Text>
      </View>

    </View>
  );
}

export default App;
