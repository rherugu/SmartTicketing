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


export default class ResetPass extends Component {

  state = {
    email: '',
    password: '',
  }


  handleUsername = (text) => {
      console.log("###hi", text);
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  login = (email, pass) => {
      alert('Thank you!')
  }
  render() {

    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Reset Password</Text>
          <View style={styles.container1}>

          

          <TouchableOpacity style={[styles.buttonContainer, styles.btn, styles.buttonContainer2, styles.container1]}>
              <Text style={styles.btntxt}>Help</Text>
          </TouchableOpacity>
          </View>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    opacity: 1,
    
  },
  container1: {
    opacity: 1,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      width:100,
      color: 'black',
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  btn: {
    borderRadius: 29,
    backgroundColor: '#DDDDDD',
  },
  btntxt: {
    color: "#111111"
  },
  buttonContainer2: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    width:250,
    borderRadius:30,
  },
  button: {
    backgroundColor: '#DDDDDD',
  },
  heading: {
    fontSize: 24,
  },

});
 
