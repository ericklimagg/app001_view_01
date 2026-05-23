import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

function Jupiter() {
  let imgJupiter = require("../Img/jupiter.png");

  return (
    <View style={{ flex: 1, backgroundColor: '#fdf5e6' }}>
      <View style={{ backgroundColor: '#ffffff', padding: 20, alignItems: 'center' }}>
        <Image source={imgJupiter} style={{ width: 120, height: 120, marginBottom: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#8b4513' }}>JÚPITER</Text>
      </View>
      
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Introdução:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          Júpiter é o maior planeta do Sistema Solar, sendo um gigante gasoso com uma massa 
          mais de duas vezes e meia a de todos os outros planetas do Sistema Solar combinados.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Origens</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          Foi observado desde a antiguidade e recebeu o nome de Júpiter, o deus principal da 
          mitologia romana.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Curiosidades:</Text>
        <Text style={{ fontSize: 16, marginBottom: 20, textAlign: 'justify' }}>
          O planeta é famoso pela sua Grande Mancha Vermelha, uma tempestade anticiclônica gigante 
          que existe há pelo menos centenas de anos. Júpiter também tem dezenas de luas.
        </Text>
      </ScrollView>

      <View style={{ backgroundColor: '#ffffff', padding: 10, borderTopWidth: 1, borderColor: '#cccccc' }}>
        <Text style={{ textAlign: 'center' }}>Autor: Estudante IFC</Text>
        <Text style={{ textAlign: 'center' }}>22/05/2026</Text>
      </View>
    </View>
  );
}

export default Jupiter;