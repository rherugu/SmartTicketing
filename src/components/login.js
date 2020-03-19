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


export default class login extends Component {

  state = {
    username: '',
    password: '',
  }


  handleUsername = (text) => {
//      console.log("###hi", text);
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  login = (email, pass) => {
      alert('Thank you!')
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>

          <View style={styles.container1}>
          <View style={[styles.inputContainer, styles.container1]}>
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/email.png'}}/>
            <TextInput style={styles.inputs}
                underlineColorAndroid = "transparent"
                placeholder = 'Username'
                placeholderTextColor = "#AAAAAA"
                autoCapitalize = "none"
                onChangeText = {this.handleUsername}
                onChangeText={(text) => this.setState({ email: text })}
                // value={this.state.username}
                editable
                />
                {/* /> */}
          </View>
          
          <View style={[styles.inputContainer, styles.container1]}>
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/key-security.png'}}/>
            <TextInput style={styles.inputs}
                underlineColorAndroid = "transparent"
                placeholder = 'Password'
                placeholderTextColor = "#AAAAAA"
                autoCapitalize = "none"
                value={this.state.password}
                onChangeText = {this.handlePassword}
                onChangeText={(text) => this.setState({ password: text })}
                secureTextEntry = 'true'
                editable
                />
          </View>

          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton, styles.container1]} onPress={() => {
            // this.onClickListener('login')
            /*this.props.navigation.*/
            if(this.state.email === 'Username' && this.state.password === 'Password'){
              navigate('Dashboard')
           }else if(this.state.email === '' && this.state.password === ''){
              alert('Please enter a username and password.')
           }else if(this.state.email === '' && this.state.password !== ''){
              alert('Please enter a username.')
           }else if(this.state.email !== '' && this.state.password === ''){
              alert('Please enter a password.')
           }else{
              alert('Sorry, your username and/or password is incorrect') 
           }
          }}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={[styles.buttonContainer, styles.btn, styles.buttonContainer2, styles.container1]} onPress={() => {
            // this.onClickListener('restore_password/email')
            this.props.navigation.navigate("Reset Password")
            }}>
              <Text style={styles.btntxt}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonContainer, styles.btn, styles.buttonContainer2, styles.container1]}
            onPress={() => {
              /*this.props.navigation.*/navigate("Register")
            }}
          >
              <Text style={styles.btntxt}>Register</Text>
          </TouchableOpacity>


          <TouchableOpacity style={[styles.buttonContainer, styles.btn, styles.buttonContainer2, styles.container1]} onPress={()=>{
               navigate('Help')}}>
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
  }

});
 
