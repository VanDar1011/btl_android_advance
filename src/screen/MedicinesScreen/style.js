import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  row_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title_medicine: {
    fontSize: 20,
    color: 'black',
  },
  img_item_service: {
    width: 30,
    height: 30,
    color: 'white',
  },
  container_seach_bar: {
    marginVertical: 5,
    // padding: 5,
  },
  searchBarContainer: {
    backgroundColor: 'transparent', // Remove background color of the entire search bar
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchBarInputContainer: {
    backgroundColor: '#fff', // Background color of the input area
    borderRadius: 15, // Rounded corners
  },
  searchBarInput: {
    color: '#333', // Text color inside the search bar
  },
  contaniner_note: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#FEF7E6',
    flexDirection: 'row',
    columnGap: 20,
    elevation: 3,
    marginBottom: 5,
  },
  container_icon_note: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    width: 10,
    height: 10,
  },
  text_title_note: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  icon_arrow: {
    color: '#666666',
    width: 15,
    height: 15,
    marginLeft: '15%',
  },
});
export default styles;
