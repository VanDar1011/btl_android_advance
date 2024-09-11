import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
  },
  medicineImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginVertical: 15,
    resizeMode: 'cover',
  },
  detailContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  medicineName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  medicineDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 22,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  newPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CD20A',
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 20,
    color: '#B22222',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA41B',
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default styles;
