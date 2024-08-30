import React from 'react';
import {Text, TouchableOpacity, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.btn_submit}>
      <LinearGradient
        colors={['#2c3e50', '#34495e', '#3b5998', '#2c3e50', '#192f6a']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn_submit: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GradientButton;
