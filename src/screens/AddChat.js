import React, { useLayoutEffect, useState } from 'react';
import {Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Button, Input } from 'react-native-elements';
import { db } from '../config/Firebase';

export default ({navigation}) => {
  const [name, setName] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
      headerBackTitle: 'Charts'
    })
  },[navigation]);
  const creatChat = async () => {
    console.log('chat creat ======>')
    await db.collection('chats').add({
      chatName: name
    }).then(()=>navigation.replace('Home'))
    .catch(e=>console.error('chat creat error ======>', e))
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Chart page!</Text>
      <Input
        placeholder="Enter a chart Name"
        value={name}
        onChangeText={text => setName(text)}
        leftIcon={
          <AntDesign name="wechat" size={24} color="black" />
        }
      />
      <Button disabled={!name} onPress={()=>creatChat()} title="Create new chat" />
    </View>
  );
};