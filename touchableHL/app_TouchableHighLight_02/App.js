import React from "react";
import { View } from 'react-native';
import Cabecalho from "./src/Componentes/Cabecalho";
import Corpo from "./src/Componentes/Corpo";
import Rodape from "./src/Componentes/Rodape";
import { estilos } from "./src/styleSheet/estilo";

export default function Index() {
    return (
        <View style={estilos.fundo}>
            <Cabecalho />
            <Corpo />
            <Rodape />
        </View>
    );
}