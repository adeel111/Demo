import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Platform} from 'react-native';
import {Header} from 'react-native-elements';
import PropTypes from 'prop-types';
import theme from '../../src/theme';

const AppHeader = ({
  right,
  left,
  title,
  onRightPress,
  onLeftPress,
  backgroundColor,
  borderBottomWidth,
  placement,
}) => {
  const {iconStyle, titleStyle, containerStyle} = styles;
  return (
    <Header
      leftComponent={
        <TouchableOpacity onPress={onLeftPress}>{left}</TouchableOpacity>
      }
      centerComponent={{text: title, style: titleStyle}}
      placement={placement}
      containerStyle={[containerStyle, {borderBottomWidth}]}
      centerContainerStyle={titleStyle}
      rightComponent={
        <TouchableOpacity onPress={onRightPress}>{right}</TouchableOpacity>
      }
    />
  );
};

const margin = 10;
const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    margin,
    tintColor: theme.colors.midBlue,
  },
  titleStyle: {
    fontSize: 20,
    color: theme.colors.midBlue,
    fontFamily: 'sans-serif-medium',
  },
  containerStyle: {
    paddingTop: 0,
    height: Platform.select({
      android: 56,
      default: 45,
      ios: 60,
    }),
    borderBottomWidth: 0,
    backgroundColor: theme.colors.whiteColor,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
});

AppHeader.PropTypes = {
  right: PropTypes.any,
  left: PropTypes.any,
  title: PropTypes.string,
  onRightPress: PropTypes.func,
  onLeftPress: PropTypes.func,
  transparent: PropTypes.bool,
};

export {AppHeader};
