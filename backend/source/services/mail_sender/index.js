const mail_controller = require("nodemailer");

const sendMail = async( writer , writerPass , sendTo, subject, text, html ) =>{
    // pegando o serviço que será usado(gmail, hotmail, outlook ...)
    const [ name , serviceWithCompany ] = sendTo.split("@"); 
    const [ service , company ] = serviceWithCompany.split(".");
    // objeto com os possiveis serviçoes
    const posibleService = {
        gmail:{     
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465 ,
        },
        outlook:{
            host:'smtp-mail.outlook.com',
            service:'outlook',
            port:587,
        },
        yahoo:{
            host:'smtp.mail.yahoo.com',
            service:'yahoo',
            port:465,
        },
        icloud:{
            host:'smtp.mail.me.com',
            service:'',
            port:587,
        },
        uol:{
            host:'smtps.uol.com.br',
            service:'uol',
            port:587,
        },
        globo:{
            host:'smtp.globo.com',
            service:'globo',
            port:465,
        },
        protonmail:{
            host:'smtp.protonmail.com',
            service:'protonmail',
            port:1025,
        },
        live:{
            host:'smtp.live.com',
            service:'hotmail',
            port:587,
        },
        hotmail:{
            host:'smtp.live.com',
            service:'hotmail',
            port:587,
        },
        aol:{
            host:'smtp.aol.com',
            service:'AOL',
            port:587,
        },
        tutanota:{
            host:'smtp.tutanota.com',
            service:'tutanota',
            port:587,
        },
        fastmail:{
            host:'smtp.fastmail.com',
            service:'fastmail',
            port:465,
        },
        zoho:{
            host:'smtp.zoho.com',
            service:'zoho',
            port:465,
        },
    };
    
    const transporter = mail_controller.createTransport({
        host: posibleService[service].host,
        service: posibleService[service].service,
        port: posibleService[service].port,
        auth   : {
            user  : writer,
            pass  : writerPass,
        },
        secure: true,
        tls: {
          rejectUnauthorized: false
        }
    });

    const mail = await transporter.sendMail({
        from  : writer,
        to    : sendTo ,
        subject : subject,
        text  : text,
        html  : html,
    });

    console.log(mail); 
};

/*
EXEMPLO DE USO DA FUNÇÃO

const htmlContentMail = `<div style='width:100%;text-align:center;color:red;font-family:cursive;'>
                            <h1>Colocando HTML e CSS no email</h1>
                            <h3>Para enviar esse email foi ultilizado a biblioteca nodemailer do node js</h3>
                        </div>`;
const assunto = "teste de envio";
const text = "texto do email";
const my_acc = "iuri@gmail.com";
const my_pass = "senha123";

EmailController.index()
    .then ( emails => 
        emails.forEach( email => 
            sendMail (my_acc , my_pass , email.dataValues.email , assunto ,text, htmlContentMail )
        )
    );
*/
module.exports = sendMail;