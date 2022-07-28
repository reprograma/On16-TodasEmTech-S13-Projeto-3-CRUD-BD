const projetos = require('../models/projetos')
const express = require('express')
const app = express()

app.use(express.json())





const getAddProject = async (require, response) => {
    try {
        const { name, state, topic, description, format } = require.body

        const newproject = new projetos({
            name, state, topic, description, format
        })
        const savedproject = await newproject.save()
        response.status(201).json(savedproject)

    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}

//-----------------------------------------


const getAllProjects = (request, response) => {
    projetos.find((err, projetos) => {
        if (err) {
            response.status(500).send({ message: err.message });
        } else {
            response.status(200).json(projetos);
        }
    })
}
//-----------------------------------------

const getIdProject = async (request, response) => {
    try {
        const findProjeto = await projetos.findById(request.params.id)
        response.status(200).json(findProjeto)
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}

//-----------------------------------------

const getTopic = async (request, response) => {
    try {
        const { topic } = request.query;
        const findTopic = await projetos.find({ topic: topic });
        response.status(200).json(findTopic);
    } catch (err) {
        response.status(500).send({ message: err.message });
    }
}

//------------------------------------------

const getByState = async (request, response) => {
    try {
        const { state } = request.query;
        const findEstado = await projetos.find({ state: state });
        response.status(200).json(findEstado);
    } catch (err) {
        response.status(500).send({ message: err.message });
    }
}




//-------------------------------------------

//const addProject = (request, response) => {
//    try {
//        let nameRequest = request.body.name
//        let stateRequest = request.body.state
//        let topicRequest = request.body.topic
//       let descriptionRequest = request.body.description
//        let formatRequest = request.body.format
//
//        let novoProjeto = {
//            id: Math.floor(Date.now() * Math.random()).toString(36),
//             name: nameRequest,
//             state: stateRequest,
//             topic: topicRequest,
//             description: descriptionRequest,
//             format: formatRequest
//         }
//         projetos.push(novoProjeto)
//         response.status(201).json([{
//             mensage: "Projeto cadastrado",
//             novoProjeto
//         }])
//     } catch (err) {
//         console.log(err)
//         response.status(500).send([{
//             mensage: "Erro ao cadastrar"
//         }])
//     }
// }


// const addProject = async (require, response) => {
//     try {
//         const { name, state, topic, description, format } = require.body

//         const newproject = new projetos({
//             name, state, topic, description, format
//         })

//         const savedproject = await newproject.save()
//         response.status(201).json(savedproject)

//     } catch (error) {
//         console.error(error)
//         response.status(500).json({ message: error.message })
//     }
// }


//--------------------------------------------



const patchUpdateFormat = (request, response) => {
    const idRequest = request.params.id
    let novoFormato = request.body.formato

    formatoFiltrado = projetos.find(projeto => projeto.id == idRequest)

    formatoFiltrado.formato = novoFormato

    response.status(200).json([{

        "mensagem": "Formato atualizado",
        formatoFiltrado
    }])
}
//------------------------------------

const putUpdateProjectId = (request, response) => {

    const idRequest = request.params.id
    let projetoRequest = request.body

    let indexEncontrado = projetos.findIndex(projeto => projeto.id == idRequest)

    projetos.splice(indexEncontrado, 1, projetoRequest)

    response.status(200).json([{
        "message": "Projeto atualizado",
        projetos

    }])
}

//---------------------------------------

//const deleteProject = (request, response) => {
//     const idRequest = request.params.id
//     const indexProjeto = projetos.findIndex(projeto => projeto.id == idRequest)

//     projetos.splice(indexProjeto, 1)

//     response.status(200).json([{
//         "message": "Projeto deletado",
//         "delete": idRequest,
//         projetos
//     }])
// }
//------------------------------------------


const deleteProject = async (request, response) => {
    try {
        const { id } = request.params
        const deleteProjeto = await projetos.findByIdAndDelete(id)
        const message = `Projeto ${deleteProjeto.name} foi deletado com sucesso.`
        response.status(200).json({ message })
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}










module.exports = {
    getAddProject,
    getAllProjects,
    getIdProject,
    getTopic,
    getByState,
    patchUpdateFormat,
    putUpdateProjectId,
    deleteProject,

}