## Comandos utilizados
<br> > touch .gitignore <No terminal, touch cria um novo arquivo>
<br> > touch server.js
<br> > npm init -y
<br> > npm i express cors <instalação de 2 dependências. O express e o cors. O Express para construir a API. Cors para tornar a API Pública>
<br> > npm i -D nodemon <O '-D' significa de Desenvolvimento. Quando for subir o pacote não vai essa funcionalidade que só é útil no desensvolvimento da API> <Verificar se no package.json o 'start' está ativado como "nodemon server.js">
<br> > npm i mongoose
<br> > mkdir src
<br> > touch src/app.js <Cria arquivo app.js dentro da pasta src>
<br>
<br>
<br> > criação da aplicacao (arquivo app.js) <br>
- 1. No arquivo app.js importar o express, passar o body parse e permitir exportação
- 2. No arquivo server.js importar o app.js e abrir a porta. <br>

<br> > npm start
<br> > conectar o banco de dados <br>
- 1. Ir no MongoAtlas bucar o link do meu banco de dados
- 2. criar pasta database e arquivo mongooseConnect.js
- 3. Inserir em uma constante a URL copiada do MongoAtlas.


<br> > criar a pasta modelo com arquivos model treinador e posteriormente pokemons
<br> > criar a controller 
<br> > criar as rotas e importar no app

> const DBURI = process.env.DBURI
> variáveis de ambiente tem que ser maíusculas
> Tem que instalar o dontev. npm i dontenv no terminal