import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './style';
export default function ArcilesDetailsScreen({route}) {
  const {articles} = route.params;
  console.log('title', articles.title);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{articles.title}</Text>
        <Text style={styles.description}>{articles.description}</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.content}>{articles.content}</Text>
      </ScrollView>
    </View>
  );
}
