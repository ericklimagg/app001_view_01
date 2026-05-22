import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

export default function Saturno() {
  let imgSaturno = require("../Img/saturno.png");
  let autor = "Erick e Felipe";
  let data = "2k26";

  return (
    <View style={{ flex: 1, backgroundColor: '#daa520' }}>
      
      <View style={{ backgroundColor: '#ffffff', padding: 20, alignItems: 'center' }}>
        <Image source={imgSaturno} style={{ width: 120, height: 120, marginBottom: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#daa520' }}>SATURNO</Text>
        <Text style={{ fontSize: 18 }}>Curiosidades</Text>
      </View>
      
      <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', padding: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Introdução:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar, 
          atrás apenas de Júpiter. É mais conhecido pelo seu complexo sistema de anéis.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Origens:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          O nome vem do deus romano da agricultura e riqueza, Saturno, que também era o pai 
          de Júpiter na mitologia.
        </Text>
      </ScrollView>

      <View style={{ backgroundColor: '#ffffff', padding: 10, borderTopWidth: 1, borderColor: '#cccccc', alignItems: 'center' }}>
        <Text>{autor}</Text>
        <Text>{data}</Text>
      </View>

    </View>
  );
}