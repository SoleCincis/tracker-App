import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';

export const Button = ({ title, onPress }) => {

  return (
    <RNEButton
      buttonStyle={styles.buttonStyle}
      onPress={onPress}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    color = '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1
  },

  containerStyle: {
    marginBottom: 21,
  }
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

