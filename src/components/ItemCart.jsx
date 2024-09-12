import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import formatCurrency from '../utils/formatMoney';
import Icon from 'react-native-vector-icons/FontAwesome';
const CartItem = ({item, onIncrease, onDecrease, onDelete}) => {
  // Render nút xóa khi vuốt
  const renderRightActions = () => (
    <View style={styles.containerDelete}>
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.deleteButton}>
        <Icon name="trash" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{formatCurrency(item.new_price)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => onDecrease(item.id)}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => onIncrease(item.id)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginVertical: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: '#f0f0f0',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#4caf50',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#555',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#333',
  },
  containerDelete: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40, // Giảm kích thước nút
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#f3f3f3',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CartItem;
