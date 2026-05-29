import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tabBar: {
    height: 60,
  },
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  corpoHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tituloHome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#005CA9',
  },
  textoHome: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
  },
  rodapeHome: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
  },
  textoRodapeHome: {
    color: '#fff',
    fontSize: 14,
  },
  containerTitulos: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  imagemDestaque: {
    width: '100%',
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  cardTitulo: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#009EEA',
    elevation: 2,
  },
  nomeTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  detalhesTitulo: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  containerIdolos: {
    flex: 1,
    backgroundColor: '#e9ecef',
    padding: 15,
  },
  cardIdolo: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#000',
    elevation: 2,
  },
  nomeIdolo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005CA9',
  },
  posicaoIdolo: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 8,
  },
  descricaoIdolo: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  containerFormulario: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 8,
    elevation: 2,
  },
  tituloFormulario: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  inputMensagem: {
    height: 100,
    textAlignVertical: 'top',
  },
  botaoEnviar: {
    backgroundColor: '#005CA9',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoEnviar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});