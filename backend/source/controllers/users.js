const Users = require('../models/Users');
const {Op}=require("sequelize");
const crypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
/* SELECT */
    index  : async( req , res ) => {
        const users = await Users.findAll();

        return res.status(201).send(users);
    },
/* INSERT */
    store  : async( req , res ) => {
        const { name, mail , CPF , password } = req.body;

        const ExistUser = await Users.findOne({ where: { [Op.or] : [ {cpf:CPF} , {mail:mail} ] } });

        if(ExistUser){
            return res.status(401).send({"error":"this user alredy exists"});
        }

        const cryptPassword = await crypt.hash(password,10);

        const user = await Users.create( { name , mail , cpf:CPF , password:cryptPassword } );

        const token = jwt.sign( {alunoId: user.id} , "TCC_SENAI" )

        return res.status(201).send({...user.dataValues, token});
    },
/* UPDATE */
    update : async( req , res ) => {
        const { userId } = req.params;
        const { name, mail , CPF , password } = req.body;

        const cryptPassword = await crypt.hash(password,10);

        const ExistUser = await Users.findOne({ where: { [Op.and] : [{name:name} , {cpf:CPF} , {mail:mail} ] } });

        if(ExistUser && crypt.compare(password, ExistUser.password ) )
            return res.status(401).send({"error":"you need to change something to update your account"});
        
        const userUpdated = await Users.update({ name, mail , cpf:CPF , password:cryptPassword ,updatedAt:null }, { where: { id: userId } });
        
        if( !userUpdated )
            return res.status(401).send({"error":"something is wrong with your user id"});
        
        return res.status(201).send({"sucess":"the user was updated sucefuly!"});
    },
/* DELETE */
    delete : async( req , res ) => {
        const { userId } = req.params;
        
        const userDeleted = await Users.destroy({where:{id:userId}})
        
        if(!userDeleted){
            return res.status(401).send({"error":"something is wrong!"})
        }
        return res.sendStatus(201);
    },
};