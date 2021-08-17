import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Button, ColorBox } from '../components';

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


    <View style={styles.colorsContainer}>
      <ColorBox red />
      <View style={styles.buttonsContainer}>
        <Button title="-10" onPress={minusTen} />
        <Button title="+10" onPress={plusTen} />
      </View>
      <ColorBox green />
      <View style={styles.buttonsContainer}>
        <Button title="-10" onPress />
        <Button title="+10" onPress />
      </View >
      <ColorBox blu />
      <View style={styles.buttonsContainer}>
        <Button title="-10" onPress />
        <Button title="+10" onPress />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="random value" />
        <Button title="generated color" />
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  colorsContainer: {
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
