import React from 'react';

import { Container , SubTitle , Title , Texto} from './styles';

function ServiceTerms() {
  
    return (
        <Container>
            
            <Title>Termos de Serviço</Title>
                
                <SubTitle>I - Da administração e base de dados</SubTitle>
                    
                    <Texto>1. Este aplicativo é administrado e mantido pela empresa Ache.me, e tem por única razão e objetivo ser uma ferramenta para facilitar a identificação de pessoas desaparecidas, constantes no banco de dados de pessoas desaparecidas gerenciado pela empresa.</Texto>
                    
                    <Texto>2. As pessoas cadastradas foram reportadas expontaneamente à Ache.me com o consentimento da família e/ou responsáveis para uso de dados da referida pessoa.</Texto>
                    
                <SubTitle>II - Sobre a utilização</SubTitle>

                    <Texto>3. Ao utilizar este aplicativo, você concorda expressamente em fazê-lo para o único e legítimo fim acima disposto, abstendo-se de usar o mesmo ou qualquer informação, dado, recurso ou ferramenta, constante ou relacionado ao aplicativo, para qualquer outra finalidade.
                    A consulta realizada por meio do aplicativo tem fim informativo e não substitui o trabalho empregado pelas autoridades competentes e demais instituições de assistência. Ao identificar eventual pessoa que conste no banco de dados de pessoas desaparecidas, procure assistência das autoridades competentes para tomar as medidas mais adequadas.</Texto>
                    
                    <Texto>4. O uso deste aplicativo não pode violar a privacidade e os direitos de outrem, seja da pessoa desaparecida, seja da pessoa que se procura identificar. Você é responsável pelo consetimento do terceiro em relação ao uso de qualquer dado pessoal do mesmo. Sempre haja com responsabilidade, empatia e em respeito à legislação aplicável.</Texto>

                    <Texto>5. Você também concorda em se abster de praticar qualquer ato que vise obter dados e informações por meio do aplicativo, assim como qualquer uso que não seja o descrito no item 1. 
                    O uso contrário a estes termos e à legislação aplicável poderá acarretar consequências legais.</Texto>
                    
                    <Texto>6. Ao fazer uso deste aplicativo, você concorda com a coleta dos referidos dados, para finalidade de execução do aplicativo e de seus recursos de facilitação de identificação de pessoa desaparecida, responsabilizando pelo uso de dados de terceiros se realizado por você. Outros dados solicitados pelo aplicativo bem como aqueles inerentes ao uso do aparelho e de seu sistema operacional poderão ser coletados. A Ache.me poderá compartilhar referidos dados com as autoridades, com as famílias dos desaparecidos e demais interessados para fim de realização da finalidade da Ache.me.</Texto>
        </Container>
    );
}

export default ServiceTerms;