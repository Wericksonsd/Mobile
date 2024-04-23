//Tela de cadastro de nova conta
//Imports
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import Botao from '../components/Botao'


const NovaConta = (props) => {
    const [txtUsuario, setUsuario] = useState()
    const [txtSenha, setSenha] = useState()

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <View style={{gap:10}}>
                    <Input label="E-mail" texto="" />
                    <Input label="Senha" texto=""/>
                    <Input label="Repetir Senha" texto=""/>
                </View>
                <Botao texto="CADASTRAR" cor="#37BD6D" tamanho={35} navigation={props.navigation} tela="DrawerNavigator"/>
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