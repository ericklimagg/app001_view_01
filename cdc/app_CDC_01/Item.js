import React from 'react';
import {View, Text} from 'react-native';

function Item(props) {
    let nomeComida = props.nomeComida;
    let corFundo = props.corFundo;
    let corFonte = props.corFonte;

    return(
        <View style={{
            backgroundColor: corFundo,
            marginTop:10,
            height: 100,
            width: '100%',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#ffffff'
        }}>
            <Text style={{
                color: corFonte,
                fontSize: 26,
                fontWeight: 'bold'
            }}>
                🍽️ {nomePais}
            </Text>
        </View>
    );
}

export default Item;