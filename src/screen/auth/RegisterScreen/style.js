import {StyleSheet} from 'react-native';
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
  checkboxContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  checkboxText: {
    fontSize: 16,
    color: '#333',
  },
  container_check: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
