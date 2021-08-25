import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Button, ButtonMinus, ButtonPlus, ColorBox, ValueBox } from '../components';

export default function ColorGeneratorScreen() {

  const [value, setValue] = useState(5);


  const plusTen = () => setValue(value + 10);
  if (value > 255) {
   setValue(255)
  }
  const minusTen = () => setValue(value - 10);
  if (value < 0) {
    setValue(0)
  }


  return (


    <View style={styles.container}>
      <ColorBox red />
      <View style={styles.valueContainer}>
        <Button title="-10" onPress={minusTen} />
        <Text style={styles.value}>{value}</Text>
        <Button title="+10" onPress={plusTen} />
      </View>
      <ColorBox green />
      <View style={styles.valueContainer}>
        <Button title="-10" onPress={minusTen} />
        <Text style={styles.value}>{value}</Text>
        <Button title="+10" onPress={plusTen} />
      </View>
      <ColorBox blu />
      <View style={styles.valueContainer}>
        <Button title="-10" onPress={minusTen} />
        <Text style={styles.value}>{value}</Text>
        <Button title="+10" onPress={plusTen} />
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  titleStyle: {
    color: '#000000'
  },
  value: {
    fontSize: 30,
    fontStyle: 'normal',
    paddingHorizontal: 15
  }
});
