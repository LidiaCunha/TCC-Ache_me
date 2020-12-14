import React, { useEffect, useState , useRef} from 'react';

import { api } from '../../services/api';
import camera from "../../assets/camera.png";
import caracteristicas from "../../assets/user_info/caracteristicas.png";
import saude from "../../assets/user_info/saude.png";
import Popup from "../PopUp";
import { Container,ConteinerFeatures, ContainerModal, LabelGenero, Header, Creator, Photo , LabelLocation , ConteinerInput, Input , Name, ExitButton, ContainerRadio,LostedPhoto ,ConteinerPhoto, ButtonPhoto , Body, TextArea, Line, InputName, InputBorned ,Label, Date, Time, RadioGenre, Column, RadioGroup, RadioStyled,ButtonPublicar,ContainerItem,LabelItem,ButtonExcluir, Linha, InputEndereco } from './style';

function CreatePost({showCreatePost, user}) {

    const [photo, setPhoto] = useState(null);

    const [features , setFeatures] = useState([]);

    const [problems , setProblems] = useState([]);

    const [bornedAt, setBornedAt] = useState("");

    const [seen, setSeen] = useState({}); 

    const [name, setName] = useState("");

    const [genre, setGenre] = useState("");

    const [description, setDescription] = useState("");

    const [item, setItem] = useState({
        problem:"",
        feature: "",
    });

    const [location, setLocation ] = useState({
        cep:"",
        street:"",
        bairro:"",
        state:"",
        city:"",
        reference_point: "",
    });

    const [cep, setCep] = useState("");

    const imgRef = useRef();

    const handlerImage = (e) => {
        if (e.target.files[0]) {
            imgRef.current.src = URL.createObjectURL(e.target.files[0])
            setPhoto(e.target.files[0]);
        }
    };

    const handlerLocation = (e) => {
        e.target.id === 'cep' ? 
            setLocation({ ...location , cep: e.target.value.replace(/[^0-9]/g,'').replace(/(.{5})(.{3})/,'$1-$2').replace(/(.{9})(.*)/,'$1') }) :
            setLocation({ ...location , [e.target.id]: e.target.value });
    };

    const handlerFeatures = (e) => {
        if (e.key === 'Enter' && e.target.value ) {
            setFeatures([...features , e.target.value]);
            setItem({...item, feature:""});
        }
    };

    const handlerProblems = (e) => {
        if (e.key === 'Enter' && e.target.value ) {
            setProblems([...problems , e.target.value]);
            setItem({...item, problem:""});
        }
    };

    const handlerBornedInput = (e) => {
        setBornedAt(e.target.value);
    };

    const handlerSeen = (e) => {
        setSeen({...seen,[e.target.id]:e.target.value});
    };

    const handlerName = (e) => {
        setName(e.target.value);
    };

    const handlerGenre = (e) => {
        setGenre(e.target.id);
    };

    const handlerDescription = (e) => {
        setDescription(e.target.value);
    };

    const handlerItem = (e) => {
        setItem({ ...item , [e.target.id] : e.target.value });
    };

    const createPost = async ( ) => {

        await api.post('/genre',{genre});    
        
        const data = new FormData();

        data.append("name", name);
        data.append("description", description);
        data.append("borned_at", bornedAt);
        data.append("name_of_genre",genre);
        data.append("photo",photo);
        
        try{
            var postCreated = await api.post('/posts', data, {
                headers: {
                    "Content-type": `multipart/form-data`,
                }
            });

            if ( postCreated ) {

                console.log("postCreated")

                const data = {
                    street:location.street, 
                    bairro: location.bairro, 
                    cep:location.cep, 
                    reference_point:location.reference_point,  
                    city: location.city, 
                    state: location.state,
                    complement: "test",
                    seen_at_date: seen.date, 
                    seen_at_hours: seen.time
                };
                
                const seenCreated = await api.post(`/seen/${postCreated.data.id}`,data);
    
                if ( seenCreated ){
    
                    problems.map( problem => {
                        (async()=>{
                            await api.post(`/healthProblems/post/${postCreated.data.id}`,{problem});
                        })();
                    });
                    features.map( feature => {
                        (async()=>{
                            await api.post(`/features/post/${postCreated.data.id}`,{feature});
                        })();
                    });
    
                    showCreatePost(false);
                    window.alert("Post criado com sucesso!");
    
                }
            }
        }catch(err){
            console.log(err)
        }
    };

    const getAddress = async( e ) => {
        const url = `https://api.postmon.com.br/v1/cep/${location.cep}`;

        const address = await fetch(url).then(res => res.json());
    
        setLocation({ ...location ,
            street:address.logradouro,
            bairro: address.bairro,
            city: address.cidade,
            state: address.estado_info.nome,
        })
    }

    function Item({ item , isFeature }){

        const deleteItem = () => {
            if ( isFeature ) {
                setFeatures( features.filter(( feature ) => feature !== item ) );
            } else {
                setProblems( problems.filter(( problem ) => problem !== item ) );
            }
        };

        return (
            <ContainerItem>
                <LabelItem>{item}</LabelItem>
                <ButtonExcluir onClick={deleteItem} >x</ButtonExcluir>
            </ContainerItem>
        );
    }

    return (
    <Popup>    
        <ContainerModal>
            <Container>
                
                <Header>
                    <Creator>
                        <Photo alt="foto do usuario" src={user.image} />
                        <Name>{user.user.name}</Name>
                    </Creator>
                
                    <ExitButton onClick={()=>showCreatePost(false)} />
                </Header>
                
                <Body>

                <Line>
                    
                    <Column>
                        <Label>Data de nascimento do desaparecido</Label>
                        <InputBorned value={bornedAt} onChange={handlerBornedInput} />
                    </Column>

                    <Column>
                        <Label>Última data que foi visto</Label>
                        <Date onChange={handlerSeen} value={seen.date} id="date" />
                    </Column>

                    <Column>
                        <Label>Último horário que foi visto</Label>
                        <Time onChange={handlerSeen} value={seen.time} id="time" />
                    </Column>

                </Line>

                <Line>
                    
                    <Column>
                        <InputName value={name} onChange={handlerName} />
                        <Label>Nome do desaparecido</Label>
                    </Column>

                    <Column>
                        <LabelGenero>Gênero</LabelGenero>
                        
                        <RadioGroup>
                        
                            <ContainerRadio>
                                <RadioGenre onChange={handlerGenre} id="Masculino" />
                                <RadioStyled />
                                <Label>Masculino</Label> 
                            </ContainerRadio>
                            
                            <ContainerRadio>
                                <RadioGenre onChange={handlerGenre} id="Feminino" />
                                <RadioStyled />
                                <Label>Feminino</Label>
                            </ContainerRadio>
                            
                            <ContainerRadio>
                                <RadioGenre onChange={handlerGenre} id="LGBT" />
                                <RadioStyled />
                                <Label>Não binario</Label> 
                            </ContainerRadio>
                        
                        </RadioGroup>
                    </Column>
                
                </Line>                

                <Line>
                    <Column>
                        <TextArea value={description} onChange={handlerDescription}/>
                    </Column>    
                </Line>

                <Linha>
                    <Label>Foto do desaparecido</Label>
                </Linha>

                <Line>

                    <ConteinerPhoto>
                        <LostedPhoto ref={imgRef}  />  
                        <label>
                            <img src={camera} alt="camera" />
                            <ButtonPhoto onChange={handlerImage}  />
                        </label>

                    </ConteinerPhoto>

                </Line>

                <Line>
                    <Column>
                        <Label>Características Físicas</Label>
                        <ConteinerInput>
                            <span><img src={caracteristicas}/></span> 
                            <Input id="feature" onChange={handlerItem} value={item.feature} onKeyPress={handlerFeatures}/>
                        </ConteinerInput>    
                        <ConteinerFeatures>
                            {
                                features.map( feature =>  <Item item={feature} isFeature={true} /> )
                            }
                        </ConteinerFeatures>
                    </Column>
                </Line>
                
                <Line>
                    <Column>
                        <Label>Problemas de Saúde</Label>
                        <ConteinerInput>
                            <span><img src={saude}/></span>  
                            <Input onChange={handlerItem} id="problem" value={item.problem} onKeyPress={handlerProblems} />
                        </ConteinerInput>
                        <ConteinerFeatures>
                            {
                                problems.map( problem => <Item item={problem} /> )
                            }
                        </ConteinerFeatures>
                    </Column>
                </Line>

                    <Line>
                        <LabelLocation>Localização da última vez que foi visto:</LabelLocation>
                    </Line>
                    <Line>
                        <Column>
                            <Label>CEP</Label>
                            <InputEndereco id="cep" onBlur={getAddress} value={location.cep} onChange={handlerLocation} />
                        </Column>
                        <Column>
                            <Label>Ponto de referência</Label>
                            <InputEndereco value={location.reference_point} onChange={handlerLocation} id="reference_point" />
                        </Column>
                    </Line>
                    <Line>
                        <Column>
                            <Label>Bairro</Label>
                            <InputEndereco onChange={handlerLocation} value={location.bairro} id="bairro" />
                        </Column>
                        <Column>
                            <Label>Rua</Label>
                            <InputEndereco onChange={handlerLocation} value={location.street} id="street"/>
                        </Column>
                    </Line>
                    <Line>
                        <Column>
                            <Label>Cidade</Label>
                            <InputEndereco onChange={handlerLocation} value={location.city} id="city"/>
                        </Column>
                        <Column>
                            <Label>Estado</Label>
                            <InputEndereco onChange={handlerLocation} value={location.state} id="state"/>
                        </Column>
                    </Line>

                    <Line>
                        <ButtonPublicar onClick={createPost} />
                    </Line>

                </Body>

            </Container>
        </ContainerModal>
    </Popup>

  );
}

export default CreatePost;
