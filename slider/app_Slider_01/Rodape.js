import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilos';

function Rodape() {
  let iconeAutor = require('./assets/autor_marca.png');
  return (
    <View style={estilos.rodapeContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={iconeAutor} style={estilos.iconeRodape} />
        <Text style={estilos.infoRodape}>Desenvolvido por Erick Lima</Text>
      </View>
      <Text style={estilos.infoRodape}>© 2026</Text>
    </View>
  );
}

export default Rodape;