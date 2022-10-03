create database medclock

use medclock

CREATE TABLE `paciente` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `data_de_nascimento` timestamp NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `alergia` varchar(200),
  `flag_maior_idade` int,
  `responsavel` varchar(255) NOT NULL DEFAULT ('NÃO TEM'),
  `login` varchar(20) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `dt_criacao` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `medico` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `data_de_nascimento` timestamp NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `especialidade` varchar(100) NOT NULL,
  `login` varchar(20) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `dt_criacao` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `agendamentos` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_medico` int NOT NULL,
  `id_paciente` int NOT NULL,
  `data_hora_atendimento` timestamp NOT NULL,
  `dt_criacao` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

ALTER TABLE `agendamentos` ADD CONSTRAINT `FK_MEDICO` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id`);

ALTER TABLE `agendamentos` ADD CONSTRAINT `FK_PACIENTE` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id`);