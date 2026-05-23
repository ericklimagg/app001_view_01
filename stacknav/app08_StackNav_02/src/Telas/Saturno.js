import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

function Saturno() {
  let imgSaturno = require("../Img/saturno.png");

  return (
    <View style={{ flex: 1, backgroundColor: '#fff8dc' }}>
      <View style={{ backgroundColor: '#ffffff', padding: 20, alignItems: 'center' }}>
        <Image source={imgSaturno} style={{ width: 120, height: 120, marginBottom: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#daa520' }}>SATURNO</Text>
      </View>
      
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Introdução:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar, 
          atrás apenas de Júpiter. É mais conhecido pelo seu complexo sistema de anéis.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Origens</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          O nome vem do deus romano da agricultura e riqueza, Saturno, que também era o pai 
          de Júpiter na mitologia.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Curiosidades:</Text>
        <Text style={{ fontSize: 16, marginBottom: 20, textAlign: 'justify' }}>
          Os belos anéis de Saturno são formados principalmente por pedaços de gelo, 
          poeira e material rochoso. Além disso, Saturno é o planeta com a menor densidade, 
          sendo menos denso que a própria água.
        </Text>
      </ScrollView>

      <View style={{ backgroundColor: '#ffffff', padding: 10, borderTopWidth: 1, borderColor: '#cccccc' }}>
        <Text style={{ textAlign: 'center' }}>Autor: Estudante IFC</Text>
        <Text style={{ textAlign: 'center' }}>22/05/2026</Text>
      </View>
    </View>
  );
}

export default Saturno;