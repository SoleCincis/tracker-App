import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ColorValue from './ColorValue';
import { Button, ColorBox } from '../components';

export default function ColorGeneratorScreen() {


  return (
    <View style={styles.container}>
      <ColorBox red />
      <ColorValue red />
      <ColorBox green />
      <ColorValue green />
      <ColorBox blu />
      <ColorValue blu />
      <Button title="Random Value"  />
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


