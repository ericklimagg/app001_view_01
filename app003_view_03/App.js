import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: 'orange', 
      flexDirection: 'row', 
      padding: 20 
    }}>
      
      <View style={{ width: 70, height: 70, backgroundColor: 'green' }}>
      </View>

      <View style={{ width: 70, height: 70, backgroundColor: 'red' }}>
      </View>

      <View style={{ width: 70, height: 70, backgroundColor: 'black' }}>
      </View>

    </View>
  );
}

export default App;
