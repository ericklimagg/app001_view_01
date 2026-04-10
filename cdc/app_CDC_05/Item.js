import React from 'react';
import {View, Text} from 'react-native';

function Item(props) {
    let nomeComida = props.nomeComida;
    let corFundo = props.corFundo;
    let corFonte = props.corFonte;
    return(
        <View style={{
            backgroundColor: corFundo, marginTop:10,
            height: 100, width: '100%'
        }}>
            <Text style={{ color: corFonte, fontSize: 25}}>{nomePais}</Text>
         </View>
    );
}
export default Item;