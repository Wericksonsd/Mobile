import { Text, StyleSheet, View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ItemAcao = (props) => {
    
    return (
    <Pressable onPress={() => {props.navigation.navigate=(props.tela)}} style={{backgroundColor:"red"}}>
        <View style={estilos.view}>
            <Icon name={props.icone} size={90} color="white" />
            <Text style={estilos.texto}>{props.texto}</Text>
        </View>
    </Pressable>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: "#312464",
        height: 170,
        width: 200,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        fontFamily: "AveriaLibre-Regular",
        fontSize: 30,
        color: "white"
    }
})

export default ItemAcao