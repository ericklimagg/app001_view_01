import React from "react";
import { View, Text, Image } from "react-native";
import { estilos } from "./estilos";

function Cabecalho(){
    const logoMarca = require('./img/icone_topo.png');

    return(
        <View style={estilos.secaoTopo}>
            <Image source={logoMarca} style={estilos.marcaImg} />
            <Text style={estilos.tituloHeader}> Preferências de Dev </Text>
        </View>
    );
}

export default Cabecalho;