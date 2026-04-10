import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {estilos} from './assets/estilo';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Rodape from './Rodape';

function App() {
  let img = require('./assets/1.jpg');
  let autor = 'Felipe';
  let data = '01/06/2026';
  return (
    <View id='fundo' style={estilos.fundo}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
 export default App;