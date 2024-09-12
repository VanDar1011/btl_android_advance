import {ToastAndroid} from 'react-native';
const toastCustom = message => {
  return ToastAndroid.showWithGravity(
    `${message}`,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
};
export default toastCustom;
