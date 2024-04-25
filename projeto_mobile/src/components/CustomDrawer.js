import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Drawer } from "react-native-paper"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView justifyContent='space-between'>
            <View>
                <Drawer.Section showDivider="false" theme={{colors: {primary: "red"}}} style={estilos.viewMae}>
                    <Text style={estilos.texto}>usuario@dominio.com</Text>
                </Drawer.Section>
                <View flex={75} paddingTop={30}>
                    <Icon name="exit-to-app" size={30} color="white"/>
                    <DrawerItemList {...props} style={estilos.texto} />
                </View>
            </View>
            <View style={estilos.sair}>
                <Icon name="exit-to-app" size={30} color="white"/>
                <DrawerItem labelStyle={estilos.texto} label="Sair" onPress={() => { props.navigation.goBack() }} />
            </View>
        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    viewMae: {
        width: "100%",
        alignItems: "center",
        paddingTop: 15,
        borderBottomColor: 'white',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    texto: {
        color: "white",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 25,
        alignItems: 'center'
    },
    sair: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

export default CustomDrawer