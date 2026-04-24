import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [textoFrase, setTextoFrase] = useState('');
  const [textoBotao, setTextoBotao] = useState('Quebrar bloco');
  const [imgBiscoito, setImgBiscoito] = useState(require('./src/img/bloco.png'));

  function alteraStatusBiscoito() {
    if (textoBotao === 'Quebrar bloco') {
      let frases = ['Nunca cave reto pra baixo.', 'Creeper na porta de casa é osso.', 'Diamante é bom, mas cadê a madeira?', 'Fazer casa de terra no primeiro dia é lei.', 'Cuidado com a lava no nether', 'A picareta de madeira é só para pegar as primeiras 3 pedras.'];
      let numeroAleatorio = Math.floor(Math.random() * frases.length);
      setTextoFrase(frases[numeroAleatorio]);
      setImgBiscoito(require('./src/img/bloco_quebrado.png'));
      setTextoBotao('Novo bloco');
    } else {
      setTextoFrase('');
      setImgBiscoito(require('./src/img/bloco.png'));
      setTextoBotao('Quebrar bloco');
    }
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.areaImg}>
        <Image source={imgBiscoito} style={estilos.img} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={estilos.textoFrase}>{textoFrase}</Text>
        <TouchableOpacity style={estilos.botao} onPress={alteraStatusBiscoito}>
          <View style={estilos.areaBotao}>
            <Image source={require('./src/img/picareta_icone.png')} style={{ marginRight: 20, width: 40, height: 40 }} />
            <Text style={estilos.textoBotao}>{textoBotao}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e6' },
  areaImg: { marginBottom: 40 },
  img: { width: 250, height: 250, resizeMode: 'contain' },
  textoFrase: { fontSize: 20, color: '#333', marginHorizontal: 30, marginBottom: 40, fontStyle: 'italic', textAlign: 'center' },
  botao: { width: 260, height: 55, borderWidth: 2, borderColor: '#3e2723', borderRadius: 25, backgroundColor: '#795548' },
  areaBotao: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: 'white' }
});

export default App;