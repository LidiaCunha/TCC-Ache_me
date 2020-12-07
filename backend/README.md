# Guia de uso do back-end

## Rotas

### Publicas

- #### POST em 3001/newUser.

```javascript 
import axios from 'axios';

const api = axios.create({
	baseURL : "http://localhost:3001",
});

const user = {
    "name": "user",
    "mail": "user@gmail.com",
    "cpf": "12353848-32",
    "telephone": "11932054701",
    "password": "123",
    "photo": file,
    "cep": "278271-133",
    "bairro":"becoea",
    "street":"rua 2"
    "number":12,
    "city":"",
    "state":"",
    "complement":""
}

const dados = new FormData();

dados.append("name", user.name);
dados.append("mail", user.mail);
dados.append("CPF", user.cpf);
.
.
.
dados.append("photo", image);

api.post("/newUser", dados, {
	headers: {
		"Content-type":"multipart/form-data"	
	} 
});


```

##### - Retorno da API (contido na variavel userCreated)

```json
{
    "id": 3,
    "name": "user",
    "mail": "user@gmail.com",
    "cpf": "12353848-32",
    "telephone": "11932054701",
    "password": "$2a$10$0dbZMkKd5aGK6G1msPt0jeLpeI6YXtMWBXCBhylVVZs1Xp7fDEMKK",
    "photo": "https://storage.googleapis.com/ache-me-a0225.appspot.com/1599685265852.jpg",
    "where_live_id": 4,
    "updatedAt": "2020-09-09T21:01:16.029Z",
    "createdAt": "2020-09-09T21:01:16.029Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTU5OTY4NTI3Nn0.izq4tTK8Ji3wTWSrsdLGq6y9-DB3HpIRtKjpcve_tno"
}
```

- #### POST em 3001/users

```javascript 

// o usuario pode se logar com o email
const user = {
    "email" : "user.exemple@email.com",
    "password" : "123"
}
// ou com o telefone
const user = {
    "telephone" : "123456789",
    "password" : "123"
} 

const login = async( ) => {
    const userLoged = await api.post("/users",user);
}

```

##### Retorno da API (contido na variavel userLoged)

```json
{
    "status": true,
    "user": {
        "id": 2,
        "name": "user",
        "mail": "user.exemple@email.com",
        "cpf": "12351818-32",
        "telephone": "123456789",
        "password": "$2a$10$4OgR.1HGbac2V.iYE4EC3uf3THNxp.CwjWm7VZxTxrGqyu047/8va",
        "photo": "https://storage.googleapis.com/ache-me-a0225.appspot.com/1599681731601.jpg",
        "merit": null,
        "indication": null,
        "createdAt": "2020-09-09T20:02:18.000Z",
        "updatedAt": "2020-09-09T20:02:18.000Z",
        "where_live_id": 3
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU5OTY4MzQzMX0.MrsyexoUtQ_HdAcASxphIDSf9poBAEwLFCX_EdTVzDY"
}
```

### Rotas privadas

### lembrando que é nescessario fazer o cadastro do token do usuario na Local Storage

- #### GET em 3001/users

```js
// definindo o token
const signIn = ( user ) => {
    // guardando todo o objeto retornado como user no login ou na criação
    localStorage.setItem(TOKEN_USER,JSON.stringify(user))
    
    // guardando o token como bearer token na api instanciada pelo axios
	api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
};
signIn(user);


const getUsers = async() => {
    const users = await api.get('/users')
}

```

##### retorna uma lista de todos os usuarios contendo aonde eles moram

```json
[
    {
        "id": 3,
        "name": "user",
        "mail": "user@gmail.com",
        "cpf": "12353848-32",
        "telephone": "11932054701",
        "password": "$2a$10$0dbZMkKd5aGK6G1msPt0jeLpeI6YXtMWBXCBhylVVZs1Xp7fDEMKK",
        "photo": "https://storage.googleapis.com/ache-me-a0225.appspot.com/1599685265852.jpg",
        "merit": null,
        "indication": null,
        "createdAt": "2020-09-09T21:01:16.000Z",
        "updatedAt": "2020-09-09T21:01:16.000Z",
        "where_live_id": 4,
        "where_live": {
            "id": 4,
            "cep": "26592-332",
            "bairro": "remedios",
            "street": "rua 5",
            "number": "12",
            "complement": "123",
            "createdAt": "2020-09-09T21:01:15.000Z",
            "updatedAt": "2020-09-09T21:01:15.000Z",
            "state_id": 1,
            "city_id": 1,
            "state": "São Paulo",
            "city": "15 de irapora"
        }
    },
    {
        "id": 4,
        "name": "iuri",
        "mail": "name@gmail.com",
        "cpf": "9992929-32",
        "telephone": "11932054703",
        "password": "$2a$10$jbspvj6NYdNzMj6GRKp5KOfueBpxY3.uAzRIY5bU1RVQFxFWd9G2q",
        "photo": "https://storage.googleapis.com/ache-me-a0225.appspot.com/1599929723567.jpg",
        "merit": 1,
        "indication": null,
        "createdAt": "2020-09-12T16:55:27.000Z",
        "updatedAt": "2020-09-12T17:53:40.000Z",
        "where_live_id": 5,
        "where_live": {
            "id": 5,
            "cep": "26592-332",
            "bairro": "remedios",
            "street": "rua dos limoeiros",
            "number": "12",
            "complement": "123",
            "createdAt": "2020-09-12T16:55:26.000Z",
            "updatedAt": "2020-09-12T18:17:24.000Z",
            "state_id": 2,
            "city_id": 1,
            "state": "Rio De Janeiro",
            "city": "15 de irapora"
        }
    }
]
```

#### DELETE em 3001/users/:id

```javascript

// O usuario só pode deletar o proprio perfil
const delete = ( user ) => { 
    const res = api.delete(`/users/${user.id}`);
    if (res.status == 201){
        return true
    }else{
        return false
    }
}
```

#### PUT em 3001/users/:id

```js
const objField = {
    "field":"name",
    "contentOfField":"james bond"
};

const updateFieldOfUsers = (objField, id) =>{
    const res = api.put(`/users/${id}`, objField);
    if (res.status == 201){
        return true
    }else{
        return false
    }
}

```

- Tambem é possivel realizar o update da tabela WhereLive, basta enviar uma requisição com o método put na url : /users/wherelive/:userId enviando o mesmo objField presente no exemplo anterior.

- o update pode ser realizado em qualquer um dos campos da tabela, basta passar o nome do campo em field e o conteudo que deseja colocar nesse campo em contentOfField.

### Rotas da tabela de cidade e estado

<table style="font-size:16px;">
<tr>
    <td style="border:solid white 1px;color:white;font-size:24px;background-color:#000;width:20%;">Açoes</td>
    <td style="border:solid white 1px;color:white;font-size:24px;background-color:#000;">Estado</td>
    <td style="border:solid white 1px;color:white;font-size:24px;background-color:#000;">Cidade</td>
    <td style="border:solid white 1px;color:white;font-size:24px;background-color:#000;">Serve para...</td>
</tr>
<tr>
    <td>POST em </td>
    <td>/city</td>
    <td>/state</td>
    <td>Criar um campo que ainda não exite na tabela do banco</td>
</tr>
<tr>
    <td>GET em </td>
    <td>/city</td>
    <td>/state</td>
    <td>Listar todos os dados presentes nas respectivas tabelas</td>
</tr>
<tr>
    <td>DELETE em </td>
    <td>/city/cityId</td>
    <td>/state/stateId</td>
    <td>deletar algum campo</td>
</tr>
</table>
