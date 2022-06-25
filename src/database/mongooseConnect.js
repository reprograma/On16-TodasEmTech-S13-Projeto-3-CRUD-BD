<<<<<<< HEAD
const DATABASE_URI = process.env.DATABASE_URI;

const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected database!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connect,
};
=======
const DATABASE_URI = process.env.DATABASE_URI

const mongoose = require('mongoose')

const connect = async() => {
   try {
     await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })

     console.log('banco conectado! ')
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}
>>>>>>> 4d7f5bd6d58d47ab10ff2c22d47771e781decd5c
