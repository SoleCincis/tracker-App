import React, { useState, useEffect } from 'react';
import { AsyncStorage, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';

import TabBarIcon from '../components/TabBarIcon';
import { MonoText } from '../components/StyledText';
const timerIcon = require('../assets/images/hourglass.png')


const TimerScreen = function () {
return (
<View >
  <View style={styles.titleContainer}>
    <MonoText style={styles.title} > Timer </MonoText>
    <Image style={styles.timerIcon} source={timerIcon}></Image>
  </ View >
    <View style={styles.inputContainer}>
      <Input placeholder='Type of' onChangeText={() => { }}  />
      <TouchableOpacity>
    <TabBarIcon name="md-add" />
      </TouchableOpacity>
    </View >
</View >
)
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal:30
  },
  title: {
    textAlign: 'center',
    color: '#4ba9bc',
    fontSize: 30
  },
  timerIcon: {
    alignSelf: 'center',
    width: 30,
    height: 30
}})


export default TimerScreen
