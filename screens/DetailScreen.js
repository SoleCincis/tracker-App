import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function DetailScreen({ navigation, route }) {
  // const {  } = route.params;
  // console.warn()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book title</Text>
      <Text style={styles.subtitle}>Authors: name, name, name..</Text>
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
