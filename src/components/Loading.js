import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import {PropTypes} from 'prop-types';
import theme from '../theme';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {text} = this.props;
    return (
      <Modal visible animationType={'fade'} transparent>
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator color={theme.colors.primaryColor} size={50} />
            <Text style={styles.textStyle}>{text}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  loaderContainer: {
    width: 150,
    height: 140,
    borderRadius: 15,
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  textStyle: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
    color: theme.colors.primaryColor,
  },
});

export default Loading;
