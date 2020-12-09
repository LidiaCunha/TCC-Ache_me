module.exports = {
	url: process.env.DATABASE_URL,
	config:{
		dialect :  "postgres",
		logging :  console.log,
		define  :  {
			timestamp  : true,
			underscored: true,
		},
	}
	
	// dialect :  "mysql",
	// host    :  "localhost",
	// username:  "root",
	// password:  "bcd127",
	// database:  "TCC_SENAI",
	// define  : {
	// 	timestamp  : true,
	// 	underscored: true,
	// },
}