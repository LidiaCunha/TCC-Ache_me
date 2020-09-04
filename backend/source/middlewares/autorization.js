const jwt = require("jsonwebtoken");
const config = require("../config/auth.json")

module.exports = ( req,res,next ) => {
	const auto = req.headers.authorization;

	if ( !auto )
		res.send(401).send({erro:"token não informado!!!!!!"});
	
	const [Bearer, token] = auto.split(" ");

	if( !token )
		res.status(404).send({erro:"TOKEN MAL FEITO HACKER DE MERDA!!!!!!"}) 
	try{
		const ret = jwt.verify(token, config.secret)

		req.userId = ret.userId

		return next();	
	}catch(err){
		res.status(401).send({erro:"HACKER DE MERDAAAAAAAAAAAAAAAAAAA"})

	}

	
}	
