import PropTypes from 'prop-types';
import React from 'react';
import { Animated, StyleSheet, TouchableHighlight } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';

export const Button = ({ title, onPress }) => {

  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({ inputRange, outputRange });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
  <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
    <TouchableHighlight onPressInn={onPressIn}
        onPressOut={onPressOut}
        activeOpacity={1}>
      <RNEButton
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        containerStyle={styles.containerStyle}
        onPress={onPress}
        title={title}
        type="outline"
      />
    </TouchableHighlight >
  </Animated.View>

  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor:'#eaedf1',
    borderColor: '#000000',
    borderRadius: 50
  },
  titleStyle: {
    color: '#000000'
  }
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
