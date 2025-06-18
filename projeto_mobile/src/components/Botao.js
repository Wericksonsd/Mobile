import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Botao = (props) => {
    const cor = props.cor
    const tamanho = props.tamanho

    return (
        <TouchableOpacity style={[estilos.fundo, {backgroundColor: cor}]} onPress={props.onPress}>
            <Text style={[estilos.texto, {fontSize: tamanho}]}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    fundo: {
        backgroundColor: '#37BD6D',
        alignItems: 'center',
        justifyContent: "center",
        width: "100%"
    }
})

export default Botao