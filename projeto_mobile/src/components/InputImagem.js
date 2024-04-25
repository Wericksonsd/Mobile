import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import { Modal } from "react-native-paper";

const InputImagem = (props) => {

    return (
        <View style={{gap: 2}}>
            <Text style={estilos.texto}>{props.label} </Text>
            <Pressable style={estilos.input}  {...props}>
                <Image style={estilos.imagem} source={{uri: props.image}}/>
            </Pressable>
        </View>
        
    )
}

const estilos = StyleSheet.create({
    input: {
        height: 70,
        width: "50%",
        backgroundColor: "white", 
        justifyContent: "center", 
        alignItems: "center"
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    }, 
    imagem: {
        height: 60,
        width: 60
    }
})

export default InputImagem