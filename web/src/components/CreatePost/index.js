import React, { useState } from 'react';

import camera from "../../assets/camera.png";
import { Container, ContainerModal, Header, Creator, Photo, ConteinerInput, Input , Name, ExitButton, ContainerRadio,LostedPhoto ,ConteinerPhoto, ButtonPhoto , Body, TextArea, Line, InputName, InputBorned ,Label, Date, Time, RadioGenre, Column, RadioGroup, RadioStyled,ButtonPublicar,ContainerItem,LabelItem,ButtonExcluir } from './style';

function CreatePost() {

    const [photo, setPhoto] = useState(null);

    const handlerImage = (e) => {
        if (e.target.files[0]) {
            setPhoto(URL.createObjectURL(e.target.files[0]));
        }
    };

    const Item = (
        <ContainerItem>
            <LabelItem>mmmmm</LabelItem>
            <ButtonExcluir>x</ButtonExcluir>
        </ContainerItem>
    );

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
                        <InputBorned />
                    </Column>

                    <Column>
                        <Label>Ultima Data que foi Visto</Label>
                        <Date />
                    </Column>

                    <Column>
                        <Label>Ultimo Horário que foi Visto</Label>
                        <Time />
                    </Column>

                </Line>

                <Line>
                    
                    <Column>
                        <InputName/>
                        <Label>Nome Do Desaparecido</Label>
                    </Column>

                    <Column>
                        <Label>Genero</Label>
                        
                        <RadioGroup>
                        
                            <ContainerRadio>
                                <RadioGenre />
                                <RadioStyled />
                                <Label>Masculino</Label> 
                            </ContainerRadio>
                            
                            <ContainerRadio>
                                <RadioGenre />
                                <RadioStyled />
                                <Label>Feminino</Label>
                            </ContainerRadio>
                            
                            <ContainerRadio>
                                <RadioGenre />
                                <RadioStyled />
                                <Label>Não binario</Label> 
                            </ContainerRadio>
                        
                        </RadioGroup>
                    </Column>
                
                </Line>                

                <Line>
                    <Column>
                        <TextArea />
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
                            <Input />
                        </ConteinerInput>    
                        <ContainerItem>
                            <LabelItem>mmmmm</LabelItem>
                            <ButtonExcluir>x</ButtonExcluir>
                        </ContainerItem>
                    </Column>
                    
                </Line>
                
                <Line>
                    <Column>
                        <Label>Problemas de Saúde</Label>
                        <ConteinerInput>
                            <span></span>  
                            <Input />
                        </ConteinerInput>
                    </Column>
                </Line>

                <Line>
                    <ButtonPublicar>Publicar</ButtonPublicar>
                </Line>

            </Body>

        </Container>
    </ContainerModal>
  );
}

export default CreatePost;