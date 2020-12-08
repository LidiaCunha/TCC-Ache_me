import React,{useState, useEffect} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { api } from '../../services/api';
import { Container, ContainerBack, Back } from '../listagem_de_postagem/styles';
import Post from '../../components/Post';


const style = StyleSheet.create({
  container: {
    position:'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    width:100
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

  function createPost(props) {
    navigation.navigate('createpost', props);
  }

  const openCreateSeen = () => {
    navigation.navigate('seen', { postId: 1 })
  }

  const openCreateFind = () => {
    navigation.navigate('find')
  }


  const [posts, setPosts] = useState([]);

  const getPosts = async( ) => {
    const response = await api.get('/seen');
    
    setPosts(response.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Container>

        {posts !== undefined && posts.map !== undefined &&
          posts.map(post => <Post seen={post} />)
        }

      </Container>
    
      <View style={style.container}>
        <Button title="AddPost" onPress={() => { createPost(userinfo) }} />
        <Button title="Chat" onPress={openConversations} />
        <Button title="AddSeen" onPress={openCreateSeen} />
        <Button title="AddFind" onPress={openCreateFind} />
        <Button title="Profile" onPress={() => { openProfile(userinfo) }} />
        <Button title="TERMOS" onPress={() => { navigation.navigate('termos') }} />
        <Button title="Logout" onPress={handlerLogout} />
      </View>

    </>
  );
}

export default Dashboard;