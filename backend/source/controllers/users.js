const {Op}=require("sequelize");
const crypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require('../models/Users');
const City = require('../models/City');
const States = require('../models/States');
const WhereLive = require('../models/WhereLive');

module.exports = {
/* SELECT */
    index  : async( req, res ) => {
        const users = await Users.findAll();
        
        let AllUsers = [];
        
        users.forEach(async (user) =>{
           
            const whereLive = await WhereLive.findByPk(user.dataValues.where_live_id);
            const state = await States.findByPk(whereLive.dataValues.state_id,{raw:true});
            const city = await City.findByPk(whereLive.dataValues.city_id,{raw:true});

            const thisUser = 
                {   
                    
                    ...user.dataValues, 
                    where_live: {
                        ...whereLive.dataValues,
                        state   : state.name_of_state,
                        city    : city.name_of_city,
                    }
                    
                    
                };

            AllUsers[AllUsers.length] = thisUser;

            if(AllUsers.length == users.length)
                return res.status(201).send(AllUsers);    
        });
        
        //return res.status(201).send(users);
    },
    login : async( req , res ) => {
        const { mail , telephone , password } = req.body;
        
        if (mail){
            const emailExists = mail ? await Users.findOne({ where: { [Op.or] : [  {mail:mail} ] } }) : null;
            if ( emailExists  && await crypt.compare(password, emailExists.dataValues.password) ){
                let token = jwt.sign( {userId: emailExists.dataValues.id} , "TCC_SENAI" );
                return res.status(201).send({ "status":true , "user":{...emailExists.dataValues} , "token":token });
            }
        }
        if (telephone){
            const telephoneExists = telephone ? await Users.findOne({ where: {[Op.or]: [{telephone:telephone}]}}) : null;
            if ( telephoneExists && await crypt.compare(password, telephoneExists.dataValues.password) ){
                const token = jwt.sign( {userId: telephoneExists.dataValues.id} , "TCC_SENAI" );
                return res.status(201).send({ "status":true , "user":{...telephoneExists.dataValues} , "token":token });
            }
        }
        
        
        return res.status(401).send({"unauthorized":"verify your data or create a new account if you never had accessed"});
    },
/* INSERT */
    store  : async( req , res ) => {

        const { name, mail , CPF , telephone , password , cep , bairro , street , number , complement , city , state } = req.body;
        
        const { firebaseUrl } = req.file ? req.file : "";

        const ExistUser = await Users.findOne({ where: { [Op.or] : [ {telephone:telephone} , {mail:mail} , {cpf:CPF} ] } });

        if(ExistUser)
            return res.status(401).send({"error":"this user already exists"});
        
        let CityR = await City.findOne({ where: { name_of_city:city } });
        if (! CityR)
            CityR =await City.create({name_of_city:city});
        
        const city_id = CityR.dataValues.id;
        
        let StateR = await States.findOne({ where: { name_of_state:state } });
        if (! StateR )
            StateR =await States.create({name_of_state:state});
        
        const state_id = StateR.dataValues.id;
        
        const whereLive = await WhereLive.create({cep, bairro, street, number, complement, state_id, city_id});
        
        const where_live_id = whereLive.dataValues.id;
        
        const cryptPassword = await crypt.hash(password,10);

        const user = await Users.create( { name , mail , cpf:CPF , telephone , password:cryptPassword , photo:firebaseUrl , where_live_id} );

        const token = jwt.sign( {userId: user.id} , "TCC_SENAI" );

        return res.status(201).send({...user.dataValues, token});
    },
/* UPDATE */
    update : async( req , res ) => {
        const { userId } = req.params;

        const { name, mail , CPF , telephone , password , merit , indication , cep , bairro , street , number , complement , city , state } = req.body;

        const { firebaseUrl } = req.file ? req.file : "";

        const user = await Users.findByPk(userId);
        
        const ExistUser = await Users.findOne({ where: { [Op.or] : [{name:name} , {cpf:CPF} , {mail:mail} ] } });

        if(ExistUser && await crypt.compare(password, ExistUser.password ) )
            return res.status(401).send({"error":"this account already exists"});
        
        const whereMaybeLived = await WhereLive.findByPk(user.dataValues.where_live_id);
        const cityToCompare = await City.findByPk(whereMaybeLived.dataValues.city_id);
        const stateToCompare = await States.findByPk(whereMaybeLived.dataValues.state_id);
        

        if ( cityToCompare.dataValues.name_of_city !== city && city ) {
            const cityExists = await City.findOne({where: {name_of_city : city}});
            if ( cityExists ){
                await whereLive.update({ city_id : cityExists.dataValues.id , updatedAt:null} , { where: whereMaybeLived.dataValues.id });
            } else {
                const newCityUpdated = await City.create({name_of_city : city}); 
                await whereLive.update({ city_id : newCityUpdated.dataValues.id , updatedAt:null} , { where: whereMaybeLived.dataValues.id });
            } 
        }

        if ( stateToCompare.dataValues.name_of_state !== state && state ) {
            const stateExists = await States.findOne({where: {name_of_state : state}});
            if ( stateExists ){
                await whereLive.update({ state_id : stateExists.dataValues.id , updatedAt:null} , { where: whereMaybeLived.dataValues.id });
            } else {
                const newStateUpdated = await States.create({name_of_state : state}); 
                await whereLive.update({ city_id : newStateUpdated.dataValues.id , updatedAt:null} , { where: whereMaybeLived.dataValues.id });
            } 
        }
        
        if ( ( whereMaybeLived.dataValues.cep !== cep && cep ) || ( whereMaybeLived.dataValues.number !== number && number ) || ( whereMaybeLived.dataValues.complement !== complement && complement ) || ( whereMaybeLived.dataValues.bairro !== bairro && bairro ) || ( whereMaybeLived.dataValues.street !== street && street ) ) {
            await whereLive.update({cep, bairro, number, street, complement, updatedAt:null},{where:whereMaybeLived.dataValues.id});
        }

        const userUpdated = await Users.update({name , mail , cpf:CPF , telephone , password:cryptPassword , photo:firebaseUrl, merit , indication , updatedAt:null }, { where: { id: userId } });
        
        if( !userUpdated )
            return res.status(401).send({"error":"something is wrong with your user id"});
        
        return res.status(201).send({"sucess":"the user was updated sucefuly!"});
    },
    updateFieldOfUsers: async( req , res ) => {
        const {userId} = req.params;

        const { field, contentOfField } = req.body;

        const thisUser = await Users.findByPk(userId);
        
        if( thisUser && thisUser.dataValues[field] != contentOfField ){
            
            const string = `{
                "${field}" : "${contentOfField}"
            }`;
            
            const userWithFieldUpdated = await Users.update( JSON.parse(string) , { where: { id : userId } } );
            
            if( userWithFieldUpdated )
                return res.status(201).send(userWithFieldUpdated);
            
        }
        
        return res.status(422).send({"error": "this user does not exists or the data is equal the lasted"});
        
    },
    updateFieldFromWhereUserLive: async( req, res) => {
        const {userId} = req.params;

        const { field, contentOfField } = req.body;

        const thisUser = await Users.findByPk(userId);
        
        const whereUserLive = await WhereLive.findByPk(thisUser.dataValues.where_live_id);

        if( whereUserLive && whereUserLive.dataValues[field] != contentOfField ){
            
            const string = `{
                "${field}" : "${contentOfField}"
            }`;
            
            const userWithFieldFromWhereLiveUpdated = await WhereLive.update( JSON.parse(string) , { where: { id : whereUserLive.id } } );
            
            if( userWithFieldFromWhereLiveUpdated )
                return res.status(201).send(userWithFieldFromWhereLiveUpdated);
            
        }
        
        return res.status(422).send({"error": "this user does not exists or the data is equal the lasted"});
    
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