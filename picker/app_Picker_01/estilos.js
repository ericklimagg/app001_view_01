import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    telaPrincipal: {
        flex: 1, 
        backgroundColor: '#1e272e'
    },
    topoArea: {
        backgroundColor: '#2f3640', 
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 40, 
        flex: 0.35,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    tituloHeader: {
        fontSize: 24, 
        marginTop: 15, 
        fontWeight: 'bold',
        textAlign: 'center', 
        color: '#f5f6fa'    
    },
    logoImg: {
        height: 100, 
        width: 100,
        resizeMode: 'contain'
    },
    areaCorpo: {
        flex: 0.65, 
        backgroundColor: '#1e272e',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    labelDestaque: {
        fontSize: 16, 
        color: '#dcdde1',
        marginBottom: 8,
        marginLeft: 15,
        fontWeight: '600'
    },
    caixaEntrada: {
        backgroundColor: '#f5f6fa', 
        marginBottom: 25, 
        height: 55, 
        width: '90%', 
        alignSelf: 'center', 
        borderRadius: 12,
        paddingHorizontal: 20,
        fontSize: 16
    },
    bordaPicker: {
        backgroundColor: '#f5f6fa',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: 20,
        overflow: 'hidden'
    },
    seletor: {
        height: 55, 
        width: '100%'
    },
    infoFinal: {
       fontSize: 18, 
       marginTop: 25, 
       color: '#00d2d3', 
       textAlign: 'center',
       fontWeight: '500'
    },
    botaoAcao: {
        backgroundColor: '#686de0', 
        marginTop: 15, 
        height: 55, 
        width: '90%', 
        alignSelf: 'center', 
        borderRadius: 12,
        justifyContent: 'center',
        elevation: 4
    },
    textoBotao: {
        alignSelf: 'center', 
        fontSize: 18, 
        fontWeight: 'bold',
        color: 'white'
    }
});

export { estilos };