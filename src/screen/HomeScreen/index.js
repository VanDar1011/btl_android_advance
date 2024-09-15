import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './style';
import {Icon} from 'react-native-elements';
import {getProfile} from '../../utils/user/profileUser';
import {setProfileRedux} from '../../store/slice/profileSlice';
import Sidebar from '../../components/Sidebar';
import ListAppoinemt from '../../components/ListAppoinemt';
import {useDispatch, useSelector} from 'react-redux';
export default function HomeVip({navigation}) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  // const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  console.log('profile', profile);
  const handleNavigate = screen => {
    // Đóng sidebar
    navigation.navigate(screen); // Điều hướng đến màn hình tương ứng
  };
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const fetchProfile = async () => {
    try {
      const {userId, name} = await getProfile();
      dispatch(setProfileRedux({userId, name}));
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  // Fetch profile when the component mounts or after a successful login
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.row_logo}>
        <Pressable onPress={toggleSidebar} style={styles.menuIcon}>
          <Icon name="menu" size={30} color="#000" />
        </Pressable>
        <Image
          source={require('../../assets/img/logo_stand.png')}
          style={styles.logo}
        />
        <Pressable
          onPress={() => handleNavigate('Profile')}
          style={styles.menuIcon}>
          <Icon name="account-circle" size={30} color="#000" />
        </Pressable>
      </View>
      {sidebarVisible && (
        <Sidebar
          visible={sidebarVisible}
          toggleSidebar={toggleSidebar}
          navigation={navigation}
          // profile={profile}
        />
      )}

      <View style={styles.container_row_appoiment}>
        <View style={styles.row_appoiment}>
          <View>
            <Text style={styles.text_row_appoiment}>
              Bấm đặt lịch với các{'\n'}bác sĩ hàng đầu
            </Text>
            <Pressable
              style={styles.container_button_appoiment}
              onPress={() => handleNavigate('Appointment')}>
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
              onPress={() => handleNavigate('Appointment')}>
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
              onPress={() => handleNavigate('Medicines')}>
              <Image
                source={require('../../assets/icon/medicine.png')}
                style={styles.img_item_service}
              />
            </Pressable>
            <Text style={styles.name_item_service}>Mua thuốc</Text>
          </View>
          <View>
            <Pressable
              style={styles.item_service}
              onPress={() => handleNavigate('Cart')}>
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
              onPress={() => handleNavigate('Articles')}>
              <Image
                source={require('../../assets/icon/blog.png')}
                style={styles.img_item_service}
              />
            </Pressable>
            <Text style={styles.name_item_service}>Bài viêt</Text>
          </View>
        </View>
      </View>
      <View style={styles.appoiment_details}>
        <View style={styles.row_appoiment_details_title}>
          <Text style={styles.appoiment_details_title}>Lịch hẹn của bạn</Text>
          <Pressable onPress={() => handleNavigate('AppointmentDetails')}>
            <Text style={styles.btn_details}>Xem tất cả</Text>
          </Pressable>
        </View>
        <ListAppoinemt profile={profile} />
      </View>
    </View>
  );
}
