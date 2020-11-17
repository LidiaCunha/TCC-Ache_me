import React from "react";
import { TextoOpcoes, ContainerModal, Modal, Ok, TextoModal, ViewMensagem, TextoCards, IconeExcluir, ContainerIcone, Icone, Title, TextoCaracteristicas, ContainerCaracteristicas, Caracteristicas } from './styles';
import {StyleSheet} from "react-native";
import Foto from "../../assets/foto.png";
import Icon from 'react-native-vector-icons/Feather';

const ModalCaracteristicas = () => {
    return (
        <ContainerModal>
            <Modal>
                <TextoModal>CARACTERÍSTICAS FÍSICAS</TextoModal>
                <ViewMensagem>
                    <ContainerIcone>
                        <Icone source={Foto}/>
                    </ContainerIcone>
                    <TextoCaracteristicas>Cabelos longos</TextoCaracteristicas>
                </ViewMensagem>
                <ContainerCaracteristicas horizontal={true}>
                    <Caracteristicas style={styles.um}>
                        <TextoCards>Cabelo castanho</TextoCards>
                        <IconeExcluir>
                            <Icon name="x" color="red" size={20}/>
                        </IconeExcluir>
                    </Caracteristicas>
                    <Caracteristicas style={styles.dois}>
                        <TextoCards>Baixa</TextoCards>
                        <IconeExcluir>
                            <Icon name="x" color="red" size={20}/>
                        </IconeExcluir>
                    </Caracteristicas>
                    <Caracteristicas style={styles.tres}>
                        <TextoCards>Magra</TextoCards>
                        <IconeExcluir>
                            <Icon name="x" color="red" size={20}/>
                        </IconeExcluir>
                    </Caracteristicas>
                </ContainerCaracteristicas>
                <Ok><TextoCards>OK</TextoCards></Ok>
            </Modal>
        </ContainerModal>
    )
}

export default ModalCaracteristicas;

const styles = StyleSheet.create({
    um: {
        backgroundColor: '#E33336',
    },
    dois: {
        backgroundColor: '#F53B3F',
    },
    tres: {
        backgroundColor: '#F95F62',
    }
})