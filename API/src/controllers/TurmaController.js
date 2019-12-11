const Turma = require('../models/Turma');

module.exports = {
  async listarTurmas(req, res) {
    const tbl_turma = await Turma.findAll();
    return res.json(tbl_turma);
  }
}