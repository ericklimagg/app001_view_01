import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor:'#fff3e6',
        marginTop:25,
        paddingHorizontal:10,
        paddingVertical:10,
    },
    cabecalho:{
        flex:0.35,
        backgroundColor:'#e67e22',
        flexDirection:'column-reverse',
        borderTopStartRadius:25,
        borderWidth:1,
        borderColor:'#d35400',
        borderTopEndRadius: 25,
        alignItems:'center',
        justifyContent:'space-around',
    },

    cabimagem:{
        width:60,
        height:50,
        tintColor:'#fff'
    },
    cabTitulo:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
    },
    cabSubTitulo:{
        color:'#ffeaa7',
        fontSize:20,
        fontWeight:'bold',
    },
    corpo:{
        flex:0.65,
        backgroundColor:'#ffffff',
    },

    rodape:{
        flex:0.15,
        backgroundColor:'#e67e22',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    rodAutor:{
        color:'#f1c40f',
        fontSize:18,
        fontWeight:'bold',
    }
});

export {estilos};