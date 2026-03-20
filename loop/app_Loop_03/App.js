import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  let elemento = null;
  let i = 0;
  
  const AUTOR = "Steve";
  const DATA = "2026";
  
  let ArrayNomes = ['Zumbi', 'Esqueleto', 'Creeper', 'Enderman', 'Aranha', 'Slime', 'Aldeão', 'Porco', 'Ovelha', 'Vaca'];

  while (i < ArrayNomes.length) {
    elemento = (
      <>
        {elemento}
        <View style={{ marginTop: 5, height: 100, width: '100%', backgroundColor: 'lightgreen', justifyContent: 'center', paddingLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>Mob: {'   '}<Text style={{ fontWeight: 'bold' }}>{ArrayNomes[i]}</Text></Text>
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