import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

function Marte() {
  let imgMarte = require("../Img/marte.png");

  return (
    <View style={{ flex: 1, backgroundColor: '#ffe4e1' }}>
      <View style={{ backgroundColor: '#ffffff', padding: 20, alignItems: 'center' }}>
        <Image source={imgMarte} style={{ width: 120, height: 120, marginBottom: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4500' }}>MARTE</Text>
      </View>
      
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Introdução:</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          Marte é o quarto planeta a partir do Sol e o segundo menor do Sistema Solar. 
          Muitas vezes é descrito como o "Planeta Vermelho" devido à cor de sua superfície.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Origens</Text>
        <Text style={{ fontSize: 16, marginBottom: 15, textAlign: 'justify' }}>
          O nome "Marte" vem da mitologia romana, onde ele era o deus da guerra. 
          A coloração avermelhada, que lembrava sangue, foi o motivo da associação.
        </Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Curiosidades:</Text>
        <Text style={{ fontSize: 16, marginBottom: 20, textAlign: 'justify' }}>
          Marte possui a montanha mais alta conhecida do Sistema Solar, chamada Olympus Mons. 
          Também tem duas luas pequenas e de formato irregular, Fobos e Deimos.
        </Text>
      </ScrollView>

      <View style={{ backgroundColor: '#ffffff', padding: 10, borderTopWidth: 1, borderColor: '#cccccc' }}>
        <Text style={{ textAlign: 'center' }}>Autor: Estudante IFC</Text>
        <Text style={{ textAlign: 'center' }}>22/05/2026</Text>
      </View>
    </View>
  );
}

export default Marte;