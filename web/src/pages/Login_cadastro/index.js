import {useHistory} from "react-router-dom";
import SpinnerFullScreen from '../../components/Spinner';
import backgroundLogin from "../../assets/imagemLogin.jpg";
import backgroundRegister from "../../assets/imagemCadastro.jpg";
import camera from "../../assets/camera.png";
import logo from "../../assets/logo.png";
import CheckEmail from "../../components/Card_email";
import { 
    Container,
    ContainerInfo,
    ContainerItensMenu,
    ContainerTextMenor,

    /*Login*/
    LoginContainerMenu,
    LoginContainerText,
    LoginConfigInput,

    /*Cadastro*/
    CadastroContainerMenu,
    CadastroContainerText,
    CadastroConfigInput,
    ContainerInput,
    ContainerDados,
    Footer,
    ContainerFoto,
    ContainerBtn

  } from "./styles";

    import React, { useState, useRef } from "react";
import { api } from '../../services/api';
import { signIn } from '../../services/security';
import { ContainerCard } from "../../components/Card_email/styles";

const FormRegister = (props) => {
    
    const [ShowCheckEmail, setShowCheckEmail] = useState(false);
    
    const [indication, setIndication] = useState('');

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

    const imgRef = useRef();

    const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(false);

    const handlerIndication = (e) => {
        setIndication(e.target.value)
    }

    const register = async (e) => {
        setLoading(true);
        
        e.preventDefault();

        const data = new FormData();

        data.append("name", userRegister.name);
        data.append("mail", userRegister.mail);
        data.append("CPF", userRegister.CPF);
        data.append("telephone", userRegister.telephone);
        data.append("password", userRegister.password);
        data.append("cep", userRegister.cep);
        data.append("bairro", userRegister.bairro);
        data.append("street", userRegister.street);
        data.append("number", userRegister.number);
        data.append("city", userRegister.city);
	data.append("indication", indication );
	data.append("state", userRegister.state);
        data.append("complement", userRegister.complement);
        data.append("photo", image);

        try {
            const retorno = await api.post("/newUser", data, {
                headers: {
                    "Content-type": `multipart/form-data`,
                }
            });
            
            if (retorno.status === 201) {
                signIn(retorno.data);
                setLoading(false);
                return setShowCheckEmail(true);
            };

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }

    };

    const addMeritToIndication = async() => {
        try {
            if (indication){
                const res = await api.get('/users',{headers: { 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwMTM5MTE0Nn0.k5GTAvKniY9_34pNT6PBF7gvJUqMKWGn2iicYVj2SJI'
                  }});
                
                const existUser = res.data.find( user => user.mail === indication ? user : false );
                
                if (existUser) {
                    const newMerit = existUser.merit + 1;

                    await api.put(`/users/${existUser.id}`, {field:'merit',contentOfField:newMerit},{headers: { 
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwMTM5MTE0Nn0.k5GTAvKniY9_34pNT6PBF7gvJUqMKWGn2iicYVj2SJI'
                      }});

                    console.log("MERITO "+newMerit+" ADICIONADO AO USUARIO "+existUser.name);
                }
            
            }
        } catch (error) {
            console.log(error)    
        }
    }

    const handlerInput = (e) => {
        setUserRegister({...userRegister, [e.target.id]: e.target.value});
    };

    const handlerImage = (e) => {
        if (e.target.files[0]) {
            imgRef.current.src = URL.createObjectURL(e.target.files[0])
            imgRef.current.style.height = "100%"
            imgRef.current.style.width = "100%"
            imgRef.current.style.margin = "0px"
            setImage(e.target.files[0]);
        }else {
            imgRef.current.src = `${camera}`;
            imgRef.current.style.height = "70%"
            imgRef.current.style.width = "70%"
            imgRef.current.style.margin = "15px"
        }
    };

    const findAddress = async( e ) =>{
        let cep = e.target.value;

        const setForm = (data) =>{
            setUserRegister({...userRegister, 
                'street': data.logradouro,
                'bairro' : data.bairro,
                'city' : data.cidade,
                'state': data.estado_info.nome,
            });
        }

        const url = `https://api.postmon.com.br/v1/cep/${cep}`;
        const endereco = await fetch(url).then(res => res.json());
        console.log(endereco)
        setForm(endereco)
    }
    const maskCep = ( e ) => {
        let cep = e.target.value;

        cep = cep.replace(/[^0-9]/g,'')
                 .replace(/(.{5})(.{3})/,'$1-$2')
                 .replace(/(.{9})(.*)/,'$1');
        
        setUserRegister({...userRegister, [e.target.id]: cep});
    };

    const maskCpf = ( e ) => {
        let cpf = e.target.value;

        cpf = cpf.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1');

        setUserRegister({...userRegister, [e.target.id]: cpf});
    };

    const maskTelephone = ( e ) => {
        let telephone = e.target.value;

        telephone = telephone.replace (/[^0-9]/g, '')
        // ORGANIZA DA FORMA (11) 91111-1111
        .replace(/(.{2})(.{5})(.{4})/, '($1) $2 - $3')
        // APAGA TUDO QUE TENHA MAIS DE 17 CARACTERES
        .replace(/(.{17})(.*)/, '$1' );

        setUserRegister({...userRegister, [e.target.id]: telephone});
    };

    return(
        <>
        {loading &&  <SpinnerFullScreen />}
        <Container onSubmit={register}>
        {ShowCheckEmail && <CheckEmail setShowCheckEmail={setShowCheckEmail} props={props}/>} 
        
        <img src={backgroundRegister} alt="área de cadastro"/>

        <ContainerInfo >
          <CadastroContainerMenu>
              <img src={logo} alt="logo"/>
              
              <CadastroContainerText>
                <h1>Seja um membro Ache.me e faça <br/> parte de reencontros.</h1>
              </CadastroContainerText>
          </CadastroContainerMenu>

          <CadastroConfigInput>

           <ContainerDados>

                <ContainerInput>
                    <label>Nome</label>
                    <input type="text" id="name" value={userRegister.name} onChange={handlerInput} placeholder="Insira seu nome" required />
                                
                    <label>CPF</label>
                    <input type="text" id="CPF" value={userRegister.CPF} onChange={handlerInput} onKeyUp={( e ) => { maskCpf( e ) }} placeholder="Insira seu CPF" required />
                                
                    <label>Alguém te indicou o Ache.me?</label>
                    <input onBlur={addMeritToIndication} type="text" value={indication} onChange={handlerIndication} placeholder="Insira o email do úsuario"/>
                </ContainerInput>
             
                <ContainerInput >
                    <label>E-mail</label>
                    <input type="email" id="mail" value={userRegister.mail} onChange={handlerInput} placeholder="Insira seu e-mail" required />
                                
                    <label>Telefone</label>
                    <input type="text" id="telephone" value={userRegister.telephone} onChange={handlerInput} onKeyUp={( e ) => { maskTelephone( e ) }} placeholder="Insira seu telefone" required />
                                
                    <label>Senha</label>
                    <input type="password" id="password" value={userRegister.password} onChange={handlerInput} minLength="8" placeholder="Insira sua senha" required />
                </ContainerInput>
            </ContainerDados>
            
            <ContainerDados>
                <ContainerInput>
                    <label>Cep</label>
                    <input type="text" id="cep" value={userRegister.cep} onChange={handlerInput} onBlur={(e) => findAddress(e)} onKeyUp={( e ) => { maskCep( e ) }} placeholder="Insira seu CEP" required />

                    <label>Bairro</label>
                    <input type="text" id="bairro" value={userRegister.bairro} onChange={handlerInput} placeholder="Insira seu bairro" required />
                            
                    <label>Estado</label>
                    <input type="text" id="state" value={userRegister.state} onChange={handlerInput} placeholder="Insira seu estado" required />
                </ContainerInput>
                
                <ContainerInput>
                    <label>Rua</label>
                    <input type="text" id="street" value={userRegister.street} onChange={handlerInput} placeholder="Insira sua rua" required />
                            
                  <label>Cidade</label>
                  <input type="text" id="city" value={userRegister.city} onChange={handlerInput} placeholder="Insira sua cidade" required />

                  <label>Número</label>
                    <input type="text" id="number" value={userRegister.number} onChange={handlerInput} placeholder="Insira seu número" required />
              </ContainerInput>
            </ContainerDados>
            
          </CadastroConfigInput>

          <Footer>
            <ContainerFoto>
                <input type="file" id="file" onChange={handlerImage} hidden/>
                <label htmlFor="file">
                    <img className="photo" src={camera} ref={imgRef} alt="user photography"/>    
                </label>
                <p>Escolha sua foto</p>      
            </ContainerFoto>
            <ContainerBtn>
                <input type="button" value="Já tenho cadastro" onClick={() => {props.showForm("login")}}/>
                <p>OU</p>
                <input type="submit" value="Cadastrar-se"/>
            </ContainerBtn>
          </Footer>

        </ContainerInfo>

        </Container>
        </>
    );
};

const FormLogin = (props) => {
    const history = useHistory();

    const [userLogin, setUserLogin] = useState({
        mail: "",
        password: "",
    });

    const handlerInput = (e) => {
        setUserLogin({...userLogin, [e.target.id]: e.target.value});
    };

    const enter = async (e) => {

        e.preventDefault();

        try {
            const retorno = await api.post("/users", userLogin);
            
            if (retorno.status === 201) {

                signIn(retorno.data);

                return history.push("/user_info");
            };

        } catch (erro) {
            if(erro.response){
                return window.alert(erro.response.data.erro);
            }
            
            window.alert("Ops, algo deu errado, tente novamente mais tarde.");
        }

    };
    return(
        <Container onSubmit={enter}>
            <img src={backgroundLogin} alt="area de login"/>
            <ContainerInfo>
                <LoginContainerMenu>
                <img src={logo} alt="logo"/>

                <ContainerItensMenu>
                    <ul>
                        <li onClick={() => {
                        props.showForm("registrar");
                        }}>Cadastrar-se</li>
                        <li onClick={() => {
                        history.push("/sobre");
                        }}>Sobre</li>
                        <li onClick={() => {
                        history.push("/area-informativa");
                        }}>Área Informativa</li>
                    </ul>
                </ContainerItensMenu>
                </LoginContainerMenu>

                <LoginContainerText>
                    <h1>Bem-vindo! Que bom que você está <br/> aqui, sua ajuda é muito importante.</h1>
                </LoginContainerText>

                <ContainerTextMenor>
                    <h2>Colabore com essa busca, ajude famílias a encontrarem seus entes queridos, é<br/>
                    simples, rápido e gratificante ajudar alguém.</h2>
                </ContainerTextMenor>

                <LoginConfigInput>
                    <input type="text" id="mail" value={userLogin.mail} onChange={handlerInput} placeholder="E-mail ou telefone" required/>
                    <input type="password" id="password" value={userLogin.password} onChange={handlerInput} placeholder="Senha" required />
                    <input type="submit" value="Entrar"/>
                </LoginConfigInput>
                
            </ContainerInfo>
        </Container>
    );
};

const Login = () => {
    
    const [showForm, setShowForm] = useState("login");

    return (
        <>
            <Container>
                {showForm === "login" ? (<FormLogin showForm={setShowForm} />) : (<FormRegister showForm={setShowForm}/>)};
            </Container>
        </>
    )
}

export default Login;

