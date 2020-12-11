 import React, { useState, useEffect, useRef } from 'react';

 import {
   Text, 
   Container, 
   Header, 
   Home, 
   Main,
   Section,
    
   Info,
   Button,
   ButtonPost,
   ButtonDenuncia,

   // Section 1 
   BasicInfos, 
   PhotoProfile, 
   Merit,
   Photo,
   NewPhoto,
   Login,
   Name,

//   // Section 2
   Title,
   AdvancedInfos,
   Profile,
   ShareIndicated,
   Input,
   Share,
   Indicated,
   Members,
   Member,
   MemberName,
    
//   //Everson
   TitleMember,
      
} from './styles';

import home from "../../assets/user_info/home.png";
import camera from "../../assets/camera.png";
import photo from "../../assets/userTest.png";
import addImage from "../../assets/image.png";
import share from "../../assets/user_info/compartilhar.png";
import Spinner from "../../components/Spinner";
import ModalPostagem from "./modalPostagem";
import CreatePost from "../../components/CreatePost";
import Denunciations from "./modal_denuncia";

import moment from 'moment';
import {api} from "../../services/api";
import {getUsers} from "../../services/security";




const UserInfo = () => {
  function MemberItem({member}) {
      return( 
        <Member>
          <img src={ member.photo && member.photo !== 'undefined' ? member.photo : photo } alt="membro"/>
          <MemberName>{member.name}  <span>{member.mail}</span></MemberName>
        </Member>
      );
  };
  const [loading, setLoading] = useState(false);

  const [members , setMembers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    mail: "",
    CPF: "",
    merit:"",
    telephone: "",
    password : "",
    newPassword : "",
    confirmPassword: "",
		cep: "",
		bairro: "",
		street: "",
    number: "",
    city:"",
    state:"",
  });

  const users = getUsers();

  useEffect(() => {
    const getUser = async () => {

      try {
        const retorno = await api.get(`/user/${users.id}`);

        const data = retorno.data;

        const where_live = data.where_live;

        const newForm = {
          name: data.name,
          mail: data.mail,
          CPF: data.cpf,
          telephone: data.telephone,
          cep: where_live.cep,
          bairro: where_live.bairro,
          street: where_live.street,
          number: where_live.number,
          city: where_live.city,
          state: where_live.state,
          merit: data.merit
        }

        const res = await api.get('/users', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwMTM5MTE0Nn0.k5GTAvKniY9_34pNT6PBF7gvJUqMKWGn2iicYVj2SJI'
          }
        });

        const allUsers = res.data;

        const filtredUsers = allUsers.filter(member => member.indication === users.mail);

        setMembers(filtredUsers);

        setUser(newForm);

        if (data.photo === "undefined") {
          setImage(addImage);
        } else {
          setImage(data.photo);
        }

      } catch (erro) {
        if (erro.response) {
          return window.alert(erro.response.data.erro);
        }

        window.alert("Ops, algo deu errado, tente novamente.")
      }
    }

   getUser();
  },[ ])
 

  const update = async () => {

     setLoading(true);

     try {
         const retorno = await api.put(`/editUsers/${users.id}`, user);
        
         if (retorno.status === 201) {
             setLoading(false);

             window.alert(retorno.data.sucess);

             return document.location.reload();
         };

     } catch (erro) {

       setLoading(false);

         if(erro.response){
             return window.alert(erro.response.data.erro);
         }
        
         window.alert("Ops, algo deu errado, tente novamente mais tarde.");
     }

   };

   const handlerInput = (e) => {
     setUser({...user, [e.target.id]: e.target.value});
   };

   const imgRef = useRef();

   const [showModalPost, setShowModalPost] = useState(false);
  
   const [showCreatePost, setShowCreatePost] = useState(false);

   const [showDenunciations, setShowDenunciations] = useState(false);

   const [image, setImage] = useState(null);

   const [newImage, setNewImage] = useState(null);

   const [lastPost, setLastPost] = useState({});

   const photoUpdate = async () => {

     setLoading(true);

     const data = new FormData();

     data.append("photo", newImage);

     try {
       const retorno = await api.put(`/editPhoto/${users.id}`, data, {
         headers: {
           "Content-type": `multipart/form-data`,
         },
       });
      
       if (retorno.status === 201) {
           setLoading(false);

           window.alert(retorno.data.sucess);

           return document.location.reload();
       };

     } catch (erro) {
       setLoading(false);

       if(erro.response){
           return window.alert(erro.response.data.erro);
       }
      window.alert("Ops, algo deu errado, tente novamente mais tarde.");
    }
  }
  
  useEffect(()=>{
    (async ( ) => {
      const res = await api.get('/posts/my/last');
      setLastPost(res.data)
    })();
  },[ ])
  
const handlerImage = (e) => {
    if (e.target.files[0]) {
        imgRef.current.src = URL.createObjectURL(e.target.files[0])
        imgRef.current.style.height = "100%"
        imgRef.current.style.width = "100%"
        imgRef.current.style.margin = "0px"
        setNewImage(e.target.files[0]);
    }else {
        imgRef.current.src = `${image}`;
        imgRef.current.style.height = "100%"
        imgRef.current.style.width = "100%"
    }
  };

  const calcStarts = ( merit ) => {
    return merit%5;
  };



  return (
    <Container>
      { showCreatePost && <CreatePost showCreatePost={setShowCreatePost} user={{user,image}} /> }
      { showModalPost && <ModalPostagem /> }
      { loading && <Spinner/>}
      { showDenunciations && <Denunciations setShowDenunciations={setShowDenunciations}/>}
      <Header>
        <Home>
          <img src={home} alt="return home"/>
        </Home>
      </Header>
      <Main>
        <Section>
          <BasicInfos>
            <PhotoProfile>
              <Photo>
                <img src={image} ref={imgRef} alt="user"/>
                <input type="file" name="photo" id="newPhoto" onChange={handlerImage} hidden/>
                  <label htmlFor="newPhoto">
                    <NewPhoto>  
                        <img src={camera} alt="camera"/>
                    </NewPhoto>
                  </label>
              </Photo>
              <Login>
                <Name>{user.name}<br/><span>{user.mail}</span></Name>
                <Button onClick={()=>{photoUpdate()}}>Salvar Foto</Button>
              </Login>
            </PhotoProfile>
            <Merit>
              <Text>Seu mérito: { calcStarts(user.merit)} </Text>
              <Text>Data da última publicação: {moment(lastPost.createdAt).format('DD/MM/YYYY')}</Text>
              <Text>Hora da última publicação: {moment(lastPost.createdAt).format('HH:mm')}</Text>
              <ButtonDenuncia onClick={()=>{setShowDenunciations(true)}}>Denúncias</ButtonDenuncia>
              <ButtonPost onClick={()=>{setShowModalPost(true)}} >Postagens</ButtonPost>
            </Merit>
          </BasicInfos>
        </Section>
        <Section>
          <Title>INFORMAÇÕES PESSOAIS</Title>
          <AdvancedInfos>
            <Profile>
              <Input style={{gridArea:'name'}}>
                <Text>Nome</Text>
                <div className="uneditable">{user.name}</div>
              </Input>
              <Input style={{gridArea:'email'}}>
                <Text>Email</Text>
                <div className="uneditable">{user.mail}</div>
              </Input>
              <Input style={{gridArea:'password'}}>
                <Text>Senha Atual</Text>
                <input type="password" name="password" id="password" onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'new-password'}}>
                <Text>Nova Senha</Text>
                <input type="password" name="new-password" id="newPassword" onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'confirm-password'}}>
                <Text>Confirmar Senha</Text>
                <input type="password" name="confirm-password" id="confirmPassword" onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'telephone'}}>
                <Text>Telefone</Text>
                <input type="text" name="telephone" id="telephone" value={user.telephone} onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'cpf'}}>
                <Text>CPF</Text>
                <div className="uneditable">{user.CPF}</div>
              </Input>
              <Input style={{gridArea:'cep'}}>
                <Text>CEP</Text>
                <input type="text" name="cep" id="cep" value={user.cep} onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'number'}}>
                <Text>Numero</Text>
                <input type="text" name="number" id="number" value={user.number} onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'street'}}>
                <Text>Rua</Text>
                <input type="text" name="street" id="street" value={user.street} onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'neighborhood'}}>
                <Text>Bairro</Text>
                <input type="text" name="neighborhood" id="bairro" value={user.bairro} onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'city'}}>
                <Text>Cidade</Text>
                <input type="text" name="city" id="city" value={user.city} onChange={handlerInput}/>
              </Input>
              <Input style={{gridArea:'state'}}>
                <Text>Estado</Text>
                <input type="text" name="state" id="state" value={user.state} onChange={handlerInput}/>
              </Input>
              <Button style={{gridArea:'button', right:'0'}} onClick={() => {update()}}>
                Salvar
              </Button>
            </Profile>
            <ShareIndicated>
              <Share>
                <img src={share} alt="compartilhar"/>
                <h1>Compartilhar Postagem</h1>
                <p>Realize uma nova postagem aqui</p>
                <Button onClick={()=>{setShowCreatePost(true)}} >Criar Postagem</Button>
              </Share>
              <Indicated>
                <TitleMember>MEMBROS INDICADOS</TitleMember>
                <Members>
			{ members && members.length > 0 ? members.map( user => <MemberItem member={user} /> ) : "Você ainda não indicou o app para ninguem" }
	  	</Members>
              </Indicated>
            </ShareIndicated>
          </AdvancedInfos>
        </Section>
      </Main>
    </Container>
  );
};

export default UserInfo;
