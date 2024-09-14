import React from 'react';
import {Pressable, Text, StyleSheet, Image, View} from 'react-native';
export default function ItemArticles({item, navigation}) {
  // console.log(item);
  return (
    <Pressable
      style={styles.articleItem}
      onPress={() => navigation.navigate('ArctilesDetails', {articles: item})}>
      <View style={styles.containerImg}>
        <Image
          source={{uri: item.image}}
          style={styles.articleImage}
          resizeMode="cover"
        />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleDescription}>{item.description}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  articleItem: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Android shadow
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  articleDescription: {
    fontSize: 14,
    color: '#666',
  },
});
