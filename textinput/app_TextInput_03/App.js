import React from 'react';
import { View } from 'react-native';
import Cabecalho from './src/Componentes/Cabecalho';
import Conteudo from './src/Componentes/Conteudo';
import Rodape from './src/Componentes/Rodape';
import { estilos } from './src/styleSheet/estilo';

export default function App() {
  return (
    <View style={estilos.fundo}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}