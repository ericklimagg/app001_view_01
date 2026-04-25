import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#e6e6e6' },
  cabecalho: { flex: 0.15, backgroundColor: '#3e2723', justifyContent: 'center', alignItems: 'center', padding: 10 },
  textoCabecalho: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  tituloCabecalho: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  conteudo: { flex: 0.75, alignItems: 'center', paddingTop: 30 },
  tituloConteudo: { fontSize: 24, color: '#333', marginBottom: 20, fontWeight: 'bold' },
  img: { width: 200, height: 200, resizeMode: 'contain', borderWidth: 2, borderColor: '#795548', marginBottom: 20 },
  input: { width: '80%', height: 50, backgroundColor: 'white', padding: 10, marginBottom: 20, borderWidth: 2, borderColor: '#795548', borderRadius: 8 },
  botaoVerificar: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, marginBottom: 20, width: 120, alignItems: 'center' },
  botaoProximo: { backgroundColor: '#2196F3', padding: 15, borderRadius: 5, width: 120, alignItems: 'center' },
  textoBotao: { color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  mensagemAcerto: { color: 'green', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  mensagemErro: { color: 'red', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  rodape: { flex: 0.1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }
});

export { estilos };