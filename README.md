<h1 align="center">  Projeto Guiado III  :rocket: </h1> <br>
<h3 align="center">  Turma On16 Todas em Tech - Back-end | S13  </h3>
<br>

## ![pokemon_balls](https://user-images.githubusercontent.com/84551213/175753171-a40c5a2a-7552-43bc-9b50-b3e4d2a15f9b.gif) Projeto Pokedex ![eevee](https://user-images.githubusercontent.com/84551213/175753100-03cee17f-4008-4d55-b437-8fb23d41f8ad.gif)
<br>


> O **{Pokedex}** é um sistema de gerenciamento de pokémons e seus treinadores. A API onde recebemos cadastros de pokémons referenciando cada ao seu respectivo treinador.

</br>

### :game_die: `Dados para Collection Coach:` 

```
{
    _id: new ObjectId("62ab7c861ff392ef188b10fe"),
    name: 'Ash',
    age: 10,
    team: null,
    gender: 'male',
    region: 'Kanto',
    createdAt: 2022-06-16T18:55:02.023Z,
    updatedAt: 2022-06-16T18:55:02.023Z,
    __v: 0
  }
```

### :game_die: `Dados para Collection Pokémon:` 

```
  {
    _id: new ObjectId("62ab7c861ff392ef188b1100"),
    name: 'Pikachu',
    type: 'Eletric',
    abilities: [ 'Static' ],
    description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b10fe"),
    createdAt: 2022-06-16T18:55:02.076Z,
    updatedAt: 2022-06-16T18:55:02.076Z,
    __v: 0
  }
```
> ## ![charmander_shiny](https://user-images.githubusercontent.com/84551213/175754172-5bbf037b-37fd-4020-be5f-1714a889c4ce.gif) `CRUD` 
</br>


| Verbo  | Descrição da Rota                      | Descrição da Rota                      |
| ------ | ---------------------------------------| ---------------------------------------|
| GET    | Deverá retornar todos os treinadores cadastrados.                 | localhost:1313/coach                  |
| GET    | Deverá retornar o treinador com o id informado.             | localhost:1313/coach/:id               |
| GET    | Deverá retornar todos os pokemons cadastrados e os seus treinadores.                 | localhost:1313/pokedex                  |
| GET    | Deverá retornar o pokemon com o id informado e o seu treinador            | localhost:1313/pokedex/:id               |
| POST   | Deverá criar um treinador                   | localhost:1313/coach                  |
| POST   | Deverá criar um pokemon                   | localhost:1313/pokedex                  |
| DELETE | Deverá deletar um treinador por id específico e retorna mensagem amigável                          | localhost:1313/coach/:id                |
| DELETE | Deverá deletar um pokemon por id específico e retorna mensagem amigável                          | localhost:1313/pokedex/:id               |
| PATCH  | Deverá alterar informação específica de um treinador dentro de um titulo por id específico e retorna o título alterado     | localhost:1313/coach/:id|
| PATCH  | Deverá alterar informação específica dentro de um pokémon por id específico e retorna o título alterado     | localhost:1313/pokedex/:id       |

<br>

> ## ![vaporeon](https://user-images.githubusercontent.com/84551213/175754150-a1be1e18-3da5-4f1c-980b-18e69c6b1a65.gif) Iniciando a API Nodejs
</br>

| Passo | Comando/informação       |
| --------- | ----------- |
| Clonar repositório | `https://github.com/camisarp/On16-TodasEmTech-S12-Intro-BD.git` |
| Inicie um projeto node | `npm init` |
| Instale o express | `npm i express` |
| Instale o nodemon | `npm i nodemon` |
| Instale o mongoose | `npm i mongoose` |
| Instale o dontenv | `npm I —save-dev dotenv` |
| No package.json, crie/modifique o script start   | `"start": "nodemon <nome do arquivo .js>"` |
| Crie o .gitignore     | `node_modules e .env` |

<br>

> ## ![growlithe](https://user-images.githubusercontent.com/84551213/175754170-346679c8-9d11-45ad-a768-f7fa7b28d6c3.gif)  📁Arquitetura: 

```
 📁 On16-TodasEmTech-S13-Projeto-3-CRUD-BD
  |
  |-  📁 src
  |    |
  |    |- 📁 database
  |         |- 📄 mongooseConnect.js
  |
  |    |- 📁 controllers
  |         |- 📄 coachController.js
  |         |- 📄 pokedexController.js
  |
  |    |- 📁 models
  |         |- 📄 coachModel.js
  |         |- 📄 pokedexModel.js
  |
  |    |- 📁 routes
  |         |- 📄 coachRoutes.js 
  |         |- 📄 pokedexRoutes.js 
  |
  |    |- 📄 app.js
  |
  |- 📄 .env
  |- 📄 .env.example
  |- 📄 .gitignore  
  |- 📄 package-lock.json  
  |- 📄 pakage.json  
  |- 📄 README.md  
  |- 📄 server.js 

```

> ##  ![raichu](https://user-images.githubusercontent.com/84551213/175753473-0797fe92-5168-4ffa-a4c5-76bc372046dd.gif) `Tecnologias` 
</br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

 
----

<p align="center">
  <img src="https://user-images.githubusercontent.com/84551213/175754233-21ede7ac-5652-4146-898f-0f7e2cfd791b.gif" width= "400px"/>
</p>

<p align="center">
Desenvolvido por Camila Ribeiro, com o apoio da Profa Beatriz Ramerindo. :purple_heart:
</p>

<<<<<<< HEAD
<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" />
=======
```

<br>
<br>

# Contrato da API
 - Sim, eu torcia pela equipe Rocket

### Requisitos 
- [ ] GET "**/treinadores**" Deverá retornar todos os treinadores cadastrados.
- [ ] GET **"/treinador/[id]** Deverá retornar o treinador com o id informado.

- [ ] GET "**/pokedex**" Deverá retornar todos os pokemons cadastrados e os seus treinadores.
- [ ] GET **"/pokedex/[id]** Deverá retornar o pokemon com o id informado e o seu treinador

- [ ] POST   "**/treinador**" Deverá criar um treinador 
- [ ] POST   "**/pokedex**"  Deverá criar um pokemon 

- [ ] DELETE   "/treinadores/[ID]" Deverá deletar um treinador por id específico e retorna mensagem amigável
- [ ] DELETE   "/pokedex/[ID]" Deverá deletar um pokemon por id específico e retorna mensagem amigável

- [ ] PATCH  "/treinadores/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ] PATCH  "/pokedex/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado


### Regras de negócio

- [ ]  Não deverá ser possível criar mais de um treinador com o mesmo nome
- [ ]  Para criar um novo pokemon, deverá vincular no momento da criação a um treinador já existente no sistema, utilizando o numero do id do treinador correspondente no corpo da requisição

<br>
<br>

## Dados para Collection Treinador

- _id: autogerado e obrigatório
- name: texto e obrigatório
- age: numero e obrigatorio
- team: texto e opcional
- gender: texto, opcional e com default 'não informado'
- region: texto e opcional

### API deve retornar seguinte JSON:

```javascript
[
  {
    _id: new ObjectId("62ab7c861ff392ef188b10fe"),
    name: 'Ash',
    age: 10,
    team: null,
    gender: 'male',
    region: 'Kanto',
    createdAt: 2022-06-16T18:55:02.023Z,
    updatedAt: 2022-06-16T18:55:02.023Z,
    __v: 0
  },
  {
    _id: new ObjectId("62ab7c861ff392ef188b1104"),
    name: 'Jessie',
    age: 25,
    team: 'Rocket',
    gender: 'female',
    region: 'Kanto',
    createdAt: 2022-06-16T18:55:02.090Z,
    updatedAt: 2022-06-16T18:55:02.090Z,
    __v: 0
  }
]

```
<br>
<br>


## Dados para Collection Pokemon

- _id: autogerado e obrigatório
- name: texto e obrigatório
- type: texto e obrigatório
- abilities: array de texto, opcional e com default []
- description: texto e opcional


### API deve retornar seguinte JSON:

```javascript
[
  {
    _id: new ObjectId("62ab7c861ff392ef188b1100"),
    name: 'Pikachu',
    type: 'Eletric',
    abilities: [ 'Static' ],
    description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b10fe"),
    createdAt: 2022-06-16T18:55:02.076Z,
    updatedAt: 2022-06-16T18:55:02.076Z,
    __v: 0
  },
  {
    _id: new ObjectId("62ab7c861ff392ef188b1102"),
    name: 'Bulbasaur',
    type: 'Eletric',
    abilities: [ 'Overgrow' ],
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b10fe"),
    createdAt: 2022-06-16T18:55:02.084Z,
    updatedAt: 2022-06-16T18:55:02.084Z,
    __v: 0
  },
  {
    _id: new ObjectId("62ab7c861ff392ef188b1106"),
    name: 'Wobbuffet',
    type: 'Psychic',
    abilities: [ 'Shadow Tag' ],
    description: 'It hates light and shock. If attacked, it inflates its body to pump up its counterstrike.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b1104"),
    createdAt: 2022-06-16T18:55:02.095Z,
    updatedAt: 2022-06-16T18:55:02.095Z,
    __v: 0
  },
  {
    _id: new ObjectId("62ab7c861ff392ef188b1108"),
    name: 'Ekans',
    type: 'Poison',
    abilities: [ 'Shed Skin', 'Intimidate' ],
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    avaliable: true,
    coach: new ObjectId("62ab7c861ff392ef188b1104"),
    createdAt: 2022-06-16T18:55:02.102Z,
    updatedAt: 2022-06-16T18:55:02.102Z,
    __v: 0
  }
]
```
<br>
<br>


##  🎓 Combinado da semana
 - [PARA O LAR](./para_o_lar//instru%C3%A7%C3%B5es.md) < clique aqui

## 📖 Referências
- https://www.gartner.com/en/information-technology/glossary/object-data-model
- https://medium.com/tkssharma/node-js-with-mongoose-odm-9697c09665df
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://docs.mongodb.com/
- https://docs.mongodb.com/manual/crud/
- https://docs.atlas.mongodb.com/tutorial/create-new-cluster/
- https://studio3t.com/academy/topic/mongodb-vs-sql-concepts/
- https://dzone.com/articles/sql-vs-nosql
- https://mongoosejs.com/docs/index.html

### 🎥 Videos de apoio

- [Resumo Mongodb - Codigo Fonte TV](https://www.youtube.com/watch?v=4dTI1mVLX3I)
- [nodeJs Express Mongo - Api rest full Turitorial](https://www.youtube.com/watch?v=K5QaTfE5ylk)
- [O que é banco de dados? - Curso em Video](https://www.youtube.com/watch?v=Ofktsne-utM)

## 👋🏾 Minhas redes sociais
 - [LINKEDIN](https://www.linkedin.com/in/beatriz-ramerindo/)
 - [GITHUB](https://github.com/isjanebia)
 - [INSTAGRAN](https://www.instagram.com/isjanebea/)
 - [site] [beatriz.rarmerindo.com.br](beatriz.ramerindo.com.br)
 - [email] bea@ramerindo.com.br
>>>>>>> 4d7f5bd6d58d47ab10ff2c22d47771e781decd5c

</p>