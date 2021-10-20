import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ColorBox } from '../components';

export default function ColorGeneratorScreen() {



  return (


    <View style={styles.colorsContainer}>
      <ColorBox red />
      <ColorBox green />
      <ColorBox blu />
    </View>



  );
}

const styles = StyleSheet.create({
  colorsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#fafafa',
    paddingHorizontal: 100,
    marginHorizontal: 30,
  }
});
