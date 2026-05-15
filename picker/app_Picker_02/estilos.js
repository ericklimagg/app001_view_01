import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    containerGeral: {
        flex: 1, 
        backgroundColor: '#f5eeb3'
    },
    secaoTopo: {
        width: '100%',
        alignItems: 'center', 
        paddingTop: 60, 
        paddingBottom: 20
    },
    tituloHeader: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#000'    
    },
    corpoPagina: {
        flex: 1, 
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    entradaDados: {
        height: 50, 
        width: '100%', 
        borderWidth: 1,
        borderColor: '#e8dc8e',
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
        marginBottom: 20
    },
    subtitulo: {
        fontSize: 16, 
        color: '#000',
        alignSelf: 'flex-start',
        marginBottom: 5
    },
    molduraPicker: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e8dc8e',
        borderRadius: 5,
        width: '100%',
        marginBottom: 20
    },
    seletorLista: {
        height: 50, 
        width: '100%'
    },
    imagemCentral: {
        width: 100,
        height: 100,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    botaoConfirmar: {
        backgroundColor: '#4CAF50', 
        height: 50, 
        width: '50%', 
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 20
    },
    textoBotao: {
        textAlign: 'center', 
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#ffffff'
    },
    areaResultado: {
        alignItems: 'center'
    },
    textoResultado: {
        fontSize: 16, 
        color: '#000', 
        marginBottom: 5
    }
});