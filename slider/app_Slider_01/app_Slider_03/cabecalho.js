import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './estilos';

export default function Cabecalho() {
  return (
    <View style={estilos.topo}>
      <Text style={estilos.tituloTopo}>Pesquisa Institucional</Text>
    </View>
  );
}