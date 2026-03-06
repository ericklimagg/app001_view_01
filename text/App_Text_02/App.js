import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'darkgray', padding: 20 }}>
      
      <View style={{ 
        backgroundColor: 'white', 
        height: '15%', 
        borderWidth: 2, 
        borderColor: 'blue',
        padding: 10
      }}>
        <Text style={{ fontSize: 25, color: 'blue' }}>Título do Projeto</Text>
        <Text style={{ fontSize: 14 }}>Desenvolvido por Erick e Felipe</Text>
      </View>

      <View style={{ 
        backgroundColor: 'yellow', 
        height: '40%', 
        marginTop: 20,
        borderWidth: 4, 
        borderColor: 'orange',
        padding: 15
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          O que é o React Native?
        </Text>
        <Text style={{ fontSize: 17, marginTop: 10 }}>
          O React Native é um framework que permite criar aplicativos nativos usando apenas o JavaScript. Conseguimos criar interfaces incríveis apenas combinando componentes como View e Text.
        </Text>
      </View>

      <View style={{ 
        backgroundColor: 'black', 
        height: '25%', 
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 15
      }}>
        <Text style={{ fontSize: 18, color: 'white', fontStyle: 'italic' }}>
          "A persistência é o caminho do êxito. Cada linha de código escrita é um passo a mais na nossa evolução como desenvolvedores."
        </Text>
      </View>

      <View style={{ 
        backgroundColor: 'green', 
        height: '10%', 
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
          Fim da Atividade - Março 2026
        </Text>
      </View>

    </View>
  );
}

export default App;