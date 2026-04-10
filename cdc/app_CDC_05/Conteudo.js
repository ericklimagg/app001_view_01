import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {estilos} from './assets/estilo';
import Item from './Item';

function Conteudo(){
  let itemConteudo = null;

  let ArrayComida = [
    '🍕 Pizza', '🍔 Hambúrguer', '🍣 Sushi', '🍝 Macarrão', '🌮 Taco',
    '🍖 Churrasco', '🥗 Salada', '🍦 Sorvete', '🥞 Panqueca', '🍩 Donut'
  ];
  
  let ArrayCoresFundo = [
    '#e74c3c', '#d35400', '#8e44ad', '#f39c12', '#27ae60',
    '#7f8c8d', '#2ecc71', '#3498db', '#f1c40f', '#e84393'
  ];

  let ArrayCoresFonte = [
    '#ffffff', '#ffffff', '#ffffff', '#000000', '#ffffff',
    '#ffffff', '#ffffff', '#ffffff', '#000000', '#ffffff'
  ];

  for (let i=0; i<ArrayPaises.length; i++){
    itemConteudo = (
      <>
        {itemConteudo}
        <Item 
          nomeComida={ArrayComida[i]}
          corFundo={ArrayCoresFundo[i]}
          corFonte={ArrayCoresFonte[i]} 
        />
      </>
    )
  }

  return(
    <ScrollView style={estilos.corpo}>
      {itemConteudo}
    </ScrollView>
  );
}

export default Conteudo;