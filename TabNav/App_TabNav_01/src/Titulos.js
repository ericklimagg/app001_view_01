import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../styles';

export default function Titulos() {
  const conquistas = [
    { id: 1, nome: 'Copa do Mundo de Clubes', ano: '1983', detalhes: 'Vitória histórica sobre o Hamburgo.' },
    { id: 2, nome: 'Copa Libertadores', ano: '1983, 1995, 2017', detalhes: 'Tricampeão da América.' },
    { id: 3, nome: 'Campeonato Brasileiro', ano: '1981, 1996', detalhes: 'Bicampeão nacional.' },
    { id: 4, nome: 'Copa do Brasil', ano: '1989, 1994, 1997, 2001, 2016', detalhes: 'Rei de Copas, pentacampeão.' },
  ];

  return (
    <ScrollView style={styles.containerTitulos}>
      <Image 
        source={require('../assets/img/gremio.svg')}
        style={styles.imagemDestaque}
      />

      {conquistas.map((titulo) => (
        <View key={titulo.id} style={styles.cardTitulo}>
          <Text style={styles.nomeTitulo}>{titulo.nome}</Text>
          <Text style={styles.detalhesTitulo}>Anos: {titulo.ano}</Text>
          <Text style={styles.detalhesTitulo}>{titulo.detalhes}</Text>
        </View>
      ))}
    </ScrollView>
  );
}