import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import fetchMedicines from '../../utils/medicines/fetchMedicines';
import {SearchBar} from 'react-native-elements';
// import {debounce} from '../../utils/debounce';
import debounce from 'lodash.debounce';
import HorizontalScroll from '../../components/HorizontalScroll';
import ListMedicines from '../../components/ListMedicines';
import searchMedicineByName from '../../utils/medicines/searchMedicineByName';
export default function MedicinesScreen({navigation}) {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState('');
  // const [selectedOption, setSelectedOption] = useState(null);
  const [idCategory, setIdCategory] = useState(1);

  const updateSearch = text => {
    setSearch(text);
    debouncedSearch(text);
  };
  const debouncedSearch = useCallback(
    debounce(text => searchMedicineByName(text, idCategory, setMedicines), 500), // 500ms delay
    [idCategory],
  );
  // const implementSearchByKeyword = async () => {
  //   searchMedicineByName(search, setMedicines);
  // };
  const handleArrow = () => {
    navigation.navigate('BenefitScreen');
  };
  const handleNavigatorCart = () => {
    navigation.navigate('Cart');
  };
  useEffect(() => {
    fetchMedicines(setMedicines);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.row_title}>
        <Text style={styles.title_medicine}>Mua thuốc</Text>
        <Pressable onPress={handleNavigatorCart}>
          <Image
            source={require('../../assets/icon/cart.png')}
            style={styles.img_item_service}
          />
        </Pressable>
      </View>
      <View style={styles.container_seach_bar}>
        <SearchBar
          placeholder="Tìm kiếm thuốc tại đây..."
          onChangeText={updateSearch}
          value={search}
          style={{margin: 0, padding: 0}}
          platform="default"
          placeholderTextColor="#888"
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
        />
      </View>
      <View style={styles.contaniner_note}>
        <View style={styles.container_icon_note}>
          <Image
            source={require('../../assets/icon/note.png')}
            style={styles.img_item_service}
          />
        </View>
        <View>
          <Text style={styles.text_title_note}>Lưu ý!</Text>
          <Text>
            Dùng thuốc cần theo chỉ định của bác sĩ,{'\n'}Không nên tự ý mua và
            sử dụng
          </Text>
        </View>
        <View style={styles.container_icon_note}>
          <Pressable onPress={handleArrow}>
            <Image
              source={require('../../assets/icon/arrow.png')}
              style={styles.icon_arrow}
            />
          </Pressable>
        </View>
      </View>
      <HorizontalScroll
        setMedicines={setMedicines}
        setIdCategory={setIdCategory}
      />
      <ListMedicines medicines={medicines} navigation={navigation} />
    </View>
  );
}
