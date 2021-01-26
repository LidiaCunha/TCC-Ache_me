import React, {useRef, useState} from "react";
import {Container, ContainerDuplo, LostedPhoto, ConteinerPhoto, ButtonPhoto, ContainerInputs, Texto, Titulo, ButtonSalvar, ContainerBotao} from './styles';
import camera from "../../assets/camera.png";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { usePost } from "../../contexts/PostProvider";

const FormEncontrado = () => {

    const {post} = usePost();

    const [photo, setPhoto] = useState(null);
    
    const imgRef = useRef();

    const history = useHistory();

    const handlerImage = (e) => {
        if (e.target.files[0]) {
            imgRef.current.src = URL.createObjectURL(e.target.files[0])
            setPhoto(e.target.files[0]);
        }
    };

    const [values, setValues] = useState({
        date:'',
        time:'',
        cep:'',
        street:'',
        bairro:'',
        city:'',
        state:'',
        number:'',
    });

    const handlerInput = (e) => {
        e.target.id === 'cep' ? 
            setValues({ ...values , cep: e.target.value.replace(/[^0-9]/g,'').replace(/(.{5})(.{3})/,'$1-$2').replace(/(.{9})(.*)/,'$1') }) :
            setValues({ ...values , [e.target.id]: e.target.value });
    };

    const getAddress = async( ) => {
        const url = `https://api.postmon.com.br/v1/cep/${values.cep}`;

        const address = await fetch(url).then(res => res.json());

        setValues({
            ...values,
            street:address.logradouro,
            bairro:address.bairro,
            city:address.cidade,
            state: address.estado_info.nome,
        })
    };

    const createFound = async( ) => {

        const data = new FormData();

        data.append('found_at', values.date+values.time)
        data.append('street',values.street)
        data.append('city',values.city)
        data.append('state',values.state)
        data.append('bairro',values.bairro)
        data.append('reference_point',values.number)
        data.append('complement',values.number)
        data.append('photo',photo)

        const res = await api.post(`/found/${post?.LostedThatWasSeen?.id}`, data, {
            headers:{
                "Content-type": `multipart/form-data`,
            }   
        })

        if ( res.status === 201 ) {
            window.alert("encontrado criado com sucesso!!")
            history.push('/feed')
        } else {
            window.alert("ERRO AO CRIAR ENCRONTRADO")
        }
    };

    return(
        <Container>
            <Titulo>Você encontrou {post?.LostedThatWasSeen?.name}?</Titulo>
            <Texto>As respostas desse formulário serão enviadas para o <span>{post?.LostedThatWasSeen?.postCreator?.name}</span> em seu chat.</Texto>
            <ContainerInputs>
                <ContainerDuplo>
                    <Texto>Data</Texto>
                    <input onChange={handlerInput} type="date" id="date" value={values.date} />
                </ContainerDuplo>
                <ContainerDuplo>
                    <Texto>Horário</Texto>
                    <ContainerInputs>
                        <input type="time" onChange={handlerInput} id="time" value={values.time} />
                    </ContainerInputs>
                </ContainerDuplo>
            </ContainerInputs>
            <ContainerDuplo>
                    <Texto>CEP (Opcional)</Texto>
                    <input type="text" id="cep" onChange={handlerInput} onBlur={getAddress} value={values.cep} />
            </ContainerDuplo>
            <ContainerDuplo>
                    <Texto>Rua</Texto>
                    <input type="text" id="street" onChange={handlerInput} value={values.street} />
            </ContainerDuplo>
            <ContainerDuplo>
                    <Texto>Bairro</Texto>
                    <input type="text" id="bairro" onChange={handlerInput} value={values.bairro} />
            </ContainerDuplo>
            <ContainerDuplo>
                    <Texto>Cidade</Texto>
                    <input type="text" id="city" onChange={handlerInput} value={values.city} />
            </ContainerDuplo>
            <ContainerInputs>
                <ContainerDuplo>
                    <Texto>Estado</Texto>
                    <input id="state" type="text" onChange={handlerInput} value={values.state} />
                </ContainerDuplo>
                <ContainerDuplo>
                    <Texto>Número</Texto>
                    <ContainerInputs>
                        <input tipe="text" id="number" onChange={handlerInput} value={values.number} />
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
                    <ButtonSalvar onClick={createFound} />
                </ContainerBotao>
        </Container>
    )
}

export default FormEncontrado;