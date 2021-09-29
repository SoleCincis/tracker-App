import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button, ButtonMinus, ButtonPlus, ColorBox, ValueBox } from '../components';

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

  const plusTenRed = () => setRedValue(RedValue + 10);
  if (RedValue > 255) {
    setRedValue(255)
  }
  const minusTenRed = () => setRedValue(RedValue - 10);
  if (RedValue < 0) {
    setRedValue(0)
  }

  const plusTenGreen = () => setGreenValue(GreenValue + 10);
  if (GreenValue > 255) {
    setGreenValue(255)
  }
  const minusTenGreen = () => setGreenValue(GreenValue - 10);
  if (GreenValue < 0) {
    setGreenValue(0)
  }


  const plusTenBlu = () => setBluValue(BluValue + 10);
  if (BluValue > 255) {
    setBluValue(255)
  }
  const minusTenBlu = () => setBluValue(BluValue - 10);
  if (BluValue < 0) {
    setBluValue(0)
  }



  return (


    <View style={[styles.container, { backgroundColor: GeneratedColor } ]}>
      <ColorBox red />
      <View style={styles.valueContainer}>
        <Button title="-10" onPress={minusTenRed} />
        <Text style={styles.value}>{RedValue}</Text>
        <Button title="+10" onPress={plusTenRed} />
      </View>
      <ColorBox green />
      <View style={styles.valueContainer}>
        <Button title="-10" onPress={minusTenGreen} />
        <Text style={styles.value}>{GreenValue}</Text>
        <Button title="+10" onPress={plusTenGreen} />
      </View>
      <ColorBox blu />
      <View style={styles.valueContainer}>
        <Button title="-10" onPress={minusTenBlu} />
        <Text style={styles.value}>{BluValue}</Text>
        <Button title="+10" onPress={plusTenBlu} />
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

