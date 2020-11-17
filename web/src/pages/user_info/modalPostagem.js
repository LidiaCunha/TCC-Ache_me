import React from "react";
import { CardPosts, Container, ContainerModal, ContainerPosts, TextoData, TextoPost, Modal, FotoUsuario, TextoNome, AreaFotoNome } from "./styles";
import foto from "../../assets/Sobre/everson.jpeg"

const ModalPostagem = () => {
    return(
        <ContainerModal>
            <Modal>
                <ContainerPosts>
                    <TextoData>20 de nov. de 2020</TextoData>
                    <CardPosts>
                        <AreaFotoNome>
                            <FotoUsuario><img src={foto}/></FotoUsuario>
                            <TextoNome>Everson Silva de Almeida</TextoNome>
                        </AreaFotoNome>
                        <TextoPost>A expressão Lorem ipsum em design gráfico e editoração é 
                            um texto padrão em latim utilizado na produção gráfica para 
                            preencher os espaços de texto em publicações para testar e 
                            ajustar aspectos visuais antes de utilizar conteúdo real.</TextoPost>
                    </CardPosts>
                    <TextoData>20 de nov. de 2020</TextoData>
                    <CardPosts></CardPosts>
                    <TextoData>20 de nov. de 2020</TextoData>
                    <CardPosts></CardPosts>
                    <TextoData>20 de nov. de 2020</TextoData>
                    <CardPosts></CardPosts>
                </ContainerPosts>
                <ContainerPosts>
                    <TextoData>20 de nov. de 2020</TextoData>
                    <CardPosts></CardPosts>
                    <TextoData>20 de nov. de 2020</TextoData>
                    <CardPosts></CardPosts>
                    <TextoData>20 de nov. de 2020</TextoData>
                    <CardPosts></CardPosts>
                    <TextoData>20 de nov. de 2020</TextoData>
                    <CardPosts></CardPosts>
                </ContainerPosts>
            </Modal>
        </ContainerModal>
    )
}

export default ModalPostagem;