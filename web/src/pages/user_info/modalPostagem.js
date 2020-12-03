import React from "react";
import { CardPosts, Container, ContainerModal, ContainerPosts, TextoData, TextoPost, Modal, FotoUsuario, TextoNome, AreaFotoNome, VerMais } from "./styles";
import foto from "../../assets/Sobre/everson.jpeg";
import Popup from "../../components/PopUp";

const ModalPostagem = () => {
    return(
        <Popup>
            <Modal>
                <ContainerPosts id="impar">
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
                        <VerMais><p>Ver Mais</p></VerMais>
                    </CardPosts>
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
                        <VerMais><p>Ver Mais</p></VerMais>
                    </CardPosts>
                </ContainerPosts>
                <ContainerPosts id="par">
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
                        <VerMais><p>Ver Mais</p></VerMais>
                    </CardPosts>
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
                        <VerMais><p>Ver Mais</p></VerMais>
                    </CardPosts>
                </ContainerPosts>
            </Modal>
        </Popup>
    )
}

export default ModalPostagem;