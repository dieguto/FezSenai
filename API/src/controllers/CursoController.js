const Curso = require('../models/Curso');

module.exports = {
  async listarCursos(req, res) {
    const tbl_cursos = await Curso.findAll();
    return res.json(tbl_cursos);
  }

};