// Funcional
import React, {useEffect} from "react";
import {Link} from "react-scroll"
import {useHistory} from "react-router-dom";

// Style
import logo from "../../assets/logo.png";
import { 
    Container,
    ContainerItensMenu,
    ContainerMenu,
    // LoginContainerText,
    ContainerTextMenor,
    ContainerTextMaior,
    ContainerInfo, 
    ContainerBtn, 
    ContainerCards, 
    Cards, 
    CardContent, 
    ContainerCardsMissao, 
    CardContentMissao, 
    ContainerValores,
    ContainerGridValores,
    CardText,
    ContainerCardsValores,
    TextCardValores,
    ContainerCardsTime,
    ContainerCardsTimeCenter,
    TextCardTime,
    Footer,
    ContainerLogo,
    Texto,
    TextoVermelho,
    Copyright,
    
    // Everson
    
    ContainerNossosServicos,
    ContainerMissao,
    ContainerTime,
    ContainerFooter,
    ContainerMenuTexto,
    
  } from "./styles";

  import background from "../../assets/Sobre/background.jpg";
  import iconeBusca from "../../assets/Sobre/busca.png";
  import iconeChat from "../../assets/Sobre/chat.png";
  import iconeFiltros from "../../assets/Sobre/filtros.png";
  import iconeMerito from "../../assets/Sobre/merito.png";
  import missaoBackground from "../../assets/Sobre/missaoVisao.jpg";
  import missao from "../../assets/Sobre/missao.png";
  import visao from "../../assets/Sobre/visao.png";
  import qualidade from "../../assets/Sobre/qualidade.png";
  import responsabilidade from "../../assets/Sobre/responsabilidade.png";
  import seguranca from "../../assets/Sobre/segurança.png";
  import respeito from "../../assets/Sobre/respeito.png";
  import james from "../../assets/Sobre/james.jpeg";
  import lidia from "../../assets/Sobre/lidia.jpg";
  import erick from "../../assets/Sobre/erick.jpeg";
  import everson from "../../assets/Sobre/everson.jpeg";
  import iuri from "../../assets/Sobre/iuri.jpeg";
//   import Button from "../../components/button/index";

  const SobreEmpresa = (props) => {
      
    const history = useHistory();

    useEffect(() => {});

      return(
        <>
            <Container>
                <img src={background} alt="background"/>
                <ContainerInfo>
                    <ContainerMenu>
                        <img src={logo} alt="logo ache.me" onClick={() => {
                            history.push("/");
                        }}/>
                        <ContainerItensMenu>
                            <ul>
                                <li onClick={() => {history.push("/area-informativa");}}>Área Informativa</li>
                                <li><Link to="inicio" offset={-180} smooth={true} duration={500}>Inicio</Link></li>
                                <li><Link to="servico" offset={-180} smooth={true} duration={500}>Serviços</Link></li>
                                <li><Link to="missao" offset={-180} smooth={true} duration={500}>Missão e Visão</Link></li>
                                <li><Link to="valores" offset={-180} smooth={true} duration={500}>Valores</Link></li>
                                <li><Link to="time" offset={-180} smooth={true} duration={500}>Time</Link></li>
                            </ul>
                        </ContainerItensMenu>
                    </ContainerMenu>
                    <ContainerMenuTexto>
                    <ContainerTextMaior>
                        <h2 name="inicio">Nós somos como você, preocupados<br/>com o próximo.</h2>
                    </ContainerTextMaior>
                    <ContainerTextMenor>
                        <h2>Aqui você pode conhecer mais sobre a empresa, nossa equipe e propósitos.<br/>
                        Fazemos parte de iniciativas do bem e esperamos que você também faça.</h2>
                    </ContainerTextMenor>
                    <ContainerBtn>
                        <Link to="valores" offset={-180} smooth={true} duration={500}>Conhecer Valores</Link>
                    </ContainerBtn>
                    </ContainerMenuTexto>
                </ContainerInfo>
            </Container>

            <Container>
                <ContainerNossosServicos>
                    <h2 name="servico">Nossos Serviços</h2>
                    <ContainerCards>
                        <Cards>
                            <CardContent>
                                <img src={iconeBusca} alt="icone de busca"></img>
                                <h3>Apoio as buscas</h3>
                                <p>A plataforma possibilita a postagem de indivíduos desaparecidos.</p>
                            </CardContent>
                        </Cards>
                        <Cards>
                            <CardContent>
                                <img src={iconeMerito} alt="icone de méritos"></img>
                                <h3>Reconhecimento por mérito</h3>
                                <p>Os membros podem divulgar a plataforma garantindo mais conexões.
                                    O ato é contabilizado e reconhecido no sistema para todos os usuários.
                                </p>
                            </CardContent>
                        </Cards>
                        <Cards>
                            <CardContent>
                                <img src={iconeFiltros} alt="icone de chat"></img>
                                <h3>Filtro de buscas</h3>
                                <p>As postagens oferecem ferramentas de buscas, como os filtros, que auxiliam
                                    na divulgação e procura.
                                </p>
                            </CardContent>
                        </Cards>
                        <Cards>
                            <CardContent>
                                <img src={iconeChat} alt="icone de filtros"></img>
                                <h3>Interação entre usuários</h3>
                                <p>Os usuários podem trocar informações no chat e criarem assim uma rede de apoio.</p>
                            </CardContent>
                        </Cards>
                    </ContainerCards>
                </ContainerNossosServicos>
            </Container>


            <Container>
                <ContainerMissao>                    
                    <img src={missaoBackground} alt="background missão e valores"/>
                    <ContainerInfo>
                        <h1 name="missao">Missão e Visão</h1>
                        <ContainerCardsMissao>
                            <Cards>
                                <CardContentMissao>
                                    <img src={missao} alt="icone missão"></img>
                                    <h3>Missão</h3>
                                    <p>Apoiar famílias e amigos na busca de pessoas desaparecidas,
                                        oferecendo uma plataforma segura e responsável aos clientes,
                                        gerando conexões.
                                    </p>
                                </CardContentMissao>
                            </Cards>
                            <Cards>
                                <CardContentMissao>
                                    <img src={visao} alt="icone visão"></img>
                                    <h3>Visão</h3>
                                    <p>Ser a maior e melhor plataforma de busca de pessoas
                                        desaparecidas do país, minimizando o número de casos
                                        e proporcionando reencontros.
                                    </p>
                                </CardContentMissao>
                            </Cards>
                        </ContainerCardsMissao>
                    </ContainerInfo>
                </ContainerMissao> 
            </Container>


            <Container>
                <ContainerValores>
                    <h1 name="valores">Nossos Valores</h1> 

                    <ContainerGridValores>
                            <CardText>
                                <p>
                                    Nós da Ache.me nos preocupamos com todos os clientes, por esse motivo, compartilhamos nossos valores e os levamos a sério.
                                </p>

                                <p>
                                    Trazemos conosco a vontade de apoiar os outros e sobretudo levar nossos valores nessa missão.
                                </p>
                            </CardText>
                            
                            <ContainerCardsValores>
                                <Cards>
                                    <img src={qualidade} alt="Qualidade"/>
                                    <TextCardValores>
                                        <h3>Qualidade</h3>
                                        <p>A Ache.me busca oferecer serviços de qualidade.</p>
                                    </TextCardValores>
                                </Cards>
                                <Cards>
                                    <img src={seguranca} alt="Segurança"/>
                                    <TextCardValores>
                                        <h3>Segurança</h3>
                                        <p>Focamos sempre na segurança de seus dados e informações.</p>
                                    </TextCardValores>
                                </Cards>
                                <Cards>
                                    <img src={respeito} alt="Respeito"/>
                                    <TextCardValores>
                                        <h3>Respeito</h3>
                                        <p>Mantemos o respeito por todos os clientes.</p>
                                    </TextCardValores>
                                </Cards>
                                <Cards>
                                    <img src={responsabilidade} alt="Responsabilidade"/>
                                    <TextCardValores>
                                        <h3>Responsabilidade</h3>
                                        <p>Somos cientes quanto a responsabilidade em relação aos nossos clientes.</p>
                                    </TextCardValores>
                                </Cards>
                            </ContainerCardsValores>
                    </ContainerGridValores>
                </ContainerValores>
            </Container>


            <Container>
                <ContainerTime>
                    <ContainerInfo>
                        <h2 name="time">Nosso Time</h2>
                        <ContainerCardsTime>
                            <Cards>
                                <img src={erick} alt="Erick"/>
                                <TextCardTime>
                                    <h1>Erick</h1>
                                    <h2>Gerente Jurídico</h2>
                                    <p>Atua como gerente jurídico na empresa Ache.me</p>
                                </TextCardTime>
                            </Cards>
                            <Cards>
                                <img src={everson} alt="Everson"/>
                                <TextCardTime>
                                    <h1>Everson</h1>
                                    <h2>Coordenador de Marketing</h2>
                                    <p>Atua como coordenador na empresa Ache.me</p>
                                </TextCardTime>
                            </Cards>
                            <Cards>
                                <img src={iuri} alt="Iuri"/>
                                <TextCardTime>
                                    <h1>Iuri</h1>
                                    <h2>Gerente Financeiro</h2>
                                    <p>Atua como gerente financeiro na empresa Ache.me</p>
                                </TextCardTime>
                            </Cards>
                        </ContainerCardsTime>

                        <ContainerCardsTimeCenter>
                            <Cards>
                                <img src={james} alt="James"/>
                                <TextCardTime>
                                    <h1>James</h1>
                                    <h2>Gerente de Desenvolvimento</h2>
                                    <p>Atua como gerente de desenvolvimento na empresa Ache.me</p>
                                </TextCardTime>
                            </Cards>
                            <Cards>
                                <img src={lidia} alt="Lidia"/>
                                <TextCardTime>
                                    <h1>Lídia</h1>
                                    <h2>Diretora Geral</h2>
                                    <p>Atua como diretora geral na empresa Ache.me</p>
                                </TextCardTime>
                            </Cards>
                        </ContainerCardsTimeCenter>
                    </ContainerInfo>
                </ContainerTime>
            </Container>

            <Footer>
                <ContainerFooter>
                    <ContainerLogo>
                        <img src={logo} alt="logo"/>
                        <Texto>Ache.</Texto>
                        <TextoVermelho>me</TextoVermelho>
                    </ContainerLogo>

                    <Copyright>
                        <p>© 2020 Ache me. Todos os direitos reservados.</p>
                    </Copyright>
                </ContainerFooter>
            </Footer>
    </>
    )
};

export default SobreEmpresa;