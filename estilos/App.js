import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

function App() {
  let imgAvatar = require('./img/steve.jpg');
  let iconTab1 = require('./img/tab1.png');
  let iconTab2 = require('./img/tab2.png');
  let iconTab3 = require('./img/tab3.png');
  
  let nomeUsuario = "Steve";
  let linkPerfil = "Ver inventário >";
  
  let titulo1 = "Vila Amiga";
  let subtitulo1 = "Novidade >";
  
  let titulo2 = "Minecraft Realms";
  let subtitulo2 = "(Em Breve) >";
  
  let medTitulo = "Atributos";
  let medValor = "Vida: 20 HP";
  
  let pergTitulo = "Já derrotou o Ender Dragon?";
  let pergResp = "Sim";
  
  let conqTitulo = "Conquista";
  let conqResp = "Free the End - 02/2026";
  
  let dimTitulo = "Última Dimensão";
  let dimResp = "THE END";

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image source={imgAvatar} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.headerName}>{nomeUsuario}</Text>
          <Text style={styles.headerLink}>{linkPerfil}</Text>
        </View>
      </View>

      <ScrollView style={styles.body}>
        
        <View style={styles.rowCards}>
          <View style={styles.cardSmall}>
            <Text style={styles.cardTitle}>{titulo1}</Text>
            <Text style={styles.cardSubtitleAccent}>{subtitulo1}</Text>
          </View>
          <View style={styles.cardSmall}>
            <Text style={styles.cardTitle}>{titulo2}</Text>
            <Text style={styles.cardSubtitle}>{subtitulo2}</Text>
          </View>
        </View>

        <View style={styles.cardLarge}>
          <Text style={styles.label}>{medTitulo}</Text>
          <Text style={styles.value}>{medValor}</Text>
        </View>

        <View style={styles.cardLarge}>
          <Text style={styles.label}>{pergTitulo}</Text>
          <Text style={styles.value}>{pergResp}</Text>
        </View>

        <View style={styles.cardLarge}>
          <Text style={styles.label}>{conqTitulo}</Text>
          <Text style={styles.value}>{conqResp}</Text>
        </View>

        <View style={styles.cardLarge}>
          <Text style={styles.label}>{dimTitulo}</Text>
          <Text style={styles.value}>{dimResp}</Text>
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.tabItem}>
          <Image source={iconTab1} style={styles.tabIcon} />
          <Text style={styles.tabText}>Biomas</Text>
        </View>
        
        <View style={styles.tabItem}>
          <Image source={iconTab2} style={styles.tabIcon} />
          <Text style={styles.tabText}>Missões</Text>
        </View>

        <View style={styles.tabItem}>
          <Image source={iconTab3} style={styles.tabIcon} />
          <Text style={styles.tabText}>Menu</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#27ae60',
    padding: 25,
    paddingTop: 60,
    alignItems: 'center'
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: 'white'
  },
  headerInfo: {
    marginLeft: 15
  },
  headerName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  headerLink: {
    color: '#f1c40f',
    fontSize: 16,
    marginTop: 4
  },
  body: {
    flex: 1,
    padding: 15
  },
  rowCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  cardSmall: {
    backgroundColor: 'white',
    width: '48%',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  cardLarge: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  cardTitle: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginBottom: 8
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#7f8c8d'
  },
  cardSubtitleAccent: {
    fontSize: 14,
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  label: {
    fontSize: 14,
    color: '#95a5a6',
    marginBottom: 5
  },
  value: {
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#dcdde1',
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabIcon: {
    width: 26,
    height: 26,
    marginBottom: 4
  },
  tabText: {
    fontSize: 12,
    color: '#27ae60',
    fontWeight: 'bold'
  }
});

export default App;
