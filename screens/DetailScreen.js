import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function DetailScreen({  route }) {
  const { title, edition_count, authors } = route.params;

  const author = authors.map((author) => {
    return author.name

  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{author.length > 1 ? `Authors: ${author}, ` : `Author: ${author}`}</Text>
      <Text style={styles.subtitle}>Edition: {edition_count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontStyle: "italic",
    fontSize: 30
  },
  subtitle: {
    fontSize: 15
  }
});
