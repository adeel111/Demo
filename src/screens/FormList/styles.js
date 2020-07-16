import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../theme';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    display: 'flex',
  },
  cardContainer: {
    elevation: 2,
    shadowOpacity: 2,
    margin: 15,
    // padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  cardViewContainer: {
    margin: 5,
  },
  titleStyle: {
    flex: 0.5,
    fontSize: 14,
    margin: 5,
    marginBottom: 3,
    fontFamily: 'sans-serif-medium',
    color: theme.colors.grayColor,
  },
  valueStyle: {
    flex: 0.5,
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 10,
    fontFamily: 'sans-serif-medium',
    color: theme.colors.blackColor,
  },
});

export default styles;
