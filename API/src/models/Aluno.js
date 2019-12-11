const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init({
      id_aluno: { type: DataTypes.INTEGER, primaryKey: true },
      nome: DataTypes.STRING,
      data_nascimento: DataTypes.DATE,
      username : { type: DataTypes.STRING, unique: true},
      email : DataTypes.STRING,
      celular : DataTypes.STRING,
      status_formado : DataTypes.BOOLEAN,
      data_inicio : DataTypes.DATE,
      data_conclusao : DataTypes.DATE,
      id_turma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
             model: 'Turma',
             key: 'id_turma'
         }
       },
       curriculo : DataTypes.STRING,
       foto : DataTypes.STRING,
       senha : DataTypes.STRING
       

    }, {
      sequelize, timestamps:  false, 
      tableName : "tbl_aluno"
    })
  }
  
}

module.exports = Aluno;