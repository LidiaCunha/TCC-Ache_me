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
    
    <div style='width:700px; background-color:#1e1f21; height:500px; margin:0px; padding:20px;'>
        <h1 style='color:#dddddd;text-align:center;font-size:60px;font-family: "Oswald", sans-serif;font-weight:700;'>
        Ache<span style='color:#d62828;'>.me</span>
        </h1>

        <div style=' margin: auto; width:70px;background-color:#d62828; height:70px;border-radius: 50%; padding: 10px; box-sizing: border-box;'>
        <img src="logo.png" alt="logo" style='width:50p; height:50px;'>
        </div>

        <h1 style='color:#dddddd;text-align:center;padding-top:0.2%;font-family: "Oswald", sans-serif;font-weight:700;'>
        Seja bem-vindo!
        </h1>
    
        <h2 style='text-align: center; font-family: "Lato", sans-serif;padding:10px; font-weight:200;color:#dddddd'>
        Agora, é só validar seu cadastro na Ache<span style='color:#d62828;'>.me</span> clicando no botão abaixo. Se você não efetuou o cadastro, desconsidere esse e-mail.
        </h2>
        <a style='text-decoration: none;' href="http://localhost:3001/validMail/?&name=${name}&mail=${mail}&CPF=${CPF}&telephone=${telephone}&password=${password}&cep=${cep}&bairro=${bairro}&street=${street}&number=${number}&city=${city}&complement=${complement}&state=${state}&photo=${firebaseUrl}">
        <div style=' padding:20px; width: 150px;text-align: center; font-family: "Lato", sans-serif;padding:10px; font-weight:400;font-size:20px;color:#dddddd;background-color:#d62828;border-radius:20px; margin: auto;'>Validar email</div>
        </a>
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