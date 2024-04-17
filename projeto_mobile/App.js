//Navegação
//Imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/routes/Login"
import AgradecimentoParticipacao from "./src/routes/AgradecimentoParticipacao";
import ItemAcao from "./src/components/ItemAcao";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, headerTintColor: 'white', headerStyle: { backgroundColor: '#2B1D62' } }}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App