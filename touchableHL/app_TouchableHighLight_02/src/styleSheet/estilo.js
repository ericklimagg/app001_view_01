import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    cabecalho: {
        backgroundColor: 'darkblue',
        flex: 0.4,
        width: '60%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    conteudo: {
        flex: 0.5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        color: 'darkblue',
        textAlign: 'center'
    },
    subtitulo: {
        marginVertical: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    rodape: {
        padding: 10,
        alignItems: 'center'
    }
});

export { estilos };