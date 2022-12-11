INSERT INTO paciente(nome, cpf, data_de_nascimento, telefone, endereco, email, alergia, flag_maior_idade, responsavel, login, senha)
VALUES('Caroline','462.149.460-08', '1996-03-07', '21 945784578', 'Copacabana RJ', 'caroline@email.com', 'benzetacil', 1, "NÃO TEM", 'carolineteste', 'carolineteste')

INSERT INTO paciente(nome, cpf, data_de_nascimento, telefone, endereco, email, alergia, flag_maior_idade, responsavel, login, senha)
VALUES('Igor','462.149.460-08', '1996-03-07', '21 945784578', 'Copacabana RJ', 'igor@email.com', 'benzetacil', 1, "NÃO TEM", 'igorteste', 'igorteste')

INSERT INTO paciente(nome, cpf, data_de_nascimento, telefone, endereco, email, alergia, flag_maior_idade, responsavel, login, senha)
VALUES('Arthur','462.149.460-08', '1996-03-07', '21 945784578', 'Copacabana RJ', 'arthur@email.com', 'benzetacil', 1, "NÃO TEM", 'arthurteste', 'arthurteste')

INSERT INTO paciente(nome, cpf, data_de_nascimento, telefone, endereco, email, alergia, flag_maior_idade, responsavel, login, senha)
VALUES('Thiago','462.149.460-08', '1996-03-07', '21 945784578', 'Copacabana RJ', 'thiago@email.com', 'benzetacil', 1, "NÃO TEM", 'thiagoteste', 'thiagoteste')

INSERT INTO medico(nome, cpf, data_de_nascimento, telefone, endereco, email, especialidade, login, senha)
VALUES('Dr Marcus','462.149.460-08', '1996-03-07', '21 945784578', 'Copacabana RJ', 'marcus@email.com', 'Dermatologista', 'marcusteste', 'marcusteste')

INSERT INTO medico(nome, cpf, data_de_nascimento, telefone, endereco, email, especialidade, login, senha)
VALUES('Dra Amanda','462.149.460-08', '1996-03-07', '21 945784578', 'Copacabana RJ', 'amanda@email.com', 'Dermatologista', 'amandateste', 'amandateste')

INSERT INTO medico(nome, cpf, data_de_nascimento, telefone, endereco, email, especialidade, login, senha)
VALUES('Dra Viviane','462.149.460-08', '1996-03-07', '21 945784578', 'Copacabana RJ', 'viviane@email.com', 'Dermatologista', 'vivianeteste', 'vivianeteste')

INSERT INTO agendamento(id_medico, id_paciente, data_hora_agendamento)
VALUES(4, 4, '2022-12-27 00:00');

