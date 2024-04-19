import { View, StyleSheet, Text } from 'react-native'

const Home = () => {
    return (
        <View style={estilos.viewMae}>
            <Text style={estilos.texto}>HOME</Text>
            {/* <BotaoGeral icone="trash-can-outline" cor="white" texto="Apagar" tamBotao={100} tamTexto={30} tamIcone={50} funcao={'() => {props.Navigation.Navigate("AgradecimentoParticipacao")}'}/> */}
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
    }
})

export default Home