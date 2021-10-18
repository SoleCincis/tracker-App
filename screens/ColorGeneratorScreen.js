import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button,  ColorBox } from '../components';

const plusTen = (value) => {
  return value <= 245 ? value + 10 : value
};
const minusTen = (value) => {
  return value >= 10 ? value - 10 : value
  };


export default function ColorGeneratorScreen() {

  const [RedValue, setRedValue] = useState(5);
  const [GreenValue, setGreenValue] = useState(5);
  const [BluValue, setBluValue] = useState(5);
  const [GeneratedColor, setGeneratedColor] = useState("rgb(255, 255, 255)");


  const generatedBackgroundColor = () => {
    setGeneratedColor(`rgb(${RedValue}, ${GreenValue}, ${BluValue} )`)
  }

  const randomValue = () => {

    setRedValue(Math.floor(Math.random() * 256) + 1);

    setGreenValue (Math.floor(Math.random() * 256) + 1);

    setBluValue (Math.floor(Math.random() * 256) + 1);

  }

    return (

    <View style={[styles.container, { backgroundColor: GeneratedColor } ]}>
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
        <Button title="Random Value" onPress={randomValue}/>
        <Button title="New color" onPress={generatedBackgroundColor} />
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
    color: '#000'
  },
  value: {
    fontSize: 30,
    fontStyle: 'normal',
    paddingHorizontal: 15
  }
});

