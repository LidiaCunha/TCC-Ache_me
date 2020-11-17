import React from "react";
import { ContainerDadosMensagem, MenuVoltarDados, Seta, Data, Texto, Border } from './styles';
import seta from '../../assets/setaVoltar.png';
import moment from 'moment';

const DadosMensagem = ({time}) => {
    return(
        <ContainerDadosMensagem>
            <MenuVoltarDados>
                <Seta source={seta}/>
            </MenuVoltarDados>
            <Texto>Data da mensagem</Texto>
            <Data>{moment(time).format('LLLL')}</Data>
            <Border/>
            <Texto>Hora da mensagem</Texto>
            <Data>{moment(time).format('HH:mm:ss')}</Data>
        </ContainerDadosMensagem>
    )
}

export default DadosMensagem;