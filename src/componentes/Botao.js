import React from "react";
import { StyleSheet, Pressable } from "react-native";

import Texto from "./Texto";

export default function Botao({ childreen, value, style }){
    return <>
        <Pressable style={[estilos.botao, style]} onPress={() => {console.log('pressed')}}>
            <Texto style={estilos.textoBotao}>{ value }</Texto>
        </Pressable>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
        fontWeight: 26

    }
})