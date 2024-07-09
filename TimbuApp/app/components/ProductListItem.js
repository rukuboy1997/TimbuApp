import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductListItem = ({ product }) => {
  const baseUrl = 'https://api.timbu.cloud/images/';
  return (
    <View style={styles.container}>
      <Image 
          source={{ uri: product.photos.length > 0 ? baseUrl + product.photos[0].url : 'https://via.placeholder.com/150' }} 
        style={styles.image} 
      />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        {product.current_price[0].NGN && <Text style={styles.price}>Price: ${product.current_price[0].NGN}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default ProductListItem;
