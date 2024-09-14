import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import {Swipeable} from 'react-native-gesture-handler';
import formatCurrency from '../utils/formatMoney';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox} from 'react-native-elements';
const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onDelete,
  selectItem,
  itemsSelected,
}) => {
  const handleChangeValue = () => {
    console.log('handleChangeValue');
  };
  // Render nút xóa khi vuốt
  const renderRightActions = () => (
    <View style={styles.containerDelete}>
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.deleteButton}>
        <Icon name="trash" size={20} style={styles.deleteButtonText} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <CheckBox
          checked={itemsSelected.includes(item.id)}
          onPress={() => selectItem(item.id)}
        />
        {/* <CheckBox
          value={itemsSelected.includes(item.id)}
          onValueChange={selectItem}
        /> */}
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>
            Giá : {formatCurrency(item.new_price)}
          </Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => onDecrease(item.id)}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => onIncrease(item.id)}
              style={[styles.button, styles.buttonIncreament]}>
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
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
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
    paddingLeft: 10,
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
    borderRadius: 15,
    marginHorizontal: 5,
  },
  buttonIncreament: {
    backgroundColor: '#4caf50',
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
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartItem;
