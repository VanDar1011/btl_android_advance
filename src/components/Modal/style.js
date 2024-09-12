import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buyMedicineButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  closeModalButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#FF5722',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  container_btn: {
    flexDirection: 'row',
    columnGap: 20,
  },
  container_quantity: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default styles;
