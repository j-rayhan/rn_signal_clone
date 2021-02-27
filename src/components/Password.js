import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import { verticalScale } from '../utils';

const { width} = Dimensions.get('window');

const PasswordX = ({placeholder,onChange})=>(
<View style={styles.passwordContainer}>
  <TextInput
    style={styles.input}
    onChangeText={onChange}
    secureTextEntry
    placeholder={placeholder}
    defaultValue={''}
  />
   {/* <Text style={styles.forgotPass}>Forgot password?</Text> */}
  </View> 
  );
export default PasswordX;
const styles = StyleSheet.create({
  passwordContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:width-40,
    maxWidth:400,
    borderBottomColor:'#DEDEDE',
    borderBottomWidth:1,
  },
  input:{
    height: verticalScale(60),
    width:'50%',
    fontSize:17,   
  },
  forgotPass:{
    color:'#1E90FF',
    fontWeight:'bold',
    fontSize:13,
  }

});