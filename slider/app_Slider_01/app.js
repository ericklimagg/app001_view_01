import React from 'react';
import { View } from 'react-native';
import { estilos } from './estilos';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Rodape from './Rodape';

function App() {
  return (
    <View style={estilos.containerPrincipal}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}

export default App;