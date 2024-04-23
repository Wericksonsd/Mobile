//Tela de Ações das Pesquisas
//Imports
import { View, StyleSheet} from 'react-native'
import ItemAcao from '../components/ItemAcao'

//Aplicação
const AcoesPesquisa = (props) => {
    return (
        <View style={estilos.viewMae}>
            <ItemAcao texto="Modificar" cor="white" icone="square-edit-outline" tela="ModificarPesquisa" navigation={props.navigation} />
            <ItemAcao texto="Coletar Dados" cor="white" icone="checkbox-multiple-outline" tela="Coleta" navigation={props.navigation} />
            <ItemAcao texto="Relatório" cor="white" icone="shape-circle-plus" tela="Coleta" navigation={props.navigation} />
        </View>
    )
}

//Estilização
const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 40, 
        display: "flex",
        flexDirection: "row"
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 40
    },
    botaoOk: {
        fontFamily: "AveriaLibre-Regular",
        height: 100,
        width: 100
    }
})

//Export
export default AcoesPesquisa