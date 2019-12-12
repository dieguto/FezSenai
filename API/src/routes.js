const express = require('express');

// Declaração das Controllers
const CursoController = require('./controllers/CursoController');
const TurmaController = require('./controllers/TurmaController');
const AlunoController = require('./controllers/AlunoController');

const routes = express.Router();

routes.get('/batata', (req, res) => {
    res.send("lalala")
});



routes.get('/cursos', CursoController.listarCursos);

routes.get('/turmas', TurmaController.listarTurmas);

routes.get('/alunos', AlunoController.listarAlunos);


routes.post('/alunos', AlunoController.cadastrarAluno);

routes.get('/alunos/login', AlunoController.loginAluno);



// routes.post('/users', UserController.store);

// routes.get('/users/:user_id/addresses', AddressController.index);
// routes.get('/report', ReportController.show);

module.exports = routes;