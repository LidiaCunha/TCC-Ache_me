import React from 'react';
import User from '../../assets/james.jpeg';
import Seta from '../../assets/setaVoltar.png';


import {  
    Container,
    ContainerBack,
    Container_card_postagem,
    ContainerData,
    Data,
    ContainerCard,
    Card,
    Container_img_name,
    ImgUser,
    NameUser,
    Text,
    ContainerBtn,
    BtnVerMais,
    Back,
    
} from './styles';

const Listagem_de_postagem = () => {
    return(
        <Container>
            
            <ContainerBack>
                <Back source={Seta}/>
            </ContainerBack>
        
            <Container_card_postagem>
                <ContainerData>
                    <Data>26 de outubro de 2020</Data>
                </ContainerData>
        
                <ContainerCard>
                    <Card>
                        <Container_img_name>
                            <ImgUser source={User}/>
                            <NameUser>James Paixão das Parada </NameUser>
                        </Container_img_name>
        
                        <Text>texto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto texto</Text>
    
                        <ContainerBtn>
                            <BtnVerMais>Ver mais</BtnVerMais>
                        </ContainerBtn>
                    </Card>
                </ContainerCard>
            </Container_card_postagem>
        
            <Container_card_postagem>
                    <ContainerData>
                        <Data>26 de outubro de 2020</Data>
                    </ContainerData>

                    <ContainerCard>
                        <Card>
                            <Container_img_name>
                                <ImgUser source={User}/>
                                <NameUser>James Paixão das Parada </NameUser>
                            </Container_img_name>

                            <Text>texto texto</Text>

                            <ContainerBtn>
                                <BtnVerMais>Ver mais</BtnVerMais>
                            </ContainerBtn>
                        </Card>
                    </ContainerCard>
                </Container_card_postagem>

            <Container_card_postagem>
                    <ContainerData>
                        <Data>26 de outubro de 2020</Data>
                    </ContainerData>

                    <ContainerCard>
                        <Card>
                            <Container_img_name>
                                <ImgUser source={User}/>
                                <NameUser>James Paixão das Parada </NameUser>
                            </Container_img_name>

                            <Text>texto textotexto textotexto texto</Text>

                            <ContainerBtn>
                                <BtnVerMais>Ver mais</BtnVerMais>
                            </ContainerBtn>
                        </Card>
                    </ContainerCard>
                </Container_card_postagem>

            <Container_card_postagem>
                    <ContainerData>
                        <Data>26 de outubro de 2020</Data>
                    </ContainerData>

                    <ContainerCard>
                        <Card>
                            <Container_img_name>
                                <ImgUser source={User}/>
                                <NameUser>James Paixão das Parada </NameUser>
                            </Container_img_name>

                            <Text>texto textotexto textotexto textotexto textotexto textotexto textotexto textotexto texto</Text>

                            <ContainerBtn>
                                <BtnVerMais>Ver mais</BtnVerMais>
                            </ContainerBtn>
                        </Card>
                    </ContainerCard>
                </Container_card_postagem>
        
        <ContainerBack/>
        </Container>
    );
}

export default Listagem_de_postagem;
