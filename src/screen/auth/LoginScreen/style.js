import {StyleSheet} from 'react-native';

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
export default styles;
