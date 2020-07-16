import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: theme.colors.midBlue,
    padding: 10,
    marginBottom: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  titleTextStyle: {
    fontSize: 22,
    margin: 16,
    textAlign: 'center',
    fontFamily: 'serif',
    color: theme.colors.whiteColor,
  },
  simpletextStyle: {
    marginBottom: 16,
    fontSize: 15,
    width: SCREEN_WIDTH / 1.2,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
    color: theme.colors.whiteColor,
  },
  headingTextStyle: {
    flex: 0.5,
    fontSize: 14,
    fontFamily: 'sans-serif-medium',
    color: theme.colors.textColor,
  },
  bottomContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
  },
});

export default styles;
