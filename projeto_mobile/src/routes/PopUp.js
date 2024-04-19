import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const PopUp = (props) => {
    return (
        <View style={estilos.viewMae}>
            <View style={{alignItems: "center"}}>
                <Text style={estilos.texto}>Tem certeza de apagar essa</Text>
                <Text style={estilos.texto}>pesquisa?</Text>
            </View>
            <View style={estilos.view}>
                <TouchableOpacity style={estilos.botao} onPress={() => {props.navigation.goBack()}}>
                    <Text style={estilos.texto}>SIM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[estilos.botao,{backgroundColor: "#3F92C5"}]} onPress={() => {props.navigation.goBack()}}>
                    <Text style={estilos.texto}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775", 
        width: 350, 
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    },
    view: {
        display: "flex",
        flexDirection: "row",
        gap: 20
    },
    botao: {
        backgroundColor: "#FF8383",
        width: 130,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default PopUp