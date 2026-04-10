import React from 'react';
import {View, Text, Image} from 'react-native';
import {estilos} from './assets/estilo';

function Cabecalho(){
    let img1 = require('./assets/1.png');
    return(
        <View id='cabecalho' style={estilos.cabecalho}>
            <Text style={estilos.cabSubTitulo}>DSV MOBILE</Text>
            <Image source={img1} style={estilos.cabimagem}/>
            <Text style={estilos.cabTitulo}>FUNDAMENTOS</Text>
        </View>
    );
}
export default Cabecalho;