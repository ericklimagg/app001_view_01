import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilos';

export default function Cabecalho() {
  let imagemTopo = require('./assets/topo_logo.png');

  return (
    <View style={estilos.topo}>
      <View style={estilos.linhaLogo}>
        <Image source={imagemTopo} style={estilos.logoTopo} />
        <Text style={estilos.textoLogo}>Ifc Desenvolvimento Mobile</Text>
      </View>
      <Text style={estilos.tituloTopo}>Avaliação de Filmes</Text>
    </View>
  );
}