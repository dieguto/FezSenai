const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
  static init(sequelize) {
    super.init({
      id_turma: { type: DataTypes.INTEGER, primaryKey: true },
      semestre: DataTypes.INTEGER,
      periodo: DataTypes.CHAR,
      id_curso: {
       type: DataTypes.INTEGER,
       allowNull: false,
       references: {
            model: 'Curso',
            key: 'id_curso'
        }
      } 

    }, {
      sequelize, timestamps:  false, 
      tableName : "tbl_turma",
      
    })
  }
  
}

module.exports = Turma;