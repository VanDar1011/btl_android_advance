import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  row_logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  logo_doctor: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  text_profile: {
    paddingTop: 10,
    fontSize: 22,
    color: '#006980',
  },
  text_hello: {
    fontSize: 16,
    color: '#4CD20A',
  },

  container_row_appoiment: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 5,
  },
  row_appoiment: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 25,
    borderRadius: 20,
    backgroundColor: '#4CD20A',
  },
  text_row_appoiment: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container_button_appoiment: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 100,
    padding: 10,
  },
  text_button_appoiment: {
    color: '#4DD409',
    fontSize: 16,
  },
  service: {},
  service_title: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006980',
  },
  service_list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item_service: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#cccccc',
    zIndex: 1,
  },
  img_item_service: {
    width: 40,
    height: 40,
  },
  name_item_service: {
    textAlign: 'center',
    color: '#00687E',
  },
  appoiment_details: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: 'red',
  },
  row_appoiment_details_title: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appoiment_details_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006980',
  },
  btn_details: {
    color: '#006D77',
    // fontWeight: 200,
  },
  // sidebar
  menuIcon: {
    padding: 10,
  },
  iconText: {
    color: '#fff',
    fontSize: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 5,
  },
});
export default styles;
