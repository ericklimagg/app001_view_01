import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  topo: {
    width: '100%',
    backgroundColor: '#2c3e50',
    paddingVertical: 30,
    alignItems: 'center',
  },
  tituloTopo: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 20
  },
  corpo: {
    padding: 20,
    alignItems: 'stretch'
  },
  label: {
    fontSize: 16,
    color: '#333333',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  pergunta: {
    fontSize: 15,
    color: '#444444',
    marginTop: 20,
    marginBottom: 5
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10
  },
  slider: {
    width: '100%',
    height: 40
  },
  escalaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  escalaTexto: {
    fontSize: 12,
    color: '#777777'
  },
  botao: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center'
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f4f8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bce8f1'
  },
  textoResultado: {
    fontSize: 16,
    color: '#31708f',
    marginVertical: 3
  },
  tituloResultado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#31708f',
    marginBottom: 10,
    textAlign: 'center'
  }
});