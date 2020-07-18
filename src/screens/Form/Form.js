import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import firebaseService from '../../services/firebase';
import uuid from 'react-native-uuid';
import Snackbar from 'react-native-snackbar';
import InputField from '../../components/InputField';
import styles from './styles';
import theme from '../../theme';
import {bStyle, btStyle, inputContainerStyle} from '../../utils/commonStyles';
import Loading from '../../components/Loading';

class Form extends Component {
  state = {
    date: '',
    section: '',
    township: '',
    range: '',
    gridPoint: '',
    pointEstablished: '',
    originalEntry: '',
    originalMonument: '',
    pointRecovered: '',
    monumentFound: '',
    moonSet: '',
    ties: '',
    witnesses: '',
    loading: false,
  };

  submitForm = () => {
    const {
      date,
      section,
      township,
      range,
      gridPoint,
      pointEstablished,
      originalEntry,
      originalMonument,
      pointRecovered,
      monumentFound,
      moonSet,
      ties,
      witnesses,
    } = this.state;

    const validation = this.validateData();
    if (validation) {
      this.toggleLoading();
      firebaseService
        .database()
        .ref('FormData')
        .child(uuid.v4())
        .set({
          date: date,
          section: section,
          township: township,
          range: range,
          gridPoint: gridPoint,
          pointEstablished: pointEstablished,
          originalEntry: originalEntry,
          originalMonument: originalMonument,
          pointRecovered: pointRecovered,
          monumentFound: monumentFound,
          moonSet: moonSet,
          ties: ties,
          witnesses: witnesses,
        })
        .then(() => {
          this.toggleLoading();
          this.props.navigation.navigate('FormList');
        })
        .catch((error) => {
          this.toggleLoading();
          console.warn('Error => ', error);
        });
    }
  };

  // toggle loading to show or hide progress model...
  toggleLoading = () => {
    this.setState({loading: !this.state.loading});
  };

  // perform validation here...
  validateData = () => {
    const {
      date,
      section,
      township,
      range,
      gridPoint,
      pointEstablished,
      originalEntry,
      originalMonument,
      pointRecovered,
      monumentFound,
      moonSet,
      ties,
      witnesses,
    } = this.state;
    if (
      date == '' ||
      section == '' ||
      township == '' ||
      range == '' ||
      gridPoint == '' ||
      pointEstablished == '' ||
      originalEntry == '' ||
      originalMonument == '' ||
      pointRecovered == '' ||
      monumentFound == '' ||
      moonSet == '' ||
      ties == '' ||
      witnesses == ''
    ) {
      this.showSnackBar(`Kindly Fill all the fields.`);
      return false;
    } else {
      return true;
    }
  };

  // show snackBar...
  showSnackBar = (text, color = theme.colors.redColor) => {
    Snackbar.show({
      text: text,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: color,
    });
  };

  render() {
    return this.state.loading === true ? (
      <Loading text="Saving Data..." />
    ) : (
      <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.bgColor}}>
        <StatusBar
          backgroundColor={theme.colors.primaryDarkColor}
          hidden={false}
        />
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.topContainer}>
            <Text style={styles.titleTextStyle}> Welcome Here </Text>
            <Text style={styles.simpletextStyle}>
              Kindly Fill and Submit the form
            </Text>
          </View>

          <View style={{flex: 0.7, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Date
              </Text>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Section
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({date: text});
                  }}
                  paddingLeft={5}
                />
              </View>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({section: text});
                  }}
                  paddingLeft={5}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Township
              </Text>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Range
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({township: text});
                  }}
                  paddingLeft={5}
                />
              </View>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({range: text});
                  }}
                  paddingLeft={5}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Grid Point
              </Text>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Point Establish by
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({gridPoint: text});
                  }}
                  paddingLeft={5}
                />
              </View>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({pointEstablished: text});
                  }}
                  paddingLeft={5}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Original Entry
              </Text>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Original Monument
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({originalEntry: text});
                  }}
                  paddingLeft={5}
                />
              </View>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({originalMonument: text});
                  }}
                  paddingLeft={5}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Point Recovered by
              </Text>
              <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
                Monument Found
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({pointRecovered: text});
                  }}
                  paddingLeft={5}
                />
              </View>
              <View style={inputContainerStyle('45%').inputViewContainerStyle}>
                <InputField
                  placeholder=""
                  inputType="text"
                  capitalize={'none'}
                  onChangeText={(text) => {
                    this.setState({monumentFound: text});
                  }}
                  paddingLeft={5}
                />
              </View>
            </View>

            <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
              Moon Set
            </Text>
            <View style={inputContainerStyle('95%').inputViewContainerStyle}>
              <InputField
                placeholder=""
                inputType="text"
                capitalize={'none'}
                onChangeText={(text) => {
                  this.setState({moonSet: text});
                }}
                paddingLeft={5}
              />
            </View>
            <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
              Ties Made and Recorded as Follows
            </Text>
            <View style={inputContainerStyle('95%').inputViewContainerStyle}>
              <InputField
                placeholder=""
                inputType="text"
                capitalize={'none'}
                onChangeText={(text) => {
                  this.setState({ties: text});
                }}
                paddingLeft={5}
              />
            </View>
            <Text style={[styles.headingTextStyle, {marginLeft: 15}]}>
              Witnesses
            </Text>
            <View style={inputContainerStyle('95%').inputViewContainerStyle}>
              <InputField
                placeholder=""
                inputType="text"
                capitalize={'none'}
                onChangeText={(text) => {
                  this.setState({witnesses: text});
                }}
                paddingLeft={5}
              />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={bStyle('45%', 10, 20).buttonContainerStyle}
              onPress={() => this.submitForm()}>
              <Text style={btStyle(theme.colors.whiteColor).buttonTextStyle}>
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate('FormList')}
              style={[
                bStyle('45%', 10, 20).buttonContainerStyle,
                {
                  borderWidth: 1,
                  backgroundColor: theme.colors.whiteColor,
                  borderColor: theme.colors.midBlue,
                },
              ]}>
              <Text style={btStyle(theme.colors.textColor).buttonTextStyle}>
                View
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Form;
