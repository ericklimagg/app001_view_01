import React from "react";
import { View, Text } from "react-native";
import { estilos } from "./estilos";

function Cabecalho(){
    return(
        <View style={estilos.secaoTopo}>
            <Text style={estilos.tituloHeader}>Lanchonete App</Text>
        </View>
    );
}

export default Cabecalho;