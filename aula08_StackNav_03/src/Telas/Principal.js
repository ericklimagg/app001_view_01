import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Principal() {
  const nav = useNavigation();
  let img = require("../Img/sistemasolar.png"); 

  function proximaTela() {
    nav.navigate("Tela01" as never);
  }

  return (
    <View style={estilos.fundo}>
      <Text style={estilos.subTit}>Stack Navigation - parte 2</Text>
      <Image source={img} style={estilos.img} />
      <Text style={estilos.tit}>SISTEMA SOLAR</Text>
      
      <View style={estilos.botaoContainer}>
        <Button title="Iniciar Viagem" onPress={proximaTela} color="#4682b4" />
      </View>
      
      <Text style={estilos.subTit2}>DSV MOBILE</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#f0f8ff', alignItems: 'center', justifyContent: 'center', padding: 20 },
  tit: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  subTit: { fontSize: 18, marginVertical: 10 },
  subTit2: { fontSize: 16, fontWeight: 'bold', marginTop: 30 },
  img: { width: 150, height: 150, marginVertical: 20 },
  botaoContainer: { marginVertical: 20, width: '80%' }
});