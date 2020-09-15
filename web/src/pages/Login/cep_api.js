import CEP from "../../../../backend/source/services/cep/cep_api";
import {FormRegister} from "./index";
const found_cep = (cep) => {
    const cep = CEP; 

    fetch(url).then( (res) => res.json().then((data) => fill_form(data)), () => window.alert("CEP Inválido"));
}

const fill_form = (endereco) => {
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("city").value = endereco.cidade;
    document.getElementById("state").value = endereco.estado;

}

const $cep = document.getElementById("cep");
$cep.addEventListener("blur", () => found_cep($cep.value));

module.exports = API_CEP;