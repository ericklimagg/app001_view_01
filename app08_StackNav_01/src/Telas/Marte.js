import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

export default function Marte() {
  let imgMarte = require("../Img/marte.png");
  let autor = "Erick e Felipe";
  let data = "2k26";

  return (
    <View style={{ flex: 1, backgroundColor: '#8b0000' }}>
      
      <View style={{ backgroundColor: '#ffffff', padding: 20, alignItems: 'center' }}>
        <Image source={imgMarte} style={{ width: 120, height: 120, marginBottom: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4500' }}>MARTE</Text>
        <Text style={{ fontSize: 18 }}>Curiosidades</Text>
      </View>
      
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', padding: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Introdução:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          Marte é o quarto planeta a partir do Sol e o segundo menor do Sistema Solar. 
          Muitas vezes é descrito como o "Planeta Vermelho" devido à cor de sua superfície.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Origens:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          O nome "Marte" vem da mitologia romana, onde ele era o deus da guerra. 
          A coloração avermelhada, que lembrava sangue, foi o motivo da associação.
        </Text>
      </ScrollView>

      <View style={{ backgroundColor: '#ffffff', padding: 10, borderTopWidth: 1, borderColor: '#cccccc', alignItems: 'center' }}>
        <Text>{autor}</Text>
        <Text>{data}</Text>
      </View>

    </View>
  );
}