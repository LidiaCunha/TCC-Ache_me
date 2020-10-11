import React from "react";

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

// ====== VIDEO =======
import Video from "../../assets/Area_Informativa/video.mp4";

// ====== FOOTER =======
import Fundo_footer from "../../assets/Area_Informativa/footer.jpg";
import Logo from "../../assets/Area_Informativa/logo.png";

import {
    Container,
    Header,

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
    EfeitoBtn,

// ======== video ========

    Container_video,

// ======== footer =======    
    Footer,
    ContainerLogo,
    Texto,
    Texto_vermelho,
    Copyright,

    

} from "./styles";

const Area_informativa = () => {
    return (
        <>
        <Header>CABEÇALHO</Header>

        <Container>
            <ContainerApoio>
                <h1>Instruções de apoio</h1>

                <ContianerCardsApoio>
                    <Conjunto>
                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Documento} alt="documentos"/>
                            </ContainerImgApoio>

                            <h2>Documentos</h2>

                            <p>Tire o RG (Registro de identidade Civil) da criança o quanto antes.</p>
                        </CardApoio>

                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Coracao} alt="documentos"/>
                            </ContainerImgApoio>

                            <h2>Acompanhamento</h2>

                            <p>Garanta que a criança esteja sempre acompanhada de alguém de confiança da família.</p>
                        </CardApoio>
                    </Conjunto>

                    <Conjunto>
                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Loja} alt="documentos"/>
                            </ContainerImgApoio>

                            <h2>Supervisão</h2>

                            <p>Não autorizar o seu filho a brincar na rua sem a supervisão de um adulto conhecido.</p>
                        </CardApoio>

                        <CardApoio>
                            <ContainerImgApoio>
                                <img src={Monitor} alt="documentos"/>
                            </ContainerImgApoio>

                            <h2>Internet</h2>

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
                           <Porcentagem>3%
                               <EfeitoBtn></EfeitoBtn>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Homem} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Homens</h2>
                           <p>Homens desaparecem para fugir de dívidas, não assumir a paternidade ou ter um relacionamento fora do casamento.</p>
                           <Porcentagem>60%
                               <EfeitoBtn></EfeitoBtn>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Mulher} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Mulheres</h2>
                    <p>Mulheres desaparecem depois de serem vítimas de violência doméstica.</p>
                           <Porcentagem>40%
                               <EfeitoBtn></EfeitoBtn>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

                <CardDesaparecidos>
                    <img src={Adolescente} alt="criancas"/>
                       
                    <ContainerInfo>
                    <h2>Adolescentes</h2>
                    <p>Adolescentes têm desaparecido depois de marcarem encontros pela internet, de sofrerem abusos ou de não conseguirem autorização dos pais para se divertir com amigos.</p>
                           <Porcentagem>14%
                               <EfeitoBtn></EfeitoBtn>
                           </Porcentagem>
                    </ContainerInfo>
                </CardDesaparecidos>

            </ContainerFotos>
        </Container>

        <Container>
            <Container_video>
                <video loop muted controls>
                    <source src={Video} type="video/mp4"/>
                </video>
            </Container_video>
        </Container>

        <Footer>
            <Container>
                <ContainerLogo>
                    <img src={Logo} alt="logo"/>
                    <Texto>Ache.</Texto>
                    <Texto_vermelho>me</Texto_vermelho>
                </ContainerLogo>

                <Copyright>
                    <p>© 2020 Ache me. Todos os direitos reservados.</p>
                </Copyright>
            </Container>
        </Footer>


        </>
    );
};

export default Area_informativa;