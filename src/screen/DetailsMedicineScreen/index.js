import React, {useState} from 'react';
import {View, Image, ScrollView, Pressable} from 'react-native';
import {Text} from 'react-native-elements';
import styles from './style';
import formatCurrency from '../../utils/formatMoney';
import BuyMedicineModel from '../../components/Modal/BuyMedicineModel';
export default function DetailsMedicineScreen({route, navigation}) {
  const {item} = route.params;
  console.log('medicine detail', item);
  const [medicine, setMedicine] = useState(item);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleBuyPress = () => {
    setModalVisible(true);
  };
  const handleBuyMedicine = () => {
    console.log('Buy');
    console.log('Name', medicine.name);
    console.log('ID', medicine.id);
    console.log('Quantity', quantity);
    setModalVisible(false);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
    setQuantity(1);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: medicine.image}} style={styles.medicineImage} />
      <View style={styles.detailContainer}>
        <Text style={styles.medicineName}>{medicine.name}</Text>
        <Text style={styles.medicineDescription}>{medicine.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.newPrice}>
            {formatCurrency(medicine.new_price)}
          </Text>
          {item.old_price && (
            <Text style={styles.oldPrice}>
              {formatCurrency(medicine.old_price)}
            </Text>
          )}
        </View>

        <Text style={styles.rating}>Rating: {medicine.rate} / 5</Text>

        <Pressable style={styles.buyButton} onPress={handleBuyPress}>
          <Text style={styles.buyButtonText}>Mua hàng</Text>
        </Pressable>
      </View>
      {modalVisible && (
        <BuyMedicineModel
          modalVisible={modalVisible}
          item={medicine}
          handleCloseModal={handleCloseModal}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleBuyMedicine={handleBuyMedicine}
          quantity={quantity}
        />
      )}
    </ScrollView>
  );
}
