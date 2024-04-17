//Tela de login do Sistema
//Imports
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Login = (props) => {
    const [txtUsuario, setUsuario] = useState()
    const [txtSenha, setSenha] = useState()

    const goToFinal = () => {
        props.navigation.navigate('AgradecimentoParticipacao')
    }

    return (
        <View style={estilos.viewMae}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Text style={estilos.texto}>Satisfying.you</Text>
                <Icon name="emoticon-happy-outline" size={60} color="white" />
            </View>
            <Button onPress={goToFinal} color='#37BD6D' title='Salvar'/>
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
        gap: 30
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 40
    },
    botaoOk: {
        fontFamily: "AveriaLibre-Regular",
        height: 100,
        width: 100
    }
})

//Export
export default Login