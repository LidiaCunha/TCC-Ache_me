import React from "react";
import { ContainerDadosMensagem, MenuVoltarDados, Seta, Data, Texto } from './styles';
import seta from '../../assets/setaVoltar.png';

const DadosMensagem = () => {
    return(
        <ContainerDadosMensagem>
            <MenuVoltarDados>
                <Seta source={seta}/>
            </MenuVoltarDados>
            <Texto>Data da mensagem</Texto>
            <Data>28 de outubro de 2020</Data>
            <Border/>
            <Texto>Hora da mensagem</Texto>
            <Data>às 08:05</Data>
        </ContainerDadosMensagem>
    )
}

export default DadosMensagem;