import React from 'react';
import {estilos} from './estilos';
import {View, Text, Image} from 'react-native';

function Cabecalho() {
    let logo1 = require('./assets/pais.jpg');
    let texto = "PAISES";
    return (
        <View id="cabecalho" style={estilos.cabecalho}>
            <Image source={logo1} style={estilos.imgCabecalho} />
            <Text style={estilos.textoCabecalho}>{texto}</Text>
            </View>   
        );
}
export default Cabecalho;