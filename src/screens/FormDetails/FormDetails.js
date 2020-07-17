import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {AppHeader as Header} from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import {Card, Divider} from 'react-native-elements';
import theme from '../../theme';
import styles from './styles';
import {bStyle, btStyle, dividerStyle} from '../../utils/commonStyles';

class FormDetails extends Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.bgColor}}>
        <Header
          left={
            <Entypo
              name={'chevron-left'}
              size={30}
              color={theme.colors.primaryColor}
            />
          }
          onLeftPress={() => this.props.navigation.navigate('FormList')}
          title={'Details'}
        />
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.titleStyle}>Section</Text>
            <Text style={styles.valueStyle}>Private</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Township</Text>
            <Text style={styles.valueStyle}>Sargodha</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Range</Text>
            <Text style={styles.valueStyle}>60 to 70 km</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Grid Point</Text>
            <Text style={styles.valueStyle}>Lorem</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Original Entry</Text>
            <Text style={styles.valueStyle}>Ipsum</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Original Monument</Text>
            <Text style={styles.valueStyle}>Pakistan Monument</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Point 1st Establish by</Text>
            <Text style={styles.valueStyle}>Adeel</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Point Recovered by</Text>
            <Text style={styles.valueStyle}>Iftikhar</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Monument Found</Text>
            <Text style={styles.valueStyle}>Yes</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Moun Set</Text>
            <Text style={styles.valueStyle}>Yes</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>
              Ties Made and Recorded as Follows
            </Text>
            <Text style={styles.valueStyle}>Lorem Ipsum</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Witnesses</Text>
            <Text style={styles.valueStyle}>Adeel, Mohsin</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Date</Text>
            <Text style={styles.valueStyle}>16/07/2020</Text>
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}

export default FormDetails;
