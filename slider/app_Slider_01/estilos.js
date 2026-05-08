import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center'
  },

  topoSecao: {
    width: '100%',
    height: 140,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#6366f1'
  },

  logoPrincipal: {
    width: 50,
    height: 50,
    marginBottom: 10
  },

  tituloPrincipal: {
    fontSize: 20,
    color: '#f8fafc',
    letterSpacing: 1,
    textTransform: 'uppercase'
  },

  corpoApp: {
    flex: 1,
    width: '95%',
    marginVertical: 15,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  legendaInformativa: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20
  },

  labelInput: {
    color: '#cbd5e1',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: '8%',
    marginTop: 10
  },

  campoTexto: {
    width: '85%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 5,
    color: '#1e293b'
  },

  botaoAcao: {
    marginTop: 30,
    backgroundColor: '#6366f1',
    width: '85%',
    padding: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5
  },

  textoBotao: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16
  },

  rodapeContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1e293b',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#334155'
  },

  iconeRodape: {
    width: 25,
    height: 25,
    marginRight: 10
  },

  infoRodape: {
    fontSize: 13,
    color: '#94a3b8'
  }
});