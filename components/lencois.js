import * as React from 'react';
import { Text, View, StyleSheet, Image,  TouchableOpacity, ScrollView, } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/dev';

export default function lencois() {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Lençois Maranhenses - MA</Text>
      <ScrollView>
      <Image
        style={estilo.banner}
        source={require('../assets/lencois.jpg')}
      />

      <Text style={estilo.subtitle}>Quando ir ao Lençóis Maranhenses</Text>
      <Text style={estilo.ingre}>Ao viajar para os Lençóis Maranhenses é preciso estar atento ao calendário para ver o fenômeno das lagoas em meio às dunas. A alta temporada dos Lençóis Maranhenses acontece durante e logo após as chuvas, especialmente entre os meses de abril e agosto. No auge da seca, de outubro a dezembro, quase todas as lagoas desaparecem e a paisagem, cheia de porções de água, se transforma em um imenso deserto. A verdade, entretanto, é que os Lençóis Maranhenses são lindos durante todo o ano, tendo ou não lagoas cheias.</Text>
      
      <Text style={estilo.subtitle}>O que fazer nos Lençóis Maranhenses</Text>
      <Text style={estilo.ingre}>
        O Parque Nacional dos Lençóis Maranhenses ocupa uma área de 155 mil hectares e é considerado o maior parque de dunas do Brasil. A área protegida é enorme, porém a região dos Lençóis Maranhenses é ainda maior que o Parque Nacional. Entre os passeios mais procurados por lá estão o Circuito da Lagoa Azul, o Circuito da Lagoa Bonita, a visita à Lagoa das Emendadas e ao Canto de Atins. Certamente passeios imperdíveis para quem vai aos Lençóis Maranhenses.{'\n'}{'\n'}

Ainda que as lagoas sejam as grandes atrações, o turismo por lá vai bem além. Quem visitar os Lençóis Maranhenses poderá investir em dias na praia do Caburé e em Atins, em passeios pelo Rio Preguiças e Rio Formiga e até na prática de kitesurfe, que anda crescendo muito na região. Tudo envolvendo percursos em veículos 4x4, lindas paisagens, águas transparentes e areia sempre fina e muito branca. E como se não bastasse, ainda é possível apreciar a imensidão dos Lençóis Maranhenses em um sobrevoo. Experiência inesquecível! {'\n'}{'\n'}

Quem desejar ir ainda mais fundo na experiência poderá investir na travessia a pé por dentro do Parque Nacional dos Lençóis Maranhenses. Essa rota, que leva de três a cinco dias, é sonho de consumo de muitos aventureiros e certamente a melhor e mais intensa maneira de viver o lugar.{'\n'}{'\n'}

Nenhuma paisagem no mundo se compara aos Lençóis Maranhenses. Só isso já é motivo suficiente para visitar a região. Entretanto, independentemente de ser um cenário único, os Lençóis Maranhenses conquistam a todos os turistas pela intensa imersão em pura beleza. E para ter certeza disso, basta assistir a um pôr do sol no alto das dunas ou dentro de uma das lagoas. Não será difícil cair de amores pelo destino. Acontece com todo o mundo.
      </Text>
      </ScrollView>
    </View>
  );
}
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "#ffe78a",
    alignItems: 'left',
    justifyContent: 'center',
  },

  titulo: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 18,
    color: 'white',
    backgroundColor: '#067583',
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