import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor:'#0f172a',
        marginTop:25,
        paddingHorizontal:10,
        paddingVertical:10,
    },
    cabecalho:{
        flex:0.35,
        backgroundColor:'#1e3a8a',
        flexDirection:'column-reverse',
        borderTopStartRadius:25,
        borderWidth:1,
        borderColor:'#334155',
        borderTopEndRadius: 25,
        alignItems:'center',
        justifyContent:'space-around',
    },

    cabimagem:{
        width:60,
        height:50,
        tintColor:'#e0e7ff'
    },
    cabTitulo:{
        color:'#e0e7ff',
        fontSize:30,
        fontWeight:'bold'
    },
    cabSubTitulo:{
        color:'#93c5fd',
        fontSize:20,
        fontWeight:'bold',
    },
    corpo:{
        flex:0.65,
        backgroundColor:'#1e293b',
    },

    rodape:{
        flex:0.15,
        backgroundColor:'#1e3a8a',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    rodAutor:{
        color:'#facc15',
        fontSize:18,
        fontWeight:'bold',
    }
});

export {estilos};