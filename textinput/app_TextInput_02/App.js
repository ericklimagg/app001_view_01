import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function CxTx(props) {
  return (
    <TextInput
      style={[estilos.input, props.multiline ? estilos.inputMultilinha : null]}
      placeholder={props.dica}
      autoCapitalize={props.autoCapitalize}
      maxLength={props.maxLength}
      keyboardType={props.keyboardType}
      editable={props.editable}
      value={props.valor}
      multiline={props.multiline}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

function App() {
  const camposFormulario = [
    { id: 1, dica: 'Digite seu nome', autoCapitalize: 'characters', maxLength: 30 },
    { id: 2, dica: 'qual a sua idade?', keyboardType: 'numeric', maxLength: 2 },
    { id: 3, valor: 'CPF:999.999.999-00', editable: false },
    { id: 4, dica: 'Digite seu e-mail', keyboardType: 'email-address' },
    { id: 5, dica: 'Digite seu número celular:', keyboardType: 'numeric' },
    { id: 6, dica: 'Observações:', multiline: true, maxLength: 200 },
    { id: 7, dica: 'Digite sua senha', secureTextEntry: true, maxLength: 5 }
  ];

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Aula 06 - Desafio 02</Text>
      <Text style={estilos.subtitulo}>Componente InputText</Text>
      
      <Text style={estilos.textoIntro}>Verifique o Formulário abaixo:</Text>

      {camposFormulario.map(item => (
        <CxTx
          key={item.id}
          dica={item.dica}
          autoCapitalize={item.autoCapitalize}
          maxLength={item.maxLength}
          keyboardType={item.keyboardType}
          editable={item.editable}
          valor={item.valor}
          multiline={item.multiline}
          secureTextEntry={item.secureTextEntry}
        />
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, marginTop: 40, paddingHorizontal: 20, backgroundColor: '#f9f9f9' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: 'darkred' },
  subtitulo: { fontSize: 20, textAlign: 'center', marginBottom: 20, color: 'darkred' },
  textoIntro: { fontSize: 16, marginBottom: 15, fontWeight: 'bold' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, fontSize: 16, color: '#000' },
  inputMultilinha: { height: 80, textAlignVertical: 'top' }
});

export default App;