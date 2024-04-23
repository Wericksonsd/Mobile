//Tela de Agradecimentos
//Imports
import { View, Text, StyleSheet } from 'react-native'

const AgradecimentoParticipacao = (props) => {
    const seconds = 2
    return (
        <View style={estilos.viewMae}>
            <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
            <Text style={estilos.texto} onload={setTimeout(() => {props.navigation.navigate('DrawerNavigator')}, seconds*1000)} >Aguardamos você no próximo ano!</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 30
    }
})

//Export
export default AgradecimentoParticipacao