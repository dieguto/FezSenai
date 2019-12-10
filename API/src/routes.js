const express = require('express');
const CursoController = require('./controllers/CursoController');

const routes = express.Router();

routes.get('/batata', (req, res) => {
    res.send("lalala")
});

routes.get('/cursos', CursoController.index);



// routes.post('/users', UserController.store);

// routes.get('/users/:user_id/addresses', AddressController.index);
// routes.get('/report', ReportController.show);

module.exports = routes;