import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export default function Home() {
  return (
    <View style={styles.containerHome}>
      <View style={styles.corpoHome}>
        <Text style={styles.tituloHome}>Imortal Tricolor 🇪🇪</Text>
        <Text style={styles.textoHome}>
          Bem-vindo ao aplicativo dedicado ao Grêmio Foot-Ball Porto Alegrense.
          Explore nossas abas para conhecer nossos maiores títulos e as lendas que vestiram nosso manto.
        </Text>
      </View>
      
      <View style={styles.rodapeHome}>
        <Text style={styles.textoRodapeHome}>Desenvolvido para a Nação Tricolor</Text>
      </View>
    </View>
  );
}