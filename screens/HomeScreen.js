import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const flowers = [
  {
    id: '1',
    name: 'Bouquet "Nostalgia"',
    price: '11.800',
    image: require('../assets/bunga1.jpeg'),
  },
  {
    id: '2',
    name: 'Bouquet "Luxury"',
    price: '8.300',
    image: require('../assets/bunga2.jpeg'),
  },
  {
    id: '3',
    name: 'Bouquet "Perfection"',
    price: '9.900',
    image: require('../assets/bunga3.jpeg'),
  },
  {
    id: '4',
    name: 'Bouquet "Rainbow"',
    price: '13.999',
    image: require('../assets/bunga4.jpeg'),
  },
  {
    id: '5',
    name: 'Bouquet "Merci"',
    price: '6.999',
    image: require('../assets/bunga5.jpeg'),
  },
  {
    id: '6',
    name: 'Bouquet "Snow White"',
    price: '13.500',
    image: require('../assets/bunga6.jpeg'),
  },
];

const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns - 24;

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price} руб.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tambahkan</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Katalog Bunga</Text>
      <FlatList
        data={flowers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: '#f4f6fb' },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 6,
    padding: 10,
    width: itemWidth,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 8,
    color: '#555',
  },
  button: {
    backgroundColor: '#e91e63',
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
