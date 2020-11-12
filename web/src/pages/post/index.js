import React from 'react';

import { Container, ContainerUsuario, FotoDesaparecido, FotoUsuario, Infos, ContainerInfos, Linha, ContainerCardFiltros, CardFiltros } from './styles';
import Foto from "../../assets/Sobre/iuri.jpeg";
import Desaparecido from "../../assets/Post/timothee.jpg";
import genero from "../../assets/Post/man.png";
import horario from "../../assets/Post/clock.png";
import local from "../../assets/Post/place.png";
import data from "../../assets/Post/calendario.png";
 

function Post() {
  return(
      <Container>
        <ContainerUsuario>
          <FotoUsuario>
            <img src={Foto}></img>
          </FotoUsuario>
          <h1>Iuri Oliveira Carvalho Sampaio</h1>
        </ContainerUsuario>
        <FotoDesaparecido>
          <img src={Desaparecido}></img>
        </FotoDesaparecido>
        <Infos>
          <ContainerInfos>
            <img src={horario}/>
            <p>9:53</p>
            <Linha/>
            <img src={data}/>
            <p>6 de nov. de 2020</p>
            <Linha/>
            <img src={local}/>
            <p>SP</p>
            <Linha/>
            <img src={genero}/>
            <p>Masculino</p>
          </ContainerInfos>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
             of Letraset sheets containing Lorem Ipsum passages, and more recently
             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <h1>CARACTERÍSTICAS FÍSICAS</h1>
          <ContainerCardFiltros>
            <CardFiltros className="um"><p>KJDKSJDKDJDKJSKDJDKJFKF</p></CardFiltros>
            <CardFiltros className="dois"><p>Alta</p></CardFiltros>
            <CardFiltros className="tres"><p>Pele morena</p></CardFiltros>
            <CardFiltros className="um"><p>Vesga</p></CardFiltros>
            <CardFiltros className="dois"><p>Vitiligo</p></CardFiltros>
          </ContainerCardFiltros>
          <h1>PROBLEMAS DE SAÚDE</h1>
          <ContainerCardFiltros>
            <CardFiltros className="um"><p>Problema respiratório</p></CardFiltros>
            <CardFiltros className="dois"><p>Tuberculose</p></CardFiltros>
            <CardFiltros className="tres"><p>Escoliose</p></CardFiltros>
          </ContainerCardFiltros>
        </Infos>
      </Container>
  )
}

export default Post;