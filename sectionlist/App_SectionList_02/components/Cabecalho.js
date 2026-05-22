import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Lista de Tarefas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center'
  },

  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }

});