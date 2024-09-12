import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import CartItem from '../../components/ItemCart'; // Đảm bảo bạn đã tạo CartItem component
import fetchOrderById from '../../utils/order/fetchOrderById';
import {getProfile} from '../../utils/user/profileUser';
// Dữ liệu giả lập cho giỏ hàng

const CartScreen = () => {
  const [items, setItems] = useState([]);

  const increaseQuantity = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decreaseQuantity = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Tính tổng số tiền
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy userId và name từ hàm getProfile
        const {userId, name} = await getProfile();
        console.log('User ID:', userId);
        console.log('User Name:', name);

        // Gọi API lấy dữ liệu giỏ hàng sau khi có userId
        if (userId) {
          const cartItems = await fetchOrderById(userId, 'pending', setItems); // Gọi API lấy giỏ hàng
          console.log('Cart Items:', cartItems);
        }
      } catch (error) {
        console.error('Error fetching profile or cart:', error);
      }
    };

    fetchData(); // Gọi hàm async trong useEffect
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ Hàng</Text>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <CartItem
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onDelete={deleteItem}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Thành Tiền:</Text>
        <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Thanh Toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 22,
    color: 'green',
    marginVertical: 10,
  },
  checkoutButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
