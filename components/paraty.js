import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/dev';

export default function paraty() {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Paraty - RJ</Text>
      <ScrollView>
      <Image
        style={estilo.banner}
        source={require('../assets/paratyy.jpg')}
      />


      <Text style={estilo.subtitle}>Paraty é apaixonante...</Text>
      <Text style={estilo.ingre}>
      O colorido das janelas e portas dos casarões coloniais hipnotiza os viajantes que chegam a Paraty, no Rio de Janeiro. Os tons fortes se juntam ao intenso verde da Mata Atlântica, que acompanha toda a cidade e emoldura o mar. Por dentro da serra, cachoeiras dão um toque ainda mais espetacular à encantadora Paraty. A cidade alia turismo histórico, paisagens naturais exuberantes, pousadas charmosas, excelente gastronomia e um intenso movimento cultural. É destino para quem deseja descansar, mas não necessariamente desplugar do mundo. Deixe-se levar por esse maravilhoso roteiro pela Costa Verde do Rio de Janeiro. Paraty é um lugar cativante e que desperta paixões entre os viajantes.
      </Text>
      
      <Text style={estilo.subtitle}>O que fazer em Paraty - RJ</Text>
      <Text style={estilo.ingre}>
        Paraty une história e paisagens naturais realmente estonteantes e, o melhor de tudo, Paraty está em uma das mais lindas baías do país. A região, conhecida como Costa Verde, oferece mais de uma centena de praias e ilhas para quem deseja curtir os dias de sol. E para quem preferir o contato mais íntimo com a Serra do Mar, há ainda uma grande variedade de cachoeiras a serem desbravadas pelos viajantes em Paraty.{'\n'}{'\n'}

As belezas naturais e a história de Paraty são inegáveis, mas a cidade vai além. Paraty tem um certo ar que inspira também a produção cultural. O Centro Histórico tem lojas repletas de artesanatos, ateliês de artistas locais estão por toda parte, fotografias estampam as vitrines e as livrarias são mesmo um convite a horas a fio com um bom café. Impossível negar essa vocação diante de eventos como a Festa Literária Internacional de Paraty, a FLIP e a Paraty em Foco, que reúne fotógrafos de todo o país. {'\n'}{'\n'}

Como se não bastasse a beleza natural, o caráter histórico e o agito cultural, Paraty é também um deleite gastronômico. A vida na cidade acontece em meio a dezenas de bons restaurantes que oferecem cardápios sofisticados, com misturas dignas de grandes chefs. As mesinhas ao ar livre, diante das igrejinhas históricas, arrebatam qualquer turista, enquanto os pratos agradam até os mais exigentes paladares. Ao sentar-se para jantar, não deixe de brindar com uma boa cachaça artesanal. Elas estão entre as melhores do país e você estará bebendo um pouco da história de Paraty.{'\n'}{'\n'}
      </Text>

<FlatList
          data={arrayConsole}
          renderItem={({ item }) => (
            <View>
              <Image style={estilo.banner} source={item.capa} />
              <Text  style={estilo.ingre}>
                {item.praia} - {item.tipo} - {item.descricao}{' '}
              </Text>
            </View>
          )}
        />

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
    backgroundColor: '#3b7a1f',
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

const arrayConsole = [
  {
    praia: 'As melhores praias de Paraty',
    tipo: 'NÃO PERCA!',
    descricao:
      'Com um pouquinho mais de tempo, vale ir de carro até as regiões mais distantes do Centro Histórico de Paraty, como a Vila de Trindade, onde está a Piscina Natural do Cachadaço, além da Praia do Cachadaço, Praia do Meio, Praia de Fora (ou Praia dos Ranchos), Praia do Cepilho e Praia Brava. Se você estiver a caminho de Angra dos Reis, não deixe de conferir a Praia de São Gonçalo e a Praia de São Gonçalinho. Para os mais aventureiros, a pedida é investir em praias distantes e com trajetos de trilha, como a Praia do Sono, Antigos e Antiguinhos.',
    capa: require('../assets/paratyyy.jpg'),
  },
];