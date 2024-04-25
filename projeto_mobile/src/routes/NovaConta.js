//Tela de cadastro de nova conta
//Imports
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import Botao from '../components/Botao'


const NovaConta = (props) => {
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()
    const [senha2, setSenha2] = useState()

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <View style={{gap:10}}>
                    <Input label="E-mail" txt={usuario} setTxt={setUsuario} placeholder="usuario@email.com" color="grey"/>
                    <Input label="Senha" txt={senha} setTxt={setSenha} placeholder="******" color="grey" secureTextEntry/>
                    <Input label="Repetir senha" txt={senha2} setTxt={setSenha2} placeholder="******" color="grey" secureTextEntry/>
                </View>
                <Botao texto="CADASTRAR" cor="#37BD6D" tamanho={35} navigation={props.navigation} tela="Login"/>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    formulario: {
        width: 600,
        height: 210,
        gap: 30, 
        paddingTop: 10
    }
})

//Export
export default NovaConta