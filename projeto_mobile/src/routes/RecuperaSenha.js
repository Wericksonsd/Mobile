//Tela de recuperação de senha
//Imports
import { View, StyleSheet, Text, Alert } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import Botao from '../components/Botao'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth_module } from '../firebase/config'


const RecuperaSenha = (props) => {
    const [usuario, setUsuario] = useState("")
    const [validadeUsuario, setValidadeUsuario] = useState(true)

    const validaUsuario = () => {
        const usuarioRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        setValidadeUsuario(usuarioRegex.test(usuario))
    }

    const recuperaSenha = () => {
        if (validadeUsuario) {
            sendPasswordResetEmail(auth_module, usuario)
            .then(() => {
                Alert.alert(
                    "Sucesso",
                    "E-mail enviado com sucesso!"
                )
                props.navigation.navigate("Login")
            })
            .catch((error) => {
                Alert.alert(
                    "Erro",
                    "Erro ao enviar e-mail"
                )
                console.log("Falha ao enviar email: "+ JSON.stringify(error))
            })
        } else {
            Alert.alert(
                "Erro de validação",
                "E-mail inválido"
            )
        }
    }

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <Input label="E-mail" txt={usuario} setTxt={setUsuario} placeholder="usuario@email.com" color="grey" onBlur={validaUsuario}/>
                {!validadeUsuario && <Text style={estilos.erro}>E-mail inválido</Text>}
                <View style={{paddingTop: 40}}>
                    <Botao texto="RECUPERAR" cor="#37BD6D" tamanho={35} onPress={() => recuperaSenha()}/>
                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    formulario: {
        width: 600,
        height: 210,
        gap: 5, 
        paddingTop: 10
    },
    erro: {
        color: '#FD7979',
        fontFamily: "AveriaLibre-Regular",
        fontSize: 12
    }
})

//Export
export default RecuperaSenha