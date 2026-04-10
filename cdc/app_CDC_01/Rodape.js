import React from 'react';
import {View, Text, Image} from 'react-native';
import {estilos} from './assets/estilo';

function Rodape(){
    let autor = 'Felipe';
    let data = 'Data: 11/02/2026';
    return(
        <View id='rodape' style={estilos.rodape}>
        <Text style={estilos.rodAutor}>{autor}</Text>
        <Text style={estilos.rodAutor}>{data}</Text>
      </View>
    );
}
export default Rodape;