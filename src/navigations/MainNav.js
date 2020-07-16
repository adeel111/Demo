import react from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// screens
import Form from '../screens/Form';
import FormList from '../screens/FormList';
import FormDetails from '../screens/FormDetails';

// import navigationOptions headerStyle
import {HeaderStyle} from '../components/HeaderStyle';

const AppNavigator = createStackNavigator(
  {
    Form: {
      screen: Form,
      navigationOptions: {
        headerShown: false,
      },
    },
    FormList: {
      screen: FormList,
      navigationOptions: {
        headerShown: false,
      },
    },
    FormDetails: {
      screen: FormDetails,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Form',
  },
);

export default createAppContainer(AppNavigator);
