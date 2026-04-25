import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableHighlight } from 'react-native';
import { estilos } from '../styleSheet/estilo';

const mobs = [
  { nome: 'Creeper', foto: require('../img/creeper.jpeg') },
  { nome: 'Zumbi', foto: require('../img/zumbi.png') },
  { nome: 'Esqueleto', foto: require('../img/esqueleto.jpeg') }
];

function Conteudo() {
  const [indiceAtual, setIndiceAtual] = useState(Math.floor(Math.random() * mobs.length));
  const [nomeDigitado, setNomeDigitado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [corMensagem, setCorMensagem] = useState(estilos.mensagemAcerto);

  function verificarNome() {
    if (nomeDigitado.toLowerCase() === mobs[indiceAtual].nome.toLowerCase()) {
      setMensagem('Acertou em cheio, mano!');
      setCorMensagem(estilos.mensagemAcerto);
    } else {
      setMensagem('Ixi, errou feio! Cuidado com o dano.');
      setCorMensagem(estilos.mensagemErro);
    }
  }

  function proximoMob() {
    let novoIndice = Math.floor(Math.random() * mobs.length);
    setIndiceAtual(novoIndice);
    setNomeDigitado('');
    setMensagem('');
  }

  return (
    <View style={estilos.conteudo}>
      <Text style={estilos.tituloConteudo}>Acerte o Mob</Text>
      
      <Image source={mobs[indiceAtual].foto} style={estilos.img} />
      
      <TextInput
        style={estilos.input}
        placeholder="Qual o nome desse mob?"
        onChangeText={(texto) => setNomeDigitado(texto)}
        value={nomeDigitado}
      />
      
      <TouchableHighlight style={estilos.botaoVerificar} onPress={verificarNome}>
        <Text style={estilos.textoBotao}>Verificar</Text>
      </TouchableHighlight>
      
      {mensagem !== '' && <Text style={corMensagem}>{mensagem}</Text>}
      
      <TouchableHighlight style={estilos.botaoProximo} onPress={proximoMob}>
        <Text style={estilos.textoBotao}>Próximo</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Conteudo;