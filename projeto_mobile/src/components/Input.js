import { TextInput, StyleSheet, Text, View } from "react-native";

const Input = (props) => {
    return (
        <View >
            <Text style={estilos.texto}>{props.label} </Text>
            <TextInput style={estilos.input}/>
        </View>
        
    )
}

const estilos = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: "white"
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    }
})

export default Input