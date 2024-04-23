//Tela para modificar pesquisa
//Imports
import { View, StyleSheet, Modal, Button} from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import InputImagem from '../components/InputImagem'
import Botao from '../components/Botao'
import BotaoModifica from '../components/BotaoModifica'
import PopUp from './PopUp'


const ModificarPesquisa = (props) => {
    const [nome, setNome] = useState()
    const [data, setData] = useState()
    const [visuModal, setVisuModal] = useState(false)

    return (
        <View style={estilos.viewMae}>
            <View style={estilos.formulario}>
                <View style={{gap:10}}>
                    <Input label="Nome" txt={nome} setTxt={setNome} placeholder="Nome da Pesquisa" color="grey" />
                    <Input label="Data" txt={data} setTxt={setData} placeholder="dd/mm/yyyy" color="grey" />
                    <InputImagem label="Imagem" texto="" altura={70}/>
                </View>
                <Botao texto="SALVAR" cor="#37BD6D" tamanho={35} navigation={props.navigation} tela="DrawerNavigator"/>
            </View>
            <View style={{justifyContent: "flex-end"}}>
                <View style={estilos.botao}>
                    <BotaoModifica icone="trash-can-outline" cor="white" texto="Apagar" />
                </View>
            </View>
            <Modal visible={visuModal} transparent={true} onRequestClose={() => setVisuModal(false)}>
                <PopUp/>
            </Modal>
        </View>

        
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row"
    },
    formulario: {
        width: "80%",
        height: "100%",
        gap: 20,
        marginRight: 10,
        paddingLeft: 150,
        paddingRight: 70
    },
    botao: {
        width: 90, 
        height: 90
    }
})

//Export
export default ModificarPesquisa