import { StyleSheet, StatusBar } from 'react-native';

export const estilos1 = StyleSheet.create({
  // Fundo com um tom mais limpo e moderno
  fundo: {
    flex: 1,
    backgroundColor: '#F8F9FA', 
    paddingTop: StatusBar.currentHeight || 20,
  },

  // Cabeçalho Principal (Título do App)
  cabecalho: {
    backgroundColor: '#6200EE', // Roxo vibrante (estilo Material)
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 8, // Sombra mais forte no Android
    shadowColor: '#6200EE', // Sombra colorida no iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 10,
  },

  // Texto de seção (ex: Nome do Curso)
  cabTexto: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6200EE', 
    backgroundColor: '#E8E0FF', // Fundo suave para o subtítulo
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 5,
    textTransform: 'uppercase',
  },

  // Estilo dos Cards (Itens da Lista)
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 12, // Bordas bem arredondadas
    flexDirection: 'row',
    alignItems: 'center',
    // Sombra para parecer um "card" flutuante
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  // Texto do nome do aluno dentro do card
  nome: {
    fontSize: 17,
    color: '#1A1A1A',
    fontWeight: '600',
  },
  
  // Estilo para o Rodapé (Footer)
  rodape: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textoRodape: {
    fontSize: 12,
    color: '#999',
    letterSpacing: 0.5,
  }
});