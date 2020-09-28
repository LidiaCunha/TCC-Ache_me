const sendMail = require('../../services/mail_sender/');
const accDetails = require('../../config/mailconfig.json');

const sendMailOnCreate = async( req ,res ,next ) => {
    const {name, mail , CPF , telephone , password , cep , bairro , street , number , complement , city , state} = req.body;

    const {firebaseUrl} = req.file ? req.file : ''
    let teste = false;
    const subject = "Confirme seu email para se cadastrar no Ache.me";
    const text = "Clique no botão para se cadastrar no Ache.me, se não foi você que se cadastrou desconsidere este email.";
    const htmlContentMail = `
    <link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@200&display=swap" rel="stylesheet">
    
    <div style='width:100vw;background-color:#eae2b7; height:100vh;margin:0px;padding:0px;'>
      <h1 style='color:#003049;text-align:center;padding-top:0.2%;font-size:60px;font-family: "Oswald", sans-serif;font-weight:700;'>Ache<span style='color:#d62828;'>.me</span></h1>
    
      <h2 style='font-family: "Lato", sans-serif;padding:10px; font-weight:200;color:#003049'>Se é i ${name} e se cadastrou no site Ache<span style='color:#d62828;'>.me</span> clique no botão abaixo para efetuar a validação do seu email, caso não tenha se cadastrado, desconsidere esse email.</h2>
  
      <a href="http://localhost:3001/validMail/?&name=${name}&mail=${mail}&CPF=${CPF}&telephone=${telephone}&password=${password}&cep=${cep}&bairro=${bairro}&street=${street}&number=${number}&city=${city}&complement=${complement}&state=${state}&photo=${firebaseUrl}" 
      style='padding:20px;width:50%;font-family: "Lato", sans-serif;padding:10px; font-weight:400;font-size:20px;color:#f77f00;border:solid 1px #f77f00;background-color:#eae2b7;border-radius:20px;margin-left:25%;'>Validar email</a>
    </div>
    `;  
    
    const hasSended = await sendMail( accDetails.my_acc , accDetails.my_password , mail , subject ,text, htmlContentMail);

    if(hasSended.accepted[0] == mail){
        return res.status(201).send({"sucess":"mail was sended successfully"});
    }else{
        return res.status(404).send({"error":"this mail is not valid"});
    }
} 
        
module.exports = sendMailOnCreate;