import React from 'react';
import { View } from 'react-native';
import { estilos } from './estilos';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';

export default function App() {
  return (
    <View style={estilos.container}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}