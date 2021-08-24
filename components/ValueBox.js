import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from './Button';

export const ValueBox = () => {

  return (
    <View style={styles.container}>

      <Button title="-10" onPress />
      <View>
        <Text style={styles.value}>10</Text>
      </View>
      <Button title="+10" onPress />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginHorizontal: 5
  }
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


// const plusTen = (value) => {
  //   !0 <= value >= 255
  //   let increasedValue = value + 10
  //   return increasedValue

  // };

  // const minusTen = (value) => {
  //   !0 <= value >= 255
  //   let decreased = value - 10
  //   return decreased

  // };
