import React, { useState } from "react";
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { estilos } from "./estilos.js";

function Conteudo(){
    const [identificacao, setIdentificacao] = useState('');
    const [tecnologia, setTecnologia] = useState('');
    const [notificacao, setNotificacao] = useState('');
    const [fundoCampo, setFundoCampo] = useState('#ffffff');

    function processarSelecao(){
        if (identificacao.trim() === "") {
            setNotificacao("Atenção: O campo de nome é obrigatório!");
        } else {
            setNotificacao(`Saudações, ${identificacao}! Você selecionou ${tecnologia} como sua stack principal.`);
        }
    }

    function gerenciarFoco(corFoco) {
        setFundoCampo(corFoco);
    }

    return(
        <View style={estilos.corpoPagina}>
            <Text style={estilos.subtitulo}>
                Qual tecnologia você domina?
            </Text>
            
            <TextInput
                placeholder="Informe seu nickname"
                placeholderTextColor="#666"
                style={[estilos.entradaDados, { backgroundColor: fundoCampo }]}
                value={identificacao}
                onChangeText={setIdentificacao}
                onFocus={() => gerenciarFoco('#fffae6')}
                onBlur={() => gerenciarFoco('#ffffff')}
            />

            <Text style={estilos.subtitulo}>
                Selecione abaixo:
            </Text>

            <View style={estilos.molduraPicker}>
                <Picker
                    selectedValue={tecnologia}
                    style={estilos.seletorLista}
                    onValueChange={(item) => setTecnologia(item)}
                >
                    <Picker.Item label="Java Enterprise" value="Java" />
                    <Picker.Item label="JavaScript (React)" value="JavaScript" />
                    <Picker.Item label="Python (Data Science)" value="Python" />
                    <Picker.Item label="C# (.NET)" value="C#" />
                </Picker>
            </View>

            <TouchableHighlight
                style={estilos.botaoConfirmar}
                underlayColor="#cc8400"
                onPress={processarSelecao}>
                <Text style={estilos.textoBotao}> SALVAR ESCOLHA </Text>
            </TouchableHighlight>

            <Text style={estilos.mensagemFeedback}> {notificacao} </Text>
        </View> 
   );
}

export default Conteudo;