<<<<<<< HEAD
import React from "react";
import {Link} from "react-scroll"
import {useHistory} from "react-router-dom";

// ======= CABEÇALHO ========
import Background from "../../assets/Sobre/background.jpg";
import Mobile from "../../assets/Area_Informativa/divulgacao_mobile.png";


// ======= SEÇÃO 2 ========
import Documento from "../../assets/Area_Informativa/documentos.png";
import Coracao from "../../assets/Area_Informativa/coracao.png";
import Loja from "../../assets/Area_Informativa/fazer-compras.png";
import Monitor from "../../assets/Area_Informativa/monitor.png";

// ======= SEÇÃO 3 ========
import Crianca from "../../assets/Area_Informativa/criancas.jpg";
import Homem from "../../assets/Area_Informativa/homens.jpg";
import Mulher from "../../assets/Area_Informativa/mulheres.jpg";
import Adolescente from "../../assets/Area_Informativa/adolescentes.jpeg";
import Button from "../../components/button/index";

// ====== VIDEO =======
import Video from "../../assets/Area_Informativa/video.mp4";

// ====== FOOTER =======
// import Fundo_footer from "../../assets/Area_Informativa/footer.jpg";
import Logo from "../../assets/Area_Informativa/logo.png";

import {
    Container,
    
// ====== HEADER ========    
    Header,
    ContainerHeader,
    ContainerMenu,
    ContainerItensMenu,

// ====== sessão 2 =======
    ContainerApoio,
    ContianerCardsApoio,
    CardApoio,
    ContainerImgApoio,
    Conjunto,

// ====== sessão 3 =======
    ContainerFotos,
    CardDesaparecidos,
    ContainerInfo,
    Porcentagem,

// ======== video ========
    ContainerVideo,

// ======== footer =======    
    Footer,
    ContainerLogo,
    Texto,
    TextoVermelho,
    Copyright,
    

    

} from "./styles";

const Area_informativa = () => {
    
    const history = useHistory();
    
    return (
        <>
        <Header name="inicio">
            <img src={Mobile} alt="Background"/>
            <ContainerHeader>
                <ContainerMenu>
                    <img src={Logo} alt="logo ache.me"/>
                    <ContainerItensMenu>
                        <ul>
                            <li onClick={() => {history.push("/sobre");}}>Sobre a empresa</li>
                            <li><Link to="inicio" offset={-180} smooth={true} duration={500}>Aplicativo</Link></li>
                            <li><Link to="apoio" offset={-180} smooth={true} duration={500}>Apoio</Link></li>
                            <li><Link to="video" offset={-180} smooth={true} duration={500}>Video</Link></li>
                        </ul>
                    </ContainerItensMenu>
                </ContainerMenu>
            </ContainerHeader>
        </Header>

        <Container>
            <ContainerApoio>
                <h1 name="apoio">Instruções de Apoio</h1>

                <ContianerCardsApoio>
                    <Conjunto>
                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Documento} alt="documentos"/>
                            </ContainerImgApoio>

                            <h3>Documentos</h3>

                            <p>Tire o RG (Registro de Identidade Civil) da criança o quanto antes.</p>
                        </CardApoio>

                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Coracao} alt="documentos"/>
                            </ContainerImgApoio>

                            <h3>Acompanhamento</h3>

                            <p>Garanta que a criança esteja sempre acompanhada de alguém de confiança da família.</p>
                        </CardApoio>
                    </Conjunto>

                    <Conjunto>
                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Loja} alt="documentos"/>
                            </ContainerImgApoio>

                            <h3>Supervisão</h3>

                            <p>Não autorizar o seu filho a brincar na rua sem a supervisão de um adulto conhecido.</p>
                        </CardApoio>

                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Monitor} alt="documentos"/>
                            </ContainerImgApoio>

                            <h3>Internet</h3>

                            <p>Fique atento em como seus filhos utilizam computadores com acesso a internet.</p>
                        </CardApoio>
                    </Conjunto>
                </ContianerCardsApoio>
            </ContainerApoio>
        </Container>

        <Container>
            <ContainerFotos>
                <CardDesaparecidos>
                    <img src={Crianca} alt="criancas"/>
                       
                    <ContainerInfo>
                        <h2>Crianças</h2>

                        <p>Crianças de até sete anos costumam se perder em shopping, parques e aeroportos.</p>
                           
                        <p>Oito a doze, podem sair de casa por maus-tratos ou problemas familiares.</p>
                           <Porcentagem>
                                <Button title={"3%"}/>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Homem} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Homens</h2>
                           <p>Homens desaparecem para fugir de dívidas, não assumir a paternidade ou ter um relacionamento fora do casamento.</p>
                           <Porcentagem>
                                <Button title={"60%"}/>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Mulher} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Mulheres</h2>
                    <p>Mulheres desaparecem depois de serem vítimas de violência doméstica.</p>
                           <Porcentagem>
                               <Button title={"40%"}/>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Adolescente} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Adolescentes</h2>
                    <p>Adolescentes têm desaparecido depois de marcarem encontros pela internet, de sofrerem abusos ou de não conseguirem autorização dos pais para se divertir com amigos.</p>
                           <Porcentagem>
                                <Button title={"14%"}/>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

            </ContainerFotos>
        </Container>

        <Container>
            <ContainerVideo name="video">
                <video loop muted controls>
                    <source src={Video} type="video/mp4"/>
                </video>
            </ContainerVideo>
        </Container>

        <Footer>
            <Container>
                <ContainerLogo>
                    <img src={Logo} alt="logo"/>
                    <Texto>Ache.</Texto>
                    <TextoVermelho>me</TextoVermelho>
                </ContainerLogo>

                <Copyright>
                    <p>© 2020 Ache me. Todos os direitos reservados.</p>
                </Copyright>
            </Container>
        </Footer>


        </>
    );
};

=======
import React from "react";
import {Link} from "react-scroll"
import {useHistory} from "react-router-dom";

// ======= CABEÇALHO ========
import Background from "../../assets/Sobre/background.jpg";


// ======= SEÇÃO 2 ========
import Documento from "../../assets/Area_Informativa/documentos.png";
import Coracao from "../../assets/Area_Informativa/coracao.png";
import Loja from "../../assets/Area_Informativa/fazer-compras.png";
import Monitor from "../../assets/Area_Informativa/monitor.png";

// ======= SEÇÃO 3 ========
import Crianca from "../../assets/Area_Informativa/criancas.jpg";
import Homem from "../../assets/Area_Informativa/homens.jpg";
import Mulher from "../../assets/Area_Informativa/mulheres.jpg";
import Adolescente from "../../assets/Area_Informativa/adolescentes.jpeg";
import Button from "../../components/button/index";

// ====== VIDEO =======
import Video from "../../assets/Area_Informativa/video.mp4";

// ====== FOOTER =======
// import Fundo_footer from "../../assets/Area_Informativa/footer.jpg";
import Logo from "../../assets/Area_Informativa/logo.png";

import {
    Container,
    
// ====== HEADER ========    
    Header,
    ContainerHeader,
    ContainerMenu,
    ContainerItensMenu,

// ====== sessão 2 =======
    ContainerApoio,
    ContianerCardsApoio,
    CardApoio,
    ContainerImgApoio,
    Conjunto,

// ====== sessão 3 =======
    ContainerFotos,
    CardDesaparecidos,
    ContainerInfo,
    Porcentagem,

// ======== video ========
    ContainerVideo,

// ======== footer =======    
    Footer,
    ContainerLogo,
    Texto,
    TextoVermelho,
    Copyright,
    

    

} from "./styles";

const Area_informativa = () => {
    
    const history = useHistory();
    
    return (
        <>
        <Header name="inicio">
            <img src={Background} alt="Background"/>
            <ContainerHeader>
                <ContainerMenu>
                    <img src={Logo} alt="logo ache.me"/>
                    <ContainerItensMenu>
                        <ul>
                            <li onClick={() => {history.push("/sobre");}}>Sobre a empresa</li>
                            <li><Link to="inicio" offset={-180} smooth={true} duration={500}>Inicio</Link></li>
                            <li><Link to="apoio" offset={-180} smooth={true} duration={500}>Apoio</Link></li>
                            <li><Link to="video" offset={-180} smooth={true} duration={500}>Video</Link></li>
                            
                        </ul>
                    </ContainerItensMenu>
                </ContainerMenu>
        
            </ContainerHeader>
        
        </Header>

        <Container>
            <ContainerApoio>
                <h1 name="apoio">Instruções de Apoio</h1>

                <ContianerCardsApoio>
                    <Conjunto>
                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Documento} alt="documentos"/>
                            </ContainerImgApoio>

                            <h3>Documentos</h3>

                            <p>Tire o RG (Registro de Identidade Civil) da criança o quanto antes.</p>
                        </CardApoio>

                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Coracao} alt="documentos"/>
                            </ContainerImgApoio>

                            <h3>Acompanhamento</h3>

                            <p>Garanta que a criança esteja sempre acompanhada de alguém de confiança da família.</p>
                        </CardApoio>
                    </Conjunto>

                    <Conjunto>
                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Loja} alt="documentos"/>
                            </ContainerImgApoio>

                            <h3>Supervisão</h3>

                            <p>Não autorizar o seu filho a brincar na rua sem a supervisão de um adulto conhecido.</p>
                        </CardApoio>

                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Monitor} alt="documentos"/>
                            </ContainerImgApoio>

                            <h3>Internet</h3>

                            <p>Fique atento em como seus filhos utilizam computadores com acesso a internet.</p>
                        </CardApoio>
                    </Conjunto>
                </ContianerCardsApoio>
            </ContainerApoio>
        </Container>

        <Container>
            <ContainerFotos>
                <CardDesaparecidos>
                    <img src={Crianca} alt="criancas"/>
                       
                    <ContainerInfo>
                        <h2>Crianças</h2>

                        <p>Crianças de até sete anos costumam se perder em shopping, parques e aeroportos.</p>
                           
                        <p>Oito a doze, podem sair de casa por maus-tratos ou problemas familiares.</p>
                           <Porcentagem>
                                <Button title={"3%"}/>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Homem} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Homens</h2>
                           <p>Homens desaparecem para fugir de dívidas, não assumir a paternidade ou ter um relacionamento fora do casamento.</p>
                           <Porcentagem>
                                <Button title={"60%"}/>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Mulher} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Mulheres</h2>
                    <p>Mulheres desaparecem depois de serem vítimas de violência doméstica.</p>
                           <Porcentagem>
                               <Button title={"40%"}/>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Adolescente} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Adolescentes</h2>
                    <p>Adolescentes têm desaparecido depois de marcarem encontros pela internet, de sofrerem abusos ou de não conseguirem autorização dos pais para se divertir com amigos.</p>
                           <Porcentagem>
                                <Button title={"14%"}/>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

            </ContainerFotos>
        </Container>

        <Container>
            <ContainerVideo name="video">
                <video loop muted controls>
                    <source src={Video} type="video/mp4"/>
                </video>
            </ContainerVideo>
        </Container>

        <Footer>
            <Container>
                <ContainerLogo>
                    <img src={Logo} alt="logo"/>
                    <Texto>Ache.</Texto>
                    <TextoVermelho>me</TextoVermelho>
                </ContainerLogo>

                <Copyright>
                    <p>© 2020 Ache me. Todos os direitos reservados.</p>
                </Copyright>
            </Container>
        </Footer>


        </>
    );
};

>>>>>>> be602db92f28272861b4a645c326e98488f345f8
export default Area_informativa;