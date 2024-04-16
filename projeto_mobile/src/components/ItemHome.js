import {View, Text, Image, StyleSheet} from 'react-native'

const ItemHome = (props) => {
    const titulo = props.titulo
    const data = props.data

    return (
        <View style={estilos.view}>    
            <Image />
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.data}>{data}</Text>
        </View>
    )
}

const estilos = StyleSheet.create ({
    view:{
        backgroundColor: '#372775',
        width: "271px", 
        height: "238px",
        borderRadius: '10px'
    },
    titulo:{
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        fontSize: 36,
        textAlign: 'center'
    },
    data:{
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default ItemHome