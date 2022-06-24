const mongoose = require("mongoose");

require("dotenv").config()

const DATABASE_URI =
  `mongodb+srv://${process.env.ATLAS_LOGIN}:${process.env.ATLAS_PASSWORD}@cluster0.8s7ba.mongodb.net/projeto_db`;

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connect,
};
