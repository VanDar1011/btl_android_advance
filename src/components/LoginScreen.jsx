import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import GradientButton from './GradientButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {setUserId} from '../utils/userUtils';
const API_APP = process.env['API_APP'];
const test = process.env['TEST']; // lay bien moi truong
// console.log(API_APP, test);
export default function Login({navigation}) {
  const [isSecure, setIsSecure] = useState(true);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };
  const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must contain at least 8 characters'),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onPressSend = async formData => {
    // Perform actions with the validated form data
    // console.log(formData);
    try {
      // const {email, password} = formData;
      // console.log(email, password);
      const res = await fetch(`${API_APP}/v1/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      if (!res.ok) {
        console.log(result.message);
        Alert.alert('Login Failed', `${result.message}`);
        return;
      }
      const userId = result.data.id.toString();
      // await AsyncStorage.setItem('user_id', userId);
      setUserId(userId);
      Alert.alert('Login Success', `${result.message}`);
      navigation.navigate('Home');
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <ImageBackground
    //   source={require('../assets/img/bg.jpg')} // Replace with your image URL
    //   style={styles.backgroundImage}>
    <View style={styles.container}>
      <Image
        source={require('../assets/img/logo_stand.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome back !</Text>
      <View style={styles.container_input}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Email của bạn"
              style={styles.input}
            />
          )}
          name="email"
        />
        <View style={styles.container_error}>
          {errors.email && (
            <Text style={styles.text_error}>{errors.email.message}</Text>
          )}
        </View>
        <View style={styles.container_icon_input}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Password"
                secureTextEntry={isSecure}
                style={[styles.input, styles.input_password]}
              />
            )}
            name="password"
          />
          <View style={styles.icon_eye}>
            <TouchableOpacity onPress={toggleSecureEntry}>
              <Icon
                name={isSecure ? 'eye' : 'eye-slash'}
                size={15}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container_error}>
          {errors.password && (
            <Text style={styles.text_error}>{errors.password.message}</Text>
          )}
        </View>
      </View>
      <View style={styles.container_btn_submit}>
        <GradientButton
          title="Đăng nhập"
          onPress={handleSubmit(onPressSend)}
          // onPress={onPressSend}
        />
      </View>
      <View style={styles.container_link_register}>
        <Text>Chưa có tài khoản ?</Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text_link_register}>Đăng kí</Text>
        </Pressable>
      </View>
    </View>
    // </ImageBackground>
  );
}
const styles = StyleSheet.create({
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover', // or 'stretch', depending on your needs
  //   justifyContent: 'center',
  // },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    marginVertical: 10,
    fontSize: 30,
    color: '#000000',
  },
  container_input: {
    width: '75%',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000000',
    fontSize: 16,
    fontWeight: '400',
  },
  input_password: {
    fontSize: 16,
  },
  container_error: {
    paddingLeft: 20,
    height: 20,
  },
  text_error: {
    color: 'red',
  },
  container_btn_submit: {
    width: '75%',
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_icon_input: {
    position: 'relative',
    width: '100%',
    height: 60,
  },
  icon_eye: {
    poisition: 'absolute',
    left: '87%',
    top: '-65%',
  },
  link_register: {
    color: 'blue',
  },
  container_link_register: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 10,
  },
  text_link_register: {
    font_weight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
  },
});
