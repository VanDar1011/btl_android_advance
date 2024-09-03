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
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GradientButton from './GradientButton';
import {NavigationContainer} from '@react-navigation/native';
const API_APP = process.env['API_APP'];

export default function Register({navigation}) {
  const [isSecure, setIsSecure] = useState(true);
  const [isSecureConfirm, setIsSecureConfirm] = useState(true);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };
  const toggleSecureEntryConfirm = () => {
    setIsSecureConfirm(!isSecureConfirm);
  };
  const schema = yup.object().shape({
    user_name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must contain at least 8 characters')
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,26}$/,
        `Must have number, uppercase, lowercase, non-alpha numeric number`,
      ),
    confim_password: yup
      .string()
      .required('Confirm_password is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      user_name: '',
      email: '',
      password: '',
      confim_password: '',
    },
  });
  const onPressSend = async formData => {
    // console.log(formData);
    try {
      const {user_name, email, password} = formData;
      const data = {name: user_name, email, password};
      // console.log(data);
      const res = await fetch(`${API_APP}/v1/api/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        const result = await res.json();
        console.log(result.message);
        Alert.alert('Register Failed', `${result.message}`);
        return;
      }
      const result = await res.json();
      Alert.alert('Register Success', `${result.message}`);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_logo}>
        <Image
          source={require('../assets/img/logo_stand.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.text_title}>Tạo Tài Khoản</Text>
      <View style={styles.container_form}>
        <View style={styles.container_input}>
          <Text>Tên</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Tên của bạn"
                style={styles.input}
              />
            )}
            name="user_name"
          />
          <View style={styles.container_error}>
            {errors.user_name && (
              <Text style={styles.text_error}>{errors.user_name.message}</Text>
            )}
          </View>
          <Text style={styles.text_label}>Email</Text>
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
          <Text style={styles.text_label}>Mật khẩu</Text>
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
                  // placeholder="Password"
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
          <Text style={styles.text_label}>Nhập lại mật khẩu</Text>
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
                  // placeholder="Confirm Password"
                  secureTextEntry={isSecureConfirm}
                  style={styles.input}
                />
              )}
              name="confim_password"
              // confim_password
            />
            <View style={styles.icon_eye}>
              <TouchableOpacity onPress={toggleSecureEntryConfirm}>
                <Icon
                  name={isSecureConfirm ? 'eye' : 'eye-slash'}
                  size={15}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container_error}>
            {errors.confim_password && (
              <Text style={styles.text_error}>
                {errors.confim_password.message}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.container_btn_submit}>
          <GradientButton
            title="Đăng kí"
            onPress={handleSubmit(onPressSend)}
            // onPress={onPressSend}
          />
        </View>
        <View style={styles.container_link_register}>
          <Text>Đã tài khoản ?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text_link_register}>Đăng nhập</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  container_form: {
    alignItems: 'center',
  },
  container_logo: {
    flexDirection: 'row-reverse',
  },
  logo: {
    width: 70,
    height: 70,
  },
  text_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  container_input: {
    width: '75%',
    justifyContent: 'center',
    // alignItems: 'center',
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
    fontSize: 20,
  },
  container_error: {
    paddingLeft: 10,
    height: 20,
  },
  text_error: {
    color: 'red',
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
  container_btn_submit: {
    width: '75%',
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_label: {
    marginTop: 10,
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
