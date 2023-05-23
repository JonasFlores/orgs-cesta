import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

import Texto from "../../../componentes/Texto";

const width = Dimensions.get('screen').width;

export default function Topo({ titulo, logo }){
    return <>
        <Image source={logo} style={estilos.topo}></Image>
        <Texto style={estilos.titulo}> { titulo } </Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
        padding: 16,
        lineHeight: 26,
    },
})