import React from "react";
import { Container, TextoOpcoes, ContainerContatos, ContainerModal, Excluir, TextoModal } from './styles';

const ModalExcluir = (props) => {
    return(
                <ContainerModal>
                    <Excluir>
                        <TextoModal>Deseja apagar a mensagem?</TextoModal>
                        <TextoOpcoes>Cancelar</TextoOpcoes>
                        <TextoOpcoes>Excluir</TextoOpcoes>
                    </Excluir>
                </ContainerModal>
    )
}

export default ModalExcluir;