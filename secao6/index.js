const express = require('express');

const server = express();

server.use(express.json());

//Query params = ?nome=NodeJS
//Route params = /curso/2
//Resquest body = { nome: 'NodeJS', tipo: 'Back-end',               }

//CRUD Create, Read, Update, Delete

const cursos = ['NodeJS', 'JavaScript', 'React Native'];

//Middleware Global
server.use((req, res, next)=>{
    console.log(`URL CHAMADA: ${req.url}`);

    return next();
})

function checkCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({error: "Nome do curso obrigatório!"});
    }

    return next();
}

function checkIndexCurso(req, res, next){
    const curso = cursos[req.params.index];
    if(!curso){
        return res.status(400).json({error: "O Código do Curso Não Existe!"});
    }

    req.curso = curso;

    return next();
}

server.get('/cursos', (req, res) =>{
    return res.json(cursos);
});

server.get('/cursos/:index', checkIndexCurso, (req, res) => {
    return res.json(req.curso);
});

//CRIANDO UM NOVO CURSO
server.post('/cursos', checkCurso, (req, res) =>{
    const {name} = req.body;
    cursos.push(name);
    
    return res.json(cursos);
});

//ATUALIZANDO UM CURSO
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) =>{
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//REMOVENDO UM CURSO
server.delete('/cursos/:index', checkIndexCurso, (req, res) =>{
    const {index} = req.params;

    cursos.splice(index,1);

    //return res.json(cursos);
    //return res.json({"message": "Curso deletado com sucesso!"});
    return res.send();
});

server.listen(3000);

//console.log(express);