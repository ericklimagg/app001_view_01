import React, { useState } from "react";
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { estilos } from "./estilos.js";

function Conteudo() {
    const [usuario, setUsuario] = useState('');
    const [devStack, setDevStack] = useState('');
    const [resultado, setResultado] = useState('');

    function confirmarSelecao() {
        if (usuario.trim() === "") {
            setResultado("O campo de nome não pode ficar vazio.");
        } else {
            setResultado(`E aí ${usuario}! Notamos que você curte trabalhar com ${devStack}.`);
        }
    }

    return (
        <View style={estilos.areaCorpo}>
            <Text style={estilos.labelDestaque}>
                Qual sua Stack de Desenvolvimento?
            </Text>
            
            <TextInput
                placeholder="Insira seu nome..."
                placeholderTextColor="#999"
                style={estilos.caixaEntrada}
                value={usuario}
                onChangeText={setUsuario}
            />

            <Text style={estilos.labelDestaque}>
                Selecione uma tecnologia:
            </Text>
            
            <View style={estilos.bordaPicker}>
                <Picker
                    selectedValue={devStack}
                    style={estilos.seletor}
                    onValueChange={(item) => setDevStack(item)}
                >
                    <Picker.Item label="Desenvolvedor Java" value="Java" />
                    <Picker.Item label="Especialista JavaScript" value="JavaScript" />
                    <Picker.Item label="Cientista de Dados (Python)" value="Python" />
                    <Picker.Item label="Engenheiro C#" value="C#" />
                    <Picker.Item label="Mobile (React Native)" value="React Native" />
                </Picker>
            </View>

            <TouchableHighlight
                style={estilos.botaoAcao}
                underlayColor="#4834d4"
                onPress={confirmarSelecao}>
                <Text style={estilos.textoBotao}> ENVIAR DADOS </Text>
            </TouchableHighlight>

            <Text style={estilos.infoFinal}> {resultado} </Text>
        </View> 
    );
}

export default Conteudo;