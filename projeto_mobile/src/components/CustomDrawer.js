import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Drawer } from "react-native-paper"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView>
            <Drawer.Section showDivider="true" theme={{colors: {primary: "red"}}}>
                <Text style={estilos.texto}>usuario@dominio.com</Text>
            </Drawer.Section>
            <View style={[estilos.view, { flex: 75, paddingTop: 10 }] }>
                <DrawerItemList {...props} />
            </View>
            <View style={{display: "flex"}}>
                <Icon name="exit-to-app" size={30} color="white" />
                <DrawerItem labelStyle={{ color: "white", backgroundColor: "green" }} label="SAIR" onPress={() => { props.navigation.goBack() }} />
            </View>
        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        width: "100%",
        alignItems: "center",
        paddingTop: 15,
        paddingLeft: 10
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    },
    teste: { flex: 15, paddingTop: 10 }
})

export default CustomDrawer