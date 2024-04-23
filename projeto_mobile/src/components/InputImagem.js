import { TextInput, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Modal } from "react-native-paper";

const InputImagem = (props) => {

    return (
        <View style={{gap: 2}}>
            <Text style={estilos.texto}>{props.label} </Text>
            <TextInput style={[estilos.input, {height: props.altura}]}/>
        </View>
        
    )
}

const estilos = StyleSheet.create({
    input: {
        width: "50%",
        backgroundColor: "white"
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    }
})

export default InputImagem