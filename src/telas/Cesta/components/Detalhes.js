import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";

export default function Detalhes({ logo, nome, nomeFazenda, descricao, preco, botao }){
    return <>
        <Texto style={estilos.nome}> { nome } </Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}> { nomeFazenda } </Texto>
        </View>
        <Texto style={estilos.descricao}> { descricao } </Texto>
        <Texto style={estilos.preco}> { preco } </Texto>
        <Botao value={botao} style={estilos.botao}></Botao>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: "#a3a3a3"
    },
    preco: {
        fontSize: 26,
        lineHeight: 42,
        color: "#2a9f85",
        fontWeight: "bold",
        marginTop: 8
    },
    botao: {
        marginTop: 16,
    }
})