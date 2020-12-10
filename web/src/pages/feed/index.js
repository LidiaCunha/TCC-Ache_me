import React, { useState, useEffect, useRef } from 'react';

import {
    AreaTextos,
  Container, ContainerFiltros, GridContainers, ImagemUsuario, Menu, ContainerPosts,
  ContainerContrib,
  CriarPost,
  Post, Texto, ContainerInputs, ContainerDuplo, Icone, RadioGenre, RadioGroup, RadioStyled, ContainerRadio,
  ContainerItem, LabelItem, ButtonExcluir, Linha, Contribuidor, LinhaMerito, AreaGrid, GridFotos, GridNumero, Flex
} from './styles';

import home from "../../assets/user_info/home.png";
import camera from "../../assets/camera.png";
import foto from "../../assets/Sobre/iuri.jpeg";
import estrela from "../../assets/star.png";

const Feed = () => {

    const [radio, setRadio] = useState("");
    const handlerRadio = (e) => {
        setRadio(e.target.id);
    };

  return (
    <Container>
        <Menu>
            <ImagemUsuario>
                <img src={foto}/>
            </ImagemUsuario>
        </Menu>
        <AreaTextos>
            <p>FILTROS</p>
            <p id="contribuintes">CONTRIBUINTES DA ACHE.ME</p>
        </AreaTextos>
        <GridContainers>



            <ContainerFiltros>
                <ContainerInputs>
                    <Icone></Icone>
                    <p>DESAPARECIMENTO</p>
                </ContainerInputs>
                <ContainerInputs>
                    <ContainerDuplo>
                        <Texto>Data</Texto>
                        <input type="date" />
                    </ContainerDuplo>
                    <ContainerDuplo>
                        <Texto>Horário</Texto>
                        <ContainerInputs>
                            <input type="time" />
                        </ContainerInputs>
                    </ContainerDuplo>
                </ContainerInputs>
                <ContainerDuplo>
                        <Texto>CEP (Opcional)</Texto>
                        <input type="text"/>
                </ContainerDuplo>
                <ContainerDuplo>
                        <Texto>Rua</Texto>
                        <input type="text"/>
                </ContainerDuplo>
                <ContainerDuplo>
                        <Texto>Bairro</Texto>
                        <input type="text"/>
                </ContainerDuplo>
                <ContainerDuplo>
                        <Texto>Cidade</Texto>
                        <input type="text"/>
                </ContainerDuplo>
                <ContainerInputs>
                    <ContainerDuplo>
                        <Texto>Estado</Texto>
                        <input type="text"/>
                    </ContainerDuplo>
                    <ContainerDuplo>
                        <Texto>Número</Texto>
                        <ContainerInputs>
                            <input tipe="text"/>
                        </ContainerInputs>
                    </ContainerDuplo>
                </ContainerInputs>

                <Linha/>

                <ContainerInputs>
                    <Icone></Icone>
                    <p>DESAPARECIDO</p>
                </ContainerInputs>
                    <ContainerDuplo>
                        <Texto>Data de Nascimento</Texto>
                        <input type="date"/>
                    </ContainerDuplo>
                <Texto>Gênero</Texto>
                <RadioGroup>            
                    <ContainerRadio>
                        <RadioGenre onChange={handlerRadio} id="Masculino" />
                        <RadioStyled />
                        <p>Masculino</p> 
                    </ContainerRadio>            
                    <ContainerRadio>
                        <RadioGenre onChange={handlerRadio} id="Feminino" />
                        <RadioStyled />
                        <p>Feminino</p>
                    </ContainerRadio>        
                </RadioGroup>
                <ContainerDuplo>
                        <Texto>Características Físicas</Texto>
                        <input type="text"/>
                </ContainerDuplo>
                <ContainerInputs>
                    <ContainerItem>
                        <LabelItem>Vesga</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                    <ContainerItem>
                        <LabelItem>Pé pequeno</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                    <ContainerItem>
                        <LabelItem>Vesga</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                    <ContainerItem>
                        <LabelItem>Vesga</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                    <ContainerItem>
                        <LabelItem>Vesga</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                </ContainerInputs>
                <ContainerDuplo>
                        <Texto>Problemas de Saúde</Texto>
                        <input type="text"/>
                </ContainerDuplo>
                <ContainerInputs>
                    <ContainerItem>
                        <LabelItem>Vesga</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                    <ContainerItem>
                        <LabelItem>Pé pequeno</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                    <ContainerItem>
                        <LabelItem>Vesga</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                    <ContainerItem>
                        <LabelItem>Vesga</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                    <ContainerItem>
                        <LabelItem>Vesga</LabelItem>
                        <ButtonExcluir>x</ButtonExcluir>
                    </ContainerItem>
                </ContainerInputs>
            </ContainerFiltros>



            <ContainerPosts>
                <CriarPost></CriarPost>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </ContainerPosts>





            <ContainerContrib>
                <Contribuidor>
                    <ImagemUsuario>
                        <img src={foto}/>
                    </ImagemUsuario>
                    <p>Iuri Correia Sampaio</p>
                    <LinhaMerito>
                        <span>Mérito</span>
                        <img src={estrela} className="estrela"/>
                        <img src={estrela} className="estrela"/>
                        <img src={estrela} className="estrela"/>
                    </LinhaMerito>
                    <AreaGrid>
                        <GridFotos>
                            <img src={foto}/>
                            <Flex>
                                <img src={foto}/>
                                <img src={foto}/>
                            </Flex>
                        </GridFotos>
                        <GridNumero>
                            <span>+</span>
                            <p>10</p>
                        </GridNumero>
                    </AreaGrid>
                </Contribuidor>
                <Contribuidor>
                    
                </Contribuidor>
                <Contribuidor>
                    
                </Contribuidor>
            </ContainerContrib>
        </GridContainers>
    </Container>
  );
};

export default Feed;