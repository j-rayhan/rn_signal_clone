import React, { useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {Text, View} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { auth, db } from '../config/Firebase';
import firebase from 'firebase';

export default ({route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: () =>(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar rounded source={{uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'}} size={40} />
          <Text>Welcome to Chat!{chatName}</Text>
        </View>
      ),
      headerLeft:()=>(
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft: 20}}>
          <AntDesign name='arrowleft' size={24} color='white' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 60,
          marginRight: 20,
        }}
        >
        <TouchableOpacity onPress={() => null}>
          <AntDesign name="camerao" size={24} color="white"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => null}>
          <Ionicons name="call" size={24} color="white"/>
        </TouchableOpacity>
        </View>
      ),
    })
  },[navigation]);
  const {chatName,id} = route.params;
  const [message, setMessage]=useState('');
  const [messages, setMessages]=useState([]);

  useLayoutEffect(()=>{
    const unSubscribe = db.collection('chats').doc(id).collection('message').orderBy('timestamp', 'desc').onSnapshot(snapshot=> setMessages(snapshot.docs.map(doc=> ({id: doc.id, data: doc.data()}))))
    return unSubscribe;
  },[route]);
  const saveMessage = () =>{
    Keyboard.dismiss();
    db.collection('chats').doc(id).collection('message').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email
    });
    setMessage('');
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding': 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={90}
      >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <ScrollView contentContainerStyle={{paddingTop: 15}}>

        {messages.map(({id, data})=>(
          data.email === auth.currentUser.email?(
            <View key={id} style={{
              padding: 15,
              backgroundColor: '#ECECEC',
              alignSelf: 'flex-end',
              borderRadius: 20,
              marginRight: 15,
              marginBottom: 20,
              maxHeight: '80%',
              position: 'relative'
            }}>
              <Text style={{
                color: '#000',
                fontWeight: '500',
                marginLeft: 10,}}>{data.message}</Text>
            </View>
          ) : (
            <View key={id} style={{
              padding: 15,
              backgroundColor: '#2b6be6',
              alignSelf: 'flex-start',
              borderRadius: 20,
              margin: 15,
              maxHeight: '80%',
              position: 'relative'
            }}>
              <Text style={{
                color: '#FFF',
                fontWeight: '500',
                marginLeft: 10,
                marginBottom: 15
              }}>{data.message}</Text>
            </View>

          )
        ))}
        </ScrollView>
       </TouchableWithoutFeedback>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
          <TextInput
            value={message}
            onChangeText={t => setMessage(t)}
            placeholder='Signal message'
            onSubmitEditing={saveMessage}
            style={{
              flex:1,
              bottom: 0,
              height: 40,
              marginRight: 15,
              borderColor: 'transparent',
              backgroundColor: '#ECECEC',
              borderWidth:1,
              padding:10,
              color: 'grey',
              borderRadius: 30
            }}
          />
          <TouchableOpacity onPress={() => !messages && saveMessage()}>
            <Ionicons name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


