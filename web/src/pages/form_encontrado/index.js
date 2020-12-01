import React, {useRef, useState} from "react";
import {Container, ContainerDuplo, LostedPhoto, ConteinerPhoto, ButtonPhoto, ContainerInputs, Texto, Titulo, ButtonSalvar, ContainerBotao} from './styles';
import camera from "../../assets/camera.png";

const FormEncontrado = () => {

    const [photo, setPhoto] = useState(null);
    const imgRef = useRef();

    const handlerImage = (e) => {
        if (e.target.files[0]) {
            imgRef.current.src = URL.createObjectURL(e.target.files[0])
            setPhoto(e.target.files[0]);
        }
    };

    return(
        <Container>
            <Titulo>Você encontrou essa pessoa?</Titulo>
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
                    <Texto>Foto (Item obrigatório)</Texto>
            </ContainerDuplo>
                <ConteinerPhoto>
                    <LostedPhoto ref={imgRef}/>  
                    <label>
                        <img src={camera} alt="camera" />
                        <ButtonPhoto onChange={handlerImage}/>
                    </label>
                </ConteinerPhoto>
                <ContainerBotao>
                    <ButtonSalvar/>
                </ContainerBotao>
        </Container>
    )
}

export default FormEncontrado;