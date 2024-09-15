import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ItemAppointment from '../../components/ItemAppointment'; // Assuming you have AppointmentItem component
import {Picker} from '@react-native-picker/picker';
import {getProfile} from '../../utils/user/profileUser';
import styles from './style';
import fetchAppointment from '../../utils/appointment/fetchAppointment';
import FullScreenLoading from '../../components/FulllScreenLoading';
const AppointmentListScreen = () => {
  const [appointments, setAppoinments] = useState([]);
  const [status, setStatus] = useState('all'); // default filter
  const [loading, setLoading] = useState(true);

  const fetchDataAppointment = useCallback(async () => {
    try {
      const {userId, name} = await getProfile();
      console.log({userId, name});
      fetchAppointment({
        userId: userId,
        setAppoinments,
        setLoading,
        status,
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }, [status]);
  useEffect(() => {
    fetchDataAppointment();
  }, [fetchDataAppointment]);

  const renderAppointment = ({item}) => <ItemAppointment appointment={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách lịch hẹn</Text>
      <Picker
        selectedValue={status}
        onValueChange={itemValue => setStatus(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Tất cả" value="all" />
        <Picker.Item label="Đang chờ duyệt" value="pending" />
        <Picker.Item label="Đã duyệt" value="done" />
      </Picker>

      {loading ? (
        <FullScreenLoading visible={loading} />
      ) : (
        <FlatList
          data={appointments}
          renderItem={renderAppointment}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
        />
      )}
    </View>
  );
};

export default AppointmentListScreen;
