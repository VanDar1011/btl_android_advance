import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import fetchMedicinesCategories from '../utils/medicines/fetchMedicineCategories';
import ItemCategory from './ItemCategory';
import fetchMedicinesByCategory from '../utils/medicines/fectchMedicinesByCategory';
import fetchMedicines from '../utils/medicines/fetchMedicines';
const HorizontalScroll = ({setMedicines, setIdCategory}) => {
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const handlePressAll = async name => {
    setSelectedOption(name);
    try {
      await fetchMedicines(setMedicines);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };
  const handlePress = async (name, id) => {
    console.log(name, id);
    setIdCategory(id);
    setSelectedOption(name);
    try {
      await fetchMedicinesByCategory(id, setMedicines);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };
  useEffect(() => {
    fetchMedicinesCategories(setCategories);
  }, []);
  // useEffect(() => {
  //   console.log(categories);
  // }, [categories]);
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <Pressable
          style={[
            styles.button,
            selectedOption === 'all' && styles.activeButton,
          ]}
          onPress={() => handlePressAll('all')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'all' && styles.activeButtonText,
            ]}>
            All
          </Text>
        </Pressable>
        {categories.map((item, index) => {
          return (
            <ItemCategory
              key={index}
              category={item}
              handlePress={handlePress}
              selectedOption={selectedOption}
            />
          );
        })}
        {/* <Pressable
          style={[
            styles.button,
            selectedOption === 'option1' && styles.activeButton,
          ]}
          onPress={() => handlePress('option1')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'option1' && styles.activeButtonText,
            ]}>
            Option 1
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedOption === 'option2' && styles.activeButton,
          ]}
          onPress={() => handlePress('option2')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'option2' && styles.activeButtonText,
            ]}>
            Option 2
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedOption === 'option3' && styles.activeButton,
          ]}
          onPress={() => handlePress('option3')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'option3' && styles.activeButtonText,
            ]}>
            Option 3
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedOption === 'option4' && styles.activeButton,
          ]}
          onPress={() => handlePress('option4')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'option4' && styles.activeButtonText,
            ]}>
            Option 4
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedOption === 'option5' && styles.activeButton,
          ]}
          onPress={() => handlePress('option5')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'option5' && styles.activeButtonText,
            ]}>
            Option 5
          </Text>
        </Pressable>{' '} */}
        {/* Add more Pressable components as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    height: 60,
  },
  contentContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  activeButton: {
    backgroundColor: '#59c606',
  },
  activeButtonText: {
    color: '#fff',
  },
});

export default HorizontalScroll;
