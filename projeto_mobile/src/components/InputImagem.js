import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

const InputImagem = props => {
  const [imagem, setImagem] = useState(props?.image);

  const pickImage = async () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, result => {
      convertUriToBase64(getImageUri(result));
    });
  };

  const getImageUri = result => {
    return result?.assets[0]?.uri;
  };

  const convertUriToBase64 = async uri => {
    const resizedImage = await ImageResizer.createResizedImage(
      uri,
      500,
      500,
      'JPEG',
      100,
    );

    const imageUri = await fetch(resizedImage.uri);
    const imageBlob = await imageUri.blob();

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagem(reader.result);
    };
    reader.readAsDataURL(imageBlob);
  };

  return (
    <View style={{gap: 2}}>
      <Text style={estilos.texto}>{props.label} </Text>
      <Pressable style={estilos.input} {...props} onPress={pickImage}>
        <Image style={estilos.imagem} source={{uri: imagem}} />
      </Pressable>
    </View>
  );
};

const estilos = StyleSheet.create({
  input: {
    height: 70,
    width: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  imagem: {
    height: 60,
    width: 60,
  },
});

export default InputImagem;
