import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Principal() {
  const nav = useNavigation();
  let imgSistemaSolar = require("../Img/sistemasolar.png");
  let autor = "Erick e Felipe";
  let data = "2k26";

  function acessaTela(tela: string) {
    if (tela === 'M') nav.navigate("Marte" as never);
    else if (tela === 'J') nav.navigate("Jupiter" as never);
    else if (tela === 'S') nav.navigate("Saturno" as never);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#d3d3d3' }}>
      
      <View style={{ backgroundColor: '#ffffff', alignItems: 'center', padding: 20 }}>
        <Image source={imgSistemaSolar} style={{ width: 120, height: 120, marginBottom: 10 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tela Principal</Text>
        <Text>Stack Navigation</Text>
        <Text>DSV Mobile</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: '#ffffff', marginTop: 10, padding: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Curiosidades</Text>
        
        <TouchableOpacity style={styles.botao} onPress={() => acessaTela('M')}>
          <Text style={styles.textoBotao}>Marte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => acessaTela('J')}>
          <Text style={styles.textoBotao}>Júpiter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => acessaTela('S')}>
          <Text style={styles.textoBotao}>Saturno</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#d3d3d3', padding: 10, alignItems: 'center' }}>
        <Text>{autor}</Text>
        <Text>{data}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#4682b4',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 8
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});