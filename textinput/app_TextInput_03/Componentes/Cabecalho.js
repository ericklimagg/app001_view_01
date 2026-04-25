import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../styleSheet/estilo';

function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.textoCabecalho}>Capítulo 06 - Componentes UI</Text>
      <Text style={estilos.tituloCabecalho}>TouchableHighlight || TextInput</Text>
    </View>
  );
}

export default Cabecalho;