import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tela02() {
  const nav = useNavigation();
  let img = require("../Img/venus.png");

  return (
    <ScrollView contentContainerStyle={estilos.fundo}>
      <Image source={img} style={estilos.img} />
      <Text style={estilos.tit}>Vênus</Text>

      <View style={estilos.caixaTexto}>
        <Text style={estilos.texto}>• Vênus é o planeta mais quente do Sistema Solar.</Text>
        <Text style={estilos.texto}>• Vênus possui uma atmosfera extremamente densa.</Text>
        <Text style={estilos.texto}>• Sua temperatura média é superior a 460°C.</Text>
        <Text style={estilos.texto}>• O planeta gira no sentido contrário da maioria dos planetas.</Text>
        <Text style={estilos.texto}>• É conhecido como a "estrela d'alva".</Text>
      </View>

      <View style={estilos.botoesContainer}>
        <View style={estilos.botao}>
          <Button title="VOLTAR" onPress={() => nav.goBack()} color="#708090" />
        </View>
        <View style={estilos.botao}>
          <Button title="PRÓXIMO PLANETA" onPress={() => nav.navigate("Tela03")} color="#4682b4" />
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flexGrow: 1, backgroundColor: '#f5deb3', alignItems: 'center', padding: 20 },
  tit: { fontSize: 28, fontWeight: 'bold', marginVertical: 10, color: '#8b4513' },
  img: { width: 180, height: 180, borderRadius: 90, marginVertical: 10 },
  caixaTexto: { width: '100%', marginBottom: 30, paddingHorizontal: 10 },
  texto: { fontSize: 16, marginBottom: 8, textAlign: 'justify' },
  botoesContainer: { width: '100%', flexDirection: 'column' },
  botao: { marginBottom: 15 }
});