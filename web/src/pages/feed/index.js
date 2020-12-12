import React, { useState, useEffect, useRef } from 'react';
import {AreaTextos,Container,FilterButton, IconeAcoes, ContainerFiltros, GridContainers, ImagemUsuario, Menu, ContainerPosts,ContainerContrib,CriarPost,Post, Texto, ContainerInputs, ContainerDuplo, Icone, RadioGenre, RadioGroup, RadioStyled, ContainerRadio,ContainerItem, LabelItem, ButtonExcluir, Linha, Contribuidor, LinhaMerito, AreaGrid, GridFotos, GridNumero, Flex, Acoes, Botao} from './styles';
import home from "../../assets/user_info/home.png";
import camera from "../../assets/camera.png";
import estrela from "../../assets/star.png";
import photo from "../../assets/userTest.png";
import foto from "../../assets/users.png";
import share from "../../assets/compartilhar.png";
import denuncia from "../../assets/atencao.png";
import compartilhar from "../../assets/opcao-de-compartilhamento.png";
import placa from "../../assets/placa.png";
import pegadas from "../../assets/pegadas.png";
import sair from "../../assets/opcao-de-sair.png";
import {getUsers} from '../../services/security'
import { api } from '../../services/api';
import LostedPost from "../post";
import CreatePost from "../../components/CreatePost";

const Feed = () => {
    
    const user = getUsers();

// STATES
    const [item, setItem] = useState({
        problem: "",
        feature: "",
    });
    
    const [filterValues, setFilterValues] = useState({
        seen_at_date: "",
        seen_at_time: "",
        cep: "",
        street: "",
        state: "",
        city: "",
        bairro: "",
        number: "",
        borned_at_date: ""
    })

    const [features, setFeatures] = useState([]);
    
    const [problems, setProblems] = useState([]);

    const [radio, setRadio] = useState("");

    const [collaborators,setCollaborators ] = useState([]);

    const [posts, setPosts] = useState([]);

    const [showCreatePost, setShowCreatePost] = useState(false);

// HANDLERS
    const handlerRadio = (e) => {
        setRadio(e.target.id);
    };

    const handlerFeatures = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setFeatures([...features, e.target.value]);
            setItem({ ...item, feature: "" });
        }
    };

    const handlerProblems = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setProblems([...problems, e.target.value]);
            setItem({ ...item, problem: "" });
        }
    };

    const handlerItem = (e) => {
        setItem({ ...item, [e.target.id]: e.target.value });
    };

    const handlerInput = (e) => {
        setFilterValues({ ...filterValues, [e.target.id]: e.target.value })
    };

// EFFECTS 
    useEffect( () => {
        getAllUsers();
    },[]);

    useEffect( () => {
        getPosts()
    }, [setShowCreatePost])

// FUNCTIONS
    const filter = async() => {
        const now = new Date();
        const res = await api.get(`/post/filterby/?${features.map( feature => {return `&F=${feature}`} )}${problems.map( problem => {return `&H=${problem}&Sa=${filterValues.seen_at_date+'T'+filterValues.seen_at_time+'Z'}&Str=${filterValues.street}&Ct=${filterValues.city}&Amin=${filterValues.borned_at_date.split('/').pop()-now.getFullYear()}`} )}&Amax=${filterValues.borned_at_date.split('/').pop()-now.getFullYear()}&Br=${filterValues.bairro}&Cp=${filterValues.cep}&Np=${filterValues.number}&Stt=${filterValues.state}&G=${radio}`);
        
        setPosts(res.data)
               
    }

    const getPosts = async( ) => {
        const response = await api.get('/seen');
        
        setPosts(response.data)
    }

    const getAllUsers = async()=>{
        const res = await api.get('/users');
        
        const allUsers = res.data;

        const colaboradores = allUsers.map( (user) => {
            const membersOfthisUser = allUsers.filter( member => member.indication === user.mail )
            return membersOfthisUser.length && {...user, indications: membersOfthisUser };
        })

        setCollaborators(colaboradores);
    }

// COMPONENTS
    function Item({ item, isFeature }) {

        const deleteItem = () => {
            if (isFeature) {
                setFeatures(features.filter((feature) => feature !== item));
            } else {
                setProblems(problems.filter((problem) => problem !== item));
            }
        };

        return (
            <ContainerItem>
                <LabelItem>{item}</LabelItem>
                <ButtonExcluir onClick={deleteItem} >x</ButtonExcluir>
            </ContainerItem>
        );
    }

    function Member({ member }) {
        const numberOfStarts = (star) => {
            let count = star > 5 ? 5 : star;
            const arr = []
            while(count > 0){
                arr.push('n')
    
                count--;
            }
            return arr;
        }
        return (
            <Contribuidor>
                <ImagemUsuario>
                    <img src={member.photo !== 'undefined' ? member.photo : photo} />
                </ImagemUsuario>
                <p>{member.name}</p>
                <LinhaMerito>
                    <span>Mérito</span>
                    {numberOfStarts(member.merit).map(()=> <img src={estrela} className="estrela" /> ) }
                </LinhaMerito>
                <AreaGrid>
                    <GridFotos>
                        <img src={member.indications[0]?.photo && member.indications[0]?.photo !== 'undefined' ? member.indications[0]?.photo : photo } />
                        <Flex>
                            <img src={member.indications[1]?.photo && member.indications[1]?.photo !== 'undefined' ? member.indications[1]?.photo : photo} />
                            <img src={member.indications[2]?.photo && member.indications[2]?.photo !== 'undefined' ? member.indications[2]?.photo : photo} />
                        </Flex>
                    </GridFotos>
                    <GridNumero>
                        <p>{member.merit-3 > 0 ?  <span>+</span> + (member.merit-3) : '' }</p>
                    </GridNumero>
                </AreaGrid>
            </Contribuidor>
        );
    }

    return (
        <Container>
            {showCreatePost && <CreatePost showCreatePost={setShowCreatePost} user={{user}} />}
            <Menu>
                <Icone id="foto"><img src={foto}/></Icone>
                <Icone><img src={sair}/></Icone>
                <ImagemUsuario id="usuario">
                    <img src={user.photo === 'undefined' ? photo : user.photo } />
                </ImagemUsuario>
            </Menu>
            <AreaTextos>
                <p>FILTROS</p>
                <p id="contribuintes">CONTRIBUINTES DA ACHE.ME</p>
            </AreaTextos>
            <GridContainers>
                <ContainerFiltros>
                    <ContainerInputs>
                        <Icone><img src={placa}/></Icone>
                        <p>DESAPARECIMENTO</p>
                    </ContainerInputs>
                    <ContainerInputs>
                        <ContainerDuplo>
                            <Texto>Data</Texto>
                            <input type="date" id="seen_at_date" onChange={handlerInput} />
                        </ContainerDuplo>
                        <ContainerDuplo>
                            <Texto>Horário</Texto>
                            <ContainerInputs>
                                <input type="time" id="seen_at_time" onChange={handlerInput} />
                            </ContainerInputs>
                        </ContainerDuplo>
                    </ContainerInputs>
                    <ContainerDuplo>
                        <Texto>CEP</Texto>
                        <input type="text" id="cep" onChange={handlerInput} />
                    </ContainerDuplo>
                    <ContainerDuplo>
                        <Texto>Rua</Texto>
                        <input type="text" id="street" onChange={handlerInput} />
                    </ContainerDuplo>
                    <ContainerDuplo>
                        <Texto>Bairro</Texto>
                        <input type="text" id="bairro" onChange={handlerInput} />
                    </ContainerDuplo>
                    <ContainerDuplo>
                        <Texto>Cidade</Texto>
                        <input type="text" id="city" onChange={handlerInput} />
                    </ContainerDuplo>
                    <ContainerInputs>
                        <ContainerDuplo>
                            <Texto>Estado</Texto>
                            <input type="text" onChange={handlerInput} id="state" />
                        </ContainerDuplo>
                        <ContainerDuplo>
                            <Texto>Número</Texto>
                            <ContainerInputs>
                                <input tipe="text" onChange={handlerInput} id="number" />
                            </ContainerInputs>
                        </ContainerDuplo>
                    </ContainerInputs>

                    <Linha />

                    <ContainerInputs>
                        <Icone><img src={pegadas}/></Icone>
                        <p>DESAPARECIDO</p>
                    </ContainerInputs>
                    <ContainerDuplo>
                        <Texto>Data de Nascimento</Texto>
                        <input type="date" id="borned_at_date" onChange={handlerInput} />
                    </ContainerDuplo>
                    <Texto>Gênero</Texto>
                    <RadioGroup>
                        <ContainerRadio>
                            <RadioGenre onChange={handlerRadio} id="Masculino" />
                            <RadioStyled />
                            <p>Masculino</p>
                        </ContainerRadio>
                        <ContainerRadio>
                            <RadioGenre onChange={handlerRadio} id="Feminino" />
                            <RadioStyled />
                            <p>Feminino</p>
                        </ContainerRadio>
                    </RadioGroup>
                    <RadioGroup>
                        <ContainerRadio id="outro">
                            <RadioGenre onChange={handlerRadio} id="Outro" />
                            <RadioStyled />
                            <p>Outro</p>
                        </ContainerRadio>
                    </RadioGroup>
                    <ContainerDuplo>
                        <Texto>Características Físicas</Texto>
                        <input onKeyPress={handlerFeatures} id="feature" onChange={handlerItem} value={item.feature} type="text" />
                    </ContainerDuplo>
                    <ContainerInputs>
                        {features.map(feature => <Item item={feature} isFeature={true} />)}
                    </ContainerInputs>
                    <ContainerDuplo>
                        <Texto>Problemas de Saúde</Texto>
                        <input type="text" onChange={handlerItem} id="problem" value={item.problem} onKeyPress={handlerProblems} />
                    </ContainerDuplo>
                    <ContainerInputs>
                        {problems.map(problem => <Item item={problem} />)}
                    </ContainerInputs>
                
                    <Botao id="filtrar" onClick={filter}><p>Filtrar</p></Botao>
                </ContainerFiltros>

                <ContainerPosts>
                    <CriarPost>
                        <p>Aqui <span>{user.name}</span>, você pode compartilhar pessoas desaparecidas e buscá-las também fazendo assim com que a rede de apoio entre os membros Ache.me cresça.</p>
                        <Acoes>
                            <p>SUAS AÇÕES:</p>
                            <IconeAcoes id="share" onClick={()=> setShowCreatePost(true)} ><img src={share}/></IconeAcoes>
                            <IconeAcoes id="denuncia"><img src={denuncia}/></IconeAcoes>
                            <IconeAcoes id="compartilhar"><img src={compartilhar}/></IconeAcoes>
                            <Botao><p>Minhas conversas</p></Botao>
                        </Acoes>
                    </CriarPost>
                    { posts.map( post => <Post> <LostedPost post={post} /> </Post> ) }
                </ContainerPosts>

                <ContainerContrib>
                    { collaborators.map( member => member && member.name ? <Member member={member} /> : '' )}
                </ContainerContrib>
            </GridContainers>
        </Container>
    );
};

export default Feed;
