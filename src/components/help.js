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
    email: '',
    phone: '',
  }


  handleSearch = (text) => {
      this.setState({ helpSearch: text })
  }

    handleEmail = (text) => {
    this.setState({ email: text })
  }

    handlePhone = (text) => {
    this.setState({ phone: text })
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.View}>
      <View style={[styles.inputContainer, styles.container1]}>
      <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/email.png'}}/>
      <TextInput style={styles.inputs}
          underlineColorAndroid = "transparent"
          placeholder = 'Email'
          placeholderTextColor = "#AAAAAA"
          autoCapitalize = "none"
          onChangeText = {this.handleEmail}
          editable
          />
        </View>

        <View style={[styles.inputContainer, styles.container1]}>
      <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png'}}/>
      <TextInput style={styles.inputs}
          underlineColorAndroid = "transparent"
          placeholder = 'Phone Number'
          placeholderTextColor = "#AAAAAA"
          autoCapitalize = "none"
          onChangeText = {this.handlePhone}
          editable
          />
        </View>

<View style={[styles.inputContainer, styles.container1]}>
      <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios-filled/32/000000/question-mark.png'}}/>
      <TextInput style={styles.inputs}
          underlineColorAndroid = "transparent"
          placeholder = 'Query'
          placeholderTextColor = "#AAAAAA"
          autoCapitalize = "none"
          onChangeText = {this.handleSearch}
          />
    </View>
    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton, styles.container1]} onPress={() => {
      /*alert('Thank you! Your message is sent, and you will get a reply soon through your email or your phone number.')*/
      // if(this.state.email === '' && this.state.phone === '' && this.state.helpSearch === ''){
      //   alert('Please enter your email, your phone number and your question.')
      // } else if(this.state.email === '' && this.state.phone === '' && this.state.helpSearch != ''){
      //   alert('Please enter your email and your phone number.')
      // } else if(this.state.email != '' && this.state.phone === '' && this.state.helpSearch === ''){
      //   alert('Please enter your question and your phone number.')
      // } else if(this.state.email === '' && this.state.phone != '' && this.state.helpSearch === ''){
      //   alert('Please enter your email and your question.')
      // }
      if(this.state.email === '' || this.state.phone === '' || this.state.helpSearch === ''){
        alert('Please fill in every space provided.')
      } else {
        alert('Thank you! Your message is sent, and you will get a reply soon through your email or your phone number.')
      }
      }}>
            <Text style={styles.loginText}>Submit</Text>
          </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  container1: {
    opacity: 1,
    alignItems: 'center',
    
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
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
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
  }

});