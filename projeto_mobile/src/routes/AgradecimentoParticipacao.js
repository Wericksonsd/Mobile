//Tela de login do Sistema
//Imports
import { View, Text, StyleSheet, Button } from 'react-native'

const AgradecimentoParticipacao = (props) => {
    return (
        <View style={estilos.viewMae}>
            <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
            <Button color="#372770" onPress={() => { props.navigation.navigate('Login') }} title='' />
            <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
        </View>
    )
}

//Estilização
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