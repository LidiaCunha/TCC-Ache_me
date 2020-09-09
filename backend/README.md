# Guia de uso do back-end

## Rotas

### Publicas

- #### POST em 3001/newUser

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

const CreateAcc = async( ) => {
    const userCreated = await api.post("/newUser",user);
}

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

##### retorna uma lista de todos os usuarios

```json
[
    {
        "id": 1,
        "name": "iuri2mala",
        "mail": "iurisampaio18@gmail.com",
        "cpf": "12351819-32",
        "telephone": "11992054702",
        "password": "$2a$10$1GNbDCg1cNPjYXxH2STWLu1kJeLkxkZsvIvFW/1AH83i/dCVLxry6",
        "photo": "https://storage.googleapis.com/ache-me-a0225.appspot.com/1599667637665.jpg",
        "merit": null,
        "indication": null,
        "createdAt": "2020-09-09T16:07:21.000Z",
        "updatedAt": "2020-09-09T16:07:21.000Z",
        "where_live_id": 2
    },
    {
        "id": 2,
        "name": "iurizinho o pica",
        "mail": "iolandajsoares@gmail.com",
        "cpf": "12351818-32",
        "telephone": "11992054701",
        "password": "$2a$10$4OgR.1HGbac2V.iYE4EC3uf3THNxp.CwjWm7VZxTxrGqyu047/8va",
        "photo": "https://storage.googleapis.com/ache-me-a0225.appspot.com/1599681731601.jpg",
        "merit": null,
        "indication": null,
        "createdAt": "2020-09-09T20:02:18.000Z",
        "updatedAt": "2020-09-09T20:02:18.000Z",
        "where_live_id": 3
    }
]
```

#### DELETE em 3001/users/:id

```javascript

// O usuario só pode deletar o proprio perfil
const delete = ( user ) => { 
    const res = await api.delete(`/users/${user.id}`);
    if (res.status == 201){
        return true
    }else{
        return false
    }
}
```