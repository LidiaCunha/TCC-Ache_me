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
        host: posibleService["gmail"].host,
        service: posibleService["gmail"].service,
        port: posibleService["gmail"].port,
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

    return mail; 
};

module.exports = sendMail;