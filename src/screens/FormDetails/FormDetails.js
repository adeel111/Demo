import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {AppHeader as Header} from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import {Card, Divider} from 'react-native-elements';
import theme from '../../theme';
import styles from './styles';
import {dividerStyle} from '../../utils/commonStyles';

class FormDetails extends Component {
  state = {
    item: null,
  };

  componentDidMount = async () => {
    const item = await this.props.navigation.getParam('item');
    this.setState({item});
  };

  render() {
    const {item} = this.state;
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
            <Text style={styles.valueStyle}>{item && item.section}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Township</Text>
            <Text style={styles.valueStyle}>{item && item.township}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Range</Text>
            <Text style={styles.valueStyle}>{item && item.range}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Grid Point</Text>
            <Text style={styles.valueStyle}>{item && item.gridPoint}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Original Entry</Text>
            <Text style={styles.valueStyle}>{item && item.originalEntry}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Original Monument</Text>
            <Text style={styles.valueStyle}>{item && item.section}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Point 1st Establish by</Text>
            <Text style={styles.valueStyle}>
              {item && item.originalMonument}
            </Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Point Recovered by</Text>
            <Text style={styles.valueStyle}>{item && item.pointRecovered}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Monument Found</Text>
            <Text style={styles.valueStyle}>{item && item.monumentFound}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Moun Set</Text>
            <Text style={styles.valueStyle}>{item && item.moonSet}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>
              Ties Made and Recorded as Follows
            </Text>
            <Text style={styles.valueStyle}>{item && item.ties}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Witnesses</Text>
            <Text style={styles.valueStyle}>{item && item.witnesses}</Text>
          </View>
          <Divider style={dividerStyle().dividerStyle} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Date</Text>
            <Text style={styles.valueStyle}>{item && item.date}</Text>
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}

export default FormDetails;
