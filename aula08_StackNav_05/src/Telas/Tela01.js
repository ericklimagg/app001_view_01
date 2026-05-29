import React from 'react';

import {
  View,
  Text,
  Button,
 StyleSheet,
  FlatList,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Tela01() {

  const nav = useNavigation();

  const curiosidades = [
    { id: '1', texto: 'Mais próximo do Sol' },
    { id: '2', texto: 'Muito quente durante o dia' },
    { id: '3', texto: 'Muito frio durante a noite' }
  ];

  function proximaTela() {
    nav.navigate('Tela02');
  }

  function voltarTela() {
    nav.goBack();
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        MERCÚRIO
      </Text>

      <Image
        source={require('../../assets/images/mercurio.png')}
        style={styles.imagem}
      />

      <FlatList
        data={curiosidades}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            • {item.texto}
          </Text>
        )}
      />

      <View style={styles.botoes}>

        <Button
          title="Próximo"
          onPress={proximaTela}
          color="#6C63FF"
        />

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
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20
  },

  item: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10
  },

  botoes: {
    width: 220,
    gap: 10,
    marginTop: 20
  }

});