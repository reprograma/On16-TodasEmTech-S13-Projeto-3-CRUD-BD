const express = require("express");
const cors = require("cors");
const mongoose = require("./database/mongooseConnect.js");
const coachRoutes = require("./routes/coachRoutes.js");
const pokedexRoutes = require("./routes/pokedexRoutes.js")

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect();

app.use(coachRoutes);
app.use(pokedexRoutes)

// db.on("error", console.log.bind(console, "Erro de Conexão."));
// db.once("open", () => {
//     console.log("Conexão com o banco de dados feita com sucesso");
//   });

module.exports = app;
