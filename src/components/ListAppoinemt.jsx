import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import AppointmentItem from './ItemAppointment';
import fetchAppointment from '../utils/appointment/fetchAppointment';
import {getProfile} from '../utils/user/profileUser';
export default function ListAppoinemt({profile}) {
  // const [profile, setProfile] = useState(null);
  // const [appointments, setAppoinments] = useState([]);
  // const fetchDataAppointment = useCallback(async () => {
  //   try {
  //     const {userId, name} = await getProfile();
  //     setProfile({userId, name});
  //     console.log('profile at home', {userId, name});
  //     if (!userId) return;
  //     fetchAppointment({
  //       userId: profile?.userId,
  //       limit: 2,
  //       status: 'done',
  //       setAppoinments,
  //     });
  //   } catch (error) {
  //     console.error('Error fetching profile:', error);
  //   }
  // }, []);
  // useEffect(() => {
  //   fetchDataAppointment();
  // }, [fetchDataAppointment]);
  //
  // const [profile, setProfile] = useState(null);
  const [appointments, setAppoinments] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (profile) {
          await fetchAppointment({
            userId: profile.userId,
            limit: 2,
            status: 'done',
            setAppoinments,
          });
        }
      } catch (error) {
        console.error('Error fetching profile or cart:', error);
      }
    };
    fetchProfile();
  }, [profile]);
  return (
    <View style={styles.container}>
      {appointments.map(appointment => (
        <AppointmentItem key={appointment.id} appointment={appointment} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
