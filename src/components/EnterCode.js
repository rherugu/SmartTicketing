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


export default class EnterCode extends Component {

  state = {
    code: '',
  }


  handleEmail = (text) => {
      this.setState({ email: text })
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>We sent you an email containing a 6-digit code. Enter the code here.</Text>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton, styles.container1]} onPress={() => {
                 alert('A new email has been sent.')
                }}>
                    
                  
            <Text style={styles.loginText}>Resend Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton, styles.container1]} onPress={() => {
                 navigate('Reset Password')
                }}>
                    
                  
            <Text style={styles.loginText}>Wrong email? Change it here</Text>
          </TouchableOpacity>
          <View style={[styles.inputContainer, styles.container1]}>
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/cancel-4-digits.png'}}/>
            <TextInput style={styles.inputs}
                underlineColorAndroid = "transparent"
                placeholder = 'Enter Code'
                placeholderTextColor = "#AAAAAA"
                autoCapitalize = "none"
                onChangeText = {this.handleUsername}
                onChangeText={(text) => this.setState({ code: text })}
                value={this.state.code}
                editable
                />
                </View>

                <View style={[styles.container1]}>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton, styles.container1]} onPress={() => {
                  if(this.state.code != ''){
                    
                  } else {
                    alert('Please enter a code.')
                  }
                  
                }}>
                  
            <Text style={styles.loginText}>Submit</Text>
          </TouchableOpacity>
                
                </View>
          <View style={styles.container1}>

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
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 25
  },

});
 
