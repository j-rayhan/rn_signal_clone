import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView } from 'react-native';
import { LogoX, TitleX, ButtonX, FooterX, InputX, PasswordX } from '../components'
import { auth } from '../config/Firebase';
import { verticalScale } from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginTop: verticalScale(60),
  },

  inputContainer: {
    // marginTop: verticalScale(59),
    marginTop: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    marginTop: verticalScale(5),
    alignItems: 'center'
  },
  label: {
    marginHorizontal: 8,
    color: '#8899A6'
  },
  btnContainer: {
    // flex:1,
    // justifyContent:'center',
    // marginTop: verticalScale(10),
  },
  termsConditions: {
    color: '#1E90FF',
    fontWeight: 'bold',
    fontSize: 12
  }
});
function SignupScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back to Login'
    })
  },[navigation]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    if (!(email.trim() && password.trim())) Alert.alert('Please input required field')
    else {
      auth.createUserWithEmailAndPassword(email,password)
      .then(authUser=> {
        authUser.user.updateProfile({
          displayName: name
        })
      })
      .catch(e => console.error('---->',e))
    }
    console.log('PRINT IN %s=====>', 'submit', email, password)
  }
  return (
    <View style={styles.container}>
      <LogoX url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} />
      <TitleX title={"SignUp"} />
      <KeyboardAvoidingView style={styles.inputContainer}>
        <InputX placeholder={'Username'} onChange={v => setName(v)} />
        <InputX placeholder={'Email'} onChange={v => setEmail(v)} />
        <PasswordX placeholder={'Password'} onChange={v => setPassword(v)} />
      </KeyboardAvoidingView>
      <View style={styles.btnContainer}>
        <ButtonX title={'Sign Up'} onSubmit={() => handleSubmit()} />
        <FooterX text1={'Already have an account?'} text2={' Login'} onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

export default SignupScreen;