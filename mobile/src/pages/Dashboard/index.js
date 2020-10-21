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

  function handlerLogout() {
    logout();
  }

  function openConversations(){
    navigation.navigate('conversations')
  }

   return (
     <View style={style.container}>
       <Text>{user?.name}</Text>
       <Button title="Logout" onPress = {handlerLogout} />
       <Button title="Chat" onPress={openConversations} />
     </View>
   ); 
}

export default Dashboard;