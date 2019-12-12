const Aluno = require('../models/Aluno');

module.exports = {
    
  async listarAlunos(req, res) {
    const tbl_alunos = await Aluno.findAll();
    return res.json(tbl_alunos);
  },

  async cadastrarAluno(req, res) {
    const { id_aluno, nome, data_nascimento, username, email, celular , status_formado, data_inicio, data_conclusao, id_turma, curriculo, foto, senha } = req.body;

    if(this.verificarEmailCadastrado(req.body) === "pode cadastrar"){
      const alunos = await Aluno.create({ id_aluno, nome, data_nascimento, username, email, celular , status_formado, data_inicio, data_conclusao, id_turma, curriculo, foto, senha }).then(function(alunoCadastrado){

          if(alunoCadastrado){
              resultado = alunoCadastrado;
              return res.json(alunos);
          }


      })
    }

  },

  async verificarEmailCadastrado(aluno){
    
    const tbl_alunos = await Aluno.findOne({where:{email:aluno.email}}).then((alunoJaCadastrado)=>{
      if(alunoJaCadastrado){
        return res.send("aluno já cadastrado")
      }

      return res.send("pode cadastrar")
    })
  },

  async loginAluno(req, res) {

    const { username, senha } = req.body;
    const tbl_alunos = await Aluno.findOne({where:{username : username, senha :  senha}}).then(function(alunoLogado){

        if(alunoLogado){

            resultado = alunoLogado;

        }else if(!alunoLogado){
            
            resultado = "Aluno não encontrado!";

        }
        
        return res.send(resultado);

    }).catch(
        err => 
        console.log(err)
    );
  },


};



