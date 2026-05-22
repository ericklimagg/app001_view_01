import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

export default function Jupiter() {
  let imgJupiter = require("../Img/jupiter.png");
  let autor = "Erick e Felipe";
  let data = "2k26";

  return (
    <View style={{ flex: 1, backgroundColor: '#8b4513' }}>
      
      <View style={{ backgroundColor: '#ffffff', padding: 20, alignItems: 'center' }}>
        <Image source={imgJupiter} style={{ width: 120, height: 120, marginBottom: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d2b48c' }}>JÚPITER</Text>
        <Text style={{ fontSize: 18 }}>Curiosidades</Text>
      </View>
      
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', padding: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Introdução:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          Júpiter é o maior planeta do Sistema Solar, sendo um gigante gasoso com uma massa 
          mais de duas vezes e meia a de todos os outros planetas do Sistema Solar combinados.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Origens:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          Foi observado desde a antiguidade e recebeu o nome de Júpiter, o deus principal da 
          mitologia romana.
        </Text>
      </ScrollView>

      <View style={{ backgroundColor: '#ffffff', padding: 10, borderTopWidth: 1, borderColor: '#cccccc', alignItems: 'center' }}>
        <Text>{autor}</Text>
        <Text>{data}</Text>
      </View>

    </View>
  );
}