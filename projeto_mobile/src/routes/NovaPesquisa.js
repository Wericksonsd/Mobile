//Tela de cadastro de nova pesquisa
//Imports
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import InputImagem from '../components/InputImagem'
import Botao from '../components/Botao'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const NovaPesquisa = (props) => {
    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [validadeNome, setValidadeNome] = useState(true)
    const [validadeData, setValidadeData] = useState(true)

    const validaNome = () => {
        if(!nome.trim()){
            setValidadeNome(false)
        }else{
            setValidadeNome(true)
        }
    }

    const validaData = () => {
        if(!data.trim()){
            setValidadeData(false)
        }else{
            setValidadeData(true)
        }
    }
    
    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <View style={{ gap: 1 }}>
                    <Input label="Nome" txt={nome} setTxt={setNome} placeholder="Nome do Projeto" color="grey" onBlur={validaNome}/>
                    {!validadeNome && <Text style={estilos.erro}>Preencha o nome da pesquisa</Text>}
                    <View>
                        <Text style={estilos.texto}>Data</Text>
                        <View style={{display: "flex", flexDirection: "row"}}>
                            <TextInput style={[estilos.input, { color: "black", fontFamily: "AveriaLibre-Regular" }]} value={data} onChangeText={setData}
                                placeholder="DD/MM/AAAA" placeholderTextColor="grey" onBlur={validaData}/>
                            <Icon style={estilos.icone} name="calendar-month-outline" size={40} color="grey" />
                        </View>
                        {!validadeData && <Text style={estilos.erro}>Preencha a data</Text>}
                    </View>
                    <InputImagem label="Imagem" 
                    image={"https://imgs.search.brave.com/MdP91AMrljj-msYvpu8JV43j6S3uAqYwGdBtVcZLwhY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L2Z1bmRvLWJyYW5j/b18yMy0yMTQ3NzMw/ODAxLmpwZz9zaXpl/PTYyNiZleHQ9anBnhttps://imgs.search.brave.com/RGIAkDjyCp6BtgTihwtfnS7O6SMnm9AIHuE0iTCEBCM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L3RleHR1cmFzLWUt/c3VwZXJmaWNpZS1h/YnN0cmF0YXMtYnJh/bmNhcy1kby1wYXBl/bC1kZS1wYXJlZGUt/ZGEtbG9uYS1kYS1j/b3JfNzQxOTAtNjM4/NS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"} 
                    onPress={() => {console.log("Imagem inserida")}}
                    />
                </View>
                <Botao texto="CADASTRAR" cor="#37BD6D" tamanho={35} navigation={props.navigation} tela="DrawerNavigator" />
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
        gap: 15
    },
    input: {
        width: "100%",
        backgroundColor: "white"
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    },
    icone: {
        position: "absolute",
        right: 10,
        top: 4
    },
    erro: {
        color: '#FD7979',
        fontFamily: "AveriaLibre-Regular",
        fontSize: 12
    }
})

//Export
export default NovaPesquisa