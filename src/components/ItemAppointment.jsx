import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const AppointmentItem = ({appointment}) => {
  const {group, doctor, startTime, endTime, status} = appointment;

  // Định dạng thời gian (có thể sử dụng thư viện moment.js để dễ hơn)
  const formattedStartTime = new Date(startTime).toLocaleTimeString();
  const formattedEndTime = new Date(endTime).toLocaleTimeString();

  return (
    <View style={styles.container}>
      <Image source={{uri: doctor.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.doctor_group}>{doctor.group}</Text>
        <Text style={styles.time}>
          {formattedStartTime} - {formattedEndTime}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  infoContainer: {
    marginLeft: 16,
    justifyContent: 'center',
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  doctor_group: {
    color: 'green',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginBottom: 6,
  },
});

export default AppointmentItem;
