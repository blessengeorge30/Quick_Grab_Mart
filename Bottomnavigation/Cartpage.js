import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const data = [
 { id: '1', name: 'Orange Juice', price: '$39.99' },
 { id: '2', name: 'White Bread', price: '$18.99' },
 { id: '3', name: 'Full Cream Milk', price: '$25.99' },
];

const renderItem = ({ item }) => (
 <View style={styles.item}>
    <Text style={styles.itemText}>{item.name}</Text>
    <Text style={styles.itemText}>{item.price}</Text>
 </View>
);

const CartScreen = () => {
 return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Home Address</Text>
        <Text style={styles.topText}>1 Coupon applied</Text>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.midText}>My Cart</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Delivery Fee: R0.00</Text>
        <Text style={styles.bottomText}>Driver Tip: R0.00</Text>
        <Text style={styles.bottomText}>Total: R160.00</Text>
        <Button title="Order Now" onPress={() => console.log('Order Now')} />
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
 },
 topContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
 },
 topText: {
    fontSize: 18,
    fontWeight: 'bold',
 },
 midContainer: {
    flex: 3,
    justifyContent: 'space-evenly',
 },
 midText: {
    fontSize: 24,
    fontWeight: 'bold',
 },
 item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
 },
 itemText: {
    fontSize: 18,
 },
 bottomContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
 },
 bottomText: {
    fontSize: 18,
    fontWeight: 'bold',
 },
});

export default CartScreen;