import React, { useState } from "react";
import { View, Text, TouchableHighlight, TextInput, Image } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { estilos } from "./estilos.js";

function Conteudo(){
    const [nome, setNome] = useState('');
    const [lanche, setLanche] = useState('Hambúrguer');
    const [observacao, setObservacao] = useState('');
    
    const [fundoNome, setFundoNome] = useState('#ffffff');
    const [fundoObs, setFundoObs] = useState('#ffffff');
    
    const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
    const [dadosPedido, setDadosPedido] = useState({});

    function fazerPedido(){
        setDadosPedido({
            nome: nome,
            lanche: lanche,
            observacao: observacao
        });
        setPedidoConfirmado(true);
    }

    function corDeFoco(campo, cor) {
        if (campo === 'nome') {
            setFundoNome(cor);
        } else if (campo === 'obs') {
            setFundoObs(cor);
        }
    }

    let imagemLanche;
    if (lanche === 'Hambúrguer') {
        imagemLanche = require('./img/hamburguer.png');
    } else if (lanche === 'Pizza') {
        imagemLanche = require('./img/pizza.png');
    }

    return(
        <View style={estilos.corpoPagina}>
            <TextInput
                placeholder="Digite seu nome"
                style={[estilos.entradaDados, { backgroundColor: fundoNome }]}
                value={nome}
                onChangeText={setNome}
                onFocus={() => corDeFoco('nome', 'orange')}
                onBlur={() => corDeFoco('nome', '#ffffff')}
            />

            <Text style={estilos.subtitulo}>Escolha seu lanche:</Text>
            <View style={estilos.molduraPicker}>
                <Picker
                    selectedValue={lanche}
                    style={estilos.seletorLista}
                    onValueChange={(item) => setLanche(item)}
                >
                    <Picker.Item label="Hambúrguer" value="Hambúrguer" />
                    <Picker.Item label="Pizza" value="Pizza" />
                </Picker>
            </View>

            <Image source={imagemLanche} style={estilos.imagemCentral} />

            <TextInput
                placeholder="Observações (ex: sem cebola)"
                style={[estilos.entradaDados, { backgroundColor: fundoObs }]}
                value={observacao}
                onChangeText={setObservacao}
                onFocus={() => corDeFoco('obs', 'orange')}
                onBlur={() => corDeFoco('obs', '#ffffff')}
            />

            <TouchableHighlight
                style={estilos.botaoConfirmar}
                underlayColor="#3e8e41"
                onPress={fazerPedido}>
                <Text style={estilos.textoBotao}>Fazer Pedido</Text>
            </TouchableHighlight>

            {pedidoConfirmado && (
                <View style={estilos.areaResultado}>
                    <Text style={estilos.textoResultado}>Pedido de: {dadosPedido.nome}</Text>
                    <Text style={estilos.textoResultado}>Lanche: {dadosPedido.lanche}</Text>
                    <Text style={estilos.textoResultado}>Observação: {dadosPedido.observacao}</Text>
                </View>
            )}
        </View> 
   );
}

export default Conteudo;