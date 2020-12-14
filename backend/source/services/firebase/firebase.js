const admin = require("firebase-admin");
const serviceAccount = require("../../config/firebase.json");

const BUCKET = "ache-me-a0225.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert( 
	process.env.FIREBASE_PRIVATE_KEY ? 
		{
			"type": "service_account",
			"project_id": "ache-me-a0225",
			"private_key_id": "a7335f3c301d87ef83c978201ea46b9b242927b3",
			"private_key": process.env.FIREBASE_PRIVATE_KEY,
			"client_email": process.env.FIREBASE_CLIENT_MAIL,
			"client_id": "108015355157813188125",
			"auth_uri": "https://accounts.google.com/o/oauth2/auth",
			"token_uri": "https://oauth2.googleapis.com/token",
			"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
			"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ng9f1%40ache-me-a0225.iam.gserviceaccount.com"
		}  
	:  serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket();
const imageUpload = (req, res, next) => {
	if(! req.file ) return next();

	const photo = req.file;
	
	//criando um array dividido pelo ponto e tirando o primeiro elemento do array    
    const name = Date.now()+"."+photo.originalname.split(".").pop();
    
    const file = bucket.file(name);
    
    const stream = file.createWriteStream({
		metadata: { 
			contentType: photo.mimetype,
		},
	})
    
    stream.on("error",(e)=>{
		console.log(e)
	});
    
    stream.on("finish",async()=>{
		// tornar arquivo publico 
		await file.makePublic();
		// tornar a url publica
		req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${name}`;
	
		next();
	});
    
    stream.end(photo.buffer);
}

module.exports = imageUpload;