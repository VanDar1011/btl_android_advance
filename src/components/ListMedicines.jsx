import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemMedicines from './ItemMedicines';
export default function ListMedicines({navigation, medicines}) {
  //   console.log(medicines);
  return (
    <ScrollView style={styles.view_holder}>
      <Text style={styles.title_medicine}>Danh sách thuốc</Text>
      <View style={styles.container}>
        {medicines.map((item, index) => {
          return (
            <ItemMedicines key={index} item={item} navigation={navigation} />
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  view_holder: {
    paddingRight: 3,
  },
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
