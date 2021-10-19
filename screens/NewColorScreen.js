import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NewColorScreen({ navigation, route}) {
  const { newBackgroundColor } = route.params;
  console.warn(newBackgroundColor.backgroundColor)
  return (
    <View style={[styles.container, { backgroundColor: newBackgroundColor} ]}>
      <Text>This screen is nested! Cool.. but why is my background color undefined? </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
