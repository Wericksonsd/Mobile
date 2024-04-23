import { View, StyleSheet, Text, TextInput } from 'react-native'
import Botao from '../components/Botao'

const Home = (props) => {
    return (
        <View style={estilos.viewMae}>
            <View style={estilos.conteudo}>
                <TextInput></TextInput>
            <Text style={estilos.texto}>HOME</Text>
                <Botao texto="NOVA PESQUISA" cor="#37BD6D" tamanho={32} navigation={props.navigation} tela="NovaPesquisa"/>
            </View>
        </View>
    )
}

const estilos  = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 40
    },
    conteudo: {
        justifyContent: "center",
        backgroundColor:"red",
        height: "95%",
        width: "97%"
    }
})

export default Home