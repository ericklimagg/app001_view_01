import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  SectionList,
  Text,
  Alert,
  StyleSheet
} from 'react-native';

import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

export default function App() {

  const [tarefa, setTarefa] = useState('');
  const [data, setData] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {

    if (tarefa === '' || data === '') {
      Alert.alert('Erro', 'Preencha a tarefa e a data');
      return;
    }

    const novaLista = [...tarefas];

    const secaoExistente = novaLista.find(
      (item) => item.title === data
    );

    if (secaoExistente) {

      secaoExistente.data.push({
        id: Date.now().toString(),
        nome: tarefa
      });

    } else {

      novaLista.push({
        title: data,
        data: [
          {
            id: Date.now().toString(),
            nome: tarefa
          }
        ]
      });

      novaLista.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    setTarefas(novaLista);

    setTarefa('');
    setData('');
  }

  function removerTarefa(id) {

    Alert.alert(
      'Excluir',
      'Deseja remover esta tarefa?',
      [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          onPress: () => {

            const novaLista = tarefas.map(secao => ({
              ...secao,
              data: secao.data.filter(item => item.id !== id)
            }))
            .filter(secao => secao.data.length > 0);

            setTarefas(novaLista);
          }
        }
      ]
    );
  }

  return (
    <View style={styles.container}>

      <Cabecalho />

      <Conteudo>

        <TextInput
          style={styles.input}
          placeholder="Digite a tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a data"
          value={data}
          onChangeText={setData}
        />

        <Button
          title="Adicionar"
          onPress={adicionarTarefa}
        />

        <SectionList
          sections={tarefas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={() => removerTarefa(item.id)}
            >
              {item.nome}
            </Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.section}>
              {section.title}
            </Text>
          )}
        />

      </Conteudo>

      <Rodape />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 40
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },

  section: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    fontSize: 18,
    marginTop: 15
  },

  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 5,
    fontSize: 16
  }

});