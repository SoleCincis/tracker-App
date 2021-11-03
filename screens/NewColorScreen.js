import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ColorGeneratorScreen from './ColorGeneratorScreen';

export default function NewColorScreen({ navigation, route}) {
  const { backgroundColor } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor} ]}>
      <ColorGeneratorScreen navigation={navigation}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
