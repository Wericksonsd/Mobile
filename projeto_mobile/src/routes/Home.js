import { View, StyleSheet, Text, TextInput, FlatList } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import Card from '../components/Card'
import Icon from "react-native-vector-icons/MaterialIcons"
import { PaperProvider } from 'react-native-paper'

const pesquisas = [
    {
        titulo: "SECOMP 2023",
        imagem: "https://imgs.search.brave.com/Cneu7QLFmezkZ3jZEtqfv-m75wfiR0a3Kpvlr_UTACQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFyZHdhcmUuY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/dGF0aWMvd3AvMjAy/Mi8wMS8yOC8xLTQu/anBn",
        data: "10/10/2023"
    },
    {
        titulo: "UBUNTU 2022",
        imagem: "https://imgs.search.brave.com/SqLfwo0LIiv7YDZL3ZGBW6Ey7CXc6O2uXGYUPLPlxT4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1UvdWJ1bnR1/LWxvZ28tOEZERUM2/QTA3Qi1zZWVrbG9n/by5jb20ucG5n",
        data: "05/06/2022"
    },
    {
        titulo: "MENINAS CPU",
        imagem: "https://imgs.search.brave.com/3iQZwA8AorJs7CWlI6INWcmO-PoyJnTZMBoXfUxT03o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZW5p/bmFzZGlnaXRhaXNu/b2NlcnJhZG8uY29t/LmJyL2ltYWdlcy9w/ZXJmaWwuanBn",
        data: "01/04/2022"
    },
    {
        titulo: "TESTE 1",
        imagem: "https://imgs.search.brave.com/_vbO3se_30_DzigSTppfpzGUVcr7PgrNjfiHqG4G5OM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I1L0MlQzMlQTJt/cHVzX0N1cml0aWJh/LmpwZw",
        data: "DD/MM/AAAA"
    },
    {
        titulo: "TESTE 2",
        imagem: "https://imgs.search.brave.com/_vbO3se_30_DzigSTppfpzGUVcr7PgrNjfiHqG4G5OM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I1L0MlQzMlQTJt/cHVzX0N1cml0aWJh/LmpwZw",
        data: "DD/MM/AAAA"
    },
    {
        titulo: "TESTE 3",
        imagem: "https://imgs.search.brave.com/_vbO3se_30_DzigSTppfpzGUVcr7PgrNjfiHqG4G5OM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I1L0MlQzMlQTJt/cHVzX0N1cml0aWJh/LmpwZw",
        data: "DD/MM/AAAA"
    }
]

const Home = (props) => {
    const [pesquisa, setPesquisa] = useState()

    return (
        <PaperProvider>

            <View style={estilos.viewMae}>
                <View style={estilos.conteudo}>
                    <View style={estilos.pesquisa}>
                        <Icon name="search" size={35} color="#8B8B8B"/>
                        <TextInput 
                            style={estilos.input} 
                            value={pesquisa} 
                            onChangeText={setPesquisa}
                            placeholder='Insira o termo de busca...' 
                            placeholderTextColor="#8B8B8B"
                        />
                    </View>
                        <FlatList 
                            horizontal
                            showsHorizontalScrollIndicator
                            contentContainerStyle={{ gap: 30 }} 
                            data={pesquisas} 
                            renderItem={
                                ({ item }) => <Card 
                                pesq={item}
                                navigation={props.navigation}
                                />
                            }
                            keyExtractor={item => item.titulo} 
                        />
                    <Botao texto="NOVA PESQUISA" cor="#37BD6D" tamanho={32} navigation={props.navigation} tela="NovaPesquisa"/>
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos  = StyleSheet.create({
    viewMae: {
        backgroundColor: "#372775",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 40
    },
    conteudo: {
        justifyContent: "center",
        alignItems: "center",
        height: "95%",
        width: "97%", 
        gap: 20
    },
    pesquisa: {
        backgroundColor: "white",
        alignItems: "center",
        width: "100%",
        height: 40,
        display: "flex",
        flexDirection: "row", 
    },
    input: {
        fontSize: 20, 
        fontFamily: "AveriaLibre-Regular",
        justifyContent: "center",
        color:"black", 
        paddingTop: 10,
        width: 786
    }
})

export default Home