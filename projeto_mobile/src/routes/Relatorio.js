//Tela de relatorio
//Imports
import { View, StyleSheet, Image } from 'react-native'

const Relatorio = (props) => {
    return (
        <View style={estilos.viewMae}>
            <Image style={estilos.image} source={require("../images/Relatorio.png")}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        alignItems: "center", 
        justifyContent: "center"
    },
    image: {
        width: 600, 
        height: 300
    }
})

//Export
export default Relatorio