import React from "react";
import seta from "../../assets/setaVoltar.png"
import { AreaForm, TextoEmail, InputHorario, BotaoSalvar, AreaInputs, ContainerInputs, AreaInputHorario, InputInfos, Border, IconeFotoMembros, ImagemMembros, AreaEstrelas, TextoMenor, TextoMerito, IconeFoto, FotoCamera, AreaImagem, AreaMerito, Container, ContainerUsuario, ImagemUsuario, MenuVoltar, Seta, Estrelas, Botao, TextoBotao, AreaTexto, AreaMembros, Texto } from "./styles";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const Visto = () => {

    var radio_props = [
        {label: 'Afirmo', value: 0 },
        {label: 'Não Afirmo', value: 1 }
    ];

    return(
        <Container>
            <MenuVoltar>
                <Seta source={seta}/>
            </MenuVoltar>
            <AreaTexto><Texto>Você viu essa pessoa?</Texto></AreaTexto>
            <AreaTexto><TextoEmail>As respostas desse formulário serão enviadas
                para <TextoMerito>Oliver Sykes</TextoMerito> em seu chat.
            </TextoEmail></AreaTexto>
            <AreaForm>
                <ContainerInputs>
                    <TextoMenor>Data</TextoMenor>
                    <TextoMenor>Horário</TextoMenor>
                </ContainerInputs>
                <ContainerInputs>
                    <AreaInputs>
                        <InputInfos keyboardType="numeric"></InputInfos>
                    </AreaInputs>
                    <AreaInputHorario>
                        <InputHorario keyboardType="numeric"></InputHorario>
                        <Texto>:</Texto>
                        <InputHorario keyboardType="numeric"></InputHorario>
                    </AreaInputHorario>
                </ContainerInputs>
                <AreaTexto><TextoMenor>CEP (Opcional)</TextoMenor></AreaTexto>
                <InputInfos></InputInfos>
                <AreaTexto><TextoMenor>Rua</TextoMenor></AreaTexto>
                <InputInfos><TextoMenor></TextoMenor></InputInfos>
                <AreaTexto><TextoMenor>Bairro</TextoMenor></AreaTexto>
                <InputInfos></InputInfos>
                <AreaTexto><TextoMenor>Cidade</TextoMenor></AreaTexto>
                <InputInfos> </InputInfos>
                <ContainerInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Estado</TextoMenor></AreaTexto>
                        <InputInfos></InputInfos>
                    </AreaInputs>
                    <AreaInputs>
                        <AreaTexto><TextoMenor>Número (Opcional)</TextoMenor></AreaTexto>
                        <InputInfos></InputInfos>
                    </AreaInputs>
                </ContainerInputs>
                <AreaTexto><TextoMenor>Confirma?</TextoMenor></AreaTexto>
                <ContainerInputs>
                    <RadioForm
                        formHorizontal={true}
                        animation={true}
                    >
                    {
                         radio_props.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i} >
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                borderWidth={1}
                                buttonInnerColor={'#ef5245'}
                                buttonOuterColor={'#ef5245'}
                                buttonSize={20}
                                buttonOuterSize={40}
                                initial={0}
                                onPress={(value) => {this.setState({value:value})}}
                                buttonWrapStyle={{}}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                labelStyle={{fontSize: 18, color: '#fff'}}
                                labelWrapStyle={{marginRight: 40}}
                                onPress={(value) => {this.setState({value:value})}}
                            />
                        </RadioButton>
                        ))
                        }  
                    </RadioForm>
                </ContainerInputs>
                <BotaoSalvar><TextoBotao>Enviar</TextoBotao></BotaoSalvar>
            </AreaForm>
        </Container>
    )
}

export default Visto;