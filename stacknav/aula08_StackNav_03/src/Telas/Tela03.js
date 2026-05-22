import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tela03() {
  const nav = useNavigation();
  let img = require("../Img/marte.png");

  return (
    <ScrollView contentContainerStyle={estilos.fundo}>
      <Image source={img} style={estilos.img} />
      <Text style={estilos.tit}>Marte</Text>

      <View style={estilos.caixaTexto}>
        <Text style={estilos.texto}>- Marte é conhecido como o planeta vermelho</Text>
        <Text style={estilos.texto}>- A coloração avermelhada é causada por óxido de ferro.</Text>
        <Text style={estilos.texto}>- Marte possui o maior vulcão do Sistema Solar.</Text>
        <Text style={estilos.texto}>- Cientistas estudam a possibilidade de vida antiga no planeta.</Text>
        <Text style={estilos.texto}>- Missões espaciais investigam Marte constantemente.</Text>
      </View>

      <View style={estilos.botoesContainer}>
        <View style={estilos.botao}>
          <Button title="VOLTAR" onPress={() => nav.goBack()} color="#4682b4" />
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flexGrow: 1, backgroundColor: '#ffcccb', alignItems: 'center', padding: 20 },
  tit: { fontSize: 28, fontWeight: 'bold', marginVertical: 10, color: '#b22222' },
  img: { width: 180, height: 180, borderRadius: 90, marginVertical: 10 },
  caixaTexto: { width: '100%', marginBottom: 30, paddingHorizontal: 10 },
  texto: { fontSize: 16, marginBottom: 8, textAlign: 'justify' },
  botoesContainer: { width: '100%', flexDirection: 'column' },
  botao: { marginBottom: 15 }
});