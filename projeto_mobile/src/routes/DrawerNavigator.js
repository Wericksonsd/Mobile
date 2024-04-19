import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './Home'
import CustomDrawer from '../components/CustomDrawer'

const Drawer_Navigator = createDrawerNavigator()

const DrawerNavigator = (props) => {
    return (
        <Drawer_Navigator.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ headerTitle: "", headerTintColor: 'white', headerStyle: { backgroundColor: '#2B1D62' }, drawerLabelStyle: { color: "white", backgroundColor: "#2B1D62" }, drawerStyle: { backgroundColor: "#2B1D62" } }}>
            <Drawer_Navigator.Screen name="Pesquisa" component={Home} />
        </Drawer_Navigator.Navigator>
    )
}

export default DrawerNavigator