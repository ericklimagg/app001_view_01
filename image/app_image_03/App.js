import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#111111', margin: 10 }}>
      
      <View style={{
        alignItems: 'center', backgroundColor: '#e10600',
        flexDirection: 'column', paddingVertical: 20
      }}>
        <Text style={{ fontSize: 30, color: "white", marginBottom: 20 }}>Mundo da Fórmula 1</Text>
        <Image
          source={require('./img/img1.png')}
          style={{ width: 200, height: 100, borderColor: 'white', borderWidth: 3 }}
        />
      </View>
      
      <View style={{
        alignItems: 'center', backgroundColor: '#333333',
        flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 10,
        justifyContent: "space-around"
      }}>
        <Text style={{
          fontSize: 20, color: "white", marginBottom: 20, width: '60%',
          textAlign: "justify"
        }}>
          A F1 traz os carros mais rápidos e a mais alta tecnologia das pistas:</Text>
        <Image
          source={require('./img/img1.png')}
          style={{ width: 100, height: 100, borderColor: '#ffb800', borderWidth: 5, borderRadius: 50 }}
        />
      </View>
      
      <View style={{
        alignItems: 'center', backgroundColor: '#f4f4f4',
        flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 10,
        justifyContent: "space-around"
      }}>
        <Image
          source={require('./img/img2.png')}
          style={{
            width: 100, height: 100, borderColor: '#e10600', borderWidth: 2, borderTopLeftRadius: 50,
            marginHorizontal: 20
          }}
        />
        <Text style={{
          fontSize: 15, color: "#111111", marginBottom: 20, width: '70%',
          textAlign: "justify"
        }}>
          - Ultrapassagens emocionantes a 300km/h; {'\n'}
          - Pit stops estratégicos em 2 segundos;{'\n'}
          - Pilotos desafiando os limites da física!</Text>
      </View>
      
      <View style={{
        width: '100%', position: 'absolute',
        bottom: 15, alignItems: "center", backgroundColor: 'white',
        padding: 20
      }}>
        <Image source={{ uri: 'https://izap.com.br/uploads/google-logoblog.png' }}
          style={{ width: 200, height: 100 }} />
        <View style={{ flexDirection: 'row' }}>
          <Text> Paddock F1 - Temporada 2026</Text>
        </View>
      </View>
      
    </View>
  );
}

export default App;