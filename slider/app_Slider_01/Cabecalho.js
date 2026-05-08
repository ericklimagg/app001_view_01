import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilos';

function Cabecalho() {
    let imagemTopo = require('./assets/topo_logo.png');
    let tituloHeader = "Painel de Customização";
    
    return (
        <View style={estilos.topoSecao}>
            <Image source={imagemTopo} style={estilos.logoPrincipal} />
            <Text style={estilos.tituloPrincipal}>{tituloHeader}</Text>
        </View>   
    );
}

export default Cabecalho;