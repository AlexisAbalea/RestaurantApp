import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, FlatList, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const DATA = [{id: '1', nom: 'La cabane de romulus', note: '🔥🔥🔥🔥'}, {id: '2', nom: 'Upper Burger',  note: '🔥🔥🔥🔥🔥'}, {id:'3', nom: 'Del Arte', note: '🔥🔥'}];

export default function LinksScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.nom} note={item.note} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

function Item({ title, note }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title} {note}</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Restaurant fait :',
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
