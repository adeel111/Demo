import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Picker,
  TouchableOpacity,
} from 'react-native';
import {
  bStyle,
  btStyle,
  dividerStyle,
  inputContainerStyle,
} from '../../utils/commonStyles';
import {AppHeader as Header} from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Card, Divider} from 'react-native-elements';
import theme from '../../theme';
import styles from './styles';
import firebaseService from '../../services/firebase';
import Loading from '../../components/Loading';

class FormList extends Component {
  state = {
    data: [],
    filteredData: null,
    searchQuery: '',
    loading: false,
    types: [
      {id: '0', name: 'Select Type'},
      {id: '1', name: 'Section'},
      {id: '2', name: 'Township'},
      {id: '3', name: 'Range'},
      {id: '4', name: 'Grid Point'},
    ],
    selectedType: 'Select Type',
  };

  componentDidMount = () => {
    this.toggleLoading();
    this.retrieveUserData();
  };

  onSearch = (searchQuery) => {
    this.setState({
      searchQuery: searchQuery,
    });
    const {selectedType, filteredData} = this.state;
    switch (selectedType) {
      case 'Select Type':
        const results0 = filteredData.filter((obj) =>
          obj.section.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        this.setState({
          data: results0,
          searchQuery: searchQuery,
        });
      case 'Section':
        const results1 = filteredData.filter((obj) =>
          obj.section.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        this.setState({
          data: results1,
          searchQuery: searchQuery,
        });
        break;
      case 'Township':
        const results2 = filteredData.filter((obj) =>
          obj.township.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        this.setState({
          data: results2,
          searchQuery: searchQuery,
        });
        break;
      case 'Range':
        const results3 = filteredData.filter((obj) =>
          obj.range.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        this.setState({
          data: results3,
          searchQuery: searchQuery,
        });
        break;
      case 'Grid Point':
        const results4 = filteredData.filter((obj) =>
          obj.gridPoint.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        this.setState({
          data: results4,
          searchQuery: searchQuery,
        });
        break;
      default:
        return;
    }
  };

  // Read From Database
  retrieveUserData = () => {
    firebaseService
      .database()
      .ref('/FormData')
      .once('value')
      .then((snapshot) => {
        const comingArrayData = Object.values(snapshot.val());
        this.setState(
          {
            data: comingArrayData,
            filteredData: comingArrayData,
            isFetching: false,
          },
          () => {
            this.toggleLoading(); // stop
          },
        );
      })
      .catch((error) => {
        console.warn('Error => ', error);
      });
  };

  // toggle loading to show or hide progress model...
  toggleLoading = () => {
    this.setState({loading: !this.state.loading});
  };

  listItemPress = (item) => {
    this.props.navigation.navigate('FormDetails', {
      item: item,
    });
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.flatListContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.flatListContainer}>
          <Card containerStyle={styles.cardContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleStyle}>Section</Text>
              <Text style={styles.titleStyle}>Township</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.valueStyle}>{item.section}</Text>
              <Text style={styles.valueStyle}>{item.township}</Text>
            </View>
            <Divider style={dividerStyle().dividerStyle} />
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleStyle}>Range</Text>
              <Text style={styles.titleStyle}>Grid Point</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.valueStyle}>{item.range}</Text>
              <Text style={styles.valueStyle}>{item.gridPoint}</Text>
            </View>
            <Divider style={dividerStyle().dividerStyle} />
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleStyle}>Original Entry</Text>
              <Text style={styles.titleStyle}>Original Monument</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.valueStyle}>{item.entry}</Text>
              <Text style={styles.valueStyle}>{item.monument}</Text>
            </View>
            <Divider style={dividerStyle().dividerStyle} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.titleStyle}>Date</Text>
                <Text style={styles.valueStyle}>{item.date}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  bStyle('40%', 9, 20).buttonContainerStyle,
                  {
                    marginRight: 15,
                  },
                ]}
                onPress={() => this.listItemPress(item)}>
                <Text
                  style={[
                    btStyle(theme.colors.whiteColor).buttonTextStyle,
                    {
                      fontSize: 15,
                    },
                  ]}>
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return this.state.loading ? (
      <Loading text="Please wait..." />
    ) : (
      <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.bgColor}}>
        <Header
          left={
            <Entypo
              name={'chevron-left'}
              size={30}
              color={theme.colors.primaryColor}
            />
          }
          onLeftPress={() => this.props.navigation.navigate('Form')}
          title={'All Data'}
        />
        <View
          style={[
            inputContainerStyle('90%').inputViewContainerStyle,
            {marginTop: 25},
          ]}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <Picker
              selectedValue={this.state.selectedType}
              style={{height: 45, flex: 0.15}}
              mode={'dialog'}
              onValueChange={(value) => this.setState({selectedType: value})}>
              {this.state.types &&
                this.state.types.map((item, index) => {
                  if (index === 0) {
                    return (
                      <Picker.Item
                        label={item.name}
                        value={item.name}
                        key={index}
                      />
                    );
                  }
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.name}
                      key={index}
                    />
                  );
                })}
            </Picker>
            <TextInput
              placeholderTextColor="#4e4e4e"
              value={this.state.searchQuery}
              autoCorrect={false}
              onChangeText={(text) => this.onSearch(text)}
              placeholder={'Search here'}
              style={{
                flex: 0.73,
                paddingLeft: 10,
                marginRight: 10,
              }}
            />
            <FontAwesome
              name={'search'}
              size={24}
              color={theme.colors.primaryColor}
              style={{flex: 0.12, alignSelf: 'center'}}
            />
          </View>
        </View>
        <FlatList
          data={this.state.data}
          extraData={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }
}

export default FormList;
