import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tela01() {
  const nav = useNavigation();
  let img = require("../Img/mercurio.png"); 

  return (
    <ScrollView contentContainerStyle={estilos.fundo}>
      <Image source={img} style={estilos.img} />
      <Text style={estilos.tit}>Mercúrio</Text>

      <View style={estilos.caixaTexto}>
        <Text style={estilos.texto}>• Mercúrio é o planeta mais próximo do Sol.</Text>
        <Text style={estilos.texto}>• É o menor planeta do Sistema Solar.</Text>
        <Text style={estilos.texto}>• Um ano em Mercúrio dura apenas 88 dias terrestres.</Text>
        <Text style={estilos.texto}>• Durante o dia, a temperatura pode ultrapassar 400°C.</Text>
        <Text style={estilos.texto}>• À noite, a temperatura pode chegar a -180°C.</Text>
      </View>

      <View style={estilos.botoesContainer}>
        <View style={estilos.botao}>
          <Button title="VOLTAR" onPress={() => nav.goBack()} color="#708090" />
        </View>
        <View style={estilos.botao}>
          <Button title="PRÓXIMO PLANETA" onPress={() => nav.navigate("Tela02")} color="#4682b4" />
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flexGrow: 1, backgroundColor: '#d3d3d3', alignItems: 'center', padding: 20 },
  tit: { fontSize: 28, fontWeight: 'bold', marginVertical: 10, color: '#333' },
  img: { width: 180, height: 180, borderRadius: 90, marginVertical: 10 },
  caixaTexto: { width: '100%', marginBottom: 30, paddingHorizontal: 10 },
  texto: { fontSize: 16, marginBottom: 8, textAlign: 'justify' },
  botoesContainer: { width: '100%', flexDirection: 'column' },
  botao: { marginBottom: 15 }
});