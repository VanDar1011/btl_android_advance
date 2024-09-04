import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';

const HorizontalScrollScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = option => {
    setSelectedOption(option);
  };

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
          onPress={() => handlePress('all')}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'all' && styles.activeButtonText,
            ]}>
            All
          </Text>
        </Pressable>
        <Pressable
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
        </Pressable>
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

export default HorizontalScrollScreen;
