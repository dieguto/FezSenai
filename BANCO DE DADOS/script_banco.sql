create database db_fez_senai;
use db_fez_senai;

CREATE TABLE tbl_aluno (
    id_aluno INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    celular VARCHAR(20) NOT NULL,
    status_formado TINYINT(1) DEFAULT 0,
    data_inicio DATE NOT NULL,
    data_conclusao DATE NOT NULL,
    id_turma INT NOT NULL,
    curriculo VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    CONSTRAINT fk_id_turma FOREIGN KEY (id_turma)
        REFERENCES tbl_turma (id_turma)
);


CREATE TABLE tbl_turma (
    id_turma INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    semestre INT NOT NULL,
    periodo CHAR(1) NOT NULL,
    id_curso INT NOT NULL,
    CONSTRAINT fk_id_curso FOREIGN KEY (id_curso)
        REFERENCES tbl_curso (id_curso)
);

CREATE TABLE tbl_curso (
    id_curso INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sigla VARCHAR(10) NOT NULL
);
