import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Dashboard = ({navigation}) => {
  const {user, logout} = useAuth();

  var userinfo = user;

  if (user.user) {
    userinfo = user.user;
  }

  function handlerLogout() {
    logout();
  }

  function openConversations(){
    navigation.navigate('conversations')
  }

  function openProfile(props){
    navigation.navigate('profile', props);
  }

  function createPost(props){
    navigation.navigate('createpost', props);
  }

  const openCreateSeen = () => {
    navigation.navigate('seen',{postId:1})
  }

  const openCreateFind = () => {
    navigation.navigate('find')
  }

   return (
     <View style={style.container}>
       <Text>{userinfo.mail}</Text>
       <Button title="Add Post" onPress = {() => {createPost(userinfo)}} />
       <Button title="Chat" onPress={openConversations} />
       <Button title="Add Seen" onPress={openCreateSeen}/>
       <Button title="Add Find" onPress={openCreateFind}/>
       <Button title="Profile" onPress={() => {openProfile(userinfo)}} />
       <Button title="Logout" onPress = {handlerLogout} />
     </View>
   ); 
}

export default Dashboard;