import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet, Modal} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class LoginScreen extends Component{

    state = {
        loginEmail : '', 
        loginPassword : '', 
        SignupEmail : '', 
        SignupPassword : '', 
        isSignupButtonPressed : false, 
        first_name : '', 
        last_name : '',
        address : ''}

    Login = async() => {
        const login = firebase.auth().signInWithEmailAndPassword(
            this.state.loginEmail, this.state.loginPassword
        )
        if(login){
            alert('User logged in succesfully');
            this.props.navigation.navigate('HomeScreen');
        }
    }

    Signup = async() => {
        const login = firebase.auth().createUserWithEmailAndPassword(
            this.state.SignupEmail, this.state.SignupPassword
        )
        if(login){
            alert('User Signed up succesfully. Now you need to go back, to login to proceed');
        }
    }

  render(){
      if(this.state.isSignupButtonPressed === false){
        return(
            <View style = {{backgroundColor : '#222831'}}>
              <TextInput onChangeText = {(text) => {
                  this.setState({
                      loginEmail : text
                  })
              }} style = {style.TextInput} placeholder = {'Enter email'}></TextInput>
              <TextInput onChangeText = {(text) => {
                  this.setState({
                      loginPassword : text
                  })
              }} style = {style.TextInput} placeholder = {'Enter password'} secureTextEntry = {true}></TextInput>
              <TouchableOpacity onPress = {() => {
                  this.Login();
              }}>
                  <Text style = {style.loginButton}> Login </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => {
                  this.setState({
                    isSignupButtonPressed : true
                }) 
              }}>
                  <Text style = {style.signupButton}> Signup </Text>
              </TouchableOpacity>
            </View>
          )
      }else{
          return(
              <Modal 
              visible = {true}
              transparent = {false}
              animationType = {'slide'}>
                  <View style = {{backgroundColor : '#222831'}}>
                  <TextInput onChangeText = {(text) => {
                  this.setState({
                      first_name : text
                  })
              }} style = {style.TextInput} placeholder = {'Enter first name'}></TextInput>
              <TextInput onChangeText = {(text) => {
                  this.setState({
                      last_name : text
                  })
              }} style = {style.TextInput} placeholder = {'Enter last name'}></TextInput>
              <TextInput onChangeText = {(text) => {
                  this.setState({
                      address : text
                  })
              }} style = {style.address} multiline = {true} placeholder = {'Enter address'}></TextInput>
              <TextInput onChangeText = {(text) => {
                  this.setState({
                      contact : text
                  })
              }} style = {style.TextInput} placeholder = {'Enter contact'}></TextInput>
              <TextInput onChangeText = {(text) => {
                  this.setState({
                      SignupEmail : text
                  })
              }} style = {style.TextInput} placeholder = {'Enter email'}></TextInput>
              <TextInput onChangeText = {(text) => {
                  this.setState({
                      SignupPassword : text
                  })
              }} secureTextEntry = {true} style = {style.TextInput} placeholder = {'Enter password'}></TextInput>
              <TouchableOpacity onPress = {(text) => {
                  this.Signup();
              }}>
                  <Text style = {style.signupButton}> Register </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => {
                  this.setState({
                      isSignupButtonPressed : false
                  })
              }}>
                  <Text style = {style.button}> Go back  </Text>
              </TouchableOpacity>
                  </View>
              </Modal>
          )
      }
    
  }
}

const style = StyleSheet.create({
    TextInput : {
        display : 'flex',
        backgroundColor : '#393e46',
        color :'#eeeeee',
        width : '90%',
        height : 40,
        alignSelf : 'center',
        marginTop : 10,
        marginBottom : 10,
        borderRadius : 10,
        textAlign : 'center',
        fontSize : 25
    },

    address : {
        display : 'flex',
        backgroundColor : '#393e46',
        color :'#eeeeee',
        width : '90%',
        height : 100,
        alignSelf : 'center',
        marginTop : 10,
        marginBottom : 10,
        borderRadius : 10,
        textAlign : 'center',
        fontSize : 25
    },

    loginButton : {
        display : 'flex',
        backgroundColor : '#00adb5',
        color :'#eeeeee',
        width : '90%',
        height : 40,
        alignSelf : 'center',
        marginTop : 40,
        marginBottom : 10,
        borderRadius : 30,
        textAlign : 'center',
        fontSize : 25,
        justifyContent : 'center'
    },

    signupButton : {
        display : 'flex',
        backgroundColor : '#00adb5',
        color :'#eeeeee',
        width : '90%',
        height : 40,
        alignSelf : 'center',
        marginTop : 10,
        marginBottom : 30,
        borderRadius : 30,
        textAlign : 'center',
        fontSize : 25,
        justifyContent : 'center'
    },

    button : {
        display : 'flex',
        backgroundColor : '#00adb5',
        color :'#eeeeee',
        width : '70%',
        height : 30,
        alignSelf : 'center',
        marginBottom : 10,
        borderRadius : 30,
        textAlign : 'center',
        fontSize : 20,
        justifyContent : 'center'
    },
})