import React,{useState, useEffect} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { api } from '../../services/api';
import { Container, ContainerBack, Back } from '../listagem_de_postagem/styles';
import Post from '../../components/Post';
import Feed from '../feed';

const style = StyleSheet.create({
  container: {
    // position:'absolute',
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // flexDirection:'row',
    // width: 100,
    bottom: -50,
  },

  Text: { 
    fontSize: 20,
  }
});

const Dashboard = ({ navigation }) => {
  const { user, logout } = useAuth();

  var userinfo = null;

  if (user) {
    userinfo = user
    if (user.user) {
      userinfo = user.user;
    }
  }

  function handlerLogout() {
    logout();
  }

  function openConversations() {
    navigation.navigate('conversations')
  }

  function openProfile(props) {
    navigation.navigate('profile', props);
  }


  const openCreateSeen = () => {
    navigation.navigate('seen', { postId: 1 })
  }

  const openCreateFind = () => {
    navigation.navigate('find')
  }



  return (
      <Container>
        <Feed navigation={navigation} />  
      </Container>
  );
}

export default Dashboard;