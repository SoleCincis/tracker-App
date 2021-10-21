import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button,  ColorBox } from '../components';


  const plusTen = (value) => {
    return Math.min(255, value + 10)
  };
  const minusTen = (value) => {
    return Math.max(0, value - 10)
  };
  const randomValue = () => {
  return Math.floor(Math.random() * 256) + 1
  };


export default function ColorGeneratorScreen({ navigation, props }) {

  const [RedValue, setRedValue] = useState(randomValue);
  const [GreenValue, setGreenValue] = useState(randomValue);
  const [BluValue, setBluValue] = useState(randomValue);

  const rgbColor = {
    backgroundColor: `rgb(${RedValue}, ${GreenValue}, ${BluValue} )`
  }

  const setRandomValue = () => {
    setRedValue(randomValue);
    setGreenValue(randomValue);
    setBluValue(randomValue);
  }

    return (
      <View style={[styles.container, { backgroundColor: props }]}>
      <ColorBox red />
        <View style={styles.valueContainer}>
          <Button title="-10" onPress={() => setRedValue(minusTen)} />
          <Text style={styles.value}>{RedValue}</Text>
          <Button title="+10" onPress={() => setRedValue(plusTen)} />
      </View>
      <ColorBox green />
      <View style={styles.valueContainer}>
          <Button title="-10" onPress={() => setGreenValue(minusTen)} />
        <Text style={styles.value}>{GreenValue}</Text>
          <Button title="+10" onPress={() => setGreenValue(plusTen)} />
      </View>
      <ColorBox blue />
      <View style={styles.valueContainer}>
          <Button title="-10" onPress={() => setBluValue(minusTen)} />
        <Text style={styles.value}>{BluValue}</Text>
        <Button title="+10" onPress={() => setBluValue(plusTen)} />
      </View>
      <View style={styles.buttonContainer}>
          <Button title="Random Value" onPress={setRandomValue}/>
          <Button title="New color" onPress={() => navigation.push('New color', rgbColor)} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  valueContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  value: {
    fontSize: 30,
    fontStyle: 'normal',
    paddingHorizontal: 15
  }
});

