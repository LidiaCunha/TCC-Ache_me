module.exports = {
	url: process.env.DATABASE_URL || "mysql://root:bcd127@localhost:3003/TCC_SENAI",
	config:{
		dialect :  process.env.DATABASE_URL ? "postgres" : "mysql",
		logging :  console.log,
		define  :  {
			timestamp  : true,
			underscored: true,
		},
	}
	
}