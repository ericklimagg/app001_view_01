import React from 'react';
import { View, ScrollView } from 'react-native';
import { estilos } from './estilos';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';

export default function App() {
  return (
    <View style={estilos.container}>
      <Cabecalho />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Conteudo />
      </ScrollView>
    </View>
  );
}