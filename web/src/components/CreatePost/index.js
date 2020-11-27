import React, { useEffect, useState } from 'react';

import camera from "../../assets/camera.png";
import { Container,ConteinerFeatures, ContainerModal, Header, Creator, Photo, ConteinerInput, Input , Name, ExitButton, ContainerRadio,LostedPhoto ,ConteinerPhoto, ButtonPhoto , Body, TextArea, Line, InputName, InputBorned ,Label, Date, Time, RadioGenre, Column, RadioGroup, RadioStyled,ButtonPublicar,ContainerItem,LabelItem,ButtonExcluir } from './style';

function CreatePost() {

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

    const handlerImage = (e) => {
        if (e.target.files[0]) {
            setPhoto(URL.createObjectURL(e.target.files[0]));
        }
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
                <ButtonExcluir onClick={deleteItem} ><p>x</p></ButtonExcluir>
            </ContainerItem>
        );
    }

    useEffect(()=>{
        console.log({name,description,bornedAt, genre, problems,features, photo, seen})
    },[genre])

    return (
    <ContainerModal>
        <Container>
            
            <Header>
                <Creator>
                    <Photo alt="foto do usuario" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.L0MNPgLV6IWoihSTt0NPNwHaF7%26pid%3DApi&f=1" />
                    <Name>Algum Nome De Alguem</Name>
                </Creator>
            
                <ExitButton />
            </Header>
            
            <Body>
                <Line>
                    
                    <Column>
                        <Label>Data de nascimento do desaparecido</Label>
                        <InputBorned value={bornedAt} onChange={handlerBornedInput} />
                    </Column>

                    <Column>
                        <Label>Ultima Data que foi Visto</Label>
                        <Date onChange={handlerSeen} value={seen.date} id="date" />
                    </Column>

                    <Column>
                        <Label>Ultimo Horário que foi Visto</Label>
                        <Time onChange={handlerSeen} value={seen.time} id="time" />
                    </Column>

                </Line>

                <Line>
                    
                    <Column>
                        <InputName value={name} onChange={handlerName} />
                        <Label>Nome Do Desaparecido</Label>
                    </Column>

                    <Column>
                        <Label>Genero</Label>
                        
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

                <Line>

                    <ConteinerPhoto>

                        { photo && <LostedPhoto src={photo}  alt="LostedPhoto"/> }
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
                            <span></span> 
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
                            <span></span>  
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
                    <ButtonPublicar onClick={()=>console.log("n")} />
                </Line>

            </Body>

        </Container>
    </ContainerModal>
  );
}

export default CreatePost;