//Tela de cadastro de nova conta
//Imports
import { View, StyleSheet, Text, Button } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import Botao from '../components/Botao'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth_module } from '../firebase/config'


const NovaConta = (props) => {
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [senha2, setSenha2] = useState("")
    const [validadeUsuario, setValidadeUsuario] = useState(true)
    const [validadeSenha, setValidadeSenha] = useState(true)
    const [validadeSenha2, setValidadeSenha2] = useState(true)

    const cadUsuario = () => {
        if (validadeUsuario && validadeSenha && validadeSenha2) {
            createUserWithEmailAndPassword(auth_module, usuario, senha)
                .then((userCredential) => {
                    console.log(userCredential.user)
                    props.navigation.navigate("Login")
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log(errorCode, errorMessage)
                })
        } else {
            console.log("Erro ao cadastrar usuário: Verifique os campos")
        }
    }

    const validaUsuario = () => {
        const usuarioRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        setValidadeUsuario(usuarioRegex.test(usuario))
    }
    const validaSenha = () => {
        setValidadeSenha(senha.length >= 6)
    }

    const validaSenha2 = () => {
        setValidadeSenha2(senha == senha2)
    }

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <View style={{gap:3}}>
                    <Input label="E-mail" txt={usuario} setTxt={setUsuario} placeholder="usuario@email.com" color="grey" onBlur={validaUsuario}/>
                    {!validadeUsuario && <Text style={estilos.erro}>E-mail inválido</Text>}
                    <Input label="Senha" txt={senha} setTxt={setSenha} placeholder="******" color="grey" secureTextEntry onBlur={validaSenha}/>
                    {!validadeSenha && <Text style={estilos.erro}>Senha deve ter pelo menos 6 caracteres</Text>}
                    <Input label="Repetir senha" txt={senha2} setTxt={setSenha2} placeholder="******" color="grey" secureTextEntry onBlur={validaSenha2}/>
                    {!validadeSenha2 && <Text style={estilos.erro}>As senhas devem ser iguais</Text>}
                </View>
                <Botao texto="CADASTRAR" cor="#37BD6D" tamanho={35} onPress={() => cadUsuario()}/>
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
        gap: 10, 
        paddingTop: 10
    },
    erro: {
        color: '#FD7979',
        fontFamily: "AveriaLibre-Regular",
        fontSize: 12
    }
})

//Export
export default NovaConta