import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, { Component } from 'react';
// import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import mainScreen from './mainScreen';
import {createStackNavigator} from '@react-navigation/stack'


export default class help extends Component {

  state = {
    helpSearch: '',
  }


  handleUsername = (text) => {
      this.setState({ helpSearch: text })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
            <Text>hi</Text>
        </View>
    );
  }
}