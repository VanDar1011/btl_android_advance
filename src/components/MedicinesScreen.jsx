import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {debounce} from '../utils/debounce';
import HorizontalScrollScreen from './HorizontalScrollScreen';
import ListMedicines from './ListMedicines';
const API_APP = process.env['API_APP'];
export default function Medicines({navigation}) {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState('');
  const updateSearch = text => {
    setSearch(text);
    debounceSearch(text);
  };
  const debounceSearch = debounce(text => {
    console.log(text);
  }, 2000);
  const handleArrow = () => {
    // console.log('hello');
    navigation.navigate('BenefitScreen');
  };
  const handleNavigatorCart = () => {
    navigation.navigate('Cart');
  };
  useEffect(() => {
    const fetchMedicines = async () => {
      const res = await fetch(`${API_APP}/v1/api/medicines`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setMedicines(data.data.medicines);
    };
    fetchMedicines();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.row_title}>
        <Text style={styles.title_medicine}>Mua thuốc</Text>
        <Pressable onPress={handleNavigatorCart}>
          <Image
            source={require('../assets/icon/cart.png')}
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
          platform="default" // or "ios", "android"
          placeholderTextColor="#888" // Customize placeholder color
          containerStyle={styles.searchBarContainer} // Customize container style
          inputContainerStyle={styles.searchBarInputContainer} // Customize input container style
          inputStyle={styles.searchBarInput}
        />
      </View>
      <View style={styles.contaniner_note}>
        <View style={styles.container_icon_note}>
          <Image
            source={require('../assets/icon/note.png')}
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
              source={require('../assets/icon/arrow.png')}
              style={styles.icon_arrow}
            />
          </Pressable>
        </View>
      </View>
      <HorizontalScrollScreen />
      <ListMedicines medicines={medicines} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  row_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title_medicine: {
    fontSize: 20,
    color: 'black',
  },
  img_item_service: {
    width: 30,
    height: 30,
    color: 'white',
  },
  container_seach_bar: {
    marginVertical: 5,
    // padding: 5,
  },
  searchBarContainer: {
    backgroundColor: 'transparent', // Remove background color of the entire search bar
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchBarInputContainer: {
    backgroundColor: '#fff', // Background color of the input area
    borderRadius: 15, // Rounded corners
  },
  searchBarInput: {
    color: '#333', // Text color inside the search bar
  },
  contaniner_note: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#FEF7E6',
    flexDirection: 'row',
    columnGap: 20,
    elevation: 3,
    marginBottom: 5,
  },
  container_icon_note: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    width: 10,
    height: 10,
  },
  text_title_note: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  icon_arrow: {
    color: '#666666',
    width: 15,
    height: 15,
    marginLeft: '15%',
  },
});
