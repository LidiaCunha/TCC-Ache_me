import React, {useState} from "react";
import {Container, ContainerDuplo, RadioGenre, RadioGroup, RadioStyled, ContainerRadio, ContainerInputs, Texto, Titulo, ButtonSalvar, ContainerBotao} from './styles';

const FormVisto = () => {

    const [radio, setRadio] = useState("");

    const handlerRadio = (e) => {
        setRadio(e.target.id);
    };

    return(
        <Container>
            <Titulo>Você viu essa pessoa?</Titulo>
            <Texto>As respostas desse formulário serão enviadas para o <span>James</span> em seu chat.</Texto>
            <ContainerInputs>
                <ContainerDuplo>
                    <Texto>Data</Texto>
                    <input type="data"/>
                </ContainerDuplo>
                <ContainerDuplo>
                    <Texto>Horário</Texto>
                    <ContainerInputs>
                        <input tipe="text"/>
                        <p>:</p>
                        <input tipe="text"/>
                    </ContainerInputs>
                </ContainerDuplo>
            </ContainerInputs>
            <ContainerDuplo>
                    <Texto>CEP (Opcional)</Texto>
                    <input type="text"/>
            </ContainerDuplo>
            <ContainerDuplo>
                    <Texto>Rua</Texto>
                    <input type="text"/>
            </ContainerDuplo>
            <ContainerDuplo>
                    <Texto>Bairro</Texto>
                    <input type="text"/>
            </ContainerDuplo>
            <ContainerDuplo>
                    <Texto>Cidade</Texto>
                    <input type="text"/>
            </ContainerDuplo>
            <ContainerInputs>
                <ContainerDuplo>
                    <Texto>Estado</Texto>
                    <input type="text"/>
                </ContainerDuplo>
                <ContainerDuplo>
                    <Texto>Número</Texto>
                    <ContainerInputs>
                        <input tipe="text"/>
                    </ContainerInputs>
                </ContainerDuplo>
            </ContainerInputs>
            <ContainerDuplo>
                <Texto>Confirmação</Texto>
            </ContainerDuplo>
            <RadioGroup>            
                <ContainerRadio>
                    <RadioGenre onChange={handlerRadio} id="Confirmo" />
                    <RadioStyled />
                    <p>Confirmo</p> 
                 </ContainerRadio>            
                <ContainerRadio>
                    <RadioGenre onChange={handlerRadio} id="Não confirmo" />
                        <RadioStyled />
                        <p>Não confirmo</p>
                </ContainerRadio>          
            </RadioGroup>
                <ContainerBotao>
                    <ButtonSalvar/>
                </ContainerBotao>
        </Container>
    )
}

export default FormVisto;