const DATABASE_URI = process.env.DATABASE_URI;

const mongoose = require("mongoose");
// funçao de conexao com o banco
//toda vez que declarar async declara o await
const connect = async () => {
  // conexao assincrona
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //foi utilizado console.error, Escreve uma msg de erro no web console. lembrando que esta fora do padrão.
    console.log("banco conectado! ");
  } catch (error) {
    console.error(error);
  }
};

// exporta o módulo
module.exports = {
  connect,
};
