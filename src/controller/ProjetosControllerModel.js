const modelProjeto = require('../models/projetosModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET





const create = (require, response) => {
    const senhaComHash = bcrypt.hashSync(require.body.senha, 10);
    require.body.senha = senhaComHash;
    const modelProjetos = new modelProjeto(require.body);

    modelProjetos.save(function (err) {
        if (err) {
            response.status(500).send({ message: err.message })
        }

        response.status(201).send(modelProjetos)
    })
}
//---------------------------------------------

const getAll = (require, response) => {
    modelProjeto.find(function (err, adm) {
        if (err) {
            response.status(500).send({ message: err.message })
        }
        response.status(200).send(adm);
    })
};

//-----------------------------------------

const deleteById = async (require, response) => {
    try {
        const { id } = require.params
        await modelProjeto.findByIdAndDelete(id)
        const message = `Usuária com o id ${id} foi deletada.`
        response.status(200).json({ message })
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}

//-------------------------------------------


// const createLogin = (require, response) => {
//     modelProjeto.findOne({ email: require.body.email }, function (error, adm) {
//         if (!adm) {
//             return response.status(404).send(`Email ${require.body.email} inexistente`);
//         }

//         const senhaValida = bcrypt.compareSync(require.body.senha, adm.senha);

//         if (!senhaValida) {

//             return response.status(403).send('Senha invalida');
//         }
//         const token = jwt.sign({ email: require.body.email }, SECRET);
//         return response.status(200).send(token);
//     })
//  }

// const createLogin = (req, res) => {
//     modelProjeto.findOne({ email: req.body.email }, function (error, adm) {
//       if (error) {
//         return res.status(500).send({ message: "Não encontrado" });
//       }
//       if (!adm) {
//         return res
//           .status(404)
//           .send(`Email ${email} inexistente`);
//       }
//       const senhaInvalida = bcrypt.compareSync(req.body.senha, adm.senha);
//       if (!senhaInvalida) {
//         return res.status(403).send("Senha inválida");
//       }
//       const token = jwt.sign({ email: req.body.email }, SECRET);
//       return res.status(200).send(token);
//     });
//   }

const createLogin = (req, res) => {
    modelProjeto.findOne({ email: req.body.email }, function (error, adm) {
      if (error) {
        return res.status(500).send({ message: "Não encontrado" });
      }
      if (!adm) {
        return res
          .status(404)
          .send(`Email ${email} não encontrado`);
      }
      const validPassword = bcrypt.compareSync(req.body.password, adm.password);
      if (!validPassword) {
        return res.status(403).send("Senha incorreta");
      }
      const token = jwt.sign({ email: req.body.email }, SECRET);
      return res.status(200).send(token);
    });
  }






module.exports = {
    create,
    getAll,
    deleteById,
    createLogin
}