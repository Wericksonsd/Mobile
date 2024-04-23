//Tela de login do Sistema
//Imports
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Input from '../components/Input'
import Botao from '../components/Botao'

const Login = (props) => {
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.titulo}>
                <Text style={estilos.texto}>Satisfying.you</Text>
                <Icon name="emoticon-happy-outline" size={60} color="white" />
            </View>
            <View style={estilos.formulario}>
                <View style={{gap:5}}>
                    <Input label="E-mail" txt={usuario} setTxt={setUsuario} placeholder="usuario@email.com" color="grey"/>
                    <Input label="Senha" txt={senha} setTxt={setSenha} placeholder="******" color="grey"/>
                </View>
                <Botao texto="Entrar" cor="#37BD6D" tamanho={32} navigation={props.navigation} tela="DrawerNavigator"/>
            </View>
            <View style={estilos.botoes}>
                <Botao texto="Criar minha conta" cor="#419ED7" tamanho={25} navigation={props.navigation} tela="NovaConta"/>
                <Botao texto="Esqueci minha senha" cor="#B5C7D1" tamanho={25} navigation={props.navigation} tela="RecuperaSenha"/>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 50
    },
    botoes: {
        width: 600,
        gap: 5
    },
    formulario: {
        width: 600,
        height: 210,
        gap: 10
    },
    titulo: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 10, 
        marginTop:0
    }
})

//Export
export default Login