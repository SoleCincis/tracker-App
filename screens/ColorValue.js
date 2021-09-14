import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';

export default function ColorValue({ red, green, blu}) {

  const [RedValue, setRedValue] = useState(5);
  const [GreenValue, setGreenValue] = useState(5);
  const [BluValue, setBluValue] = useState(5);

  const colorValue = red ? RedValue : green ? GreenValue : BluValue;

  const plusTen = () => {

    if (red) {
      return setRedValue(colorValue >= 255 ? 255 : colorValue + 10);
    }
    if (green) {
      return setGreenValue(colorValue >= 255 ? 255 : colorValue + 10);
    }
    if (blu) {
      return setBluValue(colorValue >= 255 ? 255 : colorValue + 10);
    }
  }

  const minusTen = () => {

    if (colorValue < 0) {
      return 0
    }
    if (red) {
      return setRedValue(colorValue - 10);
    }
    if (green) {
      return setGreenValue(colorValue - 10);
    }
    if (blu) {
      return setBluValue(colorValue - 10);
    }
  }

  // const randomValue = () => {

  //   setRedValue(Math.floor(Math.random() * 256) + 1);

  //   setGreenValue (Math.floor(Math.random() * 256) + 1);

  //   setBluValue (Math.floor(Math.random() * 256) + 1);

  //   console.log('red', randomValueRed);
  //   console.log('green', randomValueGreen);
  //   console.log('blu', randomValueBlu);
  // }





  return (

    <View style={styles.valueContainer}>
      <Button title="-10" onPress={minusTen} />
      <Text style={styles.value}>{colorValue}</Text>
      <Button title="+10" onPress={plusTen} />
    </View>

  );
};

const styles = StyleSheet.create({
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

ColorValue.propTypes = {
  red: PropTypes.bool,
  green: PropTypes.bool,
  blu: PropTypes.bool,
  randomValue: PropTypes.func

};
