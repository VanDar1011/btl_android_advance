import React from 'react';
import {View, Text, Button, StyleSheet, Pressable, Image} from 'react-native';

export default function Home({navigation}) {
  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  const handleMedicinesPress = () => {
    navigation.navigate('Medicines');
  };

  const handleAppointmentPress = () => {
    navigation.navigate('Appointment');
  };
  const handleAppointmentDetailPress = () => {
    navigation.navigate('AppointmentDetails');
  };
  const handleArticlesPress = () => {
    navigation.navigate('Articles');
  };

  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}>
          <Pressable
            onPress={handleAppointmentPress}
            style={styles.presessable}>
            <View style={styles.row_card}>
              <Image
                source={require('../assets/img/medicalAppointment.png')}
                style={styles.image}
              />
              <Text style={styles.text_white}>Đặt lịch khám</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleMedicinesPress} style={styles.presessable}>
            <View style={styles.row_card}>
              <Image
                source={require('../assets/img/medicine.png')}
                style={styles.image}
              />
              <Text style={styles.text_white}>Mua thuốc</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <Pressable
            onPress={handleAppointmentDetailPress}
            style={styles.presessable}>
            <View style={styles.row_card}>
              <Image
                source={require('../assets/img/appointmentDetail.png')}
                style={styles.image}
              />
              <Text style={styles.text_white}>Lịch hẹn</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleArticlesPress} style={styles.presessable}>
            <View style={styles.row_card}>
              <Image
                source={require('../assets/img/blog.png')}
                style={styles.image}
              />
              <Text style={styles.text_white}>Bài viết về sức khỏe</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <Pressable onPress={handleCartPress} style={styles.presessable}>
            <View style={styles.row_card}>
              <Image
                source={require('../assets/img/cart.png')}
                style={styles.image}
              />
              <Text style={styles.text_white}>Giỏ hàng</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={handleLogoutPress} style={styles.presessable}>
            <View style={styles.row_card}>
              <Image
                source={require('../assets/img/logout.png')}
                style={styles.image}
              />
              <Text style={styles.text_white}>Đăng xuất</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 20,
  },
  row: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    columnGap: 20,
  },
  card: {
    borderWidth: 2,
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row_card: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  text_white: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
