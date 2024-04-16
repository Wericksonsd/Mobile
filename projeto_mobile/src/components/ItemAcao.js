//Importação
import { Text, StyleSheet, View } from 'react-native'

const ItemAcao = (props) => {
    return (
        <View style={estilos.view}>
            <Text style={estilos.texto}>{props.texto}Modificar</Text>
        </View>
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