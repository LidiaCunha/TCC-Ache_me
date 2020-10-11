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

const Dashboard = () => {
  const {user, logout} = useAuth();

  function handlerLogout() {
    logout();
  }

   return (
     <View style={style.container}>
       <Text>{user?.name}</Text>
       <Button title="Logout" onPress = {handlerLogout} />
     </View>
   ); 
}

export default Dashboard;