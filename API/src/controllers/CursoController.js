const Curso = require('../models/Curso');

module.exports = {
  async index(req, res) {
    const tbl_cursos = await Curso.findAll();
    return res.json(tbl_cursos);
  }

//   async store(req, res) {
//     const { id_curso, nome, sigla } = req.body;

//     const cursos = await User.create({ name, email });

//     return res.json(cursos);
//   }
};