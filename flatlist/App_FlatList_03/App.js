import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

const carros = [
  {
    id: '1',
    nome: 'Ferrari F40',
    marca: 'Ferrari',
    potencia: '478 cv',
    foto: require('./assets/1.jpg')
  },
  {
    id: '2',
    nome: 'Mustang GT',
    marca: 'Ford',
    potencia: '450 cv',
    foto: require('./assets/2.jpg')
  },
  {
    id: '3',
    nome: 'Porsche 911',
    marca: 'Porsche',
    potencia: '379 cv',
    foto: require('./assets/3.jpg')
  },
  {
    id: '4',
    nome: 'Lamborghini Aventador',
    marca: 'Lamborghini',
    potencia: '770 cv',
    foto: require('./assets/4.jpg')
  },
  {
    id: '5',
    nome: 'Bugatti Chiron',
    marca: 'Bugatti',
    potencia: '1500 cv',
    foto: require('./assets/5.jpg')
  },
  {
    id: '6',
    nome: 'McLaren P1',
    marca: 'McLaren',
    potencia: '903 cv',
    foto: require('./assets/6.jpg')
  },
  {
    id: '7',
    nome: 'Chevrolet Camaro',
    marca: 'Chevrolet',
    potencia: '455 cv',
    foto: require('./assets/7.jpg')
  },
  {
    id: '8',
    nome: 'Nissan GT-R',
    marca: 'Nissan',
    potencia: '565 cv',
    foto: require('./assets/8.jpg')
  },
  {
    id: '9',
    nome: 'Toyota Supra',
    marca: 'Toyota',
    potencia: '382 cv',
    foto: require('./assets/9.jpg')
  },
  {
    id: '10',
    nome: 'Audi R8',
    marca: 'Audi',
    potencia: '602 cv',
    foto: require('./assets/10.jpg')
  }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Melhores Carros de Todos os Tempos
      </Text>

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image
              source={item.foto}
              style={styles.imagem}
              resizeMode="cover"
            />

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.info}>
              Marca: {item.marca}
            </Text>

            <Text style={styles.info}>
              Potência: {item.potencia}
            </Text>

          </View>
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },

  card: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10
  },

  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },

  info: {
    fontSize: 16,
    marginTop: 5
  }

});