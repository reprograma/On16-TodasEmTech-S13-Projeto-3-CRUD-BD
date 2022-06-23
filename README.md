# On16-TodasEmTech-S13-Projeto-3-CRUD-BD
Turma Online 16 - Todas em Tech | Back-end | 2022 | Semana 13 - Projeto Guiado CRUD com MongoDB sob orientação da professora **Beatriz Ramerindo**: [LINKEDIN](https://www.linkedin.com/in/beatriz-ramerindo/) e [GITHUB](https://github.com/isjanebia).

<p align="center">
  <img src="https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif" width= "200" height="100"/>
</p>


## 🌈Sobre mim:
Olá, meu nome é Gaia Maria. Sou uma travesti graduada em História Licenciatura (UNESP), estudante de Back-end (Reprograma) e graduanda em Análise e Desenvolvimento de Sistemas (Faculdade Descomplica). Estou em transição de carreira e aqui, em meu perfil do GitHub ou em meu LinkedIn, você podera acompanhar meu desenvolvimento.

Agradeço desde ja a sua atenção.

Seja muito bem-vinde ✨
<br>
<br>

## 🌊Sobre o Projeto:

O **{Pokedex}** é um sistema de gerenciamento de pokemons e treinadores.
Onde receberemos cadastros de pokemons referenciando cada ao seu respectivo treinador. 
Como essa abaixo:   

<img src= "https://static.wikia.nocookie.net/tkoc/images/5/58/Pok%C3%A9dex.png/revision/latest?cb=20200623144843&path-prefix=pt-br" width= "250" height="150"/>
</p>

## 🔥Tecnologias usadas:
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

<br>
<br>

## 📁Arquitetura: 

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

<br>
<br>

## 🌸Dados para Collection Treinador

- **_id:** autogerado e obrigatório
- **name:** texto e obrigatório
- **age:** numero e obrigatorio
- **team:** texto e opcional
- **gender:** texto, opcional e com default 'não informado'
- **region:** texto e opcional

### 🌿 API deve retornar seguinte JSON:

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


## 🌸Dados para Collection Pokemon:

- **_id:** autogerado e obrigatório
- **name:** texto e obrigatório
- **type:** texto e obrigatório
- **abilities:** array de texto, opcional e com default []
- **description:** texto e opcional
- **avaliable:** bolean e opcional com o default true

### 🌿 API deve retornar seguinte JSON:

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

## 🚀 Extras
### 01 - Dotenv: variaves de ambiente

Dica dada pela professora afim de dar maturidade ao codigo, pois contas dotenv saem uma excelente ferramenta para gerenciar os dados sensíveis de desenvolvimento que não devem ser compartilhados como: chaves de API’s, informações do banco de dados, entre outras.

```
1- No seu projeto node com express, instale como dependência de desenvolvimento o dotenv. Utilize yarn ou npm.

yarn add dotenv -D
npm I —save-dev dotenv

2- Crie o arquivo .env

E nele crie suas chaves e valores que contém informações sensíveis e não podem ser compartilhadas além do ambiente de dev.

Por padrão as chaves são maiúsculas e não podem conter espaço, os valores ficam após o igual e podem ser de qualquer tipo pois retornarão sempre uma string:

NOME_DA_CHAVE=valor

3- Execute o ‘dotenv’, importando, usando a função config e incluindo ao processo para ler as variáveis configuradas:

require(‘dotenv’).config( )
process.env.NOME_DA_CHAVE

4- Como boa prática lembre-se de incluir seu arquivo .env no .gitignore

Você pode criar um .env.example e deixar apenas as chaves genéricas
```
<br>
 
### 02 - Classes: POO (orientação a objetos) | Conceitos básicos  

Uma breve introdução sobre classes e objetos, para entender melhor o ORM. É necessário Utilizar a palavra reservada `new`  para instanciar um objeto, ou seja, construir um novo documento a partir da classe( nossa `Schema` ).

```javascript
const pokemon = new Model({
    name: 'Pikachu',
    avaliable: true,
    abilities: ['choque-do-trovao', 'esquivar'],
    attributes: {
      hp: 100,
      attack: 55,
      defense: 40,
    }
});

```



<p align="center">
  <img src="https://pa1.narvii.com/6730/b06014fe49584885aa9cf042c6b9ed8065d2094d_hq.gif" width= "250" height="160"/>
</p>

