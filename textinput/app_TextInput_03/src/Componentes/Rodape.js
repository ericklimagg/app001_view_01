import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../styleSheet/estilo';

function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Text style={{ fontWeight: 'bold' }}>Erick Lima</Text>
      <Text>2026</Text>
    </View>
  );
}

export default Rodape;