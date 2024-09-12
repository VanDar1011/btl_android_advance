import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Rating} from 'react-native-ratings';
import formatCurrency from '../utils/formatMoney';
export default function ItemMedicines({item, navigation}) {
  const [medicine, setMedicine] = useState(item);
  const handleMedicineDetail = () => {
    // console.log('medicine :', medicine);
    navigation.navigate('DetailsMedicine', {item: medicine});
  };
  return (
    <View style={styles.item_medicines}>
      <Pressable onPress={handleMedicineDetail}>
        <View style={styles.container_img}>
          <Image
            source={{uri: item.image}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View styles={styles.container_name}>
          <Text>{item.name}</Text>
          <View style={styles.container_price}>
            <Text style={styles.text_new_price}>
              {formatCurrency(item.old_price)}
            </Text>
            <Text style={styles.text_old_price}>
              {formatCurrency(item.new_price)}
            </Text>
          </View>
          <Rating
            startingValue={item.rate}
            imageSize={10}
            readonly
            fractions={1}
            style={styles.container_rate}
          />
          {/* <Text>{rating.toFixed(1)}</Text> */}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item_medicines: {
    width: '46%',
    height: 180,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    // justifyContent: 'center',
  },
  container_img: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    width: 80,
    height: '100%',
    borderRadius: 8,
  },
  container_name: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  container_price: {
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
  },
  text_new_price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_old_price: {
    color: 'red',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'red',
  },
  container_rate: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
