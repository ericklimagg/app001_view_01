import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Principal() {
  const nav = useNavigation();
  const [modoNoturno, setModoNoturno] = useState(false);
  
  let imgSistemaSolar = require("../Img/sistemasolar.png");

  const planetas = [
    { id: '1', nome: 'Explorar Marte', tela: 'Marte' },
    { id: '2', nome: 'Explorar Júpiter', tela: 'Jupiter' },
    { id: '3', nome: 'Explorar Saturno', tela: 'Saturno' }
  ];

  function acessaTela(tela) {
    nav.navigate(tela);
  }

  return (
    <View style={{ flex: 1, backgroundColor: modoNoturno ? '#1a1a1a' : '#f0f8ff', padding: 20 }}>
      <View style={{ backgroundColor: '#ffffff', padding: 15, marginBottom: 20, borderRadius: 8, alignItems: 'center' }}>
        <Image source={imgSistemaSolar} style={{ width: 150, height: 150, marginBottom: 10 }} />
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000' }}>Telas do Sistema Solar</Text>
        <Text style={{ fontSize: 16, color: '#333' }}>Stack Navigation</Text>
        <Text style={{ fontSize: 16, color: '#333' }}></Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 18, color: modoNoturno ? '#ffffff' : '#000000', marginRight: 10 }}>
          Ativar Modo Escuro
        </Text>
        <Switch 
          value={modoNoturno} 
          onValueChange={setModoNoturno} 
        />
      </View>

      <FlatList
        data={planetas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ padding: 15, backgroundColor: '#4682b4', marginBottom: 10, borderRadius: 5 }}
            onPress={() => acessaTela(item.tela)}
          >
            <Text style={{ fontSize: 18, color: '#ffffff', textAlign: 'center' }}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={{ marginTop: 20, borderTopWidth: 1, borderColor: '#cccccc', paddingTop: 10 }}>
        <Text style={{ color: modoNoturno ? '#ffffff' : '#000000', textAlign: 'center' }}>Autor: Estudante IFC</Text>
        <Text style={{ color: modoNoturno ? '#ffffff' : '#000000', textAlign: 'center' }}>22/05/2026</Text>
      </View>
    </View>
  );
}

export default Principal;