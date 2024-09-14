import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import GradientButton from '../../../components/GradientButton';
import {setProfile} from '../../../utils/user/profileUser';
const API_APP = process.env['API_APP'];
const test = process.env['TEST']; // lay bien moi truong
// console.log(API_APP, test);
export default function LoginScreen({navigation}) {
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
      const username = result.data.name.toString();
      await setProfile(userId, username);
      Alert.alert('Login Success', `${result.message}`);
      navigation.navigate('Home');
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
        source={require('../../../assets/img/logo_stand.png')}
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
