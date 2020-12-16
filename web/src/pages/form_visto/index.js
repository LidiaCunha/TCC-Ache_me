import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { usePost } from "../../contexts/PostProvider";
import { api } from "../../services/api";
import {Container, ContainerDuplo, RadioGenre, RadioGroup, RadioStyled, ContainerRadio, ContainerInputs, Texto, Titulo, ButtonSalvar, ContainerBotao} from './styles';

const FormVisto = ( ) => {

    const {post} = usePost();
console.log(post)
    const history = useHistory();

    const [radio, setRadio] = useState("");

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

    const handlerRadio = (e) => {
        setRadio(e.target.id);
    };

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

    const createSeen = async( ) => {

        const data = {
            street:values.street, 
            bairro:values.bairro, 
            cep: values.cep, 
            reference_point:radio,
            city :values.city, 
            state : values.state, 
            seen_at_date :values.date, 
            seen_at_hours : values.time
        }

        const res = await api.post(`/seen/${post?.LostedThatWasSeen?.id}` , data );

        if ( res.status === 201 ){
            window.alert("Visto criado com sucesso!");
            history.push('/feed');
        }else{
            window.alert("ERRO AO CRIAR O VISTO!");
        }
    };


    return(
        <Container>
            <Titulo>Você viu {post?.LostedThatWasSeen?.name}?</Titulo>
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
                        <input id="number" value={values.number} tipe="text" onChange={handlerInput} />
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
                    <ButtonSalvar onClick={createSeen} />
                </ContainerBotao>
        </Container>
    )
}

export default FormVisto;
