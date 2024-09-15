// ProfileScreen.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or any other icon set
import styles from './style';
import {deleteProfile} from '../../utils/user/profileUser';
import {clearProfileRedux} from '../../store/slice/profileSlice';
import {useDispatch, useSelector} from 'react-redux';
const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await deleteProfile();
    dispatch(clearProfileRedux());
    navigation.navigate('Login');
  };

  const [userName, setUserName] = useState('user1');
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(userName);

  // Function to handle updating the name
  const handleUpdateName = () => {
    setUserName(inputValue);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Icon name="account-circle" size={100} color="#4F8EF7" />

        {/* Editable name field */}
        {isEditing ? (
          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.input}
          />
        ) : (
          <Text style={styles.userName}>{userName}</Text>
        )}

        <Text style={styles.userEmail}>user1@gmail.com</Text>

        {/* Update Name Button */}
        {isEditing ? (
          <TouchableOpacity
            style={styles.updateButton}
            onPress={handleUpdateName}>
            <Text style={styles.updateText}>Cập nhật tên</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}>
            <Text style={styles.editText}>Sửa tên</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
