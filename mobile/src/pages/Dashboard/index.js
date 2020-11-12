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

const Dashboard = ({route, navigation}) => {
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

   return (
     <View style={style.container}>
       <Text>{userinfo.mail}</Text>
       <Button title="Logout" onPress = {handlerLogout} />
       <Button title="Chat" onPress={openConversations} />
       <Button title="Profile" onPress={() => {openProfile(userinfo)}} />
     </View>
   ); 
}

export default Dashboard;