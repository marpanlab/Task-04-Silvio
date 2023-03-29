import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity  } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/dev';

export default function barragrande() {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Barra Grande - BA </Text>
      <ScrollView>
      <Image
        style={estilo.banner}
        source={require('../assets/barra-grande.jpg')}
      />

      <Text style={estilo.subtitle}>Península de Maraú...</Text>
      <Text style={estilo.ingre}>
      Localizada a cerca de 130 Km do aeroporto de Ilhéus e a 75 Km de Itacaré, a Península de Maraú é formada por várias vilas de praia. O vilarejo de Barra Grande é o “coração” da Península, pois, além de ter a maior parte das acomodações, também tem praia, restaurantes, bares, mercadinhos, agências de passeios e algumas poucas lojinhas. É também o “hub” dos transportes, pois é em Barra Grande que ficam pontos de táxi, mototáxi e jardineiras.</Text>
      
      <Text style={estilo.subtitle}>O que fazer em Barra Grande</Text>
      <Text style={estilo.ingre}>
        1 – Curtir a Praia do Mutá{'\n'}{'\n'}
        2 – Voltar à Praia do Mutá para ver o sol se por{'\n'}{'\n'}
        3 – Fazer um passeio de barco na Ilha da Pedra Furada{'\n'}{'\n'}
        4 – Curtir o fim de tarde no rio Carapitangui{'\n'}{'\n'}
        5 – Conhecer as piscinas naturais de Taipu de Fora{'\n'}{'\n'}
        6 – Fazer um passeio de jardineira{'\n'}{'\n'}
        7 – Fazer um passeio para Boipeba{'\n'}{'\n'}
      </Text>
      </ScrollView>
    </View>
  );
}
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#ffe78a',
    alignItems: 'left',
    justifyContent: 'center',
  },

  titulo: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 18,
    color: 'white',
    backgroundColor: '#396ae1',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    width: '100%',
  },

  banner: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 30
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    alignSelf: 'flex-start',
    fontFamily: 'RobotoCondensed_700Bold',
  },

    ingre: {
    fontSize: 15,
    margin: 15,
    alignSelf: 'flex-start',
    fontFamily: 'RobotoCondensed_400Regular',
  },
});