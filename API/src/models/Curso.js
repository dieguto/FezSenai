const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(sequelize) {
    super.init({
      id_curso: { type: DataTypes.INTEGER, primaryKey: true },
      nome: DataTypes.STRING,
      sigla: DataTypes.STRING,

    }, {
      sequelize, timestamps:  false, 
      tableName : "tbl_cursos"
    })
  }
  
}

module.exports = Curso;