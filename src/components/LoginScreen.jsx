import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import GradientButton from './GradientButton';
import axios from 'axios';
const API_APP = process.env['API_APP'];
const test = process.env['TEST']; // lay bien moi truong
// console.log(API_APP, test);
export default function Login() {
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
      const {email, password} = formData;
      // console.log(email, password);
      // const res = await fetch(`http://localhost:4000/v1/api/auth/login`, {
      //   method: 'POST',
      //   body: JSON.stringify({email, password}),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // const res = await axios.post('http://localhost:4000/v1/api/auth/login', {
      //   email,
      //   password,
      // });
      const res = await fetch(`${API_APP}/test`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // const res = await fetch('http://192.168.0.3:4000/test', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      if (!res.ok) {
        console.log('Error');
        return;
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ImageBackground
      source={require('../assets/img/bg.jpg')} // Replace with your image URL
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Đăng nhập tài khoản</Text>
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
                placeholder="Email"
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
                  style={styles.input}
                />
              )}
              name="password"
            />
            <View style={styles.icon_eye}>
              <TouchableOpacity onPress={toggleSecureEntry}>
                <Icon
                  name={isSecure ? 'eye' : 'eye-slash'}
                  size={20}
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
            // onPress={handleSubmit(onPressSend)}
            onPress={onPressSend}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch', depending on your needs
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    marginVertical: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  container_input: {
    width: '85%',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    margin: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  container_error: {
    paddingLeft: 20,
    height: 20,
  },
  text_error: {
    color: 'red',
  },
  container_btn_submit: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_icon_input: {
    position: 'relative',
    width: '100%',
    height: 80,
  },
  icon_eye: {
    poisition: 'absolute',
    left: '87%',
    top: '-60%',
  },
});
