import React, {Component} from 'react';
import {TextInput, Platform} from 'react-native';
import {PropTypes} from 'prop-types';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(
        props.inputType === 'text' ||
        props.inputType === 'email' ||
        props.inputType === 'number' ||
        props.inputType === 'number-pad'
      ),
    };
  }

  render() {
    const {
      placeholder,
      onChangeText,
      fontSize,
      textColor,
      paddingLeft,
      keyboardType,
    } = this.props;
    const {secureInput} = this.state;

    return (
      <TextInput
        autoCorrect={false}
        style={{
          width: Platform.OS === 'ios' ? '80%' : '80%',
          height: Platform.OS === 'ios' ? 50 : 45,
          color: textColor,
          // textAlign: 'center',
        }}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        autoCapitalize={'none'}
        secureTextEntry={secureInput}
        onChangeText={onChangeText}
        fontSize={fontSize}
        paddingLeft={paddingLeft}
        keyboardType={keyboardType}
      />
    );
  }
}

InputField.propTypes = {
  textColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
