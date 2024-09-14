import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f9f9f9', // Slight background color for header
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  contentContainer: {
    flex: 1, // Allows the content to take the remaining space and become scrollable
    padding: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});
export default styles;
