import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/dev';

export default function Home(props) {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Top 3 Lugares do Brasil </Text>
      <Image style={estilo.banner} source={require('../assets/banner.jpg')} />

      <ScrollView>
      <TouchableOpacity style={estilo.vitri} onPress={()=>{props.navigation.navigate('barragrande')}}>
        <Text style={estilo.link}>Barra Grande - BA </Text>
        <Image style={estilo.vitrine} source={require('../assets/barra_grande.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity style={estilo.vitri} onPress={()=>{props.navigation.navigate('lencois')}}>
        <Text style={estilo.link}> Lençóis Maranhenses - MA </Text>
        <Image style={estilo.vitrine} source={require('../assets/lencois_maranhenses.jpeg')} />
      </TouchableOpacity>

      <TouchableOpacity style={estilo.vitri} onPress={()=>{props.navigation.navigate('paraty')}}>
        <Text style={estilo.link}> Paraty - RJ </Text>
        <Image style={estilo.vitrine} source={require('../assets/paraty.jpg')} />
      </TouchableOpacity>
      </ScrollView>

    </View>

  );
}
}

const estilo = StyleSheet.create({
    container: {
    backgroundColor: "#ffe78a",
    height: '100%'
    },

    titulo: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 18,
    color: "white",
    backgroundColor: "#257500",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft:15
  },

    banner: {
      width: '100%',
      height: 100,
      alignSelf: 'center',
    },

      vitrine: {
      width: '90%',
      height: 130,
      borderRadius: 30,
      alignSelf: 'center',
      margin: 10,
      position: 'absolute',
      zIndex: 0
    },
      vitri: {
      width: '100%',
      height: 100,
      alignSelf: 'center',
      margin: 30,

    },
      link: {
      alignSelf: 'center',
      zIndex: 1,
      marginTop: 60,
      fontFamily: 'RobotoCondensed_700Bold',
      fontSize: 18,
      color: 'black',
      backgroundColor: 'white',
      width: '90%',
      textAlign: 'center'

    }

});
