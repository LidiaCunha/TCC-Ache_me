import React from 'react';

import {  
    Container,
    ContainerUser,
    ContainerUserImg,
    ContainerUserName,
    ContainerText,
    Text,
    ContainerSeletedImg,
    ContainerImg,
    InputImg,
    ImageSeleted,
    ContainerFilter,
    Title,
    ContainerDateTime,
    ContainerDate,
    ContainerTime,
    Center,
    InputDate,
    InputTime,
    InputGenre,
    Lorem,
    LoremTime,
    ContainerBtnPublicar,
    BtnPublicar,
    
} from './styles';

const Criar_postagem = () => {
    return(
        <>
            <Container>
                <ContainerUser>
                    <ContainerUserImg/>
                    <ContainerUserName> Everson Silva de Almeida </ContainerUserName>
                </ContainerUser>

                <ContainerText>
                    <Text>lorem lorem lorem lorem lorem lorem lorem ola lorem lorem lorem lorem loremlorem  oi lorem lorem loremloremlorem loremloremloremlorem loremlorem lorem loremloremloremloremlorem loremlorem loremlorem loremloremlorem loremloremlorem lorem loremloremlorem loremloremloremloremlorem loremloremloremloremvlorem loremlorem</Text>
                </ContainerText>
        
                <ContainerSeletedImg>
                    <ContainerImg>
                        <InputImg/>
                        <ImageSeleted/>
                    </ContainerImg>
                </ContainerSeletedImg>
                
                <ContainerFilter> 
                    <Title> Filtros </Title> 
                    
                    <ContainerDateTime>
                        <ContainerDate>
                            <Lorem>Data</Lorem>
                            <InputDate placeholder="DD/MM/AAAA"/>
                        </ContainerDate>

                        <ContainerTime>
                            <Lorem>Horário</Lorem>
                            <Center>
                                <InputTime placeholder="HH"/>
                                <LoremTime>:</LoremTime>
                                <InputTime placeholder="MM"/>
                            </Center>
                        </ContainerTime>
                    </ContainerDateTime>
        
                    <ContainerDateTime>
                        <ContainerDate>
                            <Lorem>Gênero</Lorem>
                            <Center>
                                <InputGenre placeholder="Masculino"/>
                                <InputGenre placeholder="Feminino"/>
                            </Center>
                        </ContainerDate>
                    </ContainerDateTime>
                </ContainerFilter>    
        
                <ContainerBtnPublicar>
                    <BtnPublicar>  
                        <Lorem>Publicar</Lorem>
                    </BtnPublicar>  
                </ContainerBtnPublicar>    
        
            </Container>
        </>
    );
}

export default Criar_postagem;
