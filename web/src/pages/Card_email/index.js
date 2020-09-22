import React from "react";
import Icon from "../../assets/Card_email/logoEmail.png";

import {
    ContainerCard,
    ContainerImg,
    ContainerInformacoes,
    BtnOk
} from "./styles";

const Card_email = () => {
    return(
        <>
            <ContainerCard>
                <ContainerImg>
                    <img src={Icon} alt="icone do email"/>
                </ContainerImg>

                <ContainerInformacoes>
                    <h1>Obrigado por se cadastrar!</h1>
                    <h2>Você recebera um pedido de confirmação no</h2>
                    <h2>Seu e-mail para autorizar a navegação na</h2>
                    <h2>Ache.me, aceite e faça parte de reecontros.</h2>
                </ContainerInformacoes>

                <BtnOk>
                    <input type="submit" value="OK"/>
                </BtnOk>
            </ContainerCard>
        </>
    )
}

export default Card_email;