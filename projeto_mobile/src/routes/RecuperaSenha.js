//Tela de recuperação de senha
//Imports
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import Botao from '../components/Botao'


const RecuperaSenha = (props) => {
    const [txtUsuario, setUsuario] = useState()
    const [txtSenha, setSenha] = useState()

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <Input label="E-mail" texto="" />
                <Botao texto="RECUPERAR" cor="#37BD6D" tamanho={35} navigation={props.navigation} tela="AcoesPesquisa"/>
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
        gap: 60, 
        paddingTop: 10
    }
})

//Export
export default RecuperaSenha