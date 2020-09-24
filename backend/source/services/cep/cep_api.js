const fetch = require('node-fetch');

(async () => {
  const where = encodeURIComponent(JSON.stringify({
    "CEP": {
      "$exists": true
    },
    "estado": {
      "$exists": true
    },
    "cidade": {
      "$exists": true
    },
    "bairro": {
      "$exists": true
    }
  }));
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Cepcorreios_CEP?limit=10&excludeKeys=logradouro,info,numero&where=${where}`,
    {
      headers: {
        'X-Parse-Application-Id': 'pYTOCsYnVfVnFkXwRsCE9Qv5Yv55JQlu3qnbDahh', // This is your app's application id
        'X-Parse-REST-API-Key': 'OqS5bpNiyNGoBYamFJqSpN9V6q6PsQ49mFAYBeQY', // This is your app's REST API key
      }
    }
  );
  const data = await response.json(); // Here you have the data that you need
  console.log(JSON.stringify(data, null, 2));
})();

module.exports = CEP;