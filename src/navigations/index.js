import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login'
import SignupScreen from '../screens/Signup'
import HomeScreen from '../screens/Home'
import AddChatScreen from '../screens/AddChat'
import ChatScreen from '../screens/Chat'
const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2c6bed'},
  headerTitleStyle: { color: '#FFF'},
  headerTintColor: '#FFF'
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Login" screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}