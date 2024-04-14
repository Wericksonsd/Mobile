//Tela de login do Sistema
//Imports
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'

const Login = () => {
    const [txtUsuario, setUsuario] = useState()
    const [txtSenha, setSenha] = useState()

    return(
        <View style={estilos.viewMae}>
            <Text>Peso:</Text>
            <TextInput></TextInput>
        </View>
    ) 
}

const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775", 
        width: "100%", 
        height: "100%", 
        justifyContent: "center", 
        alignItems: "center"
    }, 
    texto: {
        color: "white", 
        fontFamily: "AveriaLibre-Regular"
    },
    corBotaoOk: {
        backgroundColor: "#37BD6D"
    }
})

//Export
export default Login