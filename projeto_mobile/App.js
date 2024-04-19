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

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: 'white', headerStyle: { backgroundColor: '#2B1D62' } }}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{ headerShown: false }}/>
                <Stack.Screen name="PopUp" component={PopUp} options={{ headerShown: false }} />
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Coleta" component={Coleta} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App