import React from "react";
import { StyleSheet, Image, View } from "react-native";

import Texto from "../../../componentes/Texto";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Itens({ titulo, lista }){
    return <>
        <Texto style={estilos.titulo}> { titulo } </Texto>
        { lista.map(({ nome, imagem  }) => {
           return <View key={nome} style={estilos.item}>
                <Image source={ imagem} style={estilos.imagem}/>
               <Texto style={estilos.nome}> { nome } </Texto>
           </View> 
        }) }
        
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        color: "#464646"
    },
    item: { 
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        alignItems: "center",
        paddingVertical: 16
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
})