import React,{useEffect, useState} from 'react';

import { Container, ContainerUsuario, CardOpcoes, FotoDesaparecido, FotoUsuario, Infos, ContainerInfos, Linha, ContainerCardFiltros, CardFiltros, DivBotoesOpcoes, ContainerBotoes, BotoesOpcoes, ContainerTexto, InputNome } from './styles';
import Foto from "../../assets/Sobre/iuri.jpeg";
import Desaparecido from "../../assets/Post/timothee.jpg";
import genero from "../../assets/Post/man.png";
import horario from "../../assets/Post/clock.png";
import local from "../../assets/Post/place.png";
import data from "../../assets/Post/calendario.png";
import denunciar from "../../assets/Post/atencao.png";
import encontrado from "../../assets/Post/gps.png";
import visto from "../../assets/Post/visibility.png";
import photo from '../../assets/userTest.png';
import moment from 'moment';
import {api} from '../../services/api';

function Post({post}) {

  const [Allpost, setAllPost] = useState([]);

  useEffect(()=>{
    (async()=>{
        const res = await api.get(`/posts/${post.LostedThatWasSeen.id}`);

        setAllPost(res.data)
    })();
  },[])

  const genres = ['Masculino', 'Feminino' , 'Não Binario' , 'Não Binario' , 'Não Binario' , 'Não Binario'];
  console.log(Allpost)
  return(
      <Container>
        <ContainerUsuario>
          <FotoUsuario>
            <img src={post.LostedThatWasSeen.postCreator.photo !== 'undefined' ? post.LostedThatWasSeen.postCreator.photo : photo } />
          </FotoUsuario>
          <ContainerTexto>
            <h1>{post.LostedThatWasSeen.postCreator.name}</h1>
            <p>{moment(post.Seen.createdAt).format('LLL')}</p>
          </ContainerTexto>
        </ContainerUsuario>
        <FotoDesaparecido>
          <img src={post.LostedThatWasSeen.photo} />
        </FotoDesaparecido>
        <Infos>
          <ContainerInfos>
            <img src={horario}/>
            <p>{moment(post.Seen.seen_at).format('HH:mm')}</p>
            <Linha/>
            <img src={data}/>
            <p>{moment(post.Seen.seen_at).format('LL')}</p>
            <Linha/>
            <img src={local}/>
            <p>{post.Seen.address.bairro}</p>
            <Linha/>
            <img src={genero}/>
            <p>{genres[post.LostedThatWasSeen.genre_id]}</p>
          </ContainerInfos>
          <h1>{post.LostedThatWasSeen.name}</h1>
          {/* <InputNome placeholder="Digite o nome do desaparecido..."/> */}
          <p>{post.LostedThatWasSeen.description}</p>

          <h1>CARACTERÍSTICAS FÍSICAS</h1>
          <ContainerCardFiltros>
            {Allpost?.features?.map( feature => <CardFiltros className="um"><p>{feature.feature}</p></CardFiltros> )}
          </ContainerCardFiltros>
          <h1>PROBLEMAS DE SAÚDE</h1>
          <ContainerCardFiltros>
            {Allpost?.HealthProblem?.map( problem => <CardFiltros className="um"><p>{problem.problem}</p></CardFiltros> )}
          </ContainerCardFiltros>
          <ContainerBotoes>
            <DivBotoesOpcoes className="botoes_ocultos">
                <BotoesOpcoes><img src={encontrado}/></BotoesOpcoes>
                <BotoesOpcoes><img src={denunciar}/></BotoesOpcoes>
                <BotoesOpcoes><img src={visto}/></BotoesOpcoes>
            </DivBotoesOpcoes>
            <CardOpcoes className="botao_mostrar"><p>Mais opções</p></CardOpcoes>
          </ContainerBotoes>
        </Infos>
      </Container>
  )
}

export default Post;