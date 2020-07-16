import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

export const Loading = ({visible}) => (
  <ActivityIndicator
    animating
    color="red"
    style={visible ? loader.centering : loader.hideIndicator}
    size="large"
  />
);
const loader = StyleSheet.create({
  centering: {
    flex: 1,
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: 'transparent',
    opacity: 0.8,
  },
  hideIndicator: {
    position: 'absolute',
    top: -100,
    opacity: 0,
  },
});
