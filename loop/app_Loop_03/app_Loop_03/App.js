import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  let elemento = null;
  let i = 0;
  
  const AUTOR = "Steve";
  const DATA = "2026";
  
  let ArrayNomes = ['Zumbi', 'Esqueleto', 'Creeper', 'Enderman', 'Aranha', 'Slime'];
  let ArrayTipos = ['Hostil', 'Hostil', 'Hostil', 'Neutro', 'Neutro', 'Hostil'];
  let ArrayDano = ['3', '2', 'Letal', '4', '2', '1'];
  let ArrayFotos = [
    require('./img/zumbi.png'),
    require('./img/esqueleto.png'),
    require('./img/creeper.png'),
    require('./img/enderman.png'),
    require('./img/aranha.png'),
    require('./img/slime.png')
  ];

  while (i < ArrayNomes.length) {
    elemento = (
      <>
        {elemento}
        <View style={{
          flexDirection: 'row', marginTop: 5, padding: 10,
          backgroundColor: 'lightgreen', alignItems: 'center',
          borderBottomWidth: 2, borderColor: 'white'
        }}>
          <Image source={ArrayFotos[i]} style={{
            width: 80, height: 80, borderWidth: 1, borderColor: '#333', marginRight: 15
          }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 16 }}>Nome: {'   '}<Text style={{ fontWeight: 'bold', fontSize: 22 }}>{ArrayNomes[i]}</Text></Text>
            <Text style={{ fontSize: 16 }}>Tipo: {'     '}<Text style={{ fontWeight: 'bold' }}>{ArrayTipos[i]}</Text></Text>
            <Text style={{ fontSize: 16 }}>Dano: {'    '}<Text style={{ fontWeight: 'bold' }}>{ArrayDano[i]}</Text></Text>
          </View>
        </View>
      </>
    )
    i++;
  }

  return (
    <View style={{ backgroundColor: 'darkgray', flex: 1, padding: 10 }}>
      <View id='cabecalho' style={{
        borderTopRightRadius: 25, borderTopLeftRadius: 25,
        backgroundColor: 'darkgreen', flex: 2,
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>MOBS DO JOGO</Text>
        <Image source={require('./img/icone.jpg')} 
               style={{ width: 150, height: 100, borderRadius: 25, marginTop: 10, marginBottom: 10 }} />
        <Text style={{ color: 'yellow', fontSize: 20, fontWeight: 'bold', fontFamily: "Arial Rounded MT Bold" }}>MINECRAFT MOBILE</Text>
      </View>

      <ScrollView id='corpo' style={{
        backgroundColor: 'white', flex: 5
      }}>
        {elemento}
      </ScrollView>

      <View id='rodape' style={{
        backgroundColor: 'darkgreen', flex: 1, flexDirection: 'row', justifyContent: "space-around", alignItems: 'center'
      }}>
        <Text style={{ fontSize: 20, color: 'yellow' }}>{AUTOR}</Text>
        <Text style={{ fontSize: 20, color: 'yellow' }}>{DATA}</Text>
      </View>
    </View>
  );
}

export default App;