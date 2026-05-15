import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
  },
  topo: {
    width: '100%',
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
  },
  linhaLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20
  },
  logoTopo: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  textoLogo: {
    fontSize: 16,
    color: '#1c1c1c'
  },
  tituloTopo: {
    fontSize: 22,
    color: '#1c1c1c'
  },
  corpo: {
    flex: 1,
    width: '90%',
    alignItems: 'center'
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    color: '#1c1c1c'
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#4682b4',
    backgroundColor: '#add8e6',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#4682b4',
    backgroundColor: '#ffffff',
    borderRadius: 5
  },
  imagemMedalha: {
    width: 80,
    height: 80,
    marginTop: 20,
    resizeMode: 'contain'
  },
  slider: {
    width: '100%',
    height: 40
  },
  botao: {
    backgroundColor: '#ff4500',
    padding: 12,
    borderRadius: 5,
    marginTop: 30,
    width: 120,
    alignItems: 'center'
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16
  },
  resultado: {
    marginTop: 30,
    alignItems: 'center'
  },
  textoResultado: {
    fontSize: 16,
    color: '#1c1c1c',
    marginVertical: 2
  }
});