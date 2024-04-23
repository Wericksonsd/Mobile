//Tela de cadastro de nova pesquisa
//Imports
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import InputImagem from '../components/InputImagem'
import Botao from '../components/Botao'


const NovaPesquisa = (props) => {
    const [txtUsuario, setUsuario] = useState()
    const [txtSenha, setSenha] = useState()

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <View style={{gap:10}}>
                    <Input label="Nome" texto="" />
                    <Input label="Repetir Senha" texto=""/>
                    <InputImagem label="Imagem" texto="" altura={70}/>
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
        height: 200,
        gap: 20
    }
})

//Export
export default NovaPesquisa