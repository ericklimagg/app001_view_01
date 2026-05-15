import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { estilos } from './estilos';

export default function Conteudo() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('Análise e Desenvolvimento de Sistemas');
  
  const [q1, setQ1] = useState(3);
  const [q2, setQ2] = useState(3);
  const [q3, setQ3] = useState(3);
  const [q4, setQ4] = useState(3);
  const [q5, setQ5] = useState(3);
  const [q6, setQ6] = useState(3);
  const [q7, setQ7] = useState(3);
  const [q8, setQ8] = useState(3);
  const [q9, setQ9] = useState(3);
  const [q10, setQ10] = useState(3);

  const [mostrarResultado, setMostrarResultado] = useState(false);

  function finalizarPesquisa() {
    setMostrarResultado(true);
  }

  function renderizarPergunta(texto, valor, setValor) {
    return (
      <View>
        <Text style={estilos.pergunta}>{texto}</Text>
        <Slider
          style={estilos.slider}
          step={1}
          minimumValue={1}
          maximumValue={5}
          value={valor}
          minimumTrackTintColor="#3498db"
          maximumTrackTintColor="#bdc3c7"
          thumbTintColor="#2980b9"
          onValueChange={setValor}
        />
        <View style={estilos.escalaContainer}>
          <Text style={estilos.escalaTexto}>1 (Discordo)</Text>
          <Text style={estilos.escalaTexto}>3 (Neutro)</Text>
          <Text style={estilos.escalaTexto}>5 (Concordo)</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={estilos.corpo}>
      
      <Text style={estilos.label}>Identificação</Text>
      <TextInput
        style={estilos.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome completo"
      />

      <Text style={estilos.label}>Selecione seu curso</Text>
      <View style={estilos.pickerContainer}>
        <Picker
          selectedValue={curso}
          onValueChange={(itemValue) => setCurso(itemValue)}
        >
          <Picker.Item label="Análise e Desenvolvimento de Sistemas" value="Análise e Desenvolvimento de Sistemas" />
          <Picker.Item label="Ciência da Computação" value="Ciência da Computação" />
          <Picker.Item label="Engenharia de Software" value="Engenharia de Software" />
          <Picker.Item label="Sistemas de Informação" value="Sistemas de Informação" />
        </Picker>
      </View>

      <Text style={estilos.label}>Questionário (Escala 1 a 5)</Text>
      
      {renderizarPergunta("1. O conteúdo das disciplinas é relevante?", q1, setQ1)}
      {renderizarPergunta("2. A infraestrutura atende às necessidades?", q2, setQ2)}
      {renderizarPergunta("3. Os professores são bem preparados?", q3, setQ3)}
      {renderizarPergunta("4. A comunicação da coordenação é clara?", q4, setQ4)}
      {renderizarPergunta("5. O ambiente virtual de aprendizagem é bom?", q5, setQ5)}
      {renderizarPergunta("6. A biblioteca tem acervo suficiente?", q6, setQ6)}
      {renderizarPergunta("7. As atividades extracurriculares são úteis?", q7, setQ7)}
      {renderizarPergunta("8. O suporte de TI resolve os problemas?", q8, setQ8)}
      {renderizarPergunta("9. A grade curricular é atualizada?", q9, setQ9)}
      {renderizarPergunta("10. Você recomendaria este curso?", q10, setQ10)}

      <TouchableHighlight
        style={estilos.botao}
        onPress={finalizarPesquisa}
        underlayColor="#2980b9"
      >
        <Text style={estilos.textoBotao}>ENVIAR RESPOSTAS</Text>
      </TouchableHighlight>

      {mostrarResultado && (
        <View style={estilos.resultado}>
          <Text style={estilos.tituloResultado}>Resumo da Avaliação</Text>
          <Text style={estilos.textoResultado}>Aluno(a): {nome}</Text>
          <Text style={estilos.textoResultado}>Curso: {curso}</Text>
          <Text style={estilos.textoResultado}>
            Média de Satisfação: {((q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10) / 10).toFixed(1)} / 5.0
          </Text>
        </View>
      )}

    </View>
  );
}