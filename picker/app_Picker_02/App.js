import React from "react";
import { View } from 'react-native';
import { estilos } from "./estilos.js";
import Cabecalho from './cabecalho.js';
import Conteudo from './conteudo.js';

function App(){
  return(
    <View style={estilos.containerGeral}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}

export default App;