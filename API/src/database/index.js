const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Curso = require('../models/Curso');
const Turma = require('../models/Turma');
const Aluno = require('../models/Aluno');

// User = require('../models/User');
//const Address = require('../models/Address');
// Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig);

Curso.init(connection);
Turma.init(connection);
Aluno.init(connection);


//console.log(connection);

// User.init(connection);
// Address.init(connection);
// Tech.init(connection);
// User.associate(connection.models);
// Address.associate(connection.models);
// Tech.associate(connection.models);

module.exports = connection;

