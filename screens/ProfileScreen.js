import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto Toko */}
      <Image
        source={require('../assets/own.jpeg')} // Gambar lokal
        style={styles.image}
      />
      <Text style={styles.shopName}>Toko Bunga Indah</Text>

      {/* Tentang Kami */}
      <Text style={styles.sectionTitle}>Tentang Kami</Text>
      <Text style={styles.text}>
        Toko Bunga Indah telah melayani pelanggan sejak tahun 2010. Kami menyediakan berbagai macam
        bunga segar dan rangkaian bunga untuk berbagai acara seperti pernikahan, ulang tahun,
        wisuda, dan lainnya.
      </Text>

      {/* Kontak Kami */}
      <Text style={styles.sectionTitle}>Kontak Kami</Text>
      <View style={styles.contactBox}>
        <Text style={styles.text}>📍 Jl. Mawar No. 123, Jakarta</Text>
        <Text style={styles.text}>📞 +62 812-3456-7890</Text>
        <Text style={styles.text}>📧 tokobungaindah@gmail.com</Text>
        <Text style={styles.text}>📷 IG: @tokobungaindah</Text>
        <Text style={styles.text}>🌐 www.tokobungaindah.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fdfdfd',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#e91e63',
  },
  shopName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e91e63',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: '#333',
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 6,
    alignSelf: 'flex-start',
    color: '#444',
  },
  contactBox: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 8,
  },
});
