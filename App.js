import 'react-native-gesture-handler';
import React, {Component} from 'react';
import MainNav from './src/navigations';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

class App extends Component {
  render() {
    return <MainNav />;
  }
}

export default App;
