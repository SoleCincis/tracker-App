import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Button, ColorBox, ValueBox } from '../components';

export default function ColorGeneratorScreen() {

  const plusTen = (value) => {
  !0 <= value >= 255
    let increasedValue = value + 10
    return increasedValue

  };

  const minusTen = (value) => {
    !0 <= value >= 255
    let decreased = value - 10
    return decreased

  };

  return (


    <View style={styles.container}>
      <ColorBox red />
      <ValueBox />
      <ColorBox green />
      <ValueBox />
      <ColorBox blu />
      <ValueBox />
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(221, 221, 221)',
    paddingHorizontal: 100,
    marginHorizontal: 30,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
