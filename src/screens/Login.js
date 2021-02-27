import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, View, Dimensions } from 'react-native';
import {LogoX, TitleX, ButtonX, FooterX, InputX, PasswordX} from '../components'
import { verticalScale } from '../utils';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height,
    width,
  },
  inputContainer: {
    marginTop: verticalScale(59),
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

function LoginScreen({ navigation }) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit = () => {
    if(!(email.trim() && password.trim())) Alert.alert('Please input required field')
    console.log('PRINT IN %s=====>', 'submit', email, password )
  }
  return (
    <View style={styles.container}>
      <LogoX url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} />
      <TitleX title={"Login"} />
      {/* <Subtitle value={'Welcome back,\n Signin to cotinue etiam tecimates sed ad'} /> */}
      <View style={styles.inputContainer}>
        <InputX placeholder={'Email'} onChange={v => setEmail(v)}/>
        <PasswordX placeholder={'Password'} onChange={v => setPassword(v)} />
      </View>
      <View style={styles.btnContainer}>
        <ButtonX title={'Sign in'} onSubmit={() => handleSubmit()}/>
        <FooterX text1={'Don\'t have an account?'} text2={' Create account'} onPress={() => navigation.navigate('Signup')} />
      </View>
    </View>
  );
}

export default LoginScreen;