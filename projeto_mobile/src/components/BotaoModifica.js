import { Text, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BotaoModifica = (props) => {
    return (
        <Pressable
            style={estilos.view}
            onPress={() => props.VisuModal(true)} >
            <Icon name={props.icone} size={40} color={props.cor} />
            <Text style={estilos.texto}>{props.texto}</Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
    view: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%", 
        width: "100%"
    },
    texto: {
        fontFamily: "AveriaLibre-Regular",
        color: "white",
        fontSize: 20
    }
})

export default BotaoModifica