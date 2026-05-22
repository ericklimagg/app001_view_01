import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        App desenvolvido em React Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center'
  },

  texto: {
    color: '#fff'
  }

});