import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { estilos } from './estilos';

export default function Conteudo() {
  const [nome, setNome] = useState('');
  const [filme, setFilme] = useState('Matrix');
  const [nota, setNota] = useState(8.0);
  const [comentario, setComentario] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [dadosFinais, setDadosFinais] = useState({});

  let imagemMedalha = require('./assets/medalha.png');

  function confirmarAvaliacao() {
    setDadosFinais({
      nomeAvalidador: nome,
      filmeEscolhido: filme,
      notaDada: nota,
      textoComentario: comentario
    });
    setMostrarResultado(true);
  }

  return (
    <View style={estilos.corpo}>
      
      <TextInput
        style={[estilos.input, { marginTop: 10 }]}
        value={nome}
        onChangeText={(valor) => setNome(valor)}
        placeholder="Luiz"
      />

      <Text style={estilos.label}>Escolha o filme:</Text>
      <View style={estilos.pickerContainer}>
        <Picker
          selectedValue={filme}
          onValueChange={(item) => setFilme(item)}
        >
          <Picker.Item label="Matrix" value="Matrix" />
          <Picker.Item label="Vingadores" value="Vingadores" />
          <Picker.Item label="Batman" value="Batman" />
        </Picker>
      </View>

      <Image source={imagemMedalha} style={estilos.imagemMedalha} />

      <Text style={estilos.label}>Nota: {nota.toFixed(1)}</Text>
      <Slider
        style={estilos.slider}
        step={0.5}
        minimumValue={0}
        maximumValue={10}
        value={nota}
        minimumTrackTintColor="#008080"
        maximumTrackTintColor="#a9a9a9"
        thumbTintColor="#008080"
        onValueChange={(valor) => setNota(valor)}
      />

      <TextInput
        style={estilos.input}
        value={comentario}
        onChangeText={(valor) => setComentario(valor)}
        placeholder="Muito Bom"
      />

      <TouchableHighlight
        style={estilos.botao}
        onPress={confirmarAvaliacao}
        underlayColor="#cc4f39"
      >
        <Text style={estilos.textoBotao}>Avaliar</Text>
      </TouchableHighlight>

      {mostrarResultado ? (
        <View style={estilos.resultado}>
          <Text style={estilos.textoResultado}>Nome: {dadosFinais.nomeAvalidador}</Text>
          <Text style={estilos.textoResultado}>Filme: {dadosFinais.filmeEscolhido}</Text>
          <Text style={estilos.textoResultado}>Nota: {dadosFinais.notaDada.toFixed(1)}</Text>
          <Text style={estilos.textoResultado}>Comentário: {dadosFinais.textoComentario}</Text>
        </View>
      ) : null}

    </View>
  );
}