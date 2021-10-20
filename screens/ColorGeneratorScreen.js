import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function ColorGeneratorScreen() {



  return (
    <View style={styles.colorsContainer}>
      <Ionicons name="md-color-palette" size={44} color="rgb(255, 0, 0)" />
      <Ionicons name="md-color-palette" size={44} color="rgb(0, 255, 0)" />
      <Ionicons name="md-color-palette" size={44} color="rgb(0, 0, 255)" />
    </View>
  );
}

const styles = StyleSheet.create({
  colorsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    marginHorizontal: 30,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
