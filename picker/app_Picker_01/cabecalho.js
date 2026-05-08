import React from "react";
import { View, Text, Image } from "react-native";
import { estilos } from "./estilos";

function Cabecalho() {
    const logoTopo = require('./img/seletor_icon.png');

    return (
        <View style={estilos.topoArea}>
            <Image source={logoTopo} style={estilos.logoImg} />
            <Text style={estilos.tituloHeader}> Lista de Seleção </Text>
        </View>
    );
}

export default Cabecalho;