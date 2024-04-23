//Navegação
//Imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/routes/Login";
import AgradecimentoParticipacao from "./src/routes/AgradecimentoParticipacao";
import AcoesPesquisa from "./src/routes/AcoesPesquisa";
import PopUp from "./src/routes/PopUp";
import DrawerNavigator from "./src/routes/DrawerNavigator";
import Coleta from "./src/routes/Coleta";
import NovaConta from "./src/routes/NovaConta";
import { StyleSheet } from "react-native";
import RecuperaSenha from "./src/routes/RecuperaSenha";
import NovaPesquisa from "./src/routes/NovaPesquisa";
import ModificarPesquisa from "./src/routes/ModificarPesquisa";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: 'white', headerStyle: { backgroundColor: '#2B1D62' } }}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{title:"Ação", headerTitleStyle:estilos.texto}} />
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{ headerShown: false }}/>
                <Stack.Screen name="PopUp" component={PopUp} options={{ headerShown: false }} />
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Coleta" component={Coleta} options={{ headerShown: false }}/>
                <Stack.Screen name="NovaConta" component={NovaConta} options={{title:"Nova Conta", headerTitleStyle:estilos.texto}}/>
                <Stack.Screen name="RecuperaSenha" component={RecuperaSenha} options={{title:"Recuperação de senha", headerTitleStyle:estilos.texto}} />
                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{title:"Nova Pesquisa", headerTitleStyle:estilos.texto}} />
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{title:"Modificar Pesquisa", headerTitleStyle:estilos.texto}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "AveriaLibre-Regular",
        fontSize: 30
    }
})

export default App