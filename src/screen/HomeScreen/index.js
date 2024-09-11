import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './style';
import {getProfile} from '../../utils/user/profileUser';
export default function HomeVip({navigation}) {
  const handleCartPress = () => {
    console.log('Cart Pressed');
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
  const [profile, setProfile] = useState({userId: null, name: null});

  useEffect(() => {
    const fetchProfile = async () => {
      const {userId, name} = await getProfile();
      console.log({userId, name});
      setProfile({userId, name});
    };

    fetchProfile();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.row_logo}>
        <View>
          <Text style={styles.text_profile}>
            Chào <Text>{profile.name}!</Text>
          </Text>
          <Text style={styles.text_hello}>Hôm nay bạn thế nào ?</Text>
        </View>
        <Image
          source={require('../../assets/img/logo_stand.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.container_row_appoiment}>
        <View style={styles.row_appoiment}>
          <View>
            <Text style={styles.text_row_appoiment}>
              Bấm đặt lịch với các{'\n'}bác sĩ hàng đầu
            </Text>
            <Pressable
              style={styles.container_button_appoiment}
              onPress={handleAppointmentPress}>
              <Text style={styles.text_button_appoiment}>Đặt ngay</Text>
            </Pressable>
          </View>
          <Image
            source={require('../../assets/img/doctor_home.png')}
            style={styles.logo_doctor}
          />
        </View>
      </View>
      <View style={styles.service}>
        <Text style={styles.service_title}>Dịch vụ</Text>

        <View style={styles.service_list}>
          {/* <ScrollView > */}
          <View>
            <Pressable
              style={styles.item_service}
              onPress={handleAppointmentPress}>
              <Image
                source={require('../../assets/icon/medicalAppointment.png')}
                style={styles.img_item_service}
              />
            </Pressable>
            <Text style={styles.name_item_service}>Đặt lịch</Text>
          </View>
          <View>
            <Pressable
              style={styles.item_service}
              onPress={handleMedicinesPress}>
              <Image
                source={require('../../assets/icon/medicine.png')}
                style={styles.img_item_service}
              />
            </Pressable>
            <Text style={styles.name_item_service}>Mua thuốc</Text>
          </View>
          <View>
            <Pressable style={styles.item_service} onPress={handleCartPress}>
              <Image
                source={require('../../assets/icon/cart.png')}
                style={styles.img_item_service}
              />
            </Pressable>
            <Text style={styles.name_item_service}>Giỏ hàng</Text>
          </View>
          <View>
            <Pressable
              style={styles.item_service}
              onPress={handleArticlesPress}>
              <Image
                source={require('../../assets/icon/blog.png')}
                style={styles.img_item_service}
              />
            </Pressable>
            <Text style={styles.name_item_service}>Bài viêt</Text>
          </View>
          {/* <Pressable style={styles.item_service} onPress={handleLogoutPress}>
            <Image
              source={require('../assets/img/logout.png')}
              style={styles.img_item_service}
            />
          </Pressable> */}
          {/* </ScrollView> */}
        </View>
      </View>
      <View style={styles.appoiment_details}>
        <View style={styles.row_appoiment_details_title}>
          <Text style={styles.appoiment_details_title}>Lịch hẹn của bạn</Text>
          <Pressable onPress={handleAppointmentDetailPress}>
            <Text style={styles.btn_details}>Xem tất cả</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   row_logo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 80,
//     height: 80,
//   },
//   logo_doctor: {
//     width: 100,
//     height: 100,
//     borderRadius: 40,
//   },
//   text_profile: {
//     paddingTop: 10,
//     fontSize: 22,
//     color: '#006980',
//   },
//   text_hello: {
//     fontSize: 16,
//     color: '#4CD20A',
//   },

//   container_row_appoiment: {
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     marginVertical: 5,
//   },
//   row_appoiment: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 40,
//     paddingVertical: 25,
//     borderRadius: 20,
//     backgroundColor: '#4CD20A',
//   },
//   text_row_appoiment: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   container_button_appoiment: {
//     marginVertical: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     width: 100,
//     padding: 10,
//   },
//   text_button_appoiment: {
//     color: '#4DD409',
//     fontSize: 16,
//   },
//   service: {},
//   service_title: {
//     marginVertical: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#006980',
//   },
//   service_list: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   item_service: {
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: '#cccccc',
//     zIndex: 1,
//   },
//   img_item_service: {
//     width: 40,
//     height: 40,
//   },
//   name_item_service: {
//     textAlign: 'center',
//     color: '#00687E',
//   },
//   appoiment_details: {
//     marginTop: 20,
//     flex: 1,
//     // backgroundColor: 'red',
//   },
//   row_appoiment_details_title: {
//     flexDirection: 'row',
//     marginVertical: 10,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   appoiment_details_title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#006980',
//   },
//   btn_details: {
//     color: '#006D77',
//     // fontWeight: 200,
//   },
// });
