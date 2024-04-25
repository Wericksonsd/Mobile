//Tela de cadastro de nova pesquisa
//Imports
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import InputImagem from '../components/InputImagem'
import Botao from '../components/Botao'


const NovaPesquisa = (props) => {
    const [nome, setNome] = useState()
    const [data, setData] = useState()

    function logar () {
        if(nome == ""){
            console.log("Email inválido")
        }

        props.navigation.navigate("DrawerNavigation")
    }

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <View style={{gap:10}}>
                    <Input label="Nome" txt={nome} setTxt={setNome} placeholder="Nome do Projeto" color="grey"/>
                    <Input label="Data" txt={data} setTxt={setData} placeholder="DD/MM/AAAA" color="grey"/>
                    <InputImagem label="Imagem" image={"https://imgs.search.brave.com/MdP91AMrljj-msYvpu8JV43j6S3uAqYwGdBtVcZLwhY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L2Z1bmRvLWJyYW5j/b18yMy0yMTQ3NzMw/ODAxLmpwZz9zaXpl/PTYyNiZleHQ9anBnhttps://imgs.search.brave.com/RGIAkDjyCp6BtgTihwtfnS7O6SMnm9AIHuE0iTCEBCM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L3RleHR1cmFzLWUt/c3VwZXJmaWNpZS1h/YnN0cmF0YXMtYnJh/bmNhcy1kby1wYXBl/bC1kZS1wYXJlZGUt/ZGEtbG9uYS1kYS1j/b3JfNzQxOTAtNjM4/NS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"}/>
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