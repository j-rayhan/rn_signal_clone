import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Alert, KeyboardAvoidingView } from 'react-native';
import { LogoX, TitleX, ButtonX, FooterX, InputX, PasswordX } from '../components'
import { verticalScale } from '../utils';

const { height, width } = Dimensions.get('window');
// import { StatusBar } from 'expo-status-bar';
// import React, {useState}from 'react';
// import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity, Dimensions} from 'react-native';
// import Checkbox from 'expo-checkbox';
// import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from 'react-native-elements';

// import Logo from '../components/Logo.js';
// import Title from '../components/Title.js';
// import Subtitle from '../components/Subtitle.js';
// import Input from '../components/Input.js';
// import Password from '../components/Password2.js';
// import Btn from '../components/Btn.js';
// import Footer from '../components/Footer.js';
// import { verticalScale } from '../Utils/index.js';


// const { height, width} = Dimensions.get('window');

// export default function Login() {

//     const [count, setCount]= useState(0);
//     const [toggleCheckBox, setToggleCheckBox] = useState(false);
//     console.log('count------------->',toggleCheckBox);


//     return (
//       <>
//         <View style={styles.container}>
//           <Logo url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} />
//           <Title title={"Create account"} />
//           <Subtitle value={'Nec nihil affert partiendo ne, quo no iisque \n etiam tacimates sed conceptam.'} />
//           <View style={styles.inputContainer}>
//             <Input placeholder={'Name'}/>
//             <Input placeholder={'Email'}/>
//             <Password placeholder={'Password'}/> 
//           </View>
//           {/* <Button /> */}
//           <View style={styles.checkboxContainer}>
//           <CheckBox
//                 checked={toggleCheckBox}
//                 onPress={() => setToggleCheckBox(preValue => !preValue)}
//                 color={'dodgerblue'}
//             />
//             <Text style={styles.label}>I agree with our <Text style={styles.termsConditions}>Terms</Text> and <Text style={styles.termsConditions}>Conditions</Text></Text>
//           </View>
//           <View style={styles.btnContainer}>
//             <Btn setcount={setCount} title={'Create account'}/>
//             <Footer text1={'Already have an account?'} text2={' Sign in'}/>
//           </View>

//         </View>

//       </>
//     );
//   }

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     height,
//     width,
//   },
//   inputContainer: {
//     marginTop: verticalScale(59),
//     maxWidth: 400,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

// });

function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const handleSubmit = () => {
    if (!(email.trim() && password.trim())) Alert.alert('Please input required field')
    console.log('PRINT IN %s=====>', 'submit', email, password)
  }
  return (
    <View style={styles.container}>
      <LogoX url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} />
      <TitleX title={"SignUp"} />
      {/* <Subtitle value={'Welcome back,\n Signin to cotinue etiam tecimates sed ad'} /> */}
      <KeyboardAvoidingView style={styles.inputContainer}>
        <InputX placeholder={'Username'} onChange={v => setName(v)} />
        <InputX placeholder={'Email'} onChange={v => setEmail(v)} />
        <PasswordX placeholder={'Password'} onChange={v => setPassword(v)} />
      </KeyboardAvoidingView>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={toggleCheckBox}
          onPress={() => setToggleCheckBox(preValue => !preValue)}
          color={'dodgerblue'}
        />
        <Text style={styles.label}>I agree with our <Text style={styles.termsConditions}>Terms</Text> and <Text style={styles.termsConditions}>Conditions</Text></Text>
      </View>
      <View style={styles.btnContainer}>
        <ButtonX title={'Sign Up'} onSubmit={() => handleSubmit()} />
        <FooterX text1={'Already have an account?'} text2={' Login'} onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

export default SignupScreen;