import React from 'react';
import {Container, BotaoVoltar, ContainerCadastro, Input, Botao, Texto} from '../cadastro_dados_pessoais/styles';
import { IconeCadastro } from './styles';
import planoDeFundo from "../../assets/planoDeFundo.jpg";
import setaVoltar from "../../assets/setaVoltar.png";
import Icone from "../../assets/iconeEndereco.png";

const CadastroEndereco = () => {
    return(
        <Container source={planoDeFundo}>
            <BotaoVoltar source={setaVoltar}/>
            <ContainerCadastro>
                <IconeCadastro source={Icone}/>
                <Input placeholder="Insira seu cep"></Input>
                <Input placeholder="Insira sua rua"></Input>
                <Input placeholder="Insira seu bairro"></Input>
                <Input placeholder="Insira sua cidade"></Input>
                <Input placeholder="Insira seu estado"></Input>
                <Input placeholder="Insira seu número"></Input>
                <Botao><Texto>Próximo</Texto></Botao>
            </ContainerCadastro>
        </Container>
    )
}

export default CadastroEndereco;