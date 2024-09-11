import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
export default function ItemCategory({selectedOption, category, handlePress}) {
  const {name, id} = category;
  //   console.log(category);
  return (
    <Pressable
      style={[styles.button, selectedOption === name && styles.activeButton]}
      onPress={() => handlePress(name, id)}>
      <Text
        style={[
          styles.buttonText,
          selectedOption === name && styles.activeButtonText,
        ]}>
        {name}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
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
