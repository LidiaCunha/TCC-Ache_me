import React from "react";
import { Alert } from "react-native";
import { api } from '../../services/api';
import { Container, TextoOpcoes, ContainerContatos, ContainerModal, Excluir, TextoModal } from './styles';

const ModalExcluir = ({ idToDelete, setShowDeleteMessage }) => {


    const deleteMessage = async (id) => {
        await api.delete(`/messages/${id}`);

        return true
    }

    return (
        <ContainerModal>
            <Excluir>
                <TextoModal>Deseja apagar a mensagem?</TextoModal>
                <TextoOpcoes onPress={() => setShowDeleteMessage(false)} >CANCELAR</TextoOpcoes>
                <TextoOpcoes onPress={() => deleteMessage(idToDelete) && setShowDeleteMessage(false) }  >EXCLUIR</TextoOpcoes>
            </Excluir>
        </ContainerModal>
    )
}

export default ModalExcluir;