import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Button
} from 'react-native';
import { Icon } from 'react-native-elements'

import { MonoText } from '../components/StyledText';

const DATA = [{id: '1', nom: 'La souris gourmande'}, {id: '2', nom: 'Le benew'}, {id:'3', nom: 'La fabrique à jus'}];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.nom} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>🍝 {title}</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Restaurant à tester :',
  headerRight: () => (
    <Icon
      raised
      reverse
      name='ios-add'
      type='ionicon'
      color='#29B101'
      onPress={() => console.log('hello')} />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.49,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    color: '#04081A',
  },
  titrePage: {
    fontSize: 32,
    color: '#000',
    textAlign: 'center'
  },
});
