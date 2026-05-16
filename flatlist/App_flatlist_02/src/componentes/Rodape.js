import React from 'react';
import { estilos } from './estilos';
import { View, Text, Image } from 'react-native';

function Rodape() {
  let logo2 = require('./assets/pais.jpg');
  return (
    <View id="rodape" style={estilos.rodape}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={logo2} style={estilos.imgRodape} />
        <Text style={estilos.textoRodape}>André Roberto</Text>
      </View>
      <Text style={estilos.textoRodape}>2026</Text>
    </View>
  );
}

export default Rodape;