import React from "react";
import Icon from "../../assets/Card_email/logoEmail.png";

import {
    CardEmail,
    ContainerCard,
    ContainerImg,
    ContainerInformacoes,
    BtnOk
} from "./styles";

const Card_Email = ({setShowCheckEmail, props}) => {
    return(
        <CardEmail>
            <ContainerCard>
                <ContainerImg>
                    <img src={Icon} alt="icone do email"/>
                </ContainerImg>

                <ContainerInformacoes>
                    <h1>Obrigado por se cadastrar!</h1>
                    <p>Você recebera um pedido de confirmação no
                    seu e-mail para autorizar a navegação na
                    Ache.me, aceite e faça parte de reecontros.</p>

                </ContainerInformacoes>

                <BtnOk>
                    <input type="submit" onClick={() => {
                        setShowCheckEmail(false);
                        props.showForm("login");
                    }} value="OK"/>
                </BtnOk>
            </ContainerCard>
        </CardEmail>
    )
}

export default Card_Email;