import React, {Component} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,Alert} from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class SignupLoginScreen extends Component{
  constructor(){
   super();
   this.state={
     emailId:'',
     password:''
   }
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
  
  userLogin=(emailId,password) =>{
     firebase.auth().signInWithEmailAndPassword(emailId,password)
     .then(()=>{
       return Alert.alert("successfully logIN")  
     }) 
     .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
  
   render(){
     return(
      <View style={styles.container}>

        <Image
         style={styles.ImageStyle}
         source={require('../assets/communicationimg.png')}
        />

    <Text style={styles.HeadingTextStyle}>BARTER SYSTEM</Text>


       <TextInput
        style={styles.EmailTextInputStyle}
        placeholder = "Enter E-mail"
        placeholderTextColor="#F5B041"
       />
       <TextInput
        style={styles.PasswordTextInputStyle}
        placeholder = "Enter Password"
        placeholderTextColor="#F5B041"
       />

         <TouchableOpacity
            style = {styles.LogInButtonStyle}
            onPress={()=>{
              this.userLogin(this.state.emailId,this.state.password) 
            }}
          >
            <Text style={styles.ButtonTextStyle}>LOG-IN</Text>
         </TouchableOpacity>

         <TouchableOpacity
            style = {styles.SignUpButtonStyle}
            onPress={()=>{
              this.userSignUp(this.state.emailId,this.state.password)
            }}
          >
            <Text style={styles.ButtonTextStyle}>SIGN-UP</Text>
         </TouchableOpacity>
         
      </View>   
     )  
   } 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#138D75'  
   },
  EmailTextInputStyle:{
   borderWidth:4, 
   height:70,
   width:290, 
   backgroundColor:'#138D75',
   borderBottomColor:'#F5B041',
   borderColor:'#138D75',
   marginTop:50,
   marginLeft:550,
  },
  PasswordTextInputStyle:{
    borderWidth:4, 
    height:70,
    width:290, 
    backgroundColor:'#138D75',
    borderBottomColor:'#F5B041',
    borderColor:'#138D75',
    marginTop:40,
    marginLeft:550,
    
   },
  LogInButtonStyle:{
    borderWidth:4,
    height:30,
    width:200,
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center',
    backgroundColor:'#138D75',
    borderColor:'#F5B041',
    marginTop:70,
    marginLeft:590,
    
  }, 
  SignUpButtonStyle:{
    borderWidth:4,
    height:30,
    width:200,
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center',
    backgroundColor:'#138D75',
    borderColor:'#F5B041',
    marginTop:20,
    marginLeft:590,
    
  }, 
  ButtonTextStyle:{
   color:'#F5B041'  
  },
  
  HeadingTextStyle:{
    color:'#F5B041',
    fontSize:36,
    marginLeft:550,
    marginTop:60, 
   },
   
  ImageStyle:{
   width:200,
   height:150, 
   marginLeft:590,
   marginTop:50,
  }

})