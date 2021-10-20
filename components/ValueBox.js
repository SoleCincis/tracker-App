import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from './Button';

export default function ValueBox() {

  const [value, setValue] = useState(0);


  const plusTen = (value) => {
    console.warn('before', value);
    setValue (value + 10)
    console.warn('plusTen', value);
  };

  const minusTen = (value) => {
    // !0 <= value >= 255
    setValue(value - 10)
  };


  return (
    <View style={styles.container}>

      <Button title="-10" onPress={plusTen} />
      <View>
        <Text style={styles.value}>{value}</Text>
      </View>
      <Button title="+10" onPress={minusTen} />

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
