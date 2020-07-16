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
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  titleStyle: {
    flex: 0.5,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'sans-serif-medium',
    color: theme.colors.grayColor,
  },
  valueStyle: {
    flex: 0.5,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'sans-serif-medium',
    color: theme.colors.blackColor,
  },
});

export default styles;
