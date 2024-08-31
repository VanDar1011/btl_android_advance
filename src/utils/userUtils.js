import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserId = async () => {
  try {
    const userId = await AsyncStorage.getItem('@user_id');
    if (userId !== null) {
      console.log('User ID:', userId);
      // Do something with the user ID, e.g., navigate to the home screen
    }
    return userId;
  } catch (e) {
    console.error('Failed to retrieve the user ID.', e);
  }
};
const setUserId = async userId => {
  try {
    await AsyncStorage.setItem('user_id', userId);
    console.log('User ID saved successfully');
  } catch (e) {
    console.error('Failed to save the user ID.', e);
  }
};
export {setUserId, getUserId};
