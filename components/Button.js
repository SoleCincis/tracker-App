import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';

export const Button = ({ title, onPress }) => {

  return (
    <RNEButton
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
      containerStyle={styles.containerStyle}

      title={title}
      type="outline"
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: '#000000',
    borderRadius: 50
  },
  titleStyle: {
    color: '#000000'
  }
});



