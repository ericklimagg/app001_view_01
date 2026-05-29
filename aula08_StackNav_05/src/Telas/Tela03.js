import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';

export default function Tela03() {

  const nav = useNavigation();

  const [planeta, setPlaneta] = useState('Marte');

  const dados = {

    'Mercúrio': {
      imagem: require('../../assets/images/mercurio.png'),
      curiosidade: 'É o planeta mais próximo do Sol.'
    },

    'Vênus': {
      imagem: require('../../assets/images/venus.png'),
      curiosidade: 'É o planeta mais quente.'
    },

    'Marte': {
      imagem: require('../../assets/images/marte.png'),
      curiosidade: 'Conhecido como planeta vermelho.'
    }

  };

  function voltarTela() {
    nav.goBack();
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        ESCOLHA UM PLANETA
      </Text>

      <Picker
        selectedValue={planeta}
        style={styles.picker}
        onValueChange={(itemValue) =>
          setPlaneta(itemValue)
        }>

        <Picker.Item
          label="Mercúrio"
          value="Mercúrio"
        />

        <Picker.Item
          label="Vênus"
          value="Vênus"
        />

        <Picker.Item
          label="Marte"
          value="Marte"
        />

      </Picker>

      <Image
        source={dados[planeta].imagem}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        {planeta}
      </Text>

      <Text style={styles.curiosidade}>
        {dados[planeta].curiosidade}
      </Text>

      <View style={styles.botao}>

        <Button
          title="Voltar"
          onPress={voltarTela}
          color="#FF5757"
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#140B1D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20
  },

  picker: {
    width: 260,
    backgroundColor: '#FFFFFF',
    marginBottom: 30
  },

  imagem: {
    width: 180,
    height: 180,
    marginBottom: 20
  },

  nome: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold'
  },

  curiosidade: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 30
  },

  botao: {
    width: 220
  }

});