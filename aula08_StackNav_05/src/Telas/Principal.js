import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Principal() {

  const nav = useNavigation();

  function proximaTela() {
    nav.navigate('Tela01');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        STACK NAVIGATION
      </Text>

      <Image
        source={require('../../assets/images/solar.png')}
        style={styles.imagem}
      />

      <Text style={styles.subtitulo}>
        SISTEMA SOLAR
      </Text>

      <View style={styles.botao}>
        <Button
          title="INICIAR VIAGEM"
          onPress={proximaTela}
          color="#6C63FF"
        />
      </View>

      <Text style={styles.rodape}>
        Dsv Mobile
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0B1026',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20
  },

  subtitulo: {
    fontSize: 28,
    color: '#FFD700',
    marginTop: 20,
    marginBottom: 30
  },

  imagem: {
    width: 220,
    height: 220,
    borderRadius: 200
  },

  botao: {
    width: 220
  },

  rodape: {
    color: '#FFFFFF',
    marginTop: 40,
    fontSize: 18
  }

});