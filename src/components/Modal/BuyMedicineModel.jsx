import React from 'react';
import {Modal, View, Text, Animated, Easing, Pressable} from 'react-native';
import styles from './style';
import VerticalQuantityPicker from '../VerticalQuantityPicker';
export default function BuyMedicineModel({
  modalVisible,
  item,
  handleCloseModal,
  handleDecrease,
  handleIncrease,
  quantity,
  handleBuyMedicine,
}) {
  const [modalY] = React.useState(new Animated.Value(500));

  // const handle
  React.useEffect(() => {
    if (modalVisible) {
      Animated.timing(modalY, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalY, {
        toValue: 500,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible, modalY]);
  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      onRequestClose={handleCloseModal}>
      <View style={styles.modalBackdrop}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{translateY: modalY}]}]}>
          <Text style={styles.modalTitle}>Số sản phẩm muốn mua</Text>
          <View style={styles.container_quantity}>
            <VerticalQuantityPicker
              quantity={quantity}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
          </View>
          <View style={styles.container_btn}>
            <Pressable
              style={styles.buyMedicineButton}
              onPress={handleBuyMedicine}>
              <Text style={styles.modalButtonText}>Mua</Text>
            </Pressable>
            <Pressable
              style={styles.closeModalButton}
              onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>Đóng</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
