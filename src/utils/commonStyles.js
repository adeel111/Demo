import {StyleSheet} from 'react-native';
import theme from '../theme';

// Button Styles
export const bStyle = (
  width,
  padding = 10,
  radius = 5,
  marginTop = 10,
  marginBottom = 0,
) =>
  StyleSheet.create({
    buttonContainerStyle: {
      width: width,
      padding: padding,
      borderRadius: radius,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: marginTop,
      marginBottom: marginBottom,
      backgroundColor: theme.colors.primaryColor,
    },
  });

//   Button Text Styles
export const btStyle = (color = theme.colors.whiteColor) =>
  StyleSheet.create({
    buttonTextStyle: {
      color: color,
      fontSize: theme.fontSize.buttonTextFont,
      fontFamily: 'sans-serif-medium',
    },
  });

//   Input view container Styles
export const inputContainerStyle = (width, margin = 10) =>
  StyleSheet.create({
    inputViewContainerStyle: {
      flexDirection: 'row',
      width: width,
      alignSelf: 'center',
      borderRadius: 5,
      margin: margin,
      borderWidth: 1,
      backgroundColor: theme.colors.whiteColor,
      borderColor: theme.colors.primaryColor,
    },
  });

//   icon styles
export const iconsStyle = (
  fontSize = 20,
  padding = 10,
  color = theme.colors.grayColor,
) =>
  StyleSheet.create({
    iconsStyle: {
      fontSize: fontSize,
      padding: padding,
      color: color,
      alignSelf: 'center',
    },
  });

// divider style
export const dividerStyle = (
  width = '100%',
  height = 1,
  top = 0,
  bottom = 0,
  color = theme.colors.lightGrayColor,
) =>
  StyleSheet.create({
    dividerStyle: {
      width: width,
      height: height,
      marginTop: top,
      marginBottom: bottom,
      backgroundColor: color,
    },
  });
