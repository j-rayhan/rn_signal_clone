import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
// import Logo from '../components/Logo.js';
// import Title from '../components/Title.js';
// import Input from '../components/Input.js';
// import Password from '../components/Password.js';
// import Btn from '../components/Btn.js';
// import Footer from '../components/Footer.js';
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
  return (
    <View style={styles.container}>
      <LogoX url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} />
      <TitleX title={"Login"} />
      {/* <Subtitle value={'Welcome back,\n Signin to cotinue etiam tecimates sed ad'} /> */}
      <View style={styles.inputContainer}>
        <InputX placeholder={'Email'} />
        <PasswordX placeholder={'Password'} />
      </View>
      <View style={styles.btnContainer}>
        <ButtonX title={'Sign in'} />
        <FooterX text1={'Don\'t have an account?'} text2={' Create account'} onPress={() => navigation.navigate('Signup')} />
      </View>
    </View>
  );
}

export default LoginScreen;