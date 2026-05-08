import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    containerGeral:{
        flex: 1, 
        backgroundColor: '#14213d'
    },
    secaoTopo:{
        backgroundColor: '#ffffff', 
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 40, 
        flex: 0.35,
        borderBottomRightRadius: 60
    },
    tituloHeader:{
        fontSize: 22, 
        marginTop: 10, 
        fontWeight: 'bold',
        textAlign: 'center', 
        color: '#fca311'    
    },
    marcaImg:{
        height: 100, 
        width: 100,
        resizeMode: 'contain'
    },
    corpoPagina:{
        flex: 0.65, 
        padding: 20,
        backgroundColor: '#14213d'
    },
    subtitulo:{
        padding: 15, 
        fontSize: 16, 
        color: '#e5e5e5',
        textAlign: 'center',
        fontWeight: '500'
    },
    entradaDados:{
        marginBottom: 15, 
        height: 55, 
        width: '85%', 
        alignSelf: 'center', 
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000'
    },
    molduraPicker: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '85%',
        alignSelf: 'center',
        marginBottom: 10,
        overflow: 'hidden'
    },
    seletorLista:{
        height: 55, 
        width: '100%'
    },
    mensagemFeedback:{
       fontSize: 18, 
       marginTop: 20, 
       color: '#fca311', 
       textAlign: 'center',
       fontWeight: 'italic'
    },
    botaoConfirmar:{
        backgroundColor: '#fca311', 
        marginTop: 25, 
        height: 55, 
        width: '85%', 
        alignSelf: 'center', 
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 5
    },
    textoBotao:{
        textAlign: 'center', 
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#14213d'
    }
});

export { estilos };