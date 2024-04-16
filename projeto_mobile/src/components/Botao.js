import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Botao = (props) => {
    return (
        <TouchableOpacity style={estilos.fundo}>
            <Text style={estilos.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

//Estilização
const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        fontSize: 28
    },
    fundo: {
        backgroundColor: '#37BD6D',
        alignItems: 'center'
    }
})

export default Botao