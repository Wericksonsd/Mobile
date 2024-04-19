import { View, StyleSheet, Text } from 'react-native'
import BotaoColeta from '../components/BotaoColeta'

const Coleta = (props) => {
    const goToFinal = () => {props.Navigation.Navigate("AgradecimentoParticipacao")}
    return (
        <View style={estilos.viewMae}>
            <View>
                <Text style={estilos.texto}>O que você acho do Carnaval 2024?</Text>
            </View>
            <View style={estilos.view}>
            <BotaoColeta icone="emoticon-angry-outline" cor="#D71616" texto="Péssimo"  navigation={props.navigation} />
            <BotaoColeta icone="emoticon-sad-outline" cor="#FF360A" texto="Ruim" navigation={props.navigation} />
            <BotaoColeta icone="emoticon-neutral-outline" cor="#FFC632" texto="Neutro" navigation={props.navigation} />
            <BotaoColeta icone="emoticon-happy-outline" cor="#37BD6D" texto="Bom" navigation={props.navigation} />
            <BotaoColeta icone="emoticon-excited-outline" cor="#25BC22" texto="Excelente" navigation={props.navigation} />
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
        gap: 40
    },
    texto: {
        fontFamily: "AveriaLibre-Regular",
        color: "white",
        fontSize: 40
    },
    view: {
        display: "flex",
        flexDirection: "row",
        gap: 20
    }
})

export default Coleta