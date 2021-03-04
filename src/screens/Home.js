import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'; 
import { auth, db } from '../config/Firebase';
const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);  
  useEffect(()=>{
    const unSubscribe = db.collection('chats').doc(id).collection('message').orderBy('timestamp', 'desc').onSnapshot(snapshot=> setChatMessages(snapshot.docs.map(doc=> doc.data())))
    return unSubscribe;
  },[id]);
  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          {chatName}
      </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
      </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
export default ({ navigation }) => {
  const [charts, setCharts]=useState([]);
  useEffect(()=>{
    const unSubscribe = db.collection('chats').onSnapshot(snapshot => (
      setCharts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    ));
    return unSubscribe;
  },[])
  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace('Login')
    }).catch()
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerLeft: () => (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 60,
          marginRight: 20,
        }}
        >
        <TouchableOpacity onPress={() => null}>
          <AntDesign name="camerao" size={24} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
          <SimpleLineIcons name="pencil" size={24} color="black"/>
        </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => signOut()}>
          <View style={{ marginRight: 20 }}>
            <Text style={{ fontSize: 20 }}>{auth?.currentUser?.displayName}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }, [navigation]);
  const enterChat= (id, chatName) => {
    navigation.navigate('Chat', {
      id, chatName
    })
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {charts.map(({id, data: {chatName}}) => (
        <CustomListItem key={id} {...{id, chatName, enterChat}}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};