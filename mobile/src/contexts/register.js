import React, {createContext, useState, useEffect, useContext} from 'react';
import {api} from '../services/api';

const Register = (props) => {

  const [userRegister, setUserRegister] = useState({
      name: "",
      mail: "",
      CPF: "",
      telephone: "",
      password : "",
      cep: "",
      bairro: "",
      street: "",
      number: "",
      city:"",
      state:"",
      complement:"",
  });

  function handleSignIn(e) {
    setUserRegister({...userRegister, [e.target.id]: e.target.value});
  }

  const register = async (e) => {
    e.preventDefault();

    try {
        Register(userRegister);

        return navigateToAddress();

    } catch (erro) {
        if(erro.response){
            return window.alert(erro.response.data.erro);
        }
        
        window.alert("Ops, algo deu errado, tente novamente mais tarde.");
    }

};

};

export default Register; 