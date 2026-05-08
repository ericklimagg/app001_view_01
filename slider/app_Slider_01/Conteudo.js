import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import { estilos } from './estilos';

function Conteudo() {
  const corPadraoFundo = '#121212';
  const corPadraoTexto = '#f0f0f0';

  const [bgInput, setBgInput] = useState('#ffffff');
  const [fundoDinamico, setFundoDinamico] = useState(corPadraoFundo);
  const [corLetra, setCorLetra] = useState(corPadraoTexto);
  const [usuario, setUsuario] = useState("");

  let instrucao = "Utilize os seletores deslizantes abaixo para modificar a aparência do layout. " +
    "Cada movimento gera uma nova combinação cromática para os elementos da tela. " +
    "Experimente agora mesmo:\n";

  function validarAcesso() {
    if (usuario.trim() !== "") {
      Alert.alert("Bem-vindo(a)", "Olá " + usuario + "! Tente interagir com os controles para mudar o tema.");
    } else {
      Alert.alert("Atenção", "Preencha o campo de nome antes de prosseguir.");
    }
  }

  function ativarFoco() {
    setBgInput('#e2e8f0');
  }

  function removerFoco() {
    setBgInput('#ffffff');
  }

  function atualizarNome(valor) {
    setUsuario(valor);
  }

  function mudarCorTexto(v) {
    let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCorLetra(hex);
  }

  function mudarCorFundo(v) {
    let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setFundoDinamico(hex);
  }

  return (
    <View style={[estilos.corpoApp, { backgroundColor: fundoDinamico }]}>
      <Text style={[estilos.legendaInformativa, { color: corLetra }]}>{instrucao}</Text>
      
      <Text style={estilos.labelInput}>Identifique-se:</Text>
      <TextInput
        style={[estilos.campoTexto, { backgroundColor: bgInput }]}
        onFocus={ativarFoco}
        onBlur={removerFoco}
        value={usuario}
        onChangeText={atualizarNome}
        placeholder="Seu nome aqui..."
      />

      <Text style={estilos.labelInput}>Matiz do Texto:</Text>
      <Slider
        style={{ width: '85%', height: 40 }}
        step={1}
        minimumValue={0}
        maximumValue={50}
        thumbTintColor="#6366f1"
        onValueChange={mudarCorTexto}
      />

      <Text style={estilos.labelInput}>Matiz do Ambiente:</Text>
      <Slider
        style={{ width: '85%', height: 40 }}
        step={1}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#10b981"
        maximumTrackTintColor="#ef4444"
        onValueChange={mudarCorFundo}
      />

      <TouchableHighlight
        onPress={validarAcesso}
        underlayColor="#4338ca"
        style={estilos.botaoAcao}>
        <Text style={estilos.textoBotao}>CONFIRMAR</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Conteudo;