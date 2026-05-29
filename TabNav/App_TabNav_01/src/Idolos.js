import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function Idolos() {
  const jogadores = [
    { id: 1, nome: 'Renato Portaluppi', posicao: 'Atacante / Treinador', descricao: 'O maior ídolo da história, herói do Mundial de 1983 e técnico do tri da Libertadores.' },
    { id: 2, nome: 'Danrlei', posicao: 'Goleiro', descricao: 'Símbolo de raça e paixão, defendeu a meta tricolor em grandes conquistas nos anos 90.' },
    { id: 3, nome: 'Pedro Geromel', posicao: 'Zagueiro', descricao: 'Lenda recente, capitão do tri da Libertadores e exemplo de técnica e dedicação.' },
    { id: 4, nome: 'Hugo de León', posicao: 'Zagueiro', descricao: 'Capitão da primeira Libertadores, eternizado por erguer a taça com sangue no rosto.' },
  ];

  return (
    <ScrollView style={styles.containerIdolos}>
      {jogadores.map((idolo) => (
        <View key={idolo.id} style={styles.cardIdolo}>
          <Text style={styles.nomeIdolo}>{idolo.nome}</Text>
          <Text style={styles.posicaoIdolo}>{idolo.posicao}</Text>
          <Text style={styles.descricaoIdolo}>{idolo.descricao}</Text>
        </View>
      ))}

      <View style={styles.containerFormulario}>
        <Text style={styles.tituloFormulario}>Enviar Mensagem</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#666"
        />

        <TextInput
          style={[styles.input, styles.inputMensagem]}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#666"
          multiline={true}
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.botaoEnviar}>
          <Text style={styles.textoBotaoEnviar}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}