import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from 'react-native';

import fetchArticles from '../../utils/articles/fetchArticles';
import ItemArticles from '../../components/ItemArticles';
const ArticlesScreen = ({navigation}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Giả lập fetch dữ liệu từ API
  useEffect(() => {
    fetchArticles(setArticles, setLoading);
  }, []);

  const renderArticle = ({item}) => (
    <ItemArticles item={item} navigation={navigation} />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Bài viết</Text>
      <View style={styles.containerList}>
        <FlatList
          data={articles}
          keyExtractor={item => item.id.toString()}
          renderItem={renderArticle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  containerList: {
    flex: 1,
  },
});

export default ArticlesScreen;
