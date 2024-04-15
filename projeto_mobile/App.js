//Aplicação
//Imports
import { View, Text, TextInput, StyleSheet } from 'react-native'

const App = () => {
    return(
        <View style={estilos.viewMae}>
            <View>
                <Text style={estilos.texto}>Satisfyng.you</Text>
            </View>
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
        fontSize: 30
    }
})

//Exportação
export default App