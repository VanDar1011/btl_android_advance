import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItemMedicines from './ItemMedicines';
export default function ListMedicines({navigation, medicines}) {
  //   console.log(medicines);
  return (
    <View>
      <Text style={styles.title_medicine}>Danh sách thuốc</Text>
      <View style={styles.container}>
        {medicines.map((item, index) => {
          return (
            <ItemMedicines key={index} item={item} navigation={navigation} />
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title_medicine: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // gap: 10,
    justifyContent: 'space-between',
  },
});
