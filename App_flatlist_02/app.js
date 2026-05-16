import React from  'react';
import {estilos} from './estilos';
import {View} from 'react-native';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Rodape from './Rodape';

function App() {
  return (
    <View style={estilos.area_fundo}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
export default App;